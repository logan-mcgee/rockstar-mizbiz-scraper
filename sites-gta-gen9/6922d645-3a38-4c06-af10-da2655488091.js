try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6922d645-3a38-4c06-af10-da2655488091", e._sentryDebugIdIdentifier = "sentry-dbid-6922d645-3a38-4c06-af10-da2655488091")
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
  [2154], {
    22154(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => y,
        Avatar: () => x,
        Badge: () => b,
        Body: () => He,
        Breadcrumbs: () => v,
        Button: () => ue,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => Ue,
        Dialog: () => w,
        Display: () => $e,
        Divider: () => Se,
        Dropdown: () => a,
        Heading: () => Qe,
        IconButton: () => xe,
        Label: () => et,
        Lightbox: () => o,
        Loader: () => Me,
        Pagination: () => _,
        Popover: () => C,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => Q,
        Switch: () => s,
        Tag: () => m,
        Text: () => nt,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => rt,
        Toast: () => h,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => vn,
        Content: () => hn,
        Portal: () => bn,
        Root: () => yn,
        Trigger: () => mn,
        useTooltipContext: () => pn
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => ho,
        Close: () => xo,
        Content: () => uo,
        Controls: () => vo,
        CssVars: () => Co,
        Download: () => jo,
        Image: () => mo,
        Keyboard: () => go,
        LightboxContext: () => to,
        OpenIcon: () => io,
        Overlay: () => co,
        Portal: () => lo,
        Reset: () => _o,
        Root: () => ro,
        RootImplContext: () => no,
        Thumbnail: () => so,
        Trigger: () => ao,
        Zoom: () => wo,
        ZoomPan: () => fo
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => $s,
        Description: () => ni,
        Hint: () => oi,
        Label: () => ri,
        Option: () => ai,
        OptionIcon: () => ii,
        OptionText: () => si,
        Portal: () => di,
        Root: () => Us,
        ScrollArea: () => Qs,
        StatusIcon: () => ci,
        StatusRoot: () => li,
        StatusText: () => ui,
        Trigger: () => Js,
        TriggerIcon: () => ti,
        TriggerText: () => ei,
        Viewport: () => Ys,
        useDropdownContext: () => Ws
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Di,
        Input: () => Si,
        Label: () => Ni,
        Root: () => Ri,
        useSwitchContext: () => Oi
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Ii,
        CheckMD: () => ki,
        CheckXL: () => Ti,
        DashLG: () => Ei,
        DashMD: () => Li,
        DashXL: () => Vi
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => td,
        ErrorText: () => rd,
        Group: () => ad,
        GroupDescription: () => id,
        GroupErrorText: () => ld,
        GroupItems: () => dd,
        GroupLabel: () => sd,
        Input: () => Ji,
        Label: () => ed,
        Root: () => Qi,
        useGroupContext: () => od
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Pd,
        Hint: () => Od,
        Input: () => Cd,
        Label: () => jd,
        Root: () => _d,
        RootContext: () => wd,
        StatusIcon: () => Sd,
        StatusRoot: () => Rd,
        StatusText: () => Nd,
        useTextAreaContext: () => xd
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => tl,
        DotMD: () => el,
        DotXL: () => rl
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Zd,
        Input: () => ol,
        Label: () => Gd,
        Option: () => nl,
        OptionDescription: () => sl,
        OptionLabel: () => al,
        Options: () => Fd,
        Root: () => Xd,
        StatusIcon: () => Hd,
        StatusRoot: () => Kd,
        StatusText: () => Wd,
        useRadioGroupContext: () => Bd
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Nl,
        Control: () => Ol,
        Description: () => zl,
        Hint: () => Pl,
        Icon: () => Sl,
        Input: () => Rl,
        Label: () => Cl,
        PasswordButton: () => Dl,
        Root: () => jl,
        StatusIcon: () => Il,
        StatusRoot: () => kl,
        StatusText: () => Tl
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => nc,
        CloseButton: () => uc,
        Description: () => ic,
        ErrorText: () => cc,
        Footer: () => lc,
        Header: () => rc,
        Icon: () => ac,
        Link: () => dc,
        Root: () => tc,
        RootContext: () => Jl,
        Title: () => sc,
        iconStatusMap: () => oc,
        useAlertContext: () => ec
      });
      var y = {};
      r.r(y), r.d(y, {
        Alert: () => Nc,
        CloseButton: () => kc,
        Description: () => Sc,
        Icon: () => Rc,
        Link: () => zc,
        PaginationCounter: () => Ec,
        PaginationNav: () => Ic,
        PaginationNextButton: () => Tc,
        PaginationPrevButton: () => Lc,
        PaginationViewport: () => Dc,
        Root: () => Pc,
        RootContext: () => jc,
        iconStatusMap: () => Oc,
        useAlertBannerContext: () => Cc
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => Yc,
        Icon: () => $c,
        Label: () => Uc,
        Root: () => Wc,
        RootContext: () => Kc,
        useTagContext: () => Hc
      });
      var h = {};
      r.r(h), r.d(h, {
        Action: () => tf,
        CloseButton: () => rf,
        Description: () => Qu,
        Icon: () => ef,
        Provider: () => Hu,
        Root: () => Yu,
        RootContext: () => Uu,
        Viewport: () => Wu,
        iconAppearanceMap: () => Ju,
        useToastContext: () => $u
      });
      var v = {};
      r.r(v), r.d(v, {
        Icon: () => bf,
        Item: () => vf,
        OverflowMenu: () => gf,
        OverflowMenuItem: () => wf,
        Root: () => hf,
        RootContext: () => mf,
        useBreadcrumbsContext: () => yf
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => zf,
        Label: () => Df,
        Root: () => Nf,
        useBadgeContext: () => Sf
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => Gf,
        Root: () => qf,
        Scrollbar: () => Xf,
        Thumb: () => Ff,
        Viewport: () => Bf
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => yp,
        CloseButton: () => pp,
        Content: () => ap,
        Description: () => ip,
        Footer: () => mp,
        Header: () => cp,
        HeaderButton: () => fp,
        HeaderTitle: () => up,
        Layout: () => lp,
        Overlay: () => op,
        Portal: () => np,
        Root: () => ep,
        ScrollArea: () => dp,
        Title: () => sp,
        Trigger: () => rp
      });
      var x = {};
      r.r(x), r.d(x, {
        Image: () => Wp,
        Root: () => Hp,
        StatusIndicator: () => Up,
        useAvatarContext: () => Kp
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => dy,
        Dropdown: () => py,
        DropdownLabel: () => fy,
        Ellipsis: () => iy,
        Item: () => oy,
        Label: () => my,
        Next: () => sy,
        Option: () => yy,
        Pages: () => ny,
        Prev: () => ay,
        ResultsPerPage: () => uy,
        Root: () => ry
      });
      var j = {};
      r.r(j), r.d(j, {
        Icon: () => vm,
        Item: () => hm,
        Label: () => gm,
        Root: () => mm,
        StatusIndicator: () => bm,
        useChipGroupContext: () => ym
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => lh,
        Arrow: () => uh,
        Close: () => ph,
        Content: () => ch,
        Portal: () => fh,
        Root: () => ah,
        RootContext: () => oh,
        Trigger: () => sh,
        TriggerButton: () => dh
      });
      var P = {};
      r.r(P), r.d(P, {
        Indicator: () => Kh,
        Label: () => Hh,
        Root: () => Fh,
        Track: () => Zh,
        UnitLabel: () => Wh
      });
      var O = r(39793),
        R = r(11350),
        S = r(93082),
        N = r(68428),
        D = r(48785),
        z = r(52710);
      const k = {
          enabled: {
            background: (0, N.Tm)(D.no.enabled.background),
            border: (0, N.Tm)(D.no.enabled.border),
            text: (0, N.Tm)(D.no.enabled.text),
            outline: (0, N.Tm)(D.no.enabled.outline)
          },
          hover: {
            background: (0, N.Tm)(D.no.hover.background),
            border: (0, N.Tm)(D.no.hover.border),
            text: (0, N.Tm)(D.no.hover.text),
            outline: (0, N.Tm)(D.no.hover.outline)
          },
          focus: {
            background: (0, N.Tm)(D.no.focus.background),
            border: (0, N.Tm)(D.no.focus.border),
            text: (0, N.Tm)(D.no.focus.text),
            outline: (0, N.Tm)(D.no.focus.outline)
          },
          pressed: {
            background: (0, N.Tm)(D.no.pressed.background),
            border: (0, N.Tm)(D.no.pressed.border),
            text: (0, N.Tm)(D.no.pressed.text),
            outline: (0, N.Tm)(D.no.pressed.outline)
          },
          disabled: {
            background: (0, N.Tm)(D.no.disabled.background),
            border: (0, N.Tm)(D.no.disabled.border),
            text: (0, N.Tm)(D.no.disabled.text),
            outline: (0, N.Tm)(D.no.disabled.outline)
          },
          loading: {
            background: (0, N.Tm)(D.no.loading.background),
            border: (0, N.Tm)(D.no.loading.border),
            text: (0, N.Tm)(D.no.loading.text),
            outline: (0, N.Tm)(D.no.loading.outline)
          }
        },
        I = ({
          refs: {
            buttonRef: e
          },
          config: {
            textLuminance: t,
            darkenLuminance: r,
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
          (0, S.useEffect)(() => {
            if (!e.current || !a || !l) return;
            const c = `${a}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, z.getOrSet)(c, () => {
                const e = (0, R.J1)(a);
                return {
                  text: d || (e > t ? N.LU.global.color.black.static[100] : N.LU.global.color.white.static[100]),
                  hover: s || (e >= r ? (0, R.e$)(a, n) : (0, R.a)(a, n)),
                  pressed: i || (e >= r ? (0, R.e$)(a, o) : (0, R.a)(a, o))
                }
              });
            return e.current.style.setProperty(k.enabled.background, a), e.current.style.setProperty(k.enabled.border, a), e.current.style.setProperty(k.enabled.text, u), e.current.style.setProperty(k.hover.background, f), e.current.style.setProperty(k.hover.border, f), e.current.style.setProperty(k.hover.text, u), e.current.style.setProperty(k.focus.background, f), e.current.style.setProperty(k.focus.border, f), e.current.style.setProperty(k.focus.text, u), e.current.style.setProperty(k.pressed.background, p), e.current.style.setProperty(k.pressed.border, p), e.current.style.setProperty(k.pressed.text, u), e.current.style.setProperty(k.loading.background, f), e.current.style.setProperty(k.loading.border, f), e.current.style.setProperty(k.loading.text, u), () => {
              e.current?.style.removeProperty(k.enabled.background), e.current?.style.removeProperty(k.enabled.border), e.current?.style.removeProperty(k.enabled.text), e.current?.style.removeProperty(k.hover.background), e.current?.style.removeProperty(k.hover.border), e.current?.style.removeProperty(k.hover.text), e.current?.style.removeProperty(k.focus.background), e.current?.style.removeProperty(k.focus.border), e.current?.style.removeProperty(k.focus.text), e.current?.style.removeProperty(k.pressed.background), e.current?.style.removeProperty(k.pressed.border), e.current?.style.removeProperty(k.pressed.text), e.current?.style.removeProperty(k.loading.background), e.current?.style.removeProperty(k.loading.border), e.current?.style.removeProperty(k.loading.text)
            }
          }, [e.current, t, r, n, o, a, s, i, d, l, ...c])
        };
      var T = r(74631),
        L = r(90067);
      r(77278), r(93400);
      const E = (0, S.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        V = () => (0, S.useContext)(E),
        A = () => {
          const {
            platformScale: e
          } = V();
          return e
        };
      var M = r(89892);
      const q = e => "dark" === e ? M.xW.dark : M.xW.light;
      const B = () => z.IS_SERVER ? null : document.body;
      (0, S.forwardRef)(({
        children: e,
        className: t,
        container: r = B(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, S.useRef)(null),
          f = (0, T.UP)(u, c),
          p = (0, S.useRef)(r),
          {
            ratio: y,
            scale: m
          } = function(e) {
            const [t, r] = (0, S.useState)(e.platformScale || e.defaultPlatformScale), n = (0, S.useCallback)(t => {
              r(t), e.onPlatformScaleChange?.(t)
            }, [e.onPlatformScaleChange]), o = (0, S.useRef)([]), a = () => {
              if (!z.IS_SERVER) {
                for (const {
                    handler: e,
                    matchMedia: t
                  }
                  of o.current) t.removeEventListener("change", e);
                o.current = []
              }
            };
            return (0, S.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
              if (!z.IS_SERVER) {
                a();
                for (const e in M.wj) {
                  const t = window.matchMedia(M.wj[e]),
                    r = t => {
                      t.matches && n(e)
                    };
                  t.addEventListener("change", r), t.matches && n(e), o.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), a), [e.platformScale, n]), {
              scale: t,
              ratio: M.nz[t]
            }
          }({
            onPlatformScaleChange: d,
            defaultPlatformScale: s,
            platformScale: i
          }),
          {
            appearanceClass: h,
            otherAppearanceClasses: v,
            providerColor: b
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark"
          }) {
            const r = (0, T.Ub)("(prefers-color-scheme: light)"),
              n = (0, T.Ub)("(prefers-color-scheme: dark)"),
              o = "system" !== e && e || r && "light" || n && "dark" || t,
              a = (0, S.useMemo)(() => q(o), [o]),
              s = (0, S.useMemo)(() => (e => {
                const t = q(e);
                return [M.xW.light, M.xW.dark].filter(e => e !== t)
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
          currentScale: t,
          appearanceClass: r,
          otherAppearanceClasses: n,
          locale: o,
          className: a
        }) => {
          const s = (0, T.ZC)(a),
            i = (0, T.ZC)(e.current);
          (0, S.useEffect)(() => {
            e.current?.classList.contains(M.X6) || e.current?.classList.add(M.X6), e.current?.classList.contains(M.yU) || e.current?.classList.add(M.yU), e.current?.classList.contains(M.Np) || e.current?.classList.add(M.Np), e.current?.classList.add(r), e.current?.classList.remove(...n), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
          }, [r, a]), (0, S.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, S.useEffect)(() => (t && e.current?.style.setProperty(M.HZ, t.toString()), () => {
            e.current?.style.removeProperty(M.HZ)
          }), [t]), (0, S.useEffect)(() => {
            i?.classList.remove(M.X6), i?.classList.remove(M.yU), i?.classList.remove(r), i?.style.removeProperty(M.HZ), a && i?.classList.remove(a)
          }, [i])
        })({
          locale: l,
          className: t,
          appearanceClass: h,
          otherAppearanceClasses: v,
          currentScale: i ? y : -0,
          container: n ? u : p
        }), (0, O.jsx)(E.Provider, {
          value: {
            locale: l,
            defaultColorScheme: a,
            colorScheme: b,
            defaultPlatformScale: s,
            platformScale: m
          },
          children: n ? (0, O.jsx)(L.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var X = r(91497);

      function F(e) {
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

      function G(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? G(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = F(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function K(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var H, W, U = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $ = (H = {
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
        }, W = e => {
          var t = H.defaultClassName,
            r = Z(Z({}, H.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : H.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = H.variantClassNames[n][s];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of H.compoundVariants) U(d, r, H.defaultVariants) && (t += " " + l);
          return t
        }, W.variants = () => Object.keys(H.variantClassNames), W.classNames = {
          get base() {
            return H.defaultClassName.split(" ")[0]
          },
          get variants() {
            return K(H.variantClassNames, e => K(e, e => e.split(" ")[0]))
          }
        }, W);
      const Y = "pageMD",
        Q = (0, S.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = Y,
          testId: n,
          ...o
        }, a) => {
          const s = A(),
            i = "string" == typeof r ? r : r?.[s] ?? r.default ?? Y,
            d = (0, z.mergeProps)({
              className: $({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, O.jsx)(X.b, {
            label: e,
            children: (0, O.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!t && (0, O.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, O.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var J = r(81270),
        ee = r(98021);

      function te(e) {
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

      function re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? re(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = te(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function oe(e, t) {
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
        se = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ne(ne({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
              return oe(e.variantClassNames, e => oe(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ie = se({
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
      se({
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
      var de = se({
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
        le = se({
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
        ce = se({
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
      const ue = (0, S.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
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
        override_textLuminance: y = .179,
        override_hoverLuminance: m = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: v,
        override_hoverColor: b,
        override_pressedColor: g,
        override_textColor: w,
        ...x
      }, _) => {
        const j = (0, S.useRef)(null),
          C = (0, T.UP)(j, _),
          P = A(),
          R = "string" == typeof d ? d : d?.[P] ?? d.default ?? "MD",
          {
            buttonProps: N
          } = (0, T.sL)((0, z.mergeProps)(x, {
            isLoading: c,
            preventFocusOnPress: f
          }), j);
        I({
          refs: {
            buttonRef: j
          },
          config: {
            textLuminance: y,
            darkenLuminance: p,
            hoverLuminance: m,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: v,
            hoverColor: b,
            pressedColor: g,
            textColor: w
          },
          enabled: "accent" === i
        }, [t]);
        const D = (0, z.mergeProps)({
            className: ie({
              appearance: i,
              size: R,
              fullWidth: l,
              iconLeft: !!n,
              iconRight: !!a
            }),
            "data-testid": e
          }, N),
          k = n && ee[n],
          E = a && ee[a],
          V = t ? L.DX : "button",
          M = l && (E || E && k);
        return (0, O.jsxs)(V, {
          ref: C,
          ...D,
          children: [M && (0, O.jsx)("div", {
            className: "foundry_17pcofy15"
          }), k && (0, O.jsx)(k, {
            label: o || "",
            size: R,
            className: (0, J.clsx)(de({
              size: R
            }), "foundry_17pcofy11")
          }), (0, O.jsx)(L.xV, {
            children: r
          }), E && (0, O.jsx)(E, {
            label: s || "",
            size: R,
            className: (0, J.clsx)(de({
              size: R
            }), le({
              fullWidth: l
            }))
          }), c && (0, O.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, O.jsx)(Q, {
              label: u || "",
              size: "inline" + ("XL" === R ? "LG" : "MD"),
              hideTrack: !0,
              className: ce({
                size: R
              })
            })
          })]
        })
      });

      function fe(e) {
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

      function pe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pe(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = fe(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function me(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var he = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ve = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ye(ye({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) he(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return me(e.variantClassNames, e => me(e, e => e.split(" ")[0]))
            }
          }, t
        },
        be = ve({
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
        ge = ve({
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
        we = ve({
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
      const xe = (0, S.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
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
        override_pressedLuminance: y = .15,
        override_backgroundColor: m,
        override_hoverColor: h,
        override_pressedColor: v,
        override_textColor: b,
        ...g
      }, w) => {
        const x = (0, S.useRef)(null),
          _ = (0, T.UP)(x, w),
          j = A(),
          C = "string" == typeof s ? s : s?.[j] ?? s.default ?? "LG",
          {
            buttonProps: P
          } = (0, T.sL)((0, z.mergeProps)(g, {
            isLoading: d,
            preventFocusOnPress: c
          }), x);
        I({
          refs: {
            buttonRef: x
          },
          config: {
            textLuminance: f,
            darkenLuminance: u,
            hoverLuminance: p,
            pressedLuminance: y
          },
          overrides: {
            backgroundColor: m,
            hoverColor: h,
            pressedColor: v,
            textColor: b
          },
          enabled: "accent" === o
        }, [t]);
        const R = (0, z.mergeProps)({
            className: ge({
              appearance: o,
              size: C,
              fullWidth: a
            }),
            "data-testid": e
          }, P),
          N = ee[r],
          D = t ? L.DX : "button";
        return (0, O.jsxs)(D, {
          ref: _,
          ...R,
          children: [N && (0, O.jsx)(N, {
            label: n || "",
            size: C,
            className: be({
              size: C
            })
          }), (0, O.jsx)(L.xV, {
            children: i
          }), d && (0, O.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, O.jsx)(Q, {
              label: l || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: we({
                size: C
              })
            })
          })]
        })
      });

      function _e(e) {
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

      function je(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? je(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = _e(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Pe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Oe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Re = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ce(Ce({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Oe(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pe(e.variantClassNames, e => Pe(e, e => e.split(" ")[0]))
            }
          }, t
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
      const Se = (0, S.forwardRef)(({
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
        return (0, O.jsx)(c, {
          ref: i,
          className: (0, J.clsx)(Re({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });

      function Ne(e) {
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

      function De(e, t) {
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
          t % 2 ? De(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ne(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : De(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ke(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ie = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Te = "var(--foundry_9dxgbc2)",
        Le = "var(--foundry_9dxgbc3)",
        Ee = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ze(ze({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ie(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ke(e.variantClassNames, e => ke(e, e => e.split(" ")[0]))
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
        Ve = "var(--foundry_9dxgbc0)",
        Ae = "var(--foundry_9dxgbc1)";
      const Me = (0, S.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const d = A(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, z.mergeProps)({
            className: Ee({
              size: l
            }),
            "data-testid": t,
            style: (0, N.DI)({
              [Ve]: n?.pulseColorBackground,
              [Ae]: n?.pulseColorForeground,
              [Te]: n?.gradientColorBackground,
              [Le]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          u = e ? L.DX : "div";
        return (0, O.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, O.jsx)(L.xV, {
            children: r
          }) : (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, O.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function qe(e) {
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

      function Be(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Be(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = qe(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fe(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ge = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ze = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xe(Xe({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ge(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fe(e.variantClassNames, e => Fe(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ke = Ze({
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
      const He = (0, S.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? L.DX : "p",
          i = (0, z.mergeProps)({
            className: Ke({
              size: n,
              appearance: r
            })
          }, o);
        return (0, O.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var We = Ze({
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
      const Ue = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? L.DX : "p",
            s = (0, z.mergeProps)({
              className: We({
                appearance: r
              })
            }, n);
          return (0, O.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        $e = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "h1",
            a = (0, z.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var Ye = Ze({
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
      const Qe = (0, S.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? L.DX : `h${7===t?6:t}`,
          s = (0, z.mergeProps)(n, {
            className: Ye({
              level: t
            })
          });
        return (0, O.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var Je = Ze({
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
      const et = (0, S.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? L.DX : "p",
          i = (0, z.mergeProps)({
            className: Je({
              size: n,
              appearance: r
            })
          }, o);
        return (0, O.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var tt = Ze({
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
      const rt = {
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
        nt = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? L.DX : rt[r] || "span",
            s = (0, z.mergeProps)(n, {
              className: tt({
                semantic: r
              })
            });
          return (0, O.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var ot = r(35812),
        at = r(67347),
        st = r(34811);
      const it = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), dt = ([e, t]) => ({
        x: e,
        y: t
      }), lt = (e, t) => (e.x = t.x, e.y = t.y, e), ct = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, ut = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), ft = (e, t, r) => Math.min(Math.max(e, t), r);
      var pt = r(90004);

      function yt(e) {
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

      function mt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mt(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ht(ht({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bt(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vt(e.variantClassNames, e => vt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wt = gt({
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
        xt = gt({
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
      ot.gsap.registerPlugin(at.useGSAP);
      const _t = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        jt = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Ct = (0, N.Tm)("var(--foundry_1a74xwb0)");
      var Pt = r(50888);
      const Ot = {
        "en-US": r.e(649).then(r.bind(r, 50649)),
        "de-DE": r.e(9062).then(r.bind(r, 9062)),
        "es-ES": r.e(2404).then(r.bind(r, 22404)),
        "es-MX": r.e(6109).then(r.bind(r, 66109)),
        "fr-FR": r.e(2032).then(r.bind(r, 92032)),
        "it-IT": r.e(3406).then(r.bind(r, 83406)),
        "ja-JP": r.e(6617).then(r.bind(r, 96617)),
        "ko-KR": r.e(447).then(r.bind(r, 30447)),
        "pl-PL": r.e(1924).then(r.bind(r, 61924)),
        "pt-BR": r.e(2316).then(r.bind(r, 22316)),
        "ru-RU": r.e(9298).then(r.bind(r, 69298)),
        "zh-CN": r.e(7367).then(r.bind(r, 77367)),
        "zh-TW": r.e(3171).then(r.bind(r, 93171))
      };
      class Rt {
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
          return r ? t : ft(t, this.max[e], this.min[e])
        }
      }
      class St {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = ut(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return ut(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return ut(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class Nt {
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
      class Dt {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", lt(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (lt(this.prevTap, {
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
      class zt {
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
          e.src = this.thumbnail.currentSrc ?? "", await it(e)
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
      class kt {
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
      class It extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Tt extends Nt {
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
          if (!this.dispatch(e, new It(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Lt {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = dt(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, lt(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = dt(e);
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
            a = lt({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = lt({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, lt(this.startPan, a)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || n || o) && (lt(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class Et {
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
      class Vt extends Nt {
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
          super(), this.width = e, this.height = t, this.opener = new zt({
            slide: this
          }), this.bounds = new Rt({
            slide: this
          }), this.dragHandler = new Dt({
            options: a,
            slide: this
          }), this.scrollWheel = new kt({
            slide: this
          }), this.zoomHandler = new Lt({
            slide: this
          }), this.zoomLevels = new St({
            options: r,
            slide: this
          }), this.tapHandler = new Tt({
            options: n,
            slide: this
          }), this.panAreaSize = new Et({
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
          e = ut(e), r || (e = ft(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), ct(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), ct(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), lt(this.pan, this.bounds.center)
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
      var At = r(27046);
      const Mt = (0, Pt.YK)({
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
      var qt = "foundry_bc732x1";
      const Bt = (0, S.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, pt.vC)(e, e => r?.(e), [r]), (0, O.jsx)(He, {
        size: "XS",
        className: (0, J.clsx)("foundry_bc732x0", {
          [qt]: t
        }),
        asChild: !0,
        children: (0, O.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Xt = r(30818),
        Ft = r(8316),
        Gt = r(50446),
        Zt = r(31201),
        Kt = r(77139),
        Ht = r(96883),
        Wt = r(17966),
        Ut = r(45750),
        $t = r(92634),
        Yt = S.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, O.jsx)($t.sG.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, O.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Yt.displayName = "Arrow";
      var Qt = Yt,
        Jt = r(38351),
        er = r(86627),
        tr = r(94119),
        rr = "Popper",
        [nr, or] = (0, Zt.A)(rr),
        [ar, sr] = nr(rr),
        ir = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = S.useState(null);
          return (0, O.jsx)(ar, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      ir.displayName = rr;
      var dr = "PopperAnchor",
        lr = S.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, a = sr(dr, r), s = S.useRef(null), i = (0, Gt.s)(t, s), d = S.useRef(null);
          return S.useEffect(() => {
            const e = d.current;
            d.current = n?.current || s.current, e !== d.current && a.onAnchorChange(d.current)
          }), n ? null : (0, O.jsx)($t.sG.div, {
            ...o,
            ref: i
          })
        });
      lr.displayName = dr;
      var cr = "PopperContent",
        [ur, fr] = nr(cr),
        pr = S.forwardRef((e, t) => {
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
            onPlaced: y,
            ...m
          } = e, h = sr(cr, r), [v, b] = S.useState(null), g = (0, Gt.s)(t, e => b(e)), [w, x] = S.useState(null), _ = (0, tr.X)(w), j = _?.width ?? 0, C = _?.height ?? 0, P = n + ("center" !== a ? "-" + a : ""), R = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, N = Array.isArray(l) ? l : [l], D = N.length > 0, z = {
            padding: R,
            boundary: N.filter(vr),
            altBoundary: D
          }, {
            refs: k,
            floatingStyles: I,
            placement: T,
            isPositioned: L,
            middlewareData: E
          } = (0, Wt.we)({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => (0, Ut.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: h.anchor
            },
            middleware: [(0, Wt.cY)({
              mainAxis: o + C,
              alignmentAxis: s
            }), d && (0, Wt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Wt.ER)() : void 0,
              ...z
            }), d && (0, Wt.UU)({
              ...z
            }), (0, Wt.Ej)({
              ...z,
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
            }), w && (0, Wt.UE)({
              element: w,
              padding: i
            }), br({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, Wt.jD)({
              strategy: "referenceHidden",
              ...z
            })]
          }), [V, A] = gr(T), M = (0, Jt.c)(y);
          (0, er.N)(() => {
            L && M?.()
          }, [L, M]);
          const q = E.arrow?.x,
            B = E.arrow?.y,
            X = 0 !== E.arrow?.centerOffset,
            [F, G] = S.useState();
          return (0, er.N)(() => {
            v && G(window.getComputedStyle(v).zIndex)
          }, [v]), (0, O.jsx)("div", {
            ref: k.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: L ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: F,
              "--radix-popper-transform-origin": [E.transformOrigin?.x, E.transformOrigin?.y].join(" "),
              ...E.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, O.jsx)(ur, {
              scope: r,
              placedSide: V,
              onArrowChange: x,
              arrowX: q,
              arrowY: B,
              shouldHideArrow: X,
              children: (0, O.jsx)($t.sG.div, {
                "data-side": V,
                "data-align": A,
                ...m,
                ref: g,
                style: {
                  ...m.style,
                  animation: L ? void 0 : "none"
                }
              })
            })
          })
        });
      pr.displayName = cr;
      var yr = "PopperArrow",
        mr = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        hr = S.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = fr(yr, r), a = mr[o.placedSide];
          return (0, O.jsx)("span", {
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
            children: (0, O.jsx)(Qt, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function vr(e) {
        return null !== e
      }
      hr.displayName = yr;
      var br = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = gr(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], u = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let p = "",
            y = "";
          return "bottom" === d ? (p = a ? c : `${u}px`, y = -i + "px") : "top" === d ? (p = a ? c : `${u}px`, y = `${n.floating.height+i}px`) : "right" === d ? (p = -i + "px", y = a ? c : `${f}px`) : "left" === d && (p = `${n.floating.width+i}px`, y = a ? c : `${f}px`), {
            data: {
              x: p,
              y
            }
          }
        }
      });

      function gr(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var wr = ir,
        xr = lr,
        _r = pr,
        jr = hr,
        Cr = r(36807),
        Pr = r(97271),
        Or = r(2976),
        Rr = r(1531),
        Sr = Object.freeze({
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
        Nr = S.forwardRef((e, t) => (0, O.jsx)($t.sG.span, {
          ...e,
          ref: t,
          style: {
            ...Sr,
            ...e.style
          }
        }));
      Nr.displayName = "VisuallyHidden";
      var Dr = Nr,
        [zr, kr] = (0, Zt.A)("Tooltip", [or]),
        Ir = or(),
        Tr = "TooltipProvider",
        Lr = 700,
        Er = "tooltip.open",
        [Vr, Ar] = zr(Tr),
        Mr = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Lr,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = S.useRef(!0), i = S.useRef(!1), d = S.useRef(0);
          return S.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, O.jsx)(Vr, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: S.useCallback(() => {
              window.clearTimeout(d.current), s.current = !1
            }, []),
            onClose: S.useCallback(() => {
              window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: S.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      Mr.displayName = Tr;
      var qr = "Tooltip",
        [Br, Xr] = zr(qr),
        Fr = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = Ar(qr, e.__scopeTooltip), l = Ir(t), [c, u] = S.useState(null), f = (0, Ht.B)(), p = S.useRef(0), y = s ?? d.disableHoverableContent, m = i ?? d.delayDuration, h = S.useRef(!1), [v, b] = (0, Rr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Er))) : d.onClose(), a?.(e)
            },
            caller: qr
          }), g = S.useMemo(() => v ? h.current ? "delayed-open" : "instant-open" : "closed", [v]), w = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, h.current = !1, b(!0)
          }, [b]), x = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b(!1)
          }, [b]), _ = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              h.current = !0, b(!0), p.current = 0
            }, m)
          }, [m, b]);
          return S.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, O.jsx)(wr, {
            ...l,
            children: (0, O.jsx)(Br, {
              scope: t,
              contentId: f,
              open: v,
              stateAttribute: g,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: S.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: S.useCallback(() => {
                y ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, y]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: y,
              children: r
            })
          })
        };
      Fr.displayName = qr;
      var Gr = "TooltipTrigger",
        Zr = S.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Xr(Gr, r), a = Ar(Gr, r), s = Ir(r), i = S.useRef(null), d = (0, Gt.s)(t, i, o.onTriggerChange), l = S.useRef(!1), c = S.useRef(!1), u = S.useCallback(() => l.current = !1, []);
          return S.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, O.jsx)(xr, {
            asChild: !0,
            ...s,
            children: (0, O.jsx)($t.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, Ft.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Ft.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Ft.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Ft.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, Ft.mK)(e.onBlur, o.onClose),
              onClick: (0, Ft.mK)(e.onClick, o.onClose)
            })
          })
        });
      Zr.displayName = Gr;
      var Kr = "TooltipPortal",
        [Hr, Wr] = zr(Kr, {
          forceMount: void 0
        }),
        Ur = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Xr(Kr, t);
          return (0, O.jsx)(Hr, {
            scope: t,
            forceMount: r,
            children: (0, O.jsx)(Pr.C, {
              present: r || a.open,
              children: (0, O.jsx)(Cr.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Ur.displayName = Kr;
      var $r = "TooltipContent",
        Yr = S.forwardRef((e, t) => {
          const r = Wr($r, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Xr($r, e.__scopeTooltip);
          return (0, O.jsx)(Pr.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, O.jsx)(rn, {
              side: o,
              ...a,
              ref: t
            }) : (0, O.jsx)(Qr, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        Qr = S.forwardRef((e, t) => {
          const r = Xr($r, e.__scopeTooltip),
            n = Ar($r, e.__scopeTooltip),
            o = S.useRef(null),
            a = (0, Gt.s)(t, o),
            [s, i] = S.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = S.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = S.useCallback((e, t) => {
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
          return S.useEffect(() => () => f(), [f]), S.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), S.useEffect(() => {
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
          }, [d, c, s, l, f]), (0, O.jsx)(rn, {
            ...e,
            ref: a
          })
        }),
        [Jr, en] = zr(qr, {
          isInside: !1
        }),
        tn = (0, Or.Dc)("TooltipContent"),
        rn = S.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Xr($r, r), l = Ir(r), {
            onClose: c
          } = d;
          return S.useEffect(() => (document.addEventListener(Er, c), () => document.removeEventListener(Er, c)), [c]), S.useEffect(() => {
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
          }, [d.trigger, c]), (0, O.jsx)(Kt.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, O.jsxs)(_r, {
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
              children: [(0, O.jsx)(tn, {
                children: n
              }), (0, O.jsx)(Jr, {
                scope: r,
                isInside: !0,
                children: (0, O.jsx)(Dr, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Yr.displayName = $r;
      var nn = "TooltipArrow",
        on = S.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Ir(r);
          return en(nn, r).isInside ? null : (0, O.jsx)(jr, {
            ...o,
            ...n,
            ref: t
          })
        });
      on.displayName = nn;
      var an = Mr,
        sn = Fr,
        dn = Zr,
        ln = Ur,
        cn = Yr,
        un = on;
      const fn = (0, S.createContext)(null);

      function pn() {
        const e = (0, S.useContext)(fn);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const yn = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, T.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, O.jsx)(an, {
            delayDuration: t,
            children: (0, O.jsx)(fn.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, O.jsx)(sn, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        mn = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, O.jsx)(dn, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        hn = (0, S.forwardRef)(({
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
          } = pn(), c = (0, T.jt)(), u = (0, Xt.CS)(cn), f = (0, Xt.pn)(l, {
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
            config: Xt.$W.stiff,
            immediate: c
          }), p = (0, z.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, O.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        vn = (0, S.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, z.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, O.jsx)(un, {
            ...r,
            ref: t
          })
        }),
        bn = ln;
      var gn = r(47690),
        wn = r(93689),
        xn = r(14823),
        _n = r(2754),
        jn = ["PageUp", "PageDown"],
        Cn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Pn = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        On = "Slider",
        [Rn, Sn, Nn] = (0, _n.N)(On),
        [Dn, zn] = (0, Zt.A)(On, [Nn]),
        [kn, In] = Dn(On),
        Tn = S.forwardRef((e, t) => {
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
            form: y,
            ...m
          } = e, h = S.useRef(new Set), v = S.useRef(0), b = "horizontal" === s ? Vn : An, [g = [], w] = (0, Rr.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...h.current];
              t[v.current]?.focus(), u(e)
            }
          }), x = S.useRef(g);

          function _(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / a) * a + n, s),
              l = (0, gn.q)(i, [n, o]);
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
                }(n, d * a)) {
                v.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, O.jsx)(kn, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: v,
            thumbs: h.current,
            values: g,
            orientation: s,
            form: y,
            children: (0, O.jsx)(Rn.Provider, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)(Rn.Slot, {
                scope: e.__scopeSlider,
                children: (0, O.jsx)(b, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, Ft.mK)(m.onPointerDown, () => {
                    i || (x.current = g)
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
                    }(g, e);
                    _(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    _(e, v.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = x.current[v.current];
                    g[v.current] !== e && f(g)
                  },
                  onHomeKeyDown: () => !i && _(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !i && _(o, g.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      const r = jn.includes(e.key) || e.shiftKey && Cn.includes(e.key) ? 10 : 1,
                        n = v.current;
                      _(g[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Tn.displayName = On;
      var [Ln, En] = Dn(On, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Vn = S.forwardRef((e, t) => {
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
        } = e, [u, f] = S.useState(null), p = (0, Gt.s)(t, e => f(e)), y = S.useRef(void 0), m = (0, wn.jH)(o), h = "ltr" === m, v = h && !a || !h && a;

        function b(e) {
          const t = y.current || u.getBoundingClientRect(),
            o = Un([0, t.width], v ? [r, n] : [n, r]);
          return y.current = t, o(e - t.left)
        }
        return (0, O.jsx)(Ln, {
          scope: e.__scopeSlider,
          startEdge: v ? "left" : "right",
          endEdge: v ? "right" : "left",
          direction: v ? 1 : -1,
          size: "width",
          children: (0, O.jsx)(Mn, {
            dir: m,
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
              y.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const t = Pn[v ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), An = S.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = S.useRef(null), u = (0, Gt.s)(t, c), f = S.useRef(void 0), p = !o;

        function y(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Un([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, O.jsx)(Ln, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, O.jsx)(Mn, {
            "data-orientation": "vertical",
            ...l,
            ref: u,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = y(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = y(e.clientY);
              s?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, i?.()
            },
            onStepKeyDown: e => {
              const t = Pn[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Mn = S.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = In(On, r);
        return (0, O.jsx)($t.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, Ft.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : jn.concat(Cn).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, Ft.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, Ft.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, Ft.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), qn = "SliderTrack", Bn = S.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = In(qn, r);
        return (0, O.jsx)($t.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Bn.displayName = qn;
      var Xn = "SliderRange",
        Fn = S.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = In(Xn, r), a = En(Xn, r), s = S.useRef(null), i = (0, Gt.s)(t, s), d = o.values.length, l = o.values.map(e => Wn(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, O.jsx)($t.sG.span, {
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
      Fn.displayName = Xn;
      var Gn = "SliderThumb",
        Zn = S.forwardRef((e, t) => {
          const r = Sn(e.__scopeSlider),
            [n, o] = S.useState(null),
            a = (0, Gt.s)(t, e => o(e)),
            s = S.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, O.jsx)(Kn, {
            ...e,
            ref: a,
            index: s
          })
        }),
        Kn = S.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, s = In(Gn, r), i = En(Gn, r), [d, l] = S.useState(null), c = (0, Gt.s)(t, e => l(e)), u = !d || s.form || !!d.closest("form"), f = (0, tr.X)(d), p = s.values[n], y = void 0 === p ? 0 : Wn(p, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), h = f?.[i.size], v = h ? function(e, t, r) {
            const n = e / 2;
            return (n - Un([0, 50], [0, n])(t) * r) * r
          }(h, y, i.direction) : 0;
          return S.useEffect(() => {
            if (d) return s.thumbs.add(d), () => {
              s.thumbs.delete(d)
            }
          }, [d, s.thumbs]), (0, O.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${y}% + ${v}px)`
            },
            children: [(0, O.jsx)(Rn.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)($t.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": s.min,
                "aria-valuenow": p,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...a,
                ref: c,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: (0, Ft.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), u && (0, O.jsx)(Hn, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, n)]
          })
        });
      Zn.displayName = Gn;
      var Hn = S.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = S.useRef(null),
          a = (0, Gt.s)(o, n),
          s = (0, xn.Z)(t);
        return S.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, O.jsx)($t.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      });

      function Wn(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, gn.q)(n, [0, 100])
      }

      function Un(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Hn.displayName = "RadioBubbleInput";
      var $n = Tn,
        Yn = Bn,
        Qn = Fn,
        Jn = Zn,
        eo = r(95096);
      const to = (0, S.createContext)({
          triggerRef: (0, S.createRef)(),
          triggerBorderRef: (0, S.createRef)(),
          thumbnailRef: (0, S.createRef)(),
          openIconRef: (0, S.createRef)(),
          overlayRef: (0, S.createRef)(),
          contentRef: (0, S.createRef)(),
          containerRef: (0, S.createRef)(),
          imageRef: (0, S.createRef)(),
          placeholderRef: (0, S.createRef)(),
          zoomPanRef: (0, S.createRef)(),
          captionRef: (0, S.createRef)(),
          controlsRef: (0, S.createRef)(),
          closeRef: (0, S.createRef)(),
          zoomRef: (0, S.createRef)(),
          zoomInRef: (0, S.createRef)(),
          zoomSliderRef: (0, S.createRef)(),
          zoomOutRef: (0, S.createRef)(),
          resetRef: (0, S.createRef)(),
          downloadRef: (0, S.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        ro = ({
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
          const f = (() => {
              const {
                locale: e
              } = V();
              return e
            })(),
            p = (0, T.rl)(),
            y = (0, S.useRef)(null),
            m = (0, S.useRef)(null),
            h = (0, S.useRef)(null),
            v = (0, S.useRef)(null),
            b = (0, S.useRef)(null),
            g = (0, S.useRef)(null),
            w = (0, S.useRef)(null),
            x = (0, S.useRef)(null),
            _ = (0, S.useRef)(null),
            j = (0, S.useRef)(null),
            C = (0, S.useRef)(null),
            P = (0, S.useRef)(null),
            R = (0, S.useRef)(null),
            N = (0, S.useRef)(null),
            D = (0, S.useRef)(null),
            z = (0, S.useRef)(null),
            k = (0, S.useRef)(null),
            I = (0, S.useRef)(null),
            L = (0, S.useRef)(null),
            [E = !1, A] = (0, T.ic)({
              prop: t || n,
              onChange: r
            }),
            M = (0, S.useRef)(null);
          return M.current || (M.current = new Vt({
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
          })), (0, O.jsx)(Pt.Dk, {
            messages: Ot,
            locale: f,
            children: (0, O.jsx)(to.Provider, {
              value: {
                triggerRef: y,
                triggerBorderRef: m,
                thumbnailRef: h,
                openIconRef: v,
                overlayRef: b,
                contentRef: g,
                containerRef: w,
                zoomPanRef: x,
                imageRef: _,
                placeholderRef: j,
                captionRef: C,
                controlsRef: P,
                closeRef: R,
                zoomRef: N,
                zoomInRef: D,
                zoomSliderRef: z,
                zoomOutRef: k,
                resetRef: I,
                downloadRef: L,
                open: E,
                setOpen: A,
                altText: e,
                hideTrigger: c,
                slide: M.current
              },
              children: (0, O.jsx)(oo, {
                ...u
              })
            })
          })
        },
        no = (0, S.createContext)({
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
        oo = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, S.useContext)(to), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, at.useGSAP)(), {
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
            } = (0, S.useContext)(to), p = (0, S.useRef)(null);
            p.current || (p.current = ot.gsap.timeline({
              defaults: _t
            }));
            const y = (0, S.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              m = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), ot.gsap.set([u.current, f.current], {
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
                }), ot.gsap.set([f.current], {
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
                  [Ct]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Ct]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await it(f.current), t.closing || (ot.gsap.set([f.current], {
                  visibility: "visible",
                  ...jt
                }), ot.gsap.set([u.current], {
                  visibility: "hidden",
                  ...jt
                }))))
              }),
              h = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              v = (0, S.useCallback)(async e => {
                e || (window.addEventListener("click", y), await h(), window.removeEventListener("click", y)), r(e)
              }, [r]),
              b = (0, S.useCallback)(() => v(!1), [v]);
            return {
              onOpenChange: v,
              openAnim: m,
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
            } = (0, at.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, S.useContext)(to), d = t(async e => {
              r.zoomTo(e), ot.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...jt
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), ot.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...jt
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), ot.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...jt
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), ot.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...jt
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              ot.gsap.to([a.current], {
                opacity: e,
                [Ct]: t,
                ...jt
              })
            }), p = t(async () => {
              ot.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...jt
              })
            }), y = (0, S.useCallback)(() => {
              n.current && o.current && (ot.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...jt
              }), ot.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...jt
              }), ot.gsap.set([s.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, S.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", y), window.addEventListener("resize", r.resize.bind(r)), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), r.removeEventListener("resize", y), window.removeEventListener("resize", r.resize.bind(r))
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
          }), u = (0, z.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, O.jsx)(no.Provider, {
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
            children: (0, O.jsx)(eo.bL, {
              ...u
            })
          })
        },
        ao = (0, S.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Pt.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, S.useContext)(to),
            d = (0, T.UP)(a, n),
            l = (0, z.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Mt.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, O.jsx)(eo.l9, {
            ref: d,
            ...l,
            children: (0, O.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, O.jsx)(L.xV, {
                children: t
              })
            })
          })
        }),
        so = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, S.useContext)(to), a = (0, T.UP)(o, n), s = (0, z.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? L.DX : "img";
          return (0, O.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        io = (0, S.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, S.useContext)(to), o = (0, T.UP)(n, r), a = (0, z.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? L.DX : ee.Maximize2;
          return (0, O.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        lo = ({
          ...e
        }) => (0, O.jsx)(eo.ZL, {
          ...e
        }),
        co = (0, S.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, S.useContext)(to), o = (0, T.UP)(n, r), a = (0, z.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, O.jsx)(eo.hJ, {
            ref: o,
            ...a
          })
        }),
        uo = (0, S.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, S.useContext)(no), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, S.useContext)(to), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, S.useContext)(to), [t, r] = (0, S.useState)(e.getCursor()), n = (0, S.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, S.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = (0, At.m)("dark"), c = (0, T.UP)(a, n), u = (0, z.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, J.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, O.jsxs)(eo.UC, {
            ref: c,
            ...u,
            children: [(0, O.jsx)(L.s6, {
              children: (0, O.jsx)(eo.hE, {
                children: s
              })
            }), t]
          })
        }),
        fo = (0, S.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, S.useContext)(to);
          (() => {
            const {
              contextSafe: e
            } = (0, at.useGSAP)(), {
              toggleControls: t
            } = (0, S.useContext)(no), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, S.useContext)(to), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (ot.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...jt
              }), ot.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...jt
              }), ot.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...jt
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || ot.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...jt
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (ot.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...jt
              }), ot.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...jt
              }), ot.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...jt
              })))
            }), c = (0, S.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, T.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, st.useGesture)({
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
          const a = (0, T.UP)(o, n),
            s = (0, z.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, O.jsx)("div", {
            ref: a,
            ...s,
            children: (0, O.jsxs)(po, {
              children: [(0, O.jsx)(yo, {}), t]
            })
          })
        }),
        po = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, S.useContext)(to), a = (0, T.UP)(o, n), s = (0, z.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? L.DX : "div";
          return (0, O.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        yo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, S.useContext)(to), a = (0, T.UP)(o, n), s = (0, z.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? L.DX : "img";
          return (0, O.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        mo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, S.useContext)(to), a = (0, T.UP)(o, n), s = (0, z.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? L.DX : "img";
          return (0, O.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ho = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, S.useContext)(to), a = (0, T.UP)(o, n), s = (0, z.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? L.DX : "p";
          return (0, O.jsx)(eo.VY, {
            asChild: !0,
            children: (0, O.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        vo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, S.useContext)(to);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, S.useContext)(no);
            (0, pt.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, pt.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, pt.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, pt.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, T.UP)(o, n),
            s = (0, z.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? L.DX : "div";
          return (0, O.jsx)(pt.Hb, {
            children: (0, O.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        bo = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, O.jsx)(O.Fragment, {
            children: n
          });
          const a = (0, z.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, O.jsxs)(yn, {
            delayDuration: 0,
            children: [(0, O.jsx)(mn, {
              children: n
            }), (0, O.jsxs)(hn, {
              ...a,
              children: [(0, O.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, O.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, O.jsx)(vn, {})]
            })]
          })
        },
        go = (0, S.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, z.mergeProps)(e, {
            isInline: !0
          });
          return (0, O.jsx)(Bt, {
            ref: t,
            ...r
          })
        }),
        wo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, Pt.tz)(),
            {
              zoomRef: i
            } = (0, S.useContext)(to),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: y,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, S.useContext)(to), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, S.useContext)(no), [o, a] = (0, S.useState)(!1), [s, i] = (0, S.useState)(!1), [d, l] = (0, S.useState)(0), [c, u] = (0, S.useState)(0), [f, p] = (0, S.useState)(0), y = (0, S.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, S.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, S.useEffect)(() => (e.addEventListener("zoom", y), () => {
                e.removeEventListener("zoom", y)
              }), [y]), {
                zoomTo: m,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            h = (0, T.UP)(i, a),
            v = (0, z.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? L.DX : "div";
          return (0, O.jsxs)(b, {
            ref: h,
            ...v,
            children: [(0, O.jsx)(bo, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Mt.ZoomInButtonLabel),
              metadata: s.formatMessage(Mt.ZoomInButtonTooltip, {
                shortcut: (0, O.jsx)(go, {
                  shortcut: "+"
                })
              }),
              children: (0, O.jsx)(xe, {
                label: s.formatMessage(Mt.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: xt({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, O.jsxs)($n, {
              className: "foundry_1a74xwbt",
              max: y,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, O.jsx)(Yn, {
                className: "foundry_1a74xwbu",
                children: (0, O.jsx)(Qn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, O.jsx)(bo, {
                side: "left",
                enabled: r,
                content: s.formatMessage(Mt.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, O.jsx)(Jn, {
                  className: "foundry_1a74xwbw",
                  children: (0, O.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, O.jsx)(bo, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Mt.ZoomOutButtonLabel),
              metadata: s.formatMessage(Mt.ZoomOutButtonTooltip, {
                shortcut: (0, O.jsx)(go, {
                  shortcut: "-"
                })
              }),
              children: (0, O.jsx)(xe, {
                label: s.formatMessage(Mt.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: xt({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, O.jsx)(L.xV, {
              children: n
            })]
          })
        }),
        xo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, Pt.tz)(),
            {
              closeRef: s
            } = (0, S.useContext)(to),
            i = (0, T.UP)(s, o),
            d = (0, z.mergeProps)(n, {
              "data-testid": e,
              className: wt({
                styled: !t
              })
            }),
            l = t ? (0, O.jsx)(L.DX, {
              ref: i,
              ...d
            }) : (0, O.jsx)(xe, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(Mt.CloseButtonLabel)
            });
          return (0, O.jsx)(bo, {
            side: "right",
            enabled: r,
            content: a.formatMessage(Mt.CloseButtonLabel),
            metadata: a.formatMessage(Mt.CloseButtonTooltip, {
              shortcut: (0, O.jsx)(go, {
                shortcut: "Esc"
              })
            }),
            children: (0, O.jsx)(eo.bm, {
              asChild: !0,
              children: l
            })
          })
        }),
        _o = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Pt.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, S.useContext)(to), {
                contextSafe: r
              } = (0, at.useGSAP)(), {
                resetZoom: n
              } = (0, S.useContext)(no), [o, a] = (0, S.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                ot.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...jt
                })
              }), i = (0, S.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
              }, [a]);
              return (0, S.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, S.useContext)(to),
            i = (0, T.UP)(s, n),
            d = (0, z.mergeProps)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, O.jsx)(bo, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Mt.ResetZoomButtonLabel),
            metadata: o.formatMessage(Mt.ResetZoomButtonTooltip, {
              shortcut: (0, O.jsx)(go, {
                shortcut: "R"
              })
            }),
            children: (0, O.jsx)(xe, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Mt.ResetZoomButtonLabel)
            })
          })
        }),
        jo = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Pt.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, S.useContext)(to),
            i = (0, T.UP)(a, n),
            d = (0, z.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, O.jsx)(bo, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Mt.DownloadButtonTooltip),
            children: (0, O.jsx)(xe, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Mt.DownloadButtonTooltip),
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
        Co = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Po = r(13258);

      function Oo(e) {
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

      function Ro(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function So(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ro(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Oo(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ro(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function No(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Do = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        zo = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = So(So({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Do(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return No(e.variantClassNames, e => No(e, e => e.split(" ")[0]))
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
        }),
        ko = r(66760);
      const Io = (0, S.createContext)(null);

      function To() {
        const e = (0, S.useContext)(Io);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Lo = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, z.mergeProps)({
              className: zo({
                status: a
              }),
              "data-testid": t
            }, s),
            l = r ? L.DX : "div";
          return (0, O.jsx)(Io.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...s
            },
            children: (0, O.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        Eo = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = To(), a = (0, z.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: ko.Check,
            invalid: ko.X,
            neutral: ko.TriangleAlert
          }, i = t ? L.DX : s[o];
          return (0, O.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        Vo = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = To(), i = (0, z.mergeProps)({
            "data-testid": t,
            id: s || a
          }, n), d = r ? L.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Ao = "ScrollArea",
        [Mo, qo] = (0, Zt.A)(Ao),
        [Bo, Xo] = Mo(Ao),
        Fo = S.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = S.useState(null), [l, c] = S.useState(null), [u, f] = S.useState(null), [p, y] = S.useState(null), [m, h] = S.useState(null), [v, b] = S.useState(0), [g, w] = S.useState(0), [x, _] = S.useState(!1), [j, C] = S.useState(!1), P = (0, Gt.s)(t, e => d(e)), R = (0, wn.jH)(o);
          return (0, O.jsx)(Bo, {
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
            onScrollbarXChange: y,
            scrollbarXEnabled: x,
            onScrollbarXEnabledChange: _,
            scrollbarY: m,
            onScrollbarYChange: h,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: b,
            onCornerHeightChange: w,
            children: (0, O.jsx)($t.sG.div, {
              dir: R,
              ...s,
              ref: P,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": v + "px",
                "--radix-scroll-area-corner-height": g + "px",
                ...e.style
              }
            })
          })
        });
      Fo.displayName = Ao;
      var Go = "ScrollAreaViewport",
        Zo = S.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = Xo(Go, r), i = S.useRef(null), d = (0, Gt.s)(t, i, s.onViewportChange);
          return (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, O.jsx)($t.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, O.jsx)("div", {
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
      Zo.displayName = Go;
      var Ko = "ScrollAreaScrollbar",
        Ho = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Xo(Ko, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return S.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, O.jsx)(Wo, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, O.jsx)(Uo, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, O.jsx)($o, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, O.jsx)(Yo, {
            ...n,
            ref: t
          }) : null
        });
      Ho.displayName = Ko;
      var Wo = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Xo(Ko, e.__scopeScrollArea), [a, s] = S.useState(!1);
          return S.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, O.jsx)(Pr.C, {
            present: r || a,
            children: (0, O.jsx)($o, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Uo = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Xo(Ko, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = ha(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, S.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return S.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), S.useEffect(() => {
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
          }, [o.viewport, a, d, s]), (0, O.jsx)(Pr.C, {
            present: r || "hidden" !== i,
            children: (0, O.jsx)(Yo, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, Ft.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, Ft.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        $o = S.forwardRef((e, t) => {
          const r = Xo(Ko, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = S.useState(!1),
            i = "horizontal" === e.orientation,
            d = ha(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return va(r.viewport, d), va(r.content, d), (0, O.jsx)(Pr.C, {
            present: n || a,
            children: (0, O.jsx)(Yo, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Yo = S.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Xo(Ko, e.__scopeScrollArea), a = S.useRef(null), s = S.useRef(0), [i, d] = S.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = ca(i.viewport, i.content), c = {
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
              const o = ua(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                l = r.content - r.viewport;
              return pa([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, O.jsx)(Qo, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = fa(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, O.jsx)(Jo, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = fa(o.viewport.scrollTop, i);
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
        Qo = S.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Xo(Ko, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, Gt.s)(t, d, a.onScrollbarXChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, O.jsx)(ra, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ua(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), ya(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: la(s.paddingLeft),
                  paddingEnd: la(s.paddingRight)
                }
              })
            }
          })
        }),
        Jo = S.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Xo(Ko, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, Gt.s)(t, d, a.onScrollbarYChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, O.jsx)(ra, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ua(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), ya(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: la(s.paddingTop),
                  paddingEnd: la(s.paddingBottom)
                }
              })
            }
          })
        }),
        [ea, ta] = Mo(Ko),
        ra = S.forwardRef((e, t) => {
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
          } = e, p = Xo(Ko, r), [y, m] = S.useState(null), h = (0, Gt.s)(t, e => m(e)), v = S.useRef(null), b = S.useRef(""), g = p.viewport, w = n.content - n.viewport, x = (0, Jt.c)(c), _ = (0, Jt.c)(d), j = ha(u, 10);

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
          return S.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = y?.contains(t);
              r && x(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, y, w, x]), S.useEffect(_, [n, _]), va(y, j), va(p.content, j), (0, O.jsx)(ea, {
            scope: r,
            scrollbar: y,
            hasThumb: o,
            onThumbChange: (0, Jt.c)(a),
            onThumbPointerUp: (0, Jt.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, Jt.c)(i),
            children: (0, O.jsx)($t.sG.div, {
              ...f,
              ref: h,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Ft.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), v.current = y.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, Ft.mK)(e.onPointerMove, C),
              onPointerUp: (0, Ft.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null
              })
            })
          })
        }),
        na = "ScrollAreaThumb",
        oa = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ta(na, e.__scopeScrollArea);
          return (0, O.jsx)(Pr.C, {
            present: r || o.hasThumb,
            children: (0, O.jsx)(aa, {
              ref: t,
              ...n
            })
          })
        }),
        aa = S.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = Xo(na, r), s = ta(na, r), {
            onThumbPositionChange: i
          } = s, d = (0, Gt.s)(t, e => s.onThumbChange(e)), l = S.useRef(void 0), c = ha(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return S.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = ma(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, O.jsx)($t.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Ft.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, Ft.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      oa.displayName = na;
      var sa = "ScrollAreaCorner",
        ia = S.forwardRef((e, t) => {
          const r = Xo(sa, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, O.jsx)(da, {
            ...e,
            ref: t
          }) : null
        });
      ia.displayName = sa;
      var da = S.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Xo(sa, r), [a, s] = S.useState(0), [i, d] = S.useState(0), l = Boolean(a && i);
        return va(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), va(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), l ? (0, O.jsx)($t.sG.div, {
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

      function la(e) {
        return e ? parseInt(e, 10) : 0
      }

      function ca(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function ua(e) {
        const t = ca(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function fa(e, t, r = "ltr") {
        const n = ua(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, gn.q)(e, d);
        return pa([0, s], [0, i])(l)
      }

      function pa(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function ya(e, t) {
        return e > 0 && e < t
      }
      var ma = (e, t = () => {}) => {
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

      function ha(e, t) {
        const r = (0, Jt.c)(e),
          n = S.useRef(0);
        return S.useEffect(() => () => window.clearTimeout(n.current), []), S.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function va(e, t) {
        const r = (0, Jt.c)(t);
        (0, er.N)(() => {
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
      var ba = Fo,
        ga = Zo,
        wa = Ho,
        xa = oa,
        _a = ia,
        ja = r(84017),
        Ca = r(91685),
        Pa = r(77516),
        Oa = r(45787),
        Ra = r(35328),
        Sa = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Na = [" ", "Enter"],
        Da = "Select",
        [za, ka, Ia] = (0, _n.N)(Da),
        [Ta, La] = (0, Zt.A)(Da, [Ia, or]),
        Ea = or(),
        [Va, Aa] = Ta(Da),
        [Ma, qa] = Ta(Da),
        Ba = e => {
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
            form: y
          } = e, m = Ea(t), [h, v] = S.useState(null), [b, g] = S.useState(null), [w, x] = S.useState(!1), _ = (0, wn.jH)(l), [j, C] = (0, Rr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Da
          }), [P, R] = (0, Rr.i)({
            prop: s,
            defaultProp: i,
            onChange: d,
            caller: Da
          }), N = S.useRef(null), D = !h || y || !!h.closest("form"), [z, k] = S.useState(new Set), I = Array.from(z).map(e => e.props.value).join(";");
          return (0, O.jsx)(wr, {
            ...m,
            children: (0, O.jsxs)(Va, {
              required: p,
              scope: t,
              trigger: h,
              onTriggerChange: v,
              valueNode: b,
              onValueNodeChange: g,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: x,
              contentId: (0, Ht.B)(),
              value: P,
              onValueChange: R,
              open: j,
              onOpenChange: C,
              dir: _,
              triggerPointerDownPosRef: N,
              disabled: f,
              children: [(0, O.jsx)(za.Provider, {
                scope: t,
                children: (0, O.jsx)(Ma, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: S.useCallback(e => {
                    k(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: S.useCallback(e => {
                    k(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), D ? (0, O.jsxs)(_s, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: u,
                value: P,
                onChange: e => R(e.target.value),
                disabled: f,
                form: y,
                children: [void 0 === P ? (0, O.jsx)("option", {
                  value: ""
                }) : null, Array.from(z)]
              }, I) : null]
            })
          })
        };
      Ba.displayName = Da;
      var Xa = "SelectTrigger",
        Fa = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = Ea(r), s = Aa(Xa, r), i = s.disabled || n, d = (0, Gt.s)(t, s.onTriggerChange), l = ka(r), c = S.useRef("touch"), [u, f, p] = Cs(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Ps(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), y = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, O.jsx)(xr, {
            asChild: !0,
            ...a,
            children: (0, O.jsx)($t.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": js(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, Ft.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && y(e)
              }),
              onPointerDown: (0, Ft.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (y(e), e.preventDefault())
              }),
              onKeyDown: (0, Ft.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Sa.includes(e.key) && (y(), e.preventDefault())
              })
            })
          })
        });
      Fa.displayName = Xa;
      var Ga = "SelectValue",
        Za = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Aa(Ga, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, Gt.s)(t, d.onValueNodeChange);
          return (0, er.N)(() => {
            l(c)
          }, [l, c]), (0, O.jsx)($t.sG.span, {
            ...i,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: js(d.value) ? (0, O.jsx)(O.Fragment, {
              children: s
            }) : a
          })
        });
      Za.displayName = Ga;
      var Ka = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, O.jsx)($t.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Ka.displayName = "SelectIcon";
      var Ha = e => (0, O.jsx)(Cr.Z, {
        asChild: !0,
        ...e
      });
      Ha.displayName = "SelectPortal";
      var Wa = "SelectContent",
        Ua = S.forwardRef((e, t) => {
          const r = Aa(Wa, e.__scopeSelect),
            [n, o] = S.useState();
          if ((0, er.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? ja.createPortal((0, O.jsx)(Ya, {
              scope: e.__scopeSelect,
              children: (0, O.jsx)(za.Slot, {
                scope: e.__scopeSelect,
                children: (0, O.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, O.jsx)(es, {
            ...e,
            ref: t
          })
        });
      Ua.displayName = Wa;
      var $a = 10,
        [Ya, Qa] = Ta(Wa),
        Ja = (0, Or.TL)("SelectContent.RemoveScroll"),
        es = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
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
            sticky: y,
            hideWhenDetached: m,
            avoidCollisions: h,
            ...v
          } = e, b = Aa(Wa, r), [g, w] = S.useState(null), [x, _] = S.useState(null), j = (0, Gt.s)(t, e => w(e)), [C, P] = S.useState(null), [R, N] = S.useState(null), D = ka(r), [z, k] = S.useState(!1), I = S.useRef(!1);
          S.useEffect(() => {
            if (g) return (0, Oa.Eq)(g)
          }, [g]), (0, Ca.Oh)();
          const T = S.useCallback(e => {
              const [t, ...r] = D().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [D, x]),
            L = S.useCallback(() => T([C, g]), [T, C, g]);
          S.useEffect(() => {
            z && L()
          }, [z, L]);
          const {
            onOpenChange: E,
            triggerPointerDownPosRef: V
          } = b;
          S.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : g.contains(r.target) || E(!1), document.removeEventListener("pointermove", t), V.current = null
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
          }, [g, E, V]), S.useEffect(() => {
            const e = () => E(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [E]);
          const [A, M] = Cs(e => {
            const t = D().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Ps(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), q = S.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== b.value && b.value === t || n) && (P(e), n && (I.current = !0))
          }, [b.value]), B = S.useCallback(() => g?.focus(), [g]), X = S.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== b.value && b.value === t || n) && N(e)
          }, [b.value]), F = "popper" === n ? rs : ts, G = F === rs ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: y,
            hideWhenDetached: m,
            avoidCollisions: h
          } : {};
          return (0, O.jsx)(Ya, {
            scope: r,
            content: g,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: q,
            selectedItem: C,
            onItemLeave: B,
            itemTextRefCallback: X,
            focusSelectedItem: L,
            selectedItemText: R,
            position: n,
            isPositioned: z,
            searchRef: A,
            children: (0, O.jsx)(Ra.A, {
              as: Ja,
              allowPinchZoom: !0,
              children: (0, O.jsx)(Pa.n, {
                asChild: !0,
                trapped: b.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Ft.mK)(o, e => {
                  b.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, O.jsx)(Kt.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => b.onOpenChange(!1),
                  children: (0, O.jsx)(F, {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
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
                    onKeyDown: (0, Ft.mK)(v.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = D().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => T(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      es.displayName = "SelectContentImpl";
      var ts = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Aa(Wa, r), s = Qa(Wa, r), [i, d] = S.useState(null), [l, c] = S.useState(null), u = (0, Gt.s)(t, e => c(e)), f = ka(r), p = S.useRef(!1), y = S.useRef(!0), {
          viewport: m,
          selectedItem: h,
          selectedItemText: v,
          focusSelectedItem: b
        } = s, g = S.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && m && h && v) {
            const e = a.trigger.getBoundingClientRect(),
              t = l.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = v.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                s = e.left - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - $a,
                u = (0, gn.q)(a, [$a, Math.max($a, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - $a,
                u = (0, gn.q)(a, [$a, Math.max($a, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * $a,
              c = m.scrollHeight,
              u = window.getComputedStyle(l),
              y = parseInt(u.borderTopWidth, 10),
              b = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = y + b + c + parseInt(u.paddingBottom, 10) + g,
              x = Math.min(5 * h.offsetHeight, w),
              _ = window.getComputedStyle(m),
              j = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              P = e.top + e.height / 2 - $a,
              O = d - P,
              R = h.offsetHeight / 2,
              S = y + b + (h.offsetTop + R),
              N = w - S;
            if (S <= P) {
              const e = s.length > 0 && h === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - m.offsetTop - m.offsetHeight,
                r = S + Math.max(O, R + (e ? C : 0) + t + g);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && h === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(P, y + m.offsetTop + (e ? j : 0) + R) + N;
              i.style.height = t + "px", m.scrollTop = S - P + m.offsetTop
            }
            i.style.margin = `${$a}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, m, h, v, a.dir, n]);
        (0, er.N)(() => g(), [g]);
        const [w, x] = S.useState();
        (0, er.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = S.useCallback(e => {
          e && !0 === y.current && (g(), b?.(), y.current = !1)
        }, [g, b]);
        return (0, O.jsx)(ns, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: _,
          children: (0, O.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, O.jsx)($t.sG.div, {
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
      ts.displayName = "SelectItemAlignedPosition";
      var rs = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = $a,
          ...a
        } = e, s = Ea(r);
        return (0, O.jsx)(_r, {
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
      rs.displayName = "SelectPopperPosition";
      var [ns, os] = Ta(Wa, {}), as = "SelectViewport", ss = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = Qa(as, r), s = os(as, r), i = (0, Gt.s)(t, a.onViewportChange), d = S.useRef(0);
        return (0, O.jsxs)(O.Fragment, {
          children: [(0, O.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, O.jsx)(za.Slot, {
            scope: r,
            children: (0, O.jsx)($t.sG.div, {
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
              onScroll: (0, Ft.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * $a,
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
      ss.displayName = as;
      var is = "SelectGroup",
        [ds, ls] = Ta(is);
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Ht.B)();
        return (0, O.jsx)(ds, {
          scope: r,
          id: o,
          children: (0, O.jsx)($t.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = is;
      var cs = "SelectLabel";
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = ls(cs, r);
        return (0, O.jsx)($t.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = cs;
      var us = "SelectItem",
        [fs, ps] = Ta(us),
        ys = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Aa(us, r), d = Qa(us, r), l = i.value === n, [c, u] = S.useState(a ?? ""), [f, p] = S.useState(!1), y = (0, Gt.s)(t, e => d.itemRefCallback?.(e, n, o)), m = (0, Ht.B)(), h = S.useRef("touch"), v = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, O.jsx)(fs, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: l,
            onItemTextChange: S.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, O.jsx)(za.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, O.jsx)($t.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: y,
                onFocus: (0, Ft.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Ft.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Ft.mK)(s.onClick, () => {
                  "mouse" !== h.current && v()
                }),
                onPointerUp: (0, Ft.mK)(s.onPointerUp, () => {
                  "mouse" === h.current && v()
                }),
                onPointerDown: (0, Ft.mK)(s.onPointerDown, e => {
                  h.current = e.pointerType
                }),
                onPointerMove: (0, Ft.mK)(s.onPointerMove, e => {
                  h.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === h.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Ft.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, Ft.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Na.includes(e.key) && v(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ys.displayName = us;
      var ms = "SelectItemText",
        hs = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Aa(ms, r), i = Qa(ms, r), d = ps(ms, r), l = qa(ms, r), [c, u] = S.useState(null), f = (0, Gt.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, y = S.useMemo(() => (0, O.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: h
          } = l;
          return (0, er.N)(() => (m(y), () => h(y)), [m, h, y]), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)($t.sG.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren ? ja.createPortal(a.children, s.valueNode) : null]
          })
        });
      hs.displayName = ms;
      var vs = "SelectItemIndicator";
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return ps(vs, r).isSelected ? (0, O.jsx)($t.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = vs;
      var bs = "SelectScrollUpButton";
      S.forwardRef((e, t) => {
        const r = Qa(bs, e.__scopeSelect),
          n = os(bs, e.__scopeSelect),
          [o, a] = S.useState(!1),
          s = (0, Gt.s)(t, n.onScrollButtonChange);
        return (0, er.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, O.jsx)(ws, {
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
      }).displayName = bs;
      var gs = "SelectScrollDownButton";
      S.forwardRef((e, t) => {
        const r = Qa(gs, e.__scopeSelect),
          n = os(gs, e.__scopeSelect),
          [o, a] = S.useState(!1),
          s = (0, Gt.s)(t, n.onScrollButtonChange);
        return (0, er.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, O.jsx)(ws, {
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
      }).displayName = gs;
      var ws = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = Qa("SelectScrollButton", r), s = S.useRef(null), i = ka(r), d = S.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return S.useEffect(() => () => d(), [d]), (0, er.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, O.jsx)($t.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, Ft.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, Ft.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, Ft.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, O.jsx)($t.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var xs = "SelectArrow";
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Ea(r), a = Aa(xs, r), s = Qa(xs, r);
        return a.open && "popper" === s.position ? (0, O.jsx)(jr, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = xs;
      var _s = S.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = S.useRef(null),
          a = (0, Gt.s)(n, o),
          s = (0, xn.Z)(t);
        return S.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (s !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [s, t]), (0, O.jsx)($t.sG.select, {
          ...r,
          style: {
            ...Sr,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function js(e) {
        return "" === e || void 0 === e
      }

      function Cs(e) {
        const t = (0, Jt.c)(e),
          r = S.useRef(""),
          n = S.useRef(0),
          o = S.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = S.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return S.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function Ps(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }
      _s.displayName = "SelectBubbleInput";
      var Os = Ba,
        Rs = Fa,
        Ss = Za,
        Ns = Ka,
        Ds = Ha,
        zs = Ua,
        ks = ss,
        Is = ys,
        Ts = hs;

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

      function Es(e, t) {
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
          t % 2 ? Es(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ls(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Es(Object(r)).forEach(function(t) {
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
        qs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vs(Vs({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
        },
        Bs = qs({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xs = qs({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fs = qs({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gs = qs({
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
        Zs = qs({
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
        Ks = qs({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Hs = (0, S.createContext)(null);

      function Ws() {
        const e = (0, S.useContext)(Hs);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Us = (0, S.forwardRef)(({
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
          ...y
        }, m) => {
          const h = (0, S.useRef)(null),
            v = (0, T.UP)(h, m),
            b = (0, S.useId)(),
            g = (0, S.useId)(),
            w = (0, S.useId)(),
            x = (0, S.useId)(),
            _ = (0, S.useId)(),
            j = (0, S.useId)(),
            [C = !1, P] = (0, T.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            R = (0, z.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, y);
          return (0, O.jsx)(Hs.Provider, {
            value: {
              labelId: b,
              errorId: g,
              descriptionId: w,
              triggerId: j,
              hintId: x,
              popoverId: _,
              defaultValue: a,
              onValueChange: s,
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
            children: (0, O.jsx)(Os, {
              required: r,
              disabled: n,
              open: C,
              onOpenChange: () => P(!o && !C),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, O.jsx)("div", {
                ref: v,
                ...R,
                children: e
              })
            })
          })
        }),
        $s = (0, S.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = Ws(), s = (0, z.mergeProps)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Bs({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, O.jsx)(zs, {
            ...s,
            ref: o,
            children: (0, O.jsx)(ks, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Ys = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(ks, {
            ref: r,
            ...n
          })
        }),
        Qs = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, O.jsxs)(ba, {
            ...o,
            ref: n,
            children: [(0, O.jsx)(Ys, {
              asChild: !0,
              children: (0, O.jsx)(ga, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, O.jsx)(wa, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, O.jsx)(xa, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Js = (0, S.forwardRef)(({
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
            descriptionId: y,
            isOpen: m,
            value: h,
            size: v
          } = Ws(), {
            isPressed: b,
            pressProps: g
          } = (0, Po.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, z.mergeProps)({
            id: f,
            className: Zs({
              size: v,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!b,
              isDisabled: !!l
            }),
            "aria-labelledby": (0, z.joinStrings)(r, c, u),
            "aria-describedby": (0, z.joinStrings)(n, y),
            "aria-activedescendant": h,
            "aria-controls": p,
            "aria-invalid": "invalid" === d,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!b
          }, (0, z.omit)(g, "onKeyDown"), a), x = o ? L.DX : Rs;
          return (0, O.jsx)(x, {
            ...w,
            ref: s,
            children: e
          })
        }),
        ei = (0, S.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? L.DX : "span";
          return (0, O.jsx)(s, {
            ...a,
            ref: o,
            children: (0, O.jsx)(Ss, {
              placeholder: e
            })
          })
        }),
        ti = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = Ws(), i = s ? ee.ChevronUp : ee.ChevronDown, d = (0, z.mergeProps)({
            asChild: !0,
            className: Ks({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, O.jsx)(Ns, {
            ...d,
            ref: n,
            children: e || (0, O.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        ri = (0, S.forwardRef)(({
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
            triggerId: c
          } = Ws(), u = i && !o, f = (0, z.mergeProps)({
            id: a.id || l,
            htmlFor: c,
            "data-testid": e,
            className: Gs({
              showAsterisk: u,
              isDisabled: d
            })
          }, a), p = t ? L.DX : "label";
          return (0, O.jsx)(L.s6, {
            enabled: n,
            children: (0, O.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        ni = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Ws(), i = (0, z.mergeProps)({
            className: Xs({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? L.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        oi = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = Ws(), i = (0, z.mergeProps)({
            className: Fs({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? L.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ai = (0, S.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, T.UP)(s, a),
            d = (0, z.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, O.jsx)(Is, {
            ref: i,
            ...d,
            children: e
          })
        }),
        si = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, O.jsx)(Ts, {
            ref: n,
            asChild: !0,
            children: (0, O.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        ii = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, O.jsx)(Ns, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        di = Ds,
        li = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Ws(), i = (0, z.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? L.DX : Lo;
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ci = Eo,
        ui = Vo;
      var fi = r(28687),
        pi = r(76646);

      function yi(e) {
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

      function mi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vi(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hi(hi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bi(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vi(e.variantClassNames, e => vi(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wi = gi({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xi = gi({
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
        _i = gi({
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
        ji = gi({
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
        Ci = gi({
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
      const Pi = (0, S.createContext)(null);

      function Oi() {
        const e = (0, S.useContext)(Pi);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Ri = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? L.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)();
          return (0, O.jsx)(Pi.Provider, {
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
            children: (0, O.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Si = (0, S.forwardRef)(({
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
          const p = (0, S.useRef)(null),
            y = (0, T.UP)(p, f),
            {
              size: m,
              appearance: h,
              inputId: v,
              labelId: b,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: x
            } = Oi(),
            _ = (0, pi.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, fi.K)({
              id: a || v,
              "aria-labelledby": (0, z.joinStrings)(n, b),
              "aria-describedby": (0, z.joinStrings)(o, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, z.mergeProps)({
              className: Ci({
                appearance: h
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || x,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || x || _.toggle()
              }
            }, u);
          return (0, O.jsxs)("div", {
            ...C,
            children: [(0, O.jsx)(L.s6, {
              children: (0, O.jsx)("input", {
                ...j,
                ref: y
              })
            }), (0, O.jsx)("div", {
              className: ji({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, O.jsx)("div", {
                className: xi({
                  size: m,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        Ni = (0, S.forwardRef)(({
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
          } = Oi(), c = (0, z.mergeProps)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: _i({
              isDisabled: s,
              size: l
            })
          }, o), u = t ? L.DX : "label";
          return (0, O.jsx)(L.s6, {
            enabled: n,
            children: (0, O.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Di = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Oi(), i = n.id || s, d = (0, z.mergeProps)({
            className: wi({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? L.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var zi = r(58611);
      const ki = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ii = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ti = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Li = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Ei = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Vi = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, O.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Ai(e) {
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

      function qi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ai(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
      var Xi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qi(qi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xi(l, n, e.defaultVariants) && (r += " " + c);
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
        Gi = Fi({
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
        Zi = Fi({
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
        Ki = Fi({
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
        Hi = Fi({
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
        Wi = Fi({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ui = Fi({
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
      const $i = (0, S.createContext)(null);

      function Yi() {
        const e = (0, S.useContext)($i);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Qi = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, s) => {
          const i = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, z.omit)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? L.DX : "div",
            l = (0, S.useId)(),
            c = (0, S.useId)(),
            u = (0, S.useId)();
          return (0, O.jsx)($i.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, O.jsx)(d, {
              ...i,
              ref: s,
              children: o
            })
          })
        }),
        Ji = (0, S.forwardRef)(({
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
            size: y,
            appearance: m,
            isIndeterminate: h,
            isRequired: v,
            descriptionId: b,
            labelId: g,
            inputId: w,
            ...x
          } = Yi(), _ = (0, S.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: P
          } = (0, Po.d)({
            ref: _
          }), {
            setSelected: R,
            toggle: N,
            ...D
          } = (0, pi.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: k,
            isSelected: I,
            isDisabled: T,
            isReadOnly: E
          } = (0, zi.v)({
            "aria-label": "",
            id: j,
            name: o,
            ...x
          }, {
            ...D,
            toggle: N,
            setSelected: x.isReadOnly ? () => !1 : R
          }, _), V = (0, z.mergeProps)({
            className: Zi({
              size: y
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || T || E || N()
            }
          }, P, f), A = (0, z.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, z.joinStrings)(c, g),
            "aria-describedby": (0, z.joinStrings)(d, b),
            "aria-errormessage": (0, z.joinStrings)(l, x.isInvalid ? b : void 0),
            "aria-required": v,
            required: v
          }, k), M = h ? i[`Dash${y}`] : i[`Check${y}`];
          return (0, O.jsxs)("div", {
            ...V,
            children: [(0, O.jsx)(L.s6, {
              children: (0, O.jsx)("input", {
                ...A,
                ref: p
              })
            }), (0, O.jsx)("div", {
              className: (0, J.clsx)(Gi({
                size: y,
                appearance: m
              }), u),
              "aria-hidden": "true",
              "data-state": h ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": T || E,
              "data-testid": e,
              "data-pressed": C,
              children: (0, O.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || h) && (0, O.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        ed = (0, S.forwardRef)(({
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
          } = Yi(), u = a.id || d, f = c && !o, p = (0, z.mergeProps)({
            className: Ui({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), y = t ? L.DX : "label";
          return (0, O.jsx)(L.s6, {
            enabled: n,
            children: (0, O.jsx)(y, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        td = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Yi(), i = n.id || s, d = (0, z.mergeProps)({
            className: Ki({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? L.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        rd = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Yi(), s = n.id || a, i = (0, z.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: s
          }, n), d = t ? L.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        nd = (0, S.createContext)(null);

      function od() {
        const e = (0, S.useContext)(nd);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const ad = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...a
        }, s) => {
          const [i, d] = (0, S.useState)(null), [l, c] = (0, S.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, z.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = t ? L.DX : "fieldset";
          return (0, O.jsx)(nd.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, O.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        sd = (0, S.forwardRef)(({
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
          } = od(), l = d && !a, c = (0, z.mergeProps)({
            "data-testid": r,
            className: Wi({
              showAsterisk: l
            })
          }, s), u = t ? L.DX : "legend";
          return (0, O.jsx)(L.s6, {
            enabled: o,
            children: (0, O.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, O.jsx)(L.xV, {
                children: e
              }), !d && (0, O.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        id = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: a
          } = od(), s = (0, S.useId)(), i = n.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? L.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        dd = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = od(), s = (0, z.mergeProps)({
            "data-testid": r,
            className: Hi({
              size: a
            })
          }, n), i = t ? L.DX : "div";
          return (0, O.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        ld = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: a
          } = od(), s = (0, S.useId)(), i = n.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, z.mergeProps)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = ee.X,
            c = t ? L.DX : "div";
          return (0, O.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, O.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, O.jsx)(L.xV, {
              children: e
            })]
          })
        });

      function cd(e) {
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

      function ud(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ud(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = cd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ud(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        md = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fd(fd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pd(e.variantClassNames, e => pd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        hd = md({
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
        vd = md({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bd = md({
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
        gd = md({
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
      const wd = (0, S.createContext)(null);

      function xd() {
        const e = (0, S.useContext)(wd);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const _d = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? L.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)(),
            y = (0, S.useId)();
          return (0, O.jsx)(wd.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: y,
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: s,
              ...i
            },
            children: (0, O.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        jd = (0, S.forwardRef)(({
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
          } = xd(), u = (0, z.mergeProps)({
            className: bd({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, a), f = t ? L.DX : "label";
          return (0, O.jsx)(L.s6, {
            enabled: n,
            children: (0, O.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        Cd = (0, S.forwardRef)(({
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
            hintId: y,
            isDisabled: m,
            isRequired: h,
            isReadOnly: v,
            status: b
          } = xd(), g = (0, S.useRef)(null), w = (0, T.UP)(g, c), x = (0, z.mergeProps)({
            className: gd({
              isInvalid: "invalid" === b,
              isDisabled: m,
              isReadOnly: v,
              isSuccess: "success" === b
            }),
            name: a,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: h,
            readOnly: v,
            placeholder: s,
            "aria-labelledby": (0, z.joinStrings)(l.id, f, y, i),
            "aria-describedby": (0, z.joinStrings)(u, d),
            "data-testid": r,
            ..."invalid" === b && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === b && {
              "data-success": !0
            },
            ...m && {
              "aria-disabled": !0
            },
            ...h && {
              "aria-required": !0
            }
          }, l), _ = e ? L.DX : "textarea";
          return (0, O.jsx)(_, {
            ref: w,
            ...x,
            children: t
          })
        }),
        Pd = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = xd(), i = (0, z.mergeProps)({
            className: hd({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? L.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Od = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = xd(), i = (0, z.mergeProps)({
            className: vd({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? L.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Rd = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = xd(), i = (0, z.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? L.DX : Lo;
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Sd = Eo,
        Nd = Vo;
      var Dd = r(27097),
        zd = r(18222);

      function kd(e) {
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

      function Id(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Td(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Id(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = kd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Id(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ld(e, t) {
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
        Vd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Td(Td({}, e.defaultVariants), t);
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
              return Ld(e.variantClassNames, e => Ld(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ad = Vd({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Md = Vd({
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
      const qd = (0, S.createContext)(null);

      function Bd() {
        const e = (0, S.useContext)(qd);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Xd = (0, S.forwardRef)(({
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
          const f = (0, S.useRef)(null),
            p = (0, T.UP)(f, u),
            y = (0, S.useId)(),
            m = (0, S.useId)(),
            h = (0, S.useId)(),
            v = (0, Dd.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, zd.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, z.joinStrings)(y, s),
              "aria-describedby": (0, z.joinStrings)(m, h, i),
              "aria-errormessage": (0, z.joinStrings)(h, d)
            }, v),
            g = (0, z.mergeProps)({
              className: "foundry_njguqn0"
            }, b, (0, z.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? L.DX : "div";
          return (0, O.jsx)(qd.Provider, {
            value: {
              state: v,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: m,
              labelId: y,
              errorId: h,
              status: l,
              ...c
            },
            children: (0, O.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        }),
        Fd = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = Bd(), i = (0, z.mergeProps)({
            "data-testid": e,
            className: Md({
              size: a,
              orientation: s
            })
          }, n), d = t ? L.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Gd = (0, S.forwardRef)(({
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
          } = Bd(), l = i && !o, c = (0, z.mergeProps)({
            id: a.id || d,
            "data-testid": e,
            className: Ad({
              showAsterisk: l
            })
          }, a), u = t ? L.DX : "div";
          return (0, O.jsx)(L.s6, {
            enabled: n,
            children: (0, O.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Zd = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Bd(), s = (0, z.mergeProps)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? L.DX : "div";
          return (0, O.jsx)(i, {
            ...s,
            ref: o,
            children: r
          })
        }),
        Kd = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = Bd(), i = (0, z.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), d = r ? L.DX : Lo;
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Hd = Eo,
        Wd = Vo;
      var Ud = r(9153),
        $d = Vd({
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
        Yd = Vd({
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
        Qd = Vd({
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
        Jd = Vd({
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
      const el = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, O.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        tl = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, O.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        rl = ({
          color: e = "currentColor"
        }) => (0, O.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, O.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        nl = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? L.DX : "label";
          return (0, O.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        ol = (0, S.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, S.useRef)(null),
            a = (0, T.UP)(o, n),
            s = (0, S.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Bd(),
            {
              isPressed: p,
              pressProps: y
            } = (0, Po.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: m
            } = (0, Ud.z)({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, o),
            h = m.checked,
            v = m.disabled || i?.isReadOnly,
            b = (0, z.mergeProps)(m, {
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
            g = c[`Dot${l}`];
          return (0, O.jsxs)("div", {
            className: Jd({
              size: l
            }),
            children: [(0, O.jsx)(L.s6, {
              children: (0, O.jsx)("input", {
                type: "radio",
                ...b,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, O.jsx)("div", {
              className: Qd({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": h ? "checked" : "unchecked",
              "data-disabled": v,
              "data-pressed": p,
              ...y,
              children: (0, O.jsx)("span", {
                className: "foundry_1pfduet9",
                children: h && (0, O.jsx)(g, {})
              })
            })]
          })
        }),
        al = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = Bd(), d = (0, S.useId)(), l = (0, z.mergeProps)({
            id: d,
            "data-testid": e,
            className: Yd({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? L.DX : "div";
          return (0, O.jsx)(L.s6, {
            enabled: n,
            children: (0, O.jsx)(c, {
              ...l,
              ref: a,
              children: r
            })
          })
        }),
        sl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Bd(), s = (0, z.mergeProps)({
            "data-testid": e,
            className: $d({
              isDisabled: a
            })
          }, n), i = t ? L.DX : "span";
          return (0, O.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });
      var il = r(35462);

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
        pl = e => {
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
        },
        yl = pl({
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
        ml = pl({
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
        hl = pl({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vl = pl({
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
        bl = pl({
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
        gl = pl({
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
      const wl = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        xl = (0, S.createContext)(null);

      function _l() {
        const e = (0, S.useContext)(xl);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const jl = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, S.useState)("text"), u = `${(0,S.useId)()}-label`, f = `${(0,S.useId)()}-input`, p = `${(0,S.useId)()}-description`, y = (0, S.useRef)(null), m = (0, S.useRef)(wl), h = (0, z.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), v = e ? L.DX : "div";
          return (0, O.jsx)(xl.Provider, {
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
              inputRef: y,
              focusState: m,
              ...i
            },
            children: (0, O.jsx)(v, {
              ref: d,
              ...h,
              children: t
            })
          })
        }),
        Cl = (0, S.forwardRef)(({
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
          } = _l(), u = d && !o, f = (0, z.mergeProps)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: gl({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = t ? L.DX : "label";
          return (0, O.jsx)(L.s6, {
            enabled: n,
            children: (0, O.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        Pl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = _l(), s = (0, z.mergeProps)({
            "data-testid": e,
            className: hl({
              isDisabled: a
            })
          }, n), i = t ? L.DX : "span";
          return (0, O.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        Ol = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = _l(), d = (0, z.mergeProps)({
            "data-testid": e,
            className: (0, J.clsx)(yl({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? L.DX : "div";
          return (0, O.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Rl = (0, S.forwardRef)(({
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
            isRequired: y,
            status: m,
            labelId: h,
            inputId: v,
            descriptionId: b,
            setType: g,
            type: w,
            inputRef: x,
            focusState: _
          } = _l();
          (0, S.useEffect)(() => g(l), []);
          const j = "invalid" === m,
            C = (0, z.mergeProps)({
              disabled: f,
              readOnly: p,
              required: y,
              id: v,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, z.joinStrings)(h, i),
              "aria-describedby": (0, z.joinStrings)(b, d),
              "data-testid": e,
              className: (0, J.clsx)(bl({
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
              ..."success" === m && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...y && {
                "aria-required": !0
              }
            }, c),
            P = (0, il.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            R = (0, T.UP)(r && n ? P : null, x, u),
            N = t ? L.DX : "input";
          return (0, O.jsx)(N, {
            ref: R,
            ...C
          })
        }),
        Sl = (0, S.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = _l(), i = (0, z.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, J.clsx)(vl({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), d = t ? L.DX : ee[e];
          return (0, O.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        Nl = (0, S.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = _l(), n = (0, z.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, J.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, O.jsx)(xe, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        Dl = (0, S.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i
          } = _l(), d = "password" === o, l = d ? e : t;
          (0, S.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, z.mergeProps)({
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
          return (0, O.jsxs)(yn, {
            children: [(0, O.jsx)(mn, {
              children: (0, O.jsx)(Nl, {
                ref: n,
                ...c
              })
            }), (0, O.jsxs)(hn, {
              side: "bottom",
              align: "end",
              children: [l, (0, O.jsx)(vn, {})]
            })]
          })
        }),
        zl = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = _l(), i = (0, z.mergeProps)({
            className: ml({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? L.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        kl = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = _l(), i = (0, z.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? L.DX : Lo;
          return (0, O.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Il = Eo,
        Tl = Vo;
      var Ll = r(16319);

      function El(e) {
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

      function Vl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Al(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = El(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ml(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ql = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Al(Al({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ql(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ml(e.variantClassNames, e => Ml(e, e => e.split(" ")[0]))
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
      const Xl = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Fl = (0, S.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, S.useRef)(null),
            s = (0, T.UP)(a, o),
            {
              buttonProps: i
            } = (0, T.sL)(n, a),
            d = (0, z.mergeProps)({
              "data-testid": r,
              className: Bl({
                size: t
              })
            }, i);
          return (0, O.jsx)("button", {
            ref: s,
            ...d,
            children: (0, O.jsx)(ee.X, {
              label: e,
              size: Xl[t]
            })
          })
        });

      function Gl(e) {
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

      function Zl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Kl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Gl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ul = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kl(Kl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hl(e.variantClassNames, e => Hl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $l = Ul({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yl = Ul({
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
        Ql = Ul({
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
      const Jl = (0, S.createContext)(null);

      function ec() {
        const e = (0, S.useContext)(Jl);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const tc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? L.DX : "div",
            i = (0, z.mergeProps)({
              className: Ql({
                status: r,
                background: n
              })
            }, o);
          return (0, O.jsx)(Jl.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, O.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i
            })
          })
        }),
        rc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, z.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        nc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, z.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        oc = {
          danger: ee.CircleX,
          information: ee.Info,
          success: ee.CircleCheck,
          warning: ee.TriangleAlert
        },
        ac = (0, S.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = ec(), a = e ? L.DX : oc[o], s = (0, z.mergeProps)({
            className: Yl({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, O.jsx)(a, {
            label: "",
            ref: n,
            ...s
          })
        }),
        sc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, z.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        ic = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, z.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        dc = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, S.useRef)(null),
            s = (0, T.UP)(a, o),
            i = e ? L.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Ll.i)(n, a),
            c = (0, z.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, O.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        lc = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? L.DX : "div",
            s = (0, z.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, O.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        cc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? L.DX : "div";
          return (0, O.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, J.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        uc = (0, S.forwardRef)((e, t) => {
          const {
            background: r
          } = ec(), n = "none" !== r, o = (0, z.mergeProps)({
            className: $l({
              hasBackground: n
            })
          }, e);
          return (0, O.jsx)(Fl, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var fc = r(64634),
        pc = r(7697),
        yc = r(17497);
      var mc = r(76789);

      function hc(e) {
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

      function vc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function bc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = hc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xc = "foundry_qmpv6yv",
        _c = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bc(bc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) wc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gc(e.variantClassNames, e => gc(e, e => e.split(" ")[0]))
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
      const jc = (0, S.createContext)(null);

      function Cc() {
        const e = (0, S.useContext)(jc);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Pc = (0, S.forwardRef)(({
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
              const t = (0, T.rl)(),
                r = (0, T.jt)(),
                [n, o] = (0, S.useState)([]),
                a = n.length,
                [s, i] = (0, S.useState)(0),
                [d, l] = (0, fc.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [(0, pc.A)(), (0, yc.A)()]),
                c = (0, S.useRef)(0),
                u = (0, S.useRef)(!1),
                f = n[s],
                p = (0, S.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                y = (0, S.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, S.useCallback)((e, t) => {
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
              return (0, S.useEffect)(() => {
                l && (y(l), m(l), l.on("reInit", y).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [l, m]), (0, S.useEffect)(() => {
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
          (0, S.useEffect)(() => {
            o && a && f([{
              status: o,
              background: a,
              align: s
            }])
          }, []);
          const y = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, z.mergeProps)({
              className: _c(c)
            }, y, i),
            h = e ? L.DX : "div";
          return (0, O.jsx)(jc.Provider, {
            value: l,
            children: (0, O.jsx)(h, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...m,
              children: t
            })
          })
        }),
        Oc = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Rc = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Cc();
          if (!e && !n || !n?.status) return null;
          const o = e || Oc[n.status],
            a = ee[o],
            s = (0, z.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, O.jsx)(a, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        Sc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, z.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Nc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? L.DX : "div",
            d = (0, z.mergeProps)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, O.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        }),
        Dc = (0, S.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a,
            emblaApi: s
          } = Cc(), i = (0, z.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, T.UP)(a, n), l = S.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, S.useEffect)(() => {
            l && o(l)
          }, []), s?.on("slidesChanged", () => {
            l && o(l)
          }), (0, O.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, O.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        zc = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, S.useRef)(null),
            s = (0, T.UP)(a, o),
            i = e ? L.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Ll.i)(n, a),
            c = (0, z.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, O.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...d,
            ...c,
            children: t
          })
        }),
        kc = (0, S.forwardRef)((e, t) => {
          const r = (0, z.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, O.jsx)(Fl, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Ic = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? L.DX : "div",
            s = (0, z.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, O.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Tc = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Cc(), a = (0, z.mergeProps)({
            className: xc
          }, t);
          return (0, O.jsx)(mc.K, {
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
        Lc = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Cc(), a = (0, z.mergeProps)({
            className: xc
          }, t);
          return (0, O.jsx)(mc.K, {
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
        Ec = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Cc(), a = (0, z.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, O.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

      function Vc(e) {
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

      function Ac(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ac(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ac(Object(r)).forEach(function(t) {
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
      var Bc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mc(Mc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Bc(l, n, e.defaultVariants) && (r += " " + c);
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
        Fc = Xc({
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
        Gc = Xc({
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
        Zc = Xc({
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
      const Kc = (0, S.createContext)(null);

      function Hc() {
        const e = (0, S.useContext)(Kc);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Wc = (0, S.forwardRef)(({
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
            u = (0, z.mergeProps)({
              className: Gc(c)
            }, d),
            f = e ? L.DX : "div";
          return (0, O.jsx)(Kc.Provider, {
            value: c,
            children: (0, O.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        Uc = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = Hc(), s = e ? L.DX : "div", i = (0, z.mergeProps)({
            className: Zc({
              size: a
            })
          }, n);
          return (0, O.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        $c = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ee[e],
            o = (0, z.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, O.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        Yc = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = Hc(), a = (0, z.mergeProps)({
            className: Fc({
              background: n
            })
          }, t);
          return (0, O.jsx)(xe, {
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
      var Qc = r(90179),
        Jc = "ToastProvider",
        [eu, tu, ru] = (0, _n.N)("Toast"),
        [nu, ou] = (0, Zt.A)("Toast", [ru]),
        [au, su] = nu(Jc),
        iu = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            children: s
          } = e, [i, d] = S.useState(null), [l, c] = S.useState(0), u = S.useRef(!1), f = S.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Jc}\`. Expected non-empty \`string\`.`), (0, O.jsx)(eu.Provider, {
            scope: t,
            children: (0, O.jsx)(au, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: l,
              viewport: i,
              onViewportChange: d,
              onToastAdd: S.useCallback(() => c(e => e + 1), []),
              onToastRemove: S.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      iu.displayName = Jc;
      var du = "ToastViewport",
        lu = ["F8"],
        cu = "toast.viewportPause",
        uu = "toast.viewportResume",
        fu = S.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = lu,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = su(du, r), i = tu(r), d = S.useRef(null), l = S.useRef(null), c = S.useRef(null), u = S.useRef(null), f = (0, Gt.s)(t, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = s.toastCount > 0;
          S.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), S.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (y && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(cu);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(uu);
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
          }, [y, s.isClosePausedRef]);
          const m = S.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Du(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return S.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  zu(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, m]), (0, O.jsxs)(Kt.lg, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: y ? void 0 : "none"
            },
            children: [y && (0, O.jsx)(yu, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                zu(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, O.jsx)(eu.Slot, {
              scope: r,
              children: (0, O.jsx)($t.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), y && (0, O.jsx)(yu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                zu(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      fu.displayName = du;
      var pu = "ToastFocusProxy",
        yu = S.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = su(pu, r);
          return (0, O.jsx)(Nr, {
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
      yu.displayName = pu;
      var mu = "Toast",
        hu = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, Rr.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: mu
          });
          return (0, O.jsx)(Pr.C, {
            present: r || i,
            children: (0, O.jsx)(gu, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, Jt.c)(e.onPause),
              onResume: (0, Jt.c)(e.onResume),
              onSwipeStart: (0, Ft.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Ft.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, Ft.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Ft.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      hu.displayName = mu;
      var [vu, bu] = nu(mu, {
        onClose() {}
      }), gu = S.forwardRef((e, t) => {
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
          ...y
        } = e, m = su(mu, r), [h, v] = S.useState(null), b = (0, Gt.s)(t, e => v(e)), g = S.useRef(null), w = S.useRef(null), x = o || m.duration, _ = S.useRef(0), j = S.useRef(x), C = S.useRef(0), {
          onToastAdd: P,
          onToastRemove: R
        } = m, N = (0, Jt.c)(() => {
          const e = h?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), D = S.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), _.current = (new Date).getTime(), C.current = window.setTimeout(N, e))
        }, [N]);
        S.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                D(j.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - _.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(cu, r), e.addEventListener(uu, t), () => {
              e.removeEventListener(cu, r), e.removeEventListener(uu, t)
            }
          }
        }, [m.viewport, x, d, l, D]), S.useEffect(() => {
          a && !m.isClosePausedRef.current && D(x)
        }, [a, x, m.isClosePausedRef, D]), S.useEffect(() => (P(), () => R()), [P, R]);
        const z = S.useMemo(() => h ? Ru(h) : null, [h]);
        return m.viewport ? (0, O.jsxs)(O.Fragment, {
          children: [z && (0, O.jsx)(wu, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: z
          }), (0, O.jsx)(vu, {
            scope: r,
            onClose: N,
            children: ja.createPortal((0, O.jsx)(eu.ItemSlot, {
              scope: r,
              children: (0, O.jsx)(Kt.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, Ft.mK)(i, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || N(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, O.jsx)($t.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...y,
                  ref: b,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, Ft.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, N()))
                  }),
                  onPointerDown: (0, Ft.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Ft.mK)(e.onPointerMove, e => {
                    if (!g.current) return;
                    const t = e.clientX - g.current.x,
                      r = e.clientY - g.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      a = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
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
                    n ? (w.current = l, Su("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Nu(l, m.swipeDirection, d) ? (w.current = l, Su("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, Ft.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, g.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Nu(t, m.swipeDirection, m.swipeThreshold) ? Su("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Su("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), r.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), m.viewport)
          })]
        }) : null
      }), wu = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = su(mu, t), [a, s] = S.useState(!1), [i, d] = S.useState(!1);
        return function(e = () => {}) {
          const t = (0, Jt.c)(e);
          (0, er.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), S.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, O.jsx)(Cr.Z, {
          asChild: !0,
          children: (0, O.jsx)(Nr, {
            ...n,
            children: a && (0, O.jsxs)(O.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      S.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, O.jsx)($t.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var xu = S.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, O.jsx)($t.sG.div, {
          ...n,
          ref: t
        })
      });
      xu.displayName = "ToastDescription";
      var _u = "ToastAction",
        ju = S.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, O.jsx)(Ou, {
            altText: r,
            asChild: !0,
            children: (0, O.jsx)(Pu, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${_u}\`. Expected non-empty \`string\`.`), null)
        });
      ju.displayName = _u;
      var Cu = "ToastClose",
        Pu = S.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = bu(Cu, r);
          return (0, O.jsx)(Ou, {
            asChild: !0,
            children: (0, O.jsx)($t.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, Ft.mK)(e.onClick, o.onClose)
            })
          })
        });
      Pu.displayName = Cu;
      var Ou = S.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, O.jsx)($t.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Ru(e) {
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
              } else t.push(...Ru(e))
          }
        }), t
      }

      function Su(e, t, r, {
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
        }), n ? (0, $t.hO)(o, a) : o.dispatchEvent(a)
      }
      var Nu = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function Du(e) {
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

      function zu(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var ku = iu,
        Iu = fu,
        Tu = hu,
        Lu = xu,
        Eu = ju,
        Vu = Pu;

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

      function Mu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Au(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qu(qu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bu(e.variantClassNames, e => Bu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Gu = Fu({
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
        Zu = Fu({
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
        Ku = Fu({
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
      const Hu = ({
          testId: e,
          ...t
        }) => (0, O.jsx)(ku, {
          "data-testid": e,
          ...t
        }),
        Wu = (0, S.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
            className: Ku({
              position: r
            })
          }, n);
          return (0, O.jsx)(Iu, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        Uu = (0, S.createContext)(null);

      function $u() {
        const e = (0, S.useContext)(Uu);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Yu = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? L.DX : Tu,
            i = (0, z.mergeProps)({
              className: Zu({
                appearance: n
              })
            }, o);
          return (0, O.jsx)(Uu.Provider, {
            value: {
              appearance: n
            },
            children: (0, O.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        Qu = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? L.DX : Lu,
            s = (0, z.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, O.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Ju = {
          danger: ee.CircleX,
          information: ee.Info,
          success: ee.CircleCheck,
          warning: ee.TriangleAlert,
          avocado: ee.CircleCheck
        },
        ef = (0, S.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = $u(), o = e ? L.DX : Ju[n], a = (0, z.mergeProps)({
            className: Gu({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, O.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        tf = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, O.jsx)(Eu, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, O.jsx)(L.DX, {
              children: t
            }) : (0, O.jsx)(Qc.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        rf = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, a) => {
          const s = (0, z.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, O.jsx)(Vu, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, O.jsx)(L.DX, {
              children: t
            }) : (0, O.jsx)(Fl, {
              size: "SM",
              label: n
            })
          })
        });
      var nf = r(92405);

      function of(e) {
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

      function af(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? af(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = of(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : af(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function df(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var lf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        cf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sf(sf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) lf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return df(e.variantClassNames, e => df(e, e => e.split(" ")[0]))
            }
          }, t
        },
        uf = cf({
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
        ff = cf({
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
        pf = cf({
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
        const e = (0, S.useContext)(mf);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const mf = (0, S.createContext)(null),
        hf = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, z.mergeProps)({
              className: pf({
                size: n
              })
            }, o),
            i = r ? L.DX : "ol";
          return (0, O.jsx)(mf.Provider, {
            value: {
              size: n
            },
            children: (0, O.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        vf = (0, S.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, S.useRef)(null),
            {
              size: i
            } = yf(),
            {
              itemProps: d
            } = (0, nf.I)({
              isCurrent: e,
              children: t
            }, s),
            l = r ? L.DX : "a",
            c = (0, z.mergeProps)({
              className: (0, J.clsx)(uf({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, O.jsx)("li", {
            className: ff({
              size: i
            }),
            ref: a,
            children: (0, O.jsx)(l, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        bf = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ee[e];
          return (0, O.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        gf = (0, S.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, S.useState)(r), {
            size: d
          } = yf(), l = (0, z.mergeProps)({
            className: ff({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, O.jsx)("li", {
            ref: a,
            ...l,
            children: (0, O.jsxs)(Os, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, O.jsx)(Rs, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, O.jsx)(Ds, {
                children: (0, O.jsx)(zs, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, O.jsx)(ks, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        wf = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? L.DX : Is,
            s = (0, z.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, O.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

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

      function Cf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Of = (e => {
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
            for (var [l, c] of e.compoundVariants) Pf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cf(e.variantClassNames, e => Cf(e, e => e.split(" ")[0]))
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
      const Rf = (0, S.createContext)(null);

      function Sf() {
        const e = (0, S.useContext)(Rf);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Nf = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? L.DX : "div",
            d = (0, z.mergeProps)({
              className: Of({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, O.jsx)(Rf.Provider, {
            value: {
              type: o
            },
            children: (0, O.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...d
            })
          })
        }),
        Df = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, z.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, O.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        zf = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ko[e],
            o = (0, z.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, O.jsx)(n, {
            ref: r,
            ...o
          })
        }),
        kf = () => {
          const e = (0, T.Ub)(z.breakpoints.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        If = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
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

      function Ef(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Tf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lf(Object(r)).forEach(function(t) {
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
        Mf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ef(Ef({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
      const qf = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, O.jsx)(ba, {
            ref: r,
            ...n
          })
        }),
        Bf = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, O.jsx)(ga, {
            ref: r,
            ...n
          })
        }),
        Xf = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, O.jsx)(wa, {
            ref: r,
            ...n
          })
        }),
        Ff = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, T.rl)(),
            o = (0, z.mergeProps)({
              "data-testid": e,
              className: Mf({
                isTouchDevice: n
              })
            }, t);
          return (0, O.jsx)(xa, {
            ref: r,
            ...o
          })
        }),
        Gf = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(_a, {
            ref: r,
            ...n
          })
        });

      function Zf(e) {
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

      function Hf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Kf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Zf(o)) in n ? Object.defineProperty(n, o, {
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
        $f = e => {
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
        },
        Yf = $f({
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
        Qf = $f({
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
      const Jf = (0, S.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, S.createRef)(),
          dialogSpringRef: (0, Xt.$9)(),
          overlaySpringRef: (0, Xt.$9)()
        }),
        ep = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, T.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, T.ZC)(d);
          return (0, O.jsx)(Jf.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, S.useId)(),
              descriptionId: (0, S.useId)(),
              triggerRef: (0, S.useRef)(null),
              dialogSpringRef: (0, Xt.U2)(),
              overlaySpringRef: (0, Xt.U2)()
            },
            children: (0, O.jsx)(tp, {
              ...i
            })
          })
        },
        tp = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, S.useContext)(Jf), n = (0, z.mergeProps)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, O.jsx)(eo.bL, {
            ...n
          })
        },
        rp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, S.useContext)(Jf), a = (0, T.UP)(o, r), s = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, O.jsx)(eo.l9, {
            ...s,
            ref: a
          })
        }),
        np = e => (0, O.jsx)(eo.ZL, {
          forceMount: !0,
          ...e
        }),
        op = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = (0, S.useContext)(Jf), s = If(), i = (0, T.jt)(), d = (0, Xt.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Xt.$W.stiff,
            immediate: i || a
          }), l = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, Xt.CS)(eo.hJ);
          return (0, S.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, O.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        ap = (0, S.forwardRef)(({
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
            onCloseTransitionComplete: y,
            dialogSpringRef: m,
            overlaySpringRef: h
          } = (0, S.useContext)(Jf), v = (0, T.rl)(), b = (0, T.jt)(), g = (0, S.useRef)(null), w = kf(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = If(),
              s = kf(),
              i = (0, S.useRef)();
            return {
              bindDrag: (0, st.useDrag)(({
                velocity: [, d],
                offset: [, l],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: y
              }) => {
                const {
                  height: m
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
                  }(y, c)), (!i.current || l < -70) && u(), i.current) {
                  const e = 100 * (m - l) / m;
                  r.start({
                    ...a(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * m || d > .5 && c > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: Xt.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: Xt.$W.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: Xt.$W.stiff
                }), r.start({
                  ...a(100),
                  immediate: !1,
                  config: Xt.$W.stiff
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
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: y
          }), _ = (0, Xt.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: Xt.$W.stiff,
            ref: m,
            immediate: b || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : y?.()
            }
          });
          (0, S.useEffect)(() => {
            m.start()
          }, [s]);
          const j = (0, T.UP)(g, a),
            C = v && !b && !n && x(),
            P = (0, z.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, o),
            R = (0, Xt.CS)(eo.UC);
          return _((t, r) => r ? (0, O.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, O.jsx)(R, {
              forceMount: !0,
              ref: j,
              ...P,
              style: t,
              children: e
            })
          }) : null)
        }),
        sp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, O.jsx)(eo.hE, {
            ref: r,
            ...n
          })
        }),
        ip = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(eo.VY, {
            ref: r,
            ...n
          })
        }),
        dp = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, O.jsxs)(qf, {
            ref: n,
            ...o,
            children: [(0, O.jsx)(Bf, {
              className: "foundry_xov33ni",
              children: e
            }), (0, O.jsx)(Xf, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, O.jsx)(Ff, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        lp = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            a = e ? L.DX : "div";
          return (0, O.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        cp = (0, S.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
              "data-testid": r,
              className: Yf({
                align: e
              })
            }, n),
            s = t ? L.DX : "header";
          return (0, O.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        up = (0, S.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
            "data-testid": e,
            className: Qf({
              appearance: t
            })
          }, r);
          return (0, O.jsx)(eo.hE, {
            ref: n,
            ...o
          })
        }),
        fp = (0, S.forwardRef)((e, t) => {
          const r = (0, z.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, O.jsx)(mc.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        pp = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            a = t ? (0, O.jsx)(L.DX, {
              ref: n,
              ...o
            }) : (0, O.jsx)(Fl, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, O.jsx)(eo.bm, {
            asChild: !0,
            children: a
          })
        }),
        yp = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            a = e ? L.DX : "div";
          return (0, O.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        mp = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            a = e ? L.DX : "footer";
          return (0, O.jsx)(a, {
            ref: n,
            ...o
          })
        });
      var hp = r(93367),
        vp = r(4031),
        bp = r(2559),
        gp = "Avatar",
        [wp, xp] = (0, hp.A)(gp),
        [_p, jp] = wp(gp),
        Cp = S.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = S.useState("idle");
          return (0, O.jsx)(_p, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: a,
            children: (0, O.jsx)(vp.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      Cp.displayName = gp;
      var Pp = "AvatarImage",
        Op = S.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...a
          } = e, s = jp(Pp, r), i = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, bp.z)(),
              o = S.useRef(null),
              a = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, i] = S.useState(() => Sp(a, e));
            return (0, er.N)(() => {
              i(Sp(a, e))
            }, [a, e]), (0, er.N)(() => {
              const e = e => () => {
                i(e)
              };
              if (!a) return;
              const n = e("loaded"),
                o = e("error");
              return a.addEventListener("load", n), a.addEventListener("error", o), t && (a.referrerPolicy = t), "string" == typeof r && (a.crossOrigin = r), () => {
                a.removeEventListener("load", n), a.removeEventListener("error", o)
              }
            }, [a, r, t]), s
          }(n, a), d = (0, Jt.c)(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return (0, er.N)(() => {
            "idle" !== i && d(i)
          }, [i, d]), "loaded" === i ? (0, O.jsx)(vp.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      Op.displayName = Pp;
      var Rp = "AvatarFallback";

      function Sp(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      S.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = jp(Rp, r), [s, i] = S.useState(void 0 === n);
        return S.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, O.jsx)(vp.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Rp;
      var Np = Cp,
        Dp = Op;

      function zp(e) {
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

      function kp(e, t) {
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
          t % 2 ? kp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = zp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kp(Object(r)).forEach(function(t) {
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
      var Lp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ep = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ip(Ip({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Lp(l, n, e.defaultVariants) && (r += " " + c);
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
        },
        Vp = Ep({
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
        Ap = "var(--foundry_v912w22)",
        Mp = "var(--foundry_v912w23)",
        qp = Ep({
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
        Bp = Ep({
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
        Xp = "var(--foundry_v912w21)",
        Fp = "var(--foundry_v912w20)",
        Gp = Ep({
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
      const Zp = (0, S.createContext)(null);

      function Kp() {
        const e = (0, S.useContext)(Zp);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Hp = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, z.mergeProps)({
            "data-testid": r,
            "aria-disabled": a,
            className: Vp({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, O.jsx)(Zp.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, O.jsx)(Np, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        Wp = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = Kp(), [i, d] = (0, S.useState)(!1);
          (0, S.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, z.mergeProps)({
              className: qp({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, O.jsx)("span", {
            className: Bp({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, O.jsx)(Dp, {
              ref: o,
              ...c
            })
          })
        }),
        Up = (0, S.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, S.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = Kp(),
            d = s || "online",
            l = (0, T.UP)(o, n),
            c = (0, z.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Gp({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, N.DI)({
                [Fp]: t?.online,
                [Xp]: t?.offline,
                [Ap]: t?.away,
                [Mp]: t?.busy
              })
            }, r);
          return (0, O.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function $p(e) {
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

      function Yp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = $p(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ey = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ty = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qp(Qp({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ey(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jp(e.variantClassNames, e => Jp(e, e => e.split(" ")[0]))
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
      const ry = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? L.DX : "nav";
          return (0, O.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        ny = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? L.DX : "div";
          return (0, O.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        oy = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, T.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, Ll.i)(o, s),
            c = (0, z.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, J.clsx)(ty({
                isActive: r
              }))
            }, d),
            u = e ? L.DX : "a";
          return (0, O.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        ay = (0, S.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, O.jsx)(oy, {
            ref: n,
            ...o,
            children: (0, O.jsx)(ee.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        sy = (0, S.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, O.jsx)(oy, {
            ref: n,
            ...o,
            children: (0, O.jsx)(ee.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        iy = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, z.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            a = e ? L.DX : "span";
          return (0, O.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        dy = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? L.DX : "div";
          return (0, O.jsx)(a, {
            ...o,
            children: t
          })
        },
        ly = (0, S.createContext)(null);

      function cy() {
        const e = (0, S.useContext)(ly);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const uy = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, S.useId)(),
            a = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? L.DX : "div";
          return (0, O.jsx)(ly.Provider, {
            value: {
              labelId: o
            },
            children: (0, O.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        fy = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = cy(), s = (0, z.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? L.DX : "label";
          return (0, O.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: t
          })
        }),
        py = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = cy(), s = (0, z.mergeProps)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? L.DX : Us;
          return (0, O.jsxs)(i, {
            ...s,
            children: [(0, O.jsxs)(Js, {
              ref: o,
              children: [(0, O.jsx)(ei, {
                placeholder: r
              }), (0, O.jsx)(ti, {})]
            }), (0, O.jsx)(di, {
              children: (0, O.jsx)($s, {
                children: (0, O.jsx)(Qs, {
                  children: t
                })
              })
            })]
          })
        }),
        yy = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
              "data-testid": r
            }, n),
            s = e ? L.DX : ai;
          return (0, O.jsx)(s, {
            ...a,
            ref: o,
            children: (0, O.jsx)(si, {
              children: t
            })
          })
        }),
        my = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            s = e ? L.DX : "p";
          return (0, O.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        });
      var hy = "rovingFocusGroup.onEntryFocus",
        vy = {
          bubbles: !1,
          cancelable: !0
        },
        by = "RovingFocusGroup",
        [gy, wy, xy] = (0, _n.N)(by),
        [_y, jy] = (0, Zt.A)(by, [xy]),
        [Cy, Py] = _y(by),
        Oy = S.forwardRef((e, t) => (0, O.jsx)(gy.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, O.jsx)(gy.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, O.jsx)(Ry, {
              ...e,
              ref: t
            })
          })
        }));
      Oy.displayName = by;
      var Ry = S.forwardRef((e, t) => {
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
          } = e, f = S.useRef(null), p = (0, Gt.s)(t, f), y = (0, wn.jH)(a), [m, h] = (0, Rr.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: by
          }), [v, b] = S.useState(!1), g = (0, Jt.c)(l), w = wy(r), x = S.useRef(!1), [_, j] = S.useState(0);
          return S.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(hy, g), () => e.removeEventListener(hy, g)
          }, [g]), (0, O.jsx)(Cy, {
            scope: r,
            orientation: n,
            dir: y,
            loop: o,
            currentTabStopId: m,
            onItemFocus: S.useCallback(e => h(e), [h]),
            onItemShiftTab: S.useCallback(() => b(!0), []),
            onFocusableItemAdd: S.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: S.useCallback(() => j(e => e - 1), []),
            children: (0, O.jsx)($t.sG.div, {
              tabIndex: v || 0 === _ ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Ft.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, Ft.mK)(e.onFocus, e => {
                const t = !x.current;
                if (e.target === e.currentTarget && t && !v) {
                  const t = new CustomEvent(hy, vy);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    zy(n, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, Ft.mK)(e.onBlur, () => b(!1))
            })
          })
        }),
        Sy = "RovingFocusGroupItem",
        Ny = S.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Ht.B)(), l = a || d, c = Py(Sy, r), u = c.currentTabStopId === l, f = wy(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: y,
            currentTabStopId: m
          } = c;
          return S.useEffect(() => {
            if (n) return p(), () => y()
          }, [n, p, y]), (0, O.jsx)(gy.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, O.jsx)($t.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, Ft.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, Ft.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, Ft.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : Dy[n]
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
                  setTimeout(() => zy(a))
                }
                var r, n
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: u,
                hasTabStop: null != m
              }) : s
            })
          })
        });
      Ny.displayName = Sy;
      var Dy = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function zy(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var ky = Oy,
        Iy = Ny,
        Ty = "Toggle",
        Ly = S.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, Rr.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: Ty
          });
          return (0, O.jsx)($t.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, Ft.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      Ly.displayName = Ty;
      var Ey = "ToggleGroup",
        [Vy, Ay] = (0, Zt.A)(Ey, [jy]),
        My = jy(),
        qy = S.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, O.jsx)(Fy, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, O.jsx)(Gy, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Ey}\``)
        });
      qy.displayName = Ey;
      var [By, Xy] = Vy(Ey), Fy = S.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, Rr.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: Ey
        });
        return (0, O.jsx)(By, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: S.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: S.useCallback(() => i(""), [i]),
          children: (0, O.jsx)(Hy, {
            ...a,
            ref: t
          })
        })
      }), Gy = S.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, Rr.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: Ey
        }), d = S.useCallback(e => i((t = []) => [...t, e]), [i]), l = S.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, O.jsx)(By, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, O.jsx)(Hy, {
            ...a,
            ref: t
          })
        })
      });
      qy.displayName = Ey;
      var [Zy, Ky] = Vy(Ey), Hy = S.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = My(r), c = (0, wn.jH)(s), u = {
          role: "group",
          dir: c,
          ...d
        };
        return (0, O.jsx)(Zy, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, O.jsx)(ky, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, O.jsx)($t.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, O.jsx)($t.sG.div, {
            ...u,
            ref: t
          })
        })
      }), Wy = "ToggleGroupItem", Uy = S.forwardRef((e, t) => {
        const r = Xy(Wy, e.__scopeToggleGroup),
          n = Ky(Wy, e.__scopeToggleGroup),
          o = My(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = S.useRef(null);
        return n.rovingFocus ? (0, O.jsx)(Iy, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, O.jsx)($y, {
            ...i,
            ref: t
          })
        }) : (0, O.jsx)($y, {
          ...i,
          ref: t
        })
      });
      Uy.displayName = Wy;
      var $y = S.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, a = Xy(Wy, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, O.jsx)(Ly, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? a.onItemActivate(n) : a.onItemDeactivate(n)
            }
          })
        }),
        Yy = qy,
        Qy = Uy;

      function Jy(e) {
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
            var n, o, a;
            n = e, o = t, a = r[t], (o = Jy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
        am = "var(--foundry_zxwkyk2)",
        sm = "var(--foundry_zxwkyk3)",
        im = om({
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
        dm = om({
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
        lm = om({
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
        cm = "var(--foundry_zxwkyk1)",
        um = "var(--foundry_zxwkyk0)",
        fm = om({
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
      const pm = (0, S.createContext)(null);

      function ym() {
        const e = (0, S.useContext)(pm);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const mm = (0, S.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
            "data-testid": e,
            className: im({
              size: t
            }),
            type: r
          }, n);
          return (0, O.jsx)(pm.Provider, {
            value: {
              size: t
            },
            children: (0, O.jsx)(Yy, {
              ref: o,
              ...a
            })
          })
        }),
        hm = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = ym(), o = (0, z.mergeProps)({
            "data-testid": e,
            className: dm({
              size: n
            })
          }, t);
          return (0, O.jsx)(Qy, {
            ref: r,
            ...o
          })
        }),
        vm = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = ym(), o = ko[e];
          return (0, O.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        bm = (0, S.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const a = (0, z.mergeProps)({
            "data-testid": e,
            className: fm({
              status: r
            }),
            style: (0, N.DI)({
              [um]: t?.online,
              [cm]: t?.offline,
              [am]: t?.away,
              [sm]: t?.busy
            })
          }, n);
          return (0, O.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        gm = (0, S.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = ym(), a = (0, z.mergeProps)({
            "data-testid": e,
            className: lm({
              variant: t,
              size: o
            })
          }, r);
          return (0, O.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var wm = "Popover",
        [xm, _m] = (0, Zt.A)(wm, [or]),
        jm = or(),
        [Cm, Pm] = xm(wm),
        Om = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !1
          } = e, i = jm(t), d = S.useRef(null), [l, c] = S.useState(!1), [u, f] = (0, Rr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: wm
          });
          return (0, O.jsx)(wr, {
            ...i,
            children: (0, O.jsx)(Cm, {
              scope: t,
              contentId: (0, Ht.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: S.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: S.useCallback(() => c(!0), []),
              onCustomAnchorRemove: S.useCallback(() => c(!1), []),
              modal: s,
              children: r
            })
          })
        };
      Om.displayName = wm;
      var Rm = "PopoverAnchor",
        Sm = S.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Pm(Rm, r), a = jm(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return S.useEffect(() => (s(), () => i()), [s, i]), (0, O.jsx)(xr, {
            ...a,
            ...n,
            ref: t
          })
        });
      Sm.displayName = Rm;
      var Nm = "PopoverTrigger",
        Dm = S.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Pm(Nm, r), a = jm(r), s = (0, Gt.s)(t, o.triggerRef), i = (0, O.jsx)($t.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Gm(o.open),
            ...n,
            ref: s,
            onClick: (0, Ft.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, O.jsx)(xr, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      Dm.displayName = Nm;
      var zm = "PopoverPortal",
        [km, Im] = xm(zm, {
          forceMount: void 0
        }),
        Tm = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Pm(zm, t);
          return (0, O.jsx)(km, {
            scope: t,
            forceMount: r,
            children: (0, O.jsx)(Pr.C, {
              present: r || a.open,
              children: (0, O.jsx)(Cr.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Tm.displayName = zm;
      var Lm = "PopoverContent",
        Em = S.forwardRef((e, t) => {
          const r = Im(Lm, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Pm(Lm, e.__scopePopover);
          return (0, O.jsx)(Pr.C, {
            present: n || a.open,
            children: a.modal ? (0, O.jsx)(Am, {
              ...o,
              ref: t
            }) : (0, O.jsx)(Mm, {
              ...o,
              ref: t
            })
          })
        });
      Em.displayName = Lm;
      var Vm = (0, Or.TL)("PopoverContent.RemoveScroll"),
        Am = S.forwardRef((e, t) => {
          const r = Pm(Lm, e.__scopePopover),
            n = S.useRef(null),
            o = (0, Gt.s)(t, n),
            a = S.useRef(!1);
          return S.useEffect(() => {
            const e = n.current;
            if (e) return (0, Oa.Eq)(e)
          }, []), (0, O.jsx)(Ra.A, {
            as: Vm,
            allowPinchZoom: !0,
            children: (0, O.jsx)(qm, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Ft.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Ft.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Ft.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        Mm = S.forwardRef((e, t) => {
          const r = Pm(Lm, e.__scopePopover),
            n = S.useRef(!1),
            o = S.useRef(!1);
          return (0, O.jsx)(qm, {
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
        qm = S.forwardRef((e, t) => {
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
          } = e, f = Pm(Lm, r), p = jm(r);
          return (0, Ca.Oh)(), (0, O.jsx)(Pa.n, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, O.jsx)(Kt.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, O.jsx)(_r, {
                "data-state": Gm(f.open),
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
        Bm = "PopoverClose",
        Xm = S.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Pm(Bm, r);
          return (0, O.jsx)($t.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, Ft.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      Xm.displayName = Bm;
      var Fm = S.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = jm(r);
        return (0, O.jsx)(jr, {
          ...o,
          ...n,
          ref: t
        })
      });

      function Gm(e) {
        return e ? "open" : "closed"
      }
      Fm.displayName = "PopoverArrow";
      var Zm = Om,
        Km = Sm,
        Hm = Dm,
        Wm = Tm,
        Um = Em,
        $m = Xm,
        Ym = Fm;

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

      function eh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jm(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Qm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function th(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nh = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = eh(eh({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return th(e.variantClassNames, e => th(e, e => e.split(" ")[0]))
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
      const oh = (0, S.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        ah = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, a] = (0, T.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, z.mergeProps)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, O.jsx)(oh.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, O.jsx)(Zm, {
              ...s
            })
          })
        },
        sh = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, O.jsx)(Hm, {
            ref: r,
            ...n
          })
        }),
        ih = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        dh = (0, S.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, S.useContext)(oh), s = (0, S.useRef)(null), i = (0, T.UP)(s, o), {
            buttonProps: d
          } = (0, T.sL)(n, s), l = (0, z.mergeProps)({
            "data-testid": r,
            className: nh({
              size: t
            })
          }, d), c = a ? ee.ChevronUp : ee.ChevronDown;
          return (0, O.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, O.jsx)(c, {
              label: "",
              size: ih[t]
            })]
          })
        }),
        lh = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e
          }, t);
          return (0, O.jsx)(Km, {
            ref: r,
            ...n
          })
        }),
        ch = (0, S.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, O.jsx)(Um, {
            ref: n,
            ...o
          })
        }),
        uh = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, O.jsx)(Ym, {
            ref: r,
            ...n
          })
        }),
        fh = e => (0, O.jsx)(Wm, {
          ...e
        }),
        ph = e => (0, O.jsx)($m, {
          ...e
        });

      function yh(e) {
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

      function mh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mh(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yh(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hh(hh({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vh(e.variantClassNames, e => vh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wh = "var(--foundry_rmorls2)",
        xh = gh({
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
        _h = "var(--foundry_rmorls0)",
        jh = gh({
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
        Ch = "var(--foundry_rmorls3)",
        Ph = "var(--foundry_rmorls1)",
        Oh = gh({
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
        Rh = "Progress",
        [Sh, Nh] = (0, hp.A)(Rh),
        [Dh, zh] = Sh(Rh),
        kh = S.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = Lh,
            ...s
          } = e;
          !o && 0 !== o || Ah(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Ah(o) ? o : 100;
          null === n || Mh(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = Mh(n, i) ? n : null,
            l = Vh(d) ? a(d, i) : void 0;
          return (0, O.jsx)(Dh, {
            scope: r,
            value: d,
            max: i,
            children: (0, O.jsx)(vp.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Vh(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Eh(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        });
      kh.displayName = Rh;
      var Ih = "ProgressIndicator",
        Th = S.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = zh(Ih, r);
          return (0, O.jsx)(vp.sG.div, {
            "data-state": Eh(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function Lh(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Eh(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function Vh(e) {
        return "number" == typeof e
      }

      function Ah(e) {
        return Vh(e) && !isNaN(e) && e > 0
      }

      function Mh(e, t) {
        return Vh(e) && !isNaN(e) && e <= t && e >= 0
      }
      Th.displayName = Ih;
      var qh = kh,
        Bh = Th;
      const Xh = (0, S.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Fh = (0, S.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, O.jsx)(Xh.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, O.jsx)(Gh, {
              ...n,
              ref: o
            })
          })
        }),
        Gh = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, z.mergeProps)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? L.DX : "div";
          return (0, O.jsx)(a, {
            ...o,
            ref: n
          })
        }),
        Zh = (0, S.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: a,
            size: s
          } = (0, S.useContext)(Xh), i = (0, z.mergeProps)({
            "data-testid": e,
            className: jh({
              size: s
            }),
            value: o,
            max: a,
            style: (0, N.DI)({
              [Ch]: t
            }),
            "data-track": !0
          }, r);
          return (0, O.jsx)(qh, {
            ref: n,
            ...i
          })
        }),
        Kh = (0, S.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, S.useContext)(Xh), i = s ? "-100%" : `-${100-a}%`, d = (0, z.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, N.DI)({
              [_h]: i,
              [Ph]: `${t}ms`,
              [wh]: r
            })
          }, n);
          return (0, O.jsx)(Bh, {
            ref: o,
            ...d
          })
        }),
        Hh = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, S.useContext)(Xh), a = (0, z.mergeProps)({
            "data-testid": t,
            className: xh({
              size: o
            }),
            "aria-hidden": !0
          }, r), s = e ? L.DX : "span";
          return (0, O.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Wh = (0, S.forwardRef)(({
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
          } = (0, S.useContext)(Xh), l = (0, z.mergeProps)({
            "data-testid": e,
            className: xh({
              size: s
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, O.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, O.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, O.jsx)("span", {
              className: Oh({
                size: s
              }),
              children: "%"
            })]
          }) : (0, O.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", a]
          })
        })
    },
    91497(e, t, r) {
      r.d(t, {
        b: () => i
      });
      var n = r(93082),
        o = r(34376),
        a = r(39793),
        s = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(o.bL, {
              children: t
            })]
          })
        };
      s.displayName = "AccessibleIcon";
      var i = s
    },
    2754(e, t, r) {
      r.d(t, {
        N: () => d
      });
      var n = r(93082),
        o = r(31201),
        a = r(50446),
        s = r(2976),
        i = r(39793);

      function d(e) {
        const t = e + "CollectionProvider",
          [r, d] = (0, o.A)(t),
          [l, c] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), a = n.useRef(new Map).current;
            return (0, i.jsx)(l, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r
            })
          };
        u.displayName = t;
        const f = e + "CollectionSlot",
          p = (0, s.TL)(f),
          y = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = c(f, r), s = (0, a.s)(t, o.collectionRef);
            return (0, i.jsx)(p, {
              ref: s,
              children: n
            })
          });
        y.displayName = f;
        const m = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          v = (0, s.TL)(m),
          b = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...s
            } = e, d = n.useRef(null), l = (0, a.s)(t, d), u = c(m, r);
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
        return b.displayName = m, [{
          Provider: u,
          Slot: y,
          ItemSlot: b
        }, function(t) {
          const r = c(e + "CollectionConsumer", t);
          return n.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${h}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }, d]
      }
      Map
    }
  }
]);