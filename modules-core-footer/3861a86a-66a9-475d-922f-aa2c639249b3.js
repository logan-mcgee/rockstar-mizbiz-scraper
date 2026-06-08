try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3861a86a-66a9-475d-922f-aa2c639249b3", e._sentryDebugIdIdentifier = "sentry-dbid-3861a86a-66a9-475d-922f-aa2c639249b3")
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
  [6542], {
    3692(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => y,
        AlertBanner: () => p,
        Avatar: () => w,
        Badge: () => b,
        Body: () => le,
        Breadcrumbs: () => m,
        Button: () => N.$,
        Checkbox: () => d,
        ChipGroup: () => x,
        Code: () => ce,
        Dialog: () => _,
        Display: () => fe,
        Divider: () => q,
        Dropdown: () => n,
        Heading: () => pe,
        IconButton: () => z.K,
        Label: () => ve,
        Lightbox: () => s,
        Loader: () => ee,
        Pagination: () => j,
        Popover: () => C,
        ProgressBar: () => O,
        RadioGroup: () => c,
        ScrollArea: () => g,
        Spinner: () => te.y,
        Switch: () => o,
        Tag: () => h,
        Text: () => ge,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => be,
        Toast: () => v,
        Tooltip: () => a
      });
      var a = {};
      r.r(a), r.d(a, {
        Arrow: () => pt,
        Content: () => yt,
        Portal: () => ht,
        Root: () => ct,
        Trigger: () => ft,
        useTooltipContext: () => ut
      });
      var s = {};
      r.r(s), r.d(s, {
        Caption: () => kt,
        Close: () => At,
        Content: () => zt,
        Controls: () => St,
        CssVars: () => qt,
        Download: () => Mt,
        Image: () => It,
        Keyboard: () => Vt,
        LightboxContext: () => bt,
        OpenIcon: () => Ct,
        Overlay: () => Nt,
        Portal: () => Ot,
        Reset: () => Et,
        Root: () => gt,
        RootImplContext: () => _t,
        Thumbnail: () => xt,
        Trigger: () => jt,
        Zoom: () => Tt,
        ZoomPan: () => Pt
      });
      var n = {};
      r.r(n), r.d(n, {
        Content: () => vr,
        Description: () => xr,
        Hint: () => Cr,
        Label: () => jr,
        Option: () => Or,
        OptionIcon: () => zr,
        OptionText: () => Nr,
        Portal: () => Pr,
        Root: () => hr,
        ScrollArea: () => br,
        StatusIcon: () => Dr,
        StatusRoot: () => Rr,
        StatusText: () => Ir,
        Trigger: () => gr,
        TriggerIcon: () => wr,
        TriggerText: () => _r,
        Viewport: () => mr,
        useDropdownContext: () => pr
      });
      var o = {};
      r.r(o), r.d(o, {
        Description: () => Qr,
        Input: () => Hr,
        Label: () => Kr,
        Root: () => Ur,
        useSwitchContext: () => Wr
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Yr,
        CheckMD: () => $r,
        CheckXL: () => ea,
        DashLG: () => ra,
        DashMD: () => ta,
        DashXL: () => aa
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => wa,
        ErrorText: () => ja,
        Group: () => Oa,
        GroupDescription: () => za,
        GroupErrorText: () => Ra,
        GroupItems: () => Pa,
        GroupLabel: () => Na,
        Input: () => ga,
        Label: () => _a,
        Root: () => ba,
        useGroupContext: () => Ca
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Ga,
        Hint: () => Wa,
        Input: () => Fa,
        Label: () => Xa,
        Root: () => Za,
        RootContext: () => qa,
        StatusIcon: () => Ha,
        StatusRoot: () => Ua,
        StatusText: () => Ka,
        useTextAreaContext: () => Ba
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => ws,
        DotMD: () => _s,
        DotXL: () => js
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => cs,
        Input: () => Cs,
        Label: () => us,
        Option: () => xs,
        OptionDescription: () => Ns,
        OptionLabel: () => Os,
        Options: () => ls,
        Root: () => ds,
        StatusIcon: () => ys,
        StatusRoot: () => fs,
        StatusText: () => ps,
        useRadioGroupContext: () => is
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Ks,
        Control: () => Ws,
        Description: () => Js,
        Hint: () => Gs,
        Icon: () => Hs,
        Input: () => Us,
        Label: () => Fs,
        PasswordButton: () => Qs,
        Root: () => Xs,
        StatusIcon: () => Ys,
        StatusRoot: () => $s,
        StatusText: () => en
      });
      var y = {};
      r.r(y), r.d(y, {
        Body: () => Cn,
        CloseButton: () => kn,
        Description: () => Pn,
        ErrorText: () => In,
        Footer: () => Dn,
        Header: () => xn,
        Icon: () => Nn,
        Link: () => Rn,
        Root: () => jn,
        RootContext: () => _n,
        Title: () => zn,
        iconStatusMap: () => On,
        useAlertContext: () => wn
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => Kn,
        CloseButton: () => $n,
        Description: () => Hn,
        Icon: () => Un,
        Link: () => Jn,
        PaginationCounter: () => ro,
        PaginationNav: () => Yn,
        PaginationNextButton: () => eo,
        PaginationPrevButton: () => to,
        PaginationViewport: () => Qn,
        Root: () => Gn,
        RootContext: () => Xn,
        iconStatusMap: () => Wn,
        useAlertBannerContext: () => Fn
      });
      var h = {};
      r.r(h), r.d(h, {
        CloseButton: () => bo,
        Icon: () => mo,
        Label: () => vo,
        Root: () => ho,
        RootContext: () => yo,
        useTagContext: () => po
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => Ao,
        CloseButton: () => Eo,
        Description: () => Lo,
        Icon: () => To,
        Provider: () => Ro,
        Root: () => So,
        RootContext: () => Io,
        Viewport: () => Do,
        iconAppearanceMap: () => Vo,
        useToastContext: () => ko
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => Yo,
        Item: () => $o,
        OverflowMenu: () => ei,
        OverflowMenuItem: () => ti,
        Root: () => Jo,
        RootContext: () => Qo,
        useBreadcrumbsContext: () => Ko
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => fi,
        Label: () => ci,
        Root: () => ui,
        useBadgeContext: () => li
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => Oi,
        Root: () => wi,
        Scrollbar: () => xi,
        Thumb: () => Ci,
        Viewport: () => ji
      });
      var _ = {};
      r.r(_), r.d(_, {
        ActionArea: () => Ki,
        CloseButton: () => Hi,
        Content: () => qi,
        Description: () => Zi,
        Footer: () => Qi,
        Header: () => Gi,
        HeaderButton: () => Ui,
        HeaderTitle: () => Wi,
        Layout: () => Fi,
        Overlay: () => Mi,
        Portal: () => Ei,
        Root: () => Vi,
        ScrollArea: () => Xi,
        Title: () => Bi,
        Trigger: () => Ai
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => hd,
        Root: () => pd,
        StatusIndicator: () => vd,
        useAvatarContext: () => yd
      });
      var j = {};
      r.r(j), r.d(j, {
        Controls: () => Rd,
        Dropdown: () => Ld,
        DropdownLabel: () => Sd,
        Ellipsis: () => Pd,
        Item: () => Od,
        Label: () => Td,
        Next: () => zd,
        Option: () => Vd,
        Pages: () => Cd,
        Prev: () => Nd,
        ResultsPerPage: () => kd,
        Root: () => xd
      });
      var x = {};
      r.r(x), r.d(x, {
        Icon: () => rl,
        Item: () => tl,
        Label: () => sl,
        Root: () => el,
        StatusIndicator: () => al,
        useChipGroupContext: () => Yd
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => ml,
        Arrow: () => gl,
        Close: () => wl,
        Content: () => bl,
        Portal: () => _l,
        Root: () => yl,
        RootContext: () => fl,
        Trigger: () => pl,
        TriggerButton: () => vl
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => ql,
        Label: () => Bl,
        Root: () => Al,
        Track: () => Ml,
        UnitLabel: () => Zl
      });
      var N = r(179),
        z = r(6789),
        P = r(9793),
        R = r(4921),
        D = r(4637),
        I = r(4173);

      function k(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? S(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = k(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function V(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var T, A, E = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        M = (T = {
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
          var t = T.defaultClassName,
            r = L(L({}, T.defaultVariants), e);
          for (var a in r) {
            var s, n = null !== (s = r[a]) && void 0 !== s ? s : T.defaultVariants[a];
            if (null != n) {
              var o = n;
              "boolean" == typeof o && (o = !0 === o ? "true" : "false");
              var i = T.variantClassNames[a][o];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of T.compoundVariants) E(d, r, T.defaultVariants) && (t += " " + l);
          return t
        }, A.variants = () => Object.keys(T.variantClassNames), A.classNames = {
          get base() {
            return T.defaultClassName.split(" ")[0]
          },
          get variants() {
            return V(T.variantClassNames, e => V(e, e => e.split(" ")[0]))
          }
        }, A);
      const q = (0, D.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: a = !1,
        asChild: s,
        testId: n,
        ...o
      }, i) => {
        const d = "horizontal" !== t || a ? "div" : "hr",
          l = a || "hr" === d ? void 0 : "separator",
          u = s ? I.DX : d;
        return (0, P.jsx)(u, {
          ref: i,
          className: (0, R.$)(M({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": n,
          ...o
        })
      });
      var B = r(9353),
        Z = r(819),
        X = r(8251);

      function F(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function G(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? G(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = F(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function U(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var H = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        K = "var(--foundry_9dxgbc2)",
        Q = "var(--foundry_9dxgbc3)",
        J = (e => {
          var t = t => {
            var r = e.defaultClassName,
              a = W(W({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) H(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return U(e.variantClassNames, e => U(e, e => e.split(" ")[0]))
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
        $ = "var(--foundry_9dxgbc0)",
        Y = "var(--foundry_9dxgbc1)";
      const ee = (0, D.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: a,
        label: s,
        size: n = "MD",
        ...o
      }, i) => {
        const d = (0, X.zQ)(),
          l = "string" == typeof n ? n : n?.[d] ?? n.default ?? "MD",
          u = (0, B.v6)({
            className: J({
              size: l
            }),
            "data-testid": t,
            style: (0, Z.DI)({
              [$]: a?.pulseColorBackground,
              [Y]: a?.pulseColorForeground,
              [K]: a?.gradientColorBackground,
              [Q]: a?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": s
          }, o),
          c = e ? I.DX : "div";
        return (0, P.jsx)(c, {
          ref: i,
          ...u,
          children: e ? (0, P.jsx)(I.xV, {
            children: r
          }) : (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, P.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });
      var te = r(4889);

      function re(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ae(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ae(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = re(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ae(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ne(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var oe = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        ie = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = se(se({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) oe(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ne(e.variantClassNames, e => ne(e, e => e.split(" ")[0]))
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
        size: a = "MD",
        ...s
      }, n) => {
        const o = e ? I.DX : "p",
          i = (0, B.v6)({
            className: de({
              size: a,
              appearance: r
            })
          }, s);
        return (0, P.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...i
        })
      });
      var ue = ie({
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
      const ce = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...a
        }, s) => {
          const n = e ? I.DX : "p",
            o = (0, B.v6)({
              className: ue({
                appearance: r
              })
            }, a);
          return (0, P.jsx)(n, {
            ref: s,
            "data-testid": t,
            ...o
          })
        }),
        fe = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = e ? I.DX : "h1",
            n = (0, B.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, P.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...n
          })
        });
      var ye = ie({
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
      const pe = (0, D.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...a
      }, s) => {
        const n = e ? I.DX : `h${7===t?6:t}`,
          o = (0, B.v6)(a, {
            className: ye({
              level: t
            })
          });
        return (0, P.jsx)(n, {
          ref: s,
          "data-testid": r,
          ...o
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
      const ve = (0, D.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: a = "MD",
        ...s
      }, n) => {
        const o = e ? I.DX : "p",
          i = (0, B.v6)({
            className: he({
              size: a,
              appearance: r
            })
          }, s);
        return (0, P.jsx)(o, {
          ref: n,
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
        ge = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...a
        }, s) => {
          const n = e ? I.DX : be[r] || "span",
            o = (0, B.v6)(a, {
              className: me({
                semantic: r
              })
            });
          return (0, P.jsx)(n, {
            ref: s,
            "data-testid": t,
            ...o
          })
        });
      var _e = r(8528),
        we = r(3529),
        je = r(9206),
        xe = r(4811);
      const Ce = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Oe = ([e, t]) => ({
        x: e,
        y: t
      }), Ne = (e, t) => (e.x = t.x, e.y = t.y, e), ze = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Pe = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Re = (e, t, r) => Math.min(Math.max(e, t), r);
      var De = r(4);

      function Ie(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ke(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ke(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = Ie(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Le(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var Ve = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Te = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = Se(Se({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Ve(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Le(e.variantClassNames, e => Le(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ae = Te({
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
        Ee = Te({
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
      we.os.registerPlugin(je.L);
      const Me = {
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
        Be = (0, Z.Tm)("var(--foundry_1a74xwb0)");
      var Ze = r(888);
      const Xe = {
        "en-US": r.e(4974).then(r.bind(r, 4974)),
        "de-DE": r.e(5389).then(r.bind(r, 5389)),
        "es-ES": r.e(4235).then(r.bind(r, 4235)),
        "es-MX": r.e(5038).then(r.bind(r, 5038)),
        "fr-FR": r.e(9947).then(r.bind(r, 9947)),
        "it-IT": r.e(2837).then(r.bind(r, 2837)),
        "ja-JP": r.e(622).then(r.bind(r, 622)),
        "ko-KR": r.e(4756).then(r.bind(r, 4756)),
        "pl-PL": r.e(9447).then(r.bind(r, 9447)),
        "pt-BR": r.e(8915).then(r.bind(r, 8915)),
        "ru-RU": r.e(6501).then(r.bind(r, 6501)),
        "zh-CN": r.e(4572).then(r.bind(r, 4572)),
        "zh-TW": r.e(4144).then(r.bind(r, 4144))
      };
      class Fe {
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
            a = this.slide.panAreaSize.safeArea["x" === e ? "w" : "h"] + 2 * this.slide.panAreaSize.safeArea[e];
          this.center[e] = this.currZoomLevel === this.slide.zoomLevels.initial ? Math.round((r - t - (r - a)) / 2) : Math.round((r - t) / 2), this.max[e] = t > r ? Math.round(r - t) : this.center[e], this.min[e] = t > r ? 0 : this.center[e]
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
          return r ? t : Re(t, this.max[e], this.min[e])
        }
      }
      class Ge {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Pe(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Pe(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Pe(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class We {
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
      class Ue {
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
            delta: [r, a]
          } = e, s = t > 1, n = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && n && !s ? (this.setPanWithFriction("y", this.slide.pan.y + a, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && n ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + a))
        }
        end(e) {
          const t = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || t || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [t, r]
        }) {
          const a = {
              x: t,
              y: r
            },
            s = e;
          if (s.type.includes("cancel")) return;
          const n = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              a = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + a * a)
          })(this.prevTap, a) < 25 && this.slide.tapHandler.doubleTap(a, s)) : (Ne(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(a, s), this.clearTapTimer()
          }, n))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, a]
          } = t, s = "x" === e ? r : a, n = this.slide.pan[e], o = n + s;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(n),
              t = this.getVerticalDragRatio(o);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const i = this.slide.bounds.correctPan(e, o);
          n !== i && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = i)
        }
        setPanWithFriction(e, t, r) {
          if (this.slide.bounds.correctPan(e, t) !== t || r) {
            const a = Math.round(t - this.slide.pan[e]);
            this.slide.pan[e] += a * (r || .35)
          } else this.slide.pan[e] = t
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class He {
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
              a = this.slide.panAreaSize.h / t;
            this.width = a > r ? this.slide.panAreaSize.w : e * a, this.height = r > a ? this.slide.panAreaSize.h : t * r
          }
        }
      }
      class Ke {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: t,
          delta: [r, a]
        }) {
          if (e) {
            let e = -a;
            1 === t.deltaMode ? e *= .05 : e *= t.deltaMode ? 1 : .002, e = 2 ** e;
            const r = this.slide.currZoomLevel * e;
            this.slide.zoomTo(r, {
              x: t.x,
              y: t.y
            })
          } else 1 === t.deltaMode && (r *= 18, a *= 18), this.slide.panTo(this.slide.pan.x - r, this.slide.pan.y - a)
        }
      }
      class Qe extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, a) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = a
        }
      }
      class Je extends We {
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
        doClickOrTapAction(e, t, r, a) {
          if (!this.dispatch(e, new Qe(e, t, r, a)).defaultPrevented) switch (this.options[e]) {
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
      class $e {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Oe(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Ne(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            a = this.slide.zoomLevels.max;
          this.zoomPoint = Oe(e);
          let s = 1 / this.startZoomDistance * t * this.startZoomLevel;
          s > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), s < r ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (r - s) / (r / 1.2)) : s = r - .15 * (r - s) : s > a && (s = a + .05 * (s - a)), this.slide.pan.x = this.calculatePanForZoomLevel("x", s), this.slide.pan.y = this.calculatePanForZoomLevel("y", s), this.slide.setZoomLevel(s, s >= this.slide.zoomLevels.initial)
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
          let r, a = !0;
          t < this.slide.zoomLevels.initial ? r = this.slide.zoomLevels.initial : t > this.slide.zoomLevels.max ? r = this.slide.zoomLevels.max : (a = !1, r = t), this.slide.getControlsOpacity();
          const s = this.slide.getControlsOpacity() < 1,
            n = Ne({
              x: 0,
              y: 0
            }, this.slide.pan);
          let o = Ne({
            x: 0,
            y: 0
          }, n);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Ne(this.startPan, n)), a && (o = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), o = {
            x: this.slide.bounds.correctPan("x", o.x),
            y: this.slide.bounds.correctPan("y", o.y)
          }, this.slide.setZoomLevel(t, !1), d = n, ((i = o).x !== d.x || i.y !== d.y || a || s) && (Ne(this.slide.pan, o), this.slide.setZoomLevel(r))
        }
      }
      class Ye {
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
      class et extends We {
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
          actionOptions: a,
          panAreaOptions: s,
          dragOptions: n
        }) {
          super(), this.width = e, this.height = t, this.opener = new He({
            slide: this
          }), this.bounds = new Fe({
            slide: this
          }), this.dragHandler = new Ue({
            options: n,
            slide: this
          }), this.scrollWheel = new Ke({
            slide: this
          }), this.zoomHandler = new $e({
            slide: this
          }), this.zoomLevels = new Ge({
            options: r,
            slide: this
          }), this.tapHandler = new Je({
            options: a,
            slide: this
          }), this.panAreaSize = new Ye({
            options: s
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
          const a = this.currZoomLevel;
          e = Pe(e), r || (e = Re(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, a), this.pan.y = this.calculateZoomToPanOffset("y", t, a), ze(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), ze(this.pan)
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
          const a = this.currZoomLevel / r;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * a + t[e])
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
      var at = r(2760);
      const st = (0, Ze.YK)({
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
      var nt = "foundry_bc732x1";
      const ot = (0, D.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, a) => ((0, De.vC)(e, e => r?.(e), [r]), (0, P.jsx)(le, {
        size: "XS",
        className: (0, R.$)("foundry_bc732x0", {
          [nt]: t
        }),
        asChild: !0,
        children: (0, P.jsx)("kbd", {
          ref: a,
          children: e
        })
      })));
      var it = r(818),
        dt = r(5173);
      const lt = (0, D.createContext)(null);

      function ut() {
        const e = (0, D.useContext)(lt);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const ct = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: a,
          ...s
        }) => {
          const [n = !1, o] = (0, _e.ic)({
            defaultProp: r,
            prop: s.isOpen,
            onChange: a
          });
          return (0, P.jsx)(dt.Kq, {
            delayDuration: t,
            children: (0, P.jsx)(lt.Provider, {
              value: {
                isOpen: n,
                ...s
              },
              children: (0, P.jsx)(dt.bL, {
                open: n,
                onOpenChange: o,
                children: e
              })
            })
          })
        },
        ft = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, a) => (0, P.jsx)(dt.l9, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: a,
          children: e
        })),
        yt = (0, D.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: a = "center",
          alignOffset: s = 0,
          avoidCollisions: n = !0,
          sticky: o = "partial",
          ...i
        }, d) => {
          const {
            isOpen: l
          } = ut(), u = (0, _e.jt)(), c = (0, it.CS)(dt.UC), f = (0, it.pn)(l, {
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
            immediate: u
          }), y = (0, B.v6)({
            "data-testid": e,
            side: t,
            align: a,
            sticky: o,
            sideOffset: r,
            alignOffset: s,
            avoidCollisions: n,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, P.jsx)(c, {
            ...y,
            style: e,
            ref: d
          }))
        }),
        pt = (0, D.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, B.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, P.jsx)(dt.i3, {
            ...r,
            ref: t
          })
        }),
        ht = dt.ZL;
      var vt = r(2699),
        mt = r(8819);
      const bt = (0, D.createContext)({
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
        gt = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: a,
          minZoomLevel: s = 100,
          maxZoomLevel: n = 300,
          zoomLevelStep: o = 100,
          clickAction: i = "close",
          doubleTapAction: d,
          tapAction: l,
          hideTrigger: u = !0,
          ...c
        }) => {
          const f = (0, X.Ym)(),
            y = (0, _e.rl)(),
            p = (0, D.useRef)(null),
            h = (0, D.useRef)(null),
            v = (0, D.useRef)(null),
            m = (0, D.useRef)(null),
            b = (0, D.useRef)(null),
            g = (0, D.useRef)(null),
            _ = (0, D.useRef)(null),
            w = (0, D.useRef)(null),
            j = (0, D.useRef)(null),
            x = (0, D.useRef)(null),
            C = (0, D.useRef)(null),
            O = (0, D.useRef)(null),
            N = (0, D.useRef)(null),
            z = (0, D.useRef)(null),
            R = (0, D.useRef)(null),
            I = (0, D.useRef)(null),
            k = (0, D.useRef)(null),
            S = (0, D.useRef)(null),
            L = (0, D.useRef)(null),
            [V = !1, T] = (0, _e.ic)({
              prop: t || a,
              onChange: r
            }),
            A = (0, D.useRef)(null);
          return A.current || (A.current = new et({
            zoomLevelOptions: {
              max: n,
              min: s,
              step: o
            },
            actionOptions: {
              click: i,
              tap: l || (y ? "toggle-controls" : "close"),
              doubleTap: d || (y ? "zoom" : "none")
            }
          })), (0, P.jsx)(Ze.Dk, {
            messages: Xe,
            locale: f,
            children: (0, P.jsx)(bt.Provider, {
              value: {
                triggerRef: p,
                triggerBorderRef: h,
                thumbnailRef: v,
                openIconRef: m,
                overlayRef: b,
                contentRef: g,
                containerRef: _,
                zoomPanRef: w,
                imageRef: j,
                placeholderRef: x,
                captionRef: C,
                controlsRef: O,
                closeRef: N,
                zoomRef: z,
                zoomInRef: R,
                zoomSliderRef: I,
                zoomOutRef: k,
                resetRef: S,
                downloadRef: L,
                open: V,
                setOpen: T,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, P.jsx)(wt, {
                ...c
              })
            })
          })
        },
        _t = (0, D.createContext)({
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
        wt = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, D.useContext)(bt), {
            onOpenChange: r,
            openAnim: a,
            close: s
          } = (() => {
            const {
              contextSafe: e
            } = (0, je.L)(), {
              slide: t,
              setOpen: r,
              hideTrigger: a,
              overlayRef: s,
              controlsRef: n,
              triggerRef: o,
              triggerBorderRef: i,
              thumbnailRef: d,
              containerRef: l,
              zoomPanRef: u,
              placeholderRef: c,
              imageRef: f
            } = (0, D.useContext)(bt), y = (0, D.useRef)(null);
            y.current || (y.current = we.os.timeline({
              defaults: Me
            }));
            const p = (0, D.useCallback)(e => {
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), we.os.set([c.current, f.current], {
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
                }), we.os.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(c.current), y.current.clear(), c.current && (y.current.to([c.current, f.current], {
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
                }), y.current.to([u.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), y.current.to([l.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), a && y.current.to([o.current, i.current], {
                  opacity: 0,
                  duration: 0
                }), y.current.to([c.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  borderRadius: t.opener.placeholderRadius,
                  clipPath: t.opener.placeholderClip,
                  duration: 0
                }), y.current.fromTo([l.current], {
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
                }, 0), y.current.fromTo([c.current, f.current], {
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
                }, 0), y.current.fromTo([u.current], {
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
                }, 0), y.current.fromTo([s.current], {
                  opacity: 0
                }, {
                  opacity: () => t.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), y.current.fromTo([n.current], {
                  opacity: 0,
                  [Be]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Be]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (y.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Ce(f.current), t.closing || (we.os.set([f.current], {
                  visibility: "visible",
                  ...qe
                }), we.os.set([c.current], {
                  visibility: "hidden",
                  ...qe
                }))))
              }),
              v = e(async () => {
                t.close(), y.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await y.current.reverse()
              }),
              m = (0, D.useCallback)(async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), r(e)
              }, [r]),
              b = (0, D.useCallback)(() => m(!1), [m]);
            return {
              onOpenChange: m,
              openAnim: h,
              close: b
            }
          })(), {
            update: n,
            zoomIn: o,
            zoomOut: i,
            zoomTo: d,
            resetZoom: l,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, je.L)(), {
              slide: r,
              imageRef: a,
              zoomPanRef: s,
              controlsRef: n,
              containerRef: o,
              placeholderRef: i
            } = (0, D.useContext)(bt), d = t(async e => {
              r.zoomTo(e), we.os.set([s.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), we.os.to([s.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), we.os.to([s.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), c = t(async () => {
              r.zoomAndPanToInitial(), we.os.to([s.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              we.os.to([n.current], {
                opacity: e,
                [Be]: t,
                ...qe
              })
            }), y = t(async () => {
              we.os.to([s.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), p = (0, D.useCallback)(() => {
              a.current && s.current && (we.os.set([s.current], {
                ...r.getCurrentTransform(),
                ...qe
              }), we.os.set([a.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...qe
              }), we.os.set([o.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, D.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", y), r.addEventListener("toggle-controls", f), r.addEventListener("resize", p), window.addEventListener("resize", r.resize.bind(r)), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", y), r.removeEventListener("toggle-controls", f), r.removeEventListener("resize", p), window.removeEventListener("resize", r.resize.bind(r))
            }), []), {
              zoomIn: l,
              zoomOut: u,
              zoomTo: d,
              resetZoom: c,
              toggleControls: f,
              update: y
            }
          })({
            close: s
          }), c = (0, B.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, P.jsx)(_t.Provider, {
            value: {
              update: n,
              openAnim: a,
              close: s,
              zoomIn: o,
              zoomOut: i,
              zoomTo: d,
              resetZoom: l,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, P.jsx)(mt.bL, {
              ...c
            })
          })
        },
        jt = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, a) {
          const s = (0, Ze.tz)(),
            {
              triggerRef: n,
              triggerBorderRef: o,
              altText: i
            } = (0, D.useContext)(bt),
            d = (0, _e.UP)(n, a),
            l = (0, B.v6)(r, {
              "data-testid": e,
              "aria-label": s.formatMessage(st.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, P.jsx)(mt.l9, {
            ref: d,
            ...l,
            children: (0, P.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: o,
              children: (0, P.jsx)(I.xV, {
                children: t
              })
            })
          })
        }),
        xt = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, a) {
          const {
            thumbnailRef: s
          } = (0, D.useContext)(bt), n = (0, _e.UP)(s, a), o = (0, B.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? I.DX : "img";
          return (0, P.jsx)(i, {
            ref: n,
            ...o
          })
        }),
        Ct = (0, D.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: a
          } = (0, D.useContext)(bt), s = (0, _e.UP)(a, r), n = (0, B.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), o = e ? I.DX : at.Maximize2;
          return (0, P.jsx)(o, {
            ref: s,
            ...n
          })
        }),
        Ot = ({
          ...e
        }) => (0, P.jsx)(mt.ZL, {
          ...e
        }),
        Nt = (0, D.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: a
          } = (0, D.useContext)(bt), s = (0, _e.UP)(a, r), n = (0, B.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, P.jsx)(mt.hJ, {
            ref: s,
            ...n
          })
        }),
        zt = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, a) {
          const {
            openAnim: s
          } = (0, D.useContext)(_t), {
            contentRef: n,
            altText: o,
            triggerRef: i
          } = (0, D.useContext)(bt), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, D.useContext)(bt), [t, r] = (0, D.useState)(e.getCursor()), a = (0, D.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, D.useEffect)(() => (e.addEventListener("zoom", a), () => {
              e.removeEventListener("zoom", a)
            }), [a]), {
              cursor: t
            }
          })(), l = [tt.xW.tokens, tt.xW.typography, tt.xW.grid, rt("dark")].join(" ");
          const u = (0, _e.UP)(n, a),
            c = (0, B.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: s,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, R.$)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, P.jsxs)(mt.UC, {
            ref: u,
            ...c,
            children: [(0, P.jsx)(I.s6, {
              children: (0, P.jsx)(mt.hE, {
                children: o
              })
            }), t]
          })
        }),
        Pt = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, a) {
          const {
            containerRef: s
          } = (0, D.useContext)(bt);
          (() => {
            const {
              contextSafe: e
            } = (0, je.L)(), {
              toggleControls: t
            } = (0, D.useContext)(_t), {
              containerRef: r,
              zoomPanRef: a,
              overlayRef: s,
              controlsRef: n,
              slide: o
            } = (0, D.useContext)(bt), i = e(e => {
              e.pinching || o.zoomHandler.pinching || (o.dragHandler.handleDrag(e), o.dragHandler.animate && !o.closing && (we.os.to([a.current], {
                ...o.getCurrentTransform(),
                ...qe
              }), we.os.to([s.current], {
                opacity: o.getOverlayOpacity(),
                ...qe
              }), we.os.to([n.current], {
                opacity: o.getControlsOpacity(),
                ...qe
              })))
            }), d = e(e => {
              e.pinching || o.zoomHandler.pinching || (o.scrollWheel.handleWheel(e), o.closing || we.os.to([a.current], {
                ...o.getCurrentTransform(),
                ...qe
              }))
            }), l = e(e => {
              !e.pinching && !o.zoomHandler.pinching || o.dragHandler.dragging || (o.zoomHandler.handleZoom(e), o.zoomHandler.animate && !o.closing && (we.os.to([a.current], {
                ...o.getCurrentTransform(),
                ...qe
              }), we.os.to([s.current], {
                opacity: o.getOverlayOpacity(),
                ...qe
              }), we.os.to([n.current], {
                opacity: o.getControlsOpacity(),
                ...qe
              })))
            }), u = (0, D.useCallback)(() => {
              o.controlsVisible || t()
            }, [, t]);
            (0, _e.iQ)({
              ref: n,
              onFocusIn: u
            }), (0, xe.useGesture)({
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
          const n = (0, _e.UP)(s, a),
            o = (0, B.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, P.jsx)("div", {
            ref: n,
            ...o,
            children: (0, P.jsxs)(Rt, {
              children: [(0, P.jsx)(Dt, {}), t]
            })
          })
        }),
        Rt = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, a) {
          const {
            zoomPanRef: s
          } = (0, D.useContext)(bt), n = (0, _e.UP)(s, a), o = (0, B.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? I.DX : "div";
          return (0, P.jsx)(i, {
            ref: n,
            ...o
          })
        }),
        Dt = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, a) {
          const {
            placeholderRef: s
          } = (0, D.useContext)(bt), n = (0, _e.UP)(s, a), o = (0, B.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? I.DX : "img";
          return (0, P.jsx)(i, {
            ref: n,
            ...o
          })
        }),
        It = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, a) {
          const {
            imageRef: s
          } = (0, D.useContext)(bt), n = (0, _e.UP)(s, a), o = (0, B.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? I.DX : "img";
          return (0, P.jsx)(i, {
            ref: n,
            ...o
          })
        }),
        kt = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, a) {
          const {
            captionRef: s
          } = (0, D.useContext)(bt), n = (0, _e.UP)(s, a), o = (0, B.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? I.DX : "p";
          return (0, P.jsx)(mt.VY, {
            asChild: !0,
            children: (0, P.jsx)(i, {
              ref: n,
              ...o
            })
          })
        }),
        St = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, a) {
          const {
            controlsRef: s
          } = (0, D.useContext)(bt);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: a,
              close: s
            } = (0, D.useContext)(_t);
            (0, De.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, De.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, De.vC)("r", a, {
              enabled: e,
              preventDefault: !0
            }), (0, De.vC)("esc", s, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const n = (0, _e.UP)(s, a),
            o = (0, B.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? I.DX : "div";
          return (0, P.jsx)(De.Hb, {
            children: (0, P.jsx)(i, {
              ref: n,
              ...o
            })
          })
        }),
        Lt = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: a,
          ...s
        }) => {
          if (!r) return (0, P.jsx)(P.Fragment, {
            children: a
          });
          const n = (0, B.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, s);
          return (0, P.jsxs)(ct, {
            delayDuration: 0,
            children: [(0, P.jsx)(ft, {
              children: a
            }), (0, P.jsxs)(yt, {
              ...n,
              children: [(0, P.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, P.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, P.jsx)(pt, {})]
            })]
          })
        },
        Vt = (0, D.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, B.v6)(e, {
            isInline: !0
          });
          return (0, P.jsx)(ot, {
            ref: t,
            ...r
          })
        }),
        Tt = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: a,
          ...s
        }, n) {
          const o = (0, Ze.tz)(),
            {
              zoomRef: i
            } = (0, D.useContext)(bt),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: u,
              zoomOut: c,
              zoomProgress: f,
              minZoomLevel: y,
              maxZoomLevel: p,
              zoomTo: h
            } = (() => {
              const {
                slide: e
              } = (0, D.useContext)(bt), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: a
              } = (0, D.useContext)(_t), [s, n] = (0, D.useState)(!1), [o, i] = (0, D.useState)(!1), [d, l] = (0, D.useState)(0), [u, c] = (0, D.useState)(0), [f, y] = (0, D.useState)(0), p = (0, D.useCallback)(() => {
                n(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), c(Math.ceil(100 * e.zoomLevels.min)), y(Math.ceil(100 * e.zoomLevels.max))
              }, []), h = (0, D.useCallback)(([e]) => {
                a(e / 100)
              }, [a]);
              return (0, D.useEffect)(() => (e.addEventListener("zoom", p), () => {
                e.removeEventListener("zoom", p)
              }), [p]), {
                zoomTo: h,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: s,
                canZoomOut: o,
                zoomProgress: d,
                minZoomLevel: u,
                maxZoomLevel: f
              }
            })(),
            v = (0, _e.UP)(i, n),
            m = (0, B.v6)(s, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? I.DX : "div";
          return (0, P.jsxs)(b, {
            ref: v,
            ...m,
            children: [(0, P.jsx)(Lt, {
              side: "left",
              enabled: r,
              content: o.formatMessage(st.ZoomInButtonLabel),
              metadata: o.formatMessage(st.ZoomInButtonTooltip, {
                shortcut: (0, P.jsx)(Vt, {
                  shortcut: "+"
                })
              }),
              children: (0, P.jsx)(z.K, {
                label: o.formatMessage(st.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Ee({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, P.jsxs)(vt.bL, {
              className: "foundry_1a74xwbt",
              max: p,
              min: y,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: h,
              children: [(0, P.jsx)(vt.CC, {
                className: "foundry_1a74xwbu",
                children: (0, P.jsx)(vt.Q6, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, P.jsx)(Lt, {
                side: "left",
                enabled: r,
                content: o.formatMessage(st.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, P.jsx)(vt.zi, {
                  className: "foundry_1a74xwbw",
                  children: (0, P.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, P.jsx)(Lt, {
              side: "left",
              enabled: r,
              content: o.formatMessage(st.ZoomOutButtonLabel),
              metadata: o.formatMessage(st.ZoomOutButtonTooltip, {
                shortcut: (0, P.jsx)(Vt, {
                  shortcut: "-"
                })
              }),
              children: (0, P.jsx)(z.K, {
                label: o.formatMessage(st.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Ee({
                  position: "bottom"
                }),
                onPress: c,
                isDisabled: !u
              })
            }), (0, P.jsx)(I.xV, {
              children: a
            })]
          })
        }),
        At = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...a
        }, s) {
          const n = (0, Ze.tz)(),
            {
              closeRef: o
            } = (0, D.useContext)(bt),
            i = (0, _e.UP)(o, s),
            d = (0, B.v6)(a, {
              "data-testid": e,
              className: Ae({
                styled: !t
              })
            }),
            l = t ? (0, P.jsx)(I.DX, {
              ref: i,
              ...d
            }) : (0, P.jsx)(z.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: n.formatMessage(st.CloseButtonLabel)
            });
          return (0, P.jsx)(Lt, {
            side: "right",
            enabled: r,
            content: n.formatMessage(st.CloseButtonLabel),
            metadata: n.formatMessage(st.CloseButtonTooltip, {
              shortcut: (0, P.jsx)(Vt, {
                shortcut: "Esc"
              })
            }),
            children: (0, P.jsx)(mt.bm, {
              asChild: !0,
              children: l
            })
          })
        }),
        Et = (0, D.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, a) {
          const s = (0, Ze.tz)(),
            n = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, D.useContext)(bt), {
                contextSafe: r
              } = (0, je.L)(), {
                resetZoom: a
              } = (0, D.useContext)(_t), [s, n] = (0, D.useState)(e.currZoomLevel !== e.zoomLevels.initial), o = r(e => {
                we.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...qe
                })
              }), i = (0, D.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                n(t), o(t)
              }, [n]);
              return (0, D.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !s,
                onPress: a,
                "aria-hidden": !s
              }
            })(),
            {
              resetRef: o
            } = (0, D.useContext)(bt),
            i = (0, _e.UP)(o, a),
            d = (0, B.v6)(r, n, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, P.jsx)(Lt, {
            side: "left",
            enabled: t,
            content: s.formatMessage(st.ResetZoomButtonLabel),
            metadata: s.formatMessage(st.ResetZoomButtonTooltip, {
              shortcut: (0, P.jsx)(Vt, {
                shortcut: "R"
              })
            }),
            children: (0, P.jsx)(z.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: s.formatMessage(st.ResetZoomButtonLabel)
            })
          })
        }),
        Mt = (0, D.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, a) {
          const s = (0, Ze.tz)(),
            {
              downloadRef: n,
              imageRef: o
            } = (0, D.useContext)(bt),
            i = (0, _e.UP)(n, a),
            d = (0, B.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, P.jsx)(Lt, {
            side: "left",
            enabled: t,
            content: s.formatMessage(st.DownloadButtonTooltip),
            children: (0, P.jsx)(z.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: s.formatMessage(st.DownloadButtonTooltip),
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
              })(o.current)
            })
          })
        }),
        qt = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Bt = r(3258);

      function Zt(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Xt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xt(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = Zt(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Gt(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var Wt = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Ut = (e => {
          var t = t => {
            var r = e.defaultClassName,
              a = Ft(Ft({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Wt(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gt(e.variantClassNames, e => Gt(e, e => e.split(" ")[0]))
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
      const Ht = (0, D.createContext)(null);

      function Kt() {
        const e = (0, D.useContext)(Ht);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Qt = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: a = "",
          errorId: s = "",
          status: n = "neutral",
          ...o
        }, i) => {
          const d = (0, B.v6)({
              className: Ut({
                status: n
              }),
              "data-testid": t
            }, o),
            l = r ? I.DX : "div";
          return (0, P.jsx)(Ht.Provider, {
            value: {
              descriptionId: a,
              errorId: s,
              status: n,
              ...o
            },
            children: (0, P.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        Jt = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, a) => {
          const {
            status: s
          } = Kt(), n = (0, B.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), o = {
            success: at.Check,
            invalid: at.X,
            neutral: at.TriangleAlert
          }, i = t ? I.DX : o[s];
          return (0, P.jsx)(i, {
            ref: a,
            ...n
          })
        }),
        $t = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, s) => {
          const {
            descriptionId: n,
            errorId: o
          } = Kt(), i = (0, B.v6)({
            "data-testid": t,
            id: o || n
          }, a), d = r ? I.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        });
      var Yt = r(428),
        er = r(2791);

      function tr(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function rr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function ar(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rr(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = tr(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sr(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var nr = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        or = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = ar(ar({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) nr(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sr(e.variantClassNames, e => sr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ir = or({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        dr = or({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        lr = or({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ur = or({
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
        cr = or({
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
        fr = or({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const yr = (0, D.createContext)(null);

      function pr() {
        const e = (0, D.useContext)(yr);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const hr = (0, D.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: a,
          isReadOnly: s,
          defaultValue: n,
          onValueChange: o,
          name: i,
          value: d,
          defaultOpen: l,
          onOpenChange: u,
          isOpen: c,
          size: f = "MD",
          status: y = "neutral",
          ...p
        }, h) => {
          const v = (0, D.useRef)(null),
            m = (0, _e.UP)(v, h),
            b = (0, D.useId)(),
            g = (0, D.useId)(),
            _ = (0, D.useId)(),
            w = (0, D.useId)(),
            j = (0, D.useId)(),
            x = (0, D.useId)(),
            [C = !1, O] = (0, _e.ic)({
              prop: c,
              defaultProp: l,
              onChange: u
            }),
            N = (0, B.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, P.jsx)(yr.Provider, {
            value: {
              labelId: b,
              errorId: g,
              descriptionId: _,
              triggerId: x,
              hintId: w,
              popoverId: j,
              defaultValue: n,
              onValueChange: o,
              value: d,
              isOpen: C,
              setIsOpen: O,
              defaultOpen: l,
              onOpenChange: u,
              isRequired: r,
              isDisabled: a,
              isReadOnly: s,
              status: y,
              size: f
            },
            children: (0, P.jsx)(er.bL, {
              required: r,
              disabled: a,
              open: C,
              onOpenChange: () => O(!s && !C),
              value: d,
              defaultValue: n,
              onValueChange: o,
              name: i,
              children: (0, P.jsx)("div", {
                ref: m,
                ...N,
                children: e
              })
            })
          })
        }),
        vr = (0, D.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const {
            popoverId: n
          } = pr(), o = (0, B.v6)({
            id: n,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: ir({
              hideDividers: e
            }),
            "data-testid": r
          }, a);
          return (0, P.jsx)(er.UC, {
            ...o,
            ref: s,
            children: (0, P.jsx)(er.LM, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        mr = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(er.LM, {
            ref: r,
            ...a
          })
        }),
        br = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, P.jsxs)(Yt.bL, {
            ...s,
            ref: a,
            children: [(0, P.jsx)(mr, {
              asChild: !0,
              children: (0, P.jsx)(Yt.LM, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, P.jsx)(Yt.Ze, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, P.jsx)(Yt.zi, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        gr = (0, D.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": a,
          asChild: s,
          ...n
        }, o) => {
          const {
            isReadOnly: i,
            status: d,
            isDisabled: l,
            labelId: u,
            hintId: c,
            triggerId: f,
            popoverId: y,
            descriptionId: p,
            isOpen: h,
            value: v,
            size: m
          } = pr(), {
            isPressed: b,
            pressProps: g
          } = (0, Bt.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), _ = (0, B.v6)({
            id: f,
            className: cr({
              size: m,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!b,
              isDisabled: !!l
            }),
            "aria-labelledby": (0, B.VW)(r, u, c),
            "aria-describedby": (0, B.VW)(a, p),
            "aria-activedescendant": v,
            "aria-controls": y,
            "aria-invalid": "invalid" === d,
            "data-state": h ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!b
          }, (0, B.cJ)(g, "onKeyDown"), n), w = s ? I.DX : er.l9;
          return (0, P.jsx)(w, {
            ..._,
            ref: o,
            children: e
          })
        }),
        _r = (0, D.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, a),
            o = t ? I.DX : "span";
          return (0, P.jsx)(o, {
            ...n,
            ref: s,
            children: (0, P.jsx)(er.WT, {
              placeholder: e
            })
          })
        }),
        wr = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, a) => {
          const {
            isDisabled: s,
            isReadOnly: n,
            isOpen: o
          } = pr(), i = o ? at.ChevronUp : at.ChevronDown, d = (0, B.v6)({
            asChild: !0,
            className: fr({
              isDisabled: n || s
            }),
            "data-testid": t
          }, r);
          return (0, P.jsx)(er.In, {
            ...d,
            ref: a,
            children: e || (0, P.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        jr = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: a = !1,
          hideRequiredAsterisk: s = !1,
          ...n
        }, o) => {
          const {
            isRequired: i,
            isDisabled: d,
            labelId: l,
            triggerId: u
          } = pr(), c = i && !s, f = (0, B.v6)({
            id: n.id || l,
            htmlFor: u,
            "data-testid": e,
            className: ur({
              showAsterisk: c,
              isDisabled: d
            })
          }, n), y = t ? I.DX : "label";
          return (0, P.jsx)(I.s6, {
            enabled: a,
            children: (0, P.jsx)(y, {
              ...f,
              ref: o,
              children: r
            })
          })
        }),
        xr = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, s) => {
          const {
            isDisabled: n,
            descriptionId: o
          } = pr(), i = (0, B.v6)({
            className: dr({
              isDisabled: n
            }),
            "data-testid": t,
            id: o
          }, a), d = r ? I.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        Cr = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const {
            hintId: n,
            isDisabled: o
          } = pr(), i = (0, B.v6)({
            className: lr({
              isDisabled: o
            }),
            "data-testid": r,
            id: n
          }, a), d = t ? I.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        Or = (0, D.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: a,
          ...s
        }, n) => {
          const o = (0, D.useRef)(null),
            i = (0, _e.UP)(o, n),
            d = (0, B.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": a
            }, s);
          return (0, P.jsx)(er.q7, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Nr = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, P.jsx)(er.p4, {
            ref: a,
            asChild: !0,
            children: (0, P.jsx)("span", {
              ...s,
              children: e
            })
          })
        }),
        zr = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, P.jsx)(er.In, {
            asChild: !0,
            ...s,
            ref: a,
            children: e
          })
        }),
        Pr = er.ZL,
        Rr = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, s) => {
          const {
            descriptionId: n,
            status: o
          } = pr(), i = (0, B.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: n,
            status: o
          }, a), d = r ? I.DX : Qt;
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        Dr = Jt,
        Ir = $t;
      var kr = r(8687),
        Sr = r(6646);

      function Lr(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Vr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function Tr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vr(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = Lr(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ar(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var Er = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Mr = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = Tr(Tr({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Er(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ar(e.variantClassNames, e => Ar(e, e => e.split(" ")[0]))
            }
          }, t
        },
        qr = Mr({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Br = Mr({
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
        Zr = Mr({
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
        Xr = Mr({
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
        Fr = Mr({
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
      const Gr = (0, D.createContext)(null);

      function Wr() {
        const e = (0, D.useContext)(Gr);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Ur = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: a,
          children: s,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          ...i
        }, d) => {
          const l = (0, B.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            u = a ? I.DX : "div",
            c = (0, D.useId)(),
            f = (0, D.useId)(),
            y = (0, D.useId)();
          return (0, P.jsx)(Gr.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: f,
              inputId: y,
              isDisabled: n,
              isReadOnly: o,
              ...i
            },
            children: (0, P.jsx)(u, {
              ...l,
              ref: d,
              children: s
            })
          })
        }),
        Hr = (0, D.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": a,
          "aria-describedby": s,
          id: n,
          isSelected: o,
          defaultSelected: i,
          onSelectedChange: d,
          name: l,
          value: u,
          ...c
        }, f) => {
          const y = (0, D.useRef)(null),
            p = (0, _e.UP)(y, f),
            {
              size: h,
              appearance: v,
              inputId: m,
              labelId: b,
              descriptionId: g,
              isDisabled: _,
              isReadOnly: w
            } = Wr(),
            j = (0, Sr.H)({
              isDisabled: _,
              isReadOnly: w,
              isSelected: o,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: x
            } = (0, kr.K)({
              id: n || m,
              "aria-labelledby": (0, B.VW)(a, b),
              "aria-describedby": (0, B.VW)(s, g),
              name: l,
              value: u,
              isDisabled: _,
              isReadOnly: w
            }, j, y),
            C = (0, B.v6)({
              className: Fr({
                appearance: v
              }),
              "data-state": j.isSelected ? "selected" : "unselected",
              "data-disabled": _ || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || _ || w || j.toggle()
              }
            }, c);
          return (0, P.jsxs)("div", {
            ...C,
            children: [(0, P.jsx)(I.s6, {
              children: (0, P.jsx)("input", {
                ...x,
                ref: p
              })
            }), (0, P.jsx)("div", {
              className: Xr({
                size: h
              }),
              "aria-hidden": "true",
              children: (0, P.jsx)("div", {
                className: Br({
                  size: h,
                  isSelected: j.isSelected
                })
              })
            })]
          })
        }),
        Kr = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: a = !1,
          ...s
        }, n) => {
          const {
            isDisabled: o,
            labelId: i,
            inputId: d,
            size: l
          } = Wr(), u = (0, B.v6)({
            id: s.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Zr({
              isDisabled: o,
              size: l
            })
          }, s), c = t ? I.DX : "label";
          return (0, P.jsx)(I.s6, {
            enabled: a,
            children: (0, P.jsx)(c, {
              ...u,
              ref: n,
              children: r
            })
          })
        }),
        Qr = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const {
            isDisabled: n,
            descriptionId: o
          } = Wr(), i = a.id || o, d = (0, B.v6)({
            className: qr({
              isDisabled: n
            }),
            "data-testid": r,
            id: i
          }, a), l = t ? I.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: s,
            children: e
          })
        });
      var Jr = r(8611);
      const $r = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Yr = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        ea = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        ta = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        ra = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        aa = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, P.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function sa(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function na(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function oa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? na(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = sa(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : na(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ia(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var da = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        la = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = oa(oa({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) da(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ia(e.variantClassNames, e => ia(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ua = la({
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
        ca = la({
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
        fa = la({
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
        ya = la({
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
        pa = la({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ha = la({
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
      const va = (0, D.createContext)(null);

      function ma() {
        const e = (0, D.useContext)(va);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const ba = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: a,
          children: s,
          ...n
        }, o) => {
          const i = (0, B.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, B.cJ)(n, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = a ? I.DX : "div",
            l = (0, D.useId)(),
            u = (0, D.useId)(),
            c = (0, D.useId)();
          return (0, P.jsx)(va.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: u,
              inputId: c,
              ...n
            },
            children: (0, P.jsx)(d, {
              ...i,
              ref: o,
              children: s
            })
          })
        }),
        ga = (0, D.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: a,
          name: s,
          onPress: n,
          onClick: o,
          "aria-describedby": d,
          "aria-errormessage": l,
          "aria-labelledby": u,
          className: c,
          ...f
        }, y) => {
          const {
            size: p,
            appearance: h,
            isIndeterminate: v,
            isRequired: m,
            descriptionId: b,
            labelId: g,
            inputId: _,
            ...w
          } = ma(), j = (0, D.useRef)(null), x = f.id || _, {
            isPressed: C,
            pressProps: O
          } = (0, Bt.d)({
            ref: j
          }), {
            setSelected: N,
            toggle: z,
            ...k
          } = (0, Sr.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: a
          }), {
            inputProps: S,
            isSelected: L,
            isDisabled: V,
            isReadOnly: T
          } = (0, Jr.v)({
            "aria-label": "",
            id: x,
            name: s,
            ...w
          }, {
            ...k,
            toggle: z,
            setSelected: w.isReadOnly ? () => !1 : N
          }, j), A = (0, B.v6)({
            className: ca({
              size: p
            }),
            onClick: e => {
              n?.(e) ?? o?.(e), e.defaultPrevented || V || T || z()
            }
          }, O, f), E = (0, B.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, B.VW)(u, g),
            "aria-describedby": (0, B.VW)(d, b),
            "aria-errormessage": (0, B.VW)(l, w.isInvalid ? b : void 0),
            "aria-required": m,
            required: m
          }, S), M = v ? i[`Dash${p}`] : i[`Check${p}`];
          return (0, P.jsxs)("div", {
            ...A,
            children: [(0, P.jsx)(I.s6, {
              children: (0, P.jsx)("input", {
                ...E,
                ref: y
              })
            }), (0, P.jsx)("div", {
              className: (0, R.$)(ua({
                size: p,
                appearance: h
              }), c),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : L ? "checked" : "unchecked",
              "data-disabled": V || T,
              "data-testid": e,
              "data-pressed": C,
              children: (0, P.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (L || v) && (0, P.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        _a = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: a = !1,
          hideRequiredAsterisk: s,
          ...n
        }, o) => {
          const {
            size: i,
            labelId: d,
            inputId: l,
            isRequired: u
          } = ma(), c = n.id || d, f = u && !s, y = (0, B.v6)({
            className: ha({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: c,
            htmlFor: n.htmlFor || l
          }, n), p = t ? I.DX : "label";
          return (0, P.jsx)(I.s6, {
            enabled: a,
            children: (0, P.jsx)(p, {
              ...y,
              ref: o,
              children: e
            })
          })
        }),
        wa = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const {
            isDisabled: n,
            descriptionId: o
          } = ma(), i = a.id || o, d = (0, B.v6)({
            className: fa({
              isDisabled: n
            }),
            "data-testid": r,
            id: i
          }, a), l = t ? I.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: s,
            children: e
          })
        }),
        ja = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const {
            descriptionId: n
          } = ma(), o = a.id || n, i = (0, B.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: o
          }, a), d = t ? I.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        xa = (0, D.createContext)(null);

      function Ca() {
        const e = (0, D.useContext)(xa);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Oa = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: a = "MD",
          isRequired: s = !1,
          ...n
        }, o) => {
          const [i, d] = (0, D.useState)(null), [l, u] = (0, D.useState)(null), c = [i, l].filter(Boolean).join(" "), f = (0, B.v6)({
            "data-testid": e,
            "aria-describedby": c,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, n), y = t ? I.DX : "fieldset";
          return (0, P.jsx)(xa.Provider, {
            value: {
              size: a,
              isRequired: s,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: u
            },
            children: (0, P.jsx)(y, {
              ...f,
              ref: o,
              children: r
            })
          })
        }),
        Na = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: a = "optional",
          hideVisually: s = !1,
          hideRequiredAsterisk: n,
          ...o
        }, i) => {
          const {
            isRequired: d
          } = Ca(), l = d && !n, u = (0, B.v6)({
            "data-testid": r,
            className: pa({
              showAsterisk: l
            })
          }, o), c = t ? I.DX : "legend";
          return (0, P.jsx)(I.s6, {
            enabled: s,
            children: (0, P.jsxs)(c, {
              ...u,
              ref: i,
              children: [(0, P.jsx)(I.xV, {
                children: e
              }), !d && (0, P.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", a, ")"]
              })]
            })
          })
        }),
        za = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const {
            setDescriptionId: n
          } = Ca(), o = (0, D.useId)(), i = a.id || o;
          (0, D.useEffect)(() => {
            n(i)
          }, [n, i]);
          const d = (0, B.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, a),
            l = t ? I.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: s,
            children: e
          })
        }),
        Pa = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const {
            size: n
          } = Ca(), o = (0, B.v6)({
            "data-testid": r,
            className: ya({
              size: n
            })
          }, a), i = t ? I.DX : "div";
          return (0, P.jsx)(i, {
            ...o,
            ref: s,
            children: e
          })
        }),
        Ra = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const {
            setErrorTextId: n
          } = Ca(), o = (0, D.useId)(), i = a.id || o;
          (0, D.useEffect)(() => {
            n(i)
          }, [n, i]);
          const d = (0, B.v6)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, a),
            l = at.X,
            u = t ? I.DX : "div";
          return (0, P.jsxs)(u, {
            ...d,
            ref: s,
            children: [(0, P.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, P.jsx)(I.xV, {
              children: e
            })]
          })
        });

      function Da(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ia(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function ka(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ia(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = Da(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ia(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sa(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var La = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Va = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = ka(ka({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) La(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sa(e.variantClassNames, e => Sa(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ta = Va({
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
        Aa = Va({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ea = Va({
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
        Ma = Va({
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
      const qa = (0, D.createContext)(null);

      function Ba() {
        const e = (0, D.useContext)(qa);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Za = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          isRequired: n = !1,
          status: o = "neutral",
          ...i
        }, d) => {
          const l = (0, B.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            u = e ? I.DX : "div",
            c = (0, D.useId)(),
            f = (0, D.useId)(),
            y = (0, D.useId)(),
            p = (0, D.useId)();
          return (0, P.jsx)(qa.Provider, {
            value: {
              labelId: c,
              descriptionId: f,
              hintId: y,
              inputId: p,
              isDisabled: a,
              isReadOnly: s,
              isRequired: n,
              status: o,
              ...i
            },
            children: (0, P.jsx)(u, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        Xa = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: a = !1,
          hideRequiredAsterisk: s = !1,
          ...n
        }, o) => {
          const {
            labelId: i,
            inputId: d,
            isDisabled: l,
            isRequired: u
          } = Ba(), c = (0, B.v6)({
            className: Ea({
              isDisabled: l,
              showAsterisk: u && !s
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, n), f = t ? I.DX : "label";
          return (0, P.jsx)(I.s6, {
            enabled: a,
            children: (0, P.jsx)(f, {
              ...c,
              ref: o,
              children: e
            })
          })
        }),
        Fa = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: a = 5,
          defaultValue: s,
          name: n,
          placeholder: o = " ",
          "aria-labelledby": i,
          "aria-describedby": d,
          ...l
        }, u) => {
          const {
            descriptionId: c,
            labelId: f,
            inputId: y,
            hintId: p,
            isDisabled: h,
            isRequired: v,
            isReadOnly: m,
            status: b
          } = Ba(), g = (0, D.useRef)(null), _ = (0, _e.UP)(g, u), w = (0, B.v6)({
            className: Ma({
              isInvalid: "invalid" === b,
              isDisabled: h,
              isReadOnly: m,
              isSuccess: "success" === b
            }),
            name: n,
            id: l.id || y,
            rows: a,
            defaultValue: s,
            disabled: h,
            required: v,
            readOnly: m,
            placeholder: o,
            "aria-labelledby": (0, B.VW)(l.id, f, p, i),
            "aria-describedby": (0, B.VW)(c, d),
            "data-testid": r,
            ..."invalid" === b && {
              "aria-invalid": !0,
              "aria-errormessage": c
            },
            ..."success" === b && {
              "data-success": !0
            },
            ...h && {
              "aria-disabled": !0
            },
            ...v && {
              "aria-required": !0
            }
          }, l), j = e ? I.DX : "textarea";
          return (0, P.jsx)(j, {
            ref: _,
            ...w,
            children: t
          })
        }),
        Ga = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, s) => {
          const {
            isDisabled: n,
            descriptionId: o
          } = Ba(), i = (0, B.v6)({
            className: Ta({
              isDisabled: n
            }),
            "data-testid": t,
            id: o
          }, a), d = r ? I.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        Wa = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const {
            hintId: n,
            isDisabled: o
          } = Ba(), i = (0, B.v6)({
            className: Aa({
              isDisabled: o
            }),
            "data-testid": r,
            id: n
          }, a), d = t ? I.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        Ua = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, s) => {
          const {
            descriptionId: n,
            status: o
          } = Ba(), i = (0, B.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: n,
            status: o
          }, a), d = r ? I.DX : Qt;
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        Ha = Jt,
        Ka = $t;
      var Qa = r(7097),
        Ja = r(8222);

      function $a(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ya(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ya(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = $a(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ya(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ts(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var rs = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        as = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = es(es({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) rs(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ts(e.variantClassNames, e => ts(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ss = as({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ns = as({
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
      const os = (0, D.createContext)(null);

      function is() {
        const e = (0, D.useContext)(os);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const ds = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: a,
          testId: s,
          asChild: n,
          "aria-labelledby": o,
          "aria-describedby": i,
          "aria-errormessage": d,
          status: l = "neutral",
          ...u
        }, c) => {
          const f = (0, D.useRef)(null),
            y = (0, _e.UP)(f, c),
            p = (0, D.useId)(),
            h = (0, D.useId)(),
            v = (0, D.useId)(),
            m = (0, Qa.Z)({
              ...u,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, Ja.m)({
              ...u,
              orientation: r,
              "aria-labelledby": (0, B.VW)(p, o),
              "aria-describedby": (0, B.VW)(h, v, i),
              "aria-errormessage": (0, B.VW)(v, d)
            }, m),
            g = (0, B.v6)({
              className: "foundry_njguqn0"
            }, b, (0, B.cJ)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            _ = n ? I.DX : "div";
          return (0, P.jsx)(os.Provider, {
            value: {
              state: m,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: h,
              labelId: p,
              errorId: v,
              status: l,
              ...u
            },
            children: (0, P.jsx)(_, {
              ref: y,
              "data-testid": s,
              ...g,
              children: a
            })
          })
        }),
        ls = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...a
        }, s) => {
          const {
            size: n,
            orientation: o
          } = is(), i = (0, B.v6)({
            "data-testid": e,
            className: ns({
              size: n,
              orientation: o
            })
          }, a), d = t ? I.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: r
          })
        }),
        us = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: a = !1,
          hideRequiredAsterisk: s = !1,
          ...n
        }, o) => {
          const {
            isRequired: i,
            labelId: d
          } = is(), l = i && !s, u = (0, B.v6)({
            id: n.id || d,
            "data-testid": e,
            className: ss({
              showAsterisk: l
            })
          }, n), c = t ? I.DX : "div";
          return (0, P.jsx)(I.s6, {
            enabled: a,
            children: (0, P.jsx)(c, {
              ...u,
              ref: o,
              children: r
            })
          })
        }),
        cs = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...a
        }, s) => {
          const {
            descriptionId: n
          } = is(), o = (0, B.v6)({
            id: n,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, a), i = t ? I.DX : "div";
          return (0, P.jsx)(i, {
            ...o,
            ref: s,
            children: r
          })
        }),
        fs = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, s) => {
          const {
            errorId: n,
            status: o
          } = is(), i = (0, B.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: n,
            status: o
          }, a), d = r ? I.DX : Qt;
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        ys = Jt,
        ps = $t;
      var hs = r(9153),
        vs = as({
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
        ms = as({
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
        bs = as({
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
        gs = as({
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
      const _s = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        ws = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        js = ({
          color: e = "currentColor"
        }) => (0, P.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, P.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        xs = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, a),
            o = e ? I.DX : "label";
          return (0, P.jsx)(o, {
            ref: s,
            ...n,
            children: t
          })
        }),
        Cs = (0, D.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, a) => {
          const s = (0, D.useRef)(null),
            n = (0, _e.UP)(s, a),
            o = (0, D.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: c,
              isRequired: f
            } = is(),
            {
              isPressed: y,
              pressProps: p
            } = (0, Bt.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: h
            } = (0, hs.z)({
              ...r,
              id: o,
              value: t,
              "aria-label": ""
            }, i, s),
            v = h.checked,
            m = h.disabled || i?.isReadOnly,
            b = (0, B.v6)(h, {
              disabled: m,
              readOnly: c,
              required: f,
              "data-testid": e,
              ...m && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            g = u[`Dot${l}`];
          return (0, P.jsxs)("div", {
            className: gs({
              size: l
            }),
            children: [(0, P.jsx)(I.s6, {
              children: (0, P.jsx)("input", {
                type: "radio",
                ...b,
                ref: n,
                className: "foundry_1pfduet1"
              })
            }), (0, P.jsx)("div", {
              className: bs({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": y,
              ...p,
              children: (0, P.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, P.jsx)(g, {})
              })
            })]
          })
        }),
        Os = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: a = !1,
          ...s
        }, n) => {
          const {
            size: o,
            state: i
          } = is(), d = (0, D.useId)(), l = (0, B.v6)({
            id: d,
            "data-testid": e,
            className: ms({
              size: o,
              isDisabled: i?.isDisabled
            })
          }, s), u = t ? I.DX : "div";
          return (0, P.jsx)(I.s6, {
            enabled: a,
            children: (0, P.jsx)(u, {
              ...l,
              ref: n,
              children: r
            })
          })
        }),
        Ns = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...a
        }, s) => {
          const {
            isDisabled: n
          } = is(), o = (0, B.v6)({
            "data-testid": e,
            className: vs({
              isDisabled: n
            })
          }, a), i = t ? I.DX : "span";
          return (0, P.jsx)(i, {
            ref: s,
            ...o,
            children: r
          })
        });
      var zs = r(5462);

      function Ps(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Rs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function Ds(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rs(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = Ps(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rs(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Is(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var ks = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Ss = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = Ds(Ds({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ks(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Is(e.variantClassNames, e => Is(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ls = Ss({
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
        Vs = Ss({
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
        Ts = Ss({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        As = Ss({
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
        Es = Ss({
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
        Ms = Ss({
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
      const qs = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Bs = (0, D.createContext)(null);

      function Zs() {
        const e = (0, D.useContext)(Bs);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Xs = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          isRequired: n = !1,
          status: o = "neutral",
          ...i
        }, d) => {
          const [l, u] = (0, D.useState)("text"), c = `${(0,D.useId)()}-label`, f = `${(0,D.useId)()}-input`, y = `${(0,D.useId)()}-description`, p = (0, D.useRef)(null), h = (0, D.useRef)(qs), v = (0, B.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), m = e ? I.DX : "div";
          return (0, P.jsx)(Bs.Provider, {
            value: {
              isDisabled: a,
              isReadOnly: s,
              isRequired: n,
              status: o,
              labelId: c,
              inputId: f,
              descriptionId: y,
              type: l,
              setType: u,
              inputRef: p,
              focusState: h,
              ...i
            },
            children: (0, P.jsx)(m, {
              ref: d,
              ...v,
              children: t
            })
          })
        }),
        Fs = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: a = !1,
          hideRequiredAsterisk: s,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            isRequired: d,
            inputId: l,
            labelId: u
          } = Zs(), c = d && !s, f = (0, B.v6)({
            id: n.id || u,
            htmlFor: n.htmlFor || l,
            "data-testid": e,
            className: Ms({
              showAsterisk: c,
              isDisabled: i
            })
          }, n), y = t ? I.DX : "label";
          return (0, P.jsx)(I.s6, {
            enabled: a,
            children: (0, P.jsx)(y, {
              ref: o,
              ...f,
              children: r
            })
          })
        }),
        Gs = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...a
        }, s) => {
          const {
            isDisabled: n
          } = Zs(), o = (0, B.v6)({
            "data-testid": e,
            className: Ts({
              isDisabled: n
            })
          }, a), i = t ? I.DX : "span";
          return (0, P.jsx)(i, {
            ref: s,
            ...o,
            children: r
          })
        }),
        Ws = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...a
        }, s) => {
          const {
            isDisabled: n,
            isReadOnly: o,
            status: i
          } = Zs(), d = (0, B.v6)({
            "data-testid": e,
            className: (0, R.$)(Ls({
              isDisabled: n,
              isReadOnly: o,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, a), l = t ? I.DX : "div";
          return (0, P.jsx)(l, {
            ref: s,
            ...d,
            children: r
          })
        }),
        Us = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: a,
          showMask: s = !0,
          track: n,
          placeholder: o = " ",
          "aria-labelledby": i,
          "aria-describedby": d,
          type: l = "text",
          ...u
        }, c) => {
          const {
            isDisabled: f,
            isReadOnly: y,
            isRequired: p,
            status: h,
            labelId: v,
            inputId: m,
            descriptionId: b,
            setType: g,
            type: _,
            inputRef: w,
            focusState: j
          } = Zs();
          (0, D.useEffect)(() => g(l), []);
          const x = "invalid" === h,
            C = (0, B.v6)({
              disabled: f,
              readOnly: y,
              required: p,
              id: m,
              type: _,
              spellCheck: !1,
              placeholder: o,
              "aria-labelledby": (0, B.VW)(v, i),
              "aria-describedby": (0, B.VW)(b, d),
              "data-testid": e,
              className: (0, R.$)(Es({
                isDisabled: f,
                isReadOnly: y
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (j.current) {
                  const {
                    selectionStart: t,
                    selectionEnd: r
                  } = e.currentTarget;
                  j.current.selectionStart = t, j.current.selectionEnd = r
                }
              },
              ...x && {
                "aria-invalid": !0,
                "aria-errormessage": b
              },
              ..."success" === h && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...p && {
                "aria-required": !0
              }
            }, u),
            O = (0, zs.A)({
              mask: r,
              replacement: a,
              showMask: s,
              track: n
            }),
            N = (0, _e.UP)(r && a ? O : null, w, c),
            z = t ? I.DX : "input";
          return (0, P.jsx)(z, {
            ref: N,
            ...C
          })
        }),
        Hs = (0, D.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: a,
          ...s
        }, n) => {
          const {
            isDisabled: o
          } = Zs(), i = (0, B.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, R.$)(As({
              side: a,
              isDisabled: o
            }), "foundry_8oytzo0")
          }, s), d = t ? I.DX : at[e];
          return (0, P.jsx)(d, {
            ref: n,
            ...i
          })
        }),
        Ks = (0, D.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Zs(), a = (0, B.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, R.$)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, P.jsx)(z.K, {
            ref: t,
            ...a,
            preventFocusOnPress: !1
          })
        }),
        Qs = (0, D.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, a) => {
          const {
            type: s,
            setType: n,
            inputRef: o,
            focusState: i
          } = Zs(), d = "password" === s, l = d ? e : t;
          (0, D.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const u = (0, B.v6)({
            label: l,
            icon: d ? "Eye" : "EyeOff",
            onPress: () => {
              n(d ? "text" : "password");
              const e = o.current;
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
          return (0, P.jsxs)(ct, {
            children: [(0, P.jsx)(ft, {
              children: (0, P.jsx)(Ks, {
                ref: a,
                ...u
              })
            }), (0, P.jsxs)(yt, {
              side: "bottom",
              align: "end",
              children: [l, (0, P.jsx)(pt, {})]
            })]
          })
        }),
        Js = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, s) => {
          const {
            isDisabled: n,
            descriptionId: o
          } = Zs(), i = (0, B.v6)({
            className: Vs({
              isDisabled: n
            }),
            "data-testid": t,
            id: o
          }, a), d = r ? I.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        $s = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...a
        }, s) => {
          const {
            descriptionId: n,
            status: o
          } = Zs(), i = (0, B.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: n,
            status: o
          }, a), d = r ? I.DX : Qt;
          return (0, P.jsx)(d, {
            ...i,
            ref: s,
            children: e
          })
        }),
        Ys = Jt,
        en = $t;
      var tn = r(6319);

      function rn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function an(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function sn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? an(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = rn(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : an(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nn(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var on = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        dn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              a = sn(sn({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) on(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nn(e.variantClassNames, e => nn(e, e => e.split(" ")[0]))
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
      const ln = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        un = (0, D.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...a
        }, s) => {
          const n = (0, D.useRef)(null),
            o = (0, _e.UP)(n, s),
            {
              buttonProps: i
            } = (0, _e.sL)(a, n),
            d = (0, B.v6)({
              "data-testid": r,
              className: dn({
                size: t
              })
            }, i);
          return (0, P.jsx)("button", {
            ref: o,
            ...d,
            children: (0, P.jsx)(at.X, {
              label: e,
              size: ln[t]
            })
          })
        });

      function cn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function fn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function yn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fn(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = cn(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pn(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var hn = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        vn = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = yn(yn({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) hn(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pn(e.variantClassNames, e => pn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        mn = vn({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bn = vn({
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
        gn = vn({
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
      const _n = (0, D.createContext)(null);

      function wn() {
        const e = (0, D.useContext)(_n);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const jn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: a,
          ...s
        }, n) => {
          const o = e ? I.DX : "div",
            i = (0, B.v6)({
              className: gn({
                status: r,
                background: a
              })
            }, s);
          return (0, P.jsx)(_n.Provider, {
            value: {
              status: r,
              background: a
            },
            children: (0, P.jsx)(o, {
              ref: n,
              "data-testid": t,
              ...i
            })
          })
        }),
        xn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = e ? I.DX : "div",
            n = (0, B.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, P.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...n
          })
        }),
        Cn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = e ? I.DX : "div",
            n = (0, B.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, P.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...n
          })
        }),
        On = {
          danger: at.CircleX,
          information: at.Info,
          success: at.CircleCheck,
          warning: at.TriangleAlert
        },
        Nn = (0, D.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, a) => {
          const {
            status: s
          } = wn(), n = e ? I.DX : On[s], o = (0, B.v6)({
            className: bn({
              status: s,
              size: t
            }),
            size: t
          }, r);
          return (0, P.jsx)(n, {
            label: "",
            ref: a,
            ...o
          })
        }),
        zn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = e ? I.DX : "div",
            n = (0, B.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, P.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...n
          })
        }),
        Pn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = e ? I.DX : "div",
            n = (0, B.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, P.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...n
          })
        }),
        Rn = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, D.useRef)(null),
            o = (0, _e.UP)(n, s),
            i = e ? I.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, tn.i)(a, n),
            u = (0, B.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, P.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: o,
            ...u,
            children: t
          })
        }),
        Dn = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = e ? I.DX : "div",
            o = (0, B.v6)({
              className: "foundry_1m368qhm"
            }, a);
          return (0, P.jsx)(n, {
            ref: s,
            "data-testid": r,
            ...o,
            children: t
          })
        }),
        In = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...a
        }, s) => {
          const n = e ? I.DX : "div";
          return (0, P.jsx)(n, {
            ref: s,
            "data-testid": t,
            className: (0, R.$)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...a
          })
        }),
        kn = (0, D.forwardRef)((e, t) => {
          const {
            background: r
          } = wn(), a = "none" !== r, s = (0, B.v6)({
            className: mn({
              hasBackground: a
            })
          }, e);
          return (0, P.jsx)(un, {
            size: "SM",
            ref: t,
            ...s
          })
        });
      var Sn = r(4634),
        Ln = r(7697),
        Vn = r(7497);

      function Tn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function An(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function En(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? An(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = Tn(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : An(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Mn(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var qn = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Bn = "foundry_qmpv6yv",
        Zn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              a = En(En({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) qn(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Mn(e.variantClassNames, e => Mn(e, e => e.split(" ")[0]))
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
      const Xn = (0, D.createContext)(null);

      function Fn() {
        const e = (0, D.useContext)(Xn);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Gn = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: a,
          status: s,
          background: n,
          align: o = "left",
          ...i
        }, d) => {
          const l = (({
              loopPagination: e = !0
            }) => {
              const t = (0, _e.rl)(),
                r = (0, _e.jt)(),
                [a, s] = (0, D.useState)([]),
                n = a.length,
                [o, i] = (0, D.useState)(0),
                [d, l] = (0, Sn.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && n > 1
                }, [(0, Ln.A)(), (0, Vn.A)()]),
                u = (0, D.useRef)(0),
                c = (0, D.useRef)(!1),
                f = a[o],
                y = (0, D.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), c.current = !0
                }, [l]),
                p = (0, D.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                h = (0, D.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    a = e.scrollProgress(),
                    s = e.slidesInView(),
                    n = "scroll" === t;
                  e.scrollSnapList().forEach((t, o) => {
                    let i = t - a;
                    r.slideRegistry[o].forEach(o => {
                      if (n && !s.includes(o)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (o === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (i = t - (1 + a)), 1 === e && (i = t + (1 - a))
                        }
                      });
                      const d = (l = 1 - Math.abs(i * u.current), Math.min(Math.max(l, 0), 1)).toString();
                      var l;
                      e.slideNodes()[o].style.opacity = d
                    })
                  })
                }, []);
              return (0, D.useEffect)(() => {
                l && (p(l), h(l), l.on("reInit", p).on("reInit", h).on("scroll", h).on("slideFocus", h))
              }, [l, h]), (0, D.useEffect)(() => {
                l && (y(l), l.on("select", y).on("reInit", y))
              }, [l, y]), {
                setAlerts: s,
                alerts: a,
                numAlerts: n,
                emblaRef: d,
                emblaApi: l,
                prevAlert: () => l?.scrollPrev(r),
                nextAlert: () => l?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: o,
                setCurrentAlertIndex: i,
                isInitialized: c.current,
                loopPagination: e,
                canScrollNext: () => l?.canScrollNext() || !1,
                canScrollPrev: () => l?.canScrollPrev() || !1
              }
            })({
              loopPagination: a
            }),
            {
              currentAlert: u,
              isInitialized: c,
              setAlerts: f,
              numAlerts: y
            } = l;
          (0, D.useEffect)(() => {
            s && n && f([{
              status: s,
              background: n,
              align: o
            }])
          }, []);
          const p = y > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            h = (0, B.v6)({
              className: Zn(u)
            }, p, i),
            v = e ? I.DX : "div";
          return (0, P.jsx)(Xn.Provider, {
            value: l,
            children: (0, P.jsx)(v, {
              ref: d,
              "data-testid": r,
              "data-initialized": c,
              ...h,
              children: t
            })
          })
        }),
        Wn = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Un = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: a
          } = Fn();
          if (!e && !a || !a?.status) return null;
          const s = e || Wn[a.status],
            n = at[s],
            o = (0, B.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, P.jsx)(n, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...o
          })
        }),
        Hn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = e ? I.DX : "div",
            n = (0, B.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, P.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...n
          })
        }),
        Kn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: a,
          background: s,
          ...n
        }, o) => {
          const i = e ? I.DX : "div",
            d = (0, B.v6)({
              className: "foundry_qmpv6yo"
            }, n);
          return (0, P.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...d
          })
        }),
        Qn = (0, D.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, a) => {
          const {
            setAlerts: s,
            emblaRef: n,
            emblaApi: o
          } = Fn(), i = (0, B.v6)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, _e.UP)(n, a), l = D.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, D.useEffect)(() => {
            l && s(l)
          }, []), o?.on("slidesChanged", () => {
            l && s(l)
          }), (0, P.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, P.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Jn = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, D.useRef)(null),
            o = (0, _e.UP)(n, s),
            i = e ? I.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, tn.i)(a, n),
            u = (0, B.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, a);
          return (0, P.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: o,
            ...d,
            ...u,
            children: t
          })
        }),
        $n = (0, D.forwardRef)((e, t) => {
          const r = (0, B.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, P.jsx)(un, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Yn = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...a
        }, s) => {
          const n = e ? I.DX : "div",
            o = (0, B.v6)({
              className: "foundry_qmpv6yt"
            }, a);
          return (0, P.jsx)(n, {
            ref: s,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...o,
            children: r
          })
        }),
        eo = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: a,
            canScrollNext: s
          } = Fn(), n = (0, B.v6)({
            className: Bn
          }, t);
          return (0, P.jsx)(z.K, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: a,
            isDisabled: !s(),
            ...n
          })
        }),
        to = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: a,
            canScrollPrev: s
          } = Fn(), n = (0, B.v6)({
            className: Bn
          }, t);
          return (0, P.jsx)(z.K, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: a,
            isDisabled: !s(),
            ...n
          })
        }),
        ro = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: a,
            numAlerts: s
          } = Fn(), n = (0, B.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, P.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...n,
            children: [a + 1, "/", s]
          })
        });

      function ao(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function so(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function no(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? so(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = ao(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : so(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function oo(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var io = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        lo = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = no(no({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) io(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oo(e.variantClassNames, e => oo(e, e => e.split(" ")[0]))
            }
          }, t
        },
        uo = lo({
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
        co = lo({
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
        fo = lo({
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
      const yo = (0, D.createContext)(null);

      function po() {
        const e = (0, D.useContext)(yo);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const ho = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: a,
          background: s,
          color: n,
          hasBorder: o,
          isDisabled: i,
          ...d
        }, l) => {
          const u = {
              size: a,
              background: s,
              color: n,
              hasBorder: o,
              isDisabled: i
            },
            c = (0, B.v6)({
              className: co(u)
            }, d),
            f = e ? I.DX : "div";
          return (0, P.jsx)(yo.Provider, {
            value: u,
            children: (0, P.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...c,
              children: t
            })
          })
        }),
        vo = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const {
            size: n
          } = po(), o = e ? I.DX : "div", i = (0, B.v6)({
            className: fo({
              size: n
            })
          }, a);
          return (0, P.jsx)(o, {
            ref: s,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        mo = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const a = at[e],
            s = (0, B.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, P.jsx)(a, {
            ref: r,
            size: "SM",
            ...s
          })
        }),
        bo = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: a,
            isDisabled: s
          } = po(), n = (0, B.v6)({
            className: uo({
              background: a
            })
          }, t);
          return (0, P.jsx)(z.K, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: s,
            ...n
          })
        });
      var go = r(6441);

      function _o(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function wo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function jo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wo(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = _o(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wo(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xo(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var Co = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Oo = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = jo(jo({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Co(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xo(e.variantClassNames, e => xo(e, e => e.split(" ")[0]))
            }
          }, t
        },
        No = Oo({
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
        zo = Oo({
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
        Po = Oo({
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
      const Ro = ({
          testId: e,
          ...t
        }) => (0, P.jsx)(go.Kq, {
          "data-testid": e,
          ...t
        }),
        Do = (0, D.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...a
        }, s) => {
          const n = (0, B.v6)({
            className: Po({
              position: r
            })
          }, a);
          return (0, P.jsx)(go.LM, {
            ref: s,
            "data-testid": t,
            ...n,
            children: e
          })
        }),
        Io = (0, D.createContext)(null);

      function ko() {
        const e = (0, D.useContext)(Io);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const So = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: a = "success",
          ...s
        }, n) => {
          const o = e ? I.DX : go.bL,
            i = (0, B.v6)({
              className: zo({
                appearance: a
              })
            }, s);
          return (0, P.jsx)(Io.Provider, {
            value: {
              appearance: a
            },
            children: (0, P.jsx)(o, {
              ref: n,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        Lo = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = e ? I.DX : go.VY,
            o = (0, B.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, a);
          return (0, P.jsx)(n, {
            ref: s,
            "data-testid": r,
            ...o,
            children: t
          })
        }),
        Vo = {
          danger: at.CircleX,
          information: at.Info,
          success: at.CircleCheck,
          warning: at.TriangleAlert,
          avocado: at.CircleCheck
        },
        To = (0, D.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: a
          } = ko(), s = e ? I.DX : Vo[a], n = (0, B.v6)({
            className: No({
              appearance: a
            }),
            size: "LG"
          }, t);
          return (0, P.jsx)(s, {
            ref: r,
            ...n
          })
        }),
        Ao = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, a);
          return (0, P.jsx)(go.rc, {
            ref: s,
            "data-testid": r,
            ...n,
            children: e ? (0, P.jsx)(I.DX, {
              children: t
            }) : (0, P.jsx)(N.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Eo = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: a,
          ...s
        }, n) => {
          const o = (0, B.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, s);
          return (0, P.jsx)(go.bm, {
            ref: n,
            "data-testid": r,
            ...o,
            children: e ? (0, P.jsx)(I.DX, {
              children: t
            }) : (0, P.jsx)(un, {
              size: "SM",
              label: a
            })
          })
        });
      var Mo = r(2405);

      function qo(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Bo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function Zo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bo(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = qo(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bo(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xo(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var Fo = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Go = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = Zo(Zo({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Fo(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xo(e.variantClassNames, e => Xo(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Wo = Go({
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
        Uo = Go({
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
        Ho = Go({
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

      function Ko() {
        const e = (0, D.useContext)(Qo);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Qo = (0, D.createContext)(null),
        Jo = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: a = "MD",
          ...s
        }, n) => {
          const o = (0, B.v6)({
              className: Ho({
                size: a
              })
            }, s),
            i = r ? I.DX : "ol";
          return (0, P.jsx)(Qo.Provider, {
            value: {
              size: a
            },
            children: (0, P.jsx)(i, {
              ref: n,
              "data-testid": t,
              ...o,
              children: e
            })
          })
        }),
        $o = (0, D.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: a,
          ...s
        }, n) => {
          const o = (0, D.useRef)(null),
            {
              size: i
            } = Ko(),
            {
              itemProps: d
            } = (0, Mo.I)({
              isCurrent: e,
              children: t
            }, o),
            l = r ? I.DX : "a",
            u = (0, B.v6)({
              className: (0, R.$)(Wo({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": a
            }, d, s);
          return (0, P.jsx)("li", {
            className: Uo({
              size: i
            }),
            ref: n,
            children: (0, P.jsx)(l, {
              ref: o,
              ...u,
              children: t
            })
          })
        }),
        Yo = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const a = at[e];
          return (0, P.jsx)(a, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        ei = (0, D.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: a,
          ...s
        }, n) => {
          const [o, i] = (0, D.useState)(r), {
            size: d
          } = Ko(), l = (0, B.v6)({
            className: Uo({
              size: d
            }),
            "data-testid": t
          }, s);
          return (0, P.jsx)("li", {
            ref: n,
            ...l,
            children: (0, P.jsxs)(er.bL, {
              open: o,
              onOpenChange: () => i(!o),
              children: [(0, P.jsx)(er.l9, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": a,
                children: "..."
              }), (0, P.jsx)(er.ZL, {
                children: (0, P.jsx)(er.UC, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, P.jsx)(er.LM, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        ti = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const n = t ? I.DX : er.q7,
            o = (0, B.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, a);
          return (0, P.jsx)(n, {
            ref: s,
            ...o,
            children: e
          })
        });

      function ri(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ai(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function si(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ai(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = ri(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ai(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ni(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var oi = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        ii = (e => {
          var t = t => {
            var r = e.defaultClassName,
              a = si(si({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) oi(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ni(e.variantClassNames, e => ni(e, e => e.split(" ")[0]))
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
      const di = (0, D.createContext)(null);

      function li() {
        const e = (0, D.useContext)(di);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const ui = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: a = "SM",
          type: s = "text",
          ...n
        }, o) => {
          const i = e ? I.DX : "div",
            d = (0, B.v6)({
              className: ii({
                appearance: r,
                type: s,
                size: a
              })
            }, n);
          return (0, P.jsx)(di.Provider, {
            value: {
              type: s
            },
            children: (0, P.jsx)(i, {
              ref: o,
              "data-testid": t,
              ...d
            })
          })
        }),
        ci = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = e ? I.DX : "div",
            n = (0, B.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, P.jsx)(s, {
            ref: a,
            ...n
          })
        }),
        fi = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const a = at[e],
            s = (0, B.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, P.jsx)(a, {
            ref: r,
            ...s
          })
        }),
        yi = () => {
          const e = (0, _e.Ub)(B.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        pi = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function hi(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function vi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function mi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vi(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = hi(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bi(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var gi = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        _i = (e => {
          var t = t => {
            var r = e.defaultClassName,
              a = mi(mi({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) gi(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bi(e.variantClassNames, e => bi(e, e => e.split(" ")[0]))
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
      const wi = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, P.jsx)(Yt.bL, {
            ref: r,
            ...a
          })
        }),
        ji = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, P.jsx)(Yt.LM, {
            ref: r,
            ...a
          })
        }),
        xi = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, P.jsx)(Yt.Ze, {
            ref: r,
            ...a
          })
        }),
        Ci = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, _e.rl)(),
            s = (0, B.v6)({
              "data-testid": e,
              className: _i({
                isTouchDevice: a
              })
            }, t);
          return (0, P.jsx)(Yt.zi, {
            ref: r,
            ...s
          })
        }),
        Oi = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(Yt.OK, {
            ref: r,
            ...a
          })
        });

      function Ni(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function zi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function Pi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zi(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = Ni(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ri(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var Di = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Ii = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = Pi(Pi({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Di(l, a, e.defaultVariants) && (r += " " + u);
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
        ki = Ii({
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
        Si = Ii({
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
      const Li = (0, D.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, D.createRef)(),
          dialogSpringRef: (0, it.$9)(),
          overlaySpringRef: (0, it.$9)()
        }),
        Vi = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: a,
          onOpenTransitionComplete: s,
          onCloseTransitionStart: n,
          onCloseTransitionComplete: o,
          ...i
        }) => {
          const [d, l] = (0, _e.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), u = (0, _e.ZC)(d);
          return (0, P.jsx)(Li.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== u || !e),
              setIsOpen: l,
              onOpenTransitionStart: a,
              onOpenTransitionComplete: s,
              onCloseTransitionStart: n,
              onCloseTransitionComplete: o,
              contentId: (0, D.useId)(),
              descriptionId: (0, D.useId)(),
              triggerRef: (0, D.useRef)(null),
              dialogSpringRef: (0, it.U2)(),
              overlaySpringRef: (0, it.U2)()
            },
            children: (0, P.jsx)(Ti, {
              ...i
            })
          })
        },
        Ti = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, D.useContext)(Li), a = (0, B.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, P.jsx)(mt.bL, {
            ...a
          })
        },
        Ai = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: a,
            triggerRef: s
          } = (0, D.useContext)(Li), n = (0, _e.UP)(s, r), o = (0, B.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": a
          }, t);
          return (0, P.jsx)(mt.l9, {
            ...o,
            ref: n
          })
        }),
        Ei = e => (0, P.jsx)(mt.ZL, {
          forceMount: !0,
          ...e
        }),
        Mi = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: a,
            overlaySpringRef: s,
            openImmediately: n
          } = (0, D.useContext)(Li), o = pi(), i = (0, _e.jt)(), d = (0, it.pn)(a, {
            ref: s,
            delay: a ? 0 : 100,
            from: o(0),
            enter: o(100),
            leave: o(0),
            config: it.$W.stiff,
            immediate: i || n
          }), l = (0, B.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), u = (0, it.CS)(mt.hJ);
          return (0, D.useEffect)(() => {
            s.start()
          }, [a]), d((e, t) => t ? (0, P.jsx)(u, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        qi = (0, D.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: a = !1,
          ...s
        }, n) => {
          const {
            isOpen: o,
            setIsOpen: i,
            openImmediately: d,
            contentId: l,
            triggerRef: u,
            onOpenTransitionStart: c,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: y,
            onCloseTransitionComplete: p,
            dialogSpringRef: h,
            overlaySpringRef: v
          } = (0, D.useContext)(Li), m = (0, _e.rl)(), b = (0, _e.jt)(), g = (0, D.useRef)(null), _ = yi(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: a,
            onCloseTransitionComplete: s
          }) {
            const n = pi(),
              o = yi(),
              i = (0, D.useRef)();
            return {
              bindDrag: (0, xe.useDrag)(({
                velocity: [, d],
                offset: [, l],
                direction: [, u],
                cancel: c,
                last: f,
                first: y,
                target: p
              }) => {
                const {
                  height: h
                } = e.current.getBoundingClientRect();
                if (y && (i.current = function(e, t) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (t < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(p, u)), (!i.current || l < -70) && c(), i.current) {
                  const e = 100 * (h - l) / h;
                  r.start({
                    ...n(e),
                    immediate: !0
                  }), t.start({
                    ...o(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * h || d > .5 && u > 0 ? (t.start({
                  ...o(0),
                  immediate: !1,
                  config: it.$W.stiff,
                  onStart: a,
                  onRest: s
                }), r.start({
                  ...n(0),
                  immediate: !1,
                  config: it.$W.stiff
                })) : (t.start({
                  ...o(100),
                  immediate: !1,
                  config: it.$W.stiff
                }), r.start({
                  ...n(100),
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
            overlaySpringRef: v,
            dialogSpringRef: h,
            onCloseTransitionStart: () => {
              i(!1), y?.()
            },
            onCloseTransitionComplete: p
          }), j = (0, it.pn)(o, {
            from: _(0),
            enter: _(100),
            leave: _(0),
            delay: o ? 100 : 0,
            config: it.$W.stiff,
            ref: h,
            immediate: b || d,
            onStart: (e, t, r) => {
              r ? c?.() : y?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, D.useEffect)(() => {
            h.start()
          }, [o]);
          const x = (0, _e.UP)(g, n),
            C = m && !b && !a && w(),
            O = (0, B.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: l
            }, C || {}, s),
            N = (0, it.CS)(mt.UC);
          return j((t, r) => r ? (0, P.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, P.jsx)(N, {
              forceMount: !0,
              ref: x,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        Bi = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, P.jsx)(mt.hE, {
            ref: r,
            ...a
          })
        }),
        Zi = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(mt.VY, {
            ref: r,
            ...a
          })
        }),
        Xi = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, P.jsxs)(wi, {
            ref: a,
            ...s,
            children: [(0, P.jsx)(ji, {
              className: "foundry_xov33ni",
              children: e
            }), (0, P.jsx)(xi, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, P.jsx)(Ci, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Fi = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            n = e ? I.DX : "div";
          return (0, P.jsx)(n, {
            ref: a,
            ...s
          })
        }),
        Gi = (0, D.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
              "data-testid": r,
              className: ki({
                align: e
              })
            }, a),
            o = t ? I.DX : "header";
          return (0, P.jsx)(o, {
            ref: s,
            ...n
          })
        }),
        Wi = (0, D.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, a) => {
          const s = (0, B.v6)({
            "data-testid": e,
            className: Si({
              appearance: t
            })
          }, r);
          return (0, P.jsx)(mt.hE, {
            ref: a,
            ...s
          })
        }),
        Ui = (0, D.forwardRef)((e, t) => {
          const r = (0, B.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, P.jsx)(z.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        Hi = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            n = t ? (0, P.jsx)(I.DX, {
              ref: a,
              ...s
            }) : (0, P.jsx)(un, {
              ref: a,
              ...s,
              size: "LG"
            });
          return (0, P.jsx)(mt.bm, {
            asChild: !0,
            children: n
          })
        }),
        Ki = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            n = e ? I.DX : "div";
          return (0, P.jsx)(n, {
            ref: a,
            ...s
          })
        }),
        Qi = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            n = e ? I.DX : "footer";
          return (0, P.jsx)(n, {
            ref: a,
            ...s
          })
        });
      var Ji = r(2667);

      function $i(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Yi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function ed(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yi(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = $i(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function td(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var rd = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        ad = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = ed(ed({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) rd(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return td(e.variantClassNames, e => td(e, e => e.split(" ")[0]))
            }
          }, t
        },
        sd = ad({
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
        nd = "var(--foundry_v912w22)",
        od = "var(--foundry_v912w23)",
        id = ad({
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
        dd = ad({
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
        ld = "var(--foundry_v912w21)",
        ud = "var(--foundry_v912w20)",
        cd = ad({
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
      const fd = (0, D.createContext)(null);

      function yd() {
        const e = (0, D.useContext)(fd);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const pd = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: a,
          status: s,
          isDisabled: n = !1,
          ...o
        }, i) => {
          const d = (0, B.v6)({
            "data-testid": r,
            "aria-disabled": n,
            className: sd({
              isDisabled: n
            }),
            asChild: e
          }, o);
          return (0, P.jsx)(fd.Provider, {
            value: {
              size: a,
              status: s,
              isDisabled: n
            },
            children: (0, P.jsx)(Ji.bL, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        hd = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...a
        }, s) => {
          const {
            size: n,
            isDisabled: o
          } = yd(), [i, d] = (0, D.useState)(!1);
          (0, D.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            u = (0, B.v6)({
              className: id({
                isDisabled: o
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, a);
          return (0, P.jsx)("span", {
            className: dd({
              size: n,
              isDisabled: o,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, P.jsx)(Ji._V, {
              ref: s,
              ...u
            })
          })
        }),
        vd = (0, D.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, a) => {
          const s = (0, D.useRef)(null),
            {
              size: n,
              status: o,
              isDisabled: i
            } = yd(),
            d = o || "online",
            l = (0, _e.UP)(s, a),
            u = (0, B.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: cd({
                status: d,
                size: n,
                isDisabled: i
              }),
              style: (0, Z.DI)({
                [ud]: t?.online,
                [ld]: t?.offline,
                [nd]: t?.away,
                [od]: t?.busy
              })
            }, r);
          return (0, P.jsx)("span", {
            ref: l,
            ...u
          })
        });

      function md(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function bd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function gd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bd(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = md(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function _d(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var wd = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        jd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              a = gd(gd({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) wd(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _d(e.variantClassNames, e => _d(e, e => e.split(" ")[0]))
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
      const xd = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, a),
            o = e ? I.DX : "nav";
          return (0, P.jsx)(o, {
            ref: s,
            ...n,
            children: t
          })
        }),
        Cd = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, a),
            o = e ? I.DX : "div";
          return (0, P.jsx)(o, {
            ref: s,
            ...n,
            children: t
          })
        }),
        Od = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: a,
          ...s
        }, n) => {
          const o = (0, D.useRef)(null),
            i = (0, _e.UP)(o, n),
            {
              linkProps: d,
              isPressed: l
            } = (0, tn.i)(s, o),
            u = (0, B.v6)({
              role: "listitem",
              "data-testid": a,
              "data-pressed": l,
              "data-active": r,
              className: (0, R.$)(jd({
                isActive: r
              }))
            }, d),
            c = e ? I.DX : "a";
          return (0, P.jsx)(c, {
            ref: i,
            ...u,
            children: t
          })
        }),
        Nd = (0, D.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, P.jsx)(Od, {
            ref: a,
            ...s,
            children: (0, P.jsx)(at.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        zd = (0, D.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, P.jsx)(Od, {
            ref: a,
            ...s,
            children: (0, P.jsx)(at.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        Pd = ({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }) => {
          const s = (0, B.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, a),
            n = e ? I.DX : "span";
          return (0, P.jsx)(n, {
            ...s,
            children: t || "..."
          })
        },
        Rd = ({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }) => {
          const s = (0, B.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, a),
            n = e ? I.DX : "div";
          return (0, P.jsx)(n, {
            ...s,
            children: t
          })
        },
        Dd = (0, D.createContext)(null);

      function Id() {
        const e = (0, D.useContext)(Dd);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const kd = ({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }) => {
          const s = (0, D.useId)(),
            n = (0, B.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, a),
            o = e ? I.DX : "div";
          return (0, P.jsx)(Dd.Provider, {
            value: {
              labelId: s
            },
            children: (0, P.jsx)(o, {
              ...n,
              children: t
            })
          })
        },
        Sd = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const {
            labelId: n
          } = Id(), o = (0, B.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, a), i = e ? I.DX : "label";
          return (0, P.jsx)(i, {
            ref: s,
            id: n,
            ...o,
            children: t
          })
        }),
        Ld = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...a
        }, s) => {
          const {
            labelId: n
          } = Id(), o = (0, B.v6)({
            "aria-labelledby": n,
            className: "foundry_2jlbztc"
          }, a), i = e ? I.DX : hr;
          return (0, P.jsxs)(i, {
            ...o,
            children: [(0, P.jsxs)(gr, {
              ref: s,
              children: [(0, P.jsx)(_r, {
                placeholder: r
              }), (0, P.jsx)(wr, {})]
            }), (0, P.jsx)(Pr, {
              children: (0, P.jsx)(vr, {
                children: (0, P.jsx)(br, {
                  children: t
                })
              })
            })]
          })
        }),
        Vd = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
              "data-testid": r
            }, a),
            o = e ? I.DX : Or;
          return (0, P.jsx)(o, {
            ...n,
            ref: s,
            children: (0, P.jsx)(Nr, {
              children: t
            })
          })
        }),
        Td = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, a),
            o = e ? I.DX : "p";
          return (0, P.jsx)(o, {
            ref: s,
            ...n,
            children: t
          })
        });
      var Ad = r(7969);

      function Ed(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Md(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function qd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Md(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = Ed(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Md(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bd(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var Zd = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        Xd = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = qd(qd({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Zd(l, a, e.defaultVariants) && (r += " " + u);
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
        Fd = "var(--foundry_zxwkyk2)",
        Gd = "var(--foundry_zxwkyk3)",
        Wd = Xd({
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
        Ud = Xd({
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
        Hd = Xd({
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
        Kd = "var(--foundry_zxwkyk1)",
        Qd = "var(--foundry_zxwkyk0)",
        Jd = Xd({
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
      const $d = (0, D.createContext)(null);

      function Yd() {
        const e = (0, D.useContext)($d);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const el = (0, D.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...a
        }, s) => {
          const n = (0, B.v6)({
            "data-testid": e,
            className: Wd({
              size: t
            }),
            type: r
          }, a);
          return (0, P.jsx)($d.Provider, {
            value: {
              size: t
            },
            children: (0, P.jsx)(Ad.bL, {
              ref: s,
              ...n
            })
          })
        }),
        tl = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: a
          } = Yd(), s = (0, B.v6)({
            "data-testid": e,
            className: Ud({
              size: a
            })
          }, t);
          return (0, P.jsx)(Ad.q7, {
            ref: r,
            ...s
          })
        }),
        rl = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: a
          } = Yd(), s = at[e];
          return (0, P.jsx)(s, {
            label: "",
            ref: r,
            size: a,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        al = (0, D.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...a
        }, s) => {
          const n = (0, B.v6)({
            "data-testid": e,
            className: Jd({
              status: r
            }),
            style: (0, Z.DI)({
              [Qd]: t?.online,
              [Kd]: t?.offline,
              [Fd]: t?.away,
              [Gd]: t?.busy
            })
          }, a);
          return (0, P.jsx)("span", {
            ref: s,
            ...n
          })
        }),
        sl = (0, D.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, a) => {
          const {
            size: s
          } = Yd(), n = (0, B.v6)({
            "data-testid": e,
            className: Hd({
              variant: t,
              size: s
            })
          }, r);
          return (0, P.jsx)("span", {
            ref: a,
            ...n
          })
        });
      var nl = r(1421);

      function ol(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function il(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function dl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? il(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = ol(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : il(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ll(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var ul = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        cl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              a = dl(dl({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) ul(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ll(e.variantClassNames, e => ll(e, e => e.split(" ")[0]))
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
      const fl = (0, D.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        yl = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...a
        }) => {
          const [s = !1, n] = (0, _e.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), o = (0, B.v6)({
            open: s,
            onOpenChange: n
          }, a);
          return (0, P.jsx)(fl.Provider, {
            value: {
              open: s,
              setOpen: n
            },
            children: (0, P.jsx)(nl.bL, {
              ...o
            })
          })
        },
        pl = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, P.jsx)(nl.l9, {
            ref: r,
            ...a
          })
        }),
        hl = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        vl = (0, D.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...a
        }, s) => {
          const {
            open: n
          } = (0, D.useContext)(fl), o = (0, D.useRef)(null), i = (0, _e.UP)(o, s), {
            buttonProps: d
          } = (0, _e.sL)(a, o), l = (0, B.v6)({
            "data-testid": r,
            className: cl({
              size: t
            })
          }, d), u = n ? at.ChevronUp : at.ChevronDown;
          return (0, P.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, P.jsx)(u, {
              label: "",
              size: hl[t]
            })]
          })
        }),
        ml = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e
          }, t);
          return (0, P.jsx)(nl.Mz, {
            ref: r,
            ...a
          })
        }),
        bl = (0, D.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, P.jsx)(nl.UC, {
            ref: a,
            ...s
          })
        }),
        gl = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const a = (0, B.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, P.jsx)(nl.i3, {
            ref: r,
            ...a
          })
        }),
        _l = e => (0, P.jsx)(nl.ZL, {
          ...e
        }),
        wl = e => (0, P.jsx)(nl.bm, {
          ...e
        });

      function jl(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t);
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function xl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function Cl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xl(Object(r), !0).forEach(function(t) {
            var a, s, n;
            a = e, s = t, n = r[t], (s = jl(s)) in a ? Object.defineProperty(a, s, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[s] = n
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ol(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var Nl = (e, t, r) => {
          for (var a of Object.keys(e)) {
            var s;
            if (e[a] !== (null !== (s = t[a]) && void 0 !== s ? s : r[a])) return !1
          }
          return !0
        },
        zl = e => {
          var t = t => {
            var r = e.defaultClassName,
              a = Cl(Cl({}, e.defaultVariants), t);
            for (var s in a) {
              var n, o = null !== (n = a[s]) && void 0 !== n ? n : e.defaultVariants[s];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[s][i];
                d && (r += " " + d)
              }
            }
            for (var [l, u] of e.compoundVariants) Nl(l, a, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ol(e.variantClassNames, e => Ol(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Pl = "var(--foundry_rmorls2)",
        Rl = zl({
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
        Dl = "var(--foundry_rmorls0)",
        Il = zl({
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
        kl = "var(--foundry_rmorls3)",
        Sl = "var(--foundry_rmorls1)",
        Ll = zl({
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
        Vl = r(2510);
      const Tl = (0, D.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Al = (0, D.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...a
        }, s) => {
          const n = Math.round(r / t * 100),
            o = "number" != typeof r || "number" != typeof t;
          return (0, P.jsx)(Tl.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: n,
              isInvalid: o
            },
            children: (0, P.jsx)(El, {
              ...a,
              ref: s
            })
          })
        }),
        El = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, a) => {
          const s = (0, B.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            n = t ? I.DX : "div";
          return (0, P.jsx)(n, {
            ...s,
            ref: a
          })
        }),
        Ml = (0, D.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, a) => {
          const {
            value: s,
            max: n,
            size: o
          } = (0, D.useContext)(Tl), i = (0, B.v6)({
            "data-testid": e,
            className: Il({
              size: o
            }),
            value: s,
            max: n,
            style: (0, Z.DI)({
              [kl]: t
            }),
            "data-track": !0
          }, r);
          return (0, P.jsx)(Vl.bL, {
            ref: a,
            ...i
          })
        }),
        ql = (0, D.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...a
        }, s) => {
          const {
            percentage: n,
            isInvalid: o
          } = (0, D.useContext)(Tl), i = o ? "-100%" : `-${100-n}%`, d = (0, B.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, Z.DI)({
              [Dl]: i,
              [Sl]: `${t}ms`,
              [Pl]: r
            })
          }, a);
          return (0, P.jsx)(Vl.C1, {
            ref: s,
            ...d
          })
        }),
        Bl = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, a) => {
          const {
            size: s
          } = (0, D.useContext)(Tl), n = (0, B.v6)({
            "data-testid": t,
            className: Rl({
              size: s
            }),
            "aria-hidden": !0
          }, r), o = e ? I.DX : "span";
          return (0, P.jsx)(o, {
            ref: a,
            ...n
          })
        }),
        Zl = (0, D.forwardRef)(({
          testId: e,
          format: t,
          ...r
        }, a) => {
          const {
            value: s,
            max: n,
            size: o,
            percentage: i,
            isInvalid: d
          } = (0, D.useContext)(Tl), l = (0, B.v6)({
            "data-testid": e,
            className: Rl({
              size: o
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, P.jsx)("span", {
            ref: a,
            ...l
          }) : "percentage" === t ? (0, P.jsxs)("span", {
            ref: a,
            ...l,
            children: [i, " ", (0, P.jsx)("span", {
              className: Ll({
                size: o
              }),
              children: "%"
            })]
          }) : (0, P.jsxs)("span", {
            ref: a,
            ...l,
            children: [s, "/", n]
          })
        })
    }
  }
]);