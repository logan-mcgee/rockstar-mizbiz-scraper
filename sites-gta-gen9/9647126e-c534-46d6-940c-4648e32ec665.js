try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9647126e-c534-46d6-940c-4648e32ec665", e._sentryDebugIdIdentifier = "sentry-dbid-9647126e-c534-46d6-940c-4648e32ec665")
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
  [2049], {
    72049(e, r, t) {
      t.r(r), t.d(r, {
        Accordion: () => O,
        Alert: () => p,
        AlertBanner: () => m,
        Avatar: () => x,
        Badge: () => g,
        Body: () => We,
        Breadcrumbs: () => v,
        Button: () => fe,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => $e,
        Dialog: () => w,
        Display: () => Ye,
        Divider: () => Ne,
        Dropdown: () => a,
        Heading: () => Je,
        IconButton: () => _e,
        Label: () => rr,
        Lightbox: () => o,
        Loader: () => qe,
        Pagination: () => _,
        Popover: () => C,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => b,
        Spinner: () => J,
        Switch: () => s,
        Tag: () => y,
        Text: () => or,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => nr,
        Toast: () => h,
        Tooltip: () => n
      });
      var n = {};
      t.r(n), t.d(n, {
        Arrow: () => hn,
        Content: () => yn,
        Portal: () => vn,
        Root: () => pn,
        Trigger: () => mn,
        useTooltipContext: () => fn
      });
      var o = {};
      t.r(o), t.d(o, {
        Caption: () => go,
        Close: () => jo,
        Content: () => po,
        Controls: () => bo,
        CssVars: () => Oo,
        Download: () => Po,
        Image: () => vo,
        Keyboard: () => xo,
        LightboxContext: () => no,
        OpenIcon: () => co,
        Overlay: () => fo,
        Portal: () => uo,
        Reset: () => Co,
        Root: () => oo,
        RootImplContext: () => ao,
        Thumbnail: () => lo,
        Trigger: () => io,
        Zoom: () => _o,
        ZoomPan: () => mo
      });
      var a = {};
      t.r(a), t.d(a, {
        Content: () => Ys,
        Description: () => oi,
        Hint: () => ai,
        Label: () => ni,
        Option: () => si,
        OptionIcon: () => di,
        OptionText: () => ii,
        Portal: () => li,
        Root: () => $s,
        ScrollArea: () => Js,
        StatusIcon: () => ui,
        StatusRoot: () => ci,
        StatusText: () => fi,
        Trigger: () => ei,
        TriggerIcon: () => ti,
        TriggerText: () => ri,
        Viewport: () => Qs,
        useDropdownContext: () => Us
      });
      var s = {};
      t.r(s), t.d(s, {
        Description: () => zi,
        Input: () => Ni,
        Label: () => Di,
        Root: () => Si,
        useSwitchContext: () => Ri
      });
      var i = {};
      t.r(i), t.d(i, {
        CheckLG: () => Ti,
        CheckMD: () => Ii,
        CheckXL: () => Li,
        DashLG: () => Vi,
        DashMD: () => Ei,
        DashXL: () => Ai
      });
      var d = {};
      t.r(d), t.d(d, {
        Description: () => td,
        ErrorText: () => nd,
        Group: () => sd,
        GroupDescription: () => dd,
        GroupErrorText: () => cd,
        GroupItems: () => ld,
        GroupLabel: () => id,
        Input: () => ed,
        Label: () => rd,
        Root: () => Ji,
        useGroupContext: () => ad
      });
      var l = {};
      t.r(l), t.d(l, {
        Description: () => Od,
        Hint: () => Rd,
        Input: () => Pd,
        Label: () => Cd,
        Root: () => jd,
        RootContext: () => xd,
        StatusIcon: () => Nd,
        StatusRoot: () => Sd,
        StatusText: () => Dd,
        useTextAreaContext: () => _d
      });
      var c = {};
      t.r(c), t.d(c, {
        DotLG: () => tl,
        DotMD: () => rl,
        DotXL: () => nl
      });
      var u = {};
      t.r(u), t.d(u, {
        Description: () => Kd,
        Input: () => al,
        Label: () => Zd,
        Option: () => ol,
        OptionDescription: () => il,
        OptionLabel: () => sl,
        Options: () => Gd,
        Root: () => Xd,
        StatusIcon: () => Wd,
        StatusRoot: () => Hd,
        StatusText: () => Ud,
        useRadioGroupContext: () => Fd
      });
      var f = {};
      t.r(f), t.d(f, {
        Button: () => Dl,
        Control: () => Rl,
        Description: () => kl,
        Hint: () => Ol,
        Icon: () => Nl,
        Input: () => Sl,
        Label: () => Pl,
        PasswordButton: () => zl,
        Root: () => Cl,
        StatusIcon: () => Tl,
        StatusRoot: () => Il,
        StatusText: () => Ll
      });
      var p = {};
      t.r(p), t.d(p, {
        Body: () => oc,
        CloseButton: () => fc,
        Description: () => dc,
        ErrorText: () => uc,
        Footer: () => cc,
        Header: () => nc,
        Icon: () => sc,
        Link: () => lc,
        Root: () => tc,
        RootContext: () => ec,
        Title: () => ic,
        iconStatusMap: () => ac,
        useAlertContext: () => rc
      });
      var m = {};
      t.r(m), t.d(m, {
        Alert: () => Dc,
        CloseButton: () => Ic,
        Description: () => Nc,
        Icon: () => Sc,
        Link: () => kc,
        PaginationCounter: () => Vc,
        PaginationNav: () => Tc,
        PaginationNextButton: () => Lc,
        PaginationPrevButton: () => Ec,
        PaginationViewport: () => zc,
        Root: () => Oc,
        RootContext: () => Cc,
        iconStatusMap: () => Rc,
        useAlertBannerContext: () => Pc
      });
      var y = {};
      t.r(y), t.d(y, {
        CloseButton: () => Qc,
        Icon: () => Yc,
        Label: () => $c,
        Root: () => Uc,
        RootContext: () => Hc,
        useTagContext: () => Wc
      });
      var h = {};
      t.r(h), t.d(h, {
        Action: () => tf,
        CloseButton: () => nf,
        Description: () => Ju,
        Icon: () => rf,
        Provider: () => Wu,
        Root: () => Qu,
        RootContext: () => $u,
        Viewport: () => Uu,
        iconAppearanceMap: () => ef,
        useToastContext: () => Yu
      });
      var v = {};
      t.r(v), t.d(v, {
        Icon: () => bf,
        Item: () => gf,
        OverflowMenu: () => wf,
        OverflowMenuItem: () => xf,
        Root: () => vf,
        RootContext: () => hf,
        useBreadcrumbsContext: () => yf
      });
      var g = {};
      t.r(g), t.d(g, {
        Icon: () => kf,
        Label: () => zf,
        Root: () => Df,
        useBadgeContext: () => Nf
      });
      var b = {};
      t.r(b), t.d(b, {
        Corner: () => Zf,
        Root: () => Bf,
        Scrollbar: () => Xf,
        Thumb: () => Gf,
        Viewport: () => Ff
      });
      var w = {};
      t.r(w), t.d(w, {
        ActionArea: () => yp,
        CloseButton: () => mp,
        Content: () => sp,
        Description: () => dp,
        Footer: () => hp,
        Header: () => up,
        HeaderButton: () => pp,
        HeaderTitle: () => fp,
        Layout: () => cp,
        Overlay: () => ap,
        Portal: () => op,
        Root: () => rp,
        ScrollArea: () => lp,
        Title: () => ip,
        Trigger: () => np
      });
      var x = {};
      t.r(x), t.d(x, {
        Image: () => Zp,
        Root: () => Gp,
        StatusIndicator: () => Kp,
        useAvatarContext: () => Xp
      });
      var _ = {};
      t.r(_), t.d(_, {
        Controls: () => am,
        Dropdown: () => cm,
        DropdownLabel: () => lm,
        Ellipsis: () => om,
        Item: () => rm,
        Label: () => fm,
        Next: () => nm,
        Option: () => um,
        Pages: () => em,
        Prev: () => tm,
        ResultsPerPage: () => dm,
        Root: () => Jp
      });
      var j = {};
      t.r(j), t.d(j, {
        Icon: () => fy,
        Item: () => uy,
        Label: () => my,
        Root: () => cy,
        StatusIndicator: () => py,
        useChipGroupContext: () => ly
      });
      var C = {};
      t.r(C), t.d(C, {
        Anchor: () => oh,
        Arrow: () => sh,
        Close: () => dh,
        Content: () => ah,
        Portal: () => ih,
        Root: () => eh,
        RootContext: () => Jy,
        Trigger: () => rh,
        TriggerButton: () => nh
      });
      var P = {};
      t.r(P), t.d(P, {
        Indicator: () => Bh,
        Label: () => Fh,
        Root: () => Ah,
        Track: () => qh,
        UnitLabel: () => Xh
      });
      var O = {};
      t.r(O), t.d(O, {
        Content: () => iv,
        Header: () => nv,
        Icon: () => av,
        Item: () => tv,
        Root: () => ev,
        Trigger: () => ov,
        TriggerIcon: () => sv
      });
      var R = t(39793),
        S = t(11350),
        N = t(93082),
        D = t(85427),
        z = t(15131),
        k = t(33949);
      const I = {
          enabled: {
            background: (0, D.Tm)(z.no.enabled.background),
            border: (0, D.Tm)(z.no.enabled.border),
            text: (0, D.Tm)(z.no.enabled.text),
            outline: (0, D.Tm)(z.no.enabled.outline)
          },
          hover: {
            background: (0, D.Tm)(z.no.hover.background),
            border: (0, D.Tm)(z.no.hover.border),
            text: (0, D.Tm)(z.no.hover.text),
            outline: (0, D.Tm)(z.no.hover.outline)
          },
          focus: {
            background: (0, D.Tm)(z.no.focus.background),
            border: (0, D.Tm)(z.no.focus.border),
            text: (0, D.Tm)(z.no.focus.text),
            outline: (0, D.Tm)(z.no.focus.outline)
          },
          pressed: {
            background: (0, D.Tm)(z.no.pressed.background),
            border: (0, D.Tm)(z.no.pressed.border),
            text: (0, D.Tm)(z.no.pressed.text),
            outline: (0, D.Tm)(z.no.pressed.outline)
          },
          disabled: {
            background: (0, D.Tm)(z.no.disabled.background),
            border: (0, D.Tm)(z.no.disabled.border),
            text: (0, D.Tm)(z.no.disabled.text),
            outline: (0, D.Tm)(z.no.disabled.outline)
          },
          loading: {
            background: (0, D.Tm)(z.no.loading.background),
            border: (0, D.Tm)(z.no.loading.border),
            text: (0, D.Tm)(z.no.loading.text),
            outline: (0, D.Tm)(z.no.loading.outline)
          }
        },
        T = ({
          refs: {
            buttonRef: e
          },
          config: {
            textLuminance: r,
            darkenLuminance: t,
            hoverLuminance: n,
            pressedLuminance: o
          },
          overrides: {
            backgroundColor: a,
            hoverColor: s,
            pressedColor: i,
            textColor: d
          },
          enabled: l = !1
        }, c = []) => {
          (0, N.useEffect)(() => {
            if (!e.current || !a || !l) return;
            const c = `${a}:${r}:${t}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, k.getOrSet)(c, () => {
                const e = (0, S.J1)(a);
                return {
                  text: d || (e > r ? D.LU.global.color.black.static[100] : D.LU.global.color.white.static[100]),
                  hover: s || (e >= t ? (0, S.e$)(a, n) : (0, S.a)(a, n)),
                  pressed: i || (e >= t ? (0, S.e$)(a, o) : (0, S.a)(a, o))
                }
              });
            return e.current.style.setProperty(I.enabled.background, a), e.current.style.setProperty(I.enabled.border, a), e.current.style.setProperty(I.enabled.text, u), e.current.style.setProperty(I.hover.background, f), e.current.style.setProperty(I.hover.border, f), e.current.style.setProperty(I.hover.text, u), e.current.style.setProperty(I.focus.background, f), e.current.style.setProperty(I.focus.border, f), e.current.style.setProperty(I.focus.text, u), e.current.style.setProperty(I.pressed.background, p), e.current.style.setProperty(I.pressed.border, p), e.current.style.setProperty(I.pressed.text, u), e.current.style.setProperty(I.loading.background, f), e.current.style.setProperty(I.loading.border, f), e.current.style.setProperty(I.loading.text, u), () => {
              e.current?.style.removeProperty(I.enabled.background), e.current?.style.removeProperty(I.enabled.border), e.current?.style.removeProperty(I.enabled.text), e.current?.style.removeProperty(I.hover.background), e.current?.style.removeProperty(I.hover.border), e.current?.style.removeProperty(I.hover.text), e.current?.style.removeProperty(I.focus.background), e.current?.style.removeProperty(I.focus.border), e.current?.style.removeProperty(I.focus.text), e.current?.style.removeProperty(I.pressed.background), e.current?.style.removeProperty(I.pressed.border), e.current?.style.removeProperty(I.pressed.text), e.current?.style.removeProperty(I.loading.background), e.current?.style.removeProperty(I.loading.border), e.current?.style.removeProperty(I.loading.text)
            }
          }, [e.current, r, t, n, o, a, s, i, d, l, ...c])
        };
      var L = t(46764),
        E = t(69088);
      t(54540);
      const V = (0, N.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        A = () => (0, N.useContext)(V),
        M = () => {
          const {
            platformScale: e
          } = A();
          return e
        };
      var q = t(89525);
      const B = e => "dark" === e ? q.xW.dark : q.xW.light;
      const F = () => k.IS_SERVER ? null : document.body;
      (0, N.forwardRef)(({
        children: e,
        className: r,
        container: t = F(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, N.useRef)(null),
          f = (0, L.UP)(u, c),
          p = (0, N.useRef)(t),
          {
            ratio: m,
            scale: y
          } = function(e) {
            const [r, t] = (0, N.useState)(e.platformScale || e.defaultPlatformScale), n = (0, N.useCallback)(r => {
              t(r), e.onPlatformScaleChange?.(r)
            }, [e.onPlatformScaleChange]), o = (0, N.useRef)([]), a = () => {
              if (!k.IS_SERVER) {
                for (const {
                    handler: e,
                    matchMedia: r
                  }
                  of o.current) r.removeEventListener("change", e);
                o.current = []
              }
            };
            return (0, N.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
              if (!k.IS_SERVER) {
                a();
                for (const e in q.wj) {
                  const r = window.matchMedia(q.wj[e]),
                    t = r => {
                      r.matches && n(e)
                    };
                  r.addEventListener("change", t), r.matches && n(e), o.current.push({
                    handler: t,
                    matchMedia: r
                  })
                }
              }
            })(), a), [e.platformScale, n]), {
              scale: r,
              ratio: q.nz[r]
            }
          }({
            onPlatformScaleChange: d,
            defaultPlatformScale: s,
            platformScale: i
          }),
          {
            appearanceClass: h,
            otherAppearanceClasses: v,
            providerColor: g
          } = function({
            colorScheme: e,
            defaultColorScheme: r = "dark"
          }) {
            const t = (0, L.Ub)("(prefers-color-scheme: light)"),
              n = (0, L.Ub)("(prefers-color-scheme: dark)"),
              o = "system" !== e && e || t && "light" || n && "dark" || r,
              a = (0, N.useMemo)(() => B(o), [o]),
              s = (0, N.useMemo)(() => (e => {
                const r = B(e);
                return [q.xW.light, q.xW.dark].filter(e => e !== r)
              })(o), [o]);
            return {
              appearanceClass: a,
              otherAppearanceClasses: s,
              providerColor: o
            }
          }({
            colorScheme: o,
            defaultColorScheme: a
          });
        return (({
          container: e,
          currentScale: r,
          appearanceClass: t,
          otherAppearanceClasses: n,
          locale: o,
          className: a
        }) => {
          const s = (0, L.ZC)(a),
            i = (0, L.ZC)(e.current);
          (0, N.useEffect)(() => {
            e.current?.classList.contains(q.X6) || e.current?.classList.add(q.X6), e.current?.classList.contains(q.yU) || e.current?.classList.add(q.yU), e.current?.classList.contains(q.Np) || e.current?.classList.add(q.Np), e.current?.classList.add(t), e.current?.classList.remove(...n), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
          }, [t, a]), (0, N.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, N.useEffect)(() => (r && e.current?.style.setProperty(q.HZ, r.toString()), () => {
            e.current?.style.removeProperty(q.HZ)
          }), [r]), (0, N.useEffect)(() => {
            i?.classList.remove(q.X6), i?.classList.remove(q.yU), i?.classList.remove(t), i?.style.removeProperty(q.HZ), a && i?.classList.remove(a)
          }, [i])
        })({
          locale: l,
          className: r,
          appearanceClass: h,
          otherAppearanceClasses: v,
          currentScale: i ? m : -0,
          container: n ? u : p
        }), (0, R.jsx)(V.Provider, {
          value: {
            locale: l,
            defaultColorScheme: a,
            colorScheme: g,
            defaultPlatformScale: s,
            platformScale: y
          },
          children: n ? (0, R.jsx)(E.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var X = t(77301);

      function G(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Z(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function K(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Z(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = G(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function H(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var W, U, $ = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Y = (W = {
          defaultClassName: "foundry_1d33zd11",
          variantClassNames: {
            size: {
              inlineMD: "foundry_1d33zd12",
              inlineLG: "foundry_1d33zd13",
              inlineXL: "foundry_1d33zd14",
              pageMD: "foundry_1d33zd15",
              pageLG: "foundry_1d33zd16",
              pageXL: "foundry_1d33zd17"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, U = e => {
          var r = W.defaultClassName,
            t = K(K({}, W.defaultVariants), e);
          for (var n in t) {
            var o, a = null !== (o = t[n]) && void 0 !== o ? o : W.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = W.variantClassNames[n][s];
              i && (r += " " + i)
            }
          }
          for (var [d, l] of W.compoundVariants) $(d, t, W.defaultVariants) && (r += " " + l);
          return r
        }, U.variants = () => Object.keys(W.variantClassNames), U.classNames = {
          get base() {
            return W.defaultClassName.split(" ")[0]
          },
          get variants() {
            return H(W.variantClassNames, e => H(e, e => e.split(" ")[0]))
          }
        }, U);
      const Q = "pageMD",
        J = (0, N.forwardRef)(({
          label: e,
          hideTrack: r = !1,
          size: t = Q,
          testId: n,
          ...o
        }, a) => {
          const s = M(),
            i = "string" == typeof t ? t : t?.[s] ?? t.default ?? Q,
            d = (0, k.mergeProps)({
              className: Y({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, R.jsx)(X.b, {
            label: e,
            children: (0, R.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!r && (0, R.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, R.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var ee = t(81270),
        re = t(11400);

      function te(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function ne(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function oe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ne(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = te(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ne(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ae(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var se = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        ie = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = oe(oe({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) se(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ae(e.variantClassNames, e => ae(e, e => e.split(" ")[0]))
            }
          }, r
        },
        de = ie({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_17pcofy3 foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav",
              link: "foundry_17pcofy9 foundry_1qqcnuao foundry_1qqcnuaw"
            },
            size: {
              SM: "foundry_17pcofya foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdj",
              MD: "foundry_17pcofyb foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj",
              LG: "foundry_17pcofyc foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
              XL: "foundry_17pcofyd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdj"
            },
            fullWidth: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            },
            iconLeft: {
              true: "foundry_17pcofyg",
              false: "foundry_17pcofyh"
            },
            iconRight: {
              true: "foundry_17pcofyi",
              false: "foundry_17pcofyj"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "SM",
              iconLeft: !0
            }, "foundry_17pcofyk"],
            [{
              size: "SM",
              iconRight: !0
            }, "foundry_17pcofyl"],
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_17pcofym"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_17pcofyn"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_17pcofyo"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_17pcofyp"],
            [{
              size: "XL",
              iconLeft: !0
            }, "foundry_17pcofyq"],
            [{
              size: "XL",
              iconRight: !0
            }, "foundry_17pcofyr"]
          ]
        });
      ie({
        defaultClassName: "foundry_17pcofys",
        variantClassNames: {
          isLoading: {
            true: "foundry_17pcofyt"
          },
          fullWidth: {
            true: "foundry_17pcofyu",
            false: "foundry_17pcofyv"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var le = ie({
          defaultClassName: "foundry_17pcofyw",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofyx",
              MD: "foundry_17pcofyy",
              LG: "foundry_17pcofyz",
              XL: "foundry_17pcofy10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ce = ie({
          defaultClassName: "foundry_17pcofy12",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofy13",
              false: "foundry_17pcofy14"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ue = ie({
          defaultClassName: "foundry_17pcofy17",
          variantClassNames: {
            size: {
              SM: "foundry_17pcofy18",
              MD: "foundry_17pcofy19",
              LG: "foundry_17pcofy1a",
              XL: "foundry_17pcofy1b"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const fe = (0, N.forwardRef)(({
        testId: e,
        asChild: r,
        children: t,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: a,
        iconRightLabel: s,
        appearance: i,
        size: d = "MD",
        fullWidth: l = !1,
        isLoading: c = !1,
        spinnerLabel: u,
        preventFocusOnPress: f = !1,
        override_darkenLuminance: p = .035,
        override_textLuminance: m = .179,
        override_hoverLuminance: y = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: v,
        override_hoverColor: g,
        override_pressedColor: b,
        override_textColor: w,
        ...x
      }, _) => {
        const j = (0, N.useRef)(null),
          C = (0, L.UP)(j, _),
          P = M(),
          O = "string" == typeof d ? d : d?.[P] ?? d.default ?? "MD",
          {
            buttonProps: S
          } = (0, L.sL)((0, k.mergeProps)(x, {
            isLoading: c,
            preventFocusOnPress: f
          }), j);
        T({
          refs: {
            buttonRef: j
          },
          config: {
            textLuminance: m,
            darkenLuminance: p,
            hoverLuminance: y,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: v,
            hoverColor: g,
            pressedColor: b,
            textColor: w
          },
          enabled: "accent" === i
        }, [r]);
        const D = (0, k.mergeProps)({
            className: de({
              appearance: i,
              size: O,
              fullWidth: l,
              iconLeft: !!n,
              iconRight: !!a
            }),
            "data-testid": e
          }, S),
          z = n && re[n],
          I = a && re[a],
          V = r ? E.DX : "button",
          A = l && (I || I && z);
        return (0, R.jsxs)(V, {
          ref: C,
          ...D,
          children: [A && (0, R.jsx)("div", {
            className: "foundry_17pcofy15"
          }), z && (0, R.jsx)(z, {
            label: o || "",
            size: O,
            className: (0, ee.clsx)(le({
              size: O
            }), "foundry_17pcofy11")
          }), (0, R.jsx)(E.xV, {
            children: t
          }), I && (0, R.jsx)(I, {
            label: s || "",
            size: O,
            className: (0, ee.clsx)(le({
              size: O
            }), ce({
              fullWidth: l
            }))
          }), c && (0, R.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, R.jsx)(J, {
              label: u || "",
              size: "inline" + ("XL" === O ? "LG" : "MD"),
              hideTrack: !0,
              className: ue({
                size: O
              })
            })
          })]
        })
      });

      function pe(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function me(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function ye(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? me(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = pe(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : me(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function he(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var ve = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        ge = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = ye(ye({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ve(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return he(e.variantClassNames, e => he(e, e => e.split(" ")[0]))
            }
          }, r
        },
        be = ge({
          defaultClassName: "foundry_a5x3khf",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khg",
              MD: "foundry_a5x3khh",
              LG: "foundry_a5x3khi",
              XL: "foundry_a5x3khj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        we = ge({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnuao foundry_1qqcnuap",
              secondary: "foundry_1qqcnuao foundry_1qqcnuaq",
              tertiary: "foundry_1qqcnuao foundry_1qqcnuar",
              ghost: "foundry_1qqcnuao foundry_1qqcnuas",
              danger: "foundry_1qqcnuao foundry_1qqcnuau",
              information: "foundry_1qqcnuao foundry_1qqcnuat",
              accent: "foundry_1qqcnuao foundry_1qqcnuav"
            },
            size: {
              SM: "foundry_a5x3kh9",
              MD: "foundry_a5x3kha",
              LG: "foundry_a5x3khb",
              XL: "foundry_a5x3khc"
            },
            fullWidth: {
              true: "foundry_a5x3khd",
              false: "foundry_a5x3khe"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xe = ge({
          defaultClassName: "foundry_a5x3khl",
          variantClassNames: {
            size: {
              SM: "foundry_a5x3khm",
              MD: "foundry_a5x3khn",
              LG: "foundry_a5x3kho",
              XL: "foundry_a5x3khp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const _e = (0, N.forwardRef)(({
        testId: e,
        asChild: r,
        icon: t,
        label: n,
        appearance: o,
        fullWidth: a = !1,
        size: s = "LG",
        children: i,
        isLoading: d = !1,
        spinnerLabel: l,
        preventFocusOnPress: c = !1,
        override_darkenLuminance: u = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: y,
        override_hoverColor: h,
        override_pressedColor: v,
        override_textColor: g,
        ...b
      }, w) => {
        const x = (0, N.useRef)(null),
          _ = (0, L.UP)(x, w),
          j = M(),
          C = "string" == typeof s ? s : s?.[j] ?? s.default ?? "LG",
          {
            buttonProps: P
          } = (0, L.sL)((0, k.mergeProps)(b, {
            isLoading: d,
            preventFocusOnPress: c
          }), x);
        T({
          refs: {
            buttonRef: x
          },
          config: {
            textLuminance: f,
            darkenLuminance: u,
            hoverLuminance: p,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: y,
            hoverColor: h,
            pressedColor: v,
            textColor: g
          },
          enabled: "accent" === o
        }, [r]);
        const O = (0, k.mergeProps)({
            className: we({
              appearance: o,
              size: C,
              fullWidth: a
            }),
            "data-testid": e
          }, P),
          S = re[t],
          D = r ? E.DX : "button";
        return (0, R.jsxs)(D, {
          ref: _,
          ...O,
          children: [S && (0, R.jsx)(S, {
            label: n || "",
            size: C,
            className: be({
              size: C
            })
          }), (0, R.jsx)(E.xV, {
            children: i
          }), d && (0, R.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, R.jsx)(J, {
              label: l || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: xe({
                size: C
              })
            })
          })]
        })
      });

      function je(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Ce(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Pe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ce(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = je(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ce(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Oe(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Re = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Se = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Pe(Pe({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Re(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Oe(e.variantClassNames, e => Oe(e, e => e.split(" ")[0]))
            }
          }, r
        })({
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
        });
      const Ne = (0, N.forwardRef)(({
        className: e,
        orientation: r = "horizontal",
        thickness: t = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...s
      }, i) => {
        const d = "horizontal" !== r || n ? "div" : "hr",
          l = n || "hr" === d ? void 0 : "separator",
          c = o ? E.DX : d;
        return (0, R.jsx)(c, {
          ref: i,
          className: (0, ee.clsx)(Se({
            thickness: t,
            orientation: r
          }), e),
          role: l,
          "aria-orientation": r,
          "data-testid": a,
          ...s
        })
      });

      function De(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function ze(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function ke(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ze(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = De(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ze(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ie(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Te = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Le = "var(--foundry_9dxgbc2)",
        Ee = "var(--foundry_9dxgbc3)",
        Ve = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = ke(ke({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Te(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ie(e.variantClassNames, e => Ie(e, e => e.split(" ")[0]))
            }
          }, r
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
        Ae = "var(--foundry_9dxgbc0)",
        Me = "var(--foundry_9dxgbc1)";
      const qe = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        children: t,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const d = M(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, k.mergeProps)({
            className: Ve({
              size: l
            }),
            "data-testid": r,
            style: (0, D.DI)({
              [Ae]: n?.pulseColorBackground,
              [Me]: n?.pulseColorForeground,
              [Le]: n?.gradientColorBackground,
              [Ee]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          u = e ? E.DX : "div";
        return (0, R.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, R.jsx)(E.xV, {
            children: t
          }) : (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, R.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Be(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Fe(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Xe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Fe(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Be(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Fe(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ge(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Ze = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Ke = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Xe(Xe({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ze(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ge(e.variantClassNames, e => Ge(e, e => e.split(" ")[0]))
            }
          }, r
        },
        He = Ke({
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
      const We = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? E.DX : "p",
          i = (0, k.mergeProps)({
            className: He({
              size: n,
              appearance: t
            })
          }, o);
        return (0, R.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var Ue = Ke({
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
      const $e = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "default",
          ...n
        }, o) => {
          const a = e ? E.DX : "p",
            s = (0, k.mergeProps)({
              className: Ue({
                appearance: t
              })
            }, n);
          return (0, R.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s
          })
        }),
        Ye = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = e ? E.DX : "h1",
            a = (0, k.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, t);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": r,
            ...a
          })
        });
      var Qe = Ke({
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
      const Je = (0, N.forwardRef)(({
        asChild: e,
        level: r,
        testId: t,
        ...n
      }, o) => {
        const a = e ? E.DX : `h${7===r?6:r}`,
          s = (0, k.mergeProps)(n, {
            className: Qe({
              level: r
            })
          });
        return (0, R.jsx)(a, {
          ref: o,
          "data-testid": t,
          ...s
        })
      });
      var er = Ke({
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
      const rr = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? E.DX : "p",
          i = (0, k.mergeProps)({
            className: er({
              size: n,
              appearance: t
            })
          }, o);
        return (0, R.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var tr = Ke({
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
      const nr = {
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
        or = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          semantic: t = "default",
          ...n
        }, o) => {
          const a = e ? E.DX : nr[t] || "span",
            s = (0, k.mergeProps)(n, {
              className: tr({
                semantic: t
              })
            });
          return (0, R.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s
          })
        });
      var ar = t(35812),
        sr = t(67347),
        ir = t(34811);
      const dr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((r, t) => {
        e.onload = () => r(), e.onerror = t
      }), lr = ([e, r]) => ({
        x: e,
        y: r
      }), cr = (e, r) => (e.x = r.x, e.y = r.y, e), ur = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, fr = (e, r = 3) => Number(parseFloat(`${e}`).toFixed(r)), pr = (e, r, t) => Math.min(Math.max(e, r), t);
      var mr = t(90004);

      function yr(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function hr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function vr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? hr(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = yr(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function gr(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var br = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        wr = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = vr(vr({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) br(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gr(e.variantClassNames, e => gr(e, e => e.split(" ")[0]))
            }
          }, r
        },
        xr = wr({
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
        _r = wr({
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
      ar.gsap.registerPlugin(sr.useGSAP);
      const jr = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Cr = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Pr = (0, D.Tm)("var(--foundry_1a74xwb0)");
      var Or = t(49764);
      const Rr = {
        "en-US": t.e(8936).then(t.bind(t, 78936)),
        "de-DE": t.e(3767).then(t.bind(t, 43767)),
        "es-ES": t.e(7877).then(t.bind(t, 97877)),
        "es-MX": t.e(4620).then(t.bind(t, 14620)),
        "fr-FR": t.e(1709).then(t.bind(t, 71709)),
        "it-IT": t.e(7215).then(t.bind(t, 97215)),
        "ja-JP": t.e(3264).then(t.bind(t, 3264)),
        "ko-KR": t.e(3462).then(t.bind(t, 3462)),
        "pl-PL": t.e(9529).then(t.bind(t, 69529)),
        "pt-BR": t.e(3477).then(t.bind(t, 23477)),
        "ru-RU": t.e(9199).then(t.bind(t, 19199)),
        "zh-CN": t.e(4546).then(t.bind(t, 54546)),
        "zh-TW": t.e(2210).then(t.bind(t, 82210))
      };
      class Sr {
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
          const r = this.slide["x" === e ? "width" : "height"] * this.currZoomLevel,
            t = this.slide.panAreaSize["x" === e ? "w" : "h"],
            n = this.slide.panAreaSize.safeArea["x" === e ? "w" : "h"] + 2 * this.slide.panAreaSize.safeArea[e];
          this.center[e] = this.currZoomLevel === this.slide.zoomLevels.initial ? Math.round((t - r - (t - n)) / 2) : Math.round((t - r) / 2), this.max[e] = r > t ? Math.round(t - r) : this.center[e], this.min[e] = r > t ? 0 : this.center[e]
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
        correctPan(e, r, t = !1) {
          return t ? r : pr(r, this.max[e], this.min[e])
        }
      }
      class Nr {
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
          slide: r
        }) {
          this.options = e, this.slide = r
        }
        update(e) {
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = fr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            r = e.w / this.elementSize.w,
            t = e.h / this.elementSize.h;
          return fr(t < r ? t : r)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return fr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class Dr {
        eventCallbacks = new Map;
        addEventListener(e, r) {
          this.eventCallbacks.has(e) || this.eventCallbacks.set(e, new Set), this.eventCallbacks.get(e)?.add(r)
        }
        removeEventListener(e, r) {
          this.eventCallbacks.has(e) && this.eventCallbacks.get(e)?.delete(r)
        }
        dispatch(e, r) {
          const t = r || new Event(e);
          return this.eventCallbacks.get(e)?.forEach(e => e(t)), t
        }
      }
      class zr {
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
          options: r
        }) {
          this.slide = e, this.options = r || {
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
          movement: [e, r]
        }) {
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(r) ? "x" : "y", cr(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: r,
            delta: [t, n]
          } = e, o = r > 1, a = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && a && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && a ? this.setPanWithFriction("x", this.slide.pan.x + t, .35) : (this.setPanWithFriction("x", this.slide.pan.x + t), this.setPanWithFriction("y", this.slide.pan.y + n))
        }
        end(e) {
          const r = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || r || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [r, t]
        }) {
          const n = {
              x: r,
              y: t
            },
            o = e;
          if (o.type.includes("cancel")) return;
          const a = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, r) => {
            const t = Math.abs(e.x - r.x),
              n = Math.abs(e.y - r.y);
            return Math.sqrt(t * t + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (cr(this.prevTap, {
            x: r,
            y: t
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, a))
        }
        finishPanGestureForAxis(e, r) {
          const {
            delta: [t, n]
          } = r, o = "x" === e ? t : n, a = this.slide.pan[e], s = a + o;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(a),
              r = this.getVerticalDragRatio(s);
            if (e < 0 && r < -.4 || e > 0 && r > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const i = this.slide.bounds.correctPan(e, s);
          a !== i && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = i)
        }
        setPanWithFriction(e, r, t) {
          if (this.slide.bounds.correctPan(e, r) !== r || t) {
            const n = Math.round(r - this.slide.pan[e]);
            this.slide.pan[e] += n * (t || .35)
          } else this.slide.pan[e] = r
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class kr {
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
        setup(e, r) {
          this.trigger = e, this.thumbnail = r, this.correctImageSize(), this.setTriggerBounds(), this.setTriggerStyles(), this.setThumbStyles()
        }
        update(e) {
          this.thumbnail = e, this.correctImageSize(), this.setTriggerBounds(), this.setTriggerStyles(), this.setThumbStyles()
        }
        resize() {
          this.setTriggerBounds(), this.setThumbStyles(), this.correctImageSize()
        }
        async loadPlaceholder(e) {
          e.src = this.thumbnail.currentSrc ?? "", await dr(e)
        }
        setTriggerBounds() {
          this.containerBounds = (e => {
            const r = e?.getBoundingClientRect() ?? {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            return {
              x: r.x,
              y: r.y,
              w: r.width,
              h: r.height
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
              r = this.thumbnail.naturalHeight,
              t = this.slide.panAreaSize.w / e,
              n = this.slide.panAreaSize.h / r;
            this.width = n > t ? this.slide.panAreaSize.w : e * n, this.height = t > n ? this.slide.panAreaSize.h : r * t
          }
        }
      }
      class Ir {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: r,
          delta: [t, n]
        }) {
          if (e) {
            let e = -n;
            1 === r.deltaMode ? e *= .05 : e *= r.deltaMode ? 1 : .002, e = 2 ** e;
            const t = this.slide.currZoomLevel * e;
            this.slide.zoomTo(t, {
              x: r.x,
              y: r.y
            })
          } else 1 === r.deltaMode && (t *= 18, n *= 18), this.slide.panTo(this.slide.pan.x - t, this.slide.pan.y - n)
        }
      }
      class Tr extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, r, t, n) {
          super(e), this.point = t, this.tapTarget = r, this.originalEvent = n
        }
      }
      class Lr extends Dr {
        slide;
        options;
        constructor({
          slide: e,
          options: r
        }) {
          super(), this.slide = e, this.options = r
        }
        updateOptions(e) {
          this.options = e
        }
        click(e, r) {
          const t = "IMG" === r.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("click", t, e, r)
        }
        tap(e, r) {
          const t = "IMG" === r.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("tap", t, e, r)
        }
        doubleTap(e, r) {
          const t = "IMG" === r.target?.tagName ? "img" : "bg";
          this.doClickOrTapAction("doubleTap", t, e, r)
        }
        doClickOrTapAction(e, r, t, n) {
          if (!this.dispatch(e, new Tr(e, r, t, n)).defaultPrevented) switch (this.options[e]) {
            case "none":
              break;
            case "close":
              this.slide.dispatch("close");
              break;
            case "zoom":
              this.slide.toggleZoom(t), this.slide.dispatch("animate");
              break;
            case "toggle-controls":
              this.slide.dispatch("toggle-controls");
              break;
            case "zoom-or-close":
              this.slide.currZoomLevel === this.slide.zoomLevels.initial ? this.slide.dispatch("close") : (this.slide.toggleZoom(t), this.slide.dispatch("animate"))
          }
        }
      }
      class Er {
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
          da: [r]
        }) {
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = lr(e), this.startZoomDistance = r, this.wasOverFitZoomLevel = !1, cr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [r]
        }) {
          const t = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = lr(e);
          let o = 1 / this.startZoomDistance * r * this.startZoomLevel;
          o > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), o < t ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (t - o) / (t / 1.2)) : o = t - .15 * (t - o) : o > n && (o = n + .05 * (o - n)), this.slide.pan.x = this.calculatePanForZoomLevel("x", o), this.slide.pan.y = this.calculatePanForZoomLevel("y", o), this.slide.setZoomLevel(o, o >= this.slide.zoomLevels.initial)
        }
        end() {
          this.slide.currZoomLevel < this.slide.zoomLevels.initial && !this.wasOverFitZoomLevel && this.slide.pinchToClose ? (this.animate = !1, this.slide.dispatch("close")) : this.correctZoomPan()
        }
        calculatePanForZoomLevel(e, r) {
          const t = r / this.startZoomLevel;
          return this.zoomPoint[e] - (this.startZoomPoint[e] - this.startPan[e]) * t
        }
        correctZoomPan(e) {
          0 === this.zoomPoint.x && (e = !0);
          const r = this.slide.currZoomLevel;
          let t, n = !0;
          r < this.slide.zoomLevels.initial ? t = this.slide.zoomLevels.initial : r > this.slide.zoomLevels.max ? t = this.slide.zoomLevels.max : (n = !1, t = r), this.slide.getControlsOpacity();
          const o = this.slide.getControlsOpacity() < 1,
            a = cr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = cr({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = r, cr(this.startPan, a)), n && (s = {
            x: this.calculatePanForZoomLevel("x", t),
            y: this.calculatePanForZoomLevel("y", t)
          }), this.slide.setZoomLevel(t, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(r, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || n || o) && (cr(this.slide.pan, s), this.slide.setZoomLevel(t))
        }
      }
      class Vr {
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
            const r = window.getComputedStyle(e, null),
              t = e.getBoundingClientRect();
            return {
              x: t.left + parseFloat(r.paddingLeft),
              y: t.top + parseFloat(r.paddingTop),
              w: t.width - parseFloat(r.paddingLeft) - parseFloat(r.paddingRight),
              h: t.height - parseFloat(r.paddingTop) - parseFloat(r.paddingBottom)
            }
          })(this.safeAreaTarget) : {
            w: this.w,
            h: this.h,
            x: 0,
            y: 0
          }
        }
      }
      class Ar extends Dr {
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
          height: r = 0,
          zoomLevelOptions: t,
          actionOptions: n,
          panAreaOptions: o,
          dragOptions: a
        }) {
          super(), this.width = e, this.height = r, this.opener = new kr({
            slide: this
          }), this.bounds = new Sr({
            slide: this
          }), this.dragHandler = new zr({
            options: a,
            slide: this
          }), this.scrollWheel = new Ir({
            slide: this
          }), this.zoomHandler = new Er({
            slide: this
          }), this.zoomLevels = new Nr({
            options: t,
            slide: this
          }), this.tapHandler = new Lr({
            options: n,
            slide: this
          }), this.panAreaSize = new Vr({
            options: o
          })
        }
        setup(e, r, t) {
          this.panAreaSize.setup(t), this.opener.setup(e, r), this.dragHandler.setup(), this.closing = !1, this.width = this.opener.width, this.height = this.opener.height, this.controlsVisible = !0, this.controlsOpacity = 1, this.calculateSize(), this.bounds.update(this.currZoomLevel)
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
        panTo(e, r, t) {
          this.pan.x = this.bounds.correctPan("x", e, t), this.pan.y = this.bounds.correctPan("y", r, t)
        }
        zoomTo(e, r, t) {
          const n = this.currZoomLevel;
          e = fr(e), t || (e = pr(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", r, n), this.pan.y = this.calculateZoomToPanOffset("y", r, n), ur(this.pan)
        }
        toggleZoom(e) {
          const r = this.currZoomLevel,
            t = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, r), this.pan.y = this.calculateZoomToPanOffset("y", e, r), ur(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), cr(this.pan, this.bounds.center)
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
        setZoomLevel(e, r = !0) {
          this.currZoomLevel = e, this.bounds.update(this.currZoomLevel), r && this.dispatch("zoom")
        }
        calculateSize() {
          this.zoomLevels.update({
            w: this.width,
            h: this.height
          })
        }
        calculateZoomToPanOffset(e, r, t) {
          if (0 === this.bounds.max[e] - this.bounds.min[e]) return this.bounds.center[e];
          r || (r = this.getPanAreaCenterPoint()), t || (t = this.zoomLevels.initial);
          const n = this.currZoomLevel / t;
          return this.bounds.correctPan(e, (this.pan[e] - r[e]) * n + r[e])
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
      var Mr = t(74268);
      const qr = (0, Or.YK)({
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
      var Br = "foundry_bc732x1";
      const Fr = (0, N.forwardRef)(({
        shortcut: e,
        isInline: r,
        onShortcut: t
      }, n) => ((0, mr.vC)(e, e => t?.(e), [t]), (0, R.jsx)(We, {
        size: "XS",
        className: (0, ee.clsx)("foundry_bc732x0", {
          [Br]: r
        }),
        asChild: !0,
        children: (0, R.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Xr = t(71433),
        Gr = t(39467),
        Zr = t(64239),
        Kr = t(54958),
        Hr = t(98410),
        Wr = t(94296),
        Ur = t(17966),
        $r = t(45750),
        Yr = t(13165),
        Qr = N.forwardRef((e, r) => {
          const {
            children: t,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, R.jsx)(Yr.sG.svg, {
            ...a,
            ref: r,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? t : (0, R.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Qr.displayName = "Arrow";
      var Jr = Qr,
        et = t(94660),
        rt = t(10198),
        tt = t(5024),
        nt = "Popper",
        [ot, at] = (0, Kr.A)(nt),
        [st, it] = ot(nt),
        dt = e => {
          const {
            __scopePopper: r,
            children: t
          } = e, [n, o] = N.useState(null), [a, s] = N.useState(void 0);
          return (0, R.jsx)(st, {
            scope: r,
            anchor: n,
            onAnchorChange: o,
            placementState: a,
            setPlacementState: s,
            children: t
          })
        };
      dt.displayName = nt;
      var lt = "PopperAnchor",
        ct = N.forwardRef((e, r) => {
          const {
            __scopePopper: t,
            virtualRef: n,
            ...o
          } = e, a = it(lt, t), s = N.useRef(null), i = a.onAnchorChange, d = N.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, Zr.s)(r, d), c = N.useRef(null);
          N.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && wt(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return n ? null : (0, R.jsx)(Yr.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...o,
            ref: l
          })
        });
      ct.displayName = lt;
      var ut = "PopperContent",
        [ft, pt] = ot(ut),
        mt = N.forwardRef((e, r) => {
          const {
            __scopePopper: t,
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
            onPlaced: m,
            ...y
          } = e, h = it(ut, t), [v, g] = N.useState(null), b = (0, Zr.s)(r, e => g(e)), [w, x] = N.useState(null), _ = (0, tt.X)(w), j = _?.width ?? 0, C = _?.height ?? 0, P = n + ("center" !== a ? "-" + a : ""), O = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, S = Array.isArray(l) ? l : [l], D = S.length > 0, z = {
            padding: O,
            boundary: S.filter(gt),
            altBoundary: D
          }, {
            refs: k,
            floatingStyles: I,
            placement: T,
            isPositioned: L,
            middlewareData: E
          } = (0, Ur.we)({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => (0, $r.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: h.anchor
            },
            middleware: [(0, Ur.cY)({
              mainAxis: o + C,
              alignmentAxis: s
            }), d && (0, Ur.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Ur.ER)() : void 0,
              ...z
            }), d && (0, Ur.UU)({
              ...z
            }), (0, Ur.Ej)({
              ...z,
              apply: ({
                elements: e,
                rects: r,
                availableWidth: t,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: a
                } = r.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${t}px`), s.setProperty("--radix-popper-available-height", `${n}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), w && (0, Ur.UE)({
              element: w,
              padding: i
            }), bt({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, Ur.jD)({
              strategy: "referenceHidden",
              ...z,
              boundary: D ? z.boundary : void 0
            })]
          }), V = h.setPlacementState;
          (0, rt.N)(() => (V(T), () => {
            V(void 0)
          }), [T, V]);
          const [A, M] = wt(T), q = (0, et.c)(m);
          (0, rt.N)(() => {
            L && q?.()
          }, [L, q]);
          const B = E.arrow?.x,
            F = E.arrow?.y,
            X = 0 !== E.arrow?.centerOffset,
            [G, Z] = N.useState();
          return (0, rt.N)(() => {
            v && Z(window.getComputedStyle(v).zIndex)
          }, [v]), (0, R.jsx)("div", {
            ref: k.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: L ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [E.transformOrigin?.x, E.transformOrigin?.y].join(" "),
              ...E.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, R.jsx)(ft, {
              scope: t,
              placedSide: A,
              placedAlign: M,
              onArrowChange: x,
              arrowX: B,
              arrowY: F,
              shouldHideArrow: X,
              children: (0, R.jsx)(Yr.sG.div, {
                "data-side": A,
                "data-align": M,
                ...y,
                ref: b,
                style: {
                  ...y.style,
                  animation: L ? void 0 : "none"
                }
              })
            })
          })
        });
      mt.displayName = ut;
      var yt = "PopperArrow",
        ht = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        vt = N.forwardRef(function(e, r) {
          const {
            __scopePopper: t,
            ...n
          } = e, o = pt(yt, t), a = ht[o.placedSide];
          return (0, R.jsx)("span", {
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
            children: (0, R.jsx)(Jr, {
              ...n,
              ref: r,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function gt(e) {
        return null !== e
      }
      vt.displayName = yt;
      var bt = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: t,
            rects: n,
            middlewareData: o
          } = r, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = wt(t), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], u = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let p = "",
            m = "";
          return "bottom" === d ? (p = a ? c : `${u}px`, m = -i + "px") : "top" === d ? (p = a ? c : `${u}px`, m = `${n.floating.height+i}px`) : "right" === d ? (p = -i + "px", m = a ? c : `${f}px`) : "left" === d && (p = `${n.floating.width+i}px`, m = a ? c : `${f}px`), {
            data: {
              x: p,
              y: m
            }
          }
        }
      });

      function wt(e) {
        const [r, t = "center"] = e.split("-");
        return [r, t]
      }
      var xt = dt,
        _t = ct,
        jt = mt,
        Ct = vt,
        Pt = t(92154),
        Ot = t(24817),
        Rt = t(17172),
        St = t(17038),
        Nt = t(84045),
        [Dt, zt] = (0, Kr.A)("Tooltip", [at]),
        kt = at(),
        It = "TooltipProvider",
        Tt = 700,
        Lt = "tooltip.open",
        [Et, Vt] = Dt(It),
        At = e => {
          const {
            __scopeTooltip: r,
            delayDuration: t = Tt,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = N.useRef(!0), i = N.useRef(!1), d = N.useRef(0);
          return N.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, R.jsx)(Et, {
            scope: r,
            isOpenDelayedRef: s,
            delayDuration: t,
            onOpen: N.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [n]),
            onClose: N.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: N.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      At.displayName = It;
      var Mt = "Tooltip",
        [qt, Bt] = Dt(Mt),
        Ft = e => {
          const {
            __scopeTooltip: r,
            children: t,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = Vt(Mt, e.__scopeTooltip), l = kt(r), [c, u] = N.useState(null), f = (0, Wr.B)(), p = N.useRef(0), m = s ?? d.disableHoverableContent, y = i ?? d.delayDuration, h = N.useRef(!1), [v, g] = (0, St.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Lt))) : d.onClose(), a?.(e)
            },
            caller: Mt
          }), b = N.useMemo(() => v ? h.current ? "delayed-open" : "instant-open" : "closed", [v]), w = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, h.current = !1, g(!0)
          }, [g]), x = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), _ = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              h.current = !0, g(!0), p.current = 0
            }, y)
          }, [y, g]);
          return N.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, R.jsx)(xt, {
            ...l,
            children: (0, R.jsx)(qt, {
              scope: r,
              contentId: f,
              open: v,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: N.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: N.useCallback(() => {
                m ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, m]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: m,
              children: t
            })
          })
        };
      Ft.displayName = Mt;
      var Xt = "TooltipTrigger",
        Gt = N.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...n
          } = e, o = Bt(Xt, t), a = Vt(Xt, t), s = kt(t), i = N.useRef(null), d = (0, Zr.s)(r, i, o.onTriggerChange), l = N.useRef(!1), c = N.useRef(!1), u = N.useCallback(() => l.current = !1, []);
          return N.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, R.jsx)(_t, {
            asChild: !0,
            ...s,
            children: (0, R.jsx)(Yr.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, Gr.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Gr.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Gr.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Gr.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, Gr.mK)(e.onBlur, o.onClose),
              onClick: (0, Gr.mK)(e.onClick, o.onClose)
            })
          })
        });
      Gt.displayName = Xt;
      var Zt = "TooltipPortal",
        [Kt, Ht] = Dt(Zt, {
          forceMount: void 0
        }),
        Wt = e => {
          const {
            __scopeTooltip: r,
            forceMount: t,
            children: n,
            container: o
          } = e, a = Bt(Zt, r);
          return (0, R.jsx)(Kt, {
            scope: r,
            forceMount: t,
            children: (0, R.jsx)(Ot.C, {
              present: t || a.open,
              children: (0, R.jsx)(Pt.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Wt.displayName = Zt;
      var Ut = "TooltipContent",
        $t = N.forwardRef((e, r) => {
          const t = Ht(Ut, e.__scopeTooltip),
            {
              forceMount: n = t.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Bt(Ut, e.__scopeTooltip);
          return (0, R.jsx)(Ot.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, R.jsx)(rn, {
              side: o,
              ...a,
              ref: r
            }) : (0, R.jsx)(Yt, {
              side: o,
              ...a,
              ref: r
            })
          })
        }),
        Yt = N.forwardRef((e, r) => {
          const t = Bt(Ut, e.__scopeTooltip),
            n = Vt(Ut, e.__scopeTooltip),
            o = N.useRef(null),
            a = (0, Zr.s)(r, o),
            [s, i] = N.useState(null),
            {
              trigger: d,
              onClose: l
            } = t,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = N.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = N.useCallback((e, r) => {
              const t = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, r, t = 5) {
                  const n = [];
                  switch (r) {
                    case "top":
                      n.push({
                        x: e.x - t,
                        y: e.y + t
                      }, {
                        x: e.x + t,
                        y: e.y + t
                      });
                      break;
                    case "bottom":
                      n.push({
                        x: e.x - t,
                        y: e.y - t
                      }, {
                        x: e.x + t,
                        y: e.y - t
                      });
                      break;
                    case "left":
                      n.push({
                        x: e.x + t,
                        y: e.y - t
                      }, {
                        x: e.x + t,
                        y: e.y + t
                      });
                      break;
                    case "right":
                      n.push({
                        x: e.x - t,
                        y: e.y - t
                      }, {
                        x: e.x - t,
                        y: e.y + t
                      })
                  }
                  return n
                }(n, function(e, r) {
                  const t = Math.abs(r.top - e.y),
                    n = Math.abs(r.bottom - e.y),
                    o = Math.abs(r.right - e.x),
                    a = Math.abs(r.left - e.x);
                  switch (Math.min(t, n, o, a)) {
                    case a:
                      return "left";
                    case o:
                      return "right";
                    case t:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(n, t.getBoundingClientRect())),
                a = function(e) {
                  const r = e.slice();
                  return r.sort((e, r) => e.x < r.x ? -1 : e.x > r.x ? 1 : e.y < r.y ? -1 : e.y > r.y ? 1 : 0),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const r = [];
                      for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        for (; r.length >= 2;) {
                          const e = r[r.length - 1],
                            t = r[r.length - 2];
                          if (!((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x))) break;
                          r.pop()
                        }
                        r.push(n)
                      }
                      r.pop();
                      const t = [];
                      for (let r = e.length - 1; r >= 0; r--) {
                        const n = e[r];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            r = t[t.length - 2];
                          if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                          t.pop()
                        }
                        t.push(n)
                      }
                      return t.pop(), 1 === r.length && 1 === t.length && r[0].x === t[0].x && r[0].y === t[0].y ? r : r.concat(t)
                    }(r)
                }([...o, ... function(e) {
                  const {
                    top: r,
                    right: t,
                    bottom: n,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: r
                  }, {
                    x: t,
                    y: r
                  }, {
                    x: t,
                    y: n
                  }, {
                    x: o,
                    y: n
                  }]
                }(r.getBoundingClientRect())]);
              i(a), u(!0)
            }, [u]);
          return N.useEffect(() => () => f(), [f]), N.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                r = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", r), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", r)
              }
            }
          }, [d, c, p, f]), N.useEffect(() => {
            if (s) {
              const e = e => {
                const r = e.target,
                  t = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(r) || c?.contains(r),
                  o = ! function(e, r) {
                    const {
                      x: t,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
                      const s = r[e],
                        i = r[a],
                        d = s.x,
                        l = s.y,
                        c = i.x,
                        u = i.y;
                      l > n != u > n && t < (c - d) * (n - l) / (u - l) + d && (o = !o)
                    }
                    return o
                  }(t, s);
                n ? f() : o && (f(), l())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, s, l, f]), (0, R.jsx)(rn, {
            ...e,
            ref: a
          })
        }),
        [Qt, Jt] = Dt(Mt, {
          isInside: !1
        }),
        en = (0, Rt.Dc)("TooltipContent"),
        rn = N.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Bt(Ut, t), l = kt(t), {
            onClose: c
          } = d;
          return N.useEffect(() => (document.addEventListener(Lt, c), () => document.removeEventListener(Lt, c)), [c]), N.useEffect(() => {
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
          }, [d.trigger, c]), (0, R.jsx)(Hr.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, R.jsxs)(jt, {
              "data-state": d.stateAttribute,
              ...l,
              ...i,
              ref: r,
              style: {
                ...i.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, R.jsx)(en, {
                children: n
              }), (0, R.jsx)(Qt, {
                scope: t,
                isInside: !0,
                children: (0, R.jsx)(Nt.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      $t.displayName = Ut;
      var tn = "TooltipArrow",
        nn = N.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...n
          } = e, o = kt(t);
          return Jt(tn, t).isInside ? null : (0, R.jsx)(Ct, {
            ...o,
            ...n,
            ref: r
          })
        });
      nn.displayName = tn;
      var on = At,
        an = Ft,
        sn = Gt,
        dn = Wt,
        ln = $t,
        cn = nn;
      const un = (0, N.createContext)(null);

      function fn() {
        const e = (0, N.useContext)(un);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const pn = ({
          children: e,
          delayDuration: r = 0,
          defaultOpen: t,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, L.ic)({
            defaultProp: t,
            prop: o.isOpen,
            onChange: n
          });
          return (0, R.jsx)(on, {
            delayDuration: r,
            children: (0, R.jsx)(un.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, R.jsx)(an, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        mn = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, n) => (0, R.jsx)(sn, {
          asChild: !0,
          "data-testid": r,
          ...t,
          ref: n,
          children: e
        })),
        yn = (0, N.forwardRef)(({
          testId: e,
          side: r = "top",
          sideOffset: t = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: a = !0,
          sticky: s = "partial",
          ...i
        }, d) => {
          const {
            isOpen: l
          } = fn(), c = (0, L.jt)(), u = (0, Xr.CS)(ln), f = (0, Xr.pn)(l, {
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
            config: Xr.$W.stiff,
            immediate: c
          }), p = (0, k.mergeProps)({
            "data-testid": e,
            side: r,
            align: n,
            sticky: s,
            sideOffset: t,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, R.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        hn = (0, N.forwardRef)(({
          testId: e
        }, r) => {
          const t = (0, k.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, R.jsx)(cn, {
            ...t,
            ref: r
          })
        }),
        vn = dn;
      var gn = t(81471),
        bn = t(99136),
        wn = t(52184),
        xn = t(97394),
        _n = ["PageUp", "PageDown"],
        jn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Cn = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Pn = "Slider",
        [On, Rn, Sn] = (0, xn.N)(Pn),
        [Nn, Dn] = (0, Kr.A)(Pn, [Sn]),
        [zn, kn] = Nn(Pn),
        In = N.forwardRef((e, r) => {
          const {
            name: t,
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
            form: m,
            ...y
          } = e, h = N.useRef(new Set), v = N.useRef(0), g = N.useRef(!1), b = "horizontal" === s ? En : Vn, [w = [], x] = (0, St.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const r = [...h.current];
              r[v.current]?.focus({
                preventScroll: !0,
                focusVisible: g.current
              }), g.current = !1, u(e)
            }
          }), _ = N.useRef(w);

          function j(e, r, {
            commit: t
          } = {
            commit: !1
          }) {
            const s = function(e) {
                if (!Number.isFinite(e)) return 0;
                const r = e.toString();
                if (r.includes("e")) {
                  const [e, t] = r.split("e"), n = e.split(".")[1] || "", o = Number(t);
                  return Math.max(0, n.length - o)
                }
                const t = r.split(".")[1];
                return t ? t.length : 0
              }(a),
              i = function(e, r) {
                const t = Math.pow(10, r);
                return Math.round(e * t) / t
              }(Math.round((e - n) / a) * a + n, s),
              l = (0, gn.q)(i, [n, o]);
            x((e = []) => {
              const n = function(e = [], r, t) {
                const n = [...e];
                return n[t] = r, n.sort((e, r) => e - r)
              }(e, l, r);
              if (function(e, r) {
                  if (r > 0) {
                    const t = function(e) {
                      return e.slice(0, -1).map((r, t) => e[t + 1] - r)
                    }(e);
                    return Math.min(...t) >= r
                  }
                  return !0
                }(n, d * a)) {
                v.current = n.indexOf(l);
                const r = String(n) !== String(e);
                return r && t && f(n), r ? n : e
              }
              return e
            })
          }
          return (0, R.jsx)(zn, {
            scope: e.__scopeSlider,
            name: t,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: v,
            thumbs: h.current,
            values: w,
            orientation: s,
            form: m,
            children: (0, R.jsx)(On.Provider, {
              scope: e.__scopeSlider,
              children: (0, R.jsx)(On.Slot, {
                scope: e.__scopeSlider,
                children: (0, R.jsx)(b, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: r,
                  onPointerDown: (0, Gr.mK)(y.onPointerDown, () => {
                    i || (_.current = w, g.current = !1)
                  }),
                  min: n,
                  max: o,
                  inverted: p,
                  onSlideStart: i ? void 0 : function(e) {
                    const r = function(e, r) {
                      if (1 === e.length) return 0;
                      const t = e.map(e => Math.abs(e - r)),
                        n = Math.min(...t);
                      return t.indexOf(n)
                    }(w, e);
                    j(e, r)
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
                    direction: r
                  }) => {
                    if (!i) {
                      g.current = !0;
                      const t = _n.includes(e.key) || e.shiftKey && jn.includes(e.key) ? 10 : 1,
                        n = v.current;
                      j(w[n] + a * t * r, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      In.displayName = Pn;
      var [Tn, Ln] = Nn(Pn, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), En = N.forwardRef((e, r) => {
        const {
          min: t,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: d,
          onStepKeyDown: l,
          ...c
        } = e, [u, f] = N.useState(null), p = (0, Zr.s)(r, e => f(e)), m = N.useRef(void 0), y = (0, bn.jH)(o), h = "ltr" === y, v = h && !a || !h && a;

        function g(e) {
          const r = m.current || u.getBoundingClientRect(),
            o = eo([0, r.width], v ? [t, n] : [n, t]);
          return m.current = r, o(e - r.left)
        }
        return (0, R.jsx)(Tn, {
          scope: e.__scopeSlider,
          startEdge: v ? "left" : "right",
          endEdge: v ? "right" : "left",
          direction: v ? 1 : -1,
          size: "width",
          children: (0, R.jsx)(An, {
            dir: y,
            "data-orientation": "horizontal",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const r = g(e.clientX);
              s?.(r)
            },
            onSlideMove: e => {
              const r = g(e.clientX);
              i?.(r)
            },
            onSlideEnd: () => {
              m.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const r = Cn[v ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), Vn = N.forwardRef((e, r) => {
        const {
          min: t,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = N.useRef(null), u = (0, Zr.s)(r, c), f = N.useRef(void 0), p = !o;

        function m(e) {
          const r = f.current || c.current.getBoundingClientRect(),
            o = eo([0, r.height], p ? [n, t] : [t, n]);
          return f.current = r, o(e - r.top)
        }
        return (0, R.jsx)(Tn, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, R.jsx)(An, {
            "data-orientation": "vertical",
            ...l,
            ref: u,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const r = m(e.clientY);
              a?.(r)
            },
            onSlideMove: e => {
              const r = m(e.clientY);
              s?.(r)
            },
            onSlideEnd: () => {
              f.current = void 0, i?.()
            },
            onStepKeyDown: e => {
              const r = Cn[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), An = N.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = kn(Pn, t);
        return (0, R.jsx)(Yr.sG.span, {
          ...l,
          ref: r,
          onKeyDown: (0, Gr.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : _n.concat(jn).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, Gr.mK)(e.onPointerDown, e => {
            const r = e.target;
            r.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(r) ? r.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : n(e)
          }),
          onPointerMove: (0, Gr.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, Gr.mK)(e.onPointerUp, e => {
            const r = e.target;
            r.hasPointerCapture(e.pointerId) && (r.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Mn = "SliderTrack", qn = N.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          ...n
        } = e, o = kn(Mn, t);
        return (0, R.jsx)(Yr.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: r
        })
      });
      qn.displayName = Mn;
      var Bn = "SliderRange",
        Fn = N.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...n
          } = e, o = kn(Bn, t), a = Ln(Bn, t), s = N.useRef(null), i = (0, Zr.s)(r, s), d = o.values.length, l = o.values.map(e => Jn(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, R.jsx)(Yr.sG.span, {
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
      Fn.displayName = Bn;
      var Xn = "SliderThumb",
        [Gn, Zn] = Nn(Xn),
        Kn = "SliderThumbProvider";

      function Hn(e) {
        const {
          __scopeSlider: r,
          name: t,
          children: n,
          internal_do_not_use_render: o
        } = e, a = kn(Kn, r), s = Rn(r), [i, d] = N.useState(null), l = N.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, tt.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = t ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), m = void 0 === f ? 0 : Jn(f, a.min, a.max);
        N.useEffect(() => {
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
          percent: m,
          size: c
        };
        return (0, R.jsx)(Gn, {
          scope: r,
          ...y,
          children: ro(o) ? o(y) : n
        })
      }
      Hn.displayName = Kn;
      var Wn = "SliderThumbTrigger",
        Un = N.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...n
          } = e, o = kn(Wn, t), a = Ln(Wn, t), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Zn(Wn, t), u = (0, Zr.s)(r, e => c(e)), f = function(e, r) {
            return r > 2 ? `Value ${e+1} of ${r}` : 2 === r ? ["Minimum", "Maximum"][e] : void 0
          }(s, o.values.length), p = l?.[a.size], m = p ? function(e, r, t) {
            const n = e / 2;
            return (n - eo([0, 50], [0, n])(r) * t) * t
          }(p, d, a.direction) : 0;
          return (0, R.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${m}px)`
            },
            children: (0, R.jsx)(On.ItemSlot, {
              scope: t,
              children: (0, R.jsx)(Yr.sG.span, {
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
                onFocus: (0, Gr.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      Un.displayName = Wn;
      var $n = N.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          name: n,
          ...o
        } = e;
        return (0, R.jsx)(Hn, {
          __scopeSlider: t,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Un, {
              ...o,
              ref: r,
              __scopeSlider: t
            }), n ? (0, R.jsx)(Qn, {
              __scopeSlider: t
            }, e) : null]
          })
        })
      });
      $n.displayName = Xn;
      var Yn = "SliderBubbleInput",
        Qn = N.forwardRef(({
          __scopeSlider: e,
          ...r
        }, t) => {
          const {
            value: n,
            name: o,
            form: a
          } = Zn(Yn, e), s = N.useRef(null), i = (0, Zr.s)(s, t), d = (0, wn.Z)(n);
          return N.useEffect(() => {
            const e = s.current;
            if (!e) return;
            const r = window.HTMLInputElement.prototype,
              t = Object.getOwnPropertyDescriptor(r, "value").set;
            if (d !== n && t) {
              const r = new Event("input", {
                bubbles: !0
              });
              t.call(e, n), e.dispatchEvent(r)
            }
          }, [d, n]), (0, R.jsx)(Yr.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: a,
            ...r,
            ref: i,
            defaultValue: n
          })
        });

      function Jn(e, r, t) {
        const n = 100 / (t - r) * (e - r);
        return (0, gn.q)(n, [0, 100])
      }

      function eo(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const n = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + n * (t - e[0])
        }
      }

      function ro(e) {
        return "function" == typeof e
      }
      Qn.displayName = Yn;
      var to = t(22948);
      const no = (0, N.createContext)({
          triggerRef: (0, N.createRef)(),
          triggerBorderRef: (0, N.createRef)(),
          thumbnailRef: (0, N.createRef)(),
          openIconRef: (0, N.createRef)(),
          overlayRef: (0, N.createRef)(),
          contentRef: (0, N.createRef)(),
          containerRef: (0, N.createRef)(),
          imageRef: (0, N.createRef)(),
          placeholderRef: (0, N.createRef)(),
          zoomPanRef: (0, N.createRef)(),
          captionRef: (0, N.createRef)(),
          controlsRef: (0, N.createRef)(),
          closeRef: (0, N.createRef)(),
          zoomRef: (0, N.createRef)(),
          zoomInRef: (0, N.createRef)(),
          zoomSliderRef: (0, N.createRef)(),
          zoomOutRef: (0, N.createRef)(),
          resetRef: (0, N.createRef)(),
          downloadRef: (0, N.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        oo = ({
          altText: e,
          open: r,
          onOpenChange: t,
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
          const f = (() => {
              const {
                locale: e
              } = A();
              return e
            })(),
            p = (0, L.rl)(),
            m = (0, N.useRef)(null),
            y = (0, N.useRef)(null),
            h = (0, N.useRef)(null),
            v = (0, N.useRef)(null),
            g = (0, N.useRef)(null),
            b = (0, N.useRef)(null),
            w = (0, N.useRef)(null),
            x = (0, N.useRef)(null),
            _ = (0, N.useRef)(null),
            j = (0, N.useRef)(null),
            C = (0, N.useRef)(null),
            P = (0, N.useRef)(null),
            O = (0, N.useRef)(null),
            S = (0, N.useRef)(null),
            D = (0, N.useRef)(null),
            z = (0, N.useRef)(null),
            k = (0, N.useRef)(null),
            I = (0, N.useRef)(null),
            T = (0, N.useRef)(null),
            [E = !1, V] = (0, L.ic)({
              prop: r || n,
              onChange: t
            }),
            M = (0, N.useRef)(null);
          return M.current || (M.current = new Ar({
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
          })), (0, R.jsx)(Or.Dk, {
            messages: Rr,
            locale: f,
            children: (0, R.jsx)(no.Provider, {
              value: {
                triggerRef: m,
                triggerBorderRef: y,
                thumbnailRef: h,
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
                zoomRef: S,
                zoomInRef: D,
                zoomSliderRef: z,
                zoomOutRef: k,
                resetRef: I,
                downloadRef: T,
                open: E,
                setOpen: V,
                altText: e,
                hideTrigger: c,
                slide: M.current
              },
              children: (0, R.jsx)(so, {
                ...u
              })
            })
          })
        },
        ao = (0, N.createContext)({
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
        so = ({
          ...e
        }) => {
          const {
            open: r
          } = (0, N.useContext)(no), {
            onOpenChange: t,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, sr.useGSAP)(), {
              slide: r,
              setOpen: t,
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
            } = (0, N.useContext)(no), p = (0, N.useRef)(null);
            p.current || (p.current = ar.gsap.timeline({
              defaults: jr
            }));
            const m = (0, N.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const r = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of r)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              y = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), d.current && i.current && (r.opening = !0, r.setup(i.current, d.current), r.zoomAndPanToInitial(), ar.gsap.set([u.current, f.current], {
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
                }), ar.gsap.set([f.current], {
                  visibility: "hidden"
                }), await r.opener.loadPlaceholder(u.current), p.current.clear(), u.current && (p.current.to([u.current, f.current], {
                  border: "initial",
                  padding: "initial",
                  margin: "initial",
                  overflow: "hidden",
                  clip: "initial",
                  whiteSpace: "initial",
                  overflowWrap: "initial",
                  width: () => r.opener.containerBounds.w,
                  height: () => r.opener.containerBounds.h,
                  objectFit: r.opener.placeholderFit,
                  objectPosition: r.opener.placeholderPosition,
                  scale: r.opener.placeholderScale,
                  transform: r.opener.placeholderTransform,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), p.current.to([c.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), p.current.to([l.current], {
                  x: () => r.opener.containerBounds.x,
                  y: () => r.opener.containerBounds.y,
                  width: () => r.opener.containerBounds.w,
                  height: () => r.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), n && p.current.to([s.current, i.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([u.current, f.current], {
                  opacity: r.opener.containerOpacity,
                  borderRadius: r.opener.placeholderRadius,
                  clipPath: r.opener.placeholderClip,
                  duration: 0
                }), p.current.fromTo([l.current], {
                  x: () => r.opener.containerBounds.x,
                  y: () => r.opener.containerBounds.y,
                  width: () => r.opener.containerBounds.w,
                  height: () => r.opener.containerBounds.h,
                  borderRadius: () => r.opener.placeholderRadius
                }, {
                  x: 0,
                  y: 0,
                  width: () => r.panAreaSize.w,
                  height: () => r.panAreaSize.h,
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
                  scale: () => r.opener.placeholderScale,
                  transform: () => r.opener.placeholderTransform,
                  objectPosition: () => r.opener.placeholderPosition,
                  objectFit: () => r.opener.placeholderFit,
                  width: () => r.opener.containerBounds.w,
                  height: () => r.opener.containerBounds.h,
                  opacity: r.opener.containerOpacity,
                  borderRadius: () => r.opener.placeholderRadius,
                  clipPath: () => r.opener.placeholderClip
                }, {
                  opacity: 1,
                  borderRadius: 0,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  width: () => r.opener.width,
                  height: () => r.opener.height,
                  transform: "translate(0, 0) scale(1)",
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([c.current], {
                  x: () => 0,
                  y: () => 0,
                  scale: () => 1
                }, {
                  x: () => r.pan.x ?? 0,
                  y: () => r.pan.y ?? 0,
                  scale: () => r.getCurrentScale() ?? 1,
                  transformOrigin: "0px 0px",
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([o.current], {
                  opacity: 0
                }, {
                  opacity: () => r.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([a.current], {
                  opacity: 0,
                  [Pr]: "none"
                }, {
                  opacity: () => r.getControlsOpacity(),
                  [Pr]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), r.opening = !1, r.dispatch("zoom"), r.closing || await dr(f.current), r.closing || (ar.gsap.set([f.current], {
                  visibility: "visible",
                  ...Cr
                }), ar.gsap.set([u.current], {
                  visibility: "hidden",
                  ...Cr
                }))))
              }),
              h = e(async () => {
                r.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              v = (0, N.useCallback)(async e => {
                e || (window.addEventListener("click", m), await h(), window.removeEventListener("click", m)), t(e)
              }, [t]),
              g = (0, N.useCallback)(() => v(!1), [v]);
            return {
              onOpenChange: v,
              openAnim: y,
              close: g
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
              contextSafe: r
            } = (0, sr.useGSAP)(), {
              slide: t,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, N.useContext)(no), d = r(async e => {
              t.zoomTo(e), ar.gsap.set([o.current], {
                ...t.getCurrentTransform(),
                ...Cr
              })
            }), l = r(async () => {
              t.zoomTo(t.currZoomLevel + t.zoomLevels.step), ar.gsap.to([o.current], {
                ...t.getCurrentTransform(),
                ...Cr
              })
            }), c = r(async () => {
              t.zoomTo(t.currZoomLevel - t.zoomLevels.step), ar.gsap.to([o.current], {
                ...t.getCurrentTransform(),
                ...Cr
              })
            }), u = r(async () => {
              t.zoomAndPanToInitial(), ar.gsap.to([o.current], {
                ...t.getCurrentTransform(),
                ...Cr
              })
            }), f = r(async () => {
              if (t.closing) return;
              t.toggleControls();
              const e = t.getControlsOpacity(),
                r = 1 === e ? "auto" : "none";
              ar.gsap.to([a.current], {
                opacity: e,
                [Pr]: r,
                ...Cr
              })
            }), p = r(async () => {
              ar.gsap.to([o.current], {
                ...t.getCurrentTransform(),
                ...Cr
              })
            }), m = (0, N.useCallback)(() => {
              n.current && o.current && (ar.gsap.set([o.current], {
                ...t.getCurrentTransform(),
                ...Cr
              }), ar.gsap.set([n.current, i.current], {
                ...t.getUpdatedContentSize(),
                ...Cr
              }), ar.gsap.set([s.current], {
                width: t.panAreaSize.w,
                height: t.panAreaSize.h
              }))
            }, []);
            return (0, N.useEffect)(() => (t.addEventListener("close", e), t.addEventListener("animate", p), t.addEventListener("toggle-controls", f), t.addEventListener("resize", m), window.addEventListener("resize", t.resize.bind(t)), () => {
              t.removeEventListener("close", e), t.removeEventListener("animate", p), t.removeEventListener("toggle-controls", f), t.removeEventListener("resize", m), window.removeEventListener("resize", t.resize.bind(t))
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
          }), u = (0, k.mergeProps)(e, {
            open: r,
            onOpenChange: t
          });
          return (0, R.jsx)(ao.Provider, {
            value: {
              update: a,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: i,
              zoomTo: d,
              resetZoom: l,
              toggleControls: c,
              onOpenChange: t
            },
            children: (0, R.jsx)(to.bL, {
              ...u
            })
          })
        },
        io = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, n) {
          const o = (0, Or.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, N.useContext)(no),
            d = (0, L.UP)(a, n),
            l = (0, k.mergeProps)(t, {
              "data-testid": e,
              "aria-label": o.formatMessage(qr.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, R.jsx)(to.l9, {
            ref: d,
            ...l,
            children: (0, R.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, R.jsx)(E.xV, {
                children: r
              })
            })
          })
        }),
        lo = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, n) {
          const {
            thumbnailRef: o
          } = (0, N.useContext)(no), a = (0, L.UP)(o, n), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = r ? E.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        co = (0, N.forwardRef)(function({
          asChild: e,
          ...r
        }, t) {
          const {
            openIconRef: n
          } = (0, N.useContext)(no), o = (0, L.UP)(n, t), a = (0, k.mergeProps)(r, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? E.DX : re.Maximize2;
          return (0, R.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        uo = ({
          ...e
        }) => (0, R.jsx)(to.ZL, {
          ...e
        }),
        fo = (0, N.forwardRef)(function({
          testId: e,
          ...r
        }, t) {
          const {
            overlayRef: n
          } = (0, N.useContext)(no), o = (0, L.UP)(n, t), a = (0, k.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, R.jsx)(to.hJ, {
            ref: o,
            ...a
          })
        }),
        po = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, n) {
          const {
            openAnim: o
          } = (0, N.useContext)(ao), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, N.useContext)(no), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, N.useContext)(no), [r, t] = (0, N.useState)(e.getCursor()), n = (0, N.useCallback)(() => {
              t(e.getCursor())
            }, []);
            return (0, N.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: r
            }
          })(), l = (0, Mr.m)("dark"), c = (0, L.UP)(a, n), u = (0, k.mergeProps)(t, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, r) => {
              e?.preventDefault(), r.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, ee.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, R.jsxs)(to.UC, {
            ref: c,
            ...u,
            children: [(0, R.jsx)(E.s6, {
              children: (0, R.jsx)(to.hE, {
                children: s
              })
            }), r]
          })
        }),
        mo = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, n) {
          const {
            containerRef: o
          } = (0, N.useContext)(no);
          (() => {
            const {
              contextSafe: e
            } = (0, sr.useGSAP)(), {
              toggleControls: r
            } = (0, N.useContext)(ao), {
              containerRef: t,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, N.useContext)(no), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (ar.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Cr
              }), ar.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Cr
              }), ar.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Cr
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || ar.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Cr
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (ar.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Cr
              }), ar.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Cr
              }), ar.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Cr
              })))
            }), c = (0, N.useCallback)(() => {
              s.controlsVisible || r()
            }, [, r]);
            (0, L.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, ir.NH)({
              onWheel: d,
              onDrag: i,
              onPinch: l
            }, {
              target: t,
              drag: {
                filterTaps: !0
              },
              pinch: {
                pinchOnWheel: !1
              }
            })
          })();
          const a = (0, L.UP)(o, n),
            s = (0, k.mergeProps)(t, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, R.jsx)("div", {
            ref: a,
            ...s,
            children: (0, R.jsxs)(yo, {
              children: [(0, R.jsx)(ho, {}), r]
            })
          })
        }),
        yo = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, n) {
          const {
            zoomPanRef: o
          } = (0, N.useContext)(no), a = (0, L.UP)(o, n), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = r ? E.DX : "div";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ho = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, n) {
          const {
            placeholderRef: o
          } = (0, N.useContext)(no), a = (0, L.UP)(o, n), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = r ? E.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        vo = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, n) {
          const {
            imageRef: o
          } = (0, N.useContext)(no), a = (0, L.UP)(o, n), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = r ? E.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        go = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, n) {
          const {
            captionRef: o
          } = (0, N.useContext)(no), a = (0, L.UP)(o, n), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = r ? E.DX : "p";
          return (0, R.jsx)(to.VY, {
            asChild: !0,
            children: (0, R.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        bo = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, n) {
          const {
            controlsRef: o
          } = (0, N.useContext)(no);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: r,
              zoomOut: t,
              resetZoom: n,
              close: o
            } = (0, N.useContext)(ao);
            (0, mr.vC)(["+", "=", "add", "plus"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, mr.vC)(["minus", "subtract"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, mr.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, mr.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, L.UP)(o, n),
            s = (0, k.mergeProps)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = r ? E.DX : "div";
          return (0, R.jsx)(mr.Hb, {
            children: (0, R.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        wo = ({
          content: e,
          metadata: r,
          enabled: t = !0,
          children: n,
          ...o
        }) => {
          if (!t) return (0, R.jsx)(R.Fragment, {
            children: n
          });
          const a = (0, k.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, R.jsxs)(pn, {
            delayDuration: 0,
            children: [(0, R.jsx)(mn, {
              children: n
            }), (0, R.jsxs)(yn, {
              ...a,
              children: [(0, R.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, r && (0, R.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: r
                })]
              }), (0, R.jsx)(hn, {})]
            })]
          })
        },
        xo = (0, N.forwardRef)(function({
          ...e
        }, r) {
          const t = (0, k.mergeProps)(e, {
            isInline: !0
          });
          return (0, R.jsx)(Fr, {
            ref: r,
            ...t
          })
        }),
        _o = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, Or.tz)(),
            {
              zoomRef: i
            } = (0, N.useContext)(no),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: m,
              zoomTo: y
            } = (() => {
              const {
                slide: e
              } = (0, N.useContext)(no), {
                zoomIn: r,
                zoomOut: t,
                zoomTo: n
              } = (0, N.useContext)(ao), [o, a] = (0, N.useState)(!1), [s, i] = (0, N.useState)(!1), [d, l] = (0, N.useState)(0), [c, u] = (0, N.useState)(0), [f, p] = (0, N.useState)(0), m = (0, N.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), y = (0, N.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, N.useEffect)(() => (e.addEventListener("zoom", m), () => {
                e.removeEventListener("zoom", m)
              }), [m]), {
                zoomTo: y,
                zoomIn: r,
                zoomOut: t,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            h = (0, L.UP)(i, a),
            v = (0, k.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = r ? E.DX : "div";
          return (0, R.jsxs)(g, {
            ref: h,
            ...v,
            children: [(0, R.jsx)(wo, {
              side: "left",
              enabled: t,
              content: s.formatMessage(qr.ZoomInButtonLabel),
              metadata: s.formatMessage(qr.ZoomInButtonTooltip, {
                shortcut: (0, R.jsx)(xo, {
                  shortcut: "+"
                })
              }),
              children: (0, R.jsx)(_e, {
                label: s.formatMessage(qr.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: _r({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, R.jsxs)(In, {
              className: "foundry_1a74xwbt",
              max: m,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, R.jsx)(qn, {
                className: "foundry_1a74xwbu",
                children: (0, R.jsx)(Fn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, R.jsx)(wo, {
                side: "left",
                enabled: t,
                content: s.formatMessage(qr.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, R.jsx)($n, {
                  className: "foundry_1a74xwbw",
                  children: (0, R.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, R.jsx)(wo, {
              side: "left",
              enabled: t,
              content: s.formatMessage(qr.ZoomOutButtonLabel),
              metadata: s.formatMessage(qr.ZoomOutButtonTooltip, {
                shortcut: (0, R.jsx)(xo, {
                  shortcut: "-"
                })
              }),
              children: (0, R.jsx)(_e, {
                label: s.formatMessage(qr.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: _r({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, R.jsx)(E.xV, {
              children: n
            })]
          })
        }),
        jo = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          ...n
        }, o) {
          const a = (0, Or.tz)(),
            {
              closeRef: s
            } = (0, N.useContext)(no),
            i = (0, L.UP)(s, o),
            d = (0, k.mergeProps)(n, {
              "data-testid": e,
              className: xr({
                styled: !r
              })
            }),
            l = r ? (0, R.jsx)(E.DX, {
              ref: i,
              ...d
            }) : (0, R.jsx)(_e, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(qr.CloseButtonLabel)
            });
          return (0, R.jsx)(wo, {
            side: "right",
            enabled: t,
            content: a.formatMessage(qr.CloseButtonLabel),
            metadata: a.formatMessage(qr.CloseButtonTooltip, {
              shortcut: (0, R.jsx)(xo, {
                shortcut: "Esc"
              })
            }),
            children: (0, R.jsx)(to.bm, {
              asChild: !0,
              children: l
            })
          })
        }),
        Co = (0, N.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, n) {
          const o = (0, Or.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: r
              } = (0, N.useContext)(no), {
                contextSafe: t
              } = (0, sr.useGSAP)(), {
                resetZoom: n
              } = (0, N.useContext)(ao), [o, a] = (0, N.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = t(e => {
                ar.gsap.to([r.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Cr
                })
              }), i = (0, N.useCallback)(() => {
                const r = e.currZoomLevel !== e.zoomLevels.initial;
                a(r), s(r)
              }, [a]);
              return (0, N.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, N.useContext)(no),
            i = (0, L.UP)(s, n),
            d = (0, k.mergeProps)(t, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, R.jsx)(wo, {
            side: "left",
            enabled: r,
            content: o.formatMessage(qr.ResetZoomButtonLabel),
            metadata: o.formatMessage(qr.ResetZoomButtonTooltip, {
              shortcut: (0, R.jsx)(xo, {
                shortcut: "R"
              })
            }),
            children: (0, R.jsx)(_e, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(qr.ResetZoomButtonLabel)
            })
          })
        }),
        Po = (0, N.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, n) {
          const o = (0, Or.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, N.useContext)(no),
            i = (0, L.UP)(a, n),
            d = (0, k.mergeProps)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, R.jsx)(wo, {
            side: "left",
            enabled: r,
            content: o.formatMessage(qr.DownloadButtonTooltip),
            children: (0, R.jsx)(_e, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(qr.DownloadButtonTooltip),
              onPress: () => (async e => {
                if (!e) return;
                const r = e.currentSrc,
                  t = r.split("\\").pop()?.split("/").pop() || "";
                fetch(r, {
                  headers: {
                    origin: location.origin
                  }
                }).then(e => e.blob()).then(e => {
                  ((e, r) => {
                    const t = document.createElement("a");
                    t.href = e, t.download = r, document.body.appendChild(t), t.click(), document.body.removeChild(t)
                  })(window.URL.createObjectURL(e), t)
                }).catch(e => console.error(e))
              })(s.current)
            })
          })
        }),
        Oo = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Ro = t(98905);

      function So(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function No(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Do(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? No(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = So(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : No(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function zo(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var ko = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Io = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Do(Do({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ko(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zo(e.variantClassNames, e => zo(e, e => e.split(" ")[0]))
            }
          }, r
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
        }),
        To = t(20357);
      const Lo = (0, N.createContext)(null);

      function Eo() {
        const e = (0, N.useContext)(Lo);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Vo = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, k.mergeProps)({
              className: Io({
                status: a
              }),
              "data-testid": r
            }, s),
            l = t ? E.DX : "div";
          return (0, R.jsx)(Lo.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...s
            },
            children: (0, R.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        Ao = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, n) => {
          const {
            status: o
          } = Eo(), a = (0, k.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, t), s = {
            success: To.Check,
            invalid: To.X,
            neutral: To.TriangleAlert
          }, i = r ? E.DX : s[o];
          return (0, R.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        Mo = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = Eo(), i = (0, k.mergeProps)({
            "data-testid": r,
            id: s || a
          }, n), d = t ? E.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var qo = "ScrollArea",
        [Bo, Fo] = (0, Kr.A)(qo),
        [Xo, Go] = Bo(qo),
        Zo = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = N.useState(null), [l, c] = N.useState(null), [u, f] = N.useState(null), [p, m] = N.useState(null), [y, h] = N.useState(null), [v, g] = N.useState(0), [b, w] = N.useState(0), [x, _] = N.useState(!1), [j, C] = N.useState(!1), P = (0, Zr.s)(r, e => d(e)), O = (0, bn.jH)(o);
          return (0, R.jsx)(Xo, {
            scope: t,
            type: n,
            dir: O,
            scrollHideDelay: a,
            scrollArea: i,
            viewport: l,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: m,
            scrollbarXEnabled: x,
            onScrollbarXEnabledChange: _,
            scrollbarY: y,
            onScrollbarYChange: h,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, R.jsx)(Yr.sG.div, {
              dir: O,
              ...s,
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
      Zo.displayName = qo;
      var Ko = "ScrollAreaViewport",
        Ho = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            children: n,
            nonce: o,
            ...a
          } = e, s = Go(Ko, t), i = N.useRef(null), d = (0, Zr.s)(r, i, s.onViewportChange);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Wo, {
              nonce: o
            }), (0, R.jsx)(Yr.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, R.jsx)("div", {
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
      Ho.displayName = Ko;
      var Wo = N.memo(({
          nonce: e
        }) => (0, R.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, r) => e.nonce === r.nonce),
        Uo = "ScrollAreaScrollbar",
        $o = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...n
          } = e, o = Go(Uo, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return N.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, R.jsx)(Yo, {
            ...n,
            ref: r,
            forceMount: t
          }) : "scroll" === o.type ? (0, R.jsx)(Qo, {
            ...n,
            ref: r,
            forceMount: t
          }) : "auto" === o.type ? (0, R.jsx)(Jo, {
            ...n,
            ref: r,
            forceMount: t
          }) : "always" === o.type ? (0, R.jsx)(ea, {
            ...n,
            ref: r,
            "data-state": "visible"
          }) : null
        });
      $o.displayName = Uo;
      var Yo = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...n
          } = e, o = Go(Uo, e.__scopeScrollArea), [a, s] = N.useState(!1);
          return N.useEffect(() => {
            const e = o.scrollArea;
            let r = 0;
            if (e) {
              const t = () => {
                  window.clearTimeout(r), s(!0)
                },
                n = () => {
                  r = window.setTimeout(() => s(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", t), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(r), e.removeEventListener("pointerenter", t), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, R.jsx)(Ot.C, {
            present: t || a,
            children: (0, R.jsx)(Jo, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: r
            })
          })
        }),
        Qo = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...n
          } = e, o = Go(Uo, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = ba(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, N.useReducer((e, r) => l[e][r] ?? e, "hidden"));
          var l;
          return N.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), N.useEffect(() => {
            const e = o.viewport,
              r = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let t = e[r];
              const n = () => {
                const n = e[r];
                t !== n && (d("SCROLL"), s()), t = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, d, s]), (0, R.jsx)(Ot.C, {
            present: t || "hidden" !== i,
            children: (0, R.jsx)(ea, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: r,
              onPointerEnter: (0, Gr.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, Gr.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Jo = N.forwardRef((e, r) => {
          const t = Go(Uo, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = N.useState(!1),
            i = "horizontal" === e.orientation,
            d = ba(() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(i ? e : r)
              }
            }, 10);
          return wa(t.viewport, d), wa(t.content, d), (0, R.jsx)(Ot.C, {
            present: n || a,
            children: (0, R.jsx)(ea, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: r
            })
          })
        }),
        ea = N.forwardRef((e, r) => {
          const {
            orientation: t = "vertical",
            ...n
          } = e, o = Go(Uo, e.__scopeScrollArea), a = N.useRef(null), s = N.useRef(0), [i, d] = N.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = pa(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function u(e, r) {
            return function(e, r, t, n = "ltr") {
              const o = ma(t),
                a = r || o / 2,
                s = o - a,
                i = t.scrollbar.paddingStart + a,
                d = t.scrollbar.size - t.scrollbar.paddingEnd - s,
                l = t.content - t.viewport;
              return ha([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, r)
          }
          return "horizontal" === t ? (0, R.jsx)(ra, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = ya(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === t ? (0, R.jsx)(ta, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = ya(o.viewport.scrollTop, i);
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
        ra = N.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: n,
            ...o
          } = e, a = Go(Uo, e.__scopeScrollArea), [s, i] = N.useState(), d = N.useRef(null), l = (0, Zr.s)(r, d, a.onScrollbarXChange);
          return N.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(aa, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ma(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.x),
            onDragScroll: r => e.onDragScroll(r.x),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + r.deltaX;
                e.onWheelScroll(n), va(n, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: fa(s.paddingLeft),
                  paddingEnd: fa(s.paddingRight)
                }
              })
            }
          })
        }),
        ta = N.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: n,
            ...o
          } = e, a = Go(Uo, e.__scopeScrollArea), [s, i] = N.useState(), d = N.useRef(null), l = (0, Zr.s)(r, d, a.onScrollbarYChange);
          return N.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(aa, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ma(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.y),
            onDragScroll: r => e.onDragScroll(r.y),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + r.deltaY;
                e.onWheelScroll(n), va(n, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: fa(s.paddingTop),
                  paddingEnd: fa(s.paddingBottom)
                }
              })
            }
          })
        }),
        [na, oa] = Bo(Uo),
        aa = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
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
          } = e, p = Go(Uo, t), [m, y] = N.useState(null), h = (0, Zr.s)(r, e => y(e)), v = N.useRef(null), g = N.useRef(""), b = p.viewport, w = n.content - n.viewport, x = (0, et.c)(c), _ = (0, et.c)(d), j = ba(u, 10);

          function C(e) {
            if (v.current) {
              const r = e.clientX - v.current.left,
                t = e.clientY - v.current.top;
              l({
                x: r,
                y: t
              })
            }
          }
          return N.useEffect(() => {
            const e = e => {
              const r = e.target,
                t = m?.contains(r);
              t && x(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, m, w, x]), N.useEffect(_, [n, _]), wa(m, j), wa(p.content, j), (0, R.jsx)(na, {
            scope: t,
            scrollbar: m,
            hasThumb: o,
            onThumbChange: (0, et.c)(a),
            onThumbPointerUp: (0, et.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, et.c)(i),
            children: (0, R.jsx)(Yr.sG.div, {
              ...f,
              ref: h,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Gr.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), v.current = m.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, Gr.mK)(e.onPointerMove, C),
              onPointerUp: (0, Gr.mK)(e.onPointerUp, e => {
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null
              })
            })
          })
        }),
        sa = "ScrollAreaThumb",
        ia = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...n
          } = e, o = oa(sa, e.__scopeScrollArea);
          return (0, R.jsx)(Ot.C, {
            present: t || o.hasThumb,
            children: (0, R.jsx)(da, {
              ref: r,
              ...n
            })
          })
        }),
        da = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            style: n,
            ...o
          } = e, a = Go(sa, t), s = oa(sa, t), {
            onThumbPositionChange: i
          } = s, d = (0, Zr.s)(r, e => s.onThumbChange(e)), l = N.useRef(void 0), c = ba(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return N.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const r = () => {
                if (c(), !l.current) {
                  const r = ga(e, i);
                  l.current = r, i()
                }
              };
              return i(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [a.viewport, c, i]), (0, R.jsx)(Yr.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Gr.mK)(e.onPointerDownCapture, e => {
              const r = e.target.getBoundingClientRect(),
                t = e.clientX - r.left,
                n = e.clientY - r.top;
              s.onThumbPointerDown({
                x: t,
                y: n
              })
            }),
            onPointerUp: (0, Gr.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      ia.displayName = sa;
      var la = "ScrollAreaCorner",
        ca = N.forwardRef((e, r) => {
          const t = Go(la, e.__scopeScrollArea),
            n = Boolean(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && n ? (0, R.jsx)(ua, {
            ...e,
            ref: r
          }) : null
        });
      ca.displayName = la;
      var ua = N.forwardRef((e, r) => {
        const {
          __scopeScrollArea: t,
          ...n
        } = e, o = Go(la, t), [a, s] = N.useState(0), [i, d] = N.useState(0), l = Boolean(a && i);
        return wa(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), wa(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), l ? (0, R.jsx)(Yr.sG.div, {
          ...n,
          ref: r,
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

      function fa(e) {
        return e ? parseInt(e, 10) : 0
      }

      function pa(e, r) {
        const t = e / r;
        return isNaN(t) ? 0 : t
      }

      function ma(e) {
        const r = pa(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - t) * r;
        return Math.max(n, 18)
      }

      function ya(e, r, t = "ltr") {
        const n = ma(r),
          o = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
          a = r.scrollbar.size - o,
          s = r.content - r.viewport,
          i = a - n,
          d = "ltr" === t ? [0, s] : [-1 * s, 0],
          l = (0, gn.q)(e, d);
        return ha([0, s], [0, i])(l)
      }

      function ha(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const n = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + n * (t - e[0])
        }
      }

      function va(e, r) {
        return e > 0 && e < r
      }
      var ga = (e, r = () => {}) => {
        let t = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = t.left !== a.left,
            i = t.top !== a.top;
          (s || i) && r(), t = a, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function ba(e, r) {
        const t = (0, et.c)(e),
          n = N.useRef(0);
        return N.useEffect(() => () => window.clearTimeout(n.current), []), N.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(t, r)
        }, [t, r])
      }

      function wa(e, r) {
        const t = (0, et.c)(r);
        (0, rt.N)(() => {
          let r = 0;
          if (e) {
            const n = new ResizeObserver(() => {
              cancelAnimationFrame(r), r = window.requestAnimationFrame(t)
            });
            return n.observe(e), () => {
              window.cancelAnimationFrame(r), n.unobserve(e)
            }
          }
        }, [e, t])
      }
      var xa = Zo,
        _a = Ho,
        ja = $o,
        Ca = ia,
        Pa = ca,
        Oa = t(84017),
        Ra = t(38174),
        Sa = t(24082),
        Na = t(45787),
        Da = t(38100),
        za = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ka = [" ", "Enter"],
        Ia = "Select",
        [Ta, La, Ea] = (0, xn.N)(Ia),
        [Va, Aa] = (0, Kr.A)(Ia, [Ea, at]),
        Ma = at(),
        [qa, Ba] = Va(Ia),
        [Fa, Xa] = Va(Ia);

      function Ga(e) {
        const {
          __scopeSelect: r,
          children: t,
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
          form: m,
          internal_do_not_use_render: y
        } = e, h = Ma(r), [v, g] = N.useState(null), [b, w] = N.useState(null), [x, _] = N.useState(!1), j = (0, bn.jH)(l), [C, P] = (0, St.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: a,
          caller: Ia
        }), [O, S] = (0, St.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: Ia
        }), D = N.useRef(null), z = !v || !!m || !!v.closest("form"), [k, I] = N.useState(new Set), T = (0, Wr.B)(), L = Array.from(k).map(e => e.props.value).join(";"), E = N.useCallback(e => {
          I(r => new Set(r).add(e))
        }, []), V = N.useCallback(e => {
          I(r => {
            const t = new Set(r);
            return t.delete(e), t
          })
        }, []), A = {
          required: p,
          trigger: v,
          onTriggerChange: g,
          valueNode: b,
          onValueNodeChange: w,
          valueNodeHasChildren: x,
          onValueNodeHasChildrenChange: _,
          contentId: T,
          value: O,
          onValueChange: S,
          open: C,
          onOpenChange: P,
          dir: j,
          triggerPointerDownPosRef: D,
          disabled: f,
          name: c,
          autoComplete: u,
          form: m,
          nativeOptions: k,
          nativeSelectKey: L,
          isFormControl: z
        };
        return (0, R.jsx)(xt, {
          ...h,
          children: (0, R.jsx)(qa, {
            scope: r,
            ...A,
            children: (0, R.jsx)(Ta.Provider, {
              scope: r,
              children: (0, R.jsx)(Fa, {
                scope: r,
                onNativeOptionAdd: E,
                onNativeOptionRemove: V,
                children: ks(y) ? y(A) : t
              })
            })
          })
        })
      }
      Ga.displayName = "SelectProvider";
      var Za = e => {
        const {
          __scopeSelect: r,
          children: t,
          ...n
        } = e;
        return (0, R.jsx)(Ga, {
          __scopeSelect: r,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, R.jsxs)(R.Fragment, {
            children: [t, e ? (0, R.jsx)(zs, {
              __scopeSelect: r
            }) : null]
          })
        })
      };
      Za.displayName = Ia;
      var Ka = "SelectTrigger",
        Ha = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            disabled: n = !1,
            ...o
          } = e, a = Ma(t), s = Ba(Ka, t), i = s.disabled || n, d = (0, Zr.s)(r, s.onTriggerChange), l = La(t), c = N.useRef("touch"), [u, f, p] = Ts(e => {
            const r = l().filter(e => !e.disabled),
              t = r.find(e => e.value === s.value),
              n = Ls(r, e, t);
            void 0 !== n && s.onValueChange(n.value)
          }), m = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, R.jsx)(_t, {
            asChild: !0,
            ...a,
            children: (0, R.jsx)(Yr.sG.button, {
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
              "data-placeholder": Is(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, Gr.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && m(e)
              }),
              onPointerDown: (0, Gr.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (m(e), e.preventDefault())
              }),
              onKeyDown: (0, Gr.mK)(o.onKeyDown, e => {
                const r = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), r && " " === e.key || za.includes(e.key) && (m(), e.preventDefault())
              })
            })
          })
        });
      Ha.displayName = Ka;
      var Wa = "SelectValue",
        Ua = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Ba(Wa, t), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, Zr.s)(r, d.onValueNodeChange);
          (0, rt.N)(() => {
            l(c)
          }, [l, c]);
          const f = Is(d.value);
          return (0, R.jsx)(Yr.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, R.jsx)(N.Fragment, {
              children: f ? s : a
            }, f ? "placeholder" : "value")
          })
        });
      Ua.displayName = Wa;
      var $a = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: n,
          ...o
        } = e;
        return (0, R.jsx)(Yr.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: r,
          children: n || "▼"
        })
      });
      $a.displayName = "SelectIcon";
      var Ya = "SelectPortal",
        [Qa, Ja] = Va(Ya, {
          forceMount: void 0
        }),
        es = e => {
          const {
            __scopeSelect: r,
            forceMount: t,
            ...n
          } = e;
          return (0, R.jsx)(Qa, {
            scope: e.__scopeSelect,
            forceMount: t,
            children: (0, R.jsx)(Pt.Z, {
              asChild: !0,
              ...n
            })
          })
        };
      es.displayName = Ya;
      var rs = "SelectContent",
        ts = N.forwardRef((e, r) => {
          const t = Ja(rs, e.__scopeSelect),
            {
              forceMount: n = t.forceMount,
              ...o
            } = e,
            a = Ba(rs, e.__scopeSelect),
            [s, i] = N.useState();
          return (0, rt.N)(() => {
            i(new DocumentFragment)
          }, []), (0, R.jsx)(Ot.C, {
            present: n || a.open,
            children: ({
              present: e
            }) => e ? (0, R.jsx)(ds, {
              ...o,
              ref: r
            }) : (0, R.jsx)(ns, {
              ...o,
              fragment: s
            })
          })
        });
      ts.displayName = rs;
      var ns = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: n,
          fragment: o
        } = e;
        return o ? Oa.createPortal((0, R.jsx)(as, {
          scope: t,
          children: (0, R.jsx)(Ta.Slot, {
            scope: t,
            children: (0, R.jsx)("div", {
              ref: r,
              children: n
            })
          })
        }), o) : null
      });
      ns.displayName = "SelectContentFragment";
      var os = 10,
        [as, ss] = Va(rs),
        is = (0, Rt.TL)("SelectContent.RemoveScroll"),
        ds = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t
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
            sticky: m,
            hideWhenDetached: y,
            avoidCollisions: h,
            ...v
          } = e, g = Ba(rs, t), [b, w] = N.useState(null), [x, _] = N.useState(null), j = (0, Zr.s)(r, e => w(e)), [C, P] = N.useState(null), [O, S] = N.useState(null), D = La(t), [z, k] = N.useState(!1), I = N.useRef(!1);
          N.useEffect(() => {
            if (b) return (0, Na.Eq)(b)
          }, [b]), (0, Ra.Oh)();
          const T = N.useCallback(e => {
              const [r, ...t] = D().map(e => e.ref.current), [n] = t.slice(-1), o = document.activeElement;
              for (const t of e) {
                if (t === o) return;
                if (t?.scrollIntoView({
                    block: "nearest"
                  }), t === r && x && (x.scrollTop = 0), t === n && x && (x.scrollTop = x.scrollHeight), t?.focus(), document.activeElement !== o) return
              }
            }, [D, x]),
            L = N.useCallback(() => T([C, b]), [T, C, b]);
          N.useEffect(() => {
            z && L()
          }, [z, L]);
          const {
            onOpenChange: E,
            triggerPointerDownPosRef: V
          } = g;
          N.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const r = r => {
                  e = {
                    x: Math.abs(Math.round(r.pageX) - (V.current?.x ?? 0)),
                    y: Math.abs(Math.round(r.pageY) - (V.current?.y ?? 0))
                  }
                },
                t = t => {
                  e.x <= 10 && e.y <= 10 ? t.preventDefault() : t.composedPath().includes(b) || E(!1), document.removeEventListener("pointermove", r), V.current = null
                };
              return null !== V.current && (document.addEventListener("pointermove", r), document.addEventListener("pointerup", t, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", r), document.removeEventListener("pointerup", t, {
                  capture: !0
                })
              }
            }
          }, [b, E, V]), N.useEffect(() => {
            const e = () => E(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [E]);
          const [A, M] = Ts(e => {
            const r = D().filter(e => !e.disabled),
              t = r.find(e => e.ref.current === document.activeElement),
              n = Ls(r, e, t);
            n && setTimeout(() => n.ref.current?.focus())
          }), q = N.useCallback((e, r, t) => {
            const n = !I.current && !t;
            (void 0 !== g.value && g.value === r || n) && (P(e), n && (I.current = !0))
          }, [g.value]), B = N.useCallback(() => b?.focus(), [b]), F = N.useCallback((e, r, t) => {
            const n = !I.current && !t;
            (void 0 !== g.value && g.value === r || n) && S(e)
          }, [g.value]), X = "popper" === n ? cs : ls, G = X === cs ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: m,
            hideWhenDetached: y,
            avoidCollisions: h
          } : {};
          return (0, R.jsx)(as, {
            scope: t,
            content: b,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: q,
            selectedItem: C,
            onItemLeave: B,
            itemTextRefCallback: F,
            focusSelectedItem: L,
            selectedItemText: O,
            position: n,
            isPositioned: z,
            searchRef: A,
            children: (0, R.jsx)(Da.A, {
              as: is,
              allowPinchZoom: !0,
              children: (0, R.jsx)(Sa.n, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Gr.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, R.jsx)(Hr.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, R.jsx)(X, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...v,
                    ...G,
                    onPlaced: () => k(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: (0, Gr.mK)(v.onKeyDown, e => {
                      const r = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), r || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const r = D().filter(e => !e.disabled);
                        let t = r.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const r = e.target,
                            n = t.indexOf(r);
                          t = t.slice(n + 1)
                        }
                        setTimeout(() => T(t)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      ds.displayName = "SelectContentImpl";
      var ls = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onPlaced: n,
          ...o
        } = e, a = Ba(rs, t), s = ss(rs, t), [i, d] = N.useState(null), [l, c] = N.useState(null), u = (0, Zr.s)(r, e => c(e)), f = La(t), p = N.useRef(!1), m = N.useRef(!0), {
          viewport: y,
          selectedItem: h,
          selectedItemText: v,
          focusSelectedItem: g
        } = s, b = N.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && y && h && v) {
            const e = a.trigger.getBoundingClientRect(),
              r = l.getBoundingClientRect(),
              t = a.valueNode.getBoundingClientRect(),
              o = v.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - r.left,
                a = t.left - n,
                s = e.left - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - os,
                u = (0, gn.q)(a, [os, Math.max(os, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = r.right - o.right,
                a = window.innerWidth - t.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - os,
                u = (0, gn.q)(a, [os, Math.max(os, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * os,
              c = y.scrollHeight,
              u = window.getComputedStyle(l),
              m = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = m + g + c + parseInt(u.paddingBottom, 10) + b,
              x = Math.min(5 * h.offsetHeight, w),
              _ = window.getComputedStyle(y),
              j = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              P = e.top + e.height / 2 - os,
              O = d - P,
              R = h.offsetHeight / 2,
              S = m + g + (h.offsetTop + R),
              N = w - S;
            if (S <= P) {
              const e = s.length > 0 && h === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const r = l.clientHeight - y.offsetTop - y.offsetHeight,
                t = S + Math.max(O, R + (e ? C : 0) + r + b);
              i.style.height = t + "px"
            } else {
              const e = s.length > 0 && h === s[0].ref.current;
              i.style.top = "0px";
              const r = Math.max(P, m + y.offsetTop + (e ? j : 0) + R) + N;
              i.style.height = r + "px", y.scrollTop = S - P + y.offsetTop
            }
            i.style.margin = `${os}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, y, h, v, a.dir, n]);
        (0, rt.N)(() => b(), [b]);
        const [w, x] = N.useState();
        (0, rt.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = N.useCallback(e => {
          e && !0 === m.current && (b(), g?.(), m.current = !1)
        }, [b, g]);
        return (0, R.jsx)(us, {
          scope: t,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: _,
          children: (0, R.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, R.jsx)(Yr.sG.div, {
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
      ls.displayName = "SelectItemAlignedPosition";
      var cs = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          align: n = "start",
          collisionPadding: o = os,
          ...a
        } = e, s = Ma(t);
        return (0, R.jsx)(jt, {
          ...s,
          ...a,
          ref: r,
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
      cs.displayName = "SelectPopperPosition";
      var [us, fs] = Va(rs, {}), ps = "SelectViewport", ms = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          nonce: n,
          ...o
        } = e, a = ss(ps, t), s = fs(ps, t), i = (0, Zr.s)(r, a.onViewportChange), d = N.useRef(0);
        return (0, R.jsxs)(R.Fragment, {
          children: [(0, R.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, R.jsx)(Ta.Slot, {
            scope: t,
            children: (0, R.jsx)(Yr.sG.div, {
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
              onScroll: (0, Gr.mK)(o.onScroll, e => {
                const r = e.currentTarget,
                  {
                    contentWrapper: t,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && t) {
                  const e = Math.abs(d.current - r.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * os,
                      o = parseFloat(t.style.minHeight),
                      a = parseFloat(t.style.height),
                      s = Math.max(o, a);
                    if (s < n) {
                      const o = s + e,
                        a = Math.min(n, o),
                        i = o - a;
                      t.style.height = a + "px", "0px" === t.style.bottom && (r.scrollTop = i > 0 ? i : 0, t.style.justifyContent = "flex-end")
                    }
                  }
                }
                d.current = r.scrollTop
              })
            })
          })]
        })
      });
      ms.displayName = ps;
      var ys = "SelectGroup",
        [hs, vs] = Va(ys);
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...n
        } = e, o = (0, Wr.B)();
        return (0, R.jsx)(hs, {
          scope: t,
          id: o,
          children: (0, R.jsx)(Yr.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: r
          })
        })
      }).displayName = ys;
      var gs = "SelectLabel";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...n
        } = e, o = vs(gs, t);
        return (0, R.jsx)(Yr.sG.div, {
          id: o.id,
          ...n,
          ref: r
        })
      }).displayName = gs;
      var bs = "SelectItem",
        [ws, xs] = Va(bs),
        _s = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Ba(bs, t), d = ss(bs, t), l = i.value === n, [c, u] = N.useState(a ?? ""), [f, p] = N.useState(!1), m = (0, Zr.s)(r, e => d.itemRefCallback?.(e, n, o)), y = (0, Wr.B)(), h = N.useRef("touch"), v = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, R.jsx)(ws, {
            scope: t,
            value: n,
            disabled: o,
            textId: y,
            isSelected: l,
            onItemTextChange: N.useCallback(e => {
              u(r => r || (e?.textContent ?? "").trim())
            }, []),
            children: (0, R.jsx)(Ta.ItemSlot, {
              scope: t,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, R.jsx)(Yr.sG.div, {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: m,
                onFocus: (0, Gr.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Gr.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Gr.mK)(s.onClick, () => {
                  "mouse" !== h.current && v()
                }),
                onPointerUp: (0, Gr.mK)(s.onPointerUp, () => {
                  "mouse" === h.current && v()
                }),
                onPointerDown: (0, Gr.mK)(s.onPointerDown, e => {
                  h.current = e.pointerType
                }),
                onPointerMove: (0, Gr.mK)(s.onPointerMove, e => {
                  h.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === h.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Gr.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, Gr.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (ka.includes(e.key) && v(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      _s.displayName = bs;
      var js = "SelectItemText",
        Cs = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: n,
            style: o,
            ...a
          } = e, s = Ba(js, t), i = ss(js, t), d = xs(js, t), l = Xa(js, t), [c, u] = N.useState(null), f = (0, Zr.s)(r, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, m = N.useMemo(() => (0, R.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: h
          } = l;
          return (0, rt.N)(() => (y(m), () => h(m)), [y, h, m]), (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Yr.sG.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !Is(s.value) ? Oa.createPortal(a.children, s.valueNode) : null]
          })
        });
      Cs.displayName = js;
      var Ps = "SelectItemIndicator";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...n
        } = e;
        return xs(Ps, t).isSelected ? (0, R.jsx)(Yr.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: r
        }) : null
      }).displayName = Ps;
      var Os = "SelectScrollUpButton";
      N.forwardRef((e, r) => {
        const t = ss(Os, e.__scopeSelect),
          n = fs(Os, e.__scopeSelect),
          [o, a] = N.useState(!1),
          s = (0, Zr.s)(r, n.onScrollButtonChange);
        return (0, rt.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollTop > 0;
              a(e)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), o ? (0, R.jsx)(Ss, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: r
            } = t;
            e && r && (e.scrollTop = e.scrollTop - r.offsetHeight)
          }
        }) : null
      }).displayName = Os;
      var Rs = "SelectScrollDownButton";
      N.forwardRef((e, r) => {
        const t = ss(Rs, e.__scopeSelect),
          n = fs(Rs, e.__scopeSelect),
          [o, a] = N.useState(!1),
          s = (0, Zr.s)(r, n.onScrollButtonChange);
        return (0, rt.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollHeight - r.clientHeight,
                t = Math.ceil(r.scrollTop) < e;
              a(t)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), o ? (0, R.jsx)(Ss, {
          ...e,
          ref: s,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: r
            } = t;
            e && r && (e.scrollTop = e.scrollTop + r.offsetHeight)
          }
        }) : null
      }).displayName = Rs;
      var Ss = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onAutoScroll: n,
          ...o
        } = e, a = ss("SelectScrollButton", t), s = N.useRef(null), i = La(t), d = N.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return N.useEffect(() => () => d(), [d]), (0, rt.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, R.jsx)(Yr.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: r,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Gr.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, Gr.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, Gr.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...n
        } = e;
        return (0, R.jsx)(Yr.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: r
        })
      }).displayName = "SelectSeparator";
      var Ns = "SelectArrow";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...n
        } = e, o = Ma(t);
        return "popper" === ss(Ns, t).position ? (0, R.jsx)(Ct, {
          ...o,
          ...n,
          ref: r
        }) : null
      }).displayName = Ns;
      var Ds = "SelectBubbleInput",
        zs = N.forwardRef(({
          __scopeSelect: e,
          ...r
        }, t) => {
          const n = Ba(Ds, e),
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
            p = N.useRef(null),
            m = (0, Zr.s)(t, p),
            y = o ?? "",
            h = (0, wn.Z)(y),
            v = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return N.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const r = window.HTMLSelectElement.prototype,
              t = Object.getOwnPropertyDescriptor(r, "value").set;
            if (h !== y && t) {
              const r = new Event("change", {
                bubbles: !0
              });
              t.call(e, y), e.dispatchEvent(r)
            }
          }, [h, y]), (0, R.jsxs)(Yr.sG.select, {
            "aria-hidden": !0,
            required: s,
            tabIndex: -1,
            name: d,
            autoComplete: l,
            disabled: i,
            form: c,
            onChange: e => a(e.target.value),
            ...r,
            style: {
              ...Nt.Qg,
              ...r.style
            },
            ref: m,
            defaultValue: y,
            children: [Is(o) && !v ? (0, R.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function ks(e) {
        return "function" == typeof e
      }

      function Is(e) {
        return "" === e || void 0 === e
      }

      function Ts(e) {
        const r = (0, et.c)(e),
          t = N.useRef(""),
          n = N.useRef(0),
          o = N.useCallback(e => {
            const o = t.current + e;
            r(o),
              function e(r) {
                t.current = r, window.clearTimeout(n.current), "" !== r && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [r]),
          a = N.useCallback(() => {
            t.current = "", window.clearTimeout(n.current)
          }, []);
        return N.useEffect(() => () => window.clearTimeout(n.current), []), [t, o, a]
      }

      function Ls(e, r, t) {
        const n = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
          o = t ? e.indexOf(t) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, r) => s[(i + r) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== t));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== t ? d : void 0
      }

      function Es(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Vs(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function As(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Vs(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Es(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vs(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ms(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      zs.displayName = Ds;
      var qs = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Bs = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = As(As({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qs(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ms(e.variantClassNames, e => Ms(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Fs = Bs({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xs = Bs({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gs = Bs({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zs = Bs({
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
        Ks = Bs({
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
        Hs = Bs({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ws = (0, N.createContext)(null);

      function Us() {
        const e = (0, N.useContext)(Ws);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const $s = (0, N.forwardRef)(({
          children: e,
          testId: r,
          isRequired: t,
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
          ...m
        }, y) => {
          const h = (0, N.useRef)(null),
            v = (0, L.UP)(h, y),
            g = (0, N.useId)(),
            b = (0, N.useId)(),
            w = (0, N.useId)(),
            x = (0, N.useId)(),
            _ = (0, N.useId)(),
            j = (0, N.useId)(),
            C = (0, N.useRef)(null),
            P = (0, N.useRef)(null),
            O = (0, N.useRef)(null),
            [S = !1, D] = (0, L.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            z = (0, k.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": r
            }, m);
          return (0, R.jsx)(Ws.Provider, {
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
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: S,
              setIsOpen: D,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: t,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, R.jsx)(Za, {
              required: t,
              disabled: n,
              open: S,
              onOpenChange: () => D(!o && !S),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, R.jsx)("div", {
                ref: v,
                ...z,
                children: e
              })
            })
          })
        }),
        Ys = (0, N.forwardRef)(({
          hideDividers: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = Us(), s = (0, k.mergeProps)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Fs({
              hideDividers: e
            }),
            "data-testid": t
          }, n);
          return (0, R.jsx)(ts, {
            ...s,
            ref: o,
            children: (0, R.jsx)(ms, {
              className: "foundry_uaq1gwn",
              children: r
            })
          })
        }),
        Qs = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(ms, {
            ref: t,
            ...n
          })
        }),
        Js = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": r
          }, t);
          return (0, R.jsxs)(xa, {
            ...o,
            ref: n,
            children: [(0, R.jsx)(Qs, {
              asChild: !0,
              children: (0, R.jsx)(_a, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, R.jsx)(ja, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, R.jsx)(Ca, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        ei = (0, N.forwardRef)(({
          children: e,
          testId: r,
          "aria-labelledby": t,
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
            descriptionId: m,
            labelRef: y,
            descriptionRef: h,
            hintRef: v,
            isOpen: g,
            size: b
          } = Us(), {
            isPressed: w,
            pressProps: x
          } = (0, Ro.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, j] = (0, N.useState)(!1), [C, P] = (0, N.useState)(!1);
          (0, N.useEffect)(() => {
            j(!!y.current || !!v.current), P(!!h.current)
          }, []);
          const O = (0, k.mergeProps)({
              id: f,
              className: Ks({
                size: b,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": _ ? (0, k.joinStrings)(t, c, u) : t,
              "aria-describedby": C ? (0, k.joinStrings)(n, m) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": g ? "open" : "closed",
              "data-testid": r,
              "data-pressed": !!w
            }, (0, k.omit)(x, "onKeyDown"), a),
            S = o ? E.DX : Ha;
          return (0, R.jsx)(S, {
            ...O,
            ref: s,
            children: e
          })
        }),
        ri = (0, N.forwardRef)(({
          placeholder: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": t
            }, n),
            s = r ? E.DX : "span";
          return (0, R.jsx)(s, {
            ...a,
            ref: o,
            children: (0, R.jsx)(Ua, {
              placeholder: e
            })
          })
        }),
        ti = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = Us(), i = s ? re.ChevronUp : re.ChevronDown, d = (0, k.mergeProps)({
            asChild: !0,
            className: Hs({
              isDisabled: a || o
            }),
            "data-testid": r
          }, t);
          return (0, R.jsx)($a, {
            ...d,
            ref: n,
            children: e || (0, R.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        ni = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
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
          } = Us(), f = i && !o, p = (0, L.UP)(c, s), m = (0, k.mergeProps)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: Zs({
              showAsterisk: f,
              isDisabled: d
            })
          }, a), y = r ? E.DX : "label";
          return (0, R.jsx)(E.s6, {
            enabled: n,
            children: (0, R.jsx)(y, {
              ...m,
              ref: p,
              children: t
            })
          })
        }),
        oi = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = Us(), d = (0, L.UP)(i, o), l = (0, k.mergeProps)({
            className: Xs({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? E.DX : "div";
          return (0, R.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        ai = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = Us(), d = (0, L.UP)(s, o), l = (0, k.mergeProps)({
            className: Gs({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, n), c = r ? E.DX : "div";
          return (0, R.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        si = (0, N.forwardRef)(({
          children: e,
          value: r,
          isDisabled: t,
          testId: n,
          ...o
        }, a) => {
          const s = (0, N.useRef)(null),
            i = (0, L.UP)(s, a),
            d = (0, k.mergeProps)({
              value: r,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: t,
              "data-testid": n
            }, o);
          return (0, R.jsx)(_s, {
            ref: i,
            ...d,
            children: e
          })
        }),
        ii = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": r
          }, t);
          return (0, R.jsx)(Cs, {
            ref: n,
            asChild: !0,
            children: (0, R.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        di = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": r
          }, t);
          return (0, R.jsx)($a, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        li = es,
        ci = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Us(), i = (0, k.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, n), d = t ? E.DX : Vo;
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ui = Ao,
        fi = Mo;
      var pi = t(83588),
        mi = t(56728);

      function yi(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function hi(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function vi(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? hi(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = yi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hi(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function gi(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var bi = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        wi = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = vi(vi({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bi(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gi(e.variantClassNames, e => gi(e, e => e.split(" ")[0]))
            }
          }, r
        },
        xi = wi({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _i = wi({
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
        ji = wi({
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
        Ci = wi({
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
        Pi = wi({
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
      const Oi = (0, N.createContext)(null);

      function Ri() {
        const e = (0, N.useContext)(Oi);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Si = (0, N.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_okz6z20"
            }, i),
            c = n ? E.DX : "div",
            u = (0, N.useId)(),
            f = (0, N.useId)(),
            p = (0, N.useId)();
          return (0, R.jsx)(Oi.Provider, {
            value: {
              size: e,
              appearance: r,
              labelId: u,
              descriptionId: f,
              inputId: p,
              isDisabled: a,
              isReadOnly: s,
              ...i
            },
            children: (0, R.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Ni = (0, N.forwardRef)(({
          testId: e,
          onPress: r,
          onClick: t,
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
          const p = (0, N.useRef)(null),
            m = (0, L.UP)(p, f),
            {
              size: y,
              appearance: h,
              inputId: v,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: x
            } = Ri(),
            _ = (0, mi.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, pi.K)({
              id: a || v,
              "aria-labelledby": (0, k.joinStrings)(n, g),
              "aria-describedby": (0, k.joinStrings)(o, b),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, k.mergeProps)({
              className: Pi({
                appearance: h
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || x,
              "data-testid": e,
              onClick: e => {
                r?.(e) ?? t?.(e), e.defaultPrevented || w || x || _.toggle()
              }
            }, u);
          return (0, R.jsxs)("div", {
            ...C,
            children: [(0, R.jsx)(E.s6, {
              children: (0, R.jsx)("input", {
                ...j,
                ref: m
              })
            }), (0, R.jsx)("div", {
              className: Ci({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, R.jsx)("div", {
                className: _i({
                  size: y,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        Di = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            isDisabled: s,
            labelId: i,
            inputId: d,
            size: l
          } = Ri(), c = (0, k.mergeProps)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: ji({
              isDisabled: s,
              size: l
            })
          }, o), u = r ? E.DX : "label";
          return (0, R.jsx)(E.s6, {
            enabled: n,
            children: (0, R.jsx)(u, {
              ...c,
              ref: a,
              children: t
            })
          })
        }),
        zi = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Ri(), i = n.id || s, d = (0, k.mergeProps)({
            className: xi({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? E.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var ki = t(26688);
      const Ii = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ti = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Li = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Ei = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Vi = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Ai = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, R.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Mi(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function qi(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Bi(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? qi(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Mi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qi(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Fi(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Xi = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Gi = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Bi(Bi({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xi(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fi(e.variantClassNames, e => Fi(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Zi = Gi({
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
        Ki = Gi({
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
        Hi = Gi({
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
        Wi = Gi({
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
        Ui = Gi({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $i = Gi({
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
      const Yi = (0, N.createContext)(null);

      function Qi() {
        const e = (0, N.useContext)(Yi);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Ji = (0, N.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: n,
          children: o,
          ...a
        }, s) => {
          const i = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_11gbdty0"
            }, (0, k.omit)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? E.DX : "div",
            l = (0, N.useId)(),
            c = (0, N.useId)(),
            u = (0, N.useId)();
          return (0, R.jsx)(Yi.Provider, {
            value: {
              size: e,
              appearance: r,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, R.jsx)(d, {
              ...i,
              ref: s,
              children: o
            })
          })
        }),
        ed = (0, N.forwardRef)(({
          testId: e,
          isChecked: r,
          defaultChecked: t,
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
            size: m,
            appearance: y,
            isIndeterminate: h,
            isRequired: v,
            descriptionId: g,
            labelId: b,
            inputId: w,
            ...x
          } = Qi(), _ = (0, N.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: P
          } = (0, Ro.d)({
            ref: _
          }), {
            setSelected: O,
            toggle: S,
            ...D
          } = (0, mi.H)({
            isSelected: r,
            defaultSelected: t,
            onChange: n
          }), {
            inputProps: z,
            isSelected: I,
            isDisabled: T,
            isReadOnly: L
          } = (0, ki.v)({
            "aria-label": "",
            id: j,
            name: o,
            ...x
          }, {
            ...D,
            toggle: S,
            setSelected: x.isReadOnly ? () => !1 : O
          }, _), V = (0, k.mergeProps)({
            className: Ki({
              size: m
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || T || L || S()
            }
          }, P, f), A = (0, k.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": r,
            "aria-labelledby": (0, k.joinStrings)(c, b),
            "aria-describedby": (0, k.joinStrings)(d, g),
            "aria-errormessage": (0, k.joinStrings)(l, x.isInvalid ? g : void 0),
            "aria-required": v,
            required: v
          }, z), M = h ? i[`Dash${m}`] : i[`Check${m}`];
          return (0, R.jsxs)("div", {
            ...V,
            children: [(0, R.jsx)(E.s6, {
              children: (0, R.jsx)("input", {
                ...A,
                ref: p
              })
            }), (0, R.jsx)("div", {
              className: (0, ee.clsx)(Zi({
                size: m,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": h ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": T || L,
              "data-testid": e,
              "data-pressed": C,
              children: (0, R.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || h) && (0, R.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        rd = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, s) => {
          const {
            size: i,
            labelId: d,
            inputId: l,
            isRequired: c
          } = Qi(), u = a.id || d, f = c && !o, p = (0, k.mergeProps)({
            className: $i({
              size: i,
              showAsterisk: f
            }),
            "data-testid": t,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), m = r ? E.DX : "label";
          return (0, R.jsx)(E.s6, {
            enabled: n,
            children: (0, R.jsx)(m, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        td = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Qi(), i = n.id || s, d = (0, k.mergeProps)({
            className: Hi({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, n), l = r ? E.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        nd = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Qi(), s = n.id || a, i = (0, k.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": t,
            id: s
          }, n), d = r ? E.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        od = (0, N.createContext)(null);

      function ad() {
        const e = (0, N.useContext)(od);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const sd = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          size: n = "MD",
          isRequired: o = !1,
          ...a
        }, s) => {
          const [i, d] = (0, N.useState)(null), [l, c] = (0, N.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, k.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = r ? E.DX : "fieldset";
          return (0, R.jsx)(od.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, R.jsx)(p, {
              ...f,
              ref: s,
              children: t
            })
          })
        }),
        id = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: a,
          ...s
        }, i) => {
          const {
            isRequired: d
          } = ad(), l = d && !a, c = (0, k.mergeProps)({
            "data-testid": t,
            className: Ui({
              showAsterisk: l
            })
          }, s), u = r ? E.DX : "legend";
          return (0, R.jsx)(E.s6, {
            enabled: o,
            children: (0, R.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, R.jsx)(E.xV, {
                children: e
              }), !d && (0, R.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        dd = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const {
            setDescriptionId: a
          } = ad(), s = (0, N.useId)(), i = n.id || s;
          (0, N.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = r ? E.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        ld = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const {
            size: a
          } = ad(), s = (0, k.mergeProps)({
            "data-testid": t,
            className: Wi({
              size: a
            })
          }, n), i = r ? E.DX : "div";
          return (0, R.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        cd = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const {
            setErrorTextId: a
          } = ad(), s = (0, N.useId)(), i = n.id || s;
          (0, N.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, k.mergeProps)({
              "data-testid": t,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = re.X,
            c = r ? E.DX : "div";
          return (0, R.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, R.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, R.jsx)(E.xV, {
              children: e
            })]
          })
        });

      function ud(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function fd(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function pd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? fd(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = ud(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fd(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function md(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var yd = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        hd = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = pd(pd({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yd(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return md(e.variantClassNames, e => md(e, e => e.split(" ")[0]))
            }
          }, r
        },
        vd = hd({
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
        gd = hd({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bd = hd({
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
        wd = hd({
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
      const xd = (0, N.createContext)(null);

      function _d() {
        const e = (0, N.useContext)(xd);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const jd = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? E.DX : "div",
            u = (0, N.useId)(),
            f = (0, N.useId)(),
            p = (0, N.useId)(),
            m = (0, N.useId)();
          return (0, R.jsx)(xd.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: m,
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: s,
              ...i
            },
            children: (0, R.jsx)(c, {
              ref: d,
              ...l,
              children: r
            })
          })
        }),
        Cd = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            labelId: i,
            inputId: d,
            isDisabled: l,
            isRequired: c
          } = _d(), u = (0, k.mergeProps)({
            className: bd({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": t,
            id: i,
            htmlFor: d
          }, a), f = r ? E.DX : "label";
          return (0, R.jsx)(E.s6, {
            enabled: n,
            children: (0, R.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        Pd = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
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
            hintId: m,
            isDisabled: y,
            isRequired: h,
            isReadOnly: v,
            status: g
          } = _d(), b = (0, N.useRef)(null), w = (0, L.UP)(b, c), x = (0, k.mergeProps)({
            className: wd({
              isInvalid: "invalid" === g,
              isDisabled: y,
              isReadOnly: v,
              isSuccess: "success" === g
            }),
            name: a,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: y,
            required: h,
            readOnly: v,
            placeholder: s,
            "aria-labelledby": (0, k.joinStrings)(l.id, f, m, i),
            "aria-describedby": (0, k.joinStrings)(u, d),
            "data-testid": t,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...y && {
              "aria-disabled": !0
            },
            ...h && {
              "aria-required": !0
            }
          }, l), _ = e ? E.DX : "textarea";
          return (0, R.jsx)(_, {
            ref: w,
            ...x,
            children: r
          })
        }),
        Od = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = _d(), i = (0, k.mergeProps)({
            className: vd({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? E.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Rd = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = _d(), i = (0, k.mergeProps)({
            className: gd({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? E.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Sd = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = _d(), i = (0, k.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, n), d = t ? E.DX : Vo;
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Nd = Ao,
        Dd = Mo;
      var zd = t(707),
        kd = t(5277);

      function Id(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Td(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Ld(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Td(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Id(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Td(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ed(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Vd = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Ad = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Ld(Ld({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vd(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ed(e.variantClassNames, e => Ed(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Md = Ad({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qd = Ad({
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
      const Bd = (0, N.createContext)(null);

      function Fd() {
        const e = (0, N.useContext)(Bd);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Xd = (0, N.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          orientation: t = "vertical",
          children: n,
          testId: o,
          asChild: a,
          "aria-labelledby": s,
          "aria-describedby": i,
          "aria-errormessage": d,
          status: l = "neutral",
          ...c
        }, u) => {
          const f = (0, N.useRef)(null),
            p = (0, L.UP)(f, u),
            m = (0, N.useId)(),
            y = (0, N.useId)(),
            h = (0, N.useId)(),
            v = (0, zd.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: g
            } = (0, kd.m)({
              ...c,
              orientation: t,
              "aria-labelledby": (0, k.joinStrings)(m, s),
              "aria-describedby": (0, k.joinStrings)(y, h, i),
              "aria-errormessage": (0, k.joinStrings)(h, d)
            }, v),
            b = (0, k.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, k.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? E.DX : "div";
          return (0, R.jsx)(Bd.Provider, {
            value: {
              state: v,
              size: e,
              appearance: r,
              orientation: t,
              descriptionId: y,
              labelId: m,
              errorId: h,
              status: l,
              ...c
            },
            children: (0, R.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        Gd = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = Fd(), i = (0, k.mergeProps)({
            "data-testid": e,
            className: qd({
              size: a,
              orientation: s
            })
          }, n), d = r ? E.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: t
          })
        }),
        Zd = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            labelId: d
          } = Fd(), l = i && !o, c = (0, k.mergeProps)({
            id: a.id || d,
            "data-testid": e,
            className: Md({
              showAsterisk: l
            })
          }, a), u = r ? E.DX : "div";
          return (0, R.jsx)(E.s6, {
            enabled: n,
            children: (0, R.jsx)(u, {
              ...c,
              ref: s,
              children: t
            })
          })
        }),
        Kd = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Fd(), s = (0, k.mergeProps)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = r ? E.DX : "div";
          return (0, R.jsx)(i, {
            ...s,
            ref: o,
            children: t
          })
        }),
        Hd = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = Fd(), i = (0, k.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": r,
            errorId: a,
            status: s
          }, n), d = t ? E.DX : Vo;
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Wd = Ao,
        Ud = Mo;
      var $d = t(80146),
        Yd = Ad({
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
        Qd = Ad({
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
        Jd = Ad({
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
        el = Ad({
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
      const rl = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, R.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        tl = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, R.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        nl = ({
          color: e = "currentColor"
        }) => (0, R.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, R.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        ol = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? E.DX : "label";
          return (0, R.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        }),
        al = (0, N.forwardRef)(({
          testId: e,
          value: r,
          ...t
        }, n) => {
          const o = (0, N.useRef)(null),
            a = (0, L.UP)(o, n),
            s = (0, N.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Fd(),
            {
              isPressed: p,
              pressProps: m
            } = (0, Ro.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, $d.z)({
              ...t,
              id: s,
              value: r,
              "aria-label": ""
            }, i, o),
            h = y.checked,
            v = y.disabled || i?.isReadOnly,
            g = (0, k.mergeProps)(y, {
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
            }, t),
            b = c[`Dot${l}`];
          return (0, R.jsxs)("div", {
            className: el({
              size: l
            }),
            children: [(0, R.jsx)(E.s6, {
              children: (0, R.jsx)("input", {
                type: "radio",
                ...g,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, R.jsx)("div", {
              className: Jd({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": h ? "checked" : "unchecked",
              "data-disabled": v,
              "data-pressed": p,
              ...m,
              children: (0, R.jsx)("span", {
                className: "foundry_1pfduet9",
                children: h && (0, R.jsx)(b, {})
              })
            })]
          })
        }),
        sl = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = Fd(), d = (0, N.useId)(), l = (0, k.mergeProps)({
            id: d,
            "data-testid": e,
            className: Qd({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), c = r ? E.DX : "div";
          return (0, R.jsx)(E.s6, {
            enabled: n,
            children: (0, R.jsx)(c, {
              ...l,
              ref: a,
              children: t
            })
          })
        }),
        il = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Fd(), s = (0, k.mergeProps)({
            "data-testid": e,
            className: Yd({
              isDisabled: a
            })
          }, n), i = r ? E.DX : "span";
          return (0, R.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        });
      var dl = t(58900);

      function ll(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function cl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function ul(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? cl(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = ll(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : cl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function fl(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var pl = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        ml = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = ul(ul({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) pl(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fl(e.variantClassNames, e => fl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        yl = ml({
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
        hl = ml({
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
        vl = ml({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gl = ml({
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
        bl = ml({
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
        wl = ml({
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
      const xl = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        _l = (0, N.createContext)(null);

      function jl() {
        const e = (0, N.useContext)(_l);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Cl = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, N.useState)("text"), u = `${(0,N.useId)()}-label`, f = `${(0,N.useId)()}-input`, p = `${(0,N.useId)()}-description`, m = (0, N.useRef)(null), y = (0, N.useRef)(xl), h = (0, k.mergeProps)({
            "data-testid": t,
            className: "foundry_8oytzo4"
          }, i), v = e ? E.DX : "div";
          return (0, R.jsx)(_l.Provider, {
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
              inputRef: m,
              focusState: y,
              ...i
            },
            children: (0, R.jsx)(v, {
              ref: d,
              ...h,
              children: r
            })
          })
        }),
        Pl = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, s) => {
          const {
            isDisabled: i,
            isRequired: d,
            inputId: l,
            labelId: c
          } = jl(), u = d && !o, f = (0, k.mergeProps)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: wl({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = r ? E.DX : "label";
          return (0, R.jsx)(E.s6, {
            enabled: n,
            children: (0, R.jsx)(p, {
              ref: s,
              ...f,
              children: t
            })
          })
        }),
        Ol = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = jl(), s = (0, k.mergeProps)({
            "data-testid": e,
            className: vl({
              isDisabled: a
            })
          }, n), i = r ? E.DX : "span";
          return (0, R.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Rl = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = jl(), d = (0, k.mergeProps)({
            "data-testid": e,
            className: (0, ee.clsx)(yl({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = r ? E.DX : "div";
          return (0, R.jsx)(l, {
            ref: o,
            ...d,
            children: t
          })
        }),
        Sl = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          mask: t,
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
            isRequired: m,
            status: y,
            labelId: h,
            inputId: v,
            descriptionId: g,
            setType: b,
            type: w,
            inputRef: x,
            focusState: _
          } = jl();
          (0, N.useEffect)(() => b(l), []);
          const j = "invalid" === y,
            C = (0, k.mergeProps)({
              disabled: f,
              readOnly: p,
              required: m,
              id: v,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, k.joinStrings)(h, i),
              "aria-describedby": (0, k.joinStrings)(g, d),
              "data-testid": e,
              className: (0, ee.clsx)(bl({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (_.current) {
                  const {
                    selectionStart: r,
                    selectionEnd: t
                  } = e.currentTarget;
                  _.current.selectionStart = r, _.current.selectionEnd = t
                }
              },
              ...j && {
                "aria-invalid": !0,
                "aria-errormessage": g
              },
              ..."success" === y && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...m && {
                "aria-required": !0
              }
            }, c),
            P = (0, dl.A)({
              mask: t,
              replacement: n,
              showMask: o,
              track: a
            }),
            O = (0, L.UP)(t && n ? P : null, x, u),
            S = r ? E.DX : "input";
          return (0, R.jsx)(S, {
            ref: O,
            ...C
          })
        }),
        Nl = (0, N.forwardRef)(({
          icon: e,
          asChild: r,
          testId: t,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = jl(), i = (0, k.mergeProps)({
            size: "LG",
            "data-testid": t,
            className: (0, ee.clsx)(gl({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), d = r ? E.DX : re[e];
          return (0, R.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        Dl = (0, N.forwardRef)(({
          ...e
        }, r) => {
          const {
            isDisabled: t
          } = jl(), n = (0, k.mergeProps)({
            isDisabled: t,
            size: "LG",
            appearance: "ghost",
            className: (0, ee.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, R.jsx)(_e, {
            ref: r,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        zl = (0, N.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: r,
          ...t
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i
          } = jl(), d = "password" === o, l = d ? e : r;
          (0, N.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, k.mergeProps)({
            label: l,
            icon: d ? "Eye" : "EyeOff",
            onPress: () => {
              a(d ? "text" : "password");
              const e = s.current;
              if (i.current && e) {
                const {
                  selectionStart: r,
                  selectionEnd: t
                } = i.current;
                e.focus(), null === r && null === t || requestAnimationFrame(() => {
                  e.ownerDocument.activeElement === e && (e.selectionStart = r, e.selectionEnd = t)
                })
              }
            },
            preventFocusOnPress: !0
          }, t);
          return (0, R.jsxs)(pn, {
            children: [(0, R.jsx)(mn, {
              children: (0, R.jsx)(Dl, {
                ref: n,
                ...c
              })
            }), (0, R.jsxs)(yn, {
              side: "bottom",
              align: "end",
              children: [l, (0, R.jsx)(hn, {})]
            })]
          })
        }),
        kl = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = jl(), i = (0, k.mergeProps)({
            className: hl({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? E.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Il = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = jl(), i = (0, k.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, n), d = t ? E.DX : Vo;
          return (0, R.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Tl = Ao,
        Ll = Mo;
      var El = t(68196);

      function Vl(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Al(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Ml(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Al(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Vl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Al(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ql(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Bl = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Fl = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Ml(Ml({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Bl(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ql(e.variantClassNames, e => ql(e, e => e.split(" ")[0]))
            }
          }, r
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
      const Xl = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Gl = (0, N.forwardRef)(({
          label: e,
          size: r = "LG",
          testId: t,
          ...n
        }, o) => {
          const a = (0, N.useRef)(null),
            s = (0, L.UP)(a, o),
            {
              buttonProps: i
            } = (0, L.sL)(n, a),
            d = (0, k.mergeProps)({
              "data-testid": t,
              className: Fl({
                size: r
              })
            }, i);
          return (0, R.jsx)("button", {
            ref: s,
            ...d,
            children: (0, R.jsx)(re.X, {
              label: e,
              size: Xl[r]
            })
          })
        });

      function Zl(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Kl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Hl(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Kl(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Zl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Kl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Wl(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Ul = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        $l = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Hl(Hl({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ul(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wl(e.variantClassNames, e => Wl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Yl = $l({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ql = $l({
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
        Jl = $l({
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
      const ec = (0, N.createContext)(null);

      function rc() {
        const e = (0, N.useContext)(ec);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const tc = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          status: t,
          background: n,
          ...o
        }, a) => {
          const s = e ? E.DX : "div",
            i = (0, k.mergeProps)({
              className: Jl({
                status: t,
                background: n
              })
            }, o);
          return (0, R.jsx)(ec.Provider, {
            value: {
              status: t,
              background: n
            },
            children: (0, R.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i
            })
          })
        }),
        nc = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = e ? E.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_1m368qha"
            }, t);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": r,
            ...a
          })
        }),
        oc = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = e ? E.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_1m368qhb"
            }, t);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": r,
            ...a
          })
        }),
        ac = {
          danger: re.CircleX,
          information: re.Info,
          success: re.CircleCheck,
          warning: re.TriangleAlert
        },
        sc = (0, N.forwardRef)(({
          asChild: e,
          size: r = "XL",
          ...t
        }, n) => {
          const {
            status: o
          } = rc(), a = e ? E.DX : ac[o], s = (0, k.mergeProps)({
            className: Ql({
              status: o,
              size: r
            }),
            size: r
          }, t);
          return (0, R.jsx)(a, {
            label: "",
            ref: n,
            ...s
          })
        }),
        ic = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = e ? E.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, t);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": r,
            ...a
          })
        }),
        dc = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = e ? E.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": r,
            ...a
          })
        }),
        lc = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, N.useRef)(null),
            s = (0, L.UP)(a, o),
            i = e ? E.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, El.i)(n, a),
            c = (0, k.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, R.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...c,
            children: r
          })
        }),
        cc = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = e ? E.DX : "div",
            s = (0, k.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, R.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        uc = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          className: t,
          ...n
        }, o) => {
          const a = e ? E.DX : "div";
          return (0, R.jsx)(a, {
            ref: o,
            "data-testid": r,
            className: (0, ee.clsx)(t, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        fc = (0, N.forwardRef)((e, r) => {
          const {
            background: t
          } = rc(), n = "none" !== t, o = (0, k.mergeProps)({
            className: Yl({
              hasBackground: n
            })
          }, e);
          return (0, R.jsx)(Gl, {
            size: "SM",
            ref: r,
            ...o
          })
        });
      var pc = t(64634),
        mc = t(7697),
        yc = t(17497);
      var hc = t(69066);

      function vc(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function gc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function bc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? gc(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = vc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : gc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function wc(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var xc = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        _c = "foundry_qmpv6yv",
        jc = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = bc(bc({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) xc(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wc(e.variantClassNames, e => wc(e, e => e.split(" ")[0]))
            }
          }, r
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
      const Cc = (0, N.createContext)(null);

      function Pc() {
        const e = (0, N.useContext)(Cc);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Oc = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          loopPagination: n,
          status: o,
          background: a,
          align: s = "left",
          ...i
        }, d) => {
          const l = (({
              loopPagination: e = !0
            }) => {
              const r = (0, L.rl)(),
                t = (0, L.jt)(),
                [n, o] = (0, N.useState)([]),
                a = n.length,
                [s, i] = (0, N.useState)(0),
                [d, l] = (0, pc.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: r && a > 1
                }, [(0, mc.A)(), (0, yc.A)()]),
                c = (0, N.useRef)(0),
                u = (0, N.useRef)(!1),
                f = n[s],
                p = (0, N.useCallback)(e => {
                  const r = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, t) => {
                    e.style.visibility = t === r ? "visible" : "hidden"
                  }), i(r), u.current = !0
                }, [l]),
                m = (0, N.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                y = (0, N.useCallback)((e, r) => {
                  const t = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    a = "scroll" === r;
                  e.scrollSnapList().forEach((r, s) => {
                    let i = r - n;
                    t.slideRegistry[s].forEach(s => {
                      if (a && !o.includes(s)) return;
                      t.options.loop && t.slideLooper.loopPoints.forEach(e => {
                        const t = e.target();
                        if (s === e.index && 0 !== t) {
                          const e = Math.sign(t); - 1 === e && (i = r - (1 + n)), 1 === e && (i = r + (1 - n))
                        }
                      });
                      const d = (l = 1 - Math.abs(i * c.current), Math.min(Math.max(l, 0), 1)).toString();
                      var l;
                      e.slideNodes()[s].style.opacity = d
                    })
                  })
                }, []);
              return (0, N.useEffect)(() => {
                l && (m(l), y(l), l.on("reInit", m).on("reInit", y).on("scroll", y).on("slideFocus", y))
              }, [l, y]), (0, N.useEffect)(() => {
                l && (p(l), l.on("select", p).on("reInit", p))
              }, [l, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: a,
                emblaRef: d,
                emblaApi: l,
                prevAlert: () => l?.scrollPrev(t),
                nextAlert: () => l?.scrollNext(t),
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
          (0, N.useEffect)(() => {
            o && a && f([{
              status: o,
              background: a,
              align: s
            }])
          }, []);
          const m = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            y = (0, k.mergeProps)({
              className: jc(c)
            }, m, i),
            h = e ? E.DX : "div";
          return (0, R.jsx)(Cc.Provider, {
            value: l,
            children: (0, R.jsx)(h, {
              ref: d,
              "data-testid": t,
              "data-initialized": u,
              ...y,
              children: r
            })
          })
        }),
        Rc = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Sc = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            currentAlert: n
          } = Pc();
          if (!e && !n || !n?.status) return null;
          const o = e || Rc[n.status],
            a = re[o],
            s = (0, k.mergeProps)({
              className: "foundry_qmpv6yp"
            }, r);
          return (0, R.jsx)(a, {
            label: "",
            ref: t,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        Nc = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = e ? E.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, R.jsx)(o, {
            ref: n,
            "data-testid": r,
            ...a
          })
        }),
        Dc = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          align: t = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? E.DX : "div",
            d = (0, k.mergeProps)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, R.jsx)(i, {
            ref: s,
            "data-testid": r,
            ...d
          })
        }),
        zc = (0, N.forwardRef)(({
          testId: e,
          children: r,
          ...t
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a,
            emblaApi: s
          } = Pc(), i = (0, k.mergeProps)({
            className: "foundry_qmpv6ym"
          }, t), d = (0, L.UP)(a, n), l = N.Children.map(r, e => {
            const r = e;
            if (!r.props.background || !r.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: r.props.status,
              background: r.props.background,
              align: r.props.align
            }
          });
          return (0, N.useEffect)(() => {
            l && o(l)
          }, []), s?.on("slidesChanged", () => {
            l && o(l)
          }), (0, R.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, R.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: r
            })
          })
        }),
        kc = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, N.useRef)(null),
            s = (0, L.UP)(a, o),
            i = e ? E.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, El.i)(n, a),
            c = (0, k.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, R.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...d,
            ...c,
            children: r
          })
        }),
        Ic = (0, N.forwardRef)((e, r) => {
          const t = (0, k.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, R.jsx)(Gl, {
            ref: r,
            "data-close-btn": !0,
            size: "SM",
            ...t
          })
        }),
        Tc = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          children: t,
          ...n
        }, o) => {
          const a = e ? E.DX : "div",
            s = (0, k.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, R.jsx)(a, {
            ref: o,
            "data-testid": r,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: t
          })
        }),
        Lc = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Pc(), a = (0, k.mergeProps)({
            className: _c
          }, r);
          return (0, R.jsx)(hc.K, {
            ref: t,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...a
          })
        }),
        Ec = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Pc(), a = (0, k.mergeProps)({
            className: _c
          }, r);
          return (0, R.jsx)(hc.K, {
            ref: t,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...a
          })
        }),
        Vc = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Pc(), a = (0, k.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, r);
          return (0, R.jsxs)("div", {
            ref: t,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

      function Ac(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Mc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function qc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Mc(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Ac(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Mc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Bc(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Fc = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Xc = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = qc(qc({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Fc(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bc(e.variantClassNames, e => Bc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Gc = Xc({
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
        Zc = Xc({
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
        Kc = Xc({
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
      const Hc = (0, N.createContext)(null);

      function Wc() {
        const e = (0, N.useContext)(Hc);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Uc = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
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
            u = (0, k.mergeProps)({
              className: Zc(c)
            }, d),
            f = e ? E.DX : "div";
          return (0, R.jsx)(Hc.Provider, {
            value: c,
            children: (0, R.jsx)(f, {
              ref: l,
              "data-testid": t,
              "aria-disabled": i,
              ...u,
              children: r
            })
          })
        }),
        $c = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const {
            size: a
          } = Wc(), s = e ? E.DX : "div", i = (0, k.mergeProps)({
            className: Kc({
              size: a
            })
          }, n);
          return (0, R.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...i,
            children: r
          })
        }),
        Yc = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const n = re[e],
            o = (0, k.mergeProps)({
              className: "foundry_oahh5812"
            }, r);
          return (0, R.jsx)(n, {
            ref: t,
            size: "SM",
            ...o
          })
        }),
        Qc = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            background: n,
            isDisabled: o
          } = Wc(), a = (0, k.mergeProps)({
            className: Gc({
              background: n
            })
          }, r);
          return (0, R.jsx)(_e, {
            ref: t,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...a
          })
        });
      var Jc = t(72976),
        eu = "ToastProvider",
        [ru, tu, nu] = (0, xn.N)("Toast"),
        [ou, au] = (0, Kr.A)("Toast", [nu]),
        [su, iu] = ou(eu),
        du = e => {
          const {
            __scopeToast: r,
            label: t = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = N.useState(null), [c, u] = N.useState(0), f = N.useRef(!1), p = N.useRef(!1);
          return t.trim() || console.error(`Invalid prop \`label\` supplied to \`${eu}\`. Expected non-empty \`string\`.`), (0, R.jsx)(ru.Provider, {
            scope: r,
            children: (0, R.jsx)(su, {
              scope: r,
              label: t,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: N.useCallback(() => u(e => e + 1), []),
              onToastRemove: N.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: s,
              children: i
            })
          })
        };
      du.displayName = eu;
      var lu = "ToastViewport",
        cu = ["F8"],
        uu = "toast.viewportPause",
        fu = "toast.viewportResume",
        pu = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            hotkey: n = cu,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = iu(lu, t), i = tu(t), d = N.useRef(null), l = N.useRef(null), c = N.useRef(null), u = N.useRef(null), f = (0, Zr.s)(r, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = s.toastCount > 0;
          N.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(r => e[r] || e.code === r) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), N.useEffect(() => {
            const e = d.current,
              r = u.current;
            if (m && e && r) {
              const t = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(uu);
                    r.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(fu);
                    r.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                },
                o = r => {
                  !e.contains(r.relatedTarget) && n()
                },
                a = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", t), e.addEventListener("focusout", o), e.addEventListener("pointermove", t), e.addEventListener("pointerleave", a), window.addEventListener("blur", t), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", t), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", t), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", t), window.removeEventListener("focus", n)
              }
            }
          }, [m, s.isClosePausedRef]);
          const y = N.useCallback(({
            tabbingDirection: e
          }) => {
            const r = i().map(r => {
              const t = r.ref.current,
                n = [t, ...zu(t)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? r.reverse() : r).flat()
          }, [i]);
          return N.useEffect(() => {
            const e = u.current;
            if (e) {
              const r = r => {
                const t = r.altKey || r.ctrlKey || r.metaKey;
                if ("Tab" === r.key && !t) {
                  const t = document.activeElement,
                    n = r.shiftKey;
                  if (r.target === e && n) return void l.current?.focus();
                  const o = y({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === t);
                  ku(o.slice(a + 1)) ? r.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r)
            }
          }, [i, y]), (0, R.jsxs)(Hr.lg, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: m ? void 0 : "none"
            },
            children: [m && (0, R.jsx)(yu, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                ku(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, R.jsx)(ru.Slot, {
              scope: t,
              children: (0, R.jsx)(Yr.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), m && (0, R.jsx)(yu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                ku(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      pu.displayName = lu;
      var mu = "ToastFocusProxy",
        yu = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = iu(mu, t);
          return (0, R.jsx)(Nt.s6, {
            tabIndex: 0,
            ...o,
            ref: r,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const r = e.relatedTarget;
              !a.viewport?.contains(r) && n()
            }
          })
        });
      yu.displayName = mu;
      var hu = "Toast",
        vu = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, St.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: hu
          });
          return (0, R.jsx)(Ot.C, {
            present: t || i,
            children: (0, R.jsx)(wu, {
              open: i,
              ...s,
              ref: r,
              onClose: () => d(!1),
              onPause: (0, et.c)(e.onPause),
              onResume: (0, et.c)(e.onResume),
              onSwipeStart: (0, Gr.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Gr.mK)(e.onSwipeMove, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${t}px`)
              }),
              onSwipeCancel: (0, Gr.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Gr.mK)(e.onSwipeEnd, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${t}px`), d(!1)
              })
            })
          })
        });
      vu.displayName = hu;
      var [gu, bu] = ou(hu, {
        onClose() {}
      }), wu = N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
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
          ...m
        } = e, y = iu(hu, t), [h, v] = N.useState(null), g = (0, Zr.s)(r, e => v(e)), b = N.useRef(null), w = N.useRef(null), x = o || y.duration, _ = N.useRef(0), j = N.useRef(x), C = N.useRef(0), {
          onToastAdd: P,
          onToastRemove: O
        } = y, S = (0, et.c)(() => {
          const e = h?.contains(document.activeElement);
          e && y.viewport?.focus(), s()
        }), D = N.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), _.current = (new Date).getTime(), C.current = window.setTimeout(S, e))
        }, [S]);
        N.useEffect(() => {
          const e = y.viewport;
          if (e) {
            const r = () => {
                D(j.current), l?.()
              },
              t = () => {
                const e = (new Date).getTime() - _.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(uu, t), e.addEventListener(fu, r), () => {
              e.removeEventListener(uu, t), e.removeEventListener(fu, r)
            }
          }
        }, [y.viewport, x, d, l, D]), N.useEffect(() => {
          a && !y.isClosePausedRef.current && D(x)
        }, [a, x, y.isClosePausedRef, D]), N.useEffect(() => (P(), () => O()), [P, O]);
        const z = N.useMemo(() => h ? Su(h) : null, [h]);
        return y.viewport ? (0, R.jsxs)(R.Fragment, {
          children: [z && (0, R.jsx)(xu, {
            __scopeToast: t,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: z
          }), (0, R.jsx)(gu, {
            scope: t,
            onClose: S,
            children: Oa.createPortal((0, R.jsx)(ru.ItemSlot, {
              scope: t,
              children: (0, R.jsx)(Hr.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, Gr.mK)(i, () => {
                  y.isFocusedToastEscapeKeyDownRef.current || S(), y.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, R.jsx)(Yr.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": y.swipeDirection,
                  ...m,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, Gr.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, S()))
                  }),
                  onPointerDown: (0, Gr.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Gr.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const r = e.clientX - b.current.x,
                      t = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(y.swipeDirection),
                      a = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
                      s = o ? a(0, r) : 0,
                      i = o ? 0 : a(0, t),
                      d = "touch" === e.pointerType ? 10 : 2,
                      l = {
                        x: s,
                        y: i
                      },
                      f = {
                        originalEvent: e,
                        delta: l
                      };
                    n ? (w.current = l, Nu("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Du(l, y.swipeDirection, d) ? (w.current = l, Nu("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(r) > d || Math.abs(t) > d) && (b.current = null)
                  }),
                  onPointerUp: (0, Gr.mK)(e.onPointerUp, e => {
                    const r = w.current,
                      t = e.target;
                    if (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), w.current = null, b.current = null, r) {
                      const t = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: r
                        };
                      Du(r, y.swipeDirection, y.swipeThreshold) ? Nu("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Nu("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), t.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), y.viewport)
          })]
        }) : null
      }), xu = e => {
        const {
          __scopeToast: r,
          children: t,
          ...n
        } = e, o = iu(hu, r), [a, s] = N.useState(!1), [i, d] = N.useState(!1);
        return function(e = () => {}) {
          const r = (0, et.c)(e);
          (0, rt.N)(() => {
            let e = 0,
              t = 0;
            return e = window.requestAnimationFrame(() => t = window.requestAnimationFrame(r)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(t)
            }
          }, [r])
        }(() => s(!0)), N.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, R.jsx)(Pt.Z, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, R.jsx)(Nt.s6, {
            ...n,
            children: a && (0, R.jsxs)(R.Fragment, {
              children: [o.label, " ", t]
            })
          })
        })
      };
      N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...n
        } = e;
        return (0, R.jsx)(Yr.sG.div, {
          ...n,
          ref: r
        })
      }).displayName = "ToastTitle";
      var _u = N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...n
        } = e;
        return (0, R.jsx)(Yr.sG.div, {
          ...n,
          ref: r
        })
      });
      _u.displayName = "ToastDescription";
      var ju = "ToastAction",
        Cu = N.forwardRef((e, r) => {
          const {
            altText: t,
            ...n
          } = e;
          return t.trim() ? (0, R.jsx)(Ru, {
            altText: t,
            asChild: !0,
            children: (0, R.jsx)(Ou, {
              ...n,
              ref: r
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${ju}\`. Expected non-empty \`string\`.`), null)
        });
      Cu.displayName = ju;
      var Pu = "ToastClose",
        Ou = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            ...n
          } = e, o = bu(Pu, t);
          return (0, R.jsx)(Ru, {
            asChild: !0,
            children: (0, R.jsx)(Yr.sG.button, {
              type: "button",
              ...n,
              ref: r,
              onClick: (0, Gr.mK)(e.onClick, o.onClose)
            })
          })
        });
      Ou.displayName = Pu;
      var Ru = N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          altText: n,
          ...o
        } = e;
        return (0, R.jsx)(Yr.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: r
        })
      });

      function Su(e) {
        const r = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && r.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const t = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!t)
              if (n) {
                const t = e.dataset.radixToastAnnounceAlt;
                t && r.push(t)
              } else r.push(...Su(e))
          }
        }), r
      }

      function Nu(e, r, t, {
        discrete: n
      }) {
        const o = t.originalEvent.currentTarget,
          a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: t
          });
        r && o.addEventListener(e, r, {
          once: !0
        }), n ? (0, Yr.hO)(o, a) : o.dispatchEvent(a)
      }
      var Du = (e, r, t = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === r || "right" === r ? a && n > t : !a && o > t
      };

      function zu(e) {
        const r = [],
          t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const r = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || r ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; t.nextNode();) r.push(t.currentNode);
        return r
      }

      function ku(e) {
        const r = document.activeElement;
        return e.some(e => e === r || (e.focus(), document.activeElement !== r))
      }
      var Iu = du,
        Tu = pu,
        Lu = vu,
        Eu = _u,
        Vu = Cu,
        Au = Ou;

      function Mu(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function qu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Bu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? qu(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Mu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Fu(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Xu = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Gu = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Bu(Bu({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xu(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fu(e.variantClassNames, e => Fu(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Zu = Gu({
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
        Ku = Gu({
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
        Hu = Gu({
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
      const Wu = ({
          testId: e,
          ...r
        }) => (0, R.jsx)(Iu, {
          "data-testid": e,
          ...r
        }),
        Uu = (0, N.forwardRef)(({
          children: e,
          testId: r,
          position: t = "bottomRight",
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
            className: Hu({
              position: t
            })
          }, n);
          return (0, R.jsx)(Tu, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e
          })
        }),
        $u = (0, N.createContext)(null);

      function Yu() {
        const e = (0, N.useContext)($u);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Qu = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? E.DX : Lu,
            i = (0, k.mergeProps)({
              className: Ku({
                appearance: n
              })
            }, o);
          return (0, R.jsx)($u.Provider, {
            value: {
              appearance: n
            },
            children: (0, R.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: r
            })
          })
        }),
        Ju = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = e ? E.DX : Eu,
            s = (0, k.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, R.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        ef = {
          danger: re.CircleX,
          information: re.Info,
          success: re.CircleCheck,
          warning: re.TriangleAlert,
          avocado: re.CircleCheck
        },
        rf = (0, N.forwardRef)(({
          asChild: e,
          ...r
        }, t) => {
          const {
            appearance: n
          } = Yu(), o = e ? E.DX : ef[n], a = (0, k.mergeProps)({
            className: Zu({
              appearance: n
            }),
            size: "LG"
          }, r);
          return (0, R.jsx)(o, {
            ref: t,
            ...a
          })
        }),
        tf = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, R.jsx)(Vu, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e ? (0, R.jsx)(E.DX, {
              children: r
            }) : (0, R.jsx)(Jc.$, {
              size: "MD",
              appearance: "link",
              children: r
            })
          })
        }),
        nf = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          label: n,
          ...o
        }, a) => {
          const s = (0, k.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, R.jsx)(Au, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e ? (0, R.jsx)(E.DX, {
              children: r
            }) : (0, R.jsx)(Gl, {
              size: "SM",
              label: n
            })
          })
        });
      var of = t(30259);

      function af(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function sf(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function df(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? sf(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = af(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sf(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function lf(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var cf = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        uf = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = df(df({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) cf(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lf(e.variantClassNames, e => lf(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ff = uf({
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
        pf = uf({
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
        mf = uf({
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

      function yf() {
        const e = (0, N.useContext)(hf);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const hf = (0, N.createContext)(null),
        vf = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, k.mergeProps)({
              className: mf({
                size: n
              })
            }, o),
            i = t ? E.DX : "ol";
          return (0, R.jsx)(hf.Provider, {
            value: {
              size: n
            },
            children: (0, R.jsx)(i, {
              ref: a,
              "data-testid": r,
              ...s,
              children: e
            })
          })
        }),
        gf = (0, N.forwardRef)(({
          isCurrent: e,
          children: r,
          asChild: t,
          testId: n,
          ...o
        }, a) => {
          const s = (0, N.useRef)(null),
            {
              size: i
            } = yf(),
            {
              itemProps: d
            } = (0, of.I)({
              isCurrent: e,
              children: r
            }, s),
            l = t ? E.DX : "a",
            c = (0, k.mergeProps)({
              className: (0, ee.clsx)(ff({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, R.jsx)("li", {
            className: pf({
              size: i
            }),
            ref: a,
            children: (0, R.jsx)(l, {
              ref: s,
              ...c,
              children: r
            })
          })
        }),
        bf = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const n = re[e];
          return (0, R.jsx)(n, {
            ref: t,
            size: "LG",
            ...r
          })
        }),
        wf = (0, N.forwardRef)(({
          children: e,
          testId: r,
          defaultOpen: t = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, N.useState)(t), {
            size: d
          } = yf(), l = (0, k.mergeProps)({
            className: pf({
              size: d
            }),
            "data-testid": r
          }, o);
          return (0, R.jsx)("li", {
            ref: a,
            ...l,
            children: (0, R.jsxs)(Za, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, R.jsx)(Ha, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, R.jsx)(es, {
                children: (0, R.jsx)(ts, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, R.jsx)(ms, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        xf = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const a = r ? E.DX : _s,
            s = (0, k.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": t
            }, n);
          return (0, R.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function _f(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function jf(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Cf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? jf(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = _f(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : jf(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Pf(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Of = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Rf = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Cf(Cf({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Of(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pf(e.variantClassNames, e => Pf(e, e => e.split(" ")[0]))
            }
          }, r
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
      const Sf = (0, N.createContext)(null);

      function Nf() {
        const e = (0, N.useContext)(Sf);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Df = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? E.DX : "div",
            d = (0, k.mergeProps)({
              className: Rf({
                appearance: t,
                type: o,
                size: n
              })
            }, a);
          return (0, R.jsx)(Sf.Provider, {
            value: {
              type: o
            },
            children: (0, R.jsx)(i, {
              ref: s,
              "data-testid": r,
              ...d
            })
          })
        }),
        zf = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = e ? E.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": r
            }, t);
          return (0, R.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        kf = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const n = To[e],
            o = (0, k.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, r);
          return (0, R.jsx)(n, {
            ref: t,
            ...o
          })
        }),
        If = () => {
          const e = (0, L.Ub)(k.breakpoints.mobile);
          return r => e ? {
            transform: `translate(0,${100-r}%)`
          } : {
            opacity: r / 100,
            transform: `scale(${.95+r/100*.05})`
          }
        },
        Tf = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Lf(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Ef(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Vf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ef(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Lf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ef(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Af(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Mf = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        qf = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Vf(Vf({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Mf(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Af(e.variantClassNames, e => Af(e, e => e.split(" ")[0]))
            }
          }, r
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
      const Bf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, r);
          return (0, R.jsx)(xa, {
            ref: t,
            ...n
          })
        }),
        Ff = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, r);
          return (0, R.jsx)(_a, {
            ref: t,
            ...n
          })
        }),
        Xf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, r);
          return (0, R.jsx)(ja, {
            ref: t,
            ...n
          })
        }),
        Gf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, L.rl)(),
            o = (0, k.mergeProps)({
              "data-testid": e,
              className: qf({
                isTouchDevice: n
              })
            }, r);
          return (0, R.jsx)(Ca, {
            ref: t,
            ...o
          })
        }),
        Zf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(Pa, {
            ref: t,
            ...n
          })
        });

      function Kf(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Hf(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Wf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Hf(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Kf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hf(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Uf(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var $f = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Yf = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Wf(Wf({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) $f(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uf(e.variantClassNames, e => Uf(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Qf = Yf({
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
        Jf = Yf({
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
      const ep = (0, N.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, N.createRef)(),
          dialogSpringRef: (0, Xr.$9)(),
          overlaySpringRef: (0, Xr.$9)()
        }),
        rp = ({
          defaultOpen: e,
          onOpenChange: r,
          isOpen: t,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, L.ic)({
            prop: t,
            defaultProp: e ?? !1,
            onChange: r
          }), c = (0, L.ZC)(d);
          return (0, R.jsx)(ep.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== t,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, N.useId)(),
              descriptionId: (0, N.useId)(),
              triggerRef: (0, N.useRef)(null),
              dialogSpringRef: (0, Xr.U2)(),
              overlaySpringRef: (0, Xr.U2)()
            },
            children: (0, R.jsx)(tp, {
              ...i
            })
          })
        },
        tp = e => {
          const {
            isOpen: r,
            setIsOpen: t
          } = (0, N.useContext)(ep), n = (0, k.mergeProps)({
            open: r,
            onOpenChange: t
          }, e);
          return (0, R.jsx)(to.bL, {
            ...n
          })
        },
        np = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, N.useContext)(ep), a = (0, L.UP)(o, t), s = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, r);
          return (0, R.jsx)(to.l9, {
            ...s,
            ref: a
          })
        }),
        op = e => (0, R.jsx)(to.ZL, {
          forceMount: !0,
          ...e
        }),
        ap = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = (0, N.useContext)(ep), s = Tf(), i = (0, L.jt)(), d = (0, Xr.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Xr.$W.stiff,
            immediate: i || a
          }), l = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, r), c = (0, Xr.CS)(to.hJ);
          return (0, N.useEffect)(() => {
            o.start()
          }, [n]), d((e, r) => r ? (0, R.jsx)(c, {
            forceMount: !0,
            ref: t,
            ...l,
            style: e
          }) : null)
        }),
        sp = (0, N.forwardRef)(({
          children: e,
          testId: r,
          onCloseAutoFocus: t,
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
            onCloseTransitionComplete: m,
            dialogSpringRef: y,
            overlaySpringRef: h
          } = (0, N.useContext)(ep), v = (0, L.rl)(), g = (0, L.jt)(), b = (0, N.useRef)(null), w = If(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: r,
            overlaySpringRef: t,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = Tf(),
              s = If(),
              i = (0, N.useRef)();
            return {
              bindDrag: (0, ir.i3)(({
                velocity: [, d],
                offset: [, l],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: m
              }) => {
                const {
                  height: y
                } = e.current.getBoundingClientRect();
                if (p && (i.current = function(e, r) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (r < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(m, c)), (!i.current || l < -70) && u(), i.current) {
                  const e = 100 * (y - l) / y;
                  t.start({
                    ...a(e),
                    immediate: !0
                  }), r.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * y || d > .5 && c > 0 ? (r.start({
                  ...s(0),
                  immediate: !1,
                  config: Xr.$W.stiff,
                  onStart: n,
                  onRest: o
                }), t.start({
                  ...a(0),
                  immediate: !1,
                  config: Xr.$W.stiff
                })) : (r.start({
                  ...s(100),
                  immediate: !1,
                  config: Xr.$W.stiff
                }), t.start({
                  ...a(100),
                  immediate: !1,
                  config: Xr.$W.stiff
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
            overlaySpringRef: h,
            dialogSpringRef: y,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: m
          }), _ = (0, Xr.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: Xr.$W.stiff,
            ref: y,
            immediate: g || d,
            onStart: (e, r, t) => {
              t ? u?.() : p?.()
            },
            onRest: (e, r, t) => {
              t ? f?.() : m?.()
            }
          });
          (0, N.useEffect)(() => {
            y.start()
          }, [s]);
          const j = (0, L.UP)(b, a),
            C = v && !g && !n && x(),
            P = (0, k.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                t?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, o),
            O = (0, Xr.CS)(to.UC);
          return _((r, t) => t ? (0, R.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, R.jsx)(O, {
              forceMount: !0,
              ref: j,
              ...P,
              style: r,
              children: e
            })
          }) : null)
        }),
        ip = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, R.jsx)(to.hE, {
            ref: t,
            ...n
          })
        }),
        dp = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(to.VY, {
            ref: t,
            ...n
          })
        }),
        lp = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            className: "foundry_xov33nh",
            "data-testid": r
          }, t);
          return (0, R.jsxs)(Bf, {
            ref: n,
            ...o,
            children: [(0, R.jsx)(Ff, {
              className: "foundry_xov33ni",
              children: e
            }), (0, R.jsx)(Xf, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, R.jsx)(Gf, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        cp = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33ne"
            }, t),
            a = e ? E.DX : "div";
          return (0, R.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        up = (0, N.forwardRef)(({
          align: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
              "data-testid": t,
              className: Qf({
                align: e
              })
            }, n),
            s = r ? E.DX : "header";
          return (0, R.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        fp = (0, N.forwardRef)(({
          testId: e,
          appearance: r = "sentence",
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            "data-testid": e,
            className: Jf({
              appearance: r
            })
          }, t);
          return (0, R.jsx)(to.hE, {
            ref: n,
            ...o
          })
        }),
        pp = (0, N.forwardRef)((e, r) => {
          const t = (0, k.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, R.jsx)(hc.K, {
            ref: r,
            ...t,
            appearance: "ghost",
            size: "LG"
          })
        }),
        mp = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, t),
            a = r ? (0, R.jsx)(E.DX, {
              ref: n,
              ...o
            }) : (0, R.jsx)(Gl, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, R.jsx)(to.bm, {
            asChild: !0,
            children: a
          })
        }),
        yp = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, t),
            a = e ? E.DX : "div";
          return (0, R.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        hp = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, t),
            a = e ? E.DX : "footer";
          return (0, R.jsx)(a, {
            ref: n,
            ...o
          })
        });
      var vp = "Avatar",
        [gp, bp] = (0, Kr.A)(vp),
        wp = [0, () => {}],
        [xp, _p] = gp(vp),
        jp = N.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            ...n
          } = e, [o, a] = N.useState("idle"), [s, i] = function() {
            let e = wp; {
              e = N.useState(0);
              const [r] = e, t = N.useRef(!1);
              N.useEffect(() => {
                r > 1 && !t.current && (t.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [r])
            }
            return e
          }();
          return (0, R.jsx)(xp, {
            scope: t,
            imageLoadingStatus: o,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, R.jsx)(Yr.sG.span, {
              ...n,
              ref: r
            })
          })
        });
      jp.displayName = vp;
      var Cp = "AvatarImage",
        Pp = N.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            src: n,
            onLoadingStatusChange: o,
            ...a
          } = e, s = _p(Cp, t);
          var i;
          i = s.setImageCount, N.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: r,
              setLoadingStatus: t,
              referrerPolicy: n,
              crossOrigin: o
            }) {
              return (0, rt.N)(() => {
                if (!e) return void t("error");
                const r = new window.Image,
                  a = e => {
                    const r = e.currentTarget;
                    t(Rp(r))
                  },
                  s = () => t("error");
                return r.addEventListener("load", a), r.addEventListener("error", s), n && (r.referrerPolicy = n), r.crossOrigin = o ?? null, r.src = e, t(Rp(r)), () => {
                  r.removeEventListener("load", a), r.removeEventListener("error", s), t("idle")
                }
              }, [e, o, n, t]), r
            }(n, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, et.c)(e => {
              o?.(e)
            }),
            c = N.useRef(d);
          return (0, rt.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, R.jsx)(Yr.sG.img, {
            ...a,
            ref: r,
            src: n
          }) : null
        });
      Pp.displayName = Cp;
      var Op = "AvatarFallback";

      function Rp(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Sp(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Np(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Dp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Np(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Sp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Np(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function zp(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      N.forwardRef((e, r) => {
        const {
          __scopeAvatar: t,
          delayMs: n,
          ...o
        } = e, a = _p(Op, t), [s, i] = N.useState(void 0 === n);
        return N.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, R.jsx)(Yr.sG.span, {
          ...o,
          ref: r
        }) : null
      }).displayName = Op;
      var kp = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Ip = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Dp(Dp({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) kp(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zp(e.variantClassNames, e => zp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Tp = Ip({
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
        Lp = "var(--foundry_v912w22)",
        Ep = "var(--foundry_v912w23)",
        Vp = Ip({
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
        Ap = Ip({
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
        Mp = "var(--foundry_v912w21)",
        qp = "var(--foundry_v912w20)",
        Bp = Ip({
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
      const Fp = (0, N.createContext)(null);

      function Xp() {
        const e = (0, N.useContext)(Fp);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Gp = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, k.mergeProps)({
            "data-testid": t,
            "aria-disabled": a,
            className: Tp({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, R.jsx)(Fp.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, R.jsx)(jp, {
              ref: i,
              ...d,
              children: r
            })
          })
        }),
        Zp = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          src: t,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = Xp(), [i, d] = (0, N.useState)(!1);
          (0, N.useEffect)(() => {
            d(!1)
          }, [t]);
          const l = i || !t ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : t,
            c = (0, k.mergeProps)({
              className: Vp({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, R.jsx)("span", {
            className: Ap({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": r,
            "aria-hidden": !0,
            children: (0, R.jsx)(Pp, {
              ref: o,
              ...c
            })
          })
        }),
        Kp = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, n) => {
          const o = (0, N.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = Xp(),
            d = s || "online",
            l = (0, L.UP)(o, n),
            c = (0, k.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Bp({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, D.DI)({
                [qp]: r?.online,
                [Mp]: r?.offline,
                [Lp]: r?.away,
                [Ep]: r?.busy
              })
            }, t);
          return (0, R.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Hp(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Wp(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Up(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Wp(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Hp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wp(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function $p(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Yp = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Qp = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Up(Up({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yp(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $p(e.variantClassNames, e => $p(e, e => e.split(" ")[0]))
            }
          }, r
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
      const Jp = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? E.DX : "nav";
          return (0, R.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        }),
        em = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
              role: "list",
              "data-testid": t,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? E.DX : "div";
          return (0, R.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        }),
        rm = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          isActive: t,
          testId: n,
          ...o
        }, a) => {
          const s = (0, N.useRef)(null),
            i = (0, L.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, El.i)(o, s),
            c = (0, k.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": t,
              className: (0, ee.clsx)(Qp({
                isActive: t
              }))
            }, d),
            u = e ? E.DX : "a";
          return (0, R.jsx)(u, {
            ref: i,
            ...c,
            children: r
          })
        }),
        tm = (0, N.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, t);
          return (0, R.jsx)(rm, {
            ref: n,
            ...o,
            children: (0, R.jsx)(re.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        nm = (0, N.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, t);
          return (0, R.jsx)(rm, {
            ref: n,
            ...o,
            children: (0, R.jsx)(re.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        om = ({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }) => {
          const o = (0, k.mergeProps)({
              role: "listitem",
              "data-testid": t,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            a = e ? E.DX : "span";
          return (0, R.jsx)(a, {
            ...o,
            children: r || "..."
          })
        },
        am = ({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }) => {
          const o = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? E.DX : "div";
          return (0, R.jsx)(a, {
            ...o,
            children: r
          })
        },
        sm = (0, N.createContext)(null);

      function im() {
        const e = (0, N.useContext)(sm);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const dm = ({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }) => {
          const o = (0, N.useId)(),
            a = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? E.DX : "div";
          return (0, R.jsx)(sm.Provider, {
            value: {
              labelId: o
            },
            children: (0, R.jsx)(s, {
              ...a,
              children: r
            })
          })
        },
        lm = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const {
            labelId: a
          } = im(), s = (0, k.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? E.DX : "label";
          return (0, R.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: r
          })
        }),
        cm = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          placeholder: t,
          ...n
        }, o) => {
          const {
            labelId: a
          } = im(), s = (0, k.mergeProps)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? E.DX : $s;
          return (0, R.jsxs)(i, {
            ...s,
            children: [(0, R.jsxs)(ei, {
              ref: o,
              children: [(0, R.jsx)(ri, {
                placeholder: t
              }), (0, R.jsx)(ti, {})]
            }), (0, R.jsx)(li, {
              children: (0, R.jsx)(Ys, {
                children: (0, R.jsx)(Js, {
                  children: r
                })
              })
            })]
          })
        }),
        um = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
              "data-testid": t
            }, n),
            s = e ? E.DX : si;
          return (0, R.jsx)(s, {
            ...a,
            ref: o,
            children: (0, R.jsx)(ii, {
              children: r
            })
          })
        }),
        fm = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            s = e ? E.DX : "p";
          return (0, R.jsx)(s, {
            ref: o,
            ...a,
            children: r
          })
        });
      var pm = "rovingFocusGroup.onEntryFocus",
        mm = {
          bubbles: !1,
          cancelable: !0
        },
        ym = "RovingFocusGroup",
        [hm, vm, gm] = (0, xn.N)(ym),
        [bm, wm] = (0, Kr.A)(ym, [gm]),
        [xm, _m] = bm(ym),
        jm = N.forwardRef((e, r) => (0, R.jsx)(hm.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, R.jsx)(hm.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, R.jsx)(Cm, {
              ...e,
              ref: r
            })
          })
        }));
      jm.displayName = ym;
      var Cm = N.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            orientation: n,
            loop: o = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: d,
            onEntryFocus: l,
            preventScrollOnEntryFocus: c = !1,
            ...u
          } = e, f = N.useRef(null), p = (0, Zr.s)(r, f), m = (0, bn.jH)(a), [y, h] = (0, St.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: ym
          }), [v, g] = N.useState(!1), b = (0, et.c)(l), w = vm(t), x = N.useRef(!1), [_, j] = N.useState(0);
          return N.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(pm, b), () => e.removeEventListener(pm, b)
          }, [b]), (0, R.jsx)(xm, {
            scope: t,
            orientation: n,
            dir: m,
            loop: o,
            currentTabStopId: y,
            onItemFocus: N.useCallback(e => h(e), [h]),
            onItemShiftTab: N.useCallback(() => g(!0), []),
            onFocusableItemAdd: N.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: N.useCallback(() => j(e => e - 1), []),
            children: (0, R.jsx)(Yr.sG.div, {
              tabIndex: v || 0 === _ ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Gr.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, Gr.mK)(e.onFocus, e => {
                const r = !x.current;
                if (e.target === e.currentTarget && r && !v) {
                  const r = new CustomEvent(pm, mm);
                  if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      r = e.find(e => e.active),
                      t = e.find(e => e.id === y),
                      n = [r, t, ...e].filter(Boolean).map(e => e.ref.current);
                    Sm(n, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, Gr.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        Pm = "RovingFocusGroupItem",
        Om = N.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Wr.B)(), l = a || d, c = _m(Pm, t), u = c.currentTabStopId === l, f = vm(t), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: m,
            currentTabStopId: y
          } = c;
          return N.useEffect(() => {
            if (n) return p(), () => m()
          }, [n, p, m]), (0, R.jsx)(hm.ItemSlot, {
            scope: t,
            id: l,
            focusable: n,
            active: o,
            children: (0, R.jsx)(Yr.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: r,
              onMouseDown: (0, Gr.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, Gr.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, Gr.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const r = function(e, r, t) {
                  const n = function(e, r) {
                    return "rtl" !== r ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, t);
                  return "vertical" === r && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === r && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : Rm[n]
                }(e, c.orientation, c.dir);
                if (void 0 !== r) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let a = o.map(e => e.ref.current);
                  if ("last" === r) a.reverse();
                  else if ("prev" === r || "next" === r) {
                    "prev" === r && a.reverse();
                    const o = a.indexOf(e.currentTarget);
                    a = c.loop ? (n = o + 1, (t = a).map((e, r) => t[(n + r) % t.length])) : a.slice(o + 1)
                  }
                  setTimeout(() => Sm(a))
                }
                var t, n
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: u,
                hasTabStop: null != y
              }) : s
            })
          })
        });
      Om.displayName = Pm;
      var Rm = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function Sm(e, r = !1) {
        const t = document.activeElement;
        for (const n of e) {
          if (n === t) return;
          if (n.focus({
              preventScroll: r
            }), document.activeElement !== t) return
        }
      }
      var Nm = jm,
        Dm = Om,
        zm = "Toggle",
        km = N.forwardRef((e, r) => {
          const {
            pressed: t,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, St.i)({
            prop: t,
            onChange: o,
            defaultProp: n ?? !1,
            caller: zm
          });
          return (0, R.jsx)(Yr.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: r,
            onClick: (0, Gr.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      km.displayName = zm;
      var Im = "ToggleGroup",
        [Tm, Lm] = (0, Kr.A)(Im, [wm]),
        Em = wm(),
        Vm = N.forwardRef((e, r) => {
          const {
            type: t,
            ...n
          } = e;
          if ("single" === t) {
            const e = n;
            return (0, R.jsx)(qm, {
              role: "radiogroup",
              ...e,
              ref: r
            })
          }
          if ("multiple" === t) {
            const e = n;
            return (0, R.jsx)(Bm, {
              role: "toolbar",
              ...e,
              ref: r
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Im}\``)
        });
      Vm.displayName = Im;
      var [Am, Mm] = Tm(Im), qm = N.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, St.i)({
          prop: t,
          defaultProp: n ?? "",
          onChange: o,
          caller: Im
        });
        return (0, R.jsx)(Am, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: N.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: N.useCallback(() => i(""), [i]),
          children: (0, R.jsx)(Gm, {
            ...a,
            ref: r
          })
        })
      }), Bm = N.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, St.i)({
          prop: t,
          defaultProp: n ?? [],
          onChange: o,
          caller: Im
        }), d = N.useCallback(e => i((r = []) => [...r, e]), [i]), l = N.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, R.jsx)(Am, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, R.jsx)(Gm, {
            ...a,
            ref: r
          })
        })
      });
      Vm.displayName = Im;
      var [Fm, Xm] = Tm(Im), Gm = N.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = Em(t), c = (0, bn.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, R.jsx)(Fm, {
          scope: t,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, R.jsx)(Nm, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, R.jsx)(Yr.sG.div, {
              ...u,
              ref: r
            })
          }) : (0, R.jsx)(Yr.sG.div, {
            ...u,
            ref: r
          })
        })
      }), Zm = "ToggleGroupItem", Km = N.forwardRef((e, r) => {
        const t = Mm(Zm, e.__scopeToggleGroup),
          n = Xm(Zm, e.__scopeToggleGroup),
          o = Em(e.__scopeToggleGroup),
          a = t.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = N.useRef(null);
        return n.rovingFocus ? (0, R.jsx)(Dm, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, R.jsx)(Hm, {
            ...i,
            ref: r
          })
        }) : (0, R.jsx)(Hm, {
          ...i,
          ref: r
        })
      });
      Km.displayName = Zm;
      var Hm = N.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          value: n,
          ...o
        } = e, a = Mm(Zm, t), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, R.jsx)(km, {
          ...i,
          ...o,
          ref: r,
          onPressedChange: e => {
            e ? a.onItemActivate(n) : a.onItemDeactivate(n)
          }
        })
      });

      function Wm(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Um(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function $m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Um(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Wm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Um(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ym(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Qm = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Jm = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = $m($m({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qm(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ym(e.variantClassNames, e => Ym(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ey = "var(--foundry_zxwkyk2)",
        ry = "var(--foundry_zxwkyk3)",
        ty = Jm({
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
        ny = Jm({
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
        oy = Jm({
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
        ay = "var(--foundry_zxwkyk1)",
        sy = "var(--foundry_zxwkyk0)",
        iy = Jm({
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
      const dy = (0, N.createContext)(null);

      function ly() {
        const e = (0, N.useContext)(dy);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const cy = (0, N.forwardRef)(({
          testId: e,
          size: r,
          type: t = "single",
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
            "data-testid": e,
            className: ty({
              size: r
            }),
            type: t
          }, n);
          return (0, R.jsx)(dy.Provider, {
            value: {
              size: r
            },
            children: (0, R.jsx)(Vm, {
              ref: o,
              ...a
            })
          })
        }),
        uy = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            size: n
          } = ly(), o = (0, k.mergeProps)({
            "data-testid": e,
            className: ny({
              size: n
            })
          }, r);
          return (0, R.jsx)(Km, {
            ref: t,
            ...o
          })
        }),
        fy = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            size: n
          } = ly(), o = To[e];
          return (0, R.jsx)(o, {
            label: "",
            ref: t,
            size: n,
            className: "foundry_zxwkykb",
            ...r
          })
        }),
        py = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          status: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
            "data-testid": e,
            className: iy({
              status: t
            }),
            style: (0, D.DI)({
              [sy]: r?.online,
              [ay]: r?.offline,
              [ey]: r?.away,
              [ry]: r?.busy
            })
          }, n);
          return (0, R.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        my = (0, N.forwardRef)(({
          testId: e,
          variant: r = "default",
          ...t
        }, n) => {
          const {
            size: o
          } = ly(), a = (0, k.mergeProps)({
            "data-testid": e,
            className: oy({
              variant: r,
              size: o
            })
          }, t);
          return (0, R.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var yy = "Popover",
        [hy, vy] = (0, Kr.A)(yy, [at]),
        gy = at(),
        [by, wy] = hy(yy),
        xy = e => {
          const {
            __scopePopover: r,
            children: t,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !1
          } = e, i = gy(r), d = N.useRef(null), [l, c] = N.useState(!1), [u, f] = (0, St.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: yy
          });
          return (0, R.jsx)(xt, {
            ...i,
            children: (0, R.jsx)(by, {
              scope: r,
              contentId: (0, Wr.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: N.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: N.useCallback(() => c(!0), []),
              onCustomAnchorRemove: N.useCallback(() => c(!1), []),
              modal: s,
              children: t
            })
          })
        };
      xy.displayName = yy;
      var _y = "PopoverAnchor",
        jy = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...n
          } = e, o = wy(_y, t), a = gy(t), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return N.useEffect(() => (s(), () => i()), [s, i]), (0, R.jsx)(_t, {
            ...a,
            ...n,
            ref: r
          })
        });
      jy.displayName = _y;
      var Cy = "PopoverTrigger",
        Py = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...n
          } = e, o = wy(Cy, t), a = gy(t), s = (0, Zr.s)(r, o.triggerRef), i = (0, R.jsx)(Yr.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": My(o.open),
            ...n,
            ref: s,
            onClick: (0, Gr.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, R.jsx)(_t, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      Py.displayName = Cy;
      var Oy = "PopoverPortal",
        [Ry, Sy] = hy(Oy, {
          forceMount: void 0
        }),
        Ny = e => {
          const {
            __scopePopover: r,
            forceMount: t,
            children: n,
            container: o
          } = e, a = wy(Oy, r);
          return (0, R.jsx)(Ry, {
            scope: r,
            forceMount: t,
            children: (0, R.jsx)(Ot.C, {
              present: t || a.open,
              children: (0, R.jsx)(Pt.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Ny.displayName = Oy;
      var Dy = "PopoverContent",
        zy = N.forwardRef((e, r) => {
          const t = Sy(Dy, e.__scopePopover),
            {
              forceMount: n = t.forceMount,
              ...o
            } = e,
            a = wy(Dy, e.__scopePopover);
          return (0, R.jsx)(Ot.C, {
            present: n || a.open,
            children: a.modal ? (0, R.jsx)(Iy, {
              ...o,
              ref: r
            }) : (0, R.jsx)(Ty, {
              ...o,
              ref: r
            })
          })
        });
      zy.displayName = Dy;
      var ky = (0, Rt.TL)("PopoverContent.RemoveScroll"),
        Iy = N.forwardRef((e, r) => {
          const t = wy(Dy, e.__scopePopover),
            n = N.useRef(null),
            o = (0, Zr.s)(r, n),
            a = N.useRef(!1);
          return N.useEffect(() => {
            const e = n.current;
            if (e) return (0, Na.Eq)(e)
          }, []), (0, R.jsx)(Da.A, {
            as: ky,
            allowPinchZoom: !0,
            children: (0, R.jsx)(Ly, {
              ...e,
              ref: o,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Gr.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || t.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Gr.mK)(e.onPointerDownOutside, e => {
                const r = e.detail.originalEvent,
                  t = 0 === r.button && !0 === r.ctrlKey,
                  n = 2 === r.button || t;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Gr.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        Ty = N.forwardRef((e, r) => {
          const t = wy(Dy, e.__scopePopover),
            n = N.useRef(!1),
            o = N.useRef(!1);
          return (0, R.jsx)(Ly, {
            ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: r => {
              e.onCloseAutoFocus?.(r), r.defaultPrevented || (n.current || t.triggerRef.current?.focus(), r.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: r => {
              e.onInteractOutside?.(r), r.defaultPrevented || (n.current = !0, "pointerdown" === r.detail.originalEvent.type && (o.current = !0));
              const a = r.target,
                s = t.triggerRef.current?.contains(a);
              s && r.preventDefault(), "focusin" === r.detail.originalEvent.type && o.current && r.preventDefault()
            }
          })
        }),
        Ly = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: l,
            onInteractOutside: c,
            ...u
          } = e, f = wy(Dy, t), p = gy(t);
          return (0, Ra.Oh)(), (0, R.jsx)(Sa.n, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, R.jsx)(Hr.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, R.jsx)(jt, {
                "data-state": My(f.open),
                role: "dialog",
                id: f.contentId,
                ...p,
                ...u,
                ref: r,
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
        Ey = "PopoverClose",
        Vy = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...n
          } = e, o = wy(Ey, t);
          return (0, R.jsx)(Yr.sG.button, {
            type: "button",
            ...n,
            ref: r,
            onClick: (0, Gr.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      Vy.displayName = Ey;
      var Ay = N.forwardRef((e, r) => {
        const {
          __scopePopover: t,
          ...n
        } = e, o = gy(t);
        return (0, R.jsx)(Ct, {
          ...o,
          ...n,
          ref: r
        })
      });

      function My(e) {
        return e ? "open" : "closed"
      }
      Ay.displayName = "PopoverArrow";
      var qy = xy,
        By = jy,
        Fy = Py,
        Xy = Ny,
        Gy = zy,
        Zy = Vy,
        Ky = Ay;

      function Hy(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Wy(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Uy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Wy(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Hy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wy(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function $y(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Yy = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        Qy = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Uy(Uy({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yy(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $y(e.variantClassNames, e => $y(e, e => e.split(" ")[0]))
            }
          }, r
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
      const Jy = (0, N.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        eh = ({
          open: e,
          defaultOpen: r,
          onOpenChange: t,
          ...n
        }) => {
          const [o = !1, a] = (0, L.ic)({
            prop: e,
            defaultProp: r ?? !1,
            onChange: t
          }), s = (0, k.mergeProps)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, R.jsx)(Jy.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, R.jsx)(qy, {
              ...s
            })
          })
        },
        rh = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, r);
          return (0, R.jsx)(Fy, {
            ref: t,
            ...n
          })
        }),
        th = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        nh = (0, N.forwardRef)(({
          children: e,
          size: r = "MD",
          testId: t,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, N.useContext)(Jy), s = (0, N.useRef)(null), i = (0, L.UP)(s, o), {
            buttonProps: d
          } = (0, L.sL)(n, s), l = (0, k.mergeProps)({
            "data-testid": t,
            className: Qy({
              size: r
            })
          }, d), c = a ? re.ChevronUp : re.ChevronDown;
          return (0, R.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, R.jsx)(c, {
              label: "",
              size: th[r]
            })]
          })
        }),
        oh = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(By, {
            ref: t,
            ...n
          })
        }),
        ah = (0, N.forwardRef)(({
          sideOffset: e = 6,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            sideOffset: e,
            "data-testid": r,
            className: "foundry_lroh6l6"
          }, t);
          return (0, R.jsx)(Gy, {
            ref: n,
            ...o
          })
        }),
        sh = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, r);
          return (0, R.jsx)(Ky, {
            ref: t,
            ...n
          })
        }),
        ih = e => (0, R.jsx)(Xy, {
          ...e
        }),
        dh = e => (0, R.jsx)(Zy, {
          ...e
        });

      function lh(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function ch(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function uh(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ch(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = lh(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ch(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function fh(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var ph = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        mh = e => {
          var r = r => {
            var t = e.defaultClassName,
              n = uh(uh({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ph(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fh(e.variantClassNames, e => fh(e, e => e.split(" ")[0]))
            }
          }, r
        },
        yh = "var(--foundry_rmorls2)",
        hh = mh({
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
        vh = "var(--foundry_rmorls0)",
        gh = mh({
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
        bh = "var(--foundry_rmorls3)",
        wh = "var(--foundry_rmorls1)",
        xh = mh({
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
        _h = "Progress",
        [jh, Ch] = (0, Kr.A)(_h),
        [Ph, Oh] = jh(_h),
        Rh = N.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            value: n = null,
            max: o,
            getValueLabel: a = Dh,
            ...s
          } = e;
          !o && 0 !== o || Ih(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Ih(o) ? o : 100;
          null === n || Th(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = Th(n, i) ? n : null,
            l = kh(d) ? a(d, i) : void 0;
          return (0, R.jsx)(Ph, {
            scope: t,
            value: d,
            max: i,
            children: (0, R.jsx)(Yr.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": kh(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": zh(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: r
            })
          })
        });
      Rh.displayName = _h;
      var Sh = "ProgressIndicator",
        Nh = N.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            ...n
          } = e, o = Oh(Sh, t);
          return (0, R.jsx)(Yr.sG.div, {
            "data-state": zh(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: r
          })
        });

      function Dh(e, r) {
        return `${Math.round(e/r*100)}%`
      }

      function zh(e, r) {
        return null == e ? "indeterminate" : e === r ? "complete" : "loading"
      }

      function kh(e) {
        return "number" == typeof e
      }

      function Ih(e) {
        return kh(e) && !isNaN(e) && e > 0
      }

      function Th(e, r) {
        return kh(e) && !isNaN(e) && e <= r && e >= 0
      }
      Nh.displayName = Sh;
      var Lh = Rh,
        Eh = Nh;
      const Vh = (0, N.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Ah = (0, N.forwardRef)(({
          size: e = "MD",
          max: r,
          value: t,
          ...n
        }, o) => {
          const a = Math.round(t / r * 100),
            s = "number" != typeof t || "number" != typeof r;
          return (0, R.jsx)(Vh.Provider, {
            value: {
              value: t,
              max: r,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, R.jsx)(Mh, {
              ...n,
              ref: o
            })
          })
        }),
        Mh = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, t),
            a = r ? E.DX : "div";
          return (0, R.jsx)(a, {
            ...o,
            ref: n
          })
        }),
        qh = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, n) => {
          const {
            value: o,
            max: a,
            size: s
          } = (0, N.useContext)(Vh), i = (0, k.mergeProps)({
            "data-testid": e,
            className: gh({
              size: s
            }),
            value: o,
            max: a,
            style: (0, D.DI)({
              [bh]: r
            }),
            "data-track": !0
          }, t);
          return (0, R.jsx)(Lh, {
            ref: n,
            ...i
          })
        }),
        Bh = (0, N.forwardRef)(({
          testId: e,
          transitionDuration: r = 500,
          colorOverride: t,
          ...n
        }, o) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, N.useContext)(Vh), i = s ? "-100%" : `-${100-a}%`, d = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, D.DI)({
              [vh]: i,
              [wh]: `${r}ms`,
              [yh]: t
            })
          }, n);
          return (0, R.jsx)(Eh, {
            ref: o,
            ...d
          })
        }),
        Fh = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, n) => {
          const {
            size: o
          } = (0, N.useContext)(Vh), a = (0, k.mergeProps)({
            "data-testid": r,
            className: hh({
              size: o
            }),
            "aria-hidden": !0
          }, t), s = e ? E.DX : "span";
          return (0, R.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Xh = (0, N.forwardRef)(({
          testId: e,
          format: r,
          ...t
        }, n) => {
          const {
            value: o,
            max: a,
            size: s,
            percentage: i,
            isInvalid: d
          } = (0, N.useContext)(Vh), l = (0, k.mergeProps)({
            "data-testid": e,
            className: hh({
              size: s
            }),
            "aria-hidden": !0
          }, t);
          return d ? (0, R.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === r ? (0, R.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, R.jsx)("span", {
              className: xh({
                size: s
              }),
              children: "%"
            })]
          }) : (0, R.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", a]
          })
        });
      var Gh = t(27131);

      function Zh(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, r);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Kh(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function Hh(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Kh(Object(t), !0).forEach(function(r) {
            var n, o, a;
            n = e, o = r, a = t[r], (o = Zh(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Kh(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Wh(e, r) {
        var t = {};
        for (var n in e) t[n] = r(e[n], n);
        return t
      }
      var Uh = (e, r, t) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = r[n]) && void 0 !== o ? o : t[n])) return !1
          }
          return !0
        },
        $h = "foundry_1vzsjid2",
        Yh = "foundry_1vzsjidm",
        Qh = (e => {
          var r = r => {
            var t = e.defaultClassName,
              n = Hh(Hh({}, e.defaultVariants), r);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Uh(l, n, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wh(e.variantClassNames, e => Wh(e, e => e.split(" ")[0]))
            }
          }, r
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
      const Jh = (0, N.createContext)({
          mode: "solid",
          layer: 0
        }),
        ev = (0, N.forwardRef)(({
          mode: e,
          layer: r,
          type: t = "single",
          ...n
        }, o) => (0, R.jsx)(Jh.Provider, {
          value: {
            mode: e,
            layer: r
          },
          children: (0, R.jsx)(rv, {
            ...n,
            ref: o,
            type: t
          })
        })),
        rv = (0, N.forwardRef)(({
          testId: e,
          type: r = "single",
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            "data-testid": e,
            type: r
          }, t);
          return (0, R.jsx)(Gh.Root, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        tv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            mode: n,
            layer: o
          } = (0, N.useContext)(Jh), a = (0, k.mergeProps)({
            className: Qh({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, r);
          return (0, R.jsx)(Gh.Item, {
            ref: t,
            ...a
          })
        }),
        nv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, k.mergeProps)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, r);
          return (0, R.jsx)(Gh.Header, {
            ref: t,
            ...n
          })
        }),
        ov = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, n) => {
          const o = (0, k.mergeProps)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": r
          }, t);
          return (0, R.jsx)(Gh.Trigger, {
            ref: n,
            ...o,
            children: t.asChild && (0, N.isValidElement)(e) ? (0, N.cloneElement)(e, {
              children: (0, R.jsx)("span", {
                className: $h,
                children: e.props.children
              })
            }) : (0, R.jsx)("span", {
              className: $h,
              children: e
            })
          })
        }),
        av = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const n = To[e],
            o = (0, k.mergeProps)({
              className: "foundry_1vzsjid4",
              label: ""
            }, r);
          return (0, R.jsx)(n, {
            ref: t,
            size: "LG",
            ...o
          })
        }),
        sv = (0, N.forwardRef)(({
          icon: e = "ChevronDown",
          ...r
        }, t) => {
          const n = To[e],
            o = (0, k.mergeProps)({
              className: "foundry_1vzsjid3",
              label: ""
            }, r);
          return (0, R.jsx)(n, {
            ref: t,
            size: "LG",
            ...o
          })
        }),
        iv = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...n
        }, o) => {
          const a = (0, k.mergeProps)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": t,
            asChild: r
          }, n);
          return (0, R.jsx)(Gh.Content, {
            ref: o,
            ...a,
            children: r && (0, N.isValidElement)(e) ? (0, N.cloneElement)(e, {
              children: (0, R.jsx)("div", {
                className: Yh,
                children: e.props.children
              })
            }) : (0, R.jsx)("div", {
              className: Yh,
              children: e
            })
          })
        })
    },
    77301(e, r, t) {
      t.d(r, {
        b: () => i
      });
      var n = t(93082),
        o = t(84045),
        a = t(39793),
        s = ({
          children: e,
          label: r
        }) => {
          const t = n.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [n.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(o.bL, {
              children: r
            })]
          })
        };
      s.displayName = "AccessibleIcon";
      var i = s
    },
    97394(e, r, t) {
      t.d(r, {
        N: () => d
      });
      var n = t(93082),
        o = t(54958),
        a = t(64239),
        s = t(17172),
        i = t(39793);

      function d(e) {
        const r = e + "CollectionProvider",
          [t, d] = (0, o.A)(r),
          [l, c] = t(r, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: r,
              children: t
            } = e, o = n.useRef(null), a = n.useRef(new Map).current;
            return (0, i.jsx)(l, {
              scope: r,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        u.displayName = r;
        const f = e + "CollectionSlot",
          p = (0, s.TL)(f),
          m = n.forwardRef((e, r) => {
            const {
              scope: t,
              children: n
            } = e, o = c(f, t), s = (0, a.s)(r, o.collectionRef);
            return (0, i.jsx)(p, {
              ref: s,
              children: n
            })
          });
        m.displayName = f;
        const y = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          v = (0, s.TL)(y),
          g = n.forwardRef((e, r) => {
            const {
              scope: t,
              children: o,
              ...s
            } = e, d = n.useRef(null), l = (0, a.s)(r, d), u = c(y, t);
            return n.useEffect(() => (u.itemMap.set(d, {
              ref: d,
              ...s
            }), () => {
              u.itemMap.delete(d)
            })), (0, i.jsx)(v, {
              [h]: "",
              ref: l,
              children: o
            })
          });
        return g.displayName = y, [{
          Provider: u,
          Slot: m,
          ItemSlot: g
        }, function(r) {
          const t = c(e + "CollectionConsumer", r);
          return n.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const r = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, d]
      }
      Map
    }
  }
]);