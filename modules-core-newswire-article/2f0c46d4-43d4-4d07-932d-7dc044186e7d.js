try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "2f0c46d4-43d4-4d07-932d-7dc044186e7d", e._sentryDebugIdIdentifier = "sentry-dbid-2f0c46d4-43d4-4d07-932d-7dc044186e7d")
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
  [9081], {
    59081(e, r, t) {
      t.r(r), t.d(r, {
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => x,
        Badge: () => h,
        Body: () => jr,
        Breadcrumbs: () => m,
        Button: () => Be,
        Checkbox: () => d,
        ChipGroup: () => C,
        Code: () => Pr,
        Dialog: () => w,
        Display: () => Rr,
        Divider: () => ar,
        Dropdown: () => a,
        Heading: () => Sr,
        IconButton: () => Qe,
        Label: () => kr,
        Lightbox: () => n,
        Loader: () => br,
        Pagination: () => _,
        Popover: () => j,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => Se,
        Switch: () => s,
        Tag: () => y,
        Text: () => Tr,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => Ir,
        Toast: () => b,
        Tooltip: () => o
      });
      var o = {};
      t.r(o), t.d(o, {
        Arrow: () => sn,
        Content: () => an,
        Portal: () => dn,
        Root: () => on,
        Trigger: () => nn,
        useTooltipContext: () => tn
      });
      var n = {};
      t.r(n), t.d(n, {
        Caption: () => ns,
        Close: () => ls,
        Content: () => Ja,
        Controls: () => as,
        CssVars: () => fs,
        Download: () => us,
        Image: () => os,
        Keyboard: () => is,
        LightboxContext: () => Ka,
        OpenIcon: () => $a,
        Overlay: () => Qa,
        Portal: () => Ya,
        Reset: () => cs,
        Root: () => Za,
        RootImplContext: () => Wa,
        Thumbnail: () => Ua,
        Trigger: () => Ga,
        Zoom: () => ds,
        ZoomPan: () => es
      });
      var a = {};
      t.r(a), t.d(a, {
        Content: () => Id,
        Description: () => qd,
        Hint: () => Fd,
        Label: () => Md,
        Option: () => Bd,
        OptionIcon: () => Kd,
        OptionText: () => Xd,
        Portal: () => Zd,
        Root: () => zd,
        ScrollArea: () => Ed,
        StatusIcon: () => Hd,
        StatusRoot: () => Wd,
        StatusText: () => Gd,
        Trigger: () => Ld,
        TriggerIcon: () => Ad,
        TriggerText: () => Vd,
        Viewport: () => Td,
        useDropdownContext: () => kd
      });
      var s = {};
      t.r(s), t.d(s, {
        Description: () => pl,
        Input: () => ul,
        Label: () => fl,
        Root: () => cl,
        useSwitchContext: () => ll
      });
      var i = {};
      t.r(i), t.d(i, {
        CheckLG: () => bl,
        CheckMD: () => yl,
        CheckXL: () => ml,
        DashLG: () => gl,
        DashMD: () => hl,
        DashXL: () => wl
      });
      var d = {};
      t.r(d), t.d(d, {
        Description: () => Al,
        ErrorText: () => Ml,
        Group: () => Bl,
        GroupDescription: () => Kl,
        GroupErrorText: () => Wl,
        GroupItems: () => Zl,
        GroupLabel: () => Xl,
        Input: () => Ll,
        Label: () => Vl,
        Root: () => El,
        useGroupContext: () => Fl
      });
      var l = {};
      t.r(l), t.d(l, {
        Description: () => dc,
        Hint: () => lc,
        Input: () => ic,
        Label: () => sc,
        Root: () => ac,
        RootContext: () => oc,
        StatusIcon: () => uc,
        StatusRoot: () => cc,
        StatusText: () => fc,
        useTextAreaContext: () => nc
      });
      var c = {};
      t.r(c), t.d(c, {
        DotLG: () => Ac,
        DotMD: () => Vc,
        DotXL: () => Mc
      });
      var u = {};
      t.r(u), t.d(u, {
        Description: () => Nc,
        Input: () => Fc,
        Label: () => Rc,
        Option: () => qc,
        OptionDescription: () => Xc,
        OptionLabel: () => Bc,
        Options: () => Pc,
        Root: () => Oc,
        StatusIcon: () => Dc,
        StatusRoot: () => Sc,
        StatusText: () => kc,
        useRadioGroupContext: () => jc
      });
      var f = {};
      t.r(f), t.d(f, {
        Button: () => fu,
        Control: () => lu,
        Description: () => vu,
        Hint: () => du,
        Icon: () => uu,
        Input: () => cu,
        Label: () => iu,
        PasswordButton: () => pu,
        Root: () => su,
        StatusIcon: () => bu,
        StatusRoot: () => yu,
        StatusText: () => mu
      });
      var p = {};
      t.r(p), t.d(p, {
        Body: () => qu,
        CloseButton: () => Gu,
        Description: () => Ku,
        ErrorText: () => Hu,
        Footer: () => Wu,
        Header: () => Mu,
        Icon: () => Bu,
        Link: () => Zu,
        Root: () => Au,
        RootContext: () => Lu,
        Title: () => Xu,
        iconStatusMap: () => Fu,
        useAlertContext: () => Vu
      });
      var v = {};
      t.r(v), t.d(v, {
        Alert: () => pf,
        CloseButton: () => bf,
        Description: () => ff,
        Icon: () => uf,
        Link: () => yf,
        PaginationCounter: () => wf,
        PaginationNav: () => mf,
        PaginationNextButton: () => hf,
        PaginationPrevButton: () => gf,
        PaginationViewport: () => vf,
        Root: () => lf,
        RootContext: () => sf,
        iconStatusMap: () => cf,
        useAlertBannerContext: () => df
      });
      var y = {};
      t.r(y), t.d(y, {
        CloseButton: () => Ef,
        Icon: () => Tf,
        Label: () => If,
        Root: () => zf,
        RootContext: () => Df,
        useTagContext: () => kf
      });
      var b = {};
      t.r(b), t.d(b, {
        Action: () => Mp,
        CloseButton: () => qp,
        Description: () => Lp,
        Icon: () => Ap,
        Provider: () => kp,
        Root: () => Ep,
        RootContext: () => Ip,
        Viewport: () => zp,
        iconAppearanceMap: () => Vp,
        useToastContext: () => Tp
      });
      var m = {};
      t.r(m), t.d(m, {
        Icon: () => rv,
        Item: () => ev,
        OverflowMenu: () => tv,
        OverflowMenuItem: () => ov,
        Root: () => Jp,
        RootContext: () => Qp,
        useBreadcrumbsContext: () => Yp
      });
      var h = {};
      t.r(h), t.d(h, {
        Icon: () => vv,
        Label: () => pv,
        Root: () => fv,
        useBadgeContext: () => uv
      });
      var g = {};
      t.r(g), t.d(g, {
        Corner: () => Rv,
        Root: () => Cv,
        Scrollbar: () => Ov,
        Thumb: () => Pv,
        Viewport: () => jv
      });
      var w = {};
      t.r(w), t.d(w, {
        ActionArea: () => Yv,
        CloseButton: () => $v,
        Content: () => Bv,
        Description: () => Kv,
        Footer: () => Qv,
        Header: () => Hv,
        HeaderButton: () => Uv,
        HeaderTitle: () => Gv,
        Layout: () => Wv,
        Overlay: () => Fv,
        Portal: () => qv,
        Root: () => Vv,
        ScrollArea: () => Zv,
        Title: () => Xv,
        Trigger: () => Mv
      });
      var x = {};
      t.r(x), t.d(x, {
        Image: () => ky,
        Root: () => Dy,
        StatusIndicator: () => zy,
        useAvatarContext: () => Sy
      });
      var _ = {};
      t.r(_), t.d(_, {
        Controls: () => Zy,
        Dropdown: () => $y,
        DropdownLabel: () => Uy,
        Ellipsis: () => Ky,
        Item: () => Fy,
        Label: () => Qy,
        Next: () => Xy,
        Option: () => Yy,
        Pages: () => qy,
        Prev: () => By,
        ResultsPerPage: () => Gy,
        Root: () => My
      });
      var C = {};
      t.r(C), t.d(C, {
        Icon: () => em,
        Item: () => Jb,
        Label: () => tm,
        Root: () => Qb,
        StatusIndicator: () => rm,
        useChipGroupContext: () => Yb
      });
      var j = {};
      t.r(j), t.d(j, {
        Anchor: () => Wm,
        Arrow: () => Gm,
        Close: () => $m,
        Content: () => Hm,
        Portal: () => Um,
        Root: () => Bm,
        RootContext: () => Fm,
        Trigger: () => Xm,
        TriggerButton: () => Zm
      });
      var O = {};
      t.r(O), t.d(O, {
        Indicator: () => Sh,
        Label: () => Dh,
        Root: () => Ph,
        Track: () => Nh,
        UnitLabel: () => kh
      });
      var P = t(39793),
        R = t(11350),
        N = t(93082),
        S = t(64001),
        D = (t(77278), {
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
        k = t(23293);
      const z = e => {
        const r = e.match(/^var\((.*)\)$/);
        return r ? r[1] : e
      };

      function I(e) {
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

      function T(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function E(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? T(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = I(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function L(e, r) {
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
        A = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = E(E({}, e.defaultVariants), r);
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
              return L(e.variantClassNames, e => L(e, e => e.split(" ")[0]))
            }
          }, r
        },
        M = "var(--foundry_1qqcnua0)",
        q = "var(--foundry_1qqcnua1)",
        F = "var(--foundry_1qqcnua2)",
        B = "var(--foundry_1qqcnua3)",
        X = "var(--foundry_1qqcnua4)",
        K = "var(--foundry_1qqcnua5)",
        Z = "var(--foundry_1qqcnua6)",
        W = "var(--foundry_1qqcnua7)",
        H = "var(--foundry_1qqcnua8)",
        G = "var(--foundry_1qqcnua9)",
        U = "var(--foundry_1qqcnuaa)",
        $ = "var(--foundry_1qqcnuab)",
        Y = "var(--foundry_1qqcnuac)",
        Q = "var(--foundry_1qqcnuad)",
        J = "var(--foundry_1qqcnuae)",
        ee = "var(--foundry_1qqcnuaf)",
        re = "var(--foundry_1qqcnuag)",
        te = "var(--foundry_1qqcnuah)",
        oe = "var(--foundry_1qqcnuai)",
        ne = "var(--foundry_1qqcnuaj)",
        ae = "var(--foundry_1qqcnuak)",
        se = "var(--foundry_1qqcnual)",
        ie = "var(--foundry_1qqcnuam)",
        de = "var(--foundry_1qqcnuan)";
      A({
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
      }), A({
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
      }), A({
        defaultClassName: "foundry_tdsdcdu foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdw",
            bold: "foundry_tdsdcdx"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), A({
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
      }), A({
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
      const le = {
          enabled: {
            background: z(M),
            border: z(q),
            text: z(F),
            outline: z(B)
          },
          hover: {
            background: z(X),
            border: z(K),
            text: z(Z),
            outline: z(W)
          },
          focus: {
            background: z(H),
            border: z(G),
            text: z(U),
            outline: z($)
          },
          pressed: {
            background: z(Y),
            border: z(Q),
            text: z(J),
            outline: z(ee)
          },
          disabled: {
            background: z(re),
            border: z(te),
            text: z(oe),
            outline: z(ne)
          },
          loading: {
            background: z(ae),
            border: z(se),
            text: z(ie),
            outline: z(de)
          }
        },
        ce = ({
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
          (0, N.useEffect)(() => {
            if (!e.current || !a || !l) return;
            const c = `${a}:${r}:${t}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, k.IO)(c, () => {
                const e = (0, R.J1)(a);
                return {
                  text: d || (e > r ? D.color.black.static[100] : D.color.white.static[100]),
                  hover: s || (e >= t ? (0, R.e$)(a, o) : (0, R.a)(a, o)),
                  pressed: i || (e >= t ? (0, R.e$)(a, n) : (0, R.a)(a, n))
                }
              });
            return e.current.style.setProperty(le.enabled.background, a), e.current.style.setProperty(le.enabled.border, a), e.current.style.setProperty(le.enabled.text, u), e.current.style.setProperty(le.hover.background, f), e.current.style.setProperty(le.hover.border, f), e.current.style.setProperty(le.hover.text, u), e.current.style.setProperty(le.focus.background, f), e.current.style.setProperty(le.focus.border, f), e.current.style.setProperty(le.focus.text, u), e.current.style.setProperty(le.pressed.background, p), e.current.style.setProperty(le.pressed.border, p), e.current.style.setProperty(le.pressed.text, u), e.current.style.setProperty(le.loading.background, f), e.current.style.setProperty(le.loading.border, f), e.current.style.setProperty(le.loading.text, u), () => {
              e.current?.style.removeProperty(le.enabled.background), e.current?.style.removeProperty(le.enabled.border), e.current?.style.removeProperty(le.enabled.text), e.current?.style.removeProperty(le.hover.background), e.current?.style.removeProperty(le.hover.border), e.current?.style.removeProperty(le.hover.text), e.current?.style.removeProperty(le.focus.background), e.current?.style.removeProperty(le.focus.border), e.current?.style.removeProperty(le.focus.text), e.current?.style.removeProperty(le.pressed.background), e.current?.style.removeProperty(le.pressed.border), e.current?.style.removeProperty(le.pressed.text), e.current?.style.removeProperty(le.loading.background), e.current?.style.removeProperty(le.loading.border), e.current?.style.removeProperty(le.loading.text)
            }
          }, [e.current, r, t, o, n, a, s, i, d, l, ...c])
        };
      var ue = t(94736),
        fe = t(30377);
      t(93400);
      const pe = (0, N.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        ve = () => (0, N.useContext)(pe),
        ye = () => {
          const {
            platformScale: e
          } = ve();
          return e
        };
      var be = t(85666);
      const me = e => "dark" === e ? be.xW.dark : be.xW.light;
      const he = () => k.X3 ? null : document.body;
      (0, N.forwardRef)(({
        children: e,
        className: r,
        container: t = he(),
        asChild: o,
        colorScheme: n,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, N.useRef)(null),
          f = (0, ue.UP)(u, c),
          p = (0, N.useRef)(t),
          {
            ratio: v,
            scale: y
          } = function(e) {
            const [r, t] = (0, N.useState)(e.platformScale || e.defaultPlatformScale), o = (0, N.useCallback)(r => {
              t(r), e.onPlatformScaleChange?.(r)
            }, [e.onPlatformScaleChange]), n = (0, N.useRef)([]), a = () => {
              if (!k.X3) {
                for (const {
                    handler: e,
                    matchMedia: r
                  }
                  of n.current) r.removeEventListener("change", e);
                n.current = []
              }
            };
            return (0, N.useEffect)(() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!k.X3) {
                a();
                for (const e in be.wj) {
                  const r = window.matchMedia(be.wj[e]),
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
              ratio: be.nz[r]
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
            const t = (0, ue.Ub)("(prefers-color-scheme: light)"),
              o = (0, ue.Ub)("(prefers-color-scheme: dark)"),
              n = "system" !== e && e || t && "light" || o && "dark" || r,
              a = (0, N.useMemo)(() => me(n), [n]),
              s = (0, N.useMemo)(() => (e => {
                const r = me(e);
                return [be.xW.light, be.xW.dark].filter(e => e !== r)
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
          const s = (0, ue.ZC)(a),
            i = (0, ue.ZC)(e.current);
          (0, N.useEffect)(() => {
            e.current?.classList.contains(be.X6) || e.current?.classList.add(be.X6), e.current?.classList.contains(be.yU) || e.current?.classList.add(be.yU), e.current?.classList.contains(be.Np) || e.current?.classList.add(be.Np), e.current?.classList.add(t), e.current?.classList.remove(...o), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
          }, [t, a]), (0, N.useEffect)(() => {
            e.current?.setAttribute("lang", n)
          }, [n]), (0, N.useEffect)(() => (r && e.current?.style.setProperty(be.HZ, r.toString()), () => {
            e.current?.style.removeProperty(be.HZ)
          }), [r]), (0, N.useEffect)(() => {
            i?.classList.remove(be.X6), i?.classList.remove(be.yU), i?.classList.remove(t), i?.style.removeProperty(be.HZ), a && i?.classList.remove(a)
          }, [i])
        })({
          locale: l,
          className: r,
          appearanceClass: b,
          otherAppearanceClasses: m,
          currentScale: i ? v : -0,
          container: o ? u : p
        }), (0, P.jsx)(pe.Provider, {
          value: {
            locale: l,
            defaultColorScheme: a,
            colorScheme: h,
            defaultPlatformScale: s,
            platformScale: y
          },
          children: o ? (0, P.jsx)(fe.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var ge = t(91497);

      function we(e) {
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

      function xe(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function _e(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? xe(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = we(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xe(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ce(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var je, Oe, Pe = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Re = (je = {
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
        }, Oe = e => {
          var r = je.defaultClassName,
            t = _e(_e({}, je.defaultVariants), e);
          for (var o in t) {
            var n, a = null !== (n = t[o]) && void 0 !== n ? n : je.defaultVariants[o];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = je.variantClassNames[o][s];
              i && (r += " " + i)
            }
          }
          for (var [d, l] of je.compoundVariants) Pe(d, t, je.defaultVariants) && (r += " " + l);
          return r
        }, Oe.variants = () => Object.keys(je.variantClassNames), Oe.classNames = {
          get base() {
            return je.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Ce(je.variantClassNames, e => Ce(e, e => e.split(" ")[0]))
          }
        }, Oe);
      const Ne = "pageMD",
        Se = (0, N.forwardRef)(({
          label: e,
          hideTrack: r = !1,
          size: t = Ne,
          testId: o,
          ...n
        }, a) => {
          const s = ye(),
            i = "string" == typeof t ? t : t?.[s] ?? t.default ?? Ne,
            d = (0, k.v6)({
              className: Re({
                size: i
              }),
              "data-testid": o,
              "aria-label": e
            }, n);
          return (0, P.jsx)(ge.b, {
            label: e,
            children: (0, P.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!r && (0, P.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, P.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var De = t(81270),
        ke = t(74566);

      function ze(e) {
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

      function Ie(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Te(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ie(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ze(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ie(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ee(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Le = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ve = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Te(Te({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Le(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ee(e.variantClassNames, e => Ee(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Ae = Ve({
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
      Ve({
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
      var Me = Ve({
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
        qe = Ve({
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
        Fe = Ve({
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
      const Be = (0, N.forwardRef)(({
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
        const C = (0, N.useRef)(null),
          j = (0, ue.UP)(C, _),
          O = ye(),
          R = "string" == typeof d ? d : d?.[O] ?? d.default ?? "MD",
          {
            buttonProps: S
          } = (0, ue.sL)((0, k.v6)(x, {
            isLoading: c,
            preventFocusOnPress: f
          }), C);
        ce({
          refs: {
            buttonRef: C
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
            className: Ae({
              appearance: i,
              size: R,
              fullWidth: l,
              iconLeft: !!o,
              iconRight: !!a
            }),
            "data-testid": e
          }, S),
          z = o && ke[o],
          I = a && ke[a],
          T = r ? fe.DX : "button",
          E = l && (I || I && z);
        return (0, P.jsxs)(T, {
          ref: j,
          ...D,
          children: [E && (0, P.jsx)("div", {
            className: "foundry_17pcofy15"
          }), z && (0, P.jsx)(z, {
            label: n || "",
            size: R,
            className: (0, De.clsx)(Me({
              size: R
            }), "foundry_17pcofy11")
          }), (0, P.jsx)(fe.xV, {
            children: t
          }), I && (0, P.jsx)(I, {
            label: s || "",
            size: R,
            className: (0, De.clsx)(Me({
              size: R
            }), qe({
              fullWidth: l
            }))
          }), c && (0, P.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, P.jsx)(Se, {
              label: u || "",
              size: "inline" + ("XL" === R ? "LG" : "MD"),
              hideTrack: !0,
              className: Fe({
                size: R
              })
            })
          })]
        })
      });

      function Xe(e) {
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

      function Ke(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ze(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ke(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Xe(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ke(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function We(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var He = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ge = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ze(Ze({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) He(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return We(e.variantClassNames, e => We(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Ue = Ge({
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
        $e = Ge({
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
        Ye = Ge({
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
      const Qe = (0, N.forwardRef)(({
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
        const x = (0, N.useRef)(null),
          _ = (0, ue.UP)(x, w),
          C = ye(),
          j = "string" == typeof s ? s : s?.[C] ?? s.default ?? "LG",
          {
            buttonProps: O
          } = (0, ue.sL)((0, k.v6)(g, {
            isLoading: d,
            preventFocusOnPress: c
          }), x);
        ce({
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
        const R = (0, k.v6)({
            className: $e({
              appearance: n,
              size: j,
              fullWidth: a
            }),
            "data-testid": e
          }, O),
          S = ke[t],
          D = r ? fe.DX : "button";
        return (0, P.jsxs)(D, {
          ref: _,
          ...R,
          children: [S && (0, P.jsx)(S, {
            label: o || "",
            size: j,
            className: Ue({
              size: j
            })
          }), (0, P.jsx)(fe.xV, {
            children: i
          }), d && (0, P.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, P.jsx)(Se, {
              label: l || "",
              size: j && "SM" !== j ? `inline${j}` : "inlineMD",
              hideTrack: !0,
              className: Ye({
                size: j
              })
            })
          })]
        })
      });

      function Je(e) {
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

      function er(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function rr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? er(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Je(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : er(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function tr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var or = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        nr = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = rr(rr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) or(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tr(e.variantClassNames, e => tr(e, e => e.split(" ")[0]))
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
      const ar = (0, N.forwardRef)(({
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
          c = n ? fe.DX : d;
        return (0, P.jsx)(c, {
          ref: i,
          className: (0, De.clsx)(nr({
            thickness: t,
            orientation: r
          }), e),
          role: l,
          "aria-orientation": r,
          "data-testid": a,
          ...s
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
        ur = "var(--foundry_9dxgbc2)",
        fr = "var(--foundry_9dxgbc3)",
        pr = (e => {
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
        vr = "var(--foundry_9dxgbc0)",
        yr = "var(--foundry_9dxgbc1)";
      const br = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        children: t,
        colorOverride: o,
        label: n,
        size: a = "MD",
        ...s
      }, i) => {
        const d = ye(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, k.v6)({
            className: pr({
              size: l
            }),
            "data-testid": r,
            style: (0, S.D)({
              [vr]: o?.pulseColorBackground,
              [yr]: o?.pulseColorForeground,
              [ur]: o?.gradientColorBackground,
              [fr]: o?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": n
          }, s),
          u = e ? fe.DX : "div";
        return (0, P.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, P.jsx)(fe.xV, {
            children: t
          }) : (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, P.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function mr(e) {
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

      function hr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function gr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? hr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = mr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function wr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var xr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        _r = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = gr(gr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) xr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wr(e.variantClassNames, e => wr(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Cr = _r({
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
      const jr = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? fe.DX : "p",
          i = (0, k.v6)({
            className: Cr({
              size: o,
              appearance: t
            })
          }, n);
        return (0, P.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var Or = _r({
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
      const Pr = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "default",
          ...o
        }, n) => {
          const a = e ? fe.DX : "p",
            s = (0, k.v6)({
              className: Or({
                appearance: t
              })
            }, o);
          return (0, P.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        }),
        Rr = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "h1",
            a = (0, k.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, t);
          return (0, P.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        });
      var Nr = _r({
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
      const Sr = (0, N.forwardRef)(({
        asChild: e,
        level: r,
        testId: t,
        ...o
      }, n) => {
        const a = e ? fe.DX : `h${7===r?6:r}`,
          s = (0, k.v6)(o, {
            className: Nr({
              level: r
            })
          });
        return (0, P.jsx)(a, {
          ref: n,
          "data-testid": t,
          ...s
        })
      });
      var Dr = _r({
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
      const kr = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? fe.DX : "p",
          i = (0, k.v6)({
            className: Dr({
              size: o,
              appearance: t
            })
          }, n);
        return (0, P.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var zr = _r({
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
      const Ir = {
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
        Tr = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          semantic: t = "default",
          ...o
        }, n) => {
          const a = e ? fe.DX : Ir[t] || "span",
            s = (0, k.v6)(o, {
              className: zr({
                semantic: t
              })
            });
          return (0, P.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        });
      var Er = t(93529),
        Lr = t(99206),
        Vr = t(34811);
      const Ar = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((r, t) => {
        e.onload = () => r(), e.onerror = t
      }), Mr = ([e, r]) => ({
        x: e,
        y: r
      }), qr = (e, r) => (e.x = r.x, e.y = r.y, e), Fr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Br = (e, r = 3) => Number(parseFloat(`${e}`).toFixed(r)), Xr = (e, r, t) => Math.min(Math.max(e, r), t);
      var Kr = t(90004);

      function Zr(e) {
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

      function Wr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Hr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Wr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Zr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wr(Object(t)).forEach(function(r) {
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
      var Ur = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        $r = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Hr(Hr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ur(l, o, e.defaultVariants) && (t += " " + c);
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
        Yr = $r({
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
        Qr = $r({
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
      Er.os.registerPlugin(Lr.L);
      const Jr = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        et = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        rt = z("var(--foundry_1a74xwb0)");
      var tt = t(99817);
      const ot = {
        "en-US": t.e(3031).then(t.bind(t, 53031)),
        "de-DE": t.e(4388).then(t.bind(t, 44388)),
        "es-ES": t.e(4498).then(t.bind(t, 94498)),
        "es-MX": t.e(9183).then(t.bind(t, 39183)),
        "fr-FR": t.e(846).then(t.bind(t, 90846)),
        "it-IT": t.e(4756).then(t.bind(t, 34756)),
        "ja-JP": t.e(6087).then(t.bind(t, 56087)),
        "ko-KR": t.e(1061).then(t.bind(t, 41061)),
        "pl-PL": t.e(3922).then(t.bind(t, 3922)),
        "pt-BR": t.e(2730).then(t.bind(t, 82730)),
        "ru-RU": t.e(2592).then(t.bind(t, 22592)),
        "zh-CN": t.e(2993).then(t.bind(t, 32993)),
        "zh-TW": t.e(609).then(t.bind(t, 70609))
      };
      class nt {
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
          return t ? r : Xr(r, this.max[e], this.min[e])
        }
      }
      class at {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Br(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            r = e.w / this.elementSize.w,
            t = e.h / this.elementSize.h;
          return Br(t < r ? t : r)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Br(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class st {
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
      class it {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(r) ? "x" : "y", qr(this.startPan, this.slide.pan)
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
          })(this.prevTap, o) < 25 && this.slide.tapHandler.doubleTap(o, n)) : (qr(this.prevTap, {
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
      class dt {
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
          e.src = this.thumbnail.currentSrc ?? "", await Ar(e)
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
      class lt {
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
      class ct extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, r, t, o) {
          super(e), this.point = t, this.tapTarget = r, this.originalEvent = o
        }
      }
      class ut extends st {
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
          if (!this.dispatch(e, new ct(e, r, t, o)).defaultPrevented) switch (this.options[e]) {
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
      class ft {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Mr(e), this.startZoomDistance = r, this.wasOverFitZoomLevel = !1, qr(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [r]
        }) {
          const t = this.slide.zoomLevels.min,
            o = this.slide.zoomLevels.max;
          this.zoomPoint = Mr(e);
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
            a = qr({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = qr({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = r, qr(this.startPan, a)), o && (s = {
            x: this.calculatePanForZoomLevel("x", t),
            y: this.calculatePanForZoomLevel("y", t)
          }), this.slide.setZoomLevel(t, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(r, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || o || n) && (qr(this.slide.pan, s), this.slide.setZoomLevel(t))
        }
      }
      class pt {
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
      class vt extends st {
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
          super(), this.width = e, this.height = r, this.opener = new dt({
            slide: this
          }), this.bounds = new nt({
            slide: this
          }), this.dragHandler = new it({
            options: a,
            slide: this
          }), this.scrollWheel = new lt({
            slide: this
          }), this.zoomHandler = new ft({
            slide: this
          }), this.zoomLevels = new at({
            options: t,
            slide: this
          }), this.tapHandler = new ut({
            options: o,
            slide: this
          }), this.panAreaSize = new pt({
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
          e = Br(e), t || (e = Xr(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", r, o), this.pan.y = this.calculateZoomToPanOffset("y", r, o), Fr(this.pan)
        }
        toggleZoom(e) {
          const r = this.currZoomLevel,
            t = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, r), this.pan.y = this.calculateZoomToPanOffset("y", e, r), Fr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), qr(this.pan, this.bounds.center)
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
      var yt = t(40996);
      const bt = (0, tt.YK)({
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
      var mt = "foundry_bc732x1";
      const ht = (0, N.forwardRef)(({
        shortcut: e,
        isInline: r,
        onShortcut: t
      }, o) => ((0, Kr.vC)(e, e => t?.(e), [t]), (0, P.jsx)(jr, {
        size: "XS",
        className: (0, De.clsx)("foundry_bc732x0", {
          [mt]: r
        }),
        asChild: !0,
        children: (0, P.jsx)("kbd", {
          ref: o,
          children: e
        })
      })));
      var gt = t(30818),
        wt = t(8316),
        xt = t(50446),
        _t = t(31201),
        Ct = t(84017),
        jt = t(2976),
        Ot = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const t = (0, jt.TL)(`Primitive.${r}`),
            o = N.forwardRef((e, o) => {
              const {
                asChild: n,
                ...a
              } = e, s = n ? t : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, P.jsx)(s, {
                ...a,
                ref: o
              })
            });
          return o.displayName = `Primitive.${r}`, {
            ...e,
            [r]: o
          }
        }, {});

      function Pt(e, r) {
        e && Ct.flushSync(() => e.dispatchEvent(r))
      }
      var Rt, Nt = t(38351),
        St = t(2471),
        Dt = "dismissableLayer.update",
        kt = N.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        zt = N.forwardRef((e, r) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: n,
            onFocusOutside: a,
            onInteractOutside: s,
            onDismiss: i,
            ...d
          } = e, l = N.useContext(kt), [c, u] = N.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, p] = N.useState({}), v = (0, xt.s)(r, e => u(e)), y = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), m = y.indexOf(b), h = c ? y.indexOf(c) : -1, g = l.layersWithOutsidePointerEventsDisabled.size > 0, w = h >= m, x = function(e, r = globalThis?.document) {
            const t = (0, Nt.c)(e),
              o = N.useRef(!1),
              n = N.useRef(() => {});
            return N.useEffect(() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let o = function() {
                      Et("dismissableLayer.pointerDownOutside", t, a, {
                        discrete: !0
                      })
                    };
                    const a = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (r.removeEventListener("click", n.current), n.current = o, r.addEventListener("click", n.current, {
                      once: !0
                    })) : o()
                  } else r.removeEventListener("click", n.current);
                  o.current = !1
                },
                a = window.setTimeout(() => {
                  r.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(a), r.removeEventListener("pointerdown", e), r.removeEventListener("click", n.current)
              }
            }, [r, t]), {
              onPointerDownCapture: () => o.current = !0
            }
          }(e => {
            const r = e.target,
              t = [...l.branches].some(e => e.contains(r));
            w && !t && (n?.(e), s?.(e), e.defaultPrevented || i?.())
          }, f), _ = function(e, r = globalThis?.document) {
            const t = (0, Nt.c)(e),
              o = N.useRef(!1);
            return N.useEffect(() => {
              const e = e => {
                e.target && !o.current && Et("dismissableLayer.focusOutside", t, {
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
            const r = e.target;
            [...l.branches].some(e => e.contains(r)) || (a?.(e), s?.(e), e.defaultPrevented || i?.())
          }, f);
          return (0, St.U)(e => {
            h === l.layers.size - 1 && (o?.(e), !e.defaultPrevented && i && (e.preventDefault(), i()))
          }, f), N.useEffect(() => {
            if (c) return t && (0 === l.layersWithOutsidePointerEventsDisabled.size && (Rt = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(c)), l.layers.add(c), Tt(), () => {
              t && 1 === l.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = Rt)
            }
          }, [c, f, t, l]), N.useEffect(() => () => {
            c && (l.layers.delete(c), l.layersWithOutsidePointerEventsDisabled.delete(c), Tt())
          }, [c, l]), N.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(Dt, e), () => document.removeEventListener(Dt, e)
          }, []), (0, P.jsx)(Ot.div, {
            ...d,
            ref: v,
            style: {
              pointerEvents: g ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, wt.mK)(e.onFocusCapture, _.onFocusCapture),
            onBlurCapture: (0, wt.mK)(e.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: (0, wt.mK)(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        });
      zt.displayName = "DismissableLayer";
      var It = N.forwardRef((e, r) => {
        const t = N.useContext(kt),
          o = N.useRef(null),
          n = (0, xt.s)(r, o);
        return N.useEffect(() => {
          const e = o.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }, [t.branches]), (0, P.jsx)(Ot.div, {
          ...e,
          ref: n
        })
      });

      function Tt() {
        const e = new CustomEvent(Dt);
        document.dispatchEvent(e)
      }

      function Et(e, r, t, {
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
        }), o ? Pt(n, a) : n.dispatchEvent(a)
      }
      It.displayName = "DismissableLayerBranch";
      var Lt = zt,
        Vt = It,
        At = t(96883),
        Mt = t(17966),
        qt = t(10376),
        Ft = N.forwardRef((e, r) => {
          const {
            children: t,
            width: o = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, P.jsx)(Ot.svg, {
            ...a,
            ref: r,
            width: o,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? t : (0, P.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Ft.displayName = "Arrow";
      var Bt = Ft,
        Xt = t(86627),
        Kt = t(94119),
        Zt = "Popper",
        [Wt, Ht] = (0, _t.A)(Zt),
        [Gt, Ut] = Wt(Zt),
        $t = e => {
          const {
            __scopePopper: r,
            children: t
          } = e, [o, n] = N.useState(null);
          return (0, P.jsx)(Gt, {
            scope: r,
            anchor: o,
            onAnchorChange: n,
            children: t
          })
        };
      $t.displayName = Zt;
      var Yt = "PopperAnchor",
        Qt = N.forwardRef((e, r) => {
          const {
            __scopePopper: t,
            virtualRef: o,
            ...n
          } = e, a = Ut(Yt, t), s = N.useRef(null), i = (0, xt.s)(r, s), d = N.useRef(null);
          return N.useEffect(() => {
            const e = d.current;
            d.current = o?.current || s.current, e !== d.current && a.onAnchorChange(d.current)
          }), o ? null : (0, P.jsx)(Ot.div, {
            ...n,
            ref: i
          })
        });
      Qt.displayName = Yt;
      var Jt = "PopperContent",
        [eo, ro] = Wt(Jt),
        to = N.forwardRef((e, r) => {
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
          } = e, b = Ut(Jt, t), [m, h] = N.useState(null), g = (0, xt.s)(r, e => h(e)), [w, x] = N.useState(null), _ = (0, Kt.X)(w), C = _?.width ?? 0, j = _?.height ?? 0, O = o + ("center" !== a ? "-" + a : ""), R = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, S = Array.isArray(l) ? l : [l], D = S.length > 0, k = {
            padding: R,
            boundary: S.filter(so),
            altBoundary: D
          }, {
            refs: z,
            floatingStyles: I,
            placement: T,
            isPositioned: E,
            middlewareData: L
          } = (0, Mt.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, qt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: b.anchor
            },
            middleware: [(0, Mt.cY)({
              mainAxis: n + j,
              alignmentAxis: s
            }), d && (0, Mt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Mt.ER)() : void 0,
              ...k
            }), d && (0, Mt.UU)({
              ...k
            }), (0, Mt.Ej)({
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
            }), w && (0, Mt.UE)({
              element: w,
              padding: i
            }), io({
              arrowWidth: C,
              arrowHeight: j
            }), f && (0, Mt.jD)({
              strategy: "referenceHidden",
              ...k
            })]
          }), [V, A] = lo(T), M = (0, Nt.c)(v);
          (0, Xt.N)(() => {
            E && M?.()
          }, [E, M]);
          const q = L.arrow?.x,
            F = L.arrow?.y,
            B = 0 !== L.arrow?.centerOffset,
            [X, K] = N.useState();
          return (0, Xt.N)(() => {
            m && K(window.getComputedStyle(m).zIndex)
          }, [m]), (0, P.jsx)("div", {
            ref: z.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: E ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, P.jsx)(eo, {
              scope: t,
              placedSide: V,
              onArrowChange: x,
              arrowX: q,
              arrowY: F,
              shouldHideArrow: B,
              children: (0, P.jsx)(Ot.div, {
                "data-side": V,
                "data-align": A,
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
      to.displayName = Jt;
      var oo = "PopperArrow",
        no = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        ao = N.forwardRef(function(e, r) {
          const {
            __scopePopper: t,
            ...o
          } = e, n = ro(oo, t), a = no[n.placedSide];
          return (0, P.jsx)("span", {
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
            children: (0, P.jsx)(Bt, {
              ...o,
              ref: r,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        });

      function so(e) {
        return null !== e
      }
      ao.displayName = oo;
      var io = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: t,
            rects: o,
            middlewareData: n
          } = r, a = 0 !== n.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = lo(t), c = {
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

      function lo(e) {
        const [r, t = "center"] = e.split("-");
        return [r, t]
      }
      var co = $t,
        uo = Qt,
        fo = to,
        po = ao,
        vo = N.forwardRef((e, r) => {
          const {
            container: t,
            ...o
          } = e, [n, a] = N.useState(!1);
          (0, Xt.N)(() => a(!0), []);
          const s = t || n && globalThis?.document?.body;
          return s ? Ct.createPortal((0, P.jsx)(Ot.div, {
            ...o,
            ref: r
          }), s) : null
        });
      vo.displayName = "Portal";
      var yo = e => {
        const {
          present: r,
          children: t
        } = e, o = function(e) {
          const [r, t] = N.useState(), o = N.useRef(null), n = N.useRef(e), a = N.useRef("none"), s = e ? "mounted" : "unmounted", [i, d] = function(e, r) {
            return N.useReducer((e, t) => r[e][t] ?? e, e)
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
          return N.useEffect(() => {
            const e = bo(o.current);
            a.current = "mounted" === i ? e : "none"
          }, [i]), (0, Xt.N)(() => {
            const r = o.current,
              t = n.current;
            if (t !== e) {
              const o = a.current,
                s = bo(r);
              d(e ? "MOUNT" : "none" === s || "none" === r?.display ? "UNMOUNT" : t && o !== s ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e
            }
          }, [e, d]), (0, Xt.N)(() => {
            if (r) {
              let e;
              const t = r.ownerDocument.defaultView ?? window,
                s = a => {
                  const s = bo(o.current).includes(CSS.escape(a.animationName));
                  if (a.target === r && s && (d("ANIMATION_END"), !n.current)) {
                    const o = r.style.animationFillMode;
                    r.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                      "forwards" === r.style.animationFillMode && (r.style.animationFillMode = o)
                    })
                  }
                },
                i = e => {
                  e.target === r && (a.current = bo(o.current))
                };
              return r.addEventListener("animationstart", i), r.addEventListener("animationcancel", s), r.addEventListener("animationend", s), () => {
                t.clearTimeout(e), r.removeEventListener("animationstart", i), r.removeEventListener("animationcancel", s), r.removeEventListener("animationend", s)
              }
            }
            d("ANIMATION_END")
          }, [r, d]), {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: N.useCallback(e => {
              o.current = e ? getComputedStyle(e) : null, t(e)
            }, [])
          }
        }(r), n = "function" == typeof t ? t({
          present: o.isPresent
        }) : N.Children.only(t), a = (0, xt.s)(o.ref, function(e) {
          let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = r && "isReactWarning" in r && r.isReactWarning;
          return t ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(n));
        return "function" == typeof t || o.isPresent ? N.cloneElement(n, {
          ref: a
        }) : null
      };

      function bo(e) {
        return e?.animationName || "none"
      }
      yo.displayName = "Presence";
      var mo = t(1531),
        ho = Object.freeze({
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
        go = N.forwardRef((e, r) => (0, P.jsx)(Ot.span, {
          ...e,
          ref: r,
          style: {
            ...ho,
            ...e.style
          }
        }));
      go.displayName = "VisuallyHidden";
      var wo = go,
        [xo, _o] = (0, _t.A)("Tooltip", [Ht]),
        Co = Ht(),
        jo = "TooltipProvider",
        Oo = 700,
        Po = "tooltip.open",
        [Ro, No] = xo(jo),
        So = e => {
          const {
            __scopeTooltip: r,
            delayDuration: t = Oo,
            skipDelayDuration: o = 300,
            disableHoverableContent: n = !1,
            children: a
          } = e, s = N.useRef(!0), i = N.useRef(!1), d = N.useRef(0);
          return N.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, P.jsx)(Ro, {
            scope: r,
            isOpenDelayedRef: s,
            delayDuration: t,
            onOpen: N.useCallback(() => {
              window.clearTimeout(d.current), s.current = !1
            }, []),
            onClose: N.useCallback(() => {
              window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, o)
            }, [o]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: N.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: n,
            children: a
          })
        };
      So.displayName = jo;
      var Do = "Tooltip",
        [ko, zo] = xo(Do),
        Io = e => {
          const {
            __scopeTooltip: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = No(Do, e.__scopeTooltip), l = Co(r), [c, u] = N.useState(null), f = (0, At.B)(), p = N.useRef(0), v = s ?? d.disableHoverableContent, y = i ?? d.delayDuration, b = N.useRef(!1), [m, h] = (0, mo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Po))) : d.onClose(), a?.(e)
            },
            caller: Do
          }), g = N.useMemo(() => m ? b.current ? "delayed-open" : "instant-open" : "closed", [m]), w = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b.current = !1, h(!0)
          }, [h]), x = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, h(!1)
          }, [h]), _ = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              b.current = !0, h(!0), p.current = 0
            }, y)
          }, [y, h]);
          return N.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, P.jsx)(co, {
            ...l,
            children: (0, P.jsx)(ko, {
              scope: r,
              contentId: f,
              open: m,
              stateAttribute: g,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: N.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: N.useCallback(() => {
                v ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, v]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: v,
              children: t
            })
          })
        };
      Io.displayName = Do;
      var To = "TooltipTrigger",
        Eo = N.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = zo(To, t), a = No(To, t), s = Co(t), i = N.useRef(null), d = (0, xt.s)(r, i, n.onTriggerChange), l = N.useRef(!1), c = N.useRef(!1), u = N.useCallback(() => l.current = !1, []);
          return N.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, P.jsx)(uo, {
            asChild: !0,
            ...s,
            children: (0, P.jsx)(Ot.button, {
              "aria-describedby": n.open ? n.contentId : void 0,
              "data-state": n.stateAttribute,
              ...o,
              ref: d,
              onPointerMove: (0, wt.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (n.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, wt.mK)(e.onPointerLeave, () => {
                n.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, wt.mK)(e.onPointerDown, () => {
                n.open && n.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, wt.mK)(e.onFocus, () => {
                l.current || n.onOpen()
              }),
              onBlur: (0, wt.mK)(e.onBlur, n.onClose),
              onClick: (0, wt.mK)(e.onClick, n.onClose)
            })
          })
        });
      Eo.displayName = To;
      var Lo = "TooltipPortal",
        [Vo, Ao] = xo(Lo, {
          forceMount: void 0
        }),
        Mo = e => {
          const {
            __scopeTooltip: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = zo(Lo, r);
          return (0, P.jsx)(Vo, {
            scope: r,
            forceMount: t,
            children: (0, P.jsx)(yo, {
              present: t || a.open,
              children: (0, P.jsx)(vo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      Mo.displayName = Lo;
      var qo = "TooltipContent",
        Fo = N.forwardRef((e, r) => {
          const t = Ao(qo, e.__scopeTooltip),
            {
              forceMount: o = t.forceMount,
              side: n = "top",
              ...a
            } = e,
            s = zo(qo, e.__scopeTooltip);
          return (0, P.jsx)(yo, {
            present: o || s.open,
            children: s.disableHoverableContent ? (0, P.jsx)(Wo, {
              side: n,
              ...a,
              ref: r
            }) : (0, P.jsx)(Bo, {
              side: n,
              ...a,
              ref: r
            })
          })
        }),
        Bo = N.forwardRef((e, r) => {
          const t = zo(qo, e.__scopeTooltip),
            o = No(qo, e.__scopeTooltip),
            n = N.useRef(null),
            a = (0, xt.s)(r, n),
            [s, i] = N.useState(null),
            {
              trigger: d,
              onClose: l
            } = t,
            c = n.current,
            {
              onPointerInTransitChange: u
            } = o,
            f = N.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = N.useCallback((e, r) => {
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
          }, [d, c, s, l, f]), (0, P.jsx)(Wo, {
            ...e,
            ref: a
          })
        }),
        [Xo, Ko] = xo(Do, {
          isInside: !1
        }),
        Zo = (0, jt.Dc)("TooltipContent"),
        Wo = N.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            children: o,
            "aria-label": n,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = zo(qo, t), l = Co(t), {
            onClose: c
          } = d;
          return N.useEffect(() => (document.addEventListener(Po, c), () => document.removeEventListener(Po, c)), [c]), N.useEffect(() => {
            if (d.trigger) {
              const e = e => {
                const r = e.target;
                r?.contains(d.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, c]), (0, P.jsx)(zt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, P.jsxs)(fo, {
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
              children: [(0, P.jsx)(Zo, {
                children: o
              }), (0, P.jsx)(Xo, {
                scope: t,
                isInside: !0,
                children: (0, P.jsx)(wo, {
                  id: d.contentId,
                  role: "tooltip",
                  children: n || o
                })
              })]
            })
          })
        });
      Fo.displayName = qo;
      var Ho = "TooltipArrow",
        Go = N.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = Co(t);
          return Ko(Ho, t).isInside ? null : (0, P.jsx)(po, {
            ...n,
            ...o,
            ref: r
          })
        });
      Go.displayName = Ho;
      var Uo = So,
        $o = Io,
        Yo = Eo,
        Qo = Mo,
        Jo = Fo,
        en = Go;
      const rn = (0, N.createContext)(null);

      function tn() {
        const e = (0, N.useContext)(rn);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const on = ({
          children: e,
          delayDuration: r = 0,
          defaultOpen: t,
          onOpenChange: o,
          ...n
        }) => {
          const [a = !1, s] = (0, ue.ic)({
            defaultProp: t,
            prop: n.isOpen,
            onChange: o
          });
          return (0, P.jsx)(Uo, {
            delayDuration: r,
            children: (0, P.jsx)(rn.Provider, {
              value: {
                isOpen: a,
                ...n
              },
              children: (0, P.jsx)($o, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        nn = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => (0, P.jsx)(Yo, {
          asChild: !0,
          "data-testid": r,
          ...t,
          ref: o,
          children: e
        })),
        an = (0, N.forwardRef)(({
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
          } = tn(), c = (0, ue.jt)(), u = (0, gt.CS)(Jo), f = (0, gt.pn)(l, {
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
            config: gt.$W.stiff,
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
          return f(e => (0, P.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        sn = (0, N.forwardRef)(({
          testId: e
        }, r) => {
          const t = (0, k.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, P.jsx)(en, {
            ...t,
            ref: r
          })
        }),
        dn = Qo;
      var ln = t(47690),
        cn = t(93689),
        un = t(14823);

      function fn(e) {
        const r = e + "CollectionProvider",
          [t, o] = (0, _t.A)(r),
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
            } = e, o = N.useRef(null), a = N.useRef(new Map).current;
            return (0, P.jsx)(n, {
              scope: r,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        s.displayName = r;
        const i = e + "CollectionSlot",
          d = (0, jt.TL)(i),
          l = N.forwardRef((e, r) => {
            const {
              scope: t,
              children: o
            } = e, n = a(i, t), s = (0, xt.s)(r, n.collectionRef);
            return (0, P.jsx)(d, {
              ref: s,
              children: o
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, jt.TL)(c),
          p = N.forwardRef((e, r) => {
            const {
              scope: t,
              children: o,
              ...n
            } = e, s = N.useRef(null), i = (0, xt.s)(r, s), d = a(c, t);
            return N.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...n
            }), () => {
              d.itemMap.delete(s)
            })), (0, P.jsx)(f, {
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
          return N.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const r = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, o]
      }
      Map;
      var pn = ["PageUp", "PageDown"],
        vn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        yn = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        bn = "Slider",
        [mn, hn, gn] = fn(bn),
        [wn, xn] = (0, _t.A)(bn, [gn]),
        [_n, Cn] = wn(bn),
        jn = N.forwardRef((e, r) => {
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
          } = e, b = N.useRef(new Set), m = N.useRef(0), h = "horizontal" === s ? Rn : Nn, [g = [], w] = (0, mo.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const r = [...b.current];
              r[m.current]?.focus(), u(e)
            }
          }), x = N.useRef(g);

          function _(e, r, {
            commit: t
          } = {
            commit: !1
          }) {
            const s = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              i = function(e, r) {
                const t = Math.pow(10, r);
                return Math.round(e * t) / t
              }(Math.round((e - o) / a) * a + o, s),
              l = (0, ln.q)(i, [o, n]);
            w((e = []) => {
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
          return (0, P.jsx)(_n, {
            scope: e.__scopeSlider,
            name: t,
            disabled: i,
            min: o,
            max: n,
            valueIndexToChangeRef: m,
            thumbs: b.current,
            values: g,
            orientation: s,
            form: v,
            children: (0, P.jsx)(mn.Provider, {
              scope: e.__scopeSlider,
              children: (0, P.jsx)(mn.Slot, {
                scope: e.__scopeSlider,
                children: (0, P.jsx)(h, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: r,
                  onPointerDown: (0, wt.mK)(y.onPointerDown, () => {
                    i || (x.current = g)
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
                    }(g, e);
                    _(e, r)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    _(e, m.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = x.current[m.current];
                    g[m.current] !== e && f(g)
                  },
                  onHomeKeyDown: () => !i && _(o, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !i && _(n, g.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: r
                  }) => {
                    if (!i) {
                      const t = pn.includes(e.key) || e.shiftKey && vn.includes(e.key) ? 10 : 1,
                        o = m.current;
                      _(g[o] + a * t * r, o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      jn.displayName = bn;
      var [On, Pn] = wn(bn, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Rn = N.forwardRef((e, r) => {
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
        } = e, [u, f] = N.useState(null), p = (0, xt.s)(r, e => f(e)), v = N.useRef(void 0), y = (0, cn.jH)(n), b = "ltr" === y, m = b && !a || !b && a;

        function h(e) {
          const r = v.current || u.getBoundingClientRect(),
            n = Mn([0, r.width], m ? [t, o] : [o, t]);
          return v.current = r, n(e - r.left)
        }
        return (0, P.jsx)(On, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, P.jsx)(Sn, {
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
              const r = yn[m ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), Nn = N.forwardRef((e, r) => {
        const {
          min: t,
          max: o,
          inverted: n,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = N.useRef(null), u = (0, xt.s)(r, c), f = N.useRef(void 0), p = !n;

        function v(e) {
          const r = f.current || c.current.getBoundingClientRect(),
            n = Mn([0, r.height], p ? [o, t] : [t, o]);
          return f.current = r, n(e - r.top)
        }
        return (0, P.jsx)(On, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, P.jsx)(Sn, {
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
              const r = yn[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), Sn = N.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          onSlideStart: o,
          onSlideMove: n,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = Cn(bn, t);
        return (0, P.jsx)(Ot.span, {
          ...l,
          ref: r,
          onKeyDown: (0, wt.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : pn.concat(vn).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, wt.mK)(e.onPointerDown, e => {
            const r = e.target;
            r.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(r) ? r.focus() : o(e)
          }),
          onPointerMove: (0, wt.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && n(e)
          }),
          onPointerUp: (0, wt.mK)(e.onPointerUp, e => {
            const r = e.target;
            r.hasPointerCapture(e.pointerId) && (r.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Dn = "SliderTrack", kn = N.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          ...o
        } = e, n = Cn(Dn, t);
        return (0, P.jsx)(Ot.span, {
          "data-disabled": n.disabled ? "" : void 0,
          "data-orientation": n.orientation,
          ...o,
          ref: r
        })
      });
      kn.displayName = Dn;
      var zn = "SliderRange",
        In = N.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = Cn(zn, t), a = Pn(zn, t), s = N.useRef(null), i = (0, xt.s)(r, s), d = n.values.length, l = n.values.map(e => An(e, n.min, n.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, P.jsx)(Ot.span, {
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
      In.displayName = zn;
      var Tn = "SliderThumb",
        En = N.forwardRef((e, r) => {
          const t = hn(e.__scopeSlider),
            [o, n] = N.useState(null),
            a = (0, xt.s)(r, e => n(e)),
            s = N.useMemo(() => o ? t().findIndex(e => e.ref.current === o) : -1, [t, o]);
          return (0, P.jsx)(Ln, {
            ...e,
            ref: a,
            index: s
          })
        }),
        Ln = N.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            index: o,
            name: n,
            ...a
          } = e, s = Cn(Tn, t), i = Pn(Tn, t), [d, l] = N.useState(null), c = (0, xt.s)(r, e => l(e)), u = !d || s.form || !!d.closest("form"), f = (0, Kt.X)(d), p = s.values[o], v = void 0 === p ? 0 : An(p, s.min, s.max), y = function(e, r) {
            return r > 2 ? `Value ${e+1} of ${r}` : 2 === r ? ["Minimum", "Maximum"][e] : void 0
          }(o, s.values.length), b = f?.[i.size], m = b ? function(e, r, t) {
            const o = e / 2;
            return (o - Mn([0, 50], [0, o])(r) * t) * t
          }(b, v, i.direction) : 0;
          return N.useEffect(() => {
            if (d) return s.thumbs.add(d), () => {
              s.thumbs.delete(d)
            }
          }, [d, s.thumbs]), (0, P.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${v}% + ${m}px)`
            },
            children: [(0, P.jsx)(mn.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, P.jsx)(Ot.span, {
                role: "slider",
                "aria-label": e["aria-label"] || y,
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
                onFocus: (0, wt.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = o
                })
              })
            }), u && (0, P.jsx)(Vn, {
              name: n ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, o)]
          })
        });
      En.displayName = Tn;
      var Vn = N.forwardRef(({
        __scopeSlider: e,
        value: r,
        ...t
      }, o) => {
        const n = N.useRef(null),
          a = (0, xt.s)(n, o),
          s = (0, un.Z)(r);
        return N.useEffect(() => {
          const e = n.current;
          if (!e) return;
          const t = window.HTMLInputElement.prototype,
            o = Object.getOwnPropertyDescriptor(t, "value").set;
          if (s !== r && o) {
            const t = new Event("input", {
              bubbles: !0
            });
            o.call(e, r), e.dispatchEvent(t)
          }
        }, [s, r]), (0, P.jsx)(Ot.input, {
          style: {
            display: "none"
          },
          ...t,
          ref: a,
          defaultValue: r
        })
      });

      function An(e, r, t) {
        const o = 100 / (t - r) * (e - r);
        return (0, ln.q)(o, [0, 100])
      }

      function Mn(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }
      Vn.displayName = "RadioBubbleInput";
      var qn = jn,
        Fn = kn,
        Bn = In,
        Xn = En,
        Kn = "focusScope.autoFocusOnMount",
        Zn = "focusScope.autoFocusOnUnmount",
        Wn = {
          bubbles: !1,
          cancelable: !0
        },
        Hn = N.forwardRef((e, r) => {
          const {
            loop: t = !1,
            trapped: o = !1,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = N.useState(null), l = (0, Nt.c)(n), c = (0, Nt.c)(a), u = N.useRef(null), f = (0, xt.s)(r, e => d(e)), p = N.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          N.useEffect(() => {
            if (o) {
              let e = function(e) {
                  if (p.paused || !i) return;
                  const r = e.target;
                  i.contains(r) ? u.current = r : Yn(u.current, {
                    select: !0
                  })
                },
                r = function(e) {
                  if (p.paused || !i) return;
                  const r = e.relatedTarget;
                  null !== r && (i.contains(r) || Yn(u.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const r of e) r.removedNodes.length > 0 && Yn(i)
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
          }, [o, i, p.paused]), N.useEffect(() => {
            if (i) {
              Qn.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const r = new CustomEvent(Kn, Wn);
                i.addEventListener(Kn, l), i.dispatchEvent(r), r.defaultPrevented || (function(e, {
                  select: r = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const o of e)
                    if (Yn(o, {
                        select: r
                      }), document.activeElement !== t) return
                }(Gn(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Yn(i))
              }
              return () => {
                i.removeEventListener(Kn, l), setTimeout(() => {
                  const r = new CustomEvent(Zn, Wn);
                  i.addEventListener(Zn, c), i.dispatchEvent(r), r.defaultPrevented || Yn(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Zn, c), Qn.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const v = N.useCallback(e => {
            if (!t && !o) return;
            if (p.paused) return;
            const r = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              n = document.activeElement;
            if (r && n) {
              const r = e.currentTarget,
                [o, a] = function(e) {
                  const r = Gn(e);
                  return [Un(r, e), Un(r.reverse(), e)]
                }(r);
              o && a ? e.shiftKey || n !== a ? e.shiftKey && n === o && (e.preventDefault(), t && Yn(a, {
                select: !0
              })) : (e.preventDefault(), t && Yn(o, {
                select: !0
              })) : n === r && e.preventDefault()
            }
          }, [t, o, p.paused]);
          return (0, P.jsx)(Ot.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        });

      function Gn(e) {
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

      function Un(e, r) {
        for (const t of e)
          if (!$n(t, {
              upTo: r
            })) return t
      }

      function $n(e, {
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

      function Yn(e, {
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
      Hn.displayName = "FocusScope";
      var Qn = function() {
        let e = [];
        return {
          add(r) {
            const t = e[0];
            r !== t && t?.pause(), e = Jn(e, r), e.unshift(r)
          },
          remove(r) {
            e = Jn(e, r), e[0]?.resume()
          }
        }
      }();

      function Jn(e, r) {
        const t = [...e],
          o = t.indexOf(r);
        return -1 !== o && t.splice(o, 1), t
      }
      var ea = t(91685),
        ra = t(35328),
        ta = t(45787),
        oa = "Dialog",
        [na, aa] = (0, _t.A)(oa),
        [sa, ia] = na(oa),
        da = e => {
          const {
            __scopeDialog: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !0
          } = e, i = N.useRef(null), d = N.useRef(null), [l, c] = (0, mo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: oa
          });
          return (0, P.jsx)(sa, {
            scope: r,
            triggerRef: i,
            contentRef: d,
            contentId: (0, At.B)(),
            titleId: (0, At.B)(),
            descriptionId: (0, At.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: N.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: t
          })
        };
      da.displayName = oa;
      var la = "DialogTrigger",
        ca = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ia(la, t), a = (0, xt.s)(r, n.triggerRef);
          return (0, P.jsx)(Ot.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.contentId,
            "data-state": Da(n.open),
            ...o,
            ref: a,
            onClick: (0, wt.mK)(e.onClick, n.onOpenToggle)
          })
        });
      ca.displayName = la;
      var ua = "DialogPortal",
        [fa, pa] = na(ua, {
          forceMount: void 0
        }),
        va = e => {
          const {
            __scopeDialog: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = ia(ua, r);
          return (0, P.jsx)(fa, {
            scope: r,
            forceMount: t,
            children: N.Children.map(o, e => (0, P.jsx)(yo, {
              present: t || a.open,
              children: (0, P.jsx)(vo, {
                asChild: !0,
                container: n,
                children: e
              })
            }))
          })
        };
      va.displayName = ua;
      var ya = "DialogOverlay",
        ba = N.forwardRef((e, r) => {
          const t = pa(ya, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ia(ya, e.__scopeDialog);
          return a.modal ? (0, P.jsx)(yo, {
            present: o || a.open,
            children: (0, P.jsx)(ha, {
              ...n,
              ref: r
            })
          }) : null
        });
      ba.displayName = ya;
      var ma = (0, jt.TL)("DialogOverlay.RemoveScroll"),
        ha = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ia(ya, t);
          return (0, P.jsx)(ra.A, {
            as: ma,
            allowPinchZoom: !0,
            shards: [n.contentRef],
            children: (0, P.jsx)(Ot.div, {
              "data-state": Da(n.open),
              ...o,
              ref: r,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        ga = "DialogContent",
        wa = N.forwardRef((e, r) => {
          const t = pa(ga, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ia(ga, e.__scopeDialog);
          return (0, P.jsx)(yo, {
            present: o || a.open,
            children: a.modal ? (0, P.jsx)(xa, {
              ...n,
              ref: r
            }) : (0, P.jsx)(_a, {
              ...n,
              ref: r
            })
          })
        });
      wa.displayName = ga;
      var xa = N.forwardRef((e, r) => {
          const t = ia(ga, e.__scopeDialog),
            o = N.useRef(null),
            n = (0, xt.s)(r, t.contentRef, o);
          return N.useEffect(() => {
            const e = o.current;
            if (e) return (0, ta.Eq)(e)
          }, []), (0, P.jsx)(Ca, {
            ...e,
            ref: n,
            trapFocus: t.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, wt.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, wt.mK)(e.onPointerDownOutside, e => {
              const r = e.detail.originalEvent,
                t = 0 === r.button && !0 === r.ctrlKey;
              (2 === r.button || t) && e.preventDefault()
            }),
            onFocusOutside: (0, wt.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        _a = N.forwardRef((e, r) => {
          const t = ia(ga, e.__scopeDialog),
            o = N.useRef(!1),
            n = N.useRef(!1);
          return (0, P.jsx)(Ca, {
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
        Ca = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            ...s
          } = e, i = ia(ga, t), d = N.useRef(null), l = (0, xt.s)(r, d);
          return (0, ea.Oh)(), (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)(Hn, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: n,
              onUnmountAutoFocus: a,
              children: (0, P.jsx)(zt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Da(i.open),
                ...s,
                ref: l,
                onDismiss: () => i.onOpenChange(!1)
              })
            }), (0, P.jsxs)(P.Fragment, {
              children: [(0, P.jsx)(Ta, {
                titleId: i.titleId
              }), (0, P.jsx)(Ea, {
                contentRef: d,
                descriptionId: i.descriptionId
              })]
            })]
          })
        }),
        ja = "DialogTitle",
        Oa = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ia(ja, t);
          return (0, P.jsx)(Ot.h2, {
            id: n.titleId,
            ...o,
            ref: r
          })
        });
      Oa.displayName = ja;
      var Pa = "DialogDescription",
        Ra = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ia(Pa, t);
          return (0, P.jsx)(Ot.p, {
            id: n.descriptionId,
            ...o,
            ref: r
          })
        });
      Ra.displayName = Pa;
      var Na = "DialogClose",
        Sa = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ia(Na, t);
          return (0, P.jsx)(Ot.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, wt.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });

      function Da(e) {
        return e ? "open" : "closed"
      }
      Sa.displayName = Na;
      var ka = "DialogTitleWarning",
        [za, Ia] = (0, _t.q)(ka, {
          contentName: ga,
          titleName: ja,
          docsSlug: "dialog"
        }),
        Ta = ({
          titleId: e
        }) => {
          const r = Ia(ka),
            t = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
          return N.useEffect(() => {
            e && (document.getElementById(e) || console.error(t))
          }, [t, e]), null
        },
        Ea = ({
          contentRef: e,
          descriptionId: r
        }) => {
          const t = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ia("DialogDescriptionWarning").contentName}}.`;
          return N.useEffect(() => {
            const o = e.current?.getAttribute("aria-describedby");
            r && o && (document.getElementById(r) || console.warn(t))
          }, [t, e, r]), null
        },
        La = da,
        Va = ca,
        Aa = va,
        Ma = ba,
        qa = wa,
        Fa = Oa,
        Ba = Ra,
        Xa = Sa;
      const Ka = (0, N.createContext)({
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
        Za = ({
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
              } = ve();
              return e
            })(),
            p = (0, ue.rl)(),
            v = (0, N.useRef)(null),
            y = (0, N.useRef)(null),
            b = (0, N.useRef)(null),
            m = (0, N.useRef)(null),
            h = (0, N.useRef)(null),
            g = (0, N.useRef)(null),
            w = (0, N.useRef)(null),
            x = (0, N.useRef)(null),
            _ = (0, N.useRef)(null),
            C = (0, N.useRef)(null),
            j = (0, N.useRef)(null),
            O = (0, N.useRef)(null),
            R = (0, N.useRef)(null),
            S = (0, N.useRef)(null),
            D = (0, N.useRef)(null),
            k = (0, N.useRef)(null),
            z = (0, N.useRef)(null),
            I = (0, N.useRef)(null),
            T = (0, N.useRef)(null),
            [E = !1, L] = (0, ue.ic)({
              prop: r || o,
              onChange: t
            }),
            V = (0, N.useRef)(null);
          return V.current || (V.current = new vt({
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
          })), (0, P.jsx)(tt.Dk, {
            messages: ot,
            locale: f,
            children: (0, P.jsx)(Ka.Provider, {
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
                placeholderRef: C,
                captionRef: j,
                controlsRef: O,
                closeRef: R,
                zoomRef: S,
                zoomInRef: D,
                zoomSliderRef: k,
                zoomOutRef: z,
                resetRef: I,
                downloadRef: T,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: V.current
              },
              children: (0, P.jsx)(Ha, {
                ...u
              })
            })
          })
        },
        Wa = (0, N.createContext)({
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
        Ha = ({
          ...e
        }) => {
          const {
            open: r
          } = (0, N.useContext)(Ka), {
            onOpenChange: t,
            openAnim: o,
            close: n
          } = (() => {
            const {
              contextSafe: e
            } = (0, Lr.L)(), {
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
            } = (0, N.useContext)(Ka), p = (0, N.useRef)(null);
            p.current || (p.current = Er.os.timeline({
              defaults: Jr
            }));
            const v = (0, N.useCallback)(e => {
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
                }), d.current && i.current && (r.opening = !0, r.setup(i.current, d.current), r.zoomAndPanToInitial(), Er.os.set([u.current, f.current], {
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
                }), Er.os.set([f.current], {
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
                  [rt]: "none"
                }, {
                  opacity: () => r.getControlsOpacity(),
                  [rt]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), r.opening = !1, r.dispatch("zoom"), r.closing || await Ar(f.current), r.closing || (Er.os.set([f.current], {
                  visibility: "visible",
                  ...et
                }), Er.os.set([u.current], {
                  visibility: "hidden",
                  ...et
                }))))
              }),
              b = e(async () => {
                r.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              m = (0, N.useCallback)(async e => {
                e || (window.addEventListener("click", v), await b(), window.removeEventListener("click", v)), t(e)
              }, [t]),
              h = (0, N.useCallback)(() => m(!1), [m]);
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
            } = (0, Lr.L)(), {
              slide: t,
              imageRef: o,
              zoomPanRef: n,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, N.useContext)(Ka), d = r(async e => {
              t.zoomTo(e), Er.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...et
              })
            }), l = r(async () => {
              t.zoomTo(t.currZoomLevel + t.zoomLevels.step), Er.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...et
              })
            }), c = r(async () => {
              t.zoomTo(t.currZoomLevel - t.zoomLevels.step), Er.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...et
              })
            }), u = r(async () => {
              t.zoomAndPanToInitial(), Er.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...et
              })
            }), f = r(async () => {
              if (t.closing) return;
              t.toggleControls();
              const e = t.getControlsOpacity(),
                r = 1 === e ? "auto" : "none";
              Er.os.to([a.current], {
                opacity: e,
                [rt]: r,
                ...et
              })
            }), p = r(async () => {
              Er.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...et
              })
            }), v = (0, N.useCallback)(() => {
              o.current && n.current && (Er.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...et
              }), Er.os.set([o.current, i.current], {
                ...t.getUpdatedContentSize(),
                ...et
              }), Er.os.set([s.current], {
                width: t.panAreaSize.w,
                height: t.panAreaSize.h
              }))
            }, []);
            return (0, N.useEffect)(() => (t.addEventListener("close", e), t.addEventListener("animate", p), t.addEventListener("toggle-controls", f), t.addEventListener("resize", v), window.addEventListener("resize", t.resize.bind(t)), () => {
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
          return (0, P.jsx)(Wa.Provider, {
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
            children: (0, P.jsx)(La, {
              ...u
            })
          })
        },
        Ga = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const n = (0, tt.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, N.useContext)(Ka),
            d = (0, ue.UP)(a, o),
            l = (0, k.v6)(t, {
              "data-testid": e,
              "aria-label": n.formatMessage(bt.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, P.jsx)(Va, {
            ref: d,
            ...l,
            children: (0, P.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, P.jsx)(fe.xV, {
                children: r
              })
            })
          })
        }),
        Ua = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            thumbnailRef: n
          } = (0, N.useContext)(Ka), a = (0, ue.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = r ? fe.DX : "img";
          return (0, P.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        $a = (0, N.forwardRef)(function({
          asChild: e,
          ...r
        }, t) {
          const {
            openIconRef: o
          } = (0, N.useContext)(Ka), n = (0, ue.UP)(o, t), a = (0, k.v6)(r, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? fe.DX : ke.Maximize2;
          return (0, P.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Ya = ({
          ...e
        }) => (0, P.jsx)(Aa, {
          ...e
        }),
        Qa = (0, N.forwardRef)(function({
          testId: e,
          ...r
        }, t) {
          const {
            overlayRef: o
          } = (0, N.useContext)(Ka), n = (0, ue.UP)(o, t), a = (0, k.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, P.jsx)(Ma, {
            ref: n,
            ...a
          })
        }),
        Ja = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            openAnim: n
          } = (0, N.useContext)(Wa), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, N.useContext)(Ka), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, N.useContext)(Ka), [r, t] = (0, N.useState)(e.getCursor()), o = (0, N.useCallback)(() => {
              t(e.getCursor())
            }, []);
            return (0, N.useEffect)(() => (e.addEventListener("zoom", o), () => {
              e.removeEventListener("zoom", o)
            }), [o]), {
              cursor: r
            }
          })(), l = (0, yt.m)("dark"), c = (0, ue.UP)(a, o), u = (0, k.v6)(t, {
            "data-testid": e,
            onOpenAutoFocus: n,
            onCloseAutoFocus: e => ((e, r) => {
              e?.preventDefault(), r.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, De.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, P.jsxs)(qa, {
            ref: c,
            ...u,
            children: [(0, P.jsx)(fe.s6, {
              children: (0, P.jsx)(Fa, {
                children: s
              })
            }), r]
          })
        }),
        es = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            containerRef: n
          } = (0, N.useContext)(Ka);
          (() => {
            const {
              contextSafe: e
            } = (0, Lr.L)(), {
              toggleControls: r
            } = (0, N.useContext)(Wa), {
              containerRef: t,
              zoomPanRef: o,
              overlayRef: n,
              controlsRef: a,
              slide: s
            } = (0, N.useContext)(Ka), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Er.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...et
              }), Er.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...et
              }), Er.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...et
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Er.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...et
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Er.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...et
              }), Er.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...et
              }), Er.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...et
              })))
            }), c = (0, N.useCallback)(() => {
              s.controlsVisible || r()
            }, [, r]);
            (0, ue.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Vr.useGesture)({
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
          const a = (0, ue.UP)(n, o),
            s = (0, k.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, P.jsx)("div", {
            ref: a,
            ...s,
            children: (0, P.jsxs)(rs, {
              children: [(0, P.jsx)(ts, {}), r]
            })
          })
        }),
        rs = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            zoomPanRef: n
          } = (0, N.useContext)(Ka), a = (0, ue.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = r ? fe.DX : "div";
          return (0, P.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ts = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            placeholderRef: n
          } = (0, N.useContext)(Ka), a = (0, ue.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = r ? fe.DX : "img";
          return (0, P.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        os = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            imageRef: n
          } = (0, N.useContext)(Ka), a = (0, ue.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = r ? fe.DX : "img";
          return (0, P.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ns = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            captionRef: n
          } = (0, N.useContext)(Ka), a = (0, ue.UP)(n, o), s = (0, k.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = r ? fe.DX : "p";
          return (0, P.jsx)(Ba, {
            asChild: !0,
            children: (0, P.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        as = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            controlsRef: n
          } = (0, N.useContext)(Ka);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: r,
              zoomOut: t,
              resetZoom: o,
              close: n
            } = (0, N.useContext)(Wa);
            (0, Kr.vC)(["+", "=", "add", "plus"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Kr.vC)(["minus", "subtract"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Kr.vC)("r", o, {
              enabled: e,
              preventDefault: !0
            }), (0, Kr.vC)("esc", n, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, ue.UP)(n, o),
            s = (0, k.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = r ? fe.DX : "div";
          return (0, P.jsx)(Kr.Hb, {
            children: (0, P.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        ss = ({
          content: e,
          metadata: r,
          enabled: t = !0,
          children: o,
          ...n
        }) => {
          if (!t) return (0, P.jsx)(P.Fragment, {
            children: o
          });
          const a = (0, k.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, n);
          return (0, P.jsxs)(on, {
            delayDuration: 0,
            children: [(0, P.jsx)(nn, {
              children: o
            }), (0, P.jsxs)(an, {
              ...a,
              children: [(0, P.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, r && (0, P.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: r
                })]
              }), (0, P.jsx)(sn, {})]
            })]
          })
        },
        is = (0, N.forwardRef)(function({
          ...e
        }, r) {
          const t = (0, k.v6)(e, {
            isInline: !0
          });
          return (0, P.jsx)(ht, {
            ref: r,
            ...t
          })
        }),
        ds = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          children: o,
          ...n
        }, a) {
          const s = (0, tt.tz)(),
            {
              zoomRef: i
            } = (0, N.useContext)(Ka),
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
              } = (0, N.useContext)(Ka), {
                zoomIn: r,
                zoomOut: t,
                zoomTo: o
              } = (0, N.useContext)(Wa), [n, a] = (0, N.useState)(!1), [s, i] = (0, N.useState)(!1), [d, l] = (0, N.useState)(0), [c, u] = (0, N.useState)(0), [f, p] = (0, N.useState)(0), v = (0, N.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), y = (0, N.useCallback)(([e]) => {
                o(e / 100)
              }, [o]);
              return (0, N.useEffect)(() => (e.addEventListener("zoom", v), () => {
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
            b = (0, ue.UP)(i, a),
            m = (0, k.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            h = r ? fe.DX : "div";
          return (0, P.jsxs)(h, {
            ref: b,
            ...m,
            children: [(0, P.jsx)(ss, {
              side: "left",
              enabled: t,
              content: s.formatMessage(bt.ZoomInButtonLabel),
              metadata: s.formatMessage(bt.ZoomInButtonTooltip, {
                shortcut: (0, P.jsx)(is, {
                  shortcut: "+"
                })
              }),
              children: (0, P.jsx)(Qe, {
                label: s.formatMessage(bt.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Qr({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, P.jsxs)(qn, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, P.jsx)(Fn, {
                className: "foundry_1a74xwbu",
                children: (0, P.jsx)(Bn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, P.jsx)(ss, {
                side: "left",
                enabled: t,
                content: s.formatMessage(bt.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, P.jsx)(Xn, {
                  className: "foundry_1a74xwbw",
                  children: (0, P.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, P.jsx)(ss, {
              side: "left",
              enabled: t,
              content: s.formatMessage(bt.ZoomOutButtonLabel),
              metadata: s.formatMessage(bt.ZoomOutButtonTooltip, {
                shortcut: (0, P.jsx)(is, {
                  shortcut: "-"
                })
              }),
              children: (0, P.jsx)(Qe, {
                label: s.formatMessage(bt.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Qr({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, P.jsx)(fe.xV, {
              children: o
            })]
          })
        }),
        ls = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          ...o
        }, n) {
          const a = (0, tt.tz)(),
            {
              closeRef: s
            } = (0, N.useContext)(Ka),
            i = (0, ue.UP)(s, n),
            d = (0, k.v6)(o, {
              "data-testid": e,
              className: Yr({
                styled: !r
              })
            }),
            l = r ? (0, P.jsx)(fe.DX, {
              ref: i,
              ...d
            }) : (0, P.jsx)(Qe, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(bt.CloseButtonLabel)
            });
          return (0, P.jsx)(ss, {
            side: "right",
            enabled: t,
            content: a.formatMessage(bt.CloseButtonLabel),
            metadata: a.formatMessage(bt.CloseButtonTooltip, {
              shortcut: (0, P.jsx)(is, {
                shortcut: "Esc"
              })
            }),
            children: (0, P.jsx)(Xa, {
              asChild: !0,
              children: l
            })
          })
        }),
        cs = (0, N.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, tt.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: r
              } = (0, N.useContext)(Ka), {
                contextSafe: t
              } = (0, Lr.L)(), {
                resetZoom: o
              } = (0, N.useContext)(Wa), [n, a] = (0, N.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = t(e => {
                Er.os.to([r.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...et
                })
              }), i = (0, N.useCallback)(() => {
                const r = e.currZoomLevel !== e.zoomLevels.initial;
                a(r), s(r)
              }, [a]);
              return (0, N.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !n,
                onPress: o,
                "aria-hidden": !n
              }
            })(),
            {
              resetRef: s
            } = (0, N.useContext)(Ka),
            i = (0, ue.UP)(s, o),
            d = (0, k.v6)(t, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, P.jsx)(ss, {
            side: "left",
            enabled: r,
            content: n.formatMessage(bt.ResetZoomButtonLabel),
            metadata: n.formatMessage(bt.ResetZoomButtonTooltip, {
              shortcut: (0, P.jsx)(is, {
                shortcut: "R"
              })
            }),
            children: (0, P.jsx)(Qe, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: n.formatMessage(bt.ResetZoomButtonLabel)
            })
          })
        }),
        us = (0, N.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, tt.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, N.useContext)(Ka),
            i = (0, ue.UP)(a, o),
            d = (0, k.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, P.jsx)(ss, {
            side: "left",
            enabled: r,
            content: n.formatMessage(bt.DownloadButtonTooltip),
            children: (0, P.jsx)(Qe, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: n.formatMessage(bt.DownloadButtonTooltip),
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
        fs = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var ps = t(13258);

      function vs(e) {
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

      function ys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function bs(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ys(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = vs(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ms(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var hs = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        gs = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = bs(bs({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) hs(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ms(e.variantClassNames, e => ms(e, e => e.split(" ")[0]))
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
        ws = t(64976);
      const xs = (0, N.createContext)(null);

      function _s() {
        const e = (0, N.useContext)(xs);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Cs = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          descriptionId: o = "",
          errorId: n = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, k.v6)({
              className: gs({
                status: a
              }),
              "data-testid": r
            }, s),
            l = t ? fe.DX : "div";
          return (0, P.jsx)(xs.Provider, {
            value: {
              descriptionId: o,
              errorId: n,
              status: a,
              ...s
            },
            children: (0, P.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        js = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const {
            status: n
          } = _s(), a = (0, k.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, t), s = {
            success: ws.Check,
            invalid: ws.X,
            neutral: ws.TriangleAlert
          }, i = r ? fe.DX : s[n];
          return (0, P.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        Os = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            errorId: s
          } = _s(), i = (0, k.v6)({
            "data-testid": r,
            id: s || a
          }, o), d = t ? fe.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        });
      var Ps = "ScrollArea",
        [Rs, Ns] = (0, _t.A)(Ps),
        [Ss, Ds] = Rs(Ps),
        ks = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            type: o = "hover",
            dir: n,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = N.useState(null), [l, c] = N.useState(null), [u, f] = N.useState(null), [p, v] = N.useState(null), [y, b] = N.useState(null), [m, h] = N.useState(0), [g, w] = N.useState(0), [x, _] = N.useState(!1), [C, j] = N.useState(!1), O = (0, xt.s)(r, e => d(e)), R = (0, cn.jH)(n);
          return (0, P.jsx)(Ss, {
            scope: t,
            type: o,
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
            onScrollbarYChange: b,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: h,
            onCornerHeightChange: w,
            children: (0, P.jsx)(Ot.div, {
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
      ks.displayName = Ps;
      var zs = "ScrollAreaViewport",
        Is = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            children: o,
            nonce: n,
            ...a
          } = e, s = Ds(zs, t), i = N.useRef(null), d = (0, xt.s)(r, i, s.onViewportChange);
          return (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: n
            }), (0, P.jsx)(Ot.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, P.jsx)("div", {
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
      Is.displayName = zs;
      var Ts = "ScrollAreaScrollbar",
        Es = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ds(Ts, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = n, i = "horizontal" === e.orientation;
          return N.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === n.type ? (0, P.jsx)(Ls, {
            ...o,
            ref: r,
            forceMount: t
          }) : "scroll" === n.type ? (0, P.jsx)(Vs, {
            ...o,
            ref: r,
            forceMount: t
          }) : "auto" === n.type ? (0, P.jsx)(As, {
            ...o,
            ref: r,
            forceMount: t
          }) : "always" === n.type ? (0, P.jsx)(Ms, {
            ...o,
            ref: r
          }) : null
        });
      Es.displayName = Ts;
      var Ls = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ds(Ts, e.__scopeScrollArea), [a, s] = N.useState(!1);
          return N.useEffect(() => {
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
          }, [n.scrollArea, n.scrollHideDelay]), (0, P.jsx)(yo, {
            present: t || a,
            children: (0, P.jsx)(As, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: r
            })
          })
        }),
        Vs = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ds(Ts, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = ni(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
              const e = window.setTimeout(() => d("HIDE"), n.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, n.scrollHideDelay, d]), N.useEffect(() => {
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
          }, [n.viewport, a, d, s]), (0, P.jsx)(yo, {
            present: t || "hidden" !== i,
            children: (0, P.jsx)(Ms, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...o,
              ref: r,
              onPointerEnter: (0, wt.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, wt.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        As = N.forwardRef((e, r) => {
          const t = Ds(Ts, e.__scopeScrollArea),
            {
              forceMount: o,
              ...n
            } = e,
            [a, s] = N.useState(!1),
            i = "horizontal" === e.orientation,
            d = ni(() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(i ? e : r)
              }
            }, 10);
          return ai(t.viewport, d), ai(t.content, d), (0, P.jsx)(yo, {
            present: o || a,
            children: (0, P.jsx)(Ms, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: r
            })
          })
        }),
        Ms = N.forwardRef((e, r) => {
          const {
            orientation: t = "vertical",
            ...o
          } = e, n = Ds(Ts, e.__scopeScrollArea), a = N.useRef(null), s = N.useRef(0), [i, d] = N.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Qs(i.viewport, i.content), c = {
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
              const n = Js(t),
                a = r || n / 2,
                s = n - a,
                i = t.scrollbar.paddingStart + a,
                d = t.scrollbar.size - t.scrollbar.paddingEnd - s,
                l = t.content - t.viewport;
              return ri([i, d], "ltr" === o ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, r)
          }
          return "horizontal" === t ? (0, P.jsx)(qs, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = ei(n.viewport.scrollLeft, i, n.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              n.viewport && (n.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              n.viewport && (n.viewport.scrollLeft = u(e, n.dir))
            }
          }) : "vertical" === t ? (0, P.jsx)(Fs, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = ei(n.viewport.scrollTop, i);
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
        qs = N.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = Ds(Ts, e.__scopeScrollArea), [s, i] = N.useState(), d = N.useRef(null), l = (0, xt.s)(r, d, a.onScrollbarXChange);
          return N.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, P.jsx)(Ks, {
            "data-orientation": "horizontal",
            ...n,
            ref: l,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Js(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.x),
            onDragScroll: r => e.onDragScroll(r.x),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollLeft + r.deltaX;
                e.onWheelScroll(o), ti(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Ys(s.paddingLeft),
                  paddingEnd: Ys(s.paddingRight)
                }
              })
            }
          })
        }),
        Fs = N.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = Ds(Ts, e.__scopeScrollArea), [s, i] = N.useState(), d = N.useRef(null), l = (0, xt.s)(r, d, a.onScrollbarYChange);
          return N.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, P.jsx)(Ks, {
            "data-orientation": "vertical",
            ...n,
            ref: l,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Js(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.y),
            onDragScroll: r => e.onDragScroll(r.y),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollTop + r.deltaY;
                e.onWheelScroll(o), ti(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Ys(s.paddingTop),
                  paddingEnd: Ys(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Bs, Xs] = Rs(Ts),
        Ks = N.forwardRef((e, r) => {
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
          } = e, p = Ds(Ts, t), [v, y] = N.useState(null), b = (0, xt.s)(r, e => y(e)), m = N.useRef(null), h = N.useRef(""), g = p.viewport, w = o.content - o.viewport, x = (0, Nt.c)(c), _ = (0, Nt.c)(d), C = ni(u, 10);

          function j(e) {
            if (m.current) {
              const r = e.clientX - m.current.left,
                t = e.clientY - m.current.top;
              l({
                x: r,
                y: t
              })
            }
          }
          return N.useEffect(() => {
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
          }, [g, v, w, x]), N.useEffect(_, [o, _]), ai(v, C), ai(p.content, C), (0, P.jsx)(Bs, {
            scope: t,
            scrollbar: v,
            hasThumb: n,
            onThumbChange: (0, Nt.c)(a),
            onThumbPointerUp: (0, Nt.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, Nt.c)(i),
            children: (0, P.jsx)(Ot.div, {
              ...f,
              ref: b,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, wt.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = v.getBoundingClientRect(), h.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, wt.mK)(e.onPointerMove, j),
              onPointerUp: (0, wt.mK)(e.onPointerUp, e => {
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = h.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        Zs = "ScrollAreaThumb",
        Ws = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Xs(Zs, e.__scopeScrollArea);
          return (0, P.jsx)(yo, {
            present: t || n.hasThumb,
            children: (0, P.jsx)(Hs, {
              ref: r,
              ...o
            })
          })
        }),
        Hs = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            style: o,
            ...n
          } = e, a = Ds(Zs, t), s = Xs(Zs, t), {
            onThumbPositionChange: i
          } = s, d = (0, xt.s)(r, e => s.onThumbChange(e)), l = N.useRef(void 0), c = ni(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return N.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const r = () => {
                if (c(), !l.current) {
                  const r = oi(e, i);
                  l.current = r, i()
                }
              };
              return i(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [a.viewport, c, i]), (0, P.jsx)(Ot.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...n,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: (0, wt.mK)(e.onPointerDownCapture, e => {
              const r = e.target.getBoundingClientRect(),
                t = e.clientX - r.left,
                o = e.clientY - r.top;
              s.onThumbPointerDown({
                x: t,
                y: o
              })
            }),
            onPointerUp: (0, wt.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Ws.displayName = Zs;
      var Gs = "ScrollAreaCorner",
        Us = N.forwardRef((e, r) => {
          const t = Ds(Gs, e.__scopeScrollArea),
            o = Boolean(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && o ? (0, P.jsx)($s, {
            ...e,
            ref: r
          }) : null
        });
      Us.displayName = Gs;
      var $s = N.forwardRef((e, r) => {
        const {
          __scopeScrollArea: t,
          ...o
        } = e, n = Ds(Gs, t), [a, s] = N.useState(0), [i, d] = N.useState(0), l = Boolean(a && i);
        return ai(n.scrollbarX, () => {
          const e = n.scrollbarX?.offsetHeight || 0;
          n.onCornerHeightChange(e), d(e)
        }), ai(n.scrollbarY, () => {
          const e = n.scrollbarY?.offsetWidth || 0;
          n.onCornerWidthChange(e), s(e)
        }), l ? (0, P.jsx)(Ot.div, {
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

      function Ys(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Qs(e, r) {
        const t = e / r;
        return isNaN(t) ? 0 : t
      }

      function Js(e) {
        const r = Qs(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          o = (e.scrollbar.size - t) * r;
        return Math.max(o, 18)
      }

      function ei(e, r, t = "ltr") {
        const o = Js(r),
          n = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
          a = r.scrollbar.size - n,
          s = r.content - r.viewport,
          i = a - o,
          d = "ltr" === t ? [0, s] : [-1 * s, 0],
          l = (0, ln.q)(e, d);
        return ri([0, s], [0, i])(l)
      }

      function ri(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function ti(e, r) {
        return e > 0 && e < r
      }
      var oi = (e, r = () => {}) => {
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

      function ni(e, r) {
        const t = (0, Nt.c)(e),
          o = N.useRef(0);
        return N.useEffect(() => () => window.clearTimeout(o.current), []), N.useCallback(() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(t, r)
        }, [t, r])
      }

      function ai(e, r) {
        const t = (0, Nt.c)(r);
        (0, Xt.N)(() => {
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
      var si = ks,
        ii = Is,
        di = Es,
        li = Ws,
        ci = Us,
        ui = [" ", "Enter", "ArrowUp", "ArrowDown"],
        fi = [" ", "Enter"],
        pi = "Select",
        [vi, yi, bi] = fn(pi),
        [mi, hi] = (0, _t.A)(pi, [bi, Ht]),
        gi = Ht(),
        [wi, xi] = mi(pi),
        [_i, Ci] = mi(pi),
        ji = e => {
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
            form: v
          } = e, y = gi(r), [b, m] = N.useState(null), [h, g] = N.useState(null), [w, x] = N.useState(!1), _ = (0, cn.jH)(l), [C, j] = (0, mo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: pi
          }), [O, R] = (0, mo.i)({
            prop: s,
            defaultProp: i,
            onChange: d,
            caller: pi
          }), S = N.useRef(null), D = !b || v || !!b.closest("form"), [k, z] = N.useState(new Set), I = Array.from(k).map(e => e.props.value).join(";");
          return (0, P.jsx)(co, {
            ...y,
            children: (0, P.jsxs)(wi, {
              required: p,
              scope: r,
              trigger: b,
              onTriggerChange: m,
              valueNode: h,
              onValueNodeChange: g,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: x,
              contentId: (0, At.B)(),
              value: O,
              onValueChange: R,
              open: C,
              onOpenChange: j,
              dir: _,
              triggerPointerDownPosRef: S,
              disabled: f,
              children: [(0, P.jsx)(vi.Provider, {
                scope: r,
                children: (0, P.jsx)(_i, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: N.useCallback(e => {
                    z(r => new Set(r).add(e))
                  }, []),
                  onNativeOptionRemove: N.useCallback(e => {
                    z(r => {
                      const t = new Set(r);
                      return t.delete(e), t
                    })
                  }, []),
                  children: t
                })
              }), D ? (0, P.jsxs)(ad, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: u,
                value: O,
                onChange: e => R(e.target.value),
                disabled: f,
                form: v,
                children: [void 0 === O ? (0, P.jsx)("option", {
                  value: ""
                }) : null, Array.from(k)]
              }, I) : null]
            })
          })
        };
      ji.displayName = pi;
      var Oi = "SelectTrigger",
        Pi = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            disabled: o = !1,
            ...n
          } = e, a = gi(t), s = xi(Oi, t), i = s.disabled || o, d = (0, xt.s)(r, s.onTriggerChange), l = yi(t), c = N.useRef("touch"), [u, f, p] = id(e => {
            const r = l().filter(e => !e.disabled),
              t = r.find(e => e.value === s.value),
              o = dd(r, e, t);
            void 0 !== o && s.onValueChange(o.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, P.jsx)(uo, {
            asChild: !0,
            ...a,
            children: (0, P.jsx)(Ot.button, {
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
              "data-placeholder": sd(s.value) ? "" : void 0,
              ...n,
              ref: d,
              onClick: (0, wt.mK)(n.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, wt.mK)(n.onPointerDown, e => {
                c.current = e.pointerType;
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, wt.mK)(n.onKeyDown, e => {
                const r = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), r && " " === e.key || ui.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      Pi.displayName = Oi;
      var Ri = "SelectValue",
        Ni = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = xi(Ri, t), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, xt.s)(r, d.onValueNodeChange);
          return (0, Xt.N)(() => {
            l(c)
          }, [l, c]), (0, P.jsx)(Ot.span, {
            ...i,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: sd(d.value) ? (0, P.jsx)(P.Fragment, {
              children: s
            }) : a
          })
        });
      Ni.displayName = Ri;
      var Si = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          ...n
        } = e;
        return (0, P.jsx)(Ot.span, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          children: o || "▼"
        })
      });
      Si.displayName = "SelectIcon";
      var Di = e => (0, P.jsx)(vo, {
        asChild: !0,
        ...e
      });
      Di.displayName = "SelectPortal";
      var ki = "SelectContent",
        zi = N.forwardRef((e, r) => {
          const t = xi(ki, e.__scopeSelect),
            [o, n] = N.useState();
          if ((0, Xt.N)(() => {
              n(new DocumentFragment)
            }, []), !t.open) {
            const r = o;
            return r ? Ct.createPortal((0, P.jsx)(Ti, {
              scope: e.__scopeSelect,
              children: (0, P.jsx)(vi.Slot, {
                scope: e.__scopeSelect,
                children: (0, P.jsx)("div", {
                  children: e.children
                })
              })
            }), r) : null
          }
          return (0, P.jsx)(Vi, {
            ...e,
            ref: r
          })
        });
      zi.displayName = ki;
      var Ii = 10,
        [Ti, Ei] = mi(ki),
        Li = (0, jt.TL)("SelectContent.RemoveScroll"),
        Vi = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
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
          } = e, h = xi(ki, t), [g, w] = N.useState(null), [x, _] = N.useState(null), C = (0, xt.s)(r, e => w(e)), [j, O] = N.useState(null), [R, S] = N.useState(null), D = yi(t), [k, z] = N.useState(!1), I = N.useRef(!1);
          N.useEffect(() => {
            if (g) return (0, ta.Eq)(g)
          }, [g]), (0, ea.Oh)();
          const T = N.useCallback(e => {
              const [r, ...t] = D().map(e => e.ref.current), [o] = t.slice(-1), n = document.activeElement;
              for (const t of e) {
                if (t === n) return;
                if (t?.scrollIntoView({
                    block: "nearest"
                  }), t === r && x && (x.scrollTop = 0), t === o && x && (x.scrollTop = x.scrollHeight), t?.focus(), document.activeElement !== n) return
              }
            }, [D, x]),
            E = N.useCallback(() => T([j, g]), [T, j, g]);
          N.useEffect(() => {
            k && E()
          }, [k, E]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: V
          } = h;
          N.useEffect(() => {
            if (g) {
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
                  e.x <= 10 && e.y <= 10 ? t.preventDefault() : g.contains(t.target) || L(!1), document.removeEventListener("pointermove", r), V.current = null
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
          }, [g, L, V]), N.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [A, M] = id(e => {
            const r = D().filter(e => !e.disabled),
              t = r.find(e => e.ref.current === document.activeElement),
              o = dd(r, e, t);
            o && setTimeout(() => o.ref.current.focus())
          }), q = N.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== h.value && h.value === r || o) && (O(e), o && (I.current = !0))
          }, [h.value]), F = N.useCallback(() => g?.focus(), [g]), B = N.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== h.value && h.value === r || o) && S(e)
          }, [h.value]), X = "popper" === o ? Mi : Ai, K = X === Mi ? {
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
          return (0, P.jsx)(Ti, {
            scope: t,
            content: g,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: q,
            selectedItem: j,
            onItemLeave: F,
            itemTextRefCallback: B,
            focusSelectedItem: E,
            selectedItemText: R,
            position: o,
            isPositioned: k,
            searchRef: A,
            children: (0, P.jsx)(ra.A, {
              as: Li,
              allowPinchZoom: !0,
              children: (0, P.jsx)(Hn, {
                asChild: !0,
                trapped: h.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, wt.mK)(n, e => {
                  h.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, P.jsx)(zt, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => h.onOpenChange(!1),
                  children: (0, P.jsx)(X, {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...m,
                    ...K,
                    onPlaced: () => z(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: (0, wt.mK)(m.onKeyDown, e => {
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
      var Ai = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onPlaced: o,
          ...n
        } = e, a = xi(ki, t), s = Ei(ki, t), [i, d] = N.useState(null), [l, c] = N.useState(null), u = (0, xt.s)(r, e => c(e)), f = yi(t), p = N.useRef(!1), v = N.useRef(!0), {
          viewport: y,
          selectedItem: b,
          selectedItemText: m,
          focusSelectedItem: h
        } = s, g = N.useCallback(() => {
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
                c = window.innerWidth - Ii,
                u = (0, ln.q)(a, [Ii, Math.max(Ii, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const o = r.right - n.right,
                a = window.innerWidth - t.right - o,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - Ii,
                u = (0, ln.q)(a, [Ii, Math.max(Ii, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * Ii,
              c = y.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              h = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = v + h + c + parseInt(u.paddingBottom, 10) + g,
              x = Math.min(5 * b.offsetHeight, w),
              _ = window.getComputedStyle(y),
              C = parseInt(_.paddingTop, 10),
              j = parseInt(_.paddingBottom, 10),
              O = e.top + e.height / 2 - Ii,
              P = d - O,
              R = b.offsetHeight / 2,
              N = v + h + (b.offsetTop + R),
              S = w - N;
            if (N <= O) {
              const e = s.length > 0 && b === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const r = l.clientHeight - y.offsetTop - y.offsetHeight,
                t = N + Math.max(P, R + (e ? j : 0) + r + g);
              i.style.height = t + "px"
            } else {
              const e = s.length > 0 && b === s[0].ref.current;
              i.style.top = "0px";
              const r = Math.max(O, v + y.offsetTop + (e ? C : 0) + R) + S;
              i.style.height = r + "px", y.scrollTop = N - O + y.offsetTop
            }
            i.style.margin = `${Ii}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", o?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, y, b, m, a.dir, o]);
        (0, Xt.N)(() => g(), [g]);
        const [w, x] = N.useState();
        (0, Xt.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = N.useCallback(e => {
          e && !0 === v.current && (g(), h?.(), v.current = !1)
        }, [g, h]);
        return (0, P.jsx)(qi, {
          scope: t,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: _,
          children: (0, P.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, P.jsx)(Ot.div, {
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
      Ai.displayName = "SelectItemAlignedPosition";
      var Mi = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          align: o = "start",
          collisionPadding: n = Ii,
          ...a
        } = e, s = gi(t);
        return (0, P.jsx)(fo, {
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
      Mi.displayName = "SelectPopperPosition";
      var [qi, Fi] = mi(ki, {}), Bi = "SelectViewport", Xi = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          nonce: o,
          ...n
        } = e, a = Ei(Bi, t), s = Fi(Bi, t), i = (0, xt.s)(r, a.onViewportChange), d = N.useRef(0);
        return (0, P.jsxs)(P.Fragment, {
          children: [(0, P.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, P.jsx)(vi.Slot, {
            scope: t,
            children: (0, P.jsx)(Ot.div, {
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
              onScroll: (0, wt.mK)(n.onScroll, e => {
                const r = e.currentTarget,
                  {
                    contentWrapper: t,
                    shouldExpandOnScrollRef: o
                  } = s;
                if (o?.current && t) {
                  const e = Math.abs(d.current - r.scrollTop);
                  if (e > 0) {
                    const o = window.innerHeight - 2 * Ii,
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
      Xi.displayName = Bi;
      var Ki = "SelectGroup",
        [Zi, Wi] = mi(Ki);
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = (0, At.B)();
        return (0, P.jsx)(Zi, {
          scope: t,
          id: n,
          children: (0, P.jsx)(Ot.div, {
            role: "group",
            "aria-labelledby": n,
            ...o,
            ref: r
          })
        })
      }).displayName = Ki;
      var Hi = "SelectLabel";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = Wi(Hi, t);
        return (0, P.jsx)(Ot.div, {
          id: n.id,
          ...o,
          ref: r
        })
      }).displayName = Hi;
      var Gi = "SelectItem",
        [Ui, $i] = mi(Gi),
        Yi = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            value: o,
            disabled: n = !1,
            textValue: a,
            ...s
          } = e, i = xi(Gi, t), d = Ei(Gi, t), l = i.value === o, [c, u] = N.useState(a ?? ""), [f, p] = N.useState(!1), v = (0, xt.s)(r, e => d.itemRefCallback?.(e, o, n)), y = (0, At.B)(), b = N.useRef("touch"), m = () => {
            n || (i.onValueChange(o), i.onOpenChange(!1))
          };
          if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, P.jsx)(Ui, {
            scope: t,
            value: o,
            disabled: n,
            textId: y,
            isSelected: l,
            onItemTextChange: N.useCallback(e => {
              u(r => r || (e?.textContent ?? "").trim())
            }, []),
            children: (0, P.jsx)(vi.ItemSlot, {
              scope: t,
              value: o,
              disabled: n,
              textValue: c,
              children: (0, P.jsx)(Ot.div, {
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
                onFocus: (0, wt.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, wt.mK)(s.onBlur, () => p(!1)),
                onClick: (0, wt.mK)(s.onClick, () => {
                  "mouse" !== b.current && m()
                }),
                onPointerUp: (0, wt.mK)(s.onPointerUp, () => {
                  "mouse" === b.current && m()
                }),
                onPointerDown: (0, wt.mK)(s.onPointerDown, e => {
                  b.current = e.pointerType
                }),
                onPointerMove: (0, wt.mK)(s.onPointerMove, e => {
                  b.current = e.pointerType, n ? d.onItemLeave?.() : "mouse" === b.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, wt.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, wt.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (fi.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Yi.displayName = Gi;
      var Qi = "SelectItemText",
        Ji = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            ...a
          } = e, s = xi(Qi, t), i = Ei(Qi, t), d = $i(Qi, t), l = Ci(Qi, t), [c, u] = N.useState(null), f = (0, xt.s)(r, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, v = N.useMemo(() => (0, P.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: b
          } = l;
          return (0, Xt.N)(() => (y(v), () => b(v)), [y, b, v]), (0, P.jsxs)(P.Fragment, {
            children: [(0, P.jsx)(Ot.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren ? Ct.createPortal(a.children, s.valueNode) : null]
          })
        });
      Ji.displayName = Qi;
      var ed = "SelectItemIndicator";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return $i(ed, t).isSelected ? (0, P.jsx)(Ot.span, {
          "aria-hidden": !0,
          ...o,
          ref: r
        }) : null
      }).displayName = ed;
      var rd = "SelectScrollUpButton";
      N.forwardRef((e, r) => {
        const t = Ei(rd, e.__scopeSelect),
          o = Fi(rd, e.__scopeSelect),
          [n, a] = N.useState(!1),
          s = (0, xt.s)(r, o.onScrollButtonChange);
        return (0, Xt.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollTop > 0;
              a(e)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, P.jsx)(od, {
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
      }).displayName = rd;
      var td = "SelectScrollDownButton";
      N.forwardRef((e, r) => {
        const t = Ei(td, e.__scopeSelect),
          o = Fi(td, e.__scopeSelect),
          [n, a] = N.useState(!1),
          s = (0, xt.s)(r, o.onScrollButtonChange);
        return (0, Xt.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollHeight - r.clientHeight,
                t = Math.ceil(r.scrollTop) < e;
              a(t)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, P.jsx)(od, {
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
      }).displayName = td;
      var od = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onAutoScroll: o,
          ...n
        } = e, a = Ei("SelectScrollButton", t), s = N.useRef(null), i = yi(t), d = N.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return N.useEffect(() => () => d(), [d]), (0, Xt.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, P.jsx)(Ot.div, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          style: {
            flexShrink: 0,
            ...n.style
          },
          onPointerDown: (0, wt.mK)(n.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerMove: (0, wt.mK)(n.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerLeave: (0, wt.mK)(n.onPointerLeave, () => {
            d()
          })
        })
      });
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return (0, P.jsx)(Ot.div, {
          "aria-hidden": !0,
          ...o,
          ref: r
        })
      }).displayName = "SelectSeparator";
      var nd = "SelectArrow";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = gi(t), a = xi(nd, t), s = Ei(nd, t);
        return a.open && "popper" === s.position ? (0, P.jsx)(po, {
          ...n,
          ...o,
          ref: r
        }) : null
      }).displayName = nd;
      var ad = N.forwardRef(({
        __scopeSelect: e,
        value: r,
        ...t
      }, o) => {
        const n = N.useRef(null),
          a = (0, xt.s)(o, n),
          s = (0, un.Z)(r);
        return N.useEffect(() => {
          const e = n.current;
          if (!e) return;
          const t = window.HTMLSelectElement.prototype,
            o = Object.getOwnPropertyDescriptor(t, "value").set;
          if (s !== r && o) {
            const t = new Event("change", {
              bubbles: !0
            });
            o.call(e, r), e.dispatchEvent(t)
          }
        }, [s, r]), (0, P.jsx)(Ot.select, {
          ...t,
          style: {
            ...ho,
            ...t.style
          },
          ref: a,
          defaultValue: r
        })
      });

      function sd(e) {
        return "" === e || void 0 === e
      }

      function id(e) {
        const r = (0, Nt.c)(e),
          t = N.useRef(""),
          o = N.useRef(0),
          n = N.useCallback(e => {
            const n = t.current + e;
            r(n),
              function e(r) {
                t.current = r, window.clearTimeout(o.current), "" !== r && (o.current = window.setTimeout(() => e(""), 1e3))
              }(n)
          }, [r]),
          a = N.useCallback(() => {
            t.current = "", window.clearTimeout(o.current)
          }, []);
        return N.useEffect(() => () => window.clearTimeout(o.current), []), [t, n, a]
      }

      function dd(e, r, t) {
        const o = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
          n = t ? e.indexOf(t) : -1;
        let a = (s = e, i = Math.max(n, 0), s.map((e, r) => s[(i + r) % s.length]));
        var s, i;
        1 === o.length && (a = a.filter(e => e !== t));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
        return d !== t ? d : void 0
      }
      ad.displayName = "SelectBubbleInput";
      var ld = ji,
        cd = Pi,
        ud = Ni,
        fd = Si,
        pd = Di,
        vd = zi,
        yd = Xi,
        bd = Yi,
        md = Ji;

      function hd(e) {
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

      function gd(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function wd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? gd(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = hd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : gd(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function xd(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var _d = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Cd = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = wd(wd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _d(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xd(e.variantClassNames, e => xd(e, e => e.split(" ")[0]))
            }
          }, r
        },
        jd = Cd({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Od = Cd({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Pd = Cd({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rd = Cd({
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
        Nd = Cd({
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
        Sd = Cd({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Dd = (0, N.createContext)(null);

      function kd() {
        const e = (0, N.useContext)(Dd);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const zd = (0, N.forwardRef)(({
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
          const b = (0, N.useRef)(null),
            m = (0, ue.UP)(b, y),
            h = (0, N.useId)(),
            g = (0, N.useId)(),
            w = (0, N.useId)(),
            x = (0, N.useId)(),
            _ = (0, N.useId)(),
            C = (0, N.useId)(),
            [j = !1, O] = (0, ue.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            R = (0, k.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": r
            }, v);
          return (0, P.jsx)(Dd.Provider, {
            value: {
              labelId: h,
              errorId: g,
              descriptionId: w,
              triggerId: C,
              hintId: x,
              popoverId: _,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: j,
              setIsOpen: O,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: t,
              isDisabled: o,
              isReadOnly: n,
              status: p,
              size: f
            },
            children: (0, P.jsx)(ld, {
              required: t,
              disabled: o,
              open: j,
              onOpenChange: () => O(!n && !j),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, P.jsx)("div", {
                ref: m,
                ...R,
                children: e
              })
            })
          })
        }),
        Id = (0, N.forwardRef)(({
          hideDividers: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            popoverId: a
          } = kd(), s = (0, k.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: jd({
              hideDividers: e
            }),
            "data-testid": t
          }, o);
          return (0, P.jsx)(vd, {
            ...s,
            ref: n,
            children: (0, P.jsx)(yd, {
              className: "foundry_uaq1gwn",
              children: r
            })
          })
        }),
        Td = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e
          }, r);
          return (0, P.jsx)(yd, {
            ref: t,
            ...o
          })
        }),
        Ed = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": r
          }, t);
          return (0, P.jsxs)(si, {
            ...n,
            ref: o,
            children: [(0, P.jsx)(Td, {
              asChild: !0,
              children: (0, P.jsx)(ii, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, P.jsx)(di, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, P.jsx)(li, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Ld = (0, N.forwardRef)(({
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
            isOpen: y,
            value: b,
            size: m
          } = kd(), {
            isPressed: h,
            pressProps: g
          } = (0, ps.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, k.v6)({
            id: f,
            className: Nd({
              size: m,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!h,
              isDisabled: !!l
            }),
            "aria-labelledby": (0, k.VW)(t, c, u),
            "aria-describedby": (0, k.VW)(o, v),
            "aria-activedescendant": b,
            "aria-controls": p,
            "aria-invalid": "invalid" === d,
            "data-state": y ? "open" : "closed",
            "data-testid": r,
            "data-pressed": !!h
          }, (0, k.cJ)(g, "onKeyDown"), a), x = n ? fe.DX : cd;
          return (0, P.jsx)(x, {
            ...w,
            ref: s,
            children: e
          })
        }),
        Vd = (0, N.forwardRef)(({
          placeholder: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": t
            }, o),
            s = r ? fe.DX : "span";
          return (0, P.jsx)(s, {
            ...a,
            ref: n,
            children: (0, P.jsx)(ud, {
              placeholder: e
            })
          })
        }),
        Ad = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const {
            isDisabled: n,
            isReadOnly: a,
            isOpen: s
          } = kd(), i = s ? ke.ChevronUp : ke.ChevronDown, d = (0, k.v6)({
            asChild: !0,
            className: Sd({
              isDisabled: a || n
            }),
            "data-testid": r
          }, t);
          return (0, P.jsx)(fd, {
            ...d,
            ref: o,
            children: e || (0, P.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Md = (0, N.forwardRef)(({
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
            triggerId: c
          } = kd(), u = i && !n, f = (0, k.v6)({
            id: a.id || l,
            htmlFor: c,
            "data-testid": e,
            className: Rd({
              showAsterisk: u,
              isDisabled: d
            })
          }, a), p = r ? fe.DX : "label";
          return (0, P.jsx)(fe.s6, {
            enabled: o,
            children: (0, P.jsx)(p, {
              ...f,
              ref: s,
              children: t
            })
          })
        }),
        qd = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = kd(), i = (0, k.v6)({
            className: Od({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? fe.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Fd = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = kd(), i = (0, k.v6)({
            className: Pd({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, o), d = r ? fe.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Bd = (0, N.forwardRef)(({
          children: e,
          value: r,
          isDisabled: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, N.useRef)(null),
            i = (0, ue.UP)(s, a),
            d = (0, k.v6)({
              value: r,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: t,
              "data-testid": o
            }, n);
          return (0, P.jsx)(bd, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Xd = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": r
          }, t);
          return (0, P.jsx)(md, {
            ref: o,
            asChild: !0,
            children: (0, P.jsx)("span", {
              ...n,
              children: e
            })
          })
        }),
        Kd = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_uaq1gws",
            "data-testid": r
          }, t);
          return (0, P.jsx)(fd, {
            asChild: !0,
            ...n,
            ref: o,
            children: e
          })
        }),
        Zd = pd,
        Wd = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = kd(), i = (0, k.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? fe.DX : Cs;
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Hd = js,
        Gd = Os;
      var Ud = t(28687),
        $d = t(76646);

      function Yd(e) {
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

      function Qd(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Jd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Qd(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Yd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qd(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function el(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var rl = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        tl = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Jd(Jd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rl(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return el(e.variantClassNames, e => el(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ol = tl({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nl = tl({
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
        al = tl({
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
        sl = tl({
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
        il = tl({
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
      const dl = (0, N.createContext)(null);

      function ll() {
        const e = (0, N.useContext)(dl);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const cl = (0, N.forwardRef)(({
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
            c = o ? fe.DX : "div",
            u = (0, N.useId)(),
            f = (0, N.useId)(),
            p = (0, N.useId)();
          return (0, P.jsx)(dl.Provider, {
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
            children: (0, P.jsx)(c, {
              ...l,
              ref: d,
              children: n
            })
          })
        }),
        ul = (0, N.forwardRef)(({
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
          const p = (0, N.useRef)(null),
            v = (0, ue.UP)(p, f),
            {
              size: y,
              appearance: b,
              inputId: m,
              labelId: h,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: x
            } = ll(),
            _ = (0, $d.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: C
            } = (0, Ud.K)({
              id: a || m,
              "aria-labelledby": (0, k.VW)(o, h),
              "aria-describedby": (0, k.VW)(n, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            j = (0, k.v6)({
              className: il({
                appearance: b
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || x,
              "data-testid": e,
              onClick: e => {
                r?.(e) ?? t?.(e), e.defaultPrevented || w || x || _.toggle()
              }
            }, u);
          return (0, P.jsxs)("div", {
            ...j,
            children: [(0, P.jsx)(fe.s6, {
              children: (0, P.jsx)("input", {
                ...C,
                ref: v
              })
            }), (0, P.jsx)("div", {
              className: sl({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, P.jsx)("div", {
                className: nl({
                  size: y,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        fl = (0, N.forwardRef)(({
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
          } = ll(), c = (0, k.v6)({
            id: n.id || i,
            htmlFor: d,
            "data-testid": e,
            className: al({
              isDisabled: s,
              size: l
            })
          }, n), u = r ? fe.DX : "label";
          return (0, P.jsx)(fe.s6, {
            enabled: o,
            children: (0, P.jsx)(u, {
              ...c,
              ref: a,
              children: t
            })
          })
        }),
        pl = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = ll(), i = o.id || s, d = (0, k.v6)({
            className: ol({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, o), l = r ? fe.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        });
      var vl = t(58611);
      const yl = ({
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
        bl = ({
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
        ml = ({
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
        hl = ({
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
        gl = ({
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
        wl = ({
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

      function xl(e) {
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

      function _l(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Cl(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? _l(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = xl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _l(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function jl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Ol = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Pl = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Cl(Cl({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ol(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jl(e.variantClassNames, e => jl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Rl = Pl({
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
        Nl = Pl({
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
        Sl = Pl({
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
        Dl = Pl({
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
        kl = Pl({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zl = Pl({
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
      const Il = (0, N.createContext)(null);

      function Tl() {
        const e = (0, N.useContext)(Il);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const El = (0, N.forwardRef)(({
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
            d = o ? fe.DX : "div",
            l = (0, N.useId)(),
            c = (0, N.useId)(),
            u = (0, N.useId)();
          return (0, P.jsx)(Il.Provider, {
            value: {
              size: e,
              appearance: r,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, P.jsx)(d, {
              ...i,
              ref: s,
              children: n
            })
          })
        }),
        Ll = (0, N.forwardRef)(({
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
          } = Tl(), _ = (0, N.useRef)(null), C = f.id || w, {
            isPressed: j,
            pressProps: O
          } = (0, ps.d)({
            ref: _
          }), {
            setSelected: R,
            toggle: S,
            ...D
          } = (0, $d.H)({
            isSelected: r,
            defaultSelected: t,
            onChange: o
          }), {
            inputProps: z,
            isSelected: I,
            isDisabled: T,
            isReadOnly: E
          } = (0, vl.v)({
            "aria-label": "",
            id: C,
            name: n,
            ...x
          }, {
            ...D,
            toggle: S,
            setSelected: x.isReadOnly ? () => !1 : R
          }, _), L = (0, k.v6)({
            className: Nl({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || T || E || S()
            }
          }, O, f), V = (0, k.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": r,
            "aria-labelledby": (0, k.VW)(c, g),
            "aria-describedby": (0, k.VW)(d, h),
            "aria-errormessage": (0, k.VW)(l, x.isInvalid ? h : void 0),
            "aria-required": m,
            required: m
          }, z), A = b ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, P.jsxs)("div", {
            ...L,
            children: [(0, P.jsx)(fe.s6, {
              children: (0, P.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, P.jsx)("div", {
              className: (0, De.clsx)(Rl({
                size: v,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": b ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": T || E,
              "data-testid": e,
              "data-pressed": j,
              children: (0, P.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || b) && (0, P.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Vl = (0, N.forwardRef)(({
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
          } = Tl(), u = a.id || d, f = c && !n, p = (0, k.v6)({
            className: zl({
              size: i,
              showAsterisk: f
            }),
            "data-testid": t,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), v = r ? fe.DX : "label";
          return (0, P.jsx)(fe.s6, {
            enabled: o,
            children: (0, P.jsx)(v, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        Al = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Tl(), i = o.id || s, d = (0, k.v6)({
            className: Sl({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, o), l = r ? fe.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        }),
        Ml = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = Tl(), s = o.id || a, i = (0, k.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": t,
            id: s
          }, o), d = r ? fe.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        ql = (0, N.createContext)(null);

      function Fl() {
        const e = (0, N.useContext)(ql);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Bl = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          size: o = "MD",
          isRequired: n = !1,
          ...a
        }, s) => {
          const [i, d] = (0, N.useState)(null), [l, c] = (0, N.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, k.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = r ? fe.DX : "fieldset";
          return (0, P.jsx)(ql.Provider, {
            value: {
              size: o,
              isRequired: n,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, P.jsx)(p, {
              ...f,
              ref: s,
              children: t
            })
          })
        }),
        Xl = (0, N.forwardRef)(({
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
          } = Fl(), l = d && !a, c = (0, k.v6)({
            "data-testid": t,
            className: kl({
              showAsterisk: l
            })
          }, s), u = r ? fe.DX : "legend";
          return (0, P.jsx)(fe.s6, {
            enabled: n,
            children: (0, P.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, P.jsx)(fe.xV, {
                children: e
              }), !d && (0, P.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", o, ")"]
              })]
            })
          })
        }),
        Kl = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setDescriptionId: a
          } = Fl(), s = (0, N.useId)(), i = o.id || s;
          (0, N.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, k.v6)({
              "data-testid": t,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, o),
            l = r ? fe.DX : "div";
          return (0, P.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        }),
        Zl = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = Fl(), s = (0, k.v6)({
            "data-testid": t,
            className: Dl({
              size: a
            })
          }, o), i = r ? fe.DX : "div";
          return (0, P.jsx)(i, {
            ...s,
            ref: n,
            children: e
          })
        }),
        Wl = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setErrorTextId: a
          } = Fl(), s = (0, N.useId)(), i = o.id || s;
          (0, N.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, k.v6)({
              "data-testid": t,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, o),
            l = ke.X,
            c = r ? fe.DX : "div";
          return (0, P.jsxs)(c, {
            ...d,
            ref: n,
            children: [(0, P.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, P.jsx)(fe.xV, {
              children: e
            })]
          })
        });

      function Hl(e) {
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

      function Gl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ul(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Gl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Hl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Gl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function $l(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Yl = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ql = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ul(Ul({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yl(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $l(e.variantClassNames, e => $l(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Jl = Ql({
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
        ec = Ql({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rc = Ql({
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
        tc = Ql({
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
      const oc = (0, N.createContext)(null);

      function nc() {
        const e = (0, N.useContext)(oc);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const ac = (0, N.forwardRef)(({
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
            c = e ? fe.DX : "div",
            u = (0, N.useId)(),
            f = (0, N.useId)(),
            p = (0, N.useId)(),
            v = (0, N.useId)();
          return (0, P.jsx)(oc.Provider, {
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
            children: (0, P.jsx)(c, {
              ref: d,
              ...l,
              children: r
            })
          })
        }),
        sc = (0, N.forwardRef)(({
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
          } = nc(), u = (0, k.v6)({
            className: rc({
              isDisabled: l,
              showAsterisk: c && !n
            }),
            "data-testid": t,
            id: i,
            htmlFor: d
          }, a), f = r ? fe.DX : "label";
          return (0, P.jsx)(fe.s6, {
            enabled: o,
            children: (0, P.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        ic = (0, N.forwardRef)(({
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
          } = nc(), g = (0, N.useRef)(null), w = (0, ue.UP)(g, c), x = (0, k.v6)({
            className: tc({
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
          }, l), _ = e ? fe.DX : "textarea";
          return (0, P.jsx)(_, {
            ref: w,
            ...x,
            children: r
          })
        }),
        dc = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = nc(), i = (0, k.v6)({
            className: Jl({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? fe.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        lc = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = nc(), i = (0, k.v6)({
            className: ec({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, o), d = r ? fe.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        cc = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = nc(), i = (0, k.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? fe.DX : Cs;
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        uc = js,
        fc = Os;
      var pc = t(27097),
        vc = t(18222);

      function yc(e) {
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

      function bc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function mc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? bc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = yc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function hc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var gc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        wc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = mc(mc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gc(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hc(e.variantClassNames, e => hc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        xc = wc({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _c = wc({
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
      const Cc = (0, N.createContext)(null);

      function jc() {
        const e = (0, N.useContext)(Cc);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Oc = (0, N.forwardRef)(({
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
          const f = (0, N.useRef)(null),
            p = (0, ue.UP)(f, u),
            v = (0, N.useId)(),
            y = (0, N.useId)(),
            b = (0, N.useId)(),
            m = (0, pc.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: h
            } = (0, vc.m)({
              ...c,
              orientation: t,
              "aria-labelledby": (0, k.VW)(v, s),
              "aria-describedby": (0, k.VW)(y, b, i),
              "aria-errormessage": (0, k.VW)(b, d)
            }, m),
            g = (0, k.v6)({
              className: "foundry_njguqn0"
            }, h, (0, k.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? fe.DX : "div";
          return (0, P.jsx)(Cc.Provider, {
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
            children: (0, P.jsx)(w, {
              ref: p,
              "data-testid": n,
              ...g,
              children: o
            })
          })
        }),
        Pc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            size: a,
            orientation: s
          } = jc(), i = (0, k.v6)({
            "data-testid": e,
            className: _c({
              size: a,
              orientation: s
            })
          }, o), d = r ? fe.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: t
          })
        }),
        Rc = (0, N.forwardRef)(({
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
          } = jc(), l = i && !n, c = (0, k.v6)({
            id: a.id || d,
            "data-testid": e,
            className: xc({
              showAsterisk: l
            })
          }, a), u = r ? fe.DX : "div";
          return (0, P.jsx)(fe.s6, {
            enabled: o,
            children: (0, P.jsx)(u, {
              ...c,
              ref: s,
              children: t
            })
          })
        }),
        Nc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = jc(), s = (0, k.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, o), i = r ? fe.DX : "div";
          return (0, P.jsx)(i, {
            ...s,
            ref: n,
            children: t
          })
        }),
        Sc = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            errorId: a,
            status: s
          } = jc(), i = (0, k.v6)({
            className: "foundry_njguqnc",
            "data-testid": r,
            errorId: a,
            status: s
          }, o), d = t ? fe.DX : Cs;
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Dc = js,
        kc = Os;
      var zc = t(9153),
        Ic = wc({
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
        Tc = wc({
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
        Ec = wc({
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
        Lc = wc({
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
      const Vc = ({
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
        Ac = ({
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
        Mc = ({
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
        qc = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              "data-testid": t,
              className: "foundry_1pfduet0"
            }, o),
            s = e ? fe.DX : "label";
          return (0, P.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Fc = (0, N.forwardRef)(({
          testId: e,
          value: r,
          ...t
        }, o) => {
          const n = (0, N.useRef)(null),
            a = (0, ue.UP)(n, o),
            s = (0, N.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = jc(),
            {
              isPressed: p,
              pressProps: v
            } = (0, ps.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, zc.z)({
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
          return (0, P.jsxs)("div", {
            className: Lc({
              size: l
            }),
            children: [(0, P.jsx)(fe.s6, {
              children: (0, P.jsx)("input", {
                type: "radio",
                ...h,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, P.jsx)("div", {
              className: Ec({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": p,
              ...v,
              children: (0, P.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, P.jsx)(g, {})
              })
            })]
          })
        }),
        Bc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            size: s,
            state: i
          } = jc(), d = (0, N.useId)(), l = (0, k.v6)({
            id: d,
            "data-testid": e,
            className: Tc({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, n), c = r ? fe.DX : "div";
          return (0, P.jsx)(fe.s6, {
            enabled: o,
            children: (0, P.jsx)(c, {
              ...l,
              ref: a,
              children: t
            })
          })
        }),
        Xc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = jc(), s = (0, k.v6)({
            "data-testid": e,
            className: Ic({
              isDisabled: a
            })
          }, o), i = r ? fe.DX : "span";
          return (0, P.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        });
      var Kc = t(35462);

      function Zc(e) {
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

      function Wc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Hc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Wc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Zc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Gc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Uc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        $c = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Hc(Hc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Uc(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gc(e.variantClassNames, e => Gc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Yc = $c({
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
        Qc = $c({
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
        Jc = $c({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        eu = $c({
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
        ru = $c({
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
        tu = $c({
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
      const ou = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        nu = (0, N.createContext)(null);

      function au() {
        const e = (0, N.useContext)(nu);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const su = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, N.useState)("text"), u = `${(0,N.useId)()}-label`, f = `${(0,N.useId)()}-input`, p = `${(0,N.useId)()}-description`, v = (0, N.useRef)(null), y = (0, N.useRef)(ou), b = (0, k.v6)({
            "data-testid": t,
            className: "foundry_8oytzo4"
          }, i), m = e ? fe.DX : "div";
          return (0, P.jsx)(nu.Provider, {
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
            children: (0, P.jsx)(m, {
              ref: d,
              ...b,
              children: r
            })
          })
        }),
        iu = (0, N.forwardRef)(({
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
          } = au(), u = d && !n, f = (0, k.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: tu({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = r ? fe.DX : "label";
          return (0, P.jsx)(fe.s6, {
            enabled: o,
            children: (0, P.jsx)(p, {
              ref: s,
              ...f,
              children: t
            })
          })
        }),
        du = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = au(), s = (0, k.v6)({
            "data-testid": e,
            className: Jc({
              isDisabled: a
            })
          }, o), i = r ? fe.DX : "span";
          return (0, P.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        }),
        lu = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = au(), d = (0, k.v6)({
            "data-testid": e,
            className: (0, De.clsx)(Yc({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, o), l = r ? fe.DX : "div";
          return (0, P.jsx)(l, {
            ref: n,
            ...d,
            children: t
          })
        }),
        cu = (0, N.forwardRef)(({
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
          } = au();
          (0, N.useEffect)(() => g(l), []);
          const C = "invalid" === y,
            j = (0, k.v6)({
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
              className: (0, De.clsx)(ru({
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
              ...C && {
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
            O = (0, Kc.A)({
              mask: t,
              replacement: o,
              showMask: n,
              track: a
            }),
            R = (0, ue.UP)(t && o ? O : null, x, u),
            S = r ? fe.DX : "input";
          return (0, P.jsx)(S, {
            ref: R,
            ...j
          })
        }),
        uu = (0, N.forwardRef)(({
          icon: e,
          asChild: r,
          testId: t,
          side: o,
          ...n
        }, a) => {
          const {
            isDisabled: s
          } = au(), i = (0, k.v6)({
            size: "LG",
            "data-testid": t,
            className: (0, De.clsx)(eu({
              side: o,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, n), d = r ? fe.DX : ke[e];
          return (0, P.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        fu = (0, N.forwardRef)(({
          ...e
        }, r) => {
          const {
            isDisabled: t
          } = au(), o = (0, k.v6)({
            isDisabled: t,
            size: "LG",
            appearance: "ghost",
            className: (0, De.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, P.jsx)(Qe, {
            ref: r,
            ...o,
            preventFocusOnPress: !1
          })
        }),
        pu = (0, N.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: r,
          ...t
        }, o) => {
          const {
            type: n,
            setType: a,
            inputRef: s,
            focusState: i
          } = au(), d = "password" === n, l = d ? e : r;
          (0, N.useEffect)(() => {
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
          return (0, P.jsxs)(on, {
            children: [(0, P.jsx)(nn, {
              children: (0, P.jsx)(fu, {
                ref: o,
                ...c
              })
            }), (0, P.jsxs)(an, {
              side: "bottom",
              align: "end",
              children: [l, (0, P.jsx)(sn, {})]
            })]
          })
        }),
        vu = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = au(), i = (0, k.v6)({
            className: Qc({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? fe.DX : "div";
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        yu = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = au(), i = (0, k.v6)({
            className: "foundry_8oytzo13",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? fe.DX : Cs;
          return (0, P.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        bu = js,
        mu = Os;
      var hu = t(16319);

      function gu(e) {
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

      function wu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function xu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? wu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = gu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function _u(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Cu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ju = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = xu(xu({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _u(e.variantClassNames, e => _u(e, e => e.split(" ")[0]))
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
      const Ou = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Pu = (0, N.forwardRef)(({
          label: e,
          size: r = "LG",
          testId: t,
          ...o
        }, n) => {
          const a = (0, N.useRef)(null),
            s = (0, ue.UP)(a, n),
            {
              buttonProps: i
            } = (0, ue.sL)(o, a),
            d = (0, k.v6)({
              "data-testid": t,
              className: ju({
                size: r
              })
            }, i);
          return (0, P.jsx)("button", {
            ref: s,
            ...d,
            children: (0, P.jsx)(ke.X, {
              label: e,
              size: Ou[r]
            })
          })
        });

      function Ru(e) {
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

      function Nu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Su(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Nu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ru(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Nu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Du(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ku = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        zu = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Su(Su({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ku(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Du(e.variantClassNames, e => Du(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Iu = zu({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Tu = zu({
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
        Eu = zu({
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
      const Lu = (0, N.createContext)(null);

      function Vu() {
        const e = (0, N.useContext)(Lu);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Au = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          status: t,
          background: o,
          ...n
        }, a) => {
          const s = e ? fe.DX : "div",
            i = (0, k.v6)({
              className: Eu({
                status: t,
                background: o
              })
            }, n);
          return (0, P.jsx)(Lu.Provider, {
            value: {
              status: t,
              background: o
            },
            children: (0, P.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i
            })
          })
        }),
        Mu = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_1m368qha"
            }, t);
          return (0, P.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        qu = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_1m368qhb"
            }, t);
          return (0, P.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Fu = {
          danger: ke.CircleX,
          information: ke.Info,
          success: ke.CircleCheck,
          warning: ke.TriangleAlert
        },
        Bu = (0, N.forwardRef)(({
          asChild: e,
          size: r = "XL",
          ...t
        }, o) => {
          const {
            status: n
          } = Vu(), a = e ? fe.DX : Fu[n], s = (0, k.v6)({
            className: Tu({
              status: n,
              size: r
            }),
            size: r
          }, t);
          return (0, P.jsx)(a, {
            label: "",
            ref: o,
            ...s
          })
        }),
        Xu = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, t);
          return (0, P.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Ku = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, P.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Zu = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, N.useRef)(null),
            s = (0, ue.UP)(a, n),
            i = e ? fe.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, hu.i)(o, a),
            c = (0, k.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, P.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...c,
            children: r
          })
        }),
        Wu = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? fe.DX : "div",
            s = (0, k.v6)({
              className: "foundry_1m368qhm"
            }, o);
          return (0, P.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        Hu = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          className: t,
          ...o
        }, n) => {
          const a = e ? fe.DX : "div";
          return (0, P.jsx)(a, {
            ref: n,
            "data-testid": r,
            className: (0, De.clsx)(t, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...o
          })
        }),
        Gu = (0, N.forwardRef)((e, r) => {
          const {
            background: t
          } = Vu(), o = "none" !== t, n = (0, k.v6)({
            className: Iu({
              hasBackground: o
            })
          }, e);
          return (0, P.jsx)(Pu, {
            size: "SM",
            ref: r,
            ...n
          })
        });
      var Uu = t(64634),
        $u = t(7697),
        Yu = t(17497);
      var Qu = t(82459);

      function Ju(e) {
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

      function ef(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function rf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ef(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ju(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ef(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function tf(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var of = (e, r, t) => {
        for (var o of Object.keys(e)) {
          var n;
          if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
        }
        return !0
      }, nf = "foundry_qmpv6yv", af = (e => {
        var r = r => {
          var t = e.defaultClassName,
            o = rf(rf({}, e.defaultVariants), r);
          for (var n in o) {
            var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
            if (null != s) {
              var i = s;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var d = e.variantClassNames[n][i];
              d && (t += " " + d)
            }
          }
          for (var [l, c] of e.compoundVariants) of(l, o, e.defaultVariants) && (t += " " + c);
          return t
        };
        return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
          get base() {
            return e.defaultClassName.split(" ")[0]
          },
          get variants() {
            return tf(e.variantClassNames, e => tf(e, e => e.split(" ")[0]))
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
      const sf = (0, N.createContext)(null);

      function df() {
        const e = (0, N.useContext)(sf);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const lf = (0, N.forwardRef)(({
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
              const r = (0, ue.rl)(),
                t = (0, ue.jt)(),
                [o, n] = (0, N.useState)([]),
                a = o.length,
                [s, i] = (0, N.useState)(0),
                [d, l] = (0, Uu.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: r && a > 1
                }, [(0, $u.A)(), (0, Yu.A)()]),
                c = (0, N.useRef)(0),
                u = (0, N.useRef)(!1),
                f = o[s],
                p = (0, N.useCallback)(e => {
                  const r = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, t) => {
                    e.style.visibility = t === r ? "visible" : "hidden"
                  }), i(r), u.current = !0
                }, [l]),
                v = (0, N.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                y = (0, N.useCallback)((e, r) => {
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
              return (0, N.useEffect)(() => {
                l && (v(l), y(l), l.on("reInit", v).on("reInit", y).on("scroll", y).on("slideFocus", y))
              }, [l, y]), (0, N.useEffect)(() => {
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
          (0, N.useEffect)(() => {
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
              className: af(c)
            }, v, i),
            b = e ? fe.DX : "div";
          return (0, P.jsx)(sf.Provider, {
            value: l,
            children: (0, P.jsx)(b, {
              ref: d,
              "data-testid": t,
              "data-initialized": u,
              ...y,
              children: r
            })
          })
        }),
        cf = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        uf = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            currentAlert: o
          } = df();
          if (!e && !o || !o?.status) return null;
          const n = e || cf[o.status],
            a = ke[n],
            s = (0, k.v6)({
              className: "foundry_qmpv6yp"
            }, r);
          return (0, P.jsx)(a, {
            label: "",
            ref: t,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        ff = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, P.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        pf = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          align: t = "left",
          status: o,
          background: n,
          ...a
        }, s) => {
          const i = e ? fe.DX : "div",
            d = (0, k.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, P.jsx)(i, {
            ref: s,
            "data-testid": r,
            ...d
          })
        }),
        vf = (0, N.forwardRef)(({
          testId: e,
          children: r,
          ...t
        }, o) => {
          const {
            setAlerts: n,
            emblaRef: a,
            emblaApi: s
          } = df(), i = (0, k.v6)({
            className: "foundry_qmpv6ym"
          }, t), d = (0, ue.UP)(a, o), l = N.Children.map(r, e => {
            const r = e;
            if (!r.props.background || !r.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: r.props.status,
              background: r.props.background,
              align: r.props.align
            }
          });
          return (0, N.useEffect)(() => {
            l && n(l)
          }, []), s?.on("slidesChanged", () => {
            l && n(l)
          }), (0, P.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, P.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: r
            })
          })
        }),
        yf = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, N.useRef)(null),
            s = (0, ue.UP)(a, n),
            i = e ? fe.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, hu.i)(o, a),
            c = (0, k.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, o);
          return (0, P.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...d,
            ...c,
            children: r
          })
        }),
        bf = (0, N.forwardRef)((e, r) => {
          const t = (0, k.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, P.jsx)(Pu, {
            ref: r,
            "data-close-btn": !0,
            size: "SM",
            ...t
          })
        }),
        mf = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          children: t,
          ...o
        }, n) => {
          const a = e ? fe.DX : "div",
            s = (0, k.v6)({
              className: "foundry_qmpv6yt"
            }, o);
          return (0, P.jsx)(a, {
            ref: n,
            "data-testid": r,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: t
          })
        }),
        hf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            nextAlert: o,
            canScrollNext: n
          } = df(), a = (0, k.v6)({
            className: nf
          }, r);
          return (0, P.jsx)(Qu.K, {
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
        gf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            prevAlert: o,
            canScrollPrev: n
          } = df(), a = (0, k.v6)({
            className: nf
          }, r);
          return (0, P.jsx)(Qu.K, {
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
        wf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            currentAlertIndex: o,
            numAlerts: n
          } = df(), a = (0, k.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, r);
          return (0, P.jsxs)("div", {
            ref: t,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [o + 1, "/", n]
          })
        });

      function xf(e) {
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

      function _f(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Cf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? _f(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = xf(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _f(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function jf(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Of = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Pf = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Cf(Cf({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Of(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jf(e.variantClassNames, e => jf(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Rf = Pf({
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
        Nf = Pf({
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
        Sf = Pf({
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
      const Df = (0, N.createContext)(null);

      function kf() {
        const e = (0, N.useContext)(Df);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const zf = (0, N.forwardRef)(({
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
              className: Nf(c)
            }, d),
            f = e ? fe.DX : "div";
          return (0, P.jsx)(Df.Provider, {
            value: c,
            children: (0, P.jsx)(f, {
              ref: l,
              "data-testid": t,
              "aria-disabled": i,
              ...u,
              children: r
            })
          })
        }),
        If = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = kf(), s = e ? fe.DX : "div", i = (0, k.v6)({
            className: Sf({
              size: a
            })
          }, o);
          return (0, P.jsx)(s, {
            ref: n,
            "data-testid": t,
            ...i,
            children: r
          })
        }),
        Tf = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = ke[e],
            n = (0, k.v6)({
              className: "foundry_oahh5812"
            }, r);
          return (0, P.jsx)(o, {
            ref: t,
            size: "SM",
            ...n
          })
        }),
        Ef = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            background: o,
            isDisabled: n
          } = kf(), a = (0, k.v6)({
            className: Rf({
              background: o
            })
          }, r);
          return (0, P.jsx)(Qe, {
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
      var Lf = t(9089),
        Vf = "ToastProvider",
        [Af, Mf, qf] = fn("Toast"),
        [Ff, Bf] = (0, _t.A)("Toast", [qf]),
        [Xf, Kf] = Ff(Vf),
        Zf = e => {
          const {
            __scopeToast: r,
            label: t = "Notification",
            duration: o = 5e3,
            swipeDirection: n = "right",
            swipeThreshold: a = 50,
            children: s
          } = e, [i, d] = N.useState(null), [l, c] = N.useState(0), u = N.useRef(!1), f = N.useRef(!1);
          return t.trim() || console.error(`Invalid prop \`label\` supplied to \`${Vf}\`. Expected non-empty \`string\`.`), (0, P.jsx)(Af.Provider, {
            scope: r,
            children: (0, P.jsx)(Xf, {
              scope: r,
              label: t,
              duration: o,
              swipeDirection: n,
              swipeThreshold: a,
              toastCount: l,
              viewport: i,
              onViewportChange: d,
              onToastAdd: N.useCallback(() => c(e => e + 1), []),
              onToastRemove: N.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      Zf.displayName = Vf;
      var Wf = "ToastViewport",
        Hf = ["F8"],
        Gf = "toast.viewportPause",
        Uf = "toast.viewportResume",
        $f = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            hotkey: o = Hf,
            label: n = "Notifications ({hotkey})",
            ...a
          } = e, s = Kf(Wf, t), i = Mf(t), d = N.useRef(null), l = N.useRef(null), c = N.useRef(null), u = N.useRef(null), f = (0, xt.s)(r, u, s.onViewportChange), p = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          N.useEffect(() => {
            const e = e => {
              0 !== o.length && o.every(r => e[r] || e.code === r) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [o]), N.useEffect(() => {
            const e = d.current,
              r = u.current;
            if (v && e && r) {
              const t = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(Gf);
                    r.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                o = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(Uf);
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
          const y = N.useCallback(({
            tabbingDirection: e
          }) => {
            const r = i().map(r => {
              const t = r.ref.current,
                o = [t, ...vp(t)];
              return "forwards" === e ? o : o.reverse()
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
                    o = r.shiftKey;
                  if (r.target === e && o) return void l.current?.focus();
                  const n = y({
                      tabbingDirection: o ? "backwards" : "forwards"
                    }),
                    a = n.findIndex(e => e === t);
                  yp(n.slice(a + 1)) ? r.preventDefault() : o ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r)
            }
          }, [i, y]), (0, P.jsxs)(Vt, {
            ref: d,
            role: "region",
            "aria-label": n.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, P.jsx)(Qf, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                yp(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, P.jsx)(Af.Slot, {
              scope: t,
              children: (0, P.jsx)(Ot.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, P.jsx)(Qf, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                yp(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      $f.displayName = Wf;
      var Yf = "ToastFocusProxy",
        Qf = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            onFocusFromOutsideViewport: o,
            ...n
          } = e, a = Kf(Yf, t);
          return (0, P.jsx)(go, {
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
      Qf.displayName = Yf;
      var Jf = "Toast",
        ep = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, mo.i)({
            prop: o,
            defaultProp: n ?? !0,
            onChange: a,
            caller: Jf
          });
          return (0, P.jsx)(yo, {
            present: t || i,
            children: (0, P.jsx)(op, {
              open: i,
              ...s,
              ref: r,
              onClose: () => d(!1),
              onPause: (0, Nt.c)(e.onPause),
              onResume: (0, Nt.c)(e.onResume),
              onSwipeStart: (0, wt.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, wt.mK)(e.onSwipeMove, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${t}px`)
              }),
              onSwipeCancel: (0, wt.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, wt.mK)(e.onSwipeEnd, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${t}px`), d(!1)
              })
            })
          })
        });
      ep.displayName = Jf;
      var [rp, tp] = Ff(Jf, {
        onClose() {}
      }), op = N.forwardRef((e, r) => {
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
        } = e, y = Kf(Jf, t), [b, m] = N.useState(null), h = (0, xt.s)(r, e => m(e)), g = N.useRef(null), w = N.useRef(null), x = n || y.duration, _ = N.useRef(0), C = N.useRef(x), j = N.useRef(0), {
          onToastAdd: O,
          onToastRemove: R
        } = y, S = (0, Nt.c)(() => {
          const e = b?.contains(document.activeElement);
          e && y.viewport?.focus(), s()
        }), D = N.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), _.current = (new Date).getTime(), j.current = window.setTimeout(S, e))
        }, [S]);
        N.useEffect(() => {
          const e = y.viewport;
          if (e) {
            const r = () => {
                D(C.current), l?.()
              },
              t = () => {
                const e = (new Date).getTime() - _.current;
                C.current = C.current - e, window.clearTimeout(j.current), d?.()
              };
            return e.addEventListener(Gf, t), e.addEventListener(Uf, r), () => {
              e.removeEventListener(Gf, t), e.removeEventListener(Uf, r)
            }
          }
        }, [y.viewport, x, d, l, D]), N.useEffect(() => {
          a && !y.isClosePausedRef.current && D(x)
        }, [a, x, y.isClosePausedRef, D]), N.useEffect(() => (O(), () => R()), [O, R]);
        const k = N.useMemo(() => b ? up(b) : null, [b]);
        return y.viewport ? (0, P.jsxs)(P.Fragment, {
          children: [k && (0, P.jsx)(np, {
            __scopeToast: t,
            role: "status",
            "aria-live": "foreground" === o ? "assertive" : "polite",
            children: k
          }), (0, P.jsx)(rp, {
            scope: t,
            onClose: S,
            children: Ct.createPortal((0, P.jsx)(Af.ItemSlot, {
              scope: t,
              children: (0, P.jsx)(Lt, {
                asChild: !0,
                onEscapeKeyDown: (0, wt.mK)(i, () => {
                  y.isFocusedToastEscapeKeyDownRef.current || S(), y.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, P.jsx)(Ot.li, {
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
                  onKeyDown: (0, wt.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, S()))
                  }),
                  onPointerDown: (0, wt.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, wt.mK)(e.onPointerMove, e => {
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
                    o ? (w.current = l, fp("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : pp(l, y.swipeDirection, d) ? (w.current = l, fp("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(r) > d || Math.abs(t) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, wt.mK)(e.onPointerUp, e => {
                    const r = w.current,
                      t = e.target;
                    if (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), w.current = null, g.current = null, r) {
                      const t = e.currentTarget,
                        o = {
                          originalEvent: e,
                          delta: r
                        };
                      pp(r, y.swipeDirection, y.swipeThreshold) ? fp("toast.swipeEnd", p, o, {
                        discrete: !0
                      }) : fp("toast.swipeCancel", f, o, {
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
      }), np = e => {
        const {
          __scopeToast: r,
          children: t,
          ...o
        } = e, n = Kf(Jf, r), [a, s] = N.useState(!1), [i, d] = N.useState(!1);
        return function(e = () => {}) {
          const r = (0, Nt.c)(e);
          (0, Xt.N)(() => {
            let e = 0,
              t = 0;
            return e = window.requestAnimationFrame(() => t = window.requestAnimationFrame(r)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(t)
            }
          }, [r])
        }(() => s(!0)), N.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, P.jsx)(vo, {
          asChild: !0,
          children: (0, P.jsx)(go, {
            ...o,
            children: a && (0, P.jsxs)(P.Fragment, {
              children: [n.label, " ", t]
            })
          })
        })
      };
      N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, P.jsx)(Ot.div, {
          ...o,
          ref: r
        })
      }).displayName = "ToastTitle";
      var ap = N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, P.jsx)(Ot.div, {
          ...o,
          ref: r
        })
      });
      ap.displayName = "ToastDescription";
      var sp = "ToastAction",
        ip = N.forwardRef((e, r) => {
          const {
            altText: t,
            ...o
          } = e;
          return t.trim() ? (0, P.jsx)(cp, {
            altText: t,
            asChild: !0,
            children: (0, P.jsx)(lp, {
              ...o,
              ref: r
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${sp}\`. Expected non-empty \`string\`.`), null)
        });
      ip.displayName = sp;
      var dp = "ToastClose",
        lp = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            ...o
          } = e, n = tp(dp, t);
          return (0, P.jsx)(cp, {
            asChild: !0,
            children: (0, P.jsx)(Ot.button, {
              type: "button",
              ...o,
              ref: r,
              onClick: (0, wt.mK)(e.onClick, n.onClose)
            })
          })
        });
      lp.displayName = dp;
      var cp = N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          altText: o,
          ...n
        } = e;
        return (0, P.jsx)(Ot.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": o || void 0,
          ...n,
          ref: r
        })
      });

      function up(e) {
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
              } else r.push(...up(e))
          }
        }), r
      }

      function fp(e, r, t, {
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
        }), o ? Pt(n, a) : n.dispatchEvent(a)
      }
      var pp = (e, r, t = 0) => {
        const o = Math.abs(e.x),
          n = Math.abs(e.y),
          a = o > n;
        return "left" === r || "right" === r ? a && o > t : !a && n > t
      };

      function vp(e) {
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

      function yp(e) {
        const r = document.activeElement;
        return e.some(e => e === r || (e.focus(), document.activeElement !== r))
      }
      var bp = Zf,
        mp = $f,
        hp = ep,
        gp = ap,
        wp = ip,
        xp = lp;

      function _p(e) {
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

      function Cp(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function jp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Cp(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = _p(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cp(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Op(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Pp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Rp = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = jp(jp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Pp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Op(e.variantClassNames, e => Op(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Np = Rp({
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
        Sp = Rp({
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
        Dp = Rp({
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
      const kp = ({
          testId: e,
          ...r
        }) => (0, P.jsx)(bp, {
          "data-testid": e,
          ...r
        }),
        zp = (0, N.forwardRef)(({
          children: e,
          testId: r,
          position: t = "bottomRight",
          ...o
        }, n) => {
          const a = (0, k.v6)({
            className: Dp({
              position: t
            })
          }, o);
          return (0, P.jsx)(mp, {
            ref: n,
            "data-testid": r,
            ...a,
            children: e
          })
        }),
        Ip = (0, N.createContext)(null);

      function Tp() {
        const e = (0, N.useContext)(Ip);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Ep = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          appearance: o = "success",
          ...n
        }, a) => {
          const s = e ? fe.DX : hp,
            i = (0, k.v6)({
              className: Sp({
                appearance: o
              })
            }, n);
          return (0, P.jsx)(Ip.Provider, {
            value: {
              appearance: o
            },
            children: (0, P.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: r
            })
          })
        }),
        Lp = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? fe.DX : gp,
            s = (0, k.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, o);
          return (0, P.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        Vp = {
          danger: ke.CircleX,
          information: ke.Info,
          success: ke.CircleCheck,
          warning: ke.TriangleAlert,
          avocado: ke.CircleCheck
        },
        Ap = (0, N.forwardRef)(({
          asChild: e,
          ...r
        }, t) => {
          const {
            appearance: o
          } = Tp(), n = e ? fe.DX : Vp[o], a = (0, k.v6)({
            className: Np({
              appearance: o
            }),
            size: "LG"
          }, r);
          return (0, P.jsx)(n, {
            ref: t,
            ...a
          })
        }),
        Mp = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, o);
          return (0, P.jsx)(wp, {
            ref: n,
            "data-testid": t,
            ...a,
            children: e ? (0, P.jsx)(fe.DX, {
              children: r
            }) : (0, P.jsx)(Lf.$, {
              size: "MD",
              appearance: "link",
              children: r
            })
          })
        }),
        qp = (0, N.forwardRef)(({
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
          return (0, P.jsx)(xp, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e ? (0, P.jsx)(fe.DX, {
              children: r
            }) : (0, P.jsx)(Pu, {
              size: "SM",
              label: o
            })
          })
        });
      var Fp = t(92405);

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

      function Kp(e) {
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

      function Zp(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Wp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Hp = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Kp(Kp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zp(e.variantClassNames, e => Zp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Gp = Hp({
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
        Up = Hp({
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
        $p = Hp({
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

      function Yp() {
        const e = (0, N.useContext)(Qp);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Qp = (0, N.createContext)(null),
        Jp = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          size: o = "MD",
          ...n
        }, a) => {
          const s = (0, k.v6)({
              className: $p({
                size: o
              })
            }, n),
            i = t ? fe.DX : "ol";
          return (0, P.jsx)(Qp.Provider, {
            value: {
              size: o
            },
            children: (0, P.jsx)(i, {
              ref: a,
              "data-testid": r,
              ...s,
              children: e
            })
          })
        }),
        ev = (0, N.forwardRef)(({
          isCurrent: e,
          children: r,
          asChild: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, N.useRef)(null),
            {
              size: i
            } = Yp(),
            {
              itemProps: d
            } = (0, Fp.I)({
              isCurrent: e,
              children: r
            }, s),
            l = t ? fe.DX : "a",
            c = (0, k.v6)({
              className: (0, De.clsx)(Gp({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": o
            }, d, n);
          return (0, P.jsx)("li", {
            className: Up({
              size: i
            }),
            ref: a,
            children: (0, P.jsx)(l, {
              ref: s,
              ...c,
              children: r
            })
          })
        }),
        rv = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = ke[e];
          return (0, P.jsx)(o, {
            ref: t,
            size: "LG",
            ...r
          })
        }),
        tv = (0, N.forwardRef)(({
          children: e,
          testId: r,
          defaultOpen: t = !1,
          label: o,
          ...n
        }, a) => {
          const [s, i] = (0, N.useState)(t), {
            size: d
          } = Yp(), l = (0, k.v6)({
            className: Up({
              size: d
            }),
            "data-testid": r
          }, n);
          return (0, P.jsx)("li", {
            ref: a,
            ...l,
            children: (0, P.jsxs)(ld, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, P.jsx)(cd, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": o,
                children: "..."
              }), (0, P.jsx)(pd, {
                children: (0, P.jsx)(vd, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, P.jsx)(yd, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        ov = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = r ? fe.DX : bd,
            s = (0, k.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": t
            }, o);
          return (0, P.jsx)(a, {
            ref: n,
            ...s,
            children: e
          })
        });

      function nv(e) {
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

      function av(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function sv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? av(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = nv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : av(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function iv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var dv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        lv = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = sv(sv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) dv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iv(e.variantClassNames, e => iv(e, e => e.split(" ")[0]))
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
      const cv = (0, N.createContext)(null);

      function uv() {
        const e = (0, N.useContext)(cv);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const fv = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "primary",
          size: o = "SM",
          type: n = "text",
          ...a
        }, s) => {
          const i = e ? fe.DX : "div",
            d = (0, k.v6)({
              className: lv({
                appearance: t,
                type: n,
                size: o
              })
            }, a);
          return (0, P.jsx)(cv.Provider, {
            value: {
              type: n
            },
            children: (0, P.jsx)(i, {
              ref: s,
              "data-testid": r,
              ...d
            })
          })
        }),
        pv = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.v6)({
              className: "foundry_18omk9t9",
              "data-testid": r
            }, t);
          return (0, P.jsx)(n, {
            ref: o,
            ...a
          })
        }),
        vv = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = ws[e],
            n = (0, k.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, r);
          return (0, P.jsx)(o, {
            ref: t,
            ...n
          })
        }),
        yv = () => {
          const e = (0, ue.Ub)(k.fi.mobile);
          return r => e ? {
            transform: `translate(0,${100-r}%)`
          } : {
            opacity: r / 100,
            transform: `scale(${.95+r/100*.05})`
          }
        },
        bv = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function mv(e) {
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

      function hv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function gv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? hv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = mv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function wv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var xv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        _v = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = gv(gv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) xv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wv(e.variantClassNames, e => wv(e, e => e.split(" ")[0]))
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
      const Cv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, r);
          return (0, P.jsx)(si, {
            ref: t,
            ...o
          })
        }),
        jv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, r);
          return (0, P.jsx)(ii, {
            ref: t,
            ...o
          })
        }),
        Ov = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, r);
          return (0, P.jsx)(di, {
            ref: t,
            ...o
          })
        }),
        Pv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, ue.rl)(),
            n = (0, k.v6)({
              "data-testid": e,
              className: _v({
                isTouchDevice: o
              })
            }, r);
          return (0, P.jsx)(li, {
            ref: t,
            ...n
          })
        }),
        Rv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e
          }, r);
          return (0, P.jsx)(ci, {
            ref: t,
            ...o
          })
        });

      function Nv(e) {
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

      function Sv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Dv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Sv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Nv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function kv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var zv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Iv = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Dv(Dv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kv(e.variantClassNames, e => kv(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Tv = Iv({
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
        Ev = Iv({
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
      const Lv = (0, N.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, N.createRef)(),
          dialogSpringRef: (0, gt.$9)(),
          overlaySpringRef: (0, gt.$9)()
        }),
        Vv = ({
          defaultOpen: e,
          onOpenChange: r,
          isOpen: t,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: n,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, ue.ic)({
            prop: t,
            defaultProp: e ?? !1,
            onChange: r
          }), c = (0, ue.ZC)(d);
          return (0, P.jsx)(Lv.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== t,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: n,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, N.useId)(),
              descriptionId: (0, N.useId)(),
              triggerRef: (0, N.useRef)(null),
              dialogSpringRef: (0, gt.U2)(),
              overlaySpringRef: (0, gt.U2)()
            },
            children: (0, P.jsx)(Av, {
              ...i
            })
          })
        },
        Av = e => {
          const {
            isOpen: r,
            setIsOpen: t
          } = (0, N.useContext)(Lv), o = (0, k.v6)({
            open: r,
            onOpenChange: t
          }, e);
          return (0, P.jsx)(La, {
            ...o
          })
        },
        Mv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            contentId: o,
            triggerRef: n
          } = (0, N.useContext)(Lv), a = (0, ue.UP)(n, t), s = (0, k.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": o
          }, r);
          return (0, P.jsx)(Va, {
            ...s,
            ref: a
          })
        }),
        qv = e => (0, P.jsx)(Aa, {
          forceMount: !0,
          ...e
        }),
        Fv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            isOpen: o,
            overlaySpringRef: n,
            openImmediately: a
          } = (0, N.useContext)(Lv), s = bv(), i = (0, ue.jt)(), d = (0, gt.pn)(o, {
            ref: n,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: gt.$W.stiff,
            immediate: i || a
          }), l = (0, k.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, r), c = (0, gt.CS)(Ma);
          return (0, N.useEffect)(() => {
            n.start()
          }, [o]), d((e, r) => r ? (0, P.jsx)(c, {
            forceMount: !0,
            ref: t,
            ...l,
            style: e
          }) : null)
        }),
        Bv = (0, N.forwardRef)(({
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
          } = (0, N.useContext)(Lv), m = (0, ue.rl)(), h = (0, ue.jt)(), g = (0, N.useRef)(null), w = yv(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: r,
            overlaySpringRef: t,
            onCloseTransitionStart: o,
            onCloseTransitionComplete: n
          }) {
            const a = bv(),
              s = yv(),
              i = (0, N.useRef)();
            return {
              bindDrag: (0, Vr.useDrag)(({
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
                  config: gt.$W.stiff,
                  onStart: o,
                  onRest: n
                }), t.start({
                  ...a(0),
                  immediate: !1,
                  config: gt.$W.stiff
                })) : (r.start({
                  ...s(100),
                  immediate: !1,
                  config: gt.$W.stiff
                }), t.start({
                  ...a(100),
                  immediate: !1,
                  config: gt.$W.stiff
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
          }), _ = (0, gt.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: gt.$W.stiff,
            ref: y,
            immediate: h || d,
            onStart: (e, r, t) => {
              t ? u?.() : p?.()
            },
            onRest: (e, r, t) => {
              t ? f?.() : v?.()
            }
          });
          (0, N.useEffect)(() => {
            y.start()
          }, [s]);
          const C = (0, ue.UP)(g, a),
            j = m && !h && !o && x(),
            O = (0, k.v6)({
              "data-testid": r,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                t?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, n),
            R = (0, gt.CS)(qa);
          return _((r, t) => t ? (0, P.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, P.jsx)(R, {
              forceMount: !0,
              ref: C,
              ...O,
              style: r,
              children: e
            })
          }) : null)
        }),
        Xv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, P.jsx)(Fa, {
            ref: t,
            ...o
          })
        }),
        Kv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e
          }, r);
          return (0, P.jsx)(Ba, {
            ref: t,
            ...o
          })
        }),
        Zv = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            className: "foundry_xov33nh",
            "data-testid": r
          }, t);
          return (0, P.jsxs)(Cv, {
            ref: o,
            ...n,
            children: [(0, P.jsx)(jv, {
              className: "foundry_xov33ni",
              children: e
            }), (0, P.jsx)(Ov, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, P.jsx)(Pv, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Wv = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": r,
              className: "foundry_xov33ne"
            }, t),
            a = e ? fe.DX : "div";
          return (0, P.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        Hv = (0, N.forwardRef)(({
          align: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              "data-testid": t,
              className: Tv({
                align: e
              })
            }, o),
            s = r ? fe.DX : "header";
          return (0, P.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Gv = (0, N.forwardRef)(({
          testId: e,
          appearance: r = "sentence",
          ...t
        }, o) => {
          const n = (0, k.v6)({
            "data-testid": e,
            className: Ev({
              appearance: r
            })
          }, t);
          return (0, P.jsx)(Fa, {
            ref: o,
            ...n
          })
        }),
        Uv = (0, N.forwardRef)((e, r) => {
          const t = (0, k.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, P.jsx)(Qu.K, {
            ref: r,
            ...t,
            appearance: "ghost",
            size: "LG"
          })
        }),
        $v = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, t),
            a = r ? (0, P.jsx)(fe.DX, {
              ref: o,
              ...n
            }) : (0, P.jsx)(Pu, {
              ref: o,
              ...n,
              size: "LG"
            });
          return (0, P.jsx)(Xa, {
            asChild: !0,
            children: a
          })
        }),
        Yv = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, t),
            a = e ? fe.DX : "div";
          return (0, P.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        Qv = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, t),
            a = e ? fe.DX : "footer";
          return (0, P.jsx)(a, {
            ref: o,
            ...n
          })
        });
      var Jv = t(93367),
        ey = t(4031),
        ry = t(2559),
        ty = "Avatar",
        [oy, ny] = (0, Jv.A)(ty),
        [ay, sy] = oy(ty),
        iy = N.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            ...o
          } = e, [n, a] = N.useState("idle");
          return (0, P.jsx)(ay, {
            scope: t,
            imageLoadingStatus: n,
            onImageLoadingStatusChange: a,
            children: (0, P.jsx)(ey.sG.span, {
              ...o,
              ref: r
            })
          })
        });
      iy.displayName = ty;
      var dy = "AvatarImage",
        ly = N.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            src: o,
            onLoadingStatusChange: n = () => {},
            ...a
          } = e, s = sy(dy, t), i = function(e, {
            referrerPolicy: r,
            crossOrigin: t
          }) {
            const o = (0, ry.z)(),
              n = N.useRef(null),
              a = o ? (n.current || (n.current = new window.Image), n.current) : null,
              [s, i] = N.useState(() => uy(a, e));
            return (0, Xt.N)(() => {
              i(uy(a, e))
            }, [a, e]), (0, Xt.N)(() => {
              const e = e => () => {
                i(e)
              };
              if (!a) return;
              const o = e("loaded"),
                n = e("error");
              return a.addEventListener("load", o), a.addEventListener("error", n), r && (a.referrerPolicy = r), "string" == typeof t && (a.crossOrigin = t), () => {
                a.removeEventListener("load", o), a.removeEventListener("error", n)
              }
            }, [a, t, r]), s
          }(o, a), d = (0, Nt.c)(e => {
            n(e), s.onImageLoadingStatusChange(e)
          });
          return (0, Xt.N)(() => {
            "idle" !== i && d(i)
          }, [i, d]), "loaded" === i ? (0, P.jsx)(ey.sG.img, {
            ...a,
            ref: r,
            src: o
          }) : null
        });
      ly.displayName = dy;
      var cy = "AvatarFallback";

      function uy(e, r) {
        return e ? r ? (e.src !== r && (e.src = r), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      N.forwardRef((e, r) => {
        const {
          __scopeAvatar: t,
          delayMs: o,
          ...n
        } = e, a = sy(cy, t), [s, i] = N.useState(void 0 === o);
        return N.useEffect(() => {
          if (void 0 !== o) {
            const e = window.setTimeout(() => i(!0), o);
            return () => window.clearTimeout(e)
          }
        }, [o]), s && "loaded" !== a.imageLoadingStatus ? (0, P.jsx)(ey.sG.span, {
          ...n,
          ref: r
        }) : null
      }).displayName = cy;
      var fy = iy,
        py = ly;

      function vy(e) {
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

      function yy(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function by(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? yy(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = vy(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : yy(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function my(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var hy = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        gy = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = by(by({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) hy(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return my(e.variantClassNames, e => my(e, e => e.split(" ")[0]))
            }
          }, r
        },
        wy = gy({
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
        xy = "var(--foundry_v912w22)",
        _y = "var(--foundry_v912w23)",
        Cy = gy({
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
        jy = gy({
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
        Oy = "var(--foundry_v912w21)",
        Py = "var(--foundry_v912w20)",
        Ry = gy({
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
      const Ny = (0, N.createContext)(null);

      function Sy() {
        const e = (0, N.useContext)(Ny);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Dy = (0, N.forwardRef)(({
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
            className: wy({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, P.jsx)(Ny.Provider, {
            value: {
              size: o,
              status: n,
              isDisabled: a
            },
            children: (0, P.jsx)(fy, {
              ref: i,
              ...d,
              children: r
            })
          })
        }),
        ky = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          src: t,
          ...o
        }, n) => {
          const {
            size: a,
            isDisabled: s
          } = Sy(), [i, d] = (0, N.useState)(!1);
          (0, N.useEffect)(() => {
            d(!1)
          }, [t]);
          const l = i || !t ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : t,
            c = (0, k.v6)({
              className: Cy({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, o);
          return (0, P.jsx)("span", {
            className: jy({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": r,
            "aria-hidden": !0,
            children: (0, P.jsx)(py, {
              ref: n,
              ...c
            })
          })
        }),
        zy = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const n = (0, N.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = Sy(),
            d = s || "online",
            l = (0, ue.UP)(n, o),
            c = (0, k.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Ry({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, S.D)({
                [Py]: r?.online,
                [Oy]: r?.offline,
                [xy]: r?.away,
                [_y]: r?.busy
              })
            }, t);
          return (0, P.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Iy(e) {
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

      function Ty(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ey(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ty(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Iy(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ty(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ly(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Vy = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ay = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ey(Ey({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vy(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ly(e.variantClassNames, e => Ly(e, e => e.split(" ")[0]))
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
      const My = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              "data-testid": t,
              className: "foundry_2jlbzt0"
            }, o),
            s = e ? fe.DX : "nav";
          return (0, P.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        qy = (0, N.forwardRef)(({
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
            s = e ? fe.DX : "div";
          return (0, P.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Fy = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          isActive: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, N.useRef)(null),
            i = (0, ue.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, hu.i)(n, s),
            c = (0, k.v6)({
              role: "listitem",
              "data-testid": o,
              "data-pressed": l,
              "data-active": t,
              className: (0, De.clsx)(Ay({
                isActive: t
              }))
            }, d),
            u = e ? fe.DX : "a";
          return (0, P.jsx)(u, {
            ref: i,
            ...c,
            children: r
          })
        }),
        By = (0, N.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, t);
          return (0, P.jsx)(Fy, {
            ref: o,
            ...n,
            children: (0, P.jsx)(ke.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        Xy = (0, N.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, t);
          return (0, P.jsx)(Fy, {
            ref: o,
            ...n,
            children: (0, P.jsx)(ke.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        Ky = ({
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
            a = e ? fe.DX : "span";
          return (0, P.jsx)(a, {
            ...n,
            children: r || "..."
          })
        },
        Zy = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, k.v6)({
              "data-testid": t,
              className: "foundry_2jlbzt8"
            }, o),
            a = e ? fe.DX : "div";
          return (0, P.jsx)(a, {
            ...n,
            children: r
          })
        },
        Wy = (0, N.createContext)(null);

      function Hy() {
        const e = (0, N.useContext)(Wy);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const Gy = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, N.useId)(),
            a = (0, k.v6)({
              "data-testid": t,
              className: "foundry_2jlbztb"
            }, o),
            s = e ? fe.DX : "div";
          return (0, P.jsx)(Wy.Provider, {
            value: {
              labelId: n
            },
            children: (0, P.jsx)(s, {
              ...a,
              children: r
            })
          })
        },
        Uy = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Hy(), s = (0, k.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, o), i = e ? fe.DX : "label";
          return (0, P.jsx)(i, {
            ref: n,
            id: a,
            ...s,
            children: r
          })
        }),
        $y = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          placeholder: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Hy(), s = (0, k.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, o), i = e ? fe.DX : zd;
          return (0, P.jsxs)(i, {
            ...s,
            children: [(0, P.jsxs)(Ld, {
              ref: n,
              children: [(0, P.jsx)(Vd, {
                placeholder: t
              }), (0, P.jsx)(Ad, {})]
            }), (0, P.jsx)(Zd, {
              children: (0, P.jsx)(Id, {
                children: (0, P.jsx)(Ed, {
                  children: r
                })
              })
            })]
          })
        }),
        Yy = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              "data-testid": t
            }, o),
            s = e ? fe.DX : Bd;
          return (0, P.jsx)(s, {
            ...a,
            ref: n,
            children: (0, P.jsx)(Xd, {
              children: r
            })
          })
        }),
        Qy = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
              "data-testid": t,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, o),
            s = e ? fe.DX : "p";
          return (0, P.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        });
      var Jy = "rovingFocusGroup.onEntryFocus",
        eb = {
          bubbles: !1,
          cancelable: !0
        },
        rb = "RovingFocusGroup",
        [tb, ob, nb] = fn(rb),
        [ab, sb] = (0, _t.A)(rb, [nb]),
        [ib, db] = ab(rb),
        lb = N.forwardRef((e, r) => (0, P.jsx)(tb.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, P.jsx)(tb.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, P.jsx)(cb, {
              ...e,
              ref: r
            })
          })
        }));
      lb.displayName = rb;
      var cb = N.forwardRef((e, r) => {
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
          } = e, f = N.useRef(null), p = (0, xt.s)(r, f), v = (0, cn.jH)(a), [y, b] = (0, mo.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: rb
          }), [m, h] = N.useState(!1), g = (0, Nt.c)(l), w = ob(t), x = N.useRef(!1), [_, C] = N.useState(0);
          return N.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(Jy, g), () => e.removeEventListener(Jy, g)
          }, [g]), (0, P.jsx)(ib, {
            scope: t,
            orientation: o,
            dir: v,
            loop: n,
            currentTabStopId: y,
            onItemFocus: N.useCallback(e => b(e), [b]),
            onItemShiftTab: N.useCallback(() => h(!0), []),
            onFocusableItemAdd: N.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: N.useCallback(() => C(e => e - 1), []),
            children: (0, P.jsx)(Ot.div, {
              tabIndex: m || 0 === _ ? -1 : 0,
              "data-orientation": o,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, wt.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, wt.mK)(e.onFocus, e => {
                const r = !x.current;
                if (e.target === e.currentTarget && r && !m) {
                  const r = new CustomEvent(Jy, eb);
                  if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      r = e.find(e => e.active),
                      t = e.find(e => e.id === y),
                      o = [r, t, ...e].filter(Boolean).map(e => e.ref.current);
                    vb(o, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, wt.mK)(e.onBlur, () => h(!1))
            })
          })
        }),
        ub = "RovingFocusGroupItem",
        fb = N.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            focusable: o = !0,
            active: n = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, At.B)(), l = a || d, c = db(ub, t), u = c.currentTabStopId === l, f = ob(t), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: y
          } = c;
          return N.useEffect(() => {
            if (o) return p(), () => v()
          }, [o, p, v]), (0, P.jsx)(tb.ItemSlot, {
            scope: t,
            id: l,
            focusable: o,
            active: n,
            children: (0, P.jsx)(Ot.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: r,
              onMouseDown: (0, wt.mK)(e.onMouseDown, e => {
                o ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, wt.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, wt.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const r = function(e, r, t) {
                  const o = function(e, r) {
                    return "rtl" !== r ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, t);
                  return "vertical" === r && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o) ? void 0 : pb[o]
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
                  setTimeout(() => vb(a))
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
      fb.displayName = ub;
      var pb = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function vb(e, r = !1) {
        const t = document.activeElement;
        for (const o of e) {
          if (o === t) return;
          if (o.focus({
              preventScroll: r
            }), document.activeElement !== t) return
        }
      }
      var yb = lb,
        bb = fb,
        mb = "Toggle",
        hb = N.forwardRef((e, r) => {
          const {
            pressed: t,
            defaultPressed: o,
            onPressedChange: n,
            ...a
          } = e, [s, i] = (0, mo.i)({
            prop: t,
            onChange: n,
            defaultProp: o ?? !1,
            caller: mb
          });
          return (0, P.jsx)(Ot.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: r,
            onClick: (0, wt.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      hb.displayName = mb;
      var gb = "ToggleGroup",
        [wb, xb] = (0, _t.A)(gb, [sb]),
        _b = sb(),
        Cb = N.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e;
          if ("single" === t) {
            const e = o;
            return (0, P.jsx)(Pb, {
              ...e,
              ref: r
            })
          }
          if ("multiple" === t) {
            const e = o;
            return (0, P.jsx)(Rb, {
              ...e,
              ref: r
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${gb}\``)
        });
      Cb.displayName = gb;
      var [jb, Ob] = wb(gb), Pb = N.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, mo.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: gb
        });
        return (0, P.jsx)(jb, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: N.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: N.useCallback(() => i(""), [i]),
          children: (0, P.jsx)(Db, {
            ...a,
            ref: r
          })
        })
      }), Rb = N.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, mo.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: gb
        }), d = N.useCallback(e => i((r = []) => [...r, e]), [i]), l = N.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, P.jsx)(jb, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, P.jsx)(Db, {
            ...a,
            ref: r
          })
        })
      });
      Cb.displayName = gb;
      var [Nb, Sb] = wb(gb), Db = N.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          disabled: o = !1,
          rovingFocus: n = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = _b(t), c = (0, cn.jH)(s), u = {
          role: "group",
          dir: c,
          ...d
        };
        return (0, P.jsx)(Nb, {
          scope: t,
          rovingFocus: n,
          disabled: o,
          children: n ? (0, P.jsx)(yb, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, P.jsx)(Ot.div, {
              ...u,
              ref: r
            })
          }) : (0, P.jsx)(Ot.div, {
            ...u,
            ref: r
          })
        })
      }), kb = "ToggleGroupItem", zb = N.forwardRef((e, r) => {
        const t = Ob(kb, e.__scopeToggleGroup),
          o = Sb(kb, e.__scopeToggleGroup),
          n = _b(e.__scopeToggleGroup),
          a = t.value.includes(e.value),
          s = o.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = N.useRef(null);
        return o.rovingFocus ? (0, P.jsx)(bb, {
          asChild: !0,
          ...n,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, P.jsx)(Ib, {
            ...i,
            ref: r
          })
        }) : (0, P.jsx)(Ib, {
          ...i,
          ref: r
        })
      });
      zb.displayName = kb;
      var Ib = N.forwardRef((e, r) => {
          const {
            __scopeToggleGroup: t,
            value: o,
            ...n
          } = e, a = Ob(kb, t), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, P.jsx)(hb, {
            ...i,
            ...n,
            ref: r,
            onPressedChange: e => {
              e ? a.onItemActivate(o) : a.onItemDeactivate(o)
            }
          })
        }),
        Tb = Cb,
        Eb = zb;

      function Lb(e) {
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

      function Vb(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ab(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Vb(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Lb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vb(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Mb(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var qb = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Fb = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ab(Ab({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qb(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Mb(e.variantClassNames, e => Mb(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Bb = "var(--foundry_zxwkyk2)",
        Xb = "var(--foundry_zxwkyk3)",
        Kb = Fb({
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
        Zb = Fb({
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
        Wb = Fb({
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
        Hb = "var(--foundry_zxwkyk1)",
        Gb = "var(--foundry_zxwkyk0)",
        Ub = Fb({
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
      const $b = (0, N.createContext)(null);

      function Yb() {
        const e = (0, N.useContext)($b);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const Qb = (0, N.forwardRef)(({
          testId: e,
          size: r,
          type: t = "single",
          ...o
        }, n) => {
          const a = (0, k.v6)({
            "data-testid": e,
            className: Kb({
              size: r
            }),
            type: t
          }, o);
          return (0, P.jsx)($b.Provider, {
            value: {
              size: r
            },
            children: (0, P.jsx)(Tb, {
              ref: n,
              ...a
            })
          })
        }),
        Jb = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Yb(), n = (0, k.v6)({
            "data-testid": e,
            className: Zb({
              size: o
            })
          }, r);
          return (0, P.jsx)(Eb, {
            ref: t,
            ...n
          })
        }),
        em = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Yb(), n = ws[e];
          return (0, P.jsx)(n, {
            label: "",
            ref: t,
            size: o,
            className: "foundry_zxwkykb",
            ...r
          })
        }),
        rm = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          status: t,
          ...o
        }, n) => {
          const a = (0, k.v6)({
            "data-testid": e,
            className: Ub({
              status: t
            }),
            style: (0, S.D)({
              [Gb]: r?.online,
              [Hb]: r?.offline,
              [Bb]: r?.away,
              [Xb]: r?.busy
            })
          }, o);
          return (0, P.jsx)("span", {
            ref: n,
            ...a
          })
        }),
        tm = (0, N.forwardRef)(({
          testId: e,
          variant: r = "default",
          ...t
        }, o) => {
          const {
            size: n
          } = Yb(), a = (0, k.v6)({
            "data-testid": e,
            className: Wb({
              variant: r,
              size: n
            })
          }, t);
          return (0, P.jsx)("span", {
            ref: o,
            ...a
          })
        });
      var om = "Popover",
        [nm, am] = (0, _t.A)(om, [Ht]),
        sm = Ht(),
        [im, dm] = nm(om),
        lm = e => {
          const {
            __scopePopover: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !1
          } = e, i = sm(r), d = N.useRef(null), [l, c] = N.useState(!1), [u, f] = (0, mo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: om
          });
          return (0, P.jsx)(co, {
            ...i,
            children: (0, P.jsx)(im, {
              scope: r,
              contentId: (0, At.B)(),
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
      lm.displayName = om;
      var cm = "PopoverAnchor",
        um = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = dm(cm, t), a = sm(t), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = n;
          return N.useEffect(() => (s(), () => i()), [s, i]), (0, P.jsx)(uo, {
            ...a,
            ...o,
            ref: r
          })
        });
      um.displayName = cm;
      var fm = "PopoverTrigger",
        pm = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = dm(fm, t), a = sm(t), s = (0, xt.s)(r, n.triggerRef), i = (0, P.jsx)(Ot.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.contentId,
            "data-state": Rm(n.open),
            ...o,
            ref: s,
            onClick: (0, wt.mK)(e.onClick, n.onOpenToggle)
          });
          return n.hasCustomAnchor ? i : (0, P.jsx)(uo, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      pm.displayName = fm;
      var vm = "PopoverPortal",
        [ym, bm] = nm(vm, {
          forceMount: void 0
        }),
        mm = e => {
          const {
            __scopePopover: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = dm(vm, r);
          return (0, P.jsx)(ym, {
            scope: r,
            forceMount: t,
            children: (0, P.jsx)(yo, {
              present: t || a.open,
              children: (0, P.jsx)(vo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      mm.displayName = vm;
      var hm = "PopoverContent",
        gm = N.forwardRef((e, r) => {
          const t = bm(hm, e.__scopePopover),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = dm(hm, e.__scopePopover);
          return (0, P.jsx)(yo, {
            present: o || a.open,
            children: a.modal ? (0, P.jsx)(xm, {
              ...n,
              ref: r
            }) : (0, P.jsx)(_m, {
              ...n,
              ref: r
            })
          })
        });
      gm.displayName = hm;
      var wm = (0, jt.TL)("PopoverContent.RemoveScroll"),
        xm = N.forwardRef((e, r) => {
          const t = dm(hm, e.__scopePopover),
            o = N.useRef(null),
            n = (0, xt.s)(r, o),
            a = N.useRef(!1);
          return N.useEffect(() => {
            const e = o.current;
            if (e) return (0, ta.Eq)(e)
          }, []), (0, P.jsx)(ra.A, {
            as: wm,
            allowPinchZoom: !0,
            children: (0, P.jsx)(Cm, {
              ...e,
              ref: n,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, wt.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || t.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, wt.mK)(e.onPointerDownOutside, e => {
                const r = e.detail.originalEvent,
                  t = 0 === r.button && !0 === r.ctrlKey,
                  o = 2 === r.button || t;
                a.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, wt.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        _m = N.forwardRef((e, r) => {
          const t = dm(hm, e.__scopePopover),
            o = N.useRef(!1),
            n = N.useRef(!1);
          return (0, P.jsx)(Cm, {
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
        Cm = N.forwardRef((e, r) => {
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
          } = e, f = dm(hm, t), p = sm(t);
          return (0, ea.Oh)(), (0, P.jsx)(Hn, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, P.jsx)(zt, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, P.jsx)(fo, {
                "data-state": Rm(f.open),
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
        jm = "PopoverClose",
        Om = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = dm(jm, t);
          return (0, P.jsx)(Ot.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, wt.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });
      Om.displayName = jm;
      var Pm = N.forwardRef((e, r) => {
        const {
          __scopePopover: t,
          ...o
        } = e, n = sm(t);
        return (0, P.jsx)(po, {
          ...n,
          ...o,
          ref: r
        })
      });

      function Rm(e) {
        return e ? "open" : "closed"
      }
      Pm.displayName = "PopoverArrow";
      var Nm = lm,
        Sm = um,
        Dm = pm,
        km = mm,
        zm = gm,
        Im = Om,
        Tm = Pm;

      function Em(e) {
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

      function Lm(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Vm(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Lm(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Em(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Lm(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Am(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Mm = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        qm = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Vm(Vm({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Mm(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Am(e.variantClassNames, e => Am(e, e => e.split(" ")[0]))
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
      const Fm = (0, N.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Bm = ({
          open: e,
          defaultOpen: r,
          onOpenChange: t,
          ...o
        }) => {
          const [n = !1, a] = (0, ue.ic)({
            prop: e,
            defaultProp: r ?? !1,
            onChange: t
          }), s = (0, k.v6)({
            open: n,
            onOpenChange: a
          }, o);
          return (0, P.jsx)(Fm.Provider, {
            value: {
              open: n,
              setOpen: a
            },
            children: (0, P.jsx)(Nm, {
              ...s
            })
          })
        },
        Xm = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, r);
          return (0, P.jsx)(Dm, {
            ref: t,
            ...o
          })
        }),
        Km = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Zm = (0, N.forwardRef)(({
          children: e,
          size: r = "MD",
          testId: t,
          ...o
        }, n) => {
          const {
            open: a
          } = (0, N.useContext)(Fm), s = (0, N.useRef)(null), i = (0, ue.UP)(s, n), {
            buttonProps: d
          } = (0, ue.sL)(o, s), l = (0, k.v6)({
            "data-testid": t,
            className: qm({
              size: r
            })
          }, d), c = a ? ke.ChevronUp : ke.ChevronDown;
          return (0, P.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, P.jsx)(c, {
              label: "",
              size: Km[r]
            })]
          })
        }),
        Wm = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e
          }, r);
          return (0, P.jsx)(Sm, {
            ref: t,
            ...o
          })
        }),
        Hm = (0, N.forwardRef)(({
          sideOffset: e = 6,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
            sideOffset: e,
            "data-testid": r,
            className: "foundry_lroh6l6"
          }, t);
          return (0, P.jsx)(zm, {
            ref: o,
            ...n
          })
        }),
        Gm = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, r);
          return (0, P.jsx)(Tm, {
            ref: t,
            ...o
          })
        }),
        Um = e => (0, P.jsx)(km, {
          ...e
        }),
        $m = e => (0, P.jsx)(Im, {
          ...e
        });

      function Ym(e) {
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

      function Qm(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Jm(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Qm(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ym(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qm(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function eh(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var rh = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        th = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Jm(Jm({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rh(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return eh(e.variantClassNames, e => eh(e, e => e.split(" ")[0]))
            }
          }, r
        },
        oh = "var(--foundry_rmorls2)",
        nh = th({
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
        ah = "var(--foundry_rmorls0)",
        sh = th({
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
        ih = "var(--foundry_rmorls3)",
        dh = "var(--foundry_rmorls1)",
        lh = th({
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
        ch = "Progress",
        [uh, fh] = (0, Jv.A)(ch),
        [ph, vh] = uh(ch),
        yh = N.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            value: o = null,
            max: n,
            getValueLabel: a = hh,
            ...s
          } = e;
          !n && 0 !== n || xh(n) || console.error(`Invalid prop \`max\` of value \`${n}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = xh(n) ? n : 100;
          null === o || _h(o, i) || console.error(`Invalid prop \`value\` of value \`${`${o}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = _h(o, i) ? o : null,
            l = wh(d) ? a(d, i) : void 0;
          return (0, P.jsx)(ph, {
            scope: t,
            value: d,
            max: i,
            children: (0, P.jsx)(ey.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": wh(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": gh(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: r
            })
          })
        });
      yh.displayName = ch;
      var bh = "ProgressIndicator",
        mh = N.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            ...o
          } = e, n = vh(bh, t);
          return (0, P.jsx)(ey.sG.div, {
            "data-state": gh(n.value, n.max),
            "data-value": n.value ?? void 0,
            "data-max": n.max,
            ...o,
            ref: r
          })
        });

      function hh(e, r) {
        return `${Math.round(e/r*100)}%`
      }

      function gh(e, r) {
        return null == e ? "indeterminate" : e === r ? "complete" : "loading"
      }

      function wh(e) {
        return "number" == typeof e
      }

      function xh(e) {
        return wh(e) && !isNaN(e) && e > 0
      }

      function _h(e, r) {
        return wh(e) && !isNaN(e) && e <= r && e >= 0
      }
      mh.displayName = bh;
      var Ch = yh,
        jh = mh;
      const Oh = (0, N.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Ph = (0, N.forwardRef)(({
          size: e = "MD",
          max: r,
          value: t,
          ...o
        }, n) => {
          const a = Math.round(t / r * 100),
            s = "number" != typeof t || "number" != typeof r;
          return (0, P.jsx)(Oh.Provider, {
            value: {
              value: t,
              max: r,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, P.jsx)(Rh, {
              ...o,
              ref: n
            })
          })
        }),
        Rh = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, k.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, t),
            a = r ? fe.DX : "div";
          return (0, P.jsx)(a, {
            ...n,
            ref: o
          })
        }),
        Nh = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const {
            value: n,
            max: a,
            size: s
          } = (0, N.useContext)(Oh), i = (0, k.v6)({
            "data-testid": e,
            className: sh({
              size: s
            }),
            value: n,
            max: a,
            style: (0, S.D)({
              [ih]: r
            }),
            "data-track": !0
          }, t);
          return (0, P.jsx)(Ch, {
            ref: o,
            ...i
          })
        }),
        Sh = (0, N.forwardRef)(({
          testId: e,
          transitionDuration: r = 500,
          colorOverride: t,
          ...o
        }, n) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, N.useContext)(Oh), i = s ? "-100%" : `-${100-a}%`, d = (0, k.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, S.D)({
              [ah]: i,
              [dh]: `${r}ms`,
              [oh]: t
            })
          }, o);
          return (0, P.jsx)(jh, {
            ref: n,
            ...d
          })
        }),
        Dh = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const {
            size: n
          } = (0, N.useContext)(Oh), a = (0, k.v6)({
            "data-testid": r,
            className: nh({
              size: n
            }),
            "aria-hidden": !0
          }, t), s = e ? fe.DX : "span";
          return (0, P.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        kh = (0, N.forwardRef)(({
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
          } = (0, N.useContext)(Oh), l = (0, k.v6)({
            "data-testid": e,
            className: nh({
              size: s
            }),
            "aria-hidden": !0
          }, t);
          return d ? (0, P.jsx)("span", {
            ref: o,
            ...l
          }) : "percentage" === r ? (0, P.jsxs)("span", {
            ref: o,
            ...l,
            children: [i, " ", (0, P.jsx)("span", {
              className: lh({
                size: s
              }),
              children: "%"
            })]
          }) : (0, P.jsxs)("span", {
            ref: o,
            ...l,
            children: [n, "/", a]
          })
        })
    }
  }
]);