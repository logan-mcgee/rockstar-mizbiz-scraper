try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "fa4dfcd2-9bab-41e9-8d4c-622c6a023502", e._sentryDebugIdIdentifier = "sentry-dbid-fa4dfcd2-9bab-41e9-8d4c-622c6a023502")
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
  [6935], {
    26935(e, r, t) {
      t.r(r), t.d(r, {
        Accordion: () => P,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => x,
        Badge: () => h,
        Body: () => Pr,
        Breadcrumbs: () => b,
        Button: () => Ge,
        Checkbox: () => d,
        ChipGroup: () => C,
        Code: () => Sr,
        Dialog: () => w,
        Display: () => Nr,
        Divider: () => ir,
        Dropdown: () => a,
        Heading: () => kr,
        IconButton: () => er,
        Label: () => Ir,
        Lightbox: () => n,
        Loader: () => hr,
        Pagination: () => _,
        Popover: () => j,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => De,
        Switch: () => s,
        Tag: () => y,
        Text: () => Lr,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => Er,
        Toast: () => m,
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
        Caption: () => Ha,
        Close: () => Ja,
        Content: () => Xa,
        Controls: () => Ua,
        CssVars: () => ts,
        Download: () => rs,
        Image: () => Za,
        Keyboard: () => $a,
        LightboxContext: () => Ta,
        OpenIcon: () => qa,
        Overlay: () => Ba,
        Portal: () => Fa,
        Reset: () => es,
        Root: () => Ea,
        RootImplContext: () => La,
        Thumbnail: () => Ma,
        Trigger: () => Va,
        Zoom: () => Qa,
        ZoomPan: () => Ga
      });
      var a = {};
      t.r(a), t.d(a, {
        Content: () => Cd,
        Description: () => Dd,
        Hint: () => kd,
        Label: () => Nd,
        Option: () => zd,
        OptionIcon: () => Td,
        OptionText: () => Id,
        Portal: () => Ed,
        Root: () => _d,
        ScrollArea: () => Od,
        StatusIcon: () => Ad,
        StatusRoot: () => Ld,
        StatusText: () => Vd,
        Trigger: () => Pd,
        TriggerIcon: () => Sd,
        TriggerText: () => Rd,
        Viewport: () => jd,
        useDropdownContext: () => xd
      });
      var s = {};
      t.r(s), t.d(s, {
        Description: () => ol,
        Input: () => rl,
        Label: () => tl,
        Root: () => el,
        useSwitchContext: () => Jd
      });
      var i = {};
      t.r(i), t.d(i, {
        CheckLG: () => sl,
        CheckMD: () => al,
        CheckXL: () => il,
        DashLG: () => ll,
        DashMD: () => dl,
        DashXL: () => cl
      });
      var d = {};
      t.r(d), t.d(d, {
        Description: () => Sl,
        ErrorText: () => Nl,
        Group: () => zl,
        GroupDescription: () => Tl,
        GroupErrorText: () => Ll,
        GroupItems: () => El,
        GroupLabel: () => Il,
        Input: () => Pl,
        Label: () => Rl,
        Root: () => Ol,
        useGroupContext: () => kl
      });
      var l = {};
      t.r(l), t.d(l, {
        Description: () => Ql,
        Hint: () => Jl,
        Input: () => $l,
        Label: () => Yl,
        Root: () => Ul,
        RootContext: () => Zl,
        StatusIcon: () => rc,
        StatusRoot: () => ec,
        StatusText: () => tc,
        useTextAreaContext: () => Hl
      });
      var c = {};
      t.r(c), t.d(c, {
        DotLG: () => Sc,
        DotMD: () => Rc,
        DotXL: () => Nc
      });
      var u = {};
      t.r(u), t.d(u, {
        Description: () => hc,
        Input: () => kc,
        Label: () => bc,
        Option: () => Dc,
        OptionDescription: () => Ic,
        OptionLabel: () => zc,
        Options: () => mc,
        Root: () => yc,
        StatusIcon: () => wc,
        StatusRoot: () => gc,
        StatusText: () => xc,
        useRadioGroupContext: () => vc
      });
      var f = {};
      t.r(f), t.d(f, {
        Button: () => tu,
        Control: () => Jc,
        Description: () => nu,
        Hint: () => Qc,
        Icon: () => ru,
        Input: () => eu,
        Label: () => $c,
        PasswordButton: () => ou,
        Root: () => Yc,
        StatusIcon: () => su,
        StatusRoot: () => au,
        StatusText: () => iu
      });
      var p = {};
      t.r(p), t.d(p, {
        Body: () => Du,
        CloseButton: () => Vu,
        Description: () => Tu,
        ErrorText: () => Au,
        Footer: () => Lu,
        Header: () => Nu,
        Icon: () => zu,
        Link: () => Eu,
        Root: () => Su,
        RootContext: () => Pu,
        Title: () => Iu,
        iconStatusMap: () => ku,
        useAlertContext: () => Ru
      });
      var v = {};
      t.r(v), t.d(v, {
        Alert: () => tf,
        CloseButton: () => af,
        Description: () => rf,
        Icon: () => ef,
        Link: () => nf,
        PaginationCounter: () => cf,
        PaginationNav: () => sf,
        PaginationNextButton: () => df,
        PaginationPrevButton: () => lf,
        PaginationViewport: () => of,
        Root: () => Qu,
        RootContext: () => Yu,
        iconStatusMap: () => Ju,
        useAlertBannerContext: () => $u
      });
      var y = {};
      t.r(y), t.d(y, {
        CloseButton: () => Of,
        Icon: () => jf,
        Label: () => Cf,
        Root: () => _f,
        RootContext: () => wf,
        useTagContext: () => xf
      });
      var m = {};
      t.r(m), t.d(m, {
        Action: () => Np,
        CloseButton: () => Dp,
        Description: () => Pp,
        Icon: () => Sp,
        Provider: () => xp,
        Root: () => Op,
        RootContext: () => Cp,
        Viewport: () => _p,
        iconAppearanceMap: () => Rp,
        useToastContext: () => jp
      });
      var b = {};
      t.r(b), t.d(b, {
        Icon: () => Kp,
        Item: () => Gp,
        OverflowMenu: () => Wp,
        OverflowMenuItem: () => Zp,
        Root: () => Xp,
        RootContext: () => Bp,
        useBreadcrumbsContext: () => Fp
      });
      var h = {};
      t.r(h), t.d(h, {
        Icon: () => nv,
        Label: () => ov,
        Root: () => tv,
        useBadgeContext: () => rv
      });
      var g = {};
      t.r(g), t.d(g, {
        Corner: () => bv,
        Root: () => pv,
        Scrollbar: () => yv,
        Thumb: () => mv,
        Viewport: () => vv
      });
      var w = {};
      t.r(w), t.d(w, {
        ActionArea: () => Fv,
        CloseButton: () => qv,
        Content: () => zv,
        Description: () => Tv,
        Footer: () => Bv,
        Header: () => Av,
        HeaderButton: () => Mv,
        HeaderTitle: () => Vv,
        Layout: () => Lv,
        Overlay: () => kv,
        Portal: () => Dv,
        Root: () => Rv,
        ScrollArea: () => Ev,
        Title: () => Iv,
        Trigger: () => Nv
      });
      var x = {};
      t.r(x), t.d(x, {
        Image: () => by,
        Root: () => my,
        StatusIndicator: () => hy,
        useAvatarContext: () => yy
      });
      var _ = {};
      t.r(_), t.d(_, {
        Controls: () => ky,
        Dropdown: () => Ly,
        DropdownLabel: () => Ey,
        Ellipsis: () => Dy,
        Item: () => Ry,
        Label: () => Vy,
        Next: () => Ny,
        Option: () => Ay,
        Pages: () => Py,
        Prev: () => Sy,
        ResultsPerPage: () => Ty,
        Root: () => Oy
      });
      var C = {};
      t.r(C), t.d(C, {
        Icon: () => Vm,
        Item: () => Am,
        Label: () => qm,
        Root: () => Lm,
        StatusIndicator: () => Mm,
        useChipGroupContext: () => Em
      });
      var j = {};
      t.r(j), t.d(j, {
        Anchor: () => Db,
        Arrow: () => zb,
        Close: () => Tb,
        Content: () => kb,
        Portal: () => Ib,
        Root: () => Pb,
        RootContext: () => Ob,
        Trigger: () => Rb,
        TriggerButton: () => Nb
      });
      var O = {};
      t.r(O), t.d(O, {
        Indicator: () => ph,
        Label: () => vh,
        Root: () => ch,
        Track: () => fh,
        UnitLabel: () => yh
      });
      var P = {};
      t.r(P), t.d(P, {
        Content: () => Rg,
        Header: () => Cg,
        Icon: () => Og,
        Item: () => _g,
        Root: () => wg,
        Trigger: () => jg,
        TriggerIcon: () => Pg
      });
      var R = t(39793),
        S = t(11350),
        N = t(93082),
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
        W = "var(--foundry_1qqcnua6)",
        Z = "var(--foundry_1qqcnua7)",
        H = "var(--foundry_1qqcnua8)",
        U = "var(--foundry_1qqcnua9)",
        Y = "var(--foundry_1qqcnuaa)",
        $ = "var(--foundry_1qqcnuab)",
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
            text: I(W),
            outline: I(Z)
          },
          focus: {
            background: I(H),
            border: I(U),
            text: I(Y),
            outline: I($)
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
          (0, N.useEffect)(() => {
            if (!e.current || !a || !l) return;
            const c = `${a}:${r}:${t}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, z.IO)(c, () => {
                const e = (0, S.J1)(a);
                return {
                  text: d || (e > r ? k.color.black.static[100] : k.color.white.static[100]),
                  hover: s || (e >= t ? (0, S.e$)(a, o) : (0, S.a)(a, o)),
                  pressed: i || (e >= t ? (0, S.e$)(a, n) : (0, S.a)(a, n))
                }
              });
            return e.current.style.setProperty(ce.enabled.background, a), e.current.style.setProperty(ce.enabled.border, a), e.current.style.setProperty(ce.enabled.text, u), e.current.style.setProperty(ce.hover.background, f), e.current.style.setProperty(ce.hover.border, f), e.current.style.setProperty(ce.hover.text, u), e.current.style.setProperty(ce.focus.background, f), e.current.style.setProperty(ce.focus.border, f), e.current.style.setProperty(ce.focus.text, u), e.current.style.setProperty(ce.pressed.background, p), e.current.style.setProperty(ce.pressed.border, p), e.current.style.setProperty(ce.pressed.text, u), e.current.style.setProperty(ce.loading.background, f), e.current.style.setProperty(ce.loading.border, f), e.current.style.setProperty(ce.loading.text, u), () => {
              e.current?.style.removeProperty(ce.enabled.background), e.current?.style.removeProperty(ce.enabled.border), e.current?.style.removeProperty(ce.enabled.text), e.current?.style.removeProperty(ce.hover.background), e.current?.style.removeProperty(ce.hover.border), e.current?.style.removeProperty(ce.hover.text), e.current?.style.removeProperty(ce.focus.background), e.current?.style.removeProperty(ce.focus.border), e.current?.style.removeProperty(ce.focus.text), e.current?.style.removeProperty(ce.pressed.background), e.current?.style.removeProperty(ce.pressed.border), e.current?.style.removeProperty(ce.pressed.text), e.current?.style.removeProperty(ce.loading.background), e.current?.style.removeProperty(ce.loading.border), e.current?.style.removeProperty(ce.loading.text)
            }
          }, [e.current, r, t, o, n, a, s, i, d, l, ...c])
        };
      var fe = t(56433),
        pe = t(69088);
      const ve = (0, N.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        ye = () => (0, N.useContext)(ve),
        me = () => {
          const {
            platformScale: e
          } = ye();
          return e
        };
      var be = t(89525);
      const he = e => "dark" === e ? be.xW.dark : be.xW.light;
      const ge = () => z.X3 ? null : document.body;
      (0, N.forwardRef)(({
        children: e,
        className: r,
        container: t = ge(),
        asChild: o,
        colorScheme: n,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, N.useRef)(null),
          f = (0, fe.UP)(u, c),
          p = (0, N.useRef)(t),
          {
            ratio: v,
            scale: y
          } = function(e) {
            const [r, t] = (0, N.useState)(e.platformScale || e.defaultPlatformScale), o = (0, N.useCallback)(r => {
              t(r), e.onPlatformScaleChange?.(r)
            }, [e.onPlatformScaleChange]), n = (0, N.useRef)([]), a = () => {
              if (!z.X3) {
                for (const {
                    handler: e,
                    matchMedia: r
                  }
                  of n.current) r.removeEventListener("change", e);
                n.current = []
              }
            };
            return (0, N.useEffect)(() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!z.X3) {
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
            appearanceClass: m,
            otherAppearanceClasses: b,
            providerColor: h
          } = function({
            colorScheme: e,
            defaultColorScheme: r = "dark"
          }) {
            const t = (0, fe.Ub)("(prefers-color-scheme: light)"),
              o = (0, fe.Ub)("(prefers-color-scheme: dark)"),
              n = "system" !== e && e || t && "light" || o && "dark" || r,
              a = (0, N.useMemo)(() => he(n), [n]),
              s = (0, N.useMemo)(() => (e => {
                const r = he(e);
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
          const s = (0, fe.ZC)(a),
            i = (0, fe.ZC)(e.current);
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
          appearanceClass: m,
          otherAppearanceClasses: b,
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
      var we = t(77301);

      function xe(e) {
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

      function _e(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ce(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? _e(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = xe(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _e(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function je(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Oe, Pe, Re = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Se = (Oe = {
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
        }, Pe = e => {
          var r = Oe.defaultClassName,
            t = Ce(Ce({}, Oe.defaultVariants), e);
          for (var o in t) {
            var n, a = null !== (n = t[o]) && void 0 !== n ? n : Oe.defaultVariants[o];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = Oe.variantClassNames[o][s];
              i && (r += " " + i)
            }
          }
          for (var [d, l] of Oe.compoundVariants) Re(d, t, Oe.defaultVariants) && (r += " " + l);
          return r
        }, Pe.variants = () => Object.keys(Oe.variantClassNames), Pe.classNames = {
          get base() {
            return Oe.defaultClassName.split(" ")[0]
          },
          get variants() {
            return je(Oe.variantClassNames, e => je(e, e => e.split(" ")[0]))
          }
        }, Pe);
      const Ne = "pageMD",
        De = (0, N.forwardRef)(({
          label: e,
          hideTrack: r = !1,
          size: t = Ne,
          testId: o,
          ...n
        }, a) => {
          const s = me(),
            i = "string" == typeof t ? t : t?.[s] ?? t.default ?? Ne,
            d = (0, z.v6)({
              className: Se({
                size: i
              }),
              "data-testid": o,
              "aria-label": e
            }, n);
          return (0, R.jsx)(we.b, {
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
      var ke = t(81270),
        ze = t(53368),
        Ie = {};

      function Te(e) {
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

      function Ee(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Le(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ee(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Te(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ee(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ae(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      t.r(Ie), t.d(Ie, {
        Activity: () => ze.Il,
        ArrowDown: () => ze.yd,
        ArrowLeft: () => ze.nk,
        ArrowRight: () => ze.Qp,
        ArrowRightLeft: () => ze.nF,
        ArrowUp: () => ze.Do,
        ArrowUpDown: () => ze.hD,
        Book: () => ze.E3,
        Bug: () => ze.zP,
        BugOff: () => ze.k_,
        Calendar: () => ze.Vv,
        CalendarOff: () => ze.is,
        Car: () => ze.TH,
        CarSide: () => ze.cY,
        ChartSpline: () => ze.m3,
        Check: () => ze.Jl,
        ChevronDown: () => ze.yQ,
        ChevronFirst: () => ze.mf,
        ChevronLast: () => ze.Ou,
        ChevronLeft: () => ze.JG,
        ChevronRight: () => ze.c_,
        ChevronUp: () => ze.rX,
        ChevronsDownUp: () => ze.WE,
        ChevronsLeftRight: () => ze.UQ,
        ChevronsUpDown: () => ze.Ml,
        Circle: () => ze.jl,
        CircleCheck: () => ze.rW,
        CircleCheckFilled: () => ze.Dw,
        CircleDollarSign: () => ze.OJ,
        CircleHelp: () => ze.YC,
        CircleMinus: () => ze.ZX,
        CircleMinusFilled: () => ze.r0,
        CirclePerson: () => ze.q_,
        CircleSlash: () => ze.o6,
        CircleX: () => ze.RT,
        Clipboard: () => ze.B0,
        Clock: () => ze.zD,
        CloudAlert: () => ze.K4,
        CloudDownload: () => ze.MQ,
        CloudUpload: () => ze.bK,
        CodeXml: () => ze.bv,
        Copy: () => ze.QR,
        Cpu: () => ze.fX,
        CreditCard: () => ze.y5,
        Database: () => ze.Wm,
        Discord: () => ze.bY,
        DollarSign: () => ze.G9,
        Download: () => ze.f5,
        EllipsisVertical: () => ze.Yb,
        Envelope: () => ze.Lh,
        EnvelopeOpen: () => ze.jd,
        EpicGames: () => ze.fk,
        ExternalLink: () => ze.Gr,
        Eye: () => ze.kU,
        EyeClosed: () => ze.Cz,
        EyeOff: () => ze.X_,
        Facebook: () => ze.f1,
        FastForward: () => ze.Ej,
        FileText: () => ze.iU,
        Files: () => ze.sv,
        Filter: () => ze.dJ,
        Flag: () => ze.lN,
        FlagOff: () => ze.Ih,
        Gear: () => ze.OB,
        Globe: () => ze.qz,
        Handshake: () => ze.g6,
        Headset: () => ze.BC,
        Heart: () => ze.B1,
        HeartPulse: () => ze.iY,
        House: () => ze.tT,
        Image: () => ze._V,
        Info: () => ze.R2,
        Instagram: () => ze.pd,
        LayoutGrid: () => ze.D6,
        Lightbulb: () => ze.g5,
        Link: () => ze.N_,
        List: () => ze.B8,
        ListFilter: () => ze.xt,
        ListMusic: () => ze.w7,
        LockKeyhole: () => ze.NT,
        LockPassword: () => ze.HI,
        LogOut: () => ze.nU,
        MapPin: () => ze.sD,
        Maximize: () => ze.hz,
        Maximize2: () => ze.h1,
        Menu: () => ze.W1,
        MessageSquareText: () => ze.AJ,
        Mic: () => ze.GO,
        MicFilled: () => ze.cX,
        Minimize: () => ze.Xj,
        Minimize2: () => ze.xq,
        Minus: () => ze.Hs,
        Monitor: () => ze.VA,
        Moon: () => ze.AX,
        NintendoSwitch: () => ze.Su,
        PaperPlane: () => ze.d8,
        Paperclip: () => ze.xv,
        PartialCircle: () => ze.IM,
        Pause: () => ze.vR,
        Pencil: () => ze.gH,
        PencilOff: () => ze.hE,
        Person: () => ze._A,
        PersonBlock: () => ze.hs,
        PersonMinus: () => ze._E,
        PersonPlus: () => ze.c1,
        Pin: () => ze.yU,
        PinFilled: () => ze.IF,
        Play: () => ze.jG,
        Playstation: () => ze.p6,
        Plus: () => ze.FW,
        Power: () => ze.aJ,
        Property: () => ze.mA,
        Reddit: () => ze.TZ,
        RefreshCcw: () => ze.PM,
        RefreshCw: () => ze.e9,
        RefreshCwOff: () => ze.X0,
        Replay: () => ze.eJ,
        Rewind: () => ze.Y8,
        Save: () => ze.eM,
        Search: () => ze.vj,
        Server: () => ze.gq,
        ShieldAlert: () => ze.yZ,
        ShieldCheck: () => ze.ox,
        ShoppingBag: () => ze.Nw,
        SkipBack: () => ze.L9,
        SkipForward: () => ze.xP,
        Star: () => ze.FE,
        StarOff: () => ze.UM,
        Steam: () => ze.Rv,
        Stop: () => ze.VG,
        Store: () => ze.il,
        Sun: () => ze.bd,
        ThumbsDown: () => ze.z9,
        ThumbsUp: () => ze.tw,
        Tiktok: () => ze.Tc,
        Trash: () => ze.lM,
        TriangleAlert: () => ze.lW,
        Trophy: () => ze.Xs,
        Truck: () => ze.No,
        Twitch: () => ze.YA,
        Twitter: () => ze.KK,
        TwoPeople: () => ze.LM,
        Undo: () => ze.Vn,
        Unlink: () => ze.c2,
        Upload: () => ze._O,
        UserCouple: () => ze.Cn,
        UserGroup: () => ze.zr,
        Volume: () => ze.fS,
        Volume1: () => ze.c6,
        Volume2: () => ze.jI,
        VolumeX: () => ze.XL,
        Wallet: () => ze.uW,
        Weapon: () => ze.Re,
        Wifi: () => ze.MJ,
        WifiOff: () => ze.RQ,
        Wrench: () => ze.pi,
        X: () => ze.X,
        Xbox: () => ze.ms,
        Youtube: () => ze.k,
        ZoomIn: () => ze.$Z,
        ZoomOut: () => ze.en
      });
      var Ve = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Me = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Le(Le({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ve(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ae(e.variantClassNames, e => Ae(e, e => e.split(" ")[0]))
            }
          }, r
        },
        qe = Me({
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
      Me({
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
      var Fe = Me({
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
        Be = Me({
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
        Xe = Me({
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
      const Ge = (0, N.forwardRef)(({
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
        override_pressedLuminance: m = .15,
        override_backgroundColor: b,
        override_hoverColor: h,
        override_pressedColor: g,
        override_textColor: w,
        ...x
      }, _) => {
        const C = (0, N.useRef)(null),
          j = (0, fe.UP)(C, _),
          O = me(),
          P = "string" == typeof d ? d : d?.[O] ?? d.default ?? "MD",
          {
            buttonProps: S
          } = (0, fe.sL)((0, z.v6)(x, {
            isLoading: c,
            preventFocusOnPress: f
          }), C);
        ue({
          refs: {
            buttonRef: C
          },
          config: {
            textLuminance: v,
            darkenLuminance: p,
            hoverLuminance: y,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: b,
            hoverColor: h,
            pressedColor: g,
            textColor: w
          },
          enabled: "accent" === i
        }, [r]);
        const D = (0, z.v6)({
            className: qe({
              appearance: i,
              size: P,
              fullWidth: l,
              iconLeft: !!o,
              iconRight: !!a
            }),
            "data-testid": e
          }, S),
          k = o && Ie[o],
          I = a && Ie[a],
          T = r ? pe.DX : "button",
          E = l && (I || I && k);
        return (0, R.jsxs)(T, {
          ref: j,
          ...D,
          children: [E && (0, R.jsx)("div", {
            className: "foundry_17pcofy15"
          }), k && (0, R.jsx)(k, {
            label: n || "",
            size: P,
            className: (0, ke.clsx)(Fe({
              size: P
            }), "foundry_17pcofy11")
          }), (0, R.jsx)(pe.xV, {
            children: t
          }), I && (0, R.jsx)(I, {
            label: s || "",
            size: P,
            className: (0, ke.clsx)(Fe({
              size: P
            }), Be({
              fullWidth: l
            }))
          }), c && (0, R.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, R.jsx)(De, {
              label: u || "",
              size: "inline" + ("XL" === P ? "LG" : "MD"),
              hideTrack: !0,
              className: Xe({
                size: P
              })
            })
          })]
        })
      });

      function Ke(e) {
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

      function We(e, r) {
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
          r % 2 ? We(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ke(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : We(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function He(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Ue = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ye = e => {
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
            for (var [l, c] of e.compoundVariants) Ue(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return He(e.variantClassNames, e => He(e, e => e.split(" ")[0]))
            }
          }, r
        },
        $e = Ye({
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
        Qe = Ye({
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
        Je = Ye({
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
      const er = (0, N.forwardRef)(({
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
        override_hoverColor: m,
        override_pressedColor: b,
        override_textColor: h,
        ...g
      }, w) => {
        const x = (0, N.useRef)(null),
          _ = (0, fe.UP)(x, w),
          C = me(),
          j = "string" == typeof s ? s : s?.[C] ?? s.default ?? "LG",
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
            hoverColor: m,
            pressedColor: b,
            textColor: h
          },
          enabled: "accent" === n
        }, [r]);
        const P = (0, z.v6)({
            className: Qe({
              appearance: n,
              size: j,
              fullWidth: a
            }),
            "data-testid": e
          }, O),
          S = Ie[t],
          D = r ? pe.DX : "button";
        return (0, R.jsxs)(D, {
          ref: _,
          ...P,
          children: [S && (0, R.jsx)(S, {
            label: o || "",
            size: j,
            className: $e({
              size: j
            })
          }), (0, R.jsx)(pe.xV, {
            children: i
          }), d && (0, R.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, R.jsx)(De, {
              label: l || "",
              size: j && "SM" !== j ? `inline${j}` : "inlineMD",
              hideTrack: !0,
              className: Je({
                size: j
              })
            })
          })]
        })
      });

      function rr(e) {
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

      function tr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function or(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? tr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = rr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function nr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ar = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        sr = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = or(or({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ar(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nr(e.variantClassNames, e => nr(e, e => e.split(" ")[0]))
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
      const ir = (0, N.forwardRef)(({
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
          className: (0, ke.clsx)(sr({
            thickness: t,
            orientation: r
          }), e),
          role: l,
          "aria-orientation": r,
          "data-testid": a,
          ...s
        })
      });

      function dr(e) {
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

      function lr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function cr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? lr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = dr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : lr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ur(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var fr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        pr = "var(--foundry_9dxgbc2)",
        vr = "var(--foundry_9dxgbc3)",
        yr = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = cr(cr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) fr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ur(e.variantClassNames, e => ur(e, e => e.split(" ")[0]))
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
        mr = "var(--foundry_9dxgbc0)",
        br = "var(--foundry_9dxgbc1)";
      const hr = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        children: t,
        colorOverride: o,
        label: n,
        size: a = "MD",
        ...s
      }, i) => {
        const d = me(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, z.v6)({
            className: yr({
              size: l
            }),
            "data-testid": r,
            style: (0, D.D)({
              [mr]: o?.pulseColorBackground,
              [br]: o?.pulseColorForeground,
              [pr]: o?.gradientColorBackground,
              [vr]: o?.gradientColorForeground
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

      function gr(e) {
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

      function wr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function xr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? wr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = gr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function _r(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Cr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        jr = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = xr(xr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _r(e.variantClassNames, e => _r(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Or = jr({
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
      const Pr = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? pe.DX : "p",
          i = (0, z.v6)({
            className: Or({
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
      var Rr = jr({
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
      const Sr = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "default",
          ...o
        }, n) => {
          const a = e ? pe.DX : "p",
            s = (0, z.v6)({
              className: Rr({
                appearance: t
              })
            }, o);
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        }),
        Nr = (0, N.forwardRef)(({
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
      var Dr = jr({
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
      const kr = (0, N.forwardRef)(({
        asChild: e,
        level: r,
        testId: t,
        ...o
      }, n) => {
        const a = e ? pe.DX : `h${7===r?6:r}`,
          s = (0, z.v6)(o, {
            className: Dr({
              level: r
            })
          });
        return (0, R.jsx)(a, {
          ref: n,
          "data-testid": t,
          ...s
        })
      });
      var zr = jr({
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
      const Ir = (0, N.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? pe.DX : "p",
          i = (0, z.v6)({
            className: zr({
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
      var Tr = jr({
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
      const Er = {
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
        Lr = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          semantic: t = "default",
          ...o
        }, n) => {
          const a = e ? pe.DX : Er[t] || "span",
            s = (0, z.v6)(o, {
              className: Tr({
                semantic: t
              })
            });
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        });
      var Ar = t(93529),
        Vr = t(99206),
        Mr = t(34811);
      const qr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((r, t) => {
        e.onload = () => r(), e.onerror = t
      }), Fr = ([e, r]) => ({
        x: e,
        y: r
      }), Br = (e, r) => (e.x = r.x, e.y = r.y, e), Xr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Gr = (e, r = 3) => Number(parseFloat(`${e}`).toFixed(r)), Kr = (e, r, t) => Math.min(Math.max(e, r), t);
      var Wr = t(90004);

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

      function Hr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ur(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Hr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Zr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Yr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var $r = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Qr = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ur(Ur({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) $r(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yr(e.variantClassNames, e => Yr(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Jr = Qr({
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
        et = Qr({
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
      Ar.os.registerPlugin(Vr.L);
      const rt = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        tt = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        ot = I("var(--foundry_1a74xwb0)");
      var nt = t(49764);
      const at = {
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
      class st {
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
          return t ? r : Kr(r, this.max[e], this.min[e])
        }
      }
      class it {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Gr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            r = e.w / this.elementSize.w,
            t = e.h / this.elementSize.h;
          return Gr(t < r ? t : r)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Gr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class dt {
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
      class lt {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(r) ? "x" : "y", Br(this.startPan, this.slide.pan)
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
          })(this.prevTap, o) < 25 && this.slide.tapHandler.doubleTap(o, n)) : (Br(this.prevTap, {
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
      class ct {
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
          e.src = this.thumbnail.currentSrc ?? "", await qr(e)
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
      class ut {
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
      class ft extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, r, t, o) {
          super(e), this.point = t, this.tapTarget = r, this.originalEvent = o
        }
      }
      class pt extends dt {
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
          if (!this.dispatch(e, new ft(e, r, t, o)).defaultPrevented) switch (this.options[e]) {
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
      class vt {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Fr(e), this.startZoomDistance = r, this.wasOverFitZoomLevel = !1, Br(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [r]
        }) {
          const t = this.slide.zoomLevels.min,
            o = this.slide.zoomLevels.max;
          this.zoomPoint = Fr(e);
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
            a = Br({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Br({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = r, Br(this.startPan, a)), o && (s = {
            x: this.calculatePanForZoomLevel("x", t),
            y: this.calculatePanForZoomLevel("y", t)
          }), this.slide.setZoomLevel(t, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(r, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || o || n) && (Br(this.slide.pan, s), this.slide.setZoomLevel(t))
        }
      }
      class yt {
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
      class mt extends dt {
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
          super(), this.width = e, this.height = r, this.opener = new ct({
            slide: this
          }), this.bounds = new st({
            slide: this
          }), this.dragHandler = new lt({
            options: a,
            slide: this
          }), this.scrollWheel = new ut({
            slide: this
          }), this.zoomHandler = new vt({
            slide: this
          }), this.zoomLevels = new it({
            options: t,
            slide: this
          }), this.tapHandler = new pt({
            options: o,
            slide: this
          }), this.panAreaSize = new yt({
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
          e = Gr(e), t || (e = Kr(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", r, o), this.pan.y = this.calculateZoomToPanOffset("y", r, o), Xr(this.pan)
        }
        toggleZoom(e) {
          const r = this.currZoomLevel,
            t = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, r), this.pan.y = this.calculateZoomToPanOffset("y", e, r), Xr(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Br(this.pan, this.bounds.center)
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
      var bt = t(74268);
      const ht = (0, nt.YK)({
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
      var gt = "foundry_bc732x1";
      const wt = (0, N.forwardRef)(({
        shortcut: e,
        isInline: r,
        onShortcut: t
      }, o) => ((0, Wr.vC)(e, e => t?.(e), [t]), (0, R.jsx)(Pr, {
        size: "XS",
        className: (0, ke.clsx)("foundry_bc732x0", {
          [gt]: r
        }),
        asChild: !0,
        children: (0, R.jsx)("kbd", {
          ref: o,
          children: e
        })
      })));
      var xt, _t = t(71433),
        Ct = t(39467),
        jt = t(64239),
        Ot = t(54958),
        Pt = t(13165),
        Rt = t(94660),
        St = t(61144),
        Nt = "dismissableLayer.update",
        Dt = N.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        kt = N.forwardRef((e, r) => {
          const {
            disableOutsidePointerEvents: t = !1,
            deferPointerDownOutside: o = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = N.useContext(Dt), [u, f] = N.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = N.useState({}), y = (0, jt.s)(r, e => f(e)), m = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), h = m.indexOf(b), g = u ? m.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = g >= h, _ = N.useRef(!1), C = function(e, r) {
            const {
              ownerDocument: t = globalThis?.document,
              deferPointerDownOutside: o = !1,
              isDeferredPointerDownOutsideRef: n,
              dismissableSurfaces: a
            } = r, s = (0, Rt.c)(e), i = N.useRef(!1), d = N.useRef(!1), l = N.useRef(new Map), c = N.useRef(() => {});
            return N.useEffect(() => {
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
                      e(), r || Tt("dismissableLayer.pointerDownOutside", s, i, {
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
          }), j = function(e, r = globalThis?.document) {
            const t = (0, Rt.c)(e),
              o = N.useRef(!1);
            return N.useEffect(() => {
              const e = e => {
                e.target && !o.current && Tt("dismissableLayer.focusOutside", t, {
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
          return (0, St.U)(e => {
            g === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }, p), N.useEffect(() => {
            if (u) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (xt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), It(), () => {
              t && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = xt))
            }
          }, [u, p, t, c]), N.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), It())
          }, [u, c]), N.useEffect(() => {
            const e = () => v({});
            return document.addEventListener(Nt, e), () => document.removeEventListener(Nt, e)
          }, []), (0, R.jsx)(Pt.sG.div, {
            ...l,
            ref: y,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Ct.mK)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, Ct.mK)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, Ct.mK)(e.onPointerDownCapture, C.onPointerDownCapture)
          })
        });
      kt.displayName = "DismissableLayer";
      var zt = N.forwardRef((e, r) => {
        const t = N.useContext(Dt),
          o = N.useRef(null),
          n = (0, jt.s)(r, o);
        return N.useEffect(() => {
          const e = o.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }, [t.branches]), (0, R.jsx)(Pt.sG.div, {
          ...e,
          ref: n
        })
      });

      function It() {
        const e = new CustomEvent(Nt);
        document.dispatchEvent(e)
      }

      function Tt(e, r, t, {
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
        }), o ? (0, Pt.hO)(n, a) : n.dispatchEvent(a)
      }
      zt.displayName = "DismissableLayerBranch";
      var Et = kt,
        Lt = zt,
        At = t(94296),
        Vt = t(17966),
        Mt = t(10376),
        qt = N.forwardRef((e, r) => {
          const {
            children: t,
            width: o = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, R.jsx)(Pt.sG.svg, {
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
      qt.displayName = "Arrow";
      var Ft = qt,
        Bt = t(10198),
        Xt = t(5024),
        Gt = "Popper",
        [Kt, Wt] = (0, Ot.A)(Gt),
        [Zt, Ht] = Kt(Gt),
        Ut = e => {
          const {
            __scopePopper: r,
            children: t
          } = e, [o, n] = N.useState(null), [a, s] = N.useState(void 0);
          return (0, R.jsx)(Zt, {
            scope: r,
            anchor: o,
            onAnchorChange: n,
            placementState: a,
            setPlacementState: s,
            children: t
          })
        };
      Ut.displayName = Gt;
      var Yt = "PopperAnchor",
        $t = N.forwardRef((e, r) => {
          const {
            __scopePopper: t,
            virtualRef: o,
            ...n
          } = e, a = Ht(Yt, t), s = N.useRef(null), i = a.onAnchorChange, d = N.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, jt.s)(r, d), c = N.useRef(null);
          N.useEffect(() => {
            if (!o) return;
            const e = c.current;
            c.current = o.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && io(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return o ? null : (0, R.jsx)(Pt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...n,
            ref: l
          })
        });
      $t.displayName = Yt;
      var Qt = "PopperContent",
        [Jt, eo] = Kt(Qt),
        ro = N.forwardRef((e, r) => {
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
          } = e, m = Ht(Qt, t), [b, h] = N.useState(null), g = (0, jt.s)(r, e => h(e)), [w, x] = N.useState(null), _ = (0, Xt.X)(w), C = _?.width ?? 0, j = _?.height ?? 0, O = o + ("center" !== a ? "-" + a : ""), P = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, S = Array.isArray(l) ? l : [l], D = S.length > 0, k = {
            padding: P,
            boundary: S.filter(ao),
            altBoundary: D
          }, {
            refs: z,
            floatingStyles: I,
            placement: T,
            isPositioned: E,
            middlewareData: L
          } = (0, Vt.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Mt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: m.anchor
            },
            middleware: [(0, Vt.cY)({
              mainAxis: n + j,
              alignmentAxis: s
            }), d && (0, Vt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Vt.ER)() : void 0,
              ...k
            }), d && (0, Vt.UU)({
              ...k
            }), (0, Vt.Ej)({
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
            }), w && (0, Vt.UE)({
              element: w,
              padding: i
            }), so({
              arrowWidth: C,
              arrowHeight: j
            }), f && (0, Vt.jD)({
              strategy: "referenceHidden",
              ...k,
              boundary: D ? k.boundary : void 0
            })]
          }), A = m.setPlacementState;
          (0, Bt.N)(() => (A(T), () => {
            A(void 0)
          }), [T, A]);
          const [V, M] = io(T), q = (0, Rt.c)(v);
          (0, Bt.N)(() => {
            E && q?.()
          }, [E, q]);
          const F = L.arrow?.x,
            B = L.arrow?.y,
            X = 0 !== L.arrow?.centerOffset,
            [G, K] = N.useState();
          return (0, Bt.N)(() => {
            b && K(window.getComputedStyle(b).zIndex)
          }, [b]), (0, R.jsx)("div", {
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
            children: (0, R.jsx)(Jt, {
              scope: t,
              placedSide: V,
              placedAlign: M,
              onArrowChange: x,
              arrowX: F,
              arrowY: B,
              shouldHideArrow: X,
              children: (0, R.jsx)(Pt.sG.div, {
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
      ro.displayName = Qt;
      var to = "PopperArrow",
        oo = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        no = N.forwardRef(function(e, r) {
          const {
            __scopePopper: t,
            ...o
          } = e, n = eo(to, t), a = oo[n.placedSide];
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
            children: (0, R.jsx)(Ft, {
              ...o,
              ref: r,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        });

      function ao(e) {
        return null !== e
      }
      no.displayName = to;
      var so = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: t,
            rects: o,
            middlewareData: n
          } = r, a = 0 !== n.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = io(t), c = {
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

      function io(e) {
        const [r, t = "center"] = e.split("-");
        return [r, t]
      }
      var lo = Ut,
        co = $t,
        uo = ro,
        fo = no,
        po = t(84017),
        vo = N.forwardRef((e, r) => {
          const {
            container: t,
            ...o
          } = e, [n, a] = N.useState(!1);
          (0, Bt.N)(() => a(!0), []);
          const s = t || n && globalThis?.document?.body;
          return s ? po.createPortal((0, R.jsx)(Pt.sG.div, {
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
          }, [i]), (0, Bt.N)(() => {
            const r = o.current,
              t = n.current;
            if (t !== e) {
              const o = a.current,
                s = bo(r);
              d(e ? "MOUNT" : "none" === s || "none" === r?.display ? "UNMOUNT" : t && o !== s ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e
            }
          }, [e, d]), (0, Bt.N)(() => {
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
        }) : N.Children.only(t), a = function(...e) {
          const r = N.useRef(e);
          return r.current = e, N.useCallback(e => {
            const t = r.current;
            let o = !1;
            const n = t.map(r => {
              const t = mo(r, e);
              return o || "function" != typeof t || (o = !0), t
            });
            if (o) return () => {
              for (let e = 0; e < n.length; e++) {
                const r = n[e];
                "function" == typeof r ? r() : mo(t[e], null)
              }
            }
          }, [])
        }(o.ref, function(e) {
          let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = r && "isReactWarning" in r && r.isReactWarning;
          return t ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(n));
        return "function" == typeof t || o.isPresent ? N.cloneElement(n, {
          ref: a
        }) : null
      };

      function mo(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r)
      }

      function bo(e) {
        return e?.animationName || "none"
      }
      yo.displayName = "Presence";
      var ho = t(17172),
        go = t(17038),
        wo = t(84045),
        [xo, _o] = (0, Ot.A)("Tooltip", [Wt]),
        Co = Wt(),
        jo = "TooltipProvider",
        Oo = 700,
        Po = "tooltip.open",
        [Ro, So] = xo(jo),
        No = e => {
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
          }, []), (0, R.jsx)(Ro, {
            scope: r,
            isOpenDelayedRef: s,
            delayDuration: t,
            onOpen: N.useCallback(() => {
              o <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [o]),
            onClose: N.useCallback(() => {
              o <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, o))
            }, [o]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: N.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: n,
            children: a
          })
        };
      No.displayName = jo;
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
          } = e, d = So(Do, e.__scopeTooltip), l = Co(r), [c, u] = N.useState(null), f = (0, At.B)(), p = N.useRef(0), v = s ?? d.disableHoverableContent, y = i ?? d.delayDuration, m = N.useRef(!1), [b, h] = (0, go.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Po))) : d.onClose(), a?.(e)
            },
            caller: Do
          }), g = N.useMemo(() => b ? m.current ? "delayed-open" : "instant-open" : "closed", [b]), w = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, m.current = !1, h(!0)
          }, [h]), x = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, h(!1)
          }, [h]), _ = N.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              m.current = !0, h(!0), p.current = 0
            }, y)
          }, [y, h]);
          return N.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, R.jsx)(lo, {
            ...l,
            children: (0, R.jsx)(ko, {
              scope: r,
              contentId: f,
              open: b,
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
          } = e, n = zo(To, t), a = So(To, t), s = Co(t), i = N.useRef(null), d = (0, jt.s)(r, i, n.onTriggerChange), l = N.useRef(!1), c = N.useRef(!1), u = N.useCallback(() => l.current = !1, []);
          return N.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, R.jsx)(co, {
            asChild: !0,
            ...s,
            children: (0, R.jsx)(Pt.sG.button, {
              "aria-describedby": n.open ? n.contentId : void 0,
              "data-state": n.stateAttribute,
              ...o,
              ref: d,
              onPointerMove: (0, Ct.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (n.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Ct.mK)(e.onPointerLeave, () => {
                n.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Ct.mK)(e.onPointerDown, () => {
                n.open && n.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Ct.mK)(e.onFocus, () => {
                l.current || n.onOpen()
              }),
              onBlur: (0, Ct.mK)(e.onBlur, n.onClose),
              onClick: (0, Ct.mK)(e.onClick, n.onClose)
            })
          })
        });
      Eo.displayName = To;
      var Lo = "TooltipPortal",
        [Ao, Vo] = xo(Lo, {
          forceMount: void 0
        }),
        Mo = e => {
          const {
            __scopeTooltip: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = zo(Lo, r);
          return (0, R.jsx)(Ao, {
            scope: r,
            forceMount: t,
            children: (0, R.jsx)(yo, {
              present: t || a.open,
              children: (0, R.jsx)(vo, {
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
          const t = Vo(qo, e.__scopeTooltip),
            {
              forceMount: o = t.forceMount,
              side: n = "top",
              ...a
            } = e,
            s = zo(qo, e.__scopeTooltip);
          return (0, R.jsx)(yo, {
            present: o || s.open,
            children: s.disableHoverableContent ? (0, R.jsx)(Wo, {
              side: n,
              ...a,
              ref: r
            }) : (0, R.jsx)(Bo, {
              side: n,
              ...a,
              ref: r
            })
          })
        }),
        Bo = N.forwardRef((e, r) => {
          const t = zo(qo, e.__scopeTooltip),
            o = So(qo, e.__scopeTooltip),
            n = N.useRef(null),
            a = (0, jt.s)(r, n),
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
          }, [d, c, s, l, f]), (0, R.jsx)(Wo, {
            ...e,
            ref: a
          })
        }),
        [Xo, Go] = xo(Do, {
          isInside: !1
        }),
        Ko = (0, ho.Dc)("TooltipContent"),
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
                e.target instanceof Node && e.target.contains(d.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, c]), (0, R.jsx)(kt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, R.jsxs)(uo, {
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
              children: [(0, R.jsx)(Ko, {
                children: o
              }), (0, R.jsx)(Xo, {
                scope: t,
                isInside: !0,
                children: (0, R.jsx)(wo.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: n || o
                })
              })]
            })
          })
        });
      Fo.displayName = qo;
      var Zo = "TooltipArrow",
        Ho = N.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = Co(t);
          return Go(Zo, t).isInside ? null : (0, R.jsx)(fo, {
            ...n,
            ...o,
            ref: r
          })
        });
      Ho.displayName = Zo;
      var Uo = No,
        Yo = Io,
        $o = Eo,
        Qo = Mo,
        Jo = Fo,
        en = Ho;
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
          const [a = !1, s] = (0, fe.ic)({
            defaultProp: t,
            prop: n.isOpen,
            onChange: o
          });
          return (0, R.jsx)(Uo, {
            delayDuration: r,
            children: (0, R.jsx)(rn.Provider, {
              value: {
                isOpen: a,
                ...n
              },
              children: (0, R.jsx)(Yo, {
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
        }, o) => (0, R.jsx)($o, {
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
          } = tn(), c = (0, fe.jt)(), u = (0, _t.CS)(Jo), f = (0, _t.pn)(l, {
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
            config: _t.$W.stiff,
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
        sn = (0, N.forwardRef)(({
          testId: e
        }, r) => {
          const t = (0, z.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, R.jsx)(en, {
            ...t,
            ref: r
          })
        }),
        dn = Qo;
      var ln = t(81471),
        cn = t(99136),
        un = t(52184);

      function fn(e) {
        const r = e + "CollectionProvider",
          [t, o] = (0, Ot.A)(r),
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
            return (0, R.jsx)(n, {
              scope: r,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        s.displayName = r;
        const i = e + "CollectionSlot",
          d = (0, ho.TL)(i),
          l = N.forwardRef((e, r) => {
            const {
              scope: t,
              children: o
            } = e, n = a(i, t), s = (0, jt.s)(r, n.collectionRef);
            return (0, R.jsx)(d, {
              ref: s,
              children: o
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, ho.TL)(c),
          p = N.forwardRef((e, r) => {
            const {
              scope: t,
              children: o,
              ...n
            } = e, s = N.useRef(null), i = (0, jt.s)(r, s), d = a(c, t);
            return N.useEffect(() => (d.itemMap.set(s, {
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
        mn = "Slider",
        [bn, hn, gn] = fn(mn),
        [wn, xn] = (0, Ot.A)(mn, [gn]),
        [_n, Cn] = wn(mn),
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
          } = e, m = N.useRef(new Set), b = N.useRef(0), h = N.useRef(!1), g = "horizontal" === s ? Rn : Sn, [w = [], x] = (0, go.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const r = [...m.current];
              r[b.current]?.focus({
                preventScroll: !0,
                focusVisible: h.current
              }), h.current = !1, u(e)
            }
          }), _ = N.useRef(w);

          function C(e, r, {
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
              l = (0, ln.q)(i, [o, n]);
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
                b.current = o.indexOf(l);
                const r = String(o) !== String(e);
                return r && t && f(o), r ? o : e
              }
              return e
            })
          }
          return (0, R.jsx)(_n, {
            scope: e.__scopeSlider,
            name: t,
            disabled: i,
            min: o,
            max: n,
            valueIndexToChangeRef: b,
            thumbs: m.current,
            values: w,
            orientation: s,
            form: v,
            children: (0, R.jsx)(bn.Provider, {
              scope: e.__scopeSlider,
              children: (0, R.jsx)(bn.Slot, {
                scope: e.__scopeSlider,
                children: (0, R.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: r,
                  onPointerDown: (0, Ct.mK)(y.onPointerDown, () => {
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
                    C(e, r)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    C(e, b.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = _.current[b.current];
                    w[b.current] !== e && f(w)
                  },
                  onHomeKeyDown: () => {
                    i || (h.current = !0, C(o, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (h.current = !0, C(n, w.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: r
                  }) => {
                    if (!i) {
                      h.current = !0;
                      const t = pn.includes(e.key) || e.shiftKey && vn.includes(e.key) ? 10 : 1,
                        o = b.current;
                      C(w[o] + a * t * r, o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      jn.displayName = mn;
      var [On, Pn] = wn(mn, {
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
        } = e, [u, f] = N.useState(null), p = (0, jt.s)(r, e => f(e)), v = N.useRef(void 0), y = (0, cn.jH)(n), m = "ltr" === y, b = m && !a || !m && a;

        function h(e) {
          const r = v.current || u.getBoundingClientRect(),
            n = Kn([0, r.width], b ? [t, o] : [o, t]);
          return v.current = r, n(e - r.left)
        }
        return (0, R.jsx)(On, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, R.jsx)(Nn, {
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
              const r = yn[b ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), Sn = N.forwardRef((e, r) => {
        const {
          min: t,
          max: o,
          inverted: n,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = N.useRef(null), u = (0, jt.s)(r, c), f = N.useRef(void 0), p = !n;

        function v(e) {
          const r = f.current || c.current.getBoundingClientRect(),
            n = Kn([0, r.height], p ? [o, t] : [t, o]);
          return f.current = r, n(e - r.top)
        }
        return (0, R.jsx)(On, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, R.jsx)(Nn, {
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
      }), Nn = N.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          onSlideStart: o,
          onSlideMove: n,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = Cn(mn, t);
        return (0, R.jsx)(Pt.sG.span, {
          ...l,
          ref: r,
          onKeyDown: (0, Ct.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : pn.concat(vn).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, Ct.mK)(e.onPointerDown, e => {
            const r = e.target;
            r.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(r) ? r.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : o(e)
          }),
          onPointerMove: (0, Ct.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && n(e)
          }),
          onPointerUp: (0, Ct.mK)(e.onPointerUp, e => {
            const r = e.target;
            r.hasPointerCapture(e.pointerId) && (r.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Dn = "SliderTrack", kn = N.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          ...o
        } = e, n = Cn(Dn, t);
        return (0, R.jsx)(Pt.sG.span, {
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
          } = e, n = Cn(zn, t), a = Pn(zn, t), s = N.useRef(null), i = (0, jt.s)(r, s), d = n.values.length, l = n.values.map(e => Gn(e, n.min, n.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, R.jsx)(Pt.sG.span, {
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
        [En, Ln] = wn(Tn),
        An = "SliderThumbProvider";

      function Vn(e) {
        const {
          __scopeSlider: r,
          name: t,
          children: o,
          internal_do_not_use_render: n
        } = e, a = Cn(An, r), s = hn(r), [i, d] = N.useState(null), l = N.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, Xt.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = t ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : Gn(f, a.min, a.max);
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
          percent: v,
          size: c
        };
        return (0, R.jsx)(En, {
          scope: r,
          ...y,
          children: Wn(n) ? n(y) : o
        })
      }
      Vn.displayName = An;
      var Mn = "SliderThumbTrigger",
        qn = N.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = Cn(Mn, t), a = Pn(Mn, t), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Ln(Mn, t), u = (0, jt.s)(r, e => c(e)), f = function(e, r) {
            return r > 2 ? `Value ${e+1} of ${r}` : 2 === r ? ["Minimum", "Maximum"][e] : void 0
          }(s, n.values.length), p = l?.[a.size], v = p ? function(e, r, t) {
            const o = e / 2;
            return (o - Kn([0, 50], [0, o])(r) * t) * t
          }(p, d, a.direction) : 0;
          return (0, R.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, R.jsx)(bn.ItemSlot, {
              scope: t,
              children: (0, R.jsx)(Pt.sG.span, {
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
                onFocus: (0, Ct.mK)(e.onFocus, () => {
                  n.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      qn.displayName = Mn;
      var Fn = N.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          name: o,
          ...n
        } = e;
        return (0, R.jsx)(Vn, {
          __scopeSlider: t,
          name: o,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: o
          }) => (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(qn, {
              ...n,
              ref: r,
              __scopeSlider: t
            }), o ? (0, R.jsx)(Xn, {
              __scopeSlider: t
            }, e) : null]
          })
        })
      });
      Fn.displayName = Tn;
      var Bn = "SliderBubbleInput",
        Xn = N.forwardRef(({
          __scopeSlider: e,
          ...r
        }, t) => {
          const {
            value: o,
            name: n,
            form: a
          } = Ln(Bn, e), s = N.useRef(null), i = (0, jt.s)(s, t), d = (0, un.Z)(o);
          return N.useEffect(() => {
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
          }, [d, o]), (0, R.jsx)(Pt.sG.input, {
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

      function Gn(e, r, t) {
        const o = 100 / (t - r) * (e - r);
        return (0, ln.q)(o, [0, 100])
      }

      function Kn(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function Wn(e) {
        return "function" == typeof e
      }
      Xn.displayName = Bn;
      var Zn = "focusScope.autoFocusOnMount",
        Hn = "focusScope.autoFocusOnUnmount",
        Un = {
          bubbles: !1,
          cancelable: !0
        },
        Yn = N.forwardRef((e, r) => {
          const {
            loop: t = !1,
            trapped: o = !1,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = N.useState(null), l = (0, Rt.c)(n), c = (0, Rt.c)(a), u = N.useRef(null), f = (0, jt.s)(r, e => d(e)), p = N.useRef({
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
                  i.contains(r) ? u.current = r : ea(u.current, {
                    select: !0
                  })
                },
                r = function(e) {
                  if (p.paused || !i) return;
                  const r = e.relatedTarget;
                  null !== r && (i.contains(r) || ea(u.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const r of e) r.removedNodes.length > 0 && ea(i)
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
              ra.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const r = new CustomEvent(Zn, Un);
                i.addEventListener(Zn, l), i.dispatchEvent(r), r.defaultPrevented || (function(e, {
                  select: r = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const o of e)
                    if (ea(o, {
                        select: r
                      }), document.activeElement !== t) return
                }($n(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && ea(i))
              }
              return () => {
                i.removeEventListener(Zn, l), setTimeout(() => {
                  const r = new CustomEvent(Hn, Un);
                  i.addEventListener(Hn, c), i.dispatchEvent(r), r.defaultPrevented || ea(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Hn, c), ra.remove(p)
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
                  const r = $n(e);
                  return [Qn(r, e), Qn(r.reverse(), e)]
                }(r);
              o && a ? e.shiftKey || n !== a ? e.shiftKey && n === o && (e.preventDefault(), t && ea(a, {
                select: !0
              })) : (e.preventDefault(), t && ea(o, {
                select: !0
              })) : n === r && e.preventDefault()
            }
          }, [t, o, p.paused]);
          return (0, R.jsx)(Pt.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        });

      function $n(e) {
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

      function Qn(e, r) {
        for (const t of e)
          if (!Jn(t, {
              upTo: r
            })) return t
      }

      function Jn(e, {
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

      function ea(e, {
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
      Yn.displayName = "FocusScope";
      var ra = function() {
        let e = [];
        return {
          add(r) {
            const t = e[0];
            r !== t && t?.pause(), e = ta(e, r), e.unshift(r)
          },
          remove(r) {
            e = ta(e, r), e[0]?.resume()
          }
        }
      }();

      function ta(e, r) {
        const t = [...e],
          o = t.indexOf(r);
        return -1 !== o && t.splice(o, 1), t
      }
      var oa = t(38174),
        na = t(38100),
        aa = t(45787),
        sa = "Dialog",
        [ia, da] = (0, Ot.A)(sa),
        [la, ca] = ia(sa),
        ua = e => {
          const {
            __scopeDialog: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !0
          } = e, i = N.useRef(null), d = N.useRef(null), [l, c] = (0, go.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: sa
          });
          return (0, R.jsx)(la, {
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
      ua.displayName = sa;
      var fa = "DialogTrigger",
        pa = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ca(fa, t), a = (0, jt.s)(r, n.triggerRef);
          return (0, R.jsx)(Pt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": Ia(n.open),
            ...o,
            ref: a,
            onClick: (0, Ct.mK)(e.onClick, n.onOpenToggle)
          })
        });
      pa.displayName = fa;
      var va = "DialogPortal",
        [ya, ma] = ia(va, {
          forceMount: void 0
        }),
        ba = e => {
          const {
            __scopeDialog: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = ca(va, r);
          return (0, R.jsx)(ya, {
            scope: r,
            forceMount: t,
            children: N.Children.map(o, e => (0, R.jsx)(yo, {
              present: t || a.open,
              children: (0, R.jsx)(vo, {
                asChild: !0,
                container: n,
                children: e
              })
            }))
          })
        };
      ba.displayName = va;
      var ha = "DialogOverlay",
        ga = N.forwardRef((e, r) => {
          const t = ma(ha, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ca(ha, e.__scopeDialog);
          return a.modal ? (0, R.jsx)(yo, {
            present: o || a.open,
            children: (0, R.jsx)(xa, {
              ...n,
              ref: r
            })
          }) : null
        });
      ga.displayName = ha;
      var wa = (0, ho.TL)("DialogOverlay.RemoveScroll"),
        xa = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ca(ha, t), a = function() {
            const e = N.useContext(Dt),
              [r, t] = N.useState(null);
            return N.useEffect(() => {
              if (r) return e.dismissableSurfaces.add(r), () => {
                e.dismissableSurfaces.delete(r)
              }
            }, [r, e.dismissableSurfaces]), t
          }(), s = (0, jt.s)(r, a);
          return (0, R.jsx)(na.A, {
            as: wa,
            allowPinchZoom: !0,
            shards: [n.contentRef],
            children: (0, R.jsx)(Pt.sG.div, {
              "data-state": Ia(n.open),
              ...o,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        _a = "DialogContent",
        Ca = N.forwardRef((e, r) => {
          const t = ma(_a, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ca(_a, e.__scopeDialog);
          return (0, R.jsx)(yo, {
            present: o || a.open,
            children: a.modal ? (0, R.jsx)(ja, {
              ...n,
              ref: r
            }) : (0, R.jsx)(Oa, {
              ...n,
              ref: r
            })
          })
        });
      Ca.displayName = _a;
      var ja = N.forwardRef((e, r) => {
          const t = ca(_a, e.__scopeDialog),
            o = N.useRef(null),
            n = (0, jt.s)(r, t.contentRef, o);
          return N.useEffect(() => {
            const e = o.current;
            if (e) return (0, aa.Eq)(e)
          }, []), (0, R.jsx)(Pa, {
            ...e,
            ref: n,
            trapFocus: t.open,
            disableOutsidePointerEvents: t.open,
            onCloseAutoFocus: (0, Ct.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Ct.mK)(e.onPointerDownOutside, e => {
              const r = e.detail.originalEvent,
                t = 0 === r.button && !0 === r.ctrlKey;
              (2 === r.button || t) && e.preventDefault()
            }),
            onFocusOutside: (0, Ct.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        Oa = N.forwardRef((e, r) => {
          const t = ca(_a, e.__scopeDialog),
            o = N.useRef(!1),
            n = N.useRef(!1);
          return (0, R.jsx)(Pa, {
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
        Pa = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            ...s
          } = e, i = ca(_a, t);
          return (0, oa.Oh)(), (0, R.jsx)(R.Fragment, {
            children: (0, R.jsx)(Yn, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: n,
              onUnmountAutoFocus: a,
              children: (0, R.jsx)(kt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Ia(i.open),
                ...s,
                ref: r,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        Ra = "DialogTitle",
        Sa = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ca(Ra, t);
          return (0, R.jsx)(Pt.sG.h2, {
            id: n.titleId,
            ...o,
            ref: r
          })
        });
      Sa.displayName = Ra;
      var Na = "DialogDescription",
        Da = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ca(Na, t);
          return (0, R.jsx)(Pt.sG.p, {
            id: n.descriptionId,
            ...o,
            ref: r
          })
        });
      Da.displayName = Na;
      var ka = "DialogClose",
        za = N.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ca(ka, t);
          return (0, R.jsx)(Pt.sG.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, Ct.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });

      function Ia(e) {
        return e ? "open" : "closed"
      }
      za.displayName = ka;
      const Ta = (0, N.createContext)({
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
        Ea = ({
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
            v = (0, N.useRef)(null),
            y = (0, N.useRef)(null),
            m = (0, N.useRef)(null),
            b = (0, N.useRef)(null),
            h = (0, N.useRef)(null),
            g = (0, N.useRef)(null),
            w = (0, N.useRef)(null),
            x = (0, N.useRef)(null),
            _ = (0, N.useRef)(null),
            C = (0, N.useRef)(null),
            j = (0, N.useRef)(null),
            O = (0, N.useRef)(null),
            P = (0, N.useRef)(null),
            S = (0, N.useRef)(null),
            D = (0, N.useRef)(null),
            k = (0, N.useRef)(null),
            z = (0, N.useRef)(null),
            I = (0, N.useRef)(null),
            T = (0, N.useRef)(null),
            [E = !1, L] = (0, fe.ic)({
              prop: r || o,
              onChange: t
            }),
            A = (0, N.useRef)(null);
          return A.current || (A.current = new mt({
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
          })), (0, R.jsx)(nt.Dk, {
            messages: at,
            locale: f,
            children: (0, R.jsx)(Ta.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: y,
                thumbnailRef: m,
                openIconRef: b,
                overlayRef: h,
                contentRef: g,
                containerRef: w,
                zoomPanRef: x,
                imageRef: _,
                placeholderRef: C,
                captionRef: j,
                controlsRef: O,
                closeRef: P,
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
                slide: A.current
              },
              children: (0, R.jsx)(Aa, {
                ...u
              })
            })
          })
        },
        La = (0, N.createContext)({
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
        Aa = ({
          ...e
        }) => {
          const {
            open: r
          } = (0, N.useContext)(Ta), {
            onOpenChange: t,
            openAnim: o,
            close: n
          } = (() => {
            const {
              contextSafe: e
            } = (0, Vr.L)(), {
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
            } = (0, N.useContext)(Ta), p = (0, N.useRef)(null);
            p.current || (p.current = Ar.os.timeline({
              defaults: rt
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
                }), d.current && i.current && (r.opening = !0, r.setup(i.current, d.current), r.zoomAndPanToInitial(), Ar.os.set([u.current, f.current], {
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
                }), Ar.os.set([f.current], {
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
                  [ot]: "none"
                }, {
                  opacity: () => r.getControlsOpacity(),
                  [ot]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), r.opening = !1, r.dispatch("zoom"), r.closing || await qr(f.current), r.closing || (Ar.os.set([f.current], {
                  visibility: "visible",
                  ...tt
                }), Ar.os.set([u.current], {
                  visibility: "hidden",
                  ...tt
                }))))
              }),
              m = e(async () => {
                r.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              b = (0, N.useCallback)(async e => {
                e || (window.addEventListener("click", v), await m(), window.removeEventListener("click", v)), t(e)
              }, [t]),
              h = (0, N.useCallback)(() => b(!1), [b]);
            return {
              onOpenChange: b,
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
            } = (0, Vr.L)(), {
              slide: t,
              imageRef: o,
              zoomPanRef: n,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, N.useContext)(Ta), d = r(async e => {
              t.zoomTo(e), Ar.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...tt
              })
            }), l = r(async () => {
              t.zoomTo(t.currZoomLevel + t.zoomLevels.step), Ar.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...tt
              })
            }), c = r(async () => {
              t.zoomTo(t.currZoomLevel - t.zoomLevels.step), Ar.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...tt
              })
            }), u = r(async () => {
              t.zoomAndPanToInitial(), Ar.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...tt
              })
            }), f = r(async () => {
              if (t.closing) return;
              t.toggleControls();
              const e = t.getControlsOpacity(),
                r = 1 === e ? "auto" : "none";
              Ar.os.to([a.current], {
                opacity: e,
                [ot]: r,
                ...tt
              })
            }), p = r(async () => {
              Ar.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...tt
              })
            }), v = (0, N.useCallback)(() => {
              o.current && n.current && (Ar.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...tt
              }), Ar.os.set([o.current, i.current], {
                ...t.getUpdatedContentSize(),
                ...tt
              }), Ar.os.set([s.current], {
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
          }), u = (0, z.v6)(e, {
            open: r,
            onOpenChange: t
          });
          return (0, R.jsx)(La.Provider, {
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
            children: (0, R.jsx)(ua, {
              ...u
            })
          })
        },
        Va = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const n = (0, nt.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, N.useContext)(Ta),
            d = (0, fe.UP)(a, o),
            l = (0, z.v6)(t, {
              "data-testid": e,
              "aria-label": n.formatMessage(ht.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, R.jsx)(pa, {
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
        Ma = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            thumbnailRef: n
          } = (0, N.useContext)(Ta), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = r ? pe.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        qa = (0, N.forwardRef)(function({
          asChild: e,
          ...r
        }, t) {
          const {
            openIconRef: o
          } = (0, N.useContext)(Ta), n = (0, fe.UP)(o, t), a = (0, z.v6)(r, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? pe.DX : ze.h1;
          return (0, R.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Fa = ({
          ...e
        }) => (0, R.jsx)(ba, {
          ...e
        }),
        Ba = (0, N.forwardRef)(function({
          testId: e,
          ...r
        }, t) {
          const {
            overlayRef: o
          } = (0, N.useContext)(Ta), n = (0, fe.UP)(o, t), a = (0, z.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, R.jsx)(ga, {
            ref: n,
            ...a
          })
        }),
        Xa = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            openAnim: n
          } = (0, N.useContext)(La), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, N.useContext)(Ta), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, N.useContext)(Ta), [r, t] = (0, N.useState)(e.getCursor()), o = (0, N.useCallback)(() => {
              t(e.getCursor())
            }, []);
            return (0, N.useEffect)(() => (e.addEventListener("zoom", o), () => {
              e.removeEventListener("zoom", o)
            }), [o]), {
              cursor: r
            }
          })(), l = (0, bt.m)("dark"), c = (0, fe.UP)(a, o), u = (0, z.v6)(t, {
            "data-testid": e,
            onOpenAutoFocus: n,
            onCloseAutoFocus: e => ((e, r) => {
              e?.preventDefault(), r.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, ke.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, R.jsxs)(Ca, {
            ref: c,
            ...u,
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)(Sa, {
                children: s
              })
            }), r]
          })
        }),
        Ga = (0, N.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            containerRef: n
          } = (0, N.useContext)(Ta);
          (() => {
            const {
              contextSafe: e
            } = (0, Vr.L)(), {
              toggleControls: r
            } = (0, N.useContext)(La), {
              containerRef: t,
              zoomPanRef: o,
              overlayRef: n,
              controlsRef: a,
              slide: s
            } = (0, N.useContext)(Ta), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Ar.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...tt
              }), Ar.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...tt
              }), Ar.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...tt
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Ar.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...tt
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Ar.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...tt
              }), Ar.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...tt
              }), Ar.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...tt
              })))
            }), c = (0, N.useCallback)(() => {
              s.controlsVisible || r()
            }, [, r]);
            (0, fe.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Mr.NH)({
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
            children: (0, R.jsxs)(Ka, {
              children: [(0, R.jsx)(Wa, {}), r]
            })
          })
        }),
        Ka = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            zoomPanRef: n
          } = (0, N.useContext)(Ta), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = r ? pe.DX : "div";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Wa = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            placeholderRef: n
          } = (0, N.useContext)(Ta), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
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
        Za = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            imageRef: n
          } = (0, N.useContext)(Ta), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = r ? pe.DX : "img";
          return (0, R.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ha = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            captionRef: n
          } = (0, N.useContext)(Ta), a = (0, fe.UP)(n, o), s = (0, z.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = r ? pe.DX : "p";
          return (0, R.jsx)(Da, {
            asChild: !0,
            children: (0, R.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Ua = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            controlsRef: n
          } = (0, N.useContext)(Ta);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: r,
              zoomOut: t,
              resetZoom: o,
              close: n
            } = (0, N.useContext)(La);
            (0, Wr.vC)(["+", "=", "add", "plus"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Wr.vC)(["minus", "subtract"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Wr.vC)("r", o, {
              enabled: e,
              preventDefault: !0
            }), (0, Wr.vC)("esc", n, {
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
          return (0, R.jsx)(Wr.Hb, {
            children: (0, R.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Ya = ({
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
          return (0, R.jsxs)(on, {
            delayDuration: 0,
            children: [(0, R.jsx)(nn, {
              children: o
            }), (0, R.jsxs)(an, {
              ...a,
              children: [(0, R.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, r && (0, R.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: r
                })]
              }), (0, R.jsx)(sn, {})]
            })]
          })
        },
        $a = (0, N.forwardRef)(function({
          ...e
        }, r) {
          const t = (0, z.v6)(e, {
            isInline: !0
          });
          return (0, R.jsx)(wt, {
            ref: r,
            ...t
          })
        }),
        Qa = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          children: o,
          ...n
        }, a) {
          const s = (0, nt.tz)(),
            {
              zoomRef: i
            } = (0, N.useContext)(Ta),
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
              } = (0, N.useContext)(Ta), {
                zoomIn: r,
                zoomOut: t,
                zoomTo: o
              } = (0, N.useContext)(La), [n, a] = (0, N.useState)(!1), [s, i] = (0, N.useState)(!1), [d, l] = (0, N.useState)(0), [c, u] = (0, N.useState)(0), [f, p] = (0, N.useState)(0), v = (0, N.useCallback)(() => {
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
            m = (0, fe.UP)(i, a),
            b = (0, z.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            h = r ? pe.DX : "div";
          return (0, R.jsxs)(h, {
            ref: m,
            ...b,
            children: [(0, R.jsx)(Ya, {
              side: "left",
              enabled: t,
              content: s.formatMessage(ht.ZoomInButtonLabel),
              metadata: s.formatMessage(ht.ZoomInButtonTooltip, {
                shortcut: (0, R.jsx)($a, {
                  shortcut: "+"
                })
              }),
              children: (0, R.jsx)(er, {
                label: s.formatMessage(ht.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: et({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, R.jsxs)(jn, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, R.jsx)(kn, {
                className: "foundry_1a74xwbu",
                children: (0, R.jsx)(In, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, R.jsx)(Ya, {
                side: "left",
                enabled: t,
                content: s.formatMessage(ht.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, R.jsx)(Fn, {
                  className: "foundry_1a74xwbw",
                  children: (0, R.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, R.jsx)(Ya, {
              side: "left",
              enabled: t,
              content: s.formatMessage(ht.ZoomOutButtonLabel),
              metadata: s.formatMessage(ht.ZoomOutButtonTooltip, {
                shortcut: (0, R.jsx)($a, {
                  shortcut: "-"
                })
              }),
              children: (0, R.jsx)(er, {
                label: s.formatMessage(ht.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: et({
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
        Ja = (0, N.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          ...o
        }, n) {
          const a = (0, nt.tz)(),
            {
              closeRef: s
            } = (0, N.useContext)(Ta),
            i = (0, fe.UP)(s, n),
            d = (0, z.v6)(o, {
              "data-testid": e,
              className: Jr({
                styled: !r
              })
            }),
            l = r ? (0, R.jsx)(pe.DX, {
              ref: i,
              ...d
            }) : (0, R.jsx)(er, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(ht.CloseButtonLabel)
            });
          return (0, R.jsx)(Ya, {
            side: "right",
            enabled: t,
            content: a.formatMessage(ht.CloseButtonLabel),
            metadata: a.formatMessage(ht.CloseButtonTooltip, {
              shortcut: (0, R.jsx)($a, {
                shortcut: "Esc"
              })
            }),
            children: (0, R.jsx)(za, {
              asChild: !0,
              children: l
            })
          })
        }),
        es = (0, N.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, nt.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: r
              } = (0, N.useContext)(Ta), {
                contextSafe: t
              } = (0, Vr.L)(), {
                resetZoom: o
              } = (0, N.useContext)(La), [n, a] = (0, N.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = t(e => {
                Ar.os.to([r.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...tt
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
            } = (0, N.useContext)(Ta),
            i = (0, fe.UP)(s, o),
            d = (0, z.v6)(t, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, R.jsx)(Ya, {
            side: "left",
            enabled: r,
            content: n.formatMessage(ht.ResetZoomButtonLabel),
            metadata: n.formatMessage(ht.ResetZoomButtonTooltip, {
              shortcut: (0, R.jsx)($a, {
                shortcut: "R"
              })
            }),
            children: (0, R.jsx)(er, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: n.formatMessage(ht.ResetZoomButtonLabel)
            })
          })
        }),
        rs = (0, N.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, nt.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, N.useContext)(Ta),
            i = (0, fe.UP)(a, o),
            d = (0, z.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, R.jsx)(Ya, {
            side: "left",
            enabled: r,
            content: n.formatMessage(ht.DownloadButtonTooltip),
            children: (0, R.jsx)(er, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: n.formatMessage(ht.DownloadButtonTooltip),
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
        ts = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var os = t(98905);

      function ns(e) {
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

      function as(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ss(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? as(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ns(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : as(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function is(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ds = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ls = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ss(ss({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ds(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return is(e.variantClassNames, e => is(e, e => e.split(" ")[0]))
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
        cs = t(52321),
        us = {};
      t.r(us), t.d(us, {
        Activity: () => cs.Il,
        ArrowDown: () => cs.yd,
        ArrowLeft: () => cs.nk,
        ArrowRight: () => cs.Qp,
        ArrowRightLeft: () => cs.nF,
        ArrowUp: () => cs.Do,
        ArrowUpDown: () => cs.hD,
        Book: () => cs.E3,
        Bug: () => cs.zP,
        BugOff: () => cs.k_,
        Calendar: () => cs.Vv,
        CalendarOff: () => cs.is,
        Car: () => cs.TH,
        CarSide: () => cs.cY,
        ChartSpline: () => cs.m3,
        Check: () => cs.Jl,
        ChevronDown: () => cs.yQ,
        ChevronFirst: () => cs.mf,
        ChevronLast: () => cs.Ou,
        ChevronLeft: () => cs.JG,
        ChevronRight: () => cs.c_,
        ChevronUp: () => cs.rX,
        ChevronsDownUp: () => cs.WE,
        ChevronsLeftRight: () => cs.UQ,
        ChevronsUpDown: () => cs.Ml,
        Circle: () => cs.jl,
        CircleCheck: () => cs.rW,
        CircleCheckFilled: () => cs.Dw,
        CircleDollarSign: () => cs.OJ,
        CircleHelp: () => cs.YC,
        CircleMinus: () => cs.ZX,
        CircleMinusFilled: () => cs.r0,
        CirclePerson: () => cs.q_,
        CircleSlash: () => cs.o6,
        CircleX: () => cs.RT,
        Clipboard: () => cs.B0,
        Clock: () => cs.zD,
        CloudAlert: () => cs.K4,
        CloudDownload: () => cs.MQ,
        CloudUpload: () => cs.bK,
        CodeXml: () => cs.bv,
        Copy: () => cs.QR,
        Cpu: () => cs.fX,
        CreditCard: () => cs.y5,
        Database: () => cs.Wm,
        Discord: () => cs.bY,
        DollarSign: () => cs.G9,
        Download: () => cs.f5,
        EllipsisVertical: () => cs.Yb,
        Envelope: () => cs.Lh,
        EnvelopeOpen: () => cs.jd,
        EpicGames: () => cs.fk,
        ExternalLink: () => cs.Gr,
        Eye: () => cs.kU,
        EyeClosed: () => cs.Cz,
        EyeOff: () => cs.X_,
        Facebook: () => cs.f1,
        FastForward: () => cs.Ej,
        FileText: () => cs.iU,
        Files: () => cs.sv,
        Filter: () => cs.dJ,
        Flag: () => cs.lN,
        FlagOff: () => cs.Ih,
        Gear: () => cs.OB,
        Globe: () => cs.qz,
        Handshake: () => cs.g6,
        Headset: () => cs.BC,
        Heart: () => cs.B1,
        HeartPulse: () => cs.iY,
        House: () => cs.tT,
        Image: () => cs._V,
        Info: () => cs.R2,
        Instagram: () => cs.pd,
        LayoutGrid: () => cs.D6,
        Lightbulb: () => cs.g5,
        Link: () => cs.N_,
        List: () => cs.B8,
        ListFilter: () => cs.xt,
        ListMusic: () => cs.w7,
        LockKeyhole: () => cs.NT,
        LockPassword: () => cs.HI,
        LogOut: () => cs.nU,
        MapPin: () => cs.sD,
        Maximize: () => cs.hz,
        Maximize2: () => cs.h1,
        Menu: () => cs.W1,
        MessageSquareText: () => cs.AJ,
        Mic: () => cs.GO,
        MicFilled: () => cs.cX,
        Minimize: () => cs.Xj,
        Minimize2: () => cs.xq,
        Minus: () => cs.Hs,
        Monitor: () => cs.VA,
        Moon: () => cs.AX,
        NintendoSwitch: () => cs.Su,
        PaperPlane: () => cs.d8,
        Paperclip: () => cs.xv,
        PartialCircle: () => cs.IM,
        Pause: () => cs.vR,
        Pencil: () => cs.gH,
        PencilOff: () => cs.hE,
        Person: () => cs._A,
        PersonBlock: () => cs.hs,
        PersonMinus: () => cs._E,
        PersonPlus: () => cs.c1,
        Pin: () => cs.yU,
        PinFilled: () => cs.IF,
        Play: () => cs.jG,
        Playstation: () => cs.p6,
        Plus: () => cs.FW,
        Power: () => cs.aJ,
        Property: () => cs.mA,
        Reddit: () => cs.TZ,
        RefreshCcw: () => cs.PM,
        RefreshCw: () => cs.e9,
        RefreshCwOff: () => cs.X0,
        Replay: () => cs.eJ,
        Rewind: () => cs.Y8,
        Save: () => cs.eM,
        Search: () => cs.vj,
        Server: () => cs.gq,
        ShieldAlert: () => cs.yZ,
        ShieldCheck: () => cs.ox,
        ShoppingBag: () => cs.Nw,
        SkipBack: () => cs.L9,
        SkipForward: () => cs.xP,
        Star: () => cs.FE,
        StarOff: () => cs.UM,
        Steam: () => cs.Rv,
        Stop: () => cs.VG,
        Store: () => cs.il,
        Sun: () => cs.bd,
        ThumbsDown: () => cs.z9,
        ThumbsUp: () => cs.tw,
        Tiktok: () => cs.Tc,
        Trash: () => cs.lM,
        TriangleAlert: () => cs.lW,
        Trophy: () => cs.Xs,
        Truck: () => cs.No,
        Twitch: () => cs.YA,
        Twitter: () => cs.KK,
        TwoPeople: () => cs.LM,
        Undo: () => cs.Vn,
        Unlink: () => cs.c2,
        Upload: () => cs._O,
        UserCouple: () => cs.Cn,
        UserGroup: () => cs.zr,
        Volume: () => cs.fS,
        Volume1: () => cs.c6,
        Volume2: () => cs.jI,
        VolumeX: () => cs.XL,
        Wallet: () => cs.uW,
        Weapon: () => cs.Re,
        Wifi: () => cs.MJ,
        WifiOff: () => cs.RQ,
        Wrench: () => cs.pi,
        X: () => cs.X,
        Xbox: () => cs.ms,
        Youtube: () => cs.k,
        ZoomIn: () => cs.$Z,
        ZoomOut: () => cs.en
      });
      const fs = (0, N.createContext)(null);

      function ps() {
        const e = (0, N.useContext)(fs);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const vs = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          descriptionId: o = "",
          errorId: n = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, z.v6)({
              className: ls({
                status: a
              }),
              "data-testid": r
            }, s),
            l = t ? pe.DX : "div";
          return (0, R.jsx)(fs.Provider, {
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
        ys = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const {
            status: n
          } = ps(), a = (0, z.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, t), s = {
            success: cs.Jl,
            invalid: cs.X,
            neutral: cs.lW
          }, i = r ? pe.DX : s[n];
          return (0, R.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        ms = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            errorId: s
          } = ps(), i = (0, z.v6)({
            "data-testid": r,
            id: s || a
          }, o), d = t ? pe.DX : "div";
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        });
      var bs = "ScrollArea",
        [hs, gs] = (0, Ot.A)(bs),
        [ws, xs] = hs(bs),
        _s = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            type: o = "hover",
            dir: n,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = N.useState(null), [l, c] = N.useState(null), [u, f] = N.useState(null), [p, v] = N.useState(null), [y, m] = N.useState(null), [b, h] = N.useState(0), [g, w] = N.useState(0), [x, _] = N.useState(!1), [C, j] = N.useState(!1), O = (0, jt.s)(r, e => d(e)), P = (0, cn.jH)(n);
          return (0, R.jsx)(ws, {
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
            onScrollbarYChange: m,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: h,
            onCornerHeightChange: w,
            children: (0, R.jsx)(Pt.sG.div, {
              dir: P,
              ...s,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": g + "px",
                ...e.style
              }
            })
          })
        });
      _s.displayName = bs;
      var Cs = "ScrollAreaViewport",
        js = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            children: o,
            nonce: n,
            ...a
          } = e, s = xs(Cs, t), i = N.useRef(null), d = (0, jt.s)(r, i, s.onViewportChange);
          return (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Os, {
              nonce: n
            }), (0, R.jsx)(Pt.sG.div, {
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
      js.displayName = Cs;
      var Os = N.memo(({
          nonce: e
        }) => (0, R.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, r) => e.nonce === r.nonce),
        Ps = "ScrollAreaScrollbar",
        Rs = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = xs(Ps, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = n, i = "horizontal" === e.orientation;
          return N.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === n.type ? (0, R.jsx)(Ss, {
            ...o,
            ref: r,
            forceMount: t
          }) : "scroll" === n.type ? (0, R.jsx)(Ns, {
            ...o,
            ref: r,
            forceMount: t
          }) : "auto" === n.type ? (0, R.jsx)(Ds, {
            ...o,
            ref: r,
            forceMount: t
          }) : "always" === n.type ? (0, R.jsx)(ks, {
            ...o,
            ref: r,
            "data-state": "visible"
          }) : null
        });
      Rs.displayName = Ps;
      var Ss = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = xs(Ps, e.__scopeScrollArea), [a, s] = N.useState(!1);
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
          }, [n.scrollArea, n.scrollHideDelay]), (0, R.jsx)(yo, {
            present: t || a,
            children: (0, R.jsx)(Ds, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: r
            })
          })
        }),
        Ns = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = xs(Ps, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = Ys(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, [n.viewport, a, d, s]), (0, R.jsx)(yo, {
            present: t || "hidden" !== i,
            children: (0, R.jsx)(ks, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...o,
              ref: r,
              onPointerEnter: (0, Ct.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, Ct.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Ds = N.forwardRef((e, r) => {
          const t = xs(Ps, e.__scopeScrollArea),
            {
              forceMount: o,
              ...n
            } = e,
            [a, s] = N.useState(!1),
            i = "horizontal" === e.orientation,
            d = Ys(() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(i ? e : r)
              }
            }, 10);
          return $s(t.viewport, d), $s(t.content, d), (0, R.jsx)(yo, {
            present: o || a,
            children: (0, R.jsx)(ks, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: r
            })
          })
        }),
        ks = N.forwardRef((e, r) => {
          const {
            orientation: t = "vertical",
            ...o
          } = e, n = xs(Ps, e.__scopeScrollArea), a = N.useRef(null), s = N.useRef(0), [i, d] = N.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Gs(i.viewport, i.content), c = {
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
              const n = Ks(t),
                a = r || n / 2,
                s = n - a,
                i = t.scrollbar.paddingStart + a,
                d = t.scrollbar.size - t.scrollbar.paddingEnd - s,
                l = t.content - t.viewport;
              return Zs([i, d], "ltr" === o ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, r)
          }
          return "horizontal" === t ? (0, R.jsx)(zs, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = Ws(n.viewport.scrollLeft, i, n.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              n.viewport && (n.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              n.viewport && (n.viewport.scrollLeft = u(e, n.dir))
            }
          }) : "vertical" === t ? (0, R.jsx)(Is, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = Ws(n.viewport.scrollTop, i);
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
        zs = N.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = xs(Ps, e.__scopeScrollArea), [s, i] = N.useState(), d = N.useRef(null), l = (0, jt.s)(r, d, a.onScrollbarXChange);
          return N.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(Ls, {
            "data-orientation": "horizontal",
            ...n,
            ref: l,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Ks(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.x),
            onDragScroll: r => e.onDragScroll(r.x),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollLeft + r.deltaX;
                e.onWheelScroll(o), Hs(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Xs(s.paddingLeft),
                  paddingEnd: Xs(s.paddingRight)
                }
              })
            }
          })
        }),
        Is = N.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = xs(Ps, e.__scopeScrollArea), [s, i] = N.useState(), d = N.useRef(null), l = (0, jt.s)(r, d, a.onScrollbarYChange);
          return N.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, R.jsx)(Ls, {
            "data-orientation": "vertical",
            ...n,
            ref: l,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Ks(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.y),
            onDragScroll: r => e.onDragScroll(r.y),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollTop + r.deltaY;
                e.onWheelScroll(o), Hs(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Xs(s.paddingTop),
                  paddingEnd: Xs(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Ts, Es] = hs(Ps),
        Ls = N.forwardRef((e, r) => {
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
          } = e, p = xs(Ps, t), [v, y] = N.useState(null), m = (0, jt.s)(r, e => y(e)), b = N.useRef(null), h = N.useRef(""), g = p.viewport, w = o.content - o.viewport, x = (0, Rt.c)(c), _ = (0, Rt.c)(d), C = Ys(u, 10);

          function j(e) {
            if (b.current) {
              const r = e.clientX - b.current.left,
                t = e.clientY - b.current.top;
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
          }, [g, v, w, x]), N.useEffect(_, [o, _]), $s(v, C), $s(p.content, C), (0, R.jsx)(Ts, {
            scope: t,
            scrollbar: v,
            hasThumb: n,
            onThumbChange: (0, Rt.c)(a),
            onThumbPointerUp: (0, Rt.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, Rt.c)(i),
            children: (0, R.jsx)(Pt.sG.div, {
              ...f,
              ref: m,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Ct.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = v.getBoundingClientRect(), h.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, Ct.mK)(e.onPointerMove, j),
              onPointerUp: (0, Ct.mK)(e.onPointerUp, e => {
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = h.current, p.viewport && (p.viewport.style.scrollBehavior = ""), b.current = null
              })
            })
          })
        }),
        As = "ScrollAreaThumb",
        Vs = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Es(As, e.__scopeScrollArea);
          return (0, R.jsx)(yo, {
            present: t || n.hasThumb,
            children: (0, R.jsx)(Ms, {
              ref: r,
              ...o
            })
          })
        }),
        Ms = N.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            style: o,
            ...n
          } = e, a = xs(As, t), s = Es(As, t), {
            onThumbPositionChange: i
          } = s, d = (0, jt.s)(r, e => s.onThumbChange(e)), l = N.useRef(void 0), c = Ys(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return N.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const r = () => {
                if (c(), !l.current) {
                  const r = Us(e, i);
                  l.current = r, i()
                }
              };
              return i(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [a.viewport, c, i]), (0, R.jsx)(Pt.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...n,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: (0, Ct.mK)(e.onPointerDownCapture, e => {
              const r = e.target.getBoundingClientRect(),
                t = e.clientX - r.left,
                o = e.clientY - r.top;
              s.onThumbPointerDown({
                x: t,
                y: o
              })
            }),
            onPointerUp: (0, Ct.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Vs.displayName = As;
      var qs = "ScrollAreaCorner",
        Fs = N.forwardRef((e, r) => {
          const t = xs(qs, e.__scopeScrollArea),
            o = Boolean(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && o ? (0, R.jsx)(Bs, {
            ...e,
            ref: r
          }) : null
        });
      Fs.displayName = qs;
      var Bs = N.forwardRef((e, r) => {
        const {
          __scopeScrollArea: t,
          ...o
        } = e, n = xs(qs, t), [a, s] = N.useState(0), [i, d] = N.useState(0), l = Boolean(a && i);
        return $s(n.scrollbarX, () => {
          const e = n.scrollbarX?.offsetHeight || 0;
          n.onCornerHeightChange(e), d(e)
        }), $s(n.scrollbarY, () => {
          const e = n.scrollbarY?.offsetWidth || 0;
          n.onCornerWidthChange(e), s(e)
        }), l ? (0, R.jsx)(Pt.sG.div, {
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

      function Xs(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Gs(e, r) {
        const t = e / r;
        return isNaN(t) ? 0 : t
      }

      function Ks(e) {
        const r = Gs(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          o = (e.scrollbar.size - t) * r;
        return Math.max(o, 18)
      }

      function Ws(e, r, t = "ltr") {
        const o = Ks(r),
          n = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
          a = r.scrollbar.size - n,
          s = r.content - r.viewport,
          i = a - o,
          d = "ltr" === t ? [0, s] : [-1 * s, 0],
          l = (0, ln.q)(e, d);
        return Zs([0, s], [0, i])(l)
      }

      function Zs(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function Hs(e, r) {
        return e > 0 && e < r
      }
      var Us = (e, r = () => {}) => {
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

      function Ys(e, r) {
        const t = (0, Rt.c)(e),
          o = N.useRef(0);
        return N.useEffect(() => () => window.clearTimeout(o.current), []), N.useCallback(() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(t, r)
        }, [t, r])
      }

      function $s(e, r) {
        const t = (0, Rt.c)(r);
        (0, Bt.N)(() => {
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
      var Qs = _s,
        Js = js,
        ei = Rs,
        ri = Vs,
        ti = Fs,
        oi = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ni = [" ", "Enter"],
        ai = "Select",
        [si, ii, di] = fn(ai),
        [li, ci] = (0, Ot.A)(ai, [di, Wt]),
        ui = Wt(),
        [fi, pi] = li(ai),
        [vi, yi] = li(ai);

      function mi(e) {
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
        } = e, m = ui(r), [b, h] = N.useState(null), [g, w] = N.useState(null), [x, _] = N.useState(!1), C = (0, cn.jH)(l), [j, O] = (0, go.i)({
          prop: o,
          defaultProp: n ?? !1,
          onChange: a,
          caller: ai
        }), [P, S] = (0, go.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: ai
        }), D = N.useRef(null), k = !b || !!v || !!b.closest("form"), [z, I] = N.useState(new Set), T = (0, At.B)(), E = Array.from(z).map(e => e.props.value).join(";"), L = N.useCallback(e => {
          I(r => new Set(r).add(e))
        }, []), A = N.useCallback(e => {
          I(r => {
            const t = new Set(r);
            return t.delete(e), t
          })
        }, []), V = {
          required: p,
          trigger: b,
          onTriggerChange: h,
          valueNode: g,
          onValueNodeChange: w,
          valueNodeHasChildren: x,
          onValueNodeHasChildrenChange: _,
          contentId: T,
          value: P,
          onValueChange: S,
          open: j,
          onOpenChange: O,
          dir: C,
          triggerPointerDownPosRef: D,
          disabled: f,
          name: c,
          autoComplete: u,
          form: v,
          nativeOptions: z,
          nativeSelectKey: E,
          isFormControl: k
        };
        return (0, R.jsx)(lo, {
          ...m,
          children: (0, R.jsx)(fi, {
            scope: r,
            ...V,
            children: (0, R.jsx)(si.Provider, {
              scope: r,
              children: (0, R.jsx)(vi, {
                scope: r,
                onNativeOptionAdd: L,
                onNativeOptionRemove: A,
                children: nd(y) ? y(V) : t
              })
            })
          })
        })
      }
      mi.displayName = "SelectProvider";
      var bi = e => {
        const {
          __scopeSelect: r,
          children: t,
          ...o
        } = e;
        return (0, R.jsx)(mi, {
          __scopeSelect: r,
          ...o,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, R.jsxs)(R.Fragment, {
            children: [t, e ? (0, R.jsx)(od, {
              __scopeSelect: r
            }) : null]
          })
        })
      };
      bi.displayName = ai;
      var hi = "SelectTrigger",
        gi = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            disabled: o = !1,
            ...n
          } = e, a = ui(t), s = pi(hi, t), i = s.disabled || o, d = (0, jt.s)(r, s.onTriggerChange), l = ii(t), c = N.useRef("touch"), [u, f, p] = sd(e => {
            const r = l().filter(e => !e.disabled),
              t = r.find(e => e.value === s.value),
              o = id(r, e, t);
            void 0 !== o && s.onValueChange(o.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, R.jsx)(co, {
            asChild: !0,
            ...a,
            children: (0, R.jsx)(Pt.sG.button, {
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
              "data-placeholder": ad(s.value) ? "" : void 0,
              ...n,
              ref: d,
              onClick: (0, Ct.mK)(n.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, Ct.mK)(n.onPointerDown, e => {
                c.current = e.pointerType;
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, Ct.mK)(n.onKeyDown, e => {
                const r = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), r && " " === e.key || oi.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      gi.displayName = hi;
      var wi = "SelectValue",
        xi = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = pi(wi, t), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, jt.s)(r, d.onValueNodeChange);
          (0, Bt.N)(() => {
            l(c)
          }, [l, c]);
          const f = ad(d.value);
          return (0, R.jsx)(Pt.sG.span, {
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
      xi.displayName = wi;
      var _i = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          ...n
        } = e;
        return (0, R.jsx)(Pt.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          children: o || "▼"
        })
      });
      _i.displayName = "SelectIcon";
      var Ci = "SelectPortal",
        [ji, Oi] = li(Ci, {
          forceMount: void 0
        }),
        Pi = e => {
          const {
            __scopeSelect: r,
            forceMount: t,
            ...o
          } = e;
          return (0, R.jsx)(ji, {
            scope: e.__scopeSelect,
            forceMount: t,
            children: (0, R.jsx)(vo, {
              asChild: !0,
              ...o
            })
          })
        };
      Pi.displayName = Ci;
      var Ri = "SelectContent",
        Si = N.forwardRef((e, r) => {
          const t = Oi(Ri, e.__scopeSelect),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = pi(Ri, e.__scopeSelect),
            [s, i] = N.useState();
          return (0, Bt.N)(() => {
            i(new DocumentFragment)
          }, []), (0, R.jsx)(yo, {
            present: o || a.open,
            children: ({
              present: e
            }) => e ? (0, R.jsx)(Ti, {
              ...n,
              ref: r
            }) : (0, R.jsx)(Ni, {
              ...n,
              fragment: s
            })
          })
        });
      Si.displayName = Ri;
      var Ni = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          fragment: n
        } = e;
        return n ? po.createPortal((0, R.jsx)(ki, {
          scope: t,
          children: (0, R.jsx)(si.Slot, {
            scope: t,
            children: (0, R.jsx)("div", {
              ref: r,
              children: o
            })
          })
        }), n) : null
      });
      Ni.displayName = "SelectContentFragment";
      var Di = 10,
        [ki, zi] = li(Ri),
        Ii = (0, ho.TL)("SelectContent.RemoveScroll"),
        Ti = N.forwardRef((e, r) => {
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
            avoidCollisions: m,
            ...b
          } = e, h = pi(Ri, t), [g, w] = N.useState(null), [x, _] = N.useState(null), C = (0, jt.s)(r, e => w(e)), [j, O] = N.useState(null), [P, S] = N.useState(null), D = ii(t), [k, z] = N.useState(!1), I = N.useRef(!1);
          N.useEffect(() => {
            if (g) return (0, aa.Eq)(g)
          }, [g]), (0, oa.Oh)();
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
            triggerPointerDownPosRef: A
          } = h;
          N.useEffect(() => {
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
          }, [g, L, A]), N.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [V, M] = sd(e => {
            const r = D().filter(e => !e.disabled),
              t = r.find(e => e.ref.current === document.activeElement),
              o = id(r, e, t);
            o && setTimeout(() => o.ref.current?.focus())
          }), q = N.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== h.value && h.value === r || o) && (O(e), o && (I.current = !0))
          }, [h.value]), F = N.useCallback(() => g?.focus(), [g]), B = N.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== h.value && h.value === r || o) && S(e)
          }, [h.value]), X = "popper" === o ? Li : Ei, G = X === Li ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: y,
            avoidCollisions: m
          } : {};
          return (0, R.jsx)(ki, {
            scope: t,
            content: g,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: q,
            selectedItem: j,
            onItemLeave: F,
            itemTextRefCallback: B,
            focusSelectedItem: E,
            selectedItemText: P,
            position: o,
            isPositioned: k,
            searchRef: V,
            children: (0, R.jsx)(na.A, {
              as: Ii,
              allowPinchZoom: !0,
              children: (0, R.jsx)(Yn, {
                asChild: !0,
                trapped: h.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Ct.mK)(n, e => {
                  h.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, R.jsx)(kt, {
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
                    ...b,
                    ...G,
                    onPlaced: () => z(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, Ct.mK)(b.onKeyDown, e => {
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
      Ti.displayName = "SelectContentImpl";
      var Ei = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onPlaced: o,
          ...n
        } = e, a = pi(Ri, t), s = zi(Ri, t), [i, d] = N.useState(null), [l, c] = N.useState(null), u = (0, jt.s)(r, e => c(e)), f = ii(t), p = N.useRef(!1), v = N.useRef(!0), {
          viewport: y,
          selectedItem: m,
          selectedItemText: b,
          focusSelectedItem: h
        } = s, g = N.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && y && m && b) {
            const e = a.trigger.getBoundingClientRect(),
              r = l.getBoundingClientRect(),
              t = a.valueNode.getBoundingClientRect(),
              n = b.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const o = n.left - r.left,
                a = t.left - o,
                s = e.left - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - Di,
                u = (0, ln.q)(a, [Di, Math.max(Di, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const o = r.right - n.right,
                a = window.innerWidth - t.right - o,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - Di,
                u = (0, ln.q)(a, [Di, Math.max(Di, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * Di,
              c = y.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              h = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = v + h + c + parseInt(u.paddingBottom, 10) + g,
              x = Math.min(5 * m.offsetHeight, w),
              _ = window.getComputedStyle(y),
              C = parseInt(_.paddingTop, 10),
              j = parseInt(_.paddingBottom, 10),
              O = e.top + e.height / 2 - Di,
              P = d - O,
              R = m.offsetHeight / 2,
              S = v + h + (m.offsetTop + R),
              N = w - S;
            if (S <= O) {
              const e = s.length > 0 && m === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const r = l.clientHeight - y.offsetTop - y.offsetHeight,
                t = S + Math.max(P, R + (e ? j : 0) + r + g);
              i.style.height = t + "px"
            } else {
              const e = s.length > 0 && m === s[0].ref.current;
              i.style.top = "0px";
              const r = Math.max(O, v + y.offsetTop + (e ? C : 0) + R) + N;
              i.style.height = r + "px", y.scrollTop = S - O + y.offsetTop
            }
            i.style.margin = `${Di}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", o?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, y, m, b, a.dir, o]);
        (0, Bt.N)(() => g(), [g]);
        const [w, x] = N.useState();
        (0, Bt.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = N.useCallback(e => {
          e && !0 === v.current && (g(), h?.(), v.current = !1)
        }, [g, h]);
        return (0, R.jsx)(Ai, {
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
            children: (0, R.jsx)(Pt.sG.div, {
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
      Ei.displayName = "SelectItemAlignedPosition";
      var Li = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          align: o = "start",
          collisionPadding: n = Di,
          ...a
        } = e, s = ui(t);
        return (0, R.jsx)(uo, {
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
      Li.displayName = "SelectPopperPosition";
      var [Ai, Vi] = li(Ri, {}), Mi = "SelectViewport", qi = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          nonce: o,
          ...n
        } = e, a = zi(Mi, t), s = Vi(Mi, t), i = (0, jt.s)(r, a.onViewportChange), d = N.useRef(0);
        return (0, R.jsxs)(R.Fragment, {
          children: [(0, R.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, R.jsx)(si.Slot, {
            scope: t,
            children: (0, R.jsx)(Pt.sG.div, {
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
              onScroll: (0, Ct.mK)(n.onScroll, e => {
                const r = e.currentTarget,
                  {
                    contentWrapper: t,
                    shouldExpandOnScrollRef: o
                  } = s;
                if (o?.current && t) {
                  const e = Math.abs(d.current - r.scrollTop);
                  if (e > 0) {
                    const o = window.innerHeight - 2 * Di,
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
      qi.displayName = Mi;
      var Fi = "SelectGroup",
        [Bi, Xi] = li(Fi);
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = (0, At.B)();
        return (0, R.jsx)(Bi, {
          scope: t,
          id: n,
          children: (0, R.jsx)(Pt.sG.div, {
            role: "group",
            "aria-labelledby": n,
            ...o,
            ref: r
          })
        })
      }).displayName = Fi;
      var Gi = "SelectLabel";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = Xi(Gi, t);
        return (0, R.jsx)(Pt.sG.div, {
          id: n.id,
          ...o,
          ref: r
        })
      }).displayName = Gi;
      var Ki = "SelectItem",
        [Wi, Zi] = li(Ki),
        Hi = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            value: o,
            disabled: n = !1,
            textValue: a,
            ...s
          } = e, i = pi(Ki, t), d = zi(Ki, t), l = i.value === o, [c, u] = N.useState(a ?? ""), [f, p] = N.useState(!1), v = (0, jt.s)(r, e => d.itemRefCallback?.(e, o, n)), y = (0, At.B)(), m = N.useRef("touch"), b = () => {
            n || (i.onValueChange(o), i.onOpenChange(!1))
          };
          return (0, R.jsx)(Wi, {
            scope: t,
            value: o,
            disabled: n,
            textId: y,
            isSelected: l,
            onItemTextChange: N.useCallback(e => {
              u(r => r || (e?.textContent ?? "").trim())
            }, []),
            children: (0, R.jsx)(si.ItemSlot, {
              scope: t,
              value: o,
              disabled: n,
              textValue: c,
              children: (0, R.jsx)(Pt.sG.div, {
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
                onFocus: (0, Ct.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Ct.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Ct.mK)(s.onClick, () => {
                  "mouse" !== m.current && b()
                }),
                onPointerUp: (0, Ct.mK)(s.onPointerUp, () => {
                  "mouse" === m.current && b()
                }),
                onPointerDown: (0, Ct.mK)(s.onPointerDown, e => {
                  m.current = e.pointerType
                }),
                onPointerMove: (0, Ct.mK)(s.onPointerMove, e => {
                  m.current = e.pointerType, n ? d.onItemLeave?.() : "mouse" === m.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Ct.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, Ct.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (ni.includes(e.key) && b(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Hi.displayName = Ki;
      var Ui = "SelectItemText",
        Yi = N.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            ...a
          } = e, s = pi(Ui, t), i = zi(Ui, t), d = Zi(Ui, t), l = yi(Ui, t), [c, u] = N.useState(null), f = (0, jt.s)(r, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, v = N.useMemo(() => (0, R.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: m
          } = l;
          return (0, Bt.N)(() => (y(v), () => m(v)), [y, m, v]), (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsx)(Pt.sG.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !ad(s.value) ? po.createPortal(a.children, s.valueNode) : null]
          })
        });
      Yi.displayName = Ui;
      var $i = "SelectItemIndicator";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return Zi($i, t).isSelected ? (0, R.jsx)(Pt.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: r
        }) : null
      }).displayName = $i;
      var Qi = "SelectScrollUpButton";
      N.forwardRef((e, r) => {
        const t = zi(Qi, e.__scopeSelect),
          o = Vi(Qi, e.__scopeSelect),
          [n, a] = N.useState(!1),
          s = (0, jt.s)(r, o.onScrollButtonChange);
        return (0, Bt.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollTop > 0;
              a(e)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, R.jsx)(ed, {
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
      }).displayName = Qi;
      var Ji = "SelectScrollDownButton";
      N.forwardRef((e, r) => {
        const t = zi(Ji, e.__scopeSelect),
          o = Vi(Ji, e.__scopeSelect),
          [n, a] = N.useState(!1),
          s = (0, jt.s)(r, o.onScrollButtonChange);
        return (0, Bt.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollHeight - r.clientHeight,
                t = Math.ceil(r.scrollTop) < e;
              a(t)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, R.jsx)(ed, {
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
      }).displayName = Ji;
      var ed = N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onAutoScroll: o,
          ...n
        } = e, a = zi("SelectScrollButton", t), s = N.useRef(null), i = ii(t), d = N.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return N.useEffect(() => () => d(), [d]), (0, Bt.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, R.jsx)(Pt.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          style: {
            flexShrink: 0,
            ...n.style
          },
          onPointerDown: (0, Ct.mK)(n.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerMove: (0, Ct.mK)(n.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerLeave: (0, Ct.mK)(n.onPointerLeave, () => {
            d()
          })
        })
      });
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return (0, R.jsx)(Pt.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: r
        })
      }).displayName = "SelectSeparator";
      var rd = "SelectArrow";
      N.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = ui(t);
        return "popper" === zi(rd, t).position ? (0, R.jsx)(fo, {
          ...n,
          ...o,
          ref: r
        }) : null
      }).displayName = rd;
      var td = "SelectBubbleInput",
        od = N.forwardRef(({
          __scopeSelect: e,
          ...r
        }, t) => {
          const o = pi(td, e),
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
            p = N.useRef(null),
            v = (0, jt.s)(t, p),
            y = n ?? "",
            m = (0, un.Z)(y),
            b = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return N.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const r = window.HTMLSelectElement.prototype,
              t = Object.getOwnPropertyDescriptor(r, "value").set;
            if (m !== y && t) {
              const r = new Event("change", {
                bubbles: !0
              });
              t.call(e, y), e.dispatchEvent(r)
            }
          }, [m, y]), (0, R.jsxs)(Pt.sG.select, {
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
              ...wo.Qg,
              ...r.style
            },
            ref: v,
            defaultValue: y,
            children: [ad(n) && !b ? (0, R.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function nd(e) {
        return "function" == typeof e
      }

      function ad(e) {
        return "" === e || void 0 === e
      }

      function sd(e) {
        const r = (0, Rt.c)(e),
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

      function id(e, r, t) {
        const o = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
          n = t ? e.indexOf(t) : -1;
        let a = (s = e, i = Math.max(n, 0), s.map((e, r) => s[(i + r) % s.length]));
        var s, i;
        1 === o.length && (a = a.filter(e => e !== t));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
        return d !== t ? d : void 0
      }

      function dd(e) {
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

      function ld(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function cd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ld(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = dd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ld(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ud(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      od.displayName = td;
      var fd = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        pd = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = cd(cd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) fd(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ud(e.variantClassNames, e => ud(e, e => e.split(" ")[0]))
            }
          }, r
        },
        vd = pd({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yd = pd({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        md = pd({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bd = pd({
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
        hd = pd({
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
        gd = pd({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const wd = (0, N.createContext)(null);

      function xd() {
        const e = (0, N.useContext)(wd);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const _d = (0, N.forwardRef)(({
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
          const m = (0, N.useRef)(null),
            b = (0, fe.UP)(m, y),
            h = (0, N.useId)(),
            g = (0, N.useId)(),
            w = (0, N.useId)(),
            x = (0, N.useId)(),
            _ = (0, N.useId)(),
            C = (0, N.useId)(),
            j = (0, N.useRef)(null),
            O = (0, N.useRef)(null),
            P = (0, N.useRef)(null),
            [S = !1, D] = (0, fe.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            k = (0, z.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": r
            }, v);
          return (0, R.jsx)(wd.Provider, {
            value: {
              labelId: h,
              errorId: g,
              descriptionId: w,
              triggerId: C,
              hintId: x,
              popoverId: _,
              labelRef: j,
              descriptionRef: O,
              hintRef: P,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: S,
              setIsOpen: D,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: t,
              isDisabled: o,
              isReadOnly: n,
              status: p,
              size: f
            },
            children: (0, R.jsx)(bi, {
              required: t,
              disabled: o,
              open: S,
              onOpenChange: () => D(!n && !S),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, R.jsx)("div", {
                ref: b,
                ...k,
                children: e
              })
            })
          })
        }),
        Cd = (0, N.forwardRef)(({
          hideDividers: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            popoverId: a
          } = xd(), s = (0, z.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: vd({
              hideDividers: e
            }),
            "data-testid": t
          }, o);
          return (0, R.jsx)(Si, {
            ...s,
            ref: n,
            children: (0, R.jsx)(qi, {
              className: "foundry_uaq1gwn",
              children: r
            })
          })
        }),
        jd = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(qi, {
            ref: t,
            ...o
          })
        }),
        Od = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": r
          }, t);
          return (0, R.jsxs)(Qs, {
            ...n,
            ref: o,
            children: [(0, R.jsx)(jd, {
              asChild: !0,
              children: (0, R.jsx)(Js, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, R.jsx)(ei, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, R.jsx)(ri, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Pd = (0, N.forwardRef)(({
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
            descriptionRef: m,
            hintRef: b,
            isOpen: h,
            size: g
          } = xd(), {
            isPressed: w,
            pressProps: x
          } = (0, os.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, C] = (0, N.useState)(!1), [j, O] = (0, N.useState)(!1);
          (0, N.useEffect)(() => {
            C(!!y.current || !!b.current), O(!!m.current)
          }, []);
          const P = (0, z.v6)({
              id: f,
              className: hd({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": _ ? (0, z.VW)(t, c, u) : t,
              "aria-describedby": j ? (0, z.VW)(o, v) : o,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": h ? "open" : "closed",
              "data-testid": r,
              "data-pressed": !!w
            }, (0, z.cJ)(x, "onKeyDown"), a),
            S = n ? pe.DX : gi;
          return (0, R.jsx)(S, {
            ...P,
            ref: s,
            children: e
          })
        }),
        Rd = (0, N.forwardRef)(({
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
            children: (0, R.jsx)(xi, {
              placeholder: e
            })
          })
        }),
        Sd = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const {
            isDisabled: n,
            isReadOnly: a,
            isOpen: s
          } = xd(), i = s ? ze.rX : ze.yQ, d = (0, z.v6)({
            asChild: !0,
            className: gd({
              isDisabled: a || n
            }),
            "data-testid": r
          }, t);
          return (0, R.jsx)(_i, {
            ...d,
            ref: o,
            children: e || (0, R.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Nd = (0, N.forwardRef)(({
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
          } = xd(), f = i && !n, p = (0, fe.UP)(c, s), v = (0, z.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: bd({
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
        Dd = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = xd(), d = (0, fe.UP)(i, n), l = (0, z.v6)({
            className: yd({
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
        kd = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = xd(), d = (0, fe.UP)(s, n), l = (0, z.v6)({
            className: md({
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
        zd = (0, N.forwardRef)(({
          children: e,
          value: r,
          isDisabled: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, N.useRef)(null),
            i = (0, fe.UP)(s, a),
            d = (0, z.v6)({
              value: r,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: t,
              "data-testid": o
            }, n);
          return (0, R.jsx)(Hi, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Id = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": r
          }, t);
          return (0, R.jsx)(Yi, {
            ref: o,
            asChild: !0,
            children: (0, R.jsx)("span", {
              ...n,
              children: e
            })
          })
        }),
        Td = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_uaq1gws",
            "data-testid": r
          }, t);
          return (0, R.jsx)(_i, {
            asChild: !0,
            ...n,
            ref: o,
            children: e
          })
        }),
        Ed = Pi,
        Ld = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = xd(), i = (0, z.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : vs;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Ad = ys,
        Vd = ms;
      var Md = t(83588),
        qd = t(56728);

      function Fd(e) {
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

      function Bd(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Xd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Bd(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Fd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Bd(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Gd(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Kd = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Wd = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Xd(Xd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Kd(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gd(e.variantClassNames, e => Gd(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Zd = Wd({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hd = Wd({
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
        Ud = Wd({
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
        Yd = Wd({
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
        $d = Wd({
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
      const Qd = (0, N.createContext)(null);

      function Jd() {
        const e = (0, N.useContext)(Qd);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const el = (0, N.forwardRef)(({
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
            u = (0, N.useId)(),
            f = (0, N.useId)(),
            p = (0, N.useId)();
          return (0, R.jsx)(Qd.Provider, {
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
        rl = (0, N.forwardRef)(({
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
            v = (0, fe.UP)(p, f),
            {
              size: y,
              appearance: m,
              inputId: b,
              labelId: h,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: x
            } = Jd(),
            _ = (0, qd.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: C
            } = (0, Md.K)({
              id: a || b,
              "aria-labelledby": (0, z.VW)(o, h),
              "aria-describedby": (0, z.VW)(n, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            j = (0, z.v6)({
              className: $d({
                appearance: m
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || x,
              "data-testid": e,
              onClick: e => {
                r?.(e) ?? t?.(e), e.defaultPrevented || w || x || _.toggle()
              }
            }, u);
          return (0, R.jsxs)("div", {
            ...j,
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)("input", {
                ...C,
                ref: v
              })
            }), (0, R.jsx)("div", {
              className: Yd({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, R.jsx)("div", {
                className: Hd({
                  size: y,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        tl = (0, N.forwardRef)(({
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
          } = Jd(), c = (0, z.v6)({
            id: n.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Ud({
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
        ol = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Jd(), i = o.id || s, d = (0, z.v6)({
            className: Zd({
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
      var nl = t(26688);
      const al = ({
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
        sl = ({
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
        il = ({
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
        dl = ({
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
        ll = ({
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
        cl = ({
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

      function ul(e) {
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

      function fl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function pl(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? fl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ul(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function vl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var yl = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ml = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = pl(pl({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yl(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vl(e.variantClassNames, e => vl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        bl = ml({
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
        hl = ml({
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
        gl = ml({
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
        wl = ml({
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
        xl = ml({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _l = ml({
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
      const Cl = (0, N.createContext)(null);

      function jl() {
        const e = (0, N.useContext)(Cl);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Ol = (0, N.forwardRef)(({
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
            l = (0, N.useId)(),
            c = (0, N.useId)(),
            u = (0, N.useId)();
          return (0, R.jsx)(Cl.Provider, {
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
        Pl = (0, N.forwardRef)(({
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
            isIndeterminate: m,
            isRequired: b,
            descriptionId: h,
            labelId: g,
            inputId: w,
            ...x
          } = jl(), _ = (0, N.useRef)(null), C = f.id || w, {
            isPressed: j,
            pressProps: O
          } = (0, os.d)({
            ref: _
          }), {
            setSelected: P,
            toggle: S,
            ...D
          } = (0, qd.H)({
            isSelected: r,
            defaultSelected: t,
            onChange: o
          }), {
            inputProps: k,
            isSelected: I,
            isDisabled: T,
            isReadOnly: E
          } = (0, nl.v)({
            "aria-label": "",
            id: C,
            name: n,
            ...x
          }, {
            ...D,
            toggle: S,
            setSelected: x.isReadOnly ? () => !1 : P
          }, _), L = (0, z.v6)({
            className: hl({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || T || E || S()
            }
          }, O, f), A = (0, z.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": r,
            "aria-labelledby": (0, z.VW)(c, g),
            "aria-describedby": (0, z.VW)(d, h),
            "aria-errormessage": (0, z.VW)(l, x.isInvalid ? h : void 0),
            "aria-required": b,
            required: b
          }, k), V = m ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, R.jsxs)("div", {
            ...L,
            children: [(0, R.jsx)(pe.s6, {
              children: (0, R.jsx)("input", {
                ...A,
                ref: p
              })
            }), (0, R.jsx)("div", {
              className: (0, ke.clsx)(bl({
                size: v,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": T || E,
              "data-testid": e,
              "data-pressed": j,
              children: (0, R.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || m) && (0, R.jsx)(V, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Rl = (0, N.forwardRef)(({
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
          } = jl(), u = a.id || d, f = c && !n, p = (0, z.v6)({
            className: _l({
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
        Sl = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = jl(), i = o.id || s, d = (0, z.v6)({
            className: gl({
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
        Nl = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = jl(), s = o.id || a, i = (0, z.v6)({
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
        Dl = (0, N.createContext)(null);

      function kl() {
        const e = (0, N.useContext)(Dl);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const zl = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          size: o = "MD",
          isRequired: n = !1,
          ...a
        }, s) => {
          const [i, d] = (0, N.useState)(null), [l, c] = (0, N.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, z.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = r ? pe.DX : "fieldset";
          return (0, R.jsx)(Dl.Provider, {
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
        Il = (0, N.forwardRef)(({
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
          } = kl(), l = d && !a, c = (0, z.v6)({
            "data-testid": t,
            className: xl({
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
        Tl = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setDescriptionId: a
          } = kl(), s = (0, N.useId)(), i = o.id || s;
          (0, N.useEffect)(() => {
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
        El = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = kl(), s = (0, z.v6)({
            "data-testid": t,
            className: wl({
              size: a
            })
          }, o), i = r ? pe.DX : "div";
          return (0, R.jsx)(i, {
            ...s,
            ref: n,
            children: e
          })
        }),
        Ll = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setErrorTextId: a
          } = kl(), s = (0, N.useId)(), i = o.id || s;
          (0, N.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, z.v6)({
              "data-testid": t,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, o),
            l = ze.X,
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

      function Al(e) {
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

      function Vl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ml(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Vl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Al(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ql(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Fl = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Bl = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ml(Ml({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Fl(l, o, e.defaultVariants) && (t += " " + c);
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
        },
        Xl = Bl({
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
        Gl = Bl({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kl = Bl({
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
        Wl = Bl({
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
      const Zl = (0, N.createContext)(null);

      function Hl() {
        const e = (0, N.useContext)(Zl);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Ul = (0, N.forwardRef)(({
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
            u = (0, N.useId)(),
            f = (0, N.useId)(),
            p = (0, N.useId)(),
            v = (0, N.useId)();
          return (0, R.jsx)(Zl.Provider, {
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
        Yl = (0, N.forwardRef)(({
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
          } = Hl(), u = (0, z.v6)({
            className: Kl({
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
        $l = (0, N.forwardRef)(({
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
            isRequired: m,
            isReadOnly: b,
            status: h
          } = Hl(), g = (0, N.useRef)(null), w = (0, fe.UP)(g, c), x = (0, z.v6)({
            className: Wl({
              isInvalid: "invalid" === h,
              isDisabled: y,
              isReadOnly: b,
              isSuccess: "success" === h
            }),
            name: a,
            id: l.id || p,
            rows: o,
            defaultValue: n,
            disabled: y,
            required: m,
            readOnly: b,
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
            ...m && {
              "aria-required": !0
            }
          }, l), _ = e ? pe.DX : "textarea";
          return (0, R.jsx)(_, {
            ref: w,
            ...x,
            children: r
          })
        }),
        Ql = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Hl(), i = (0, z.v6)({
            className: Xl({
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
        Jl = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = Hl(), i = (0, z.v6)({
            className: Gl({
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
        ec = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Hl(), i = (0, z.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : vs;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        rc = ys,
        tc = ms;
      var oc = t(707),
        nc = t(5277);

      function ac(e) {
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

      function sc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ic(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? sc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ac(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function dc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var lc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        cc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ic(ic({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) lc(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dc(e.variantClassNames, e => dc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        uc = cc({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fc = cc({
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
      const pc = (0, N.createContext)(null);

      function vc() {
        const e = (0, N.useContext)(pc);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const yc = (0, N.forwardRef)(({
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
            p = (0, fe.UP)(f, u),
            v = (0, N.useId)(),
            y = (0, N.useId)(),
            m = (0, N.useId)(),
            b = (0, oc.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: h
            } = (0, nc.m)({
              ...c,
              orientation: t,
              "aria-labelledby": (0, z.VW)(v, s),
              "aria-describedby": (0, z.VW)(y, m, i),
              "aria-errormessage": (0, z.VW)(m, d)
            }, b),
            g = (0, z.v6)({
              className: "foundry_njguqn0"
            }, h, (0, z.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? pe.DX : "div";
          return (0, R.jsx)(pc.Provider, {
            value: {
              state: b,
              size: e,
              appearance: r,
              orientation: t,
              descriptionId: y,
              labelId: v,
              errorId: m,
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
        mc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            size: a,
            orientation: s
          } = vc(), i = (0, z.v6)({
            "data-testid": e,
            className: fc({
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
        bc = (0, N.forwardRef)(({
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
          } = vc(), l = i && !n, c = (0, z.v6)({
            id: a.id || d,
            "data-testid": e,
            className: uc({
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
        hc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = vc(), s = (0, z.v6)({
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
        gc = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            errorId: a,
            status: s
          } = vc(), i = (0, z.v6)({
            className: "foundry_njguqnc",
            "data-testid": r,
            errorId: a,
            status: s
          }, o), d = t ? pe.DX : vs;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        wc = ys,
        xc = ms;
      var _c = t(80146),
        Cc = cc({
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
        jc = cc({
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
        Oc = cc({
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
        Pc = cc({
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
      const Rc = ({
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
        Sc = ({
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
        Nc = ({
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
        Dc = (0, N.forwardRef)(({
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
        kc = (0, N.forwardRef)(({
          testId: e,
          value: r,
          ...t
        }, o) => {
          const n = (0, N.useRef)(null),
            a = (0, fe.UP)(n, o),
            s = (0, N.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = vc(),
            {
              isPressed: p,
              pressProps: v
            } = (0, os.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, _c.z)({
              ...t,
              id: s,
              value: r,
              "aria-label": ""
            }, i, n),
            m = y.checked,
            b = y.disabled || i?.isReadOnly,
            h = (0, z.v6)(y, {
              disabled: b,
              readOnly: u,
              required: f,
              "data-testid": e,
              ...b && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, t),
            g = c[`Dot${l}`];
          return (0, R.jsxs)("div", {
            className: Pc({
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
              className: Oc({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": m ? "checked" : "unchecked",
              "data-disabled": b,
              "data-pressed": p,
              ...v,
              children: (0, R.jsx)("span", {
                className: "foundry_1pfduet9",
                children: m && (0, R.jsx)(g, {})
              })
            })]
          })
        }),
        zc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            size: s,
            state: i
          } = vc(), d = (0, N.useId)(), l = (0, z.v6)({
            id: d,
            "data-testid": e,
            className: jc({
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
        Ic = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = vc(), s = (0, z.v6)({
            "data-testid": e,
            className: Cc({
              isDisabled: a
            })
          }, o), i = r ? pe.DX : "span";
          return (0, R.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        });
      var Tc = t(58900);

      function Ec(e) {
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

      function Lc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ac(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Lc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ec(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Lc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Vc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Mc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        qc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ac(Ac({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Mc(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vc(e.variantClassNames, e => Vc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Fc = qc({
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
        Bc = qc({
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
        Xc = qc({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gc = qc({
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
        Kc = qc({
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
        Wc = qc({
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
      const Zc = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Hc = (0, N.createContext)(null);

      function Uc() {
        const e = (0, N.useContext)(Hc);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Yc = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, N.useState)("text"), u = `${(0,N.useId)()}-label`, f = `${(0,N.useId)()}-input`, p = `${(0,N.useId)()}-description`, v = (0, N.useRef)(null), y = (0, N.useRef)(Zc), m = (0, z.v6)({
            "data-testid": t,
            className: "foundry_8oytzo4"
          }, i), b = e ? pe.DX : "div";
          return (0, R.jsx)(Hc.Provider, {
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
            children: (0, R.jsx)(b, {
              ref: d,
              ...m,
              children: r
            })
          })
        }),
        $c = (0, N.forwardRef)(({
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
          } = Uc(), u = d && !n, f = (0, z.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: Wc({
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
        Qc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = Uc(), s = (0, z.v6)({
            "data-testid": e,
            className: Xc({
              isDisabled: a
            })
          }, o), i = r ? pe.DX : "span";
          return (0, R.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        }),
        Jc = (0, N.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = Uc(), d = (0, z.v6)({
            "data-testid": e,
            className: (0, ke.clsx)(Fc({
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
        eu = (0, N.forwardRef)(({
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
            labelId: m,
            inputId: b,
            descriptionId: h,
            setType: g,
            type: w,
            inputRef: x,
            focusState: _
          } = Uc();
          (0, N.useEffect)(() => g(l), []);
          const C = "invalid" === y,
            j = (0, z.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: b,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, z.VW)(m, i),
              "aria-describedby": (0, z.VW)(h, d),
              "data-testid": e,
              className: (0, ke.clsx)(Kc({
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
            O = (0, Tc.A)({
              mask: t,
              replacement: o,
              showMask: n,
              track: a
            }),
            P = (0, fe.UP)(t && o ? O : null, x, u),
            S = r ? pe.DX : "input";
          return (0, R.jsx)(S, {
            ref: P,
            ...j
          })
        }),
        ru = (0, N.forwardRef)(({
          icon: e,
          asChild: r,
          testId: t,
          side: o,
          ...n
        }, a) => {
          const {
            isDisabled: s
          } = Uc(), i = (0, z.v6)({
            size: "LG",
            "data-testid": t,
            className: (0, ke.clsx)(Gc({
              side: o,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, n), d = r ? pe.DX : Ie[e];
          return (0, R.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        tu = (0, N.forwardRef)(({
          ...e
        }, r) => {
          const {
            isDisabled: t
          } = Uc(), o = (0, z.v6)({
            isDisabled: t,
            size: "LG",
            appearance: "ghost",
            className: (0, ke.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, R.jsx)(er, {
            ref: r,
            ...o,
            preventFocusOnPress: !1
          })
        }),
        ou = (0, N.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: r,
          ...t
        }, o) => {
          const {
            type: n,
            setType: a,
            inputRef: s,
            focusState: i
          } = Uc(), d = "password" === n, l = d ? e : r;
          (0, N.useEffect)(() => {
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
          return (0, R.jsxs)(on, {
            children: [(0, R.jsx)(nn, {
              children: (0, R.jsx)(tu, {
                ref: o,
                ...c
              })
            }), (0, R.jsxs)(an, {
              side: "bottom",
              align: "end",
              children: [l, (0, R.jsx)(sn, {})]
            })]
          })
        }),
        nu = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Uc(), i = (0, z.v6)({
            className: Bc({
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
        au = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Uc(), i = (0, z.v6)({
            className: "foundry_8oytzo13",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? pe.DX : vs;
          return (0, R.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        su = ys,
        iu = ms;
      var du = t(68196);

      function lu(e) {
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

      function cu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function uu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? cu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = lu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : cu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function fu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var pu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        vu = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = uu(uu({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) pu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fu(e.variantClassNames, e => fu(e, e => e.split(" ")[0]))
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
      const yu = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        mu = (0, N.forwardRef)(({
          label: e,
          size: r = "LG",
          testId: t,
          ...o
        }, n) => {
          const a = (0, N.useRef)(null),
            s = (0, fe.UP)(a, n),
            {
              buttonProps: i
            } = (0, fe.sL)(o, a),
            d = (0, z.v6)({
              "data-testid": t,
              className: vu({
                size: r
              })
            }, i);
          return (0, R.jsx)("button", {
            ref: s,
            ...d,
            children: (0, R.jsx)(ze.X, {
              label: e,
              size: yu[r]
            })
          })
        });

      function bu(e) {
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

      function hu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function gu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? hu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = bu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function wu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var xu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        _u = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = gu(gu({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) xu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wu(e.variantClassNames, e => wu(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Cu = _u({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ju = _u({
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
        Ou = _u({
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
      const Pu = (0, N.createContext)(null);

      function Ru() {
        const e = (0, N.useContext)(Pu);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Su = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          status: t,
          background: o,
          ...n
        }, a) => {
          const s = e ? pe.DX : "div",
            i = (0, z.v6)({
              className: Ou({
                status: t,
                background: o
              })
            }, n);
          return (0, R.jsx)(Pu.Provider, {
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
        Nu = (0, N.forwardRef)(({
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
        Du = (0, N.forwardRef)(({
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
        ku = {
          danger: ze.RT,
          information: ze.R2,
          success: ze.rW,
          warning: ze.lW
        },
        zu = (0, N.forwardRef)(({
          asChild: e,
          size: r = "XL",
          ...t
        }, o) => {
          const {
            status: n
          } = Ru(), a = e ? pe.DX : ku[n], s = (0, z.v6)({
            className: ju({
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
        Iu = (0, N.forwardRef)(({
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
        Tu = (0, N.forwardRef)(({
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
        Eu = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, N.useRef)(null),
            s = (0, fe.UP)(a, n),
            i = e ? pe.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, du.i)(o, a),
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
        Lu = (0, N.forwardRef)(({
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
        Au = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          className: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : "div";
          return (0, R.jsx)(a, {
            ref: n,
            "data-testid": r,
            className: (0, ke.clsx)(t, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...o
          })
        }),
        Vu = (0, N.forwardRef)((e, r) => {
          const {
            background: t
          } = Ru(), o = "none" !== t, n = (0, z.v6)({
            className: Cu({
              hasBackground: o
            })
          }, e);
          return (0, R.jsx)(mu, {
            size: "SM",
            ref: r,
            ...n
          })
        });
      var Mu = t(64634),
        qu = t(7697),
        Fu = t(17497);
      var Bu = t(69066);

      function Xu(e) {
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

      function Gu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ku(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Gu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Xu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Gu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Wu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Zu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Hu = "foundry_qmpv6yv",
        Uu = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ku(Ku({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Zu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wu(e.variantClassNames, e => Wu(e, e => e.split(" ")[0]))
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
      const Yu = (0, N.createContext)(null);

      function $u() {
        const e = (0, N.useContext)(Yu);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Qu = (0, N.forwardRef)(({
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
                [o, n] = (0, N.useState)([]),
                a = o.length,
                [s, i] = (0, N.useState)(0),
                [d, l] = (0, Mu.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: r && a > 1
                }, [(0, qu.A)(), (0, Fu.A)()]),
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
            y = (0, z.v6)({
              className: Uu(c)
            }, v, i),
            m = e ? pe.DX : "div";
          return (0, R.jsx)(Yu.Provider, {
            value: l,
            children: (0, R.jsx)(m, {
              ref: d,
              "data-testid": t,
              "data-initialized": u,
              ...y,
              children: r
            })
          })
        }),
        Ju = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        ef = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            currentAlert: o
          } = $u();
          if (!e && !o || !o?.status) return null;
          const n = e || Ju[o.status],
            a = Ie[n],
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
        rf = (0, N.forwardRef)(({
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
        tf = (0, N.forwardRef)(({
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
        of = (0, N.forwardRef)(({
          testId: e,
          children: r,
          ...t
        }, o) => {
          const {
            setAlerts: n,
            emblaRef: a,
            emblaApi: s
          } = $u(), i = (0, z.v6)({
            className: "foundry_qmpv6ym"
          }, t), d = (0, fe.UP)(a, o), l = N.Children.map(r, e => {
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
        nf = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, N.useRef)(null),
            s = (0, fe.UP)(a, n),
            i = e ? pe.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, du.i)(o, a),
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
        af = (0, N.forwardRef)((e, r) => {
          const t = (0, z.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, R.jsx)(mu, {
            ref: r,
            "data-close-btn": !0,
            size: "SM",
            ...t
          })
        }),
        sf = (0, N.forwardRef)(({
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
        df = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            nextAlert: o,
            canScrollNext: n
          } = $u(), a = (0, z.v6)({
            className: Hu
          }, r);
          return (0, R.jsx)(Bu.K, {
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
        lf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            prevAlert: o,
            canScrollPrev: n
          } = $u(), a = (0, z.v6)({
            className: Hu
          }, r);
          return (0, R.jsx)(Bu.K, {
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
        cf = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            currentAlertIndex: o,
            numAlerts: n
          } = $u(), a = (0, z.v6)({
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

      function uf(e) {
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

      function ff(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function pf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ff(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = uf(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ff(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function vf(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var yf = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        mf = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = pf(pf({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yf(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vf(e.variantClassNames, e => vf(e, e => e.split(" ")[0]))
            }
          }, r
        },
        bf = mf({
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
        hf = mf({
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
        gf = mf({
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
      const wf = (0, N.createContext)(null);

      function xf() {
        const e = (0, N.useContext)(wf);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const _f = (0, N.forwardRef)(({
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
              className: hf(c)
            }, d),
            f = e ? pe.DX : "div";
          return (0, R.jsx)(wf.Provider, {
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
        Cf = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = xf(), s = e ? pe.DX : "div", i = (0, z.v6)({
            className: gf({
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
        jf = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Ie[e],
            n = (0, z.v6)({
              className: "foundry_oahh5812"
            }, r);
          return (0, R.jsx)(o, {
            ref: t,
            size: "SM",
            ...n
          })
        }),
        Of = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            background: o,
            isDisabled: n
          } = xf(), a = (0, z.v6)({
            className: bf({
              background: o
            })
          }, r);
          return (0, R.jsx)(er, {
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
      var Pf = t(72976),
        Rf = "ToastProvider",
        [Sf, Nf, Df] = fn("Toast"),
        [kf, zf] = (0, Ot.A)("Toast", [Df]),
        [If, Tf] = kf(Rf),
        Ef = e => {
          const {
            __scopeToast: r,
            label: t = "Notification",
            duration: o = 5e3,
            swipeDirection: n = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = N.useState(null), [c, u] = N.useState(0), f = N.useRef(!1), p = N.useRef(!1);
          return t.trim() || console.error(`Invalid prop \`label\` supplied to \`${Rf}\`. Expected non-empty \`string\`.`), (0, R.jsx)(Sf.Provider, {
            scope: r,
            children: (0, R.jsx)(If, {
              scope: r,
              label: t,
              duration: o,
              swipeDirection: n,
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
      Ef.displayName = Rf;
      var Lf = "ToastViewport",
        Af = ["F8"],
        Vf = "toast.viewportPause",
        Mf = "toast.viewportResume",
        qf = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            hotkey: o = Af,
            label: n = "Notifications ({hotkey})",
            ...a
          } = e, s = Tf(Lf, t), i = Nf(t), d = N.useRef(null), l = N.useRef(null), c = N.useRef(null), u = N.useRef(null), f = (0, jt.s)(r, u, s.onViewportChange), p = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
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
                    const e = new CustomEvent(Vf);
                    r.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                o = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(Mf);
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
                o = [t, ...np(t)];
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
                  ap(n.slice(a + 1)) ? r.preventDefault() : o ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r)
            }
          }, [i, y]), (0, R.jsxs)(Lt, {
            ref: d,
            role: "region",
            "aria-label": n.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, R.jsx)(Bf, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                ap(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, R.jsx)(Sf.Slot, {
              scope: t,
              children: (0, R.jsx)(Pt.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, R.jsx)(Bf, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                ap(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      qf.displayName = Lf;
      var Ff = "ToastFocusProxy",
        Bf = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            onFocusFromOutsideViewport: o,
            ...n
          } = e, a = Tf(Ff, t);
          return (0, R.jsx)(wo.s6, {
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
      Bf.displayName = Ff;
      var Xf = "Toast",
        Gf = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, go.i)({
            prop: o,
            defaultProp: n ?? !0,
            onChange: a,
            caller: Xf
          });
          return (0, R.jsx)(yo, {
            present: t || i,
            children: (0, R.jsx)(Zf, {
              open: i,
              ...s,
              ref: r,
              onClose: () => d(!1),
              onPause: (0, Rt.c)(e.onPause),
              onResume: (0, Rt.c)(e.onResume),
              onSwipeStart: (0, Ct.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Ct.mK)(e.onSwipeMove, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${t}px`)
              }),
              onSwipeCancel: (0, Ct.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Ct.mK)(e.onSwipeEnd, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${t}px`), d(!1)
              })
            })
          })
        });
      Gf.displayName = Xf;
      var [Kf, Wf] = kf(Xf, {
        onClose() {}
      }), Zf = N.forwardRef((e, r) => {
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
        } = e, y = Tf(Xf, t), [m, b] = N.useState(null), h = (0, jt.s)(r, e => b(e)), g = N.useRef(null), w = N.useRef(null), x = n || y.duration, _ = N.useRef(0), C = N.useRef(x), j = N.useRef(0), {
          onToastAdd: O,
          onToastRemove: P
        } = y, S = (0, Rt.c)(() => {
          const e = m?.contains(document.activeElement);
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
            return e.addEventListener(Vf, t), e.addEventListener(Mf, r), () => {
              e.removeEventListener(Vf, t), e.removeEventListener(Mf, r)
            }
          }
        }, [y.viewport, x, d, l, D]), N.useEffect(() => {
          a && !y.isClosePausedRef.current && D(x)
        }, [a, x, y.isClosePausedRef, D]), N.useEffect(() => (O(), () => P()), [O, P]);
        const k = N.useMemo(() => m ? rp(m) : null, [m]);
        return y.viewport ? (0, R.jsxs)(R.Fragment, {
          children: [k && (0, R.jsx)(Hf, {
            __scopeToast: t,
            role: "status",
            "aria-live": "foreground" === o ? "assertive" : "polite",
            children: k
          }), (0, R.jsx)(Kf, {
            scope: t,
            onClose: S,
            children: po.createPortal((0, R.jsx)(Sf.ItemSlot, {
              scope: t,
              children: (0, R.jsx)(Et, {
                asChild: !0,
                onEscapeKeyDown: (0, Ct.mK)(i, () => {
                  y.isFocusedToastEscapeKeyDownRef.current || S(), y.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, R.jsx)(Pt.sG.li, {
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
                  onKeyDown: (0, Ct.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, S()))
                  }),
                  onPointerDown: (0, Ct.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Ct.mK)(e.onPointerMove, e => {
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
                    o ? (w.current = l, tp("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : op(l, y.swipeDirection, d) ? (w.current = l, tp("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(r) > d || Math.abs(t) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, Ct.mK)(e.onPointerUp, e => {
                    const r = w.current,
                      t = e.target;
                    if (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), w.current = null, g.current = null, r) {
                      const t = e.currentTarget,
                        o = {
                          originalEvent: e,
                          delta: r
                        };
                      op(r, y.swipeDirection, y.swipeThreshold) ? tp("toast.swipeEnd", p, o, {
                        discrete: !0
                      }) : tp("toast.swipeCancel", f, o, {
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
      }), Hf = e => {
        const {
          __scopeToast: r,
          children: t,
          ...o
        } = e, n = Tf(Xf, r), [a, s] = N.useState(!1), [i, d] = N.useState(!1);
        return function(e = () => {}) {
          const r = (0, Rt.c)(e);
          (0, Bt.N)(() => {
            let e = 0,
              t = 0;
            return e = window.requestAnimationFrame(() => t = window.requestAnimationFrame(r)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(t)
            }
          }, [r])
        }(() => s(!0)), N.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, R.jsx)(vo, {
          asChild: !0,
          container: n.announcerContainer || void 0,
          children: (0, R.jsx)(wo.s6, {
            ...o,
            children: a && (0, R.jsxs)(R.Fragment, {
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
        return (0, R.jsx)(Pt.sG.div, {
          ...o,
          ref: r
        })
      }).displayName = "ToastTitle";
      var Uf = N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, R.jsx)(Pt.sG.div, {
          ...o,
          ref: r
        })
      });
      Uf.displayName = "ToastDescription";
      var Yf = "ToastAction",
        $f = N.forwardRef((e, r) => {
          const {
            altText: t,
            ...o
          } = e;
          return t.trim() ? (0, R.jsx)(ep, {
            altText: t,
            asChild: !0,
            children: (0, R.jsx)(Jf, {
              ...o,
              ref: r
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Yf}\`. Expected non-empty \`string\`.`), null)
        });
      $f.displayName = Yf;
      var Qf = "ToastClose",
        Jf = N.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            ...o
          } = e, n = Wf(Qf, t);
          return (0, R.jsx)(ep, {
            asChild: !0,
            children: (0, R.jsx)(Pt.sG.button, {
              type: "button",
              ...o,
              ref: r,
              onClick: (0, Ct.mK)(e.onClick, n.onClose)
            })
          })
        });
      Jf.displayName = Qf;
      var ep = N.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          altText: o,
          ...n
        } = e;
        return (0, R.jsx)(Pt.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": o || void 0,
          ...n,
          ref: r
        })
      });

      function rp(e) {
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
              } else r.push(...rp(e))
          }
        }), r
      }

      function tp(e, r, t, {
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
        }), o ? (0, Pt.hO)(n, a) : n.dispatchEvent(a)
      }
      var op = (e, r, t = 0) => {
        const o = Math.abs(e.x),
          n = Math.abs(e.y),
          a = o > n;
        return "left" === r || "right" === r ? a && o > t : !a && n > t
      };

      function np(e) {
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

      function ap(e) {
        const r = document.activeElement;
        return e.some(e => e === r || (e.focus(), document.activeElement !== r))
      }
      var sp = Ef,
        ip = qf,
        dp = Gf,
        lp = Uf,
        cp = $f,
        up = Jf;

      function fp(e) {
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

      function pp(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function vp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? pp(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = fp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pp(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function yp(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var mp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        bp = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = vp(vp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) mp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yp(e.variantClassNames, e => yp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        hp = bp({
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
        gp = bp({
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
        wp = bp({
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
      const xp = ({
          testId: e,
          ...r
        }) => (0, R.jsx)(sp, {
          "data-testid": e,
          ...r
        }),
        _p = (0, N.forwardRef)(({
          children: e,
          testId: r,
          position: t = "bottomRight",
          ...o
        }, n) => {
          const a = (0, z.v6)({
            className: wp({
              position: t
            })
          }, o);
          return (0, R.jsx)(ip, {
            ref: n,
            "data-testid": r,
            ...a,
            children: e
          })
        }),
        Cp = (0, N.createContext)(null);

      function jp() {
        const e = (0, N.useContext)(Cp);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Op = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          appearance: o = "success",
          ...n
        }, a) => {
          const s = e ? pe.DX : dp,
            i = (0, z.v6)({
              className: gp({
                appearance: o
              })
            }, n);
          return (0, R.jsx)(Cp.Provider, {
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
        Pp = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? pe.DX : lp,
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
        Rp = {
          danger: ze.RT,
          information: ze.R2,
          success: ze.rW,
          warning: ze.lW,
          avocado: ze.rW
        },
        Sp = (0, N.forwardRef)(({
          asChild: e,
          ...r
        }, t) => {
          const {
            appearance: o
          } = jp(), n = e ? pe.DX : Rp[o], a = (0, z.v6)({
            className: hp({
              appearance: o
            }),
            size: "LG"
          }, r);
          return (0, R.jsx)(n, {
            ref: t,
            ...a
          })
        }),
        Np = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, o);
          return (0, R.jsx)(cp, {
            ref: n,
            "data-testid": t,
            ...a,
            children: e ? (0, R.jsx)(pe.DX, {
              children: r
            }) : (0, R.jsx)(Pf.$, {
              size: "MD",
              appearance: "link",
              children: r
            })
          })
        }),
        Dp = (0, N.forwardRef)(({
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
          return (0, R.jsx)(up, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e ? (0, R.jsx)(pe.DX, {
              children: r
            }) : (0, R.jsx)(mu, {
              size: "SM",
              label: o
            })
          })
        });
      var kp = t(30259);

      function zp(e) {
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

      function Ip(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Tp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ip(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = zp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ip(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ep(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Lp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ap = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Tp(Tp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Lp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ep(e.variantClassNames, e => Ep(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Vp = Ap({
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
        Mp = Ap({
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
        qp = Ap({
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

      function Fp() {
        const e = (0, N.useContext)(Bp);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Bp = (0, N.createContext)(null),
        Xp = (0, N.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          size: o = "MD",
          ...n
        }, a) => {
          const s = (0, z.v6)({
              className: qp({
                size: o
              })
            }, n),
            i = t ? pe.DX : "ol";
          return (0, R.jsx)(Bp.Provider, {
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
        Gp = (0, N.forwardRef)(({
          isCurrent: e,
          children: r,
          asChild: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, N.useRef)(null),
            {
              size: i
            } = Fp(),
            {
              itemProps: d
            } = (0, kp.I)({
              isCurrent: e,
              children: r
            }, s),
            l = t ? pe.DX : "a",
            c = (0, z.v6)({
              className: (0, ke.clsx)(Vp({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": o
            }, d, n);
          return (0, R.jsx)("li", {
            className: Mp({
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
        Kp = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Ie[e];
          return (0, R.jsx)(o, {
            ref: t,
            size: "LG",
            ...r
          })
        }),
        Wp = (0, N.forwardRef)(({
          children: e,
          testId: r,
          defaultOpen: t = !1,
          label: o,
          ...n
        }, a) => {
          const [s, i] = (0, N.useState)(t), {
            size: d
          } = Fp(), l = (0, z.v6)({
            className: Mp({
              size: d
            }),
            "data-testid": r
          }, n);
          return (0, R.jsx)("li", {
            ref: a,
            ...l,
            children: (0, R.jsxs)(bi, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, R.jsx)(gi, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": o,
                children: "..."
              }), (0, R.jsx)(Pi, {
                children: (0, R.jsx)(Si, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, R.jsx)(qi, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Zp = (0, N.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = r ? pe.DX : Hi,
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

      function Hp(e) {
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

      function Up(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Yp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Up(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Hp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Up(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function $p(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Qp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Jp = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Yp(Yp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qp(l, o, e.defaultVariants) && (t += " " + c);
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
      const ev = (0, N.createContext)(null);

      function rv() {
        const e = (0, N.useContext)(ev);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const tv = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "primary",
          size: o = "SM",
          type: n = "text",
          ...a
        }, s) => {
          const i = e ? pe.DX : "div",
            d = (0, z.v6)({
              className: Jp({
                appearance: t,
                type: n,
                size: o
              })
            }, a);
          return (0, R.jsx)(ev.Provider, {
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
        ov = (0, N.forwardRef)(({
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
        nv = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = us[e],
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
        av = () => {
          const e = (0, fe.Ub)(z.fi.mobile);
          return r => e ? {
            transform: `translate(0,${100-r}%)`
          } : {
            opacity: r / 100,
            transform: `scale(${.95+r/100*.05})`
          }
        },
        sv = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function iv(e) {
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

      function dv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function lv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? dv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = iv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function cv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var uv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        fv = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = lv(lv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) uv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cv(e.variantClassNames, e => cv(e, e => e.split(" ")[0]))
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
      const pv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, r);
          return (0, R.jsx)(Qs, {
            ref: t,
            ...o
          })
        }),
        vv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, r);
          return (0, R.jsx)(Js, {
            ref: t,
            ...o
          })
        }),
        yv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, r);
          return (0, R.jsx)(ei, {
            ref: t,
            ...o
          })
        }),
        mv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, fe.rl)(),
            n = (0, z.v6)({
              "data-testid": e,
              className: fv({
                isTouchDevice: o
              })
            }, r);
          return (0, R.jsx)(ri, {
            ref: t,
            ...n
          })
        }),
        bv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(ti, {
            ref: t,
            ...o
          })
        });

      function hv(e) {
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

      function gv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function wv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? gv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = hv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : gv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function xv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var _v = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Cv = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = wv(wv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _v(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xv(e.variantClassNames, e => xv(e, e => e.split(" ")[0]))
            }
          }, r
        },
        jv = Cv({
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
        Ov = Cv({
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
      const Pv = (0, N.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, N.createRef)(),
          dialogSpringRef: (0, _t.$9)(),
          overlaySpringRef: (0, _t.$9)()
        }),
        Rv = ({
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
          return (0, R.jsx)(Pv.Provider, {
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
              dialogSpringRef: (0, _t.U2)(),
              overlaySpringRef: (0, _t.U2)()
            },
            children: (0, R.jsx)(Sv, {
              ...i
            })
          })
        },
        Sv = e => {
          const {
            isOpen: r,
            setIsOpen: t
          } = (0, N.useContext)(Pv), o = (0, z.v6)({
            open: r,
            onOpenChange: t
          }, e);
          return (0, R.jsx)(ua, {
            ...o
          })
        },
        Nv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            contentId: o,
            triggerRef: n
          } = (0, N.useContext)(Pv), a = (0, fe.UP)(n, t), s = (0, z.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": o
          }, r);
          return (0, R.jsx)(pa, {
            ...s,
            ref: a
          })
        }),
        Dv = e => (0, R.jsx)(ba, {
          forceMount: !0,
          ...e
        }),
        kv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            isOpen: o,
            overlaySpringRef: n,
            openImmediately: a
          } = (0, N.useContext)(Pv), s = sv(), i = (0, fe.jt)(), d = (0, _t.pn)(o, {
            ref: n,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: _t.$W.stiff,
            immediate: i || a
          }), l = (0, z.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, r), c = (0, _t.CS)(ga);
          return (0, N.useEffect)(() => {
            n.start()
          }, [o]), d((e, r) => r ? (0, R.jsx)(c, {
            forceMount: !0,
            ref: t,
            ...l,
            style: e
          }) : null)
        }),
        zv = (0, N.forwardRef)(({
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
            overlaySpringRef: m
          } = (0, N.useContext)(Pv), b = (0, fe.rl)(), h = (0, fe.jt)(), g = (0, N.useRef)(null), w = av(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: r,
            overlaySpringRef: t,
            onCloseTransitionStart: o,
            onCloseTransitionComplete: n
          }) {
            const a = sv(),
              s = av(),
              i = (0, N.useRef)();
            return {
              bindDrag: (0, Mr.i3)(({
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
                  config: _t.$W.stiff,
                  onStart: o,
                  onRest: n
                }), t.start({
                  ...a(0),
                  immediate: !1,
                  config: _t.$W.stiff
                })) : (r.start({
                  ...s(100),
                  immediate: !1,
                  config: _t.$W.stiff
                }), t.start({
                  ...a(100),
                  immediate: !1,
                  config: _t.$W.stiff
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
            dialogSpringRef: y,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: v
          }), _ = (0, _t.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: _t.$W.stiff,
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
          const C = (0, fe.UP)(g, a),
            j = b && !h && !o && x(),
            O = (0, z.v6)({
              "data-testid": r,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                t?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, n),
            P = (0, _t.CS)(Ca);
          return _((r, t) => t ? (0, R.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, R.jsx)(P, {
              forceMount: !0,
              ref: C,
              ...O,
              style: r,
              children: e
            })
          }) : null)
        }),
        Iv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, R.jsx)(Sa, {
            ref: t,
            ...o
          })
        }),
        Tv = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(Da, {
            ref: t,
            ...o
          })
        }),
        Ev = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_xov33nh",
            "data-testid": r
          }, t);
          return (0, R.jsxs)(pv, {
            ref: o,
            ...n,
            children: [(0, R.jsx)(vv, {
              className: "foundry_xov33ni",
              children: e
            }), (0, R.jsx)(yv, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, R.jsx)(mv, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Lv = (0, N.forwardRef)(({
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
        Av = (0, N.forwardRef)(({
          align: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              "data-testid": t,
              className: jv({
                align: e
              })
            }, o),
            s = r ? pe.DX : "header";
          return (0, R.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Vv = (0, N.forwardRef)(({
          testId: e,
          appearance: r = "sentence",
          ...t
        }, o) => {
          const n = (0, z.v6)({
            "data-testid": e,
            className: Ov({
              appearance: r
            })
          }, t);
          return (0, R.jsx)(Sa, {
            ref: o,
            ...n
          })
        }),
        Mv = (0, N.forwardRef)((e, r) => {
          const t = (0, z.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, R.jsx)(Bu.K, {
            ref: r,
            ...t,
            appearance: "ghost",
            size: "LG"
          })
        }),
        qv = (0, N.forwardRef)(({
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
            }) : (0, R.jsx)(mu, {
              ref: o,
              ...n,
              size: "LG"
            });
          return (0, R.jsx)(za, {
            asChild: !0,
            children: a
          })
        }),
        Fv = (0, N.forwardRef)(({
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
        Bv = (0, N.forwardRef)(({
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
      var Xv = "Avatar",
        [Gv, Kv] = (0, Ot.A)(Xv),
        Wv = [0, () => {}],
        [Zv, Hv] = Gv(Xv),
        Uv = N.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            ...o
          } = e, [n, a] = N.useState("idle"), [s, i] = function() {
            let e = Wv; {
              e = N.useState(0);
              const [r] = e, t = N.useRef(!1);
              N.useEffect(() => {
                r > 1 && !t.current && (t.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [r])
            }
            return e
          }();
          return (0, R.jsx)(Zv, {
            scope: t,
            imageLoadingStatus: n,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, R.jsx)(Pt.sG.span, {
              ...o,
              ref: r
            })
          })
        });
      Uv.displayName = Xv;
      var Yv = "AvatarImage",
        $v = N.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            src: o,
            onLoadingStatusChange: n,
            ...a
          } = e, s = Hv(Yv, t);
          var i;
          i = s.setImageCount, N.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: r,
              setLoadingStatus: t,
              referrerPolicy: o,
              crossOrigin: n
            }) {
              return (0, Bt.N)(() => {
                if (!e) return void t("error");
                const r = new window.Image,
                  a = e => {
                    const r = e.currentTarget;
                    t(Jv(r))
                  },
                  s = () => t("error");
                return r.addEventListener("load", a), r.addEventListener("error", s), o && (r.referrerPolicy = o), r.crossOrigin = n ?? null, r.src = e, t(Jv(r)), () => {
                  r.removeEventListener("load", a), r.removeEventListener("error", s), t("idle")
                }
              }, [e, n, o, t]), r
            }(o, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, Rt.c)(e => {
              n?.(e)
            }),
            c = N.useRef(d);
          return (0, Bt.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, R.jsx)(Pt.sG.img, {
            ...a,
            ref: r,
            src: o
          }) : null
        });
      $v.displayName = Yv;
      var Qv = "AvatarFallback";

      function Jv(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function ey(e) {
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

      function ry(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ty(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ry(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ey(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ry(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function oy(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      N.forwardRef((e, r) => {
        const {
          __scopeAvatar: t,
          delayMs: o,
          ...n
        } = e, a = Hv(Qv, t), [s, i] = N.useState(void 0 === o);
        return N.useEffect(() => {
          if (void 0 !== o) {
            const e = window.setTimeout(() => i(!0), o);
            return () => window.clearTimeout(e)
          }
        }, [o]), s && "loaded" !== a.imageLoadingStatus ? (0, R.jsx)(Pt.sG.span, {
          ...n,
          ref: r
        }) : null
      }).displayName = Qv;
      var ny = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        ay = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ty(ty({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ny(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oy(e.variantClassNames, e => oy(e, e => e.split(" ")[0]))
            }
          }, r
        },
        sy = ay({
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
        iy = "var(--foundry_v912w22)",
        dy = "var(--foundry_v912w23)",
        ly = ay({
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
        cy = ay({
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
        uy = "var(--foundry_v912w21)",
        fy = "var(--foundry_v912w20)",
        py = ay({
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
      const vy = (0, N.createContext)(null);

      function yy() {
        const e = (0, N.useContext)(vy);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const my = (0, N.forwardRef)(({
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
            className: sy({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, R.jsx)(vy.Provider, {
            value: {
              size: o,
              status: n,
              isDisabled: a
            },
            children: (0, R.jsx)(Uv, {
              ref: i,
              ...d,
              children: r
            })
          })
        }),
        by = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          src: t,
          ...o
        }, n) => {
          const {
            size: a,
            isDisabled: s
          } = yy(), [i, d] = (0, N.useState)(!1);
          (0, N.useEffect)(() => {
            d(!1)
          }, [t]);
          const l = i || !t ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : t,
            c = (0, z.v6)({
              className: ly({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, o);
          return (0, R.jsx)("span", {
            className: cy({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": r,
            "aria-hidden": !0,
            children: (0, R.jsx)($v, {
              ref: n,
              ...c
            })
          })
        }),
        hy = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const n = (0, N.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = yy(),
            d = s || "online",
            l = (0, fe.UP)(n, o),
            c = (0, z.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: py({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, D.D)({
                [fy]: r?.online,
                [uy]: r?.offline,
                [iy]: r?.away,
                [dy]: r?.busy
              })
            }, t);
          return (0, R.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function gy(e) {
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

      function wy(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function xy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? wy(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = gy(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wy(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function _y(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Cy = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        jy = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = xy(xy({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cy(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _y(e.variantClassNames, e => _y(e, e => e.split(" ")[0]))
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
      const Oy = (0, N.forwardRef)(({
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
        Py = (0, N.forwardRef)(({
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
        Ry = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          isActive: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, N.useRef)(null),
            i = (0, fe.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, du.i)(n, s),
            c = (0, z.v6)({
              role: "listitem",
              "data-testid": o,
              "data-pressed": l,
              "data-active": t,
              className: (0, ke.clsx)(jy({
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
        Sy = (0, N.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, t);
          return (0, R.jsx)(Ry, {
            ref: o,
            ...n,
            children: (0, R.jsx)(ze.JG, {
              size: "LG",
              label: e
            })
          })
        }),
        Ny = (0, N.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, t);
          return (0, R.jsx)(Ry, {
            ref: o,
            ...n,
            children: (0, R.jsx)(ze.c_, {
              size: "LG",
              label: e
            })
          })
        }),
        Dy = ({
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
        ky = ({
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
        zy = (0, N.createContext)(null);

      function Iy() {
        const e = (0, N.useContext)(zy);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const Ty = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, N.useId)(),
            a = (0, z.v6)({
              "data-testid": t,
              className: "foundry_2jlbztb"
            }, o),
            s = e ? pe.DX : "div";
          return (0, R.jsx)(zy.Provider, {
            value: {
              labelId: n
            },
            children: (0, R.jsx)(s, {
              ...a,
              children: r
            })
          })
        },
        Ey = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Iy(), s = (0, z.v6)({
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
        Ly = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          placeholder: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Iy(), s = (0, z.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, o), i = e ? pe.DX : _d;
          return (0, R.jsxs)(i, {
            ...s,
            children: [(0, R.jsxs)(Pd, {
              ref: n,
              children: [(0, R.jsx)(Rd, {
                placeholder: t
              }), (0, R.jsx)(Sd, {})]
            }), (0, R.jsx)(Ed, {
              children: (0, R.jsx)(Cd, {
                children: (0, R.jsx)(Od, {
                  children: r
                })
              })
            })]
          })
        }),
        Ay = (0, N.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
              "data-testid": t
            }, o),
            s = e ? pe.DX : zd;
          return (0, R.jsx)(s, {
            ...a,
            ref: n,
            children: (0, R.jsx)(Id, {
              children: r
            })
          })
        }),
        Vy = (0, N.forwardRef)(({
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
      var My = "rovingFocusGroup.onEntryFocus",
        qy = {
          bubbles: !1,
          cancelable: !0
        },
        Fy = "RovingFocusGroup",
        [By, Xy, Gy] = fn(Fy),
        [Ky, Wy] = (0, Ot.A)(Fy, [Gy]),
        [Zy, Hy] = Ky(Fy),
        Uy = N.forwardRef((e, r) => (0, R.jsx)(By.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, R.jsx)(By.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, R.jsx)(Yy, {
              ...e,
              ref: r
            })
          })
        }));
      Uy.displayName = Fy;
      var Yy = N.forwardRef((e, r) => {
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
          } = e, f = N.useRef(null), p = (0, jt.s)(r, f), v = (0, cn.jH)(a), [y, m] = (0, go.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Fy
          }), [b, h] = N.useState(!1), g = (0, Rt.c)(l), w = Xy(t), x = N.useRef(!1), [_, C] = N.useState(0);
          return N.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(My, g), () => e.removeEventListener(My, g)
          }, [g]), (0, R.jsx)(Zy, {
            scope: t,
            orientation: o,
            dir: v,
            loop: n,
            currentTabStopId: y,
            onItemFocus: N.useCallback(e => m(e), [m]),
            onItemShiftTab: N.useCallback(() => h(!0), []),
            onFocusableItemAdd: N.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: N.useCallback(() => C(e => e - 1), []),
            children: (0, R.jsx)(Pt.sG.div, {
              tabIndex: b || 0 === _ ? -1 : 0,
              "data-orientation": o,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Ct.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, Ct.mK)(e.onFocus, e => {
                const r = !x.current;
                if (e.target === e.currentTarget && r && !b) {
                  const r = new CustomEvent(My, qy);
                  if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      r = e.find(e => e.active),
                      t = e.find(e => e.id === y),
                      o = [r, t, ...e].filter(Boolean).map(e => e.ref.current);
                    em(o, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, Ct.mK)(e.onBlur, () => h(!1))
            })
          })
        }),
        $y = "RovingFocusGroupItem",
        Qy = N.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            focusable: o = !0,
            active: n = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, At.B)(), l = a || d, c = Hy($y, t), u = c.currentTabStopId === l, f = Xy(t), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: y
          } = c;
          return N.useEffect(() => {
            if (o) return p(), () => v()
          }, [o, p, v]), (0, R.jsx)(By.ItemSlot, {
            scope: t,
            id: l,
            focusable: o,
            active: n,
            children: (0, R.jsx)(Pt.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: r,
              onMouseDown: (0, Ct.mK)(e.onMouseDown, e => {
                o ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, Ct.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, Ct.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const r = function(e, r, t) {
                  const o = function(e, r) {
                    return "rtl" !== r ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, t);
                  return "vertical" === r && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o) ? void 0 : Jy[o]
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
                  setTimeout(() => em(a))
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
      Qy.displayName = $y;
      var Jy = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function em(e, r = !1) {
        const t = document.activeElement;
        for (const o of e) {
          if (o === t) return;
          if (o.focus({
              preventScroll: r
            }), document.activeElement !== t) return
        }
      }
      var rm = Uy,
        tm = Qy,
        om = "Toggle",
        nm = N.forwardRef((e, r) => {
          const {
            pressed: t,
            defaultPressed: o,
            onPressedChange: n,
            ...a
          } = e, [s, i] = (0, go.i)({
            prop: t,
            onChange: n,
            defaultProp: o ?? !1,
            caller: om
          });
          return (0, R.jsx)(Pt.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: r,
            onClick: (0, Ct.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      nm.displayName = om;
      var am = "ToggleGroup",
        [sm, im] = (0, Ot.A)(am, [Wy]),
        dm = Wy(),
        lm = N.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e;
          if ("single" === t) {
            const e = o;
            return (0, R.jsx)(fm, {
              role: "radiogroup",
              ...e,
              ref: r
            })
          }
          if ("multiple" === t) {
            const e = o;
            return (0, R.jsx)(pm, {
              role: "toolbar",
              ...e,
              ref: r
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${am}\``)
        });
      lm.displayName = am;
      var [cm, um] = sm(am), fm = N.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, go.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: am
        });
        return (0, R.jsx)(cm, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: N.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: N.useCallback(() => i(""), [i]),
          children: (0, R.jsx)(mm, {
            ...a,
            ref: r
          })
        })
      }), pm = N.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, go.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: am
        }), d = N.useCallback(e => i((r = []) => [...r, e]), [i]), l = N.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, R.jsx)(cm, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, R.jsx)(mm, {
            ...a,
            ref: r
          })
        })
      });
      lm.displayName = am;
      var [vm, ym] = sm(am), mm = N.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          disabled: o = !1,
          rovingFocus: n = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = dm(t), c = (0, cn.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, R.jsx)(vm, {
          scope: t,
          rovingFocus: n,
          disabled: o,
          children: n ? (0, R.jsx)(rm, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, R.jsx)(Pt.sG.div, {
              ...u,
              ref: r
            })
          }) : (0, R.jsx)(Pt.sG.div, {
            ...u,
            ref: r
          })
        })
      }), bm = "ToggleGroupItem", hm = N.forwardRef((e, r) => {
        const t = um(bm, e.__scopeToggleGroup),
          o = ym(bm, e.__scopeToggleGroup),
          n = dm(e.__scopeToggleGroup),
          a = t.value.includes(e.value),
          s = o.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = N.useRef(null);
        return o.rovingFocus ? (0, R.jsx)(tm, {
          asChild: !0,
          ...n,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, R.jsx)(gm, {
            ...i,
            ref: r
          })
        }) : (0, R.jsx)(gm, {
          ...i,
          ref: r
        })
      });
      hm.displayName = bm;
      var gm = N.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          value: o,
          ...n
        } = e, a = um(bm, t), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, R.jsx)(nm, {
          ...i,
          ...n,
          ref: r,
          onPressedChange: e => {
            e ? a.onItemActivate(o) : a.onItemDeactivate(o)
          }
        })
      });

      function wm(e) {
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

      function xm(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function _m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? xm(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = wm(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xm(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Cm(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var jm = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Om = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = _m(_m({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) jm(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cm(e.variantClassNames, e => Cm(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Pm = "var(--foundry_zxwkyk2)",
        Rm = "var(--foundry_zxwkyk3)",
        Sm = Om({
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
        Nm = Om({
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
        Dm = Om({
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
        km = "var(--foundry_zxwkyk1)",
        zm = "var(--foundry_zxwkyk0)",
        Im = Om({
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
      const Tm = (0, N.createContext)(null);

      function Em() {
        const e = (0, N.useContext)(Tm);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const Lm = (0, N.forwardRef)(({
          testId: e,
          size: r,
          type: t = "single",
          ...o
        }, n) => {
          const a = (0, z.v6)({
            "data-testid": e,
            className: Sm({
              size: r
            }),
            type: t
          }, o);
          return (0, R.jsx)(Tm.Provider, {
            value: {
              size: r
            },
            children: (0, R.jsx)(lm, {
              ref: n,
              ...a
            })
          })
        }),
        Am = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Em(), n = (0, z.v6)({
            "data-testid": e,
            className: Nm({
              size: o
            })
          }, r);
          return (0, R.jsx)(hm, {
            ref: t,
            ...n
          })
        }),
        Vm = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Em(), n = us[e];
          return (0, R.jsx)(n, {
            label: "",
            ref: t,
            size: o,
            className: "foundry_zxwkykb",
            ...r
          })
        }),
        Mm = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          status: t,
          ...o
        }, n) => {
          const a = (0, z.v6)({
            "data-testid": e,
            className: Im({
              status: t
            }),
            style: (0, D.D)({
              [zm]: r?.online,
              [km]: r?.offline,
              [Pm]: r?.away,
              [Rm]: r?.busy
            })
          }, o);
          return (0, R.jsx)("span", {
            ref: n,
            ...a
          })
        }),
        qm = (0, N.forwardRef)(({
          testId: e,
          variant: r = "default",
          ...t
        }, o) => {
          const {
            size: n
          } = Em(), a = (0, z.v6)({
            "data-testid": e,
            className: Dm({
              variant: r,
              size: n
            })
          }, t);
          return (0, R.jsx)("span", {
            ref: o,
            ...a
          })
        });
      var Fm = "Popover",
        [Bm, Xm] = (0, Ot.A)(Fm, [Wt]),
        Gm = Wt(),
        [Km, Wm] = Bm(Fm),
        Zm = e => {
          const {
            __scopePopover: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Gm(r), d = N.useRef(null), [l, c] = N.useState(!1), [u, f] = (0, go.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: Fm
          });
          return (0, R.jsx)(lo, {
            ...i,
            children: (0, R.jsx)(Km, {
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
      Zm.displayName = Fm;
      var Hm = "PopoverAnchor",
        Um = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = Wm(Hm, t), a = Gm(t), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = n;
          return N.useEffect(() => (s(), () => i()), [s, i]), (0, R.jsx)(co, {
            ...a,
            ...o,
            ref: r
          })
        });
      Um.displayName = Hm;
      var Ym = "PopoverTrigger",
        $m = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = Wm(Ym, t), a = Gm(t), s = (0, jt.s)(r, n.triggerRef), i = (0, R.jsx)(Pt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": ub(n.open),
            ...o,
            ref: s,
            onClick: (0, Ct.mK)(e.onClick, n.onOpenToggle)
          });
          return n.hasCustomAnchor ? i : (0, R.jsx)(co, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      $m.displayName = Ym;
      var Qm = "PopoverPortal",
        [Jm, eb] = Bm(Qm, {
          forceMount: void 0
        }),
        rb = e => {
          const {
            __scopePopover: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = Wm(Qm, r);
          return (0, R.jsx)(Jm, {
            scope: r,
            forceMount: t,
            children: (0, R.jsx)(yo, {
              present: t || a.open,
              children: (0, R.jsx)(vo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      rb.displayName = Qm;
      var tb = "PopoverContent",
        ob = N.forwardRef((e, r) => {
          const t = eb(tb, e.__scopePopover),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = Wm(tb, e.__scopePopover);
          return (0, R.jsx)(yo, {
            present: o || a.open,
            children: a.modal ? (0, R.jsx)(ab, {
              ...n,
              ref: r
            }) : (0, R.jsx)(sb, {
              ...n,
              ref: r
            })
          })
        });
      ob.displayName = tb;
      var nb = (0, ho.TL)("PopoverContent.RemoveScroll"),
        ab = N.forwardRef((e, r) => {
          const t = Wm(tb, e.__scopePopover),
            o = N.useRef(null),
            n = (0, jt.s)(r, o),
            a = N.useRef(!1);
          return N.useEffect(() => {
            const e = o.current;
            if (e) return (0, aa.Eq)(e)
          }, []), (0, R.jsx)(na.A, {
            as: nb,
            allowPinchZoom: !0,
            children: (0, R.jsx)(ib, {
              ...e,
              ref: n,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Ct.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || t.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Ct.mK)(e.onPointerDownOutside, e => {
                const r = e.detail.originalEvent,
                  t = 0 === r.button && !0 === r.ctrlKey,
                  o = 2 === r.button || t;
                a.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Ct.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        sb = N.forwardRef((e, r) => {
          const t = Wm(tb, e.__scopePopover),
            o = N.useRef(!1),
            n = N.useRef(!1);
          return (0, R.jsx)(ib, {
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
        ib = N.forwardRef((e, r) => {
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
          } = e, f = Wm(tb, t), p = Gm(t);
          return (0, oa.Oh)(), (0, R.jsx)(Yn, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, R.jsx)(kt, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, R.jsx)(uo, {
                "data-state": ub(f.open),
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
        db = "PopoverClose",
        lb = N.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = Wm(db, t);
          return (0, R.jsx)(Pt.sG.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, Ct.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });
      lb.displayName = db;
      var cb = N.forwardRef((e, r) => {
        const {
          __scopePopover: t,
          ...o
        } = e, n = Gm(t);
        return (0, R.jsx)(fo, {
          ...n,
          ...o,
          ref: r
        })
      });

      function ub(e) {
        return e ? "open" : "closed"
      }
      cb.displayName = "PopoverArrow";
      var fb = Zm,
        pb = Um,
        vb = $m,
        yb = rb,
        mb = ob,
        bb = lb,
        hb = cb;

      function gb(e) {
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

      function wb(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function xb(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? wb(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = gb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wb(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function _b(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Cb = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        jb = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = xb(xb({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cb(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _b(e.variantClassNames, e => _b(e, e => e.split(" ")[0]))
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
      const Ob = (0, N.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Pb = ({
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
          return (0, R.jsx)(Ob.Provider, {
            value: {
              open: n,
              setOpen: a
            },
            children: (0, R.jsx)(fb, {
              ...s
            })
          })
        },
        Rb = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, r);
          return (0, R.jsx)(vb, {
            ref: t,
            ...o
          })
        }),
        Sb = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Nb = (0, N.forwardRef)(({
          children: e,
          size: r = "MD",
          testId: t,
          ...o
        }, n) => {
          const {
            open: a
          } = (0, N.useContext)(Ob), s = (0, N.useRef)(null), i = (0, fe.UP)(s, n), {
            buttonProps: d
          } = (0, fe.sL)(o, s), l = (0, z.v6)({
            "data-testid": t,
            className: jb({
              size: r
            })
          }, d), c = a ? ze.rX : ze.yQ;
          return (0, R.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, R.jsx)(c, {
              label: "",
              size: Sb[r]
            })]
          })
        }),
        Db = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e
          }, r);
          return (0, R.jsx)(pb, {
            ref: t,
            ...o
          })
        }),
        kb = (0, N.forwardRef)(({
          sideOffset: e = 6,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            sideOffset: e,
            "data-testid": r,
            className: "foundry_lroh6l6"
          }, t);
          return (0, R.jsx)(mb, {
            ref: o,
            ...n
          })
        }),
        zb = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, r);
          return (0, R.jsx)(hb, {
            ref: t,
            ...o
          })
        }),
        Ib = e => (0, R.jsx)(yb, {
          ...e
        }),
        Tb = e => (0, R.jsx)(bb, {
          ...e
        });

      function Eb(e) {
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

      function Lb(e, r) {
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
          r % 2 ? Lb(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Eb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Lb(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Vb(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Mb = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        qb = e => {
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
            for (var [l, c] of e.compoundVariants) Mb(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vb(e.variantClassNames, e => Vb(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Fb = "var(--foundry_rmorls2)",
        Bb = qb({
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
        Xb = "var(--foundry_rmorls0)",
        Gb = qb({
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
        Kb = "var(--foundry_rmorls3)",
        Wb = "var(--foundry_rmorls1)",
        Zb = qb({
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
        Hb = "Progress",
        [Ub, Yb] = (0, Ot.A)(Hb),
        [$b, Qb] = Ub(Hb),
        Jb = N.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            value: o = null,
            max: n,
            getValueLabel: a = th,
            ...s
          } = e;
          !n && 0 !== n || ah(n) || console.error(`Invalid prop \`max\` of value \`${n}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = ah(n) ? n : 100;
          null === o || sh(o, i) || console.error(`Invalid prop \`value\` of value \`${`${o}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = sh(o, i) ? o : null,
            l = nh(d) ? a(d, i) : void 0;
          return (0, R.jsx)($b, {
            scope: t,
            value: d,
            max: i,
            children: (0, R.jsx)(Pt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": nh(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": oh(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: r
            })
          })
        });
      Jb.displayName = Hb;
      var eh = "ProgressIndicator",
        rh = N.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            ...o
          } = e, n = Qb(eh, t);
          return (0, R.jsx)(Pt.sG.div, {
            "data-state": oh(n.value, n.max),
            "data-value": n.value ?? void 0,
            "data-max": n.max,
            ...o,
            ref: r
          })
        });

      function th(e, r) {
        return `${Math.round(e/r*100)}%`
      }

      function oh(e, r) {
        return null == e ? "indeterminate" : e === r ? "complete" : "loading"
      }

      function nh(e) {
        return "number" == typeof e
      }

      function ah(e) {
        return nh(e) && !isNaN(e) && e > 0
      }

      function sh(e, r) {
        return nh(e) && !isNaN(e) && e <= r && e >= 0
      }
      rh.displayName = eh;
      var ih = Jb,
        dh = rh;
      const lh = (0, N.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        ch = (0, N.forwardRef)(({
          size: e = "MD",
          max: r,
          value: t,
          ...o
        }, n) => {
          const a = Math.round(t / r * 100),
            s = "number" != typeof t || "number" != typeof r;
          return (0, R.jsx)(lh.Provider, {
            value: {
              value: t,
              max: r,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, R.jsx)(uh, {
              ...o,
              ref: n
            })
          })
        }),
        uh = (0, N.forwardRef)(({
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
        fh = (0, N.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const {
            value: n,
            max: a,
            size: s
          } = (0, N.useContext)(lh), i = (0, z.v6)({
            "data-testid": e,
            className: Gb({
              size: s
            }),
            value: n,
            max: a,
            style: (0, D.D)({
              [Kb]: r
            }),
            "data-track": !0
          }, t);
          return (0, R.jsx)(ih, {
            ref: o,
            ...i
          })
        }),
        ph = (0, N.forwardRef)(({
          testId: e,
          transitionDuration: r = 500,
          colorOverride: t,
          ...o
        }, n) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, N.useContext)(lh), i = s ? "-100%" : `-${100-a}%`, d = (0, z.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, D.D)({
              [Xb]: i,
              [Wb]: `${r}ms`,
              [Fb]: t
            })
          }, o);
          return (0, R.jsx)(dh, {
            ref: n,
            ...d
          })
        }),
        vh = (0, N.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const {
            size: n
          } = (0, N.useContext)(lh), a = (0, z.v6)({
            "data-testid": r,
            className: Bb({
              size: n
            }),
            "aria-hidden": !0
          }, t), s = e ? pe.DX : "span";
          return (0, R.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        yh = (0, N.forwardRef)(({
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
          } = (0, N.useContext)(lh), l = (0, z.v6)({
            "data-testid": e,
            className: Bb({
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
              className: Zb({
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
      var mh = "Collapsible",
        [bh, hh] = (0, Ot.A)(mh),
        [gh, wh] = bh(mh),
        xh = N.forwardRef((e, r) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: n,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, go.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: s,
            caller: mh
          });
          return (0, R.jsx)(gh, {
            scope: t,
            disabled: a,
            contentId: (0, At.B)(),
            open: d,
            onOpenToggle: N.useCallback(() => l(e => !e), [l]),
            children: (0, R.jsx)(Pt.sG.div, {
              "data-state": Rh(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: r
            })
          })
        });
      xh.displayName = mh;
      var _h = "CollapsibleTrigger",
        Ch = N.forwardRef((e, r) => {
          const {
            __scopeCollapsible: t,
            ...o
          } = e, n = wh(_h, t);
          return (0, R.jsx)(Pt.sG.button, {
            type: "button",
            "aria-controls": n.open ? n.contentId : void 0,
            "aria-expanded": n.open || !1,
            "data-state": Rh(n.open),
            "data-disabled": n.disabled ? "" : void 0,
            disabled: n.disabled,
            ...o,
            ref: r,
            onClick: (0, Ct.mK)(e.onClick, n.onOpenToggle)
          })
        });
      Ch.displayName = _h;
      var jh = "CollapsibleContent",
        Oh = N.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = wh(jh, e.__scopeCollapsible);
          return (0, R.jsx)(yo, {
            present: t || n.open,
            children: ({
              present: e
            }) => (0, R.jsx)(Ph, {
              ...o,
              ref: r,
              present: e
            })
          })
        });
      Oh.displayName = jh;
      var Ph = N.forwardRef((e, r) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: n,
          ...a
        } = e, s = wh(jh, t), [i, d] = N.useState(o), l = N.useRef(null), c = (0, jt.s)(r, l), u = N.useRef(0), f = u.current, p = N.useRef(0), v = p.current, y = s.open || i, m = N.useRef(y), b = N.useRef(void 0);
        return N.useEffect(() => {
          const e = requestAnimationFrame(() => m.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, Bt.N)(() => {
          const e = l.current;
          if (e) {
            b.current = b.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const r = e.getBoundingClientRect();
            u.current = r.height, p.current = r.width, m.current || (e.style.transitionDuration = b.current.transitionDuration, e.style.animationName = b.current.animationName), d(o)
          }
        }, [s.open, o]), (0, R.jsx)(Pt.sG.div, {
          "data-state": Rh(s.open),
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

      function Rh(e) {
        return e ? "open" : "closed"
      }
      var Sh = xh,
        Nh = Ch,
        Dh = Oh,
        kh = "Accordion",
        zh = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [Ih, Th, Eh] = fn(kh),
        [Lh, Ah] = (0, Ot.A)(kh, [Eh, hh]),
        Vh = hh(),
        Mh = N.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e, n = o, a = o;
          return (0, R.jsx)(Ih.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, R.jsx)(Kh, {
              ...a,
              ref: r
            }) : (0, R.jsx)(Gh, {
              ...n,
              ref: r
            })
          })
        });
      Mh.displayName = kh;
      var [qh, Fh] = Lh(kh), [Bh, Xh] = Lh(kh, {
        collapsible: !1
      }), Gh = N.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          collapsible: a = !1,
          ...s
        } = e, [i, d] = (0, go.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: kh
        });
        return (0, R.jsx)(qh, {
          scope: e.__scopeAccordion,
          value: N.useMemo(() => i ? [i] : [], [i]),
          onItemOpen: d,
          onItemClose: N.useCallback(() => a && d(""), [a, d]),
          children: (0, R.jsx)(Bh, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, R.jsx)(Hh, {
              ...s,
              ref: r
            })
          })
        })
      }), Kh = N.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, go.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: kh
        }), d = N.useCallback(e => i((r = []) => [...r, e]), [i]), l = N.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, R.jsx)(qh, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: l,
          children: (0, R.jsx)(Bh, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, R.jsx)(Hh, {
              ...a,
              ref: r
            })
          })
        })
      }), [Wh, Zh] = Lh(kh), Hh = N.forwardRef((e, r) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: n,
          orientation: a = "vertical",
          ...s
        } = e, i = N.useRef(null), d = (0, jt.s)(i, r), l = Th(t), c = "ltr" === (0, cn.jH)(n), u = (0, Ct.mK)(e.onKeyDown, e => {
          if (!zh.includes(e.key)) return;
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
        return (0, R.jsx)(Wh, {
          scope: t,
          disabled: o,
          direction: n,
          orientation: a,
          children: (0, R.jsx)(Ih.Slot, {
            scope: t,
            children: (0, R.jsx)(Pt.sG.div, {
              ...s,
              "data-orientation": a,
              ref: d,
              onKeyDown: o ? void 0 : u
            })
          })
        })
      }), Uh = "AccordionItem", [Yh, $h] = Lh(Uh), Qh = N.forwardRef((e, r) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...n
        } = e, a = Zh(Uh, t), s = Fh(Uh, t), i = Vh(t), d = (0, At.B)(), l = o && s.value.includes(o) || !1, c = a.disabled || e.disabled;
        return (0, R.jsx)(Yh, {
          scope: t,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, R.jsx)(Sh, {
            "data-orientation": a.orientation,
            "data-state": ag(l),
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
      Qh.displayName = Uh;
      var Jh = "AccordionHeader",
        eg = N.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Zh(kh, t), a = $h(Jh, t);
          return (0, R.jsx)(Pt.sG.h3, {
            "data-orientation": n.orientation,
            "data-state": ag(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: r
          })
        });
      eg.displayName = Jh;
      var rg = "AccordionTrigger",
        tg = N.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Zh(kh, t), a = $h(rg, t), s = Xh(rg, t), i = Vh(t);
          return (0, R.jsx)(Ih.ItemSlot, {
            scope: t,
            children: (0, R.jsx)(Nh, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": n.orientation,
              id: a.triggerId,
              ...i,
              ...o,
              ref: r
            })
          })
        });
      tg.displayName = rg;
      var og = "AccordionContent",
        ng = N.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = Zh(kh, t), a = $h(og, t), s = Vh(t);
          return (0, R.jsx)(Dh, {
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

      function ag(e) {
        return e ? "open" : "closed"
      }
      ng.displayName = og;
      var sg = Mh,
        ig = Qh,
        dg = eg,
        lg = tg,
        cg = ng;

      function ug(e) {
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

      function fg(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function pg(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? fg(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ug(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fg(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function vg(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var yg = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        mg = "foundry_1vzsjid2",
        bg = "foundry_1vzsjidm",
        hg = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = pg(pg({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yg(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vg(e.variantClassNames, e => vg(e, e => e.split(" ")[0]))
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
      const gg = (0, N.createContext)({
          mode: "solid",
          layer: 0
        }),
        wg = (0, N.forwardRef)(({
          mode: e,
          layer: r,
          type: t = "single",
          ...o
        }, n) => (0, R.jsx)(gg.Provider, {
          value: {
            mode: e,
            layer: r
          },
          children: (0, R.jsx)(xg, {
            ...o,
            ref: n,
            type: t
          })
        })),
        xg = (0, N.forwardRef)(({
          testId: e,
          type: r = "single",
          ...t
        }, o) => {
          const n = (0, z.v6)({
            "data-testid": e,
            type: r
          }, t);
          return (0, R.jsx)(sg, {
            className: "foundry_1vzsjid0",
            ref: o,
            ...n
          })
        }),
        _g = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            mode: o,
            layer: n
          } = (0, N.useContext)(gg), a = (0, z.v6)({
            className: hg({
              mode: o,
              layer: n
            }),
            "data-testid": e
          }, r);
          return (0, R.jsx)(ig, {
            ref: t,
            ...a
          })
        }),
        Cg = (0, N.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, z.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, r);
          return (0, R.jsx)(dg, {
            ref: t,
            ...o
          })
        }),
        jg = (0, N.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, z.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": r
          }, t);
          return (0, R.jsx)(lg, {
            ref: o,
            ...n,
            children: t.asChild && (0, N.isValidElement)(e) ? (0, N.cloneElement)(e, {
              children: (0, R.jsx)("span", {
                className: mg,
                children: e.props.children
              })
            }) : (0, R.jsx)("span", {
              className: mg,
              children: e
            })
          })
        }),
        Og = (0, N.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = us[e],
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
        Pg = (0, N.forwardRef)(({
          icon: e = "ChevronDown",
          ...r
        }, t) => {
          const o = us[e],
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
        Rg = (0, N.forwardRef)(({
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
          return (0, R.jsx)(cg, {
            ref: n,
            ...a,
            children: r && (0, N.isValidElement)(e) ? (0, N.cloneElement)(e, {
              children: (0, R.jsx)("div", {
                className: bg,
                children: e.props.children
              })
            }) : (0, R.jsx)("div", {
              className: bg,
              children: e
            })
          })
        })
    }
  }
]);