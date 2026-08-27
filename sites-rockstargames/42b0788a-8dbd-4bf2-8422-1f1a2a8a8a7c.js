try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "42b0788a-8dbd-4bf2-8422-1f1a2a8a8a7c", e._sentryDebugIdIdentifier = "sentry-dbid-42b0788a-8dbd-4bf2-8422-1f1a2a8a8a7c")
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
  [9555], {
    18781(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => P,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => w,
        Badge: () => m,
        Body: () => zt,
        Breadcrumbs: () => h,
        Button: () => Ye,
        Checkbox: () => d,
        ChipGroup: () => _,
        Code: () => Tt,
        Dialog: () => C,
        Display: () => Et,
        Divider: () => vt,
        Dropdown: () => a,
        Heading: () => At,
        IconButton: () => it,
        Label: () => qt,
        Lightbox: () => o,
        Loader: () => Ot,
        Pagination: () => x,
        PlatformButton: () => R,
        Popover: () => j,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => Ae,
        Switch: () => s,
        Tag: () => y,
        Text: () => Bt,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => Ft,
        Toast: () => b,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => zo,
        Content: () => Io,
        Portal: () => Lo,
        Root: () => No,
        Trigger: () => ko,
        useTooltipContext: () => Do
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Bs,
        Close: () => Ws,
        Content: () => As,
        Controls: () => Zs,
        CssVars: () => Ys,
        Download: () => $s,
        Image: () => Fs,
        Keyboard: () => Gs,
        LightboxContext: () => Ds,
        OpenIcon: () => Ts,
        Overlay: () => Vs,
        Portal: () => Es,
        Reset: () => Us,
        Root: () => Ns,
        RootImplContext: () => ks,
        Thumbnail: () => Ls,
        Trigger: () => zs,
        Zoom: () => Ks,
        ZoomPan: () => Ms
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => fl,
        Description: () => gl,
        Hint: () => Cl,
        Label: () => ml,
        Option: () => wl,
        OptionIcon: () => _l,
        OptionText: () => xl,
        Portal: () => jl,
        Root: () => ul,
        ScrollArea: () => vl,
        StatusIcon: () => Pl,
        StatusRoot: () => Ol,
        StatusText: () => Sl,
        Trigger: () => yl,
        TriggerIcon: () => hl,
        TriggerText: () => bl,
        Viewport: () => pl,
        useDropdownContext: () => cl
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Gl,
        Input: () => Zl,
        Label: () => Xl,
        Root: () => Bl,
        useSwitchContext: () => Fl
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Ul,
        CheckMD: () => Wl,
        CheckXL: () => $l,
        DashLG: () => Ql,
        DashMD: () => Yl,
        DashXL: () => Jl
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => hc,
        ErrorText: () => mc,
        Group: () => wc,
        GroupDescription: () => _c,
        GroupErrorText: () => Oc,
        GroupItems: () => jc,
        GroupLabel: () => xc,
        Input: () => yc,
        Label: () => bc,
        Root: () => vc,
        useGroupContext: () => Cc
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Hc,
        Hint: () => Fc,
        Input: () => qc,
        Label: () => Mc,
        Root: () => Ac,
        RootContext: () => Ec,
        StatusIcon: () => Zc,
        StatusRoot: () => Bc,
        StatusText: () => Xc,
        useTextAreaContext: () => Vc
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => hu,
        DotMD: () => bu,
        DotXL: () => mu
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => iu,
        Input: () => Cu,
        Label: () => su,
        Option: () => gu,
        OptionDescription: () => xu,
        OptionLabel: () => wu,
        Options: () => au,
        Root: () => ou,
        StatusIcon: () => lu,
        StatusRoot: () => du,
        StatusText: () => cu,
        useRadioGroupContext: () => nu
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Xu,
        Control: () => Fu,
        Description: () => Ku,
        Hint: () => Hu,
        Icon: () => Zu,
        Input: () => Bu,
        Label: () => qu,
        PasswordButton: () => Gu,
        Root: () => Mu,
        StatusIcon: () => Uu,
        StatusRoot: () => Wu,
        StatusText: () => $u
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Cf,
        CloseButton: () => Rf,
        Description: () => jf,
        ErrorText: () => Sf,
        Footer: () => Pf,
        Header: () => gf,
        Icon: () => xf,
        Link: () => Of,
        Root: () => mf,
        RootContext: () => bf,
        Title: () => _f,
        iconStatusMap: () => wf,
        useAlertContext: () => hf
      });
      var v = {};
      r.r(v), r.d(v, {
        Alert: () => Gf,
        CloseButton: () => Uf,
        Description: () => Xf,
        Icon: () => Zf,
        Link: () => Wf,
        PaginationCounter: () => Jf,
        PaginationNav: () => $f,
        PaginationNextButton: () => Yf,
        PaginationPrevButton: () => Qf,
        PaginationViewport: () => Kf,
        Root: () => Ff,
        RootContext: () => qf,
        iconStatusMap: () => Bf,
        useAlertBannerContext: () => Hf
      });
      var y = {};
      r.r(y), r.d(y, {
        CloseButton: () => vp,
        Icon: () => pp,
        Label: () => fp,
        Root: () => up,
        RootContext: () => lp,
        useTagContext: () => cp
      });
      var b = {};
      r.r(b), r.d(b, {
        Action: () => mv,
        CloseButton: () => gv,
        Description: () => yv,
        Icon: () => hv,
        Provider: () => cv,
        Root: () => vv,
        RootContext: () => fv,
        Viewport: () => uv,
        iconAppearanceMap: () => bv,
        useToastContext: () => pv
      });
      var h = {};
      r.r(h), r.d(h, {
        Icon: () => Lv,
        Item: () => zv,
        OverflowMenu: () => Tv,
        OverflowMenuItem: () => Ev,
        Root: () => Iv,
        RootContext: () => kv,
        useBreadcrumbsContext: () => Nv
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => Kv,
        Label: () => Gv,
        Root: () => Xv,
        useBadgeContext: () => Zv
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => sy,
        Root: () => ry,
        Scrollbar: () => oy,
        Thumb: () => ay,
        Viewport: () => ny
      });
      var C = {};
      r.r(C), r.d(C, {
        ActionArea: () => Ny,
        CloseButton: () => Dy,
        Content: () => wy,
        Description: () => _y,
        Footer: () => ky,
        Header: () => Py,
        HeaderButton: () => Ry,
        HeaderTitle: () => Sy,
        Layout: () => Oy,
        Overlay: () => Cy,
        Portal: () => gy,
        Root: () => by,
        ScrollArea: () => jy,
        Title: () => xy,
        Trigger: () => my
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => cb,
        Root: () => lb,
        StatusIndicator: () => ub,
        useAvatarContext: () => db
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => jb,
        Dropdown: () => Db,
        DropdownLabel: () => Rb,
        Ellipsis: () => _b,
        Item: () => Cb,
        Label: () => kb,
        Next: () => xb,
        Option: () => Nb,
        Pages: () => gb,
        Prev: () => wb,
        ResultsPerPage: () => Sb,
        Root: () => mb
      });
      var _ = {};
      r.r(_), r.d(_, {
        Icon: () => Mh,
        Item: () => Ah,
        Label: () => Hh,
        Root: () => Vh,
        StatusIndicator: () => qh,
        useChipGroupContext: () => Eh
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => Nm,
        Arrow: () => Im,
        Close: () => Lm,
        Content: () => km,
        Portal: () => zm,
        Root: () => Pm,
        RootContext: () => Om,
        Trigger: () => Sm,
        TriggerButton: () => Dm
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => bg,
        Label: () => hg,
        Root: () => pg,
        Track: () => yg,
        UnitLabel: () => mg
      });
      var P = {};
      r.r(P), r.d(P, {
        Content: () => kC,
        Header: () => SC,
        Icon: () => DC,
        Item: () => PC,
        Root: () => jC,
        Trigger: () => RC,
        TriggerIcon: () => NC
      });
      var S = {};
      r.r(S), r.d(S, {
        PC: () => TC,
        PS4: () => zC,
        PS5: () => LC,
        XboxOne: () => EC,
        XboxSeriesXS: () => VC
      });
      var R = {};
      r.r(R), r.d(R, {
        PlatformButton: () => ZC
      });
      var D = r(39793),
        N = r(14037),
        k = r(93082),
        I = r(64001),
        z = (r(71849), {
          color: {
            grey: {
              static: {
                25: "var(--foundry-global-color-grey-static-25-05dae190)",
                50: "var(--foundry-global-color-grey-static-50-767699a7)",
                75: "var(--foundry-global-color-grey-static-75-a2172132)",
                100: "var(--foundry-global-color-grey-static-100-01811cdb)",
                200: "var(--foundry-global-color-grey-static-200-8230761c)",
                300: "var(--foundry-global-color-grey-static-300-60d2d1b8)",
                400: "var(--foundry-global-color-grey-static-400-b9847fcb)",
                500: "var(--foundry-global-color-grey-static-500-c92b4dd8)",
                600: "var(--foundry-global-color-grey-static-600-048e9067)",
                700: "var(--foundry-global-color-grey-static-700-6ebcd800)",
                800: "var(--foundry-global-color-grey-static-800-35f77231)",
                900: "var(--foundry-global-color-grey-static-900-a85ec23d)"
              },
              adaptive: {
                25: "var(--foundry-global-color-grey-adaptive-25-4181979c)",
                50: "var(--foundry-global-color-grey-adaptive-50-2026f5f9)",
                75: "var(--foundry-global-color-grey-adaptive-75-e832421c)",
                100: "var(--foundry-global-color-grey-adaptive-100-ed36bf65)",
                200: "var(--foundry-global-color-grey-adaptive-200-fb12d031)",
                300: "var(--foundry-global-color-grey-adaptive-300-02700b85)",
                400: "var(--foundry-global-color-grey-adaptive-400-54ccd69e)",
                500: "var(--foundry-global-color-grey-adaptive-500-ddc3fb78)",
                600: "var(--foundry-global-color-grey-adaptive-600-e8d9db01)",
                700: "var(--foundry-global-color-grey-adaptive-700-e3418aa4)",
                800: "var(--foundry-global-color-grey-adaptive-800-59c03dd7)",
                900: "var(--foundry-global-color-grey-adaptive-900-bbecd7df)",
                1e3: "var(--foundry-global-color-grey-adaptive-1000-020dfb1f)"
              }
            },
            red: {
              static: {
                100: "var(--foundry-global-color-red-static-100-5234bf51)",
                200: "var(--foundry-global-color-red-static-200-9b555022)",
                300: "var(--foundry-global-color-red-static-300-6ef42061)",
                400: "var(--foundry-global-color-red-static-400-bd31684b)",
                500: "var(--foundry-global-color-red-static-500-b89c22c5)",
                600: "var(--foundry-global-color-red-static-600-ed4f7808)",
                700: "var(--foundry-global-color-red-static-700-20c326c5)",
                800: "var(--foundry-global-color-red-static-800-60c90a7b)",
                900: "var(--foundry-global-color-red-static-900-55f69265)",
                1e3: "var(--foundry-global-color-red-static-1000-12c1e6bb)",
                1100: "var(--foundry-global-color-red-static-1100-284ef4c0)",
                1200: "var(--foundry-global-color-red-static-1200-5d3f7911)",
                1300: "var(--foundry-global-color-red-static-1300-43fd11f8)",
                1400: "var(--foundry-global-color-red-static-1400-dff9f9a5)"
              },
              adaptive: {
                100: "var(--foundry-global-color-red-adaptive-100-9f218b31)",
                200: "var(--foundry-global-color-red-adaptive-200-b287e195)",
                300: "var(--foundry-global-color-red-adaptive-300-3513afa6)",
                400: "var(--foundry-global-color-red-adaptive-400-2e43b523)",
                500: "var(--foundry-global-color-red-adaptive-500-d198b061)",
                600: "var(--foundry-global-color-red-adaptive-600-7da276f6)",
                700: "var(--foundry-global-color-red-adaptive-700-6f634812)",
                800: "var(--foundry-global-color-red-adaptive-800-7f423e03)",
                900: "var(--foundry-global-color-red-adaptive-900-43f71e11)",
                1e3: "var(--foundry-global-color-red-adaptive-1000-9f5e2924)",
                1100: "var(--foundry-global-color-red-adaptive-1100-f2f72614)",
                1200: "var(--foundry-global-color-red-adaptive-1200-aef5078c)",
                1300: "var(--foundry-global-color-red-adaptive-1300-3c79c39b)",
                1400: "var(--foundry-global-color-red-adaptive-1400-918ac2c6)"
              }
            },
            yellow: {
              static: {
                100: "var(--foundry-global-color-yellow-static-100-2887d8ce)",
                200: "var(--foundry-global-color-yellow-static-200-1dceac31)",
                300: "var(--foundry-global-color-yellow-static-300-bda8dae5)",
                400: "var(--foundry-global-color-yellow-static-400-e603ca1c)",
                500: "var(--foundry-global-color-yellow-static-500-b9703bbc)",
                600: "var(--foundry-global-color-yellow-static-600-828a39a0)",
                700: "var(--foundry-global-color-yellow-static-700-cb059cba)",
                800: "var(--foundry-global-color-yellow-static-800-e49b6916)",
                900: "var(--foundry-global-color-yellow-static-900-ff35761e)",
                1e3: "var(--foundry-global-color-yellow-static-1000-7c6c4551)",
                1100: "var(--foundry-global-color-yellow-static-1100-2e821a8c)",
                1200: "var(--foundry-global-color-yellow-static-1200-aea00231)",
                1300: "var(--foundry-global-color-yellow-static-1300-7eec7bd0)",
                1400: "var(--foundry-global-color-yellow-static-1400-0ff6b89d)"
              },
              adaptive: {
                100: "var(--foundry-global-color-yellow-adaptive-100-8f09820e)",
                200: "var(--foundry-global-color-yellow-adaptive-200-63c3f5ee)",
                300: "var(--foundry-global-color-yellow-adaptive-300-4deab2f6)",
                400: "var(--foundry-global-color-yellow-adaptive-400-78286ac3)",
                500: "var(--foundry-global-color-yellow-adaptive-500-f0427a70)",
                600: "var(--foundry-global-color-yellow-adaptive-600-3f6d60dc)",
                700: "var(--foundry-global-color-yellow-adaptive-700-959c799c)",
                800: "var(--foundry-global-color-yellow-adaptive-800-099fea86)",
                900: "var(--foundry-global-color-yellow-adaptive-900-9443df02)",
                1e3: "var(--foundry-global-color-yellow-adaptive-1000-abbedd59)",
                1100: "var(--foundry-global-color-yellow-adaptive-1100-ff18d083)",
                1200: "var(--foundry-global-color-yellow-adaptive-1200-4bc40f51)",
                1300: "var(--foundry-global-color-yellow-adaptive-1300-b3a4b5b4)",
                1400: "var(--foundry-global-color-yellow-adaptive-1400-3048335a)"
              }
            },
            green: {
              static: {
                100: "var(--foundry-global-color-green-static-100-753f09df)",
                200: "var(--foundry-global-color-green-static-200-b1b43708)",
                300: "var(--foundry-global-color-green-static-300-d66b3241)",
                400: "var(--foundry-global-color-green-static-400-a93942e5)",
                500: "var(--foundry-global-color-green-static-500-2888e254)",
                600: "var(--foundry-global-color-green-static-600-aebbfb3a)",
                700: "var(--foundry-global-color-green-static-700-89b4ffdc)",
                800: "var(--foundry-global-color-green-static-800-87b9bb4f)",
                900: "var(--foundry-global-color-green-static-900-b42b84da)",
                1e3: "var(--foundry-global-color-green-static-1000-43ecb25e)",
                1100: "var(--foundry-global-color-green-static-1100-d4597796)",
                1200: "var(--foundry-global-color-green-static-1200-a4dad299)",
                1300: "var(--foundry-global-color-green-static-1300-7861b376)",
                1400: "var(--foundry-global-color-green-static-1400-4d463023)"
              },
              adaptive: {
                100: "var(--foundry-global-color-green-adaptive-100-e36f5da3)",
                200: "var(--foundry-global-color-green-adaptive-200-e50d247c)",
                300: "var(--foundry-global-color-green-adaptive-300-e74a73b3)",
                400: "var(--foundry-global-color-green-adaptive-400-3e375ae0)",
                500: "var(--foundry-global-color-green-adaptive-500-5eb32af8)",
                600: "var(--foundry-global-color-green-adaptive-600-67db0104)",
                700: "var(--foundry-global-color-green-adaptive-700-b46c5b6e)",
                800: "var(--foundry-global-color-green-adaptive-800-62f4ea41)",
                900: "var(--foundry-global-color-green-adaptive-900-456c793d)",
                1e3: "var(--foundry-global-color-green-adaptive-1000-ebe84050)",
                1100: "var(--foundry-global-color-green-adaptive-1100-7d1a8857)",
                1200: "var(--foundry-global-color-green-adaptive-1200-f5a760b2)",
                1300: "var(--foundry-global-color-green-adaptive-1300-98111c27)",
                1400: "var(--foundry-global-color-green-adaptive-1400-c7a2c7e4)"
              }
            },
            blue: {
              static: {
                100: "var(--foundry-global-color-blue-static-100-e67c243c)",
                200: "var(--foundry-global-color-blue-static-200-d053fe98)",
                300: "var(--foundry-global-color-blue-static-300-564f6a4f)",
                400: "var(--foundry-global-color-blue-static-400-803833dc)",
                500: "var(--foundry-global-color-blue-static-500-029df7ec)",
                600: "var(--foundry-global-color-blue-static-600-55155611)",
                700: "var(--foundry-global-color-blue-static-700-f0d799e8)",
                800: "var(--foundry-global-color-blue-static-800-6d071594)",
                900: "var(--foundry-global-color-blue-static-900-92d3b7cc)",
                1e3: "var(--foundry-global-color-blue-static-1000-cc0c4d91)",
                1100: "var(--foundry-global-color-blue-static-1100-674881c3)",
                1200: "var(--foundry-global-color-blue-static-1200-81ade28f)",
                1300: "var(--foundry-global-color-blue-static-1300-92c235c9)",
                1400: "var(--foundry-global-color-blue-static-1400-1b5feb14)"
              },
              adaptive: {
                100: "var(--foundry-global-color-blue-adaptive-100-b6c46a86)",
                200: "var(--foundry-global-color-blue-adaptive-200-0ccc0c81)",
                300: "var(--foundry-global-color-blue-adaptive-300-e5d80c0e)",
                400: "var(--foundry-global-color-blue-adaptive-400-44a2af0b)",
                500: "var(--foundry-global-color-blue-adaptive-500-64093fc7)",
                600: "var(--foundry-global-color-blue-adaptive-600-41bcc0d5)",
                700: "var(--foundry-global-color-blue-adaptive-700-6f985a0d)",
                800: "var(--foundry-global-color-blue-adaptive-800-c66fae2b)",
                900: "var(--foundry-global-color-blue-adaptive-900-f87fb7ab)",
                1e3: "var(--foundry-global-color-blue-adaptive-1000-129c45a7)",
                1100: "var(--foundry-global-color-blue-adaptive-1100-579d2d7f)",
                1200: "var(--foundry-global-color-blue-adaptive-1200-5b826b61)",
                1300: "var(--foundry-global-color-blue-adaptive-1300-5864a192)",
                1400: "var(--foundry-global-color-blue-adaptive-1400-b9e5f8ab)"
              }
            },
            seafoam: {
              static: {
                100: "var(--foundry-global-color-seafoam-static-100-a401f55d)",
                200: "var(--foundry-global-color-seafoam-static-200-157f98a6)",
                300: "var(--foundry-global-color-seafoam-static-300-f057cb2a)",
                400: "var(--foundry-global-color-seafoam-static-400-5c314058)",
                500: "var(--foundry-global-color-seafoam-static-500-4eba9472)",
                600: "var(--foundry-global-color-seafoam-static-600-bb39e74b)",
                700: "var(--foundry-global-color-seafoam-static-700-97a0e42c)",
                800: "var(--foundry-global-color-seafoam-static-800-c898779d)",
                900: "var(--foundry-global-color-seafoam-static-900-ca1e00fd)",
                1e3: "var(--foundry-global-color-seafoam-static-1000-97b36592)",
                1100: "var(--foundry-global-color-seafoam-static-1100-7a540639)",
                1200: "var(--foundry-global-color-seafoam-static-1200-9d613b2f)",
                1300: "var(--foundry-global-color-seafoam-static-1300-5d82dc91)",
                1400: "var(--foundry-global-color-seafoam-static-1400-c9f1799c)"
              },
              adaptive: {
                100: "var(--foundry-global-color-seafoam-adaptive-100-9fd7898d)",
                200: "var(--foundry-global-color-seafoam-adaptive-200-ad5ea160)",
                300: "var(--foundry-global-color-seafoam-adaptive-300-339db442)",
                400: "var(--foundry-global-color-seafoam-adaptive-400-bacc52ab)",
                500: "var(--foundry-global-color-seafoam-adaptive-500-24d9f0ae)",
                600: "var(--foundry-global-color-seafoam-adaptive-600-28f1d217)",
                700: "var(--foundry-global-color-seafoam-adaptive-700-f8862c98)",
                800: "var(--foundry-global-color-seafoam-adaptive-800-240ff22d)",
                900: "var(--foundry-global-color-seafoam-adaptive-900-30744fa2)",
                1e3: "var(--foundry-global-color-seafoam-adaptive-1000-cecc3b2f)",
                1100: "var(--foundry-global-color-seafoam-adaptive-1100-307fe74e)",
                1200: "var(--foundry-global-color-seafoam-adaptive-1200-1d61b617)",
                1300: "var(--foundry-global-color-seafoam-adaptive-1300-26c82681)",
                1400: "var(--foundry-global-color-seafoam-adaptive-1400-6cf3df35)"
              }
            },
            white: {
              static: {
                5: "var(--foundry-global-color-white-static-5-c4aa496e)",
                10: "var(--foundry-global-color-white-static-10-fc74444e)",
                15: "var(--foundry-global-color-white-static-15-e98f967d)",
                20: "var(--foundry-global-color-white-static-20-6326998e)",
                35: "var(--foundry-global-color-white-static-35-fdd05d92)",
                40: "var(--foundry-global-color-white-static-40-a06b4074)",
                50: "var(--foundry-global-color-white-static-50-195bb728)",
                65: "var(--foundry-global-color-white-static-65-c30f2d6e)",
                80: "var(--foundry-global-color-white-static-80-1525ba22)",
                85: "var(--foundry-global-color-white-static-85-79c7cc6b)",
                90: "var(--foundry-global-color-white-static-90-5959c519)",
                95: "var(--foundry-global-color-white-static-95-becabaec)",
                100: "var(--foundry-global-color-white-static-100-d44db539)"
              }
            },
            black: {
              static: {
                5: "var(--foundry-global-color-black-static-5-5a16f697)",
                10: "var(--foundry-global-color-black-static-10-16a76e5e)",
                15: "var(--foundry-global-color-black-static-15-d198b2a6)",
                20: "var(--foundry-global-color-black-static-20-3ae064df)",
                35: "var(--foundry-global-color-black-static-35-1523cb80)",
                40: "var(--foundry-global-color-black-static-40-32fa6bf3)",
                50: "var(--foundry-global-color-black-static-50-e761096d)",
                65: "var(--foundry-global-color-black-static-65-1c288c8d)",
                80: "var(--foundry-global-color-black-static-80-ceca67af)",
                85: "var(--foundry-global-color-black-static-85-3cb71ba6)",
                90: "var(--foundry-global-color-black-static-90-45219d0a)",
                95: "var(--foundry-global-color-black-static-95-4042e3bb)",
                100: "var(--foundry-global-color-black-static-100-43aea341)"
              }
            },
            alpha: {
              adaptive: {
                5: "var(--foundry-global-color-alpha-adaptive-5-b141acdd)",
                10: "var(--foundry-global-color-alpha-adaptive-10-2f911b2f)",
                15: "var(--foundry-global-color-alpha-adaptive-15-695b3a30)",
                20: "var(--foundry-global-color-alpha-adaptive-20-8e38b04d)",
                35: "var(--foundry-global-color-alpha-adaptive-35-f9b0b74d)",
                40: "var(--foundry-global-color-alpha-adaptive-40-29c77778)",
                50: "var(--foundry-global-color-alpha-adaptive-50-f61afb4a)",
                65: "var(--foundry-global-color-alpha-adaptive-65-5c75d572)",
                80: "var(--foundry-global-color-alpha-adaptive-80-6e56c3f3)",
                85: "var(--foundry-global-color-alpha-adaptive-85-130819b2)",
                90: "var(--foundry-global-color-alpha-adaptive-90-a416f5ef)",
                95: "var(--foundry-global-color-alpha-adaptive-95-68274c65)"
              }
            }
          },
          platformScales: {
            scale: {
              0: "var(--foundry-global-platform-scales-scale-0-0804de50)",
              10: "var(--foundry-global-platform-scales-scale-10-e43007a8)",
              25: "var(--foundry-global-platform-scales-scale-25-6410d0da)",
              33: "var(--foundry-global-platform-scales-scale-33-15ea8cb3)",
              50: "var(--foundry-global-platform-scales-scale-50-ce8d9569)",
              75: "var(--foundry-global-platform-scales-scale-75-e6cf5003)",
              100: "var(--foundry-global-platform-scales-scale-100-d27bfb1e)",
              125: "var(--foundry-global-platform-scales-scale-125-f7e280cb)",
              150: "var(--foundry-global-platform-scales-scale-150-6ca614ed)",
              175: "var(--foundry-global-platform-scales-scale-175-55240242)",
              200: "var(--foundry-global-platform-scales-scale-200-b985b3f2)",
              225: "var(--foundry-global-platform-scales-scale-225-d561439e)",
              250: "var(--foundry-global-platform-scales-scale-250-5ace963d)",
              300: "var(--foundry-global-platform-scales-scale-300-9356406c)",
              350: "var(--foundry-global-platform-scales-scale-350-a2b3bb07)",
              400: "var(--foundry-global-platform-scales-scale-400-25879f98)",
              450: "var(--foundry-global-platform-scales-scale-450-3029ab1a)",
              500: "var(--foundry-global-platform-scales-scale-500-f82c7fa1)",
              550: "var(--foundry-global-platform-scales-scale-550-d38e7e5a)",
              600: "var(--foundry-global-platform-scales-scale-600-396e1774)",
              650: "var(--foundry-global-platform-scales-scale-650-4291ab1c)",
              700: "var(--foundry-global-platform-scales-scale-700-251bd5dc)",
              750: "var(--foundry-global-platform-scales-scale-750-70abde6a)",
              800: "var(--foundry-global-platform-scales-scale-800-3fe8ece7)",
              900: "var(--foundry-global-platform-scales-scale-900-703d3bf4)",
              950: "var(--foundry-global-platform-scales-scale-950-faa06d06)",
              1e3: "var(--foundry-global-platform-scales-scale-1000-43953c90)",
              1100: "var(--foundry-global-platform-scales-scale-1100-6e89015f)",
              1150: "var(--foundry-global-platform-scales-scale-1150-a779c276)",
              1200: "var(--foundry-global-platform-scales-scale-1200-32a4be13)",
              1400: "var(--foundry-global-platform-scales-scale-1400-cfe54919)",
              1600: "var(--foundry-global-platform-scales-scale-1600-54eb9368)",
              1700: "var(--foundry-global-platform-scales-scale-1700-2581e2fc)",
              1800: "var(--foundry-global-platform-scales-scale-1800-2a76d411)",
              2e3: "var(--foundry-global-platform-scales-scale-2000-2558d0f0)",
              2200: "var(--foundry-global-platform-scales-scale-2200-7289d3db)",
              2350: "var(--foundry-global-platform-scales-scale-2350-76168f14)",
              2400: "var(--foundry-global-platform-scales-scale-2400-e83742de)",
              2500: "var(--foundry-global-platform-scales-scale-2500-24cc854f)",
              2750: "var(--foundry-global-platform-scales-scale-2750-217f5509)",
              3e3: "var(--foundry-global-platform-scales-scale-3000-586585a3)",
              3150: "var(--foundry-global-platform-scales-scale-3150-8caf26b3)",
              3350: "var(--foundry-global-platform-scales-scale-3350-9395e22d)",
              3500: "var(--foundry-global-platform-scales-scale-3500-c9791024)",
              3750: "var(--foundry-global-platform-scales-scale-3750-e5864061)",
              4e3: "var(--foundry-global-platform-scales-scale-4000-35294825)",
              4125: "var(--foundry-global-platform-scales-scale-4125-d7f8e5c7)",
              4250: "var(--foundry-global-platform-scales-scale-4250-3f02afdd)",
              4500: "var(--foundry-global-platform-scales-scale-4500-4b7f7b1a)",
              4750: "var(--foundry-global-platform-scales-scale-4750-f39e7cdd)",
              5e3: "var(--foundry-global-platform-scales-scale-5000-fd5d6798)",
              5250: "var(--foundry-global-platform-scales-scale-5250-526fbc6e)",
              5500: "var(--foundry-global-platform-scales-scale-5500-8d4a1c23)",
              5750: "var(--foundry-global-platform-scales-scale-5750-231d0b96)",
              6e3: "var(--foundry-global-platform-scales-scale-6000-48c91d9d)",
              6250: "var(--foundry-global-platform-scales-scale-6250-47fc2cb8)"
            }
          },
          border: {
            radius: {
              0: "var(--foundry-global-border-radius-0-df9394ed)",
              25: "var(--foundry-global-border-radius-25-00f8ef97)",
              50: "var(--foundry-global-border-radius-50-5b3f01bf)",
              100: "var(--foundry-global-border-radius-100-742803b2)",
              150: "var(--foundry-global-border-radius-150-ca109bc3)",
              200: "var(--foundry-global-border-radius-200-ece22bd6)",
              300: "var(--foundry-global-border-radius-300-7c6d4daf)",
              400: "var(--foundry-global-border-radius-400-ddbb88dd)",
              circle: "var(--foundry-global-border-radius-circle-a97600a9)",
              pill: "var(--foundry-global-border-radius-pill-8c8d51e6)"
            },
            width: {
              0: "var(--foundry-global-border-width-0-b149a800)",
              10: "var(--foundry-global-border-width-10-8d34e94d)",
              25: "var(--foundry-global-border-width-25-52cee49a)",
              33: "var(--foundry-global-border-width-33-d4281be2)",
              50: "var(--foundry-global-border-width-50-ed6ae051)"
            }
          },
          spacing: {
            gap: {
              10: "var(--foundry-global-spacing-gap-10-33a1fb65)",
              25: "var(--foundry-global-spacing-gap-25-2a51e690)",
              33: "var(--foundry-global-spacing-gap-33-ab827c04)",
              50: "var(--foundry-global-spacing-gap-50-ae99fc48)",
              75: "var(--foundry-global-spacing-gap-75-397a0da6)",
              100: "var(--foundry-global-spacing-gap-100-05387de1)",
              125: "var(--foundry-global-spacing-gap-125-23231511)",
              150: "var(--foundry-global-spacing-gap-150-7f268a13)",
              175: "var(--foundry-global-spacing-gap-175-d63af5f3)",
              200: "var(--foundry-global-spacing-gap-200-7d922174)",
              225: "var(--foundry-global-spacing-gap-225-b2ca1ee1)",
              250: "var(--foundry-global-spacing-gap-250-ee21f32b)",
              300: "var(--foundry-global-spacing-gap-300-2f9fe0c5)",
              350: "var(--foundry-global-spacing-gap-350-7ac0bb64)",
              400: "var(--foundry-global-spacing-gap-400-f21302a9)",
              450: "var(--foundry-global-spacing-gap-450-08746772)",
              500: "var(--foundry-global-spacing-gap-500-0fe0ec68)",
              550: "var(--foundry-global-spacing-gap-550-aff30058)",
              600: "var(--foundry-global-spacing-gap-600-d02b9116)",
              650: "var(--foundry-global-spacing-gap-650-d67ef995)",
              700: "var(--foundry-global-spacing-gap-700-936963d7)",
              750: "var(--foundry-global-spacing-gap-750-66d6e892)",
              800: "var(--foundry-global-spacing-gap-800-4ee30294)",
              900: "var(--foundry-global-spacing-gap-900-9531b9b6)",
              950: "var(--foundry-global-spacing-gap-950-cf297696)",
              1e3: "var(--foundry-global-spacing-gap-1000-af3eeb0f)",
              1100: "var(--foundry-global-spacing-gap-1100-6d6ab862)",
              1150: "var(--foundry-global-spacing-gap-1150-5e5d766c)",
              1200: "var(--foundry-global-spacing-gap-1200-5eb7c00a)",
              1400: "var(--foundry-global-spacing-gap-1400-302a953d)",
              1600: "var(--foundry-global-spacing-gap-1600-f3e8c303)",
              1700: "var(--foundry-global-spacing-gap-1700-b6c3835e)",
              1800: "var(--foundry-global-spacing-gap-1800-9826a3ad)",
              2e3: "var(--foundry-global-spacing-gap-2000-c24e1178)",
              2200: "var(--foundry-global-spacing-gap-2200-8192be37)",
              2350: "var(--foundry-global-spacing-gap-2350-1cf77686)",
              2400: "var(--foundry-global-spacing-gap-2400-c9462d01)",
              2500: "var(--foundry-global-spacing-gap-2500-442ef530)"
            },
            dimensions: {
              10: "var(--foundry-global-spacing-dimensions-10-7d52ec29)",
              25: "var(--foundry-global-spacing-dimensions-25-eec1a90b)",
              33: "var(--foundry-global-spacing-dimensions-33-9d3ffc33)",
              50: "var(--foundry-global-spacing-dimensions-50-b85610c2)",
              75: "var(--foundry-global-spacing-dimensions-75-8db9e2a0)",
              100: "var(--foundry-global-spacing-dimensions-100-97e13da9)",
              125: "var(--foundry-global-spacing-dimensions-125-ef032ca7)",
              150: "var(--foundry-global-spacing-dimensions-150-ea1fb93c)",
              175: "var(--foundry-global-spacing-dimensions-175-6d1e42fb)",
              200: "var(--foundry-global-spacing-dimensions-200-2fbf5420)",
              225: "var(--foundry-global-spacing-dimensions-225-f91d4d91)",
              250: "var(--foundry-global-spacing-dimensions-250-1db78665)",
              300: "var(--foundry-global-spacing-dimensions-300-8149e8c1)",
              350: "var(--foundry-global-spacing-dimensions-350-1aeb7130)",
              400: "var(--foundry-global-spacing-dimensions-400-b120da78)",
              450: "var(--foundry-global-spacing-dimensions-450-41690cc7)",
              500: "var(--foundry-global-spacing-dimensions-500-72b67c3c)",
              550: "var(--foundry-global-spacing-dimensions-550-97601a54)",
              600: "var(--foundry-global-spacing-dimensions-600-552f3071)",
              650: "var(--foundry-global-spacing-dimensions-650-61f68482)",
              700: "var(--foundry-global-spacing-dimensions-700-523e51c1)",
              750: "var(--foundry-global-spacing-dimensions-750-8a3f1cbf)",
              800: "var(--foundry-global-spacing-dimensions-800-bbdfa298)",
              900: "var(--foundry-global-spacing-dimensions-900-efcdb6bf)",
              950: "var(--foundry-global-spacing-dimensions-950-cc7b4e5e)",
              1e3: "var(--foundry-global-spacing-dimensions-1000-7e8c9b30)",
              1100: "var(--foundry-global-spacing-dimensions-1100-aca957c8)",
              1150: "var(--foundry-global-spacing-dimensions-1150-f8665e69)",
              1200: "var(--foundry-global-spacing-dimensions-1200-71972197)",
              1400: "var(--foundry-global-spacing-dimensions-1400-8f4cc278)",
              1600: "var(--foundry-global-spacing-dimensions-1600-b5e74cd0)",
              1700: "var(--foundry-global-spacing-dimensions-1700-b22e9e34)",
              1800: "var(--foundry-global-spacing-dimensions-1800-94e4f433)",
              2e3: "var(--foundry-global-spacing-dimensions-2000-d510a4b4)",
              2200: "var(--foundry-global-spacing-dimensions-2200-93c325ca)",
              2350: "var(--foundry-global-spacing-dimensions-2350-3bd02711)",
              2400: "var(--foundry-global-spacing-dimensions-2400-8d3906cf)",
              2500: "var(--foundry-global-spacing-dimensions-2500-4ab359ad)",
              2750: "var(--foundry-global-spacing-dimensions-2750-165b8e80)",
              3e3: "var(--foundry-global-spacing-dimensions-3000-27404208)",
              3150: "var(--foundry-global-spacing-dimensions-3150-c73af8bd)",
              3350: "var(--foundry-global-spacing-dimensions-3350-d07d3335)",
              3500: "var(--foundry-global-spacing-dimensions-3500-832dd3e8)",
              3750: "var(--foundry-global-spacing-dimensions-3750-18293754)",
              4e3: "var(--foundry-global-spacing-dimensions-4000-981888ae)",
              4125: "var(--foundry-global-spacing-dimensions-4125-711bd372)",
              4250: "var(--foundry-global-spacing-dimensions-4250-11e9d696)",
              4500: "var(--foundry-global-spacing-dimensions-4500-2f90e66f)",
              4750: "var(--foundry-global-spacing-dimensions-4750-1ff43e79)",
              5e3: "var(--foundry-global-spacing-dimensions-5000-7c37a31a)",
              5250: "var(--foundry-global-spacing-dimensions-5250-eed14f39)",
              5500: "var(--foundry-global-spacing-dimensions-5500-1e6d6f23)",
              5750: "var(--foundry-global-spacing-dimensions-5750-f63e358c)",
              6e3: "var(--foundry-global-spacing-dimensions-6000-25c8873a)",
              6250: "var(--foundry-global-spacing-dimensions-6250-aabe7f2f)"
            }
          },
          font: {
            family: {
              arial: "var(--foundry-global-font-family-arial-29a7d878)",
              helveticaNowDisplay: "var(--foundry-global-font-family-helvetica-now-display-15e86e06)",
              helveticaNowText: "var(--foundry-global-font-family-helvetica-now-text-2f039cca)",
              consolas: "var(--foundry-global-font-family-consolas-b260a4d8)"
            },
            weight: {
              400: "var(--foundry-global-font-weight-400-c543d620)",
              700: "var(--foundry-global-font-weight-700-4d05ca0a)"
            },
            size: {
              125: "var(--foundry-global-font-size-125-7465ed8a)",
              150: "var(--foundry-global-font-size-150-198f06c7)",
              175: "var(--foundry-global-font-size-175-7c044718)",
              200: "var(--foundry-global-font-size-200-9b30a1c2)",
              225: "var(--foundry-global-font-size-225-6b268615)",
              250: "var(--foundry-global-font-size-250-7c909c36)",
              300: "var(--foundry-global-font-size-300-ed2e8eb5)",
              400: "var(--foundry-global-font-size-400-310f384e)",
              500: "var(--foundry-global-font-size-500-ae4c1498)",
              600: "var(--foundry-global-font-size-600-f98b9cf9)",
              700: "var(--foundry-global-font-size-700-e55fff7d)",
              800: "var(--foundry-global-font-size-800-cbeeb437)",
              900: "var(--foundry-global-font-size-900-195dff23)",
              1e3: "var(--foundry-global-font-size-1000-de0d9aba)",
              1100: "var(--foundry-global-font-size-1100-a7f67440)",
              multiplier: "var(--foundry-global-font-size-multiplier-a0cecbef)"
            },
            letterSpacing: {
              0: "var(--foundry-global-font-letter-spacing-0-11d3b242)",
              25: "var(--foundry-global-font-letter-spacing-25-e01b7d49)",
              100: "var(--foundry-global-font-letter-spacing-100-823e8792)",
              200: "var(--foundry-global-font-letter-spacing-200-3d4cc27a)",
              250: "var(--foundry-global-font-letter-spacing-250-c0a207ff)",
              neg250: "var(--foundry-global-font-letter-spacing-neg-250-6c4f28af)",
              neg150: "var(--foundry-global-font-letter-spacing-neg-150-d0c75081)",
              neg100: "var(--foundry-global-font-letter-spacing-neg-100-d1dce193)",
              neg75: "var(--foundry-global-font-letter-spacing-neg-75-247e228b)",
              neg50: "var(--foundry-global-font-letter-spacing-neg-50-2f64a6bc)"
            },
            lineHeight: {
              100: "var(--foundry-global-font-line-height-100-d7ba3e93)",
              110: "var(--foundry-global-font-line-height-110-f2a1d21c)",
              120: "var(--foundry-global-font-line-height-120-114ddbcd)",
              130: "var(--foundry-global-font-line-height-130-1468e63f)",
              150: "var(--foundry-global-font-line-height-150-dc282d1f)"
            },
            spacing: {
              400: "var(--foundry-global-font-spacing-400-d05cce10)"
            }
          },
          _platformScale: "--foundry-platform-scales-ratio-65afb887",
          _fontScale: "--foundry-global-font-size-multiplier-a0cecbef"
        }),
        L = r(36421);
      const T = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

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

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? V(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = E(o)) in n ? Object.defineProperty(n, o, {
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
      var q = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        H = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = A(A({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) q(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return M(e.variantClassNames, e => M(e, e => e.split(" ")[0]))
            }
          }, t
        },
        F = "var(--foundry_1qqcnua0)",
        B = "var(--foundry_1qqcnua1)",
        Z = "var(--foundry_1qqcnua2)",
        X = "var(--foundry_1qqcnua3)",
        G = "var(--foundry_1qqcnua4)",
        K = "var(--foundry_1qqcnua5)",
        W = "var(--foundry_1qqcnua6)",
        U = "var(--foundry_1qqcnua7)",
        $ = "var(--foundry_1qqcnua8)",
        Y = "var(--foundry_1qqcnua9)",
        Q = "var(--foundry_1qqcnuaa)",
        J = "var(--foundry_1qqcnuab)",
        ee = "var(--foundry_1qqcnuac)",
        te = "var(--foundry_1qqcnuad)",
        re = "var(--foundry_1qqcnuae)",
        ne = "var(--foundry_1qqcnuaf)",
        oe = "var(--foundry_1qqcnuag)",
        ae = "var(--foundry_1qqcnuah)",
        se = "var(--foundry_1qqcnuai)",
        ie = "var(--foundry_1qqcnuaj)",
        de = "var(--foundry_1qqcnuak)",
        le = "var(--foundry_1qqcnual)",
        ce = "var(--foundry_1qqcnuam)",
        ue = "var(--foundry_1qqcnuan)";
      H({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav",
            link: "foundry_1qqcnuaw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), H({
        defaultClassName: "foundry_tdsdcdb foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdd",
            MD: "foundry_tdsdcde",
            SM: "foundry_tdsdcdf",
            XS: "foundry_tdsdcdg",
            XXS: "foundry_tdsdcdh"
          },
          appearance: {
            default: "foundry_tdsdcdi",
            bold: "foundry_tdsdcdj",
            hyperlink: "foundry_tdsdcdk"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), H({
        defaultClassName: "foundry_tdsdcdu foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdw",
            bold: "foundry_tdsdcdx"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), H({
        defaultClassName: "foundry_tdsdcd2 foundry_tdsdcd0",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd4",
            2: "foundry_tdsdcd5",
            3: "foundry_tdsdcd6",
            4: "foundry_tdsdcd7",
            5: "foundry_tdsdcd8",
            6: "foundry_tdsdcd9",
            7: "foundry_tdsdcda"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), H({
        defaultClassName: "foundry_tdsdcdl foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdn",
            MD: "foundry_tdsdcdo",
            SM: "foundry_tdsdcdp",
            XS: "foundry_tdsdcdq",
            XXS: "foundry_tdsdcdr"
          },
          appearance: {
            default: "foundry_tdsdcds",
            bold: "foundry_tdsdcdt"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const fe = {
          enabled: {
            background: T(F),
            border: T(B),
            text: T(Z),
            outline: T(X)
          },
          hover: {
            background: T(G),
            border: T(K),
            text: T(W),
            outline: T(U)
          },
          focus: {
            background: T($),
            border: T(Y),
            text: T(Q),
            outline: T(J)
          },
          pressed: {
            background: T(ee),
            border: T(te),
            text: T(re),
            outline: T(ne)
          },
          disabled: {
            background: T(oe),
            border: T(ae),
            text: T(se),
            outline: T(ie)
          },
          loading: {
            background: T(de),
            border: T(le),
            text: T(ce),
            outline: T(ue)
          }
        },
        pe = ({
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
          (0, k.useEffect)(() => {
            if (!e.current || !a || !l) return;
            const c = `${a}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, L.IO)(c, () => {
                const e = (0, N.J1)(a);
                return {
                  text: d || (e > t ? z.color.black.static[100] : z.color.white.static[100]),
                  hover: s || (e >= r ? (0, N.e$)(a, n) : (0, N.a)(a, n)),
                  pressed: i || (e >= r ? (0, N.e$)(a, o) : (0, N.a)(a, o))
                }
              });
            return e.current.style.setProperty(fe.enabled.background, a), e.current.style.setProperty(fe.enabled.border, a), e.current.style.setProperty(fe.enabled.text, u), e.current.style.setProperty(fe.hover.background, f), e.current.style.setProperty(fe.hover.border, f), e.current.style.setProperty(fe.hover.text, u), e.current.style.setProperty(fe.focus.background, f), e.current.style.setProperty(fe.focus.border, f), e.current.style.setProperty(fe.focus.text, u), e.current.style.setProperty(fe.pressed.background, p), e.current.style.setProperty(fe.pressed.border, p), e.current.style.setProperty(fe.pressed.text, u), e.current.style.setProperty(fe.loading.background, f), e.current.style.setProperty(fe.loading.border, f), e.current.style.setProperty(fe.loading.text, u), () => {
              e.current?.style.removeProperty(fe.enabled.background), e.current?.style.removeProperty(fe.enabled.border), e.current?.style.removeProperty(fe.enabled.text), e.current?.style.removeProperty(fe.hover.background), e.current?.style.removeProperty(fe.hover.border), e.current?.style.removeProperty(fe.hover.text), e.current?.style.removeProperty(fe.focus.background), e.current?.style.removeProperty(fe.focus.border), e.current?.style.removeProperty(fe.focus.text), e.current?.style.removeProperty(fe.pressed.background), e.current?.style.removeProperty(fe.pressed.border), e.current?.style.removeProperty(fe.pressed.text), e.current?.style.removeProperty(fe.loading.background), e.current?.style.removeProperty(fe.loading.border), e.current?.style.removeProperty(fe.loading.text)
            }
          }, [e.current, t, r, n, o, a, s, i, d, l, ...c])
        };
      var ve = r(22808),
        ye = r(21297);
      const be = (0, k.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        he = () => (0, k.useContext)(be),
        me = () => {
          const {
            platformScale: e
          } = he();
          return e
        };
      var ge = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Ce = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        we = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        xe = "foundry_nu8bkpb",
        _e = "--foundry-platform-scales-ratio-65afb887",
        je = "foundry_nu8bkp4",
        Oe = "foundry_nu8bkp3";
      const Pe = e => "dark" === e ? we.dark : we.light;
      const Se = () => L.X3 ? null : document.body;
      (0, k.forwardRef)(({
        children: e,
        className: t,
        container: r = Se(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, k.useRef)(null),
          f = (0, ve.UP)(u, c),
          p = (0, k.useRef)(r),
          {
            ratio: v,
            scale: y
          } = function(e) {
            const [t, r] = (0, k.useState)(e.platformScale || e.defaultPlatformScale), n = (0, k.useCallback)(t => {
              r(t), e.onPlatformScaleChange?.(t)
            }, [e.onPlatformScaleChange]), o = (0, k.useRef)([]), a = () => {
              if (!L.X3) {
                for (const {
                    handler: e,
                    matchMedia: t
                  }
                  of o.current) t.removeEventListener("change", e);
                o.current = []
              }
            };
            return (0, k.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
              if (!L.X3) {
                a();
                for (const e in Ce) {
                  const t = window.matchMedia(Ce[e]),
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
              ratio: ge[t]
            }
          }({
            onPlatformScaleChange: d,
            defaultPlatformScale: s,
            platformScale: i
          }),
          {
            appearanceClass: b,
            otherAppearanceClasses: h,
            providerColor: m
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark"
          }) {
            const r = (0, ve.Ub)("(prefers-color-scheme: light)"),
              n = (0, ve.Ub)("(prefers-color-scheme: dark)"),
              o = "system" !== e && e || r && "light" || n && "dark" || t,
              a = (0, k.useMemo)(() => Pe(o), [o]),
              s = (0, k.useMemo)(() => (e => {
                const t = Pe(e);
                return [we.light, we.dark].filter(e => e !== t)
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
          const s = (0, ve.ZC)(a),
            i = (0, ve.ZC)(e.current);
          (0, k.useEffect)(() => {
            e.current?.classList.contains(je) || e.current?.classList.add(je), e.current?.classList.contains(Oe) || e.current?.classList.add(Oe), e.current?.classList.contains(xe) || e.current?.classList.add(xe), e.current?.classList.add(r), e.current?.classList.remove(...n), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
          }, [r, a]), (0, k.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, k.useEffect)(() => (t && e.current?.style.setProperty(_e, t.toString()), () => {
            e.current?.style.removeProperty(_e)
          }), [t]), (0, k.useEffect)(() => {
            i?.classList.remove(je), i?.classList.remove(Oe), i?.classList.remove(r), i?.style.removeProperty(_e), a && i?.classList.remove(a)
          }, [i])
        })({
          locale: l,
          className: t,
          appearanceClass: b,
          otherAppearanceClasses: h,
          currentScale: i ? v : -0,
          container: n ? u : p
        }), (0, D.jsx)(be.Provider, {
          value: {
            locale: l,
            defaultColorScheme: a,
            colorScheme: m,
            defaultPlatformScale: s,
            platformScale: y
          },
          children: n ? (0, D.jsx)(ye.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var Re = r(94635);

      function De(e) {
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

      function Ne(e, t) {
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
          t % 2 ? Ne(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = De(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ne(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ie(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ze, Le, Te = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ee = (ze = {
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
        }, Le = e => {
          var t = ze.defaultClassName,
            r = ke(ke({}, ze.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : ze.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = ze.variantClassNames[n][s];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of ze.compoundVariants) Te(d, r, ze.defaultVariants) && (t += " " + l);
          return t
        }, Le.variants = () => Object.keys(ze.variantClassNames), Le.classNames = {
          get base() {
            return ze.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Ie(ze.variantClassNames, e => Ie(e, e => e.split(" ")[0]))
          }
        }, Le);
      const Ve = "pageMD",
        Ae = (0, k.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = Ve,
          testId: n,
          ...o
        }, a) => {
          const s = me(),
            i = "string" == typeof r ? r : r?.[s] ?? r.default ?? Ve,
            d = (0, L.v6)({
              className: Ee({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, D.jsx)(Re.b, {
            label: e,
            children: (0, D.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!t && (0, D.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, D.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var Me = r(81270),
        qe = r(41801);

      function He(e) {
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

      function Fe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fe(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = He(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ze(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xe = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ge = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Be(Be({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xe(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ze(e.variantClassNames, e => Ze(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ke = Ge({
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
      Ge({
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
      var We = Ge({
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
        Ue = Ge({
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
        $e = Ge({
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
      const Ye = (0, k.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconLeftElement: a,
        iconRight: s,
        iconRightLabel: i,
        iconRightElement: d,
        appearance: l,
        size: c = "MD",
        fullWidth: u = !1,
        isLoading: f = !1,
        spinnerLabel: p,
        preventFocusOnPress: v = !1,
        override_darkenLuminance: y = .035,
        override_textLuminance: b = .179,
        override_hoverLuminance: h = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: g,
        override_hoverColor: C,
        override_pressedColor: w,
        override_textColor: x,
        ..._
      }, j) => {
        const O = (0, k.useRef)(null),
          P = (0, ve.UP)(O, j),
          S = me(),
          R = "string" == typeof c ? c : c?.[S] ?? c.default ?? "MD",
          {
            buttonProps: N
          } = (0, ve.sL)((0, L.v6)(_, {
            isLoading: f,
            preventFocusOnPress: v
          }), O);
        pe({
          refs: {
            buttonRef: O
          },
          config: {
            textLuminance: b,
            darkenLuminance: y,
            hoverLuminance: h,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: g,
            hoverColor: C,
            pressedColor: w,
            textColor: x
          },
          enabled: "accent" === l
        }, [t]);
        const I = (0, L.v6)({
            className: Ke({
              appearance: l,
              size: R,
              fullWidth: u,
              iconLeft: !!n,
              iconRight: !!s
            }),
            "data-testid": e
          }, N),
          z = a || (n && qe[n] ? qe[n] : null),
          T = d || (s && qe[s] ? qe[s] : null),
          E = t ? ye.DX : "button",
          V = u && (T || T && z);
        return (0, D.jsxs)(E, {
          ref: P,
          ...I,
          children: [V && (0, D.jsx)("div", {
            className: "foundry_17pcofy15"
          }), z && (0, D.jsx)(z, {
            label: o || "",
            size: R,
            className: (0, Me.clsx)(We({
              size: R
            }), "foundry_17pcofy11")
          }), (0, D.jsx)(ye.xV, {
            children: r
          }), T && (0, D.jsx)(T, {
            label: i || "",
            size: R,
            className: (0, Me.clsx)(We({
              size: R
            }), Ue({
              fullWidth: u
            }))
          }), f && (0, D.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, D.jsx)(Ae, {
              label: p || "",
              size: "inline" + ("XL" === R ? "LG" : "MD"),
              hideTrack: !0,
              className: $e({
                size: R
              })
            })
          })]
        })
      });

      function Qe(e) {
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

      function Je(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function et(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Je(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Qe(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Je(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = et(et({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rt(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tt(e.variantClassNames, e => tt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ot = nt({
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
        at = nt({
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
        st = nt({
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
      const it = (0, k.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        iconElement: n,
        label: o,
        appearance: a,
        fullWidth: s = !1,
        size: i = "LG",
        children: d,
        isLoading: l = !1,
        spinnerLabel: c,
        preventFocusOnPress: u = !1,
        override_darkenLuminance: f = .035,
        override_textLuminance: p = .179,
        override_hoverLuminance: v = .08,
        override_pressedLuminance: y = .15,
        override_backgroundColor: b,
        override_hoverColor: h,
        override_pressedColor: m,
        override_textColor: g,
        ...C
      }, w) => {
        const x = (0, k.useRef)(null),
          _ = (0, ve.UP)(x, w),
          j = me(),
          O = "string" == typeof i ? i : i?.[j] ?? i.default ?? "LG",
          {
            buttonProps: P
          } = (0, ve.sL)((0, L.v6)(C, {
            isLoading: l,
            preventFocusOnPress: u
          }), x);
        pe({
          refs: {
            buttonRef: x
          },
          config: {
            textLuminance: p,
            darkenLuminance: f,
            hoverLuminance: v,
            pressedLuminance: y
          },
          overrides: {
            backgroundColor: b,
            hoverColor: h,
            pressedColor: m,
            textColor: g
          },
          enabled: "accent" === a
        }, [t]);
        const S = (0, L.v6)({
            className: at({
              appearance: a,
              size: O,
              fullWidth: s
            }),
            "data-testid": e
          }, P),
          R = n || (r ? qe[r] : null),
          N = t ? ye.DX : "button";
        return (0, D.jsxs)(N, {
          ref: _,
          ...S,
          children: [R && (0, D.jsx)(R, {
            label: o || "",
            size: O,
            className: ot({
              size: O
            })
          }), (0, D.jsx)(ye.xV, {
            children: d
          }), l && (0, D.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, D.jsx)(Ae, {
              label: c || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
              hideTrack: !0,
              className: st({
                size: O
              })
            })
          })]
        })
      });

      function dt(e) {
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

      function lt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lt(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = dt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ut(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ft = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ct(ct({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ft(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ut(e.variantClassNames, e => ut(e, e => e.split(" ")[0]))
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
      const vt = (0, k.forwardRef)(({
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
          c = o ? ye.DX : d;
        return (0, D.jsx)(c, {
          ref: i,
          className: (0, Me.clsx)(pt({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });

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

      function bt(e, t) {
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
          t % 2 ? bt(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ct = "var(--foundry_9dxgbc2)",
        wt = "var(--foundry_9dxgbc3)",
        xt = (e => {
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
            for (var [l, c] of e.compoundVariants) gt(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mt(e.variantClassNames, e => mt(e, e => e.split(" ")[0]))
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
        _t = "var(--foundry_9dxgbc0)",
        jt = "var(--foundry_9dxgbc1)";
      const Ot = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const d = me(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, L.v6)({
            className: xt({
              size: l
            }),
            "data-testid": t,
            style: (0, I.D)({
              [_t]: n?.pulseColorBackground,
              [jt]: n?.pulseColorForeground,
              [Ct]: n?.gradientColorBackground,
              [wt]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          u = e ? ye.DX : "div";
        return (0, D.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, D.jsx)(ye.xV, {
            children: r
          }) : (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, D.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Pt(e) {
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

      function St(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? St(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : St(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Nt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rt(Rt({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Nt(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dt(e.variantClassNames, e => Dt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        It = kt({
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
      const zt = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? ye.DX : "p",
          i = (0, L.v6)({
            className: It({
              size: n,
              appearance: r
            })
          }, o);
        return (0, D.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var Lt = kt({
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
      const Tt = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? ye.DX : "p",
            s = (0, L.v6)({
              className: Lt({
                appearance: r
              })
            }, n);
          return (0, D.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        Et = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? ye.DX : "h1",
            a = (0, L.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, D.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var Vt = kt({
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
      const At = (0, k.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? ye.DX : `h${7===t?6:t}`,
          s = (0, L.v6)(n, {
            className: Vt({
              level: t
            })
          });
        return (0, D.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var Mt = kt({
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
      const qt = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? ye.DX : "p",
          i = (0, L.v6)({
            className: Mt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, D.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var Ht = kt({
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
      const Ft = {
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
        Bt = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? ye.DX : Ft[r] || "span",
            s = (0, L.v6)(n, {
              className: Ht({
                semantic: r
              })
            });
          return (0, D.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var Zt = r(93529),
        Xt = r(99206),
        Gt = r(34811);
      const Kt = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Wt = ([e, t]) => ({
        x: e,
        y: t
      }), Ut = (e, t) => (e.x = t.x, e.y = t.y, e), $t = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Yt = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Qt = (e, t, r) => Math.min(Math.max(e, t), r);
      var Jt = r(90004);

      function er(e) {
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

      function tr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tr(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = er(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var or = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ar = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rr(rr({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) or(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nr(e.variantClassNames, e => nr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        sr = ar({
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
        ir = ar({
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
      Zt.os.registerPlugin(Xt.L);
      const dr = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        lr = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        cr = T("var(--foundry_1a74xwb0)");
      var ur = r(53692);
      const fr = {
        "en-US": r.e(6972).then(r.bind(r, 46972)),
        "de-DE": r.e(1731).then(r.bind(r, 81731)),
        "es-ES": r.e(5505).then(r.bind(r, 5505)),
        "es-MX": r.e(5096).then(r.bind(r, 85096)),
        "fr-FR": r.e(2329).then(r.bind(r, 2329)),
        "it-IT": r.e(4971).then(r.bind(r, 94971)),
        "ja-JP": r.e(5660).then(r.bind(r, 5660)),
        "ko-KR": r.e(2346).then(r.bind(r, 42346)),
        "pl-PL": r.e(2309).then(r.bind(r, 32309)),
        "pt-BR": r.e(7465).then(r.bind(r, 57465)),
        "ru-RU": r.e(3195).then(r.bind(r, 83195)),
        "zh-CN": r.e(4326).then(r.bind(r, 54326)),
        "zh-TW": r.e(7390).then(r.bind(r, 97390))
      };
      class pr {
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
          return r ? t : Qt(t, this.max[e], this.min[e])
        }
      }
      class vr {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Yt(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Yt(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Yt(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class yr {
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
      class br {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Ut(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Ut(this.prevTap, {
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
      class hr {
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
          e.src = this.thumbnail.currentSrc ?? "", await Kt(e)
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
      class mr {
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
      class gr extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Cr extends yr {
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
          if (!this.dispatch(e, new gr(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class wr {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Wt(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Ut(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Wt(e);
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
            a = Ut({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Ut({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Ut(this.startPan, a)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || n || o) && (Ut(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class xr {
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
      class _r extends yr {
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
          super(), this.width = e, this.height = t, this.opener = new hr({
            slide: this
          }), this.bounds = new pr({
            slide: this
          }), this.dragHandler = new br({
            options: a,
            slide: this
          }), this.scrollWheel = new mr({
            slide: this
          }), this.zoomHandler = new wr({
            slide: this
          }), this.zoomLevels = new vr({
            options: r,
            slide: this
          }), this.tapHandler = new Cr({
            options: n,
            slide: this
          }), this.panAreaSize = new xr({
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
          e = Yt(e), r || (e = Qt(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), $t(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), $t(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Ut(this.pan, this.bounds.center)
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
      const jr = e => "dark" === e ? we.dark : we.light,
        Or = (0, ur.YK)({
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
      var Pr = "foundry_bc732x1";
      const Sr = (0, k.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, Jt.vC)(e, e => r?.(e), [r]), (0, D.jsx)(zt, {
        size: "XS",
        className: (0, Me.clsx)("foundry_bc732x0", {
          [Pr]: t
        }),
        asChild: !0,
        children: (0, D.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Rr, Dr = r(71433),
        Nr = r(44752),
        kr = r(85049),
        Ir = r(72579),
        zr = r(658),
        Lr = r(7198),
        Tr = Object.defineProperty,
        Er = (e, t) => Tr(e, "name", {
          value: t,
          configurable: !0
        }),
        Vr = "dismissableLayer.update",
        Ar = k.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        Mr = k.forwardRef(Er(function(e, t) {
          const {
            disableOutsidePointerEvents: r = !1,
            deferPointerDownOutside: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = k.useContext(Ar), [u, f] = k.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = k.useState({}), y = (0, kr.s)(t, f), b = Array.from(c.layers), [h] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = h ? b.indexOf(h) : -1, g = u ? b.indexOf(u) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= m, x = k.useRef(!1), _ = Br(e => {
            a?.(e), i?.(e), e.defaultPrevented || d?.()
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
          }), j = Zr(e => {
            if (n && x.current) return;
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (s?.(e), i?.(e), e.defaultPrevented || d?.())
          }, p), O = !!u && g === b.length - 1, P = (0, Lr.c)(e => {
            "Escape" === e.key && (o?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          });
          return k.useEffect(() => {
            if (O) return p.addEventListener("keydown", P, {
              capture: !0
            }), () => p.removeEventListener("keydown", P, {
              capture: !0
            })
          }, [p, O, P]), k.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Rr = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Xr(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Rr))
            }
          }, [u, p, r, c]), k.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Xr())
          }, [u, c]), k.useEffect(() => {
            const e = Er(() => v({}), "handleUpdate");
            return document.addEventListener(Vr, e), () => document.removeEventListener(Vr, e)
          }, []), (0, D.jsx)(zr.sG.div, {
            ...l,
            ref: y,
            style: {
              pointerEvents: C ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Nr.mK)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, Nr.mK)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, Nr.mK)(e.onPointerDownCapture, _.onPointerDownCapture)
          })
        }, "DismissableLayer")),
        qr = k.forwardRef(Er(function(e, t) {
          const r = k.useContext(Ar),
            n = k.useRef(null),
            o = (0, kr.s)(t, n);
          return k.useEffect(() => {
            const e = n.current;
            if (e) return r.branches.add(e), () => {
              r.branches.delete(e)
            }
          }, [r.branches]), (0, D.jsx)(zr.sG.div, {
            ...e,
            ref: o
          })
        }, "DismissableLayerBranch"));

      function Hr() {
        const e = k.useContext(Ar),
          [t, r] = k.useState(null);
        return k.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), r
      }
      Er(Hr, "useDismissableLayerSurface");
      var Fr = Er(() => !0, "IS_TRUE");

      function Br(e, t) {
        const {
          ownerDocument: r = globalThis?.document,
          deferPointerDownOutside: n = !1,
          isDeferredPointerDownOutsideRef: o,
          dismissableSurfaces: a,
          shouldHandlePointerDownOutside: s = Fr
        } = t, i = (0, Lr.c)(e), d = k.useRef(!1), l = k.useRef(!1), c = k.useRef(new Map), u = k.useRef(() => {});
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
            t instanceof Node && [...a].some(e => e.contains(t)) || c.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
              l.current && u.current()
            }, 0)
          }

          function p(e) {
            l.current && c.current.set(e.type, !1)
          }
          Er(e, "resetOutsideInteraction"), Er(t, "isOutsideInteractionIntercepted"), Er(f, "handleInteractionCapture"), Er(p, "handleInteractionBubble");
          const v = Er(a => {
              if (a.target && !d.current) {
                let f = function() {
                  r.removeEventListener("click", u.current);
                  const n = t();
                  e(), n || Gr("dismissableLayer.pointerDownOutside", i, p, {
                    discrete: !0
                  })
                };
                if (Er(f, "handleAndDispatchPointerDownOutsideEvent"), !s(a.target)) return r.removeEventListener("click", u.current), e(), void(d.current = !1);
                const p = {
                  originalEvent: a
                };
                l.current = !0, o.current = n && 0 === a.button, c.current.clear(), n && 0 === a.button ? (r.removeEventListener("click", u.current), u.current = f, r.addEventListener("click", u.current, {
                  once: !0
                })) : f()
              } else r.removeEventListener("click", u.current), e();
              d.current = !1
            }, "handlePointerDown"),
            y = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
          for (const e of y) r.addEventListener(e, f, !0), r.addEventListener(e, p);
          const b = window.setTimeout(() => {
            r.addEventListener("pointerdown", v)
          }, 0);
          return () => {
            window.clearTimeout(b), r.removeEventListener("pointerdown", v), r.removeEventListener("click", u.current);
            for (const e of y) r.removeEventListener(e, f, !0), r.removeEventListener(e, p)
          }
        }, [r, i, n, o, a, s]), {
          onPointerDownCapture: Er(() => d.current = !0, "onPointerDownCapture")
        }
      }

      function Zr(e, t = globalThis?.document) {
        const r = (0, Lr.c)(e),
          n = k.useRef(!1);
        return k.useEffect(() => {
          const e = Er(e => {
            e.target && !n.current && Gr("dismissableLayer.focusOutside", r, {
              originalEvent: e
            }, {
              discrete: !1
            })
          }, "handleFocus");
          return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
        }, [t, r]), {
          onFocusCapture: Er(() => n.current = !0, "onFocusCapture"),
          onBlurCapture: Er(() => n.current = !1, "onBlurCapture")
        }
      }

      function Xr() {
        const e = new CustomEvent(Vr);
        document.dispatchEvent(e)
      }

      function Gr(e, t, r, {
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
        }), n ? (0, zr.hO)(o, a) : o.dispatchEvent(a)
      }
      Er(Br, "usePointerDownOutside"), Er(Zr, "useFocusOutside"), Er(Xr, "dispatchUpdate"), Er(Gr, "handleAndDispatchCustomEvent");
      var Kr = Mr,
        Wr = qr,
        Ur = r(88918),
        $r = r(53213),
        Yr = r(60853),
        Qr = Object.defineProperty,
        Jr = (e, t) => Qr(e, "name", {
          value: t,
          configurable: !0
        }),
        en = k.forwardRef(Jr(function(e, t) {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, D.jsx)(zr.sG.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, D.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }, "Arrow")),
        tn = en,
        rn = r(9608),
        nn = r(7078),
        on = Object.defineProperty,
        an = (e, t) => on(e, "name", {
          value: t,
          configurable: !0
        }),
        sn = "Popper",
        [dn, ln] = (0, Ir.A)(sn),
        [cn, un] = dn(sn),
        fn = an(e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = k.useState(null), [a, s] = k.useState(void 0);
          return (0, D.jsx)(cn, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            placementState: a,
            setPlacementState: s,
            children: r
          })
        }, "Popper"),
        pn = k.forwardRef(an(function(e, t) {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, a = un("PopperAnchor", r), s = k.useRef(null), i = a.onAnchorChange, d = k.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, kr.s)(t, d), c = k.useRef(null);
          k.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && xn(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return n ? null : (0, D.jsx)(zr.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...o,
            ref: l
          })
        }, "PopperAnchor")),
        vn = "PopperContent",
        [yn, bn] = dn(vn),
        hn = k.forwardRef(an(function(e, t) {
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
            ...y
          } = e, b = un(vn, r), [h, m] = k.useState(null), g = (0, kr.s)(t, m), [C, w] = k.useState(null), x = (0, nn.X)(C), _ = x?.width ?? 0, j = x?.height ?? 0, O = n + ("center" !== a ? "-" + a : ""), P = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, S = Array.isArray(l) ? l : [l], R = S.length > 0, N = {
            padding: P,
            boundary: S.filter(Cn),
            altBoundary: R
          }, {
            refs: I,
            floatingStyles: z,
            placement: L,
            isPositioned: T,
            middlewareData: E
          } = (0, $r.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: an((...e) => (0, Yr.ll)(...e, {
              animationFrame: "always" === p
            }), "whileElementsMounted"),
            elements: {
              reference: b.anchor
            },
            middleware: [(0, $r.cY)({
              mainAxis: o + j,
              alignmentAxis: s
            }), d && (0, $r.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, $r.ER)() : void 0,
              ...N
            }), d && (0, $r.UU)({
              ...N
            }), (0, $r.Ej)({
              ...N,
              apply: an(({
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
              }, "apply")
            }), C && (0, $r.UE)({
              element: C,
              padding: i
            }), wn({
              arrowWidth: _,
              arrowHeight: j
            }), f && (0, $r.jD)({
              strategy: "referenceHidden",
              ...N,
              boundary: R ? N.boundary : void 0
            })]
          }), V = b.setPlacementState;
          (0, rn.N)(() => (V(L), () => {
            V(void 0)
          }), [L, V]);
          const [A, M] = xn(L), q = (0, Lr.c)(v);
          (0, rn.N)(() => {
            T && q?.()
          }, [T, q]);
          const H = E.arrow?.x,
            F = E.arrow?.y,
            B = 0 !== E.arrow?.centerOffset,
            [Z, X] = k.useState();
          return (0, rn.N)(() => {
            h && X(window.getComputedStyle(h).zIndex)
          }, [h]), (0, D.jsx)("div", {
            ref: I.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...z,
              transform: T ? z.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: Z,
              "--radix-popper-transform-origin": [E.transformOrigin?.x, E.transformOrigin?.y].join(" "),
              ...E.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, D.jsx)(yn, {
              scope: r,
              placedSide: A,
              placedAlign: M,
              onArrowChange: w,
              arrowX: H,
              arrowY: F,
              shouldHideArrow: B,
              children: (0, D.jsx)(zr.sG.div, {
                "data-side": A,
                "data-align": M,
                ...y,
                ref: g,
                style: {
                  ...y.style,
                  animation: T ? y.style?.animation : "none"
                }
              })
            })
          })
        }, "PopperContent")),
        mn = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        gn = k.forwardRef(an(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = bn("PopperArrow", r), a = mn[o.placedSide];
          return (0, D.jsx)("span", {
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
            children: (0, D.jsx)(tn, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }, "PopperArrow"));

      function Cn(e) {
        return null !== e
      }
      an(Cn, "isNotNull");
      var wn = an(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = xn(r), c = {
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
      }), "transformOrigin");

      function xn(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      an(xn, "getSideAndAlignFromPlacement");
      var _n = fn,
        jn = pn,
        On = hn,
        Pn = gn,
        Sn = r(84017),
        Rn = Object.defineProperty,
        Dn = (e, t) => Rn(e, "name", {
          value: t,
          configurable: !0
        }),
        Nn = k.forwardRef(Dn(function(e, t) {
          const {
            container: r,
            ...n
          } = e, [o, a] = k.useState(!1);
          (0, rn.N)(() => a(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? Sn.createPortal((0, D.jsx)(zr.sG.div, {
            ...n,
            ref: t
          }), s) : null
        }, "Portal")),
        kn = Object.defineProperty,
        In = (e, t) => kn(e, "name", {
          value: t,
          configurable: !0
        });

      function zn(e, t) {
        return k.useReducer((e, r) => t[e][r] ?? e, e)
      }
      In(zn, "useStateMachine");
      var Ln = In(e => {
        const {
          present: t,
          children: r
        } = e, n = Tn(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : k.Children.only(r), a = Vn(n.ref, Mn(o));
        return "function" == typeof r || n.isPresent ? k.cloneElement(o, {
          ref: a
        }) : null
      }, "Presence");

      function Tn(e) {
        const [t, r] = k.useState(), n = k.useRef(null), o = k.useRef(e), a = k.useRef("none"), s = k.useRef(void 0), i = e ? "mounted" : "unmounted", [d, l] = zn(i, {
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
          "mounted" === d ? (a.current = s.current ?? An(n.current), s.current = void 0) : a.current = "none"
        }, [d]), (0, rn.N)(() => {
          const t = n.current,
            r = o.current;
          if (r !== e) {
            const n = a.current,
              i = An(t);
            e ? (s.current = i, l("MOUNT")) : l("none" === i || "none" === t?.display ? "UNMOUNT" : r && n !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
          }
        }, [e, l]), (0, rn.N)(() => {
          if (t) {
            let e;
            const r = t.ownerDocument.defaultView ?? window,
              s = In(a => {
                const s = An(n.current).includes(CSS.escape(a.animationName));
                if (a.target === t && s && (l("ANIMATION_END"), !o.current)) {
                  const n = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                  })
                }
              }, "handleAnimationEnd"),
              i = In(e => {
                e.target === t && (a.current = An(n.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
              r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
            }
          }
          l("ANIMATION_END")
        }, [t, l]), {
          isPresent: ["mounted", "unmountSuspended"].includes(d),
          ref: k.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              n.current = t, s.current = An(t)
            } else n.current = null;
            r(e)
          }, [])
        }
      }

      function En(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function Vn(...e) {
        const t = k.useRef(e);
        return t.current = e, k.useCallback(e => {
          const r = t.current;
          let n = !1;
          const o = r.map(t => {
            const r = En(t, e);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let e = 0; e < o.length; e++) {
              const t = o[e];
              "function" == typeof t ? t() : En(r[e], null)
            }
          }
        }, [])
      }

      function An(e) {
        return e?.animationName || "none"
      }

      function Mn(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
      }
      In(Tn, "usePresence"), In(En, "setRef"), In(Vn, "useStableComposedRefs"), In(An, "getAnimationName"), In(Mn, "getElementRef");
      var qn = r(93237),
        Hn = r(15782),
        Fn = r(10333),
        Bn = Object.defineProperty,
        Zn = (e, t) => Bn(e, "name", {
          value: t,
          configurable: !0
        }),
        [Xn, Gn] = (0, Ir.A)("Tooltip", [ln]),
        Kn = ln(),
        Wn = 700,
        Un = "tooltip.open",
        [$n, Yn] = Xn("TooltipProvider"),
        Qn = Zn(e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Wn,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = k.useRef(!0), i = k.useRef(!1), d = k.useRef(0);
          return k.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, D.jsx)($n, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: k.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [n]),
            onClose: k.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: k.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        }, "TooltipProvider"),
        Jn = "Tooltip",
        [eo, to] = Xn(Jn),
        ro = Zn(e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = Yn(Jn, e.__scopeTooltip), l = Kn(t), [c, u] = k.useState(null), [f, p] = k.useState(void 0), v = (0, Ur.B)(), y = k.useRef(0), b = s ?? d.disableHoverableContent, h = i ?? d.delayDuration, m = k.useRef(!1), [g, C] = (0, Hn.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: Zn(e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Un))) : d.onClose(), a?.(e)
            }, "onChange"),
            caller: Jn
          }), w = k.useMemo(() => g ? m.current ? "delayed-open" : "instant-open" : "closed", [g]), x = k.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, m.current = !1, C(!0)
          }, [C]), _ = k.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, C(!1)
          }, [C]), j = k.useCallback(() => {
            window.clearTimeout(y.current), y.current = window.setTimeout(() => {
              m.current = !0, C(!0), y.current = 0
            }, h)
          }, [h, C]);
          k.useEffect(() => () => {
            y.current && (window.clearTimeout(y.current), y.current = 0)
          }, []);
          const O = f ?? v;
          return (0, D.jsx)(_n, {
            ...l,
            children: (0, D.jsx)(eo, {
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
                b ? _() : (window.clearTimeout(y.current), y.current = 0)
              }, [_, b]),
              onOpen: x,
              onClose: _,
              disableHoverableContent: b,
              children: r
            })
          })
        }, "Tooltip"),
        no = "TooltipTrigger",
        oo = k.forwardRef(Zn(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = to(no, r), a = Yn(no, r), s = Kn(r), i = k.useRef(null), d = (0, kr.s)(t, i, o.onTriggerChange), l = k.useRef(!1), c = k.useRef(!1), u = k.useCallback(() => l.current = !1, []);
          return k.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, D.jsx)(jn, {
            asChild: !0,
            ...s,
            children: (0, D.jsx)(zr.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, Nr.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Nr.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Nr.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Nr.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, Nr.mK)(e.onBlur, o.onClose),
              onClick: (0, Nr.mK)(e.onClick, o.onClose)
            })
          })
        }, "TooltipTrigger")),
        ao = "TooltipPortal",
        [so, io] = Xn(ao, {
          forceMount: void 0
        }),
        lo = Zn(e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = to(ao, t);
          return (0, D.jsx)(so, {
            scope: t,
            forceMount: r,
            children: (0, D.jsx)(Ln, {
              present: r || a.open,
              children: (0, D.jsx)(Nn, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        }, "TooltipPortal"),
        co = "TooltipContent",
        uo = k.forwardRef(Zn(function(e, t) {
          const r = io(co, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = to(co, e.__scopeTooltip);
          return (0, D.jsx)(Ln, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, D.jsx)(vo, {
              side: o,
              ...a,
              ref: t
            }) : (0, D.jsx)(fo, {
              side: o,
              ...a,
              ref: t
            })
          })
        }, "TooltipContent")),
        fo = k.forwardRef(Zn(function(e, t) {
          const r = to(co, e.__scopeTooltip),
            n = Yn(co, e.__scopeTooltip),
            o = k.useRef(null),
            a = (0, kr.s)(t, o),
            [s, i] = k.useState(null),
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
                o = Co([...ho(n, bo(n, r.getBoundingClientRect())), ...mo(t.getBoundingClientRect())]);
              i(o), u(!0)
            }, [u]);
          return k.useEffect(() => () => f(), [f]), k.useEffect(() => {
            if (d && c) {
              const e = Zn(e => p(e, c), "handleTriggerLeave"),
                t = Zn(e => p(e, d), "handleContentLeave");
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), k.useEffect(() => {
            if (s) {
              const e = Zn(e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || c?.contains(t),
                  o = !go(r, s);
                n ? f() : o && (f(), l())
              }, "handleTrackPointerGrace");
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, s, l, f]), (0, D.jsx)(vo, {
            ...e,
            ref: a
          })
        }, "TooltipContentHoverable")),
        po = (0, qn.Dc)("TooltipContent"),
        vo = k.forwardRef(Zn(function(e, t) {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            id: a,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...d
          } = e, l = to(co, r), c = Kn(r), {
            onClose: u
          } = l;
          k.useEffect(() => (document.addEventListener(Un, u), () => document.removeEventListener(Un, u)), [u]), k.useEffect(() => {
            if (l.trigger) {
              const e = Zn(e => {
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
          return (0, rn.N)(() => (f(a), () => {
            f(void 0)
          }), [a, f]), (0, D.jsx)(Mr, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, D.jsxs)(On, {
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
              children: [(0, D.jsx)(po, {
                children: n
              }), o ? (0, D.jsx)(Fn.bL, {
                id: l.contentId,
                role: "tooltip",
                children: o
              }) : null]
            })
          })
        }, "TooltipContentImpl")),
        yo = k.forwardRef(Zn(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Kn(r);
          return (0, D.jsx)(Pn, {
            ...o,
            ...n,
            ref: t
          })
        }, "TooltipArrow"));

      function bo(e, t) {
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
      }

      function ho(e, t, r = 5) {
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

      function mo(e) {
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

      function go(e, t) {
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
      }

      function Co(e) {
        const t = e.slice();
        return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0), wo(t)
      }

      function wo(e) {
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
      Zn(bo, "getExitSideFromRect"), Zn(ho, "getPaddedExitPoints"), Zn(mo, "getPointsFromRect"), Zn(go, "isPointInPolygon"), Zn(Co, "getHull"), Zn(wo, "getHullPresorted");
      var xo = Qn,
        _o = ro,
        jo = oo,
        Oo = lo,
        Po = uo,
        So = yo;
      const Ro = (0, k.createContext)(null);

      function Do() {
        const e = (0, k.useContext)(Ro);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const No = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          isDisabled: o,
          ...a
        }) => {
          const [s = !1, i] = (0, ve.ic)({
            defaultProp: r,
            prop: !o && a.isOpen,
            onChange: n
          });
          return (0, D.jsx)(xo, {
            delayDuration: t,
            children: (0, D.jsx)(Ro.Provider, {
              value: {
                isOpen: s,
                ...a
              },
              children: (0, D.jsx)(_o, {
                open: s,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        ko = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, D.jsx)(jo, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Io = (0, k.forwardRef)(({
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
          } = Do(), c = (0, ve.jt)(), u = (0, Dr.CS)(Po), f = (0, Dr.pn)(l, {
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
            config: Dr.$W.stiff,
            immediate: c
          }), p = (0, L.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, D.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        zo = (0, k.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, L.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, D.jsx)(So, {
            ...r,
            ref: t
          })
        }),
        Lo = Oo;
      var To = r(76844),
        Eo = r(12430),
        Vo = r(19046),
        Ao = Object.defineProperty,
        Mo = (e, t) => Ao(e, "name", {
          value: t,
          configurable: !0
        });

      function qo(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, Ir.A)(t),
          [o, a] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = Mo(e => {
            const {
              scope: t,
              children: r
            } = e, n = k.useRef(null), a = k.useRef(new Map).current;
            return (0, D.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: n,
              children: r
            })
          }, "CollectionProvider");
        s.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, qn.TL)(i),
          l = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(i, r), s = (0, kr.s)(t, o.collectionRef);
            return (0, D.jsx)(d, {
              ref: s,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, qn.TL)(c),
          p = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = k.useRef(null), i = (0, kr.s)(t, s), d = a(c, r);
            return k.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              d.itemMap.delete(s)
            })), (0, D.jsx)(f, {
              [u]: "",
              ref: i,
              children: n
            })
          });

        function v(t) {
          const r = a(e + "CollectionConsumer", t);
          return k.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }
        return p.displayName = c, Mo(v, "useCollection"), [{
          Provider: s,
          Slot: l,
          ItemSlot: p
        }, v, n]
      }
      Mo(qo, "createCollection");
      var Ho = new WeakMap,
        Fo = class e extends Map {
          static {
            Mo(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], Ho.set(this, !0)
          }
          set(e, t) {
            return Ho.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, r) {
            const n = this.has(t),
              o = this.#e.length,
              a = Xo(e);
            let s = a >= 0 ? a : o + a;
            const i = s < 0 || s >= o ? -1 : s;
            if (i === this.size || n && i === this.size - 1 || -1 === i) return this.set(t, r), this;
            const d = this.size + (n ? 0 : 1);
            a < 0 && s++;
            const l = [...this.#e];
            let c, u = !1;
            for (let e = s; e < d; e++)
              if (s === e) {
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
            const t = Bo(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = Bo(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return Bo(this.#e, e)
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

      function Bo(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const r = Zo(e, t);
        return -1 === r ? void 0 : e[r]
      }

      function Zo(e, t) {
        const r = e.length,
          n = Xo(t),
          o = n >= 0 ? n : r + n;
        return o < 0 || o >= r ? -1 : o
      }

      function Xo(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function Go(e, t) {
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

      function Ko(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function Wo(e, t) {
        return e[1].element && t[1].element ? Ko(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function Uo(e) {
        return new MutationObserver(t => {
          for (const r of t)
            if ("childList" === r.type) return void e()
        })
      }
      Mo(Bo, "at"), Mo(Zo, "toSafeIndex"), Mo(Xo, "toSafeInteger"), Mo(function(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, Ir.A)(t),
          [o, a] = r(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new Fo,
            setItemMap: Mo(() => {}, "setItemMap")
          }),
          s = Mo(({
            state: e,
            ...t
          }) => e ? (0, D.jsx)(d, {
            ...t,
            state: e
          }) : (0, D.jsx)(i, {
            ...t
          }), "CollectionProvider");
        s.displayName = t;
        const i = Mo(e => {
          const t = b();
          return (0, D.jsx)(d, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        i.displayName = t + "Init";
        const d = Mo(e => {
          const {
            scope: t,
            children: r,
            state: n
          } = e, a = k.useRef(null), [s, i] = k.useState(null), d = (0, kr.s)(a, i), [l, c] = n;
          return k.useEffect(() => {
            if (!s) return;
            const e = Uo(() => {});
            return e.observe(s, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [s]), (0, D.jsx)(o, {
            scope: t,
            itemMap: l,
            setItemMap: c,
            collectionRef: d,
            collectionRefObject: a,
            collectionElement: s,
            children: r
          })
        }, "CollectionProviderImpl");
        d.displayName = t + "Impl";
        const l = e + "CollectionSlot",
          c = (0, qn.TL)(l),
          u = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(l, r), s = (0, kr.s)(t, o.collectionRef);
            return (0, D.jsx)(c, {
              ref: s,
              children: n
            })
          });
        u.displayName = l;
        const f = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          v = (0, qn.TL)(f),
          y = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = k.useRef(null), [i, d] = k.useState(null), l = (0, kr.s)(t, s, d), c = a(f, r), {
              setItemMap: u
            } = c, y = k.useRef(o);
            Go(y.current, o) || (y.current = o);
            const b = y.current;
            return k.useEffect(() => {
              const e = b;
              return u(t => i ? t.has(i) ? t.set(i, {
                ...e,
                element: i
              }).toSorted(Wo) : (t.set(i, {
                ...e,
                element: i
              }), t.toSorted(Wo)) : t), () => {
                u(e => i && e.has(i) ? (e.delete(i), new Fo(e)) : e)
              }
            }, [i, b, u]), (0, D.jsx)(v, {
              [p]: "",
              ref: l,
              children: n
            })
          });

        function b() {
          return k.useState(new Fo)
        }

        function h(t) {
          const {
            itemMap: r
          } = a(e + "CollectionConsumer", t);
          return r
        }
        return y.displayName = f, Mo(b, "useInitCollection"), Mo(h, "useCollection"), [{
          Provider: s,
          Slot: u,
          ItemSlot: y
        }, {
          createCollectionScope: n,
          useCollection: h,
          useInitCollection: b
        }]
      }, "createCollection"), Mo(Go, "shallowEqual"), Mo(Ko, "isElementPreceding"), Mo(Wo, "sortByDocumentPosition"), Mo(Uo, "getChildListObserver");
      var $o = Object.defineProperty,
        Yo = (e, t) => $o(e, "name", {
          value: t,
          configurable: !0
        }),
        Qo = ["PageUp", "PageDown"],
        Jo = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        ea = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        ta = "Slider",
        [ra, na, oa] = qo(ta),
        [aa, sa] = (0, Ir.A)(ta, [oa]),
        [ia, da] = aa(ta),
        la = k.forwardRef(Yo(function(e, t) {
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
            onValueChange: u = Yo(() => {}, "onValueChange"),
            onValueCommit: f = Yo(() => {}, "onValueCommit"),
            inverted: p = !1,
            form: v,
            ...y
          } = e, b = k.useRef(new Set), h = k.useRef(0), m = k.useRef(!1), g = "horizontal" === s ? fa : pa, [C, w] = k.useState(null), x = (0, kr.s)(t, w), [_ = [], j] = (0, Hn.i)({
            prop: c,
            defaultProp: l,
            onChange: Yo(e => {
              const t = [...b.current];
              t[h.current]?.focus({
                preventScroll: !0,
                focusVisible: m.current
              }), m.current = !1, u(e)
            }, "onChange")
          }), O = k.useRef(_), P = k.useRef(_);

          function S(e) {
            I(e, Ra(_, e))
          }

          function R(e) {
            I(e, h.current)
          }

          function N() {
            String(_) !== String(O.current) && f(_)
          }

          function I(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = za(a),
              i = La(Math.round((e - n) / a) * a + n, s),
              l = (0, To.q)(i, [n, o]);
            j((e = []) => {
              const n = Oa(e, l, t);
              if (ka(n, d * a)) {
                h.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return k.useEffect(() => {
            const e = v ? C?.ownerDocument.getElementById(v) : C?.closest("form");
            if (e instanceof HTMLFormElement) {
              const t = Yo(() => j(P.current), "reset");
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [C, v, j]), Yo(S, "handleSlideStart"), Yo(R, "handleSlideMove"), Yo(N, "handleSlideEnd"), Yo(I, "updateValues"), (0, D.jsx)(ia, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: h,
            thumbs: b.current,
            values: _,
            orientation: s,
            form: v,
            children: (0, D.jsx)(ra.Provider, {
              scope: e.__scopeSlider,
              children: (0, D.jsx)(ra.Slot, {
                scope: e.__scopeSlider,
                children: (0, D.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: x,
                  onPointerDown: (0, Nr.mK)(y.onPointerDown, () => {
                    i || (O.current = _, m.current = !1)
                  }),
                  min: n,
                  max: o,
                  inverted: p,
                  onSlideStart: i ? void 0 : S,
                  onSlideMove: i ? void 0 : R,
                  onSlideEnd: i ? void 0 : N,
                  onHomeKeyDown: () => {
                    i || (m.current = !0, I(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (m.current = !0, I(o, _.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      m.current = !0;
                      const r = Qo.includes(e.key) || e.shiftKey && Jo.includes(e.key) ? 10 : 1,
                        o = h.current;
                      I(Ta(_[o], {
                        min: n,
                        step: a,
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
        [ca, ua] = aa(ta, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1
        }),
        fa = k.forwardRef(Yo(function(e, t) {
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
          } = e, [u, f] = k.useState(null), p = (0, kr.s)(t, f), v = k.useRef(void 0), y = (0, Eo.jH)(o), b = "ltr" === y, h = b && !a || !b && a;

          function m(e) {
            const t = v.current || u.getBoundingClientRect(),
              o = Ia([0, t.width], h ? [r, n] : [n, r]);
            return v.current = t, o(e - t.left)
          }
          return Yo(m, "getValueFromPointer"), (0, D.jsx)(ca, {
            scope: e.__scopeSlider,
            startEdge: h ? "left" : "right",
            endEdge: h ? "right" : "left",
            direction: h ? 1 : -1,
            size: "width",
            children: (0, D.jsx)(va, {
              dir: y,
              "data-orientation": "horizontal",
              ...c,
              ref: p,
              style: {
                ...c.style,
                "--radix-slider-thumb-transform": "translateX(-50%)"
              },
              onSlideStart: e => {
                const t = m(e.clientX);
                s?.(t)
              },
              onSlideMove: e => {
                const t = m(e.clientX);
                i?.(t)
              },
              onSlideEnd: () => {
                v.current = void 0, d?.()
              },
              onStepKeyDown: e => {
                const t = ea[h ? "from-left" : "from-right"].includes(e.key);
                l?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderHorizontal")),
        pa = k.forwardRef(Yo(function(e, t) {
          const {
            min: r,
            max: n,
            inverted: o,
            onSlideStart: a,
            onSlideMove: s,
            onSlideEnd: i,
            onStepKeyDown: d,
            ...l
          } = e, c = k.useRef(null), u = (0, kr.s)(t, c), f = k.useRef(void 0), p = !o;

          function v(e) {
            const t = f.current || c.current.getBoundingClientRect(),
              o = Ia([0, t.height], p ? [n, r] : [r, n]);
            return f.current = t, o(e - t.top)
          }
          return Yo(v, "getValueFromPointer"), (0, D.jsx)(ca, {
            scope: e.__scopeSlider,
            startEdge: p ? "bottom" : "top",
            endEdge: p ? "top" : "bottom",
            size: "height",
            direction: p ? 1 : -1,
            children: (0, D.jsx)(va, {
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
                const t = ea[p ? "from-bottom" : "from-top"].includes(e.key);
                d?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderVertical")),
        va = k.forwardRef(Yo(function(e, t) {
          const {
            __scopeSlider: r,
            onSlideStart: n,
            onSlideMove: o,
            onSlideEnd: a,
            onHomeKeyDown: s,
            onEndKeyDown: i,
            onStepKeyDown: d,
            ...l
          } = e, c = da(ta, r);
          return (0, D.jsx)(zr.sG.span, {
            ...l,
            ref: t,
            onKeyDown: (0, Nr.mK)(e.onKeyDown, e => {
              "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Qo.concat(Jo).includes(e.key) && (d(e), e.preventDefault())
            }),
            onPointerDown: (0, Nr.mK)(e.onPointerDown, e => {
              const t = e.target;
              t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
                preventScroll: !0,
                focusVisible: !1
              }) : n(e)
            }),
            onPointerMove: (0, Nr.mK)(e.onPointerMove, e => {
              e.target.hasPointerCapture(e.pointerId) && o(e)
            }),
            onPointerUp: (0, Nr.mK)(e.onPointerUp, e => {
              const t = e.target;
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
            })
          })
        }, "SliderImpl")),
        ya = k.forwardRef(Yo(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = da("SliderTrack", r);
          return (0, D.jsx)(zr.sG.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...n,
            ref: t
          })
        }, "SliderTrack")),
        ba = "SliderRange",
        ha = k.forwardRef(Yo(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = da(ba, r), a = ua(ba, r), s = k.useRef(null), i = (0, kr.s)(t, s), d = o.values.length, l = o.values.map(e => Pa(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, D.jsx)(zr.sG.span, {
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
        }, "SliderRange")),
        [ma, ga] = aa("SliderThumb");

      function Ca(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, a = da("SliderThumbProvider", t), s = na(t), [i, d] = k.useState(null), l = k.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, nn.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : Pa(f, a.min, a.max);
        k.useEffect(() => {
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
        return (0, D.jsx)(ma, {
          scope: t,
          ...y,
          children: Ea(o) ? o(y) : n
        })
      }
      Yo(Ca, "SliderThumbProvider");
      var wa = "SliderThumbTrigger",
        xa = k.forwardRef(Yo(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = da(wa, r), a = ua(wa, r), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = ga(wa, r), u = (0, kr.s)(t, c), f = Sa(s, o.values.length), p = l?.[a.size], v = p ? Da(p, d, a.direction) : 0;
          return (0, D.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, D.jsx)(ra.ItemSlot, {
              scope: r,
              children: (0, D.jsx)(zr.sG.span, {
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
                onFocus: (0, Nr.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        }, "SliderThumbTrigger")),
        _a = k.forwardRef(Yo(function(e, t) {
          const {
            __scopeSlider: r,
            name: n,
            ...o
          } = e;
          return (0, D.jsx)(Ca, {
            __scopeSlider: r,
            name: n,
            internal_do_not_use_render: ({
              index: e,
              isFormControl: n
            }) => (0, D.jsxs)(D.Fragment, {
              children: [(0, D.jsx)(xa, {
                ...o,
                ref: t,
                __scopeSlider: r
              }), n ? (0, D.jsx)(ja, {
                __scopeSlider: r
              }, e) : null]
            })
          })
        }, "SliderThumb")),
        ja = k.forwardRef(Yo(function({
          __scopeSlider: e,
          ...t
        }, r) {
          const {
            value: n,
            name: o,
            form: a
          } = ga("SliderBubbleInput", e), s = k.useRef(null), i = (0, kr.s)(s, r), d = (0, Vo.Z)(n);
          return k.useEffect(() => {
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
          }, [d, n]), (0, D.jsx)(zr.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: a,
            ...t,
            ref: i,
            defaultValue: n
          })
        }, "SliderBubbleInput"));

      function Oa(e = [], t, r) {
        const n = [...e];
        return n[r] = t, n.sort((e, t) => e - t)
      }

      function Pa(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, To.q)(n, [0, 100])
      }

      function Sa(e, t) {
        return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
      }

      function Ra(e, t) {
        if (1 === e.length) return 0;
        const r = e.map(e => Math.abs(e - t)),
          n = Math.min(...r);
        return r.indexOf(n)
      }

      function Da(e, t, r) {
        const n = e / 2;
        return (n - Ia([0, 50], [0, n])(t) * r) * r
      }

      function Na(e) {
        return e.slice(0, -1).map((t, r) => e[r + 1] - t)
      }

      function ka(e, t) {
        if (t > 0) {
          const r = Na(e);
          return Math.min(...r) >= t
        }
        return !0
      }

      function Ia(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function za(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
          return Math.max(0, n.length - o)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function La(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function Ta(e, {
        min: t,
        step: r,
        direction: n,
        multiplier: o
      }) {
        const a = za(r),
          s = (e - t) / r,
          i = Math.round(s);
        let d;
        return d = La(i * r + t, a) === La(e, a) ? i + o * n : n > 0 ? Math.ceil(s) : Math.floor(s), La(d * r + t, a)
      }

      function Ea(e) {
        return "function" == typeof e
      }
      Yo(Oa, "getNextSortedValues"), Yo(Pa, "convertValueToPercentage"), Yo(Sa, "getLabel"), Yo(Ra, "getClosestValueIndex"), Yo(Da, "getThumbInBoundsOffset"), Yo(Na, "getStepsBetweenValues"), Yo(ka, "hasMinStepsBetweenValues"), Yo(Ia, "linearScale"), Yo(za, "getDecimalCount"), Yo(La, "roundValue"), Yo(Ta, "getNextStepValue"), Yo(Ea, "isFunction");
      var Va = Object.defineProperty,
        Aa = (e, t) => Va(e, "name", {
          value: t,
          configurable: !0
        }),
        Ma = "focusScope.autoFocusOnMount",
        qa = "focusScope.autoFocusOnUnmount",
        Ha = {
          bubbles: !1,
          cancelable: !0
        },
        Fa = k.forwardRef(Aa(function(e, t) {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = k.useState(null), l = (0, Lr.c)(o), c = (0, Lr.c)(a), u = k.useRef(null), f = (0, kr.s)(t, d), p = k.useRef({
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
                  i.contains(t) ? u.current = t : Ua(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || Ua(u.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Ua(i)
                };
              Aa(e, "handleFocusIn"), Aa(t, "handleFocusOut"), Aa(r, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
              $a.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(Ma, Ha);
                i.addEventListener(Ma, l), i.dispatchEvent(t), t.defaultPrevented || (Ba(Ja(Xa(i)), {
                  select: !0
                }), document.activeElement === e && Ua(i))
              }
              return () => {
                i.removeEventListener(Ma, l), setTimeout(() => {
                  const t = new CustomEvent(qa, Ha);
                  i.addEventListener(qa, c), i.dispatchEvent(t), t.defaultPrevented || Ua(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(qa, c), $a.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const v = k.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, a] = Za(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && Ua(a, {
                select: !0
              })) : (e.preventDefault(), r && Ua(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, D.jsx)(zr.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        }, "FocusScope"));

      function Ba(e, {
        select: t = !1
      } = {}) {
        const r = document.activeElement;
        for (const n of e)
          if (Ua(n, {
              select: t
            }), document.activeElement !== r) return
      }

      function Za(e) {
        const t = Xa(e);
        return [Ga(t, e), Ga(t.reverse(), e)]
      }

      function Xa(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: Aa(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Ga(e, t) {
        const r = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const n of e)
          if (!(r ? !n.checkVisibility({
              checkVisibilityCSS: !0
            }) : Ka(n, {
              upTo: t
            }))) return n
      }

      function Ka(e, {
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

      function Wa(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function Ua(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && Wa(e) && t && e.select()
        }
      }
      Aa(Ba, "focusFirst"), Aa(Za, "getTabbableEdges"), Aa(Xa, "getTabbableCandidates"), Aa(Ga, "findVisible"), Aa(Ka, "isHidden"), Aa(Wa, "isSelectableInput"), Aa(Ua, "focus");
      var $a = Ya();

      function Ya() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Qa(e, t), e.unshift(t)
          },
          remove(t) {
            e = Qa(e, t), e[0]?.resume()
          }
        }
      }

      function Qa(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }

      function Ja(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      Aa(Ya, "createFocusScopesStack"), Aa(Qa, "arrayRemove"), Aa(Ja, "removeLinks");
      var es = r(86187),
        ts = r(38100),
        rs = r(45787),
        ns = Object.defineProperty,
        os = (e, t) => ns(e, "name", {
          value: t,
          configurable: !0
        }),
        as = "Dialog",
        [ss, is] = (0, Ir.A)(as),
        [ds, ls] = ss(as),
        cs = os(e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !0
          } = e, i = k.useRef(null), d = k.useRef(null), [l, c] = (0, Hn.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: as
          }), [u, f] = k.useState(0), [p, v] = k.useState(0);
          return (0, D.jsx)(ds, {
            scope: t,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Ur.B)(),
            titleId: (0, Ur.B)(),
            descriptionId: (0, Ur.B)(),
            titlePresent: u > 0,
            descriptionPresent: p > 0,
            setTitleCount: f,
            setDescriptionCount: v,
            open: l,
            onOpenChange: c,
            onOpenToggle: k.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: r
          })
        }, "Dialog"),
        us = k.forwardRef(os(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = ls("DialogTrigger", r), a = (0, kr.s)(t, o.triggerRef);
          return (0, D.jsx)(zr.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": Rs(o.open),
            ...n,
            ref: a,
            onClick: (0, Nr.mK)(e.onClick, o.onOpenToggle)
          })
        }, "DialogTrigger")),
        fs = "DialogPortal",
        [ps, vs] = ss(fs, {
          forceMount: void 0
        }),
        ys = os(e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = ls(fs, t);
          return (0, D.jsx)(ps, {
            scope: t,
            forceMount: r,
            children: k.Children.map(n, e => (0, D.jsx)(Ln, {
              present: r || a.open,
              children: (0, D.jsx)(Nn, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        }, "DialogPortal"),
        bs = "DialogOverlay",
        hs = k.forwardRef(os(function(e, t) {
          const r = vs(bs, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = ls(bs, e.__scopeDialog);
          return a.modal ? (0, D.jsx)(Ln, {
            present: n || a.open,
            children: (0, D.jsx)(gs, {
              ...o,
              ref: t
            })
          }) : null
        }, "DialogOverlay")),
        ms = (0, qn.TL)("DialogOverlay.RemoveScroll"),
        gs = k.forwardRef(os(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = ls(bs, r), a = Hr(), s = (0, kr.s)(t, a);
          return (0, D.jsx)(ts.A, {
            as: ms,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, D.jsx)(zr.sG.div, {
              "data-state": Rs(o.open),
              ...n,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }, "DialogOverlayImpl")),
        Cs = "DialogContent",
        ws = k.forwardRef(os(function(e, t) {
          const r = vs(Cs, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = ls(Cs, e.__scopeDialog);
          return (0, D.jsx)(Ln, {
            present: n || a.open,
            children: a.modal ? (0, D.jsx)(xs, {
              ...o,
              ref: t
            }) : (0, D.jsx)(_s, {
              ...o,
              ref: t
            })
          })
        }, "DialogContent")),
        xs = k.forwardRef(os(function(e, t) {
          const r = ls(Cs, e.__scopeDialog),
            n = k.useRef(null),
            o = (0, kr.s)(t, r.contentRef, n);
          return k.useEffect(() => {
            const e = n.current;
            if (e) return (0, rs.Eq)(e)
          }, []), (0, D.jsx)(js, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            onCloseAutoFocus: (0, Nr.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Nr.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, Nr.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }, "DialogContentModal")),
        _s = k.forwardRef(os(function(e, t) {
          const r = ls(Cs, e.__scopeDialog),
            n = k.useRef(!1),
            o = k.useRef(!1);
          return (0, D.jsx)(js, {
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
        }, "DialogContentNonModal")),
        js = k.forwardRef(os(function(e, t) {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...s
          } = e, i = ls(Cs, r);
          return (0, es.Oh)(), (0, D.jsx)(D.Fragment, {
            children: (0, D.jsx)(Fa, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, D.jsx)(Mr, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionPresent ? i.descriptionId : void 0,
                "aria-labelledby": i.titlePresent ? i.titleId : void 0,
                "data-state": Rs(i.open),
                ...s,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }, "DialogContentImpl")),
        Os = k.forwardRef(os(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = ls("DialogTitle", r), {
            setTitleCount: a
          } = o;
          return (0, rn.N)(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, D.jsx)(zr.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        }, "DialogTitle")),
        Ps = k.forwardRef(os(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = ls("DialogDescription", r), {
            setDescriptionCount: a
          } = o;
          return (0, rn.N)(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, D.jsx)(zr.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        }, "DialogDescription")),
        Ss = k.forwardRef(os(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = ls("DialogClose", r);
          return (0, D.jsx)(zr.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, Nr.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        }, "DialogClose"));

      function Rs(e) {
        return e ? "open" : "closed"
      }
      os(Rs, "getState");
      const Ds = (0, k.createContext)({
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
        Ns = ({
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
              } = he();
              return e
            })(),
            p = (0, ve.rl)(),
            v = (0, k.useRef)(null),
            y = (0, k.useRef)(null),
            b = (0, k.useRef)(null),
            h = (0, k.useRef)(null),
            m = (0, k.useRef)(null),
            g = (0, k.useRef)(null),
            C = (0, k.useRef)(null),
            w = (0, k.useRef)(null),
            x = (0, k.useRef)(null),
            _ = (0, k.useRef)(null),
            j = (0, k.useRef)(null),
            O = (0, k.useRef)(null),
            P = (0, k.useRef)(null),
            S = (0, k.useRef)(null),
            R = (0, k.useRef)(null),
            N = (0, k.useRef)(null),
            I = (0, k.useRef)(null),
            z = (0, k.useRef)(null),
            L = (0, k.useRef)(null),
            [T = !1, E] = (0, ve.ic)({
              prop: t || n,
              onChange: r
            }),
            V = (0, k.useRef)(null);
          return V.current || (V.current = new _r({
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
          })), (0, D.jsx)(ur.Dk, {
            messages: fr,
            locale: f,
            children: (0, D.jsx)(Ds.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: y,
                thumbnailRef: b,
                openIconRef: h,
                overlayRef: m,
                contentRef: g,
                containerRef: C,
                zoomPanRef: w,
                imageRef: x,
                placeholderRef: _,
                captionRef: j,
                controlsRef: O,
                closeRef: P,
                zoomRef: S,
                zoomInRef: R,
                zoomSliderRef: N,
                zoomOutRef: I,
                resetRef: z,
                downloadRef: L,
                open: T,
                setOpen: E,
                altText: e,
                hideTrigger: c,
                slide: V.current
              },
              children: (0, D.jsx)(Is, {
                ...u
              })
            })
          })
        },
        ks = (0, k.createContext)({
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
        Is = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, k.useContext)(Ds), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, Xt.L)(), {
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
            } = (0, k.useContext)(Ds), p = (0, k.useRef)(null);
            p.current || (p.current = Zt.os.timeline({
              defaults: dr
            }));
            const v = (0, k.useCallback)(e => {
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), Zt.os.set([u.current, f.current], {
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
                }), Zt.os.set([f.current], {
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
                  [cr]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [cr]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Kt(f.current), t.closing || (Zt.os.set([f.current], {
                  visibility: "visible",
                  ...lr
                }), Zt.os.set([u.current], {
                  visibility: "hidden",
                  ...lr
                }))))
              }),
              b = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              h = (0, k.useCallback)(async e => {
                e || (window.addEventListener("click", v), await b(), window.removeEventListener("click", v)), r(e)
              }, [r]),
              m = (0, k.useCallback)(() => h(!1), [h]);
            return {
              onOpenChange: h,
              openAnim: y,
              close: m
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
            } = (0, Xt.L)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, k.useContext)(Ds), d = t(async e => {
              r.zoomTo(e), Zt.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...lr
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), Zt.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...lr
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), Zt.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...lr
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), Zt.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...lr
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Zt.os.to([a.current], {
                opacity: e,
                [cr]: t,
                ...lr
              })
            }), p = t(async () => {
              Zt.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...lr
              })
            }), v = (0, k.useCallback)(() => {
              n.current && o.current && (Zt.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...lr
              }), Zt.os.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...lr
              }), Zt.os.set([s.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, k.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", v), window.addEventListener("resize", r.resize.bind(r)), () => {
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
          }), u = (0, L.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, D.jsx)(ks.Provider, {
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
            children: (0, D.jsx)(cs, {
              ...u
            })
          })
        },
        zs = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, ur.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, k.useContext)(Ds),
            d = (0, ve.UP)(a, n),
            l = (0, L.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Or.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, D.jsx)(us, {
            ref: d,
            ...l,
            children: (0, D.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, D.jsx)(ye.xV, {
                children: t
              })
            })
          })
        }),
        Ls = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, k.useContext)(Ds), a = (0, ve.UP)(o, n), s = (0, L.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? ye.DX : "img";
          return (0, D.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ts = (0, k.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, k.useContext)(Ds), o = (0, ve.UP)(n, r), a = (0, L.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? ye.DX : qe.Maximize2;
          return (0, D.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        Es = ({
          ...e
        }) => (0, D.jsx)(ys, {
          ...e
        }),
        Vs = (0, k.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, k.useContext)(Ds), o = (0, ve.UP)(n, r), a = (0, L.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, D.jsx)(hs, {
            ref: o,
            ...a
          })
        }),
        As = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, k.useContext)(ks), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, k.useContext)(Ds), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, k.useContext)(Ds), [t, r] = (0, k.useState)(e.getCursor()), n = (0, k.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, k.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [we.tokens, we.typography, we.grid, jr("dark")].join(" ");
          const c = (0, ve.UP)(a, n),
            u = (0, L.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, Me.clsx)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, D.jsxs)(ws, {
            ref: c,
            ...u,
            children: [(0, D.jsx)(ye.s6, {
              children: (0, D.jsx)(Os, {
                children: s
              })
            }), t]
          })
        }),
        Ms = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, k.useContext)(Ds);
          (() => {
            const {
              contextSafe: e
            } = (0, Xt.L)(), {
              toggleControls: t
            } = (0, k.useContext)(ks), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, k.useContext)(Ds), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Zt.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...lr
              }), Zt.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...lr
              }), Zt.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...lr
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Zt.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...lr
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Zt.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...lr
              }), Zt.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...lr
              }), Zt.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...lr
              })))
            }), c = (0, k.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, ve.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Gt.NH)({
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
          const a = (0, ve.UP)(o, n),
            s = (0, L.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, D.jsx)("div", {
            ref: a,
            ...s,
            children: (0, D.jsxs)(qs, {
              children: [(0, D.jsx)(Hs, {}), t]
            })
          })
        }),
        qs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, k.useContext)(Ds), a = (0, ve.UP)(o, n), s = (0, L.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? ye.DX : "div";
          return (0, D.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Hs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, k.useContext)(Ds), a = (0, ve.UP)(o, n), s = (0, L.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? ye.DX : "img";
          return (0, D.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Fs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, k.useContext)(Ds), a = (0, ve.UP)(o, n), s = (0, L.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? ye.DX : "img";
          return (0, D.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Bs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, k.useContext)(Ds), a = (0, ve.UP)(o, n), s = (0, L.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? ye.DX : "p";
          return (0, D.jsx)(Ps, {
            asChild: !0,
            children: (0, D.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Zs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, k.useContext)(Ds);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, k.useContext)(ks);
            (0, Jt.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Jt.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Jt.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, Jt.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, ve.UP)(o, n),
            s = (0, L.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? ye.DX : "div";
          return (0, D.jsx)(Jt.Hb, {
            children: (0, D.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Xs = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, D.jsx)(D.Fragment, {
            children: n
          });
          const a = (0, L.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, D.jsxs)(No, {
            delayDuration: 0,
            children: [(0, D.jsx)(ko, {
              children: n
            }), (0, D.jsxs)(Io, {
              ...a,
              children: [(0, D.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, D.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, D.jsx)(zo, {})]
            })]
          })
        },
        Gs = (0, k.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, L.v6)(e, {
            isInline: !0
          });
          return (0, D.jsx)(Sr, {
            ref: t,
            ...r
          })
        }),
        Ks = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, ur.tz)(),
            {
              zoomRef: i
            } = (0, k.useContext)(Ds),
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
              } = (0, k.useContext)(Ds), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, k.useContext)(ks), [o, a] = (0, k.useState)(!1), [s, i] = (0, k.useState)(!1), [d, l] = (0, k.useState)(0), [c, u] = (0, k.useState)(0), [f, p] = (0, k.useState)(0), v = (0, k.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), y = (0, k.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, k.useEffect)(() => (e.addEventListener("zoom", v), () => {
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
            b = (0, ve.UP)(i, a),
            h = (0, L.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            m = t ? ye.DX : "div";
          return (0, D.jsxs)(m, {
            ref: b,
            ...h,
            children: [(0, D.jsx)(Xs, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Or.ZoomInButtonLabel),
              metadata: s.formatMessage(Or.ZoomInButtonTooltip, {
                shortcut: (0, D.jsx)(Gs, {
                  shortcut: "+"
                })
              }),
              children: (0, D.jsx)(it, {
                label: s.formatMessage(Or.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: ir({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, D.jsxs)(la, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, D.jsx)(ya, {
                className: "foundry_1a74xwbu",
                children: (0, D.jsx)(ha, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, D.jsx)(Xs, {
                side: "left",
                enabled: r,
                content: s.formatMessage(Or.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, D.jsx)(_a, {
                  className: "foundry_1a74xwbw",
                  children: (0, D.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, D.jsx)(Xs, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Or.ZoomOutButtonLabel),
              metadata: s.formatMessage(Or.ZoomOutButtonTooltip, {
                shortcut: (0, D.jsx)(Gs, {
                  shortcut: "-"
                })
              }),
              children: (0, D.jsx)(it, {
                label: s.formatMessage(Or.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: ir({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, D.jsx)(ye.xV, {
              children: n
            })]
          })
        }),
        Ws = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, ur.tz)(),
            {
              closeRef: s
            } = (0, k.useContext)(Ds),
            i = (0, ve.UP)(s, o),
            d = (0, L.v6)(n, {
              "data-testid": e,
              className: sr({
                styled: !t
              })
            }),
            l = t ? (0, D.jsx)(ye.DX, {
              ref: i,
              ...d
            }) : (0, D.jsx)(it, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(Or.CloseButtonLabel)
            });
          return (0, D.jsx)(Xs, {
            side: "right",
            enabled: r,
            content: a.formatMessage(Or.CloseButtonLabel),
            metadata: a.formatMessage(Or.CloseButtonTooltip, {
              shortcut: (0, D.jsx)(Gs, {
                shortcut: "Esc"
              })
            }),
            children: (0, D.jsx)(Ss, {
              asChild: !0,
              children: l
            })
          })
        }),
        Us = (0, k.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, ur.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, k.useContext)(Ds), {
                contextSafe: r
              } = (0, Xt.L)(), {
                resetZoom: n
              } = (0, k.useContext)(ks), [o, a] = (0, k.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                Zt.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...lr
                })
              }), i = (0, k.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
              }, [a]);
              return (0, k.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, k.useContext)(Ds),
            i = (0, ve.UP)(s, n),
            d = (0, L.v6)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, D.jsx)(Xs, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Or.ResetZoomButtonLabel),
            metadata: o.formatMessage(Or.ResetZoomButtonTooltip, {
              shortcut: (0, D.jsx)(Gs, {
                shortcut: "R"
              })
            }),
            children: (0, D.jsx)(it, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(Or.ResetZoomButtonLabel)
            })
          })
        }),
        $s = (0, k.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, ur.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, k.useContext)(Ds),
            i = (0, ve.UP)(a, n),
            d = (0, L.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, D.jsx)(Xs, {
            side: "left",
            enabled: t,
            content: o.formatMessage(Or.DownloadButtonTooltip),
            children: (0, D.jsx)(it, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(Or.DownloadButtonTooltip),
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
        Ys = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Qs = r(63368);

      function Js(e) {
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

      function ei(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ti(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ei(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Js(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ei(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ri(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ni = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oi = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ti(ti({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ni(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ri(e.variantClassNames, e => ri(e, e => e.split(" ")[0]))
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
        ai = r(45866);
      const si = (0, k.createContext)(null);

      function ii() {
        const e = (0, k.useContext)(si);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const di = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, L.v6)({
              className: oi({
                status: a
              }),
              "data-testid": t
            }, s),
            l = r ? ye.DX : "div";
          return (0, D.jsx)(si.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...s
            },
            children: (0, D.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        li = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = ii(), a = (0, L.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: ai.Check,
            invalid: ai.X,
            neutral: ai.TriangleAlert
          }, i = t ? ye.DX : s[o];
          return (0, D.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        ci = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = ii(), i = (0, L.v6)({
            "data-testid": t,
            id: s || a
          }, n), d = r ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var ui = Object.defineProperty,
        fi = (e, t) => ui(e, "name", {
          value: t,
          configurable: !0
        });

      function pi(e, t) {
        return k.useReducer((e, r) => t[e][r] ?? e, e)
      }
      fi(pi, "useStateMachine");
      var vi = "ScrollArea",
        [yi, bi] = (0, Ir.A)(vi),
        [hi, mi] = yi(vi),
        gi = k.forwardRef(fi(function(e, t) {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = k.useState(null), [l, c] = k.useState(null), [u, f] = k.useState(null), [p, v] = k.useState(null), [y, b] = k.useState(null), [h, m] = k.useState(0), [g, C] = k.useState(0), [w, x] = k.useState(!1), [_, j] = k.useState(!1), O = (0, kr.s)(t, d), P = (0, Eo.jH)(o);
          return (0, D.jsx)(hi, {
            scope: r,
            type: n,
            dir: P,
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
            scrollbarY: y,
            onScrollbarYChange: b,
            scrollbarYEnabled: _,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: m,
            onCornerHeightChange: C,
            children: (0, D.jsx)(zr.sG.div, {
              dir: P,
              ...s,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": h + "px",
                "--radix-scroll-area-corner-height": g + "px",
                ...e.style
              }
            })
          })
        }, "ScrollArea")),
        Ci = k.forwardRef(fi(function(e, t) {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = mi("ScrollAreaViewport", r), i = k.useRef(null), d = (0, kr.s)(t, i, s.onViewportChange);
          return (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)(wi, {
              nonce: o
            }), (0, D.jsx)(zr.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, D.jsx)("div", {
                ref: s.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        }, "ScrollAreaViewport")),
        wi = k.memo(fi(function({
          nonce: e
        }) {
          return (0, D.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: e
          })
        }, "ScrollAreaViewportStyle"), (e, t) => e.nonce === t.nonce),
        xi = "ScrollAreaScrollbar",
        _i = k.forwardRef(fi(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = mi(xi, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return k.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, D.jsx)(ji, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, D.jsx)(Oi, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, D.jsx)(Pi, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, D.jsx)(Si, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        }, "ScrollAreaScrollbar")),
        ji = k.forwardRef(fi(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = mi(xi, e.__scopeScrollArea), [a, s] = k.useState(!1);
          return k.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = fi(() => {
                  window.clearTimeout(t), s(!0)
                }, "handlePointerEnter"),
                n = fi(() => {
                  t = window.setTimeout(() => s(!1), o.scrollHideDelay)
                }, "handlePointerLeave");
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, D.jsx)(Ln, {
            present: r || a,
            children: (0, D.jsx)(Pi, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarHover")),
        Oi = k.forwardRef(fi(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = mi(xi, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = Ki(() => d("SCROLL_END"), 100), [i, d] = pi("hidden", {
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
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = fi(() => {
                const n = e[t];
                r !== n && (d("SCROLL"), s()), r = n
              }, "handleScroll");
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, d, s]), (0, D.jsx)(Ln, {
            present: r || "hidden" !== i,
            children: (0, D.jsx)(Si, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, Nr.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, Nr.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }, "ScrollAreaScrollbarScroll")),
        Pi = k.forwardRef(fi(function(e, t) {
          const r = mi(xi, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = k.useState(!1),
            i = "horizontal" === e.orientation,
            d = Ki(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return Wi(r.viewport, d), Wi(r.content, d), (0, D.jsx)(Ln, {
            present: n || a,
            children: (0, D.jsx)(Si, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarAuto")),
        Si = k.forwardRef(fi(function(e, t) {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = mi(xi, e.__scopeScrollArea), a = k.useRef(null), s = k.useRef(0), [i, d] = k.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = qi(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: fi(e => a.current = e, "onThumbChange"),
            onThumbPointerUp: fi(() => s.current = 0, "onThumbPointerUp"),
            onThumbPointerDown: fi(e => s.current = e, "onThumbPointerDown")
          };

          function u(e, t) {
            return Fi(e, s.current, i, t)
          }
          return fi(u, "getScrollPosition"), "horizontal" === r ? (0, D.jsx)(Ri, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Bi(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, D.jsx)(Di, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Bi(o.viewport.scrollTop, i);
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
        }, "ScrollAreaScrollbarVisible")),
        Ri = k.forwardRef(fi(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = mi(xi, e.__scopeScrollArea), [s, i] = k.useState(), d = k.useRef(null), l = (0, kr.s)(t, d, a.onScrollbarXChange);
          return k.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, D.jsx)(Ii, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Hi(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Xi(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Mi(s.paddingLeft),
                  paddingEnd: Mi(s.paddingRight)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarX")),
        Di = k.forwardRef(fi(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = mi(xi, e.__scopeScrollArea), [s, i] = k.useState(), d = k.useRef(null), l = (0, kr.s)(t, d, a.onScrollbarYChange);
          return k.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, D.jsx)(Ii, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Hi(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Xi(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Mi(s.paddingTop),
                  paddingEnd: Mi(s.paddingBottom)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarY")),
        [Ni, ki] = yi(xi),
        Ii = k.forwardRef(fi(function(e, t) {
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
          } = e, p = mi(xi, r), [v, y] = k.useState(null), b = (0, kr.s)(t, y), h = k.useRef(null), m = k.useRef(""), g = p.viewport, C = n.content - n.viewport, w = (0, Lr.c)(c), x = (0, Lr.c)(d), _ = Ki(u, 10);

          function j(e) {
            if (h.current) {
              const t = e.clientX - h.current.left,
                r = e.clientY - h.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return fi(j, "handleDragScroll"), k.useEffect(() => {
            const e = fi(e => {
              const t = e.target,
                r = v?.contains(t);
              r && w(e, C)
            }, "handleWheel");
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, v, C, w]), k.useEffect(x, [n, x]), Wi(v, _), Wi(p.content, _), (0, D.jsx)(Ni, {
            scope: r,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: (0, Lr.c)(a),
            onThumbPointerUp: (0, Lr.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, Lr.c)(i),
            children: (0, D.jsx)(zr.sG.div, {
              ...f,
              ref: b,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Nr.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), h.current = v.getBoundingClientRect(), m.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, Nr.mK)(e.onPointerMove, j),
              onPointerUp: (0, Nr.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = m.current, p.viewport && (p.viewport.style.scrollBehavior = ""), h.current = null
              })
            })
          })
        }, "ScrollAreaScrollbarImpl")),
        zi = "ScrollAreaThumb",
        Li = k.forwardRef(fi(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = ki(zi, e.__scopeScrollArea);
          return (0, D.jsx)(Ln, {
            present: r || o.hasThumb,
            children: (0, D.jsx)(Ti, {
              ref: t,
              ...n
            })
          })
        }, "ScrollAreaThumb")),
        Ti = k.forwardRef(fi(function(e, t) {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = mi(zi, r), s = ki(zi, r), {
            onThumbPositionChange: i
          } = s, d = (0, kr.s)(t, s.onThumbChange), l = k.useRef(void 0), c = Ki(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return k.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = fi(() => {
                if (c(), !l.current) {
                  const t = Gi(e, i);
                  l.current = t, i()
                }
              }, "handleScroll");
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, D.jsx)(zr.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, Nr.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, Nr.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        }, "ScrollAreaThumbImpl")),
        Ei = "ScrollAreaCorner",
        Vi = k.forwardRef(fi(function(e, t) {
          const r = mi(Ei, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, D.jsx)(Ai, {
            ...e,
            ref: t
          }) : null
        }, "ScrollAreaCorner")),
        Ai = k.forwardRef(fi(function(e, t) {
          const {
            __scopeScrollArea: r,
            ...n
          } = e, o = mi(Ei, r), [a, s] = k.useState(0), [i, d] = k.useState(0), l = Boolean(a && i), {
            onCornerWidthChange: c,
            onCornerHeightChange: u
          } = o;
          return Wi(o.scrollbarX, () => {
            const e = o.scrollbarX?.offsetHeight || 0;
            o.onCornerHeightChange(e), d(e)
          }), Wi(o.scrollbarY, () => {
            const e = o.scrollbarY?.offsetWidth || 0;
            o.onCornerWidthChange(e), s(e)
          }), k.useEffect(() => () => {
            c(0), u(0)
          }, [c, u]), l ? (0, D.jsx)(zr.sG.div, {
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
        }, "ScrollAreaCornerImpl"));

      function Mi(e) {
        return e ? parseInt(e, 10) : 0
      }

      function qi(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Hi(e) {
        const t = qi(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Fi(e, t, r, n = "ltr") {
        const o = Hi(r),
          a = t || o / 2,
          s = o - a,
          i = r.scrollbar.paddingStart + a,
          d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
          l = r.content - r.viewport;
        return Zi([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
      }

      function Bi(e, t, r = "ltr") {
        const n = Hi(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, To.q)(e, d);
        return Zi([0, s], [0, i])(l)
      }

      function Zi(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Xi(e, t) {
        return e > 0 && e < t
      }
      fi(Mi, "toInt"), fi(qi, "getThumbRatio"), fi(Hi, "getThumbSize"), fi(Fi, "getScrollPositionFromPointer"), fi(Bi, "getThumbOffsetFromScroll"), fi(Zi, "linearScale"), fi(Xi, "isScrollingWithinScrollbarBounds");
      var Gi = fi((e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return fi(function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = r.left !== a.left,
            i = r.top !== a.top;
          (s || i) && t(), r = a, n = window.requestAnimationFrame(o)
        }, "loop")(), () => window.cancelAnimationFrame(n)
      }, "addUnlinkedScrollListener");

      function Ki(e, t) {
        const r = (0, Lr.c)(e),
          n = k.useRef(0);
        return k.useEffect(() => () => window.clearTimeout(n.current), []), k.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Wi(e, t) {
        const r = (0, Lr.c)(t);
        (0, rn.N)(() => {
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
      fi(Ki, "useDebounceCallback"), fi(Wi, "useResizeObserver");
      var Ui = gi,
        $i = Ci,
        Yi = _i,
        Qi = Li,
        Ji = Vi,
        ed = Object.defineProperty,
        td = (e, t) => ed(e, "name", {
          value: t,
          configurable: !0
        }),
        rd = [" ", "Enter", "ArrowUp", "ArrowDown"],
        nd = [" ", "Enter"],
        od = "Select",
        [ad, sd, id] = qo(od),
        [dd, ld] = (0, Ir.A)(od, [id, ln]),
        cd = ln(),
        [ud, fd] = dd(od),
        [pd, vd] = dd(od);

      function yd(e) {
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
        } = e, b = cd(t), [h, m] = k.useState(null), [g, C] = k.useState(null), [w, x] = k.useState(!1), _ = (0, Eo.jH)(l), [j, O] = (0, Hn.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: a,
          caller: od
        }), [P, S] = (0, Hn.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: od
        }), R = k.useRef(null), N = k.useRef(P);
        k.useEffect(() => {
          const e = v ? h?.ownerDocument.getElementById(v) : h?.form;
          if (e instanceof HTMLFormElement) {
            const t = td(() => S(N.current), "reset");
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [v, h, S]);
        const I = !h || !!v || !!h.closest("form"),
          [z, L] = k.useState(new Set),
          T = (0, Ur.B)(),
          E = Array.from(z).map(e => e.props.value).join(";"),
          V = k.useCallback(e => {
            L(t => new Set(t).add(e))
          }, []),
          A = k.useCallback(e => {
            L(t => {
              const r = new Set(t);
              return r.delete(e), r
            })
          }, []),
          M = {
            required: p,
            trigger: h,
            onTriggerChange: m,
            valueNode: g,
            onValueNodeChange: C,
            valueNodeHasChildren: w,
            onValueNodeHasChildrenChange: x,
            contentId: T,
            value: P,
            onValueChange: S,
            open: j,
            onOpenChange: O,
            dir: _,
            triggerPointerDownPosRef: R,
            disabled: f,
            name: c,
            autoComplete: u,
            form: v,
            nativeOptions: z,
            nativeSelectKey: E,
            isFormControl: I
          };
        return (0, D.jsx)(_n, {
          ...b,
          children: (0, D.jsx)(ud, {
            scope: t,
            ...M,
            children: (0, D.jsx)(ad.Provider, {
              scope: t,
              children: (0, D.jsx)(pd, {
                scope: t,
                onNativeOptionAdd: V,
                onNativeOptionRemove: A,
                children: Gd(y) ? y(M) : r
              })
            })
          })
        })
      }
      td(yd, "SelectProvider");
      var bd = td(e => {
          const {
            __scopeSelect: t,
            children: r,
            ...n
          } = e;
          return (0, D.jsx)(yd, {
            __scopeSelect: t,
            ...n,
            internal_do_not_use_render: ({
              isFormControl: e
            }) => (0, D.jsxs)(D.Fragment, {
              children: [r, e ? (0, D.jsx)(Xd, {
                __scopeSelect: t
              }) : null]
            })
          })
        }, "Select"),
        hd = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = cd(r), s = fd("SelectTrigger", r), i = s.disabled || n, d = (0, kr.s)(t, s.onTriggerChange), l = sd(r), c = k.useRef("touch"), [u, f, p] = Wd(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Ud(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), v = td(e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          }, "handleOpen");
          return (0, D.jsx)(jn, {
            asChild: !0,
            ...a,
            children: (0, D.jsx)(zr.sG.button, {
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
              "data-placeholder": Kd(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, Nr.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, Nr.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, Nr.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || rd.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        }, "SelectTrigger")),
        md = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = fd("SelectValue", r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, kr.s)(t, d.onValueNodeChange);
          (0, rn.N)(() => {
            l(c)
          }, [l, c]);
          const f = Kd(d.value);
          return (0, D.jsx)(zr.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, D.jsx)(k.Fragment, {
              children: f ? s : a
            }, f ? "placeholder" : "value")
          })
        }, "SelectValue")),
        gd = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            ...o
          } = e;
          return (0, D.jsx)(zr.sG.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: n || "▼"
          })
        }, "SelectIcon")),
        [Cd, wd] = dd("SelectPortal", {
          forceMount: void 0
        }),
        xd = td(e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, D.jsx)(Cd, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, D.jsx)(Nn, {
              asChild: !0,
              ...n
            })
          })
        }, "SelectPortal"),
        _d = "SelectContent",
        jd = k.forwardRef(td(function(e, t) {
          const r = wd(_d, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = fd(_d, e.__scopeSelect),
            [s, i] = k.useState();
          return (0, rn.N)(() => {
            i(new DocumentFragment)
          }, []), (0, D.jsx)(Ln, {
            present: n || a.open,
            children: ({
              present: e
            }) => e ? (0, D.jsx)(Nd, {
              ...o,
              ref: t
            }) : (0, D.jsx)(Od, {
              ...o,
              fragment: s
            })
          })
        }, "SelectContent")),
        Od = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            fragment: o
          } = e;
          return o ? Sn.createPortal((0, D.jsx)(Sd, {
            scope: r,
            children: (0, D.jsx)(ad.Slot, {
              scope: r,
              children: (0, D.jsx)("div", {
                ref: t,
                children: n
              })
            })
          }), o) : null
        }, "SelectContentFragment")),
        Pd = 10,
        [Sd, Rd] = dd(_d),
        Dd = (0, qn.TL)("SelectContent.RemoveScroll"),
        Nd = k.forwardRef(td(function(e, t) {
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
            avoidCollisions: b,
            ...h
          } = e, m = fd(_d, r), [g, C] = k.useState(null), [w, x] = k.useState(null), _ = (0, kr.s)(t, C), [j, O] = k.useState(null), [P, S] = k.useState(null), R = sd(r), [N, I] = k.useState(!1), z = k.useRef(!1);
          k.useEffect(() => {
            if (g) return (0, rs.Eq)(g)
          }, [g]), (0, es.Oh)();
          const L = k.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === n && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, w]),
            T = k.useCallback(() => L([j, g]), [L, j, g]);
          k.useEffect(() => {
            N && T()
          }, [N, T]);
          const {
            onOpenChange: E,
            triggerPointerDownPosRef: V
          } = m;
          k.useEffect(() => {
            if (g) {
              let e = {
                x: 0,
                y: 0
              };
              const t = td(t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (V.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (V.current?.y ?? 0))
                  }
                }, "handlePointerMove"),
                r = td(r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(g) || E(!1), document.removeEventListener("pointermove", t), V.current = null
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
          }, [g, E, V]), k.useEffect(() => {
            const e = td(() => E(!1), "close");
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [E]);
          const [A, M] = Wd(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Ud(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), q = k.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== m.value && m.value === t || n) && (O(e), n && (z.current = !0))
          }, [m.value]), H = k.useCallback(() => g?.focus(), [g]), F = k.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== m.value && m.value === t || n) && S(e)
          }, [m.value]), B = "popper" === n ? Id : kd, Z = B === Id ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: y,
            avoidCollisions: b
          } : {};
          return (0, D.jsx)(Sd, {
            scope: r,
            content: g,
            viewport: w,
            onViewportChange: x,
            itemRefCallback: q,
            selectedItem: j,
            onItemLeave: H,
            itemTextRefCallback: F,
            focusSelectedItem: T,
            selectedItemText: P,
            position: n,
            isPositioned: N,
            searchRef: A,
            children: (0, D.jsx)(ts.A, {
              as: Dd,
              allowPinchZoom: !0,
              children: (0, D.jsx)(Fa, {
                asChild: !0,
                trapped: m.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Nr.mK)(o, e => {
                  m.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, D.jsx)(Mr, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => m.onOpenChange(!1),
                  children: (0, D.jsx)(B, {
                    role: "listbox",
                    id: m.contentId,
                    "data-state": m.open ? "open" : "closed",
                    dir: m.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...h,
                    ...Z,
                    onPlaced: () => I(!0),
                    ref: _,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...h.style
                    },
                    onKeyDown: (0, Nr.mK)(h.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
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
        }, "SelectContentImpl")),
        kd = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            onPlaced: n,
            ...o
          } = e, a = fd(_d, r), s = Rd(_d, r), [i, d] = k.useState(null), [l, c] = k.useState(null), u = (0, kr.s)(t, c), f = sd(r), p = k.useRef(!1), v = k.useRef(!0), {
            viewport: y,
            selectedItem: b,
            selectedItemText: h,
            focusSelectedItem: m
          } = s, g = k.useCallback(() => {
            if (a.trigger && a.valueNode && i && l && y && b && h) {
              const e = a.trigger.getBoundingClientRect(),
                t = l.getBoundingClientRect(),
                r = a.valueNode.getBoundingClientRect(),
                o = h.getBoundingClientRect();
              if ("rtl" !== a.dir) {
                const n = o.left - t.left,
                  a = r.left - n,
                  s = e.left - a,
                  d = e.width + s,
                  l = Math.max(d, t.width),
                  c = window.innerWidth - Pd,
                  u = (0, To.q)(a, [Pd, Math.max(Pd, c - l)]);
                i.style.minWidth = d + "px", i.style.left = u + "px"
              } else {
                const n = t.right - o.right,
                  a = window.innerWidth - r.right - n,
                  s = window.innerWidth - e.right - a,
                  d = e.width + s,
                  l = Math.max(d, t.width),
                  c = window.innerWidth - Pd,
                  u = (0, To.q)(a, [Pd, Math.max(Pd, c - l)]);
                i.style.minWidth = d + "px", i.style.right = u + "px"
              }
              const s = f(),
                d = window.innerHeight - 2 * Pd,
                c = y.scrollHeight,
                u = window.getComputedStyle(l),
                v = parseInt(u.borderTopWidth, 10),
                m = parseInt(u.paddingTop, 10),
                g = parseInt(u.borderBottomWidth, 10),
                C = v + m + c + parseInt(u.paddingBottom, 10) + g,
                w = Math.min(5 * b.offsetHeight, C),
                x = window.getComputedStyle(y),
                _ = parseInt(x.paddingTop, 10),
                j = parseInt(x.paddingBottom, 10),
                O = e.top + e.height / 2 - Pd,
                P = d - O,
                S = b.offsetHeight / 2,
                R = v + m + (b.offsetTop + S),
                D = C - R;
              if (R <= O) {
                const e = s.length > 0 && b === s[s.length - 1].ref.current;
                i.style.bottom = "0px";
                const t = l.clientHeight - y.offsetTop - y.offsetHeight,
                  r = R + Math.max(P, S + (e ? j : 0) + t + g);
                i.style.height = r + "px"
              } else {
                const e = s.length > 0 && b === s[0].ref.current;
                i.style.top = "0px";
                const t = Math.max(O, v + y.offsetTop + (e ? _ : 0) + S) + D;
                i.style.height = t + "px", y.scrollTop = R - O + y.offsetTop
              }
              i.style.margin = `${Pd}px 0`, i.style.minHeight = w + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
            }
          }, [f, a.trigger, a.valueNode, i, l, y, b, h, a.dir, n]);
          (0, rn.N)(() => g(), [g]);
          const [C, w] = k.useState();
          (0, rn.N)(() => {
            l && w(window.getComputedStyle(l).zIndex)
          }, [l]);
          const x = k.useCallback(e => {
            e && !0 === v.current && (g(), m?.(), v.current = !1)
          }, [g, m]);
          return (0, D.jsx)(zd, {
            scope: r,
            contentWrapper: i,
            shouldExpandOnScrollRef: p,
            onScrollButtonChange: x,
            children: (0, D.jsx)("div", {
              ref: d,
              style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: C
              },
              children: (0, D.jsx)(zr.sG.div, {
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
        Id = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = Pd,
            ...a
          } = e, s = cd(r);
          return (0, D.jsx)(On, {
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
        }, "SelectPopperPosition")),
        [zd, Ld] = dd(_d, {}),
        Td = "SelectViewport",
        Ed = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            nonce: n,
            ...o
          } = e, a = Rd(Td, r), s = Ld(Td, r), i = (0, kr.s)(t, a.onViewportChange), d = k.useRef(0);
          return (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: n
            }), (0, D.jsx)(ad.Slot, {
              scope: r,
              children: (0, D.jsx)(zr.sG.div, {
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
                onScroll: (0, Nr.mK)(o.onScroll, e => {
                  const t = e.currentTarget,
                    {
                      contentWrapper: r,
                      shouldExpandOnScrollRef: n
                    } = s;
                  if (n?.current && r) {
                    const e = Math.abs(d.current - t.scrollTop);
                    if (e > 0) {
                      const n = window.innerHeight - 2 * Pd,
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
        }, "SelectViewport")),
        [Vd, Ad] = dd("SelectGroup"),
        Md = "SelectItem",
        [qd, Hd] = dd(Md),
        Fd = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = fd(Md, r), d = Rd(Md, r), l = i.value === n, [c, u] = k.useState(a ?? ""), [f, p] = k.useState(!1), v = (0, Lr.c)(e => d.itemRefCallback?.(e, n, o)), y = (0, kr.s)(t, v), b = (0, Ur.B)(), h = k.useRef("touch"), m = td(() => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          }, "handleSelect");
          return (0, D.jsx)(qd, {
            scope: r,
            value: n,
            disabled: o,
            textId: b,
            isSelected: l,
            onItemTextChange: k.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, D.jsx)(ad.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, D.jsx)(zr.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: y,
                onFocus: (0, Nr.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Nr.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Nr.mK)(s.onClick, () => {
                  "mouse" !== h.current && m()
                }),
                onPointerUp: (0, Nr.mK)(s.onPointerUp, () => {
                  "mouse" === h.current && m()
                }),
                onPointerDown: (0, Nr.mK)(s.onPointerDown, e => {
                  h.current = e.pointerType
                }),
                onPointerMove: (0, Nr.mK)(s.onPointerMove, e => {
                  h.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === h.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Nr.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, Nr.mK)(s.onKeyDown, e => {
                  o || e.target !== e.currentTarget || "" !== d.searchRef?.current && " " === e.key || (nd.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        }, "SelectItem")),
        Bd = "SelectItemText",
        Zd = k.forwardRef(td(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = fd(Bd, r), i = Rd(Bd, r), d = Hd(Bd, r), l = vd(Bd, r), [c, u] = k.useState(null), f = (0, Lr.c)(e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = (0, kr.s)(t, u, d.onItemTextChange, f), v = c?.textContent, y = k.useMemo(() => (0, D.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: v
          }, d.value), [d.disabled, d.value, v]), {
            onNativeOptionAdd: b,
            onNativeOptionRemove: h
          } = l;
          return (0, rn.N)(() => (b(y), () => h(y)), [b, h, y]), (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)(zr.sG.span, {
              id: d.textId,
              ...a,
              ref: p
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !Kd(s.value) ? Sn.createPortal(a.children, s.valueNode) : null]
          })
        }, "SelectItemText")),
        Xd = k.forwardRef(td(function({
          __scopeSelect: e,
          ...t
        }, r) {
          const n = fd("SelectBubbleInput", e),
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
            p = k.useRef(null),
            v = (0, kr.s)(r, p),
            y = o ?? "",
            b = (0, Vo.Z)(y),
            h = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return k.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (b !== y && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, y), e.dispatchEvent(t)
            }
          }, [b, y]), (0, D.jsxs)(zr.sG.select, {
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
              ...Fn.Qg,
              ...t.style
            },
            ref: v,
            defaultValue: y,
            children: [Kd(o) && !h ? (0, D.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        }, "SelectBubbleInput"));

      function Gd(e) {
        return "function" == typeof e
      }

      function Kd(e) {
        return "" === e || void 0 === e
      }

      function Wd(e) {
        const t = (0, Lr.c)(e),
          r = k.useRef(""),
          n = k.useRef(0),
          o = k.useCallback(e => {
            const o = r.current + e;
            t(o), td(function e(t) {
              r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
            }, "updateSearch")(o)
          }, [t]),
          a = k.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return k.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function Ud(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = $d(e, Math.max(o, 0));
        1 === n.length && (a = a.filter(e => e !== r));
        const s = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return s !== r ? s : void 0
      }

      function $d(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }

      function Yd(e) {
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

      function Qd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Jd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Yd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function el(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      td(Gd, "isFunction"), td(Kd, "shouldShowPlaceholder"), td(Wd, "useTypeaheadSearch"), td(Ud, "findNextItem"), td($d, "wrapArray");
      var tl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        rl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Jd(Jd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) tl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return el(e.variantClassNames, e => el(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nl = rl({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ol = rl({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        al = rl({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sl = rl({
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
        il = rl({
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
        dl = rl({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ll = (0, k.createContext)(null);

      function cl() {
        const e = (0, k.useContext)(ll);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const ul = (0, k.forwardRef)(({
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
          const b = (0, k.useRef)(null),
            h = (0, ve.UP)(b, y),
            m = (0, k.useId)(),
            g = (0, k.useId)(),
            C = (0, k.useId)(),
            w = (0, k.useId)(),
            x = (0, k.useId)(),
            _ = (0, k.useId)(),
            j = (0, k.useRef)(null),
            O = (0, k.useRef)(null),
            P = (0, k.useRef)(null),
            [S = !1, R] = (0, ve.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            N = (0, L.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, v);
          return (0, D.jsx)(ll.Provider, {
            value: {
              labelId: m,
              errorId: g,
              descriptionId: C,
              triggerId: _,
              hintId: w,
              popoverId: x,
              labelRef: j,
              descriptionRef: O,
              hintRef: P,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: S,
              setIsOpen: R,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, D.jsx)(bd, {
              required: r,
              disabled: n,
              open: S,
              onOpenChange: () => R(!o && !S),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, D.jsx)("div", {
                ref: h,
                ...N,
                children: e
              })
            })
          })
        }),
        fl = (0, k.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = cl(), s = (0, L.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: nl({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, D.jsx)(jd, {
            ...s,
            ref: o,
            children: (0, D.jsx)(Ed, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        pl = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e
          }, t);
          return (0, D.jsx)(Ed, {
            ref: r,
            ...n
          })
        }),
        vl = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, D.jsxs)(Ui, {
            ...o,
            ref: n,
            children: [(0, D.jsx)(pl, {
              asChild: !0,
              children: (0, D.jsx)($i, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, D.jsx)(Yi, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, D.jsx)(Qi, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        yl = (0, k.forwardRef)(({
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
            descriptionRef: b,
            hintRef: h,
            isOpen: m,
            size: g
          } = cl(), {
            isPressed: C,
            pressProps: w
          } = (0, Qs.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [x, _] = (0, k.useState)(!1), [j, O] = (0, k.useState)(!1);
          (0, k.useEffect)(() => {
            _(!!y.current || !!h.current), O(!!b.current)
          }, []);
          const P = (0, L.v6)({
              id: f,
              className: il({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!C,
                isDisabled: !!l
              }),
              "aria-labelledby": x ? (0, L.VW)(r, c, u) : r,
              "aria-describedby": j ? (0, L.VW)(n, v) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": m ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!C
            }, (0, L.cJ)(w, "onKeyDown"), a),
            S = o ? ye.DX : hd;
          return (0, D.jsx)(S, {
            ...P,
            ref: s,
            children: e
          })
        }),
        bl = (0, k.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? ye.DX : "span";
          return (0, D.jsx)(s, {
            ...a,
            ref: o,
            children: (0, D.jsx)(md, {
              placeholder: e
            })
          })
        }),
        hl = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = cl(), i = s ? qe.ChevronUp : qe.ChevronDown, d = (0, L.v6)({
            asChild: !0,
            className: dl({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, D.jsx)(gd, {
            ...d,
            ref: n,
            children: e || (0, D.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        ml = (0, k.forwardRef)(({
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
          } = cl(), f = i && !o, p = (0, ve.UP)(c, s), v = (0, L.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: sl({
              showAsterisk: f,
              isDisabled: d
            })
          }, a), y = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: n,
            children: (0, D.jsx)(y, {
              ...v,
              ref: p,
              children: r
            })
          })
        }),
        gl = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = cl(), d = (0, ve.UP)(i, o), l = (0, L.v6)({
            className: ol({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), c = r ? ye.DX : "div";
          return (0, D.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        Cl = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = cl(), d = (0, ve.UP)(s, o), l = (0, L.v6)({
            className: al({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? ye.DX : "div";
          return (0, D.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        wl = (0, k.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, k.useRef)(null),
            i = (0, ve.UP)(s, a),
            d = (0, L.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, D.jsx)(Fd, {
            ref: i,
            ...d,
            children: e
          })
        }),
        xl = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, D.jsx)(Zd, {
            ref: n,
            asChild: !0,
            children: (0, D.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        _l = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, D.jsx)(gd, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        jl = xd,
        Ol = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = cl(), i = (0, L.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? ye.DX : di;
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Pl = li,
        Sl = ci;
      var Rl = r(35053),
        Dl = r(34439);

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

      function kl(e, t) {
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
          t % 2 ? kl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Nl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function zl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ll = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Il(Il({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ll(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zl(e.variantClassNames, e => zl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        El = Tl({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vl = Tl({
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
        Al = Tl({
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
        Ml = Tl({
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
        ql = Tl({
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
      const Hl = (0, k.createContext)(null);

      function Fl() {
        const e = (0, k.useContext)(Hl);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Bl = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, L.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? ye.DX : "div",
            u = (0, k.useId)(),
            f = (0, k.useId)(),
            p = (0, k.useId)();
          return (0, D.jsx)(Hl.Provider, {
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
            children: (0, D.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Zl = (0, k.forwardRef)(({
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
          const p = (0, k.useRef)(null),
            v = (0, ve.UP)(p, f),
            {
              size: y,
              appearance: b,
              inputId: h,
              labelId: m,
              descriptionId: g,
              isDisabled: C,
              isReadOnly: w
            } = Fl(),
            x = (0, Dl.H)({
              isDisabled: C,
              isReadOnly: w,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: _
            } = (0, Rl.K)({
              id: a || h,
              "aria-labelledby": (0, L.VW)(n, m),
              "aria-describedby": (0, L.VW)(o, g),
              name: l,
              value: c,
              isDisabled: C,
              isReadOnly: w
            }, x, p),
            j = (0, L.v6)({
              className: ql({
                appearance: b
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": C || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || C || w || x.toggle()
              }
            }, u);
          return (0, D.jsxs)("div", {
            ...j,
            children: [(0, D.jsx)(ye.s6, {
              children: (0, D.jsx)("input", {
                ..._,
                ref: v
              })
            }), (0, D.jsx)("div", {
              className: Ml({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, D.jsx)("div", {
                className: Vl({
                  size: y,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Xl = (0, k.forwardRef)(({
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
          } = Fl(), c = (0, L.v6)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Al({
              isDisabled: s,
              size: l
            })
          }, o), u = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: n,
            children: (0, D.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Gl = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Fl(), i = n.id || s, d = (0, L.v6)({
            className: El({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var Kl = r(53681);
      const Wl = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, D.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ul = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, D.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        $l = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, D.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Yl = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, D.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Ql = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, D.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Jl = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, D.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
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
            var n, o, a;
            n = e, o = t, a = r[t], (o = ec(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
        ac = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rc(rc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
        sc = ac({
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
        ic = ac({
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
        dc = ac({
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
        lc = ac({
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
        cc = ac({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uc = ac({
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
      const fc = (0, k.createContext)(null);

      function pc() {
        const e = (0, k.useContext)(fc);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const vc = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, s) => {
          const i = (0, L.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, L.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? ye.DX : "div",
            l = (0, k.useId)(),
            c = (0, k.useId)(),
            u = (0, k.useId)();
          return (0, D.jsx)(fc.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, D.jsx)(d, {
              ...i,
              ref: s,
              children: o
            })
          })
        }),
        yc = (0, k.forwardRef)(({
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
            isIndeterminate: b,
            isRequired: h,
            descriptionId: m,
            labelId: g,
            inputId: C,
            ...w
          } = pc(), x = (0, k.useRef)(null), _ = f.id || C, {
            isPressed: j,
            pressProps: O
          } = (0, Qs.d)({
            ref: x
          }), {
            setSelected: P,
            toggle: S,
            ...R
          } = (0, Dl.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: N,
            isSelected: I,
            isDisabled: z,
            isReadOnly: T
          } = (0, Kl.v)({
            "aria-label": "",
            id: _,
            name: o,
            ...w
          }, {
            ...R,
            toggle: S,
            setSelected: w.isReadOnly ? () => !1 : P
          }, x), E = (0, L.v6)({
            className: ic({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || z || T || S()
            }
          }, O, f), V = (0, L.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, L.VW)(c, g),
            "aria-describedby": (0, L.VW)(d, m),
            "aria-errormessage": (0, L.VW)(l, w.isInvalid ? m : void 0),
            "aria-required": h,
            required: h
          }, N), A = b ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, D.jsxs)("div", {
            ...E,
            children: [(0, D.jsx)(ye.s6, {
              children: (0, D.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, D.jsx)("div", {
              className: (0, Me.clsx)(sc({
                size: v,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": b ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": z || T,
              "data-testid": e,
              "data-pressed": j,
              children: (0, D.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || b) && (0, D.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        bc = (0, k.forwardRef)(({
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
          } = pc(), u = a.id || d, f = c && !o, p = (0, L.v6)({
            className: uc({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), v = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: n,
            children: (0, D.jsx)(v, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        hc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = pc(), i = n.id || s, d = (0, L.v6)({
            className: dc({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        mc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = pc(), s = n.id || a, i = (0, L.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: s
          }, n), d = t ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        gc = (0, k.createContext)(null);

      function Cc() {
        const e = (0, k.useContext)(gc);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const wc = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...a
        }, s) => {
          const [i, d] = (0, k.useState)(null), [l, c] = (0, k.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, L.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = t ? ye.DX : "fieldset";
          return (0, D.jsx)(gc.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, D.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        xc = (0, k.forwardRef)(({
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
          } = Cc(), l = d && !a, c = (0, L.v6)({
            "data-testid": r,
            className: cc({
              showAsterisk: l
            })
          }, s), u = t ? ye.DX : "legend";
          return (0, D.jsx)(ye.s6, {
            enabled: o,
            children: (0, D.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, D.jsx)(ye.xV, {
                children: e
              }), !d && (0, D.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        _c = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: a
          } = Cc(), s = (0, k.useId)(), i = n.id || s;
          (0, k.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, L.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        jc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = Cc(), s = (0, L.v6)({
            "data-testid": r,
            className: lc({
              size: a
            })
          }, n), i = t ? ye.DX : "div";
          return (0, D.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Oc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: a
          } = Cc(), s = (0, k.useId)(), i = n.id || s;
          (0, k.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, L.v6)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = qe.X,
            c = t ? ye.DX : "div";
          return (0, D.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, D.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, D.jsx)(ye.xV, {
              children: e
            })]
          })
        });

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

      function Sc(e, t) {
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
          t % 2 ? Sc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sc(Object(r)).forEach(function(t) {
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
      var Nc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rc(Rc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
              return Dc(e.variantClassNames, e => Dc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ic = kc({
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
        zc = kc({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Lc = kc({
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
        Tc = kc({
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
      const Ec = (0, k.createContext)(null);

      function Vc() {
        const e = (0, k.useContext)(Ec);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Ac = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, L.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? ye.DX : "div",
            u = (0, k.useId)(),
            f = (0, k.useId)(),
            p = (0, k.useId)(),
            v = (0, k.useId)();
          return (0, D.jsx)(Ec.Provider, {
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
            children: (0, D.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        Mc = (0, k.forwardRef)(({
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
          } = Vc(), u = (0, L.v6)({
            className: Lc({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, a), f = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: n,
            children: (0, D.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        qc = (0, k.forwardRef)(({
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
            isRequired: b,
            isReadOnly: h,
            status: m
          } = Vc(), g = (0, k.useRef)(null), C = (0, ve.UP)(g, c), w = (0, L.v6)({
            className: Tc({
              isInvalid: "invalid" === m,
              isDisabled: y,
              isReadOnly: h,
              isSuccess: "success" === m
            }),
            name: a,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: y,
            required: b,
            readOnly: h,
            placeholder: s,
            "aria-labelledby": (0, L.VW)(l.id, f, v, i),
            "aria-describedby": (0, L.VW)(u, d),
            "data-testid": r,
            ..."invalid" === m && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === m && {
              "data-success": !0
            },
            ...y && {
              "aria-disabled": !0
            },
            ...b && {
              "aria-required": !0
            }
          }, l), x = e ? ye.DX : "textarea";
          return (0, D.jsx)(x, {
            ref: C,
            ...w,
            children: t
          })
        }),
        Hc = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Vc(), i = (0, L.v6)({
            className: Ic({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Fc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = Vc(), i = (0, L.v6)({
            className: zc({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Bc = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Vc(), i = (0, L.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? ye.DX : di;
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Zc = li,
        Xc = ci;
      var Gc = r(22718),
        Kc = r(61720);

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
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tu = Jc({
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
      const ru = (0, k.createContext)(null);

      function nu() {
        const e = (0, k.useContext)(ru);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const ou = (0, k.forwardRef)(({
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
          const f = (0, k.useRef)(null),
            p = (0, ve.UP)(f, u),
            v = (0, k.useId)(),
            y = (0, k.useId)(),
            b = (0, k.useId)(),
            h = (0, Gc.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: m
            } = (0, Kc.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, L.VW)(v, s),
              "aria-describedby": (0, L.VW)(y, b, i),
              "aria-errormessage": (0, L.VW)(b, d)
            }, h),
            g = (0, L.v6)({
              className: "foundry_njguqn0"
            }, m, (0, L.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            C = a ? ye.DX : "div";
          return (0, D.jsx)(ru.Provider, {
            value: {
              state: h,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: y,
              labelId: v,
              errorId: b,
              status: l,
              ...c
            },
            children: (0, D.jsx)(C, {
              ref: p,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        }),
        au = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = nu(), i = (0, L.v6)({
            "data-testid": e,
            className: tu({
              size: a,
              orientation: s
            })
          }, n), d = t ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        su = (0, k.forwardRef)(({
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
          } = nu(), l = i && !o, c = (0, L.v6)({
            id: a.id || d,
            "data-testid": e,
            className: eu({
              showAsterisk: l
            })
          }, a), u = t ? ye.DX : "div";
          return (0, D.jsx)(ye.s6, {
            enabled: n,
            children: (0, D.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        iu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = nu(), s = (0, L.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? ye.DX : "div";
          return (0, D.jsx)(i, {
            ...s,
            ref: o,
            children: r
          })
        }),
        du = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = nu(), i = (0, L.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), d = r ? ye.DX : di;
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        lu = li,
        cu = ci;
      var uu = r(7471),
        fu = Jc({
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
        pu = Jc({
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
        vu = Jc({
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
        yu = Jc({
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
      const bu = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, D.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        hu = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, D.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        mu = ({
          color: e = "currentColor"
        }) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, D.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        gu = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? ye.DX : "label";
          return (0, D.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Cu = (0, k.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, k.useRef)(null),
            a = (0, ve.UP)(o, n),
            s = (0, k.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = nu(),
            {
              isPressed: p,
              pressProps: v
            } = (0, Qs.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, uu.z)({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, o),
            b = y.checked,
            h = y.disabled || i?.isReadOnly,
            m = (0, L.v6)(y, {
              disabled: h,
              readOnly: u,
              required: f,
              "data-testid": e,
              ...h && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            g = c[`Dot${l}`];
          return (0, D.jsxs)("div", {
            className: yu({
              size: l
            }),
            children: [(0, D.jsx)(ye.s6, {
              children: (0, D.jsx)("input", {
                type: "radio",
                ...m,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, D.jsx)("div", {
              className: vu({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": h,
              "data-pressed": p,
              ...v,
              children: (0, D.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, D.jsx)(g, {})
              })
            })]
          })
        }),
        wu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = nu(), d = (0, k.useId)(), l = (0, L.v6)({
            id: d,
            "data-testid": e,
            className: pu({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? ye.DX : "div";
          return (0, D.jsx)(ye.s6, {
            enabled: n,
            children: (0, D.jsx)(c, {
              ...l,
              ref: a,
              children: r
            })
          })
        }),
        xu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = nu(), s = (0, L.v6)({
            "data-testid": e,
            className: fu({
              isDisabled: a
            })
          }, n), i = t ? ye.DX : "span";
          return (0, D.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });
      var _u = r(58900);

      function ju(e) {
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

      function Pu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ou(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ju(o)) in n ? Object.defineProperty(n, o, {
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

      function Su(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ru = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Du = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pu(Pu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ru(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Su(e.variantClassNames, e => Su(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nu = Du({
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
        ku = Du({
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
        Iu = Du({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zu = Du({
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
        Lu = Du({
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
        Tu = Du({
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
      const Eu = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Vu = (0, k.createContext)(null);

      function Au() {
        const e = (0, k.useContext)(Vu);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Mu = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, k.useState)("text"), u = `${(0,k.useId)()}-label`, f = `${(0,k.useId)()}-input`, p = `${(0,k.useId)()}-description`, v = (0, k.useRef)(null), y = (0, k.useRef)(Eu), b = (0, L.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), h = e ? ye.DX : "div";
          return (0, D.jsx)(Vu.Provider, {
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
            children: (0, D.jsx)(h, {
              ref: d,
              ...b,
              children: t
            })
          })
        }),
        qu = (0, k.forwardRef)(({
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
          } = Au(), u = d && !o, f = (0, L.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: Tu({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: n,
            children: (0, D.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        Hu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Au(), s = (0, L.v6)({
            "data-testid": e,
            className: Iu({
              isDisabled: a
            })
          }, n), i = t ? ye.DX : "span";
          return (0, D.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        Fu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = Au(), d = (0, L.v6)({
            "data-testid": e,
            className: (0, Me.clsx)(Nu({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Bu = (0, k.forwardRef)(({
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
            labelId: b,
            inputId: h,
            descriptionId: m,
            setType: g,
            type: C,
            inputRef: w,
            focusState: x
          } = Au();
          (0, k.useEffect)(() => g(l), []);
          const _ = "invalid" === y,
            j = (0, L.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: h,
              type: C,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, L.VW)(b, i),
              "aria-describedby": (0, L.VW)(m, d),
              "data-testid": e,
              className: (0, Me.clsx)(Lu({
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
                "aria-errormessage": m
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
            O = (0, _u.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            P = (0, ve.UP)(r && n ? O : null, w, u),
            S = t ? ye.DX : "input";
          return (0, D.jsx)(S, {
            ref: P,
            ...j
          })
        }),
        Zu = (0, k.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = Au(), i = (0, L.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, Me.clsx)(zu({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), d = t ? ye.DX : qe[e];
          return (0, D.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        Xu = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          icon: r,
          iconElement: n,
          label: o,
          testId: a,
          preventFocusOnPress: s = !0,
          ...i
        }, d) => {
          const l = (0, k.useRef)(null),
            c = (0, ve.UP)(l, d),
            {
              isDisabled: u
            } = Au(),
            {
              buttonProps: f
            } = (0, ve.sL)((0, L.v6)(i, {
              isDisabled: u,
              preventFocusOnPress: s
            }), l),
            p = (0, L.v6)({
              className: (0, Me.clsx)("foundry_8oytzon foundry_8kowh41 foundry_1d5mo5m0", "foundry_8oytzo3"),
              "data-testid": a
            }, f),
            v = n || (r ? qe[r] : null),
            y = e ? ye.DX : "button";
          return (0, D.jsxs)(y, {
            ref: c,
            ...p,
            children: [v && (0, D.jsx)(v, {
              label: o || "",
              size: "LG",
              className: "foundry_8oytzoo"
            }), (0, D.jsx)(ye.xV, {
              children: t
            })]
          })
        }),
        Gu = (0, k.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i,
            isDisabled: d
          } = Au(), l = "password" === o, c = l ? e : t;
          (0, k.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const u = (0, L.v6)({
            label: c,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              a(l ? "text" : "password");
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
          return (0, D.jsxs)(No, {
            isDisabled: d,
            children: [(0, D.jsx)(ko, {
              children: (0, D.jsx)(Xu, {
                ref: n,
                ...u
              })
            }), (0, D.jsxs)(Io, {
              side: "bottom",
              align: "end",
              children: [c, (0, D.jsx)(zo, {})]
            })]
          })
        }),
        Ku = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Au(), i = (0, L.v6)({
            className: ku({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Wu = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Au(), i = (0, L.v6)({
            className: "foundry_8oytzo14",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? ye.DX : di;
          return (0, D.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Uu = li,
        $u = ci;
      var Yu = r(909);

      function Qu(e) {
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

      function Ju(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ef(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ju(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Qu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ju(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ef(ef({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tf(e.variantClassNames, e => tf(e, e => e.split(" ")[0]))
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
      const of = {
        SM: "SM",
        MD: "SM",
        LG: "LG",
        XL: "XL"
      }, af = (0, k.forwardRef)(({
        label: e,
        size: t = "LG",
        testId: r,
        ...n
      }, o) => {
        const a = (0, k.useRef)(null),
          s = (0, ve.UP)(a, o),
          {
            buttonProps: i
          } = (0, ve.sL)(n, a),
          d = (0, L.v6)({
            "data-testid": r,
            className: nf({
              size: t
            })
          }, i);
        return (0, D.jsx)("button", {
          ref: s,
          ...d,
          children: (0, D.jsx)(qe.X, {
            label: e,
            size: of [t]
          })
        })
      });

      function sf(e) {
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

      function df(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? df(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = sf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : df(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ff = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lf(lf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) uf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cf(e.variantClassNames, e => cf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pf = ff({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vf = ff({
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
        yf = ff({
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
      const bf = (0, k.createContext)(null);

      function hf() {
        const e = (0, k.useContext)(bf);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const mf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? ye.DX : "div",
            i = (0, L.v6)({
              className: yf({
                status: r,
                background: n
              })
            }, o);
          return (0, D.jsx)(bf.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, D.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i
            })
          })
        }),
        gf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, D.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Cf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, D.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        wf = {
          danger: qe.CircleX,
          information: qe.Info,
          success: qe.CircleCheck,
          warning: qe.TriangleAlert
        },
        xf = (0, k.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = hf(), a = e ? ye.DX : wf[o], s = (0, L.v6)({
            className: vf({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, D.jsx)(a, {
            label: "",
            ref: n,
            ...s
          })
        }),
        _f = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, D.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        jf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, D.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Of = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, k.useRef)(null),
            s = (0, ve.UP)(a, o),
            i = e ? ye.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Yu.i)(n, a),
            c = (0, L.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, D.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        Pf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? ye.DX : "div",
            s = (0, L.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, D.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Sf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, Me.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        Rf = (0, k.forwardRef)((e, t) => {
          const {
            background: r
          } = hf(), n = "none" !== r, o = (0, L.v6)({
            className: pf({
              hasBackground: n
            })
          }, e);
          return (0, D.jsx)(af, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var Df = r(64634),
        Nf = r(7697),
        kf = r(17497);
      var If = r(57491);

      function zf(e) {
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

      function Tf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = zf(o)) in n ? Object.defineProperty(n, o, {
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

      function Ef(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Af = "foundry_qmpv6yv",
        Mf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tf(Tf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vf(l, n, e.defaultVariants) && (r += " " + c);
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
      const qf = (0, k.createContext)(null);

      function Hf() {
        const e = (0, k.useContext)(qf);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Ff = (0, k.forwardRef)(({
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
              const t = (0, ve.rl)(),
                r = (0, ve.jt)(),
                [n, o] = (0, k.useState)([]),
                a = n.length,
                [s, i] = (0, k.useState)(0),
                [d, l] = (0, Df.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [(0, Nf.A)(), (0, kf.A)()]),
                c = (0, k.useRef)(0),
                u = (0, k.useRef)(!1),
                f = n[s],
                p = (0, k.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                v = (0, k.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                y = (0, k.useCallback)((e, t) => {
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
              return (0, k.useEffect)(() => {
                l && (v(l), y(l), l.on("reInit", v).on("reInit", y).on("scroll", y).on("slideFocus", y))
              }, [l, y]), (0, k.useEffect)(() => {
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
          (0, k.useEffect)(() => {
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
            y = (0, L.v6)({
              className: Mf(c)
            }, v, i),
            b = e ? ye.DX : "div";
          return (0, D.jsx)(qf.Provider, {
            value: l,
            children: (0, D.jsx)(b, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...y,
              children: t
            })
          })
        }),
        Bf = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Zf = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Hf();
          if (!e && !n || !n?.status) return null;
          const o = e || Bf[n.status],
            a = qe[o],
            s = (0, L.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, D.jsx)(a, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        Xf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, D.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Gf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? ye.DX : "div",
            d = (0, L.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, D.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        }),
        Kf = (0, k.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a,
            emblaApi: s
          } = Hf(), i = (0, L.v6)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, ve.UP)(a, n), l = k.Children.map(t, e => {
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
          }, []), s?.on("slidesChanged", () => {
            l && o(l)
          }), (0, D.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, D.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Wf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, k.useRef)(null),
            s = (0, ve.UP)(a, o),
            i = e ? ye.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Yu.i)(n, a),
            c = (0, L.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, D.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...d,
            ...c,
            children: t
          })
        }),
        Uf = (0, k.forwardRef)((e, t) => {
          const r = (0, L.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, D.jsx)(af, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        $f = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? ye.DX : "div",
            s = (0, L.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, D.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Yf = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Hf(), a = (0, L.v6)({
            className: Af
          }, t);
          return (0, D.jsx)(If.K, {
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
        Qf = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Hf(), a = (0, L.v6)({
            className: Af
          }, t);
          return (0, D.jsx)(If.K, {
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
        Jf = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Hf(), a = (0, L.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, D.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

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
            var n, o, a;
            n = e, o = t, a = r[t], (o = ep(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
        ap = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rp(rp({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
        sp = ap({
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
        ip = ap({
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
        dp = ap({
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
      const lp = (0, k.createContext)(null);

      function cp() {
        const e = (0, k.useContext)(lp);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const up = (0, k.forwardRef)(({
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
            u = (0, L.v6)({
              className: ip(c)
            }, d),
            f = e ? ye.DX : "div";
          return (0, D.jsx)(lp.Provider, {
            value: c,
            children: (0, D.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        fp = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = cp(), s = e ? ye.DX : "div", i = (0, L.v6)({
            className: dp({
              size: a
            })
          }, n);
          return (0, D.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        pp = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = qe[e],
            o = (0, L.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, D.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        vp = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = cp(), a = (0, L.v6)({
            className: sp({
              background: n
            })
          }, t);
          return (0, D.jsx)(it, {
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
      var yp = r(34629),
        bp = Object.defineProperty,
        hp = (e, t) => bp(e, "name", {
          value: t,
          configurable: !0
        }),
        mp = "ToastProvider",
        [gp, Cp, wp] = qo("Toast"),
        [xp, _p] = (0, Ir.A)("Toast", [wp]),
        [jp, Op] = xp(mp),
        Pp = hp(e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = k.useState(null), [c, u] = k.useState(0), f = k.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${mp}\`. Expected non-empty \`string\`.`), (0, D.jsx)(gp.Provider, {
            scope: t,
            children: (0, D.jsx)(jp, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: k.useCallback(() => u(e => e + 1), []),
              onToastRemove: k.useCallback(() => u(e => e - 1), []),
              isClosePausedRef: f,
              announcerContainer: s,
              children: i
            })
          })
        }, "ToastProvider"),
        Sp = ["F8"],
        Rp = "toast.viewportPause",
        Dp = "toast.viewportResume",
        Np = k.forwardRef(hp(function(e, t) {
          const {
            __scopeToast: r,
            hotkey: n = Sp,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = Op("ToastViewport", r), i = Cp(r), d = k.useRef(null), l = k.useRef(null), c = k.useRef(null), u = k.useRef(null), f = (0, kr.s)(t, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          k.useEffect(() => {
            const e = hp(e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            }, "handleKeyDown");
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), k.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (v && e && t) {
              const r = hp(() => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(Rp);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                }, "handlePause"),
                n = hp(() => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(Dp);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                }, "handleResume"),
                o = hp(t => {
                  !e.contains(t.relatedTarget) && n()
                }, "handleFocusOutResume"),
                a = hp(() => {
                  e.contains(document.activeElement) || n()
                }, "handlePointerLeaveResume");
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", a), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [v, s.isClosePausedRef]);
          const y = k.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Kp(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return k.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = hp(t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = y({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  Wp(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              }, "handleKeyDown");
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, y]), (0, D.jsxs)(Wr, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, D.jsx)(kp, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Wp(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, D.jsx)(gp.Slot, {
              scope: r,
              children: (0, D.jsx)(zr.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, D.jsx)(kp, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Wp(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        }, "ToastViewport")),
        kp = k.forwardRef(hp(function(e, t) {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = Op("ToastFocusProxy", r);
          return (0, D.jsx)(Fn.s6, {
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
        }, "ToastFocusProxy")),
        Ip = "Toast",
        zp = k.forwardRef(hp(function(e, t) {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, Hn.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: Ip
          });
          return (0, D.jsx)(Ln, {
            present: r || i,
            children: (0, D.jsx)(Ep, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, Lr.c)(e.onPause),
              onResume: (0, Lr.c)(e.onResume),
              onSwipeStart: (0, Nr.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Nr.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, Nr.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Nr.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        }, "Toast")),
        [Lp, Tp] = xp(Ip, {
          onClose() {}
        }),
        Ep = k.forwardRef(hp(function(e, t) {
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
          } = e, y = Op(Ip, r), b = Cp(r), [h, m] = k.useState(null), g = (0, kr.s)(t, m), C = k.useRef(null), w = k.useRef(null), x = o || y.duration, _ = k.useRef(0), j = k.useRef(x), O = k.useRef(0), {
            onToastAdd: P,
            onToastRemove: S
          } = y, R = (0, Lr.c)(() => {
            const e = h?.contains(document.activeElement);
            e && y.viewport?.focus(), s()
          }), N = k.useCallback(e => {
            e && e !== 1 / 0 && (window.clearTimeout(O.current), _.current = (new Date).getTime(), O.current = window.setTimeout(R, e))
          }, [R]);
          k.useEffect(() => {
            const e = y.viewport;
            if (e) {
              const t = hp(() => {
                  N(j.current), l?.()
                }, "handleResume"),
                r = hp(() => {
                  const e = (new Date).getTime() - _.current;
                  j.current = j.current - e, window.clearTimeout(O.current), d?.()
                }, "handlePause");
              return e.addEventListener(Rp, r), e.addEventListener(Dp, t), () => {
                e.removeEventListener(Rp, r), e.removeEventListener(Dp, t)
              }
            }
          }, [y.viewport, x, d, l, N]), k.useEffect(() => {
            a && !y.isClosePausedRef.current && N(x)
          }, [a, x, y.isClosePausedRef, N]), k.useEffect(() => () => {
            window.clearTimeout(O.current)
          }, []), k.useEffect(() => (P(), () => S()), [P, S]);
          const I = k.useMemo(() => h ? Fp(h) : null, [h]);
          return y.viewport ? (0, D.jsxs)(D.Fragment, {
            children: [I && (0, D.jsx)(Vp, {
              __scopeToast: r,
              role: "status",
              "aria-live": "foreground" === n ? "assertive" : "polite",
              children: I
            }), (0, D.jsx)(Lp, {
              scope: r,
              onClose: R,
              children: Sn.createPortal((0, D.jsx)(gp.ItemSlot, {
                scope: r,
                children: (0, D.jsx)(Kr, {
                  asChild: !0,
                  onEscapeKeyDown: (0, Nr.mK)(i, e => {
                    const t = b().some(t => t.ref.current?.contains(e.target));
                    t || R()
                  }),
                  children: (0, D.jsx)(zr.sG.li, {
                    tabIndex: 0,
                    "data-state": a ? "open" : "closed",
                    "data-swipe-direction": y.swipeDirection,
                    ...v,
                    ref: g,
                    style: {
                      userSelect: "none",
                      touchAction: "none",
                      ...e.style
                    },
                    onKeyDown: (0, Nr.mK)(e.onKeyDown, e => {
                      "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || R())
                    }),
                    onPointerDown: (0, Nr.mK)(e.onPointerDown, e => {
                      0 === e.button && (C.current = {
                        x: e.clientX,
                        y: e.clientY
                      })
                    }),
                    onPointerMove: (0, Nr.mK)(e.onPointerMove, e => {
                      if (!C.current) return;
                      const t = e.clientX - C.current.x,
                        r = e.clientY - C.current.y,
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
                      n ? (w.current = l, Bp("toast.swipeMove", u, f, {
                        discrete: !1
                      })) : Zp(l, y.swipeDirection, d) ? (w.current = l, Bp("toast.swipeStart", c, f, {
                        discrete: !1
                      }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (C.current = null)
                    }),
                    onPointerUp: (0, Nr.mK)(e.onPointerUp, e => {
                      const t = w.current,
                        r = e.target;
                      if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, C.current = null, t) {
                        const r = e.currentTarget,
                          n = {
                            originalEvent: e,
                            delta: t
                          };
                        Zp(t, y.swipeDirection, y.swipeThreshold) ? Bp("toast.swipeEnd", p, n, {
                          discrete: !0
                        }) : Bp("toast.swipeCancel", f, n, {
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
        }, "ToastImpl")),
        Vp = hp(e => {
          const {
            __scopeToast: t,
            children: r,
            ...n
          } = e, o = Op(Ip, t), [a, s] = k.useState(!1), [i, d] = k.useState(!1);
          return Xp(() => s(!0)), k.useEffect(() => {
            const e = window.setTimeout(() => d(!0), 1e3);
            return () => window.clearTimeout(e)
          }, []), i ? null : (0, D.jsx)(Nn, {
            asChild: !0,
            container: o.announcerContainer || void 0,
            children: (0, D.jsx)(Fn.s6, {
              ...n,
              children: a && (0, D.jsxs)(D.Fragment, {
                children: [o.label, " ", r]
              })
            })
          })
        }, "ToastAnnounce"),
        Ap = k.forwardRef(hp(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e;
          return (0, D.jsx)(zr.sG.div, {
            ...n,
            ref: t
          })
        }, "ToastDescription")),
        Mp = k.forwardRef(hp(function(e, t) {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, D.jsx)(Hp, {
            altText: r,
            asChild: !0,
            children: (0, D.jsx)(qp, {
              ...n,
              ref: t
            })
          }) : (console.error("Invalid prop `altText` supplied to `ToastAction`. Expected non-empty `string`."), null)
        }, "ToastAction")),
        qp = k.forwardRef(hp(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Tp("ToastClose", r);
          return (0, D.jsx)(Hp, {
            asChild: !0,
            children: (0, D.jsx)(zr.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, Nr.mK)(e.onClick, o.onClose)
            })
          })
        }, "ToastClose")),
        Hp = k.forwardRef(hp(function(e, t) {
          const {
            __scopeToast: r,
            altText: n,
            ...o
          } = e;
          return (0, D.jsx)(zr.sG.div, {
            "data-radix-toast-announce-exclude": "",
            "data-radix-toast-announce-alt": n || void 0,
            ...o,
            ref: t
          })
        }, "ToastAnnounceExclude"));

      function Fp(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), Gp(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...Fp(e))
          }
        }), t
      }

      function Bp(e, t, r, {
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
        }), n ? (0, zr.hO)(o, a) : o.dispatchEvent(a)
      }
      hp(Fp, "getAnnounceTextContent"), hp(Bp, "handleAndDispatchCustomEvent");
      var Zp = hp((e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      }, "isDeltaInDirection");

      function Xp(e = () => {}) {
        const t = (0, Lr.c)(e);
        (0, rn.N)(() => {
          let e = 0,
            r = 0;
          return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
          }
        }, [t])
      }

      function Gp(e) {
        return e.nodeType === e.ELEMENT_NODE
      }

      function Kp(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: hp(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Wp(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      hp(Xp, "useNextFrame"), hp(Gp, "isHTMLElement"), hp(Kp, "getTabbableCandidates"), hp(Wp, "focusFirst");
      var Up = Pp,
        $p = Np,
        Yp = zp,
        Qp = Ap,
        Jp = Mp,
        ev = qp;

      function tv(e) {
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

      function rv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function nv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = tv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ov(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var av = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = nv(nv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) av(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ov(e.variantClassNames, e => ov(e, e => e.split(" ")[0]))
            }
          }, t
        },
        iv = sv({
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
        dv = sv({
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
        lv = sv({
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
      const cv = ({
          testId: e,
          ...t
        }) => (0, D.jsx)(Up, {
          "data-testid": e,
          ...t
        }),
        uv = (0, k.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, L.v6)({
            className: lv({
              position: r
            })
          }, n);
          return (0, D.jsx)($p, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        fv = (0, k.createContext)(null);

      function pv() {
        const e = (0, k.useContext)(fv);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const vv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? ye.DX : Yp,
            i = (0, L.v6)({
              className: dv({
                appearance: n
              })
            }, o);
          return (0, D.jsx)(fv.Provider, {
            value: {
              appearance: n
            },
            children: (0, D.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        yv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? ye.DX : Qp,
            s = (0, L.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, D.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        bv = {
          danger: qe.CircleX,
          information: qe.Info,
          success: qe.CircleCheck,
          warning: qe.TriangleAlert,
          avocado: qe.CircleCheck
        },
        hv = (0, k.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = pv(), o = e ? ye.DX : bv[n], a = (0, L.v6)({
            className: iv({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, D.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        mv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, D.jsx)(Jp, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, D.jsx)(ye.DX, {
              children: t
            }) : (0, D.jsx)(yp.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        gv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, a) => {
          const s = (0, L.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, D.jsx)(ev, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, D.jsx)(ye.DX, {
              children: t
            }) : (0, D.jsx)(af, {
              size: "SM",
              label: n
            })
          })
        });
      var Cv = r(20179);

      function wv(e) {
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

      function xv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = wv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ov = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _v(_v({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ov(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jv(e.variantClassNames, e => jv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sv = Pv({
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
        Rv = Pv({
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
        Dv = Pv({
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

      function Nv() {
        const e = (0, k.useContext)(kv);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const kv = (0, k.createContext)(null),
        Iv = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, L.v6)({
              className: Dv({
                size: n
              })
            }, o),
            i = r ? ye.DX : "ol";
          return (0, D.jsx)(kv.Provider, {
            value: {
              size: n
            },
            children: (0, D.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        zv = (0, k.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, k.useRef)(null),
            {
              size: i
            } = Nv(),
            {
              itemProps: d
            } = (0, Cv.I)({
              isCurrent: e,
              children: t
            }, s),
            l = r ? ye.DX : "a",
            c = (0, L.v6)({
              className: (0, Me.clsx)(Sv({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, D.jsx)("li", {
            className: Rv({
              size: i
            }),
            ref: a,
            children: (0, D.jsx)(l, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        Lv = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = qe[e];
          return (0, D.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        Tv = (0, k.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, k.useState)(r), {
            size: d
          } = Nv(), l = (0, L.v6)({
            className: Rv({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, D.jsx)("li", {
            ref: a,
            ...l,
            children: (0, D.jsxs)(bd, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, D.jsx)(hd, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, D.jsx)(xd, {
                children: (0, D.jsx)(jd, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, D.jsx)(Ed, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Ev = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? ye.DX : Fd,
            s = (0, L.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, D.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function Vv(e) {
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

      function Av(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Av(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Av(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Hv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mv(Mv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Hv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qv(e.variantClassNames, e => qv(e, e => e.split(" ")[0]))
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
      const Bv = (0, k.createContext)(null);

      function Zv() {
        const e = (0, k.useContext)(Bv);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Xv = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? ye.DX : "div",
            d = (0, L.v6)({
              className: Fv({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, D.jsx)(Bv.Provider, {
            value: {
              type: o
            },
            children: (0, D.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...d
            })
          })
        }),
        Gv = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, D.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        Kv = (0, k.forwardRef)(({
          icon: e,
          iconElement: t,
          label: r,
          ...n
        }, o) => {
          const a = t || (e ? ai[e] : null),
            s = (0, L.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: r || ""
            }, n);
          return a && (0, D.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        Wv = () => {
          const e = (0, ve.Ub)(L.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Uv = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function $v(e) {
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

      function Yv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = $v(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jv(e, t) {
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
              n = Qv(Qv({}, e.defaultVariants), t);
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
              return Jv(e.variantClassNames, e => Jv(e, e => e.split(" ")[0]))
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
      const ry = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, D.jsx)(Ui, {
            ref: r,
            ...n
          })
        }),
        ny = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, D.jsx)($i, {
            ref: r,
            ...n
          })
        }),
        oy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, D.jsx)(Yi, {
            ref: r,
            ...n
          })
        }),
        ay = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, ve.rl)(),
            o = (0, L.v6)({
              "data-testid": e,
              className: ty({
                isTouchDevice: n
              })
            }, t);
          return (0, D.jsx)(Qi, {
            ref: r,
            ...o
          })
        }),
        sy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e
          }, t);
          return (0, D.jsx)(Ji, {
            ref: r,
            ...n
          })
        });

      function iy(e) {
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

      function dy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ly(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dy(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = iy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ly(ly({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) uy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cy(e.variantClassNames, e => cy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        py = fy({
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
        vy = fy({
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
      const yy = (0, k.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, k.createRef)(),
          dialogSpringRef: (0, Dr.$9)(),
          overlaySpringRef: (0, Dr.$9)()
        }),
        by = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, ve.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, ve.ZC)(d);
          return (0, D.jsx)(yy.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, k.useId)(),
              descriptionId: (0, k.useId)(),
              triggerRef: (0, k.useRef)(null),
              dialogSpringRef: (0, Dr.U2)(),
              overlaySpringRef: (0, Dr.U2)()
            },
            children: (0, D.jsx)(hy, {
              ...i
            })
          })
        },
        hy = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, k.useContext)(yy), n = (0, L.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, D.jsx)(cs, {
            ...n
          })
        },
        my = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, k.useContext)(yy), a = (0, ve.UP)(o, r), s = (0, L.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, D.jsx)(us, {
            ...s,
            ref: a
          })
        }),
        gy = e => (0, D.jsx)(ys, {
          forceMount: !0,
          ...e
        }),
        Cy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = (0, k.useContext)(yy), s = Uv(), i = (0, ve.jt)(), d = (0, Dr.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Dr.$W.stiff,
            immediate: i || a
          }), l = (0, L.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, Dr.CS)(hs);
          return (0, k.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, D.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        wy = (0, k.forwardRef)(({
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
            overlaySpringRef: b
          } = (0, k.useContext)(yy), h = (0, ve.rl)(), m = (0, ve.jt)(), g = (0, k.useRef)(null), C = Wv(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = Uv(),
              s = Wv(),
              i = (0, k.useRef)();
            return {
              bindDrag: (0, Gt.i3)(({
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
                  config: Dr.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: Dr.$W.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: Dr.$W.stiff
                }), r.start({
                  ...a(100),
                  immediate: !1,
                  config: Dr.$W.stiff
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
            overlaySpringRef: b,
            dialogSpringRef: y,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: v
          }), x = (0, Dr.pn)(s, {
            from: C(0),
            enter: C(100),
            leave: C(0),
            delay: s ? 100 : 0,
            config: Dr.$W.stiff,
            ref: y,
            immediate: m || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : v?.()
            }
          });
          (0, k.useEffect)(() => {
            y.start()
          }, [s]);
          const _ = (0, ve.UP)(g, a),
            j = h && !m && !n && w(),
            O = (0, L.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, o),
            P = (0, Dr.CS)(ws);
          return x((t, r) => r ? (0, D.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, D.jsx)(P, {
              forceMount: !0,
              ref: _,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        xy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, t);
          return (0, D.jsx)(Os, {
            ref: r,
            ...n
          })
        }),
        _y = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e
          }, t);
          return (0, D.jsx)(Ps, {
            ref: r,
            ...n
          })
        }),
        jy = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, D.jsxs)(ry, {
            ref: n,
            ...o,
            children: [(0, D.jsx)(ny, {
              className: "foundry_xov33ni",
              children: e
            }), (0, D.jsx)(oy, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, D.jsx)(ay, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Oy = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            a = e ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        Py = (0, k.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
              "data-testid": r,
              className: py({
                align: e
              })
            }, n),
            s = t ? ye.DX : "header";
          return (0, D.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        Sy = (0, k.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, L.v6)({
            "data-testid": e,
            className: vy({
              appearance: t
            })
          }, r);
          return (0, D.jsx)(Os, {
            ref: n,
            ...o
          })
        }),
        Ry = (0, k.forwardRef)((e, t) => {
          const r = (0, L.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, D.jsx)(If.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        Dy = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            a = t ? (0, D.jsx)(ye.DX, {
              ref: n,
              ...o
            }) : (0, D.jsx)(af, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, D.jsx)(Ss, {
            asChild: !0,
            children: a
          })
        }),
        Ny = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            a = e ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        ky = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            a = e ? ye.DX : "footer";
          return (0, D.jsx)(a, {
            ref: n,
            ...o
          })
        });
      var Iy = r(76733),
        zy = Object.defineProperty,
        Ly = (e, t) => zy(e, "name", {
          value: t,
          configurable: !0
        }),
        Ty = "Avatar",
        [Ey, Vy] = (0, Ir.A)(Ty),
        Ay = [0, () => {}],
        [My, qy] = Ey(Ty),
        Hy = k.forwardRef(Ly(function(e, t) {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = k.useState("idle"), [s, i] = Xy();
          return (0, D.jsx)(My, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, D.jsx)(zr.sG.span, {
              ...n,
              ref: t
            })
          })
        }, "Avatar")),
        Fy = k.forwardRef(Ly(function(e, t) {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...a
          } = e, s = qy("AvatarImage", r);
          Gy(s.setImageCount);
          const i = By(n, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            d = (0, Lr.c)(e => {
              o?.(e)
            }),
            l = k.useRef(i);
          return (0, rn.N)(() => {
            const e = l.current;
            l.current = i, i !== e && d(i)
          }, [i, d]), "loaded" === i ? (0, D.jsx)(zr.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        }, "AvatarImage"));

      function By(e, {
        loadingStatus: t,
        setLoadingStatus: r,
        referrerPolicy: n,
        crossOrigin: o
      }) {
        return (0, rn.N)(() => {
          if (!e) return void r("error");
          const t = new window.Image,
            a = Ly(e => {
              const t = e.currentTarget;
              r(Zy(t))
            }, "handleLoad"),
            s = Ly(() => r("error"), "handleError");
          return t.addEventListener("load", a), t.addEventListener("error", s), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(Zy(t)), () => {
            t.removeEventListener("load", a), t.removeEventListener("error", s), r("idle")
          }
        }, [e, o, n, r]), t
      }

      function Zy(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Xy() {
        let e = Ay;
        if (Iy.D) {
          e = k.useState(0);
          const [t] = e, r = k.useRef(!1);
          k.useEffect(() => {
            t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
          }, [t])
        }
        return e
      }

      function Gy(e) {
        Iy.D && k.useEffect(() => (e(e => e + 1), () => {
          e(e => e - 1)
        }), [e])
      }

      function Ky(e) {
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

      function Wy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Uy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wy(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ky(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $y(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Ly(By, "useImageLoadingStatus"), Ly(Zy, "getImageLoadingStatus"), Ly(Xy, "useImageCount"), Ly(Gy, "useUpdateImageCount");
      var Yy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Qy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Uy(Uy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $y(e.variantClassNames, e => $y(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Jy = Qy({
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
        eb = "var(--foundry_v912w22)",
        tb = "var(--foundry_v912w23)",
        rb = Qy({
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
        nb = Qy({
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
        ob = "var(--foundry_v912w21)",
        ab = "var(--foundry_v912w20)",
        sb = Qy({
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
      const ib = (0, k.createContext)(null);

      function db() {
        const e = (0, k.useContext)(ib);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const lb = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, L.v6)({
            "data-testid": r,
            "aria-disabled": a,
            className: Jy({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, D.jsx)(ib.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, D.jsx)(Hy, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        cb = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = db(), [i, d] = (0, k.useState)(!1);
          (0, k.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, L.v6)({
              className: rb({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, D.jsx)("span", {
            className: nb({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, D.jsx)(Fy, {
              ref: o,
              ...c
            })
          })
        }),
        ub = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, k.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = db(),
            d = s || "online",
            l = (0, ve.UP)(o, n),
            c = (0, L.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: sb({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, I.D)({
                [ab]: t?.online,
                [ob]: t?.offline,
                [eb]: t?.away,
                [tb]: t?.busy
              })
            }, r);
          return (0, D.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function fb(e) {
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

      function pb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pb(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = fb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vb(vb({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bb(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yb(e.variantClassNames, e => yb(e, e => e.split(" ")[0]))
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
      const mb = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? ye.DX : "nav";
          return (0, D.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        gb = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? ye.DX : "div";
          return (0, D.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Cb = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, k.useRef)(null),
            i = (0, ve.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, Yu.i)(o, s),
            c = (0, L.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, Me.clsx)(hb({
                isActive: r
              }))
            }, d),
            u = e ? ye.DX : "a";
          return (0, D.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        wb = (0, k.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, D.jsx)(Cb, {
            ref: n,
            ...o,
            children: (0, D.jsx)(qe.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        xb = (0, k.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, D.jsx)(Cb, {
            ref: n,
            ...o,
            children: (0, D.jsx)(qe.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        _b = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, L.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            a = e ? ye.DX : "span";
          return (0, D.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        jb = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, L.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ...o,
            children: t
          })
        },
        Ob = (0, k.createContext)(null);

      function Pb() {
        const e = (0, k.useContext)(Ob);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const Sb = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, k.useId)(),
            a = (0, L.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? ye.DX : "div";
          return (0, D.jsx)(Ob.Provider, {
            value: {
              labelId: o
            },
            children: (0, D.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        Rb = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = Pb(), s = (0, L.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? ye.DX : "label";
          return (0, D.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: t
          })
        }),
        Db = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = Pb(), s = (0, L.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? ye.DX : ul;
          return (0, D.jsxs)(i, {
            ...s,
            children: [(0, D.jsxs)(yl, {
              ref: o,
              children: [(0, D.jsx)(bl, {
                placeholder: r
              }), (0, D.jsx)(hl, {})]
            }), (0, D.jsx)(jl, {
              children: (0, D.jsx)(fl, {
                children: (0, D.jsx)(vl, {
                  children: t
                })
              })
            })]
          })
        }),
        Nb = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
              "data-testid": r
            }, n),
            s = e ? ye.DX : wl;
          return (0, D.jsx)(s, {
            ...a,
            ref: o,
            children: (0, D.jsx)(xl, {
              children: t
            })
          })
        }),
        kb = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            s = e ? ye.DX : "p";
          return (0, D.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        });
      var Ib = r(25298),
        zb = Object.defineProperty,
        Lb = (e, t) => zb(e, "name", {
          value: t,
          configurable: !0
        }),
        Tb = "rovingFocusGroup.onEntryFocus",
        Eb = {
          bubbles: !1,
          cancelable: !0
        },
        Vb = "RovingFocusGroup",
        [Ab, Mb, qb] = qo(Vb),
        [Hb, Fb] = (0, Ir.A)(Vb, [qb]),
        [Bb, Zb] = Hb(Vb),
        Xb = k.forwardRef(Lb(function(e, t) {
          return (0, D.jsx)(Ab.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, D.jsx)(Ab.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, D.jsx)(Gb, {
                ...e,
                ref: t
              })
            })
          })
        }, "RovingFocusGroup")),
        Gb = k.forwardRef(Lb(function(e, t) {
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
          } = e, f = k.useRef(null), p = (0, kr.s)(t, f), v = (0, Eo.jH)(a), [y, b] = (0, Hn.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Vb
          }), [h, m] = k.useState(!1), g = (0, Lr.c)(l), C = Mb(r), w = k.useRef(!1), [x, _] = k.useState(0);
          return k.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(Tb, g), () => e.removeEventListener(Tb, g)
          }, [g]), (0, D.jsx)(Bb, {
            scope: r,
            orientation: n,
            dir: v,
            loop: o,
            currentTabStopId: y,
            onItemFocus: k.useCallback(e => b(e), [b]),
            onItemShiftTab: k.useCallback(() => m(!0), []),
            onFocusableItemAdd: k.useCallback(() => _(e => e + 1), []),
            onFocusableItemRemove: k.useCallback(() => _(e => e - 1), []),
            children: (0, D.jsx)(zr.sG.div, {
              tabIndex: h || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Nr.mK)(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: (0, Nr.mK)(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !h) {
                  const t = new CustomEvent(Tb, Eb);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = C().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === y),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Yb(n, c)
                  }
                }
                w.current = !1
              }),
              onBlur: (0, Nr.mK)(e.onBlur, () => m(!1))
            })
          })
        }, "RovingFocusGroupImpl")),
        Kb = k.forwardRef(Lb(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Ur.B)(), l = a || d, c = Zb("RovingFocusGroupItem", r), u = c.currentTabStopId === l, f = Mb(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: y
          } = c, b = (0, Ib.z)();
          return (0, rn.N)(() => {
            if (b && n) return p(), () => v()
          }, [b, n, p, v]), k.useEffect(() => {
            if (!b && n) return p(), () => v()
          }, [b, n, p, v]), (0, D.jsx)(Ab.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, D.jsx)(zr.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, Nr.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, Nr.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, Nr.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = $b(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const r = f().filter(e => e.focusable);
                  let n = r.map(e => e.ref.current);
                  if ("last" === t) n.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && n.reverse();
                    const r = n.indexOf(e.currentTarget);
                    n = c.loop ? Qb(n, r + 1) : n.slice(r + 1)
                  }
                  setTimeout(() => Yb(n))
                }
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: u,
                hasTabStop: null != y
              }) : s
            })
          })
        }, "RovingFocusGroupItem")),
        Wb = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last"
        };

      function Ub(e, t) {
        return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
      }

      function $b(e, t, r) {
        const n = Ub(e.key, r);
        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n))) return Wb[n]
      }

      function Yb(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }

      function Qb(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }
      Lb(Ub, "getDirectionAwareKey"), Lb($b, "getFocusIntent"), Lb(Yb, "focusFirst"), Lb(Qb, "wrapArray");
      var Jb = Xb,
        eh = Kb,
        th = Object.defineProperty,
        rh = (e, t) => th(e, "name", {
          value: t,
          configurable: !0
        }),
        nh = k.forwardRef(rh(function(e, t) {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, Hn.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: "Toggle"
          });
          return (0, D.jsx)(zr.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, Nr.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        }, "Toggle")),
        oh = Object.defineProperty,
        ah = (e, t) => oh(e, "name", {
          value: t,
          configurable: !0
        }),
        sh = "ToggleGroup",
        [ih, dh] = (0, Ir.A)(sh, [Fb]),
        lh = Fb(),
        ch = k.forwardRef(ah(function(e, t) {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, D.jsx)(ph, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, D.jsx)(vh, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${sh}\``)
        }, "ToggleGroup")),
        [uh, fh] = ih(sh),
        ph = k.forwardRef(ah(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = ah(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Hn.i)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: sh
          });
          return (0, D.jsx)(uh, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: k.useMemo(() => s ? [s] : [], [s]),
            onItemActivate: i,
            onItemDeactivate: k.useCallback(() => i(""), [i]),
            children: (0, D.jsx)(hh, {
              ...a,
              ref: t
            })
          })
        }, "ToggleGroupImplSingle")),
        vh = k.forwardRef(ah(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = ah(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Hn.i)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: sh
          }), d = k.useCallback(e => i((t = []) => [...t, e]), [i]), l = k.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, D.jsx)(uh, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: s,
            onItemActivate: d,
            onItemDeactivate: l,
            children: (0, D.jsx)(hh, {
              ...a,
              ref: t
            })
          })
        }, "ToggleGroupImplMultiple")),
        [yh, bh] = ih(sh),
        hh = k.forwardRef(ah(function(e, t) {
          const {
            __scopeToggleGroup: r,
            disabled: n = !1,
            rovingFocus: o = !0,
            orientation: a,
            dir: s,
            loop: i = !0,
            ...d
          } = e, l = lh(r), c = (0, Eo.jH)(s), u = {
            dir: c,
            ...d
          };
          return (0, D.jsx)(yh, {
            scope: r,
            rovingFocus: o,
            disabled: n,
            children: o ? (0, D.jsx)(Jb, {
              asChild: !0,
              ...l,
              orientation: a,
              dir: c,
              loop: i,
              children: (0, D.jsx)(zr.sG.div, {
                ...u,
                ref: t
              })
            }) : (0, D.jsx)(zr.sG.div, {
              ...u,
              ref: t
            })
          })
        }, "ToggleGroupImpl")),
        mh = "ToggleGroupItem",
        gh = k.forwardRef(ah(function(e, t) {
          const r = fh(mh, e.__scopeToggleGroup),
            n = bh(mh, e.__scopeToggleGroup),
            o = lh(e.__scopeToggleGroup),
            a = r.value.includes(e.value),
            s = n.disabled || e.disabled,
            i = {
              ...e,
              pressed: a,
              disabled: s
            },
            d = k.useRef(null);
          return n.rovingFocus ? (0, D.jsx)(eh, {
            asChild: !0,
            ...o,
            focusable: !s,
            active: a,
            ref: d,
            children: (0, D.jsx)(Ch, {
              ...i,
              ref: t
            })
          }) : (0, D.jsx)(Ch, {
            ...i,
            ref: t
          })
        }, "ToggleGroupItem")),
        Ch = k.forwardRef(ah(function(e, t) {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, a = fh(mh, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, D.jsx)(nh, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? a.onItemActivate(n) : a.onItemDeactivate(n)
            }
          })
        }, "ToggleGroupItemImpl"));

      function wh(e) {
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

      function xh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xh(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = wh(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Oh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ph = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _h(_h({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Oh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jh(e.variantClassNames, e => jh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sh = "var(--foundry_zxwkyk2)",
        Rh = "var(--foundry_zxwkyk3)",
        Dh = Ph({
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
        Nh = Ph({
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
        kh = Ph({
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
        Ih = "var(--foundry_zxwkyk1)",
        zh = "var(--foundry_zxwkyk0)",
        Lh = Ph({
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
      const Th = (0, k.createContext)(null);

      function Eh() {
        const e = (0, k.useContext)(Th);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const Vh = (0, k.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, L.v6)({
            "data-testid": e,
            className: Dh({
              size: t
            }),
            type: r
          }, n);
          return (0, D.jsx)(Th.Provider, {
            value: {
              size: t
            },
            children: (0, D.jsx)(ch, {
              ref: o,
              ...a
            })
          })
        }),
        Ah = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Eh(), o = (0, L.v6)({
            "data-testid": e,
            className: Nh({
              size: n
            })
          }, t);
          return (0, D.jsx)(gh, {
            ref: r,
            ...o
          })
        }),
        Mh = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Eh(), o = ai[e];
          return (0, D.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        qh = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
            "data-testid": e,
            className: Lh({
              status: r
            }),
            style: (0, I.D)({
              [zh]: t?.online,
              [Ih]: t?.offline,
              [Sh]: t?.away,
              [Rh]: t?.busy
            })
          }, n);
          return (0, D.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        Hh = (0, k.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = Eh(), a = (0, L.v6)({
            "data-testid": e,
            className: kh({
              variant: t,
              size: o
            })
          }, r);
          return (0, D.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var Fh = Object.defineProperty,
        Bh = (e, t) => Fh(e, "name", {
          value: t,
          configurable: !0
        }),
        Zh = "Popover",
        [Xh, Gh] = (0, Ir.A)(Zh, [ln]),
        Kh = ln(),
        [Wh, Uh] = Xh(Zh),
        $h = Bh(e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Kh(t), d = k.useRef(null), [l, c] = k.useState(!1), [u, f] = (0, Hn.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Zh
          });
          return (0, D.jsx)(_n, {
            ...i,
            children: (0, D.jsx)(Wh, {
              scope: t,
              contentId: (0, Ur.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: k.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: k.useCallback(() => c(!0), []),
              onCustomAnchorRemove: k.useCallback(() => c(!1), []),
              modal: s,
              children: r
            })
          })
        }, "Popover"),
        Yh = k.forwardRef(Bh(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Uh("PopoverAnchor", r), a = Kh(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return k.useEffect(() => (s(), () => i()), [s, i]), (0, D.jsx)(jn, {
            ...a,
            ...n,
            ref: t
          })
        }, "PopoverAnchor")),
        Qh = k.forwardRef(Bh(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Uh("PopoverTrigger", r), a = Kh(r), s = (0, kr.s)(t, o.triggerRef), i = (0, D.jsx)(zr.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": um(o.open),
            ...n,
            ref: s,
            onClick: (0, Nr.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, D.jsx)(jn, {
            asChild: !0,
            ...a,
            children: i
          })
        }, "PopoverTrigger")),
        Jh = "PopoverPortal",
        [em, tm] = Xh(Jh, {
          forceMount: void 0
        }),
        rm = Bh(e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Uh(Jh, t);
          return (0, D.jsx)(em, {
            scope: t,
            forceMount: r,
            children: (0, D.jsx)(Ln, {
              present: r || a.open,
              children: (0, D.jsx)(Nn, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        }, "PopoverPortal"),
        nm = "PopoverContent",
        om = k.forwardRef(Bh(function(e, t) {
          const r = tm(nm, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Uh(nm, e.__scopePopover);
          return (0, D.jsx)(Ln, {
            present: n || a.open,
            children: a.modal ? (0, D.jsx)(sm, {
              ...o,
              ref: t
            }) : (0, D.jsx)(im, {
              ...o,
              ref: t
            })
          })
        }, "PopoverContent")),
        am = (0, qn.TL)("PopoverContent.RemoveScroll"),
        sm = k.forwardRef(Bh(function(e, t) {
          const r = Uh(nm, e.__scopePopover),
            n = k.useRef(null),
            o = (0, kr.s)(t, n),
            a = k.useRef(!1);
          return k.useEffect(() => {
            const e = n.current;
            if (e) return (0, rs.Eq)(e)
          }, []), (0, D.jsx)(ts.A, {
            as: am,
            allowPinchZoom: !0,
            children: (0, D.jsx)(dm, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Nr.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Nr.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Nr.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "PopoverContentModal")),
        im = k.forwardRef(Bh(function(e, t) {
          const r = Uh(nm, e.__scopePopover),
            n = k.useRef(!1),
            o = k.useRef(!1);
          return (0, D.jsx)(dm, {
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
        }, "PopoverContentNonModal")),
        dm = k.forwardRef(Bh(function(e, t) {
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
          } = e, f = Uh(nm, r), p = Kh(r);
          return (0, es.Oh)(), (0, D.jsx)(Fa, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, D.jsx)(Mr, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, D.jsx)(On, {
                "data-state": um(f.open),
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
        lm = k.forwardRef(Bh(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Uh("PopoverClose", r);
          return (0, D.jsx)(zr.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, Nr.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        }, "PopoverClose")),
        cm = k.forwardRef(Bh(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Kh(r);
          return (0, D.jsx)(Pn, {
            ...o,
            ...n,
            ref: t
          })
        }, "PopoverArrow"));

      function um(e) {
        return e ? "open" : "closed"
      }
      Bh(um, "getState");
      var fm = $h,
        pm = Yh,
        vm = Qh,
        ym = rm,
        bm = om,
        hm = lm,
        mm = cm;

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

      function Cm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cm(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = gm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _m = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jm = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wm(wm({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _m(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xm(e.variantClassNames, e => xm(e, e => e.split(" ")[0]))
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
      const Om = (0, k.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Pm = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, a] = (0, ve.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, L.v6)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, D.jsx)(Om.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, D.jsx)(fm, {
              ...s
            })
          })
        },
        Sm = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, D.jsx)(vm, {
            ref: r,
            ...n
          })
        }),
        Rm = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Dm = (0, k.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, k.useContext)(Om), s = (0, k.useRef)(null), i = (0, ve.UP)(s, o), {
            buttonProps: d
          } = (0, ve.sL)(n, s), l = (0, L.v6)({
            "data-testid": r,
            className: jm({
              size: t
            })
          }, d), c = a ? qe.ChevronUp : qe.ChevronDown;
          return (0, D.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, D.jsx)(c, {
              label: "",
              size: Rm[t]
            })]
          })
        }),
        Nm = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e
          }, t);
          return (0, D.jsx)(pm, {
            ref: r,
            ...n
          })
        }),
        km = (0, k.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, D.jsx)(bm, {
            ref: n,
            ...o
          })
        }),
        Im = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, D.jsx)(mm, {
            ref: r,
            ...n
          })
        }),
        zm = e => (0, D.jsx)(ym, {
          ...e
        }),
        Lm = e => (0, D.jsx)(hm, {
          ...e
        });

      function Tm(e) {
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

      function Em(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Em(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Tm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Em(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Am(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Mm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vm(Vm({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Mm(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Am(e.variantClassNames, e => Am(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Hm = "var(--foundry_rmorls2)",
        Fm = qm({
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
        Bm = "var(--foundry_rmorls0)",
        Zm = qm({
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
        Xm = "var(--foundry_rmorls3)",
        Gm = "var(--foundry_rmorls1)",
        Km = qm({
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
        Wm = Object.defineProperty,
        Um = (e, t) => Wm(e, "name", {
          value: t,
          configurable: !0
        }),
        $m = "Progress",
        [Ym, Qm] = (0, Ir.A)($m),
        [Jm, eg] = Ym($m),
        tg = k.forwardRef(Um(function(e, t) {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = ng,
            ...s
          } = e;
          !o && 0 !== o || sg(o) || console.error(dg(`${o}`, "Progress"));
          const i = sg(o) ? o : 100;
          null === n || ig(n, i) || console.error(lg(`${n}`, "Progress"));
          const d = ig(n, i) ? n : null,
            l = ag(d) ? a(d, i) : void 0;
          return (0, D.jsx)(Jm, {
            scope: r,
            value: d,
            max: i,
            children: (0, D.jsx)(zr.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": ag(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": og(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        }, "Progress")),
        rg = k.forwardRef(Um(function(e, t) {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = eg("ProgressIndicator", r);
          return (0, D.jsx)(zr.sG.div, {
            "data-state": og(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        }, "ProgressIndicator"));

      function ng(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function og(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function ag(e) {
        return "number" == typeof e
      }

      function sg(e) {
        return ag(e) && !isNaN(e) && e > 0
      }

      function ig(e, t) {
        return ag(e) && !isNaN(e) && e <= t && e >= 0
      }

      function dg(e, t) {
        return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
      }

      function lg(e, t) {
        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
      }
      Um(ng, "defaultGetValueLabel"), Um(og, "getProgressState"), Um(ag, "isNumber"), Um(sg, "isValidMaxNumber"), Um(ig, "isValidValueNumber"), Um(dg, "getInvalidMaxError"), Um(lg, "getInvalidValueError");
      var cg = tg,
        ug = rg;
      const fg = (0, k.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        pg = (0, k.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, D.jsx)(fg.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, D.jsx)(vg, {
              ...n,
              ref: o
            })
          })
        }),
        vg = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ...o,
            ref: n
          })
        }),
        yg = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: a,
            size: s
          } = (0, k.useContext)(fg), i = (0, L.v6)({
            "data-testid": e,
            className: Zm({
              size: s
            }),
            value: o,
            max: a,
            style: (0, I.D)({
              [Xm]: t
            }),
            "data-track": !0
          }, r);
          return (0, D.jsx)(cg, {
            ref: n,
            ...i
          })
        }),
        bg = (0, k.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, k.useContext)(fg), i = s ? "-100%" : `-${100-a}%`, d = (0, L.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, I.D)({
              [Bm]: i,
              [Gm]: `${t}ms`,
              [Hm]: r
            })
          }, n);
          return (0, D.jsx)(ug, {
            ref: o,
            ...d
          })
        }),
        hg = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, k.useContext)(fg), a = (0, L.v6)({
            "data-testid": t,
            className: Fm({
              size: o
            }),
            "aria-hidden": !0
          }, r), s = e ? ye.DX : "span";
          return (0, D.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        mg = (0, k.forwardRef)(({
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
          } = (0, k.useContext)(fg), l = (0, L.v6)({
            "data-testid": e,
            className: Fm({
              size: s
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, D.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, D.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, D.jsx)("span", {
              className: Km({
                size: s
              }),
              children: "%"
            })]
          }) : (0, D.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", a]
          })
        });
      var gg = Object.defineProperty,
        Cg = (e, t) => gg(e, "name", {
          value: t,
          configurable: !0
        }),
        wg = "Collapsible",
        [xg, _g] = (0, Ir.A)(wg),
        [jg, Og] = xg(wg),
        Pg = k.forwardRef(Cg(function(e, t) {
          const {
            __scopeCollapsible: r,
            open: n,
            defaultOpen: o,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, Hn.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: wg
          });
          return (0, D.jsx)(jg, {
            scope: r,
            disabled: a,
            contentId: (0, Ur.B)(),
            open: d,
            onOpenToggle: k.useCallback(() => l(e => !e), [l]),
            children: (0, D.jsx)(zr.sG.div, {
              "data-state": kg(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: t
            })
          })
        }, "Collapsible")),
        Sg = k.forwardRef(Cg(function(e, t) {
          const {
            __scopeCollapsible: r,
            ...n
          } = e, o = Og("CollapsibleTrigger", r);
          return (0, D.jsx)(zr.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": kg(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...n,
            ref: t,
            onClick: (0, Nr.mK)(e.onClick, o.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        Rg = "CollapsibleContent",
        Dg = k.forwardRef(Cg(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Og(Rg, e.__scopeCollapsible);
          return (0, D.jsx)(Ln, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, D.jsx)(Ng, {
              ...n,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        Ng = k.forwardRef(Cg(function(e, t) {
          const {
            __scopeCollapsible: r,
            present: n,
            children: o,
            ...a
          } = e, s = Og(Rg, r), [i, d] = k.useState(n), l = k.useRef(null), c = (0, kr.s)(t, l), u = k.useRef(0), f = u.current, p = k.useRef(0), v = p.current, y = s.open || i, b = k.useRef(y), h = k.useRef(void 0);
          return k.useEffect(() => {
            const e = requestAnimationFrame(() => b.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, rn.N)(() => {
            const e = l.current;
            if (e) {
              h.current = h.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              u.current = t.height, p.current = t.width, b.current || (e.style.transitionDuration = h.current.transitionDuration, e.style.animationName = h.current.animationName), d(n)
            }
          }, [s.open, n]), (0, D.jsx)(zr.sG.div, {
            "data-state": kg(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            id: s.contentId,
            hidden: !y,
            ...a,
            ref: c,
            style: {
              "--radix-collapsible-content-height": f ? `${f}px` : void 0,
              "--radix-collapsible-content-width": v ? `${v}px` : void 0,
              ...e.style
            },
            children: y && o
          })
        }, "CollapsibleContentImpl"));

      function kg(e) {
        return e ? "open" : "closed"
      }
      Cg(kg, "getState");
      var Ig = Pg,
        zg = Sg,
        Lg = Dg,
        Tg = Object.defineProperty,
        Eg = (e, t) => Tg(e, "name", {
          value: t,
          configurable: !0
        }),
        Vg = "Accordion",
        Ag = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [Mg, qg, Hg] = qo(Vg),
        [Fg, Bg] = (0, Ir.A)(Vg, [Hg, _g]),
        Zg = _g(),
        Xg = k.forwardRef(Eg(function(e, t) {
          const {
            type: r,
            ...n
          } = e, o = n, a = n;
          return (0, D.jsx)(Mg.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, D.jsx)(Yg, {
              ...a,
              ref: t
            }) : (0, D.jsx)($g, {
              ...o,
              ref: t
            })
          })
        }, "Accordion")),
        [Gg, Kg] = Fg(Vg),
        [Wg, Ug] = Fg(Vg, {
          collapsible: !1
        }),
        $g = k.forwardRef(Eg(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = Eg(() => {}, "onValueChange"),
            collapsible: a = !1,
            ...s
          } = e, [i, d] = (0, Hn.i)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: Vg
          });
          return (0, D.jsx)(Gg, {
            scope: e.__scopeAccordion,
            value: k.useMemo(() => i ? [i] : [], [i]),
            onItemOpen: d,
            onItemClose: k.useCallback(() => a && d(""), [a, d]),
            children: (0, D.jsx)(Wg, {
              scope: e.__scopeAccordion,
              collapsible: a,
              children: (0, D.jsx)(eC, {
                ...s,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        Yg = k.forwardRef(Eg(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = Eg(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Hn.i)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: Vg
          }), d = k.useCallback(e => i((t = []) => [...t, e]), [i]), l = k.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, D.jsx)(Gg, {
            scope: e.__scopeAccordion,
            value: s,
            onItemOpen: d,
            onItemClose: l,
            children: (0, D.jsx)(Wg, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, D.jsx)(eC, {
                ...a,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [Qg, Jg] = Fg(Vg),
        eC = k.forwardRef(Eg(function(e, t) {
          const {
            __scopeAccordion: r,
            disabled: n,
            dir: o,
            orientation: a = "vertical",
            ...s
          } = e, i = k.useRef(null), d = (0, kr.s)(i, t), l = qg(r), c = "ltr" === (0, Eo.jH)(o), u = (0, Nr.mK)(e.onKeyDown, e => {
            if (!Ag.includes(e.key)) return;
            const t = e.target,
              r = l().filter(e => !e.ref.current?.disabled),
              n = r.findIndex(e => e.ref.current === t),
              o = r.length;
            if (-1 === n) return;
            e.preventDefault();
            let s = n;
            const i = o - 1,
              d = Eg(() => {
                s = n + 1, s > i && (s = 0)
              }, "moveNext"),
              u = Eg(() => {
                s = n - 1, s < 0 && (s = i)
              }, "movePrev");
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
          return (0, D.jsx)(Qg, {
            scope: r,
            disabled: n,
            direction: o,
            orientation: a,
            children: (0, D.jsx)(Mg.Slot, {
              scope: r,
              children: (0, D.jsx)(zr.sG.div, {
                ...s,
                "data-orientation": a,
                ref: d,
                onKeyDown: n ? void 0 : u
              })
            })
          })
        }, "AccordionImpl")),
        tC = "AccordionItem",
        [rC, nC] = Fg(tC),
        oC = k.forwardRef(Eg(function(e, t) {
          const {
            __scopeAccordion: r,
            value: n,
            ...o
          } = e, a = Jg(tC, r), s = Kg(tC, r), i = Zg(r), d = (0, Ur.B)(), l = n && s.value.includes(n) || !1, c = a.disabled || e.disabled;
          return (0, D.jsx)(rC, {
            scope: r,
            open: l,
            disabled: c,
            triggerId: d,
            children: (0, D.jsx)(Ig, {
              "data-orientation": a.orientation,
              "data-state": lC(l),
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
        }, "AccordionItem")),
        aC = k.forwardRef(Eg(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Jg(Vg, r), a = nC("AccordionHeader", r);
          return (0, D.jsx)(zr.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": lC(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...n,
            ref: t
          })
        }, "AccordionHeader")),
        sC = "AccordionTrigger",
        iC = k.forwardRef(Eg(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Jg(Vg, r), a = nC(sC, r), s = Ug(sC, r), i = Zg(r);
          return (0, D.jsx)(Mg.ItemSlot, {
            scope: r,
            children: (0, D.jsx)(zg, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...i,
              ...n,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        dC = k.forwardRef(Eg(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Jg(Vg, r), a = nC("AccordionContent", r), s = Zg(r);
          return (0, D.jsx)(Lg, {
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
        }, "AccordionContent"));

      function lC(e) {
        return e ? "open" : "closed"
      }
      Eg(lC, "getState");
      var cC = Xg,
        uC = oC,
        fC = aC,
        pC = iC,
        vC = dC;

      function yC(e) {
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

      function bC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bC(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yC(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        CC = "foundry_1vzsjid2",
        wC = "foundry_1vzsjidm",
        xC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hC(hC({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gC(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mC(e.variantClassNames, e => mC(e, e => e.split(" ")[0]))
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
      const _C = (0, k.createContext)({
          mode: "solid",
          layer: 0
        }),
        jC = (0, k.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, D.jsx)(_C.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, D.jsx)(OC, {
            ...n,
            ref: o,
            type: r
          })
        })),
        OC = (0, k.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, L.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, D.jsx)(cC, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        PC = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, k.useContext)(_C), a = (0, L.v6)({
            className: xC({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, D.jsx)(uC, {
            ref: r,
            ...a
          })
        }),
        SC = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, L.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, D.jsx)(fC, {
            ref: r,
            ...n
          })
        }),
        RC = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, L.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, D.jsx)(pC, {
            ref: n,
            ...o,
            children: r.asChild && (0, k.isValidElement)(e) ? (0, k.cloneElement)(e, {
              children: (0, D.jsx)("span", {
                className: CC,
                children: e.props.children
              })
            }) : (0, D.jsx)("span", {
              className: CC,
              children: e
            })
          })
        }),
        DC = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ai[e],
            o = (0, L.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, D.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        NC = (0, k.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = ai[e],
            o = (0, L.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, D.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        kC = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, L.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, D.jsx)(vC, {
            ref: o,
            ...a,
            children: t && (0, k.isValidElement)(e) ? (0, k.cloneElement)(e, {
              children: (0, D.jsx)("div", {
                className: wC,
                children: e.props.children
              })
            }) : (0, D.jsx)("div", {
              className: wC,
              children: e
            })
          })
        }),
        IC = {
          MD: z.spacing.dimensions[200],
          LG: z.spacing.dimensions[250],
          XL: z.spacing.dimensions[300]
        },
        zC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, D.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: IC[t],
          viewBox: "0 0 93 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, D.jsx)("path", {
            d: "M70.062 5.19368V4.08909C70.062 4.04208 70.015 3.99508 69.968 3.99508H62.1183C59.8387 3.99508 58.7341 5.40519 58.7341 7.21484V12.7613C58.7341 13.8894 58.1935 14.712 57.0654 14.712H49.7093C49.6623 14.712 49.6153 14.759 49.6153 14.806V15.9106C49.6153 15.9576 49.6623 16.0046 49.7093 16.0046H57.935C60.2147 16.0046 61.3193 14.618 61.3193 12.7848V7.23835C61.3193 6.11025 61.8598 5.28768 62.9879 5.28768H69.968C70.015 5.28768 70.062 5.24068 70.062 5.19368Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M46.8421 3.99508H32.6704C32.6234 3.99508 32.5764 4.04208 32.5764 4.08909V5.19368C32.5764 5.24068 32.6234 5.28768 32.6704 5.28768H45.996C47.1241 5.28768 47.6647 6.11025 47.6647 7.23835C47.6647 8.36644 47.1241 9.18901 45.996 9.18901H35.4436C33.7985 9.18901 32.5764 10.5756 32.5764 12.3853V15.9341C32.5764 15.9811 32.6234 16.0281 32.6704 16.0281H35.0676C35.1146 16.0281 35.1616 15.9811 35.1616 15.9341V12.3853C35.1616 11.2572 35.8197 10.4581 36.7362 10.4581H46.8421C49.1218 10.4581 50.2264 9.0715 50.2264 7.23835C50.2264 5.4052 49.1218 4.01858 46.8421 4.01858V3.99508Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M86.1844 13.4194C86.1374 13.4194 86.0903 13.3724 86.0903 13.3253V5.26418C86.0903 4.01858 85.2443 3.61905 84.0222 4.37111L69.5685 13.2548C69.0044 13.6074 68.8164 14.0069 68.9574 14.2889C69.0749 14.5475 69.3805 14.712 70.015 14.712H83.4346C83.4816 14.712 83.5051 14.7355 83.5051 14.7825V15.9106C83.5051 15.9576 83.5521 16.0046 83.5991 16.0046H86.0198C86.0668 16.0046 86.1138 15.9576 86.1138 15.9106V14.806C86.1138 14.759 86.1609 14.712 86.2079 14.712H88.6051C88.6521 14.712 88.6991 14.665 88.6991 14.618V13.5134C88.6991 13.4664 88.6521 13.4194 88.6051 13.4194H86.1844ZM83.5286 13.3253C83.5286 13.3724 83.4816 13.4194 83.4346 13.4194H72.1772C72.0832 13.4194 72.0362 13.3959 72.0362 13.3724C72.0362 13.3254 72.0362 13.2783 72.1302 13.2313L83.3171 6.34527C83.3876 6.29827 83.5286 6.29827 83.5286 6.46278V13.3489V13.3253Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M91.0246 13.9838C91.6121 13.9838 92.0117 14.4304 92.0117 14.9944C92.0117 15.5585 91.6121 16.005 91.0246 16.005C90.437 16.005 90.014 15.5585 90.014 14.9944C90.014 14.4304 90.4135 13.9838 91.0246 13.9838ZM91.0246 15.8405C91.5181 15.8405 91.8707 15.4645 91.8707 14.9944C91.8707 14.5244 91.5416 14.1484 91.0246 14.1484C90.5075 14.1484 90.1785 14.5244 90.1785 14.9944C90.1785 15.4645 90.5075 15.8405 91.0246 15.8405ZM90.6251 14.4069H91.0716C91.2831 14.4069 91.4476 14.4774 91.4476 14.7124C91.4476 14.9474 91.3771 14.9474 91.2361 14.9944C91.3066 15.0179 91.3536 15.0649 91.4006 15.2059C91.4476 15.3235 91.4711 15.4645 91.5181 15.5585H91.3066C91.2831 15.4645 91.2361 15.3235 91.2126 15.253C91.1891 15.1119 91.1421 15.0884 90.9776 15.0884H90.8366V15.582H90.6251V14.4069ZM90.8366 14.9239H91.0246C91.1656 14.9239 91.2596 14.8769 91.2596 14.7359C91.2596 14.5949 91.1421 14.5479 91.0481 14.5479H90.8601V14.9239H90.8366Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M15.5833 4.88841V11.1399C18.2155 12.409 20.2837 11.1399 20.2837 7.77915C20.2837 4.41837 19.0616 2.82023 15.4893 1.59813C14.0791 1.12809 11.4704 0.329027 9.68428 0V18.637L13.9146 19.9767V4.34786C13.9146 3.6193 14.2437 3.12576 14.7607 3.29027C15.4423 3.47829 15.5833 4.15985 15.5833 4.88841Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M23.9735 13.0906C22.2108 12.4325 19.9546 12.1975 18.1215 12.409C16.2883 12.597 14.9722 13.0671 14.9722 13.0671L14.7137 13.1611V15.6993L19.2261 14.1012C20.0016 13.8191 21.1297 13.7721 21.7643 13.9602C22.3753 14.1717 22.2578 14.5477 21.5058 14.8297L14.7137 17.2504V19.6946L23.9265 16.3809C23.9265 16.3809 25.1721 15.9108 25.6656 15.2763C26.1591 14.6417 25.9476 13.7016 23.95 13.0671L23.9735 13.0906Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M0.495017 14.5242C-0.445061 15.2293 -0.0925317 16.4279 1.95214 16.9919C4.13782 17.7205 6.3705 17.8615 8.46218 17.509C8.60319 17.509 8.7442 17.462 8.88521 17.4384V15.2528L6.79354 16.0048C6.01797 16.2869 4.91338 16.3574 4.27883 16.1458C3.66778 15.9343 3.78529 15.5583 4.53735 15.2763L8.88521 13.7251V11.2809L2.84521 13.4431C2.84521 13.4431 1.38809 13.9132 0.518519 14.5477L0.495017 14.5242Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M24.467 18.9896C24.608 18.9426 24.6785 18.8486 24.6785 18.7076C24.6785 18.4725 24.514 18.402 24.3025 18.402H23.856V19.5536H24.0675V19.0601H24.2085C24.373 19.0601 24.42 19.1071 24.4435 19.2246C24.467 19.2951 24.514 19.4596 24.5375 19.5301H24.749C24.7255 19.4126 24.6785 19.2951 24.6315 19.1776C24.5845 19.0366 24.5375 18.9896 24.467 18.9661V18.9896ZM24.232 18.9191H24.044V18.543H24.232C24.3495 18.543 24.4435 18.5665 24.4435 18.7311C24.4435 18.8956 24.3495 18.9191 24.2085 18.9191H24.232Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M24.2555 17.979C23.6679 17.979 23.2449 18.4255 23.2449 18.9896C23.2449 19.5536 23.6444 20.0002 24.2555 20.0002C24.8665 20.0002 25.2426 19.5536 25.2426 18.9896C25.2426 18.4255 24.843 17.979 24.2555 17.979ZM24.2555 19.8356C23.7384 19.8356 23.4094 19.4596 23.4094 18.9896C23.4094 18.5195 23.7384 18.1435 24.2555 18.1435C24.7725 18.1435 25.1016 18.5195 25.1016 18.9896C25.1016 19.4596 24.7725 19.8356 24.2555 19.8356Z",
            fill: e
          })]
        })),
        LC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: IC[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, D.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        TC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, D.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: IC[t],
          viewBox: "0 0 33 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, D.jsx)("path", {
            d: "M7.34117 9.61429C7.7883 9.61536 8.23491 9.59031 8.6778 9.53928C9.07276 9.49838 9.45591 9.40006 9.80952 9.24891C10.1317 9.10768 10.4019 8.89726 10.5916 8.63973C10.7887 8.3776 10.8873 8.03424 10.8873 7.60959C10.8873 7.18494 10.7887 6.8413 10.5916 6.57878C10.4014 6.32174 10.1314 6.1116 9.80952 5.97026C9.45578 5.81934 9.0727 5.72107 8.6778 5.6799C8.23491 5.6292 7.78824 5.6041 7.34117 5.60488H4.2033V9.61429H7.34117ZM8.44707 3.31884C9.59417 3.31884 10.5713 3.44063 11.3785 3.68422C12.1856 3.9278 12.8415 4.24941 13.3463 4.64907C13.8357 5.02963 14.2139 5.49737 14.4522 6.01681C14.9152 7.04079 14.9152 8.16864 14.4522 9.19267C14.2163 9.71592 13.8379 10.1872 13.3463 10.5701C12.84 10.9698 12.184 11.2913 11.3785 11.5349C10.5729 11.7785 9.59574 11.9003 8.44707 11.9003H4.2033V16.6968H0.166016V3.31884H8.44707Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M28.2135 6.88796C27.966 6.60113 27.6617 6.35099 27.3133 6.14813C26.9401 5.9306 26.5279 5.76298 26.0916 5.65149C25.6303 5.53153 25.1494 5.4709 24.6658 5.47171C23.7565 5.47171 22.9848 5.59975 22.3508 5.85586C21.7447 6.09295 21.2157 6.44606 20.8077 6.886C20.4087 7.32589 20.1165 7.82544 19.9473 8.35721C19.7656 8.91334 19.674 9.48701 19.6752 10.0631C19.6741 10.6173 19.7652 11.1689 19.9457 11.7025C20.1182 12.2215 20.4104 12.7081 20.8061 13.1355C21.2166 13.5712 21.7452 13.9209 22.3492 14.1566C22.9838 14.4127 23.7555 14.5408 24.6643 14.5408C25.8974 14.5408 26.862 14.2659 27.5581 13.7163C28.2542 13.1666 28.6786 12.4421 28.8314 11.5428H32.742C32.6546 12.3356 32.382 13.1068 31.9395 13.8139C31.5214 14.4778 30.9439 15.0642 30.2423 15.5373C29.5097 16.0253 28.6718 16.3942 27.7732 16.6244C26.766 16.8824 25.7163 17.009 24.6619 16.9994C23.2542 16.9994 21.9895 16.8214 20.8679 16.4653C19.7463 16.1092 18.7992 15.6188 18.0265 14.9941C17.2558 14.3717 16.6513 13.6227 16.2518 12.7954C15.8351 11.9261 15.6265 10.9982 15.6379 10.0631C15.6275 9.11222 15.8369 8.16835 16.255 7.28242C16.6534 6.44298 17.2577 5.68074 18.0296 5.0436C18.8039 4.40641 19.751 3.9063 20.871 3.5433C21.991 3.1803 23.2559 2.99923 24.6658 3.00009C25.6348 2.99561 26.5999 3.10292 27.5331 3.3189C28.3948 3.51672 29.2114 3.82999 29.9506 4.24624C30.6544 4.64619 31.2534 5.15931 31.7119 5.75497C32.1855 6.3795 32.4842 7.08365 32.5863 7.81592H28.6757C28.6086 7.48158 28.4511 7.16421 28.2135 6.88796Z",
            fill: e
          })]
        })),
        EC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: IC[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, D.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        VC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: IC[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, D.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function AC(e) {
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

      function MC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? MC(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = AC(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : MC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function HC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var FC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        BC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qC(qC({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) FC(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return HC(e.variantClassNames, e => HC(e, e => e.split(" ")[0]))
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
      const ZC = (0, k.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: n,
        ...o
      }, a) => {
        const s = (0, L.v6)({
            className: BC({
              size: t
            }),
            size: t
          }, o),
          i = S[e];
        if (r && (0, k.isValidElement)(n)) {
          const e = (0, k.cloneElement)(n, n.props, (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)(i, {
              size: t,
              "aria-hidden": !0
            }), n.props.children]
          }));
          return (0, D.jsx)(Ye, {
            asChild: !0,
            size: t,
            ref: a,
            ...o,
            children: e
          })
        }
        return (0, D.jsx)(Ye, {
          ...s,
          ref: a,
          children: (0, D.jsx)(i, {
            size: t,
            "aria-hidden": !0
          })
        })
      })
    },
    21297(e, t, r) {
      r.d(t, {
        DX: () => n.DX,
        xV: () => n.xV,
        s6: () => i
      });
      var n = r(93237),
        o = r(39793),
        a = r(93082),
        s = r(10333);
      const i = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? s.s6 : a.Fragment;
        return (0, o.jsx)(r, {
          ...t
        })
      }
    },
    94635(e, t, r) {
      r.d(t, {
        b: () => i
      });
      var n = r(93082),
        o = r(10333),
        a = r(39793),
        s = Object.defineProperty,
        i = (() => s(({
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
        }, "name", {
          value: "AccessibleIcon",
          configurable: !0
        }))()
    },
    658(e, t, r) {
      r.d(t, {
        hO: () => l,
        sG: () => d
      });
      var n = r(93082),
        o = r(84017),
        a = r(93237),
        s = r(39793),
        i = Object.defineProperty,
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, a.TL)(`Primitive.${t}`),
            o = n.forwardRef((e, n) => {
              const {
                asChild: o,
                ...a
              } = e, i = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(i, {
                ...a,
                ref: n
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function l(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
      i(l, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    10333(e, t, r) {
      r.d(t, {
        Qg: () => d,
        bL: () => c,
        s6: () => l
      });
      var n = r(93082),
        o = r(658),
        a = r(39793),
        s = Object.defineProperty,
        i = (e, t) => s(e, "name", {
          value: t,
          configurable: !0
        }),
        d = Object.freeze({
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
        l = n.forwardRef(i(function(e, t) {
          return (0, a.jsx)(o.sG.span, {
            ...e,
            ref: t,
            style: {
              ...d,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        c = l
    }
  }
]);