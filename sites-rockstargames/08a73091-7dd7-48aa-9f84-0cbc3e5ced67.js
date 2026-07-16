try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "08a73091-7dd7-48aa-9f84-0cbc3e5ced67", e._sentryDebugIdIdentifier = "sentry-dbid-08a73091-7dd7-48aa-9f84-0cbc3e5ced67")
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
  [8172], {
    39829(e, r, t) {
      t.r(r), t.d(r, {
        Accordion: () => P,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => x,
        Badge: () => h,
        Body: () => kr,
        Breadcrumbs: () => m,
        Button: () => Ue,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => Ir,
        Dialog: () => w,
        Display: () => Tr,
        Divider: () => fr,
        Dropdown: () => a,
        Heading: () => Lr,
        IconButton: () => ar,
        Label: () => Vr,
        Lightbox: () => n,
        Loader: () => jr,
        Pagination: () => _,
        Popover: () => C,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => Le,
        Switch: () => s,
        Tag: () => y,
        Text: () => Fr,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => qr,
        Toast: () => b,
        Tooltip: () => o
      });
      var o = {};
      t.r(o), t.d(o, {
        Arrow: () => fn,
        Content: () => un,
        Portal: () => pn,
        Root: () => ln,
        Trigger: () => cn,
        useTooltipContext: () => dn
      });
      var n = {};
      t.r(n), t.d(n, {
        Caption: () => Ja,
        Close: () => ns,
        Content: () => Wa,
        Controls: () => es,
        CssVars: () => is,
        Download: () => ss,
        Image: () => Qa,
        Keyboard: () => ts,
        LightboxContext: () => Ma,
        OpenIcon: () => Ka,
        Overlay: () => Ha,
        Portal: () => Za,
        Reset: () => as,
        Root: () => qa,
        RootImplContext: () => Fa,
        Thumbnail: () => Ga,
        Trigger: () => Xa,
        Zoom: () => os,
        ZoomPan: () => Ua
      });
      var a = {};
      t.r(a), t.d(a, {
        Content: () => Rd,
        Description: () => Td,
        Hint: () => Ed,
        Label: () => Id,
        Option: () => Ld,
        OptionIcon: () => Vd,
        OptionText: () => Ad,
        Portal: () => Md,
        Root: () => Pd,
        ScrollArea: () => Sd,
        StatusIcon: () => Fd,
        StatusRoot: () => qd,
        StatusText: () => Bd,
        Trigger: () => Dd,
        TriggerIcon: () => zd,
        TriggerText: () => kd,
        Viewport: () => Nd,
        useDropdownContext: () => Od
      });
      var s = {};
      t.r(s), t.d(s, {
        Description: () => il,
        Input: () => al,
        Label: () => sl,
        Root: () => nl,
        useSwitchContext: () => ol
      });
      var i = {};
      t.r(i), t.d(i, {
        CheckLG: () => cl,
        CheckMD: () => ll,
        CheckXL: () => ul,
        DashLG: () => pl,
        DashMD: () => fl,
        DashXL: () => vl
      });
      var d = {};
      t.r(d), t.d(d, {
        Description: () => zl,
        ErrorText: () => Il,
        Group: () => Ll,
        GroupDescription: () => Vl,
        GroupErrorText: () => ql,
        GroupItems: () => Ml,
        GroupLabel: () => Al,
        Input: () => Dl,
        Label: () => kl,
        Root: () => Sl,
        useGroupContext: () => El
      });
      var l = {};
      t.r(l), t.d(l, {
        Description: () => tc,
        Hint: () => oc,
        Input: () => rc,
        Label: () => ec,
        Root: () => Jl,
        RootContext: () => Yl,
        StatusIcon: () => ac,
        StatusRoot: () => nc,
        StatusText: () => sc,
        useTextAreaContext: () => Ql
      });
      var c = {};
      t.r(c), t.d(c, {
        DotLG: () => zc,
        DotMD: () => kc,
        DotXL: () => Ic
      });
      var u = {};
      t.r(u), t.d(u, {
        Description: () => _c,
        Input: () => Ec,
        Label: () => xc,
        Option: () => Tc,
        OptionDescription: () => Ac,
        OptionLabel: () => Lc,
        Options: () => wc,
        Root: () => gc,
        StatusIcon: () => Cc,
        StatusRoot: () => jc,
        StatusText: () => Oc,
        useRadioGroupContext: () => hc
      });
      var f = {};
      t.r(f), t.d(f, {
        Button: () => su,
        Control: () => ou,
        Description: () => du,
        Hint: () => tu,
        Icon: () => au,
        Input: () => nu,
        Label: () => ru,
        PasswordButton: () => iu,
        Root: () => eu,
        StatusIcon: () => cu,
        StatusRoot: () => lu,
        StatusText: () => uu
      });
      var p = {};
      t.r(p), t.d(p, {
        Body: () => Tu,
        CloseButton: () => Bu,
        Description: () => Vu,
        ErrorText: () => Fu,
        Footer: () => qu,
        Header: () => Iu,
        Icon: () => Lu,
        Link: () => Mu,
        Root: () => zu,
        RootContext: () => Du,
        Title: () => Au,
        iconStatusMap: () => Eu,
        useAlertContext: () => ku
      });
      var v = {};
      t.r(v), t.d(v, {
        Alert: () => sf,
        CloseButton: () => cf,
        Description: () => af,
        Icon: () => nf,
        Link: () => lf,
        PaginationCounter: () => vf,
        PaginationNav: () => uf,
        PaginationNextButton: () => ff,
        PaginationPrevButton: () => pf,
        PaginationViewport: () => df,
        Root: () => tf,
        RootContext: () => ef,
        iconStatusMap: () => of,
        useAlertBannerContext: () => rf
      });
      var y = {};
      t.r(y), t.d(y, {
        CloseButton: () => Sf,
        Icon: () => Nf,
        Label: () => Rf,
        Root: () => Pf,
        RootContext: () => Cf,
        useTagContext: () => Of
      });
      var b = {};
      t.r(b), t.d(b, {
        Action: () => Ip,
        CloseButton: () => Tp,
        Description: () => Dp,
        Icon: () => zp,
        Provider: () => Op,
        Root: () => Sp,
        RootContext: () => Rp,
        Viewport: () => Pp,
        iconAppearanceMap: () => kp,
        useToastContext: () => Np
      });
      var m = {};
      t.r(m), t.d(m, {
        Icon: () => Up,
        Item: () => Wp,
        OverflowMenu: () => $p,
        OverflowMenuItem: () => Yp,
        Root: () => Hp,
        RootContext: () => Zp,
        useBreadcrumbsContext: () => Kp
      });
      var h = {};
      t.r(h), t.d(h, {
        Icon: () => dv,
        Label: () => iv,
        Root: () => sv,
        useBadgeContext: () => av
      });
      var g = {};
      t.r(g), t.d(g, {
        Corner: () => xv,
        Root: () => mv,
        Scrollbar: () => gv,
        Thumb: () => wv,
        Viewport: () => hv
      });
      var w = {};
      t.r(w), t.d(w, {
        ActionArea: () => Kv,
        CloseButton: () => Gv,
        Content: () => Lv,
        Description: () => Vv,
        Footer: () => Zv,
        Header: () => Fv,
        HeaderButton: () => Xv,
        HeaderTitle: () => Bv,
        Layout: () => qv,
        Overlay: () => Ev,
        Portal: () => Tv,
        Root: () => kv,
        ScrollArea: () => Mv,
        Title: () => Av,
        Trigger: () => Iv
      });
      var x = {};
      t.r(x), t.d(x, {
        Image: () => xy,
        Root: () => wy,
        StatusIndicator: () => _y,
        useAvatarContext: () => gy
      });
      var _ = {};
      t.r(_), t.d(_, {
        Controls: () => Ey,
        Dropdown: () => qy,
        DropdownLabel: () => My,
        Ellipsis: () => Ty,
        Item: () => ky,
        Label: () => By,
        Next: () => Iy,
        Option: () => Fy,
        Pages: () => Dy,
        Prev: () => zy,
        ResultsPerPage: () => Vy,
        Root: () => Sy
      });
      var j = {};
      t.r(j), t.d(j, {
        Icon: () => Bb,
        Item: () => Fb,
        Label: () => Gb,
        Root: () => qb,
        StatusIndicator: () => Xb,
        useChipGroupContext: () => Mb
      });
      var C = {};
      t.r(C), t.d(C, {
        Anchor: () => Tm,
        Arrow: () => Lm,
        Close: () => Vm,
        Content: () => Em,
        Portal: () => Am,
        Root: () => Dm,
        RootContext: () => Sm,
        Trigger: () => km,
        TriggerButton: () => Im
      });
      var O = {};
      t.r(O), t.d(O, {
        Indicator: () => mh,
        Label: () => hh,
        Root: () => vh,
        Track: () => bh,
        UnitLabel: () => gh
      });
      var P = {};
      t.r(P), t.d(P, {
        Content: () => kg,
        Header: () => Rg,
        Icon: () => Sg,
        Item: () => Pg,
        Root: () => Cg,
        Trigger: () => Ng,
        TriggerIcon: () => Dg
      });
      var R = t(39793),
        N = t(11350),
        S = t(93082),
        D = t(64001),
        k = (t(54540), {
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
        z = t(7912);
      const I = e => {
        const r = e.match(/^var\((.*)\)$/);
        return r ? r[1] : e
      };

      function T(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function E(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function L(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? E(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = T(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function A(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var V = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        M = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = L(L({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) V(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return A(e.variantClassNames, e => A(e, e => e.split(" ")[0]))
            }
          }, r
        },
        q = "var(--foundry_1qqcnua0)",
        F = "var(--foundry_1qqcnua1)",
        B = "var(--foundry_1qqcnua2)",
        X = "var(--foundry_1qqcnua3)",
        G = "var(--foundry_1qqcnua4)",
        K = "var(--foundry_1qqcnua5)",
        Z = "var(--foundry_1qqcnua6)",
        H = "var(--foundry_1qqcnua7)",
        W = "var(--foundry_1qqcnua8)",
        U = "var(--foundry_1qqcnua9)",
        $ = "var(--foundry_1qqcnuaa)",
        Y = "var(--foundry_1qqcnuab)",
        Q = "var(--foundry_1qqcnuac)",
        J = "var(--foundry_1qqcnuad)",
        ee = "var(--foundry_1qqcnuae)",
        re = "var(--foundry_1qqcnuaf)",
        te = "var(--foundry_1qqcnuag)",
        oe = "var(--foundry_1qqcnuah)",
        ne = "var(--foundry_1qqcnuai)",
        ae = "var(--foundry_1qqcnuaj)",
        se = "var(--foundry_1qqcnuak)",
        ie = "var(--foundry_1qqcnual)",
        de = "var(--foundry_1qqcnuam)",
        le = "var(--foundry_1qqcnuan)";
      M({
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
      }), M({
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
      }), M({
        defaultClassName: "foundry_tdsdcdu foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdw",
            bold: "foundry_tdsdcdx"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), M({
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
      }), M({
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
      const ce = {
          enabled: {
            background: I(q),
            border: I(F),
            text: I(B),
            outline: I(X)
          },
          hover: {
            background: I(G),
            border: I(K),
            text: I(Z),
            outline: I(H)
          },
          focus: {
            background: I(W),
            border: I(U),
            text: I($),
            outline: I(Y)
          },
          pressed: {
            background: I(Q),
            border: I(J),
            text: I(ee),
            outline: I(re)
          },
          disabled: {
            background: I(te),
            border: I(oe),
            text: I(ne),
            outline: I(ae)
          },
          loading: {
            background: I(se),
            border: I(ie),
            text: I(de),
            outline: I(le)
          }
        },
        ue = ({
          refs: {
            buttonRef: e
          },
          config: {
            textLuminance: r,
            darkenLuminance: t,
            hoverLuminance: o,
            pressedLuminance: n
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
            const c = `${a}:${r}:${t}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, z.IO)(c, () => {
                const e = (0, N.J1)(a);
                return {
                  text: d || (e > r ? k.color.black.static[100] : k.color.white.static[100]),
                  hover: s || (e >= t ? (0, N.e$)(a, o) : (0, N.a)(a, o)),
                  pressed: i || (e >= t ? (0, N.e$)(a, n) : (0, N.a)(a, n))
                }
              });
            return e.current.style.setProperty(ce.enabled.background, a), e.current.style.setProperty(ce.enabled.border, a), e.current.style.setProperty(ce.enabled.text, u), e.current.style.setProperty(ce.hover.background, f), e.current.style.setProperty(ce.hover.border, f), e.current.style.setProperty(ce.hover.text, u), e.current.style.setProperty(ce.focus.background, f), e.current.style.setProperty(ce.focus.border, f), e.current.style.setProperty(ce.focus.text, u), e.current.style.setProperty(ce.pressed.background, p), e.current.style.setProperty(ce.pressed.border, p), e.current.style.setProperty(ce.pressed.text, u), e.current.style.setProperty(ce.loading.background, f), e.current.style.setProperty(ce.loading.border, f), e.current.style.setProperty(ce.loading.text, u), () => {
              e.current?.style.removeProperty(ce.enabled.background), e.current?.style.removeProperty(ce.enabled.border), e.current?.style.removeProperty(ce.enabled.text), e.current?.style.removeProperty(ce.hover.background), e.current?.style.removeProperty(ce.hover.border), e.current?.style.removeProperty(ce.hover.text), e.current?.style.removeProperty(ce.focus.background), e.current?.style.removeProperty(ce.focus.border), e.current?.style.removeProperty(ce.focus.text), e.current?.style.removeProperty(ce.pressed.background), e.current?.style.removeProperty(ce.pressed.border), e.current?.style.removeProperty(ce.pressed.text), e.current?.style.removeProperty(ce.loading.background), e.current?.style.removeProperty(ce.loading.border), e.current?.style.removeProperty(ce.loading.text)
            }
          }, [e.current, r, t, o, n, a, s, i, d, l, ...c])
        };
      var fe = t(56433),
        pe = t(69088);
      const ve = (0, S.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        ye = () => (0, S.useContext)(ve),
        be = () => {
          const {
            platformScale: e
          } = ye();
          return e
        };
      var me = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        he = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        ge = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        we = "foundry_nu8bkpb",
        xe = "--foundry-platform-scales-ratio-65afb887",
        _e = "foundry_nu8bkp4",
        je = "foundry_nu8bkp3";
      const Ce = e => "dark" === e ? ge.dark : ge.light;
      const Oe = () => z.X3 ? null : document.body;
      (0, S.forwardRef)(({
        children: e,
        className: r,
        container: t = Oe(),
        asChild: o,
        colorScheme: n,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, S.useRef)(null),
          f = (0, fe.UP)(u, c),
          p = (0, S.useRef)(t),
          {
            ratio: v,
            scale: y
          } = function(e) {
            const [r, t] = (0, S.useState)(e.platformScale || e.defaultPlatformScale), o = (0, S.useCallback)(r => {
              t(r), e.onPlatformScaleChange?.(r)
            }, [e.onPlatformScaleChange]), n = (0, S.useRef)([]), a = () => {
              if (!z.X3) {
                for (const {
                    handler: e,
                    matchMedia: r
                  }
                  of n.current) r.removeEventListener("change", e);
                n.current = []
              }
            };
            return (0, S.useEffect)(() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!z.X3) {
                a();
                for (const e in he) {
                  const r = window.matchMedia(he[e]),
                    t = r => {
                      r.matches && o(e)
                    };
                  r.addEventListener("change", t), r.matches && o(e), n.current.push({
                    handler: t,
                    matchMedia: r
                  })
                }
              }
            })(), a), [e.platformScale, o]), {
              scale: r,
              ratio: me[r]
            }
          }({
            onPlatformScaleChange: d,
            defaultPlatformScale: s,
            platformScale: i
          }),
          {
            appearanceClass: b,
            otherAppearanceClasses: m,
            providerColor: h
          } = function({
            colorScheme: e,
            defaultColorScheme: r = "dark"
          }) {
            const t = (0, fe.Ub)("(prefers-color-scheme: light)"),
              o = (0, fe.Ub)("(prefers-color-scheme: dark)"),
              n = "system" !== e && e || t && "light" || o && "dark" || r,
              a = (0, S.useMemo)(() => Ce(n), [n]),
              s = (0, S.useMemo)(() => (e => {
                const r = Ce(e);
                return [ge.light, ge.dark].filter(e => e !== r)
              })(n), [n]);
            return {
              appearanceClass: a,
              otherAppearanceClasses: s,
              providerColor: n
            }
          }({
            colorScheme: n,
            defaultColorScheme: a
          });
        return (({
          container: e,
          currentScale: r,
          appearanceClass: t,
          otherAppearanceClasses: o,
          locale: n,
          className: a
        }) => {
          const s = (0, fe.ZC)(a),
            i = (0, fe.ZC)(e.current);
          (0, S.useEffect)(() => {
            e.current?.classList.contains(_e) || e.current?.classList.add(_e), e.current?.classList.contains(je) || e.current?.classList.add(je), e.current?.classList.contains(we) || e.current?.classList.add(we), e.current?.classList.add(t), e.current?.classList.remove(...o), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
          }, [t, a]), (0, S.useEffect)(() => {
            e.current?.setAttribute("lang", n)
          }, [n]), (0, S.useEffect)(() => (r && e.current?.style.setProperty(xe, r.toString()), () => {
            e.current?.style.removeProperty(xe)
          }), [r]), (0, S.useEffect)(() => {
            i?.classList.remove(_e), i?.classList.remove(je), i?.classList.remove(t), i?.style.removeProperty(xe), a && i?.classList.remove(a)
          }, [i])
        })({
          locale: l,
          className: r,
          appearanceClass: b,
          otherAppearanceClasses: m,
          currentScale: i ? v : -0,
          container: o ? u : p
        }), (0, R.jsx)(ve.Provider, {
          value: {
            locale: l,
            defaultColorScheme: a,
            colorScheme: h,
            defaultPlatformScale: s,
            platformScale: y
          },
          children: o ? (0, R.jsx)(pe.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var Pe = t(77301);

      function Re(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Ne(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Se(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ne(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Re(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ne(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function De(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ke, ze, Ie = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Te = (ke = {
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
        }, ze = e => {
          var r = ke.defaultClassName,
            t = Se(Se({}, ke.defaultVariants), e);
          for (var o in t) {
            var n, a = null !== (n = t[o]) && void 0 !== n ? n : ke.defaultVariants[o];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = ke.variantClassNames[o][s];
              i && (r += " " + i)
            }
          }
          for (var [d, l] of ke.compoundVariants) Ie(d, t, ke.defaultVariants) && (r += " " + l);
          return r
        }, ze.variants = () => Object.keys(ke.variantClassNames), ze.classNames = {
          get base() {
            return ke.defaultClassName.split(" ")[0]
          },
          get variants() {
            return De(ke.variantClassNames, e => De(e, e => e.split(" ")[0]))
          }
        }, ze);
      const Ee = "pageMD",
        Le = (0, S.forwardRef)(({
          label: e,
          hideTrack: r = !1,
          size: t = Ee,
          testId: o,
          ...n
        }, a) => {
          const s = be(),
            i = "string" == typeof t ? t : t?.[s] ?? t.default ?? Ee,
            d = (0, z.v6)({
              className: Te({
                size: i
              }),
              "data-testid": o,
              "aria-label": e
            }, n);
          return (0, R.jsx)(Pe.b, {
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
      var Ae = t(81270),
        Ve = t(11400);

      function Me(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function qe(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Fe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? qe(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Me(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qe(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Be(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Xe = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ge = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Fe(Fe({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xe(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Be(e.variantClassNames, e => Be(e, e => e.split(" ")[0]))
            }
          }, r
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
      var Ze = Ge({
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
        He = Ge({
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
        We = Ge({
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
      const Ue = (0, S.forwardRef)(({
        testId: e,
        asChild: r,
        children: t,
        iconLeft: o,
        iconLeftLabel: n,
        iconRight: a,
        iconRightLabel: s,
        appearance: i,
        size: d = "MD",
        fullWidth: l = !1,
        isLoading: c = !1,
        spinnerLabel: u,
        preventFocusOnPress: f = !1,
        override_darkenLuminance: p = .035,
        override_textLuminance: v = .179,
        override_hoverLuminance: y = .08,
        override_pressedLuminance: b = .15,
        override_backgroundColor: m,
        override_hoverColor: h,
        override_pressedColor: g,
        override_textColor: w,
        ...x
      }, _) => {
        const j = (0, S.useRef)(null),
          C = (0, fe.UP)(j, _),
          O = be(),
          P = "string" == typeof d ? d : d?.[O] ?? d.default ?? "MD",
          {
            buttonProps: N
          } = (0, fe.sL)((0, z.v6)(x, {
            isLoading: c,
            preventFocusOnPress: f
          }), j);
        ue({
          refs: {
            buttonRef: j
          },
          config: {
            textLuminance: v,
            darkenLuminance: p,
            hoverLuminance: y,
            pressedLuminance: b
          },
          overrides: {
            backgroundColor: m,
            hoverColor: h,
            pressedColor: g,
            textColor: w
          },
          enabled: "accent" === i
        }, [r]);
        const D = (0, z.v6)({
            className: Ke({
              appearance: i,
              size: P,
              fullWidth: l,
              iconLeft: !!o,
              iconRight: !!a
            }),
            "data-testid": e
          }, N),
          k = o && Ve[o],
          I = a && Ve[a],
          T = r ? pe.DX : "button",
          E = l && (I || I && k);
        return (0, R.jsxs)(T, {
          ref: C,
          ...D,
          children: [E && (0, R.jsx)("div", {
            className: "foundry_17pcofy15"
          }), k && (0, R.jsx)(k, {
            label: n || "",
            size: P,
            className: (0, Ae.clsx)(Ze({
              size: P
            }), "foundry_17pcofy11")
          }), (0, R.jsx)(pe.xV, {
            children: t
          }), I && (0, R.jsx)(I, {
            label: s || "",
            size: P,
            className: (0, Ae.clsx)(Ze({
              size: P
            }), He({
              fullWidth: l
            }))
          }), c && (0, R.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, R.jsx)(Le, {
              label: u || "",
              size: "inline" + ("XL" === P ? "LG" : "MD"),
              hideTrack: !0,
              className: We({
                size: P
              })
            })
          })]
        })
      });

      function $e(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Ye(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Qe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ye(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = $e(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ye(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Je(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var er = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        rr = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Qe(Qe({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) er(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Je(e.variantClassNames, e => Je(e, e => e.split(" ")[0]))
            }
          }, r
        },
        tr = rr({
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
        or = rr({
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
        nr = rr({
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
      const ar = (0, S.forwardRef)(({
        testId: e,
        asChild: r,
        icon: t,
        label: o,
        appearance: n,
        fullWidth: a = !1,
        size: s = "LG",
        children: i,
        isLoading: d = !1,
        spinnerLabel: l,
        preventFocusOnPress: c = !1,
        override_darkenLuminance: u = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: v = .15,
        override_backgroundColor: y,
        override_hoverColor: b,
        override_pressedColor: m,
        override_textColor: h,
        ...g
      }, w) => {
        const x = (0, S.useRef)(null),
          _ = (0, fe.UP)(x, w),
          j = be(),
          C = "string" == typeof s ? s : s?.[j] ?? s.default ?? "LG",
          {
            buttonProps: O
          } = (0, fe.sL)((0, z.v6)(g, {
            isLoading: d,
            preventFocusOnPress: c
          }), x);
        ue({
          refs: {
            buttonRef: x
          },
          config: {
            textLuminance: f,
            darkenLuminance: u,
            hoverLuminance: p,
            pressedLuminance: v
          },
          overrides: {
            backgroundColor: y,
            hoverColor: b,
            pressedColor: m,
            textColor: h
          },
          enabled: "accent" === n
        }, [r]);
        const P = (0, z.v6)({
            className: or({
              appearance: n,
              size: C,
              fullWidth: a
            }),
            "data-testid": e
          }, O),
          N = Ve[t],
          D = r ? pe.DX : "button";
        return (0, R.jsxs)(D, {
          ref: _,
          ...P,
          children: [N && (0, R.jsx)(N, {
            label: o || "",
            size: C,
            className: tr({
              size: C
            })
          }), (0, R.jsx)(pe.xV, {
            children: i
          }), d && (0, R.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, R.jsx)(Le, {
              label: l || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: nr({
                size: C
              })
            })
          })]
        })
      });

      function sr(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function ir(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function dr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ir(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = sr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ir(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function lr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var cr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ur = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = dr(dr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) cr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lr(e.variantClassNames, e => lr(e, e => e.split(" ")[0]))
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
      const fr = (0, S.forwardRef)(({
        className: e,
        orientation: r = "horizontal",
        thickness: t = "thin",
        isDecorative: o = !1,
        asChild: n,
        testId: a,
        ...s
      }, i) => {
        const d = "horizontal" !== r || o ? "div" : "hr",
          l = o || "hr" === d ? void 0 : "separator",
          c = n ? pe.DX : d;
        return (0, R.jsx)(c, {
          ref: i,
          className: (0, Ae.clsx)(ur({
            thickness: t,
            orientation: r
          }), e),
          role: l,
          "aria-orientation": r,
          "data-testid": a,
          ...s
        })
      });

      function pr(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function vr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function yr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? vr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = pr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function br(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var mr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        hr = "var(--foundry_9dxgbc2)",
        gr = "var(--foundry_9dxgbc3)",
        wr = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = yr(yr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) mr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return br(e.variantClassNames, e => br(e, e => e.split(" ")[0]))
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
        xr = "var(--foundry_9dxgbc0)",
        _r = "var(--foundry_9dxgbc1)";
      const jr = (0, S.forwardRef)(({
        asChild: e,
        testId: r,
        children: t,
        colorOverride: o,
        label: n,
        size: a = "MD",
        ...s
      }, i) => {
        const d = be(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, z.v6)({
            className: wr({
              size: l
            }),
            "data-testid": r,
            style: (0, D.D)({
              [xr]: o?.pulseColorBackground,
              [_r]: o?.pulseColorForeground,
              [hr]: o?.gradientColorBackground,
              [gr]: o?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": n
          }, s),
          u = e ? pe.DX : "div";
        return (0, R.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, R.jsx)(pe.xV, {
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

      function Cr(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Or(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Pr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Or(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Cr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Or(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Rr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Nr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Sr = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Pr(Pr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Nr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rr(e.variantClassNames, e => Rr(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Dr = Sr({
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
      const kr = (0, S.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? pe.DX : "p",
          i = (0, z.v6)({
            className: Dr({
              size: o,
              appearance: t
            })
          }, n);
        return (0, R.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var zr = Sr({
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
      const Ir = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "default",
          ...o
        }, n) => {
          const a = e ? pe.DX : "p",
            s = (0, z.v6)({
              className: zr({
                appearance: t
              })
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        }),
        Tr = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "h1",
            a = (0, z.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        });
      var Er = Sr({
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
      const Lr = (0, S.forwardRef)(({
        asChild: e,
        level: r,
        testId: t,
        ...o
      }, n) => {
        const a = e ? pe.DX : `h${7===r?6:r}`,
          s = (0, z.v6)(o, {
            className: Er({
              level: r
            })
          });
        return (0, R.jsx)(a, {
          ref: n,
          "data-testid": t,
          ...s
        })
      });
      var Ar = Sr({
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
      const Vr = (0, S.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? pe.DX : "p",
          i = (0, z.v6)({
            className: Ar({
              size: o,
              appearance: t
            })
          }, n);
        return (0, R.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var Mr = Sr({
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
      const qr = {
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
        Fr = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          semantic: t = "default",
          ...o
        }, n) => {
          const a = e ? pe.DX : qr[t] || "span",
            s = (0, z.v6)(o, {
              className: Mr({
                semantic: t
              })
            });
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        });
      var Br = t(93529),
        Xr = t(99206),
        Gr = t(34811);
      const Kr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((r, t) => {
        e.onload = () => r(), e.onerror = t
      }), Zr = ([e, r]) => ({
        x: e,
        y: r
      }), Hr = (e, r) => (e.x = r.x, e.y = r.y, e), Wr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ur = (e, r = 3) => Number(parseFloat(`${e}`).toFixed(r)), $r = (e, r, t) => Math.min(Math.max(e, r), t);
      var Yr = t(90004);

      function Qr(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Jr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function et(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Jr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Qr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Jr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function rt(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var tt = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ot = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = et(et({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) tt(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rt(e.variantClassNames, e => rt(e, e => e.split(" ")[0]))
            }
          }, r
        },
        nt = ot({
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
        at = ot({
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
      Br.os.registerPlugin(Xr.L);
      const st = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        it = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        dt = I("var(--foundry_1a74xwb0)");
      var lt = t(49764);
      const ct = {
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
      class ut {
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
            o = this.slide.panAreaSize.safeArea["x" === e ? "w" : "h"] + 2 * this.slide.panAreaSize.safeArea[e];
          this.center[e] = this.currZoomLevel === this.slide.zoomLevels.initial ? Math.round((t - r - (t - o)) / 2) : Math.round((t - r) / 2), this.max[e] = r > t ? Math.round(t - r) : this.center[e], this.min[e] = r > t ? 0 : this.center[e]
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
          return t ? r : $r(r, this.max[e], this.min[e])
        }
      }
      class ft {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Ur(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            r = e.w / this.elementSize.w,
            t = e.h / this.elementSize.h;
          return Ur(t < r ? t : r)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Ur(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class pt {
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
      class vt {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(r) ? "x" : "y", Hr(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: r,
            delta: [t, o]
          } = e, n = r > 1, a = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && a && !n ? (this.setPanWithFriction("y", this.slide.pan.y + o, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && a ? this.setPanWithFriction("x", this.slide.pan.x + t, .35) : (this.setPanWithFriction("x", this.slide.pan.x + t), this.setPanWithFriction("y", this.slide.pan.y + o))
        }
        end(e) {
          const r = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || r || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [r, t]
        }) {
          const o = {
              x: r,
              y: t
            },
            n = e;
          if (n.type.includes("cancel")) return;
          const a = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, r) => {
            const t = Math.abs(e.x - r.x),
              o = Math.abs(e.y - r.y);
            return Math.sqrt(t * t + o * o)
          })(this.prevTap, o) < 25 && this.slide.tapHandler.doubleTap(o, n)) : (Hr(this.prevTap, {
            x: r,
            y: t
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(o, n), this.clearTapTimer()
          }, a))
        }
        finishPanGestureForAxis(e, r) {
          const {
            delta: [t, o]
          } = r, n = "x" === e ? t : o, a = this.slide.pan[e], s = a + n;
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
            const o = Math.round(r - this.slide.pan[e]);
            this.slide.pan[e] += o * (t || .35)
          } else this.slide.pan[e] = r
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class yt {
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
          e.src = this.thumbnail.currentSrc ?? "", await Kr(e)
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
              o = this.slide.panAreaSize.h / r;
            this.width = o > t ? this.slide.panAreaSize.w : e * o, this.height = t > o ? this.slide.panAreaSize.h : r * t
          }
        }
      }
      class bt {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: r,
          delta: [t, o]
        }) {
          if (e) {
            let e = -o;
            1 === r.deltaMode ? e *= .05 : e *= r.deltaMode ? 1 : .002, e = 2 ** e;
            const t = this.slide.currZoomLevel * e;
            this.slide.zoomTo(t, {
              x: r.x,
              y: r.y
            })
          } else 1 === r.deltaMode && (t *= 18, o *= 18), this.slide.panTo(this.slide.pan.x - t, this.slide.pan.y - o)
        }
      }
      class mt extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, r, t, o) {
          super(e), this.point = t, this.tapTarget = r, this.originalEvent = o
        }
      }
      class ht extends pt {
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
        doClickOrTapAction(e, r, t, o) {
          if (!this.dispatch(e, new mt(e, r, t, o)).defaultPrevented) switch (this.options[e]) {
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
      class gt {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Zr(e), this.startZoomDistance = r, this.wasOverFitZoomLevel = !1, Hr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [r]
        }) {
          const t = this.slide.zoomLevels.min,
            o = this.slide.zoomLevels.max;
          this.zoomPoint = Zr(e);
          let n = 1 / this.startZoomDistance * r * this.startZoomLevel;
          n > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), n < t ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (t - n) / (t / 1.2)) : n = t - .15 * (t - n) : n > o && (n = o + .05 * (n - o)), this.slide.pan.x = this.calculatePanForZoomLevel("x", n), this.slide.pan.y = this.calculatePanForZoomLevel("y", n), this.slide.setZoomLevel(n, n >= this.slide.zoomLevels.initial)
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
          let t, o = !0;
          r < this.slide.zoomLevels.initial ? t = this.slide.zoomLevels.initial : r > this.slide.zoomLevels.max ? t = this.slide.zoomLevels.max : (o = !1, t = r), this.slide.getControlsOpacity();
          const n = this.slide.getControlsOpacity() < 1,
            a = Hr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Hr({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = r, Hr(this.startPan, a)), o && (s = {
            x: this.calculatePanForZoomLevel("x", t),
            y: this.calculatePanForZoomLevel("y", t)
          }), this.slide.setZoomLevel(t, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(r, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || o || n) && (Hr(this.slide.pan, s), this.slide.setZoomLevel(t))
        }
      }
      class wt {
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
      class xt extends pt {
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
          actionOptions: o,
          panAreaOptions: n,
          dragOptions: a
        }) {
          super(), this.width = e, this.height = r, this.opener = new yt({
            slide: this
          }), this.bounds = new ut({
            slide: this
          }), this.dragHandler = new vt({
            options: a,
            slide: this
          }), this.scrollWheel = new bt({
            slide: this
          }), this.zoomHandler = new gt({
            slide: this
          }), this.zoomLevels = new ft({
            options: t,
            slide: this
          }), this.tapHandler = new ht({
            options: o,
            slide: this
          }), this.panAreaSize = new wt({
            options: n
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
          const o = this.currZoomLevel;
          e = Ur(e), t || (e = $r(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", r, o), this.pan.y = this.calculateZoomToPanOffset("y", r, o), Wr(this.pan)
        }
        toggleZoom(e) {
          const r = this.currZoomLevel,
            t = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, r), this.pan.y = this.calculateZoomToPanOffset("y", e, r), Wr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Hr(this.pan, this.bounds.center)
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
          const o = this.currZoomLevel / t;
          return this.bounds.correctPan(e, (this.pan[e] - r[e]) * o + r[e])
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
      const _t = e => "dark" === e ? ge.dark : ge.light,
        jt = (0, lt.YK)({
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
      var Ct = "foundry_bc732x1";
      const Ot = (0, S.forwardRef)(({
        shortcut: e,
        isInline: r,
        onShortcut: t
      }, o) => ((0, Yr.vC)(e, e => t?.(e), [t]), (0, R.jsx)(kr, {
        size: "XS",
        className: (0, Ae.clsx)("foundry_bc732x0", {
          [Ct]: r
        }),
        asChild: !0,
        children: (0, R.jsx)("kbd", {
          ref: o,
          children: e
        })
      })));
      var Pt, Rt = t(71433),
        Nt = t(39467),
        St = t(64239),
        Dt = t(54958),
        kt = t(13165),
        zt = t(94660),
        It = t(61144),
        Tt = "dismissableLayer.update",
        Et = S.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        Lt = S.forwardRef((e, r) => {
          const {
            disableOutsidePointerEvents: t = !1,
            deferPointerDownOutside: o = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = S.useContext(Et), [u, f] = S.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = S.useState({}), y = (0, St.s)(r, e => f(e)), b = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), h = b.indexOf(m), g = u ? b.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = g >= h, _ = S.useRef(!1), j = function(e, r) {
            const {
              ownerDocument: t = globalThis?.document,
              deferPointerDownOutside: o = !1,
              isDeferredPointerDownOutsideRef: n,
              dismissableSurfaces: a
            } = r, s = (0, zt.c)(e), i = S.useRef(!1), d = S.useRef(!1), l = S.useRef(new Map), c = S.useRef(() => {});
            return S.useEffect(() => {
              function e() {
                d.current = !1, n.current = !1, l.current.clear()
              }

              function r(e) {
                if (!d.current) return;
                const r = e.target;
                r instanceof Node && [...a].some(e => e.contains(r)) || l.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  d.current && c.current()
                }, 0)
              }

              function u(e) {
                d.current && l.current.set(e.type, !1)
              }
              const f = r => {
                  if (r.target && !i.current) {
                    let a = function() {
                      t.removeEventListener("click", c.current);
                      const r = Array.from(l.current.values()).some(Boolean);
                      e(), r || Mt("dismissableLayer.pointerDownOutside", s, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: r
                    };
                    d.current = !0, n.current = o && 0 === r.button, l.current.clear(), o && 0 === r.button ? (t.removeEventListener("click", c.current), c.current = a, t.addEventListener("click", c.current, {
                      once: !0
                    })) : a()
                  } else t.removeEventListener("click", c.current), e();
                  i.current = !1
                },
                p = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of p) t.addEventListener(e, r, !0), t.addEventListener(e, u);
              const v = window.setTimeout(() => {
                t.addEventListener("pointerdown", f)
              }, 0);
              return () => {
                window.clearTimeout(v), t.removeEventListener("pointerdown", f), t.removeEventListener("click", c.current);
                for (const e of p) t.removeEventListener(e, r, !0), t.removeEventListener(e, u)
              }
            }, [t, s, o, n, a]), {
              onPointerDownCapture: () => i.current = !0
            }
          }(e => {
            const r = e.target;
            if (!(r instanceof Node)) return;
            const t = [...c.branches].some(e => e.contains(r));
            x && !t && (a?.(e), i?.(e), e.defaultPrevented || d?.())
          }, {
            ownerDocument: p,
            deferPointerDownOutside: o,
            isDeferredPointerDownOutsideRef: _,
            dismissableSurfaces: c.dismissableSurfaces
          }), C = function(e, r = globalThis?.document) {
            const t = (0, zt.c)(e),
              o = S.useRef(!1);
            return S.useEffect(() => {
              const e = e => {
                e.target && !o.current && Mt("dismissableLayer.focusOutside", t, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return r.addEventListener("focusin", e), () => r.removeEventListener("focusin", e)
            }, [r, t]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }(e => {
            if (o && _.current) return;
            const r = e.target;
            [...c.branches].some(e => e.contains(r)) || (s?.(e), i?.(e), e.defaultPrevented || d?.())
          }, p);
          return (0, It.U)(e => {
            g === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }, p), S.useEffect(() => {
            if (u) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Pt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Vt(), () => {
              t && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Pt))
            }
          }, [u, p, t, c]), S.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Vt())
          }, [u, c]), S.useEffect(() => {
            const e = () => v({});
            return document.addEventListener(Tt, e), () => document.removeEventListener(Tt, e)
          }, []), (0, R.jsx)(kt.sG.div, {
            ...l,
            ref: y,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Nt.mK)(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: (0, Nt.mK)(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: (0, Nt.mK)(e.onPointerDownCapture, j.onPointerDownCapture)
          })
        });
      Lt.displayName = "DismissableLayer";
      var At = S.forwardRef((e, r) => {
        const t = S.useContext(Et),
          o = S.useRef(null),
          n = (0, St.s)(r, o);
        return S.useEffect(() => {
          const e = o.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }, [t.branches]), (0, R.jsx)(kt.sG.div, {
          ...e,
          ref: n
        })
      });

      function Vt() {
        const e = new CustomEvent(Tt);
        document.dispatchEvent(e)
      }

      function Mt(e, r, t, {
        discrete: o
      }) {
        const n = t.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
          });
        r && n.addEventListener(e, r, {
          once: !0
        }), o ? (0, kt.hO)(n, a) : n.dispatchEvent(a)
      }
      At.displayName = "DismissableLayerBranch";
      var qt = Lt,
        Ft = At,
        Bt = t(94296),
        Xt = t(17966),
        Gt = t(10376),
        Kt = S.forwardRef((e, r) => {
          const {
            children: t,
            width: o = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, R.jsx)(kt.sG.svg, {
            ...a,
            ref: r,
            width: o,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? t : (0, R.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Kt.displayName = "Arrow";
      var Zt = Kt,
        Ht = t(10198),
        Wt = t(5024),
        Ut = "Popper",
        [$t, Yt] = (0, Dt.A)(Ut),
        [Qt, Jt] = $t(Ut),
        eo = e => {
          const {
            __scopePopper: r,
            children: t
          } = e, [o, n] = S.useState(null), [a, s] = S.useState(void 0);
          return (0, R.jsx)(Qt, {
            scope: r,
            anchor: o,
            onAnchorChange: n,
            placementState: a,
            setPlacementState: s,
            children: t
          })
        };
      eo.displayName = Ut;
      var ro = "PopperAnchor",
        to = S.forwardRef((e, r) => {
          const {
            __scopePopper: t,
            virtualRef: o,
            ...n
          } = e, a = Jt(ro, t), s = S.useRef(null), i = a.onAnchorChange, d = S.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, St.s)(r, d), c = S.useRef(null);
          S.useEffect(() => {
            if (!o) return;
            const e = c.current;
            c.current = o.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && po(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return o ? null : (0, R.jsx)(kt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...n,
            ref: l
          })
        });
      to.displayName = ro;
      var oo = "PopperContent",
        [no, ao] = $t(oo),
        so = S.forwardRef((e, r) => {
          const {
            __scopePopper: t,
            side: o = "bottom",
            sideOffset: n = 0,
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
          } = e, b = Jt(oo, t), [m, h] = S.useState(null), g = (0, St.s)(r, e => h(e)), [w, x] = S.useState(null), _ = (0, Wt.X)(w), j = _?.width ?? 0, C = _?.height ?? 0, O = o + ("center" !== a ? "-" + a : ""), P = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, N = Array.isArray(l) ? l : [l], D = N.length > 0, k = {
            padding: P,
            boundary: N.filter(uo),
            altBoundary: D
          }, {
            refs: z,
            floatingStyles: I,
            placement: T,
            isPositioned: E,
            middlewareData: L
          } = (0, Xt.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Gt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: b.anchor
            },
            middleware: [(0, Xt.cY)({
              mainAxis: n + C,
              alignmentAxis: s
            }), d && (0, Xt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Xt.ER)() : void 0,
              ...k
            }), d && (0, Xt.UU)({
              ...k
            }), (0, Xt.Ej)({
              ...k,
              apply: ({
                elements: e,
                rects: r,
                availableWidth: t,
                availableHeight: o
              }) => {
                const {
                  width: n,
                  height: a
                } = r.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${t}px`), s.setProperty("--radix-popper-available-height", `${o}px`), s.setProperty("--radix-popper-anchor-width", `${n}px`), s.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), w && (0, Xt.UE)({
              element: w,
              padding: i
            }), fo({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, Xt.jD)({
              strategy: "referenceHidden",
              ...k,
              boundary: D ? k.boundary : void 0
            })]
          }), A = b.setPlacementState;
          (0, Ht.N)(() => (A(T), () => {
            A(void 0)
          }), [T, A]);
          const [V, M] = po(T), q = (0, zt.c)(v);
          (0, Ht.N)(() => {
            E && q?.()
          }, [E, q]);
          const F = L.arrow?.x,
            B = L.arrow?.y,
            X = 0 !== L.arrow?.centerOffset,
            [G, K] = S.useState();
          return (0, Ht.N)(() => {
            m && K(window.getComputedStyle(m).zIndex)
          }, [m]), (0, R.jsx)("div", {
            ref: z.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: E ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, R.jsx)(no, {
              scope: t,
              placedSide: V,
              placedAlign: M,
              onArrowChange: x,
              arrowX: F,
              arrowY: B,
              shouldHideArrow: X,
              children: (0, R.jsx)(kt.sG.div, {
                "data-side": V,
                "data-align": M,
                ...y,
                ref: g,
                style: {
                  ...y.style,
                  animation: E ? void 0 : "none"
                }
              })
            })
          })
        });
      so.displayName = oo;
      var io = "PopperArrow",
        lo = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        co = S.forwardRef(function(e, r) {
          const {
            __scopePopper: t,
            ...o
          } = e, n = ao(io, t), a = lo[n.placedSide];
          return (0, R.jsx)("span", {
            ref: n.onArrowChange,
            style: {
              position: "absolute",
              left: n.arrowX,
              top: n.arrowY,
              [a]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [n.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [n.placedSide],
              visibility: n.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, R.jsx)(Zt, {
              ...o,
              ref: r,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        });

      function uo(e) {
        return null !== e
      }
      co.displayName = io;
      var fo = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: t,
            rects: o,
            middlewareData: n
          } = r, a = 0 !== n.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = po(t), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], u = (n.arrow?.x ?? 0) + s / 2, f = (n.arrow?.y ?? 0) + i / 2;
          let p = "",
            v = "";
          return "bottom" === d ? (p = a ? c : `${u}px`, v = -i + "px") : "top" === d ? (p = a ? c : `${u}px`, v = `${o.floating.height+i}px`) : "right" === d ? (p = -i + "px", v = a ? c : `${f}px`) : "left" === d && (p = `${o.floating.width+i}px`, v = a ? c : `${f}px`), {
            data: {
              x: p,
              y: v
            }
          }
        }
      });

      function po(e) {
        const [r, t = "center"] = e.split("-");
        return [r, t]
      }
      var vo = eo,
        yo = to,
        bo = so,
        mo = co,
        ho = t(84017),
        go = S.forwardRef((e, r) => {
          const {
            container: t,
            ...o
          } = e, [n, a] = S.useState(!1);
          (0, Ht.N)(() => a(!0), []);
          const s = t || n && globalThis?.document?.body;
          return s ? ho.createPortal((0, R.jsx)(kt.sG.div, {
            ...o,
            ref: r
          }), s) : null
        });
      go.displayName = "Portal";
      var wo = e => {
        const {
          present: r,
          children: t
        } = e, o = function(e) {
          const [r, t] = S.useState(), o = S.useRef(null), n = S.useRef(e), a = S.useRef("none"), s = e ? "mounted" : "unmounted", [i, d] = function(e, r) {
            return S.useReducer((e, t) => r[e][t] ?? e, e)
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
          return S.useEffect(() => {
            const e = _o(o.current);
            a.current = "mounted" === i ? e : "none"
          }, [i]), (0, Ht.N)(() => {
            const r = o.current,
              t = n.current;
            if (t !== e) {
              const o = a.current,
                s = _o(r);
              d(e ? "MOUNT" : "none" === s || "none" === r?.display ? "UNMOUNT" : t && o !== s ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e
            }
          }, [e, d]), (0, Ht.N)(() => {
            if (r) {
              let e;
              const t = r.ownerDocument.defaultView ?? window,
                s = a => {
                  const s = _o(o.current).includes(CSS.escape(a.animationName));
                  if (a.target === r && s && (d("ANIMATION_END"), !n.current)) {
                    const o = r.style.animationFillMode;
                    r.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                      "forwards" === r.style.animationFillMode && (r.style.animationFillMode = o)
                    })
                  }
                },
                i = e => {
                  e.target === r && (a.current = _o(o.current))
                };
              return r.addEventListener("animationstart", i), r.addEventListener("animationcancel", s), r.addEventListener("animationend", s), () => {
                t.clearTimeout(e), r.removeEventListener("animationstart", i), r.removeEventListener("animationcancel", s), r.removeEventListener("animationend", s)
              }
            }
            d("ANIMATION_END")
          }, [r, d]), {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: S.useCallback(e => {
              o.current = e ? getComputedStyle(e) : null, t(e)
            }, [])
          }
        }(r), n = "function" == typeof t ? t({
          present: o.isPresent
        }) : S.Children.only(t), a = function(...e) {
          const r = S.useRef(e);
          return r.current = e, S.useCallback(e => {
            const t = r.current;
            let o = !1;
            const n = t.map(r => {
              const t = xo(r, e);
              return o || "function" != typeof t || (o = !0), t
            });
            if (o) return () => {
              for (let e = 0; e < n.length; e++) {
                const r = n[e];
                "function" == typeof r ? r() : xo(t[e], null)
              }
            }
          }, [])
        }(o.ref, function(e) {
          let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = r && "isReactWarning" in r && r.isReactWarning;
          return t ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(n));
        return "function" == typeof t || o.isPresent ? S.cloneElement(n, {
          ref: a
        }) : null
      };

      function xo(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r)
      }

      function _o(e) {
        return e?.animationName || "none"
      }
      wo.displayName = "Presence";
      var jo = t(17172),
        Co = t(17038),
        Oo = t(84045),
        [Po, Ro] = (0, Dt.A)("Tooltip", [Yt]),
        No = Yt(),
        So = "TooltipProvider",
        Do = 700,
        ko = "tooltip.open",
        [zo, Io] = Po(So),
        To = e => {
          const {
            __scopeTooltip: r,
            delayDuration: t = Do,
            skipDelayDuration: o = 300,
            disableHoverableContent: n = !1,
            children: a
          } = e, s = S.useRef(!0), i = S.useRef(!1), d = S.useRef(0);
          return S.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, R.jsx)(zo, {
            scope: r,
            isOpenDelayedRef: s,
            delayDuration: t,
            onOpen: S.useCallback(() => {
              o <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [o]),
            onClose: S.useCallback(() => {
              o <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, o))
            }, [o]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: S.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: n,
            children: a
          })
        };
      To.displayName = So;
      var Eo = "Tooltip",
        [Lo, Ao] = Po(Eo),
        Vo = e => {
          const {
            __scopeTooltip: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = Io(Eo, e.__scopeTooltip), l = No(r), [c, u] = S.useState(null), f = (0, Bt.B)(), p = S.useRef(0), v = s ?? d.disableHoverableContent, y = i ?? d.delayDuration, b = S.useRef(!1), [m, h] = (0, Co.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(ko))) : d.onClose(), a?.(e)
            },
            caller: Eo
          }), g = S.useMemo(() => m ? b.current ? "delayed-open" : "instant-open" : "closed", [m]), w = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b.current = !1, h(!0)
          }, [h]), x = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, h(!1)
          }, [h]), _ = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              b.current = !0, h(!0), p.current = 0
            }, y)
          }, [y, h]);
          return S.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, R.jsx)(vo, {
            ...l,
            children: (0, R.jsx)(Lo, {
              scope: r,
              contentId: f,
              open: m,
              stateAttribute: g,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: S.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: S.useCallback(() => {
                v ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, v]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: v,
              children: t
            })
          })
        };
      Vo.displayName = Eo;
      var Mo = "TooltipTrigger",
        qo = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = Ao(Mo, t), a = Io(Mo, t), s = No(t), i = S.useRef(null), d = (0, St.s)(r, i, n.onTriggerChange), l = S.useRef(!1), c = S.useRef(!1), u = S.useCallback(() => l.current = !1, []);
          return S.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, R.jsx)(yo, {
            asChild: !0,
            ...s,
            children: (0, R.jsx)(kt.sG.button, {
              "aria-describedby": n.open ? n.contentId : void 0,
              "data-state": n.stateAttribute,
              ...o,
              ref: d,
              onPointerMove: (0, Nt.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (n.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Nt.mK)(e.onPointerLeave, () => {
                n.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Nt.mK)(e.onPointerDown, () => {
                n.open && n.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Nt.mK)(e.onFocus, () => {
                l.current || n.onOpen()
              }),
              onBlur: (0, Nt.mK)(e.onBlur, n.onClose),
              onClick: (0, Nt.mK)(e.onClick, n.onClose)
            })
          })
        });
      qo.displayName = Mo;
      var Fo = "TooltipPortal",
        [Bo, Xo] = Po(Fo, {
          forceMount: void 0
        }),
        Go = e => {
          const {
            __scopeTooltip: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = Ao(Fo, r);
          return (0, R.jsx)(Bo, {
            scope: r,
            forceMount: t,
            children: (0, R.jsx)(wo, {
              present: t || a.open,
              children: (0, R.jsx)(go, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      Go.displayName = Fo;
      var Ko = "TooltipContent",
        Zo = S.forwardRef((e, r) => {
          const t = Xo(Ko, e.__scopeTooltip),
            {
              forceMount: o = t.forceMount,
              side: n = "top",
              ...a
            } = e,
            s = Ao(Ko, e.__scopeTooltip);
          return (0, R.jsx)(wo, {
            present: o || s.open,
            children: s.disableHoverableContent ? (0, R.jsx)(Yo, {
              side: n,
              ...a,
              ref: r
            }) : (0, R.jsx)(Ho, {
              side: n,
              ...a,
              ref: r
            })
          })
        }),
        Ho = S.forwardRef((e, r) => {
          const t = Ao(Ko, e.__scopeTooltip),
            o = Io(Ko, e.__scopeTooltip),
            n = S.useRef(null),
            a = (0, St.s)(r, n),
            [s, i] = S.useState(null),
            {
              trigger: d,
              onClose: l
            } = t,
            c = n.current,
            {
              onPointerInTransitChange: u
            } = o,
            f = S.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = S.useCallback((e, r) => {
              const t = e.currentTarget,
                o = {
                  x: e.clientX,
                  y: e.clientY
                },
                n = function(e, r, t = 5) {
                  const o = [];
                  switch (r) {
                    case "top":
                      o.push({
                        x: e.x - t,
                        y: e.y + t
                      }, {
                        x: e.x + t,
                        y: e.y + t
                      });
                      break;
                    case "bottom":
                      o.push({
                        x: e.x - t,
                        y: e.y - t
                      }, {
                        x: e.x + t,
                        y: e.y - t
                      });
                      break;
                    case "left":
                      o.push({
                        x: e.x + t,
                        y: e.y - t
                      }, {
                        x: e.x + t,
                        y: e.y + t
                      });
                      break;
                    case "right":
                      o.push({
                        x: e.x - t,
                        y: e.y - t
                      }, {
                        x: e.x - t,
                        y: e.y + t
                      })
                  }
                  return o
                }(o, function(e, r) {
                  const t = Math.abs(r.top - e.y),
                    o = Math.abs(r.bottom - e.y),
                    n = Math.abs(r.right - e.x),
                    a = Math.abs(r.left - e.x);
                  switch (Math.min(t, o, n, a)) {
                    case a:
                      return "left";
                    case n:
                      return "right";
                    case t:
                      return "top";
                    case o:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(o, t.getBoundingClientRect())),
                a = function(e) {
                  const r = e.slice();
                  return r.sort((e, r) => e.x < r.x ? -1 : e.x > r.x ? 1 : e.y < r.y ? -1 : e.y > r.y ? 1 : 0),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const r = [];
                      for (let t = 0; t < e.length; t++) {
                        const o = e[t];
                        for (; r.length >= 2;) {
                          const e = r[r.length - 1],
                            t = r[r.length - 2];
                          if (!((e.x - t.x) * (o.y - t.y) >= (e.y - t.y) * (o.x - t.x))) break;
                          r.pop()
                        }
                        r.push(o)
                      }
                      r.pop();
                      const t = [];
                      for (let r = e.length - 1; r >= 0; r--) {
                        const o = e[r];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            r = t[t.length - 2];
                          if (!((e.x - r.x) * (o.y - r.y) >= (e.y - r.y) * (o.x - r.x))) break;
                          t.pop()
                        }
                        t.push(o)
                      }
                      return t.pop(), 1 === r.length && 1 === t.length && r[0].x === t[0].x && r[0].y === t[0].y ? r : r.concat(t)
                    }(r)
                }([...n, ... function(e) {
                  const {
                    top: r,
                    right: t,
                    bottom: o,
                    left: n
                  } = e;
                  return [{
                    x: n,
                    y: r
                  }, {
                    x: t,
                    y: r
                  }, {
                    x: t,
                    y: o
                  }, {
                    x: n,
                    y: o
                  }]
                }(r.getBoundingClientRect())]);
              i(a), u(!0)
            }, [u]);
          return S.useEffect(() => () => f(), [f]), S.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                r = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", r), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", r)
              }
            }
          }, [d, c, p, f]), S.useEffect(() => {
            if (s) {
              const e = e => {
                const r = e.target,
                  t = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  o = d?.contains(r) || c?.contains(r),
                  n = ! function(e, r) {
                    const {
                      x: t,
                      y: o
                    } = e;
                    let n = !1;
                    for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
                      const s = r[e],
                        i = r[a],
                        d = s.x,
                        l = s.y,
                        c = i.x,
                        u = i.y;
                      l > o != u > o && t < (c - d) * (o - l) / (u - l) + d && (n = !n)
                    }
                    return n
                  }(t, s);
                o ? f() : n && (f(), l())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, s, l, f]), (0, R.jsx)(Yo, {
            ...e,
            ref: a
          })
        }),
        [Wo, Uo] = Po(Eo, {
          isInside: !1
        }),
        $o = (0, jo.Dc)("TooltipContent"),
        Yo = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            children: o,
            "aria-label": n,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Ao(Ko, t), l = No(t), {
            onClose: c
          } = d;
          return S.useEffect(() => (document.addEventListener(ko, c), () => document.removeEventListener(ko, c)), [c]), S.useEffect(() => {
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
          }, [d.trigger, c]), (0, R.jsx)(Lt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, R.jsxs)(bo, {
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
              children: [(0, R.jsx)($o, {
                children: o
              }), (0, R.jsx)(Wo, {
                scope: t,
                isInside: !0,
                children: (0, R.jsx)(Oo.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: n || o
                })
              })]
            })
          })
        });
      Zo.displayName = Ko;
      var Qo = "TooltipArrow",
        Jo = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = No(t);
          return Uo(Qo, t).isInside ? null : (0, R.jsx)(mo, {
            ...n,
            ...o,
            ref: r
          })
        });
      Jo.displayName = Qo;
      var en = To,
        rn = Vo,
        tn = qo,
        on = Go,
        nn = Zo,
        an = Jo;
      const sn = (0, S.createContext)(null);

      function dn() {
        const e = (0, S.useContext)(sn);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const ln = ({
          children: e,
          delayDuration: r = 0,
          defaultOpen: t,
          onOpenChange: o,
          ...n
        }) => {
          const [a = !1, s] = (0, fe.ic)({
            defaultProp: t,
            prop: n.isOpen,
            onChange: o
          });
          return (0, R.jsx)(en, {
            delayDuration: r,
            children: (0, R.jsx)(sn.Provider, {
              value: {
                isOpen: a,
                ...n
              },
              children: (0, R.jsx)(rn, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        cn = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => (0, R.jsx)(tn, {
          asChild: !0,
          "data-testid": r,
          ...t,
          ref: o,
          children: e
        })),
        un = (0, S.forwardRef)(({
          testId: e,
          side: r = "top",
          sideOffset: t = 8,
          align: o = "center",
          alignOffset: n = 0,
          avoidCollisions: a = !0,
          sticky: s = "partial",
          ...i
        }, d) => {
          const {
            isOpen: l
          } = dn(), c = (0, fe.jt)(), u = (0, Rt.CS)(nn), f = (0, Rt.pn)(l, {
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
            config: Rt.$W.stiff,
            immediate: c
          }), p = (0, z.v6)({
            "data-testid": e,
            side: r,
            align: o,
            sticky: s,
            sideOffset: t,
            alignOffset: n,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, R.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        fn = (0, S.forwardRef)(({
          testId: e
        }, r) => {
          const t = (0, z.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, R.jsx)(an, {
            ...t,
            ref: r
          })
        }),
        pn = on;
      var vn = t(81471),
        yn = t(99136),
        bn = t(52184);

      function mn(e) {
        const r = e + "CollectionProvider",
          [t, o] = (0, Dt.A)(r),
          [n, a] = t(r, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = e => {
            const {
              scope: r,
              children: t
            } = e, o = S.useRef(null), a = S.useRef(new Map).current;
            return (0, R.jsx)(n, {
              scope: r,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        s.displayName = r;
        const i = e + "CollectionSlot",
          d = (0, jo.TL)(i),
          l = S.forwardRef((e, r) => {
            const {
              scope: t,
              children: o
            } = e, n = a(i, t), s = (0, St.s)(r, n.collectionRef);
            return (0, R.jsx)(d, {
              ref: s,
              children: o
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, jo.TL)(c),
          p = S.forwardRef((e, r) => {
            const {
              scope: t,
              children: o,
              ...n
            } = e, s = S.useRef(null), i = (0, St.s)(r, s), d = a(c, t);
            return S.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...n
            }), () => {
              d.itemMap.delete(s)
            })), (0, R.jsx)(f, {
              [u]: "",
              ref: i,
              children: o
            })
          });
        return p.displayName = c, [{
          Provider: s,
          Slot: l,
          ItemSlot: p
        }, function(r) {
          const t = a(e + "CollectionConsumer", r);
          return S.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const r = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, o]
      }
      Map;
      var hn = ["PageUp", "PageDown"],
        gn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        wn = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        xn = "Slider",
        [_n, jn, Cn] = mn(xn),
        [On, Pn] = (0, Dt.A)(xn, [Cn]),
        [Rn, Nn] = On(xn),
        Sn = S.forwardRef((e, r) => {
          const {
            name: t,
            min: o = 0,
            max: n = 100,
            step: a = 1,
            orientation: s = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: l = [o],
            value: c,
            onValueChange: u = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: v,
            ...y
          } = e, b = S.useRef(new Set), m = S.useRef(0), h = S.useRef(!1), g = "horizontal" === s ? zn : In, [w = [], x] = (0, Co.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const r = [...b.current];
              r[m.current]?.focus({
                preventScroll: !0,
                focusVisible: h.current
              }), h.current = !1, u(e)
            }
          }), _ = S.useRef(w);

          function j(e, r, {
            commit: t
          } = {
            commit: !1
          }) {
            const s = function(e) {
                if (!Number.isFinite(e)) return 0;
                const r = e.toString();
                if (r.includes("e")) {
                  const [e, t] = r.split("e"), o = e.split(".")[1] || "", n = Number(t);
                  return Math.max(0, o.length - n)
                }
                const t = r.split(".")[1];
                return t ? t.length : 0
              }(a),
              i = function(e, r) {
                const t = Math.pow(10, r);
                return Math.round(e * t) / t
              }(Math.round((e - o) / a) * a + o, s),
              l = (0, vn.q)(i, [o, n]);
            x((e = []) => {
              const o = function(e = [], r, t) {
                const o = [...e];
                return o[t] = r, o.sort((e, r) => e - r)
              }(e, l, r);
              if (function(e, r) {
                  if (r > 0) {
                    const t = function(e) {
                      return e.slice(0, -1).map((r, t) => e[t + 1] - r)
                    }(e);
                    return Math.min(...t) >= r
                  }
                  return !0
                }(o, d * a)) {
                m.current = o.indexOf(l);
                const r = String(o) !== String(e);
                return r && t && f(o), r ? o : e
              }
              return e
            })
          }
          return (0, R.jsx)(Rn, {
            scope: e.__scopeSlider,
            name: t,
            disabled: i,
            min: o,
            max: n,
            valueIndexToChangeRef: m,
            thumbs: b.current,
            values: w,
            orientation: s,
            form: v,
            children: (0, R.jsx)(_n.Provider, {
              scope: e.__scopeSlider,
              children: (0, R.jsx)(_n.Slot, {
                scope: e.__scopeSlider,
                children: (0, R.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: r,
                  onPointerDown: (0, Nt.mK)(y.onPointerDown, () => {
                    i || (_.current = w, h.current = !1)
                  }),
                  min: o,
                  max: n,
                  inverted: p,
                  onSlideStart: i ? void 0 : function(e) {
                    const r = function(e, r) {
                      if (1 === e.length) return 0;
                      const t = e.map(e => Math.abs(e - r)),
                        o = Math.min(...t);
                      return t.indexOf(o)
                    }(w, e);
                    j(e, r)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    j(e, m.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = _.current[m.current];
                    w[m.current] !== e && f(w)
                  },
                  onHomeKeyDown: () => {
                    i || (h.current = !0, j(o, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (h.current = !0, j(n, w.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: r
                  }) => {
                    if (!i) {
                      h.current = !0;
                      const t = hn.includes(e.key) || e.shiftKey && gn.includes(e.key) ? 10 : 1,
                        o = m.current;
                      j(w[o] + a * t * r, o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Sn.displayName = xn;
      var [Dn, kn] = On(xn, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), zn = S.forwardRef((e, r) => {
        const {
          min: t,
          max: o,
          dir: n,
          inverted: a,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: d,
          onStepKeyDown: l,
          ...c
        } = e, [u, f] = S.useState(null), p = (0, St.s)(r, e => f(e)), v = S.useRef(void 0), y = (0, yn.jH)(n), b = "ltr" === y, m = b && !a || !b && a;

        function h(e) {
          const r = v.current || u.getBoundingClientRect(),
            n = $n([0, r.width], m ? [t, o] : [o, t]);
          return v.current = r, n(e - r.left)
        }
        return (0, R.jsx)(Dn, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, R.jsx)(Tn, {
            dir: y,
            "data-orientation": "horizontal",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const r = h(e.clientX);
              s?.(r)
            },
            onSlideMove: e => {
              const r = h(e.clientX);
              i?.(r)
            },
            onSlideEnd: () => {
              v.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const r = wn[m ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), In = S.forwardRef((e, r) => {
        const {
          min: t,
          max: o,
          inverted: n,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = S.useRef(null), u = (0, St.s)(r, c), f = S.useRef(void 0), p = !n;

        function v(e) {
          const r = f.current || c.current.getBoundingClientRect(),
            n = $n([0, r.height], p ? [o, t] : [t, o]);
          return f.current = r, n(e - r.top)
        }
        return (0, R.jsx)(Dn, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, R.jsx)(Tn, {
            "data-orientation": "vertical",
            ...l,
            ref: u,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const r = v(e.clientY);
              a?.(r)
            },
            onSlideMove: e => {
              const r = v(e.clientY);
              s?.(r)
            },
            onSlideEnd: () => {
              f.current = void 0, i?.()
            },
            onStepKeyDown: e => {
              const r = wn[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), Tn = S.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          onSlideStart: o,
          onSlideMove: n,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = Nn(xn, t);
        return (0, R.jsx)(kt.sG.span, {
          ...l,
          ref: r,
          onKeyDown: (0, Nt.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : hn.concat(gn).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, Nt.mK)(e.onPointerDown, e => {
            const r = e.target;
            r.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(r) ? r.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : o(e)
          }),
          onPointerMove: (0, Nt.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && n(e)
          }),
          onPointerUp: (0, Nt.mK)(e.onPointerUp, e => {
            const r = e.target;
            r.hasPointerCapture(e.pointerId) && (r.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), En = "SliderTrack", Ln = S.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          ...o
        } = e, n = Nn(En, t);
        return (0, R.jsx)(kt.sG.span, {
          "data-disabled": n.disabled ? "" : void 0,
          "data-orientation": n.orientation,
          ...o,
          ref: r
        })
      });
      Ln.displayName = En;
      var An = "SliderRange",
        Vn = S.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = Nn(An, t), a = kn(An, t), s = S.useRef(null), i = (0, St.s)(r, s), d = n.values.length, l = n.values.map(e => Un(e, n.min, n.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, R.jsx)(kt.sG.span, {
            "data-orientation": n.orientation,
            "data-disabled": n.disabled ? "" : void 0,
            ...o,
            ref: i,
            style: {
              ...e.style,
              [a.startEdge]: c + "%",
              [a.endEdge]: u + "%"
            }
          })
        });
      Vn.displayName = An;
      var Mn = "SliderThumb",
        [qn, Fn] = On(Mn),
        Bn = "SliderThumbProvider";

      function Xn(e) {
        const {
          __scopeSlider: r,
          name: t,
          children: o,
          internal_do_not_use_render: n
        } = e, a = Nn(Bn, r), s = jn(r), [i, d] = S.useState(null), l = S.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, Wt.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = t ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : Un(f, a.min, a.max);
        S.useEffect(() => {
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
        return (0, R.jsx)(qn, {
          scope: r,
          ...y,
          children: Yn(n) ? n(y) : o
        })
      }
      Xn.displayName = Bn;
      var Gn = "SliderThumbTrigger",
        Kn = S.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = Nn(Gn, t), a = kn(Gn, t), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Fn(Gn, t), u = (0, St.s)(r, e => c(e)), f = function(e, r) {
            return r > 2 ? `Value ${e+1} of ${r}` : 2 === r ? ["Minimum", "Maximum"][e] : void 0
          }(s, n.values.length), p = l?.[a.size], v = p ? function(e, r, t) {
            const o = e / 2;
            return (o - $n([0, 50], [0, o])(r) * t) * t
          }(p, d, a.direction) : 0;
          return (0, R.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, R.jsx)(_n.ItemSlot, {
              scope: t,
              children: (0, R.jsx)(kt.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || f,
                "aria-valuemin": n.min,
                "aria-valuenow": i,
                "aria-valuemax": n.max,
                "aria-orientation": n.orientation,
                "data-orientation": n.orientation,
                "data-disabled": n.disabled ? "" : void 0,
                tabIndex: n.disabled ? void 0 : 0,
                ...o,
                ref: u,
                style: void 0 === i ? {
                  display: "none"
                } : e.style,
                onFocus: (0, Nt.mK)(e.onFocus, () => {
                  n.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      Kn.displayName = Gn;
      var Zn = S.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          name: o,
          ...n
        } = e;
        return (0, R.jsx)(Xn, {
          __scopeSlider: t,
          name: o,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: o
          }) => (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Kn, {
              ...n,
              ref: r,
              __scopeSlider: t
            }), o ? (0, R.jsx)(Wn, {
              __scopeSlider: t
            }, e) : null]
          })
        })
      });
      Zn.displayName = Mn;
      var Hn = "SliderBubbleInput",
        Wn = S.forwardRef(({
          __scopeSlider: e,
          ...r
        }, t) => {
          const {
            value: o,
            name: n,
            form: a
          } = Fn(Hn, e), s = S.useRef(null), i = (0, St.s)(s, t), d = (0, bn.Z)(o);
          return S.useEffect(() => {
            const e = s.current;
            if (!e) return;
            const r = window.HTMLInputElement.prototype,
              t = Object.getOwnPropertyDescriptor(r, "value").set;
            if (d !== o && t) {
              const r = new Event("input", {
                bubbles: !0
              });
              t.call(e, o), e.dispatchEvent(r)
            }
          }, [d, o]), (0, R.jsx)(kt.sG.input, {
            style: {
              display: "none"
            },
            name: n,
            form: a,
            ...r,
            ref: i,
            defaultValue: o
          })
        });

      function Un(e, r, t) {
        const o = 100 / (t - r) * (e - r);
        return (0, vn.q)(o, [0, 100])
      }

      function $n(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function Yn(e) {
        return "function" == typeof e
      }
      Wn.displayName = Hn;
      var Qn = "focusScope.autoFocusOnMount",
        Jn = "focusScope.autoFocusOnUnmount",
        ea = {
          bubbles: !1,
          cancelable: !0
        },
        ra = S.forwardRef((e, r) => {
          const {
            loop: t = !1,
            trapped: o = !1,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = S.useState(null), l = (0, zt.c)(n), c = (0, zt.c)(a), u = S.useRef(null), f = (0, St.s)(r, e => d(e)), p = S.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          S.useEffect(() => {
            if (o) {
              let e = function(e) {
                  if (p.paused || !i) return;
                  const r = e.target;
                  i.contains(r) ? u.current = r : aa(u.current, {
                    select: !0
                  })
                },
                r = function(e) {
                  if (p.paused || !i) return;
                  const r = e.relatedTarget;
                  null !== r && (i.contains(r) || aa(u.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const r of e) r.removedNodes.length > 0 && aa(i)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", r);
              const o = new MutationObserver(t);
              return i && o.observe(i, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", r), o.disconnect()
              }
            }
          }, [o, i, p.paused]), S.useEffect(() => {
            if (i) {
              sa.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const r = new CustomEvent(Qn, ea);
                i.addEventListener(Qn, l), i.dispatchEvent(r), r.defaultPrevented || (function(e, {
                  select: r = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const o of e)
                    if (aa(o, {
                        select: r
                      }), document.activeElement !== t) return
                }(ta(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && aa(i))
              }
              return () => {
                i.removeEventListener(Qn, l), setTimeout(() => {
                  const r = new CustomEvent(Jn, ea);
                  i.addEventListener(Jn, c), i.dispatchEvent(r), r.defaultPrevented || aa(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Jn, c), sa.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const v = S.useCallback(e => {
            if (!t && !o) return;
            if (p.paused) return;
            const r = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              n = document.activeElement;
            if (r && n) {
              const r = e.currentTarget,
                [o, a] = function(e) {
                  const r = ta(e);
                  return [oa(r, e), oa(r.reverse(), e)]
                }(r);
              o && a ? e.shiftKey || n !== a ? e.shiftKey && n === o && (e.preventDefault(), t && aa(a, {
                select: !0
              })) : (e.preventDefault(), t && aa(o, {
                select: !0
              })) : n === r && e.preventDefault()
            }
          }, [t, o, p.paused]);
          return (0, R.jsx)(kt.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        });

      function ta(e) {
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

      function oa(e, r) {
        for (const t of e)
          if (!na(t, {
              upTo: r
            })) return t
      }

      function na(e, {
        upTo: r
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== r && e === r) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function aa(e, {
        select: r = !1
      } = {}) {
        if (e && e.focus) {
          const t = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== t && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && r && e.select()
        }
      }
      ra.displayName = "FocusScope";
      var sa = function() {
        let e = [];
        return {
          add(r) {
            const t = e[0];
            r !== t && t?.pause(), e = ia(e, r), e.unshift(r)
          },
          remove(r) {
            e = ia(e, r), e[0]?.resume()
          }
        }
      }();

      function ia(e, r) {
        const t = [...e],
          o = t.indexOf(r);
        return -1 !== o && t.splice(o, 1), t
      }
      var da = t(38174),
        la = t(38100),
        ca = t(45787),
        ua = "Dialog",
        [fa, pa] = (0, Dt.A)(ua),
        [va, ya] = fa(ua),
        ba = e => {
          const {
            __scopeDialog: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !0
          } = e, i = S.useRef(null), d = S.useRef(null), [l, c] = (0, Co.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: ua
          });
          return (0, R.jsx)(va, {
            scope: r,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Bt.B)(),
            titleId: (0, Bt.B)(),
            descriptionId: (0, Bt.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: S.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: t
          })
        };
      ba.displayName = ua;
      var ma = "DialogTrigger",
        ha = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ya(ma, t), a = (0, St.s)(r, n.triggerRef);
          return (0, R.jsx)(kt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": Va(n.open),
            ...o,
            ref: a,
            onClick: (0, Nt.mK)(e.onClick, n.onOpenToggle)
          })
        });
      ha.displayName = ma;
      var ga = "DialogPortal",
        [wa, xa] = fa(ga, {
          forceMount: void 0
        }),
        _a = e => {
          const {
            __scopeDialog: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = ya(ga, r);
          return (0, R.jsx)(wa, {
            scope: r,
            forceMount: t,
            children: S.Children.map(o, e => (0, R.jsx)(wo, {
              present: t || a.open,
              children: (0, R.jsx)(go, {
                asChild: !0,
                container: n,
                children: e
              })
            }))
          })
        };
      _a.displayName = ga;
      var ja = "DialogOverlay",
        Ca = S.forwardRef((e, r) => {
          const t = xa(ja, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ya(ja, e.__scopeDialog);
          return a.modal ? (0, R.jsx)(wo, {
            present: o || a.open,
            children: (0, R.jsx)(Pa, {
              ...n,
              ref: r
            })
          }) : null
        });
      Ca.displayName = ja;
      var Oa = (0, jo.TL)("DialogOverlay.RemoveScroll"),
        Pa = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ya(ja, t), a = function() {
            const e = S.useContext(Et),
              [r, t] = S.useState(null);
            return S.useEffect(() => {
              if (r) return e.dismissableSurfaces.add(r), () => {
                e.dismissableSurfaces.delete(r)
              }
            }, [r, e.dismissableSurfaces]), t
          }(), s = (0, St.s)(r, a);
          return (0, R.jsx)(la.A, {
            as: Oa,
            allowPinchZoom: !0,
            shards: [n.contentRef],
            children: (0, R.jsx)(kt.sG.div, {
              "data-state": Va(n.open),
              ...o,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        Ra = "DialogContent",
        Na = S.forwardRef((e, r) => {
          const t = xa(Ra, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ya(Ra, e.__scopeDialog);
          return (0, R.jsx)(wo, {
            present: o || a.open,
            children: a.modal ? (0, R.jsx)(Sa, {
              ...n,
              ref: r
            }) : (0, R.jsx)(Da, {
              ...n,
              ref: r
            })
          })
        });
      Na.displayName = Ra;
      var Sa = S.forwardRef((e, r) => {
          const t = ya(Ra, e.__scopeDialog),
            o = S.useRef(null),
            n = (0, St.s)(r, t.contentRef, o);
          return S.useEffect(() => {
            const e = o.current;
            if (e) return (0, ca.Eq)(e)
          }, []), (0, R.jsx)(ka, {
            ...e,
            ref: n,
            trapFocus: t.open,
            disableOutsidePointerEvents: t.open,
            onCloseAutoFocus: (0, Nt.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Nt.mK)(e.onPointerDownOutside, e => {
              const r = e.detail.originalEvent,
                t = 0 === r.button && !0 === r.ctrlKey;
              (2 === r.button || t) && e.preventDefault()
            }),
            onFocusOutside: (0, Nt.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        Da = S.forwardRef((e, r) => {
          const t = ya(Ra, e.__scopeDialog),
            o = S.useRef(!1),
            n = S.useRef(!1);
          return (0, R.jsx)(ka, {
            ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: r => {
              e.onCloseAutoFocus?.(r), r.defaultPrevented || (o.current || t.triggerRef.current?.focus(), r.preventDefault()), o.current = !1, n.current = !1
            },
            onInteractOutside: r => {
              e.onInteractOutside?.(r), r.defaultPrevented || (o.current = !0, "pointerdown" === r.detail.originalEvent.type && (n.current = !0));
              const a = r.target,
                s = t.triggerRef.current?.contains(a);
              s && r.preventDefault(), "focusin" === r.detail.originalEvent.type && n.current && r.preventDefault()
            }
          })
        }),
        ka = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            ...s
          } = e, i = ya(Ra, t);
          return (0, da.Oh)(), (0, R.jsx)(R.Fragment, {
            children: (0, R.jsx)(ra, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: n,
              onUnmountAutoFocus: a,
              children: (0, R.jsx)(Lt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Va(i.open),
                ...s,
                ref: r,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        za = "DialogTitle",
        Ia = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ya(za, t);
          return (0, R.jsx)(kt.sG.h2, {
            id: n.titleId,
            ...o,
            ref: r
          })
        });
      Ia.displayName = za;
      var Ta = "DialogDescription",
        Ea = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ya(Ta, t);
          return (0, R.jsx)(kt.sG.p, {
            id: n.descriptionId,
            ...o,
            ref: r
          })
        });
      Ea.displayName = Ta;
      var La = "DialogClose",
        Aa = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ya(La, t);
          return (0, R.jsx)(kt.sG.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, Nt.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });

      function Va(e) {
        return e ? "open" : "closed"
      }
      Aa.displayName = La;
      const Ma = (0, S.createContext)({
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
        qa = ({
          altText: e,
          open: r,
          onOpenChange: t,
          defaultOpen: o,
          minZoomLevel: n = 100,
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
              } = ye();
              return e
            })(),
            p = (0, fe.rl)(),
            v = (0, S.useRef)(null),
            y = (0, S.useRef)(null),
            b = (0, S.useRef)(null),
            m = (0, S.useRef)(null),
            h = (0, S.useRef)(null),
            g = (0, S.useRef)(null),
            w = (0, S.useRef)(null),
            x = (0, S.useRef)(null),
            _ = (0, S.useRef)(null),
            j = (0, S.useRef)(null),
            C = (0, S.useRef)(null),
            O = (0, S.useRef)(null),
            P = (0, S.useRef)(null),
            N = (0, S.useRef)(null),
            D = (0, S.useRef)(null),
            k = (0, S.useRef)(null),
            z = (0, S.useRef)(null),
            I = (0, S.useRef)(null),
            T = (0, S.useRef)(null),
            [E = !1, L] = (0, fe.ic)({
              prop: r || o,
              onChange: t
            }),
            A = (0, S.useRef)(null);
          return A.current || (A.current = new xt({
            zoomLevelOptions: {
              max: a,
              min: n,
              step: s
            },
            actionOptions: {
              click: i,
              tap: l || (p ? "toggle-controls" : "close"),
              doubleTap: d || (p ? "zoom" : "none")
            }
          })), (0, R.jsx)(lt.Dk, {
            messages: ct,
            locale: f,
            children: (0, R.jsx)(Ma.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: y,
                thumbnailRef: b,
                openIconRef: m,
                overlayRef: h,
                contentRef: g,
                containerRef: w,
                zoomPanRef: x,
                imageRef: _,
                placeholderRef: j,
                captionRef: C,
                controlsRef: O,
                closeRef: P,
                zoomRef: N,
                zoomInRef: D,
                zoomSliderRef: k,
                zoomOutRef: z,
                resetRef: I,
                downloadRef: T,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: A.current
              },
              children: (0, R.jsx)(Ba, {
                ...u
              })
            })
          })
        },
        Fa = (0, S.createContext)({
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
        Ba = ({
          ...e
        }) => {
          const {
            open: r
          } = (0, S.useContext)(Ma), {
            onOpenChange: t,
            openAnim: o,
            close: n
          } = (() => {
            const {
              contextSafe: e
            } = (0, Xr.L)(), {
              slide: r,
              setOpen: t,
              hideTrigger: o,
              overlayRef: n,
              controlsRef: a,
              triggerRef: s,
              triggerBorderRef: i,
              thumbnailRef: d,
              containerRef: l,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, S.useContext)(Ma), p = (0, S.useRef)(null);
            p.current || (p.current = Br.os.timeline({
              defaults: st
            }));
            const v = (0, S.useCallback)(e => {
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
                }), d.current && i.current && (r.opening = !0, r.setup(i.current, d.current), r.zoomAndPanToInitial(), Br.os.set([u.current, f.current], {
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
                }), Br.os.set([f.current], {
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
                }), o && p.current.to([s.current, i.current], {
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
                }, 0), p.current.fromTo([n.current], {
                  opacity: 0
                }, {
                  opacity: () => r.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([a.current], {
                  opacity: 0,
                  [dt]: "none"
                }, {
                  opacity: () => r.getControlsOpacity(),
                  [dt]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), r.opening = !1, r.dispatch("zoom"), r.closing || await Kr(f.current), r.closing || (Br.os.set([f.current], {
                  visibility: "visible",
                  ...it
                }), Br.os.set([u.current], {
                  visibility: "hidden",
                  ...it
                }))))
              }),
              b = e(async () => {
                r.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              m = (0, S.useCallback)(async e => {
                e || (window.addEventListener("click", v), await b(), window.removeEventListener("click", v)), t(e)
              }, [t]),
              h = (0, S.useCallback)(() => m(!1), [m]);
            return {
              onOpenChange: m,
              openAnim: y,
              close: h
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
            } = (0, Xr.L)(), {
              slide: t,
              imageRef: o,
              zoomPanRef: n,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, S.useContext)(Ma), d = r(async e => {
              t.zoomTo(e), Br.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...it
              })
            }), l = r(async () => {
              t.zoomTo(t.currZoomLevel + t.zoomLevels.step), Br.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...it
              })
            }), c = r(async () => {
              t.zoomTo(t.currZoomLevel - t.zoomLevels.step), Br.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...it
              })
            }), u = r(async () => {
              t.zoomAndPanToInitial(), Br.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...it
              })
            }), f = r(async () => {
              if (t.closing) return;
              t.toggleControls();
              const e = t.getControlsOpacity(),
                r = 1 === e ? "auto" : "none";
              Br.os.to([a.current], {
                opacity: e,
                [dt]: r,
                ...it
              })
            }), p = r(async () => {
              Br.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...it
              })
            }), v = (0, S.useCallback)(() => {
              o.current && n.current && (Br.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...it
              }), Br.os.set([o.current, i.current], {
                ...t.getUpdatedContentSize(),
                ...it
              }), Br.os.set([s.current], {
                width: t.panAreaSize.w,
                height: t.panAreaSize.h
              }))
            }, []);
            return (0, S.useEffect)(() => (t.addEventListener("close", e), t.addEventListener("animate", p), t.addEventListener("toggle-controls", f), t.addEventListener("resize", v), window.addEventListener("resize", t.resize.bind(t)), () => {
              t.removeEventListener("close", e), t.removeEventListener("animate", p), t.removeEventListener("toggle-controls", f), t.removeEventListener("resize", v), window.removeEventListener("resize", t.resize.bind(t))
            }), []), {
              zoomIn: l,
              zoomOut: c,
              zoomTo: d,
              resetZoom: u,
              toggleControls: f,
              update: p
            }
          })({
            close: n
          }), u = (0, z.v6)(e, {
            open: r,
            onOpenChange: t
          });
          return (0, R.jsx)(Fa.Provider, {
            value: {
              update: a,
              openAnim: o,
              close: n,
              zoomIn: s,
              zoomOut: i,
              zoomTo: d,
              resetZoom: l,
              toggleControls: c,
              onOpenChange: t
            },
            children: (0, R.jsx)(ba, {
              ...u
            })
          })
        },
        Xa = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const n = (0, lt.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, S.useContext)(Ma),
            d = (0, fe.UP)(a, o),
            l = (0, z.v6)(t, {
              "data-testid": e,
              "aria-label": n.formatMessage(jt.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, R.jsx)(ha, {
            ref: d,
            ...l,
            children: (0, R.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, R.jsx)(pe.xV, {
                children: r
              })
            })
          })
        }),
        Ga = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            thumbnailRef: n
          } = (0, S.useContext)(Ma), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = r ? pe.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ka = (0, S.forwardRef)(function({
          asChild: e,
          ...r
        }, t) {
          const {
            openIconRef: o
          } = (0, S.useContext)(Ma), n = (0, fe.UP)(o, t), a = (0, z.v6)(r, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? pe.DX : Ve.Maximize2;
          return (0, R.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Za = ({
          ...e
        }) => (0, R.jsx)(_a, {
          ...e
        }),
        Ha = (0, S.forwardRef)(function({
          testId: e,
          ...r
        }, t) {
          const {
            overlayRef: o
          } = (0, S.useContext)(Ma), n = (0, fe.UP)(o, t), a = (0, z.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, R.jsx)(Ca, {
            ref: n,
            ...a
          })
        }),
        Wa = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            openAnim: n
          } = (0, S.useContext)(Fa), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, S.useContext)(Ma), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, S.useContext)(Ma), [r, t] = (0, S.useState)(e.getCursor()), o = (0, S.useCallback)(() => {
              t(e.getCursor())
            }, []);
            return (0, S.useEffect)(() => (e.addEventListener("zoom", o), () => {
              e.removeEventListener("zoom", o)
            }), [o]), {
              cursor: r
            }
          })(), l = [ge.tokens, ge.typography, ge.grid, _t("dark")].join(" ");
          const c = (0, fe.UP)(a, o),
            u = (0, z.v6)(t, {
              "data-testid": e,
              onOpenAutoFocus: n,
              onCloseAutoFocus: e => ((e, r) => {
                e?.preventDefault(), r.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, Ae.clsx)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, R.jsxs)(Na, {
            ref: c,
            ...u,
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)(Ia, {
                children: s
              })
            }), r]
          })
        }),
        Ua = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            containerRef: n
          } = (0, S.useContext)(Ma);
          (() => {
            const {
              contextSafe: e
            } = (0, Xr.L)(), {
              toggleControls: r
            } = (0, S.useContext)(Fa), {
              containerRef: t,
              zoomPanRef: o,
              overlayRef: n,
              controlsRef: a,
              slide: s
            } = (0, S.useContext)(Ma), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Br.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...it
              }), Br.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...it
              }), Br.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...it
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Br.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...it
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Br.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...it
              }), Br.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...it
              }), Br.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...it
              })))
            }), c = (0, S.useCallback)(() => {
              s.controlsVisible || r()
            }, [, r]);
            (0, fe.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Gr.NH)({
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
          const a = (0, fe.UP)(n, o),
            s = (0, z.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, R.jsx)("div", {
            ref: a,
            ...s,
            children: (0, R.jsxs)($a, {
              children: [(0, R.jsx)(Ya, {}), r]
            })
          })
        }),
        $a = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            zoomPanRef: n
          } = (0, S.useContext)(Ma), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = r ? pe.DX : "div";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ya = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            placeholderRef: n
          } = (0, S.useContext)(Ma), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = r ? pe.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Qa = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            imageRef: n
          } = (0, S.useContext)(Ma), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = r ? pe.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ja = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            captionRef: n
          } = (0, S.useContext)(Ma), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = r ? pe.DX : "p";
          return (0, R.jsx)(Ea, {
            asChild: !0,
            children: (0, R.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        es = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            controlsRef: n
          } = (0, S.useContext)(Ma);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: r,
              zoomOut: t,
              resetZoom: o,
              close: n
            } = (0, S.useContext)(Fa);
            (0, Yr.vC)(["+", "=", "add", "plus"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Yr.vC)(["minus", "subtract"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Yr.vC)("r", o, {
              enabled: e,
              preventDefault: !0
            }), (0, Yr.vC)("esc", n, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, fe.UP)(n, o),
            s = (0, z.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = r ? pe.DX : "div";
          return (0, R.jsx)(Yr.Hb, {
            children: (0, R.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        rs = ({
          content: e,
          metadata: r,
          enabled: t = !0,
          children: o,
          ...n
        }) => {
          if (!t) return (0, R.jsx)(R.Fragment, {
            children: o
          });
          const a = (0, z.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, n);
          return (0, R.jsxs)(ln, {
            delayDuration: 0,
            children: [(0, R.jsx)(cn, {
              children: o
            }), (0, R.jsxs)(un, {
              ...a,
              children: [(0, R.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, r && (0, R.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: r
                })]
              }), (0, R.jsx)(fn, {})]
            })]
          })
        },
        ts = (0, S.forwardRef)(function({
          ...e
        }, r) {
          const t = (0, z.v6)(e, {
            isInline: !0
          });
          return (0, R.jsx)(Ot, {
            ref: r,
            ...t
          })
        }),
        os = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          children: o,
          ...n
        }, a) {
          const s = (0, lt.tz)(),
            {
              zoomRef: i
            } = (0, S.useContext)(Ma),
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
              } = (0, S.useContext)(Ma), {
                zoomIn: r,
                zoomOut: t,
                zoomTo: o
              } = (0, S.useContext)(Fa), [n, a] = (0, S.useState)(!1), [s, i] = (0, S.useState)(!1), [d, l] = (0, S.useState)(0), [c, u] = (0, S.useState)(0), [f, p] = (0, S.useState)(0), v = (0, S.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), y = (0, S.useCallback)(([e]) => {
                o(e / 100)
              }, [o]);
              return (0, S.useEffect)(() => (e.addEventListener("zoom", v), () => {
                e.removeEventListener("zoom", v)
              }), [v]), {
                zoomTo: y,
                zoomIn: r,
                zoomOut: t,
                canZoomIn: n,
                canZoomOut: s,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            b = (0, fe.UP)(i, a),
            m = (0, z.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            h = r ? pe.DX : "div";
          return (0, R.jsxs)(h, {
            ref: b,
            ...m,
            children: [(0, R.jsx)(rs, {
              side: "left",
              enabled: t,
              content: s.formatMessage(jt.ZoomInButtonLabel),
              metadata: s.formatMessage(jt.ZoomInButtonTooltip, {
                shortcut: (0, R.jsx)(ts, {
                  shortcut: "+"
                })
              }),
              children: (0, R.jsx)(ar, {
                label: s.formatMessage(jt.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: at({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, R.jsxs)(Sn, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, R.jsx)(Ln, {
                className: "foundry_1a74xwbu",
                children: (0, R.jsx)(Vn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, R.jsx)(rs, {
                side: "left",
                enabled: t,
                content: s.formatMessage(jt.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, R.jsx)(Zn, {
                  className: "foundry_1a74xwbw",
                  children: (0, R.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, R.jsx)(rs, {
              side: "left",
              enabled: t,
              content: s.formatMessage(jt.ZoomOutButtonLabel),
              metadata: s.formatMessage(jt.ZoomOutButtonTooltip, {
                shortcut: (0, R.jsx)(ts, {
                  shortcut: "-"
                })
              }),
              children: (0, R.jsx)(ar, {
                label: s.formatMessage(jt.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: at({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, R.jsx)(pe.xV, {
              children: o
            })]
          })
        }),
        ns = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          ...o
        }, n) {
          const a = (0, lt.tz)(),
            {
              closeRef: s
            } = (0, S.useContext)(Ma),
            i = (0, fe.UP)(s, n),
            d = (0, z.v6)(o, {
              "data-testid": e,
              className: nt({
                styled: !r
              })
            }),
            l = r ? (0, R.jsx)(pe.DX, {
              ref: i,
              ...d
            }) : (0, R.jsx)(ar, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(jt.CloseButtonLabel)
            });
          return (0, R.jsx)(rs, {
            side: "right",
            enabled: t,
            content: a.formatMessage(jt.CloseButtonLabel),
            metadata: a.formatMessage(jt.CloseButtonTooltip, {
              shortcut: (0, R.jsx)(ts, {
                shortcut: "Esc"
              })
            }),
            children: (0, R.jsx)(Aa, {
              asChild: !0,
              children: l
            })
          })
        }),
        as = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, lt.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: r
              } = (0, S.useContext)(Ma), {
                contextSafe: t
              } = (0, Xr.L)(), {
                resetZoom: o
              } = (0, S.useContext)(Fa), [n, a] = (0, S.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = t(e => {
                Br.os.to([r.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...it
                })
              }), i = (0, S.useCallback)(() => {
                const r = e.currZoomLevel !== e.zoomLevels.initial;
                a(r), s(r)
              }, [a]);
              return (0, S.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !n,
                onPress: o,
                "aria-hidden": !n
              }
            })(),
            {
              resetRef: s
            } = (0, S.useContext)(Ma),
            i = (0, fe.UP)(s, o),
            d = (0, z.v6)(t, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, R.jsx)(rs, {
            side: "left",
            enabled: r,
            content: n.formatMessage(jt.ResetZoomButtonLabel),
            metadata: n.formatMessage(jt.ResetZoomButtonTooltip, {
              shortcut: (0, R.jsx)(ts, {
                shortcut: "R"
              })
            }),
            children: (0, R.jsx)(ar, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: n.formatMessage(jt.ResetZoomButtonLabel)
            })
          })
        }),
        ss = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, lt.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, S.useContext)(Ma),
            i = (0, fe.UP)(a, o),
            d = (0, z.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, R.jsx)(rs, {
            side: "left",
            enabled: r,
            content: n.formatMessage(jt.DownloadButtonTooltip),
            children: (0, R.jsx)(ar, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: n.formatMessage(jt.DownloadButtonTooltip),
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
        is = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var ds = t(98905);

      function ls(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function cs(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function us(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? cs(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ls(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : cs(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function fs(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ps = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        vs = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = us(us({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ps(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fs(e.variantClassNames, e => fs(e, e => e.split(" ")[0]))
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
        ys = t(20357);
      const bs = (0, S.createContext)(null);

      function ms() {
        const e = (0, S.useContext)(bs);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const hs = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          descriptionId: o = "",
          errorId: n = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, z.v6)({
              className: vs({
                status: a
              }),
              "data-testid": r
            }, s),
            l = t ? pe.DX : "div";
          return (0, R.jsx)(bs.Provider, {
            value: {
              descriptionId: o,
              errorId: n,
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
        gs = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const {
            status: n
          } = ms(), a = (0, z.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, t), s = {
            success: ys.Check,
            invalid: ys.X,
            neutral: ys.TriangleAlert
          }, i = r ? pe.DX : s[n];
          return (0, R.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        ws = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            errorId: s
          } = ms(), i = (0, z.v6)({
            "data-testid": r,
            id: s || a
          }, o), d = t ? pe.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        });
      var xs = "ScrollArea",
        [_s, js] = (0, Dt.A)(xs),
        [Cs, Os] = _s(xs),
        Ps = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            type: o = "hover",
            dir: n,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = S.useState(null), [l, c] = S.useState(null), [u, f] = S.useState(null), [p, v] = S.useState(null), [y, b] = S.useState(null), [m, h] = S.useState(0), [g, w] = S.useState(0), [x, _] = S.useState(!1), [j, C] = S.useState(!1), O = (0, St.s)(r, e => d(e)), P = (0, yn.jH)(n);
          return (0, R.jsx)(Cs, {
            scope: t,
            type: o,
            dir: P,
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
            onScrollbarYChange: b,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: h,
            onCornerHeightChange: w,
            children: (0, R.jsx)(kt.sG.div, {
              dir: P,
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
      Ps.displayName = xs;
      var Rs = "ScrollAreaViewport",
        Ns = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            children: o,
            nonce: n,
            ...a
          } = e, s = Os(Rs, t), i = S.useRef(null), d = (0, St.s)(r, i, s.onViewportChange);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Ss, {
              nonce: n
            }), (0, R.jsx)(kt.sG.div, {
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
                children: o
              })
            })]
          })
        });
      Ns.displayName = Rs;
      var Ss = S.memo(({
          nonce: e
        }) => (0, R.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, r) => e.nonce === r.nonce),
        Ds = "ScrollAreaScrollbar",
        ks = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Os(Ds, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = n, i = "horizontal" === e.orientation;
          return S.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === n.type ? (0, R.jsx)(zs, {
            ...o,
            ref: r,
            forceMount: t
          }) : "scroll" === n.type ? (0, R.jsx)(Is, {
            ...o,
            ref: r,
            forceMount: t
          }) : "auto" === n.type ? (0, R.jsx)(Ts, {
            ...o,
            ref: r,
            forceMount: t
          }) : "always" === n.type ? (0, R.jsx)(Es, {
            ...o,
            ref: r,
            "data-state": "visible"
          }) : null
        });
      ks.displayName = Ds;
      var zs = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Os(Ds, e.__scopeScrollArea), [a, s] = S.useState(!1);
          return S.useEffect(() => {
            const e = n.scrollArea;
            let r = 0;
            if (e) {
              const t = () => {
                  window.clearTimeout(r), s(!0)
                },
                o = () => {
                  r = window.setTimeout(() => s(!1), n.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", t), e.addEventListener("pointerleave", o), () => {
                window.clearTimeout(r), e.removeEventListener("pointerenter", t), e.removeEventListener("pointerleave", o)
              }
            }
          }, [n.scrollArea, n.scrollHideDelay]), (0, R.jsx)(wo, {
            present: t || a,
            children: (0, R.jsx)(Ts, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: r
            })
          })
        }),
        Is = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Os(Ds, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = ei(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, S.useReducer((e, r) => l[e][r] ?? e, "hidden"));
          var l;
          return S.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), n.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, n.scrollHideDelay, d]), S.useEffect(() => {
            const e = n.viewport,
              r = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let t = e[r];
              const o = () => {
                const o = e[r];
                t !== o && (d("SCROLL"), s()), t = o
              };
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }
          }, [n.viewport, a, d, s]), (0, R.jsx)(wo, {
            present: t || "hidden" !== i,
            children: (0, R.jsx)(Es, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...o,
              ref: r,
              onPointerEnter: (0, Nt.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, Nt.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Ts = S.forwardRef((e, r) => {
          const t = Os(Ds, e.__scopeScrollArea),
            {
              forceMount: o,
              ...n
            } = e,
            [a, s] = S.useState(!1),
            i = "horizontal" === e.orientation,
            d = ei(() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(i ? e : r)
              }
            }, 10);
          return ri(t.viewport, d), ri(t.content, d), (0, R.jsx)(wo, {
            present: o || a,
            children: (0, R.jsx)(Es, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: r
            })
          })
        }),
        Es = S.forwardRef((e, r) => {
          const {
            orientation: t = "vertical",
            ...o
          } = e, n = Os(Ds, e.__scopeScrollArea), a = S.useRef(null), s = S.useRef(0), [i, d] = S.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Ws(i.viewport, i.content), c = {
            ...o,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function u(e, r) {
            return function(e, r, t, o = "ltr") {
              const n = Us(t),
                a = r || n / 2,
                s = n - a,
                i = t.scrollbar.paddingStart + a,
                d = t.scrollbar.size - t.scrollbar.paddingEnd - s,
                l = t.content - t.viewport;
              return Ys([i, d], "ltr" === o ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, r)
          }
          return "horizontal" === t ? (0, R.jsx)(Ls, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = $s(n.viewport.scrollLeft, i, n.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              n.viewport && (n.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              n.viewport && (n.viewport.scrollLeft = u(e, n.dir))
            }
          }) : "vertical" === t ? (0, R.jsx)(As, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = $s(n.viewport.scrollTop, i);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              n.viewport && (n.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              n.viewport && (n.viewport.scrollTop = u(e))
            }
          }) : null
        }),
        Ls = S.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = Os(Ds, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, St.s)(r, d, a.onScrollbarXChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(qs, {
            "data-orientation": "horizontal",
            ...n,
            ref: l,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Us(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.x),
            onDragScroll: r => e.onDragScroll(r.x),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollLeft + r.deltaX;
                e.onWheelScroll(o), Qs(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Hs(s.paddingLeft),
                  paddingEnd: Hs(s.paddingRight)
                }
              })
            }
          })
        }),
        As = S.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = Os(Ds, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, St.s)(r, d, a.onScrollbarYChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(qs, {
            "data-orientation": "vertical",
            ...n,
            ref: l,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Us(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.y),
            onDragScroll: r => e.onDragScroll(r.y),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollTop + r.deltaY;
                e.onWheelScroll(o), Qs(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Hs(s.paddingTop),
                  paddingEnd: Hs(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Vs, Ms] = _s(Ds),
        qs = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            sizes: o,
            hasThumb: n,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: i,
            onThumbPositionChange: d,
            onDragScroll: l,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = Os(Ds, t), [v, y] = S.useState(null), b = (0, St.s)(r, e => y(e)), m = S.useRef(null), h = S.useRef(""), g = p.viewport, w = o.content - o.viewport, x = (0, zt.c)(c), _ = (0, zt.c)(d), j = ei(u, 10);

          function C(e) {
            if (m.current) {
              const r = e.clientX - m.current.left,
                t = e.clientY - m.current.top;
              l({
                x: r,
                y: t
              })
            }
          }
          return S.useEffect(() => {
            const e = e => {
              const r = e.target,
                t = v?.contains(r);
              t && x(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, v, w, x]), S.useEffect(_, [o, _]), ri(v, j), ri(p.content, j), (0, R.jsx)(Vs, {
            scope: t,
            scrollbar: v,
            hasThumb: n,
            onThumbChange: (0, zt.c)(a),
            onThumbPointerUp: (0, zt.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, zt.c)(i),
            children: (0, R.jsx)(kt.sG.div, {
              ...f,
              ref: b,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Nt.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = v.getBoundingClientRect(), h.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, Nt.mK)(e.onPointerMove, C),
              onPointerUp: (0, Nt.mK)(e.onPointerUp, e => {
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = h.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        Fs = "ScrollAreaThumb",
        Bs = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ms(Fs, e.__scopeScrollArea);
          return (0, R.jsx)(wo, {
            present: t || n.hasThumb,
            children: (0, R.jsx)(Xs, {
              ref: r,
              ...o
            })
          })
        }),
        Xs = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            style: o,
            ...n
          } = e, a = Os(Fs, t), s = Ms(Fs, t), {
            onThumbPositionChange: i
          } = s, d = (0, St.s)(r, e => s.onThumbChange(e)), l = S.useRef(void 0), c = ei(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return S.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const r = () => {
                if (c(), !l.current) {
                  const r = Js(e, i);
                  l.current = r, i()
                }
              };
              return i(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [a.viewport, c, i]), (0, R.jsx)(kt.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...n,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: (0, Nt.mK)(e.onPointerDownCapture, e => {
              const r = e.target.getBoundingClientRect(),
                t = e.clientX - r.left,
                o = e.clientY - r.top;
              s.onThumbPointerDown({
                x: t,
                y: o
              })
            }),
            onPointerUp: (0, Nt.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Bs.displayName = Fs;
      var Gs = "ScrollAreaCorner",
        Ks = S.forwardRef((e, r) => {
          const t = Os(Gs, e.__scopeScrollArea),
            o = Boolean(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && o ? (0, R.jsx)(Zs, {
            ...e,
            ref: r
          }) : null
        });
      Ks.displayName = Gs;
      var Zs = S.forwardRef((e, r) => {
        const {
          __scopeScrollArea: t,
          ...o
        } = e, n = Os(Gs, t), [a, s] = S.useState(0), [i, d] = S.useState(0), l = Boolean(a && i);
        return ri(n.scrollbarX, () => {
          const e = n.scrollbarX?.offsetHeight || 0;
          n.onCornerHeightChange(e), d(e)
        }), ri(n.scrollbarY, () => {
          const e = n.scrollbarY?.offsetWidth || 0;
          n.onCornerWidthChange(e), s(e)
        }), l ? (0, R.jsx)(kt.sG.div, {
          ...o,
          ref: r,
          style: {
            width: a,
            height: i,
            position: "absolute",
            right: "ltr" === n.dir ? 0 : void 0,
            left: "rtl" === n.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function Hs(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Ws(e, r) {
        const t = e / r;
        return isNaN(t) ? 0 : t
      }

      function Us(e) {
        const r = Ws(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          o = (e.scrollbar.size - t) * r;
        return Math.max(o, 18)
      }

      function $s(e, r, t = "ltr") {
        const o = Us(r),
          n = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
          a = r.scrollbar.size - n,
          s = r.content - r.viewport,
          i = a - o,
          d = "ltr" === t ? [0, s] : [-1 * s, 0],
          l = (0, vn.q)(e, d);
        return Ys([0, s], [0, i])(l)
      }

      function Ys(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function Qs(e, r) {
        return e > 0 && e < r
      }
      var Js = (e, r = () => {}) => {
        let t = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          o = 0;
        return function n() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = t.left !== a.left,
            i = t.top !== a.top;
          (s || i) && r(), t = a, o = window.requestAnimationFrame(n)
        }(), () => window.cancelAnimationFrame(o)
      };

      function ei(e, r) {
        const t = (0, zt.c)(e),
          o = S.useRef(0);
        return S.useEffect(() => () => window.clearTimeout(o.current), []), S.useCallback(() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(t, r)
        }, [t, r])
      }

      function ri(e, r) {
        const t = (0, zt.c)(r);
        (0, Ht.N)(() => {
          let r = 0;
          if (e) {
            const o = new ResizeObserver(() => {
              cancelAnimationFrame(r), r = window.requestAnimationFrame(t)
            });
            return o.observe(e), () => {
              window.cancelAnimationFrame(r), o.unobserve(e)
            }
          }
        }, [e, t])
      }
      var ti = Ps,
        oi = Ns,
        ni = ks,
        ai = Bs,
        si = Ks,
        ii = [" ", "Enter", "ArrowUp", "ArrowDown"],
        di = [" ", "Enter"],
        li = "Select",
        [ci, ui, fi] = mn(li),
        [pi, vi] = (0, Dt.A)(li, [fi, Yt]),
        yi = Yt(),
        [bi, mi] = pi(li),
        [hi, gi] = pi(li);

      function wi(e) {
        const {
          __scopeSelect: r,
          children: t,
          open: o,
          defaultOpen: n,
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
        } = e, b = yi(r), [m, h] = S.useState(null), [g, w] = S.useState(null), [x, _] = S.useState(!1), j = (0, yn.jH)(l), [C, O] = (0, Co.i)({
          prop: o,
          defaultProp: n ?? !1,
          onChange: a,
          caller: li
        }), [P, N] = (0, Co.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: li
        }), D = S.useRef(null), k = !m || !!v || !!m.closest("form"), [z, I] = S.useState(new Set), T = (0, Bt.B)(), E = Array.from(z).map(e => e.props.value).join(";"), L = S.useCallback(e => {
          I(r => new Set(r).add(e))
        }, []), A = S.useCallback(e => {
          I(r => {
            const t = new Set(r);
            return t.delete(e), t
          })
        }, []), V = {
          required: p,
          trigger: m,
          onTriggerChange: h,
          valueNode: g,
          onValueNodeChange: w,
          valueNodeHasChildren: x,
          onValueNodeHasChildrenChange: _,
          contentId: T,
          value: P,
          onValueChange: N,
          open: C,
          onOpenChange: O,
          dir: j,
          triggerPointerDownPosRef: D,
          disabled: f,
          name: c,
          autoComplete: u,
          form: v,
          nativeOptions: z,
          nativeSelectKey: E,
          isFormControl: k
        };
        return (0, R.jsx)(vo, {
          ...b,
          children: (0, R.jsx)(bi, {
            scope: r,
            ...V,
            children: (0, R.jsx)(ci.Provider, {
              scope: r,
              children: (0, R.jsx)(hi, {
                scope: r,
                onNativeOptionAdd: L,
                onNativeOptionRemove: A,
                children: dd(y) ? y(V) : t
              })
            })
          })
        })
      }
      wi.displayName = "SelectProvider";
      var xi = e => {
        const {
          __scopeSelect: r,
          children: t,
          ...o
        } = e;
        return (0, R.jsx)(wi, {
          __scopeSelect: r,
          ...o,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, R.jsxs)(R.Fragment, {
            children: [t, e ? (0, R.jsx)(id, {
              __scopeSelect: r
            }) : null]
          })
        })
      };
      xi.displayName = li;
      var _i = "SelectTrigger",
        ji = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            disabled: o = !1,
            ...n
          } = e, a = yi(t), s = mi(_i, t), i = s.disabled || o, d = (0, St.s)(r, s.onTriggerChange), l = ui(t), c = S.useRef("touch"), [u, f, p] = cd(e => {
            const r = l().filter(e => !e.disabled),
              t = r.find(e => e.value === s.value),
              o = ud(r, e, t);
            void 0 !== o && s.onValueChange(o.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, R.jsx)(yo, {
            asChild: !0,
            ...a,
            children: (0, R.jsx)(kt.sG.button, {
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
              "data-placeholder": ld(s.value) ? "" : void 0,
              ...n,
              ref: d,
              onClick: (0, Nt.mK)(n.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, Nt.mK)(n.onPointerDown, e => {
                c.current = e.pointerType;
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, Nt.mK)(n.onKeyDown, e => {
                const r = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), r && " " === e.key || ii.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      ji.displayName = _i;
      var Ci = "SelectValue",
        Oi = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = mi(Ci, t), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, St.s)(r, d.onValueNodeChange);
          (0, Ht.N)(() => {
            l(c)
          }, [l, c]);
          const f = ld(d.value);
          return (0, R.jsx)(kt.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, R.jsx)(S.Fragment, {
              children: f ? s : a
            }, f ? "placeholder" : "value")
          })
        });
      Oi.displayName = Ci;
      var Pi = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          ...n
        } = e;
        return (0, R.jsx)(kt.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          children: o || "▼"
        })
      });
      Pi.displayName = "SelectIcon";
      var Ri = "SelectPortal",
        [Ni, Si] = pi(Ri, {
          forceMount: void 0
        }),
        Di = e => {
          const {
            __scopeSelect: r,
            forceMount: t,
            ...o
          } = e;
          return (0, R.jsx)(Ni, {
            scope: e.__scopeSelect,
            forceMount: t,
            children: (0, R.jsx)(go, {
              asChild: !0,
              ...o
            })
          })
        };
      Di.displayName = Ri;
      var ki = "SelectContent",
        zi = S.forwardRef((e, r) => {
          const t = Si(ki, e.__scopeSelect),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = mi(ki, e.__scopeSelect),
            [s, i] = S.useState();
          return (0, Ht.N)(() => {
            i(new DocumentFragment)
          }, []), (0, R.jsx)(wo, {
            present: o || a.open,
            children: ({
              present: e
            }) => e ? (0, R.jsx)(Vi, {
              ...n,
              ref: r
            }) : (0, R.jsx)(Ii, {
              ...n,
              fragment: s
            })
          })
        });
      zi.displayName = ki;
      var Ii = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          fragment: n
        } = e;
        return n ? ho.createPortal((0, R.jsx)(Ei, {
          scope: t,
          children: (0, R.jsx)(ci.Slot, {
            scope: t,
            children: (0, R.jsx)("div", {
              ref: r,
              children: o
            })
          })
        }), n) : null
      });
      Ii.displayName = "SelectContentFragment";
      var Ti = 10,
        [Ei, Li] = pi(ki),
        Ai = (0, jo.TL)("SelectContent.RemoveScroll"),
        Vi = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t
          } = e, {
            position: o = "item-aligned",
            onCloseAutoFocus: n,
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
            ...m
          } = e, h = mi(ki, t), [g, w] = S.useState(null), [x, _] = S.useState(null), j = (0, St.s)(r, e => w(e)), [C, O] = S.useState(null), [P, N] = S.useState(null), D = ui(t), [k, z] = S.useState(!1), I = S.useRef(!1);
          S.useEffect(() => {
            if (g) return (0, ca.Eq)(g)
          }, [g]), (0, da.Oh)();
          const T = S.useCallback(e => {
              const [r, ...t] = D().map(e => e.ref.current), [o] = t.slice(-1), n = document.activeElement;
              for (const t of e) {
                if (t === n) return;
                if (t?.scrollIntoView({
                    block: "nearest"
                  }), t === r && x && (x.scrollTop = 0), t === o && x && (x.scrollTop = x.scrollHeight), t?.focus(), document.activeElement !== n) return
              }
            }, [D, x]),
            E = S.useCallback(() => T([C, g]), [T, C, g]);
          S.useEffect(() => {
            k && E()
          }, [k, E]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = h;
          S.useEffect(() => {
            if (g) {
              let e = {
                x: 0,
                y: 0
              };
              const r = r => {
                  e = {
                    x: Math.abs(Math.round(r.pageX) - (A.current?.x ?? 0)),
                    y: Math.abs(Math.round(r.pageY) - (A.current?.y ?? 0))
                  }
                },
                t = t => {
                  e.x <= 10 && e.y <= 10 ? t.preventDefault() : t.composedPath().includes(g) || L(!1), document.removeEventListener("pointermove", r), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", r), document.addEventListener("pointerup", t, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", r), document.removeEventListener("pointerup", t, {
                  capture: !0
                })
              }
            }
          }, [g, L, A]), S.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [V, M] = cd(e => {
            const r = D().filter(e => !e.disabled),
              t = r.find(e => e.ref.current === document.activeElement),
              o = ud(r, e, t);
            o && setTimeout(() => o.ref.current?.focus())
          }), q = S.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== h.value && h.value === r || o) && (O(e), o && (I.current = !0))
          }, [h.value]), F = S.useCallback(() => g?.focus(), [g]), B = S.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== h.value && h.value === r || o) && N(e)
          }, [h.value]), X = "popper" === o ? qi : Mi, G = X === qi ? {
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
          return (0, R.jsx)(Ei, {
            scope: t,
            content: g,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: q,
            selectedItem: C,
            onItemLeave: F,
            itemTextRefCallback: B,
            focusSelectedItem: E,
            selectedItemText: P,
            position: o,
            isPositioned: k,
            searchRef: V,
            children: (0, R.jsx)(la.A, {
              as: Ai,
              allowPinchZoom: !0,
              children: (0, R.jsx)(ra, {
                asChild: !0,
                trapped: h.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Nt.mK)(n, e => {
                  h.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, R.jsx)(Lt, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => h.onOpenChange(!1),
                  children: (0, R.jsx)(X, {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...m,
                    ...G,
                    onPlaced: () => z(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: (0, Nt.mK)(m.onKeyDown, e => {
                      const r = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), r || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const r = D().filter(e => !e.disabled);
                        let t = r.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const r = e.target,
                            o = t.indexOf(r);
                          t = t.slice(o + 1)
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
      Vi.displayName = "SelectContentImpl";
      var Mi = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onPlaced: o,
          ...n
        } = e, a = mi(ki, t), s = Li(ki, t), [i, d] = S.useState(null), [l, c] = S.useState(null), u = (0, St.s)(r, e => c(e)), f = ui(t), p = S.useRef(!1), v = S.useRef(!0), {
          viewport: y,
          selectedItem: b,
          selectedItemText: m,
          focusSelectedItem: h
        } = s, g = S.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && y && b && m) {
            const e = a.trigger.getBoundingClientRect(),
              r = l.getBoundingClientRect(),
              t = a.valueNode.getBoundingClientRect(),
              n = m.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const o = n.left - r.left,
                a = t.left - o,
                s = e.left - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - Ti,
                u = (0, vn.q)(a, [Ti, Math.max(Ti, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const o = r.right - n.right,
                a = window.innerWidth - t.right - o,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - Ti,
                u = (0, vn.q)(a, [Ti, Math.max(Ti, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * Ti,
              c = y.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              h = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = v + h + c + parseInt(u.paddingBottom, 10) + g,
              x = Math.min(5 * b.offsetHeight, w),
              _ = window.getComputedStyle(y),
              j = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              O = e.top + e.height / 2 - Ti,
              P = d - O,
              R = b.offsetHeight / 2,
              N = v + h + (b.offsetTop + R),
              S = w - N;
            if (N <= O) {
              const e = s.length > 0 && b === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const r = l.clientHeight - y.offsetTop - y.offsetHeight,
                t = N + Math.max(P, R + (e ? C : 0) + r + g);
              i.style.height = t + "px"
            } else {
              const e = s.length > 0 && b === s[0].ref.current;
              i.style.top = "0px";
              const r = Math.max(O, v + y.offsetTop + (e ? j : 0) + R) + S;
              i.style.height = r + "px", y.scrollTop = N - O + y.offsetTop
            }
            i.style.margin = `${Ti}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", o?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, y, b, m, a.dir, o]);
        (0, Ht.N)(() => g(), [g]);
        const [w, x] = S.useState();
        (0, Ht.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = S.useCallback(e => {
          e && !0 === v.current && (g(), h?.(), v.current = !1)
        }, [g, h]);
        return (0, R.jsx)(Fi, {
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
            children: (0, R.jsx)(kt.sG.div, {
              ...n,
              ref: u,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...n.style
              }
            })
          })
        })
      });
      Mi.displayName = "SelectItemAlignedPosition";
      var qi = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          align: o = "start",
          collisionPadding: n = Ti,
          ...a
        } = e, s = yi(t);
        return (0, R.jsx)(bo, {
          ...s,
          ...a,
          ref: r,
          align: o,
          collisionPadding: n,
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
      qi.displayName = "SelectPopperPosition";
      var [Fi, Bi] = pi(ki, {}), Xi = "SelectViewport", Gi = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          nonce: o,
          ...n
        } = e, a = Li(Xi, t), s = Bi(Xi, t), i = (0, St.s)(r, a.onViewportChange), d = S.useRef(0);
        return (0, R.jsxs)(R.Fragment, {
          children: [(0, R.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, R.jsx)(ci.Slot, {
            scope: t,
            children: (0, R.jsx)(kt.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...n,
              ref: i,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...n.style
              },
              onScroll: (0, Nt.mK)(n.onScroll, e => {
                const r = e.currentTarget,
                  {
                    contentWrapper: t,
                    shouldExpandOnScrollRef: o
                  } = s;
                if (o?.current && t) {
                  const e = Math.abs(d.current - r.scrollTop);
                  if (e > 0) {
                    const o = window.innerHeight - 2 * Ti,
                      n = parseFloat(t.style.minHeight),
                      a = parseFloat(t.style.height),
                      s = Math.max(n, a);
                    if (s < o) {
                      const n = s + e,
                        a = Math.min(o, n),
                        i = n - a;
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
      Gi.displayName = Xi;
      var Ki = "SelectGroup",
        [Zi, Hi] = pi(Ki);
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = (0, Bt.B)();
        return (0, R.jsx)(Zi, {
          scope: t,
          id: n,
          children: (0, R.jsx)(kt.sG.div, {
            role: "group",
            "aria-labelledby": n,
            ...o,
            ref: r
          })
        })
      }).displayName = Ki;
      var Wi = "SelectLabel";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = Hi(Wi, t);
        return (0, R.jsx)(kt.sG.div, {
          id: n.id,
          ...o,
          ref: r
        })
      }).displayName = Wi;
      var Ui = "SelectItem",
        [$i, Yi] = pi(Ui),
        Qi = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            value: o,
            disabled: n = !1,
            textValue: a,
            ...s
          } = e, i = mi(Ui, t), d = Li(Ui, t), l = i.value === o, [c, u] = S.useState(a ?? ""), [f, p] = S.useState(!1), v = (0, St.s)(r, e => d.itemRefCallback?.(e, o, n)), y = (0, Bt.B)(), b = S.useRef("touch"), m = () => {
            n || (i.onValueChange(o), i.onOpenChange(!1))
          };
          return (0, R.jsx)($i, {
            scope: t,
            value: o,
            disabled: n,
            textId: y,
            isSelected: l,
            onItemTextChange: S.useCallback(e => {
              u(r => r || (e?.textContent ?? "").trim())
            }, []),
            children: (0, R.jsx)(ci.ItemSlot, {
              scope: t,
              value: o,
              disabled: n,
              textValue: c,
              children: (0, R.jsx)(kt.sG.div, {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": n || void 0,
                "data-disabled": n ? "" : void 0,
                tabIndex: n ? void 0 : -1,
                ...s,
                ref: v,
                onFocus: (0, Nt.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Nt.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Nt.mK)(s.onClick, () => {
                  "mouse" !== b.current && m()
                }),
                onPointerUp: (0, Nt.mK)(s.onPointerUp, () => {
                  "mouse" === b.current && m()
                }),
                onPointerDown: (0, Nt.mK)(s.onPointerDown, e => {
                  b.current = e.pointerType
                }),
                onPointerMove: (0, Nt.mK)(s.onPointerMove, e => {
                  b.current = e.pointerType, n ? d.onItemLeave?.() : "mouse" === b.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Nt.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, Nt.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (di.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Qi.displayName = Ui;
      var Ji = "SelectItemText",
        ed = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            ...a
          } = e, s = mi(Ji, t), i = Li(Ji, t), d = Yi(Ji, t), l = gi(Ji, t), [c, u] = S.useState(null), f = (0, St.s)(r, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, v = S.useMemo(() => (0, R.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: b
          } = l;
          return (0, Ht.N)(() => (y(v), () => b(v)), [y, b, v]), (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(kt.sG.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !ld(s.value) ? ho.createPortal(a.children, s.valueNode) : null]
          })
        });
      ed.displayName = Ji;
      var rd = "SelectItemIndicator";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return Yi(rd, t).isSelected ? (0, R.jsx)(kt.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: r
        }) : null
      }).displayName = rd;
      var td = "SelectScrollUpButton";
      S.forwardRef((e, r) => {
        const t = Li(td, e.__scopeSelect),
          o = Bi(td, e.__scopeSelect),
          [n, a] = S.useState(!1),
          s = (0, St.s)(r, o.onScrollButtonChange);
        return (0, Ht.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollTop > 0;
              a(e)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, R.jsx)(nd, {
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
      }).displayName = td;
      var od = "SelectScrollDownButton";
      S.forwardRef((e, r) => {
        const t = Li(od, e.__scopeSelect),
          o = Bi(od, e.__scopeSelect),
          [n, a] = S.useState(!1),
          s = (0, St.s)(r, o.onScrollButtonChange);
        return (0, Ht.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollHeight - r.clientHeight,
                t = Math.ceil(r.scrollTop) < e;
              a(t)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, R.jsx)(nd, {
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
      }).displayName = od;
      var nd = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onAutoScroll: o,
          ...n
        } = e, a = Li("SelectScrollButton", t), s = S.useRef(null), i = ui(t), d = S.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return S.useEffect(() => () => d(), [d]), (0, Ht.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, R.jsx)(kt.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          style: {
            flexShrink: 0,
            ...n.style
          },
          onPointerDown: (0, Nt.mK)(n.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerMove: (0, Nt.mK)(n.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerLeave: (0, Nt.mK)(n.onPointerLeave, () => {
            d()
          })
        })
      });
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return (0, R.jsx)(kt.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: r
        })
      }).displayName = "SelectSeparator";
      var ad = "SelectArrow";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = yi(t);
        return "popper" === Li(ad, t).position ? (0, R.jsx)(mo, {
          ...n,
          ...o,
          ref: r
        }) : null
      }).displayName = ad;
      var sd = "SelectBubbleInput",
        id = S.forwardRef(({
          __scopeSelect: e,
          ...r
        }, t) => {
          const o = mi(sd, e),
            {
              value: n,
              onValueChange: a,
              required: s,
              disabled: i,
              name: d,
              autoComplete: l,
              form: c
            } = o,
            {
              nativeOptions: u,
              nativeSelectKey: f
            } = o,
            p = S.useRef(null),
            v = (0, St.s)(t, p),
            y = n ?? "",
            b = (0, bn.Z)(y),
            m = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return S.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const r = window.HTMLSelectElement.prototype,
              t = Object.getOwnPropertyDescriptor(r, "value").set;
            if (b !== y && t) {
              const r = new Event("change", {
                bubbles: !0
              });
              t.call(e, y), e.dispatchEvent(r)
            }
          }, [b, y]), (0, R.jsxs)(kt.sG.select, {
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
              ...Oo.Qg,
              ...r.style
            },
            ref: v,
            defaultValue: y,
            children: [ld(n) && !m ? (0, R.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function dd(e) {
        return "function" == typeof e
      }

      function ld(e) {
        return "" === e || void 0 === e
      }

      function cd(e) {
        const r = (0, zt.c)(e),
          t = S.useRef(""),
          o = S.useRef(0),
          n = S.useCallback(e => {
            const n = t.current + e;
            r(n),
              function e(r) {
                t.current = r, window.clearTimeout(o.current), "" !== r && (o.current = window.setTimeout(() => e(""), 1e3))
              }(n)
          }, [r]),
          a = S.useCallback(() => {
            t.current = "", window.clearTimeout(o.current)
          }, []);
        return S.useEffect(() => () => window.clearTimeout(o.current), []), [t, n, a]
      }

      function ud(e, r, t) {
        const o = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
          n = t ? e.indexOf(t) : -1;
        let a = (s = e, i = Math.max(n, 0), s.map((e, r) => s[(i + r) % s.length]));
        var s, i;
        1 === o.length && (a = a.filter(e => e !== t));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
        return d !== t ? d : void 0
      }

      function fd(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function pd(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function vd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? pd(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = fd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pd(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function yd(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      id.displayName = sd;
      var bd = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        md = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = vd(vd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bd(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yd(e.variantClassNames, e => yd(e, e => e.split(" ")[0]))
            }
          }, r
        },
        hd = md({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gd = md({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wd = md({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xd = md({
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
        _d = md({
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
        jd = md({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Cd = (0, S.createContext)(null);

      function Od() {
        const e = (0, S.useContext)(Cd);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Pd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          isRequired: t,
          isDisabled: o,
          isReadOnly: n,
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
          const b = (0, S.useRef)(null),
            m = (0, fe.UP)(b, y),
            h = (0, S.useId)(),
            g = (0, S.useId)(),
            w = (0, S.useId)(),
            x = (0, S.useId)(),
            _ = (0, S.useId)(),
            j = (0, S.useId)(),
            C = (0, S.useRef)(null),
            O = (0, S.useRef)(null),
            P = (0, S.useRef)(null),
            [N = !1, D] = (0, fe.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            k = (0, z.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": r
            }, v);
          return (0, R.jsx)(Cd.Provider, {
            value: {
              labelId: h,
              errorId: g,
              descriptionId: w,
              triggerId: j,
              hintId: x,
              popoverId: _,
              labelRef: C,
              descriptionRef: O,
              hintRef: P,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: N,
              setIsOpen: D,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: t,
              isDisabled: o,
              isReadOnly: n,
              status: p,
              size: f
            },
            children: (0, R.jsx)(xi, {
              required: t,
              disabled: o,
              open: N,
              onOpenChange: () => D(!n && !N),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, R.jsx)("div", {
                ref: m,
                ...k,
                children: e
              })
            })
          })
        }),
        Rd = (0, S.forwardRef)(({
          hideDividers: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            popoverId: a
          } = Od(), s = (0, z.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: hd({
              hideDividers: e
            }),
            "data-testid": t
          }, o);
          return (0, R.jsx)(zi, {
            ...s,
            ref: n,
            children: (0, R.jsx)(Gi, {
              className: "foundry_uaq1gwn",
              children: r
            })
          })
        }),
        Nd = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(Gi, {
            ref: t,
            ...o
          })
        }),
        Sd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": r
          }, t);
          return (0, R.jsxs)(ti, {
            ...n,
            ref: o,
            children: [(0, R.jsx)(Nd, {
              asChild: !0,
              children: (0, R.jsx)(oi, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, R.jsx)(ni, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, R.jsx)(ai, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Dd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          "aria-labelledby": t,
          "aria-describedby": o,
          asChild: n,
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
            hintRef: m,
            isOpen: h,
            size: g
          } = Od(), {
            isPressed: w,
            pressProps: x
          } = (0, ds.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, j] = (0, S.useState)(!1), [C, O] = (0, S.useState)(!1);
          (0, S.useEffect)(() => {
            j(!!y.current || !!m.current), O(!!b.current)
          }, []);
          const P = (0, z.v6)({
              id: f,
              className: _d({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": _ ? (0, z.VW)(t, c, u) : t,
              "aria-describedby": C ? (0, z.VW)(o, v) : o,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": h ? "open" : "closed",
              "data-testid": r,
              "data-pressed": !!w
            }, (0, z.cJ)(x, "onKeyDown"), a),
            N = n ? pe.DX : ji;
          return (0, R.jsx)(N, {
            ...P,
            ref: s,
            children: e
          })
        }),
        kd = (0, S.forwardRef)(({
          placeholder: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": t
            }, o),
            s = r ? pe.DX : "span";
          return (0, R.jsx)(s, {
            ...a,
            ref: n,
            children: (0, R.jsx)(Oi, {
              placeholder: e
            })
          })
        }),
        zd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const {
            isDisabled: n,
            isReadOnly: a,
            isOpen: s
          } = Od(), i = s ? Ve.ChevronUp : Ve.ChevronDown, d = (0, z.v6)({
            asChild: !0,
            className: jd({
              isDisabled: a || n
            }),
            "data-testid": r
          }, t);
          return (0, R.jsx)(Pi, {
            ...d,
            ref: o,
            children: e || (0, R.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Id = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          hideRequiredAsterisk: n = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            isDisabled: d,
            labelId: l,
            labelRef: c,
            triggerId: u
          } = Od(), f = i && !n, p = (0, fe.UP)(c, s), v = (0, z.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: xd({
              showAsterisk: f,
              isDisabled: d
            })
          }, a), y = r ? pe.DX : "label";
          return (0, R.jsx)(pe.s6, {
            enabled: o,
            children: (0, R.jsx)(y, {
              ...v,
              ref: p,
              children: t
            })
          })
        }),
        Td = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = Od(), d = (0, fe.UP)(i, n), l = (0, z.v6)({
            className: gd({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), c = t ? pe.DX : "div";
          return (0, R.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        Ed = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = Od(), d = (0, fe.UP)(s, n), l = (0, z.v6)({
            className: wd({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, o), c = r ? pe.DX : "div";
          return (0, R.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        Ld = (0, S.forwardRef)(({
          children: e,
          value: r,
          isDisabled: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, fe.UP)(s, a),
            d = (0, z.v6)({
              value: r,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: t,
              "data-testid": o
            }, n);
          return (0, R.jsx)(Qi, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Ad = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": r
          }, t);
          return (0, R.jsx)(ed, {
            ref: o,
            asChild: !0,
            children: (0, R.jsx)("span", {
              ...n,
              children: e
            })
          })
        }),
        Vd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_uaq1gws",
            "data-testid": r
          }, t);
          return (0, R.jsx)(Pi, {
            asChild: !0,
            ...n,
            ref: o,
            children: e
          })
        }),
        Md = Di,
        qd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Od(), i = (0, z.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : hs;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Fd = gs,
        Bd = ws;
      var Xd = t(83588),
        Gd = t(56728);

      function Kd(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Zd(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Hd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Zd(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Kd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Zd(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Wd(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Ud = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        $d = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Hd(Hd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ud(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wd(e.variantClassNames, e => Wd(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Yd = $d({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qd = $d({
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
        Jd = $d({
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
        el = $d({
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
        rl = $d({
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
      const tl = (0, S.createContext)(null);

      function ol() {
        const e = (0, S.useContext)(tl);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const nl = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: o,
          children: n,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, z.v6)({
              "data-testid": t,
              className: "foundry_okz6z20"
            }, i),
            c = o ? pe.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)();
          return (0, R.jsx)(tl.Provider, {
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
              children: n
            })
          })
        }),
        al = (0, S.forwardRef)(({
          testId: e,
          onPress: r,
          onClick: t,
          "aria-labelledby": o,
          "aria-describedby": n,
          id: a,
          isSelected: s,
          defaultSelected: i,
          onSelectedChange: d,
          name: l,
          value: c,
          ...u
        }, f) => {
          const p = (0, S.useRef)(null),
            v = (0, fe.UP)(p, f),
            {
              size: y,
              appearance: b,
              inputId: m,
              labelId: h,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: x
            } = ol(),
            _ = (0, Gd.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, Xd.K)({
              id: a || m,
              "aria-labelledby": (0, z.VW)(o, h),
              "aria-describedby": (0, z.VW)(n, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, z.v6)({
              className: rl({
                appearance: b
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
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)("input", {
                ...j,
                ref: v
              })
            }), (0, R.jsx)("div", {
              className: el({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, R.jsx)("div", {
                className: Qd({
                  size: y,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        sl = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            isDisabled: s,
            labelId: i,
            inputId: d,
            size: l
          } = ol(), c = (0, z.v6)({
            id: n.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Jd({
              isDisabled: s,
              size: l
            })
          }, n), u = r ? pe.DX : "label";
          return (0, R.jsx)(pe.s6, {
            enabled: o,
            children: (0, R.jsx)(u, {
              ...c,
              ref: a,
              children: t
            })
          })
        }),
        il = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = ol(), i = o.id || s, d = (0, z.v6)({
            className: Yd({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, o), l = r ? pe.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        });
      var dl = t(26688);
      const ll = ({
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
        cl = ({
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
        ul = ({
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
        fl = ({
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
        pl = ({
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
        vl = ({
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

      function yl(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function bl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ml(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? bl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = yl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function hl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var gl = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        wl = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ml(ml({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gl(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hl(e.variantClassNames, e => hl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        xl = wl({
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
        _l = wl({
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
        jl = wl({
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
        Cl = wl({
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
        Ol = wl({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Pl = wl({
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
      const Rl = (0, S.createContext)(null);

      function Nl() {
        const e = (0, S.useContext)(Rl);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Sl = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: o,
          children: n,
          ...a
        }, s) => {
          const i = (0, z.v6)({
              "data-testid": t,
              className: "foundry_11gbdty0"
            }, (0, z.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = o ? pe.DX : "div",
            l = (0, S.useId)(),
            c = (0, S.useId)(),
            u = (0, S.useId)();
          return (0, R.jsx)(Rl.Provider, {
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
              children: n
            })
          })
        }),
        Dl = (0, S.forwardRef)(({
          testId: e,
          isChecked: r,
          defaultChecked: t,
          onCheckedChange: o,
          name: n,
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
            isRequired: m,
            descriptionId: h,
            labelId: g,
            inputId: w,
            ...x
          } = Nl(), _ = (0, S.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: O
          } = (0, ds.d)({
            ref: _
          }), {
            setSelected: P,
            toggle: N,
            ...D
          } = (0, Gd.H)({
            isSelected: r,
            defaultSelected: t,
            onChange: o
          }), {
            inputProps: k,
            isSelected: I,
            isDisabled: T,
            isReadOnly: E
          } = (0, dl.v)({
            "aria-label": "",
            id: j,
            name: n,
            ...x
          }, {
            ...D,
            toggle: N,
            setSelected: x.isReadOnly ? () => !1 : P
          }, _), L = (0, z.v6)({
            className: _l({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || T || E || N()
            }
          }, O, f), A = (0, z.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": r,
            "aria-labelledby": (0, z.VW)(c, g),
            "aria-describedby": (0, z.VW)(d, h),
            "aria-errormessage": (0, z.VW)(l, x.isInvalid ? h : void 0),
            "aria-required": m,
            required: m
          }, k), V = b ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, R.jsxs)("div", {
            ...L,
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)("input", {
                ...A,
                ref: p
              })
            }), (0, R.jsx)("div", {
              className: (0, Ae.clsx)(xl({
                size: v,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": b ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": T || E,
              "data-testid": e,
              "data-pressed": C,
              children: (0, R.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || b) && (0, R.jsx)(V, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        kl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          hideVisually: o = !1,
          hideRequiredAsterisk: n,
          ...a
        }, s) => {
          const {
            size: i,
            labelId: d,
            inputId: l,
            isRequired: c
          } = Nl(), u = a.id || d, f = c && !n, p = (0, z.v6)({
            className: Pl({
              size: i,
              showAsterisk: f
            }),
            "data-testid": t,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), v = r ? pe.DX : "label";
          return (0, R.jsx)(pe.s6, {
            enabled: o,
            children: (0, R.jsx)(v, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        zl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Nl(), i = o.id || s, d = (0, z.v6)({
            className: jl({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, o), l = r ? pe.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        }),
        Il = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = Nl(), s = o.id || a, i = (0, z.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": t,
            id: s
          }, o), d = r ? pe.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Tl = (0, S.createContext)(null);

      function El() {
        const e = (0, S.useContext)(Tl);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Ll = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          size: o = "MD",
          isRequired: n = !1,
          ...a
        }, s) => {
          const [i, d] = (0, S.useState)(null), [l, c] = (0, S.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, z.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = r ? pe.DX : "fieldset";
          return (0, R.jsx)(Tl.Provider, {
            value: {
              size: o,
              isRequired: n,
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
        Al = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          optionalText: o = "optional",
          hideVisually: n = !1,
          hideRequiredAsterisk: a,
          ...s
        }, i) => {
          const {
            isRequired: d
          } = El(), l = d && !a, c = (0, z.v6)({
            "data-testid": t,
            className: Ol({
              showAsterisk: l
            })
          }, s), u = r ? pe.DX : "legend";
          return (0, R.jsx)(pe.s6, {
            enabled: n,
            children: (0, R.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, R.jsx)(pe.xV, {
                children: e
              }), !d && (0, R.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", o, ")"]
              })]
            })
          })
        }),
        Vl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setDescriptionId: a
          } = El(), s = (0, S.useId)(), i = o.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, z.v6)({
              "data-testid": t,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, o),
            l = r ? pe.DX : "div";
          return (0, R.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        }),
        Ml = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = El(), s = (0, z.v6)({
            "data-testid": t,
            className: Cl({
              size: a
            })
          }, o), i = r ? pe.DX : "div";
          return (0, R.jsx)(i, {
            ...s,
            ref: n,
            children: e
          })
        }),
        ql = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setErrorTextId: a
          } = El(), s = (0, S.useId)(), i = o.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, z.v6)({
              "data-testid": t,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, o),
            l = Ve.X,
            c = r ? pe.DX : "div";
          return (0, R.jsxs)(c, {
            ...d,
            ref: n,
            children: [(0, R.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, R.jsx)(pe.xV, {
              children: e
            })]
          })
        });

      function Fl(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Bl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Xl(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Bl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Fl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Bl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Gl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Kl = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Zl = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Xl(Xl({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Kl(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gl(e.variantClassNames, e => Gl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Hl = Zl({
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
        Wl = Zl({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ul = Zl({
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
        $l = Zl({
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
      const Yl = (0, S.createContext)(null);

      function Ql() {
        const e = (0, S.useContext)(Yl);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Jl = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, z.v6)({
              "data-testid": t,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? pe.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)(),
            v = (0, S.useId)();
          return (0, R.jsx)(Yl.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: v,
              isDisabled: o,
              isReadOnly: n,
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
        ec = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          hideVisually: o = !1,
          hideRequiredAsterisk: n = !1,
          ...a
        }, s) => {
          const {
            labelId: i,
            inputId: d,
            isDisabled: l,
            isRequired: c
          } = Ql(), u = (0, z.v6)({
            className: Ul({
              isDisabled: l,
              showAsterisk: c && !n
            }),
            "data-testid": t,
            id: i,
            htmlFor: d
          }, a), f = r ? pe.DX : "label";
          return (0, R.jsx)(pe.s6, {
            enabled: o,
            children: (0, R.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        rc = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          rows: o = 5,
          defaultValue: n,
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
            isReadOnly: m,
            status: h
          } = Ql(), g = (0, S.useRef)(null), w = (0, fe.UP)(g, c), x = (0, z.v6)({
            className: $l({
              isInvalid: "invalid" === h,
              isDisabled: y,
              isReadOnly: m,
              isSuccess: "success" === h
            }),
            name: a,
            id: l.id || p,
            rows: o,
            defaultValue: n,
            disabled: y,
            required: b,
            readOnly: m,
            placeholder: s,
            "aria-labelledby": (0, z.VW)(l.id, f, v, i),
            "aria-describedby": (0, z.VW)(u, d),
            "data-testid": t,
            ..."invalid" === h && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === h && {
              "data-success": !0
            },
            ...y && {
              "aria-disabled": !0
            },
            ...b && {
              "aria-required": !0
            }
          }, l), _ = e ? pe.DX : "textarea";
          return (0, R.jsx)(_, {
            ref: w,
            ...x,
            children: r
          })
        }),
        tc = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Ql(), i = (0, z.v6)({
            className: Hl({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? pe.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        oc = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = Ql(), i = (0, z.v6)({
            className: Wl({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, o), d = r ? pe.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        nc = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Ql(), i = (0, z.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : hs;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        ac = gs,
        sc = ws;
      var ic = t(707),
        dc = t(5277);

      function lc(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function cc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function uc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? cc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = lc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : cc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function fc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var pc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        vc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = uc(uc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) pc(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fc(e.variantClassNames, e => fc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        yc = vc({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bc = vc({
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
      const mc = (0, S.createContext)(null);

      function hc() {
        const e = (0, S.useContext)(mc);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const gc = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          orientation: t = "vertical",
          children: o,
          testId: n,
          asChild: a,
          "aria-labelledby": s,
          "aria-describedby": i,
          "aria-errormessage": d,
          status: l = "neutral",
          ...c
        }, u) => {
          const f = (0, S.useRef)(null),
            p = (0, fe.UP)(f, u),
            v = (0, S.useId)(),
            y = (0, S.useId)(),
            b = (0, S.useId)(),
            m = (0, ic.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: h
            } = (0, dc.m)({
              ...c,
              orientation: t,
              "aria-labelledby": (0, z.VW)(v, s),
              "aria-describedby": (0, z.VW)(y, b, i),
              "aria-errormessage": (0, z.VW)(b, d)
            }, m),
            g = (0, z.v6)({
              className: "foundry_njguqn0"
            }, h, (0, z.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? pe.DX : "div";
          return (0, R.jsx)(mc.Provider, {
            value: {
              state: m,
              size: e,
              appearance: r,
              orientation: t,
              descriptionId: y,
              labelId: v,
              errorId: b,
              status: l,
              ...c
            },
            children: (0, R.jsx)(w, {
              ref: p,
              "data-testid": n,
              ...g,
              children: o
            })
          })
        }),
        wc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            size: a,
            orientation: s
          } = hc(), i = (0, z.v6)({
            "data-testid": e,
            className: bc({
              size: a,
              orientation: s
            })
          }, o), d = r ? pe.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: t
          })
        }),
        xc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          hideRequiredAsterisk: n = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            labelId: d
          } = hc(), l = i && !n, c = (0, z.v6)({
            id: a.id || d,
            "data-testid": e,
            className: yc({
              showAsterisk: l
            })
          }, a), u = r ? pe.DX : "div";
          return (0, R.jsx)(pe.s6, {
            enabled: o,
            children: (0, R.jsx)(u, {
              ...c,
              ref: s,
              children: t
            })
          })
        }),
        _c = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = hc(), s = (0, z.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, o), i = r ? pe.DX : "div";
          return (0, R.jsx)(i, {
            ...s,
            ref: n,
            children: t
          })
        }),
        jc = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            errorId: a,
            status: s
          } = hc(), i = (0, z.v6)({
            className: "foundry_njguqnc",
            "data-testid": r,
            errorId: a,
            status: s
          }, o), d = t ? pe.DX : hs;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Cc = gs,
        Oc = ws;
      var Pc = t(80146),
        Rc = vc({
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
        Nc = vc({
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
        Sc = vc({
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
        Dc = vc({
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
      const kc = ({
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
        zc = ({
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
        Ic = ({
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
        Tc = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              "data-testid": t,
              className: "foundry_1pfduet0"
            }, o),
            s = e ? pe.DX : "label";
          return (0, R.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Ec = (0, S.forwardRef)(({
          testId: e,
          value: r,
          ...t
        }, o) => {
          const n = (0, S.useRef)(null),
            a = (0, fe.UP)(n, o),
            s = (0, S.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = hc(),
            {
              isPressed: p,
              pressProps: v
            } = (0, ds.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, Pc.z)({
              ...t,
              id: s,
              value: r,
              "aria-label": ""
            }, i, n),
            b = y.checked,
            m = y.disabled || i?.isReadOnly,
            h = (0, z.v6)(y, {
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
            }, t),
            g = c[`Dot${l}`];
          return (0, R.jsxs)("div", {
            className: Dc({
              size: l
            }),
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)("input", {
                type: "radio",
                ...h,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, R.jsx)("div", {
              className: Sc({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": p,
              ...v,
              children: (0, R.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, R.jsx)(g, {})
              })
            })]
          })
        }),
        Lc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            size: s,
            state: i
          } = hc(), d = (0, S.useId)(), l = (0, z.v6)({
            id: d,
            "data-testid": e,
            className: Nc({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, n), c = r ? pe.DX : "div";
          return (0, R.jsx)(pe.s6, {
            enabled: o,
            children: (0, R.jsx)(c, {
              ...l,
              ref: a,
              children: t
            })
          })
        }),
        Ac = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = hc(), s = (0, z.v6)({
            "data-testid": e,
            className: Rc({
              isDisabled: a
            })
          }, o), i = r ? pe.DX : "span";
          return (0, R.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        });
      var Vc = t(58900);

      function Mc(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function qc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Fc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? qc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Mc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Bc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Xc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Gc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Fc(Fc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xc(l, o, e.defaultVariants) && (t += " " + c);
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
        Kc = Gc({
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
        Zc = Gc({
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
        Hc = Gc({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wc = Gc({
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
        Uc = Gc({
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
        $c = Gc({
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
      const Yc = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Qc = (0, S.createContext)(null);

      function Jc() {
        const e = (0, S.useContext)(Qc);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const eu = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, S.useState)("text"), u = `${(0,S.useId)()}-label`, f = `${(0,S.useId)()}-input`, p = `${(0,S.useId)()}-description`, v = (0, S.useRef)(null), y = (0, S.useRef)(Yc), b = (0, z.v6)({
            "data-testid": t,
            className: "foundry_8oytzo4"
          }, i), m = e ? pe.DX : "div";
          return (0, R.jsx)(Qc.Provider, {
            value: {
              isDisabled: o,
              isReadOnly: n,
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
            children: (0, R.jsx)(m, {
              ref: d,
              ...b,
              children: r
            })
          })
        }),
        ru = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          hideRequiredAsterisk: n,
          ...a
        }, s) => {
          const {
            isDisabled: i,
            isRequired: d,
            inputId: l,
            labelId: c
          } = Jc(), u = d && !n, f = (0, z.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: $c({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = r ? pe.DX : "label";
          return (0, R.jsx)(pe.s6, {
            enabled: o,
            children: (0, R.jsx)(p, {
              ref: s,
              ...f,
              children: t
            })
          })
        }),
        tu = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = Jc(), s = (0, z.v6)({
            "data-testid": e,
            className: Hc({
              isDisabled: a
            })
          }, o), i = r ? pe.DX : "span";
          return (0, R.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        }),
        ou = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = Jc(), d = (0, z.v6)({
            "data-testid": e,
            className: (0, Ae.clsx)(Kc({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, o), l = r ? pe.DX : "div";
          return (0, R.jsx)(l, {
            ref: n,
            ...d,
            children: t
          })
        }),
        nu = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          mask: t,
          replacement: o,
          showMask: n = !0,
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
            inputId: m,
            descriptionId: h,
            setType: g,
            type: w,
            inputRef: x,
            focusState: _
          } = Jc();
          (0, S.useEffect)(() => g(l), []);
          const j = "invalid" === y,
            C = (0, z.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: m,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, z.VW)(b, i),
              "aria-describedby": (0, z.VW)(h, d),
              "data-testid": e,
              className: (0, Ae.clsx)(Uc({
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
                "aria-errormessage": h
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
            O = (0, Vc.A)({
              mask: t,
              replacement: o,
              showMask: n,
              track: a
            }),
            P = (0, fe.UP)(t && o ? O : null, x, u),
            N = r ? pe.DX : "input";
          return (0, R.jsx)(N, {
            ref: P,
            ...C
          })
        }),
        au = (0, S.forwardRef)(({
          icon: e,
          asChild: r,
          testId: t,
          side: o,
          ...n
        }, a) => {
          const {
            isDisabled: s
          } = Jc(), i = (0, z.v6)({
            size: "LG",
            "data-testid": t,
            className: (0, Ae.clsx)(Wc({
              side: o,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, n), d = r ? pe.DX : Ve[e];
          return (0, R.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        su = (0, S.forwardRef)(({
          ...e
        }, r) => {
          const {
            isDisabled: t
          } = Jc(), o = (0, z.v6)({
            isDisabled: t,
            size: "LG",
            appearance: "ghost",
            className: (0, Ae.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, R.jsx)(ar, {
            ref: r,
            ...o,
            preventFocusOnPress: !1
          })
        }),
        iu = (0, S.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: r,
          ...t
        }, o) => {
          const {
            type: n,
            setType: a,
            inputRef: s,
            focusState: i
          } = Jc(), d = "password" === n, l = d ? e : r;
          (0, S.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, z.v6)({
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
          return (0, R.jsxs)(ln, {
            children: [(0, R.jsx)(cn, {
              children: (0, R.jsx)(su, {
                ref: o,
                ...c
              })
            }), (0, R.jsxs)(un, {
              side: "bottom",
              align: "end",
              children: [l, (0, R.jsx)(fn, {})]
            })]
          })
        }),
        du = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Jc(), i = (0, z.v6)({
            className: Zc({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? pe.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        lu = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Jc(), i = (0, z.v6)({
            className: "foundry_8oytzo13",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : hs;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        cu = gs,
        uu = ws;
      var fu = t(68196);

      function pu(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function vu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function yu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? vu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = pu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function bu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var mu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        hu = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = yu(yu({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) mu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bu(e.variantClassNames, e => bu(e, e => e.split(" ")[0]))
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
      const gu = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        wu = (0, S.forwardRef)(({
          label: e,
          size: r = "LG",
          testId: t,
          ...o
        }, n) => {
          const a = (0, S.useRef)(null),
            s = (0, fe.UP)(a, n),
            {
              buttonProps: i
            } = (0, fe.sL)(o, a),
            d = (0, z.v6)({
              "data-testid": t,
              className: hu({
                size: r
              })
            }, i);
          return (0, R.jsx)("button", {
            ref: s,
            ...d,
            children: (0, R.jsx)(Ve.X, {
              label: e,
              size: gu[r]
            })
          })
        });

      function xu(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function _u(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ju(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? _u(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = xu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _u(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Cu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Ou = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Pu = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ju(ju({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ou(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cu(e.variantClassNames, e => Cu(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Ru = Pu({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Nu = Pu({
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
        Su = Pu({
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
      const Du = (0, S.createContext)(null);

      function ku() {
        const e = (0, S.useContext)(Du);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const zu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          status: t,
          background: o,
          ...n
        }, a) => {
          const s = e ? pe.DX : "div",
            i = (0, z.v6)({
              className: Su({
                status: t,
                background: o
              })
            }, n);
          return (0, R.jsx)(Du.Provider, {
            value: {
              status: t,
              background: o
            },
            children: (0, R.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i
            })
          })
        }),
        Iu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, z.v6)({
              className: "foundry_1m368qha"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Tu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, z.v6)({
              className: "foundry_1m368qhb"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Eu = {
          danger: Ve.CircleX,
          information: Ve.Info,
          success: Ve.CircleCheck,
          warning: Ve.TriangleAlert
        },
        Lu = (0, S.forwardRef)(({
          asChild: e,
          size: r = "XL",
          ...t
        }, o) => {
          const {
            status: n
          } = ku(), a = e ? pe.DX : Eu[n], s = (0, z.v6)({
            className: Nu({
              status: n,
              size: r
            }),
            size: r
          }, t);
          return (0, R.jsx)(a, {
            label: "",
            ref: o,
            ...s
          })
        }),
        Au = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, z.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Vu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, z.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Mu = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, S.useRef)(null),
            s = (0, fe.UP)(a, n),
            i = e ? pe.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, fu.i)(o, a),
            c = (0, z.v6)({
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
        qu = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : "div",
            s = (0, z.v6)({
              className: "foundry_1m368qhm"
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        Fu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          className: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            className: (0, Ae.clsx)(t, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...o
          })
        }),
        Bu = (0, S.forwardRef)((e, r) => {
          const {
            background: t
          } = ku(), o = "none" !== t, n = (0, z.v6)({
            className: Ru({
              hasBackground: o
            })
          }, e);
          return (0, R.jsx)(wu, {
            size: "SM",
            ref: r,
            ...n
          })
        });
      var Xu = t(64634),
        Gu = t(7697),
        Ku = t(17497);
      var Zu = t(69066);

      function Hu(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Wu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Uu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Wu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Hu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function $u(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Yu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Qu = "foundry_qmpv6yv",
        Ju = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Uu(Uu({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $u(e.variantClassNames, e => $u(e, e => e.split(" ")[0]))
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
      const ef = (0, S.createContext)(null);

      function rf() {
        const e = (0, S.useContext)(ef);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const tf = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          loopPagination: o,
          status: n,
          background: a,
          align: s = "left",
          ...i
        }, d) => {
          const l = (({
              loopPagination: e = !0
            }) => {
              const r = (0, fe.rl)(),
                t = (0, fe.jt)(),
                [o, n] = (0, S.useState)([]),
                a = o.length,
                [s, i] = (0, S.useState)(0),
                [d, l] = (0, Xu.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: r && a > 1
                }, [(0, Gu.A)(), (0, Ku.A)()]),
                c = (0, S.useRef)(0),
                u = (0, S.useRef)(!1),
                f = o[s],
                p = (0, S.useCallback)(e => {
                  const r = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, t) => {
                    e.style.visibility = t === r ? "visible" : "hidden"
                  }), i(r), u.current = !0
                }, [l]),
                v = (0, S.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                y = (0, S.useCallback)((e, r) => {
                  const t = e.internalEngine(),
                    o = e.scrollProgress(),
                    n = e.slidesInView(),
                    a = "scroll" === r;
                  e.scrollSnapList().forEach((r, s) => {
                    let i = r - o;
                    t.slideRegistry[s].forEach(s => {
                      if (a && !n.includes(s)) return;
                      t.options.loop && t.slideLooper.loopPoints.forEach(e => {
                        const t = e.target();
                        if (s === e.index && 0 !== t) {
                          const e = Math.sign(t); - 1 === e && (i = r - (1 + o)), 1 === e && (i = r + (1 - o))
                        }
                      });
                      const d = (l = 1 - Math.abs(i * c.current), Math.min(Math.max(l, 0), 1)).toString();
                      var l;
                      e.slideNodes()[s].style.opacity = d
                    })
                  })
                }, []);
              return (0, S.useEffect)(() => {
                l && (v(l), y(l), l.on("reInit", v).on("reInit", y).on("scroll", y).on("slideFocus", y))
              }, [l, y]), (0, S.useEffect)(() => {
                l && (p(l), l.on("select", p).on("reInit", p))
              }, [l, p]), {
                setAlerts: n,
                alerts: o,
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
              loopPagination: o
            }),
            {
              currentAlert: c,
              isInitialized: u,
              setAlerts: f,
              numAlerts: p
            } = l;
          (0, S.useEffect)(() => {
            n && a && f([{
              status: n,
              background: a,
              align: s
            }])
          }, []);
          const v = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            y = (0, z.v6)({
              className: Ju(c)
            }, v, i),
            b = e ? pe.DX : "div";
          return (0, R.jsx)(ef.Provider, {
            value: l,
            children: (0, R.jsx)(b, {
              ref: d,
              "data-testid": t,
              "data-initialized": u,
              ...y,
              children: r
            })
          })
        }),
        of = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        nf = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            currentAlert: o
          } = rf();
          if (!e && !o || !o?.status) return null;
          const n = e || of [o.status],
            a = Ve[n],
            s = (0, z.v6)({
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
        af = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, z.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        sf = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          align: t = "left",
          status: o,
          background: n,
          ...a
        }, s) => {
          const i = e ? pe.DX : "div",
            d = (0, z.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, R.jsx)(i, {
            ref: s,
            "data-testid": r,
            ...d
          })
        }),
        df = (0, S.forwardRef)(({
          testId: e,
          children: r,
          ...t
        }, o) => {
          const {
            setAlerts: n,
            emblaRef: a,
            emblaApi: s
          } = rf(), i = (0, z.v6)({
            className: "foundry_qmpv6ym"
          }, t), d = (0, fe.UP)(a, o), l = S.Children.map(r, e => {
            const r = e;
            if (!r.props.background || !r.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: r.props.status,
              background: r.props.background,
              align: r.props.align
            }
          });
          return (0, S.useEffect)(() => {
            l && n(l)
          }, []), s?.on("slidesChanged", () => {
            l && n(l)
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
        lf = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, S.useRef)(null),
            s = (0, fe.UP)(a, n),
            i = e ? pe.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, fu.i)(o, a),
            c = (0, z.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, o);
          return (0, R.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...d,
            ...c,
            children: r
          })
        }),
        cf = (0, S.forwardRef)((e, r) => {
          const t = (0, z.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, R.jsx)(wu, {
            ref: r,
            "data-close-btn": !0,
            size: "SM",
            ...t
          })
        }),
        uf = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          children: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : "div",
            s = (0, z.v6)({
              className: "foundry_qmpv6yt"
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: t
          })
        }),
        ff = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            nextAlert: o,
            canScrollNext: n
          } = rf(), a = (0, z.v6)({
            className: Qu
          }, r);
          return (0, R.jsx)(Zu.K, {
            ref: t,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: o,
            isDisabled: !n(),
            ...a
          })
        }),
        pf = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            prevAlert: o,
            canScrollPrev: n
          } = rf(), a = (0, z.v6)({
            className: Qu
          }, r);
          return (0, R.jsx)(Zu.K, {
            ref: t,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: o,
            isDisabled: !n(),
            ...a
          })
        }),
        vf = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            currentAlertIndex: o,
            numAlerts: n
          } = rf(), a = (0, z.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, r);
          return (0, R.jsxs)("div", {
            ref: t,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [o + 1, "/", n]
          })
        });

      function yf(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function bf(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function mf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? bf(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = yf(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bf(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function hf(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var gf = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        wf = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = mf(mf({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gf(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hf(e.variantClassNames, e => hf(e, e => e.split(" ")[0]))
            }
          }, r
        },
        xf = wf({
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
        _f = wf({
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
        jf = wf({
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
      const Cf = (0, S.createContext)(null);

      function Of() {
        const e = (0, S.useContext)(Cf);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Pf = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          size: o,
          background: n,
          color: a,
          hasBorder: s,
          isDisabled: i,
          ...d
        }, l) => {
          const c = {
              size: o,
              background: n,
              color: a,
              hasBorder: s,
              isDisabled: i
            },
            u = (0, z.v6)({
              className: _f(c)
            }, d),
            f = e ? pe.DX : "div";
          return (0, R.jsx)(Cf.Provider, {
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
        Rf = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = Of(), s = e ? pe.DX : "div", i = (0, z.v6)({
            className: jf({
              size: a
            })
          }, o);
          return (0, R.jsx)(s, {
            ref: n,
            "data-testid": t,
            ...i,
            children: r
          })
        }),
        Nf = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Ve[e],
            n = (0, z.v6)({
              className: "foundry_oahh5812"
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            size: "SM",
            ...n
          })
        }),
        Sf = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            background: o,
            isDisabled: n
          } = Of(), a = (0, z.v6)({
            className: xf({
              background: o
            })
          }, r);
          return (0, R.jsx)(ar, {
            ref: t,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: n,
            ...a
          })
        });
      var Df = t(72976),
        kf = "ToastProvider",
        [zf, If, Tf] = mn("Toast"),
        [Ef, Lf] = (0, Dt.A)("Toast", [Tf]),
        [Af, Vf] = Ef(kf),
        Mf = e => {
          const {
            __scopeToast: r,
            label: t = "Notification",
            duration: o = 5e3,
            swipeDirection: n = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = S.useState(null), [c, u] = S.useState(0), f = S.useRef(!1), p = S.useRef(!1);
          return t.trim() || console.error(`Invalid prop \`label\` supplied to \`${kf}\`. Expected non-empty \`string\`.`), (0, R.jsx)(zf.Provider, {
            scope: r,
            children: (0, R.jsx)(Af, {
              scope: r,
              label: t,
              duration: o,
              swipeDirection: n,
              swipeThreshold: a,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: S.useCallback(() => u(e => e + 1), []),
              onToastRemove: S.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: s,
              children: i
            })
          })
        };
      Mf.displayName = kf;
      var qf = "ToastViewport",
        Ff = ["F8"],
        Bf = "toast.viewportPause",
        Xf = "toast.viewportResume",
        Gf = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            hotkey: o = Ff,
            label: n = "Notifications ({hotkey})",
            ...a
          } = e, s = Vf(qf, t), i = If(t), d = S.useRef(null), l = S.useRef(null), c = S.useRef(null), u = S.useRef(null), f = (0, St.s)(r, u, s.onViewportChange), p = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          S.useEffect(() => {
            const e = e => {
              0 !== o.length && o.every(r => e[r] || e.code === r) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [o]), S.useEffect(() => {
            const e = d.current,
              r = u.current;
            if (v && e && r) {
              const t = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(Bf);
                    r.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                o = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(Xf);
                    r.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                },
                n = r => {
                  !e.contains(r.relatedTarget) && o()
                },
                a = () => {
                  e.contains(document.activeElement) || o()
                };
              return e.addEventListener("focusin", t), e.addEventListener("focusout", n), e.addEventListener("pointermove", t), e.addEventListener("pointerleave", a), window.addEventListener("blur", t), window.addEventListener("focus", o), () => {
                e.removeEventListener("focusin", t), e.removeEventListener("focusout", n), e.removeEventListener("pointermove", t), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", t), window.removeEventListener("focus", o)
              }
            }
          }, [v, s.isClosePausedRef]);
          const y = S.useCallback(({
            tabbingDirection: e
          }) => {
            const r = i().map(r => {
              const t = r.ref.current,
                o = [t, ...dp(t)];
              return "forwards" === e ? o : o.reverse()
            });
            return ("forwards" === e ? r.reverse() : r).flat()
          }, [i]);
          return S.useEffect(() => {
            const e = u.current;
            if (e) {
              const r = r => {
                const t = r.altKey || r.ctrlKey || r.metaKey;
                if ("Tab" === r.key && !t) {
                  const t = document.activeElement,
                    o = r.shiftKey;
                  if (r.target === e && o) return void l.current?.focus();
                  const n = y({
                      tabbingDirection: o ? "backwards" : "forwards"
                    }),
                    a = n.findIndex(e => e === t);
                  lp(n.slice(a + 1)) ? r.preventDefault() : o ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r)
            }
          }, [i, y]), (0, R.jsxs)(Ft, {
            ref: d,
            role: "region",
            "aria-label": n.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, R.jsx)(Zf, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                lp(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, R.jsx)(zf.Slot, {
              scope: t,
              children: (0, R.jsx)(kt.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, R.jsx)(Zf, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                lp(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Gf.displayName = qf;
      var Kf = "ToastFocusProxy",
        Zf = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            onFocusFromOutsideViewport: o,
            ...n
          } = e, a = Vf(Kf, t);
          return (0, R.jsx)(Oo.s6, {
            tabIndex: 0,
            ...n,
            ref: r,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const r = e.relatedTarget;
              !a.viewport?.contains(r) && o()
            }
          })
        });
      Zf.displayName = Kf;
      var Hf = "Toast",
        Wf = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, Co.i)({
            prop: o,
            defaultProp: n ?? !0,
            onChange: a,
            caller: Hf
          });
          return (0, R.jsx)(wo, {
            present: t || i,
            children: (0, R.jsx)(Yf, {
              open: i,
              ...s,
              ref: r,
              onClose: () => d(!1),
              onPause: (0, zt.c)(e.onPause),
              onResume: (0, zt.c)(e.onResume),
              onSwipeStart: (0, Nt.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Nt.mK)(e.onSwipeMove, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${t}px`)
              }),
              onSwipeCancel: (0, Nt.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Nt.mK)(e.onSwipeEnd, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${t}px`), d(!1)
              })
            })
          })
        });
      Wf.displayName = Hf;
      var [Uf, $f] = Ef(Hf, {
        onClose() {}
      }), Yf = S.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          type: o = "foreground",
          duration: n,
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
        } = e, y = Vf(Hf, t), [b, m] = S.useState(null), h = (0, St.s)(r, e => m(e)), g = S.useRef(null), w = S.useRef(null), x = n || y.duration, _ = S.useRef(0), j = S.useRef(x), C = S.useRef(0), {
          onToastAdd: O,
          onToastRemove: P
        } = y, N = (0, zt.c)(() => {
          const e = b?.contains(document.activeElement);
          e && y.viewport?.focus(), s()
        }), D = S.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), _.current = (new Date).getTime(), C.current = window.setTimeout(N, e))
        }, [N]);
        S.useEffect(() => {
          const e = y.viewport;
          if (e) {
            const r = () => {
                D(j.current), l?.()
              },
              t = () => {
                const e = (new Date).getTime() - _.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(Bf, t), e.addEventListener(Xf, r), () => {
              e.removeEventListener(Bf, t), e.removeEventListener(Xf, r)
            }
          }
        }, [y.viewport, x, d, l, D]), S.useEffect(() => {
          a && !y.isClosePausedRef.current && D(x)
        }, [a, x, y.isClosePausedRef, D]), S.useEffect(() => (O(), () => P()), [O, P]);
        const k = S.useMemo(() => b ? ap(b) : null, [b]);
        return y.viewport ? (0, R.jsxs)(R.Fragment, {
          children: [k && (0, R.jsx)(Qf, {
            __scopeToast: t,
            role: "status",
            "aria-live": "foreground" === o ? "assertive" : "polite",
            children: k
          }), (0, R.jsx)(Uf, {
            scope: t,
            onClose: N,
            children: ho.createPortal((0, R.jsx)(zf.ItemSlot, {
              scope: t,
              children: (0, R.jsx)(qt, {
                asChild: !0,
                onEscapeKeyDown: (0, Nt.mK)(i, () => {
                  y.isFocusedToastEscapeKeyDownRef.current || N(), y.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, R.jsx)(kt.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": y.swipeDirection,
                  ...v,
                  ref: h,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, Nt.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, N()))
                  }),
                  onPointerDown: (0, Nt.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Nt.mK)(e.onPointerMove, e => {
                    if (!g.current) return;
                    const r = e.clientX - g.current.x,
                      t = e.clientY - g.current.y,
                      o = Boolean(w.current),
                      n = ["left", "right"].includes(y.swipeDirection),
                      a = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
                      s = n ? a(0, r) : 0,
                      i = n ? 0 : a(0, t),
                      d = "touch" === e.pointerType ? 10 : 2,
                      l = {
                        x: s,
                        y: i
                      },
                      f = {
                        originalEvent: e,
                        delta: l
                      };
                    o ? (w.current = l, sp("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : ip(l, y.swipeDirection, d) ? (w.current = l, sp("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(r) > d || Math.abs(t) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, Nt.mK)(e.onPointerUp, e => {
                    const r = w.current,
                      t = e.target;
                    if (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), w.current = null, g.current = null, r) {
                      const t = e.currentTarget,
                        o = {
                          originalEvent: e,
                          delta: r
                        };
                      ip(r, y.swipeDirection, y.swipeThreshold) ? sp("toast.swipeEnd", p, o, {
                        discrete: !0
                      }) : sp("toast.swipeCancel", f, o, {
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
      }), Qf = e => {
        const {
          __scopeToast: r,
          children: t,
          ...o
        } = e, n = Vf(Hf, r), [a, s] = S.useState(!1), [i, d] = S.useState(!1);
        return function(e = () => {}) {
          const r = (0, zt.c)(e);
          (0, Ht.N)(() => {
            let e = 0,
              t = 0;
            return e = window.requestAnimationFrame(() => t = window.requestAnimationFrame(r)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(t)
            }
          }, [r])
        }(() => s(!0)), S.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, R.jsx)(go, {
          asChild: !0,
          container: n.announcerContainer || void 0,
          children: (0, R.jsx)(Oo.s6, {
            ...o,
            children: a && (0, R.jsxs)(R.Fragment, {
              children: [n.label, " ", t]
            })
          })
        })
      };
      S.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, R.jsx)(kt.sG.div, {
          ...o,
          ref: r
        })
      }).displayName = "ToastTitle";
      var Jf = S.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, R.jsx)(kt.sG.div, {
          ...o,
          ref: r
        })
      });
      Jf.displayName = "ToastDescription";
      var ep = "ToastAction",
        rp = S.forwardRef((e, r) => {
          const {
            altText: t,
            ...o
          } = e;
          return t.trim() ? (0, R.jsx)(np, {
            altText: t,
            asChild: !0,
            children: (0, R.jsx)(op, {
              ...o,
              ref: r
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${ep}\`. Expected non-empty \`string\`.`), null)
        });
      rp.displayName = ep;
      var tp = "ToastClose",
        op = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            ...o
          } = e, n = $f(tp, t);
          return (0, R.jsx)(np, {
            asChild: !0,
            children: (0, R.jsx)(kt.sG.button, {
              type: "button",
              ...o,
              ref: r,
              onClick: (0, Nt.mK)(e.onClick, n.onClose)
            })
          })
        });
      op.displayName = tp;
      var np = S.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          altText: o,
          ...n
        } = e;
        return (0, R.jsx)(kt.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": o || void 0,
          ...n,
          ref: r
        })
      });

      function ap(e) {
        const r = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && r.push(e.textContent), function(e) {
              return e.nodeType === e.ELEMENT_NODE
            }(e)) {
            const t = e.ariaHidden || e.hidden || "none" === e.style.display,
              o = "" === e.dataset.radixToastAnnounceExclude;
            if (!t)
              if (o) {
                const t = e.dataset.radixToastAnnounceAlt;
                t && r.push(t)
              } else r.push(...ap(e))
          }
        }), r
      }

      function sp(e, r, t, {
        discrete: o
      }) {
        const n = t.originalEvent.currentTarget,
          a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: t
          });
        r && n.addEventListener(e, r, {
          once: !0
        }), o ? (0, kt.hO)(n, a) : n.dispatchEvent(a)
      }
      var ip = (e, r, t = 0) => {
        const o = Math.abs(e.x),
          n = Math.abs(e.y),
          a = o > n;
        return "left" === r || "right" === r ? a && o > t : !a && n > t
      };

      function dp(e) {
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

      function lp(e) {
        const r = document.activeElement;
        return e.some(e => e === r || (e.focus(), document.activeElement !== r))
      }
      var cp = Mf,
        up = Gf,
        fp = Wf,
        pp = Jf,
        vp = rp,
        yp = op;

      function bp(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function mp(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function hp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? mp(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = bp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mp(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function gp(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var wp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        xp = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = hp(hp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) wp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gp(e.variantClassNames, e => gp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        _p = xp({
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
        jp = xp({
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
        Cp = xp({
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
      const Op = ({
          testId: e,
          ...r
        }) => (0, R.jsx)(cp, {
          "data-testid": e,
          ...r
        }),
        Pp = (0, S.forwardRef)(({
          children: e,
          testId: r,
          position: t = "bottomRight",
          ...o
        }, n) => {
          const a = (0, z.v6)({
            className: Cp({
              position: t
            })
          }, o);
          return (0, R.jsx)(up, {
            ref: n,
            "data-testid": r,
            ...a,
            children: e
          })
        }),
        Rp = (0, S.createContext)(null);

      function Np() {
        const e = (0, S.useContext)(Rp);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Sp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          appearance: o = "success",
          ...n
        }, a) => {
          const s = e ? pe.DX : fp,
            i = (0, z.v6)({
              className: jp({
                appearance: o
              })
            }, n);
          return (0, R.jsx)(Rp.Provider, {
            value: {
              appearance: o
            },
            children: (0, R.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: r
            })
          })
        }),
        Dp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : pp,
            s = (0, z.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        kp = {
          danger: Ve.CircleX,
          information: Ve.Info,
          success: Ve.CircleCheck,
          warning: Ve.TriangleAlert,
          avocado: Ve.CircleCheck
        },
        zp = (0, S.forwardRef)(({
          asChild: e,
          ...r
        }, t) => {
          const {
            appearance: o
          } = Np(), n = e ? pe.DX : kp[o], a = (0, z.v6)({
            className: _p({
              appearance: o
            }),
            size: "LG"
          }, r);
          return (0, R.jsx)(n, {
            ref: t,
            ...a
          })
        }),
        Ip = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, o);
          return (0, R.jsx)(vp, {
            ref: n,
            "data-testid": t,
            ...a,
            children: e ? (0, R.jsx)(pe.DX, {
              children: r
            }) : (0, R.jsx)(Df.$, {
              size: "MD",
              appearance: "link",
              children: r
            })
          })
        }),
        Tp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          label: o,
          ...n
        }, a) => {
          const s = (0, z.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, n);
          return (0, R.jsx)(yp, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e ? (0, R.jsx)(pe.DX, {
              children: r
            }) : (0, R.jsx)(wu, {
              size: "SM",
              label: o
            })
          })
        });
      var Ep = t(52640);

      function Lp(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Ap(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Vp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ap(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Lp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ap(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Mp(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var qp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Fp = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Vp(Vp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Mp(e.variantClassNames, e => Mp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Bp = Fp({
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
        Xp = Fp({
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
        Gp = Fp({
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

      function Kp() {
        const e = (0, S.useContext)(Zp);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Zp = (0, S.createContext)(null),
        Hp = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          size: o = "MD",
          ...n
        }, a) => {
          const s = (0, z.v6)({
              className: Gp({
                size: o
              })
            }, n),
            i = t ? pe.DX : "ol";
          return (0, R.jsx)(Zp.Provider, {
            value: {
              size: o
            },
            children: (0, R.jsx)(i, {
              ref: a,
              "data-testid": r,
              ...s,
              children: e
            })
          })
        }),
        Wp = (0, S.forwardRef)(({
          isCurrent: e,
          children: r,
          asChild: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, S.useRef)(null),
            {
              size: i
            } = Kp(),
            {
              itemProps: d
            } = (0, Ep.I)({
              isCurrent: e,
              children: r
            }, s),
            l = t ? pe.DX : "a",
            c = (0, z.v6)({
              className: (0, Ae.clsx)(Bp({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": o
            }, d, n);
          return (0, R.jsx)("li", {
            className: Xp({
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
        Up = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Ve[e];
          return (0, R.jsx)(o, {
            ref: t,
            size: "LG",
            ...r
          })
        }),
        $p = (0, S.forwardRef)(({
          children: e,
          testId: r,
          defaultOpen: t = !1,
          label: o,
          ...n
        }, a) => {
          const [s, i] = (0, S.useState)(t), {
            size: d
          } = Kp(), l = (0, z.v6)({
            className: Xp({
              size: d
            }),
            "data-testid": r
          }, n);
          return (0, R.jsx)("li", {
            ref: a,
            ...l,
            children: (0, R.jsxs)(xi, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, R.jsx)(ji, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": o,
                children: "..."
              }), (0, R.jsx)(Di, {
                children: (0, R.jsx)(zi, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, R.jsx)(Gi, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Yp = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = r ? pe.DX : Qi,
            s = (0, z.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": t
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            ...s,
            children: e
          })
        });

      function Qp(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Jp(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ev(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Jp(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Qp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Jp(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function rv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var tv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ov = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ev(ev({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) tv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rv(e.variantClassNames, e => rv(e, e => e.split(" ")[0]))
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
      const nv = (0, S.createContext)(null);

      function av() {
        const e = (0, S.useContext)(nv);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const sv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "primary",
          size: o = "SM",
          type: n = "text",
          ...a
        }, s) => {
          const i = e ? pe.DX : "div",
            d = (0, z.v6)({
              className: ov({
                appearance: t,
                type: n,
                size: o
              })
            }, a);
          return (0, R.jsx)(nv.Provider, {
            value: {
              type: n
            },
            children: (0, R.jsx)(i, {
              ref: s,
              "data-testid": r,
              ...d
            })
          })
        }),
        iv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, z.v6)({
              className: "foundry_18omk9t9",
              "data-testid": r
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            ...a
          })
        }),
        dv = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = ys[e],
            n = (0, z.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            ...n
          })
        }),
        lv = () => {
          const e = (0, fe.Ub)(z.fi.mobile);
          return r => e ? {
            transform: `translate(0,${100-r}%)`
          } : {
            opacity: r / 100,
            transform: `scale(${.95+r/100*.05})`
          }
        },
        cv = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function uv(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function fv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function pv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? fv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = uv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function vv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var yv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        bv = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = pv(pv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vv(e.variantClassNames, e => vv(e, e => e.split(" ")[0]))
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
      const mv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, r);
          return (0, R.jsx)(ti, {
            ref: t,
            ...o
          })
        }),
        hv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, r);
          return (0, R.jsx)(oi, {
            ref: t,
            ...o
          })
        }),
        gv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, r);
          return (0, R.jsx)(ni, {
            ref: t,
            ...o
          })
        }),
        wv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, fe.rl)(),
            n = (0, z.v6)({
              "data-testid": e,
              className: bv({
                isTouchDevice: o
              })
            }, r);
          return (0, R.jsx)(ai, {
            ref: t,
            ...n
          })
        }),
        xv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(si, {
            ref: t,
            ...o
          })
        });

      function _v(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function jv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Cv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? jv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = _v(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : jv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ov(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Pv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Rv = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Cv(Cv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Pv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ov(e.variantClassNames, e => Ov(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Nv = Rv({
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
        Sv = Rv({
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
      const Dv = (0, S.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, S.createRef)(),
          dialogSpringRef: (0, Rt.$9)(),
          overlaySpringRef: (0, Rt.$9)()
        }),
        kv = ({
          defaultOpen: e,
          onOpenChange: r,
          isOpen: t,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: n,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, fe.ic)({
            prop: t,
            defaultProp: e ?? !1,
            onChange: r
          }), c = (0, fe.ZC)(d);
          return (0, R.jsx)(Dv.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== t,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: n,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, S.useId)(),
              descriptionId: (0, S.useId)(),
              triggerRef: (0, S.useRef)(null),
              dialogSpringRef: (0, Rt.U2)(),
              overlaySpringRef: (0, Rt.U2)()
            },
            children: (0, R.jsx)(zv, {
              ...i
            })
          })
        },
        zv = e => {
          const {
            isOpen: r,
            setIsOpen: t
          } = (0, S.useContext)(Dv), o = (0, z.v6)({
            open: r,
            onOpenChange: t
          }, e);
          return (0, R.jsx)(ba, {
            ...o
          })
        },
        Iv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            contentId: o,
            triggerRef: n
          } = (0, S.useContext)(Dv), a = (0, fe.UP)(n, t), s = (0, z.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": o
          }, r);
          return (0, R.jsx)(ha, {
            ...s,
            ref: a
          })
        }),
        Tv = e => (0, R.jsx)(_a, {
          forceMount: !0,
          ...e
        }),
        Ev = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            isOpen: o,
            overlaySpringRef: n,
            openImmediately: a
          } = (0, S.useContext)(Dv), s = cv(), i = (0, fe.jt)(), d = (0, Rt.pn)(o, {
            ref: n,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Rt.$W.stiff,
            immediate: i || a
          }), l = (0, z.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, r), c = (0, Rt.CS)(Ca);
          return (0, S.useEffect)(() => {
            n.start()
          }, [o]), d((e, r) => r ? (0, R.jsx)(c, {
            forceMount: !0,
            ref: t,
            ...l,
            style: e
          }) : null)
        }),
        Lv = (0, S.forwardRef)(({
          children: e,
          testId: r,
          onCloseAutoFocus: t,
          disableDrag: o = !1,
          ...n
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
          } = (0, S.useContext)(Dv), m = (0, fe.rl)(), h = (0, fe.jt)(), g = (0, S.useRef)(null), w = lv(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: r,
            overlaySpringRef: t,
            onCloseTransitionStart: o,
            onCloseTransitionComplete: n
          }) {
            const a = cv(),
              s = lv(),
              i = (0, S.useRef)();
            return {
              bindDrag: (0, Gr.i3)(({
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
                if (p && (i.current = function(e, r) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (r < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(v, c)), (!i.current || l < -70) && u(), i.current) {
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
                  config: Rt.$W.stiff,
                  onStart: o,
                  onRest: n
                }), t.start({
                  ...a(0),
                  immediate: !1,
                  config: Rt.$W.stiff
                })) : (r.start({
                  ...s(100),
                  immediate: !1,
                  config: Rt.$W.stiff
                }), t.start({
                  ...a(100),
                  immediate: !1,
                  config: Rt.$W.stiff
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
          }), _ = (0, Rt.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: Rt.$W.stiff,
            ref: y,
            immediate: h || d,
            onStart: (e, r, t) => {
              t ? u?.() : p?.()
            },
            onRest: (e, r, t) => {
              t ? f?.() : v?.()
            }
          });
          (0, S.useEffect)(() => {
            y.start()
          }, [s]);
          const j = (0, fe.UP)(g, a),
            C = m && !h && !o && x(),
            O = (0, z.v6)({
              "data-testid": r,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                t?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, n),
            P = (0, Rt.CS)(Na);
          return _((r, t) => t ? (0, R.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, R.jsx)(P, {
              forceMount: !0,
              ref: j,
              ...O,
              style: r,
              children: e
            })
          }) : null)
        }),
        Av = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, R.jsx)(Ia, {
            ref: t,
            ...o
          })
        }),
        Vv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(Ea, {
            ref: t,
            ...o
          })
        }),
        Mv = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_xov33nh",
            "data-testid": r
          }, t);
          return (0, R.jsxs)(mv, {
            ref: o,
            ...n,
            children: [(0, R.jsx)(hv, {
              className: "foundry_xov33ni",
              children: e
            }), (0, R.jsx)(gv, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, R.jsx)(wv, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        qv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
              "data-testid": r,
              className: "foundry_xov33ne"
            }, t),
            a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        Fv = (0, S.forwardRef)(({
          align: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              "data-testid": t,
              className: Nv({
                align: e
              })
            }, o),
            s = r ? pe.DX : "header";
          return (0, R.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Bv = (0, S.forwardRef)(({
          testId: e,
          appearance: r = "sentence",
          ...t
        }, o) => {
          const n = (0, z.v6)({
            "data-testid": e,
            className: Sv({
              appearance: r
            })
          }, t);
          return (0, R.jsx)(Ia, {
            ref: o,
            ...n
          })
        }),
        Xv = (0, S.forwardRef)((e, r) => {
          const t = (0, z.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, R.jsx)(Zu.K, {
            ref: r,
            ...t,
            appearance: "ghost",
            size: "LG"
          })
        }),
        Gv = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, t),
            a = r ? (0, R.jsx)(pe.DX, {
              ref: o,
              ...n
            }) : (0, R.jsx)(wu, {
              ref: o,
              ...n,
              size: "LG"
            });
          return (0, R.jsx)(Aa, {
            asChild: !0,
            children: a
          })
        }),
        Kv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, t),
            a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        Zv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, t),
            a = e ? pe.DX : "footer";
          return (0, R.jsx)(a, {
            ref: o,
            ...n
          })
        });
      var Hv = "Avatar",
        [Wv, Uv] = (0, Dt.A)(Hv),
        $v = [0, () => {}],
        [Yv, Qv] = Wv(Hv),
        Jv = S.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            ...o
          } = e, [n, a] = S.useState("idle"), [s, i] = function() {
            let e = $v; {
              e = S.useState(0);
              const [r] = e, t = S.useRef(!1);
              S.useEffect(() => {
                r > 1 && !t.current && (t.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [r])
            }
            return e
          }();
          return (0, R.jsx)(Yv, {
            scope: t,
            imageLoadingStatus: n,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, R.jsx)(kt.sG.span, {
              ...o,
              ref: r
            })
          })
        });
      Jv.displayName = Hv;
      var ey = "AvatarImage",
        ry = S.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            src: o,
            onLoadingStatusChange: n,
            ...a
          } = e, s = Qv(ey, t);
          var i;
          i = s.setImageCount, S.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: r,
              setLoadingStatus: t,
              referrerPolicy: o,
              crossOrigin: n
            }) {
              return (0, Ht.N)(() => {
                if (!e) return void t("error");
                const r = new window.Image,
                  a = e => {
                    const r = e.currentTarget;
                    t(oy(r))
                  },
                  s = () => t("error");
                return r.addEventListener("load", a), r.addEventListener("error", s), o && (r.referrerPolicy = o), r.crossOrigin = n ?? null, r.src = e, t(oy(r)), () => {
                  r.removeEventListener("load", a), r.removeEventListener("error", s), t("idle")
                }
              }, [e, n, o, t]), r
            }(o, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, zt.c)(e => {
              n?.(e)
            }),
            c = S.useRef(d);
          return (0, Ht.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, R.jsx)(kt.sG.img, {
            ...a,
            ref: r,
            src: o
          }) : null
        });
      ry.displayName = ey;
      var ty = "AvatarFallback";

      function oy(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function ny(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function ay(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function sy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ay(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ny(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ay(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function iy(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      S.forwardRef((e, r) => {
        const {
          __scopeAvatar: t,
          delayMs: o,
          ...n
        } = e, a = Qv(ty, t), [s, i] = S.useState(void 0 === o);
        return S.useEffect(() => {
          if (void 0 !== o) {
            const e = window.setTimeout(() => i(!0), o);
            return () => window.clearTimeout(e)
          }
        }, [o]), s && "loaded" !== a.imageLoadingStatus ? (0, R.jsx)(kt.sG.span, {
          ...n,
          ref: r
        }) : null
      }).displayName = ty;
      var dy = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ly = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = sy(sy({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) dy(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iy(e.variantClassNames, e => iy(e, e => e.split(" ")[0]))
            }
          }, r
        },
        cy = ly({
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
        uy = "var(--foundry_v912w22)",
        fy = "var(--foundry_v912w23)",
        py = ly({
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
        vy = ly({
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
        yy = "var(--foundry_v912w21)",
        by = "var(--foundry_v912w20)",
        my = ly({
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
      const hy = (0, S.createContext)(null);

      function gy() {
        const e = (0, S.useContext)(hy);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const wy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          size: o,
          status: n,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, z.v6)({
            "data-testid": t,
            "aria-disabled": a,
            className: cy({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, R.jsx)(hy.Provider, {
            value: {
              size: o,
              status: n,
              isDisabled: a
            },
            children: (0, R.jsx)(Jv, {
              ref: i,
              ...d,
              children: r
            })
          })
        }),
        xy = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          src: t,
          ...o
        }, n) => {
          const {
            size: a,
            isDisabled: s
          } = gy(), [i, d] = (0, S.useState)(!1);
          (0, S.useEffect)(() => {
            d(!1)
          }, [t]);
          const l = i || !t ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : t,
            c = (0, z.v6)({
              className: py({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, o);
          return (0, R.jsx)("span", {
            className: vy({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": r,
            "aria-hidden": !0,
            children: (0, R.jsx)(ry, {
              ref: n,
              ...c
            })
          })
        }),
        _y = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const n = (0, S.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = gy(),
            d = s || "online",
            l = (0, fe.UP)(n, o),
            c = (0, z.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: my({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, D.D)({
                [by]: r?.online,
                [yy]: r?.offline,
                [uy]: r?.away,
                [fy]: r?.busy
              })
            }, t);
          return (0, R.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function jy(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Cy(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Oy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Cy(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = jy(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cy(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Py(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Ry = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ny = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Oy(Oy({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ry(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Py(e.variantClassNames, e => Py(e, e => e.split(" ")[0]))
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
      const Sy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              "data-testid": t,
              className: "foundry_2jlbzt0"
            }, o),
            s = e ? pe.DX : "nav";
          return (0, R.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Dy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              role: "list",
              "data-testid": t,
              className: "foundry_2jlbzt1"
            }, o),
            s = e ? pe.DX : "div";
          return (0, R.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        ky = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          isActive: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, fe.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, fu.i)(n, s),
            c = (0, z.v6)({
              role: "listitem",
              "data-testid": o,
              "data-pressed": l,
              "data-active": t,
              className: (0, Ae.clsx)(Ny({
                isActive: t
              }))
            }, d),
            u = e ? pe.DX : "a";
          return (0, R.jsx)(u, {
            ref: i,
            ...c,
            children: r
          })
        }),
        zy = (0, S.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, t);
          return (0, R.jsx)(ky, {
            ref: o,
            ...n,
            children: (0, R.jsx)(Ve.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        Iy = (0, S.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, t);
          return (0, R.jsx)(ky, {
            ref: o,
            ...n,
            children: (0, R.jsx)(Ve.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        Ty = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, z.v6)({
              role: "listitem",
              "data-testid": t,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, o),
            a = e ? pe.DX : "span";
          return (0, R.jsx)(a, {
            ...n,
            children: r || "..."
          })
        },
        Ey = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, z.v6)({
              "data-testid": t,
              className: "foundry_2jlbzt8"
            }, o),
            a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ...n,
            children: r
          })
        },
        Ly = (0, S.createContext)(null);

      function Ay() {
        const e = (0, S.useContext)(Ly);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const Vy = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, S.useId)(),
            a = (0, z.v6)({
              "data-testid": t,
              className: "foundry_2jlbztb"
            }, o),
            s = e ? pe.DX : "div";
          return (0, R.jsx)(Ly.Provider, {
            value: {
              labelId: n
            },
            children: (0, R.jsx)(s, {
              ...a,
              children: r
            })
          })
        },
        My = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Ay(), s = (0, z.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, o), i = e ? pe.DX : "label";
          return (0, R.jsx)(i, {
            ref: n,
            id: a,
            ...s,
            children: r
          })
        }),
        qy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          placeholder: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Ay(), s = (0, z.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, o), i = e ? pe.DX : Pd;
          return (0, R.jsxs)(i, {
            ...s,
            children: [(0, R.jsxs)(Dd, {
              ref: n,
              children: [(0, R.jsx)(kd, {
                placeholder: t
              }), (0, R.jsx)(zd, {})]
            }), (0, R.jsx)(Md, {
              children: (0, R.jsx)(Rd, {
                children: (0, R.jsx)(Sd, {
                  children: r
                })
              })
            })]
          })
        }),
        Fy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              "data-testid": t
            }, o),
            s = e ? pe.DX : Ld;
          return (0, R.jsx)(s, {
            ...a,
            ref: n,
            children: (0, R.jsx)(Ad, {
              children: r
            })
          })
        }),
        By = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              "data-testid": t,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, o),
            s = e ? pe.DX : "p";
          return (0, R.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        });
      var Xy = "rovingFocusGroup.onEntryFocus",
        Gy = {
          bubbles: !1,
          cancelable: !0
        },
        Ky = "RovingFocusGroup",
        [Zy, Hy, Wy] = mn(Ky),
        [Uy, $y] = (0, Dt.A)(Ky, [Wy]),
        [Yy, Qy] = Uy(Ky),
        Jy = S.forwardRef((e, r) => (0, R.jsx)(Zy.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, R.jsx)(Zy.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, R.jsx)(eb, {
              ...e,
              ref: r
            })
          })
        }));
      Jy.displayName = Ky;
      var eb = S.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            orientation: o,
            loop: n = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: d,
            onEntryFocus: l,
            preventScrollOnEntryFocus: c = !1,
            ...u
          } = e, f = S.useRef(null), p = (0, St.s)(r, f), v = (0, yn.jH)(a), [y, b] = (0, Co.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Ky
          }), [m, h] = S.useState(!1), g = (0, zt.c)(l), w = Hy(t), x = S.useRef(!1), [_, j] = S.useState(0);
          return S.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(Xy, g), () => e.removeEventListener(Xy, g)
          }, [g]), (0, R.jsx)(Yy, {
            scope: t,
            orientation: o,
            dir: v,
            loop: n,
            currentTabStopId: y,
            onItemFocus: S.useCallback(e => b(e), [b]),
            onItemShiftTab: S.useCallback(() => h(!0), []),
            onFocusableItemAdd: S.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: S.useCallback(() => j(e => e - 1), []),
            children: (0, R.jsx)(kt.sG.div, {
              tabIndex: m || 0 === _ ? -1 : 0,
              "data-orientation": o,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Nt.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, Nt.mK)(e.onFocus, e => {
                const r = !x.current;
                if (e.target === e.currentTarget && r && !m) {
                  const r = new CustomEvent(Xy, Gy);
                  if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      r = e.find(e => e.active),
                      t = e.find(e => e.id === y),
                      o = [r, t, ...e].filter(Boolean).map(e => e.ref.current);
                    nb(o, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, Nt.mK)(e.onBlur, () => h(!1))
            })
          })
        }),
        rb = "RovingFocusGroupItem",
        tb = S.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            focusable: o = !0,
            active: n = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Bt.B)(), l = a || d, c = Qy(rb, t), u = c.currentTabStopId === l, f = Hy(t), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: y
          } = c;
          return S.useEffect(() => {
            if (o) return p(), () => v()
          }, [o, p, v]), (0, R.jsx)(Zy.ItemSlot, {
            scope: t,
            id: l,
            focusable: o,
            active: n,
            children: (0, R.jsx)(kt.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: r,
              onMouseDown: (0, Nt.mK)(e.onMouseDown, e => {
                o ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, Nt.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, Nt.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const r = function(e, r, t) {
                  const o = function(e, r) {
                    return "rtl" !== r ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, t);
                  return "vertical" === r && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o) ? void 0 : ob[o]
                }(e, c.orientation, c.dir);
                if (void 0 !== r) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const n = f().filter(e => e.focusable);
                  let a = n.map(e => e.ref.current);
                  if ("last" === r) a.reverse();
                  else if ("prev" === r || "next" === r) {
                    "prev" === r && a.reverse();
                    const n = a.indexOf(e.currentTarget);
                    a = c.loop ? (o = n + 1, (t = a).map((e, r) => t[(o + r) % t.length])) : a.slice(n + 1)
                  }
                  setTimeout(() => nb(a))
                }
                var t, o
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: u,
                hasTabStop: null != y
              }) : s
            })
          })
        });
      tb.displayName = rb;
      var ob = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function nb(e, r = !1) {
        const t = document.activeElement;
        for (const o of e) {
          if (o === t) return;
          if (o.focus({
              preventScroll: r
            }), document.activeElement !== t) return
        }
      }
      var ab = Jy,
        sb = tb,
        ib = "Toggle",
        db = S.forwardRef((e, r) => {
          const {
            pressed: t,
            defaultPressed: o,
            onPressedChange: n,
            ...a
          } = e, [s, i] = (0, Co.i)({
            prop: t,
            onChange: n,
            defaultProp: o ?? !1,
            caller: ib
          });
          return (0, R.jsx)(kt.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: r,
            onClick: (0, Nt.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      db.displayName = ib;
      var lb = "ToggleGroup",
        [cb, ub] = (0, Dt.A)(lb, [$y]),
        fb = $y(),
        pb = S.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e;
          if ("single" === t) {
            const e = o;
            return (0, R.jsx)(bb, {
              role: "radiogroup",
              ...e,
              ref: r
            })
          }
          if ("multiple" === t) {
            const e = o;
            return (0, R.jsx)(mb, {
              role: "toolbar",
              ...e,
              ref: r
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${lb}\``)
        });
      pb.displayName = lb;
      var [vb, yb] = cb(lb), bb = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, Co.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: lb
        });
        return (0, R.jsx)(vb, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: S.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: S.useCallback(() => i(""), [i]),
          children: (0, R.jsx)(wb, {
            ...a,
            ref: r
          })
        })
      }), mb = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, Co.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: lb
        }), d = S.useCallback(e => i((r = []) => [...r, e]), [i]), l = S.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, R.jsx)(vb, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, R.jsx)(wb, {
            ...a,
            ref: r
          })
        })
      });
      pb.displayName = lb;
      var [hb, gb] = cb(lb), wb = S.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          disabled: o = !1,
          rovingFocus: n = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = fb(t), c = (0, yn.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, R.jsx)(hb, {
          scope: t,
          rovingFocus: n,
          disabled: o,
          children: n ? (0, R.jsx)(ab, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, R.jsx)(kt.sG.div, {
              ...u,
              ref: r
            })
          }) : (0, R.jsx)(kt.sG.div, {
            ...u,
            ref: r
          })
        })
      }), xb = "ToggleGroupItem", _b = S.forwardRef((e, r) => {
        const t = yb(xb, e.__scopeToggleGroup),
          o = gb(xb, e.__scopeToggleGroup),
          n = fb(e.__scopeToggleGroup),
          a = t.value.includes(e.value),
          s = o.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = S.useRef(null);
        return o.rovingFocus ? (0, R.jsx)(sb, {
          asChild: !0,
          ...n,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, R.jsx)(jb, {
            ...i,
            ref: r
          })
        }) : (0, R.jsx)(jb, {
          ...i,
          ref: r
        })
      });
      _b.displayName = xb;
      var jb = S.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          value: o,
          ...n
        } = e, a = yb(xb, t), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, R.jsx)(db, {
          ...i,
          ...n,
          ref: r,
          onPressedChange: e => {
            e ? a.onItemActivate(o) : a.onItemDeactivate(o)
          }
        })
      });

      function Cb(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Ob(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Pb(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ob(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Cb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ob(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Rb(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Nb = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Sb = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Pb(Pb({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Nb(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rb(e.variantClassNames, e => Rb(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Db = "var(--foundry_zxwkyk2)",
        kb = "var(--foundry_zxwkyk3)",
        zb = Sb({
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
        Ib = Sb({
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
        Tb = Sb({
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
        Eb = "var(--foundry_zxwkyk1)",
        Lb = "var(--foundry_zxwkyk0)",
        Ab = Sb({
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
      const Vb = (0, S.createContext)(null);

      function Mb() {
        const e = (0, S.useContext)(Vb);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const qb = (0, S.forwardRef)(({
          testId: e,
          size: r,
          type: t = "single",
          ...o
        }, n) => {
          const a = (0, z.v6)({
            "data-testid": e,
            className: zb({
              size: r
            }),
            type: t
          }, o);
          return (0, R.jsx)(Vb.Provider, {
            value: {
              size: r
            },
            children: (0, R.jsx)(pb, {
              ref: n,
              ...a
            })
          })
        }),
        Fb = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Mb(), n = (0, z.v6)({
            "data-testid": e,
            className: Ib({
              size: o
            })
          }, r);
          return (0, R.jsx)(_b, {
            ref: t,
            ...n
          })
        }),
        Bb = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Mb(), n = ys[e];
          return (0, R.jsx)(n, {
            label: "",
            ref: t,
            size: o,
            className: "foundry_zxwkykb",
            ...r
          })
        }),
        Xb = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          status: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
            "data-testid": e,
            className: Ab({
              status: t
            }),
            style: (0, D.D)({
              [Lb]: r?.online,
              [Eb]: r?.offline,
              [Db]: r?.away,
              [kb]: r?.busy
            })
          }, o);
          return (0, R.jsx)("span", {
            ref: n,
            ...a
          })
        }),
        Gb = (0, S.forwardRef)(({
          testId: e,
          variant: r = "default",
          ...t
        }, o) => {
          const {
            size: n
          } = Mb(), a = (0, z.v6)({
            "data-testid": e,
            className: Tb({
              variant: r,
              size: n
            })
          }, t);
          return (0, R.jsx)("span", {
            ref: o,
            ...a
          })
        });
      var Kb = "Popover",
        [Zb, Hb] = (0, Dt.A)(Kb, [Yt]),
        Wb = Yt(),
        [Ub, $b] = Zb(Kb),
        Yb = e => {
          const {
            __scopePopover: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Wb(r), d = S.useRef(null), [l, c] = S.useState(!1), [u, f] = (0, Co.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: Kb
          });
          return (0, R.jsx)(vo, {
            ...i,
            children: (0, R.jsx)(Ub, {
              scope: r,
              contentId: (0, Bt.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: S.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: S.useCallback(() => c(!0), []),
              onCustomAnchorRemove: S.useCallback(() => c(!1), []),
              modal: s,
              children: t
            })
          })
        };
      Yb.displayName = Kb;
      var Qb = "PopoverAnchor",
        Jb = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = $b(Qb, t), a = Wb(t), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = n;
          return S.useEffect(() => (s(), () => i()), [s, i]), (0, R.jsx)(yo, {
            ...a,
            ...o,
            ref: r
          })
        });
      Jb.displayName = Qb;
      var em = "PopoverTrigger",
        rm = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = $b(em, t), a = Wb(t), s = (0, St.s)(r, n.triggerRef), i = (0, R.jsx)(kt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": ym(n.open),
            ...o,
            ref: s,
            onClick: (0, Nt.mK)(e.onClick, n.onOpenToggle)
          });
          return n.hasCustomAnchor ? i : (0, R.jsx)(yo, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      rm.displayName = em;
      var tm = "PopoverPortal",
        [om, nm] = Zb(tm, {
          forceMount: void 0
        }),
        am = e => {
          const {
            __scopePopover: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = $b(tm, r);
          return (0, R.jsx)(om, {
            scope: r,
            forceMount: t,
            children: (0, R.jsx)(wo, {
              present: t || a.open,
              children: (0, R.jsx)(go, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      am.displayName = tm;
      var sm = "PopoverContent",
        im = S.forwardRef((e, r) => {
          const t = nm(sm, e.__scopePopover),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = $b(sm, e.__scopePopover);
          return (0, R.jsx)(wo, {
            present: o || a.open,
            children: a.modal ? (0, R.jsx)(lm, {
              ...n,
              ref: r
            }) : (0, R.jsx)(cm, {
              ...n,
              ref: r
            })
          })
        });
      im.displayName = sm;
      var dm = (0, jo.TL)("PopoverContent.RemoveScroll"),
        lm = S.forwardRef((e, r) => {
          const t = $b(sm, e.__scopePopover),
            o = S.useRef(null),
            n = (0, St.s)(r, o),
            a = S.useRef(!1);
          return S.useEffect(() => {
            const e = o.current;
            if (e) return (0, ca.Eq)(e)
          }, []), (0, R.jsx)(la.A, {
            as: dm,
            allowPinchZoom: !0,
            children: (0, R.jsx)(um, {
              ...e,
              ref: n,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Nt.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || t.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Nt.mK)(e.onPointerDownOutside, e => {
                const r = e.detail.originalEvent,
                  t = 0 === r.button && !0 === r.ctrlKey,
                  o = 2 === r.button || t;
                a.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Nt.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        cm = S.forwardRef((e, r) => {
          const t = $b(sm, e.__scopePopover),
            o = S.useRef(!1),
            n = S.useRef(!1);
          return (0, R.jsx)(um, {
            ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: r => {
              e.onCloseAutoFocus?.(r), r.defaultPrevented || (o.current || t.triggerRef.current?.focus(), r.preventDefault()), o.current = !1, n.current = !1
            },
            onInteractOutside: r => {
              e.onInteractOutside?.(r), r.defaultPrevented || (o.current = !0, "pointerdown" === r.detail.originalEvent.type && (n.current = !0));
              const a = r.target,
                s = t.triggerRef.current?.contains(a);
              s && r.preventDefault(), "focusin" === r.detail.originalEvent.type && n.current && r.preventDefault()
            }
          })
        }),
        um = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: l,
            onInteractOutside: c,
            ...u
          } = e, f = $b(sm, t), p = Wb(t);
          return (0, da.Oh)(), (0, R.jsx)(ra, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, R.jsx)(Lt, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, R.jsx)(bo, {
                "data-state": ym(f.open),
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
        fm = "PopoverClose",
        pm = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = $b(fm, t);
          return (0, R.jsx)(kt.sG.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, Nt.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });
      pm.displayName = fm;
      var vm = S.forwardRef((e, r) => {
        const {
          __scopePopover: t,
          ...o
        } = e, n = Wb(t);
        return (0, R.jsx)(mo, {
          ...n,
          ...o,
          ref: r
        })
      });

      function ym(e) {
        return e ? "open" : "closed"
      }
      vm.displayName = "PopoverArrow";
      var bm = Yb,
        mm = Jb,
        hm = rm,
        gm = am,
        wm = im,
        xm = pm,
        _m = vm;

      function jm(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function Cm(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Om(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Cm(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = jm(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cm(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Pm(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Rm = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Nm = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Om(Om({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Rm(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pm(e.variantClassNames, e => Pm(e, e => e.split(" ")[0]))
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
      const Sm = (0, S.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Dm = ({
          open: e,
          defaultOpen: r,
          onOpenChange: t,
          ...o
        }) => {
          const [n = !1, a] = (0, fe.ic)({
            prop: e,
            defaultProp: r ?? !1,
            onChange: t
          }), s = (0, z.v6)({
            open: n,
            onOpenChange: a
          }, o);
          return (0, R.jsx)(Sm.Provider, {
            value: {
              open: n,
              setOpen: a
            },
            children: (0, R.jsx)(bm, {
              ...s
            })
          })
        },
        km = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, r);
          return (0, R.jsx)(hm, {
            ref: t,
            ...o
          })
        }),
        zm = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Im = (0, S.forwardRef)(({
          children: e,
          size: r = "MD",
          testId: t,
          ...o
        }, n) => {
          const {
            open: a
          } = (0, S.useContext)(Sm), s = (0, S.useRef)(null), i = (0, fe.UP)(s, n), {
            buttonProps: d
          } = (0, fe.sL)(o, s), l = (0, z.v6)({
            "data-testid": t,
            className: Nm({
              size: r
            })
          }, d), c = a ? Ve.ChevronUp : Ve.ChevronDown;
          return (0, R.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, R.jsx)(c, {
              label: "",
              size: zm[r]
            })]
          })
        }),
        Tm = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(mm, {
            ref: t,
            ...o
          })
        }),
        Em = (0, S.forwardRef)(({
          sideOffset: e = 6,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            sideOffset: e,
            "data-testid": r,
            className: "foundry_lroh6l6"
          }, t);
          return (0, R.jsx)(wm, {
            ref: o,
            ...n
          })
        }),
        Lm = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, r);
          return (0, R.jsx)(_m, {
            ref: t,
            ...o
          })
        }),
        Am = e => (0, R.jsx)(gm, {
          ...e
        }),
        Vm = e => (0, R.jsx)(xm, {
          ...e
        });

      function Mm(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function qm(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Fm(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? qm(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Mm(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qm(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Bm(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Xm = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Gm = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Fm(Fm({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xm(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bm(e.variantClassNames, e => Bm(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Km = "var(--foundry_rmorls2)",
        Zm = Gm({
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
        Hm = "var(--foundry_rmorls0)",
        Wm = Gm({
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
        Um = "var(--foundry_rmorls3)",
        $m = "var(--foundry_rmorls1)",
        Ym = Gm({
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
        Qm = "Progress",
        [Jm, eh] = (0, Dt.A)(Qm),
        [rh, th] = Jm(Qm),
        oh = S.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            value: o = null,
            max: n,
            getValueLabel: a = sh,
            ...s
          } = e;
          !n && 0 !== n || lh(n) || console.error(`Invalid prop \`max\` of value \`${n}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = lh(n) ? n : 100;
          null === o || ch(o, i) || console.error(`Invalid prop \`value\` of value \`${`${o}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = ch(o, i) ? o : null,
            l = dh(d) ? a(d, i) : void 0;
          return (0, R.jsx)(rh, {
            scope: t,
            value: d,
            max: i,
            children: (0, R.jsx)(kt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": dh(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": ih(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: r
            })
          })
        });
      oh.displayName = Qm;
      var nh = "ProgressIndicator",
        ah = S.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            ...o
          } = e, n = th(nh, t);
          return (0, R.jsx)(kt.sG.div, {
            "data-state": ih(n.value, n.max),
            "data-value": n.value ?? void 0,
            "data-max": n.max,
            ...o,
            ref: r
          })
        });

      function sh(e, r) {
        return `${Math.round(e/r*100)}%`
      }

      function ih(e, r) {
        return null == e ? "indeterminate" : e === r ? "complete" : "loading"
      }

      function dh(e) {
        return "number" == typeof e
      }

      function lh(e) {
        return dh(e) && !isNaN(e) && e > 0
      }

      function ch(e, r) {
        return dh(e) && !isNaN(e) && e <= r && e >= 0
      }
      ah.displayName = nh;
      var uh = oh,
        fh = ah;
      const ph = (0, S.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        vh = (0, S.forwardRef)(({
          size: e = "MD",
          max: r,
          value: t,
          ...o
        }, n) => {
          const a = Math.round(t / r * 100),
            s = "number" != typeof t || "number" != typeof r;
          return (0, R.jsx)(ph.Provider, {
            value: {
              value: t,
              max: r,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, R.jsx)(yh, {
              ...o,
              ref: n
            })
          })
        }),
        yh = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, t),
            a = r ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ...n,
            ref: o
          })
        }),
        bh = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const {
            value: n,
            max: a,
            size: s
          } = (0, S.useContext)(ph), i = (0, z.v6)({
            "data-testid": e,
            className: Wm({
              size: s
            }),
            value: n,
            max: a,
            style: (0, D.D)({
              [Um]: r
            }),
            "data-track": !0
          }, t);
          return (0, R.jsx)(uh, {
            ref: o,
            ...i
          })
        }),
        mh = (0, S.forwardRef)(({
          testId: e,
          transitionDuration: r = 500,
          colorOverride: t,
          ...o
        }, n) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, S.useContext)(ph), i = s ? "-100%" : `-${100-a}%`, d = (0, z.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, D.D)({
              [Hm]: i,
              [$m]: `${r}ms`,
              [Km]: t
            })
          }, o);
          return (0, R.jsx)(fh, {
            ref: n,
            ...d
          })
        }),
        hh = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const {
            size: n
          } = (0, S.useContext)(ph), a = (0, z.v6)({
            "data-testid": r,
            className: Zm({
              size: n
            }),
            "aria-hidden": !0
          }, t), s = e ? pe.DX : "span";
          return (0, R.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        gh = (0, S.forwardRef)(({
          testId: e,
          format: r,
          ...t
        }, o) => {
          const {
            value: n,
            max: a,
            size: s,
            percentage: i,
            isInvalid: d
          } = (0, S.useContext)(ph), l = (0, z.v6)({
            "data-testid": e,
            className: Zm({
              size: s
            }),
            "aria-hidden": !0
          }, t);
          return d ? (0, R.jsx)("span", {
            ref: o,
            ...l
          }) : "percentage" === r ? (0, R.jsxs)("span", {
            ref: o,
            ...l,
            children: [i, " ", (0, R.jsx)("span", {
              className: Ym({
                size: s
              }),
              children: "%"
            })]
          }) : (0, R.jsxs)("span", {
            ref: o,
            ...l,
            children: [n, "/", a]
          })
        });
      var wh = "Collapsible",
        [xh, _h] = (0, Dt.A)(wh),
        [jh, Ch] = xh(wh),
        Oh = S.forwardRef((e, r) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: n,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, Co.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: s,
            caller: wh
          });
          return (0, R.jsx)(jh, {
            scope: t,
            disabled: a,
            contentId: (0, Bt.B)(),
            open: d,
            onOpenToggle: S.useCallback(() => l(e => !e), [l]),
            children: (0, R.jsx)(kt.sG.div, {
              "data-state": kh(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: r
            })
          })
        });
      Oh.displayName = wh;
      var Ph = "CollapsibleTrigger",
        Rh = S.forwardRef((e, r) => {
          const {
            __scopeCollapsible: t,
            ...o
          } = e, n = Ch(Ph, t);
          return (0, R.jsx)(kt.sG.button, {
            type: "button",
            "aria-controls": n.open ? n.contentId : void 0,
            "aria-expanded": n.open || !1,
            "data-state": kh(n.open),
            "data-disabled": n.disabled ? "" : void 0,
            disabled: n.disabled,
            ...o,
            ref: r,
            onClick: (0, Nt.mK)(e.onClick, n.onOpenToggle)
          })
        });
      Rh.displayName = Ph;
      var Nh = "CollapsibleContent",
        Sh = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ch(Nh, e.__scopeCollapsible);
          return (0, R.jsx)(wo, {
            present: t || n.open,
            children: ({
              present: e
            }) => (0, R.jsx)(Dh, {
              ...o,
              ref: r,
              present: e
            })
          })
        });
      Sh.displayName = Nh;
      var Dh = S.forwardRef((e, r) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: n,
          ...a
        } = e, s = Ch(Nh, t), [i, d] = S.useState(o), l = S.useRef(null), c = (0, St.s)(r, l), u = S.useRef(0), f = u.current, p = S.useRef(0), v = p.current, y = s.open || i, b = S.useRef(y), m = S.useRef(void 0);
        return S.useEffect(() => {
          const e = requestAnimationFrame(() => b.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, Ht.N)(() => {
          const e = l.current;
          if (e) {
            m.current = m.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const r = e.getBoundingClientRect();
            u.current = r.height, p.current = r.width, b.current || (e.style.transitionDuration = m.current.transitionDuration, e.style.animationName = m.current.animationName), d(o)
          }
        }, [s.open, o]), (0, R.jsx)(kt.sG.div, {
          "data-state": kh(s.open),
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
          children: y && n
        })
      });

      function kh(e) {
        return e ? "open" : "closed"
      }
      var zh = Oh,
        Ih = Rh,
        Th = Sh,
        Eh = "Accordion",
        Lh = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [Ah, Vh, Mh] = mn(Eh),
        [qh, Fh] = (0, Dt.A)(Eh, [Mh, _h]),
        Bh = _h(),
        Xh = S.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e, n = o, a = o;
          return (0, R.jsx)(Ah.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, R.jsx)(Uh, {
              ...a,
              ref: r
            }) : (0, R.jsx)(Wh, {
              ...n,
              ref: r
            })
          })
        });
      Xh.displayName = Eh;
      var [Gh, Kh] = qh(Eh), [Zh, Hh] = qh(Eh, {
        collapsible: !1
      }), Wh = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          collapsible: a = !1,
          ...s
        } = e, [i, d] = (0, Co.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: Eh
        });
        return (0, R.jsx)(Gh, {
          scope: e.__scopeAccordion,
          value: S.useMemo(() => i ? [i] : [], [i]),
          onItemOpen: d,
          onItemClose: S.useCallback(() => a && d(""), [a, d]),
          children: (0, R.jsx)(Zh, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, R.jsx)(Qh, {
              ...s,
              ref: r
            })
          })
        })
      }), Uh = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, Co.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: Eh
        }), d = S.useCallback(e => i((r = []) => [...r, e]), [i]), l = S.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, R.jsx)(Gh, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: l,
          children: (0, R.jsx)(Zh, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, R.jsx)(Qh, {
              ...a,
              ref: r
            })
          })
        })
      }), [$h, Yh] = qh(Eh), Qh = S.forwardRef((e, r) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: n,
          orientation: a = "vertical",
          ...s
        } = e, i = S.useRef(null), d = (0, St.s)(i, r), l = Vh(t), c = "ltr" === (0, yn.jH)(n), u = (0, Nt.mK)(e.onKeyDown, e => {
          if (!Lh.includes(e.key)) return;
          const r = e.target,
            t = l().filter(e => !e.ref.current?.disabled),
            o = t.findIndex(e => e.ref.current === r),
            n = t.length;
          if (-1 === o) return;
          e.preventDefault();
          let s = o;
          const i = n - 1,
            d = () => {
              s = o + 1, s > i && (s = 0)
            },
            u = () => {
              s = o - 1, s < 0 && (s = i)
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
          const f = s % n;
          t[f].ref.current?.focus()
        });
        return (0, R.jsx)($h, {
          scope: t,
          disabled: o,
          direction: n,
          orientation: a,
          children: (0, R.jsx)(Ah.Slot, {
            scope: t,
            children: (0, R.jsx)(kt.sG.div, {
              ...s,
              "data-orientation": a,
              ref: d,
              onKeyDown: o ? void 0 : u
            })
          })
        })
      }), Jh = "AccordionItem", [eg, rg] = qh(Jh), tg = S.forwardRef((e, r) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...n
        } = e, a = Yh(Jh, t), s = Kh(Jh, t), i = Bh(t), d = (0, Bt.B)(), l = o && s.value.includes(o) || !1, c = a.disabled || e.disabled;
        return (0, R.jsx)(eg, {
          scope: t,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, R.jsx)(zh, {
            "data-orientation": a.orientation,
            "data-state": lg(l),
            ...i,
            ...n,
            ref: r,
            disabled: c,
            open: l,
            onOpenChange: e => {
              e ? s.onItemOpen(o) : s.onItemClose(o)
            }
          })
        })
      });
      tg.displayName = Jh;
      var og = "AccordionHeader",
        ng = S.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Yh(Eh, t), a = rg(og, t);
          return (0, R.jsx)(kt.sG.h3, {
            "data-orientation": n.orientation,
            "data-state": lg(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: r
          })
        });
      ng.displayName = og;
      var ag = "AccordionTrigger",
        sg = S.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Yh(Eh, t), a = rg(ag, t), s = Hh(ag, t), i = Bh(t);
          return (0, R.jsx)(Ah.ItemSlot, {
            scope: t,
            children: (0, R.jsx)(Ih, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": n.orientation,
              id: a.triggerId,
              ...i,
              ...o,
              ref: r
            })
          })
        });
      sg.displayName = ag;
      var ig = "AccordionContent",
        dg = S.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Yh(Eh, t), a = rg(ig, t), s = Bh(t);
          return (0, R.jsx)(Th, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": n.orientation,
            ...s,
            ...o,
            ref: r,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function lg(e) {
        return e ? "open" : "closed"
      }
      dg.displayName = ig;
      var cg = Xh,
        ug = tg,
        fg = ng,
        pg = sg,
        vg = dg;

      function yg(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function bg(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function mg(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? bg(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = yg(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bg(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function hg(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var gg = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        wg = "foundry_1vzsjid2",
        xg = "foundry_1vzsjidm",
        _g = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = mg(mg({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gg(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hg(e.variantClassNames, e => hg(e, e => e.split(" ")[0]))
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
      const jg = (0, S.createContext)({
          mode: "solid",
          layer: 0
        }),
        Cg = (0, S.forwardRef)(({
          mode: e,
          layer: r,
          type: t = "single",
          ...o
        }, n) => (0, R.jsx)(jg.Provider, {
          value: {
            mode: e,
            layer: r
          },
          children: (0, R.jsx)(Og, {
            ...o,
            ref: n,
            type: t
          })
        })),
        Og = (0, S.forwardRef)(({
          testId: e,
          type: r = "single",
          ...t
        }, o) => {
          const n = (0, z.v6)({
            "data-testid": e,
            type: r
          }, t);
          return (0, R.jsx)(cg, {
            className: "foundry_1vzsjid0",
            ref: o,
            ...n
          })
        }),
        Pg = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            mode: o,
            layer: n
          } = (0, S.useContext)(jg), a = (0, z.v6)({
            className: _g({
              mode: o,
              layer: n
            }),
            "data-testid": e
          }, r);
          return (0, R.jsx)(ug, {
            ref: t,
            ...a
          })
        }),
        Rg = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, r);
          return (0, R.jsx)(fg, {
            ref: t,
            ...o
          })
        }),
        Ng = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": r
          }, t);
          return (0, R.jsx)(pg, {
            ref: o,
            ...n,
            children: t.asChild && (0, S.isValidElement)(e) ? (0, S.cloneElement)(e, {
              children: (0, R.jsx)("span", {
                className: wg,
                children: e.props.children
              })
            }) : (0, R.jsx)("span", {
              className: wg,
              children: e
            })
          })
        }),
        Sg = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = ys[e],
            n = (0, z.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            size: "LG",
            ...n
          })
        }),
        Dg = (0, S.forwardRef)(({
          icon: e = "ChevronDown",
          ...r
        }, t) => {
          const o = ys[e],
            n = (0, z.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            size: "LG",
            ...n
          })
        }),
        kg = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": t,
            asChild: r
          }, o);
          return (0, R.jsx)(vg, {
            ref: n,
            ...a,
            children: r && (0, S.isValidElement)(e) ? (0, S.cloneElement)(e, {
              children: (0, R.jsx)("div", {
                className: xg,
                children: e.props.children
              })
            }) : (0, R.jsx)("div", {
              className: xg,
              children: e
            })
          })
        })
    },
    69088(e, r, t) {
      t.d(r, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => i
      });
      var o = t(17172),
        n = t(39793),
        a = t(93082),
        s = t(84045);
      const i = ({
        enabled: e = !0,
        ...r
      }) => {
        const t = e ? s.s6 : a.Fragment;
        return (0, n.jsx)(t, {
          ...r
        })
      }
    },
    77301(e, r, t) {
      t.d(r, {
        b: () => i
      });
      var o = t(93082),
        n = t(84045),
        a = t(39793),
        s = ({
          children: e,
          label: r
        }) => {
          const t = o.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [o.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(n.bL, {
              children: r
            })]
          })
        };
      s.displayName = "AccessibleIcon";
      var i = s
    },
    13165(e, r, t) {
      t.d(r, {
        hO: () => d,
        sG: () => i
      });
      var o = t(93082),
        n = t(84017),
        a = t(17172),
        s = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const t = (0, a.TL)(`Primitive.${r}`),
            n = o.forwardRef((e, o) => {
              const {
                asChild: n,
                ...a
              } = e, i = n ? t : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(i, {
                ...a,
                ref: o
              })
            });
          return n.displayName = `Primitive.${r}`, {
            ...e,
            [r]: n
          }
        }, {});

      function d(e, r) {
        e && n.flushSync(() => e.dispatchEvent(r))
      }
    },
    84045(e, r, t) {
      t.d(r, {
        Qg: () => s,
        bL: () => d,
        s6: () => i
      });
      var o = t(93082),
        n = t(13165),
        a = t(39793),
        s = Object.freeze({
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
        i = o.forwardRef((e, r) => (0, a.jsx)(n.sG.span, {
          ...e,
          ref: r,
          style: {
            ...s,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var d = i
    }
  }
]);