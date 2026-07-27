try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "56d18e0d-0c53-43e6-a588-9ada363d5f91", e._sentryDebugIdIdentifier = "sentry-dbid-56d18e0d-0c53-43e6-a588-9ada363d5f91")
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
  [6], {
    17734(e, r, t) {
      t.r(r), t.d(r, {
        Accordion: () => P,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => C,
        Badge: () => h,
        Body: () => Lr,
        Breadcrumbs: () => b,
        Button: () => Ye,
        Checkbox: () => d,
        ChipGroup: () => _,
        Code: () => Tr,
        Dialog: () => w,
        Display: () => Er,
        Divider: () => vr,
        Dropdown: () => a,
        Heading: () => Mr,
        IconButton: () => ir,
        Label: () => qr,
        Lightbox: () => n,
        Loader: () => Or,
        Pagination: () => x,
        PlatformButton: () => N,
        Popover: () => j,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => Me,
        Switch: () => s,
        Tag: () => y,
        Text: () => Br,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => Fr,
        Toast: () => m,
        Tooltip: () => o
      });
      var o = {};
      t.r(o), t.d(o, {
        Arrow: () => vn,
        Content: () => pn,
        Portal: () => yn,
        Root: () => un,
        Trigger: () => fn,
        useTooltipContext: () => cn
      });
      var n = {};
      t.r(n), t.d(n, {
        Caption: () => os,
        Close: () => ds,
        Content: () => Qa,
        Controls: () => ns,
        CssVars: () => us,
        Download: () => cs,
        Image: () => ts,
        Keyboard: () => ss,
        LightboxContext: () => Ba,
        OpenIcon: () => Ua,
        Overlay: () => Ya,
        Portal: () => $a,
        Reset: () => ls,
        Root: () => Za,
        RootImplContext: () => Xa,
        Thumbnail: () => Wa,
        Trigger: () => Ka,
        Zoom: () => is,
        ZoomPan: () => Ja
      });
      var a = {};
      t.r(a), t.d(a, {
        Content: () => kd,
        Description: () => Md,
        Hint: () => Ad,
        Label: () => Vd,
        Option: () => qd,
        OptionIcon: () => Fd,
        OptionText: () => Hd,
        Portal: () => Bd,
        Root: () => Dd,
        ScrollArea: () => Ld,
        StatusIcon: () => Xd,
        StatusRoot: () => Zd,
        StatusText: () => Gd,
        Trigger: () => Id,
        TriggerIcon: () => Ed,
        TriggerText: () => Td,
        Viewport: () => zd,
        useDropdownContext: () => Sd
      });
      var s = {};
      t.r(s), t.d(s, {
        Description: () => ul,
        Input: () => ll,
        Label: () => cl,
        Root: () => dl,
        useSwitchContext: () => il
      });
      var i = {};
      t.r(i), t.d(i, {
        CheckLG: () => vl,
        CheckMD: () => pl,
        CheckXL: () => yl,
        DashLG: () => bl,
        DashMD: () => ml,
        DashXL: () => hl
      });
      var d = {};
      t.r(d), t.d(d, {
        Description: () => El,
        ErrorText: () => Vl,
        Group: () => ql,
        GroupDescription: () => Fl,
        GroupErrorText: () => Zl,
        GroupItems: () => Bl,
        GroupLabel: () => Hl,
        Input: () => Il,
        Label: () => Tl,
        Root: () => Ll,
        useGroupContext: () => Al
      });
      var l = {};
      t.r(l), t.d(l, {
        Description: () => sc,
        Hint: () => ic,
        Input: () => ac,
        Label: () => nc,
        Root: () => oc,
        RootContext: () => rc,
        StatusIcon: () => lc,
        StatusRoot: () => dc,
        StatusText: () => cc,
        useTextAreaContext: () => tc
      });
      var c = {};
      t.r(c), t.d(c, {
        DotLG: () => Ec,
        DotMD: () => Tc,
        DotXL: () => Vc
      });
      var u = {};
      t.r(u), t.d(u, {
        Description: () => Pc,
        Input: () => Ac,
        Label: () => Oc,
        Option: () => Mc,
        OptionDescription: () => Hc,
        OptionLabel: () => qc,
        Options: () => jc,
        Root: () => _c,
        StatusIcon: () => Nc,
        StatusRoot: () => Rc,
        StatusText: () => Sc,
        useRadioGroupContext: () => xc
      });
      var f = {};
      t.r(f), t.d(f, {
        Button: () => cu,
        Control: () => iu,
        Description: () => fu,
        Hint: () => su,
        Icon: () => lu,
        Input: () => du,
        Label: () => au,
        PasswordButton: () => uu,
        Root: () => nu,
        StatusIcon: () => vu,
        StatusRoot: () => pu,
        StatusText: () => yu
      });
      var p = {};
      t.r(p), t.d(p, {
        Body: () => Mu,
        CloseButton: () => Gu,
        Description: () => Fu,
        ErrorText: () => Xu,
        Footer: () => Zu,
        Header: () => Vu,
        Icon: () => qu,
        Link: () => Bu,
        Root: () => Eu,
        RootContext: () => Iu,
        Title: () => Hu,
        iconStatusMap: () => Au,
        useAlertContext: () => Tu
      });
      var v = {};
      t.r(v), t.d(v, {
        Alert: () => uf,
        CloseButton: () => vf,
        Description: () => cf,
        Icon: () => lf,
        Link: () => pf,
        PaginationCounter: () => hf,
        PaginationNav: () => yf,
        PaginationNextButton: () => mf,
        PaginationPrevButton: () => bf,
        PaginationViewport: () => ff,
        Root: () => sf,
        RootContext: () => nf,
        iconStatusMap: () => df,
        useAlertBannerContext: () => af
      });
      var y = {};
      t.r(y), t.d(y, {
        CloseButton: () => Lf,
        Icon: () => zf,
        Label: () => kf,
        Root: () => Df,
        RootContext: () => Nf,
        useTagContext: () => Sf
      });
      var m = {};
      t.r(m), t.d(m, {
        Action: () => Vp,
        CloseButton: () => Mp,
        Description: () => Ip,
        Icon: () => Ep,
        Provider: () => Sp,
        Root: () => Lp,
        RootContext: () => kp,
        Viewport: () => Dp,
        iconAppearanceMap: () => Tp,
        useToastContext: () => zp
      });
      var b = {};
      t.r(b), t.d(b, {
        Icon: () => Jp,
        Item: () => Qp,
        OverflowMenu: () => ev,
        OverflowMenuItem: () => rv,
        Root: () => Yp,
        RootContext: () => $p,
        useBreadcrumbsContext: () => Up
      });
      var h = {};
      t.r(h), t.d(h, {
        Icon: () => fv,
        Label: () => uv,
        Root: () => cv,
        useBadgeContext: () => lv
      });
      var g = {};
      t.r(g), t.d(g, {
        Corner: () => Ov,
        Root: () => Cv,
        Scrollbar: () => _v,
        Thumb: () => jv,
        Viewport: () => xv
      });
      var w = {};
      t.r(w), t.d(w, {
        ActionArea: () => Uv,
        CloseButton: () => Wv,
        Content: () => qv,
        Description: () => Fv,
        Footer: () => $v,
        Header: () => Xv,
        HeaderButton: () => Kv,
        HeaderTitle: () => Gv,
        Layout: () => Zv,
        Overlay: () => Av,
        Portal: () => Mv,
        Root: () => Tv,
        ScrollArea: () => Bv,
        Title: () => Hv,
        Trigger: () => Vv
      });
      var C = {};
      t.r(C), t.d(C, {
        Image: () => Oy,
        Root: () => jy,
        StatusIndicator: () => Py,
        useAvatarContext: () => _y
      });
      var x = {};
      t.r(x), t.d(x, {
        Controls: () => Ay,
        Dropdown: () => Zy,
        DropdownLabel: () => By,
        Ellipsis: () => My,
        Item: () => Ty,
        Label: () => Gy,
        Next: () => Vy,
        Option: () => Xy,
        Pages: () => Iy,
        Prev: () => Ey,
        ResultsPerPage: () => Fy,
        Root: () => Ly
      });
      var _ = {};
      t.r(_), t.d(_, {
        Icon: () => Km,
        Item: () => Gm,
        Label: () => Um,
        Root: () => Xm,
        StatusIndicator: () => Wm,
        useChipGroupContext: () => Zm
      });
      var j = {};
      t.r(j), t.d(j, {
        Anchor: () => Ab,
        Arrow: () => Hb,
        Close: () => Bb,
        Content: () => qb,
        Portal: () => Fb,
        Root: () => Tb,
        RootContext: () => Ib,
        Trigger: () => Eb,
        TriggerButton: () => Mb
      });
      var O = {};
      t.r(O), t.d(O, {
        Indicator: () => xh,
        Label: () => _h,
        Root: () => gh,
        Track: () => Ch,
        UnitLabel: () => jh
      });
      var P = {};
      t.r(P), t.d(P, {
        Content: () => Eg,
        Header: () => zg,
        Icon: () => Ig,
        Item: () => kg,
        Root: () => Sg,
        Trigger: () => Lg,
        TriggerIcon: () => Tg
      });
      var R = {};
      t.r(R), t.d(R, {
        PC: () => qg,
        PS4: () => Mg,
        PS5: () => Ag,
        XboxOne: () => Hg,
        XboxSeriesXS: () => Fg
      });
      var N = {};
      t.r(N), t.d(N, {
        PlatformButton: () => Ug
      });
      var S = t(39793),
        D = t(14037),
        k = t(93082),
        z = t(64001),
        L = (t(54540), {
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
        I = t(46103);
      const T = e => {
        const r = e.match(/^var\((.*)\)$/);
        return r ? r[1] : e
      };

      function E(e) {
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

      function V(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function M(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? V(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = E(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(r) {
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
      var q = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        H = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = M(M({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) q(l, o, e.defaultVariants) && (t += " " + c);
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
        re = "var(--foundry_1qqcnuad)",
        te = "var(--foundry_1qqcnuae)",
        oe = "var(--foundry_1qqcnuaf)",
        ne = "var(--foundry_1qqcnuag)",
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
            border: T(re),
            text: T(te),
            outline: T(oe)
          },
          disabled: {
            background: T(ne),
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
          (0, k.useEffect)(() => {
            if (!e.current || !a || !l) return;
            const c = `${a}:${r}:${t}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, I.IO)(c, () => {
                const e = (0, D.J1)(a);
                return {
                  text: d || (e > r ? L.color.black.static[100] : L.color.white.static[100]),
                  hover: s || (e >= t ? (0, D.e$)(a, o) : (0, D.a)(a, o)),
                  pressed: i || (e >= t ? (0, D.e$)(a, n) : (0, D.a)(a, n))
                }
              });
            return e.current.style.setProperty(fe.enabled.background, a), e.current.style.setProperty(fe.enabled.border, a), e.current.style.setProperty(fe.enabled.text, u), e.current.style.setProperty(fe.hover.background, f), e.current.style.setProperty(fe.hover.border, f), e.current.style.setProperty(fe.hover.text, u), e.current.style.setProperty(fe.focus.background, f), e.current.style.setProperty(fe.focus.border, f), e.current.style.setProperty(fe.focus.text, u), e.current.style.setProperty(fe.pressed.background, p), e.current.style.setProperty(fe.pressed.border, p), e.current.style.setProperty(fe.pressed.text, u), e.current.style.setProperty(fe.loading.background, f), e.current.style.setProperty(fe.loading.border, f), e.current.style.setProperty(fe.loading.text, u), () => {
              e.current?.style.removeProperty(fe.enabled.background), e.current?.style.removeProperty(fe.enabled.border), e.current?.style.removeProperty(fe.enabled.text), e.current?.style.removeProperty(fe.hover.background), e.current?.style.removeProperty(fe.hover.border), e.current?.style.removeProperty(fe.hover.text), e.current?.style.removeProperty(fe.focus.background), e.current?.style.removeProperty(fe.focus.border), e.current?.style.removeProperty(fe.focus.text), e.current?.style.removeProperty(fe.pressed.background), e.current?.style.removeProperty(fe.pressed.border), e.current?.style.removeProperty(fe.pressed.text), e.current?.style.removeProperty(fe.loading.background), e.current?.style.removeProperty(fe.loading.border), e.current?.style.removeProperty(fe.loading.text)
            }
          }, [e.current, r, t, o, n, a, s, i, d, l, ...c])
        };
      var ve = t(23646),
        ye = t(93823);
      const me = (0, k.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        be = () => (0, k.useContext)(me),
        he = () => {
          const {
            platformScale: e
          } = be();
          return e
        };
      var ge = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        we = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        Ce = {
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
      const Pe = e => "dark" === e ? Ce.dark : Ce.light;
      const Re = () => I.X3 ? null : document.body;
      (0, k.forwardRef)(({
        children: e,
        className: r,
        container: t = Re(),
        asChild: o,
        colorScheme: n,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, k.useRef)(null),
          f = (0, ve.UP)(u, c),
          p = (0, k.useRef)(t),
          {
            ratio: v,
            scale: y
          } = function(e) {
            const [r, t] = (0, k.useState)(e.platformScale || e.defaultPlatformScale), o = (0, k.useCallback)(r => {
              t(r), e.onPlatformScaleChange?.(r)
            }, [e.onPlatformScaleChange]), n = (0, k.useRef)([]), a = () => {
              if (!I.X3) {
                for (const {
                    handler: e,
                    matchMedia: r
                  }
                  of n.current) r.removeEventListener("change", e);
                n.current = []
              }
            };
            return (0, k.useEffect)(() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!I.X3) {
                a();
                for (const e in we) {
                  const r = window.matchMedia(we[e]),
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
              ratio: ge[r]
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
            const t = (0, ve.Ub)("(prefers-color-scheme: light)"),
              o = (0, ve.Ub)("(prefers-color-scheme: dark)"),
              n = "system" !== e && e || t && "light" || o && "dark" || r,
              a = (0, k.useMemo)(() => Pe(n), [n]),
              s = (0, k.useMemo)(() => (e => {
                const r = Pe(e);
                return [Ce.light, Ce.dark].filter(e => e !== r)
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
          const s = (0, ve.ZC)(a),
            i = (0, ve.ZC)(e.current);
          (0, k.useEffect)(() => {
            e.current?.classList.contains(je) || e.current?.classList.add(je), e.current?.classList.contains(Oe) || e.current?.classList.add(Oe), e.current?.classList.contains(xe) || e.current?.classList.add(xe), e.current?.classList.add(t), e.current?.classList.remove(...o), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
          }, [t, a]), (0, k.useEffect)(() => {
            e.current?.setAttribute("lang", n)
          }, [n]), (0, k.useEffect)(() => (r && e.current?.style.setProperty(_e, r.toString()), () => {
            e.current?.style.removeProperty(_e)
          }), [r]), (0, k.useEffect)(() => {
            i?.classList.remove(je), i?.classList.remove(Oe), i?.classList.remove(t), i?.style.removeProperty(_e), a && i?.classList.remove(a)
          }, [i])
        })({
          locale: l,
          className: r,
          appearanceClass: m,
          otherAppearanceClasses: b,
          currentScale: i ? v : -0,
          container: o ? u : p
        }), (0, S.jsx)(me.Provider, {
          value: {
            locale: l,
            defaultColorScheme: a,
            colorScheme: h,
            defaultPlatformScale: s,
            platformScale: y
          },
          children: o ? (0, S.jsx)(ye.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var Ne = t(79718);

      function Se(e) {
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

      function De(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ke(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? De(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Se(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : De(Object(t)).forEach(function(r) {
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
      var Le, Ie, Te = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ee = (Le = {
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
        }, Ie = e => {
          var r = Le.defaultClassName,
            t = ke(ke({}, Le.defaultVariants), e);
          for (var o in t) {
            var n, a = null !== (n = t[o]) && void 0 !== n ? n : Le.defaultVariants[o];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = Le.variantClassNames[o][s];
              i && (r += " " + i)
            }
          }
          for (var [d, l] of Le.compoundVariants) Te(d, t, Le.defaultVariants) && (r += " " + l);
          return r
        }, Ie.variants = () => Object.keys(Le.variantClassNames), Ie.classNames = {
          get base() {
            return Le.defaultClassName.split(" ")[0]
          },
          get variants() {
            return ze(Le.variantClassNames, e => ze(e, e => e.split(" ")[0]))
          }
        }, Ie);
      const Ve = "pageMD",
        Me = (0, k.forwardRef)(({
          label: e,
          hideTrack: r = !1,
          size: t = Ve,
          testId: o,
          ...n
        }, a) => {
          const s = he(),
            i = "string" == typeof t ? t : t?.[s] ?? t.default ?? Ve,
            d = (0, I.v6)({
              className: Ee({
                size: i
              }),
              "data-testid": o,
              "aria-label": e
            }, n);
          return (0, S.jsx)(Ne.b, {
            label: e,
            children: (0, S.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!r && (0, S.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, S.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var Ae = t(81270),
        qe = t(32933);

      function He(e) {
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

      function Fe(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Be(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Fe(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = He(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Fe(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ze(e, r) {
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
              o = Be(Be({}, e.defaultVariants), r);
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
              return Ze(e.variantClassNames, e => Ze(e, e => e.split(" ")[0]))
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
        asChild: r,
        children: t,
        iconLeft: o,
        iconLeftLabel: n,
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
        override_textLuminance: m = .179,
        override_hoverLuminance: b = .08,
        override_pressedLuminance: h = .15,
        override_backgroundColor: g,
        override_hoverColor: w,
        override_pressedColor: C,
        override_textColor: x,
        ..._
      }, j) => {
        const O = (0, k.useRef)(null),
          P = (0, ve.UP)(O, j),
          R = he(),
          N = "string" == typeof c ? c : c?.[R] ?? c.default ?? "MD",
          {
            buttonProps: D
          } = (0, ve.sL)((0, I.v6)(_, {
            isLoading: f,
            preventFocusOnPress: v
          }), O);
        pe({
          refs: {
            buttonRef: O
          },
          config: {
            textLuminance: m,
            darkenLuminance: y,
            hoverLuminance: b,
            pressedLuminance: h
          },
          overrides: {
            backgroundColor: g,
            hoverColor: w,
            pressedColor: C,
            textColor: x
          },
          enabled: "accent" === l
        }, [r]);
        const z = (0, I.v6)({
            className: Ke({
              appearance: l,
              size: N,
              fullWidth: u,
              iconLeft: !!o,
              iconRight: !!s
            }),
            "data-testid": e
          }, D),
          L = a || (o && qe[o] ? qe[o] : null),
          T = d || (s && qe[s] ? qe[s] : null),
          E = r ? ye.DX : "button",
          V = u && (T || T && L);
        return (0, S.jsxs)(E, {
          ref: P,
          ...z,
          children: [V && (0, S.jsx)("div", {
            className: "foundry_17pcofy15"
          }), L && (0, S.jsx)(L, {
            label: n || "",
            size: N,
            className: (0, Ae.clsx)(We({
              size: N
            }), "foundry_17pcofy11")
          }), (0, S.jsx)(ye.xV, {
            children: t
          }), T && (0, S.jsx)(T, {
            label: i || "",
            size: N,
            className: (0, Ae.clsx)(We({
              size: N
            }), Ue({
              fullWidth: u
            }))
          }), f && (0, S.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, S.jsx)(Me, {
              label: p || "",
              size: "inline" + ("XL" === N ? "LG" : "MD"),
              hideTrack: !0,
              className: $e({
                size: N
              })
            })
          })]
        })
      });

      function Qe(e) {
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

      function Je(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function er(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Je(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Qe(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Je(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function rr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var tr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        or = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = er(er({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) tr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rr(e.variantClassNames, e => rr(e, e => e.split(" ")[0]))
            }
          }, r
        },
        nr = or({
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
        ar = or({
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
        sr = or({
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
      const ir = (0, k.forwardRef)(({
        testId: e,
        asChild: r,
        icon: t,
        iconElement: o,
        label: n,
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
        override_backgroundColor: m,
        override_hoverColor: b,
        override_pressedColor: h,
        override_textColor: g,
        ...w
      }, C) => {
        const x = (0, k.useRef)(null),
          _ = (0, ve.UP)(x, C),
          j = he(),
          O = "string" == typeof i ? i : i?.[j] ?? i.default ?? "LG",
          {
            buttonProps: P
          } = (0, ve.sL)((0, I.v6)(w, {
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
            backgroundColor: m,
            hoverColor: b,
            pressedColor: h,
            textColor: g
          },
          enabled: "accent" === a
        }, [r]);
        const R = (0, I.v6)({
            className: ar({
              appearance: a,
              size: O,
              fullWidth: s
            }),
            "data-testid": e
          }, P),
          N = o || (t ? qe[t] : null),
          D = r ? ye.DX : "button";
        return (0, S.jsxs)(D, {
          ref: _,
          ...R,
          children: [N && (0, S.jsx)(N, {
            label: n || "",
            size: O,
            className: nr({
              size: O
            })
          }), (0, S.jsx)(ye.xV, {
            children: d
          }), l && (0, S.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, S.jsx)(Me, {
              label: c || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
              hideTrack: !0,
              className: sr({
                size: O
              })
            })
          })]
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
        pr = (e => {
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
      const vr = (0, k.forwardRef)(({
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
          c = n ? ye.DX : d;
        return (0, S.jsx)(c, {
          ref: i,
          className: (0, Ae.clsx)(pr({
            thickness: t,
            orientation: r
          }), e),
          role: l,
          "aria-orientation": r,
          "data-testid": a,
          ...s
        })
      });

      function yr(e) {
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

      function mr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function br(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? mr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = yr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function hr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var gr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        wr = "var(--foundry_9dxgbc2)",
        Cr = "var(--foundry_9dxgbc3)",
        xr = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = br(br({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hr(e.variantClassNames, e => hr(e, e => e.split(" ")[0]))
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
        _r = "var(--foundry_9dxgbc0)",
        jr = "var(--foundry_9dxgbc1)";
      const Or = (0, k.forwardRef)(({
        asChild: e,
        testId: r,
        children: t,
        colorOverride: o,
        label: n,
        size: a = "MD",
        ...s
      }, i) => {
        const d = he(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, I.v6)({
            className: xr({
              size: l
            }),
            "data-testid": r,
            style: (0, z.D)({
              [_r]: o?.pulseColorBackground,
              [jr]: o?.pulseColorForeground,
              [wr]: o?.gradientColorBackground,
              [Cr]: o?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": n
          }, s),
          u = e ? ye.DX : "div";
        return (0, S.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, S.jsx)(ye.xV, {
            children: t
          }) : (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, S.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Pr(e) {
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

      function Rr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Nr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Rr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Pr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Rr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Sr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Dr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        kr = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Nr(Nr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Dr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sr(e.variantClassNames, e => Sr(e, e => e.split(" ")[0]))
            }
          }, r
        },
        zr = kr({
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
      const Lr = (0, k.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? ye.DX : "p",
          i = (0, I.v6)({
            className: zr({
              size: o,
              appearance: t
            })
          }, n);
        return (0, S.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var Ir = kr({
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
      const Tr = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "default",
          ...o
        }, n) => {
          const a = e ? ye.DX : "p",
            s = (0, I.v6)({
              className: Ir({
                appearance: t
              })
            }, o);
          return (0, S.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        }),
        Er = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? ye.DX : "h1",
            a = (0, I.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, t);
          return (0, S.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        });
      var Vr = kr({
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
      const Mr = (0, k.forwardRef)(({
        asChild: e,
        level: r,
        testId: t,
        ...o
      }, n) => {
        const a = e ? ye.DX : `h${7===r?6:r}`,
          s = (0, I.v6)(o, {
            className: Vr({
              level: r
            })
          });
        return (0, S.jsx)(a, {
          ref: n,
          "data-testid": t,
          ...s
        })
      });
      var Ar = kr({
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
      const qr = (0, k.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? ye.DX : "p",
          i = (0, I.v6)({
            className: Ar({
              size: o,
              appearance: t
            })
          }, n);
        return (0, S.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var Hr = kr({
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
      const Fr = {
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
        Br = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          semantic: t = "default",
          ...o
        }, n) => {
          const a = e ? ye.DX : Fr[t] || "span",
            s = (0, I.v6)(o, {
              className: Hr({
                semantic: t
              })
            });
          return (0, S.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        });
      var Zr = t(93529),
        Xr = t(99206),
        Gr = t(34811);
      const Kr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((r, t) => {
        e.onload = () => r(), e.onerror = t
      }), Wr = ([e, r]) => ({
        x: e,
        y: r
      }), Ur = (e, r) => (e.x = r.x, e.y = r.y, e), $r = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Yr = (e, r = 3) => Number(parseFloat(`${e}`).toFixed(r)), Qr = (e, r, t) => Math.min(Math.max(e, r), t);
      var Jr = t(90004);

      function et(e) {
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

      function rt(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function tt(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? rt(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = et(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : rt(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ot(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var nt = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        at = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = tt(tt({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) nt(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ot(e.variantClassNames, e => ot(e, e => e.split(" ")[0]))
            }
          }, r
        },
        st = at({
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
        it = at({
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
      Zr.os.registerPlugin(Xr.L);
      const dt = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        lt = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        ct = T("var(--foundry_1a74xwb0)");
      var ut = t(92117);
      const ft = {
        "en-US": t.e(3656).then(t.bind(t, 53656)),
        "de-DE": t.e(8775).then(t.bind(t, 18775)),
        "es-ES": t.e(6469).then(t.bind(t, 16469)),
        "es-MX": t.e(8268).then(t.bind(t, 38268)),
        "fr-FR": t.e(6701).then(t.bind(t, 76701)),
        "it-IT": t.e(7471).then(t.bind(t, 77471)),
        "ja-JP": t.e(1376).then(t.bind(t, 81376)),
        "ko-KR": t.e(3622).then(t.bind(t, 43622)),
        "pl-PL": t.e(8553).then(t.bind(t, 98553)),
        "pt-BR": t.e(4421).then(t.bind(t, 54421)),
        "ru-RU": t.e(4143).then(t.bind(t, 54143)),
        "zh-CN": t.e(754).then(t.bind(t, 20754)),
        "zh-TW": t.e(8898).then(t.bind(t, 88898))
      };
      class pt {
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
          return t ? r : Qr(r, this.max[e], this.min[e])
        }
      }
      class vt {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Yr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            r = e.w / this.elementSize.w,
            t = e.h / this.elementSize.h;
          return Yr(t < r ? t : r)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Yr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class yt {
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
      class mt {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(r) ? "x" : "y", Ur(this.startPan, this.slide.pan)
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
          })(this.prevTap, o) < 25 && this.slide.tapHandler.doubleTap(o, n)) : (Ur(this.prevTap, {
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
      class bt {
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
      class ht {
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
      class gt extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, r, t, o) {
          super(e), this.point = t, this.tapTarget = r, this.originalEvent = o
        }
      }
      class wt extends yt {
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
          if (!this.dispatch(e, new gt(e, r, t, o)).defaultPrevented) switch (this.options[e]) {
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
      class Ct {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Wr(e), this.startZoomDistance = r, this.wasOverFitZoomLevel = !1, Ur(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [r]
        }) {
          const t = this.slide.zoomLevels.min,
            o = this.slide.zoomLevels.max;
          this.zoomPoint = Wr(e);
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
            a = Ur({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Ur({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = r, Ur(this.startPan, a)), o && (s = {
            x: this.calculatePanForZoomLevel("x", t),
            y: this.calculatePanForZoomLevel("y", t)
          }), this.slide.setZoomLevel(t, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(r, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || o || n) && (Ur(this.slide.pan, s), this.slide.setZoomLevel(t))
        }
      }
      class xt {
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
      class _t extends yt {
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
          super(), this.width = e, this.height = r, this.opener = new bt({
            slide: this
          }), this.bounds = new pt({
            slide: this
          }), this.dragHandler = new mt({
            options: a,
            slide: this
          }), this.scrollWheel = new ht({
            slide: this
          }), this.zoomHandler = new Ct({
            slide: this
          }), this.zoomLevels = new vt({
            options: t,
            slide: this
          }), this.tapHandler = new wt({
            options: o,
            slide: this
          }), this.panAreaSize = new xt({
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
          e = Yr(e), t || (e = Qr(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", r, o), this.pan.y = this.calculateZoomToPanOffset("y", r, o), $r(this.pan)
        }
        toggleZoom(e) {
          const r = this.currZoomLevel,
            t = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, r), this.pan.y = this.calculateZoomToPanOffset("y", e, r), $r(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Ur(this.pan, this.bounds.center)
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
      const jt = e => "dark" === e ? Ce.dark : Ce.light,
        Ot = (0, ut.YK)({
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
      var Pt = "foundry_bc732x1";
      const Rt = (0, k.forwardRef)(({
        shortcut: e,
        isInline: r,
        onShortcut: t
      }, o) => ((0, Jr.vC)(e, e => t?.(e), [t]), (0, S.jsx)(Lr, {
        size: "XS",
        className: (0, Ae.clsx)("foundry_bc732x0", {
          [Pt]: r
        }),
        asChild: !0,
        children: (0, S.jsx)("kbd", {
          ref: o,
          children: e
        })
      })));
      var Nt, St = t(71433),
        Dt = t(2458),
        kt = t(64239),
        zt = t(1913),
        Lt = t(94435),
        It = t(94660),
        Tt = "dismissableLayer.update",
        Et = k.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        Vt = k.forwardRef((e, r) => {
          const {
            disableOutsidePointerEvents: t = !1,
            deferPointerDownOutside: o = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = k.useContext(Et), [u, f] = k.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = k.useState({}), y = (0, kt.s)(r, f), m = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), h = b ? m.indexOf(b) : -1, g = u ? m.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, C = g >= h, x = k.useRef(!1), _ = function(e, r) {
            const {
              ownerDocument: t = globalThis?.document,
              deferPointerDownOutside: o = !1,
              isDeferredPointerDownOutsideRef: n,
              dismissableSurfaces: a,
              shouldHandlePointerDownOutside: s = At
            } = r, i = (0, It.c)(e), d = k.useRef(!1), l = k.useRef(!1), c = k.useRef(new Map), u = k.useRef(() => {});
            return k.useEffect(() => {
              function e() {
                l.current = !1, n.current = !1, c.current.clear()
              }

              function r(e) {
                if (!l.current) return;
                const r = e.target;
                r instanceof Node && [...a].some(e => e.contains(r)) || c.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  l.current && u.current()
                }, 0)
              }

              function f(e) {
                l.current && c.current.set(e.type, !1)
              }
              const p = r => {
                  if (r.target && !d.current) {
                    let a = function() {
                      t.removeEventListener("click", u.current);
                      const r = Array.from(c.current.values()).some(Boolean);
                      e(), r || Ht("dismissableLayer.pointerDownOutside", i, f, {
                        discrete: !0
                      })
                    };
                    if (!s(r.target)) return t.removeEventListener("click", u.current), e(), void(d.current = !1);
                    const f = {
                      originalEvent: r
                    };
                    l.current = !0, n.current = o && 0 === r.button, c.current.clear(), o && 0 === r.button ? (t.removeEventListener("click", u.current), u.current = a, t.addEventListener("click", u.current, {
                      once: !0
                    })) : a()
                  } else t.removeEventListener("click", u.current), e();
                  d.current = !1
                },
                v = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of v) t.addEventListener(e, r, !0), t.addEventListener(e, f);
              const y = window.setTimeout(() => {
                t.addEventListener("pointerdown", p)
              }, 0);
              return () => {
                window.clearTimeout(y), t.removeEventListener("pointerdown", p), t.removeEventListener("click", u.current);
                for (const e of v) t.removeEventListener(e, r, !0), t.removeEventListener(e, f)
              }
            }, [t, i, o, n, a, s]), {
              onPointerDownCapture: () => d.current = !0
            }
          }(e => {
            a?.(e), i?.(e), e.defaultPrevented || d?.()
          }, {
            ownerDocument: p,
            deferPointerDownOutside: o,
            isDeferredPointerDownOutsideRef: x,
            dismissableSurfaces: c.dismissableSurfaces,
            shouldHandlePointerDownOutside: k.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const r = [...c.branches].some(r => r.contains(e));
              return C && !r
            }, [c.branches, C])
          }), j = function(e, r = globalThis?.document) {
            const t = (0, It.c)(e),
              o = k.useRef(!1);
            return k.useEffect(() => {
              const e = e => {
                e.target && !o.current && Ht("dismissableLayer.focusOutside", t, {
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
            if (o && x.current) return;
            const r = e.target;
            [...c.branches].some(e => e.contains(r)) || (s?.(e), i?.(e), e.defaultPrevented || d?.())
          }, p), O = !!u && g === m.length - 1, P = (0, It.c)(e => {
            "Escape" === e.key && (n?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          });
          return k.useEffect(() => {
            if (O) return p.addEventListener("keydown", P, {
              capture: !0
            }), () => p.removeEventListener("keydown", P, {
              capture: !0
            })
          }, [p, O, P]), k.useEffect(() => {
            if (u) return t && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Nt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), qt(), () => {
              t && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Nt))
            }
          }, [u, p, t, c]), k.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), qt())
          }, [u, c]), k.useEffect(() => {
            const e = () => v({});
            return document.addEventListener(Tt, e), () => document.removeEventListener(Tt, e)
          }, []), (0, S.jsx)(Lt.sG.div, {
            ...l,
            ref: y,
            style: {
              pointerEvents: w ? C ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Dt.mK)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, Dt.mK)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, Dt.mK)(e.onPointerDownCapture, _.onPointerDownCapture)
          })
        });
      Vt.displayName = "DismissableLayer";
      var Mt = k.forwardRef((e, r) => {
        const t = k.useContext(Et),
          o = k.useRef(null),
          n = (0, kt.s)(r, o);
        return k.useEffect(() => {
          const e = o.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }, [t.branches]), (0, S.jsx)(Lt.sG.div, {
          ...e,
          ref: n
        })
      });
      Mt.displayName = "DismissableLayerBranch";
      var At = () => !0;

      function qt() {
        const e = new CustomEvent(Tt);
        document.dispatchEvent(e)
      }

      function Ht(e, r, t, {
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
        }), o ? (0, Lt.hO)(n, a) : n.dispatchEvent(a)
      }
      var Ft = Vt,
        Bt = Mt,
        Zt = t(94296),
        Xt = t(17966),
        Gt = t(10376),
        Kt = k.forwardRef((e, r) => {
          const {
            children: t,
            width: o = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, S.jsx)(Lt.sG.svg, {
            ...a,
            ref: r,
            width: o,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? t : (0, S.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Kt.displayName = "Arrow";
      var Wt = Kt,
        Ut = t(10198),
        $t = t(5024),
        Yt = "Popper",
        [Qt, Jt] = (0, zt.A)(Yt),
        [eo, ro] = Qt(Yt),
        to = e => {
          const {
            __scopePopper: r,
            children: t
          } = e, [o, n] = k.useState(null), [a, s] = k.useState(void 0);
          return (0, S.jsx)(eo, {
            scope: r,
            anchor: o,
            onAnchorChange: n,
            placementState: a,
            setPlacementState: s,
            children: t
          })
        };
      to.displayName = Yt;
      var oo = "PopperAnchor",
        no = k.forwardRef((e, r) => {
          const {
            __scopePopper: t,
            virtualRef: o,
            ...n
          } = e, a = ro(oo, t), s = k.useRef(null), i = a.onAnchorChange, d = k.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, kt.s)(r, d), c = k.useRef(null);
          k.useEffect(() => {
            if (!o) return;
            const e = c.current;
            c.current = o.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && yo(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return o ? null : (0, S.jsx)(Lt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...n,
            ref: l
          })
        });
      no.displayName = oo;
      var ao = "PopperContent",
        [so, io] = Qt(ao),
        lo = k.forwardRef((e, r) => {
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
          } = e, m = ro(ao, t), [b, h] = k.useState(null), g = (0, kt.s)(r, h), [w, C] = k.useState(null), x = (0, $t.X)(w), _ = x?.width ?? 0, j = x?.height ?? 0, O = o + ("center" !== a ? "-" + a : ""), P = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, R = Array.isArray(l) ? l : [l], N = R.length > 0, D = {
            padding: P,
            boundary: R.filter(po),
            altBoundary: N
          }, {
            refs: z,
            floatingStyles: L,
            placement: I,
            isPositioned: T,
            middlewareData: E
          } = (0, Xt.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Gt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: m.anchor
            },
            middleware: [(0, Xt.cY)({
              mainAxis: n + j,
              alignmentAxis: s
            }), d && (0, Xt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Xt.ER)() : void 0,
              ...D
            }), d && (0, Xt.UU)({
              ...D
            }), (0, Xt.Ej)({
              ...D,
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
            }), vo({
              arrowWidth: _,
              arrowHeight: j
            }), f && (0, Xt.jD)({
              strategy: "referenceHidden",
              ...D,
              boundary: N ? D.boundary : void 0
            })]
          }), V = m.setPlacementState;
          (0, Ut.N)(() => (V(I), () => {
            V(void 0)
          }), [I, V]);
          const [M, A] = yo(I), q = (0, It.c)(v);
          (0, Ut.N)(() => {
            T && q?.()
          }, [T, q]);
          const H = E.arrow?.x,
            F = E.arrow?.y,
            B = 0 !== E.arrow?.centerOffset,
            [Z, X] = k.useState();
          return (0, Ut.N)(() => {
            b && X(window.getComputedStyle(b).zIndex)
          }, [b]), (0, S.jsx)("div", {
            ref: z.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...L,
              transform: T ? L.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: Z,
              "--radix-popper-transform-origin": [E.transformOrigin?.x, E.transformOrigin?.y].join(" "),
              ...E.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, S.jsx)(so, {
              scope: t,
              placedSide: M,
              placedAlign: A,
              onArrowChange: C,
              arrowX: H,
              arrowY: F,
              shouldHideArrow: B,
              children: (0, S.jsx)(Lt.sG.div, {
                "data-side": M,
                "data-align": A,
                ...y,
                ref: g,
                style: {
                  ...y.style,
                  animation: T ? void 0 : "none"
                }
              })
            })
          })
        });
      lo.displayName = ao;
      var co = "PopperArrow",
        uo = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        fo = k.forwardRef(function(e, r) {
          const {
            __scopePopper: t,
            ...o
          } = e, n = io(co, t), a = uo[n.placedSide];
          return (0, S.jsx)("span", {
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
            children: (0, S.jsx)(Wt, {
              ...o,
              ref: r,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        });

      function po(e) {
        return null !== e
      }
      fo.displayName = co;
      var vo = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: t,
            rects: o,
            middlewareData: n
          } = r, a = 0 !== n.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = yo(t), c = {
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

      function yo(e) {
        const [r, t = "center"] = e.split("-");
        return [r, t]
      }
      var mo = to,
        bo = no,
        ho = lo,
        go = fo,
        wo = t(84017),
        Co = k.forwardRef((e, r) => {
          const {
            container: t,
            ...o
          } = e, [n, a] = k.useState(!1);
          (0, Ut.N)(() => a(!0), []);
          const s = t || n && globalThis?.document?.body;
          return s ? wo.createPortal((0, S.jsx)(Lt.sG.div, {
            ...o,
            ref: r
          }), s) : null
        });
      Co.displayName = "Portal";
      var xo = e => {
        const {
          present: r,
          children: t
        } = e, o = function(e) {
          const [r, t] = k.useState(), o = k.useRef(null), n = k.useRef(e), a = k.useRef("none"), s = k.useRef(void 0), i = e ? "mounted" : "unmounted", [d, l] = function(e, r) {
            return k.useReducer((e, t) => r[e][t] ?? e, e)
          }(i, {
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
            "mounted" === d ? (a.current = s.current ?? jo(o.current), s.current = void 0) : a.current = "none"
          }, [d]), (0, Ut.N)(() => {
            const r = o.current,
              t = n.current;
            if (t !== e) {
              const o = a.current,
                i = jo(r);
              e ? (s.current = i, l("MOUNT")) : l("none" === i || "none" === r?.display ? "UNMOUNT" : t && o !== i ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e
            }
          }, [e, l]), (0, Ut.N)(() => {
            if (r) {
              let e;
              const t = r.ownerDocument.defaultView ?? window,
                s = a => {
                  const s = jo(o.current).includes(CSS.escape(a.animationName));
                  if (a.target === r && s && (l("ANIMATION_END"), !n.current)) {
                    const o = r.style.animationFillMode;
                    r.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                      "forwards" === r.style.animationFillMode && (r.style.animationFillMode = o)
                    })
                  }
                },
                i = e => {
                  e.target === r && (a.current = jo(o.current))
                };
              return r.addEventListener("animationstart", i), r.addEventListener("animationcancel", s), r.addEventListener("animationend", s), () => {
                t.clearTimeout(e), r.removeEventListener("animationstart", i), r.removeEventListener("animationcancel", s), r.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [r, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(d),
            ref: k.useCallback(e => {
              if (e) {
                const r = getComputedStyle(e);
                o.current = r, s.current = jo(r)
              } else o.current = null;
              t(e)
            }, [])
          }
        }(r), n = "function" == typeof t ? t({
          present: o.isPresent
        }) : k.Children.only(t), a = function(...e) {
          const r = k.useRef(e);
          return r.current = e, k.useCallback(e => {
            const t = r.current;
            let o = !1;
            const n = t.map(r => {
              const t = _o(r, e);
              return o || "function" != typeof t || (o = !0), t
            });
            if (o) return () => {
              for (let e = 0; e < n.length; e++) {
                const r = n[e];
                "function" == typeof r ? r() : _o(t[e], null)
              }
            }
          }, [])
        }(o.ref, function(e) {
          let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = r && "isReactWarning" in r && r.isReactWarning;
          return t ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(n));
        return "function" == typeof t || o.isPresent ? k.cloneElement(n, {
          ref: a
        }) : null
      };

      function _o(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r)
      }

      function jo(e) {
        return e?.animationName || "none"
      }
      xo.displayName = "Presence";
      var Oo = t(17172),
        Po = t(17038),
        Ro = t(23482),
        [No, So] = (0, zt.A)("Tooltip", [Jt]),
        Do = Jt(),
        ko = "TooltipProvider",
        zo = 700,
        Lo = "tooltip.open",
        [Io, To] = No(ko),
        Eo = e => {
          const {
            __scopeTooltip: r,
            delayDuration: t = zo,
            skipDelayDuration: o = 300,
            disableHoverableContent: n = !1,
            children: a
          } = e, s = k.useRef(!0), i = k.useRef(!1), d = k.useRef(0);
          return k.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, S.jsx)(Io, {
            scope: r,
            isOpenDelayedRef: s,
            delayDuration: t,
            onOpen: k.useCallback(() => {
              o <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [o]),
            onClose: k.useCallback(() => {
              o <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, o))
            }, [o]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: k.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: n,
            children: a
          })
        };
      Eo.displayName = ko;
      var Vo = "Tooltip",
        [Mo, Ao] = No(Vo),
        qo = e => {
          const {
            __scopeTooltip: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = To(Vo, e.__scopeTooltip), l = Do(r), [c, u] = k.useState(null), f = (0, Zt.B)(), p = k.useRef(0), v = s ?? d.disableHoverableContent, y = i ?? d.delayDuration, m = k.useRef(!1), [b, h] = (0, Po.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Lo))) : d.onClose(), a?.(e)
            },
            caller: Vo
          }), g = k.useMemo(() => b ? m.current ? "delayed-open" : "instant-open" : "closed", [b]), w = k.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, m.current = !1, h(!0)
          }, [h]), C = k.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, h(!1)
          }, [h]), x = k.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              m.current = !0, h(!0), p.current = 0
            }, y)
          }, [y, h]);
          return k.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, S.jsx)(mo, {
            ...l,
            children: (0, S.jsx)(Mo, {
              scope: r,
              contentId: f,
              open: b,
              stateAttribute: g,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: k.useCallback(() => {
                d.isOpenDelayedRef.current ? x() : w()
              }, [d.isOpenDelayedRef, x, w]),
              onTriggerLeave: k.useCallback(() => {
                v ? C() : (window.clearTimeout(p.current), p.current = 0)
              }, [C, v]),
              onOpen: w,
              onClose: C,
              disableHoverableContent: v,
              children: t
            })
          })
        };
      qo.displayName = Vo;
      var Ho = "TooltipTrigger",
        Fo = k.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = Ao(Ho, t), a = To(Ho, t), s = Do(t), i = k.useRef(null), d = (0, kt.s)(r, i, n.onTriggerChange), l = k.useRef(!1), c = k.useRef(!1), u = k.useCallback(() => l.current = !1, []);
          return k.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, S.jsx)(bo, {
            asChild: !0,
            ...s,
            children: (0, S.jsx)(Lt.sG.button, {
              "aria-describedby": n.open ? n.contentId : void 0,
              "data-state": n.stateAttribute,
              ...o,
              ref: d,
              onPointerMove: (0, Dt.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (n.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Dt.mK)(e.onPointerLeave, () => {
                n.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Dt.mK)(e.onPointerDown, () => {
                n.open && n.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Dt.mK)(e.onFocus, () => {
                l.current || n.onOpen()
              }),
              onBlur: (0, Dt.mK)(e.onBlur, n.onClose),
              onClick: (0, Dt.mK)(e.onClick, n.onClose)
            })
          })
        });
      Fo.displayName = Ho;
      var Bo = "TooltipPortal",
        [Zo, Xo] = No(Bo, {
          forceMount: void 0
        }),
        Go = e => {
          const {
            __scopeTooltip: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = Ao(Bo, r);
          return (0, S.jsx)(Zo, {
            scope: r,
            forceMount: t,
            children: (0, S.jsx)(xo, {
              present: t || a.open,
              children: (0, S.jsx)(Co, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      Go.displayName = Bo;
      var Ko = "TooltipContent",
        Wo = k.forwardRef((e, r) => {
          const t = Xo(Ko, e.__scopeTooltip),
            {
              forceMount: o = t.forceMount,
              side: n = "top",
              ...a
            } = e,
            s = Ao(Ko, e.__scopeTooltip);
          return (0, S.jsx)(xo, {
            present: o || s.open,
            children: s.disableHoverableContent ? (0, S.jsx)(Jo, {
              side: n,
              ...a,
              ref: r
            }) : (0, S.jsx)(Uo, {
              side: n,
              ...a,
              ref: r
            })
          })
        }),
        Uo = k.forwardRef((e, r) => {
          const t = Ao(Ko, e.__scopeTooltip),
            o = To(Ko, e.__scopeTooltip),
            n = k.useRef(null),
            a = (0, kt.s)(r, n),
            [s, i] = k.useState(null),
            {
              trigger: d,
              onClose: l
            } = t,
            c = n.current,
            {
              onPointerInTransitChange: u
            } = o,
            f = k.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = k.useCallback((e, r) => {
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
          return k.useEffect(() => () => f(), [f]), k.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                r = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", r), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", r)
              }
            }
          }, [d, c, p, f]), k.useEffect(() => {
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
          }, [d, c, s, l, f]), (0, S.jsx)(Jo, {
            ...e,
            ref: a
          })
        }),
        [$o, Yo] = No(Vo, {
          isInside: !1
        }),
        Qo = (0, Oo.Dc)("TooltipContent"),
        Jo = k.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            children: o,
            "aria-label": n,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Ao(Ko, t), l = Do(t), {
            onClose: c
          } = d;
          return k.useEffect(() => (document.addEventListener(Lo, c), () => document.removeEventListener(Lo, c)), [c]), k.useEffect(() => {
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
          }, [d.trigger, c]), (0, S.jsx)(Vt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, S.jsxs)(ho, {
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
              children: [(0, S.jsx)(Qo, {
                children: o
              }), (0, S.jsx)($o, {
                scope: t,
                isInside: !0,
                children: (0, S.jsx)(Ro.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: n || o
                })
              })]
            })
          })
        });
      Wo.displayName = Ko;
      var en = "TooltipArrow",
        rn = k.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = Do(t);
          return Yo(en, t).isInside ? null : (0, S.jsx)(go, {
            ...n,
            ...o,
            ref: r
          })
        });
      rn.displayName = en;
      var tn = Eo,
        on = qo,
        nn = Fo,
        an = Go,
        sn = Wo,
        dn = rn;
      const ln = (0, k.createContext)(null);

      function cn() {
        const e = (0, k.useContext)(ln);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const un = ({
          children: e,
          delayDuration: r = 0,
          defaultOpen: t,
          onOpenChange: o,
          ...n
        }) => {
          const [a = !1, s] = (0, ve.ic)({
            defaultProp: t,
            prop: n.isOpen,
            onChange: o
          });
          return (0, S.jsx)(tn, {
            delayDuration: r,
            children: (0, S.jsx)(ln.Provider, {
              value: {
                isOpen: a,
                ...n
              },
              children: (0, S.jsx)(on, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        fn = (0, k.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => (0, S.jsx)(nn, {
          asChild: !0,
          "data-testid": r,
          ...t,
          ref: o,
          children: e
        })),
        pn = (0, k.forwardRef)(({
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
          } = cn(), c = (0, ve.jt)(), u = (0, St.CS)(sn), f = (0, St.pn)(l, {
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
            config: St.$W.stiff,
            immediate: c
          }), p = (0, I.v6)({
            "data-testid": e,
            side: r,
            align: o,
            sticky: s,
            sideOffset: t,
            alignOffset: n,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, S.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        vn = (0, k.forwardRef)(({
          testId: e
        }, r) => {
          const t = (0, I.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, S.jsx)(dn, {
            ...t,
            ref: r
          })
        }),
        yn = an;
      var mn = t(81471),
        bn = t(99136),
        hn = t(52184);

      function gn(e) {
        const r = e + "CollectionProvider",
          [t, o] = (0, zt.A)(r),
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
            } = e, o = k.useRef(null), a = k.useRef(new Map).current;
            return (0, S.jsx)(n, {
              scope: r,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        s.displayName = r;
        const i = e + "CollectionSlot",
          d = (0, Oo.TL)(i),
          l = k.forwardRef((e, r) => {
            const {
              scope: t,
              children: o
            } = e, n = a(i, t), s = (0, kt.s)(r, n.collectionRef);
            return (0, S.jsx)(d, {
              ref: s,
              children: o
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, Oo.TL)(c),
          p = k.forwardRef((e, r) => {
            const {
              scope: t,
              children: o,
              ...n
            } = e, s = k.useRef(null), i = (0, kt.s)(r, s), d = a(c, t);
            return k.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...n
            }), () => {
              d.itemMap.delete(s)
            })), (0, S.jsx)(f, {
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
          return k.useCallback(() => {
            const e = t.collectionRef.current;
            if (!e) return [];
            const r = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(t.itemMap.values()).sort((e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current))
          }, [t.collectionRef, t.itemMap])
        }, o]
      }
      Map;
      var wn = ["PageUp", "PageDown"],
        Cn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        xn = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        _n = "Slider",
        [jn, On, Pn] = gn(_n),
        [Rn, Nn] = (0, zt.A)(_n, [Pn]),
        [Sn, Dn] = Rn(_n),
        kn = k.forwardRef((e, r) => {
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
          } = e, m = k.useRef(new Set), b = k.useRef(0), h = k.useRef(!1), g = "horizontal" === s ? In : Tn, [w, C] = k.useState(null), x = (0, kt.s)(r, C), [_ = [], j] = (0, Po.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const r = [...m.current];
              r[b.current]?.focus({
                preventScroll: !0,
                focusVisible: h.current
              }), h.current = !1, u(e)
            }
          }), O = k.useRef(_), P = k.useRef(_);

          function R(e, r, {
            commit: t
          } = {
            commit: !1
          }) {
            const s = Jn(a),
              i = ea(Math.round((e - o) / a) * a + o, s),
              l = (0, mn.q)(i, [o, n]);
            j((e = []) => {
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
          return k.useEffect(() => {
            const e = v ? w?.ownerDocument.getElementById(v) : w?.closest("form");
            if (e instanceof HTMLFormElement) {
              const r = () => j(P.current);
              return e.addEventListener("reset", r), () => e.removeEventListener("reset", r)
            }
          }, [w, v, j]), (0, S.jsx)(Sn, {
            scope: e.__scopeSlider,
            name: t,
            disabled: i,
            min: o,
            max: n,
            valueIndexToChangeRef: b,
            thumbs: m.current,
            values: _,
            orientation: s,
            form: v,
            children: (0, S.jsx)(jn.Provider, {
              scope: e.__scopeSlider,
              children: (0, S.jsx)(jn.Slot, {
                scope: e.__scopeSlider,
                children: (0, S.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: x,
                  onPointerDown: (0, Dt.mK)(y.onPointerDown, () => {
                    i || (O.current = _, h.current = !1)
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
                    }(_, e);
                    R(e, r)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    R(e, b.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = O.current[b.current];
                    _[b.current] !== e && f(_)
                  },
                  onHomeKeyDown: () => {
                    i || (h.current = !0, R(o, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (h.current = !0, R(n, _.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: r
                  }) => {
                    if (!i) {
                      h.current = !0;
                      const t = wn.includes(e.key) || e.shiftKey && Cn.includes(e.key) ? 10 : 1,
                        n = b.current,
                        s = function(e, {
                          min: r,
                          step: t,
                          direction: o,
                          multiplier: n
                        }) {
                          const a = Jn(t),
                            s = (e - r) / t,
                            i = Math.round(s);
                          let d;
                          return d = ea(i * t + r, a) === ea(e, a) ? i + n * o : o > 0 ? Math.ceil(s) : Math.floor(s), ea(d * t + r, a)
                        }(_[n], {
                          min: o,
                          step: a,
                          direction: r,
                          multiplier: t
                        });
                      R(s, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      kn.displayName = _n;
      var [zn, Ln] = Rn(_n, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), In = k.forwardRef((e, r) => {
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
        } = e, [u, f] = k.useState(null), p = (0, kt.s)(r, f), v = k.useRef(void 0), y = (0, bn.jH)(n), m = "ltr" === y, b = m && !a || !m && a;

        function h(e) {
          const r = v.current || u.getBoundingClientRect(),
            n = Qn([0, r.width], b ? [t, o] : [o, t]);
          return v.current = r, n(e - r.left)
        }
        return (0, S.jsx)(zn, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, S.jsx)(En, {
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
              const r = xn[b ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), Tn = k.forwardRef((e, r) => {
        const {
          min: t,
          max: o,
          inverted: n,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = k.useRef(null), u = (0, kt.s)(r, c), f = k.useRef(void 0), p = !n;

        function v(e) {
          const r = f.current || c.current.getBoundingClientRect(),
            n = Qn([0, r.height], p ? [o, t] : [t, o]);
          return f.current = r, n(e - r.top)
        }
        return (0, S.jsx)(zn, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, S.jsx)(En, {
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
              const r = xn[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: r ? -1 : 1
              })
            }
          })
        })
      }), En = k.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          onSlideStart: o,
          onSlideMove: n,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = Dn(_n, t);
        return (0, S.jsx)(Lt.sG.span, {
          ...l,
          ref: r,
          onKeyDown: (0, Dt.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : wn.concat(Cn).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, Dt.mK)(e.onPointerDown, e => {
            const r = e.target;
            r.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(r) ? r.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : o(e)
          }),
          onPointerMove: (0, Dt.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && n(e)
          }),
          onPointerUp: (0, Dt.mK)(e.onPointerUp, e => {
            const r = e.target;
            r.hasPointerCapture(e.pointerId) && (r.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Vn = "SliderTrack", Mn = k.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          ...o
        } = e, n = Dn(Vn, t);
        return (0, S.jsx)(Lt.sG.span, {
          "data-disabled": n.disabled ? "" : void 0,
          "data-orientation": n.orientation,
          ...o,
          ref: r
        })
      });
      Mn.displayName = Vn;
      var An = "SliderRange",
        qn = k.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = Dn(An, t), a = Ln(An, t), s = k.useRef(null), i = (0, kt.s)(r, s), d = n.values.length, l = n.values.map(e => Yn(e, n.min, n.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, S.jsx)(Lt.sG.span, {
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
      qn.displayName = An;
      var Hn = "SliderThumb",
        [Fn, Bn] = Rn(Hn),
        Zn = "SliderThumbProvider";

      function Xn(e) {
        const {
          __scopeSlider: r,
          name: t,
          children: o,
          internal_do_not_use_render: n
        } = e, a = Dn(Zn, r), s = On(r), [i, d] = k.useState(null), l = k.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, $t.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = t ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : Yn(f, a.min, a.max);
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
        return (0, S.jsx)(Fn, {
          scope: r,
          ...y,
          children: ra(n) ? n(y) : o
        })
      }
      Xn.displayName = Zn;
      var Gn = "SliderThumbTrigger",
        Kn = k.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = Dn(Gn, t), a = Ln(Gn, t), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Bn(Gn, t), u = (0, kt.s)(r, c), f = function(e, r) {
            return r > 2 ? `Value ${e+1} of ${r}` : 2 === r ? ["Minimum", "Maximum"][e] : void 0
          }(s, n.values.length), p = l?.[a.size], v = p ? function(e, r, t) {
            const o = e / 2;
            return (o - Qn([0, 50], [0, o])(r) * t) * t
          }(p, d, a.direction) : 0;
          return (0, S.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, S.jsx)(jn.ItemSlot, {
              scope: t,
              children: (0, S.jsx)(Lt.sG.span, {
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
                onFocus: (0, Dt.mK)(e.onFocus, () => {
                  n.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      Kn.displayName = Gn;
      var Wn = k.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          name: o,
          ...n
        } = e;
        return (0, S.jsx)(Xn, {
          __scopeSlider: t,
          name: o,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: o
          }) => (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(Kn, {
              ...n,
              ref: r,
              __scopeSlider: t
            }), o ? (0, S.jsx)($n, {
              __scopeSlider: t
            }, e) : null]
          })
        })
      });
      Wn.displayName = Hn;
      var Un = "SliderBubbleInput",
        $n = k.forwardRef(({
          __scopeSlider: e,
          ...r
        }, t) => {
          const {
            value: o,
            name: n,
            form: a
          } = Bn(Un, e), s = k.useRef(null), i = (0, kt.s)(s, t), d = (0, hn.Z)(o);
          return k.useEffect(() => {
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
          }, [d, o]), (0, S.jsx)(Lt.sG.input, {
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

      function Yn(e, r, t) {
        const o = 100 / (t - r) * (e - r);
        return (0, mn.q)(o, [0, 100])
      }

      function Qn(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function Jn(e) {
        if (!Number.isFinite(e)) return 0;
        const r = e.toString();
        if (r.includes("e")) {
          const [e, t] = r.split("e"), o = e.split(".")[1] || "", n = Number(t);
          return Math.max(0, o.length - n)
        }
        const t = r.split(".")[1];
        return t ? t.length : 0
      }

      function ea(e, r) {
        const t = Math.pow(10, r);
        return Math.round(e * t) / t
      }

      function ra(e) {
        return "function" == typeof e
      }
      $n.displayName = Un;
      var ta = "focusScope.autoFocusOnMount",
        oa = "focusScope.autoFocusOnUnmount",
        na = {
          bubbles: !1,
          cancelable: !0
        },
        aa = k.forwardRef((e, r) => {
          const {
            loop: t = !1,
            trapped: o = !1,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = k.useState(null), l = (0, It.c)(n), c = (0, It.c)(a), u = k.useRef(null), f = (0, kt.s)(r, d), p = k.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          k.useEffect(() => {
            if (o) {
              let e = function(e) {
                  if (p.paused || !i) return;
                  const r = e.target;
                  i.contains(r) ? u.current = r : la(u.current, {
                    select: !0
                  })
                },
                r = function(e) {
                  if (p.paused || !i) return;
                  const r = e.relatedTarget;
                  null !== r && (i.contains(r) || la(u.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const r of e) r.removedNodes.length > 0 && la(i)
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
          }, [o, i, p.paused]), k.useEffect(() => {
            if (i) {
              ca.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const r = new CustomEvent(ta, na);
                i.addEventListener(ta, l), i.dispatchEvent(r), r.defaultPrevented || (function(e, {
                  select: r = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const o of e)
                    if (la(o, {
                        select: r
                      }), document.activeElement !== t) return
                }(sa(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && la(i))
              }
              return () => {
                i.removeEventListener(ta, l), setTimeout(() => {
                  const r = new CustomEvent(oa, na);
                  i.addEventListener(oa, c), i.dispatchEvent(r), r.defaultPrevented || la(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(oa, c), ca.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const v = k.useCallback(e => {
            if (!t && !o) return;
            if (p.paused) return;
            const r = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              n = document.activeElement;
            if (r && n) {
              const r = e.currentTarget,
                [o, a] = function(e) {
                  const r = sa(e);
                  return [ia(r, e), ia(r.reverse(), e)]
                }(r);
              o && a ? e.shiftKey || n !== a ? e.shiftKey && n === o && (e.preventDefault(), t && la(a, {
                select: !0
              })) : (e.preventDefault(), t && la(o, {
                select: !0
              })) : n === r && e.preventDefault()
            }
          }, [t, o, p.paused]);
          return (0, S.jsx)(Lt.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        });

      function sa(e) {
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

      function ia(e, r) {
        const t = "function" == typeof r.checkVisibility && r.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const o of e)
          if (!(t ? !o.checkVisibility({
              checkVisibilityCSS: !0
            }) : da(o, {
              upTo: r
            }))) return o
      }

      function da(e, {
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

      function la(e, {
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
      aa.displayName = "FocusScope";
      var ca = function() {
        let e = [];
        return {
          add(r) {
            const t = e[0];
            r !== t && t?.pause(), e = ua(e, r), e.unshift(r)
          },
          remove(r) {
            e = ua(e, r), e[0]?.resume()
          }
        }
      }();

      function ua(e, r) {
        const t = [...e],
          o = t.indexOf(r);
        return -1 !== o && t.splice(o, 1), t
      }
      var fa = t(38174),
        pa = t(38100),
        va = t(45787),
        ya = "Dialog",
        [ma, ba] = (0, zt.A)(ya),
        [ha, ga] = ma(ya),
        wa = e => {
          const {
            __scopeDialog: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !0
          } = e, i = k.useRef(null), d = k.useRef(null), [l, c] = (0, Po.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: ya
          });
          return (0, S.jsx)(ha, {
            scope: r,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Zt.B)(),
            titleId: (0, Zt.B)(),
            descriptionId: (0, Zt.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: k.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: t
          })
        };
      wa.displayName = ya;
      var Ca = "DialogTrigger",
        xa = k.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ga(Ca, t), a = (0, kt.s)(r, n.triggerRef);
          return (0, S.jsx)(Lt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": Fa(n.open),
            ...o,
            ref: a,
            onClick: (0, Dt.mK)(e.onClick, n.onOpenToggle)
          })
        });
      xa.displayName = Ca;
      var _a = "DialogPortal",
        [ja, Oa] = ma(_a, {
          forceMount: void 0
        }),
        Pa = e => {
          const {
            __scopeDialog: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = ga(_a, r);
          return (0, S.jsx)(ja, {
            scope: r,
            forceMount: t,
            children: k.Children.map(o, e => (0, S.jsx)(xo, {
              present: t || a.open,
              children: (0, S.jsx)(Co, {
                asChild: !0,
                container: n,
                children: e
              })
            }))
          })
        };
      Pa.displayName = _a;
      var Ra = "DialogOverlay",
        Na = k.forwardRef((e, r) => {
          const t = Oa(Ra, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ga(Ra, e.__scopeDialog);
          return a.modal ? (0, S.jsx)(xo, {
            present: o || a.open,
            children: (0, S.jsx)(Da, {
              ...n,
              ref: r
            })
          }) : null
        });
      Na.displayName = Ra;
      var Sa = (0, Oo.TL)("DialogOverlay.RemoveScroll"),
        Da = k.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ga(Ra, t), a = function() {
            const e = k.useContext(Et),
              [r, t] = k.useState(null);
            return k.useEffect(() => {
              if (r) return e.dismissableSurfaces.add(r), () => {
                e.dismissableSurfaces.delete(r)
              }
            }, [r, e.dismissableSurfaces]), t
          }(), s = (0, kt.s)(r, a);
          return (0, S.jsx)(pa.A, {
            as: Sa,
            allowPinchZoom: !0,
            shards: [n.contentRef],
            children: (0, S.jsx)(Lt.sG.div, {
              "data-state": Fa(n.open),
              ...o,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        ka = "DialogContent",
        za = k.forwardRef((e, r) => {
          const t = Oa(ka, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = ga(ka, e.__scopeDialog);
          return (0, S.jsx)(xo, {
            present: o || a.open,
            children: a.modal ? (0, S.jsx)(La, {
              ...n,
              ref: r
            }) : (0, S.jsx)(Ia, {
              ...n,
              ref: r
            })
          })
        });
      za.displayName = ka;
      var La = k.forwardRef((e, r) => {
          const t = ga(ka, e.__scopeDialog),
            o = k.useRef(null),
            n = (0, kt.s)(r, t.contentRef, o);
          return k.useEffect(() => {
            const e = o.current;
            if (e) return (0, va.Eq)(e)
          }, []), (0, S.jsx)(Ta, {
            ...e,
            ref: n,
            trapFocus: t.open,
            disableOutsidePointerEvents: t.open,
            onCloseAutoFocus: (0, Dt.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Dt.mK)(e.onPointerDownOutside, e => {
              const r = e.detail.originalEvent,
                t = 0 === r.button && !0 === r.ctrlKey;
              (2 === r.button || t) && e.preventDefault()
            }),
            onFocusOutside: (0, Dt.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        Ia = k.forwardRef((e, r) => {
          const t = ga(ka, e.__scopeDialog),
            o = k.useRef(!1),
            n = k.useRef(!1);
          return (0, S.jsx)(Ta, {
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
        Ta = k.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            ...s
          } = e, i = ga(ka, t);
          return (0, fa.Oh)(), (0, S.jsx)(S.Fragment, {
            children: (0, S.jsx)(aa, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: n,
              onUnmountAutoFocus: a,
              children: (0, S.jsx)(Vt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Fa(i.open),
                ...s,
                ref: r,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        Ea = "DialogTitle",
        Va = k.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ga(Ea, t);
          return (0, S.jsx)(Lt.sG.h2, {
            id: n.titleId,
            ...o,
            ref: r
          })
        });
      Va.displayName = Ea;
      var Ma = "DialogDescription",
        Aa = k.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ga(Ma, t);
          return (0, S.jsx)(Lt.sG.p, {
            id: n.descriptionId,
            ...o,
            ref: r
          })
        });
      Aa.displayName = Ma;
      var qa = "DialogClose",
        Ha = k.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = ga(qa, t);
          return (0, S.jsx)(Lt.sG.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, Dt.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });

      function Fa(e) {
        return e ? "open" : "closed"
      }
      Ha.displayName = qa;
      const Ba = (0, k.createContext)({
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
              } = be();
              return e
            })(),
            p = (0, ve.rl)(),
            v = (0, k.useRef)(null),
            y = (0, k.useRef)(null),
            m = (0, k.useRef)(null),
            b = (0, k.useRef)(null),
            h = (0, k.useRef)(null),
            g = (0, k.useRef)(null),
            w = (0, k.useRef)(null),
            C = (0, k.useRef)(null),
            x = (0, k.useRef)(null),
            _ = (0, k.useRef)(null),
            j = (0, k.useRef)(null),
            O = (0, k.useRef)(null),
            P = (0, k.useRef)(null),
            R = (0, k.useRef)(null),
            N = (0, k.useRef)(null),
            D = (0, k.useRef)(null),
            z = (0, k.useRef)(null),
            L = (0, k.useRef)(null),
            I = (0, k.useRef)(null),
            [T = !1, E] = (0, ve.ic)({
              prop: r || o,
              onChange: t
            }),
            V = (0, k.useRef)(null);
          return V.current || (V.current = new _t({
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
          })), (0, S.jsx)(ut.Dk, {
            messages: ft,
            locale: f,
            children: (0, S.jsx)(Ba.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: y,
                thumbnailRef: m,
                openIconRef: b,
                overlayRef: h,
                contentRef: g,
                containerRef: w,
                zoomPanRef: C,
                imageRef: x,
                placeholderRef: _,
                captionRef: j,
                controlsRef: O,
                closeRef: P,
                zoomRef: R,
                zoomInRef: N,
                zoomSliderRef: D,
                zoomOutRef: z,
                resetRef: L,
                downloadRef: I,
                open: T,
                setOpen: E,
                altText: e,
                hideTrigger: c,
                slide: V.current
              },
              children: (0, S.jsx)(Ga, {
                ...u
              })
            })
          })
        },
        Xa = (0, k.createContext)({
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
        Ga = ({
          ...e
        }) => {
          const {
            open: r
          } = (0, k.useContext)(Ba), {
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
            } = (0, k.useContext)(Ba), p = (0, k.useRef)(null);
            p.current || (p.current = Zr.os.timeline({
              defaults: dt
            }));
            const v = (0, k.useCallback)(e => {
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
                }), d.current && i.current && (r.opening = !0, r.setup(i.current, d.current), r.zoomAndPanToInitial(), Zr.os.set([u.current, f.current], {
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
                }), Zr.os.set([f.current], {
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
                  [ct]: "none"
                }, {
                  opacity: () => r.getControlsOpacity(),
                  [ct]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), r.opening = !1, r.dispatch("zoom"), r.closing || await Kr(f.current), r.closing || (Zr.os.set([f.current], {
                  visibility: "visible",
                  ...lt
                }), Zr.os.set([u.current], {
                  visibility: "hidden",
                  ...lt
                }))))
              }),
              m = e(async () => {
                r.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              b = (0, k.useCallback)(async e => {
                e || (window.addEventListener("click", v), await m(), window.removeEventListener("click", v)), t(e)
              }, [t]),
              h = (0, k.useCallback)(() => b(!1), [b]);
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
            } = (0, Xr.L)(), {
              slide: t,
              imageRef: o,
              zoomPanRef: n,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, k.useContext)(Ba), d = r(async e => {
              t.zoomTo(e), Zr.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...lt
              })
            }), l = r(async () => {
              t.zoomTo(t.currZoomLevel + t.zoomLevels.step), Zr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...lt
              })
            }), c = r(async () => {
              t.zoomTo(t.currZoomLevel - t.zoomLevels.step), Zr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...lt
              })
            }), u = r(async () => {
              t.zoomAndPanToInitial(), Zr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...lt
              })
            }), f = r(async () => {
              if (t.closing) return;
              t.toggleControls();
              const e = t.getControlsOpacity(),
                r = 1 === e ? "auto" : "none";
              Zr.os.to([a.current], {
                opacity: e,
                [ct]: r,
                ...lt
              })
            }), p = r(async () => {
              Zr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...lt
              })
            }), v = (0, k.useCallback)(() => {
              o.current && n.current && (Zr.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...lt
              }), Zr.os.set([o.current, i.current], {
                ...t.getUpdatedContentSize(),
                ...lt
              }), Zr.os.set([s.current], {
                width: t.panAreaSize.w,
                height: t.panAreaSize.h
              }))
            }, []);
            return (0, k.useEffect)(() => (t.addEventListener("close", e), t.addEventListener("animate", p), t.addEventListener("toggle-controls", f), t.addEventListener("resize", v), window.addEventListener("resize", t.resize.bind(t)), () => {
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
          }), u = (0, I.v6)(e, {
            open: r,
            onOpenChange: t
          });
          return (0, S.jsx)(Xa.Provider, {
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
            children: (0, S.jsx)(wa, {
              ...u
            })
          })
        },
        Ka = (0, k.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const n = (0, ut.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, k.useContext)(Ba),
            d = (0, ve.UP)(a, o),
            l = (0, I.v6)(t, {
              "data-testid": e,
              "aria-label": n.formatMessage(Ot.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, S.jsx)(xa, {
            ref: d,
            ...l,
            children: (0, S.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, S.jsx)(ye.xV, {
                children: r
              })
            })
          })
        }),
        Wa = (0, k.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            thumbnailRef: n
          } = (0, k.useContext)(Ba), a = (0, ve.UP)(n, o), s = (0, I.v6)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = r ? ye.DX : "img";
          return (0, S.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ua = (0, k.forwardRef)(function({
          asChild: e,
          ...r
        }, t) {
          const {
            openIconRef: o
          } = (0, k.useContext)(Ba), n = (0, ve.UP)(o, t), a = (0, I.v6)(r, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? ye.DX : qe.Maximize2;
          return (0, S.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        $a = ({
          ...e
        }) => (0, S.jsx)(Pa, {
          ...e
        }),
        Ya = (0, k.forwardRef)(function({
          testId: e,
          ...r
        }, t) {
          const {
            overlayRef: o
          } = (0, k.useContext)(Ba), n = (0, ve.UP)(o, t), a = (0, I.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, S.jsx)(Na, {
            ref: n,
            ...a
          })
        }),
        Qa = (0, k.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            openAnim: n
          } = (0, k.useContext)(Xa), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, k.useContext)(Ba), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, k.useContext)(Ba), [r, t] = (0, k.useState)(e.getCursor()), o = (0, k.useCallback)(() => {
              t(e.getCursor())
            }, []);
            return (0, k.useEffect)(() => (e.addEventListener("zoom", o), () => {
              e.removeEventListener("zoom", o)
            }), [o]), {
              cursor: r
            }
          })(), l = [Ce.tokens, Ce.typography, Ce.grid, jt("dark")].join(" ");
          const c = (0, ve.UP)(a, o),
            u = (0, I.v6)(t, {
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
          return (0, S.jsxs)(za, {
            ref: c,
            ...u,
            children: [(0, S.jsx)(ye.s6, {
              children: (0, S.jsx)(Va, {
                children: s
              })
            }), r]
          })
        }),
        Ja = (0, k.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            containerRef: n
          } = (0, k.useContext)(Ba);
          (() => {
            const {
              contextSafe: e
            } = (0, Xr.L)(), {
              toggleControls: r
            } = (0, k.useContext)(Xa), {
              containerRef: t,
              zoomPanRef: o,
              overlayRef: n,
              controlsRef: a,
              slide: s
            } = (0, k.useContext)(Ba), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Zr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...lt
              }), Zr.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...lt
              }), Zr.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...lt
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Zr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...lt
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Zr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...lt
              }), Zr.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...lt
              }), Zr.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...lt
              })))
            }), c = (0, k.useCallback)(() => {
              s.controlsVisible || r()
            }, [, r]);
            (0, ve.iQ)({
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
          const a = (0, ve.UP)(n, o),
            s = (0, I.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, S.jsx)("div", {
            ref: a,
            ...s,
            children: (0, S.jsxs)(es, {
              children: [(0, S.jsx)(rs, {}), r]
            })
          })
        }),
        es = (0, k.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            zoomPanRef: n
          } = (0, k.useContext)(Ba), a = (0, ve.UP)(n, o), s = (0, I.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = r ? ye.DX : "div";
          return (0, S.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        rs = (0, k.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            placeholderRef: n
          } = (0, k.useContext)(Ba), a = (0, ve.UP)(n, o), s = (0, I.v6)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = r ? ye.DX : "img";
          return (0, S.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ts = (0, k.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            imageRef: n
          } = (0, k.useContext)(Ba), a = (0, ve.UP)(n, o), s = (0, I.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = r ? ye.DX : "img";
          return (0, S.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        os = (0, k.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            captionRef: n
          } = (0, k.useContext)(Ba), a = (0, ve.UP)(n, o), s = (0, I.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = r ? ye.DX : "p";
          return (0, S.jsx)(Aa, {
            asChild: !0,
            children: (0, S.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        ns = (0, k.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            controlsRef: n
          } = (0, k.useContext)(Ba);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: r,
              zoomOut: t,
              resetZoom: o,
              close: n
            } = (0, k.useContext)(Xa);
            (0, Jr.vC)(["+", "=", "add", "plus"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Jr.vC)(["minus", "subtract"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Jr.vC)("r", o, {
              enabled: e,
              preventDefault: !0
            }), (0, Jr.vC)("esc", n, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, ve.UP)(n, o),
            s = (0, I.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = r ? ye.DX : "div";
          return (0, S.jsx)(Jr.Hb, {
            children: (0, S.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        as = ({
          content: e,
          metadata: r,
          enabled: t = !0,
          children: o,
          ...n
        }) => {
          if (!t) return (0, S.jsx)(S.Fragment, {
            children: o
          });
          const a = (0, I.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, n);
          return (0, S.jsxs)(un, {
            delayDuration: 0,
            children: [(0, S.jsx)(fn, {
              children: o
            }), (0, S.jsxs)(pn, {
              ...a,
              children: [(0, S.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, r && (0, S.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: r
                })]
              }), (0, S.jsx)(vn, {})]
            })]
          })
        },
        ss = (0, k.forwardRef)(function({
          ...e
        }, r) {
          const t = (0, I.v6)(e, {
            isInline: !0
          });
          return (0, S.jsx)(Rt, {
            ref: r,
            ...t
          })
        }),
        is = (0, k.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          children: o,
          ...n
        }, a) {
          const s = (0, ut.tz)(),
            {
              zoomRef: i
            } = (0, k.useContext)(Ba),
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
              } = (0, k.useContext)(Ba), {
                zoomIn: r,
                zoomOut: t,
                zoomTo: o
              } = (0, k.useContext)(Xa), [n, a] = (0, k.useState)(!1), [s, i] = (0, k.useState)(!1), [d, l] = (0, k.useState)(0), [c, u] = (0, k.useState)(0), [f, p] = (0, k.useState)(0), v = (0, k.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), y = (0, k.useCallback)(([e]) => {
                o(e / 100)
              }, [o]);
              return (0, k.useEffect)(() => (e.addEventListener("zoom", v), () => {
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
            m = (0, ve.UP)(i, a),
            b = (0, I.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            h = r ? ye.DX : "div";
          return (0, S.jsxs)(h, {
            ref: m,
            ...b,
            children: [(0, S.jsx)(as, {
              side: "left",
              enabled: t,
              content: s.formatMessage(Ot.ZoomInButtonLabel),
              metadata: s.formatMessage(Ot.ZoomInButtonTooltip, {
                shortcut: (0, S.jsx)(ss, {
                  shortcut: "+"
                })
              }),
              children: (0, S.jsx)(ir, {
                label: s.formatMessage(Ot.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: it({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, S.jsxs)(kn, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, S.jsx)(Mn, {
                className: "foundry_1a74xwbu",
                children: (0, S.jsx)(qn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, S.jsx)(as, {
                side: "left",
                enabled: t,
                content: s.formatMessage(Ot.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, S.jsx)(Wn, {
                  className: "foundry_1a74xwbw",
                  children: (0, S.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, S.jsx)(as, {
              side: "left",
              enabled: t,
              content: s.formatMessage(Ot.ZoomOutButtonLabel),
              metadata: s.formatMessage(Ot.ZoomOutButtonTooltip, {
                shortcut: (0, S.jsx)(ss, {
                  shortcut: "-"
                })
              }),
              children: (0, S.jsx)(ir, {
                label: s.formatMessage(Ot.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: it({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, S.jsx)(ye.xV, {
              children: o
            })]
          })
        }),
        ds = (0, k.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          ...o
        }, n) {
          const a = (0, ut.tz)(),
            {
              closeRef: s
            } = (0, k.useContext)(Ba),
            i = (0, ve.UP)(s, n),
            d = (0, I.v6)(o, {
              "data-testid": e,
              className: st({
                styled: !r
              })
            }),
            l = r ? (0, S.jsx)(ye.DX, {
              ref: i,
              ...d
            }) : (0, S.jsx)(ir, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(Ot.CloseButtonLabel)
            });
          return (0, S.jsx)(as, {
            side: "right",
            enabled: t,
            content: a.formatMessage(Ot.CloseButtonLabel),
            metadata: a.formatMessage(Ot.CloseButtonTooltip, {
              shortcut: (0, S.jsx)(ss, {
                shortcut: "Esc"
              })
            }),
            children: (0, S.jsx)(Ha, {
              asChild: !0,
              children: l
            })
          })
        }),
        ls = (0, k.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, ut.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: r
              } = (0, k.useContext)(Ba), {
                contextSafe: t
              } = (0, Xr.L)(), {
                resetZoom: o
              } = (0, k.useContext)(Xa), [n, a] = (0, k.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = t(e => {
                Zr.os.to([r.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...lt
                })
              }), i = (0, k.useCallback)(() => {
                const r = e.currZoomLevel !== e.zoomLevels.initial;
                a(r), s(r)
              }, [a]);
              return (0, k.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !n,
                onPress: o,
                "aria-hidden": !n
              }
            })(),
            {
              resetRef: s
            } = (0, k.useContext)(Ba),
            i = (0, ve.UP)(s, o),
            d = (0, I.v6)(t, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, S.jsx)(as, {
            side: "left",
            enabled: r,
            content: n.formatMessage(Ot.ResetZoomButtonLabel),
            metadata: n.formatMessage(Ot.ResetZoomButtonTooltip, {
              shortcut: (0, S.jsx)(ss, {
                shortcut: "R"
              })
            }),
            children: (0, S.jsx)(ir, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: n.formatMessage(Ot.ResetZoomButtonLabel)
            })
          })
        }),
        cs = (0, k.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, ut.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, k.useContext)(Ba),
            i = (0, ve.UP)(a, o),
            d = (0, I.v6)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, S.jsx)(as, {
            side: "left",
            enabled: r,
            content: n.formatMessage(Ot.DownloadButtonTooltip),
            children: (0, S.jsx)(ir, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: n.formatMessage(Ot.DownloadButtonTooltip),
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
        us = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var fs = t(98905);

      function ps(e) {
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

      function vs(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ys(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? vs(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ps(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vs(Object(t)).forEach(function(r) {
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
      var bs = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        hs = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ys(ys({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bs(l, o, e.defaultVariants) && (t += " " + c);
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
        gs = t(36616);
      const ws = (0, k.createContext)(null);

      function Cs() {
        const e = (0, k.useContext)(ws);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const xs = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          descriptionId: o = "",
          errorId: n = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, I.v6)({
              className: hs({
                status: a
              }),
              "data-testid": r
            }, s),
            l = t ? ye.DX : "div";
          return (0, S.jsx)(ws.Provider, {
            value: {
              descriptionId: o,
              errorId: n,
              status: a,
              ...s
            },
            children: (0, S.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        _s = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const {
            status: n
          } = Cs(), a = (0, I.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, t), s = {
            success: gs.Check,
            invalid: gs.X,
            neutral: gs.TriangleAlert
          }, i = r ? ye.DX : s[n];
          return (0, S.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        js = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            errorId: s
          } = Cs(), i = (0, I.v6)({
            "data-testid": r,
            id: s || a
          }, o), d = t ? ye.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        });
      var Os = "ScrollArea",
        [Ps, Rs] = (0, zt.A)(Os),
        [Ns, Ss] = Ps(Os),
        Ds = k.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            type: o = "hover",
            dir: n,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = k.useState(null), [l, c] = k.useState(null), [u, f] = k.useState(null), [p, v] = k.useState(null), [y, m] = k.useState(null), [b, h] = k.useState(0), [g, w] = k.useState(0), [C, x] = k.useState(!1), [_, j] = k.useState(!1), O = (0, kt.s)(r, d), P = (0, bn.jH)(n);
          return (0, S.jsx)(Ns, {
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
            scrollbarXEnabled: C,
            onScrollbarXEnabledChange: x,
            scrollbarY: y,
            onScrollbarYChange: m,
            scrollbarYEnabled: _,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: h,
            onCornerHeightChange: w,
            children: (0, S.jsx)(Lt.sG.div, {
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
      Ds.displayName = Os;
      var ks = "ScrollAreaViewport",
        zs = k.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            children: o,
            nonce: n,
            ...a
          } = e, s = Ss(ks, t), i = k.useRef(null), d = (0, kt.s)(r, i, s.onViewportChange);
          return (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(Ls, {
              nonce: n
            }), (0, S.jsx)(Lt.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, S.jsx)("div", {
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
      zs.displayName = ks;
      var Ls = k.memo(({
          nonce: e
        }) => (0, S.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, r) => e.nonce === r.nonce),
        Is = "ScrollAreaScrollbar",
        Ts = k.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ss(Is, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = n, i = "horizontal" === e.orientation;
          return k.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === n.type ? (0, S.jsx)(Es, {
            ...o,
            ref: r,
            forceMount: t
          }) : "scroll" === n.type ? (0, S.jsx)(Vs, {
            ...o,
            ref: r,
            forceMount: t
          }) : "auto" === n.type ? (0, S.jsx)(Ms, {
            ...o,
            ref: r,
            forceMount: t
          }) : "always" === n.type ? (0, S.jsx)(As, {
            ...o,
            ref: r,
            "data-state": "visible"
          }) : null
        });
      Ts.displayName = Is;
      var Es = k.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ss(Is, e.__scopeScrollArea), [a, s] = k.useState(!1);
          return k.useEffect(() => {
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
          }, [n.scrollArea, n.scrollHideDelay]), (0, S.jsx)(xo, {
            present: t || a,
            children: (0, S.jsx)(Ms, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: r
            })
          })
        }),
        Vs = k.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ss(Is, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = ni(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, k.useReducer((e, r) => l[e][r] ?? e, "hidden"));
          var l;
          return k.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), n.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, n.scrollHideDelay, d]), k.useEffect(() => {
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
          }, [n.viewport, a, d, s]), (0, S.jsx)(xo, {
            present: t || "hidden" !== i,
            children: (0, S.jsx)(As, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...o,
              ref: r,
              onPointerEnter: (0, Dt.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, Dt.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Ms = k.forwardRef((e, r) => {
          const t = Ss(Is, e.__scopeScrollArea),
            {
              forceMount: o,
              ...n
            } = e,
            [a, s] = k.useState(!1),
            i = "horizontal" === e.orientation,
            d = ni(() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(i ? e : r)
              }
            }, 10);
          return ai(t.viewport, d), ai(t.content, d), (0, S.jsx)(xo, {
            present: o || a,
            children: (0, S.jsx)(As, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: r
            })
          })
        }),
        As = k.forwardRef((e, r) => {
          const {
            orientation: t = "vertical",
            ...o
          } = e, n = Ss(Is, e.__scopeScrollArea), a = k.useRef(null), s = k.useRef(0), [i, d] = k.useState({
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
          return "horizontal" === t ? (0, S.jsx)(qs, {
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
          }) : "vertical" === t ? (0, S.jsx)(Hs, {
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
        qs = k.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = Ss(Is, e.__scopeScrollArea), [s, i] = k.useState(), d = k.useRef(null), l = (0, kt.s)(r, d, a.onScrollbarXChange);
          return k.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, S.jsx)(Zs, {
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
        Hs = k.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = Ss(Is, e.__scopeScrollArea), [s, i] = k.useState(), d = k.useRef(null), l = (0, kt.s)(r, d, a.onScrollbarYChange);
          return k.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, S.jsx)(Zs, {
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
        [Fs, Bs] = Ps(Is),
        Zs = k.forwardRef((e, r) => {
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
          } = e, p = Ss(Is, t), [v, y] = k.useState(null), m = (0, kt.s)(r, y), b = k.useRef(null), h = k.useRef(""), g = p.viewport, w = o.content - o.viewport, C = (0, It.c)(c), x = (0, It.c)(d), _ = ni(u, 10);

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
          return k.useEffect(() => {
            const e = e => {
              const r = e.target,
                t = v?.contains(r);
              t && C(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, v, w, C]), k.useEffect(x, [o, x]), ai(v, _), ai(p.content, _), (0, S.jsx)(Fs, {
            scope: t,
            scrollbar: v,
            hasThumb: n,
            onThumbChange: (0, It.c)(a),
            onThumbPointerUp: (0, It.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, It.c)(i),
            children: (0, S.jsx)(Lt.sG.div, {
              ...f,
              ref: m,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Dt.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = v.getBoundingClientRect(), h.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, Dt.mK)(e.onPointerMove, j),
              onPointerUp: (0, Dt.mK)(e.onPointerUp, e => {
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = h.current, p.viewport && (p.viewport.style.scrollBehavior = ""), b.current = null
              })
            })
          })
        }),
        Xs = "ScrollAreaThumb",
        Gs = k.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Bs(Xs, e.__scopeScrollArea);
          return (0, S.jsx)(xo, {
            present: t || n.hasThumb,
            children: (0, S.jsx)(Ks, {
              ref: r,
              ...o
            })
          })
        }),
        Ks = k.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            style: o,
            ...n
          } = e, a = Ss(Xs, t), s = Bs(Xs, t), {
            onThumbPositionChange: i
          } = s, d = (0, kt.s)(r, s.onThumbChange), l = k.useRef(void 0), c = ni(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return k.useEffect(() => {
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
          }, [a.viewport, c, i]), (0, S.jsx)(Lt.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...n,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: (0, Dt.mK)(e.onPointerDownCapture, e => {
              const r = e.target.getBoundingClientRect(),
                t = e.clientX - r.left,
                o = e.clientY - r.top;
              s.onThumbPointerDown({
                x: t,
                y: o
              })
            }),
            onPointerUp: (0, Dt.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Gs.displayName = Xs;
      var Ws = "ScrollAreaCorner",
        Us = k.forwardRef((e, r) => {
          const t = Ss(Ws, e.__scopeScrollArea),
            o = Boolean(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && o ? (0, S.jsx)($s, {
            ...e,
            ref: r
          }) : null
        });
      Us.displayName = Ws;
      var $s = k.forwardRef((e, r) => {
        const {
          __scopeScrollArea: t,
          ...o
        } = e, n = Ss(Ws, t), [a, s] = k.useState(0), [i, d] = k.useState(0), l = Boolean(a && i), {
          onCornerWidthChange: c,
          onCornerHeightChange: u
        } = n;
        return ai(n.scrollbarX, () => {
          const e = n.scrollbarX?.offsetHeight || 0;
          n.onCornerHeightChange(e), d(e)
        }), ai(n.scrollbarY, () => {
          const e = n.scrollbarY?.offsetWidth || 0;
          n.onCornerWidthChange(e), s(e)
        }), k.useEffect(() => () => {
          c(0), u(0)
        }, [c, u]), l ? (0, S.jsx)(Lt.sG.div, {
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
          l = (0, mn.q)(e, d);
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
        const t = (0, It.c)(e),
          o = k.useRef(0);
        return k.useEffect(() => () => window.clearTimeout(o.current), []), k.useCallback(() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(t, r)
        }, [t, r])
      }

      function ai(e, r) {
        const t = (0, It.c)(r);
        (0, Ut.N)(() => {
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
      var si = Ds,
        ii = zs,
        di = Ts,
        li = Gs,
        ci = Us,
        ui = [" ", "Enter", "ArrowUp", "ArrowDown"],
        fi = [" ", "Enter"],
        pi = "Select",
        [vi, yi, mi] = gn(pi),
        [bi, hi] = (0, zt.A)(pi, [mi, Jt]),
        gi = Jt(),
        [wi, Ci] = bi(pi),
        [xi, _i] = bi(pi);

      function ji(e) {
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
        } = e, m = gi(r), [b, h] = k.useState(null), [g, w] = k.useState(null), [C, x] = k.useState(!1), _ = (0, bn.jH)(l), [j, O] = (0, Po.i)({
          prop: o,
          defaultProp: n ?? !1,
          onChange: a,
          caller: pi
        }), [P, R] = (0, Po.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: pi
        }), N = k.useRef(null), D = k.useRef(P);
        k.useEffect(() => {
          const e = v ? b?.ownerDocument.getElementById(v) : b?.form;
          if (e instanceof HTMLFormElement) {
            const r = () => R(D.current);
            return e.addEventListener("reset", r), () => e.removeEventListener("reset", r)
          }
        }, [v, b, R]);
        const z = !b || !!v || !!b.closest("form"),
          [L, I] = k.useState(new Set),
          T = (0, Zt.B)(),
          E = Array.from(L).map(e => e.props.value).join(";"),
          V = k.useCallback(e => {
            I(r => new Set(r).add(e))
          }, []),
          M = k.useCallback(e => {
            I(r => {
              const t = new Set(r);
              return t.delete(e), t
            })
          }, []),
          A = {
            required: p,
            trigger: b,
            onTriggerChange: h,
            valueNode: g,
            onValueNodeChange: w,
            valueNodeHasChildren: C,
            onValueNodeHasChildrenChange: x,
            contentId: T,
            value: P,
            onValueChange: R,
            open: j,
            onOpenChange: O,
            dir: _,
            triggerPointerDownPosRef: N,
            disabled: f,
            name: c,
            autoComplete: u,
            form: v,
            nativeOptions: L,
            nativeSelectKey: E,
            isFormControl: z
          };
        return (0, S.jsx)(mo, {
          ...m,
          children: (0, S.jsx)(wi, {
            scope: r,
            ...A,
            children: (0, S.jsx)(vi.Provider, {
              scope: r,
              children: (0, S.jsx)(xi, {
                scope: r,
                onNativeOptionAdd: V,
                onNativeOptionRemove: M,
                children: fd(y) ? y(A) : t
              })
            })
          })
        })
      }
      ji.displayName = "SelectProvider";
      var Oi = e => {
        const {
          __scopeSelect: r,
          children: t,
          ...o
        } = e;
        return (0, S.jsx)(ji, {
          __scopeSelect: r,
          ...o,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, S.jsxs)(S.Fragment, {
            children: [t, e ? (0, S.jsx)(ud, {
              __scopeSelect: r
            }) : null]
          })
        })
      };
      Oi.displayName = pi;
      var Pi = "SelectTrigger",
        Ri = k.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            disabled: o = !1,
            ...n
          } = e, a = gi(t), s = Ci(Pi, t), i = s.disabled || o, d = (0, kt.s)(r, s.onTriggerChange), l = yi(t), c = k.useRef("touch"), [u, f, p] = vd(e => {
            const r = l().filter(e => !e.disabled),
              t = r.find(e => e.value === s.value),
              o = yd(r, e, t);
            void 0 !== o && s.onValueChange(o.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, S.jsx)(bo, {
            asChild: !0,
            ...a,
            children: (0, S.jsx)(Lt.sG.button, {
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
              "data-placeholder": pd(s.value) ? "" : void 0,
              ...n,
              ref: d,
              onClick: (0, Dt.mK)(n.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, Dt.mK)(n.onPointerDown, e => {
                c.current = e.pointerType;
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, Dt.mK)(n.onKeyDown, e => {
                const r = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), r && " " === e.key || ui.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      Ri.displayName = Pi;
      var Ni = "SelectValue",
        Si = k.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Ci(Ni, t), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, kt.s)(r, d.onValueNodeChange);
          (0, Ut.N)(() => {
            l(c)
          }, [l, c]);
          const f = pd(d.value);
          return (0, S.jsx)(Lt.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, S.jsx)(k.Fragment, {
              children: f ? s : a
            }, f ? "placeholder" : "value")
          })
        });
      Si.displayName = Ni;
      var Di = k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          ...n
        } = e;
        return (0, S.jsx)(Lt.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          children: o || "▼"
        })
      });
      Di.displayName = "SelectIcon";
      var ki = "SelectPortal",
        [zi, Li] = bi(ki, {
          forceMount: void 0
        }),
        Ii = e => {
          const {
            __scopeSelect: r,
            forceMount: t,
            ...o
          } = e;
          return (0, S.jsx)(zi, {
            scope: e.__scopeSelect,
            forceMount: t,
            children: (0, S.jsx)(Co, {
              asChild: !0,
              ...o
            })
          })
        };
      Ii.displayName = ki;
      var Ti = "SelectContent",
        Ei = k.forwardRef((e, r) => {
          const t = Li(Ti, e.__scopeSelect),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = Ci(Ti, e.__scopeSelect),
            [s, i] = k.useState();
          return (0, Ut.N)(() => {
            i(new DocumentFragment)
          }, []), (0, S.jsx)(xo, {
            present: o || a.open,
            children: ({
              present: e
            }) => e ? (0, S.jsx)(Fi, {
              ...n,
              ref: r
            }) : (0, S.jsx)(Vi, {
              ...n,
              fragment: s
            })
          })
        });
      Ei.displayName = Ti;
      var Vi = k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          fragment: n
        } = e;
        return n ? wo.createPortal((0, S.jsx)(Ai, {
          scope: t,
          children: (0, S.jsx)(vi.Slot, {
            scope: t,
            children: (0, S.jsx)("div", {
              ref: r,
              children: o
            })
          })
        }), n) : null
      });
      Vi.displayName = "SelectContentFragment";
      var Mi = 10,
        [Ai, qi] = bi(Ti),
        Hi = (0, Oo.TL)("SelectContent.RemoveScroll"),
        Fi = k.forwardRef((e, r) => {
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
          } = e, h = Ci(Ti, t), [g, w] = k.useState(null), [C, x] = k.useState(null), _ = (0, kt.s)(r, w), [j, O] = k.useState(null), [P, R] = k.useState(null), N = yi(t), [D, z] = k.useState(!1), L = k.useRef(!1);
          k.useEffect(() => {
            if (g) return (0, va.Eq)(g)
          }, [g]), (0, fa.Oh)();
          const I = k.useCallback(e => {
              const [r, ...t] = N().map(e => e.ref.current), [o] = t.slice(-1), n = document.activeElement;
              for (const t of e) {
                if (t === n) return;
                if (t?.scrollIntoView({
                    block: "nearest"
                  }), t === r && C && (C.scrollTop = 0), t === o && C && (C.scrollTop = C.scrollHeight), t?.focus(), document.activeElement !== n) return
              }
            }, [N, C]),
            T = k.useCallback(() => I([j, g]), [I, j, g]);
          k.useEffect(() => {
            D && T()
          }, [D, T]);
          const {
            onOpenChange: E,
            triggerPointerDownPosRef: V
          } = h;
          k.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? t.preventDefault() : t.composedPath().includes(g) || E(!1), document.removeEventListener("pointermove", r), V.current = null
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
          }, [g, E, V]), k.useEffect(() => {
            const e = () => E(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [E]);
          const [M, A] = vd(e => {
            const r = N().filter(e => !e.disabled),
              t = r.find(e => e.ref.current === document.activeElement),
              o = yd(r, e, t);
            o && setTimeout(() => o.ref.current?.focus())
          }), q = k.useCallback((e, r, t) => {
            const o = !L.current && !t;
            (void 0 !== h.value && h.value === r || o) && (O(e), o && (L.current = !0))
          }, [h.value]), H = k.useCallback(() => g?.focus(), [g]), F = k.useCallback((e, r, t) => {
            const o = !L.current && !t;
            (void 0 !== h.value && h.value === r || o) && R(e)
          }, [h.value]), B = "popper" === o ? Zi : Bi, Z = B === Zi ? {
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
          return (0, S.jsx)(Ai, {
            scope: t,
            content: g,
            viewport: C,
            onViewportChange: x,
            itemRefCallback: q,
            selectedItem: j,
            onItemLeave: H,
            itemTextRefCallback: F,
            focusSelectedItem: T,
            selectedItemText: P,
            position: o,
            isPositioned: D,
            searchRef: M,
            children: (0, S.jsx)(pa.A, {
              as: Hi,
              allowPinchZoom: !0,
              children: (0, S.jsx)(aa, {
                asChild: !0,
                trapped: h.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Dt.mK)(n, e => {
                  h.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, S.jsx)(Vt, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => h.onOpenChange(!1),
                  children: (0, S.jsx)(B, {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...Z,
                    onPlaced: () => z(!0),
                    ref: _,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, Dt.mK)(b.onKeyDown, e => {
                      const r = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), r || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const r = N().filter(e => !e.disabled);
                        let t = r.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const r = e.target,
                            o = t.indexOf(r);
                          t = t.slice(o + 1)
                        }
                        setTimeout(() => I(t)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      Fi.displayName = "SelectContentImpl";
      var Bi = k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onPlaced: o,
          ...n
        } = e, a = Ci(Ti, t), s = qi(Ti, t), [i, d] = k.useState(null), [l, c] = k.useState(null), u = (0, kt.s)(r, c), f = yi(t), p = k.useRef(!1), v = k.useRef(!0), {
          viewport: y,
          selectedItem: m,
          selectedItemText: b,
          focusSelectedItem: h
        } = s, g = k.useCallback(() => {
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
                c = window.innerWidth - Mi,
                u = (0, mn.q)(a, [Mi, Math.max(Mi, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const o = r.right - n.right,
                a = window.innerWidth - t.right - o,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - Mi,
                u = (0, mn.q)(a, [Mi, Math.max(Mi, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * Mi,
              c = y.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              h = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = v + h + c + parseInt(u.paddingBottom, 10) + g,
              C = Math.min(5 * m.offsetHeight, w),
              x = window.getComputedStyle(y),
              _ = parseInt(x.paddingTop, 10),
              j = parseInt(x.paddingBottom, 10),
              O = e.top + e.height / 2 - Mi,
              P = d - O,
              R = m.offsetHeight / 2,
              N = v + h + (m.offsetTop + R),
              S = w - N;
            if (N <= O) {
              const e = s.length > 0 && m === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const r = l.clientHeight - y.offsetTop - y.offsetHeight,
                t = N + Math.max(P, R + (e ? j : 0) + r + g);
              i.style.height = t + "px"
            } else {
              const e = s.length > 0 && m === s[0].ref.current;
              i.style.top = "0px";
              const r = Math.max(O, v + y.offsetTop + (e ? _ : 0) + R) + S;
              i.style.height = r + "px", y.scrollTop = N - O + y.offsetTop
            }
            i.style.margin = `${Mi}px 0`, i.style.minHeight = C + "px", i.style.maxHeight = d + "px", o?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, y, m, b, a.dir, o]);
        (0, Ut.N)(() => g(), [g]);
        const [w, C] = k.useState();
        (0, Ut.N)(() => {
          l && C(window.getComputedStyle(l).zIndex)
        }, [l]);
        const x = k.useCallback(e => {
          e && !0 === v.current && (g(), h?.(), v.current = !1)
        }, [g, h]);
        return (0, S.jsx)(Xi, {
          scope: t,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: x,
          children: (0, S.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, S.jsx)(Lt.sG.div, {
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
      Bi.displayName = "SelectItemAlignedPosition";
      var Zi = k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          align: o = "start",
          collisionPadding: n = Mi,
          ...a
        } = e, s = gi(t);
        return (0, S.jsx)(ho, {
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
      Zi.displayName = "SelectPopperPosition";
      var [Xi, Gi] = bi(Ti, {}), Ki = "SelectViewport", Wi = k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          nonce: o,
          ...n
        } = e, a = qi(Ki, t), s = Gi(Ki, t), i = (0, kt.s)(r, a.onViewportChange), d = k.useRef(0);
        return (0, S.jsxs)(S.Fragment, {
          children: [(0, S.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, S.jsx)(vi.Slot, {
            scope: t,
            children: (0, S.jsx)(Lt.sG.div, {
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
              onScroll: (0, Dt.mK)(n.onScroll, e => {
                const r = e.currentTarget,
                  {
                    contentWrapper: t,
                    shouldExpandOnScrollRef: o
                  } = s;
                if (o?.current && t) {
                  const e = Math.abs(d.current - r.scrollTop);
                  if (e > 0) {
                    const o = window.innerHeight - 2 * Mi,
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
      Wi.displayName = Ki;
      var Ui = "SelectGroup",
        [$i, Yi] = bi(Ui);
      k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = (0, Zt.B)();
        return (0, S.jsx)($i, {
          scope: t,
          id: n,
          children: (0, S.jsx)(Lt.sG.div, {
            role: "group",
            "aria-labelledby": n,
            ...o,
            ref: r
          })
        })
      }).displayName = Ui;
      var Qi = "SelectLabel";
      k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = Yi(Qi, t);
        return (0, S.jsx)(Lt.sG.div, {
          id: n.id,
          ...o,
          ref: r
        })
      }).displayName = Qi;
      var Ji = "SelectItem",
        [ed, rd] = bi(Ji),
        td = k.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            value: o,
            disabled: n = !1,
            textValue: a,
            ...s
          } = e, i = Ci(Ji, t), d = qi(Ji, t), l = i.value === o, [c, u] = k.useState(a ?? ""), [f, p] = k.useState(!1), v = (0, It.c)(e => d.itemRefCallback?.(e, o, n)), y = (0, kt.s)(r, v), m = (0, Zt.B)(), b = k.useRef("touch"), h = () => {
            n || (i.onValueChange(o), i.onOpenChange(!1))
          };
          return (0, S.jsx)(ed, {
            scope: t,
            value: o,
            disabled: n,
            textId: m,
            isSelected: l,
            onItemTextChange: k.useCallback(e => {
              u(r => r || (e?.textContent ?? "").trim())
            }, []),
            children: (0, S.jsx)(vi.ItemSlot, {
              scope: t,
              value: o,
              disabled: n,
              textValue: c,
              children: (0, S.jsx)(Lt.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": n || void 0,
                "data-disabled": n ? "" : void 0,
                tabIndex: n ? void 0 : -1,
                ...s,
                ref: y,
                onFocus: (0, Dt.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Dt.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Dt.mK)(s.onClick, () => {
                  "mouse" !== b.current && h()
                }),
                onPointerUp: (0, Dt.mK)(s.onPointerUp, () => {
                  "mouse" === b.current && h()
                }),
                onPointerDown: (0, Dt.mK)(s.onPointerDown, e => {
                  b.current = e.pointerType
                }),
                onPointerMove: (0, Dt.mK)(s.onPointerMove, e => {
                  b.current = e.pointerType, n ? d.onItemLeave?.() : "mouse" === b.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Dt.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, Dt.mK)(s.onKeyDown, e => {
                  n || e.target !== e.currentTarget || "" !== d.searchRef?.current && " " === e.key || (fi.includes(e.key) && h(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      td.displayName = Ji;
      var od = "SelectItemText",
        nd = k.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            ...a
          } = e, s = Ci(od, t), i = qi(od, t), d = rd(od, t), l = _i(od, t), [c, u] = k.useState(null), f = (0, It.c)(e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = (0, kt.s)(r, u, d.onItemTextChange, f), v = c?.textContent, y = k.useMemo(() => (0, S.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: v
          }, d.value), [d.disabled, d.value, v]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: b
          } = l;
          return (0, Ut.N)(() => (m(y), () => b(y)), [m, b, y]), (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(Lt.sG.span, {
              id: d.textId,
              ...a,
              ref: p
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !pd(s.value) ? wo.createPortal(a.children, s.valueNode) : null]
          })
        });
      nd.displayName = od;
      var ad = "SelectItemIndicator";
      k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return rd(ad, t).isSelected ? (0, S.jsx)(Lt.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: r
        }) : null
      }).displayName = ad;
      var sd = "SelectScrollUpButton";
      k.forwardRef((e, r) => {
        const t = qi(sd, e.__scopeSelect),
          o = Gi(sd, e.__scopeSelect),
          [n, a] = k.useState(!1),
          s = (0, kt.s)(r, o.onScrollButtonChange);
        return (0, Ut.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollTop > 0;
              a(e)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, S.jsx)(dd, {
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
      }).displayName = sd;
      var id = "SelectScrollDownButton";
      k.forwardRef((e, r) => {
        const t = qi(id, e.__scopeSelect),
          o = Gi(id, e.__scopeSelect),
          [n, a] = k.useState(!1),
          s = (0, kt.s)(r, o.onScrollButtonChange);
        return (0, Ut.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollHeight - r.clientHeight,
                t = Math.ceil(r.scrollTop) < e;
              a(t)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, S.jsx)(dd, {
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
      }).displayName = id;
      var dd = k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onAutoScroll: o,
          ...n
        } = e, a = qi("SelectScrollButton", t), s = k.useRef(null), i = yi(t), d = k.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return k.useEffect(() => () => d(), [d]), (0, Ut.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, S.jsx)(Lt.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          style: {
            flexShrink: 0,
            ...n.style
          },
          onPointerDown: (0, Dt.mK)(n.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerMove: (0, Dt.mK)(n.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerLeave: (0, Dt.mK)(n.onPointerLeave, () => {
            d()
          })
        })
      });
      k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return (0, S.jsx)(Lt.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: r
        })
      }).displayName = "SelectSeparator";
      var ld = "SelectArrow";
      k.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = gi(t);
        return "popper" === qi(ld, t).position ? (0, S.jsx)(go, {
          ...n,
          ...o,
          ref: r
        }) : null
      }).displayName = ld;
      var cd = "SelectBubbleInput",
        ud = k.forwardRef(({
          __scopeSelect: e,
          ...r
        }, t) => {
          const o = Ci(cd, e),
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
            p = k.useRef(null),
            v = (0, kt.s)(t, p),
            y = n ?? "",
            m = (0, hn.Z)(y),
            b = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return k.useEffect(() => {
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
          }, [m, y]), (0, S.jsxs)(Lt.sG.select, {
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
              ...Ro.Qg,
              ...r.style
            },
            ref: v,
            defaultValue: y,
            children: [pd(n) && !b ? (0, S.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function fd(e) {
        return "function" == typeof e
      }

      function pd(e) {
        return "" === e || void 0 === e
      }

      function vd(e) {
        const r = (0, It.c)(e),
          t = k.useRef(""),
          o = k.useRef(0),
          n = k.useCallback(e => {
            const n = t.current + e;
            r(n),
              function e(r) {
                t.current = r, window.clearTimeout(o.current), "" !== r && (o.current = window.setTimeout(() => e(""), 1e3))
              }(n)
          }, [r]),
          a = k.useCallback(() => {
            t.current = "", window.clearTimeout(o.current)
          }, []);
        return k.useEffect(() => () => window.clearTimeout(o.current), []), [t, n, a]
      }

      function yd(e, r, t) {
        const o = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
          n = t ? e.indexOf(t) : -1;
        let a = (s = e, i = Math.max(n, 0), s.map((e, r) => s[(i + r) % s.length]));
        var s, i;
        1 === o.length && (a = a.filter(e => e !== t));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
        return d !== t ? d : void 0
      }

      function md(e) {
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

      function bd(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function hd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? bd(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = md(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bd(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function gd(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      ud.displayName = cd;
      var wd = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Cd = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = hd(hd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) wd(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gd(e.variantClassNames, e => gd(e, e => e.split(" ")[0]))
            }
          }, r
        },
        xd = Cd({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        _d = Cd({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jd = Cd({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Od = Cd({
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
        Pd = Cd({
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
        Rd = Cd({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Nd = (0, k.createContext)(null);

      function Sd() {
        const e = (0, k.useContext)(Nd);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Dd = (0, k.forwardRef)(({
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
          const m = (0, k.useRef)(null),
            b = (0, ve.UP)(m, y),
            h = (0, k.useId)(),
            g = (0, k.useId)(),
            w = (0, k.useId)(),
            C = (0, k.useId)(),
            x = (0, k.useId)(),
            _ = (0, k.useId)(),
            j = (0, k.useRef)(null),
            O = (0, k.useRef)(null),
            P = (0, k.useRef)(null),
            [R = !1, N] = (0, ve.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            D = (0, I.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": r
            }, v);
          return (0, S.jsx)(Nd.Provider, {
            value: {
              labelId: h,
              errorId: g,
              descriptionId: w,
              triggerId: _,
              hintId: C,
              popoverId: x,
              labelRef: j,
              descriptionRef: O,
              hintRef: P,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: R,
              setIsOpen: N,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: t,
              isDisabled: o,
              isReadOnly: n,
              status: p,
              size: f
            },
            children: (0, S.jsx)(Oi, {
              required: t,
              disabled: o,
              open: R,
              onOpenChange: () => N(!n && !R),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, S.jsx)("div", {
                ref: b,
                ...D,
                children: e
              })
            })
          })
        }),
        kd = (0, k.forwardRef)(({
          hideDividers: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            popoverId: a
          } = Sd(), s = (0, I.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: xd({
              hideDividers: e
            }),
            "data-testid": t
          }, o);
          return (0, S.jsx)(Ei, {
            ...s,
            ref: n,
            children: (0, S.jsx)(Wi, {
              className: "foundry_uaq1gwn",
              children: r
            })
          })
        }),
        zd = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e
          }, r);
          return (0, S.jsx)(Wi, {
            ref: t,
            ...o
          })
        }),
        Ld = (0, k.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": r
          }, t);
          return (0, S.jsxs)(si, {
            ...n,
            ref: o,
            children: [(0, S.jsx)(zd, {
              asChild: !0,
              children: (0, S.jsx)(ii, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, S.jsx)(di, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, S.jsx)(li, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Id = (0, k.forwardRef)(({
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
          } = Sd(), {
            isPressed: w,
            pressProps: C
          } = (0, fs.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [x, _] = (0, k.useState)(!1), [j, O] = (0, k.useState)(!1);
          (0, k.useEffect)(() => {
            _(!!y.current || !!b.current), O(!!m.current)
          }, []);
          const P = (0, I.v6)({
              id: f,
              className: Pd({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": x ? (0, I.VW)(t, c, u) : t,
              "aria-describedby": j ? (0, I.VW)(o, v) : o,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": h ? "open" : "closed",
              "data-testid": r,
              "data-pressed": !!w
            }, (0, I.cJ)(C, "onKeyDown"), a),
            R = n ? ye.DX : Ri;
          return (0, S.jsx)(R, {
            ...P,
            ref: s,
            children: e
          })
        }),
        Td = (0, k.forwardRef)(({
          placeholder: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": t
            }, o),
            s = r ? ye.DX : "span";
          return (0, S.jsx)(s, {
            ...a,
            ref: n,
            children: (0, S.jsx)(Si, {
              placeholder: e
            })
          })
        }),
        Ed = (0, k.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const {
            isDisabled: n,
            isReadOnly: a,
            isOpen: s
          } = Sd(), i = s ? qe.ChevronUp : qe.ChevronDown, d = (0, I.v6)({
            asChild: !0,
            className: Rd({
              isDisabled: a || n
            }),
            "data-testid": r
          }, t);
          return (0, S.jsx)(Di, {
            ...d,
            ref: o,
            children: e || (0, S.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Vd = (0, k.forwardRef)(({
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
          } = Sd(), f = i && !n, p = (0, ve.UP)(c, s), v = (0, I.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: Od({
              showAsterisk: f,
              isDisabled: d
            })
          }, a), y = r ? ye.DX : "label";
          return (0, S.jsx)(ye.s6, {
            enabled: o,
            children: (0, S.jsx)(y, {
              ...v,
              ref: p,
              children: t
            })
          })
        }),
        Md = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = Sd(), d = (0, ve.UP)(i, n), l = (0, I.v6)({
            className: _d({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), c = t ? ye.DX : "div";
          return (0, S.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        Ad = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = Sd(), d = (0, ve.UP)(s, n), l = (0, I.v6)({
            className: jd({
              isDisabled: i
            }),
            "data-testid": t,
            id: a
          }, o), c = r ? ye.DX : "div";
          return (0, S.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        qd = (0, k.forwardRef)(({
          children: e,
          value: r,
          isDisabled: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, k.useRef)(null),
            i = (0, ve.UP)(s, a),
            d = (0, I.v6)({
              value: r,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: t,
              "data-testid": o
            }, n);
          return (0, S.jsx)(td, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Hd = (0, k.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": r
          }, t);
          return (0, S.jsx)(nd, {
            ref: o,
            asChild: !0,
            children: (0, S.jsx)("span", {
              ...n,
              children: e
            })
          })
        }),
        Fd = (0, k.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
            className: "foundry_uaq1gws",
            "data-testid": r
          }, t);
          return (0, S.jsx)(Di, {
            asChild: !0,
            ...n,
            ref: o,
            children: e
          })
        }),
        Bd = Ii,
        Zd = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Sd(), i = (0, I.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? ye.DX : xs;
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Xd = _s,
        Gd = js;
      var Kd = t(83588),
        Wd = t(56728);

      function Ud(e) {
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

      function $d(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Yd(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? $d(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ud(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $d(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Qd(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Jd = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        el = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Yd(Yd({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Jd(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qd(e.variantClassNames, e => Qd(e, e => e.split(" ")[0]))
            }
          }, r
        },
        rl = el({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tl = el({
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
        ol = el({
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
        nl = el({
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
        al = el({
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
      const sl = (0, k.createContext)(null);

      function il() {
        const e = (0, k.useContext)(sl);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const dl = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: o,
          children: n,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, I.v6)({
              "data-testid": t,
              className: "foundry_okz6z20"
            }, i),
            c = o ? ye.DX : "div",
            u = (0, k.useId)(),
            f = (0, k.useId)(),
            p = (0, k.useId)();
          return (0, S.jsx)(sl.Provider, {
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
            children: (0, S.jsx)(c, {
              ...l,
              ref: d,
              children: n
            })
          })
        }),
        ll = (0, k.forwardRef)(({
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
          const p = (0, k.useRef)(null),
            v = (0, ve.UP)(p, f),
            {
              size: y,
              appearance: m,
              inputId: b,
              labelId: h,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: C
            } = il(),
            x = (0, Wd.H)({
              isDisabled: w,
              isReadOnly: C,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: _
            } = (0, Kd.K)({
              id: a || b,
              "aria-labelledby": (0, I.VW)(o, h),
              "aria-describedby": (0, I.VW)(n, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: C
            }, x, p),
            j = (0, I.v6)({
              className: al({
                appearance: m
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": w || C,
              "data-testid": e,
              onClick: e => {
                r?.(e) ?? t?.(e), e.defaultPrevented || w || C || x.toggle()
              }
            }, u);
          return (0, S.jsxs)("div", {
            ...j,
            children: [(0, S.jsx)(ye.s6, {
              children: (0, S.jsx)("input", {
                ..._,
                ref: v
              })
            }), (0, S.jsx)("div", {
              className: nl({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, S.jsx)("div", {
                className: tl({
                  size: y,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        cl = (0, k.forwardRef)(({
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
          } = il(), c = (0, I.v6)({
            id: n.id || i,
            htmlFor: d,
            "data-testid": e,
            className: ol({
              isDisabled: s,
              size: l
            })
          }, n), u = r ? ye.DX : "label";
          return (0, S.jsx)(ye.s6, {
            enabled: o,
            children: (0, S.jsx)(u, {
              ...c,
              ref: a,
              children: t
            })
          })
        }),
        ul = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = il(), i = o.id || s, d = (0, I.v6)({
            className: rl({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, o), l = r ? ye.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        });
      var fl = t(26688);
      const pl = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        vl = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        yl = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        ml = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        bl = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        hl = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function gl(e) {
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

      function wl(e, r) {
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
          r % 2 ? wl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = gl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function xl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var _l = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        jl = e => {
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
            for (var [l, c] of e.compoundVariants) _l(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xl(e.variantClassNames, e => xl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Ol = jl({
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
        Pl = jl({
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
        Rl = jl({
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
        Nl = jl({
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
        Sl = jl({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Dl = jl({
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
      const kl = (0, k.createContext)(null);

      function zl() {
        const e = (0, k.useContext)(kl);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Ll = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: o,
          children: n,
          ...a
        }, s) => {
          const i = (0, I.v6)({
              "data-testid": t,
              className: "foundry_11gbdty0"
            }, (0, I.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = o ? ye.DX : "div",
            l = (0, k.useId)(),
            c = (0, k.useId)(),
            u = (0, k.useId)();
          return (0, S.jsx)(kl.Provider, {
            value: {
              size: e,
              appearance: r,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, S.jsx)(d, {
              ...i,
              ref: s,
              children: n
            })
          })
        }),
        Il = (0, k.forwardRef)(({
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
            ...C
          } = zl(), x = (0, k.useRef)(null), _ = f.id || w, {
            isPressed: j,
            pressProps: O
          } = (0, fs.d)({
            ref: x
          }), {
            setSelected: P,
            toggle: R,
            ...N
          } = (0, Wd.H)({
            isSelected: r,
            defaultSelected: t,
            onChange: o
          }), {
            inputProps: D,
            isSelected: z,
            isDisabled: L,
            isReadOnly: T
          } = (0, fl.v)({
            "aria-label": "",
            id: _,
            name: n,
            ...C
          }, {
            ...N,
            toggle: R,
            setSelected: C.isReadOnly ? () => !1 : P
          }, x), E = (0, I.v6)({
            className: Pl({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || L || T || R()
            }
          }, O, f), V = (0, I.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": r,
            "aria-labelledby": (0, I.VW)(c, g),
            "aria-describedby": (0, I.VW)(d, h),
            "aria-errormessage": (0, I.VW)(l, C.isInvalid ? h : void 0),
            "aria-required": b,
            required: b
          }, D), M = m ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, S.jsxs)("div", {
            ...E,
            children: [(0, S.jsx)(ye.s6, {
              children: (0, S.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, S.jsx)("div", {
              className: (0, Ae.clsx)(Ol({
                size: v,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : z ? "checked" : "unchecked",
              "data-disabled": L || T,
              "data-testid": e,
              "data-pressed": j,
              children: (0, S.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (z || m) && (0, S.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Tl = (0, k.forwardRef)(({
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
          } = zl(), u = a.id || d, f = c && !n, p = (0, I.v6)({
            className: Dl({
              size: i,
              showAsterisk: f
            }),
            "data-testid": t,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), v = r ? ye.DX : "label";
          return (0, S.jsx)(ye.s6, {
            enabled: o,
            children: (0, S.jsx)(v, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        El = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = zl(), i = o.id || s, d = (0, I.v6)({
            className: Rl({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, o), l = r ? ye.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        }),
        Vl = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = zl(), s = o.id || a, i = (0, I.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": t,
            id: s
          }, o), d = r ? ye.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Ml = (0, k.createContext)(null);

      function Al() {
        const e = (0, k.useContext)(Ml);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const ql = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          size: o = "MD",
          isRequired: n = !1,
          ...a
        }, s) => {
          const [i, d] = (0, k.useState)(null), [l, c] = (0, k.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, I.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = r ? ye.DX : "fieldset";
          return (0, S.jsx)(Ml.Provider, {
            value: {
              size: o,
              isRequired: n,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, S.jsx)(p, {
              ...f,
              ref: s,
              children: t
            })
          })
        }),
        Hl = (0, k.forwardRef)(({
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
          } = Al(), l = d && !a, c = (0, I.v6)({
            "data-testid": t,
            className: Sl({
              showAsterisk: l
            })
          }, s), u = r ? ye.DX : "legend";
          return (0, S.jsx)(ye.s6, {
            enabled: n,
            children: (0, S.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, S.jsx)(ye.xV, {
                children: e
              }), !d && (0, S.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", o, ")"]
              })]
            })
          })
        }),
        Fl = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setDescriptionId: a
          } = Al(), s = (0, k.useId)(), i = o.id || s;
          (0, k.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, I.v6)({
              "data-testid": t,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, o),
            l = r ? ye.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        }),
        Bl = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = Al(), s = (0, I.v6)({
            "data-testid": t,
            className: Nl({
              size: a
            })
          }, o), i = r ? ye.DX : "div";
          return (0, S.jsx)(i, {
            ...s,
            ref: n,
            children: e
          })
        }),
        Zl = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setErrorTextId: a
          } = Al(), s = (0, k.useId)(), i = o.id || s;
          (0, k.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, I.v6)({
              "data-testid": t,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, o),
            l = qe.X,
            c = r ? ye.DX : "div";
          return (0, S.jsxs)(c, {
            ...d,
            ref: n,
            children: [(0, S.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, S.jsx)(ye.xV, {
              children: e
            })]
          })
        });

      function Xl(e) {
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

      function Kl(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Gl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Xl(n)) in o ? Object.defineProperty(o, n, {
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

      function Wl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Ul = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        $l = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Kl(Kl({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ul(l, o, e.defaultVariants) && (t += " " + c);
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
        Ql = $l({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Jl = $l({
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
        ec = $l({
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
      const rc = (0, k.createContext)(null);

      function tc() {
        const e = (0, k.useContext)(rc);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const oc = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, I.v6)({
              "data-testid": t,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? ye.DX : "div",
            u = (0, k.useId)(),
            f = (0, k.useId)(),
            p = (0, k.useId)(),
            v = (0, k.useId)();
          return (0, S.jsx)(rc.Provider, {
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
            children: (0, S.jsx)(c, {
              ref: d,
              ...l,
              children: r
            })
          })
        }),
        nc = (0, k.forwardRef)(({
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
          } = tc(), u = (0, I.v6)({
            className: Jl({
              isDisabled: l,
              showAsterisk: c && !n
            }),
            "data-testid": t,
            id: i,
            htmlFor: d
          }, a), f = r ? ye.DX : "label";
          return (0, S.jsx)(ye.s6, {
            enabled: o,
            children: (0, S.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        ac = (0, k.forwardRef)(({
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
          } = tc(), g = (0, k.useRef)(null), w = (0, ve.UP)(g, c), C = (0, I.v6)({
            className: ec({
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
            "aria-labelledby": (0, I.VW)(l.id, f, v, i),
            "aria-describedby": (0, I.VW)(u, d),
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
          }, l), x = e ? ye.DX : "textarea";
          return (0, S.jsx)(x, {
            ref: w,
            ...C,
            children: r
          })
        }),
        sc = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = tc(), i = (0, I.v6)({
            className: Yl({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? ye.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        ic = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = tc(), i = (0, I.v6)({
            className: Ql({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, o), d = r ? ye.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        dc = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = tc(), i = (0, I.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? ye.DX : xs;
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        lc = _s,
        cc = js;
      var uc = t(707),
        fc = t(5277);

      function pc(e) {
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

      function vc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function yc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? vc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = pc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function mc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var bc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        hc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = yc(yc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bc(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mc(e.variantClassNames, e => mc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        gc = hc({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wc = hc({
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
      const Cc = (0, k.createContext)(null);

      function xc() {
        const e = (0, k.useContext)(Cc);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const _c = (0, k.forwardRef)(({
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
          const f = (0, k.useRef)(null),
            p = (0, ve.UP)(f, u),
            v = (0, k.useId)(),
            y = (0, k.useId)(),
            m = (0, k.useId)(),
            b = (0, uc.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: h
            } = (0, fc.m)({
              ...c,
              orientation: t,
              "aria-labelledby": (0, I.VW)(v, s),
              "aria-describedby": (0, I.VW)(y, m, i),
              "aria-errormessage": (0, I.VW)(m, d)
            }, b),
            g = (0, I.v6)({
              className: "foundry_njguqn0"
            }, h, (0, I.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? ye.DX : "div";
          return (0, S.jsx)(Cc.Provider, {
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
            children: (0, S.jsx)(w, {
              ref: p,
              "data-testid": n,
              ...g,
              children: o
            })
          })
        }),
        jc = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            size: a,
            orientation: s
          } = xc(), i = (0, I.v6)({
            "data-testid": e,
            className: wc({
              size: a,
              orientation: s
            })
          }, o), d = r ? ye.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: t
          })
        }),
        Oc = (0, k.forwardRef)(({
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
          } = xc(), l = i && !n, c = (0, I.v6)({
            id: a.id || d,
            "data-testid": e,
            className: gc({
              showAsterisk: l
            })
          }, a), u = r ? ye.DX : "div";
          return (0, S.jsx)(ye.s6, {
            enabled: o,
            children: (0, S.jsx)(u, {
              ...c,
              ref: s,
              children: t
            })
          })
        }),
        Pc = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = xc(), s = (0, I.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, o), i = r ? ye.DX : "div";
          return (0, S.jsx)(i, {
            ...s,
            ref: n,
            children: t
          })
        }),
        Rc = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            errorId: a,
            status: s
          } = xc(), i = (0, I.v6)({
            className: "foundry_njguqnc",
            "data-testid": r,
            errorId: a,
            status: s
          }, o), d = t ? ye.DX : xs;
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Nc = _s,
        Sc = js;
      var Dc = t(80146),
        kc = hc({
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
        zc = hc({
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
        Lc = hc({
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
        Ic = hc({
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
      const Tc = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Ec = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Vc = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        Mc = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
              "data-testid": t,
              className: "foundry_1pfduet0"
            }, o),
            s = e ? ye.DX : "label";
          return (0, S.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Ac = (0, k.forwardRef)(({
          testId: e,
          value: r,
          ...t
        }, o) => {
          const n = (0, k.useRef)(null),
            a = (0, ve.UP)(n, o),
            s = (0, k.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = xc(),
            {
              isPressed: p,
              pressProps: v
            } = (0, fs.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, Dc.z)({
              ...t,
              id: s,
              value: r,
              "aria-label": ""
            }, i, n),
            m = y.checked,
            b = y.disabled || i?.isReadOnly,
            h = (0, I.v6)(y, {
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
          return (0, S.jsxs)("div", {
            className: Ic({
              size: l
            }),
            children: [(0, S.jsx)(ye.s6, {
              children: (0, S.jsx)("input", {
                type: "radio",
                ...h,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, S.jsx)("div", {
              className: Lc({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": m ? "checked" : "unchecked",
              "data-disabled": b,
              "data-pressed": p,
              ...v,
              children: (0, S.jsx)("span", {
                className: "foundry_1pfduet9",
                children: m && (0, S.jsx)(g, {})
              })
            })]
          })
        }),
        qc = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            size: s,
            state: i
          } = xc(), d = (0, k.useId)(), l = (0, I.v6)({
            id: d,
            "data-testid": e,
            className: zc({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, n), c = r ? ye.DX : "div";
          return (0, S.jsx)(ye.s6, {
            enabled: o,
            children: (0, S.jsx)(c, {
              ...l,
              ref: a,
              children: t
            })
          })
        }),
        Hc = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = xc(), s = (0, I.v6)({
            "data-testid": e,
            className: kc({
              isDisabled: a
            })
          }, o), i = r ? ye.DX : "span";
          return (0, S.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        });
      var Fc = t(58900);

      function Bc(e) {
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

      function Zc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Xc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Zc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Bc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Zc(Object(t)).forEach(function(r) {
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
      var Kc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Wc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Xc(Xc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Kc(l, o, e.defaultVariants) && (t += " " + c);
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
        Uc = Wc({
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
        $c = Wc({
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
        Yc = Wc({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qc = Wc({
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
        Jc = Wc({
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
        eu = Wc({
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
      const ru = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        tu = (0, k.createContext)(null);

      function ou() {
        const e = (0, k.useContext)(tu);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const nu = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, k.useState)("text"), u = `${(0,k.useId)()}-label`, f = `${(0,k.useId)()}-input`, p = `${(0,k.useId)()}-description`, v = (0, k.useRef)(null), y = (0, k.useRef)(ru), m = (0, I.v6)({
            "data-testid": t,
            className: "foundry_8oytzo4"
          }, i), b = e ? ye.DX : "div";
          return (0, S.jsx)(tu.Provider, {
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
            children: (0, S.jsx)(b, {
              ref: d,
              ...m,
              children: r
            })
          })
        }),
        au = (0, k.forwardRef)(({
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
          } = ou(), u = d && !n, f = (0, I.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: eu({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = r ? ye.DX : "label";
          return (0, S.jsx)(ye.s6, {
            enabled: o,
            children: (0, S.jsx)(p, {
              ref: s,
              ...f,
              children: t
            })
          })
        }),
        su = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = ou(), s = (0, I.v6)({
            "data-testid": e,
            className: Yc({
              isDisabled: a
            })
          }, o), i = r ? ye.DX : "span";
          return (0, S.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        }),
        iu = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = ou(), d = (0, I.v6)({
            "data-testid": e,
            className: (0, Ae.clsx)(Uc({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, o), l = r ? ye.DX : "div";
          return (0, S.jsx)(l, {
            ref: n,
            ...d,
            children: t
          })
        }),
        du = (0, k.forwardRef)(({
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
            inputRef: C,
            focusState: x
          } = ou();
          (0, k.useEffect)(() => g(l), []);
          const _ = "invalid" === y,
            j = (0, I.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: b,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, I.VW)(m, i),
              "aria-describedby": (0, I.VW)(h, d),
              "data-testid": e,
              className: (0, Ae.clsx)(Jc({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (x.current) {
                  const {
                    selectionStart: r,
                    selectionEnd: t
                  } = e.currentTarget;
                  x.current.selectionStart = r, x.current.selectionEnd = t
                }
              },
              ..._ && {
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
            O = (0, Fc.A)({
              mask: t,
              replacement: o,
              showMask: n,
              track: a
            }),
            P = (0, ve.UP)(t && o ? O : null, C, u),
            R = r ? ye.DX : "input";
          return (0, S.jsx)(R, {
            ref: P,
            ...j
          })
        }),
        lu = (0, k.forwardRef)(({
          icon: e,
          asChild: r,
          testId: t,
          side: o,
          ...n
        }, a) => {
          const {
            isDisabled: s
          } = ou(), i = (0, I.v6)({
            size: "LG",
            "data-testid": t,
            className: (0, Ae.clsx)(Qc({
              side: o,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, n), d = r ? ye.DX : qe[e];
          return (0, S.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        cu = (0, k.forwardRef)(({
          ...e
        }, r) => {
          const {
            isDisabled: t
          } = ou(), o = (0, I.v6)({
            isDisabled: t,
            size: "LG",
            appearance: "ghost",
            className: (0, Ae.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, S.jsx)(ir, {
            ref: r,
            ...o,
            preventFocusOnPress: !1
          })
        }),
        uu = (0, k.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: r,
          ...t
        }, o) => {
          const {
            type: n,
            setType: a,
            inputRef: s,
            focusState: i
          } = ou(), d = "password" === n, l = d ? e : r;
          (0, k.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, I.v6)({
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
          return (0, S.jsxs)(un, {
            children: [(0, S.jsx)(fn, {
              children: (0, S.jsx)(cu, {
                ref: o,
                ...c
              })
            }), (0, S.jsxs)(pn, {
              side: "bottom",
              align: "end",
              children: [l, (0, S.jsx)(vn, {})]
            })]
          })
        }),
        fu = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = ou(), i = (0, I.v6)({
            className: $c({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? ye.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        pu = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = ou(), i = (0, I.v6)({
            className: "foundry_8oytzo13",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? ye.DX : xs;
          return (0, S.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        vu = _s,
        yu = js;
      var mu = t(68196);

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
      var Cu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        xu = (e => {
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
            for (var [l, c] of e.compoundVariants) Cu(l, o, e.defaultVariants) && (t += " " + c);
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
      const _u = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        ju = (0, k.forwardRef)(({
          label: e,
          size: r = "LG",
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.useRef)(null),
            s = (0, ve.UP)(a, n),
            {
              buttonProps: i
            } = (0, ve.sL)(o, a),
            d = (0, I.v6)({
              "data-testid": t,
              className: xu({
                size: r
              })
            }, i);
          return (0, S.jsx)("button", {
            ref: s,
            ...d,
            children: (0, S.jsx)(qe.X, {
              label: e,
              size: _u[r]
            })
          })
        });

      function Ou(e) {
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

      function Pu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ru(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Pu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ou(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Nu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Su = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Du = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ru(Ru({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Su(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Nu(e.variantClassNames, e => Nu(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ku = Du({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zu = Du({
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
        Lu = Du({
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
      const Iu = (0, k.createContext)(null);

      function Tu() {
        const e = (0, k.useContext)(Iu);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Eu = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          status: t,
          background: o,
          ...n
        }, a) => {
          const s = e ? ye.DX : "div",
            i = (0, I.v6)({
              className: Lu({
                status: t,
                background: o
              })
            }, n);
          return (0, S.jsx)(Iu.Provider, {
            value: {
              status: t,
              background: o
            },
            children: (0, S.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i
            })
          })
        }),
        Vu = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, I.v6)({
              className: "foundry_1m368qha"
            }, t);
          return (0, S.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Mu = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, I.v6)({
              className: "foundry_1m368qhb"
            }, t);
          return (0, S.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Au = {
          danger: qe.CircleX,
          information: qe.Info,
          success: qe.CircleCheck,
          warning: qe.TriangleAlert
        },
        qu = (0, k.forwardRef)(({
          asChild: e,
          size: r = "XL",
          ...t
        }, o) => {
          const {
            status: n
          } = Tu(), a = e ? ye.DX : Au[n], s = (0, I.v6)({
            className: zu({
              status: n,
              size: r
            }),
            size: r
          }, t);
          return (0, S.jsx)(a, {
            label: "",
            ref: o,
            ...s
          })
        }),
        Hu = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, I.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, t);
          return (0, S.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Fu = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, I.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, S.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Bu = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.useRef)(null),
            s = (0, ve.UP)(a, n),
            i = e ? ye.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, mu.i)(o, a),
            c = (0, I.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, S.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...c,
            children: r
          })
        }),
        Zu = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? ye.DX : "div",
            s = (0, I.v6)({
              className: "foundry_1m368qhm"
            }, o);
          return (0, S.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        Xu = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          className: t,
          ...o
        }, n) => {
          const a = e ? ye.DX : "div";
          return (0, S.jsx)(a, {
            ref: n,
            "data-testid": r,
            className: (0, Ae.clsx)(t, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...o
          })
        }),
        Gu = (0, k.forwardRef)((e, r) => {
          const {
            background: t
          } = Tu(), o = "none" !== t, n = (0, I.v6)({
            className: ku({
              hasBackground: o
            })
          }, e);
          return (0, S.jsx)(ju, {
            size: "SM",
            ref: r,
            ...n
          })
        });
      var Ku = t(64634),
        Wu = t(7697),
        Uu = t(17497);
      var $u = t(64716);

      function Yu(e) {
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

      function Qu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ju(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Qu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Yu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function ef(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var rf = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        tf = "foundry_qmpv6yv",
        of = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ju(Ju({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rf(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ef(e.variantClassNames, e => ef(e, e => e.split(" ")[0]))
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
      const nf = (0, k.createContext)(null);

      function af() {
        const e = (0, k.useContext)(nf);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const sf = (0, k.forwardRef)(({
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
              const r = (0, ve.rl)(),
                t = (0, ve.jt)(),
                [o, n] = (0, k.useState)([]),
                a = o.length,
                [s, i] = (0, k.useState)(0),
                [d, l] = (0, Ku.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: r && a > 1
                }, [(0, Wu.A)(), (0, Uu.A)()]),
                c = (0, k.useRef)(0),
                u = (0, k.useRef)(!1),
                f = o[s],
                p = (0, k.useCallback)(e => {
                  const r = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, t) => {
                    e.style.visibility = t === r ? "visible" : "hidden"
                  }), i(r), u.current = !0
                }, [l]),
                v = (0, k.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                y = (0, k.useCallback)((e, r) => {
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
              return (0, k.useEffect)(() => {
                l && (v(l), y(l), l.on("reInit", v).on("reInit", y).on("scroll", y).on("slideFocus", y))
              }, [l, y]), (0, k.useEffect)(() => {
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
          (0, k.useEffect)(() => {
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
            y = (0, I.v6)({
              className: of(c)
            }, v, i),
            m = e ? ye.DX : "div";
          return (0, S.jsx)(nf.Provider, {
            value: l,
            children: (0, S.jsx)(m, {
              ref: d,
              "data-testid": t,
              "data-initialized": u,
              ...y,
              children: r
            })
          })
        }),
        df = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        lf = (0, k.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            currentAlert: o
          } = af();
          if (!e && !o || !o?.status) return null;
          const n = e || df[o.status],
            a = qe[n],
            s = (0, I.v6)({
              className: "foundry_qmpv6yp"
            }, r);
          return (0, S.jsx)(a, {
            label: "",
            ref: t,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        cf = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, I.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, S.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        uf = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          align: t = "left",
          status: o,
          background: n,
          ...a
        }, s) => {
          const i = e ? ye.DX : "div",
            d = (0, I.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, S.jsx)(i, {
            ref: s,
            "data-testid": r,
            ...d
          })
        }),
        ff = (0, k.forwardRef)(({
          testId: e,
          children: r,
          ...t
        }, o) => {
          const {
            setAlerts: n,
            emblaRef: a,
            emblaApi: s
          } = af(), i = (0, I.v6)({
            className: "foundry_qmpv6ym"
          }, t), d = (0, ve.UP)(a, o), l = k.Children.map(r, e => {
            const r = e;
            if (!r.props.background || !r.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: r.props.status,
              background: r.props.background,
              align: r.props.align
            }
          });
          return (0, k.useEffect)(() => {
            l && n(l)
          }, []), s?.on("slidesChanged", () => {
            l && n(l)
          }), (0, S.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, S.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: r
            })
          })
        }),
        pf = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.useRef)(null),
            s = (0, ve.UP)(a, n),
            i = e ? ye.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, mu.i)(o, a),
            c = (0, I.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, o);
          return (0, S.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...d,
            ...c,
            children: r
          })
        }),
        vf = (0, k.forwardRef)((e, r) => {
          const t = (0, I.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, S.jsx)(ju, {
            ref: r,
            "data-close-btn": !0,
            size: "SM",
            ...t
          })
        }),
        yf = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          children: t,
          ...o
        }, n) => {
          const a = e ? ye.DX : "div",
            s = (0, I.v6)({
              className: "foundry_qmpv6yt"
            }, o);
          return (0, S.jsx)(a, {
            ref: n,
            "data-testid": r,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: t
          })
        }),
        mf = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            nextAlert: o,
            canScrollNext: n
          } = af(), a = (0, I.v6)({
            className: tf
          }, r);
          return (0, S.jsx)($u.K, {
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
        bf = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            prevAlert: o,
            canScrollPrev: n
          } = af(), a = (0, I.v6)({
            className: tf
          }, r);
          return (0, S.jsx)($u.K, {
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
        hf = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            currentAlertIndex: o,
            numAlerts: n
          } = af(), a = (0, I.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, r);
          return (0, S.jsxs)("div", {
            ref: t,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [o + 1, "/", n]
          })
        });

      function gf(e) {
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

      function wf(e, r) {
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
          r % 2 ? wf(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = gf(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wf(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function xf(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var _f = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        jf = e => {
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
            for (var [l, c] of e.compoundVariants) _f(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xf(e.variantClassNames, e => xf(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Of = jf({
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
        Pf = jf({
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
        Rf = jf({
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
      const Nf = (0, k.createContext)(null);

      function Sf() {
        const e = (0, k.useContext)(Nf);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Df = (0, k.forwardRef)(({
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
            u = (0, I.v6)({
              className: Pf(c)
            }, d),
            f = e ? ye.DX : "div";
          return (0, S.jsx)(Nf.Provider, {
            value: c,
            children: (0, S.jsx)(f, {
              ref: l,
              "data-testid": t,
              "aria-disabled": i,
              ...u,
              children: r
            })
          })
        }),
        kf = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = Sf(), s = e ? ye.DX : "div", i = (0, I.v6)({
            className: Rf({
              size: a
            })
          }, o);
          return (0, S.jsx)(s, {
            ref: n,
            "data-testid": t,
            ...i,
            children: r
          })
        }),
        zf = (0, k.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = qe[e],
            n = (0, I.v6)({
              className: "foundry_oahh5812"
            }, r);
          return (0, S.jsx)(o, {
            ref: t,
            size: "SM",
            ...n
          })
        }),
        Lf = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            background: o,
            isDisabled: n
          } = Sf(), a = (0, I.v6)({
            className: Of({
              background: o
            })
          }, r);
          return (0, S.jsx)(ir, {
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
      var If = t(46891),
        Tf = "ToastProvider",
        [Ef, Vf, Mf] = gn("Toast"),
        [Af, qf] = (0, zt.A)("Toast", [Mf]),
        [Hf, Ff] = Af(Tf),
        Bf = e => {
          const {
            __scopeToast: r,
            label: t = "Notification",
            duration: o = 5e3,
            swipeDirection: n = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = k.useState(null), [c, u] = k.useState(0), f = k.useRef(!1), p = k.useRef(!1);
          return t.trim() || console.error(`Invalid prop \`label\` supplied to \`${Tf}\`. Expected non-empty \`string\`.`), (0, S.jsx)(Ef.Provider, {
            scope: r,
            children: (0, S.jsx)(Hf, {
              scope: r,
              label: t,
              duration: o,
              swipeDirection: n,
              swipeThreshold: a,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: k.useCallback(() => u(e => e + 1), []),
              onToastRemove: k.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: s,
              children: i
            })
          })
        };
      Bf.displayName = Tf;
      var Zf = "ToastViewport",
        Xf = ["F8"],
        Gf = "toast.viewportPause",
        Kf = "toast.viewportResume",
        Wf = k.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            hotkey: o = Xf,
            label: n = "Notifications ({hotkey})",
            ...a
          } = e, s = Ff(Zf, t), i = Vf(t), d = k.useRef(null), l = k.useRef(null), c = k.useRef(null), u = k.useRef(null), f = (0, kt.s)(r, u, s.onViewportChange), p = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          k.useEffect(() => {
            const e = e => {
              0 !== o.length && o.every(r => e[r] || e.code === r) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [o]), k.useEffect(() => {
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
                    const e = new CustomEvent(Kf);
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
          const y = k.useCallback(({
            tabbingDirection: e
          }) => {
            const r = i().map(r => {
              const t = r.ref.current,
                o = [t, ...fp(t)];
              return "forwards" === e ? o : o.reverse()
            });
            return ("forwards" === e ? r.reverse() : r).flat()
          }, [i]);
          return k.useEffect(() => {
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
                  pp(n.slice(a + 1)) ? r.preventDefault() : o ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r)
            }
          }, [i, y]), (0, S.jsxs)(Bt, {
            ref: d,
            role: "region",
            "aria-label": n.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, S.jsx)($f, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                pp(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, S.jsx)(Ef.Slot, {
              scope: t,
              children: (0, S.jsx)(Lt.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, S.jsx)($f, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                pp(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Wf.displayName = Zf;
      var Uf = "ToastFocusProxy",
        $f = k.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            onFocusFromOutsideViewport: o,
            ...n
          } = e, a = Ff(Uf, t);
          return (0, S.jsx)(Ro.s6, {
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
      $f.displayName = Uf;
      var Yf = "Toast",
        Qf = k.forwardRef((e, r) => {
          const {
            forceMount: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, Po.i)({
            prop: o,
            defaultProp: n ?? !0,
            onChange: a,
            caller: Yf
          });
          return (0, S.jsx)(xo, {
            present: t || i,
            children: (0, S.jsx)(rp, {
              open: i,
              ...s,
              ref: r,
              onClose: () => d(!1),
              onPause: (0, It.c)(e.onPause),
              onResume: (0, It.c)(e.onResume),
              onSwipeStart: (0, Dt.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Dt.mK)(e.onSwipeMove, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${t}px`)
              }),
              onSwipeCancel: (0, Dt.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Dt.mK)(e.onSwipeEnd, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${t}px`), d(!1)
              })
            })
          })
        });
      Qf.displayName = Yf;
      var [Jf, ep] = Af(Yf, {
        onClose() {}
      }), rp = k.forwardRef((e, r) => {
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
        } = e, y = Ff(Yf, t), [m, b] = k.useState(null), h = (0, kt.s)(r, b), g = k.useRef(null), w = k.useRef(null), C = n || y.duration, x = k.useRef(0), _ = k.useRef(C), j = k.useRef(0), {
          onToastAdd: O,
          onToastRemove: P
        } = y, R = (0, It.c)(() => {
          const e = m?.contains(document.activeElement);
          e && y.viewport?.focus(), s()
        }), N = k.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), x.current = (new Date).getTime(), j.current = window.setTimeout(R, e))
        }, [R]);
        k.useEffect(() => {
          const e = y.viewport;
          if (e) {
            const r = () => {
                N(_.current), l?.()
              },
              t = () => {
                const e = (new Date).getTime() - x.current;
                _.current = _.current - e, window.clearTimeout(j.current), d?.()
              };
            return e.addEventListener(Gf, t), e.addEventListener(Kf, r), () => {
              e.removeEventListener(Gf, t), e.removeEventListener(Kf, r)
            }
          }
        }, [y.viewport, C, d, l, N]), k.useEffect(() => {
          a && !y.isClosePausedRef.current && N(C)
        }, [a, C, y.isClosePausedRef, N]), k.useEffect(() => () => {
          window.clearTimeout(j.current)
        }, []), k.useEffect(() => (O(), () => P()), [O, P]);
        const D = k.useMemo(() => m ? lp(m) : null, [m]);
        return y.viewport ? (0, S.jsxs)(S.Fragment, {
          children: [D && (0, S.jsx)(tp, {
            __scopeToast: t,
            role: "status",
            "aria-live": "foreground" === o ? "assertive" : "polite",
            children: D
          }), (0, S.jsx)(Jf, {
            scope: t,
            onClose: R,
            children: wo.createPortal((0, S.jsx)(Ef.ItemSlot, {
              scope: t,
              children: (0, S.jsx)(Ft, {
                asChild: !0,
                onEscapeKeyDown: (0, Dt.mK)(i, () => {
                  y.isFocusedToastEscapeKeyDownRef.current || R(), y.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, S.jsx)(Lt.sG.li, {
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
                  onKeyDown: (0, Dt.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, R()))
                  }),
                  onPointerDown: (0, Dt.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Dt.mK)(e.onPointerMove, e => {
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
                    o ? (w.current = l, cp("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : up(l, y.swipeDirection, d) ? (w.current = l, cp("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(r) > d || Math.abs(t) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, Dt.mK)(e.onPointerUp, e => {
                    const r = w.current,
                      t = e.target;
                    if (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), w.current = null, g.current = null, r) {
                      const t = e.currentTarget,
                        o = {
                          originalEvent: e,
                          delta: r
                        };
                      up(r, y.swipeDirection, y.swipeThreshold) ? cp("toast.swipeEnd", p, o, {
                        discrete: !0
                      }) : cp("toast.swipeCancel", f, o, {
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
      }), tp = e => {
        const {
          __scopeToast: r,
          children: t,
          ...o
        } = e, n = Ff(Yf, r), [a, s] = k.useState(!1), [i, d] = k.useState(!1);
        return function(e = () => {}) {
          const r = (0, It.c)(e);
          (0, Ut.N)(() => {
            let e = 0,
              t = 0;
            return e = window.requestAnimationFrame(() => t = window.requestAnimationFrame(r)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(t)
            }
          }, [r])
        }(() => s(!0)), k.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, S.jsx)(Co, {
          asChild: !0,
          container: n.announcerContainer || void 0,
          children: (0, S.jsx)(Ro.s6, {
            ...o,
            children: a && (0, S.jsxs)(S.Fragment, {
              children: [n.label, " ", t]
            })
          })
        })
      };
      k.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, S.jsx)(Lt.sG.div, {
          ...o,
          ref: r
        })
      }).displayName = "ToastTitle";
      var op = k.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, S.jsx)(Lt.sG.div, {
          ...o,
          ref: r
        })
      });
      op.displayName = "ToastDescription";
      var np = "ToastAction",
        ap = k.forwardRef((e, r) => {
          const {
            altText: t,
            ...o
          } = e;
          return t.trim() ? (0, S.jsx)(dp, {
            altText: t,
            asChild: !0,
            children: (0, S.jsx)(ip, {
              ...o,
              ref: r
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${np}\`. Expected non-empty \`string\`.`), null)
        });
      ap.displayName = np;
      var sp = "ToastClose",
        ip = k.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            ...o
          } = e, n = ep(sp, t);
          return (0, S.jsx)(dp, {
            asChild: !0,
            children: (0, S.jsx)(Lt.sG.button, {
              type: "button",
              ...o,
              ref: r,
              onClick: (0, Dt.mK)(e.onClick, n.onClose)
            })
          })
        });
      ip.displayName = sp;
      var dp = k.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          altText: o,
          ...n
        } = e;
        return (0, S.jsx)(Lt.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": o || void 0,
          ...n,
          ref: r
        })
      });

      function lp(e) {
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
              } else r.push(...lp(e))
          }
        }), r
      }

      function cp(e, r, t, {
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
        }), o ? (0, Lt.hO)(n, a) : n.dispatchEvent(a)
      }
      var up = (e, r, t = 0) => {
        const o = Math.abs(e.x),
          n = Math.abs(e.y),
          a = o > n;
        return "left" === r || "right" === r ? a && o > t : !a && n > t
      };

      function fp(e) {
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

      function pp(e) {
        const r = document.activeElement;
        return e.some(e => e === r || (e.focus(), document.activeElement !== r))
      }
      var vp = Bf,
        yp = Wf,
        mp = Qf,
        bp = op,
        hp = ap,
        gp = ip;

      function wp(e) {
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

      function xp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Cp(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = wp(n)) in o ? Object.defineProperty(o, n, {
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

      function _p(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var jp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Op = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = xp(xp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) jp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _p(e.variantClassNames, e => _p(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Pp = Op({
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
        Rp = Op({
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
        Np = Op({
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
      const Sp = ({
          testId: e,
          ...r
        }) => (0, S.jsx)(vp, {
          "data-testid": e,
          ...r
        }),
        Dp = (0, k.forwardRef)(({
          children: e,
          testId: r,
          position: t = "bottomRight",
          ...o
        }, n) => {
          const a = (0, I.v6)({
            className: Np({
              position: t
            })
          }, o);
          return (0, S.jsx)(yp, {
            ref: n,
            "data-testid": r,
            ...a,
            children: e
          })
        }),
        kp = (0, k.createContext)(null);

      function zp() {
        const e = (0, k.useContext)(kp);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Lp = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          appearance: o = "success",
          ...n
        }, a) => {
          const s = e ? ye.DX : mp,
            i = (0, I.v6)({
              className: Rp({
                appearance: o
              })
            }, n);
          return (0, S.jsx)(kp.Provider, {
            value: {
              appearance: o
            },
            children: (0, S.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: r
            })
          })
        }),
        Ip = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? ye.DX : bp,
            s = (0, I.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, o);
          return (0, S.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        Tp = {
          danger: qe.CircleX,
          information: qe.Info,
          success: qe.CircleCheck,
          warning: qe.TriangleAlert,
          avocado: qe.CircleCheck
        },
        Ep = (0, k.forwardRef)(({
          asChild: e,
          ...r
        }, t) => {
          const {
            appearance: o
          } = zp(), n = e ? ye.DX : Tp[o], a = (0, I.v6)({
            className: Pp({
              appearance: o
            }),
            size: "LG"
          }, r);
          return (0, S.jsx)(n, {
            ref: t,
            ...a
          })
        }),
        Vp = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, o);
          return (0, S.jsx)(hp, {
            ref: n,
            "data-testid": t,
            ...a,
            children: e ? (0, S.jsx)(ye.DX, {
              children: r
            }) : (0, S.jsx)(If.$, {
              size: "MD",
              appearance: "link",
              children: r
            })
          })
        }),
        Mp = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          label: o,
          ...n
        }, a) => {
          const s = (0, I.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, n);
          return (0, S.jsx)(gp, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e ? (0, S.jsx)(ye.DX, {
              children: r
            }) : (0, S.jsx)(ju, {
              size: "SM",
              label: o
            })
          })
        });
      var Ap = t(52640);

      function qp(e) {
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

      function Hp(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Fp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Hp(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = qp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hp(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Bp(e, r) {
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
        Xp = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Fp(Fp({}, e.defaultVariants), r);
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
              return Bp(e.variantClassNames, e => Bp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Gp = Xp({
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
        Kp = Xp({
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
        Wp = Xp({
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

      function Up() {
        const e = (0, k.useContext)($p);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const $p = (0, k.createContext)(null),
        Yp = (0, k.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          size: o = "MD",
          ...n
        }, a) => {
          const s = (0, I.v6)({
              className: Wp({
                size: o
              })
            }, n),
            i = t ? ye.DX : "ol";
          return (0, S.jsx)($p.Provider, {
            value: {
              size: o
            },
            children: (0, S.jsx)(i, {
              ref: a,
              "data-testid": r,
              ...s,
              children: e
            })
          })
        }),
        Qp = (0, k.forwardRef)(({
          isCurrent: e,
          children: r,
          asChild: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, k.useRef)(null),
            {
              size: i
            } = Up(),
            {
              itemProps: d
            } = (0, Ap.I)({
              isCurrent: e,
              children: r
            }, s),
            l = t ? ye.DX : "a",
            c = (0, I.v6)({
              className: (0, Ae.clsx)(Gp({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": o
            }, d, n);
          return (0, S.jsx)("li", {
            className: Kp({
              size: i
            }),
            ref: a,
            children: (0, S.jsx)(l, {
              ref: s,
              ...c,
              children: r
            })
          })
        }),
        Jp = (0, k.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = qe[e];
          return (0, S.jsx)(o, {
            ref: t,
            size: "LG",
            ...r
          })
        }),
        ev = (0, k.forwardRef)(({
          children: e,
          testId: r,
          defaultOpen: t = !1,
          label: o,
          ...n
        }, a) => {
          const [s, i] = (0, k.useState)(t), {
            size: d
          } = Up(), l = (0, I.v6)({
            className: Kp({
              size: d
            }),
            "data-testid": r
          }, n);
          return (0, S.jsx)("li", {
            ref: a,
            ...l,
            children: (0, S.jsxs)(Oi, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, S.jsx)(Ri, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": o,
                children: "..."
              }), (0, S.jsx)(Ii, {
                children: (0, S.jsx)(Ei, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, S.jsx)(Wi, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        rv = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = r ? ye.DX : td,
            s = (0, I.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": t
            }, o);
          return (0, S.jsx)(a, {
            ref: n,
            ...s,
            children: e
          })
        });

      function tv(e) {
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

      function ov(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function nv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ov(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = tv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ov(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function av(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var sv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        iv = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = nv(nv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return av(e.variantClassNames, e => av(e, e => e.split(" ")[0]))
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
      const dv = (0, k.createContext)(null);

      function lv() {
        const e = (0, k.useContext)(dv);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const cv = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "primary",
          size: o = "SM",
          type: n = "text",
          ...a
        }, s) => {
          const i = e ? ye.DX : "div",
            d = (0, I.v6)({
              className: iv({
                appearance: t,
                type: n,
                size: o
              })
            }, a);
          return (0, S.jsx)(dv.Provider, {
            value: {
              type: n
            },
            children: (0, S.jsx)(i, {
              ref: s,
              "data-testid": r,
              ...d
            })
          })
        }),
        uv = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, I.v6)({
              className: "foundry_18omk9t9",
              "data-testid": r
            }, t);
          return (0, S.jsx)(n, {
            ref: o,
            ...a
          })
        }),
        fv = (0, k.forwardRef)(({
          icon: e,
          iconElement: r,
          label: t,
          ...o
        }, n) => {
          const a = r || (e ? gs[e] : null),
            s = (0, I.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: t || ""
            }, o);
          return a && (0, S.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        pv = () => {
          const e = (0, ve.Ub)(I.fi.mobile);
          return r => e ? {
            transform: `translate(0,${100-r}%)`
          } : {
            opacity: r / 100,
            transform: `scale(${.95+r/100*.05})`
          }
        },
        vv = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function yv(e) {
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

      function mv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function bv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? mv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = yv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : mv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function hv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var gv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        wv = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = bv(bv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hv(e.variantClassNames, e => hv(e, e => e.split(" ")[0]))
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
      const Cv = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, r);
          return (0, S.jsx)(si, {
            ref: t,
            ...o
          })
        }),
        xv = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, r);
          return (0, S.jsx)(ii, {
            ref: t,
            ...o
          })
        }),
        _v = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, r);
          return (0, S.jsx)(di, {
            ref: t,
            ...o
          })
        }),
        jv = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, ve.rl)(),
            n = (0, I.v6)({
              "data-testid": e,
              className: wv({
                isTouchDevice: o
              })
            }, r);
          return (0, S.jsx)(li, {
            ref: t,
            ...n
          })
        }),
        Ov = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e
          }, r);
          return (0, S.jsx)(ci, {
            ref: t,
            ...o
          })
        });

      function Pv(e) {
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

      function Rv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Nv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Rv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Pv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Rv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Sv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Dv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        kv = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Nv(Nv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Dv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sv(e.variantClassNames, e => Sv(e, e => e.split(" ")[0]))
            }
          }, r
        },
        zv = kv({
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
        Lv = kv({
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
      const Iv = (0, k.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, k.createRef)(),
          dialogSpringRef: (0, St.$9)(),
          overlaySpringRef: (0, St.$9)()
        }),
        Tv = ({
          defaultOpen: e,
          onOpenChange: r,
          isOpen: t,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: n,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, ve.ic)({
            prop: t,
            defaultProp: e ?? !1,
            onChange: r
          }), c = (0, ve.ZC)(d);
          return (0, S.jsx)(Iv.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== t,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: n,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, k.useId)(),
              descriptionId: (0, k.useId)(),
              triggerRef: (0, k.useRef)(null),
              dialogSpringRef: (0, St.U2)(),
              overlaySpringRef: (0, St.U2)()
            },
            children: (0, S.jsx)(Ev, {
              ...i
            })
          })
        },
        Ev = e => {
          const {
            isOpen: r,
            setIsOpen: t
          } = (0, k.useContext)(Iv), o = (0, I.v6)({
            open: r,
            onOpenChange: t
          }, e);
          return (0, S.jsx)(wa, {
            ...o
          })
        },
        Vv = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            contentId: o,
            triggerRef: n
          } = (0, k.useContext)(Iv), a = (0, ve.UP)(n, t), s = (0, I.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": o
          }, r);
          return (0, S.jsx)(xa, {
            ...s,
            ref: a
          })
        }),
        Mv = e => (0, S.jsx)(Pa, {
          forceMount: !0,
          ...e
        }),
        Av = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            isOpen: o,
            overlaySpringRef: n,
            openImmediately: a
          } = (0, k.useContext)(Iv), s = vv(), i = (0, ve.jt)(), d = (0, St.pn)(o, {
            ref: n,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: St.$W.stiff,
            immediate: i || a
          }), l = (0, I.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, r), c = (0, St.CS)(Na);
          return (0, k.useEffect)(() => {
            n.start()
          }, [o]), d((e, r) => r ? (0, S.jsx)(c, {
            forceMount: !0,
            ref: t,
            ...l,
            style: e
          }) : null)
        }),
        qv = (0, k.forwardRef)(({
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
          } = (0, k.useContext)(Iv), b = (0, ve.rl)(), h = (0, ve.jt)(), g = (0, k.useRef)(null), w = pv(), {
            bindDrag: C
          } = function({
            dialogRef: e,
            dialogSpringRef: r,
            overlaySpringRef: t,
            onCloseTransitionStart: o,
            onCloseTransitionComplete: n
          }) {
            const a = vv(),
              s = pv(),
              i = (0, k.useRef)();
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
                  config: St.$W.stiff,
                  onStart: o,
                  onRest: n
                }), t.start({
                  ...a(0),
                  immediate: !1,
                  config: St.$W.stiff
                })) : (r.start({
                  ...s(100),
                  immediate: !1,
                  config: St.$W.stiff
                }), t.start({
                  ...a(100),
                  immediate: !1,
                  config: St.$W.stiff
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
          }), x = (0, St.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: St.$W.stiff,
            ref: y,
            immediate: h || d,
            onStart: (e, r, t) => {
              t ? u?.() : p?.()
            },
            onRest: (e, r, t) => {
              t ? f?.() : v?.()
            }
          });
          (0, k.useEffect)(() => {
            y.start()
          }, [s]);
          const _ = (0, ve.UP)(g, a),
            j = b && !h && !o && C(),
            O = (0, I.v6)({
              "data-testid": r,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                t?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, n),
            P = (0, St.CS)(za);
          return x((r, t) => t ? (0, S.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, S.jsx)(P, {
              forceMount: !0,
              ref: _,
              ...O,
              style: r,
              children: e
            })
          }) : null)
        }),
        Hv = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, r);
          return (0, S.jsx)(Va, {
            ref: t,
            ...o
          })
        }),
        Fv = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e
          }, r);
          return (0, S.jsx)(Aa, {
            ref: t,
            ...o
          })
        }),
        Bv = (0, k.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
            className: "foundry_xov33nh",
            "data-testid": r
          }, t);
          return (0, S.jsxs)(Cv, {
            ref: o,
            ...n,
            children: [(0, S.jsx)(xv, {
              className: "foundry_xov33ni",
              children: e
            }), (0, S.jsx)(_v, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, S.jsx)(jv, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Zv = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
              "data-testid": r,
              className: "foundry_xov33ne"
            }, t),
            a = e ? ye.DX : "div";
          return (0, S.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        Xv = (0, k.forwardRef)(({
          align: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
              "data-testid": t,
              className: zv({
                align: e
              })
            }, o),
            s = r ? ye.DX : "header";
          return (0, S.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Gv = (0, k.forwardRef)(({
          testId: e,
          appearance: r = "sentence",
          ...t
        }, o) => {
          const n = (0, I.v6)({
            "data-testid": e,
            className: Lv({
              appearance: r
            })
          }, t);
          return (0, S.jsx)(Va, {
            ref: o,
            ...n
          })
        }),
        Kv = (0, k.forwardRef)((e, r) => {
          const t = (0, I.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, S.jsx)($u.K, {
            ref: r,
            ...t,
            appearance: "ghost",
            size: "LG"
          })
        }),
        Wv = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, t),
            a = r ? (0, S.jsx)(ye.DX, {
              ref: o,
              ...n
            }) : (0, S.jsx)(ju, {
              ref: o,
              ...n,
              size: "LG"
            });
          return (0, S.jsx)(Ha, {
            asChild: !0,
            children: a
          })
        }),
        Uv = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, t),
            a = e ? ye.DX : "div";
          return (0, S.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        $v = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, t),
            a = e ? ye.DX : "footer";
          return (0, S.jsx)(a, {
            ref: o,
            ...n
          })
        });
      var Yv = "Avatar",
        [Qv, Jv] = (0, zt.A)(Yv),
        ey = [0, () => {}],
        [ry, ty] = Qv(Yv),
        oy = k.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            ...o
          } = e, [n, a] = k.useState("idle"), [s, i] = function() {
            let e = ey; {
              e = k.useState(0);
              const [r] = e, t = k.useRef(!1);
              k.useEffect(() => {
                r > 1 && !t.current && (t.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [r])
            }
            return e
          }();
          return (0, S.jsx)(ry, {
            scope: t,
            imageLoadingStatus: n,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, S.jsx)(Lt.sG.span, {
              ...o,
              ref: r
            })
          })
        });
      oy.displayName = Yv;
      var ny = "AvatarImage",
        ay = k.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            src: o,
            onLoadingStatusChange: n,
            ...a
          } = e, s = ty(ny, t);
          var i;
          i = s.setImageCount, k.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: r,
              setLoadingStatus: t,
              referrerPolicy: o,
              crossOrigin: n
            }) {
              return (0, Ut.N)(() => {
                if (!e) return void t("error");
                const r = new window.Image,
                  a = e => {
                    const r = e.currentTarget;
                    t(iy(r))
                  },
                  s = () => t("error");
                return r.addEventListener("load", a), r.addEventListener("error", s), o && (r.referrerPolicy = o), r.crossOrigin = n ?? null, r.src = e, t(iy(r)), () => {
                  r.removeEventListener("load", a), r.removeEventListener("error", s), t("idle")
                }
              }, [e, n, o, t]), r
            }(o, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, It.c)(e => {
              n?.(e)
            }),
            c = k.useRef(d);
          return (0, Ut.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, S.jsx)(Lt.sG.img, {
            ...a,
            ref: r,
            src: o
          }) : null
        });
      ay.displayName = ny;
      var sy = "AvatarFallback";

      function iy(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function dy(e) {
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

      function ly(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function cy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ly(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = dy(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ly(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function uy(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      k.forwardRef((e, r) => {
        const {
          __scopeAvatar: t,
          delayMs: o,
          ...n
        } = e, a = ty(sy, t), [s, i] = k.useState(void 0 === o);
        return k.useEffect(() => {
          if (void 0 !== o) {
            const e = window.setTimeout(() => i(!0), o);
            return () => window.clearTimeout(e)
          }
        }, [o]), s && "loaded" !== a.imageLoadingStatus ? (0, S.jsx)(Lt.sG.span, {
          ...n,
          ref: r
        }) : null
      }).displayName = sy;
      var fy = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        py = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = cy(cy({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) fy(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uy(e.variantClassNames, e => uy(e, e => e.split(" ")[0]))
            }
          }, r
        },
        vy = py({
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
        yy = "var(--foundry_v912w22)",
        my = "var(--foundry_v912w23)",
        by = py({
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
        hy = py({
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
        gy = "var(--foundry_v912w21)",
        wy = "var(--foundry_v912w20)",
        Cy = py({
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
      const xy = (0, k.createContext)(null);

      function _y() {
        const e = (0, k.useContext)(xy);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const jy = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          size: o,
          status: n,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, I.v6)({
            "data-testid": t,
            "aria-disabled": a,
            className: vy({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, S.jsx)(xy.Provider, {
            value: {
              size: o,
              status: n,
              isDisabled: a
            },
            children: (0, S.jsx)(oy, {
              ref: i,
              ...d,
              children: r
            })
          })
        }),
        Oy = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          src: t,
          ...o
        }, n) => {
          const {
            size: a,
            isDisabled: s
          } = _y(), [i, d] = (0, k.useState)(!1);
          (0, k.useEffect)(() => {
            d(!1)
          }, [t]);
          const l = i || !t ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : t,
            c = (0, I.v6)({
              className: by({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, o);
          return (0, S.jsx)("span", {
            className: hy({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": r,
            "aria-hidden": !0,
            children: (0, S.jsx)(ay, {
              ref: n,
              ...c
            })
          })
        }),
        Py = (0, k.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const n = (0, k.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = _y(),
            d = s || "online",
            l = (0, ve.UP)(n, o),
            c = (0, I.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Cy({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, z.D)({
                [wy]: r?.online,
                [gy]: r?.offline,
                [yy]: r?.away,
                [my]: r?.busy
              })
            }, t);
          return (0, S.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Ry(e) {
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

      function Ny(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Sy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ny(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ry(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ny(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Dy(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ky = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        zy = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Sy(Sy({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ky(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dy(e.variantClassNames, e => Dy(e, e => e.split(" ")[0]))
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
      const Ly = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
              "data-testid": t,
              className: "foundry_2jlbzt0"
            }, o),
            s = e ? ye.DX : "nav";
          return (0, S.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Iy = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
              role: "list",
              "data-testid": t,
              className: "foundry_2jlbzt1"
            }, o),
            s = e ? ye.DX : "div";
          return (0, S.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Ty = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          isActive: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, k.useRef)(null),
            i = (0, ve.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, mu.i)(n, s),
            c = (0, I.v6)({
              role: "listitem",
              "data-testid": o,
              "data-pressed": l,
              "data-active": t,
              className: (0, Ae.clsx)(zy({
                isActive: t
              }))
            }, d),
            u = e ? ye.DX : "a";
          return (0, S.jsx)(u, {
            ref: i,
            ...c,
            children: r
          })
        }),
        Ey = (0, k.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, t);
          return (0, S.jsx)(Ty, {
            ref: o,
            ...n,
            children: (0, S.jsx)(qe.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        Vy = (0, k.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, t);
          return (0, S.jsx)(Ty, {
            ref: o,
            ...n,
            children: (0, S.jsx)(qe.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        My = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, I.v6)({
              role: "listitem",
              "data-testid": t,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, o),
            a = e ? ye.DX : "span";
          return (0, S.jsx)(a, {
            ...n,
            children: r || "..."
          })
        },
        Ay = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, I.v6)({
              "data-testid": t,
              className: "foundry_2jlbzt8"
            }, o),
            a = e ? ye.DX : "div";
          return (0, S.jsx)(a, {
            ...n,
            children: r
          })
        },
        qy = (0, k.createContext)(null);

      function Hy() {
        const e = (0, k.useContext)(qy);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const Fy = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, k.useId)(),
            a = (0, I.v6)({
              "data-testid": t,
              className: "foundry_2jlbztb"
            }, o),
            s = e ? ye.DX : "div";
          return (0, S.jsx)(qy.Provider, {
            value: {
              labelId: n
            },
            children: (0, S.jsx)(s, {
              ...a,
              children: r
            })
          })
        },
        By = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Hy(), s = (0, I.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, o), i = e ? ye.DX : "label";
          return (0, S.jsx)(i, {
            ref: n,
            id: a,
            ...s,
            children: r
          })
        }),
        Zy = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          placeholder: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Hy(), s = (0, I.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, o), i = e ? ye.DX : Dd;
          return (0, S.jsxs)(i, {
            ...s,
            children: [(0, S.jsxs)(Id, {
              ref: n,
              children: [(0, S.jsx)(Td, {
                placeholder: t
              }), (0, S.jsx)(Ed, {})]
            }), (0, S.jsx)(Bd, {
              children: (0, S.jsx)(kd, {
                children: (0, S.jsx)(Ld, {
                  children: r
                })
              })
            })]
          })
        }),
        Xy = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
              "data-testid": t
            }, o),
            s = e ? ye.DX : qd;
          return (0, S.jsx)(s, {
            ...a,
            ref: n,
            children: (0, S.jsx)(Hd, {
              children: r
            })
          })
        }),
        Gy = (0, k.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
              "data-testid": t,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, o),
            s = e ? ye.DX : "p";
          return (0, S.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        });
      var Ky = t(18436),
        Wy = "rovingFocusGroup.onEntryFocus",
        Uy = {
          bubbles: !1,
          cancelable: !0
        },
        $y = "RovingFocusGroup",
        [Yy, Qy, Jy] = gn($y),
        [em, rm] = (0, zt.A)($y, [Jy]),
        [tm, om] = em($y),
        nm = k.forwardRef((e, r) => (0, S.jsx)(Yy.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, S.jsx)(Yy.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, S.jsx)(am, {
              ...e,
              ref: r
            })
          })
        }));
      nm.displayName = $y;
      var am = k.forwardRef((e, r) => {
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
          } = e, f = k.useRef(null), p = (0, kt.s)(r, f), v = (0, bn.jH)(a), [y, m] = (0, Po.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: $y
          }), [b, h] = k.useState(!1), g = (0, It.c)(l), w = Qy(t), C = k.useRef(!1), [x, _] = k.useState(0);
          return k.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(Wy, g), () => e.removeEventListener(Wy, g)
          }, [g]), (0, S.jsx)(tm, {
            scope: t,
            orientation: o,
            dir: v,
            loop: n,
            currentTabStopId: y,
            onItemFocus: k.useCallback(e => m(e), [m]),
            onItemShiftTab: k.useCallback(() => h(!0), []),
            onFocusableItemAdd: k.useCallback(() => _(e => e + 1), []),
            onFocusableItemRemove: k.useCallback(() => _(e => e - 1), []),
            children: (0, S.jsx)(Lt.sG.div, {
              tabIndex: b || 0 === x ? -1 : 0,
              "data-orientation": o,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Dt.mK)(e.onMouseDown, () => {
                C.current = !0
              }),
              onFocus: (0, Dt.mK)(e.onFocus, e => {
                const r = !C.current;
                if (e.target === e.currentTarget && r && !b) {
                  const r = new CustomEvent(Wy, Uy);
                  if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      r = e.find(e => e.active),
                      t = e.find(e => e.id === y),
                      o = [r, t, ...e].filter(Boolean).map(e => e.ref.current);
                    lm(o, c)
                  }
                }
                C.current = !1
              }),
              onBlur: (0, Dt.mK)(e.onBlur, () => h(!1))
            })
          })
        }),
        sm = "RovingFocusGroupItem",
        im = k.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            focusable: o = !0,
            active: n = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Zt.B)(), l = a || d, c = om(sm, t), u = c.currentTabStopId === l, f = Qy(t), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: y
          } = c, m = (0, Ky.z)();
          return (0, Ut.N)(() => {
            if (m && o) return p(), () => v()
          }, [m, o, p, v]), k.useEffect(() => {
            if (!m && o) return p(), () => v()
          }, [m, o, p, v]), (0, S.jsx)(Yy.ItemSlot, {
            scope: t,
            id: l,
            focusable: o,
            active: n,
            children: (0, S.jsx)(Lt.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: r,
              onMouseDown: (0, Dt.mK)(e.onMouseDown, e => {
                o ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, Dt.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, Dt.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const r = function(e, r, t) {
                  const o = function(e, r) {
                    return "rtl" !== r ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, t);
                  return "vertical" === r && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o) ? void 0 : dm[o]
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
                  setTimeout(() => lm(a))
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
      im.displayName = sm;
      var dm = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function lm(e, r = !1) {
        const t = document.activeElement;
        for (const o of e) {
          if (o === t) return;
          if (o.focus({
              preventScroll: r
            }), document.activeElement !== t) return
        }
      }
      var cm = nm,
        um = im,
        fm = "Toggle",
        pm = k.forwardRef((e, r) => {
          const {
            pressed: t,
            defaultPressed: o,
            onPressedChange: n,
            ...a
          } = e, [s, i] = (0, Po.i)({
            prop: t,
            onChange: n,
            defaultProp: o ?? !1,
            caller: fm
          });
          return (0, S.jsx)(Lt.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: r,
            onClick: (0, Dt.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      pm.displayName = fm;
      var vm = "ToggleGroup",
        [ym, mm] = (0, zt.A)(vm, [rm]),
        bm = rm(),
        hm = k.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e;
          if ("single" === t) {
            const e = o;
            return (0, S.jsx)(Cm, {
              role: "radiogroup",
              ...e,
              ref: r
            })
          }
          if ("multiple" === t) {
            const e = o;
            return (0, S.jsx)(xm, {
              role: "toolbar",
              ...e,
              ref: r
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${vm}\``)
        });
      hm.displayName = vm;
      var [gm, wm] = ym(vm), Cm = k.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, Po.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: vm
        });
        return (0, S.jsx)(gm, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: k.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: k.useCallback(() => i(""), [i]),
          children: (0, S.jsx)(Om, {
            ...a,
            ref: r
          })
        })
      }), xm = k.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, Po.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: vm
        }), d = k.useCallback(e => i((r = []) => [...r, e]), [i]), l = k.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, S.jsx)(gm, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, S.jsx)(Om, {
            ...a,
            ref: r
          })
        })
      });
      hm.displayName = vm;
      var [_m, jm] = ym(vm), Om = k.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          disabled: o = !1,
          rovingFocus: n = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = bm(t), c = (0, bn.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, S.jsx)(_m, {
          scope: t,
          rovingFocus: n,
          disabled: o,
          children: n ? (0, S.jsx)(cm, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, S.jsx)(Lt.sG.div, {
              ...u,
              ref: r
            })
          }) : (0, S.jsx)(Lt.sG.div, {
            ...u,
            ref: r
          })
        })
      }), Pm = "ToggleGroupItem", Rm = k.forwardRef((e, r) => {
        const t = wm(Pm, e.__scopeToggleGroup),
          o = jm(Pm, e.__scopeToggleGroup),
          n = bm(e.__scopeToggleGroup),
          a = t.value.includes(e.value),
          s = o.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = k.useRef(null);
        return o.rovingFocus ? (0, S.jsx)(um, {
          asChild: !0,
          ...n,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, S.jsx)(Nm, {
            ...i,
            ref: r
          })
        }) : (0, S.jsx)(Nm, {
          ...i,
          ref: r
        })
      });
      Rm.displayName = Pm;
      var Nm = k.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          value: o,
          ...n
        } = e, a = wm(Pm, t), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, S.jsx)(pm, {
          ...i,
          ...n,
          ref: r,
          onPressedChange: e => {
            e ? a.onItemActivate(o) : a.onItemDeactivate(o)
          }
        })
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

      function km(e) {
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

      function zm(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Lm = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Im = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = km(km({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Lm(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zm(e.variantClassNames, e => zm(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Tm = "var(--foundry_zxwkyk2)",
        Em = "var(--foundry_zxwkyk3)",
        Vm = Im({
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
        Mm = Im({
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
        Am = Im({
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
        qm = "var(--foundry_zxwkyk1)",
        Hm = "var(--foundry_zxwkyk0)",
        Fm = Im({
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
      const Bm = (0, k.createContext)(null);

      function Zm() {
        const e = (0, k.useContext)(Bm);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const Xm = (0, k.forwardRef)(({
          testId: e,
          size: r,
          type: t = "single",
          ...o
        }, n) => {
          const a = (0, I.v6)({
            "data-testid": e,
            className: Vm({
              size: r
            }),
            type: t
          }, o);
          return (0, S.jsx)(Bm.Provider, {
            value: {
              size: r
            },
            children: (0, S.jsx)(hm, {
              ref: n,
              ...a
            })
          })
        }),
        Gm = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Zm(), n = (0, I.v6)({
            "data-testid": e,
            className: Mm({
              size: o
            })
          }, r);
          return (0, S.jsx)(Rm, {
            ref: t,
            ...n
          })
        }),
        Km = (0, k.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            size: o
          } = Zm(), n = gs[e];
          return (0, S.jsx)(n, {
            label: "",
            ref: t,
            size: o,
            className: "foundry_zxwkykb",
            ...r
          })
        }),
        Wm = (0, k.forwardRef)(({
          testId: e,
          colorOverride: r,
          status: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
            "data-testid": e,
            className: Fm({
              status: t
            }),
            style: (0, z.D)({
              [Hm]: r?.online,
              [qm]: r?.offline,
              [Tm]: r?.away,
              [Em]: r?.busy
            })
          }, o);
          return (0, S.jsx)("span", {
            ref: n,
            ...a
          })
        }),
        Um = (0, k.forwardRef)(({
          testId: e,
          variant: r = "default",
          ...t
        }, o) => {
          const {
            size: n
          } = Zm(), a = (0, I.v6)({
            "data-testid": e,
            className: Am({
              variant: r,
              size: n
            })
          }, t);
          return (0, S.jsx)("span", {
            ref: o,
            ...a
          })
        });
      var $m = "Popover",
        [Ym, Qm] = (0, zt.A)($m, [Jt]),
        Jm = Jt(),
        [eb, rb] = Ym($m),
        tb = e => {
          const {
            __scopePopover: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Jm(r), d = k.useRef(null), [l, c] = k.useState(!1), [u, f] = (0, Po.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: $m
          });
          return (0, S.jsx)(mo, {
            ...i,
            children: (0, S.jsx)(eb, {
              scope: r,
              contentId: (0, Zt.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: k.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: k.useCallback(() => c(!0), []),
              onCustomAnchorRemove: k.useCallback(() => c(!1), []),
              modal: s,
              children: t
            })
          })
        };
      tb.displayName = $m;
      var ob = "PopoverAnchor",
        nb = k.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = rb(ob, t), a = Jm(t), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = n;
          return k.useEffect(() => (s(), () => i()), [s, i]), (0, S.jsx)(bo, {
            ...a,
            ...o,
            ref: r
          })
        });
      nb.displayName = ob;
      var ab = "PopoverTrigger",
        sb = k.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = rb(ab, t), a = Jm(t), s = (0, kt.s)(r, n.triggerRef), i = (0, S.jsx)(Lt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": wb(n.open),
            ...o,
            ref: s,
            onClick: (0, Dt.mK)(e.onClick, n.onOpenToggle)
          });
          return n.hasCustomAnchor ? i : (0, S.jsx)(bo, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      sb.displayName = ab;
      var ib = "PopoverPortal",
        [db, lb] = Ym(ib, {
          forceMount: void 0
        }),
        cb = e => {
          const {
            __scopePopover: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = rb(ib, r);
          return (0, S.jsx)(db, {
            scope: r,
            forceMount: t,
            children: (0, S.jsx)(xo, {
              present: t || a.open,
              children: (0, S.jsx)(Co, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      cb.displayName = ib;
      var ub = "PopoverContent",
        fb = k.forwardRef((e, r) => {
          const t = lb(ub, e.__scopePopover),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = rb(ub, e.__scopePopover);
          return (0, S.jsx)(xo, {
            present: o || a.open,
            children: a.modal ? (0, S.jsx)(vb, {
              ...n,
              ref: r
            }) : (0, S.jsx)(yb, {
              ...n,
              ref: r
            })
          })
        });
      fb.displayName = ub;
      var pb = (0, Oo.TL)("PopoverContent.RemoveScroll"),
        vb = k.forwardRef((e, r) => {
          const t = rb(ub, e.__scopePopover),
            o = k.useRef(null),
            n = (0, kt.s)(r, o),
            a = k.useRef(!1);
          return k.useEffect(() => {
            const e = o.current;
            if (e) return (0, va.Eq)(e)
          }, []), (0, S.jsx)(pa.A, {
            as: pb,
            allowPinchZoom: !0,
            children: (0, S.jsx)(mb, {
              ...e,
              ref: n,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Dt.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || t.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Dt.mK)(e.onPointerDownOutside, e => {
                const r = e.detail.originalEvent,
                  t = 0 === r.button && !0 === r.ctrlKey,
                  o = 2 === r.button || t;
                a.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Dt.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        yb = k.forwardRef((e, r) => {
          const t = rb(ub, e.__scopePopover),
            o = k.useRef(!1),
            n = k.useRef(!1);
          return (0, S.jsx)(mb, {
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
        mb = k.forwardRef((e, r) => {
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
          } = e, f = rb(ub, t), p = Jm(t);
          return (0, fa.Oh)(), (0, S.jsx)(aa, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, S.jsx)(Vt, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, S.jsx)(ho, {
                "data-state": wb(f.open),
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
        bb = "PopoverClose",
        hb = k.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = rb(bb, t);
          return (0, S.jsx)(Lt.sG.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, Dt.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });
      hb.displayName = bb;
      var gb = k.forwardRef((e, r) => {
        const {
          __scopePopover: t,
          ...o
        } = e, n = Jm(t);
        return (0, S.jsx)(go, {
          ...n,
          ...o,
          ref: r
        })
      });

      function wb(e) {
        return e ? "open" : "closed"
      }
      gb.displayName = "PopoverArrow";
      var Cb = tb,
        xb = nb,
        _b = sb,
        jb = cb,
        Ob = fb,
        Pb = hb,
        Rb = gb;

      function Nb(e) {
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

      function Sb(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Db(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Sb(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Nb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sb(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function kb(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var zb = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Lb = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Db(Db({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zb(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kb(e.variantClassNames, e => kb(e, e => e.split(" ")[0]))
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
      const Ib = (0, k.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Tb = ({
          open: e,
          defaultOpen: r,
          onOpenChange: t,
          ...o
        }) => {
          const [n = !1, a] = (0, ve.ic)({
            prop: e,
            defaultProp: r ?? !1,
            onChange: t
          }), s = (0, I.v6)({
            open: n,
            onOpenChange: a
          }, o);
          return (0, S.jsx)(Ib.Provider, {
            value: {
              open: n,
              setOpen: a
            },
            children: (0, S.jsx)(Cb, {
              ...s
            })
          })
        },
        Eb = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, r);
          return (0, S.jsx)(_b, {
            ref: t,
            ...o
          })
        }),
        Vb = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Mb = (0, k.forwardRef)(({
          children: e,
          size: r = "MD",
          testId: t,
          ...o
        }, n) => {
          const {
            open: a
          } = (0, k.useContext)(Ib), s = (0, k.useRef)(null), i = (0, ve.UP)(s, n), {
            buttonProps: d
          } = (0, ve.sL)(o, s), l = (0, I.v6)({
            "data-testid": t,
            className: Lb({
              size: r
            })
          }, d), c = a ? qe.ChevronUp : qe.ChevronDown;
          return (0, S.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, S.jsx)(c, {
              label: "",
              size: Vb[r]
            })]
          })
        }),
        Ab = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e
          }, r);
          return (0, S.jsx)(xb, {
            ref: t,
            ...o
          })
        }),
        qb = (0, k.forwardRef)(({
          sideOffset: e = 6,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
            sideOffset: e,
            "data-testid": r,
            className: "foundry_lroh6l6"
          }, t);
          return (0, S.jsx)(Ob, {
            ref: o,
            ...n
          })
        }),
        Hb = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, r);
          return (0, S.jsx)(Rb, {
            ref: t,
            ...o
          })
        }),
        Fb = e => (0, S.jsx)(jb, {
          ...e
        }),
        Bb = e => (0, S.jsx)(Pb, {
          ...e
        });

      function Zb(e) {
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

      function Xb(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Gb(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Xb(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Zb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xb(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Kb(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Wb = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ub = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Gb(Gb({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wb(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kb(e.variantClassNames, e => Kb(e, e => e.split(" ")[0]))
            }
          }, r
        },
        $b = "var(--foundry_rmorls2)",
        Yb = Ub({
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
        Qb = "var(--foundry_rmorls0)",
        Jb = Ub({
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
        eh = "var(--foundry_rmorls3)",
        rh = "var(--foundry_rmorls1)",
        th = Ub({
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
        oh = "Progress",
        [nh, ah] = (0, zt.A)(oh),
        [sh, ih] = nh(oh),
        dh = k.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            value: o = null,
            max: n,
            getValueLabel: a = uh,
            ...s
          } = e;
          !n && 0 !== n || vh(n) || console.error(`Invalid prop \`max\` of value \`${n}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = vh(n) ? n : 100;
          null === o || yh(o, i) || console.error(`Invalid prop \`value\` of value \`${`${o}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = yh(o, i) ? o : null,
            l = ph(d) ? a(d, i) : void 0;
          return (0, S.jsx)(sh, {
            scope: t,
            value: d,
            max: i,
            children: (0, S.jsx)(Lt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": ph(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": fh(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: r
            })
          })
        });
      dh.displayName = oh;
      var lh = "ProgressIndicator",
        ch = k.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            ...o
          } = e, n = ih(lh, t);
          return (0, S.jsx)(Lt.sG.div, {
            "data-state": fh(n.value, n.max),
            "data-value": n.value ?? void 0,
            "data-max": n.max,
            ...o,
            ref: r
          })
        });

      function uh(e, r) {
        return `${Math.round(e/r*100)}%`
      }

      function fh(e, r) {
        return null == e ? "indeterminate" : e === r ? "complete" : "loading"
      }

      function ph(e) {
        return "number" == typeof e
      }

      function vh(e) {
        return ph(e) && !isNaN(e) && e > 0
      }

      function yh(e, r) {
        return ph(e) && !isNaN(e) && e <= r && e >= 0
      }
      ch.displayName = lh;
      var mh = dh,
        bh = ch;
      const hh = (0, k.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        gh = (0, k.forwardRef)(({
          size: e = "MD",
          max: r,
          value: t,
          ...o
        }, n) => {
          const a = Math.round(t / r * 100),
            s = "number" != typeof t || "number" != typeof r;
          return (0, S.jsx)(hh.Provider, {
            value: {
              value: t,
              max: r,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, S.jsx)(wh, {
              ...o,
              ref: n
            })
          })
        }),
        wh = (0, k.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, t),
            a = r ? ye.DX : "div";
          return (0, S.jsx)(a, {
            ...n,
            ref: o
          })
        }),
        Ch = (0, k.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const {
            value: n,
            max: a,
            size: s
          } = (0, k.useContext)(hh), i = (0, I.v6)({
            "data-testid": e,
            className: Jb({
              size: s
            }),
            value: n,
            max: a,
            style: (0, z.D)({
              [eh]: r
            }),
            "data-track": !0
          }, t);
          return (0, S.jsx)(mh, {
            ref: o,
            ...i
          })
        }),
        xh = (0, k.forwardRef)(({
          testId: e,
          transitionDuration: r = 500,
          colorOverride: t,
          ...o
        }, n) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, k.useContext)(hh), i = s ? "-100%" : `-${100-a}%`, d = (0, I.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, z.D)({
              [Qb]: i,
              [rh]: `${r}ms`,
              [$b]: t
            })
          }, o);
          return (0, S.jsx)(bh, {
            ref: n,
            ...d
          })
        }),
        _h = (0, k.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const {
            size: n
          } = (0, k.useContext)(hh), a = (0, I.v6)({
            "data-testid": r,
            className: Yb({
              size: n
            }),
            "aria-hidden": !0
          }, t), s = e ? ye.DX : "span";
          return (0, S.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        jh = (0, k.forwardRef)(({
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
          } = (0, k.useContext)(hh), l = (0, I.v6)({
            "data-testid": e,
            className: Yb({
              size: s
            }),
            "aria-hidden": !0
          }, t);
          return d ? (0, S.jsx)("span", {
            ref: o,
            ...l
          }) : "percentage" === r ? (0, S.jsxs)("span", {
            ref: o,
            ...l,
            children: [i, " ", (0, S.jsx)("span", {
              className: th({
                size: s
              }),
              children: "%"
            })]
          }) : (0, S.jsxs)("span", {
            ref: o,
            ...l,
            children: [n, "/", a]
          })
        });
      var Oh = "Collapsible",
        [Ph, Rh] = (0, zt.A)(Oh),
        [Nh, Sh] = Ph(Oh),
        Dh = k.forwardRef((e, r) => {
          const {
            __scopeCollapsible: t,
            open: o,
            defaultOpen: n,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, Po.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: s,
            caller: Oh
          });
          return (0, S.jsx)(Nh, {
            scope: t,
            disabled: a,
            contentId: (0, Zt.B)(),
            open: d,
            onOpenToggle: k.useCallback(() => l(e => !e), [l]),
            children: (0, S.jsx)(Lt.sG.div, {
              "data-state": Eh(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: r
            })
          })
        });
      Dh.displayName = Oh;
      var kh = "CollapsibleTrigger",
        zh = k.forwardRef((e, r) => {
          const {
            __scopeCollapsible: t,
            ...o
          } = e, n = Sh(kh, t);
          return (0, S.jsx)(Lt.sG.button, {
            type: "button",
            "aria-controls": n.open ? n.contentId : void 0,
            "aria-expanded": n.open || !1,
            "data-state": Eh(n.open),
            "data-disabled": n.disabled ? "" : void 0,
            disabled: n.disabled,
            ...o,
            ref: r,
            onClick: (0, Dt.mK)(e.onClick, n.onOpenToggle)
          })
        });
      zh.displayName = kh;
      var Lh = "CollapsibleContent",
        Ih = k.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Sh(Lh, e.__scopeCollapsible);
          return (0, S.jsx)(xo, {
            present: t || n.open,
            children: ({
              present: e
            }) => (0, S.jsx)(Th, {
              ...o,
              ref: r,
              present: e
            })
          })
        });
      Ih.displayName = Lh;
      var Th = k.forwardRef((e, r) => {
        const {
          __scopeCollapsible: t,
          present: o,
          children: n,
          ...a
        } = e, s = Sh(Lh, t), [i, d] = k.useState(o), l = k.useRef(null), c = (0, kt.s)(r, l), u = k.useRef(0), f = u.current, p = k.useRef(0), v = p.current, y = s.open || i, m = k.useRef(y), b = k.useRef(void 0);
        return k.useEffect(() => {
          const e = requestAnimationFrame(() => m.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, Ut.N)(() => {
          const e = l.current;
          if (e) {
            b.current = b.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const r = e.getBoundingClientRect();
            u.current = r.height, p.current = r.width, m.current || (e.style.transitionDuration = b.current.transitionDuration, e.style.animationName = b.current.animationName), d(o)
          }
        }, [s.open, o]), (0, S.jsx)(Lt.sG.div, {
          "data-state": Eh(s.open),
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

      function Eh(e) {
        return e ? "open" : "closed"
      }
      var Vh = Dh,
        Mh = zh,
        Ah = Ih,
        qh = "Accordion",
        Hh = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [Fh, Bh, Zh] = gn(qh),
        [Xh, Gh] = (0, zt.A)(qh, [Zh, Rh]),
        Kh = Rh(),
        Wh = k.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e, n = o, a = o;
          return (0, S.jsx)(Fh.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === t ? (0, S.jsx)(eg, {
              ...a,
              ref: r
            }) : (0, S.jsx)(Jh, {
              ...n,
              ref: r
            })
          })
        });
      Wh.displayName = qh;
      var [Uh, $h] = Xh(qh), [Yh, Qh] = Xh(qh, {
        collapsible: !1
      }), Jh = k.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          collapsible: a = !1,
          ...s
        } = e, [i, d] = (0, Po.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: qh
        });
        return (0, S.jsx)(Uh, {
          scope: e.__scopeAccordion,
          value: k.useMemo(() => i ? [i] : [], [i]),
          onItemOpen: d,
          onItemClose: k.useCallback(() => a && d(""), [a, d]),
          children: (0, S.jsx)(Yh, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, S.jsx)(og, {
              ...s,
              ref: r
            })
          })
        })
      }), eg = k.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, Po.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: qh
        }), d = k.useCallback(e => i((r = []) => [...r, e]), [i]), l = k.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, S.jsx)(Uh, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: l,
          children: (0, S.jsx)(Yh, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, S.jsx)(og, {
              ...a,
              ref: r
            })
          })
        })
      }), [rg, tg] = Xh(qh), og = k.forwardRef((e, r) => {
        const {
          __scopeAccordion: t,
          disabled: o,
          dir: n,
          orientation: a = "vertical",
          ...s
        } = e, i = k.useRef(null), d = (0, kt.s)(i, r), l = Bh(t), c = "ltr" === (0, bn.jH)(n), u = (0, Dt.mK)(e.onKeyDown, e => {
          if (!Hh.includes(e.key)) return;
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
        return (0, S.jsx)(rg, {
          scope: t,
          disabled: o,
          direction: n,
          orientation: a,
          children: (0, S.jsx)(Fh.Slot, {
            scope: t,
            children: (0, S.jsx)(Lt.sG.div, {
              ...s,
              "data-orientation": a,
              ref: d,
              onKeyDown: o ? void 0 : u
            })
          })
        })
      }), ng = "AccordionItem", [ag, sg] = Xh(ng), ig = k.forwardRef((e, r) => {
        const {
          __scopeAccordion: t,
          value: o,
          ...n
        } = e, a = tg(ng, t), s = $h(ng, t), i = Kh(t), d = (0, Zt.B)(), l = o && s.value.includes(o) || !1, c = a.disabled || e.disabled;
        return (0, S.jsx)(ag, {
          scope: t,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, S.jsx)(Vh, {
            "data-orientation": a.orientation,
            "data-state": vg(l),
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
      ig.displayName = ng;
      var dg = "AccordionHeader",
        lg = k.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = tg(qh, t), a = sg(dg, t);
          return (0, S.jsx)(Lt.sG.h3, {
            "data-orientation": n.orientation,
            "data-state": vg(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: r
          })
        });
      lg.displayName = dg;
      var cg = "AccordionTrigger",
        ug = k.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = tg(qh, t), a = sg(cg, t), s = Qh(cg, t), i = Kh(t);
          return (0, S.jsx)(Fh.ItemSlot, {
            scope: t,
            children: (0, S.jsx)(Mh, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": n.orientation,
              id: a.triggerId,
              ...i,
              ...o,
              ref: r
            })
          })
        });
      ug.displayName = cg;
      var fg = "AccordionContent",
        pg = k.forwardRef((e, r) => {
          const {
            __scopeAccordion: t,
            ...o
          } = e, n = tg(qh, t), a = sg(fg, t), s = Kh(t);
          return (0, S.jsx)(Ah, {
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

      function vg(e) {
        return e ? "open" : "closed"
      }
      pg.displayName = fg;
      var yg = Wh,
        mg = ig,
        bg = lg,
        hg = ug,
        gg = pg;

      function wg(e) {
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

      function Cg(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function xg(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Cg(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = wg(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cg(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function _g(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var jg = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Og = "foundry_1vzsjid2",
        Pg = "foundry_1vzsjidm",
        Rg = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = xg(xg({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) jg(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _g(e.variantClassNames, e => _g(e, e => e.split(" ")[0]))
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
      const Ng = (0, k.createContext)({
          mode: "solid",
          layer: 0
        }),
        Sg = (0, k.forwardRef)(({
          mode: e,
          layer: r,
          type: t = "single",
          ...o
        }, n) => (0, S.jsx)(Ng.Provider, {
          value: {
            mode: e,
            layer: r
          },
          children: (0, S.jsx)(Dg, {
            ...o,
            ref: n,
            type: t
          })
        })),
        Dg = (0, k.forwardRef)(({
          testId: e,
          type: r = "single",
          ...t
        }, o) => {
          const n = (0, I.v6)({
            "data-testid": e,
            type: r
          }, t);
          return (0, S.jsx)(yg, {
            className: "foundry_1vzsjid0",
            ref: o,
            ...n
          })
        }),
        kg = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            mode: o,
            layer: n
          } = (0, k.useContext)(Ng), a = (0, I.v6)({
            className: Rg({
              mode: o,
              layer: n
            }),
            "data-testid": e
          }, r);
          return (0, S.jsx)(mg, {
            ref: t,
            ...a
          })
        }),
        zg = (0, k.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, I.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, r);
          return (0, S.jsx)(bg, {
            ref: t,
            ...o
          })
        }),
        Lg = (0, k.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, I.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": r
          }, t);
          return (0, S.jsx)(hg, {
            ref: o,
            ...n,
            children: t.asChild && (0, k.isValidElement)(e) ? (0, k.cloneElement)(e, {
              children: (0, S.jsx)("span", {
                className: Og,
                children: e.props.children
              })
            }) : (0, S.jsx)("span", {
              className: Og,
              children: e
            })
          })
        }),
        Ig = (0, k.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = gs[e],
            n = (0, I.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, r);
          return (0, S.jsx)(o, {
            ref: t,
            size: "LG",
            ...n
          })
        }),
        Tg = (0, k.forwardRef)(({
          icon: e = "ChevronDown",
          ...r
        }, t) => {
          const o = gs[e],
            n = (0, I.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, r);
          return (0, S.jsx)(o, {
            ref: t,
            size: "LG",
            ...n
          })
        }),
        Eg = (0, k.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, I.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": t,
            asChild: r
          }, o);
          return (0, S.jsx)(gg, {
            ref: n,
            ...a,
            children: r && (0, k.isValidElement)(e) ? (0, k.cloneElement)(e, {
              children: (0, S.jsx)("div", {
                className: Pg,
                children: e.props.children
              })
            }) : (0, S.jsx)("div", {
              className: Pg,
              children: e
            })
          })
        }),
        Vg = {
          MD: L.spacing.dimensions[200],
          LG: L.spacing.dimensions[250],
          XL: L.spacing.dimensions[300]
        },
        Mg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: r = "MD",
          ...t
        }, o) => (0, S.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Vg[r],
          viewBox: "0 0 93 20",
          fill: "none",
          ref: o,
          ...t,
          children: [(0, S.jsx)("path", {
            d: "M70.062 5.19368V4.08909C70.062 4.04208 70.015 3.99508 69.968 3.99508H62.1183C59.8387 3.99508 58.7341 5.40519 58.7341 7.21484V12.7613C58.7341 13.8894 58.1935 14.712 57.0654 14.712H49.7093C49.6623 14.712 49.6153 14.759 49.6153 14.806V15.9106C49.6153 15.9576 49.6623 16.0046 49.7093 16.0046H57.935C60.2147 16.0046 61.3193 14.618 61.3193 12.7848V7.23835C61.3193 6.11025 61.8598 5.28768 62.9879 5.28768H69.968C70.015 5.28768 70.062 5.24068 70.062 5.19368Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M46.8421 3.99508H32.6704C32.6234 3.99508 32.5764 4.04208 32.5764 4.08909V5.19368C32.5764 5.24068 32.6234 5.28768 32.6704 5.28768H45.996C47.1241 5.28768 47.6647 6.11025 47.6647 7.23835C47.6647 8.36644 47.1241 9.18901 45.996 9.18901H35.4436C33.7985 9.18901 32.5764 10.5756 32.5764 12.3853V15.9341C32.5764 15.9811 32.6234 16.0281 32.6704 16.0281H35.0676C35.1146 16.0281 35.1616 15.9811 35.1616 15.9341V12.3853C35.1616 11.2572 35.8197 10.4581 36.7362 10.4581H46.8421C49.1218 10.4581 50.2264 9.0715 50.2264 7.23835C50.2264 5.4052 49.1218 4.01858 46.8421 4.01858V3.99508Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M86.1844 13.4194C86.1374 13.4194 86.0903 13.3724 86.0903 13.3253V5.26418C86.0903 4.01858 85.2443 3.61905 84.0222 4.37111L69.5685 13.2548C69.0044 13.6074 68.8164 14.0069 68.9574 14.2889C69.0749 14.5475 69.3805 14.712 70.015 14.712H83.4346C83.4816 14.712 83.5051 14.7355 83.5051 14.7825V15.9106C83.5051 15.9576 83.5521 16.0046 83.5991 16.0046H86.0198C86.0668 16.0046 86.1138 15.9576 86.1138 15.9106V14.806C86.1138 14.759 86.1609 14.712 86.2079 14.712H88.6051C88.6521 14.712 88.6991 14.665 88.6991 14.618V13.5134C88.6991 13.4664 88.6521 13.4194 88.6051 13.4194H86.1844ZM83.5286 13.3253C83.5286 13.3724 83.4816 13.4194 83.4346 13.4194H72.1772C72.0832 13.4194 72.0362 13.3959 72.0362 13.3724C72.0362 13.3254 72.0362 13.2783 72.1302 13.2313L83.3171 6.34527C83.3876 6.29827 83.5286 6.29827 83.5286 6.46278V13.3489V13.3253Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M91.0246 13.9838C91.6121 13.9838 92.0117 14.4304 92.0117 14.9944C92.0117 15.5585 91.6121 16.005 91.0246 16.005C90.437 16.005 90.014 15.5585 90.014 14.9944C90.014 14.4304 90.4135 13.9838 91.0246 13.9838ZM91.0246 15.8405C91.5181 15.8405 91.8707 15.4645 91.8707 14.9944C91.8707 14.5244 91.5416 14.1484 91.0246 14.1484C90.5075 14.1484 90.1785 14.5244 90.1785 14.9944C90.1785 15.4645 90.5075 15.8405 91.0246 15.8405ZM90.6251 14.4069H91.0716C91.2831 14.4069 91.4476 14.4774 91.4476 14.7124C91.4476 14.9474 91.3771 14.9474 91.2361 14.9944C91.3066 15.0179 91.3536 15.0649 91.4006 15.2059C91.4476 15.3235 91.4711 15.4645 91.5181 15.5585H91.3066C91.2831 15.4645 91.2361 15.3235 91.2126 15.253C91.1891 15.1119 91.1421 15.0884 90.9776 15.0884H90.8366V15.582H90.6251V14.4069ZM90.8366 14.9239H91.0246C91.1656 14.9239 91.2596 14.8769 91.2596 14.7359C91.2596 14.5949 91.1421 14.5479 91.0481 14.5479H90.8601V14.9239H90.8366Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M15.5833 4.88841V11.1399C18.2155 12.409 20.2837 11.1399 20.2837 7.77915C20.2837 4.41837 19.0616 2.82023 15.4893 1.59813C14.0791 1.12809 11.4704 0.329027 9.68428 0V18.637L13.9146 19.9767V4.34786C13.9146 3.6193 14.2437 3.12576 14.7607 3.29027C15.4423 3.47829 15.5833 4.15985 15.5833 4.88841Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M23.9735 13.0906C22.2108 12.4325 19.9546 12.1975 18.1215 12.409C16.2883 12.597 14.9722 13.0671 14.9722 13.0671L14.7137 13.1611V15.6993L19.2261 14.1012C20.0016 13.8191 21.1297 13.7721 21.7643 13.9602C22.3753 14.1717 22.2578 14.5477 21.5058 14.8297L14.7137 17.2504V19.6946L23.9265 16.3809C23.9265 16.3809 25.1721 15.9108 25.6656 15.2763C26.1591 14.6417 25.9476 13.7016 23.95 13.0671L23.9735 13.0906Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M0.495017 14.5242C-0.445061 15.2293 -0.0925317 16.4279 1.95214 16.9919C4.13782 17.7205 6.3705 17.8615 8.46218 17.509C8.60319 17.509 8.7442 17.462 8.88521 17.4384V15.2528L6.79354 16.0048C6.01797 16.2869 4.91338 16.3574 4.27883 16.1458C3.66778 15.9343 3.78529 15.5583 4.53735 15.2763L8.88521 13.7251V11.2809L2.84521 13.4431C2.84521 13.4431 1.38809 13.9132 0.518519 14.5477L0.495017 14.5242Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M24.467 18.9896C24.608 18.9426 24.6785 18.8486 24.6785 18.7076C24.6785 18.4725 24.514 18.402 24.3025 18.402H23.856V19.5536H24.0675V19.0601H24.2085C24.373 19.0601 24.42 19.1071 24.4435 19.2246C24.467 19.2951 24.514 19.4596 24.5375 19.5301H24.749C24.7255 19.4126 24.6785 19.2951 24.6315 19.1776C24.5845 19.0366 24.5375 18.9896 24.467 18.9661V18.9896ZM24.232 18.9191H24.044V18.543H24.232C24.3495 18.543 24.4435 18.5665 24.4435 18.7311C24.4435 18.8956 24.3495 18.9191 24.2085 18.9191H24.232Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M24.2555 17.979C23.6679 17.979 23.2449 18.4255 23.2449 18.9896C23.2449 19.5536 23.6444 20.0002 24.2555 20.0002C24.8665 20.0002 25.2426 19.5536 25.2426 18.9896C25.2426 18.4255 24.843 17.979 24.2555 17.979ZM24.2555 19.8356C23.7384 19.8356 23.4094 19.4596 23.4094 18.9896C23.4094 18.5195 23.7384 18.1435 24.2555 18.1435C24.7725 18.1435 25.1016 18.5195 25.1016 18.9896C25.1016 19.4596 24.7725 19.8356 24.2555 19.8356Z",
            fill: e
          })]
        })),
        Ag = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: r = "MD",
          ...t
        }, o) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Vg[r],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: o,
          ...t,
          children: (0, S.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        qg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: r = "MD",
          ...t
        }, o) => (0, S.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Vg[r],
          viewBox: "0 0 33 20",
          fill: "none",
          ref: o,
          ...t,
          children: [(0, S.jsx)("path", {
            d: "M7.34117 9.61429C7.7883 9.61536 8.23491 9.59031 8.6778 9.53928C9.07276 9.49838 9.45591 9.40006 9.80952 9.24891C10.1317 9.10768 10.4019 8.89726 10.5916 8.63973C10.7887 8.3776 10.8873 8.03424 10.8873 7.60959C10.8873 7.18494 10.7887 6.8413 10.5916 6.57878C10.4014 6.32174 10.1314 6.1116 9.80952 5.97026C9.45578 5.81934 9.0727 5.72107 8.6778 5.6799C8.23491 5.6292 7.78824 5.6041 7.34117 5.60488H4.2033V9.61429H7.34117ZM8.44707 3.31884C9.59417 3.31884 10.5713 3.44063 11.3785 3.68422C12.1856 3.9278 12.8415 4.24941 13.3463 4.64907C13.8357 5.02963 14.2139 5.49737 14.4522 6.01681C14.9152 7.04079 14.9152 8.16864 14.4522 9.19267C14.2163 9.71592 13.8379 10.1872 13.3463 10.5701C12.84 10.9698 12.184 11.2913 11.3785 11.5349C10.5729 11.7785 9.59574 11.9003 8.44707 11.9003H4.2033V16.6968H0.166016V3.31884H8.44707Z",
            fill: e
          }), (0, S.jsx)("path", {
            d: "M28.2135 6.88796C27.966 6.60113 27.6617 6.35099 27.3133 6.14813C26.9401 5.9306 26.5279 5.76298 26.0916 5.65149C25.6303 5.53153 25.1494 5.4709 24.6658 5.47171C23.7565 5.47171 22.9848 5.59975 22.3508 5.85586C21.7447 6.09295 21.2157 6.44606 20.8077 6.886C20.4087 7.32589 20.1165 7.82544 19.9473 8.35721C19.7656 8.91334 19.674 9.48701 19.6752 10.0631C19.6741 10.6173 19.7652 11.1689 19.9457 11.7025C20.1182 12.2215 20.4104 12.7081 20.8061 13.1355C21.2166 13.5712 21.7452 13.9209 22.3492 14.1566C22.9838 14.4127 23.7555 14.5408 24.6643 14.5408C25.8974 14.5408 26.862 14.2659 27.5581 13.7163C28.2542 13.1666 28.6786 12.4421 28.8314 11.5428H32.742C32.6546 12.3356 32.382 13.1068 31.9395 13.8139C31.5214 14.4778 30.9439 15.0642 30.2423 15.5373C29.5097 16.0253 28.6718 16.3942 27.7732 16.6244C26.766 16.8824 25.7163 17.009 24.6619 16.9994C23.2542 16.9994 21.9895 16.8214 20.8679 16.4653C19.7463 16.1092 18.7992 15.6188 18.0265 14.9941C17.2558 14.3717 16.6513 13.6227 16.2518 12.7954C15.8351 11.9261 15.6265 10.9982 15.6379 10.0631C15.6275 9.11222 15.8369 8.16835 16.255 7.28242C16.6534 6.44298 17.2577 5.68074 18.0296 5.0436C18.8039 4.40641 19.751 3.9063 20.871 3.5433C21.991 3.1803 23.2559 2.99923 24.6658 3.00009C25.6348 2.99561 26.5999 3.10292 27.5331 3.3189C28.3948 3.51672 29.2114 3.82999 29.9506 4.24624C30.6544 4.64619 31.2534 5.15931 31.7119 5.75497C32.1855 6.3795 32.4842 7.08365 32.5863 7.81592H28.6757C28.6086 7.48158 28.4511 7.16421 28.2135 6.88796Z",
            fill: e
          })]
        })),
        Hg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: r = "MD",
          ...t
        }, o) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Vg[r],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: o,
          ...t,
          children: (0, S.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        Fg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: r = "MD",
          ...t
        }, o) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Vg[r],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: o,
          ...t,
          children: (0, S.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function Bg(e) {
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

      function Zg(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Xg(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Zg(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Bg(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Zg(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Gg(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Kg = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Wg = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Xg(Xg({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Kg(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gg(e.variantClassNames, e => Gg(e, e => e.split(" ")[0]))
            }
          }, r
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
      const Ug = (0, k.forwardRef)(({
        logo: e,
        size: r,
        asChild: t,
        children: o,
        ...n
      }, a) => {
        const s = (0, I.v6)({
            className: Wg({
              size: r
            }),
            size: r
          }, n),
          i = R[e];
        if (t && (0, k.isValidElement)(o)) {
          const e = (0, k.cloneElement)(o, o.props, (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(i, {
              size: r,
              "aria-hidden": !0
            }), o.props.children]
          }));
          return (0, S.jsx)(Ye, {
            asChild: !0,
            size: r,
            ref: a,
            ...n,
            children: e
          })
        }
        return (0, S.jsx)(Ye, {
          ...s,
          ref: a,
          children: (0, S.jsx)(i, {
            size: r,
            "aria-hidden": !0
          })
        })
      })
    },
    93823(e, r, t) {
      t.d(r, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => i
      });
      var o = t(17172),
        n = t(39793),
        a = t(93082),
        s = t(23482);
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
    79718(e, r, t) {
      t.d(r, {
        b: () => i
      });
      var o = t(93082),
        n = t(23482),
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
    94435(e, r, t) {
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
    23482(e, r, t) {
      t.d(r, {
        Qg: () => s,
        bL: () => d,
        s6: () => i
      });
      var o = t(93082),
        n = t(94435),
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