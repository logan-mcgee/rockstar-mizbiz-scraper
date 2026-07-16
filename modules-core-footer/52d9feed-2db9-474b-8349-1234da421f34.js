try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "52d9feed-2db9-474b-8349-1234da421f34", e._sentryDebugIdIdentifier = "sentry-dbid-52d9feed-2db9-474b-8349-1234da421f34")
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
  [3998], {
    63998(e, r, t) {
      t.r(r), t.d(r, {
        Accordion: () => P,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => x,
        Badge: () => h,
        Body: () => wr,
        Breadcrumbs: () => m,
        Button: () => Ve,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => _r,
        Dialog: () => w,
        Display: () => jr,
        Divider: () => rr,
        Dropdown: () => a,
        Heading: () => Or,
        IconButton: () => We,
        Label: () => Rr,
        Lightbox: () => n,
        Loader: () => fr,
        Pagination: () => _,
        Popover: () => C,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => Oe,
        Switch: () => s,
        Tag: () => y,
        Text: () => Dr,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => Sr,
        Toast: () => b,
        Tooltip: () => o
      });
      var o = {};
      t.r(o), t.d(o, {
        Arrow: () => rn,
        Content: () => en,
        Portal: () => tn,
        Root: () => Qo,
        Trigger: () => Jo,
        useTooltipContext: () => Yo
      });
      var n = {};
      t.r(n), t.d(n, {
        Caption: () => Xa,
        Close: () => Wa,
        Content: () => Va,
        Controls: () => Ga,
        CssVars: () => Ya,
        Download: () => $a,
        Image: () => Ba,
        Keyboard: () => Za,
        LightboxContext: () => Sa,
        OpenIcon: () => Ea,
        Overlay: () => Aa,
        Portal: () => La,
        Reset: () => Ua,
        Root: () => Da,
        RootImplContext: () => za,
        Thumbnail: () => Ta,
        Trigger: () => Ia,
        Zoom: () => Ha,
        ZoomPan: () => Ma
      });
      var a = {};
      t.r(a), t.d(a, {
        Content: () => md,
        Description: () => Cd,
        Hint: () => Od,
        Label: () => jd,
        Option: () => Pd,
        OptionIcon: () => Nd,
        OptionText: () => Rd,
        Portal: () => Sd,
        Root: () => bd,
        ScrollArea: () => gd,
        StatusIcon: () => zd,
        StatusRoot: () => Dd,
        StatusText: () => kd,
        Trigger: () => wd,
        TriggerIcon: () => _d,
        TriggerText: () => xd,
        Viewport: () => hd,
        useDropdownContext: () => yd
      });
      var s = {};
      t.r(s), t.d(s, {
        Description: () => Yd,
        Input: () => Ud,
        Label: () => $d,
        Root: () => Wd,
        useSwitchContext: () => Hd
      });
      var i = {};
      t.r(i), t.d(i, {
        CheckLG: () => el,
        CheckMD: () => Jd,
        CheckXL: () => rl,
        DashLG: () => ol,
        DashMD: () => tl,
        DashXL: () => nl
      });
      var d = {};
      t.r(d), t.d(d, {
        Description: () => _l,
        ErrorText: () => jl,
        Group: () => Pl,
        GroupDescription: () => Nl,
        GroupErrorText: () => Dl,
        GroupItems: () => Sl,
        GroupLabel: () => Rl,
        Input: () => wl,
        Label: () => xl,
        Root: () => gl,
        useGroupContext: () => Ol
      });
      var l = {};
      t.r(l), t.d(l, {
        Description: () => Zl,
        Hint: () => Hl,
        Input: () => Kl,
        Label: () => Gl,
        Root: () => Xl,
        RootContext: () => Fl,
        StatusIcon: () => Ul,
        StatusRoot: () => Wl,
        StatusText: () => $l,
        useTextAreaContext: () => Bl
      });
      var c = {};
      t.r(c), t.d(c, {
        DotLG: () => _c,
        DotMD: () => xc,
        DotXL: () => jc
      });
      var u = {};
      t.r(u), t.d(u, {
        Description: () => fc,
        Input: () => Oc,
        Label: () => uc,
        Option: () => Cc,
        OptionDescription: () => Rc,
        OptionLabel: () => Pc,
        Options: () => cc,
        Root: () => lc,
        StatusIcon: () => vc,
        StatusRoot: () => pc,
        StatusText: () => yc,
        useRadioGroupContext: () => dc
      });
      var f = {};
      t.r(f), t.d(f, {
        Button: () => $c,
        Control: () => Hc,
        Description: () => Qc,
        Hint: () => Zc,
        Icon: () => Uc,
        Input: () => Wc,
        Label: () => Kc,
        PasswordButton: () => Yc,
        Root: () => Gc,
        StatusIcon: () => eu,
        StatusRoot: () => Jc,
        StatusText: () => ru
      });
      var p = {};
      t.r(p), t.d(p, {
        Body: () => Cu,
        CloseButton: () => ku,
        Description: () => Nu,
        ErrorText: () => zu,
        Footer: () => Du,
        Header: () => ju,
        Icon: () => Pu,
        Link: () => Su,
        Root: () => _u,
        RootContext: () => wu,
        Title: () => Ru,
        iconStatusMap: () => Ou,
        useAlertContext: () => xu
      });
      var v = {};
      t.r(v), t.d(v, {
        Alert: () => $u,
        CloseButton: () => Ju,
        Description: () => Uu,
        Icon: () => Wu,
        Link: () => Qu,
        PaginationCounter: () => of,
        PaginationNav: () => ef,
        PaginationNextButton: () => rf,
        PaginationPrevButton: () => tf,
        PaginationViewport: () => Yu,
        Root: () => Zu,
        RootContext: () => Gu,
        iconStatusMap: () => Hu,
        useAlertBannerContext: () => Ku
      });
      var y = {};
      t.r(y), t.d(y, {
        CloseButton: () => gf,
        Icon: () => hf,
        Label: () => mf,
        Root: () => bf,
        RootContext: () => vf,
        useTagContext: () => yf
      });
      var b = {};
      t.r(b), t.d(b, {
        Action: () => jp,
        CloseButton: () => Cp,
        Description: () => wp,
        Icon: () => _p,
        Provider: () => yp,
        Root: () => gp,
        RootContext: () => mp,
        Viewport: () => bp,
        iconAppearanceMap: () => xp,
        useToastContext: () => hp
      });
      var m = {};
      t.r(m), t.d(m, {
        Icon: () => Mp,
        Item: () => Vp,
        OverflowMenu: () => qp,
        OverflowMenuItem: () => Fp,
        Root: () => Ap,
        RootContext: () => Lp,
        useBreadcrumbsContext: () => Ep
      });
      var h = {};
      t.r(h), t.d(h, {
        Icon: () => Qp,
        Label: () => Yp,
        Root: () => $p,
        useBadgeContext: () => Up
      });
      var g = {};
      t.r(g), t.d(g, {
        Corner: () => uv,
        Root: () => iv,
        Scrollbar: () => lv,
        Thumb: () => cv,
        Viewport: () => dv
      });
      var w = {};
      t.r(w), t.d(w, {
        ActionArea: () => Ev,
        CloseButton: () => Tv,
        Content: () => Pv,
        Description: () => Nv,
        Footer: () => Lv,
        Header: () => zv,
        HeaderButton: () => Iv,
        HeaderTitle: () => kv,
        Layout: () => Dv,
        Overlay: () => Ov,
        Portal: () => Cv,
        Root: () => xv,
        ScrollArea: () => Sv,
        Title: () => Rv,
        Trigger: () => jv
      });
      var x = {};
      t.r(x), t.d(x, {
        Image: () => uy,
        Root: () => cy,
        StatusIndicator: () => fy,
        useAvatarContext: () => ly
      });
      var _ = {};
      t.r(_), t.d(_, {
        Controls: () => Oy,
        Dropdown: () => Dy,
        DropdownLabel: () => Sy,
        Ellipsis: () => Cy,
        Item: () => xy,
        Label: () => ky,
        Next: () => jy,
        Option: () => zy,
        Pages: () => wy,
        Prev: () => _y,
        ResultsPerPage: () => Ny,
        Root: () => gy
      });
      var j = {};
      t.r(j), t.d(j, {
        Icon: () => kb,
        Item: () => zb,
        Label: () => Tb,
        Root: () => Db,
        StatusIndicator: () => Ib,
        useChipGroupContext: () => Sb
      });
      var C = {};
      t.r(C), t.d(C, {
        Anchor: () => Cm,
        Arrow: () => Pm,
        Close: () => Nm,
        Content: () => Om,
        Portal: () => Rm,
        Root: () => wm,
        RootContext: () => gm,
        Trigger: () => xm,
        TriggerButton: () => jm
      });
      var O = {};
      t.r(O), t.d(O, {
        Indicator: () => ih,
        Label: () => dh,
        Root: () => nh,
        Track: () => sh,
        UnitLabel: () => lh
      });
      var P = {};
      t.r(P), t.d(P, {
        Content: () => xg,
        Header: () => mg,
        Icon: () => gg,
        Item: () => bg,
        Root: () => vg,
        Trigger: () => hg,
        TriggerIcon: () => wg
      });
      var R = t(39793),
        N = t(11350),
        S = t(4637),
        D = t(64001),
        z = (t(54540), {
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
        k = t(7912);
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
              } = (0, k.IO)(c, () => {
                const e = (0, N.J1)(a);
                return {
                  text: d || (e > r ? z.color.black.static[100] : z.color.white.static[100]),
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
        pe = t(69088),
        ve = t(68532),
        ye = t(77301);

      function be(e) {
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

      function me(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function he(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? me(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = be(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : me(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ge(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var we, xe, _e = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        je = (we = {
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
        }, xe = e => {
          var r = we.defaultClassName,
            t = he(he({}, we.defaultVariants), e);
          for (var o in t) {
            var n, a = null !== (n = t[o]) && void 0 !== n ? n : we.defaultVariants[o];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = we.variantClassNames[o][s];
              i && (r += " " + i)
            }
          }
          for (var [d, l] of we.compoundVariants) _e(d, t, we.defaultVariants) && (r += " " + l);
          return r
        }, xe.variants = () => Object.keys(we.variantClassNames), xe.classNames = {
          get base() {
            return we.defaultClassName.split(" ")[0]
          },
          get variants() {
            return ge(we.variantClassNames, e => ge(e, e => e.split(" ")[0]))
          }
        }, xe);
      const Ce = "pageMD",
        Oe = (0, S.forwardRef)(({
          label: e,
          hideTrack: r = !1,
          size: t = Ce,
          testId: o,
          ...n
        }, a) => {
          const s = (0, ve.zQ)(),
            i = "string" == typeof t ? t : t?.[s] ?? t.default ?? Ce,
            d = (0, k.v6)({
              className: je({
                size: i
              }),
              "data-testid": o,
              "aria-label": e
            }, n);
          return (0, R.jsx)(ye.b, {
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
      var Pe = t(4921),
        Re = t(11400);

      function Ne(e) {
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

      function Se(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function De(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Se(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ne(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Se(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ze(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ke = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ie = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = De(De({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ke(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ze(e.variantClassNames, e => ze(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Te = Ie({
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
      Ie({
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
      var Ee = Ie({
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
        Le = Ie({
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
        Ae = Ie({
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
      const Ve = (0, S.forwardRef)(({
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
          O = (0, ve.zQ)(),
          P = "string" == typeof d ? d : d?.[O] ?? d.default ?? "MD",
          {
            buttonProps: N
          } = (0, fe.sL)((0, k.v6)(x, {
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
        const D = (0, k.v6)({
            className: Te({
              appearance: i,
              size: P,
              fullWidth: l,
              iconLeft: !!o,
              iconRight: !!a
            }),
            "data-testid": e
          }, N),
          z = o && Re[o],
          I = a && Re[a],
          T = r ? pe.DX : "button",
          E = l && (I || I && z);
        return (0, R.jsxs)(T, {
          ref: C,
          ...D,
          children: [E && (0, R.jsx)("div", {
            className: "foundry_17pcofy15"
          }), z && (0, R.jsx)(z, {
            label: n || "",
            size: P,
            className: (0, Pe.$)(Ee({
              size: P
            }), "foundry_17pcofy11")
          }), (0, R.jsx)(pe.xV, {
            children: t
          }), I && (0, R.jsx)(I, {
            label: s || "",
            size: P,
            className: (0, Pe.$)(Ee({
              size: P
            }), Le({
              fullWidth: l
            }))
          }), c && (0, R.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, R.jsx)(Oe, {
              label: u || "",
              size: "inline" + ("XL" === P ? "LG" : "MD"),
              hideTrack: !0,
              className: Ae({
                size: P
              })
            })
          })]
        })
      });

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
        Ze = Ge({
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
        He = Ge({
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
      const We = (0, S.forwardRef)(({
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
          j = (0, ve.zQ)(),
          C = "string" == typeof s ? s : s?.[j] ?? s.default ?? "LG",
          {
            buttonProps: O
          } = (0, fe.sL)((0, k.v6)(g, {
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
        const P = (0, k.v6)({
            className: Ze({
              appearance: n,
              size: C,
              fullWidth: a
            }),
            "data-testid": e
          }, O),
          N = Re[t],
          D = r ? pe.DX : "button";
        return (0, R.jsxs)(D, {
          ref: _,
          ...P,
          children: [N && (0, R.jsx)(N, {
            label: o || "",
            size: C,
            className: Ke({
              size: C
            })
          }), (0, R.jsx)(pe.xV, {
            children: i
          }), d && (0, R.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, R.jsx)(Oe, {
              label: l || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: He({
                size: C
              })
            })
          })]
        })
      });

      function Ue(e) {
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

      function $e(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ye(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? $e(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ue(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $e(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Qe(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Je = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        er = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ye(Ye({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Je(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qe(e.variantClassNames, e => Qe(e, e => e.split(" ")[0]))
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
      const rr = (0, S.forwardRef)(({
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
          className: (0, Pe.$)(er({
            thickness: t,
            orientation: r
          }), e),
          role: l,
          "aria-orientation": r,
          "data-testid": a,
          ...s
        })
      });

      function tr(e) {
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

      function or(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function nr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? or(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = tr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : or(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ar(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var sr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ir = "var(--foundry_9dxgbc2)",
        dr = "var(--foundry_9dxgbc3)",
        lr = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = nr(nr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ar(e.variantClassNames, e => ar(e, e => e.split(" ")[0]))
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
        cr = "var(--foundry_9dxgbc0)",
        ur = "var(--foundry_9dxgbc1)";
      const fr = (0, S.forwardRef)(({
        asChild: e,
        testId: r,
        children: t,
        colorOverride: o,
        label: n,
        size: a = "MD",
        ...s
      }, i) => {
        const d = (0, ve.zQ)(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, k.v6)({
            className: lr({
              size: l
            }),
            "data-testid": r,
            style: (0, D.D)({
              [cr]: o?.pulseColorBackground,
              [ur]: o?.pulseColorForeground,
              [ir]: o?.gradientColorBackground,
              [dr]: o?.gradientColorForeground
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
        hr = e => {
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
        },
        gr = hr({
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
      const wr = (0, S.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? pe.DX : "p",
          i = (0, k.v6)({
            className: gr({
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
      var xr = hr({
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
      const _r = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "default",
          ...o
        }, n) => {
          const a = e ? pe.DX : "p",
            s = (0, k.v6)({
              className: xr({
                appearance: t
              })
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        }),
        jr = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "h1",
            a = (0, k.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        });
      var Cr = hr({
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
      const Or = (0, S.forwardRef)(({
        asChild: e,
        level: r,
        testId: t,
        ...o
      }, n) => {
        const a = e ? pe.DX : `h${7===r?6:r}`,
          s = (0, k.v6)(o, {
            className: Cr({
              level: r
            })
          });
        return (0, R.jsx)(a, {
          ref: n,
          "data-testid": t,
          ...s
        })
      });
      var Pr = hr({
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
      const Rr = (0, S.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? pe.DX : "p",
          i = (0, k.v6)({
            className: Pr({
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
      var Nr = hr({
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
      const Sr = {
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
        Dr = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          semantic: t = "default",
          ...o
        }, n) => {
          const a = e ? pe.DX : Sr[t] || "span",
            s = (0, k.v6)(o, {
              className: Nr({
                semantic: t
              })
            });
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        });
      var zr = t(93529),
        kr = t(99206),
        Ir = t(34811);
      const Tr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((r, t) => {
        e.onload = () => r(), e.onerror = t
      }), Er = ([e, r]) => ({
        x: e,
        y: r
      }), Lr = (e, r) => (e.x = r.x, e.y = r.y, e), Ar = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Vr = (e, r = 3) => Number(parseFloat(`${e}`).toFixed(r)), Mr = (e, r, t) => Math.min(Math.max(e, r), t);
      var qr = t(90004);

      function Fr(e) {
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

      function Br(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Xr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Br(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Fr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Br(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Gr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Kr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Zr = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Xr(Xr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Kr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gr(e.variantClassNames, e => Gr(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Hr = Zr({
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
        Wr = Zr({
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
      zr.os.registerPlugin(kr.L);
      const Ur = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        $r = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Yr = I("var(--foundry_1a74xwb0)");
      var Qr = t(49764);
      const Jr = {
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
      class et {
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
          return t ? r : Mr(r, this.max[e], this.min[e])
        }
      }
      class rt {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Vr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            r = e.w / this.elementSize.w,
            t = e.h / this.elementSize.h;
          return Vr(t < r ? t : r)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Vr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class tt {
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
      class ot {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(r) ? "x" : "y", Lr(this.startPan, this.slide.pan)
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
          })(this.prevTap, o) < 25 && this.slide.tapHandler.doubleTap(o, n)) : (Lr(this.prevTap, {
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
      class nt {
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
          e.src = this.thumbnail.currentSrc ?? "", await Tr(e)
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
      class at {
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
      class st extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, r, t, o) {
          super(e), this.point = t, this.tapTarget = r, this.originalEvent = o
        }
      }
      class it extends tt {
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
          if (!this.dispatch(e, new st(e, r, t, o)).defaultPrevented) switch (this.options[e]) {
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
      class dt {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Er(e), this.startZoomDistance = r, this.wasOverFitZoomLevel = !1, Lr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [r]
        }) {
          const t = this.slide.zoomLevels.min,
            o = this.slide.zoomLevels.max;
          this.zoomPoint = Er(e);
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
            a = Lr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Lr({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = r, Lr(this.startPan, a)), o && (s = {
            x: this.calculatePanForZoomLevel("x", t),
            y: this.calculatePanForZoomLevel("y", t)
          }), this.slide.setZoomLevel(t, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(r, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || o || n) && (Lr(this.slide.pan, s), this.slide.setZoomLevel(t))
        }
      }
      class lt {
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
      class ct extends tt {
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
          super(), this.width = e, this.height = r, this.opener = new nt({
            slide: this
          }), this.bounds = new et({
            slide: this
          }), this.dragHandler = new ot({
            options: a,
            slide: this
          }), this.scrollWheel = new at({
            slide: this
          }), this.zoomHandler = new dt({
            slide: this
          }), this.zoomLevels = new rt({
            options: t,
            slide: this
          }), this.tapHandler = new it({
            options: o,
            slide: this
          }), this.panAreaSize = new lt({
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
          e = Vr(e), t || (e = Mr(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", r, o), this.pan.y = this.calculateZoomToPanOffset("y", r, o), Ar(this.pan)
        }
        toggleZoom(e) {
          const r = this.currZoomLevel,
            t = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, r), this.pan.y = this.calculateZoomToPanOffset("y", e, r), Ar(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Lr(this.pan, this.bounds.center)
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
      var ut = t(89525);
      const ft = e => "dark" === e ? ut.xW.dark : ut.xW.light,
        pt = (0, Qr.YK)({
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
      var vt = "foundry_bc732x1";
      const yt = (0, S.forwardRef)(({
        shortcut: e,
        isInline: r,
        onShortcut: t
      }, o) => ((0, qr.vC)(e, e => t?.(e), [t]), (0, R.jsx)(wr, {
        size: "XS",
        className: (0, Pe.$)("foundry_bc732x0", {
          [vt]: r
        }),
        asChild: !0,
        children: (0, R.jsx)("kbd", {
          ref: o,
          children: e
        })
      })));
      var bt, mt = t(71433),
        ht = t(39467),
        gt = t(64239),
        wt = t(54958),
        xt = t(13165),
        _t = t(94660),
        jt = t(61144),
        Ct = "dismissableLayer.update",
        Ot = S.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        Pt = S.forwardRef((e, r) => {
          const {
            disableOutsidePointerEvents: t = !1,
            deferPointerDownOutside: o = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = S.useContext(Ot), [u, f] = S.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = S.useState({}), y = (0, gt.s)(r, e => f(e)), b = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), h = b.indexOf(m), g = u ? b.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = g >= h, _ = S.useRef(!1), j = function(e, r) {
            const {
              ownerDocument: t = globalThis?.document,
              deferPointerDownOutside: o = !1,
              isDeferredPointerDownOutsideRef: n,
              dismissableSurfaces: a
            } = r, s = (0, _t.c)(e), i = S.useRef(!1), d = S.useRef(!1), l = S.useRef(new Map), c = S.useRef(() => {});
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
                      e(), r || St("dismissableLayer.pointerDownOutside", s, i, {
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
            const t = (0, _t.c)(e),
              o = S.useRef(!1);
            return S.useEffect(() => {
              const e = e => {
                e.target && !o.current && St("dismissableLayer.focusOutside", t, {
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
          return (0, jt.U)(e => {
            g === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }, p), S.useEffect(() => {
            if (u) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (bt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Nt(), () => {
              t && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = bt))
            }
          }, [u, p, t, c]), S.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Nt())
          }, [u, c]), S.useEffect(() => {
            const e = () => v({});
            return document.addEventListener(Ct, e), () => document.removeEventListener(Ct, e)
          }, []), (0, R.jsx)(xt.sG.div, {
            ...l,
            ref: y,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, ht.mK)(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: (0, ht.mK)(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: (0, ht.mK)(e.onPointerDownCapture, j.onPointerDownCapture)
          })
        });
      Pt.displayName = "DismissableLayer";
      var Rt = S.forwardRef((e, r) => {
        const t = S.useContext(Ot),
          o = S.useRef(null),
          n = (0, gt.s)(r, o);
        return S.useEffect(() => {
          const e = o.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }, [t.branches]), (0, R.jsx)(xt.sG.div, {
          ...e,
          ref: n
        })
      });

      function Nt() {
        const e = new CustomEvent(Ct);
        document.dispatchEvent(e)
      }

      function St(e, r, t, {
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
        }), o ? (0, xt.hO)(n, a) : n.dispatchEvent(a)
      }
      Rt.displayName = "DismissableLayerBranch";
      var Dt = Pt,
        zt = Rt,
        kt = t(94296),
        It = t(17966),
        Tt = t(10376),
        Et = S.forwardRef((e, r) => {
          const {
            children: t,
            width: o = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, R.jsx)(xt.sG.svg, {
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
      Et.displayName = "Arrow";
      var Lt = Et,
        At = t(10198),
        Vt = t(5024),
        Mt = "Popper",
        [qt, Ft] = (0, wt.A)(Mt),
        [Bt, Xt] = qt(Mt),
        Gt = e => {
          const {
            __scopePopper: r,
            children: t
          } = e, [o, n] = S.useState(null), [a, s] = S.useState(void 0);
          return (0, R.jsx)(Bt, {
            scope: r,
            anchor: o,
            onAnchorChange: n,
            placementState: a,
            setPlacementState: s,
            children: t
          })
        };
      Gt.displayName = Mt;
      var Kt = "PopperAnchor",
        Zt = S.forwardRef((e, r) => {
          const {
            __scopePopper: t,
            virtualRef: o,
            ...n
          } = e, a = Xt(Kt, t), s = S.useRef(null), i = a.onAnchorChange, d = S.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, gt.s)(r, d), c = S.useRef(null);
          S.useEffect(() => {
            if (!o) return;
            const e = c.current;
            c.current = o.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && to(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return o ? null : (0, R.jsx)(xt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...n,
            ref: l
          })
        });
      Zt.displayName = Kt;
      var Ht = "PopperContent",
        [Wt, Ut] = qt(Ht),
        $t = S.forwardRef((e, r) => {
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
          } = e, b = Xt(Ht, t), [m, h] = S.useState(null), g = (0, gt.s)(r, e => h(e)), [w, x] = S.useState(null), _ = (0, Vt.X)(w), j = _?.width ?? 0, C = _?.height ?? 0, O = o + ("center" !== a ? "-" + a : ""), P = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, N = Array.isArray(l) ? l : [l], D = N.length > 0, z = {
            padding: P,
            boundary: N.filter(eo),
            altBoundary: D
          }, {
            refs: k,
            floatingStyles: I,
            placement: T,
            isPositioned: E,
            middlewareData: L
          } = (0, It.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Tt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: b.anchor
            },
            middleware: [(0, It.cY)({
              mainAxis: n + C,
              alignmentAxis: s
            }), d && (0, It.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, It.ER)() : void 0,
              ...z
            }), d && (0, It.UU)({
              ...z
            }), (0, It.Ej)({
              ...z,
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
            }), w && (0, It.UE)({
              element: w,
              padding: i
            }), ro({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, It.jD)({
              strategy: "referenceHidden",
              ...z,
              boundary: D ? z.boundary : void 0
            })]
          }), A = b.setPlacementState;
          (0, At.N)(() => (A(T), () => {
            A(void 0)
          }), [T, A]);
          const [V, M] = to(T), q = (0, _t.c)(v);
          (0, At.N)(() => {
            E && q?.()
          }, [E, q]);
          const F = L.arrow?.x,
            B = L.arrow?.y,
            X = 0 !== L.arrow?.centerOffset,
            [G, K] = S.useState();
          return (0, At.N)(() => {
            m && K(window.getComputedStyle(m).zIndex)
          }, [m]), (0, R.jsx)("div", {
            ref: k.setFloating,
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
            children: (0, R.jsx)(Wt, {
              scope: t,
              placedSide: V,
              placedAlign: M,
              onArrowChange: x,
              arrowX: F,
              arrowY: B,
              shouldHideArrow: X,
              children: (0, R.jsx)(xt.sG.div, {
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
      $t.displayName = Ht;
      var Yt = "PopperArrow",
        Qt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Jt = S.forwardRef(function(e, r) {
          const {
            __scopePopper: t,
            ...o
          } = e, n = Ut(Yt, t), a = Qt[n.placedSide];
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
            children: (0, R.jsx)(Lt, {
              ...o,
              ref: r,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        });

      function eo(e) {
        return null !== e
      }
      Jt.displayName = Yt;
      var ro = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: t,
            rects: o,
            middlewareData: n
          } = r, a = 0 !== n.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = to(t), c = {
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

      function to(e) {
        const [r, t = "center"] = e.split("-");
        return [r, t]
      }
      var oo = Gt,
        no = Zt,
        ao = $t,
        so = Jt,
        io = t(84017),
        lo = S.forwardRef((e, r) => {
          const {
            container: t,
            ...o
          } = e, [n, a] = S.useState(!1);
          (0, At.N)(() => a(!0), []);
          const s = t || n && globalThis?.document?.body;
          return s ? io.createPortal((0, R.jsx)(xt.sG.div, {
            ...o,
            ref: r
          }), s) : null
        });
      lo.displayName = "Portal";
      var co = e => {
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
            const e = fo(o.current);
            a.current = "mounted" === i ? e : "none"
          }, [i]), (0, At.N)(() => {
            const r = o.current,
              t = n.current;
            if (t !== e) {
              const o = a.current,
                s = fo(r);
              d(e ? "MOUNT" : "none" === s || "none" === r?.display ? "UNMOUNT" : t && o !== s ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e
            }
          }, [e, d]), (0, At.N)(() => {
            if (r) {
              let e;
              const t = r.ownerDocument.defaultView ?? window,
                s = a => {
                  const s = fo(o.current).includes(CSS.escape(a.animationName));
                  if (a.target === r && s && (d("ANIMATION_END"), !n.current)) {
                    const o = r.style.animationFillMode;
                    r.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                      "forwards" === r.style.animationFillMode && (r.style.animationFillMode = o)
                    })
                  }
                },
                i = e => {
                  e.target === r && (a.current = fo(o.current))
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
              const t = uo(r, e);
              return o || "function" != typeof t || (o = !0), t
            });
            if (o) return () => {
              for (let e = 0; e < n.length; e++) {
                const r = n[e];
                "function" == typeof r ? r() : uo(t[e], null)
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

      function uo(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r)
      }

      function fo(e) {
        return e?.animationName || "none"
      }
      co.displayName = "Presence";
      var po = t(17172),
        vo = t(17038),
        yo = t(84045),
        [bo, mo] = (0, wt.A)("Tooltip", [Ft]),
        ho = Ft(),
        go = "TooltipProvider",
        wo = 700,
        xo = "tooltip.open",
        [_o, jo] = bo(go),
        Co = e => {
          const {
            __scopeTooltip: r,
            delayDuration: t = wo,
            skipDelayDuration: o = 300,
            disableHoverableContent: n = !1,
            children: a
          } = e, s = S.useRef(!0), i = S.useRef(!1), d = S.useRef(0);
          return S.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, R.jsx)(_o, {
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
      Co.displayName = go;
      var Oo = "Tooltip",
        [Po, Ro] = bo(Oo),
        No = e => {
          const {
            __scopeTooltip: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = jo(Oo, e.__scopeTooltip), l = ho(r), [c, u] = S.useState(null), f = (0, kt.B)(), p = S.useRef(0), v = s ?? d.disableHoverableContent, y = i ?? d.delayDuration, b = S.useRef(!1), [m, h] = (0, vo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(xo))) : d.onClose(), a?.(e)
            },
            caller: Oo
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
          }, []), (0, R.jsx)(oo, {
            ...l,
            children: (0, R.jsx)(Po, {
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
      No.displayName = Oo;
      var So = "TooltipTrigger",
        Do = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = Ro(So, t), a = jo(So, t), s = ho(t), i = S.useRef(null), d = (0, gt.s)(r, i, n.onTriggerChange), l = S.useRef(!1), c = S.useRef(!1), u = S.useCallback(() => l.current = !1, []);
          return S.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, R.jsx)(no, {
            asChild: !0,
            ...s,
            children: (0, R.jsx)(xt.sG.button, {
              "aria-describedby": n.open ? n.contentId : void 0,
              "data-state": n.stateAttribute,
              ...o,
              ref: d,
              onPointerMove: (0, ht.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (n.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, ht.mK)(e.onPointerLeave, () => {
                n.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, ht.mK)(e.onPointerDown, () => {
                n.open && n.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, ht.mK)(e.onFocus, () => {
                l.current || n.onOpen()
              }),
              onBlur: (0, ht.mK)(e.onBlur, n.onClose),
              onClick: (0, ht.mK)(e.onClick, n.onClose)
            })
          })
        });
      Do.displayName = So;
      var zo = "TooltipPortal",
        [ko, Io] = bo(zo, {
          forceMount: void 0
        }),
        To = e => {
          const {
            __scopeTooltip: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = Ro(zo, r);
          return (0, R.jsx)(ko, {
            scope: r,
            forceMount: t,
            children: (0, R.jsx)(co, {
              present: t || a.open,
              children: (0, R.jsx)(lo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      To.displayName = zo;
      var Eo = "TooltipContent",
        Lo = S.forwardRef((e, r) => {
          const t = Io(Eo, e.__scopeTooltip),
            {
              forceMount: o = t.forceMount,
              side: n = "top",
              ...a
            } = e,
            s = Ro(Eo, e.__scopeTooltip);
          return (0, R.jsx)(co, {
            present: o || s.open,
            children: s.disableHoverableContent ? (0, R.jsx)(Fo, {
              side: n,
              ...a,
              ref: r
            }) : (0, R.jsx)(Ao, {
              side: n,
              ...a,
              ref: r
            })
          })
        }),
        Ao = S.forwardRef((e, r) => {
          const t = Ro(Eo, e.__scopeTooltip),
            o = jo(Eo, e.__scopeTooltip),
            n = S.useRef(null),
            a = (0, gt.s)(r, n),
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
          }, [d, c, s, l, f]), (0, R.jsx)(Fo, {
            ...e,
            ref: a
          })
        }),
        [Vo, Mo] = bo(Oo, {
          isInside: !1
        }),
        qo = (0, po.Dc)("TooltipContent"),
        Fo = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            children: o,
            "aria-label": n,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Ro(Eo, t), l = ho(t), {
            onClose: c
          } = d;
          return S.useEffect(() => (document.addEventListener(xo, c), () => document.removeEventListener(xo, c)), [c]), S.useEffect(() => {
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
          }, [d.trigger, c]), (0, R.jsx)(Pt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, R.jsxs)(ao, {
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
              children: [(0, R.jsx)(qo, {
                children: o
              }), (0, R.jsx)(Vo, {
                scope: t,
                isInside: !0,
                children: (0, R.jsx)(yo.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: n || o
                })
              })]
            })
          })
        });
      Lo.displayName = Eo;
      var Bo = "TooltipArrow",
        Xo = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = ho(t);
          return Mo(Bo, t).isInside ? null : (0, R.jsx)(so, {
            ...n,
            ...o,
            ref: r
          })
        });
      Xo.displayName = Bo;
      var Go = Co,
        Ko = No,
        Zo = Do,
        Ho = To,
        Wo = Lo,
        Uo = Xo;
      const $o = (0, S.createContext)(null);

      function Yo() {
        const e = (0, S.useContext)($o);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Qo = ({
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
          return (0, R.jsx)(Go, {
            delayDuration: r,
            children: (0, R.jsx)($o.Provider, {
              value: {
                isOpen: a,
                ...n
              },
              children: (0, R.jsx)(Ko, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Jo = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => (0, R.jsx)(Zo, {
          asChild: !0,
          "data-testid": r,
          ...t,
          ref: o,
          children: e
        })),
        en = (0, S.forwardRef)(({
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
          } = Yo(), c = (0, fe.jt)(), u = (0, mt.CS)(Wo), f = (0, mt.pn)(l, {
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
            config: mt.$W.stiff,
            immediate: c
          }), p = (0, k.v6)({
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
        rn = (0, S.forwardRef)(({
          testId: e
        }, r) => {
          const t = (0, k.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, R.jsx)(Uo, {
            ...t,
            ref: r
          })
        }),
        tn = Ho;
      var on = t(3852),
        nn = t(99136),
        an = t(52184);

      function sn(e) {
        const r = e + "CollectionProvider",
          [t, o] = (0, wt.A)(r),
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
          d = (0, po.TL)(i),
          l = S.forwardRef((e, r) => {
            const {
              scope: t,
              children: o
            } = e, n = a(i, t), s = (0, gt.s)(r, n.collectionRef);
            return (0, R.jsx)(d, {
              ref: s,
              children: o
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, po.TL)(c),
          p = S.forwardRef((e, r) => {
            const {
              scope: t,
              children: o,
              ...n
            } = e, s = S.useRef(null), i = (0, gt.s)(r, s), d = a(c, t);
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
      var dn = ["PageUp", "PageDown"],
        ln = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        cn = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        un = "Slider",
        [fn, pn, vn] = sn(un),
        [yn, bn] = (0, wt.A)(un, [vn]),
        [mn, hn] = yn(un),
        gn = S.forwardRef((e, r) => {
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
          } = e, b = S.useRef(new Set), m = S.useRef(0), h = S.useRef(!1), g = "horizontal" === s ? _n : jn, [w = [], x] = (0, vo.i)({
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
              l = (0, on.q)(i, [o, n]);
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
          return (0, R.jsx)(mn, {
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
            children: (0, R.jsx)(fn.Provider, {
              scope: e.__scopeSlider,
              children: (0, R.jsx)(fn.Slot, {
                scope: e.__scopeSlider,
                children: (0, R.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: r,
                  onPointerDown: (0, ht.mK)(y.onPointerDown, () => {
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
                      const t = dn.includes(e.key) || e.shiftKey && ln.includes(e.key) ? 10 : 1,
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
      gn.displayName = un;
      var [wn, xn] = yn(un, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), _n = S.forwardRef((e, r) => {
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
        } = e, [u, f] = S.useState(null), p = (0, gt.s)(r, e => f(e)), v = S.useRef(void 0), y = (0, nn.jH)(n), b = "ltr" === y, m = b && !a || !b && a;

        function h(e) {
          const r = v.current || u.getBoundingClientRect(),
            n = qn([0, r.width], m ? [t, o] : [o, t]);
          return v.current = r, n(e - r.left)
        }
        return (0, R.jsx)(wn, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, R.jsx)(Cn, {
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
              const r = cn[m ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), jn = S.forwardRef((e, r) => {
        const {
          min: t,
          max: o,
          inverted: n,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = S.useRef(null), u = (0, gt.s)(r, c), f = S.useRef(void 0), p = !n;

        function v(e) {
          const r = f.current || c.current.getBoundingClientRect(),
            n = qn([0, r.height], p ? [o, t] : [t, o]);
          return f.current = r, n(e - r.top)
        }
        return (0, R.jsx)(wn, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, R.jsx)(Cn, {
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
              const r = cn[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), Cn = S.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          onSlideStart: o,
          onSlideMove: n,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = hn(un, t);
        return (0, R.jsx)(xt.sG.span, {
          ...l,
          ref: r,
          onKeyDown: (0, ht.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : dn.concat(ln).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, ht.mK)(e.onPointerDown, e => {
            const r = e.target;
            r.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(r) ? r.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : o(e)
          }),
          onPointerMove: (0, ht.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && n(e)
          }),
          onPointerUp: (0, ht.mK)(e.onPointerUp, e => {
            const r = e.target;
            r.hasPointerCapture(e.pointerId) && (r.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), On = "SliderTrack", Pn = S.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          ...o
        } = e, n = hn(On, t);
        return (0, R.jsx)(xt.sG.span, {
          "data-disabled": n.disabled ? "" : void 0,
          "data-orientation": n.orientation,
          ...o,
          ref: r
        })
      });
      Pn.displayName = On;
      var Rn = "SliderRange",
        Nn = S.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = hn(Rn, t), a = xn(Rn, t), s = S.useRef(null), i = (0, gt.s)(r, s), d = n.values.length, l = n.values.map(e => Mn(e, n.min, n.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, R.jsx)(xt.sG.span, {
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
      Nn.displayName = Rn;
      var Sn = "SliderThumb",
        [Dn, zn] = yn(Sn),
        kn = "SliderThumbProvider";

      function In(e) {
        const {
          __scopeSlider: r,
          name: t,
          children: o,
          internal_do_not_use_render: n
        } = e, a = hn(kn, r), s = pn(r), [i, d] = S.useState(null), l = S.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, Vt.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = t ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : Mn(f, a.min, a.max);
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
        return (0, R.jsx)(Dn, {
          scope: r,
          ...y,
          children: Fn(n) ? n(y) : o
        })
      }
      In.displayName = kn;
      var Tn = "SliderThumbTrigger",
        En = S.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = hn(Tn, t), a = xn(Tn, t), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = zn(Tn, t), u = (0, gt.s)(r, e => c(e)), f = function(e, r) {
            return r > 2 ? `Value ${e+1} of ${r}` : 2 === r ? ["Minimum", "Maximum"][e] : void 0
          }(s, n.values.length), p = l?.[a.size], v = p ? function(e, r, t) {
            const o = e / 2;
            return (o - qn([0, 50], [0, o])(r) * t) * t
          }(p, d, a.direction) : 0;
          return (0, R.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, R.jsx)(fn.ItemSlot, {
              scope: t,
              children: (0, R.jsx)(xt.sG.span, {
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
                onFocus: (0, ht.mK)(e.onFocus, () => {
                  n.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      En.displayName = Tn;
      var Ln = S.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          name: o,
          ...n
        } = e;
        return (0, R.jsx)(In, {
          __scopeSlider: t,
          name: o,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: o
          }) => (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(En, {
              ...n,
              ref: r,
              __scopeSlider: t
            }), o ? (0, R.jsx)(Vn, {
              __scopeSlider: t
            }, e) : null]
          })
        })
      });
      Ln.displayName = Sn;
      var An = "SliderBubbleInput",
        Vn = S.forwardRef(({
          __scopeSlider: e,
          ...r
        }, t) => {
          const {
            value: o,
            name: n,
            form: a
          } = zn(An, e), s = S.useRef(null), i = (0, gt.s)(s, t), d = (0, an.Z)(o);
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
          }, [d, o]), (0, R.jsx)(xt.sG.input, {
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

      function Mn(e, r, t) {
        const o = 100 / (t - r) * (e - r);
        return (0, on.q)(o, [0, 100])
      }

      function qn(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function Fn(e) {
        return "function" == typeof e
      }
      Vn.displayName = An;
      var Bn = "focusScope.autoFocusOnMount",
        Xn = "focusScope.autoFocusOnUnmount",
        Gn = {
          bubbles: !1,
          cancelable: !0
        },
        Kn = S.forwardRef((e, r) => {
          const {
            loop: t = !1,
            trapped: o = !1,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = S.useState(null), l = (0, _t.c)(n), c = (0, _t.c)(a), u = S.useRef(null), f = (0, gt.s)(r, e => d(e)), p = S.useRef({
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
                  i.contains(r) ? u.current = r : Un(u.current, {
                    select: !0
                  })
                },
                r = function(e) {
                  if (p.paused || !i) return;
                  const r = e.relatedTarget;
                  null !== r && (i.contains(r) || Un(u.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const r of e) r.removedNodes.length > 0 && Un(i)
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
              $n.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const r = new CustomEvent(Bn, Gn);
                i.addEventListener(Bn, l), i.dispatchEvent(r), r.defaultPrevented || (function(e, {
                  select: r = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const o of e)
                    if (Un(o, {
                        select: r
                      }), document.activeElement !== t) return
                }(Zn(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Un(i))
              }
              return () => {
                i.removeEventListener(Bn, l), setTimeout(() => {
                  const r = new CustomEvent(Xn, Gn);
                  i.addEventListener(Xn, c), i.dispatchEvent(r), r.defaultPrevented || Un(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Xn, c), $n.remove(p)
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
                  const r = Zn(e);
                  return [Hn(r, e), Hn(r.reverse(), e)]
                }(r);
              o && a ? e.shiftKey || n !== a ? e.shiftKey && n === o && (e.preventDefault(), t && Un(a, {
                select: !0
              })) : (e.preventDefault(), t && Un(o, {
                select: !0
              })) : n === r && e.preventDefault()
            }
          }, [t, o, p.paused]);
          return (0, R.jsx)(xt.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        });

      function Zn(e) {
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

      function Hn(e, r) {
        for (const t of e)
          if (!Wn(t, {
              upTo: r
            })) return t
      }

      function Wn(e, {
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

      function Un(e, {
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
      Kn.displayName = "FocusScope";
      var $n = function() {
        let e = [];
        return {
          add(r) {
            const t = e[0];
            r !== t && t?.pause(), e = Yn(e, r), e.unshift(r)
          },
          remove(r) {
            e = Yn(e, r), e[0]?.resume()
          }
        }
      }();

      function Yn(e, r) {
        const t = [...e],
          o = t.indexOf(r);
        return -1 !== o && t.splice(o, 1), t
      }
      var Qn = t(38174),
        Jn = t(38100),
        ea = t(45787),
        ra = "Dialog",
        [ta, oa] = (0, wt.A)(ra),
        [na, aa] = ta(ra),
        sa = e => {
          const {
            __scopeDialog: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !0
          } = e, i = S.useRef(null), d = S.useRef(null), [l, c] = (0, vo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: ra
          });
          return (0, R.jsx)(na, {
            scope: r,
            triggerRef: i,
            contentRef: d,
            contentId: (0, kt.B)(),
            titleId: (0, kt.B)(),
            descriptionId: (0, kt.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: S.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: t
          })
        };
      sa.displayName = ra;
      var ia = "DialogTrigger",
        da = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = aa(ia, t), a = (0, gt.s)(r, n.triggerRef);
          return (0, R.jsx)(xt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": Na(n.open),
            ...o,
            ref: a,
            onClick: (0, ht.mK)(e.onClick, n.onOpenToggle)
          })
        });
      da.displayName = ia;
      var la = "DialogPortal",
        [ca, ua] = ta(la, {
          forceMount: void 0
        }),
        fa = e => {
          const {
            __scopeDialog: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = aa(la, r);
          return (0, R.jsx)(ca, {
            scope: r,
            forceMount: t,
            children: S.Children.map(o, e => (0, R.jsx)(co, {
              present: t || a.open,
              children: (0, R.jsx)(lo, {
                asChild: !0,
                container: n,
                children: e
              })
            }))
          })
        };
      fa.displayName = la;
      var pa = "DialogOverlay",
        va = S.forwardRef((e, r) => {
          const t = ua(pa, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = aa(pa, e.__scopeDialog);
          return a.modal ? (0, R.jsx)(co, {
            present: o || a.open,
            children: (0, R.jsx)(ba, {
              ...n,
              ref: r
            })
          }) : null
        });
      va.displayName = pa;
      var ya = (0, po.TL)("DialogOverlay.RemoveScroll"),
        ba = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = aa(pa, t), a = function() {
            const e = S.useContext(Ot),
              [r, t] = S.useState(null);
            return S.useEffect(() => {
              if (r) return e.dismissableSurfaces.add(r), () => {
                e.dismissableSurfaces.delete(r)
              }
            }, [r, e.dismissableSurfaces]), t
          }(), s = (0, gt.s)(r, a);
          return (0, R.jsx)(Jn.A, {
            as: ya,
            allowPinchZoom: !0,
            shards: [n.contentRef],
            children: (0, R.jsx)(xt.sG.div, {
              "data-state": Na(n.open),
              ...o,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        ma = "DialogContent",
        ha = S.forwardRef((e, r) => {
          const t = ua(ma, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = aa(ma, e.__scopeDialog);
          return (0, R.jsx)(co, {
            present: o || a.open,
            children: a.modal ? (0, R.jsx)(ga, {
              ...n,
              ref: r
            }) : (0, R.jsx)(wa, {
              ...n,
              ref: r
            })
          })
        });
      ha.displayName = ma;
      var ga = S.forwardRef((e, r) => {
          const t = aa(ma, e.__scopeDialog),
            o = S.useRef(null),
            n = (0, gt.s)(r, t.contentRef, o);
          return S.useEffect(() => {
            const e = o.current;
            if (e) return (0, ea.Eq)(e)
          }, []), (0, R.jsx)(xa, {
            ...e,
            ref: n,
            trapFocus: t.open,
            disableOutsidePointerEvents: t.open,
            onCloseAutoFocus: (0, ht.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, ht.mK)(e.onPointerDownOutside, e => {
              const r = e.detail.originalEvent,
                t = 0 === r.button && !0 === r.ctrlKey;
              (2 === r.button || t) && e.preventDefault()
            }),
            onFocusOutside: (0, ht.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        wa = S.forwardRef((e, r) => {
          const t = aa(ma, e.__scopeDialog),
            o = S.useRef(!1),
            n = S.useRef(!1);
          return (0, R.jsx)(xa, {
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
        xa = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            ...s
          } = e, i = aa(ma, t);
          return (0, Qn.Oh)(), (0, R.jsx)(R.Fragment, {
            children: (0, R.jsx)(Kn, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: n,
              onUnmountAutoFocus: a,
              children: (0, R.jsx)(Pt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Na(i.open),
                ...s,
                ref: r,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        _a = "DialogTitle",
        ja = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = aa(_a, t);
          return (0, R.jsx)(xt.sG.h2, {
            id: n.titleId,
            ...o,
            ref: r
          })
        });
      ja.displayName = _a;
      var Ca = "DialogDescription",
        Oa = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = aa(Ca, t);
          return (0, R.jsx)(xt.sG.p, {
            id: n.descriptionId,
            ...o,
            ref: r
          })
        });
      Oa.displayName = Ca;
      var Pa = "DialogClose",
        Ra = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = aa(Pa, t);
          return (0, R.jsx)(xt.sG.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, ht.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });

      function Na(e) {
        return e ? "open" : "closed"
      }
      Ra.displayName = Pa;
      const Sa = (0, S.createContext)({
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
        Da = ({
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
          const f = (0, ve.Ym)(),
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
            z = (0, S.useRef)(null),
            k = (0, S.useRef)(null),
            I = (0, S.useRef)(null),
            T = (0, S.useRef)(null),
            [E = !1, L] = (0, fe.ic)({
              prop: r || o,
              onChange: t
            }),
            A = (0, S.useRef)(null);
          return A.current || (A.current = new ct({
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
          })), (0, R.jsx)(Qr.Dk, {
            messages: Jr,
            locale: f,
            children: (0, R.jsx)(Sa.Provider, {
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
                zoomSliderRef: z,
                zoomOutRef: k,
                resetRef: I,
                downloadRef: T,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: A.current
              },
              children: (0, R.jsx)(ka, {
                ...u
              })
            })
          })
        },
        za = (0, S.createContext)({
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
        ka = ({
          ...e
        }) => {
          const {
            open: r
          } = (0, S.useContext)(Sa), {
            onOpenChange: t,
            openAnim: o,
            close: n
          } = (() => {
            const {
              contextSafe: e
            } = (0, kr.L)(), {
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
            } = (0, S.useContext)(Sa), p = (0, S.useRef)(null);
            p.current || (p.current = zr.os.timeline({
              defaults: Ur
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
                }), d.current && i.current && (r.opening = !0, r.setup(i.current, d.current), r.zoomAndPanToInitial(), zr.os.set([u.current, f.current], {
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
                }), zr.os.set([f.current], {
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
                  [Yr]: "none"
                }, {
                  opacity: () => r.getControlsOpacity(),
                  [Yr]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), r.opening = !1, r.dispatch("zoom"), r.closing || await Tr(f.current), r.closing || (zr.os.set([f.current], {
                  visibility: "visible",
                  ...$r
                }), zr.os.set([u.current], {
                  visibility: "hidden",
                  ...$r
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
            } = (0, kr.L)(), {
              slide: t,
              imageRef: o,
              zoomPanRef: n,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, S.useContext)(Sa), d = r(async e => {
              t.zoomTo(e), zr.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...$r
              })
            }), l = r(async () => {
              t.zoomTo(t.currZoomLevel + t.zoomLevels.step), zr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...$r
              })
            }), c = r(async () => {
              t.zoomTo(t.currZoomLevel - t.zoomLevels.step), zr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...$r
              })
            }), u = r(async () => {
              t.zoomAndPanToInitial(), zr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...$r
              })
            }), f = r(async () => {
              if (t.closing) return;
              t.toggleControls();
              const e = t.getControlsOpacity(),
                r = 1 === e ? "auto" : "none";
              zr.os.to([a.current], {
                opacity: e,
                [Yr]: r,
                ...$r
              })
            }), p = r(async () => {
              zr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...$r
              })
            }), v = (0, S.useCallback)(() => {
              o.current && n.current && (zr.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...$r
              }), zr.os.set([o.current, i.current], {
                ...t.getUpdatedContentSize(),
                ...$r
              }), zr.os.set([s.current], {
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
          }), u = (0, k.v6)(e, {
            open: r,
            onOpenChange: t
          });
          return (0, R.jsx)(za.Provider, {
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
            children: (0, R.jsx)(sa, {
              ...u
            })
          })
        },
        Ia = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const n = (0, Qr.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, S.useContext)(Sa),
            d = (0, fe.UP)(a, o),
            l = (0, k.v6)(t, {
              "data-testid": e,
              "aria-label": n.formatMessage(pt.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, R.jsx)(da, {
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
        Ta = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            thumbnailRef: n
          } = (0, S.useContext)(Sa), a = (0, fe.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = r ? pe.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ea = (0, S.forwardRef)(function({
          asChild: e,
          ...r
        }, t) {
          const {
            openIconRef: o
          } = (0, S.useContext)(Sa), n = (0, fe.UP)(o, t), a = (0, k.v6)(r, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? pe.DX : Re.Maximize2;
          return (0, R.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        La = ({
          ...e
        }) => (0, R.jsx)(fa, {
          ...e
        }),
        Aa = (0, S.forwardRef)(function({
          testId: e,
          ...r
        }, t) {
          const {
            overlayRef: o
          } = (0, S.useContext)(Sa), n = (0, fe.UP)(o, t), a = (0, k.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, R.jsx)(va, {
            ref: n,
            ...a
          })
        }),
        Va = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            openAnim: n
          } = (0, S.useContext)(za), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, S.useContext)(Sa), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, S.useContext)(Sa), [r, t] = (0, S.useState)(e.getCursor()), o = (0, S.useCallback)(() => {
              t(e.getCursor())
            }, []);
            return (0, S.useEffect)(() => (e.addEventListener("zoom", o), () => {
              e.removeEventListener("zoom", o)
            }), [o]), {
              cursor: r
            }
          })(), l = [ut.xW.tokens, ut.xW.typography, ut.xW.grid, ft("dark")].join(" ");
          const c = (0, fe.UP)(a, o),
            u = (0, k.v6)(t, {
              "data-testid": e,
              onOpenAutoFocus: n,
              onCloseAutoFocus: e => ((e, r) => {
                e?.preventDefault(), r.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, Pe.$)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, R.jsxs)(ha, {
            ref: c,
            ...u,
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)(ja, {
                children: s
              })
            }), r]
          })
        }),
        Ma = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            containerRef: n
          } = (0, S.useContext)(Sa);
          (() => {
            const {
              contextSafe: e
            } = (0, kr.L)(), {
              toggleControls: r
            } = (0, S.useContext)(za), {
              containerRef: t,
              zoomPanRef: o,
              overlayRef: n,
              controlsRef: a,
              slide: s
            } = (0, S.useContext)(Sa), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (zr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...$r
              }), zr.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...$r
              }), zr.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...$r
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || zr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...$r
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (zr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...$r
              }), zr.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...$r
              }), zr.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...$r
              })))
            }), c = (0, S.useCallback)(() => {
              s.controlsVisible || r()
            }, [, r]);
            (0, fe.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Ir.NH)({
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
            s = (0, k.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, R.jsx)("div", {
            ref: a,
            ...s,
            children: (0, R.jsxs)(qa, {
              children: [(0, R.jsx)(Fa, {}), r]
            })
          })
        }),
        qa = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            zoomPanRef: n
          } = (0, S.useContext)(Sa), a = (0, fe.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = r ? pe.DX : "div";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Fa = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            placeholderRef: n
          } = (0, S.useContext)(Sa), a = (0, fe.UP)(n, o), s = (0, k.v6)(t, {
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
        Ba = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            imageRef: n
          } = (0, S.useContext)(Sa), a = (0, fe.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = r ? pe.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Xa = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            captionRef: n
          } = (0, S.useContext)(Sa), a = (0, fe.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = r ? pe.DX : "p";
          return (0, R.jsx)(Oa, {
            asChild: !0,
            children: (0, R.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Ga = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            controlsRef: n
          } = (0, S.useContext)(Sa);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: r,
              zoomOut: t,
              resetZoom: o,
              close: n
            } = (0, S.useContext)(za);
            (0, qr.vC)(["+", "=", "add", "plus"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, qr.vC)(["minus", "subtract"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, qr.vC)("r", o, {
              enabled: e,
              preventDefault: !0
            }), (0, qr.vC)("esc", n, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, fe.UP)(n, o),
            s = (0, k.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = r ? pe.DX : "div";
          return (0, R.jsx)(qr.Hb, {
            children: (0, R.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Ka = ({
          content: e,
          metadata: r,
          enabled: t = !0,
          children: o,
          ...n
        }) => {
          if (!t) return (0, R.jsx)(R.Fragment, {
            children: o
          });
          const a = (0, k.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, n);
          return (0, R.jsxs)(Qo, {
            delayDuration: 0,
            children: [(0, R.jsx)(Jo, {
              children: o
            }), (0, R.jsxs)(en, {
              ...a,
              children: [(0, R.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, r && (0, R.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: r
                })]
              }), (0, R.jsx)(rn, {})]
            })]
          })
        },
        Za = (0, S.forwardRef)(function({
          ...e
        }, r) {
          const t = (0, k.v6)(e, {
            isInline: !0
          });
          return (0, R.jsx)(yt, {
            ref: r,
            ...t
          })
        }),
        Ha = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          children: o,
          ...n
        }, a) {
          const s = (0, Qr.tz)(),
            {
              zoomRef: i
            } = (0, S.useContext)(Sa),
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
              } = (0, S.useContext)(Sa), {
                zoomIn: r,
                zoomOut: t,
                zoomTo: o
              } = (0, S.useContext)(za), [n, a] = (0, S.useState)(!1), [s, i] = (0, S.useState)(!1), [d, l] = (0, S.useState)(0), [c, u] = (0, S.useState)(0), [f, p] = (0, S.useState)(0), v = (0, S.useCallback)(() => {
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
            m = (0, k.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            h = r ? pe.DX : "div";
          return (0, R.jsxs)(h, {
            ref: b,
            ...m,
            children: [(0, R.jsx)(Ka, {
              side: "left",
              enabled: t,
              content: s.formatMessage(pt.ZoomInButtonLabel),
              metadata: s.formatMessage(pt.ZoomInButtonTooltip, {
                shortcut: (0, R.jsx)(Za, {
                  shortcut: "+"
                })
              }),
              children: (0, R.jsx)(We, {
                label: s.formatMessage(pt.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Wr({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, R.jsxs)(gn, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, R.jsx)(Pn, {
                className: "foundry_1a74xwbu",
                children: (0, R.jsx)(Nn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, R.jsx)(Ka, {
                side: "left",
                enabled: t,
                content: s.formatMessage(pt.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, R.jsx)(Ln, {
                  className: "foundry_1a74xwbw",
                  children: (0, R.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, R.jsx)(Ka, {
              side: "left",
              enabled: t,
              content: s.formatMessage(pt.ZoomOutButtonLabel),
              metadata: s.formatMessage(pt.ZoomOutButtonTooltip, {
                shortcut: (0, R.jsx)(Za, {
                  shortcut: "-"
                })
              }),
              children: (0, R.jsx)(We, {
                label: s.formatMessage(pt.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Wr({
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
        Wa = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          ...o
        }, n) {
          const a = (0, Qr.tz)(),
            {
              closeRef: s
            } = (0, S.useContext)(Sa),
            i = (0, fe.UP)(s, n),
            d = (0, k.v6)(o, {
              "data-testid": e,
              className: Hr({
                styled: !r
              })
            }),
            l = r ? (0, R.jsx)(pe.DX, {
              ref: i,
              ...d
            }) : (0, R.jsx)(We, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(pt.CloseButtonLabel)
            });
          return (0, R.jsx)(Ka, {
            side: "right",
            enabled: t,
            content: a.formatMessage(pt.CloseButtonLabel),
            metadata: a.formatMessage(pt.CloseButtonTooltip, {
              shortcut: (0, R.jsx)(Za, {
                shortcut: "Esc"
              })
            }),
            children: (0, R.jsx)(Ra, {
              asChild: !0,
              children: l
            })
          })
        }),
        Ua = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, Qr.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: r
              } = (0, S.useContext)(Sa), {
                contextSafe: t
              } = (0, kr.L)(), {
                resetZoom: o
              } = (0, S.useContext)(za), [n, a] = (0, S.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = t(e => {
                zr.os.to([r.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...$r
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
            } = (0, S.useContext)(Sa),
            i = (0, fe.UP)(s, o),
            d = (0, k.v6)(t, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, R.jsx)(Ka, {
            side: "left",
            enabled: r,
            content: n.formatMessage(pt.ResetZoomButtonLabel),
            metadata: n.formatMessage(pt.ResetZoomButtonTooltip, {
              shortcut: (0, R.jsx)(Za, {
                shortcut: "R"
              })
            }),
            children: (0, R.jsx)(We, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: n.formatMessage(pt.ResetZoomButtonLabel)
            })
          })
        }),
        $a = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, Qr.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, S.useContext)(Sa),
            i = (0, fe.UP)(a, o),
            d = (0, k.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, R.jsx)(Ka, {
            side: "left",
            enabled: r,
            content: n.formatMessage(pt.DownloadButtonTooltip),
            children: (0, R.jsx)(We, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: n.formatMessage(pt.DownloadButtonTooltip),
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
        Ya = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Qa = t(98905);

      function Ja(e) {
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

      function es(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function rs(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? es(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ja(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ts(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var os = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ns = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = rs(rs({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) os(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ts(e.variantClassNames, e => ts(e, e => e.split(" ")[0]))
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
        as = t(20357);
      const ss = (0, S.createContext)(null);

      function is() {
        const e = (0, S.useContext)(ss);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const ds = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          descriptionId: o = "",
          errorId: n = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, k.v6)({
              className: ns({
                status: a
              }),
              "data-testid": r
            }, s),
            l = t ? pe.DX : "div";
          return (0, R.jsx)(ss.Provider, {
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
        ls = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const {
            status: n
          } = is(), a = (0, k.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, t), s = {
            success: as.Check,
            invalid: as.X,
            neutral: as.TriangleAlert
          }, i = r ? pe.DX : s[n];
          return (0, R.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        cs = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            errorId: s
          } = is(), i = (0, k.v6)({
            "data-testid": r,
            id: s || a
          }, o), d = t ? pe.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        });
      var us = "ScrollArea",
        [fs, ps] = (0, wt.A)(us),
        [vs, ys] = fs(us),
        bs = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            type: o = "hover",
            dir: n,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = S.useState(null), [l, c] = S.useState(null), [u, f] = S.useState(null), [p, v] = S.useState(null), [y, b] = S.useState(null), [m, h] = S.useState(0), [g, w] = S.useState(0), [x, _] = S.useState(!1), [j, C] = S.useState(!1), O = (0, gt.s)(r, e => d(e)), P = (0, nn.jH)(n);
          return (0, R.jsx)(vs, {
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
            children: (0, R.jsx)(xt.sG.div, {
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
      bs.displayName = us;
      var ms = "ScrollAreaViewport",
        hs = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            children: o,
            nonce: n,
            ...a
          } = e, s = ys(ms, t), i = S.useRef(null), d = (0, gt.s)(r, i, s.onViewportChange);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(gs, {
              nonce: n
            }), (0, R.jsx)(xt.sG.div, {
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
      hs.displayName = ms;
      var gs = S.memo(({
          nonce: e
        }) => (0, R.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, r) => e.nonce === r.nonce),
        ws = "ScrollAreaScrollbar",
        xs = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = ys(ws, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = n, i = "horizontal" === e.orientation;
          return S.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === n.type ? (0, R.jsx)(_s, {
            ...o,
            ref: r,
            forceMount: t
          }) : "scroll" === n.type ? (0, R.jsx)(js, {
            ...o,
            ref: r,
            forceMount: t
          }) : "auto" === n.type ? (0, R.jsx)(Cs, {
            ...o,
            ref: r,
            forceMount: t
          }) : "always" === n.type ? (0, R.jsx)(Os, {
            ...o,
            ref: r,
            "data-state": "visible"
          }) : null
        });
      xs.displayName = ws;
      var _s = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = ys(ws, e.__scopeScrollArea), [a, s] = S.useState(!1);
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
          }, [n.scrollArea, n.scrollHideDelay]), (0, R.jsx)(co, {
            present: t || a,
            children: (0, R.jsx)(Cs, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: r
            })
          })
        }),
        js = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = ys(ws, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = Gs(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, [n.viewport, a, d, s]), (0, R.jsx)(co, {
            present: t || "hidden" !== i,
            children: (0, R.jsx)(Os, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...o,
              ref: r,
              onPointerEnter: (0, ht.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ht.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Cs = S.forwardRef((e, r) => {
          const t = ys(ws, e.__scopeScrollArea),
            {
              forceMount: o,
              ...n
            } = e,
            [a, s] = S.useState(!1),
            i = "horizontal" === e.orientation,
            d = Gs(() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(i ? e : r)
              }
            }, 10);
          return Ks(t.viewport, d), Ks(t.content, d), (0, R.jsx)(co, {
            present: o || a,
            children: (0, R.jsx)(Os, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: r
            })
          })
        }),
        Os = S.forwardRef((e, r) => {
          const {
            orientation: t = "vertical",
            ...o
          } = e, n = ys(ws, e.__scopeScrollArea), a = S.useRef(null), s = S.useRef(0), [i, d] = S.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Vs(i.viewport, i.content), c = {
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
              const n = Ms(t),
                a = r || n / 2,
                s = n - a,
                i = t.scrollbar.paddingStart + a,
                d = t.scrollbar.size - t.scrollbar.paddingEnd - s,
                l = t.content - t.viewport;
              return Fs([i, d], "ltr" === o ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, r)
          }
          return "horizontal" === t ? (0, R.jsx)(Ps, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = qs(n.viewport.scrollLeft, i, n.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              n.viewport && (n.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              n.viewport && (n.viewport.scrollLeft = u(e, n.dir))
            }
          }) : "vertical" === t ? (0, R.jsx)(Rs, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = qs(n.viewport.scrollTop, i);
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
        Ps = S.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = ys(ws, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, gt.s)(r, d, a.onScrollbarXChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(Ds, {
            "data-orientation": "horizontal",
            ...n,
            ref: l,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Ms(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.x),
            onDragScroll: r => e.onDragScroll(r.x),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollLeft + r.deltaX;
                e.onWheelScroll(o), Bs(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: As(s.paddingLeft),
                  paddingEnd: As(s.paddingRight)
                }
              })
            }
          })
        }),
        Rs = S.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = ys(ws, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, gt.s)(r, d, a.onScrollbarYChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(Ds, {
            "data-orientation": "vertical",
            ...n,
            ref: l,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Ms(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.y),
            onDragScroll: r => e.onDragScroll(r.y),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollTop + r.deltaY;
                e.onWheelScroll(o), Bs(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: As(s.paddingTop),
                  paddingEnd: As(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Ns, Ss] = fs(ws),
        Ds = S.forwardRef((e, r) => {
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
          } = e, p = ys(ws, t), [v, y] = S.useState(null), b = (0, gt.s)(r, e => y(e)), m = S.useRef(null), h = S.useRef(""), g = p.viewport, w = o.content - o.viewport, x = (0, _t.c)(c), _ = (0, _t.c)(d), j = Gs(u, 10);

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
          }, [g, v, w, x]), S.useEffect(_, [o, _]), Ks(v, j), Ks(p.content, j), (0, R.jsx)(Ns, {
            scope: t,
            scrollbar: v,
            hasThumb: n,
            onThumbChange: (0, _t.c)(a),
            onThumbPointerUp: (0, _t.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, _t.c)(i),
            children: (0, R.jsx)(xt.sG.div, {
              ...f,
              ref: b,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ht.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = v.getBoundingClientRect(), h.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, ht.mK)(e.onPointerMove, C),
              onPointerUp: (0, ht.mK)(e.onPointerUp, e => {
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = h.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        zs = "ScrollAreaThumb",
        ks = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ss(zs, e.__scopeScrollArea);
          return (0, R.jsx)(co, {
            present: t || n.hasThumb,
            children: (0, R.jsx)(Is, {
              ref: r,
              ...o
            })
          })
        }),
        Is = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            style: o,
            ...n
          } = e, a = ys(zs, t), s = Ss(zs, t), {
            onThumbPositionChange: i
          } = s, d = (0, gt.s)(r, e => s.onThumbChange(e)), l = S.useRef(void 0), c = Gs(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return S.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const r = () => {
                if (c(), !l.current) {
                  const r = Xs(e, i);
                  l.current = r, i()
                }
              };
              return i(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [a.viewport, c, i]), (0, R.jsx)(xt.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...n,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: (0, ht.mK)(e.onPointerDownCapture, e => {
              const r = e.target.getBoundingClientRect(),
                t = e.clientX - r.left,
                o = e.clientY - r.top;
              s.onThumbPointerDown({
                x: t,
                y: o
              })
            }),
            onPointerUp: (0, ht.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      ks.displayName = zs;
      var Ts = "ScrollAreaCorner",
        Es = S.forwardRef((e, r) => {
          const t = ys(Ts, e.__scopeScrollArea),
            o = Boolean(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && o ? (0, R.jsx)(Ls, {
            ...e,
            ref: r
          }) : null
        });
      Es.displayName = Ts;
      var Ls = S.forwardRef((e, r) => {
        const {
          __scopeScrollArea: t,
          ...o
        } = e, n = ys(Ts, t), [a, s] = S.useState(0), [i, d] = S.useState(0), l = Boolean(a && i);
        return Ks(n.scrollbarX, () => {
          const e = n.scrollbarX?.offsetHeight || 0;
          n.onCornerHeightChange(e), d(e)
        }), Ks(n.scrollbarY, () => {
          const e = n.scrollbarY?.offsetWidth || 0;
          n.onCornerWidthChange(e), s(e)
        }), l ? (0, R.jsx)(xt.sG.div, {
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

      function As(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Vs(e, r) {
        const t = e / r;
        return isNaN(t) ? 0 : t
      }

      function Ms(e) {
        const r = Vs(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          o = (e.scrollbar.size - t) * r;
        return Math.max(o, 18)
      }

      function qs(e, r, t = "ltr") {
        const o = Ms(r),
          n = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
          a = r.scrollbar.size - n,
          s = r.content - r.viewport,
          i = a - o,
          d = "ltr" === t ? [0, s] : [-1 * s, 0],
          l = (0, on.q)(e, d);
        return Fs([0, s], [0, i])(l)
      }

      function Fs(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function Bs(e, r) {
        return e > 0 && e < r
      }
      var Xs = (e, r = () => {}) => {
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

      function Gs(e, r) {
        const t = (0, _t.c)(e),
          o = S.useRef(0);
        return S.useEffect(() => () => window.clearTimeout(o.current), []), S.useCallback(() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(t, r)
        }, [t, r])
      }

      function Ks(e, r) {
        const t = (0, _t.c)(r);
        (0, At.N)(() => {
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
      var Zs = bs,
        Hs = hs,
        Ws = xs,
        Us = ks,
        $s = Es,
        Ys = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Qs = [" ", "Enter"],
        Js = "Select",
        [ei, ri, ti] = sn(Js),
        [oi, ni] = (0, wt.A)(Js, [ti, Ft]),
        ai = Ft(),
        [si, ii] = oi(Js),
        [di, li] = oi(Js);

      function ci(e) {
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
        } = e, b = ai(r), [m, h] = S.useState(null), [g, w] = S.useState(null), [x, _] = S.useState(!1), j = (0, nn.jH)(l), [C, O] = (0, vo.i)({
          prop: o,
          defaultProp: n ?? !1,
          onChange: a,
          caller: Js
        }), [P, N] = (0, vo.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: Js
        }), D = S.useRef(null), z = !m || !!v || !!m.closest("form"), [k, I] = S.useState(new Set), T = (0, kt.B)(), E = Array.from(k).map(e => e.props.value).join(";"), L = S.useCallback(e => {
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
          nativeOptions: k,
          nativeSelectKey: E,
          isFormControl: z
        };
        return (0, R.jsx)(oo, {
          ...b,
          children: (0, R.jsx)(si, {
            scope: r,
            ...V,
            children: (0, R.jsx)(ei.Provider, {
              scope: r,
              children: (0, R.jsx)(di, {
                scope: r,
                onNativeOptionAdd: L,
                onNativeOptionRemove: A,
                children: Qi(y) ? y(V) : t
              })
            })
          })
        })
      }
      ci.displayName = "SelectProvider";
      var ui = e => {
        const {
          __scopeSelect: r,
          children: t,
          ...o
        } = e;
        return (0, R.jsx)(ci, {
          __scopeSelect: r,
          ...o,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, R.jsxs)(R.Fragment, {
            children: [t, e ? (0, R.jsx)(Yi, {
              __scopeSelect: r
            }) : null]
          })
        })
      };
      ui.displayName = Js;
      var fi = "SelectTrigger",
        pi = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            disabled: o = !1,
            ...n
          } = e, a = ai(t), s = ii(fi, t), i = s.disabled || o, d = (0, gt.s)(r, s.onTriggerChange), l = ri(t), c = S.useRef("touch"), [u, f, p] = ed(e => {
            const r = l().filter(e => !e.disabled),
              t = r.find(e => e.value === s.value),
              o = rd(r, e, t);
            void 0 !== o && s.onValueChange(o.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, R.jsx)(no, {
            asChild: !0,
            ...a,
            children: (0, R.jsx)(xt.sG.button, {
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
              "data-placeholder": Ji(s.value) ? "" : void 0,
              ...n,
              ref: d,
              onClick: (0, ht.mK)(n.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, ht.mK)(n.onPointerDown, e => {
                c.current = e.pointerType;
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, ht.mK)(n.onKeyDown, e => {
                const r = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), r && " " === e.key || Ys.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      pi.displayName = fi;
      var vi = "SelectValue",
        yi = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = ii(vi, t), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, gt.s)(r, d.onValueNodeChange);
          (0, At.N)(() => {
            l(c)
          }, [l, c]);
          const f = Ji(d.value);
          return (0, R.jsx)(xt.sG.span, {
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
      yi.displayName = vi;
      var bi = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          ...n
        } = e;
        return (0, R.jsx)(xt.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          children: o || "▼"
        })
      });
      bi.displayName = "SelectIcon";
      var mi = "SelectPortal",
        [hi, gi] = oi(mi, {
          forceMount: void 0
        }),
        wi = e => {
          const {
            __scopeSelect: r,
            forceMount: t,
            ...o
          } = e;
          return (0, R.jsx)(hi, {
            scope: e.__scopeSelect,
            forceMount: t,
            children: (0, R.jsx)(lo, {
              asChild: !0,
              ...o
            })
          })
        };
      wi.displayName = mi;
      var xi = "SelectContent",
        _i = S.forwardRef((e, r) => {
          const t = gi(xi, e.__scopeSelect),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ii(xi, e.__scopeSelect),
            [s, i] = S.useState();
          return (0, At.N)(() => {
            i(new DocumentFragment)
          }, []), (0, R.jsx)(co, {
            present: o || a.open,
            children: ({
              present: e
            }) => e ? (0, R.jsx)(Ni, {
              ...n,
              ref: r
            }) : (0, R.jsx)(ji, {
              ...n,
              fragment: s
            })
          })
        });
      _i.displayName = xi;
      var ji = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          fragment: n
        } = e;
        return n ? io.createPortal((0, R.jsx)(Oi, {
          scope: t,
          children: (0, R.jsx)(ei.Slot, {
            scope: t,
            children: (0, R.jsx)("div", {
              ref: r,
              children: o
            })
          })
        }), n) : null
      });
      ji.displayName = "SelectContentFragment";
      var Ci = 10,
        [Oi, Pi] = oi(xi),
        Ri = (0, po.TL)("SelectContent.RemoveScroll"),
        Ni = S.forwardRef((e, r) => {
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
          } = e, h = ii(xi, t), [g, w] = S.useState(null), [x, _] = S.useState(null), j = (0, gt.s)(r, e => w(e)), [C, O] = S.useState(null), [P, N] = S.useState(null), D = ri(t), [z, k] = S.useState(!1), I = S.useRef(!1);
          S.useEffect(() => {
            if (g) return (0, ea.Eq)(g)
          }, [g]), (0, Qn.Oh)();
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
            z && E()
          }, [z, E]);
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
          const [V, M] = ed(e => {
            const r = D().filter(e => !e.disabled),
              t = r.find(e => e.ref.current === document.activeElement),
              o = rd(r, e, t);
            o && setTimeout(() => o.ref.current?.focus())
          }), q = S.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== h.value && h.value === r || o) && (O(e), o && (I.current = !0))
          }, [h.value]), F = S.useCallback(() => g?.focus(), [g]), B = S.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== h.value && h.value === r || o) && N(e)
          }, [h.value]), X = "popper" === o ? Di : Si, G = X === Di ? {
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
          return (0, R.jsx)(Oi, {
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
            isPositioned: z,
            searchRef: V,
            children: (0, R.jsx)(Jn.A, {
              as: Ri,
              allowPinchZoom: !0,
              children: (0, R.jsx)(Kn, {
                asChild: !0,
                trapped: h.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ht.mK)(n, e => {
                  h.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, R.jsx)(Pt, {
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
                    onPlaced: () => k(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: (0, ht.mK)(m.onKeyDown, e => {
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
      Ni.displayName = "SelectContentImpl";
      var Si = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onPlaced: o,
          ...n
        } = e, a = ii(xi, t), s = Pi(xi, t), [i, d] = S.useState(null), [l, c] = S.useState(null), u = (0, gt.s)(r, e => c(e)), f = ri(t), p = S.useRef(!1), v = S.useRef(!0), {
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
                c = window.innerWidth - Ci,
                u = (0, on.q)(a, [Ci, Math.max(Ci, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const o = r.right - n.right,
                a = window.innerWidth - t.right - o,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - Ci,
                u = (0, on.q)(a, [Ci, Math.max(Ci, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * Ci,
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
              O = e.top + e.height / 2 - Ci,
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
            i.style.margin = `${Ci}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", o?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, y, b, m, a.dir, o]);
        (0, At.N)(() => g(), [g]);
        const [w, x] = S.useState();
        (0, At.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = S.useCallback(e => {
          e && !0 === v.current && (g(), h?.(), v.current = !1)
        }, [g, h]);
        return (0, R.jsx)(zi, {
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
            children: (0, R.jsx)(xt.sG.div, {
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
      Si.displayName = "SelectItemAlignedPosition";
      var Di = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          align: o = "start",
          collisionPadding: n = Ci,
          ...a
        } = e, s = ai(t);
        return (0, R.jsx)(ao, {
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
      Di.displayName = "SelectPopperPosition";
      var [zi, ki] = oi(xi, {}), Ii = "SelectViewport", Ti = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          nonce: o,
          ...n
        } = e, a = Pi(Ii, t), s = ki(Ii, t), i = (0, gt.s)(r, a.onViewportChange), d = S.useRef(0);
        return (0, R.jsxs)(R.Fragment, {
          children: [(0, R.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, R.jsx)(ei.Slot, {
            scope: t,
            children: (0, R.jsx)(xt.sG.div, {
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
              onScroll: (0, ht.mK)(n.onScroll, e => {
                const r = e.currentTarget,
                  {
                    contentWrapper: t,
                    shouldExpandOnScrollRef: o
                  } = s;
                if (o?.current && t) {
                  const e = Math.abs(d.current - r.scrollTop);
                  if (e > 0) {
                    const o = window.innerHeight - 2 * Ci,
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
      Ti.displayName = Ii;
      var Ei = "SelectGroup",
        [Li, Ai] = oi(Ei);
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = (0, kt.B)();
        return (0, R.jsx)(Li, {
          scope: t,
          id: n,
          children: (0, R.jsx)(xt.sG.div, {
            role: "group",
            "aria-labelledby": n,
            ...o,
            ref: r
          })
        })
      }).displayName = Ei;
      var Vi = "SelectLabel";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = Ai(Vi, t);
        return (0, R.jsx)(xt.sG.div, {
          id: n.id,
          ...o,
          ref: r
        })
      }).displayName = Vi;
      var Mi = "SelectItem",
        [qi, Fi] = oi(Mi),
        Bi = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            value: o,
            disabled: n = !1,
            textValue: a,
            ...s
          } = e, i = ii(Mi, t), d = Pi(Mi, t), l = i.value === o, [c, u] = S.useState(a ?? ""), [f, p] = S.useState(!1), v = (0, gt.s)(r, e => d.itemRefCallback?.(e, o, n)), y = (0, kt.B)(), b = S.useRef("touch"), m = () => {
            n || (i.onValueChange(o), i.onOpenChange(!1))
          };
          return (0, R.jsx)(qi, {
            scope: t,
            value: o,
            disabled: n,
            textId: y,
            isSelected: l,
            onItemTextChange: S.useCallback(e => {
              u(r => r || (e?.textContent ?? "").trim())
            }, []),
            children: (0, R.jsx)(ei.ItemSlot, {
              scope: t,
              value: o,
              disabled: n,
              textValue: c,
              children: (0, R.jsx)(xt.sG.div, {
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
                onFocus: (0, ht.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, ht.mK)(s.onBlur, () => p(!1)),
                onClick: (0, ht.mK)(s.onClick, () => {
                  "mouse" !== b.current && m()
                }),
                onPointerUp: (0, ht.mK)(s.onPointerUp, () => {
                  "mouse" === b.current && m()
                }),
                onPointerDown: (0, ht.mK)(s.onPointerDown, e => {
                  b.current = e.pointerType
                }),
                onPointerMove: (0, ht.mK)(s.onPointerMove, e => {
                  b.current = e.pointerType, n ? d.onItemLeave?.() : "mouse" === b.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ht.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ht.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Qs.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Bi.displayName = Mi;
      var Xi = "SelectItemText",
        Gi = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            ...a
          } = e, s = ii(Xi, t), i = Pi(Xi, t), d = Fi(Xi, t), l = li(Xi, t), [c, u] = S.useState(null), f = (0, gt.s)(r, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, v = S.useMemo(() => (0, R.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: b
          } = l;
          return (0, At.N)(() => (y(v), () => b(v)), [y, b, v]), (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(xt.sG.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !Ji(s.value) ? io.createPortal(a.children, s.valueNode) : null]
          })
        });
      Gi.displayName = Xi;
      var Ki = "SelectItemIndicator";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return Fi(Ki, t).isSelected ? (0, R.jsx)(xt.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: r
        }) : null
      }).displayName = Ki;
      var Zi = "SelectScrollUpButton";
      S.forwardRef((e, r) => {
        const t = Pi(Zi, e.__scopeSelect),
          o = ki(Zi, e.__scopeSelect),
          [n, a] = S.useState(!1),
          s = (0, gt.s)(r, o.onScrollButtonChange);
        return (0, At.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollTop > 0;
              a(e)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, R.jsx)(Wi, {
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
      }).displayName = Zi;
      var Hi = "SelectScrollDownButton";
      S.forwardRef((e, r) => {
        const t = Pi(Hi, e.__scopeSelect),
          o = ki(Hi, e.__scopeSelect),
          [n, a] = S.useState(!1),
          s = (0, gt.s)(r, o.onScrollButtonChange);
        return (0, At.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollHeight - r.clientHeight,
                t = Math.ceil(r.scrollTop) < e;
              a(t)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, R.jsx)(Wi, {
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
      }).displayName = Hi;
      var Wi = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onAutoScroll: o,
          ...n
        } = e, a = Pi("SelectScrollButton", t), s = S.useRef(null), i = ri(t), d = S.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return S.useEffect(() => () => d(), [d]), (0, At.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, R.jsx)(xt.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          style: {
            flexShrink: 0,
            ...n.style
          },
          onPointerDown: (0, ht.mK)(n.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerMove: (0, ht.mK)(n.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerLeave: (0, ht.mK)(n.onPointerLeave, () => {
            d()
          })
        })
      });
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return (0, R.jsx)(xt.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: r
        })
      }).displayName = "SelectSeparator";
      var Ui = "SelectArrow";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = ai(t);
        return "popper" === Pi(Ui, t).position ? (0, R.jsx)(so, {
          ...n,
          ...o,
          ref: r
        }) : null
      }).displayName = Ui;
      var $i = "SelectBubbleInput",
        Yi = S.forwardRef(({
          __scopeSelect: e,
          ...r
        }, t) => {
          const o = ii($i, e),
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
            v = (0, gt.s)(t, p),
            y = n ?? "",
            b = (0, an.Z)(y),
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
          }, [b, y]), (0, R.jsxs)(xt.sG.select, {
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
              ...yo.Qg,
              ...r.style
            },
            ref: v,
            defaultValue: y,
            children: [Ji(n) && !m ? (0, R.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function Qi(e) {
        return "function" == typeof e
      }

      function Ji(e) {
        return "" === e || void 0 === e
      }

      function ed(e) {
        const r = (0, _t.c)(e),
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

      function rd(e, r, t) {
        const o = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
          n = t ? e.indexOf(t) : -1;
        let a = (s = e, i = Math.max(n, 0), s.map((e, r) => s[(i + r) % s.length]));
        var s, i;
        1 === o.length && (a = a.filter(e => e !== t));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
        return d !== t ? d : void 0
      }

      function td(e) {
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

      function od(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function nd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? od(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = td(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : od(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ad(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      Yi.displayName = $i;
      var sd = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        id = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = nd(nd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sd(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ad(e.variantClassNames, e => ad(e, e => e.split(" ")[0]))
            }
          }, r
        },
        dd = id({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ld = id({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cd = id({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ud = id({
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
        fd = id({
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
        pd = id({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const vd = (0, S.createContext)(null);

      function yd() {
        const e = (0, S.useContext)(vd);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const bd = (0, S.forwardRef)(({
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
            z = (0, k.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": r
            }, v);
          return (0, R.jsx)(vd.Provider, {
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
            children: (0, R.jsx)(ui, {
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
                ...z,
                children: e
              })
            })
          })
        }),
        md = (0, S.forwardRef)(({
          hideDividers: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            popoverId: a
          } = yd(), s = (0, k.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: dd({
              hideDividers: e
            }),
            "data-testid": t
          }, o);
          return (0, R.jsx)(_i, {
            ...s,
            ref: n,
            children: (0, R.jsx)(Ti, {
              className: "foundry_uaq1gwn",
              children: r
            })
          })
        }),
        hd = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(Ti, {
            ref: t,
            ...o
          })
        }),
        gd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": r
          }, t);
          return (0, R.jsxs)(Zs, {
            ...n,
            ref: o,
            children: [(0, R.jsx)(hd, {
              asChild: !0,
              children: (0, R.jsx)(Hs, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, R.jsx)(Ws, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, R.jsx)(Us, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        wd = (0, S.forwardRef)(({
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
          } = yd(), {
            isPressed: w,
            pressProps: x
          } = (0, Qa.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, j] = (0, S.useState)(!1), [C, O] = (0, S.useState)(!1);
          (0, S.useEffect)(() => {
            j(!!y.current || !!m.current), O(!!b.current)
          }, []);
          const P = (0, k.v6)({
              id: f,
              className: fd({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": _ ? (0, k.VW)(t, c, u) : t,
              "aria-describedby": C ? (0, k.VW)(o, v) : o,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": h ? "open" : "closed",
              "data-testid": r,
              "data-pressed": !!w
            }, (0, k.cJ)(x, "onKeyDown"), a),
            N = n ? pe.DX : pi;
          return (0, R.jsx)(N, {
            ...P,
            ref: s,
            children: e
          })
        }),
        xd = (0, S.forwardRef)(({
          placeholder: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": t
            }, o),
            s = r ? pe.DX : "span";
          return (0, R.jsx)(s, {
            ...a,
            ref: n,
            children: (0, R.jsx)(yi, {
              placeholder: e
            })
          })
        }),
        _d = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const {
            isDisabled: n,
            isReadOnly: a,
            isOpen: s
          } = yd(), i = s ? Re.ChevronUp : Re.ChevronDown, d = (0, k.v6)({
            asChild: !0,
            className: pd({
              isDisabled: a || n
            }),
            "data-testid": r
          }, t);
          return (0, R.jsx)(bi, {
            ...d,
            ref: o,
            children: e || (0, R.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        jd = (0, S.forwardRef)(({
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
          } = yd(), f = i && !n, p = (0, fe.UP)(c, s), v = (0, k.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: ud({
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
        Cd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = yd(), d = (0, fe.UP)(i, n), l = (0, k.v6)({
            className: ld({
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
        Od = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = yd(), d = (0, fe.UP)(s, n), l = (0, k.v6)({
            className: cd({
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
        Pd = (0, S.forwardRef)(({
          children: e,
          value: r,
          isDisabled: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, fe.UP)(s, a),
            d = (0, k.v6)({
              value: r,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: t,
              "data-testid": o
            }, n);
          return (0, R.jsx)(Bi, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Rd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": r
          }, t);
          return (0, R.jsx)(Gi, {
            ref: o,
            asChild: !0,
            children: (0, R.jsx)("span", {
              ...n,
              children: e
            })
          })
        }),
        Nd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_uaq1gws",
            "data-testid": r
          }, t);
          return (0, R.jsx)(bi, {
            asChild: !0,
            ...n,
            ref: o,
            children: e
          })
        }),
        Sd = wi,
        Dd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = yd(), i = (0, k.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : ds;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        zd = ls,
        kd = cs;
      var Id = t(83588),
        Td = t(56728);

      function Ed(e) {
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

      function Ld(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ad(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ld(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ed(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ld(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Vd(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Md = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        qd = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ad(Ad({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Md(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vd(e.variantClassNames, e => Vd(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Fd = qd({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bd = qd({
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
        Xd = qd({
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
        Gd = qd({
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
        Kd = qd({
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
      const Zd = (0, S.createContext)(null);

      function Hd() {
        const e = (0, S.useContext)(Zd);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Wd = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: o,
          children: n,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, k.v6)({
              "data-testid": t,
              className: "foundry_okz6z20"
            }, i),
            c = o ? pe.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)();
          return (0, R.jsx)(Zd.Provider, {
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
        Ud = (0, S.forwardRef)(({
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
            } = Hd(),
            _ = (0, Td.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, Id.K)({
              id: a || m,
              "aria-labelledby": (0, k.VW)(o, h),
              "aria-describedby": (0, k.VW)(n, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, k.v6)({
              className: Kd({
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
              className: Gd({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, R.jsx)("div", {
                className: Bd({
                  size: y,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        $d = (0, S.forwardRef)(({
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
          } = Hd(), c = (0, k.v6)({
            id: n.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Xd({
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
        Yd = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Hd(), i = o.id || s, d = (0, k.v6)({
            className: Fd({
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
      var Qd = t(26688);
      const Jd = ({
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
        el = ({
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
        rl = ({
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
        tl = ({
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
        ol = ({
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
        nl = ({
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

      function al(e) {
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

      function sl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function il(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? sl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = al(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function dl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ll = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        cl = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = il(il({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ll(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dl(e.variantClassNames, e => dl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ul = cl({
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
        fl = cl({
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
        pl = cl({
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
        vl = cl({
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
        yl = cl({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bl = cl({
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
      const ml = (0, S.createContext)(null);

      function hl() {
        const e = (0, S.useContext)(ml);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const gl = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: o,
          children: n,
          ...a
        }, s) => {
          const i = (0, k.v6)({
              "data-testid": t,
              className: "foundry_11gbdty0"
            }, (0, k.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = o ? pe.DX : "div",
            l = (0, S.useId)(),
            c = (0, S.useId)(),
            u = (0, S.useId)();
          return (0, R.jsx)(ml.Provider, {
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
        wl = (0, S.forwardRef)(({
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
          } = hl(), _ = (0, S.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: O
          } = (0, Qa.d)({
            ref: _
          }), {
            setSelected: P,
            toggle: N,
            ...D
          } = (0, Td.H)({
            isSelected: r,
            defaultSelected: t,
            onChange: o
          }), {
            inputProps: z,
            isSelected: I,
            isDisabled: T,
            isReadOnly: E
          } = (0, Qd.v)({
            "aria-label": "",
            id: j,
            name: n,
            ...x
          }, {
            ...D,
            toggle: N,
            setSelected: x.isReadOnly ? () => !1 : P
          }, _), L = (0, k.v6)({
            className: fl({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || T || E || N()
            }
          }, O, f), A = (0, k.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": r,
            "aria-labelledby": (0, k.VW)(c, g),
            "aria-describedby": (0, k.VW)(d, h),
            "aria-errormessage": (0, k.VW)(l, x.isInvalid ? h : void 0),
            "aria-required": m,
            required: m
          }, z), V = b ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, R.jsxs)("div", {
            ...L,
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)("input", {
                ...A,
                ref: p
              })
            }), (0, R.jsx)("div", {
              className: (0, Pe.$)(ul({
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
        xl = (0, S.forwardRef)(({
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
          } = hl(), u = a.id || d, f = c && !n, p = (0, k.v6)({
            className: bl({
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
        _l = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = hl(), i = o.id || s, d = (0, k.v6)({
            className: pl({
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
        jl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = hl(), s = o.id || a, i = (0, k.v6)({
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
        Cl = (0, S.createContext)(null);

      function Ol() {
        const e = (0, S.useContext)(Cl);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Pl = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          size: o = "MD",
          isRequired: n = !1,
          ...a
        }, s) => {
          const [i, d] = (0, S.useState)(null), [l, c] = (0, S.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, k.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = r ? pe.DX : "fieldset";
          return (0, R.jsx)(Cl.Provider, {
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
        Rl = (0, S.forwardRef)(({
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
          } = Ol(), l = d && !a, c = (0, k.v6)({
            "data-testid": t,
            className: yl({
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
        Nl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setDescriptionId: a
          } = Ol(), s = (0, S.useId)(), i = o.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, k.v6)({
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
        Sl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = Ol(), s = (0, k.v6)({
            "data-testid": t,
            className: vl({
              size: a
            })
          }, o), i = r ? pe.DX : "div";
          return (0, R.jsx)(i, {
            ...s,
            ref: n,
            children: e
          })
        }),
        Dl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setErrorTextId: a
          } = Ol(), s = (0, S.useId)(), i = o.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, k.v6)({
              "data-testid": t,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, o),
            l = Re.X,
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

      function zl(e) {
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

      function kl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Il(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? kl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = zl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : kl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Tl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var El = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ll = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Il(Il({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) El(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tl(e.variantClassNames, e => Tl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Al = Ll({
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
        Vl = Ll({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ml = Ll({
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
        ql = Ll({
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
      const Fl = (0, S.createContext)(null);

      function Bl() {
        const e = (0, S.useContext)(Fl);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Xl = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, k.v6)({
              "data-testid": t,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? pe.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)(),
            v = (0, S.useId)();
          return (0, R.jsx)(Fl.Provider, {
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
        Gl = (0, S.forwardRef)(({
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
          } = Bl(), u = (0, k.v6)({
            className: Ml({
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
        Kl = (0, S.forwardRef)(({
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
          } = Bl(), g = (0, S.useRef)(null), w = (0, fe.UP)(g, c), x = (0, k.v6)({
            className: ql({
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
            "aria-labelledby": (0, k.VW)(l.id, f, v, i),
            "aria-describedby": (0, k.VW)(u, d),
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
        Zl = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Bl(), i = (0, k.v6)({
            className: Al({
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
        Hl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = Bl(), i = (0, k.v6)({
            className: Vl({
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
        Wl = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Bl(), i = (0, k.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : ds;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Ul = ls,
        $l = cs;
      var Yl = t(707),
        Ql = t(5277);

      function Jl(e) {
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

      function ec(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function rc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ec(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Jl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ec(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function tc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var oc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        nc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = rc(rc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) oc(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tc(e.variantClassNames, e => tc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ac = nc({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sc = nc({
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
      const ic = (0, S.createContext)(null);

      function dc() {
        const e = (0, S.useContext)(ic);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const lc = (0, S.forwardRef)(({
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
            m = (0, Yl.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: h
            } = (0, Ql.m)({
              ...c,
              orientation: t,
              "aria-labelledby": (0, k.VW)(v, s),
              "aria-describedby": (0, k.VW)(y, b, i),
              "aria-errormessage": (0, k.VW)(b, d)
            }, m),
            g = (0, k.v6)({
              className: "foundry_njguqn0"
            }, h, (0, k.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? pe.DX : "div";
          return (0, R.jsx)(ic.Provider, {
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
        cc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            size: a,
            orientation: s
          } = dc(), i = (0, k.v6)({
            "data-testid": e,
            className: sc({
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
        uc = (0, S.forwardRef)(({
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
          } = dc(), l = i && !n, c = (0, k.v6)({
            id: a.id || d,
            "data-testid": e,
            className: ac({
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
        fc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = dc(), s = (0, k.v6)({
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
        pc = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            errorId: a,
            status: s
          } = dc(), i = (0, k.v6)({
            className: "foundry_njguqnc",
            "data-testid": r,
            errorId: a,
            status: s
          }, o), d = t ? pe.DX : ds;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        vc = ls,
        yc = cs;
      var bc = t(80146),
        mc = nc({
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
        hc = nc({
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
        gc = nc({
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
        wc = nc({
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
      const xc = ({
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
        _c = ({
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
        jc = ({
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
        Cc = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
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
        Oc = (0, S.forwardRef)(({
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
            } = dc(),
            {
              isPressed: p,
              pressProps: v
            } = (0, Qa.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, bc.z)({
              ...t,
              id: s,
              value: r,
              "aria-label": ""
            }, i, n),
            b = y.checked,
            m = y.disabled || i?.isReadOnly,
            h = (0, k.v6)(y, {
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
            className: wc({
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
              className: gc({
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
        Pc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            size: s,
            state: i
          } = dc(), d = (0, S.useId)(), l = (0, k.v6)({
            id: d,
            "data-testid": e,
            className: hc({
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
        Rc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = dc(), s = (0, k.v6)({
            "data-testid": e,
            className: mc({
              isDisabled: a
            })
          }, o), i = r ? pe.DX : "span";
          return (0, R.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        });
      var Nc = t(58900);

      function Sc(e) {
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

      function Dc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function zc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Dc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Sc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Dc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function kc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Ic = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Tc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = zc(zc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ic(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kc(e.variantClassNames, e => kc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Ec = Tc({
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
        Lc = Tc({
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
        Ac = Tc({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vc = Tc({
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
        Mc = Tc({
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
        qc = Tc({
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
      const Fc = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Bc = (0, S.createContext)(null);

      function Xc() {
        const e = (0, S.useContext)(Bc);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Gc = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, S.useState)("text"), u = `${(0,S.useId)()}-label`, f = `${(0,S.useId)()}-input`, p = `${(0,S.useId)()}-description`, v = (0, S.useRef)(null), y = (0, S.useRef)(Fc), b = (0, k.v6)({
            "data-testid": t,
            className: "foundry_8oytzo4"
          }, i), m = e ? pe.DX : "div";
          return (0, R.jsx)(Bc.Provider, {
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
        Kc = (0, S.forwardRef)(({
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
          } = Xc(), u = d && !n, f = (0, k.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: qc({
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
        Zc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = Xc(), s = (0, k.v6)({
            "data-testid": e,
            className: Ac({
              isDisabled: a
            })
          }, o), i = r ? pe.DX : "span";
          return (0, R.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        }),
        Hc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = Xc(), d = (0, k.v6)({
            "data-testid": e,
            className: (0, Pe.$)(Ec({
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
        Wc = (0, S.forwardRef)(({
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
          } = Xc();
          (0, S.useEffect)(() => g(l), []);
          const j = "invalid" === y,
            C = (0, k.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: m,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, k.VW)(b, i),
              "aria-describedby": (0, k.VW)(h, d),
              "data-testid": e,
              className: (0, Pe.$)(Mc({
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
            O = (0, Nc.A)({
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
        Uc = (0, S.forwardRef)(({
          icon: e,
          asChild: r,
          testId: t,
          side: o,
          ...n
        }, a) => {
          const {
            isDisabled: s
          } = Xc(), i = (0, k.v6)({
            size: "LG",
            "data-testid": t,
            className: (0, Pe.$)(Vc({
              side: o,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, n), d = r ? pe.DX : Re[e];
          return (0, R.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        $c = (0, S.forwardRef)(({
          ...e
        }, r) => {
          const {
            isDisabled: t
          } = Xc(), o = (0, k.v6)({
            isDisabled: t,
            size: "LG",
            appearance: "ghost",
            className: (0, Pe.$)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, R.jsx)(We, {
            ref: r,
            ...o,
            preventFocusOnPress: !1
          })
        }),
        Yc = (0, S.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: r,
          ...t
        }, o) => {
          const {
            type: n,
            setType: a,
            inputRef: s,
            focusState: i
          } = Xc(), d = "password" === n, l = d ? e : r;
          (0, S.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, k.v6)({
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
          return (0, R.jsxs)(Qo, {
            children: [(0, R.jsx)(Jo, {
              children: (0, R.jsx)($c, {
                ref: o,
                ...c
              })
            }), (0, R.jsxs)(en, {
              side: "bottom",
              align: "end",
              children: [l, (0, R.jsx)(rn, {})]
            })]
          })
        }),
        Qc = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Xc(), i = (0, k.v6)({
            className: Lc({
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
        Jc = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Xc(), i = (0, k.v6)({
            className: "foundry_8oytzo13",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : ds;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        eu = ls,
        ru = cs;
      var tu = t(68196);

      function ou(e) {
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

      function nu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function au(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? nu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ou(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : nu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function su(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var iu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        du = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = au(au({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) iu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return su(e.variantClassNames, e => su(e, e => e.split(" ")[0]))
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
      const lu = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        cu = (0, S.forwardRef)(({
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
            d = (0, k.v6)({
              "data-testid": t,
              className: du({
                size: r
              })
            }, i);
          return (0, R.jsx)("button", {
            ref: s,
            ...d,
            children: (0, R.jsx)(Re.X, {
              label: e,
              size: lu[r]
            })
          })
        });

      function uu(e) {
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

      function fu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function pu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? fu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = uu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function vu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var yu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        bu = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = pu(pu({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vu(e.variantClassNames, e => vu(e, e => e.split(" ")[0]))
            }
          }, r
        },
        mu = bu({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hu = bu({
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
        gu = bu({
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
      const wu = (0, S.createContext)(null);

      function xu() {
        const e = (0, S.useContext)(wu);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const _u = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          status: t,
          background: o,
          ...n
        }, a) => {
          const s = e ? pe.DX : "div",
            i = (0, k.v6)({
              className: gu({
                status: t,
                background: o
              })
            }, n);
          return (0, R.jsx)(wu.Provider, {
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
        ju = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_1m368qha"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Cu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_1m368qhb"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Ou = {
          danger: Re.CircleX,
          information: Re.Info,
          success: Re.CircleCheck,
          warning: Re.TriangleAlert
        },
        Pu = (0, S.forwardRef)(({
          asChild: e,
          size: r = "XL",
          ...t
        }, o) => {
          const {
            status: n
          } = xu(), a = e ? pe.DX : Ou[n], s = (0, k.v6)({
            className: hu({
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
        Ru = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Nu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Su = (0, S.forwardRef)(({
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
            } = (0, tu.i)(o, a),
            c = (0, k.v6)({
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
        Du = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : "div",
            s = (0, k.v6)({
              className: "foundry_1m368qhm"
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        zu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          className: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            className: (0, Pe.$)(t, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...o
          })
        }),
        ku = (0, S.forwardRef)((e, r) => {
          const {
            background: t
          } = xu(), o = "none" !== t, n = (0, k.v6)({
            className: mu({
              hasBackground: o
            })
          }, e);
          return (0, R.jsx)(cu, {
            size: "SM",
            ref: r,
            ...n
          })
        });
      var Iu = t(64634),
        Tu = t(7697),
        Eu = t(17497);
      var Lu = t(69066);

      function Au(e) {
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

      function Vu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Mu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Vu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Au(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function qu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Fu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Bu = "foundry_qmpv6yv",
        Xu = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Mu(Mu({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Fu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qu(e.variantClassNames, e => qu(e, e => e.split(" ")[0]))
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
      const Gu = (0, S.createContext)(null);

      function Ku() {
        const e = (0, S.useContext)(Gu);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Zu = (0, S.forwardRef)(({
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
                [d, l] = (0, Iu.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: r && a > 1
                }, [(0, Tu.A)(), (0, Eu.A)()]),
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
            y = (0, k.v6)({
              className: Xu(c)
            }, v, i),
            b = e ? pe.DX : "div";
          return (0, R.jsx)(Gu.Provider, {
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
        Hu = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Wu = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            currentAlert: o
          } = Ku();
          if (!e && !o || !o?.status) return null;
          const n = e || Hu[o.status],
            a = Re[n],
            s = (0, k.v6)({
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
        Uu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        $u = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          align: t = "left",
          status: o,
          background: n,
          ...a
        }, s) => {
          const i = e ? pe.DX : "div",
            d = (0, k.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, R.jsx)(i, {
            ref: s,
            "data-testid": r,
            ...d
          })
        }),
        Yu = (0, S.forwardRef)(({
          testId: e,
          children: r,
          ...t
        }, o) => {
          const {
            setAlerts: n,
            emblaRef: a,
            emblaApi: s
          } = Ku(), i = (0, k.v6)({
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
        Qu = (0, S.forwardRef)(({
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
            } = (0, tu.i)(o, a),
            c = (0, k.v6)({
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
        Ju = (0, S.forwardRef)((e, r) => {
          const t = (0, k.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, R.jsx)(cu, {
            ref: r,
            "data-close-btn": !0,
            size: "SM",
            ...t
          })
        }),
        ef = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          children: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : "div",
            s = (0, k.v6)({
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
        rf = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            nextAlert: o,
            canScrollNext: n
          } = Ku(), a = (0, k.v6)({
            className: Bu
          }, r);
          return (0, R.jsx)(Lu.K, {
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
        tf = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            prevAlert: o,
            canScrollPrev: n
          } = Ku(), a = (0, k.v6)({
            className: Bu
          }, r);
          return (0, R.jsx)(Lu.K, {
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
        of = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            currentAlertIndex: o,
            numAlerts: n
          } = Ku(), a = (0, k.v6)({
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

      function nf(e) {
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

      function af(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function sf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? af(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = nf(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : af(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function df(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var lf = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        cf = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = sf(sf({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) lf(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return df(e.variantClassNames, e => df(e, e => e.split(" ")[0]))
            }
          }, r
        },
        uf = cf({
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
        ff = cf({
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
        pf = cf({
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
      const vf = (0, S.createContext)(null);

      function yf() {
        const e = (0, S.useContext)(vf);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const bf = (0, S.forwardRef)(({
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
            u = (0, k.v6)({
              className: ff(c)
            }, d),
            f = e ? pe.DX : "div";
          return (0, R.jsx)(vf.Provider, {
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
        mf = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = yf(), s = e ? pe.DX : "div", i = (0, k.v6)({
            className: pf({
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
        hf = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Re[e],
            n = (0, k.v6)({
              className: "foundry_oahh5812"
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            size: "SM",
            ...n
          })
        }),
        gf = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            background: o,
            isDisabled: n
          } = yf(), a = (0, k.v6)({
            className: uf({
              background: o
            })
          }, r);
          return (0, R.jsx)(We, {
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
      var wf = t(72976),
        xf = "ToastProvider",
        [_f, jf, Cf] = sn("Toast"),
        [Of, Pf] = (0, wt.A)("Toast", [Cf]),
        [Rf, Nf] = Of(xf),
        Sf = e => {
          const {
            __scopeToast: r,
            label: t = "Notification",
            duration: o = 5e3,
            swipeDirection: n = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = S.useState(null), [c, u] = S.useState(0), f = S.useRef(!1), p = S.useRef(!1);
          return t.trim() || console.error(`Invalid prop \`label\` supplied to \`${xf}\`. Expected non-empty \`string\`.`), (0, R.jsx)(_f.Provider, {
            scope: r,
            children: (0, R.jsx)(Rf, {
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
      Sf.displayName = xf;
      var Df = "ToastViewport",
        zf = ["F8"],
        kf = "toast.viewportPause",
        If = "toast.viewportResume",
        Tf = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            hotkey: o = zf,
            label: n = "Notifications ({hotkey})",
            ...a
          } = e, s = Nf(Df, t), i = jf(t), d = S.useRef(null), l = S.useRef(null), c = S.useRef(null), u = S.useRef(null), f = (0, gt.s)(r, u, s.onViewportChange), p = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
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
                    const e = new CustomEvent(kf);
                    r.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                o = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(If);
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
                o = [t, ...Qf(t)];
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
                  Jf(n.slice(a + 1)) ? r.preventDefault() : o ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r)
            }
          }, [i, y]), (0, R.jsxs)(zt, {
            ref: d,
            role: "region",
            "aria-label": n.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, R.jsx)(Lf, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Jf(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, R.jsx)(_f.Slot, {
              scope: t,
              children: (0, R.jsx)(xt.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, R.jsx)(Lf, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Jf(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Tf.displayName = Df;
      var Ef = "ToastFocusProxy",
        Lf = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            onFocusFromOutsideViewport: o,
            ...n
          } = e, a = Nf(Ef, t);
          return (0, R.jsx)(yo.s6, {
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
      Lf.displayName = Ef;
      var Af = "Toast",
        Vf = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, vo.i)({
            prop: o,
            defaultProp: n ?? !0,
            onChange: a,
            caller: Af
          });
          return (0, R.jsx)(co, {
            present: t || i,
            children: (0, R.jsx)(Ff, {
              open: i,
              ...s,
              ref: r,
              onClose: () => d(!1),
              onPause: (0, _t.c)(e.onPause),
              onResume: (0, _t.c)(e.onResume),
              onSwipeStart: (0, ht.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, ht.mK)(e.onSwipeMove, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${t}px`)
              }),
              onSwipeCancel: (0, ht.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, ht.mK)(e.onSwipeEnd, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${t}px`), d(!1)
              })
            })
          })
        });
      Vf.displayName = Af;
      var [Mf, qf] = Of(Af, {
        onClose() {}
      }), Ff = S.forwardRef((e, r) => {
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
        } = e, y = Nf(Af, t), [b, m] = S.useState(null), h = (0, gt.s)(r, e => m(e)), g = S.useRef(null), w = S.useRef(null), x = n || y.duration, _ = S.useRef(0), j = S.useRef(x), C = S.useRef(0), {
          onToastAdd: O,
          onToastRemove: P
        } = y, N = (0, _t.c)(() => {
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
            return e.addEventListener(kf, t), e.addEventListener(If, r), () => {
              e.removeEventListener(kf, t), e.removeEventListener(If, r)
            }
          }
        }, [y.viewport, x, d, l, D]), S.useEffect(() => {
          a && !y.isClosePausedRef.current && D(x)
        }, [a, x, y.isClosePausedRef, D]), S.useEffect(() => (O(), () => P()), [O, P]);
        const z = S.useMemo(() => b ? Uf(b) : null, [b]);
        return y.viewport ? (0, R.jsxs)(R.Fragment, {
          children: [z && (0, R.jsx)(Bf, {
            __scopeToast: t,
            role: "status",
            "aria-live": "foreground" === o ? "assertive" : "polite",
            children: z
          }), (0, R.jsx)(Mf, {
            scope: t,
            onClose: N,
            children: io.createPortal((0, R.jsx)(_f.ItemSlot, {
              scope: t,
              children: (0, R.jsx)(Dt, {
                asChild: !0,
                onEscapeKeyDown: (0, ht.mK)(i, () => {
                  y.isFocusedToastEscapeKeyDownRef.current || N(), y.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, R.jsx)(xt.sG.li, {
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
                  onKeyDown: (0, ht.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, N()))
                  }),
                  onPointerDown: (0, ht.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, ht.mK)(e.onPointerMove, e => {
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
                    o ? (w.current = l, $f("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Yf(l, y.swipeDirection, d) ? (w.current = l, $f("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(r) > d || Math.abs(t) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, ht.mK)(e.onPointerUp, e => {
                    const r = w.current,
                      t = e.target;
                    if (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), w.current = null, g.current = null, r) {
                      const t = e.currentTarget,
                        o = {
                          originalEvent: e,
                          delta: r
                        };
                      Yf(r, y.swipeDirection, y.swipeThreshold) ? $f("toast.swipeEnd", p, o, {
                        discrete: !0
                      }) : $f("toast.swipeCancel", f, o, {
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
      }), Bf = e => {
        const {
          __scopeToast: r,
          children: t,
          ...o
        } = e, n = Nf(Af, r), [a, s] = S.useState(!1), [i, d] = S.useState(!1);
        return function(e = () => {}) {
          const r = (0, _t.c)(e);
          (0, At.N)(() => {
            let e = 0,
              t = 0;
            return e = window.requestAnimationFrame(() => t = window.requestAnimationFrame(r)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(t)
            }
          }, [r])
        }(() => s(!0)), S.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, R.jsx)(lo, {
          asChild: !0,
          container: n.announcerContainer || void 0,
          children: (0, R.jsx)(yo.s6, {
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
        return (0, R.jsx)(xt.sG.div, {
          ...o,
          ref: r
        })
      }).displayName = "ToastTitle";
      var Xf = S.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, R.jsx)(xt.sG.div, {
          ...o,
          ref: r
        })
      });
      Xf.displayName = "ToastDescription";
      var Gf = "ToastAction",
        Kf = S.forwardRef((e, r) => {
          const {
            altText: t,
            ...o
          } = e;
          return t.trim() ? (0, R.jsx)(Wf, {
            altText: t,
            asChild: !0,
            children: (0, R.jsx)(Hf, {
              ...o,
              ref: r
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Gf}\`. Expected non-empty \`string\`.`), null)
        });
      Kf.displayName = Gf;
      var Zf = "ToastClose",
        Hf = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            ...o
          } = e, n = qf(Zf, t);
          return (0, R.jsx)(Wf, {
            asChild: !0,
            children: (0, R.jsx)(xt.sG.button, {
              type: "button",
              ...o,
              ref: r,
              onClick: (0, ht.mK)(e.onClick, n.onClose)
            })
          })
        });
      Hf.displayName = Zf;
      var Wf = S.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          altText: o,
          ...n
        } = e;
        return (0, R.jsx)(xt.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": o || void 0,
          ...n,
          ref: r
        })
      });

      function Uf(e) {
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
              } else r.push(...Uf(e))
          }
        }), r
      }

      function $f(e, r, t, {
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
        }), o ? (0, xt.hO)(n, a) : n.dispatchEvent(a)
      }
      var Yf = (e, r, t = 0) => {
        const o = Math.abs(e.x),
          n = Math.abs(e.y),
          a = o > n;
        return "left" === r || "right" === r ? a && o > t : !a && n > t
      };

      function Qf(e) {
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

      function Jf(e) {
        const r = document.activeElement;
        return e.some(e => e === r || (e.focus(), document.activeElement !== r))
      }
      var ep = Sf,
        rp = Tf,
        tp = Vf,
        op = Xf,
        np = Kf,
        ap = Hf;

      function sp(e) {
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

      function ip(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function dp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ip(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = sp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ip(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function lp(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var cp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        up = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = dp(dp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) cp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lp(e.variantClassNames, e => lp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        fp = up({
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
        pp = up({
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
        vp = up({
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
      const yp = ({
          testId: e,
          ...r
        }) => (0, R.jsx)(ep, {
          "data-testid": e,
          ...r
        }),
        bp = (0, S.forwardRef)(({
          children: e,
          testId: r,
          position: t = "bottomRight",
          ...o
        }, n) => {
          const a = (0, k.v6)({
            className: vp({
              position: t
            })
          }, o);
          return (0, R.jsx)(rp, {
            ref: n,
            "data-testid": r,
            ...a,
            children: e
          })
        }),
        mp = (0, S.createContext)(null);

      function hp() {
        const e = (0, S.useContext)(mp);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const gp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          appearance: o = "success",
          ...n
        }, a) => {
          const s = e ? pe.DX : tp,
            i = (0, k.v6)({
              className: pp({
                appearance: o
              })
            }, n);
          return (0, R.jsx)(mp.Provider, {
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
        wp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : op,
            s = (0, k.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        xp = {
          danger: Re.CircleX,
          information: Re.Info,
          success: Re.CircleCheck,
          warning: Re.TriangleAlert,
          avocado: Re.CircleCheck
        },
        _p = (0, S.forwardRef)(({
          asChild: e,
          ...r
        }, t) => {
          const {
            appearance: o
          } = hp(), n = e ? pe.DX : xp[o], a = (0, k.v6)({
            className: fp({
              appearance: o
            }),
            size: "LG"
          }, r);
          return (0, R.jsx)(n, {
            ref: t,
            ...a
          })
        }),
        jp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, o);
          return (0, R.jsx)(np, {
            ref: n,
            "data-testid": t,
            ...a,
            children: e ? (0, R.jsx)(pe.DX, {
              children: r
            }) : (0, R.jsx)(wf.$, {
              size: "MD",
              appearance: "link",
              children: r
            })
          })
        }),
        Cp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          label: o,
          ...n
        }, a) => {
          const s = (0, k.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, n);
          return (0, R.jsx)(ap, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e ? (0, R.jsx)(pe.DX, {
              children: r
            }) : (0, R.jsx)(cu, {
              size: "SM",
              label: o
            })
          })
        });
      var Op = t(52640);

      function Pp(e) {
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

      function Rp(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Np(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Rp(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Pp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Rp(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Sp(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Dp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        zp = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Np(Np({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Dp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sp(e.variantClassNames, e => Sp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        kp = zp({
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
        Ip = zp({
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
        Tp = zp({
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

      function Ep() {
        const e = (0, S.useContext)(Lp);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Lp = (0, S.createContext)(null),
        Ap = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          size: o = "MD",
          ...n
        }, a) => {
          const s = (0, k.v6)({
              className: Tp({
                size: o
              })
            }, n),
            i = t ? pe.DX : "ol";
          return (0, R.jsx)(Lp.Provider, {
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
        Vp = (0, S.forwardRef)(({
          isCurrent: e,
          children: r,
          asChild: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, S.useRef)(null),
            {
              size: i
            } = Ep(),
            {
              itemProps: d
            } = (0, Op.I)({
              isCurrent: e,
              children: r
            }, s),
            l = t ? pe.DX : "a",
            c = (0, k.v6)({
              className: (0, Pe.$)(kp({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": o
            }, d, n);
          return (0, R.jsx)("li", {
            className: Ip({
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
        Mp = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Re[e];
          return (0, R.jsx)(o, {
            ref: t,
            size: "LG",
            ...r
          })
        }),
        qp = (0, S.forwardRef)(({
          children: e,
          testId: r,
          defaultOpen: t = !1,
          label: o,
          ...n
        }, a) => {
          const [s, i] = (0, S.useState)(t), {
            size: d
          } = Ep(), l = (0, k.v6)({
            className: Ip({
              size: d
            }),
            "data-testid": r
          }, n);
          return (0, R.jsx)("li", {
            ref: a,
            ...l,
            children: (0, R.jsxs)(ui, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, R.jsx)(pi, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": o,
                children: "..."
              }), (0, R.jsx)(wi, {
                children: (0, R.jsx)(_i, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, R.jsx)(Ti, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Fp = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = r ? pe.DX : Bi,
            s = (0, k.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": t
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            ...s,
            children: e
          })
        });

      function Bp(e) {
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

      function Xp(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Gp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Xp(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Bp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xp(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Kp(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Zp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Hp = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Gp(Gp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Zp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kp(e.variantClassNames, e => Kp(e, e => e.split(" ")[0]))
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
      const Wp = (0, S.createContext)(null);

      function Up() {
        const e = (0, S.useContext)(Wp);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const $p = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "primary",
          size: o = "SM",
          type: n = "text",
          ...a
        }, s) => {
          const i = e ? pe.DX : "div",
            d = (0, k.v6)({
              className: Hp({
                appearance: t,
                type: n,
                size: o
              })
            }, a);
          return (0, R.jsx)(Wp.Provider, {
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
        Yp = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? pe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_18omk9t9",
              "data-testid": r
            }, t);
          return (0, R.jsx)(n, {
            ref: o,
            ...a
          })
        }),
        Qp = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = as[e],
            n = (0, k.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            ...n
          })
        }),
        Jp = () => {
          const e = (0, fe.Ub)(k.fi.mobile);
          return r => e ? {
            transform: `translate(0,${100-r}%)`
          } : {
            opacity: r / 100,
            transform: `scale(${.95+r/100*.05})`
          }
        },
        ev = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function rv(e) {
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

      function tv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ov(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? tv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = rv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function nv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var av = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        sv = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ov(ov({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) av(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nv(e.variantClassNames, e => nv(e, e => e.split(" ")[0]))
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
      const iv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, r);
          return (0, R.jsx)(Zs, {
            ref: t,
            ...o
          })
        }),
        dv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, r);
          return (0, R.jsx)(Hs, {
            ref: t,
            ...o
          })
        }),
        lv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, r);
          return (0, R.jsx)(Ws, {
            ref: t,
            ...o
          })
        }),
        cv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, fe.rl)(),
            n = (0, k.v6)({
              "data-testid": e,
              className: sv({
                isTouchDevice: o
              })
            }, r);
          return (0, R.jsx)(Us, {
            ref: t,
            ...n
          })
        }),
        uv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)($s, {
            ref: t,
            ...o
          })
        });

      function fv(e) {
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

      function pv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function vv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? pv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = fv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function yv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var bv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        mv = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = vv(vv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yv(e.variantClassNames, e => yv(e, e => e.split(" ")[0]))
            }
          }, r
        },
        hv = mv({
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
        gv = mv({
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
      const wv = (0, S.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, S.createRef)(),
          dialogSpringRef: (0, mt.$9)(),
          overlaySpringRef: (0, mt.$9)()
        }),
        xv = ({
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
          return (0, R.jsx)(wv.Provider, {
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
              dialogSpringRef: (0, mt.U2)(),
              overlaySpringRef: (0, mt.U2)()
            },
            children: (0, R.jsx)(_v, {
              ...i
            })
          })
        },
        _v = e => {
          const {
            isOpen: r,
            setIsOpen: t
          } = (0, S.useContext)(wv), o = (0, k.v6)({
            open: r,
            onOpenChange: t
          }, e);
          return (0, R.jsx)(sa, {
            ...o
          })
        },
        jv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            contentId: o,
            triggerRef: n
          } = (0, S.useContext)(wv), a = (0, fe.UP)(n, t), s = (0, k.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": o
          }, r);
          return (0, R.jsx)(da, {
            ...s,
            ref: a
          })
        }),
        Cv = e => (0, R.jsx)(fa, {
          forceMount: !0,
          ...e
        }),
        Ov = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            isOpen: o,
            overlaySpringRef: n,
            openImmediately: a
          } = (0, S.useContext)(wv), s = ev(), i = (0, fe.jt)(), d = (0, mt.pn)(o, {
            ref: n,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: mt.$W.stiff,
            immediate: i || a
          }), l = (0, k.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, r), c = (0, mt.CS)(va);
          return (0, S.useEffect)(() => {
            n.start()
          }, [o]), d((e, r) => r ? (0, R.jsx)(c, {
            forceMount: !0,
            ref: t,
            ...l,
            style: e
          }) : null)
        }),
        Pv = (0, S.forwardRef)(({
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
          } = (0, S.useContext)(wv), m = (0, fe.rl)(), h = (0, fe.jt)(), g = (0, S.useRef)(null), w = Jp(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: r,
            overlaySpringRef: t,
            onCloseTransitionStart: o,
            onCloseTransitionComplete: n
          }) {
            const a = ev(),
              s = Jp(),
              i = (0, S.useRef)();
            return {
              bindDrag: (0, Ir.i3)(({
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
                  config: mt.$W.stiff,
                  onStart: o,
                  onRest: n
                }), t.start({
                  ...a(0),
                  immediate: !1,
                  config: mt.$W.stiff
                })) : (r.start({
                  ...s(100),
                  immediate: !1,
                  config: mt.$W.stiff
                }), t.start({
                  ...a(100),
                  immediate: !1,
                  config: mt.$W.stiff
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
          }), _ = (0, mt.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: mt.$W.stiff,
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
            O = (0, k.v6)({
              "data-testid": r,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                t?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, n),
            P = (0, mt.CS)(ha);
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
        Rv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, R.jsx)(ja, {
            ref: t,
            ...o
          })
        }),
        Nv = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(Oa, {
            ref: t,
            ...o
          })
        }),
        Sv = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_xov33nh",
            "data-testid": r
          }, t);
          return (0, R.jsxs)(iv, {
            ref: o,
            ...n,
            children: [(0, R.jsx)(dv, {
              className: "foundry_xov33ni",
              children: e
            }), (0, R.jsx)(lv, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, R.jsx)(cv, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Dv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": r,
              className: "foundry_xov33ne"
            }, t),
            a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        zv = (0, S.forwardRef)(({
          align: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              "data-testid": t,
              className: hv({
                align: e
              })
            }, o),
            s = r ? pe.DX : "header";
          return (0, R.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        kv = (0, S.forwardRef)(({
          testId: e,
          appearance: r = "sentence",
          ...t
        }, o) => {
          const n = (0, k.v6)({
            "data-testid": e,
            className: gv({
              appearance: r
            })
          }, t);
          return (0, R.jsx)(ja, {
            ref: o,
            ...n
          })
        }),
        Iv = (0, S.forwardRef)((e, r) => {
          const t = (0, k.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, R.jsx)(Lu.K, {
            ref: r,
            ...t,
            appearance: "ghost",
            size: "LG"
          })
        }),
        Tv = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, t),
            a = r ? (0, R.jsx)(pe.DX, {
              ref: o,
              ...n
            }) : (0, R.jsx)(cu, {
              ref: o,
              ...n,
              size: "LG"
            });
          return (0, R.jsx)(Ra, {
            asChild: !0,
            children: a
          })
        }),
        Ev = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, t),
            a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        Lv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, t),
            a = e ? pe.DX : "footer";
          return (0, R.jsx)(a, {
            ref: o,
            ...n
          })
        });
      var Av = "Avatar",
        [Vv, Mv] = (0, wt.A)(Av),
        qv = [0, () => {}],
        [Fv, Bv] = Vv(Av),
        Xv = S.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            ...o
          } = e, [n, a] = S.useState("idle"), [s, i] = function() {
            let e = qv; {
              e = S.useState(0);
              const [r] = e, t = S.useRef(!1);
              S.useEffect(() => {
                r > 1 && !t.current && (t.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [r])
            }
            return e
          }();
          return (0, R.jsx)(Fv, {
            scope: t,
            imageLoadingStatus: n,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, R.jsx)(xt.sG.span, {
              ...o,
              ref: r
            })
          })
        });
      Xv.displayName = Av;
      var Gv = "AvatarImage",
        Kv = S.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            src: o,
            onLoadingStatusChange: n,
            ...a
          } = e, s = Bv(Gv, t);
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
              return (0, At.N)(() => {
                if (!e) return void t("error");
                const r = new window.Image,
                  a = e => {
                    const r = e.currentTarget;
                    t(Hv(r))
                  },
                  s = () => t("error");
                return r.addEventListener("load", a), r.addEventListener("error", s), o && (r.referrerPolicy = o), r.crossOrigin = n ?? null, r.src = e, t(Hv(r)), () => {
                  r.removeEventListener("load", a), r.removeEventListener("error", s), t("idle")
                }
              }, [e, n, o, t]), r
            }(o, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, _t.c)(e => {
              n?.(e)
            }),
            c = S.useRef(d);
          return (0, At.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, R.jsx)(xt.sG.img, {
            ...a,
            ref: r,
            src: o
          }) : null
        });
      Kv.displayName = Gv;
      var Zv = "AvatarFallback";

      function Hv(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Wv(e) {
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

      function Uv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function $v(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Uv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Wv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Uv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Yv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      S.forwardRef((e, r) => {
        const {
          __scopeAvatar: t,
          delayMs: o,
          ...n
        } = e, a = Bv(Zv, t), [s, i] = S.useState(void 0 === o);
        return S.useEffect(() => {
          if (void 0 !== o) {
            const e = window.setTimeout(() => i(!0), o);
            return () => window.clearTimeout(e)
          }
        }, [o]), s && "loaded" !== a.imageLoadingStatus ? (0, R.jsx)(xt.sG.span, {
          ...n,
          ref: r
        }) : null
      }).displayName = Zv;
      var Qv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Jv = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = $v($v({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yv(e.variantClassNames, e => Yv(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ey = Jv({
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
        ry = "var(--foundry_v912w22)",
        ty = "var(--foundry_v912w23)",
        oy = Jv({
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
        ny = Jv({
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
        ay = "var(--foundry_v912w21)",
        sy = "var(--foundry_v912w20)",
        iy = Jv({
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
      const dy = (0, S.createContext)(null);

      function ly() {
        const e = (0, S.useContext)(dy);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const cy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          size: o,
          status: n,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, k.v6)({
            "data-testid": t,
            "aria-disabled": a,
            className: ey({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, R.jsx)(dy.Provider, {
            value: {
              size: o,
              status: n,
              isDisabled: a
            },
            children: (0, R.jsx)(Xv, {
              ref: i,
              ...d,
              children: r
            })
          })
        }),
        uy = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          src: t,
          ...o
        }, n) => {
          const {
            size: a,
            isDisabled: s
          } = ly(), [i, d] = (0, S.useState)(!1);
          (0, S.useEffect)(() => {
            d(!1)
          }, [t]);
          const l = i || !t ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : t,
            c = (0, k.v6)({
              className: oy({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, o);
          return (0, R.jsx)("span", {
            className: ny({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": r,
            "aria-hidden": !0,
            children: (0, R.jsx)(Kv, {
              ref: n,
              ...c
            })
          })
        }),
        fy = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const n = (0, S.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = ly(),
            d = s || "online",
            l = (0, fe.UP)(n, o),
            c = (0, k.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: iy({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, D.D)({
                [sy]: r?.online,
                [ay]: r?.offline,
                [ry]: r?.away,
                [ty]: r?.busy
              })
            }, t);
          return (0, R.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function py(e) {
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

      function vy(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function yy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? vy(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = py(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vy(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function by(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var my = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        hy = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = yy(yy({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) my(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return by(e.variantClassNames, e => by(e, e => e.split(" ")[0]))
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
      const gy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
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
        wy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
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
        xy = (0, S.forwardRef)(({
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
            } = (0, tu.i)(n, s),
            c = (0, k.v6)({
              role: "listitem",
              "data-testid": o,
              "data-pressed": l,
              "data-active": t,
              className: (0, Pe.$)(hy({
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
        _y = (0, S.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, t);
          return (0, R.jsx)(xy, {
            ref: o,
            ...n,
            children: (0, R.jsx)(Re.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        jy = (0, S.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, t);
          return (0, R.jsx)(xy, {
            ref: o,
            ...n,
            children: (0, R.jsx)(Re.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        Cy = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, k.v6)({
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
        Oy = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, k.v6)({
              "data-testid": t,
              className: "foundry_2jlbzt8"
            }, o),
            a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ...n,
            children: r
          })
        },
        Py = (0, S.createContext)(null);

      function Ry() {
        const e = (0, S.useContext)(Py);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const Ny = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, S.useId)(),
            a = (0, k.v6)({
              "data-testid": t,
              className: "foundry_2jlbztb"
            }, o),
            s = e ? pe.DX : "div";
          return (0, R.jsx)(Py.Provider, {
            value: {
              labelId: n
            },
            children: (0, R.jsx)(s, {
              ...a,
              children: r
            })
          })
        },
        Sy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Ry(), s = (0, k.v6)({
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
        Dy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          placeholder: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Ry(), s = (0, k.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, o), i = e ? pe.DX : bd;
          return (0, R.jsxs)(i, {
            ...s,
            children: [(0, R.jsxs)(wd, {
              ref: n,
              children: [(0, R.jsx)(xd, {
                placeholder: t
              }), (0, R.jsx)(_d, {})]
            }), (0, R.jsx)(Sd, {
              children: (0, R.jsx)(md, {
                children: (0, R.jsx)(gd, {
                  children: r
                })
              })
            })]
          })
        }),
        zy = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              "data-testid": t
            }, o),
            s = e ? pe.DX : Pd;
          return (0, R.jsx)(s, {
            ...a,
            ref: n,
            children: (0, R.jsx)(Rd, {
              children: r
            })
          })
        }),
        ky = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
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
      var Iy = "rovingFocusGroup.onEntryFocus",
        Ty = {
          bubbles: !1,
          cancelable: !0
        },
        Ey = "RovingFocusGroup",
        [Ly, Ay, Vy] = sn(Ey),
        [My, qy] = (0, wt.A)(Ey, [Vy]),
        [Fy, By] = My(Ey),
        Xy = S.forwardRef((e, r) => (0, R.jsx)(Ly.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, R.jsx)(Ly.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, R.jsx)(Gy, {
              ...e,
              ref: r
            })
          })
        }));
      Xy.displayName = Ey;
      var Gy = S.forwardRef((e, r) => {
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
          } = e, f = S.useRef(null), p = (0, gt.s)(r, f), v = (0, nn.jH)(a), [y, b] = (0, vo.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Ey
          }), [m, h] = S.useState(!1), g = (0, _t.c)(l), w = Ay(t), x = S.useRef(!1), [_, j] = S.useState(0);
          return S.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(Iy, g), () => e.removeEventListener(Iy, g)
          }, [g]), (0, R.jsx)(Fy, {
            scope: t,
            orientation: o,
            dir: v,
            loop: n,
            currentTabStopId: y,
            onItemFocus: S.useCallback(e => b(e), [b]),
            onItemShiftTab: S.useCallback(() => h(!0), []),
            onFocusableItemAdd: S.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: S.useCallback(() => j(e => e - 1), []),
            children: (0, R.jsx)(xt.sG.div, {
              tabIndex: m || 0 === _ ? -1 : 0,
              "data-orientation": o,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, ht.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, ht.mK)(e.onFocus, e => {
                const r = !x.current;
                if (e.target === e.currentTarget && r && !m) {
                  const r = new CustomEvent(Iy, Ty);
                  if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      r = e.find(e => e.active),
                      t = e.find(e => e.id === y),
                      o = [r, t, ...e].filter(Boolean).map(e => e.ref.current);
                    Wy(o, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, ht.mK)(e.onBlur, () => h(!1))
            })
          })
        }),
        Ky = "RovingFocusGroupItem",
        Zy = S.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            focusable: o = !0,
            active: n = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, kt.B)(), l = a || d, c = By(Ky, t), u = c.currentTabStopId === l, f = Ay(t), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: y
          } = c;
          return S.useEffect(() => {
            if (o) return p(), () => v()
          }, [o, p, v]), (0, R.jsx)(Ly.ItemSlot, {
            scope: t,
            id: l,
            focusable: o,
            active: n,
            children: (0, R.jsx)(xt.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: r,
              onMouseDown: (0, ht.mK)(e.onMouseDown, e => {
                o ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, ht.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, ht.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const r = function(e, r, t) {
                  const o = function(e, r) {
                    return "rtl" !== r ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, t);
                  return "vertical" === r && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o) ? void 0 : Hy[o]
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
                  setTimeout(() => Wy(a))
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
      Zy.displayName = Ky;
      var Hy = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function Wy(e, r = !1) {
        const t = document.activeElement;
        for (const o of e) {
          if (o === t) return;
          if (o.focus({
              preventScroll: r
            }), document.activeElement !== t) return
        }
      }
      var Uy = Xy,
        $y = Zy,
        Yy = "Toggle",
        Qy = S.forwardRef((e, r) => {
          const {
            pressed: t,
            defaultPressed: o,
            onPressedChange: n,
            ...a
          } = e, [s, i] = (0, vo.i)({
            prop: t,
            onChange: n,
            defaultProp: o ?? !1,
            caller: Yy
          });
          return (0, R.jsx)(xt.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: r,
            onClick: (0, ht.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      Qy.displayName = Yy;
      var Jy = "ToggleGroup",
        [eb, rb] = (0, wt.A)(Jy, [qy]),
        tb = qy(),
        ob = S.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e;
          if ("single" === t) {
            const e = o;
            return (0, R.jsx)(sb, {
              role: "radiogroup",
              ...e,
              ref: r
            })
          }
          if ("multiple" === t) {
            const e = o;
            return (0, R.jsx)(ib, {
              role: "toolbar",
              ...e,
              ref: r
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Jy}\``)
        });
      ob.displayName = Jy;
      var [nb, ab] = eb(Jy), sb = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, vo.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: Jy
        });
        return (0, R.jsx)(nb, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: S.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: S.useCallback(() => i(""), [i]),
          children: (0, R.jsx)(cb, {
            ...a,
            ref: r
          })
        })
      }), ib = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, vo.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: Jy
        }), d = S.useCallback(e => i((r = []) => [...r, e]), [i]), l = S.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, R.jsx)(nb, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, R.jsx)(cb, {
            ...a,
            ref: r
          })
        })
      });
      ob.displayName = Jy;
      var [db, lb] = eb(Jy), cb = S.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          disabled: o = !1,
          rovingFocus: n = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = tb(t), c = (0, nn.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, R.jsx)(db, {
          scope: t,
          rovingFocus: n,
          disabled: o,
          children: n ? (0, R.jsx)(Uy, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, R.jsx)(xt.sG.div, {
              ...u,
              ref: r
            })
          }) : (0, R.jsx)(xt.sG.div, {
            ...u,
            ref: r
          })
        })
      }), ub = "ToggleGroupItem", fb = S.forwardRef((e, r) => {
        const t = ab(ub, e.__scopeToggleGroup),
          o = lb(ub, e.__scopeToggleGroup),
          n = tb(e.__scopeToggleGroup),
          a = t.value.includes(e.value),
          s = o.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = S.useRef(null);
        return o.rovingFocus ? (0, R.jsx)($y, {
          asChild: !0,
          ...n,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, R.jsx)(pb, {
            ...i,
            ref: r
          })
        }) : (0, R.jsx)(pb, {
          ...i,
          ref: r
        })
      });
      fb.displayName = ub;
      var pb = S.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          value: o,
          ...n
        } = e, a = ab(ub, t), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, R.jsx)(Qy, {
          ...i,
          ...n,
          ref: r,
          onPressedChange: e => {
            e ? a.onItemActivate(o) : a.onItemDeactivate(o)
          }
        })
      });

      function vb(e) {
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

      function yb(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function bb(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? yb(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = vb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : yb(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function mb(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var hb = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        gb = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = bb(bb({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) hb(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mb(e.variantClassNames, e => mb(e, e => e.split(" ")[0]))
            }
          }, r
        },
        wb = "var(--foundry_zxwkyk2)",
        xb = "var(--foundry_zxwkyk3)",
        _b = gb({
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
        jb = gb({
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
        Cb = gb({
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
        Ob = "var(--foundry_zxwkyk1)",
        Pb = "var(--foundry_zxwkyk0)",
        Rb = gb({
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
      const Nb = (0, S.createContext)(null);

      function Sb() {
        const e = (0, S.useContext)(Nb);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const Db = (0, S.forwardRef)(({
          testId: e,
          size: r,
          type: t = "single",
          ...o
        }, n) => {
          const a = (0, k.v6)({
            "data-testid": e,
            className: _b({
              size: r
            }),
            type: t
          }, o);
          return (0, R.jsx)(Nb.Provider, {
            value: {
              size: r
            },
            children: (0, R.jsx)(ob, {
              ref: n,
              ...a
            })
          })
        }),
        zb = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Sb(), n = (0, k.v6)({
            "data-testid": e,
            className: jb({
              size: o
            })
          }, r);
          return (0, R.jsx)(fb, {
            ref: t,
            ...n
          })
        }),
        kb = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Sb(), n = as[e];
          return (0, R.jsx)(n, {
            label: "",
            ref: t,
            size: o,
            className: "foundry_zxwkykb",
            ...r
          })
        }),
        Ib = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          status: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
            "data-testid": e,
            className: Rb({
              status: t
            }),
            style: (0, D.D)({
              [Pb]: r?.online,
              [Ob]: r?.offline,
              [wb]: r?.away,
              [xb]: r?.busy
            })
          }, o);
          return (0, R.jsx)("span", {
            ref: n,
            ...a
          })
        }),
        Tb = (0, S.forwardRef)(({
          testId: e,
          variant: r = "default",
          ...t
        }, o) => {
          const {
            size: n
          } = Sb(), a = (0, k.v6)({
            "data-testid": e,
            className: Cb({
              variant: r,
              size: n
            })
          }, t);
          return (0, R.jsx)("span", {
            ref: o,
            ...a
          })
        });
      var Eb = "Popover",
        [Lb, Ab] = (0, wt.A)(Eb, [Ft]),
        Vb = Ft(),
        [Mb, qb] = Lb(Eb),
        Fb = e => {
          const {
            __scopePopover: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Vb(r), d = S.useRef(null), [l, c] = S.useState(!1), [u, f] = (0, vo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: Eb
          });
          return (0, R.jsx)(oo, {
            ...i,
            children: (0, R.jsx)(Mb, {
              scope: r,
              contentId: (0, kt.B)(),
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
      Fb.displayName = Eb;
      var Bb = "PopoverAnchor",
        Xb = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = qb(Bb, t), a = Vb(t), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = n;
          return S.useEffect(() => (s(), () => i()), [s, i]), (0, R.jsx)(no, {
            ...a,
            ...o,
            ref: r
          })
        });
      Xb.displayName = Bb;
      var Gb = "PopoverTrigger",
        Kb = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = qb(Gb, t), a = Vb(t), s = (0, gt.s)(r, n.triggerRef), i = (0, R.jsx)(xt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": am(n.open),
            ...o,
            ref: s,
            onClick: (0, ht.mK)(e.onClick, n.onOpenToggle)
          });
          return n.hasCustomAnchor ? i : (0, R.jsx)(no, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      Kb.displayName = Gb;
      var Zb = "PopoverPortal",
        [Hb, Wb] = Lb(Zb, {
          forceMount: void 0
        }),
        Ub = e => {
          const {
            __scopePopover: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = qb(Zb, r);
          return (0, R.jsx)(Hb, {
            scope: r,
            forceMount: t,
            children: (0, R.jsx)(co, {
              present: t || a.open,
              children: (0, R.jsx)(lo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      Ub.displayName = Zb;
      var $b = "PopoverContent",
        Yb = S.forwardRef((e, r) => {
          const t = Wb($b, e.__scopePopover),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = qb($b, e.__scopePopover);
          return (0, R.jsx)(co, {
            present: o || a.open,
            children: a.modal ? (0, R.jsx)(Jb, {
              ...n,
              ref: r
            }) : (0, R.jsx)(em, {
              ...n,
              ref: r
            })
          })
        });
      Yb.displayName = $b;
      var Qb = (0, po.TL)("PopoverContent.RemoveScroll"),
        Jb = S.forwardRef((e, r) => {
          const t = qb($b, e.__scopePopover),
            o = S.useRef(null),
            n = (0, gt.s)(r, o),
            a = S.useRef(!1);
          return S.useEffect(() => {
            const e = o.current;
            if (e) return (0, ea.Eq)(e)
          }, []), (0, R.jsx)(Jn.A, {
            as: Qb,
            allowPinchZoom: !0,
            children: (0, R.jsx)(rm, {
              ...e,
              ref: n,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, ht.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || t.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, ht.mK)(e.onPointerDownOutside, e => {
                const r = e.detail.originalEvent,
                  t = 0 === r.button && !0 === r.ctrlKey,
                  o = 2 === r.button || t;
                a.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, ht.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        em = S.forwardRef((e, r) => {
          const t = qb($b, e.__scopePopover),
            o = S.useRef(!1),
            n = S.useRef(!1);
          return (0, R.jsx)(rm, {
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
        rm = S.forwardRef((e, r) => {
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
          } = e, f = qb($b, t), p = Vb(t);
          return (0, Qn.Oh)(), (0, R.jsx)(Kn, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, R.jsx)(Pt, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, R.jsx)(ao, {
                "data-state": am(f.open),
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
        tm = "PopoverClose",
        om = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = qb(tm, t);
          return (0, R.jsx)(xt.sG.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, ht.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });
      om.displayName = tm;
      var nm = S.forwardRef((e, r) => {
        const {
          __scopePopover: t,
          ...o
        } = e, n = Vb(t);
        return (0, R.jsx)(so, {
          ...n,
          ...o,
          ref: r
        })
      });

      function am(e) {
        return e ? "open" : "closed"
      }
      nm.displayName = "PopoverArrow";
      var sm = Fb,
        im = Xb,
        dm = Kb,
        lm = Ub,
        cm = Yb,
        um = om,
        fm = nm;

      function pm(e) {
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

      function vm(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ym(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? vm(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = pm(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vm(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function bm(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var mm = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        hm = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ym(ym({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) mm(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bm(e.variantClassNames, e => bm(e, e => e.split(" ")[0]))
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
      const gm = (0, S.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        wm = ({
          open: e,
          defaultOpen: r,
          onOpenChange: t,
          ...o
        }) => {
          const [n = !1, a] = (0, fe.ic)({
            prop: e,
            defaultProp: r ?? !1,
            onChange: t
          }), s = (0, k.v6)({
            open: n,
            onOpenChange: a
          }, o);
          return (0, R.jsx)(gm.Provider, {
            value: {
              open: n,
              setOpen: a
            },
            children: (0, R.jsx)(sm, {
              ...s
            })
          })
        },
        xm = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, r);
          return (0, R.jsx)(dm, {
            ref: t,
            ...o
          })
        }),
        _m = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        jm = (0, S.forwardRef)(({
          children: e,
          size: r = "MD",
          testId: t,
          ...o
        }, n) => {
          const {
            open: a
          } = (0, S.useContext)(gm), s = (0, S.useRef)(null), i = (0, fe.UP)(s, n), {
            buttonProps: d
          } = (0, fe.sL)(o, s), l = (0, k.v6)({
            "data-testid": t,
            className: hm({
              size: r
            })
          }, d), c = a ? Re.ChevronUp : Re.ChevronDown;
          return (0, R.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, R.jsx)(c, {
              label: "",
              size: _m[r]
            })]
          })
        }),
        Cm = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(im, {
            ref: t,
            ...o
          })
        }),
        Om = (0, S.forwardRef)(({
          sideOffset: e = 6,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            sideOffset: e,
            "data-testid": r,
            className: "foundry_lroh6l6"
          }, t);
          return (0, R.jsx)(cm, {
            ref: o,
            ...n
          })
        }),
        Pm = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, r);
          return (0, R.jsx)(fm, {
            ref: t,
            ...o
          })
        }),
        Rm = e => (0, R.jsx)(lm, {
          ...e
        }),
        Nm = e => (0, R.jsx)(um, {
          ...e
        });

      function Sm(e) {
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

      function Dm(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function zm(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Dm(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Sm(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Dm(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function km(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Im = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Tm = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = zm(zm({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Im(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return km(e.variantClassNames, e => km(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Em = "var(--foundry_rmorls2)",
        Lm = Tm({
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
        Am = "var(--foundry_rmorls0)",
        Vm = Tm({
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
        Mm = "var(--foundry_rmorls3)",
        qm = "var(--foundry_rmorls1)",
        Fm = Tm({
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
        Bm = "Progress",
        [Xm, Gm] = (0, wt.A)(Bm),
        [Km, Zm] = Xm(Bm),
        Hm = S.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            value: o = null,
            max: n,
            getValueLabel: a = $m,
            ...s
          } = e;
          !n && 0 !== n || Jm(n) || console.error(`Invalid prop \`max\` of value \`${n}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Jm(n) ? n : 100;
          null === o || eh(o, i) || console.error(`Invalid prop \`value\` of value \`${`${o}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = eh(o, i) ? o : null,
            l = Qm(d) ? a(d, i) : void 0;
          return (0, R.jsx)(Km, {
            scope: t,
            value: d,
            max: i,
            children: (0, R.jsx)(xt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Qm(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Ym(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: r
            })
          })
        });
      Hm.displayName = Bm;
      var Wm = "ProgressIndicator",
        Um = S.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            ...o
          } = e, n = Zm(Wm, t);
          return (0, R.jsx)(xt.sG.div, {
            "data-state": Ym(n.value, n.max),
            "data-value": n.value ?? void 0,
            "data-max": n.max,
            ...o,
            ref: r
          })
        });

      function $m(e, r) {
        return `${Math.round(e/r*100)}%`
      }

      function Ym(e, r) {
        return null == e ? "indeterminate" : e === r ? "complete" : "loading"
      }

      function Qm(e) {
        return "number" == typeof e
      }

      function Jm(e) {
        return Qm(e) && !isNaN(e) && e > 0
      }

      function eh(e, r) {
        return Qm(e) && !isNaN(e) && e <= r && e >= 0
      }
      Um.displayName = Wm;
      var rh = Hm,
        th = Um;
      const oh = (0, S.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        nh = (0, S.forwardRef)(({
          size: e = "MD",
          max: r,
          value: t,
          ...o
        }, n) => {
          const a = Math.round(t / r * 100),
            s = "number" != typeof t || "number" != typeof r;
          return (0, R.jsx)(oh.Provider, {
            value: {
              value: t,
              max: r,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, R.jsx)(ah, {
              ...o,
              ref: n
            })
          })
        }),
        ah = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, t),
            a = r ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ...n,
            ref: o
          })
        }),
        sh = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const {
            value: n,
            max: a,
            size: s
          } = (0, S.useContext)(oh), i = (0, k.v6)({
            "data-testid": e,
            className: Vm({
              size: s
            }),
            value: n,
            max: a,
            style: (0, D.D)({
              [Mm]: r
            }),
            "data-track": !0
          }, t);
          return (0, R.jsx)(rh, {
            ref: o,
            ...i
          })
        }),
        ih = (0, S.forwardRef)(({
          testId: e,
          transitionDuration: r = 500,
          colorOverride: t,
          ...o
        }, n) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, S.useContext)(oh), i = s ? "-100%" : `-${100-a}%`, d = (0, k.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, D.D)({
              [Am]: i,
              [qm]: `${r}ms`,
              [Em]: t
            })
          }, o);
          return (0, R.jsx)(th, {
            ref: n,
            ...d
          })
        }),
        dh = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const {
            size: n
          } = (0, S.useContext)(oh), a = (0, k.v6)({
            "data-testid": r,
            className: Lm({
              size: n
            }),
            "aria-hidden": !0
          }, t), s = e ? pe.DX : "span";
          return (0, R.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        lh = (0, S.forwardRef)(({
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
          } = (0, S.useContext)(oh), l = (0, k.v6)({
            "data-testid": e,
            className: Lm({
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
              className: Fm({
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
      var ch = "Collapsible",
        [uh, fh] = (0, wt.A)(ch),
        [ph, vh] = uh(ch),
        yh = S.forwardRef((e, r) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: n,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, vo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: s,
            caller: ch
          });
          return (0, R.jsx)(ph, {
            scope: t,
            disabled: a,
            contentId: (0, kt.B)(),
            open: d,
            onOpenToggle: S.useCallback(() => l(e => !e), [l]),
            children: (0, R.jsx)(xt.sG.div, {
              "data-state": xh(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: r
            })
          })
        });
      yh.displayName = ch;
      var bh = "CollapsibleTrigger",
        mh = S.forwardRef((e, r) => {
          const {
            __scopeCollapsible: t,
            ...o
          } = e, n = vh(bh, t);
          return (0, R.jsx)(xt.sG.button, {
            type: "button",
            "aria-controls": n.open ? n.contentId : void 0,
            "aria-expanded": n.open || !1,
            "data-state": xh(n.open),
            "data-disabled": n.disabled ? "" : void 0,
            disabled: n.disabled,
            ...o,
            ref: r,
            onClick: (0, ht.mK)(e.onClick, n.onOpenToggle)
          })
        });
      mh.displayName = bh;
      var hh = "CollapsibleContent",
        gh = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = vh(hh, e.__scopeCollapsible);
          return (0, R.jsx)(co, {
            present: t || n.open,
            children: ({
              present: e
            }) => (0, R.jsx)(wh, {
              ...o,
              ref: r,
              present: e
            })
          })
        });
      gh.displayName = hh;
      var wh = S.forwardRef((e, r) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: n,
          ...a
        } = e, s = vh(hh, t), [i, d] = S.useState(o), l = S.useRef(null), c = (0, gt.s)(r, l), u = S.useRef(0), f = u.current, p = S.useRef(0), v = p.current, y = s.open || i, b = S.useRef(y), m = S.useRef(void 0);
        return S.useEffect(() => {
          const e = requestAnimationFrame(() => b.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, At.N)(() => {
          const e = l.current;
          if (e) {
            m.current = m.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const r = e.getBoundingClientRect();
            u.current = r.height, p.current = r.width, b.current || (e.style.transitionDuration = m.current.transitionDuration, e.style.animationName = m.current.animationName), d(o)
          }
        }, [s.open, o]), (0, R.jsx)(xt.sG.div, {
          "data-state": xh(s.open),
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

      function xh(e) {
        return e ? "open" : "closed"
      }
      var _h = yh,
        jh = mh,
        Ch = gh,
        Oh = "Accordion",
        Ph = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [Rh, Nh, Sh] = sn(Oh),
        [Dh, zh] = (0, wt.A)(Oh, [Sh, fh]),
        kh = fh(),
        Ih = S.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e, n = o, a = o;
          return (0, R.jsx)(Rh.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, R.jsx)(Mh, {
              ...a,
              ref: r
            }) : (0, R.jsx)(Vh, {
              ...n,
              ref: r
            })
          })
        });
      Ih.displayName = Oh;
      var [Th, Eh] = Dh(Oh), [Lh, Ah] = Dh(Oh, {
        collapsible: !1
      }), Vh = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          collapsible: a = !1,
          ...s
        } = e, [i, d] = (0, vo.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: Oh
        });
        return (0, R.jsx)(Th, {
          scope: e.__scopeAccordion,
          value: S.useMemo(() => i ? [i] : [], [i]),
          onItemOpen: d,
          onItemClose: S.useCallback(() => a && d(""), [a, d]),
          children: (0, R.jsx)(Lh, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, R.jsx)(Bh, {
              ...s,
              ref: r
            })
          })
        })
      }), Mh = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, vo.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: Oh
        }), d = S.useCallback(e => i((r = []) => [...r, e]), [i]), l = S.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, R.jsx)(Th, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: l,
          children: (0, R.jsx)(Lh, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, R.jsx)(Bh, {
              ...a,
              ref: r
            })
          })
        })
      }), [qh, Fh] = Dh(Oh), Bh = S.forwardRef((e, r) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: n,
          orientation: a = "vertical",
          ...s
        } = e, i = S.useRef(null), d = (0, gt.s)(i, r), l = Nh(t), c = "ltr" === (0, nn.jH)(n), u = (0, ht.mK)(e.onKeyDown, e => {
          if (!Ph.includes(e.key)) return;
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
        return (0, R.jsx)(qh, {
          scope: t,
          disabled: o,
          direction: n,
          orientation: a,
          children: (0, R.jsx)(Rh.Slot, {
            scope: t,
            children: (0, R.jsx)(xt.sG.div, {
              ...s,
              "data-orientation": a,
              ref: d,
              onKeyDown: o ? void 0 : u
            })
          })
        })
      }), Xh = "AccordionItem", [Gh, Kh] = Dh(Xh), Zh = S.forwardRef((e, r) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...n
        } = e, a = Fh(Xh, t), s = Eh(Xh, t), i = kh(t), d = (0, kt.B)(), l = o && s.value.includes(o) || !1, c = a.disabled || e.disabled;
        return (0, R.jsx)(Gh, {
          scope: t,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, R.jsx)(_h, {
            "data-orientation": a.orientation,
            "data-state": Jh(l),
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
      Zh.displayName = Xh;
      var Hh = "AccordionHeader",
        Wh = S.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Fh(Oh, t), a = Kh(Hh, t);
          return (0, R.jsx)(xt.sG.h3, {
            "data-orientation": n.orientation,
            "data-state": Jh(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: r
          })
        });
      Wh.displayName = Hh;
      var Uh = "AccordionTrigger",
        $h = S.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Fh(Oh, t), a = Kh(Uh, t), s = Ah(Uh, t), i = kh(t);
          return (0, R.jsx)(Rh.ItemSlot, {
            scope: t,
            children: (0, R.jsx)(jh, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": n.orientation,
              id: a.triggerId,
              ...i,
              ...o,
              ref: r
            })
          })
        });
      $h.displayName = Uh;
      var Yh = "AccordionContent",
        Qh = S.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Fh(Oh, t), a = Kh(Yh, t), s = kh(t);
          return (0, R.jsx)(Ch, {
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

      function Jh(e) {
        return e ? "open" : "closed"
      }
      Qh.displayName = Yh;
      var eg = Ih,
        rg = Zh,
        tg = Wh,
        og = $h,
        ng = Qh;

      function ag(e) {
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

      function sg(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ig(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? sg(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ag(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sg(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function dg(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var lg = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        cg = "foundry_1vzsjid2",
        ug = "foundry_1vzsjidm",
        fg = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ig(ig({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) lg(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dg(e.variantClassNames, e => dg(e, e => e.split(" ")[0]))
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
      const pg = (0, S.createContext)({
          mode: "solid",
          layer: 0
        }),
        vg = (0, S.forwardRef)(({
          mode: e,
          layer: r,
          type: t = "single",
          ...o
        }, n) => (0, R.jsx)(pg.Provider, {
          value: {
            mode: e,
            layer: r
          },
          children: (0, R.jsx)(yg, {
            ...o,
            ref: n,
            type: t
          })
        })),
        yg = (0, S.forwardRef)(({
          testId: e,
          type: r = "single",
          ...t
        }, o) => {
          const n = (0, k.v6)({
            "data-testid": e,
            type: r
          }, t);
          return (0, R.jsx)(eg, {
            className: "foundry_1vzsjid0",
            ref: o,
            ...n
          })
        }),
        bg = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            mode: o,
            layer: n
          } = (0, S.useContext)(pg), a = (0, k.v6)({
            className: fg({
              mode: o,
              layer: n
            }),
            "data-testid": e
          }, r);
          return (0, R.jsx)(rg, {
            ref: t,
            ...a
          })
        }),
        mg = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, r);
          return (0, R.jsx)(tg, {
            ref: t,
            ...o
          })
        }),
        hg = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": r
          }, t);
          return (0, R.jsx)(og, {
            ref: o,
            ...n,
            children: t.asChild && (0, S.isValidElement)(e) ? (0, S.cloneElement)(e, {
              children: (0, R.jsx)("span", {
                className: cg,
                children: e.props.children
              })
            }) : (0, R.jsx)("span", {
              className: cg,
              children: e
            })
          })
        }),
        gg = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = as[e],
            n = (0, k.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            size: "LG",
            ...n
          })
        }),
        wg = (0, S.forwardRef)(({
          icon: e = "ChevronDown",
          ...r
        }, t) => {
          const o = as[e],
            n = (0, k.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            size: "LG",
            ...n
          })
        }),
        xg = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": t,
            asChild: r
          }, o);
          return (0, R.jsx)(ng, {
            ref: n,
            ...a,
            children: r && (0, S.isValidElement)(e) ? (0, S.cloneElement)(e, {
              children: (0, R.jsx)("div", {
                className: ug,
                children: e.props.children
              })
            }) : (0, R.jsx)("div", {
              className: ug,
              children: e
            })
          })
        })
    },
    77301(e, r, t) {
      t.d(r, {
        b: () => i
      });
      var o = t(4637),
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
    }
  }
]);