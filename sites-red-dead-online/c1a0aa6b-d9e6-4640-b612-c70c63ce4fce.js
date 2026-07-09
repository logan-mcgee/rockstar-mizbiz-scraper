try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "c1a0aa6b-d9e6-4640-b612-c70c63ce4fce", e._sentryDebugIdIdentifier = "sentry-dbid-c1a0aa6b-d9e6-4640-b612-c70c63ce4fce")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [1197], {
    31197(e, r, t) {
      t.r(r), t.d(r, {
        Alert: () => p,
        AlertBanner: () => y,
        Avatar: () => x,
        Badge: () => g,
        Body: () => Dr,
        Breadcrumbs: () => b,
        Button: () => We,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => zr,
        Dialog: () => w,
        Display: () => Ir,
        Divider: () => ur,
        Dropdown: () => a,
        Heading: () => Er,
        IconButton: () => nr,
        Label: () => Vr,
        Lightbox: () => n,
        Loader: () => _r,
        Pagination: () => _,
        Popover: () => C,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => h,
        Spinner: () => Ee,
        Switch: () => s,
        Tag: () => v,
        Text: () => qr,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => Mr,
        Toast: () => m,
        Tooltip: () => o
      });
      var o = {};
      t.r(o), t.d(o, {
        Arrow: () => pn,
        Content: () => fn,
        Portal: () => yn,
        Root: () => cn,
        Trigger: () => un,
        useTooltipContext: () => ln
      });
      var n = {};
      t.r(n), t.d(n, {
        Caption: () => cs,
        Close: () => vs,
        Content: () => as,
        Controls: () => us,
        CssVars: () => gs,
        Download: () => bs,
        Image: () => ls,
        Keyboard: () => ps,
        LightboxContext: () => $a,
        OpenIcon: () => ts,
        Overlay: () => ns,
        Portal: () => os,
        Reset: () => ms,
        Root: () => Ya,
        RootImplContext: () => Qa,
        Thumbnail: () => rs,
        Trigger: () => es,
        Zoom: () => ys,
        ZoomPan: () => ss
      });
      var a = {};
      t.r(a), t.d(a, {
        Content: () => Md,
        Description: () => Hd,
        Hint: () => Gd,
        Label: () => Zd,
        Option: () => Wd,
        OptionIcon: () => $d,
        OptionText: () => Ud,
        Portal: () => Yd,
        Root: () => Ad,
        ScrollArea: () => Fd,
        StatusIcon: () => Jd,
        StatusRoot: () => Qd,
        StatusText: () => el,
        Trigger: () => Bd,
        TriggerIcon: () => Kd,
        TriggerText: () => Xd,
        Viewport: () => qd,
        useDropdownContext: () => Vd
      });
      var s = {};
      t.r(s), t.d(s, {
        Description: () => hl,
        Input: () => bl,
        Label: () => gl,
        Root: () => ml,
        useSwitchContext: () => vl
      });
      var i = {};
      t.r(i), t.d(i, {
        CheckLG: () => _l,
        CheckMD: () => xl,
        CheckXL: () => jl,
        DashLG: () => Pl,
        DashMD: () => Cl,
        DashXL: () => Ol
      });
      var d = {};
      t.r(d), t.d(d, {
        Description: () => Kl,
        ErrorText: () => Zl,
        Group: () => Wl,
        GroupDescription: () => $l,
        GroupErrorText: () => Ql,
        GroupItems: () => Yl,
        GroupLabel: () => Ul,
        Input: () => Bl,
        Label: () => Xl,
        Root: () => Fl,
        useGroupContext: () => Gl
      });
      var l = {};
      t.r(l), t.d(l, {
        Description: () => yc,
        Hint: () => vc,
        Input: () => pc,
        Label: () => fc,
        Root: () => uc,
        RootContext: () => lc,
        StatusIcon: () => bc,
        StatusRoot: () => mc,
        StatusText: () => gc,
        useTextAreaContext: () => cc
      });
      var c = {};
      t.r(c), t.d(c, {
        DotLG: () => Kc,
        DotMD: () => Xc,
        DotXL: () => Zc
      });
      var u = {};
      t.r(u), t.d(u, {
        Description: () => Tc,
        Input: () => Gc,
        Label: () => Ic,
        Option: () => Hc,
        OptionDescription: () => Uc,
        OptionLabel: () => Wc,
        Options: () => zc,
        Root: () => kc,
        StatusIcon: () => Lc,
        StatusRoot: () => Ec,
        StatusText: () => Vc,
        useRadioGroupContext: () => Dc
      });
      var f = {};
      t.r(f), t.d(f, {
        Button: () => gu,
        Control: () => vu,
        Description: () => wu,
        Hint: () => yu,
        Icon: () => bu,
        Input: () => mu,
        Label: () => pu,
        PasswordButton: () => hu,
        Root: () => fu,
        StatusIcon: () => _u,
        StatusRoot: () => xu,
        StatusText: () => ju
      });
      var p = {};
      t.r(p), t.d(p, {
        Body: () => Hu,
        CloseButton: () => ef,
        Description: () => $u,
        ErrorText: () => Ju,
        Footer: () => Qu,
        Header: () => Zu,
        Icon: () => Wu,
        Link: () => Yu,
        Root: () => Ku,
        RootContext: () => Bu,
        Title: () => Uu,
        iconStatusMap: () => Gu,
        useAlertContext: () => Xu
      });
      var y = {};
      t.r(y), t.d(y, {
        Alert: () => hf,
        CloseButton: () => _f,
        Description: () => gf,
        Icon: () => bf,
        Link: () => xf,
        PaginationCounter: () => Of,
        PaginationNav: () => jf,
        PaginationNextButton: () => Cf,
        PaginationPrevButton: () => Pf,
        PaginationViewport: () => wf,
        Root: () => vf,
        RootContext: () => pf,
        iconStatusMap: () => mf,
        useAlertBannerContext: () => yf
      });
      var v = {};
      t.r(v), t.d(v, {
        CloseButton: () => Ff,
        Icon: () => qf,
        Label: () => Mf,
        Root: () => Af,
        RootContext: () => Lf,
        useTagContext: () => Vf
      });
      var m = {};
      t.r(m), t.d(m, {
        Action: () => Zp,
        CloseButton: () => Hp,
        Description: () => Bp,
        Icon: () => Kp,
        Provider: () => Vp,
        Root: () => Fp,
        RootContext: () => Mp,
        Viewport: () => Ap,
        iconAppearanceMap: () => Xp,
        useToastContext: () => qp
      });
      var b = {};
      t.r(b), t.d(b, {
        Icon: () => iy,
        Item: () => sy,
        OverflowMenu: () => dy,
        OverflowMenuItem: () => ly,
        Root: () => ay,
        RootContext: () => ny,
        useBreadcrumbsContext: () => oy
      });
      var g = {};
      t.r(g), t.d(g, {
        Icon: () => wy,
        Label: () => hy,
        Root: () => gy,
        useBadgeContext: () => by
      });
      var h = {};
      t.r(h), t.d(h, {
        Corner: () => Iy,
        Root: () => Ny,
        Scrollbar: () => ky,
        Thumb: () => zy,
        Viewport: () => Dy
      });
      var w = {};
      t.r(w), t.d(w, {
        ActionArea: () => ov,
        CloseButton: () => tv,
        Content: () => Wy,
        Description: () => $y,
        Footer: () => nv,
        Header: () => Jy,
        HeaderButton: () => rv,
        HeaderTitle: () => ev,
        Layout: () => Qy,
        Overlay: () => Gy,
        Portal: () => Hy,
        Root: () => Xy,
        ScrollArea: () => Yy,
        Title: () => Uy,
        Trigger: () => Zy
      });
      var x = {};
      t.r(x), t.d(x, {
        Image: () => Vv,
        Root: () => Lv,
        StatusIndicator: () => Av,
        useAvatarContext: () => Ev
      });
      var _ = {};
      t.r(_), t.d(_, {
        Controls: () => Yv,
        Dropdown: () => tm,
        DropdownLabel: () => rm,
        Ellipsis: () => $v,
        Item: () => Gv,
        Label: () => nm,
        Next: () => Uv,
        Option: () => om,
        Pages: () => Hv,
        Prev: () => Wv,
        ResultsPerPage: () => em,
        Root: () => Zv
      });
      var j = {};
      t.r(j), t.d(j, {
        Icon: () => sb,
        Item: () => ab,
        Label: () => db,
        Root: () => nb,
        StatusIndicator: () => ib,
        useChipGroupContext: () => ob
      });
      var C = {};
      t.r(C), t.d(C, {
        Anchor: () => Qb,
        Arrow: () => eg,
        Close: () => tg,
        Content: () => Jb,
        Portal: () => rg,
        Root: () => Wb,
        RootContext: () => Gb,
        Trigger: () => Ub,
        TriggerButton: () => Yb
      });
      var P = {};
      t.r(P), t.d(P, {
        Indicator: () => Eg,
        Label: () => Lg,
        Root: () => zg,
        Track: () => Tg,
        UnitLabel: () => Vg
      });
      var O = t(39793),
        R = t(11350),
        S = t(93082),
        N = t(64001),
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
        k = t(62992);
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
        H = "var(--foundry_1qqcnua7)",
        G = "var(--foundry_1qqcnua8)",
        W = "var(--foundry_1qqcnua9)",
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
            outline: z(H)
          },
          focus: {
            background: z(G),
            border: z(W),
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
          (0, S.useEffect)(() => {
            if (!e.current || !a || !l) return;
            const c = `${a}:${r}:${t}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, k.getOrSet)(c, () => {
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
      var ue = t(56601),
        fe = t(30377);
      t(93400);
      const pe = (0, S.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        ye = () => (0, S.useContext)(pe),
        ve = () => {
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
        be = {
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
        he = "foundry_nu8bkpb",
        we = "--foundry-platform-scales-ratio-65afb887",
        xe = "foundry_nu8bkp4",
        _e = "foundry_nu8bkp3";
      const je = e => "dark" === e ? ge.dark : ge.light;
      const Ce = () => k.IS_SERVER ? null : document.body;
      (0, S.forwardRef)(({
        children: e,
        className: r,
        container: t = Ce(),
        asChild: o,
        colorScheme: n,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: d,
        locale: l = "en-US"
      }, c) => {
        const u = (0, S.useRef)(null),
          f = (0, ue.UP)(u, c),
          p = (0, S.useRef)(t),
          {
            ratio: y,
            scale: v
          } = function(e) {
            const [r, t] = (0, S.useState)(e.platformScale || e.defaultPlatformScale), o = (0, S.useCallback)(r => {
              t(r), e.onPlatformScaleChange?.(r)
            }, [e.onPlatformScaleChange]), n = (0, S.useRef)([]), a = () => {
              if (!k.IS_SERVER) {
                for (const {
                    handler: e,
                    matchMedia: r
                  }
                  of n.current) r.removeEventListener("change", e);
                n.current = []
              }
            };
            return (0, S.useEffect)(() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!k.IS_SERVER) {
                a();
                for (const e in be) {
                  const r = window.matchMedia(be[e]),
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
            appearanceClass: m,
            otherAppearanceClasses: b,
            providerColor: g
          } = function({
            colorScheme: e,
            defaultColorScheme: r = "dark"
          }) {
            const t = (0, ue.Ub)("(prefers-color-scheme: light)"),
              o = (0, ue.Ub)("(prefers-color-scheme: dark)"),
              n = "system" !== e && e || t && "light" || o && "dark" || r,
              a = (0, S.useMemo)(() => je(n), [n]),
              s = (0, S.useMemo)(() => (e => {
                const r = je(e);
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
          const s = (0, ue.ZC)(a),
            i = (0, ue.ZC)(e.current);
          (0, S.useEffect)(() => {
            e.current?.classList.contains(xe) || e.current?.classList.add(xe), e.current?.classList.contains(_e) || e.current?.classList.add(_e), e.current?.classList.contains(he) || e.current?.classList.add(he), e.current?.classList.add(t), e.current?.classList.remove(...o), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
          }, [t, a]), (0, S.useEffect)(() => {
            e.current?.setAttribute("lang", n)
          }, [n]), (0, S.useEffect)(() => (r && e.current?.style.setProperty(we, r.toString()), () => {
            e.current?.style.removeProperty(we)
          }), [r]), (0, S.useEffect)(() => {
            i?.classList.remove(xe), i?.classList.remove(_e), i?.classList.remove(t), i?.style.removeProperty(we), a && i?.classList.remove(a)
          }, [i])
        })({
          locale: l,
          className: r,
          appearanceClass: m,
          otherAppearanceClasses: b,
          currentScale: i ? y : -0,
          container: o ? u : p
        }), (0, O.jsx)(pe.Provider, {
          value: {
            locale: l,
            defaultColorScheme: a,
            colorScheme: g,
            defaultPlatformScale: s,
            platformScale: v
          },
          children: o ? (0, O.jsx)(fe.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var Pe = t(91497);

      function Oe(e) {
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

      function Re(e, r) {
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
          r % 2 ? Re(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Oe(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Re(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Ne(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var De, ke, ze = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ie = (De = {
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
        }, ke = e => {
          var r = De.defaultClassName,
            t = Se(Se({}, De.defaultVariants), e);
          for (var o in t) {
            var n, a = null !== (n = t[o]) && void 0 !== n ? n : De.defaultVariants[o];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = De.variantClassNames[o][s];
              i && (r += " " + i)
            }
          }
          for (var [d, l] of De.compoundVariants) ze(d, t, De.defaultVariants) && (r += " " + l);
          return r
        }, ke.variants = () => Object.keys(De.variantClassNames), ke.classNames = {
          get base() {
            return De.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Ne(De.variantClassNames, e => Ne(e, e => e.split(" ")[0]))
          }
        }, ke);
      const Te = "pageMD",
        Ee = (0, S.forwardRef)(({
          label: e,
          hideTrack: r = !1,
          size: t = Te,
          testId: o,
          ...n
        }, a) => {
          const s = ve(),
            i = "string" == typeof t ? t : t?.[s] ?? t.default ?? Te,
            d = (0, k.mergeProps)({
              className: Ie({
                size: i
              }),
              "data-testid": o,
              "aria-label": e
            }, n);
          return (0, O.jsx)(Pe.b, {
            label: e,
            children: (0, O.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...d,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!r && (0, O.jsx)("circle", {
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
      var Le = t(81270),
        Ve = t(6116);

      function Ae(e) {
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

      function Me(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function qe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Me(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ae(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Me(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Fe(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Be = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Xe = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = qe(qe({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Be(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fe(e.variantClassNames, e => Fe(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Ke = Xe({
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
      Xe({
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
      var Ze = Xe({
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
        He = Xe({
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
        Ge = Xe({
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
      const We = (0, S.forwardRef)(({
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
        override_textLuminance: y = .179,
        override_hoverLuminance: v = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: b,
        override_hoverColor: g,
        override_pressedColor: h,
        override_textColor: w,
        ...x
      }, _) => {
        const j = (0, S.useRef)(null),
          C = (0, ue.UP)(j, _),
          P = ve(),
          R = "string" == typeof d ? d : d?.[P] ?? d.default ?? "MD",
          {
            buttonProps: N
          } = (0, ue.sL)((0, k.mergeProps)(x, {
            isLoading: c,
            preventFocusOnPress: f
          }), j);
        ce({
          refs: {
            buttonRef: j
          },
          config: {
            textLuminance: y,
            darkenLuminance: p,
            hoverLuminance: v,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: b,
            hoverColor: g,
            pressedColor: h,
            textColor: w
          },
          enabled: "accent" === i
        }, [r]);
        const D = (0, k.mergeProps)({
            className: Ke({
              appearance: i,
              size: R,
              fullWidth: l,
              iconLeft: !!o,
              iconRight: !!a
            }),
            "data-testid": e
          }, N),
          z = o && Ve[o],
          I = a && Ve[a],
          T = r ? fe.DX : "button",
          E = l && (I || I && z);
        return (0, O.jsxs)(T, {
          ref: C,
          ...D,
          children: [E && (0, O.jsx)("div", {
            className: "foundry_17pcofy15"
          }), z && (0, O.jsx)(z, {
            label: n || "",
            size: R,
            className: (0, Le.clsx)(Ze({
              size: R
            }), "foundry_17pcofy11")
          }), (0, O.jsx)(fe.xV, {
            children: t
          }), I && (0, O.jsx)(I, {
            label: s || "",
            size: R,
            className: (0, Le.clsx)(Ze({
              size: R
            }), He({
              fullWidth: l
            }))
          }), c && (0, O.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, O.jsx)(Ee, {
              label: u || "",
              size: "inline" + ("XL" === R ? "LG" : "MD"),
              hideTrack: !0,
              className: Ge({
                size: R
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
        er = e => {
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
        },
        rr = er({
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
        tr = er({
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
        or = er({
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
      const nr = (0, S.forwardRef)(({
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
        override_pressedLuminance: y = .15,
        override_backgroundColor: v,
        override_hoverColor: m,
        override_pressedColor: b,
        override_textColor: g,
        ...h
      }, w) => {
        const x = (0, S.useRef)(null),
          _ = (0, ue.UP)(x, w),
          j = ve(),
          C = "string" == typeof s ? s : s?.[j] ?? s.default ?? "LG",
          {
            buttonProps: P
          } = (0, ue.sL)((0, k.mergeProps)(h, {
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
            pressedLuminance: y
          },
          overrides: {
            backgroundColor: v,
            hoverColor: m,
            pressedColor: b,
            textColor: g
          },
          enabled: "accent" === n
        }, [r]);
        const R = (0, k.mergeProps)({
            className: tr({
              appearance: n,
              size: C,
              fullWidth: a
            }),
            "data-testid": e
          }, P),
          N = Ve[t],
          D = r ? fe.DX : "button";
        return (0, O.jsxs)(D, {
          ref: _,
          ...R,
          children: [N && (0, O.jsx)(N, {
            label: o || "",
            size: C,
            className: rr({
              size: C
            })
          }), (0, O.jsx)(fe.xV, {
            children: i
          }), d && (0, O.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, O.jsx)(Ee, {
              label: l || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: or({
                size: C
              })
            })
          })]
        })
      });

      function ar(e) {
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

      function sr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ir(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? sr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ar(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function dr(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var lr = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        cr = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ir(ir({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) lr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dr(e.variantClassNames, e => dr(e, e => e.split(" ")[0]))
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
      const ur = (0, S.forwardRef)(({
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
        return (0, O.jsx)(c, {
          ref: i,
          className: (0, Le.clsx)(cr({
            thickness: t,
            orientation: r
          }), e),
          role: l,
          "aria-orientation": r,
          "data-testid": a,
          ...s
        })
      });

      function fr(e) {
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

      function pr(e, r) {
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
          r % 2 ? pr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = fr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function vr(e, r) {
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
        br = "var(--foundry_9dxgbc2)",
        gr = "var(--foundry_9dxgbc3)",
        hr = (e => {
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
              return vr(e.variantClassNames, e => vr(e, e => e.split(" ")[0]))
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
        wr = "var(--foundry_9dxgbc0)",
        xr = "var(--foundry_9dxgbc1)";
      const _r = (0, S.forwardRef)(({
        asChild: e,
        testId: r,
        children: t,
        colorOverride: o,
        label: n,
        size: a = "MD",
        ...s
      }, i) => {
        const d = ve(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, k.mergeProps)({
            className: hr({
              size: l
            }),
            "data-testid": r,
            style: (0, N.D)({
              [wr]: o?.pulseColorBackground,
              [xr]: o?.pulseColorForeground,
              [br]: o?.gradientColorBackground,
              [gr]: o?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": n
          }, s),
          u = e ? fe.DX : "div";
        return (0, O.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, O.jsx)(fe.xV, {
            children: t
          }) : (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, O.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function jr(e) {
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

      function Cr(e, r) {
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
          r % 2 ? Cr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = jr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Cr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Or(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Rr = (e, r, t) => {
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
            for (var [l, c] of e.compoundVariants) Rr(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Or(e.variantClassNames, e => Or(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Nr = Sr({
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
      const Dr = (0, S.forwardRef)(({
        asChild: e,
        testId: r,
        appearance: t = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? fe.DX : "p",
          i = (0, k.mergeProps)({
            className: Nr({
              size: o,
              appearance: t
            })
          }, n);
        return (0, O.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var kr = Sr({
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
      const zr = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "default",
          ...o
        }, n) => {
          const a = e ? fe.DX : "p",
            s = (0, k.mergeProps)({
              className: kr({
                appearance: t
              })
            }, o);
          return (0, O.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        }),
        Ir = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "h1",
            a = (0, k.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, t);
          return (0, O.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        });
      var Tr = Sr({
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
      const Er = (0, S.forwardRef)(({
        asChild: e,
        level: r,
        testId: t,
        ...o
      }, n) => {
        const a = e ? fe.DX : `h${7===r?6:r}`,
          s = (0, k.mergeProps)(o, {
            className: Tr({
              level: r
            })
          });
        return (0, O.jsx)(a, {
          ref: n,
          "data-testid": t,
          ...s
        })
      });
      var Lr = Sr({
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
        const s = e ? fe.DX : "p",
          i = (0, k.mergeProps)({
            className: Lr({
              size: o,
              appearance: t
            })
          }, n);
        return (0, O.jsx)(s, {
          ref: a,
          "data-testid": r,
          ...i
        })
      });
      var Ar = Sr({
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
      const Mr = {
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
        qr = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          semantic: t = "default",
          ...o
        }, n) => {
          const a = e ? fe.DX : Mr[t] || "span",
            s = (0, k.mergeProps)(o, {
              className: Ar({
                semantic: t
              })
            });
          return (0, O.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s
          })
        });
      var Fr = t(93529),
        Br = t(99206),
        Xr = t(34811);
      const Kr = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((r, t) => {
        e.onload = () => r(), e.onerror = t
      }), Zr = ([e, r]) => ({
        x: e,
        y: r
      }), Hr = (e, r) => (e.x = r.x, e.y = r.y, e), Gr = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Wr = (e, r = 3) => Number(parseFloat(`${e}`).toFixed(r)), Ur = (e, r, t) => Math.min(Math.max(e, r), t);
      var $r = t(90004);

      function Yr(e) {
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

      function Qr(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Jr(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Qr(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Yr(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qr(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function et(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var rt = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        tt = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Jr(Jr({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rt(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return et(e.variantClassNames, e => et(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ot = tt({
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
        nt = tt({
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
      Fr.os.registerPlugin(Br.L);
      const at = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        st = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        it = z("var(--foundry_1a74xwb0)");
      var dt = t(99817);
      const lt = {
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
      class ct {
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
          return t ? r : Ur(r, this.max[e], this.min[e])
        }
      }
      class ut {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Wr(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            r = e.w / this.elementSize.w,
            t = e.h / this.elementSize.h;
          return Wr(t < r ? t : r)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Wr(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class ft {
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
      class pt {
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
      class vt {
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
      class bt extends ft {
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
      class ht {
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
      class wt extends ft {
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
          }), this.bounds = new ct({
            slide: this
          }), this.dragHandler = new pt({
            options: a,
            slide: this
          }), this.scrollWheel = new vt({
            slide: this
          }), this.zoomHandler = new gt({
            slide: this
          }), this.zoomLevels = new ut({
            options: t,
            slide: this
          }), this.tapHandler = new bt({
            options: o,
            slide: this
          }), this.panAreaSize = new ht({
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
          e = Wr(e), t || (e = Ur(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", r, o), this.pan.y = this.calculateZoomToPanOffset("y", r, o), Gr(this.pan)
        }
        toggleZoom(e) {
          const r = this.currZoomLevel,
            t = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", e, r), this.pan.y = this.calculateZoomToPanOffset("y", e, r), Gr(this.pan)
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
      const xt = e => "dark" === e ? ge.dark : ge.light,
        _t = (0, dt.YK)({
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
      var jt = "foundry_bc732x1";
      const Ct = (0, S.forwardRef)(({
        shortcut: e,
        isInline: r,
        onShortcut: t
      }, o) => ((0, $r.vC)(e, e => t?.(e), [t]), (0, O.jsx)(Dr, {
        size: "XS",
        className: (0, Le.clsx)("foundry_bc732x0", {
          [jt]: r
        }),
        asChild: !0,
        children: (0, O.jsx)("kbd", {
          ref: o,
          children: e
        })
      })));
      var Pt = t(30818),
        Ot = t(8316),
        Rt = t(50446),
        St = t(53582),
        Nt = t(84017),
        Dt = t(2976),
        kt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const t = (0, Dt.TL)(`Primitive.${r}`),
            o = S.forwardRef((e, o) => {
              const {
                asChild: n,
                ...a
              } = e, s = n ? t : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, O.jsx)(s, {
                ...a,
                ref: o
              })
            });
          return o.displayName = `Primitive.${r}`, {
            ...e,
            [r]: o
          }
        }, {});

      function zt(e, r) {
        e && Nt.flushSync(() => e.dispatchEvent(r))
      }
      var It, Tt = t(38351),
        Et = t(2471),
        Lt = "dismissableLayer.update",
        Vt = S.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        At = S.forwardRef((e, r) => {
          const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: n,
            onFocusOutside: a,
            onInteractOutside: s,
            onDismiss: i,
            ...d
          } = e, l = S.useContext(Vt), [c, u] = S.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, p] = S.useState({}), y = (0, Rt.s)(r, e => u(e)), v = Array.from(l.layers), [m] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(m), g = c ? v.indexOf(c) : -1, h = l.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= b, x = function(e, r = globalThis?.document) {
            const t = (0, Tt.c)(e),
              o = S.useRef(!1),
              n = S.useRef(() => {});
            return S.useEffect(() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let o = function() {
                      Ft("dismissableLayer.pointerDownOutside", t, a, {
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
            const t = (0, Tt.c)(e),
              o = S.useRef(!1);
            return S.useEffect(() => {
              const e = e => {
                e.target && !o.current && Ft("dismissableLayer.focusOutside", t, {
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
          return (0, Et.U)(e => {
            g === l.layers.size - 1 && (o?.(e), !e.defaultPrevented && i && (e.preventDefault(), i()))
          }, f), S.useEffect(() => {
            if (c) return t && (0 === l.layersWithOutsidePointerEventsDisabled.size && (It = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(c)), l.layers.add(c), qt(), () => {
              t && 1 === l.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = It)
            }
          }, [c, f, t, l]), S.useEffect(() => () => {
            c && (l.layers.delete(c), l.layersWithOutsidePointerEventsDisabled.delete(c), qt())
          }, [c, l]), S.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(Lt, e), () => document.removeEventListener(Lt, e)
          }, []), (0, O.jsx)(kt.div, {
            ...d,
            ref: y,
            style: {
              pointerEvents: h ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Ot.mK)(e.onFocusCapture, _.onFocusCapture),
            onBlurCapture: (0, Ot.mK)(e.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: (0, Ot.mK)(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        });
      At.displayName = "DismissableLayer";
      var Mt = S.forwardRef((e, r) => {
        const t = S.useContext(Vt),
          o = S.useRef(null),
          n = (0, Rt.s)(r, o);
        return S.useEffect(() => {
          const e = o.current;
          if (e) return t.branches.add(e), () => {
            t.branches.delete(e)
          }
        }, [t.branches]), (0, O.jsx)(kt.div, {
          ...e,
          ref: n
        })
      });

      function qt() {
        const e = new CustomEvent(Lt);
        document.dispatchEvent(e)
      }

      function Ft(e, r, t, {
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
        }), o ? zt(n, a) : n.dispatchEvent(a)
      }
      Mt.displayName = "DismissableLayerBranch";
      var Bt = At,
        Xt = Mt,
        Kt = t(96883),
        Zt = t(17966),
        Ht = t(10376),
        Gt = S.forwardRef((e, r) => {
          const {
            children: t,
            width: o = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, O.jsx)(kt.svg, {
            ...a,
            ref: r,
            width: o,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? t : (0, O.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Gt.displayName = "Arrow";
      var Wt = Gt,
        Ut = t(86627),
        $t = t(94119),
        Yt = "Popper",
        [Qt, Jt] = (0, St.A)(Yt),
        [eo, ro] = Qt(Yt),
        to = e => {
          const {
            __scopePopper: r,
            children: t
          } = e, [o, n] = S.useState(null);
          return (0, O.jsx)(eo, {
            scope: r,
            anchor: o,
            onAnchorChange: n,
            children: t
          })
        };
      to.displayName = Yt;
      var oo = "PopperAnchor",
        no = S.forwardRef((e, r) => {
          const {
            __scopePopper: t,
            virtualRef: o,
            ...n
          } = e, a = ro(oo, t), s = S.useRef(null), i = (0, Rt.s)(r, s), d = S.useRef(null);
          return S.useEffect(() => {
            const e = d.current;
            d.current = o?.current || s.current, e !== d.current && a.onAnchorChange(d.current)
          }), o ? null : (0, O.jsx)(kt.div, {
            ...n,
            ref: i
          })
        });
      no.displayName = oo;
      var ao = "PopperContent",
        [so, io] = Qt(ao),
        lo = S.forwardRef((e, r) => {
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
            onPlaced: y,
            ...v
          } = e, m = ro(ao, t), [b, g] = S.useState(null), h = (0, Rt.s)(r, e => g(e)), [w, x] = S.useState(null), _ = (0, $t.X)(w), j = _?.width ?? 0, C = _?.height ?? 0, P = o + ("center" !== a ? "-" + a : ""), R = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, N = Array.isArray(l) ? l : [l], D = N.length > 0, k = {
            padding: R,
            boundary: N.filter(po),
            altBoundary: D
          }, {
            refs: z,
            floatingStyles: I,
            placement: T,
            isPositioned: E,
            middlewareData: L
          } = (0, Zt.we)({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => (0, Ht.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: m.anchor
            },
            middleware: [(0, Zt.cY)({
              mainAxis: n + C,
              alignmentAxis: s
            }), d && (0, Zt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Zt.ER)() : void 0,
              ...k
            }), d && (0, Zt.UU)({
              ...k
            }), (0, Zt.Ej)({
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
            }), w && (0, Zt.UE)({
              element: w,
              padding: i
            }), yo({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, Zt.jD)({
              strategy: "referenceHidden",
              ...k
            })]
          }), [V, A] = vo(T), M = (0, Tt.c)(y);
          (0, Ut.N)(() => {
            E && M?.()
          }, [E, M]);
          const q = L.arrow?.x,
            F = L.arrow?.y,
            B = 0 !== L.arrow?.centerOffset,
            [X, K] = S.useState();
          return (0, Ut.N)(() => {
            b && K(window.getComputedStyle(b).zIndex)
          }, [b]), (0, O.jsx)("div", {
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
            children: (0, O.jsx)(so, {
              scope: t,
              placedSide: V,
              onArrowChange: x,
              arrowX: q,
              arrowY: F,
              shouldHideArrow: B,
              children: (0, O.jsx)(kt.div, {
                "data-side": V,
                "data-align": A,
                ...v,
                ref: h,
                style: {
                  ...v.style,
                  animation: E ? void 0 : "none"
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
        fo = S.forwardRef(function(e, r) {
          const {
            __scopePopper: t,
            ...o
          } = e, n = io(co, t), a = uo[n.placedSide];
          return (0, O.jsx)("span", {
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
            children: (0, O.jsx)(Wt, {
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
      var yo = e => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          const {
            placement: t,
            rects: o,
            middlewareData: n
          } = r, a = 0 !== n.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = vo(t), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], u = (n.arrow?.x ?? 0) + s / 2, f = (n.arrow?.y ?? 0) + i / 2;
          let p = "",
            y = "";
          return "bottom" === d ? (p = a ? c : `${u}px`, y = -i + "px") : "top" === d ? (p = a ? c : `${u}px`, y = `${o.floating.height+i}px`) : "right" === d ? (p = -i + "px", y = a ? c : `${f}px`) : "left" === d && (p = `${o.floating.width+i}px`, y = a ? c : `${f}px`), {
            data: {
              x: p,
              y
            }
          }
        }
      });

      function vo(e) {
        const [r, t = "center"] = e.split("-");
        return [r, t]
      }
      var mo = to,
        bo = no,
        go = lo,
        ho = fo,
        wo = S.forwardRef((e, r) => {
          const {
            container: t,
            ...o
          } = e, [n, a] = S.useState(!1);
          (0, Ut.N)(() => a(!0), []);
          const s = t || n && globalThis?.document?.body;
          return s ? Nt.createPortal((0, O.jsx)(kt.div, {
            ...o,
            ref: r
          }), s) : null
        });
      wo.displayName = "Portal";
      var xo = e => {
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
          }, [i]), (0, Ut.N)(() => {
            const r = o.current,
              t = n.current;
            if (t !== e) {
              const o = a.current,
                s = _o(r);
              d(e ? "MOUNT" : "none" === s || "none" === r?.display ? "UNMOUNT" : t && o !== s ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e
            }
          }, [e, d]), (0, Ut.N)(() => {
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
        }) : S.Children.only(t), a = (0, Rt.s)(o.ref, function(e) {
          let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            t = r && "isReactWarning" in r && r.isReactWarning;
          return t ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = r && "isReactWarning" in r && r.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
        }(n));
        return "function" == typeof t || o.isPresent ? S.cloneElement(n, {
          ref: a
        }) : null
      };

      function _o(e) {
        return e?.animationName || "none"
      }
      xo.displayName = "Presence";
      var jo = t(1531),
        Co = Object.freeze({
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
        Po = S.forwardRef((e, r) => (0, O.jsx)(kt.span, {
          ...e,
          ref: r,
          style: {
            ...Co,
            ...e.style
          }
        }));
      Po.displayName = "VisuallyHidden";
      var Oo = Po,
        [Ro, So] = (0, St.A)("Tooltip", [Jt]),
        No = Jt(),
        Do = "TooltipProvider",
        ko = 700,
        zo = "tooltip.open",
        [Io, To] = Ro(Do),
        Eo = e => {
          const {
            __scopeTooltip: r,
            delayDuration: t = ko,
            skipDelayDuration: o = 300,
            disableHoverableContent: n = !1,
            children: a
          } = e, s = S.useRef(!0), i = S.useRef(!1), d = S.useRef(0);
          return S.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, O.jsx)(Io, {
            scope: r,
            isOpenDelayedRef: s,
            delayDuration: t,
            onOpen: S.useCallback(() => {
              window.clearTimeout(d.current), s.current = !1
            }, []),
            onClose: S.useCallback(() => {
              window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, o)
            }, [o]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: S.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: n,
            children: a
          })
        };
      Eo.displayName = Do;
      var Lo = "Tooltip",
        [Vo, Ao] = Ro(Lo),
        Mo = e => {
          const {
            __scopeTooltip: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = To(Lo, e.__scopeTooltip), l = No(r), [c, u] = S.useState(null), f = (0, Kt.B)(), p = S.useRef(0), y = s ?? d.disableHoverableContent, v = i ?? d.delayDuration, m = S.useRef(!1), [b, g] = (0, jo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(zo))) : d.onClose(), a?.(e)
            },
            caller: Lo
          }), h = S.useMemo(() => b ? m.current ? "delayed-open" : "instant-open" : "closed", [b]), w = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, m.current = !1, g(!0)
          }, [g]), x = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), _ = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              m.current = !0, g(!0), p.current = 0
            }, v)
          }, [v, g]);
          return S.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, O.jsx)(mo, {
            ...l,
            children: (0, O.jsx)(Vo, {
              scope: r,
              contentId: f,
              open: b,
              stateAttribute: h,
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
              children: t
            })
          })
        };
      Mo.displayName = Lo;
      var qo = "TooltipTrigger",
        Fo = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = Ao(qo, t), a = To(qo, t), s = No(t), i = S.useRef(null), d = (0, Rt.s)(r, i, n.onTriggerChange), l = S.useRef(!1), c = S.useRef(!1), u = S.useCallback(() => l.current = !1, []);
          return S.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, O.jsx)(bo, {
            asChild: !0,
            ...s,
            children: (0, O.jsx)(kt.button, {
              "aria-describedby": n.open ? n.contentId : void 0,
              "data-state": n.stateAttribute,
              ...o,
              ref: d,
              onPointerMove: (0, Ot.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (n.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Ot.mK)(e.onPointerLeave, () => {
                n.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Ot.mK)(e.onPointerDown, () => {
                n.open && n.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Ot.mK)(e.onFocus, () => {
                l.current || n.onOpen()
              }),
              onBlur: (0, Ot.mK)(e.onBlur, n.onClose),
              onClick: (0, Ot.mK)(e.onClick, n.onClose)
            })
          })
        });
      Fo.displayName = qo;
      var Bo = "TooltipPortal",
        [Xo, Ko] = Ro(Bo, {
          forceMount: void 0
        }),
        Zo = e => {
          const {
            __scopeTooltip: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = Ao(Bo, r);
          return (0, O.jsx)(Xo, {
            scope: r,
            forceMount: t,
            children: (0, O.jsx)(xo, {
              present: t || a.open,
              children: (0, O.jsx)(wo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      Zo.displayName = Bo;
      var Ho = "TooltipContent",
        Go = S.forwardRef((e, r) => {
          const t = Ko(Ho, e.__scopeTooltip),
            {
              forceMount: o = t.forceMount,
              side: n = "top",
              ...a
            } = e,
            s = Ao(Ho, e.__scopeTooltip);
          return (0, O.jsx)(xo, {
            present: o || s.open,
            children: s.disableHoverableContent ? (0, O.jsx)(Qo, {
              side: n,
              ...a,
              ref: r
            }) : (0, O.jsx)(Wo, {
              side: n,
              ...a,
              ref: r
            })
          })
        }),
        Wo = S.forwardRef((e, r) => {
          const t = Ao(Ho, e.__scopeTooltip),
            o = To(Ho, e.__scopeTooltip),
            n = S.useRef(null),
            a = (0, Rt.s)(r, n),
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
          }, [d, c, s, l, f]), (0, O.jsx)(Qo, {
            ...e,
            ref: a
          })
        }),
        [Uo, $o] = Ro(Lo, {
          isInside: !1
        }),
        Yo = (0, Dt.Dc)("TooltipContent"),
        Qo = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            children: o,
            "aria-label": n,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Ao(Ho, t), l = No(t), {
            onClose: c
          } = d;
          return S.useEffect(() => (document.addEventListener(zo, c), () => document.removeEventListener(zo, c)), [c]), S.useEffect(() => {
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
          }, [d.trigger, c]), (0, O.jsx)(At, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, O.jsxs)(go, {
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
              children: [(0, O.jsx)(Yo, {
                children: o
              }), (0, O.jsx)(Uo, {
                scope: t,
                isInside: !0,
                children: (0, O.jsx)(Oo, {
                  id: d.contentId,
                  role: "tooltip",
                  children: n || o
                })
              })]
            })
          })
        });
      Go.displayName = Ho;
      var Jo = "TooltipArrow",
        en = S.forwardRef((e, r) => {
          const {
            __scopeTooltip: t,
            ...o
          } = e, n = No(t);
          return $o(Jo, t).isInside ? null : (0, O.jsx)(ho, {
            ...n,
            ...o,
            ref: r
          })
        });
      en.displayName = Jo;
      var rn = Eo,
        tn = Mo,
        on = Fo,
        nn = Zo,
        an = Go,
        sn = en;
      const dn = (0, S.createContext)(null);

      function ln() {
        const e = (0, S.useContext)(dn);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const cn = ({
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
          return (0, O.jsx)(rn, {
            delayDuration: r,
            children: (0, O.jsx)(dn.Provider, {
              value: {
                isOpen: a,
                ...n
              },
              children: (0, O.jsx)(tn, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        un = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => (0, O.jsx)(on, {
          asChild: !0,
          "data-testid": r,
          ...t,
          ref: o,
          children: e
        })),
        fn = (0, S.forwardRef)(({
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
          } = ln(), c = (0, ue.jt)(), u = (0, Pt.CS)(an), f = (0, Pt.pn)(l, {
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
            config: Pt.$W.stiff,
            immediate: c
          }), p = (0, k.mergeProps)({
            "data-testid": e,
            side: r,
            align: o,
            sticky: s,
            sideOffset: t,
            alignOffset: n,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, O.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        pn = (0, S.forwardRef)(({
          testId: e
        }, r) => {
          const t = (0, k.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, O.jsx)(sn, {
            ...t,
            ref: r
          })
        }),
        yn = nn;
      var vn = t(47690),
        mn = t(93689),
        bn = t(14823);

      function gn(e) {
        const r = e + "CollectionProvider",
          [t, o] = (0, St.A)(r),
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
            return (0, O.jsx)(n, {
              scope: r,
              itemMap: a,
              collectionRef: o,
              children: t
            })
          };
        s.displayName = r;
        const i = e + "CollectionSlot",
          d = (0, Dt.TL)(i),
          l = S.forwardRef((e, r) => {
            const {
              scope: t,
              children: o
            } = e, n = a(i, t), s = (0, Rt.s)(r, n.collectionRef);
            return (0, O.jsx)(d, {
              ref: s,
              children: o
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, Dt.TL)(c),
          p = S.forwardRef((e, r) => {
            const {
              scope: t,
              children: o,
              ...n
            } = e, s = S.useRef(null), i = (0, Rt.s)(r, s), d = a(c, t);
            return S.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...n
            }), () => {
              d.itemMap.delete(s)
            })), (0, O.jsx)(f, {
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
        wn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        xn = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        _n = "Slider",
        [jn, Cn, Pn] = gn(_n),
        [On, Rn] = (0, St.A)(_n, [Pn]),
        [Sn, Nn] = On(_n),
        Dn = S.forwardRef((e, r) => {
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
            form: y,
            ...v
          } = e, m = S.useRef(new Set), b = S.useRef(0), g = "horizontal" === s ? In : Tn, [h = [], w] = (0, jo.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const r = [...m.current];
              r[b.current]?.focus(), u(e)
            }
          }), x = S.useRef(h);

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
              l = (0, vn.q)(i, [o, n]);
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
                b.current = o.indexOf(l);
                const r = String(o) !== String(e);
                return r && t && f(o), r ? o : e
              }
              return e
            })
          }
          return (0, O.jsx)(Sn, {
            scope: e.__scopeSlider,
            name: t,
            disabled: i,
            min: o,
            max: n,
            valueIndexToChangeRef: b,
            thumbs: m.current,
            values: h,
            orientation: s,
            form: y,
            children: (0, O.jsx)(jn.Provider, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)(jn.Slot, {
                scope: e.__scopeSlider,
                children: (0, O.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...v,
                  ref: r,
                  onPointerDown: (0, Ot.mK)(v.onPointerDown, () => {
                    i || (x.current = h)
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
                    }(h, e);
                    _(e, r)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    _(e, b.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = x.current[b.current];
                    h[b.current] !== e && f(h)
                  },
                  onHomeKeyDown: () => !i && _(o, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !i && _(n, h.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: r
                  }) => {
                    if (!i) {
                      const t = hn.includes(e.key) || e.shiftKey && wn.includes(e.key) ? 10 : 1,
                        o = b.current;
                      _(h[o] + a * t * r, o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Dn.displayName = _n;
      var [kn, zn] = On(_n, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), In = S.forwardRef((e, r) => {
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
        } = e, [u, f] = S.useState(null), p = (0, Rt.s)(r, e => f(e)), y = S.useRef(void 0), v = (0, mn.jH)(n), m = "ltr" === v, b = m && !a || !m && a;

        function g(e) {
          const r = y.current || u.getBoundingClientRect(),
            n = Zn([0, r.width], b ? [t, o] : [o, t]);
          return y.current = r, n(e - r.left)
        }
        return (0, O.jsx)(kn, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, O.jsx)(En, {
            dir: v,
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
              y.current = void 0, d?.()
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
      }), Tn = S.forwardRef((e, r) => {
        const {
          min: t,
          max: o,
          inverted: n,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = S.useRef(null), u = (0, Rt.s)(r, c), f = S.useRef(void 0), p = !n;

        function y(e) {
          const r = f.current || c.current.getBoundingClientRect(),
            n = Zn([0, r.height], p ? [o, t] : [t, o]);
          return f.current = r, n(e - r.top)
        }
        return (0, O.jsx)(kn, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, O.jsx)(En, {
            "data-orientation": "vertical",
            ...l,
            ref: u,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const r = y(e.clientY);
              a?.(r)
            },
            onSlideMove: e => {
              const r = y(e.clientY);
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
      }), En = S.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          onSlideStart: o,
          onSlideMove: n,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = Nn(_n, t);
        return (0, O.jsx)(kt.span, {
          ...l,
          ref: r,
          onKeyDown: (0, Ot.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : hn.concat(wn).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, Ot.mK)(e.onPointerDown, e => {
            const r = e.target;
            r.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(r) ? r.focus() : o(e)
          }),
          onPointerMove: (0, Ot.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && n(e)
          }),
          onPointerUp: (0, Ot.mK)(e.onPointerUp, e => {
            const r = e.target;
            r.hasPointerCapture(e.pointerId) && (r.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Ln = "SliderTrack", Vn = S.forwardRef((e, r) => {
        const {
          __scopeSlider: t,
          ...o
        } = e, n = Nn(Ln, t);
        return (0, O.jsx)(kt.span, {
          "data-disabled": n.disabled ? "" : void 0,
          "data-orientation": n.orientation,
          ...o,
          ref: r
        })
      });
      Vn.displayName = Ln;
      var An = "SliderRange",
        Mn = S.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            ...o
          } = e, n = Nn(An, t), a = zn(An, t), s = S.useRef(null), i = (0, Rt.s)(r, s), d = n.values.length, l = n.values.map(e => Kn(e, n.min, n.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, O.jsx)(kt.span, {
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
      Mn.displayName = An;
      var qn = "SliderThumb",
        Fn = S.forwardRef((e, r) => {
          const t = Cn(e.__scopeSlider),
            [o, n] = S.useState(null),
            a = (0, Rt.s)(r, e => n(e)),
            s = S.useMemo(() => o ? t().findIndex(e => e.ref.current === o) : -1, [t, o]);
          return (0, O.jsx)(Bn, {
            ...e,
            ref: a,
            index: s
          })
        }),
        Bn = S.forwardRef((e, r) => {
          const {
            __scopeSlider: t,
            index: o,
            name: n,
            ...a
          } = e, s = Nn(qn, t), i = zn(qn, t), [d, l] = S.useState(null), c = (0, Rt.s)(r, e => l(e)), u = !d || s.form || !!d.closest("form"), f = (0, $t.X)(d), p = s.values[o], y = void 0 === p ? 0 : Kn(p, s.min, s.max), v = function(e, r) {
            return r > 2 ? `Value ${e+1} of ${r}` : 2 === r ? ["Minimum", "Maximum"][e] : void 0
          }(o, s.values.length), m = f?.[i.size], b = m ? function(e, r, t) {
            const o = e / 2;
            return (o - Zn([0, 50], [0, o])(r) * t) * t
          }(m, y, i.direction) : 0;
          return S.useEffect(() => {
            if (d) return s.thumbs.add(d), () => {
              s.thumbs.delete(d)
            }
          }, [d, s.thumbs]), (0, O.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${y}% + ${b}px)`
            },
            children: [(0, O.jsx)(jn.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, O.jsx)(kt.span, {
                role: "slider",
                "aria-label": e["aria-label"] || v,
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
                onFocus: (0, Ot.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = o
                })
              })
            }), u && (0, O.jsx)(Xn, {
              name: n ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, o)]
          })
        });
      Fn.displayName = qn;
      var Xn = S.forwardRef(({
        __scopeSlider: e,
        value: r,
        ...t
      }, o) => {
        const n = S.useRef(null),
          a = (0, Rt.s)(n, o),
          s = (0, bn.Z)(r);
        return S.useEffect(() => {
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
        }, [s, r]), (0, O.jsx)(kt.input, {
          style: {
            display: "none"
          },
          ...t,
          ref: a,
          defaultValue: r
        })
      });

      function Kn(e, r, t) {
        const o = 100 / (t - r) * (e - r);
        return (0, vn.q)(o, [0, 100])
      }

      function Zn(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }
      Xn.displayName = "RadioBubbleInput";
      var Hn = Dn,
        Gn = Vn,
        Wn = Mn,
        Un = Fn,
        $n = "focusScope.autoFocusOnMount",
        Yn = "focusScope.autoFocusOnUnmount",
        Qn = {
          bubbles: !1,
          cancelable: !0
        },
        Jn = S.forwardRef((e, r) => {
          const {
            loop: t = !1,
            trapped: o = !1,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = S.useState(null), l = (0, Tt.c)(n), c = (0, Tt.c)(a), u = S.useRef(null), f = (0, Rt.s)(r, e => d(e)), p = S.useRef({
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
                  i.contains(r) ? u.current = r : oa(u.current, {
                    select: !0
                  })
                },
                r = function(e) {
                  if (p.paused || !i) return;
                  const r = e.relatedTarget;
                  null !== r && (i.contains(r) || oa(u.current, {
                    select: !0
                  }))
                },
                t = function(e) {
                  if (document.activeElement === document.body)
                    for (const r of e) r.removedNodes.length > 0 && oa(i)
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
              na.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const r = new CustomEvent($n, Qn);
                i.addEventListener($n, l), i.dispatchEvent(r), r.defaultPrevented || (function(e, {
                  select: r = !1
                } = {}) {
                  const t = document.activeElement;
                  for (const o of e)
                    if (oa(o, {
                        select: r
                      }), document.activeElement !== t) return
                }(ea(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && oa(i))
              }
              return () => {
                i.removeEventListener($n, l), setTimeout(() => {
                  const r = new CustomEvent(Yn, Qn);
                  i.addEventListener(Yn, c), i.dispatchEvent(r), r.defaultPrevented || oa(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Yn, c), na.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const y = S.useCallback(e => {
            if (!t && !o) return;
            if (p.paused) return;
            const r = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              n = document.activeElement;
            if (r && n) {
              const r = e.currentTarget,
                [o, a] = function(e) {
                  const r = ea(e);
                  return [ra(r, e), ra(r.reverse(), e)]
                }(r);
              o && a ? e.shiftKey || n !== a ? e.shiftKey && n === o && (e.preventDefault(), t && oa(a, {
                select: !0
              })) : (e.preventDefault(), t && oa(o, {
                select: !0
              })) : n === r && e.preventDefault()
            }
          }, [t, o, p.paused]);
          return (0, O.jsx)(kt.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: y
          })
        });

      function ea(e) {
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

      function ra(e, r) {
        for (const t of e)
          if (!ta(t, {
              upTo: r
            })) return t
      }

      function ta(e, {
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

      function oa(e, {
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
      Jn.displayName = "FocusScope";
      var na = function() {
        let e = [];
        return {
          add(r) {
            const t = e[0];
            r !== t && t?.pause(), e = aa(e, r), e.unshift(r)
          },
          remove(r) {
            e = aa(e, r), e[0]?.resume()
          }
        }
      }();

      function aa(e, r) {
        const t = [...e],
          o = t.indexOf(r);
        return -1 !== o && t.splice(o, 1), t
      }
      var sa = t(91685),
        ia = t(35328),
        da = t(45787),
        la = "Dialog",
        [ca, ua] = (0, St.A)(la),
        [fa, pa] = ca(la),
        ya = e => {
          const {
            __scopeDialog: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !0
          } = e, i = S.useRef(null), d = S.useRef(null), [l, c] = (0, jo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: la
          });
          return (0, O.jsx)(fa, {
            scope: r,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Kt.B)(),
            titleId: (0, Kt.B)(),
            descriptionId: (0, Kt.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: S.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: t
          })
        };
      ya.displayName = la;
      var va = "DialogTrigger",
        ma = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = pa(va, t), a = (0, Rt.s)(r, n.triggerRef);
          return (0, O.jsx)(kt.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.contentId,
            "data-state": La(n.open),
            ...o,
            ref: a,
            onClick: (0, Ot.mK)(e.onClick, n.onOpenToggle)
          })
        });
      ma.displayName = va;
      var ba = "DialogPortal",
        [ga, ha] = ca(ba, {
          forceMount: void 0
        }),
        wa = e => {
          const {
            __scopeDialog: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = pa(ba, r);
          return (0, O.jsx)(ga, {
            scope: r,
            forceMount: t,
            children: S.Children.map(o, e => (0, O.jsx)(xo, {
              present: t || a.open,
              children: (0, O.jsx)(wo, {
                asChild: !0,
                container: n,
                children: e
              })
            }))
          })
        };
      wa.displayName = ba;
      var xa = "DialogOverlay",
        _a = S.forwardRef((e, r) => {
          const t = ha(xa, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = pa(xa, e.__scopeDialog);
          return a.modal ? (0, O.jsx)(xo, {
            present: o || a.open,
            children: (0, O.jsx)(Ca, {
              ...n,
              ref: r
            })
          }) : null
        });
      _a.displayName = xa;
      var ja = (0, Dt.TL)("DialogOverlay.RemoveScroll"),
        Ca = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = pa(xa, t);
          return (0, O.jsx)(ia.A, {
            as: ja,
            allowPinchZoom: !0,
            shards: [n.contentRef],
            children: (0, O.jsx)(kt.div, {
              "data-state": La(n.open),
              ...o,
              ref: r,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }),
        Pa = "DialogContent",
        Oa = S.forwardRef((e, r) => {
          const t = ha(Pa, e.__scopeDialog),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = pa(Pa, e.__scopeDialog);
          return (0, O.jsx)(xo, {
            present: o || a.open,
            children: a.modal ? (0, O.jsx)(Ra, {
              ...n,
              ref: r
            }) : (0, O.jsx)(Sa, {
              ...n,
              ref: r
            })
          })
        });
      Oa.displayName = Pa;
      var Ra = S.forwardRef((e, r) => {
          const t = pa(Pa, e.__scopeDialog),
            o = S.useRef(null),
            n = (0, Rt.s)(r, t.contentRef, o);
          return S.useEffect(() => {
            const e = o.current;
            if (e) return (0, da.Eq)(e)
          }, []), (0, O.jsx)(Na, {
            ...e,
            ref: n,
            trapFocus: t.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, Ot.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), t.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Ot.mK)(e.onPointerDownOutside, e => {
              const r = e.detail.originalEvent,
                t = 0 === r.button && !0 === r.ctrlKey;
              (2 === r.button || t) && e.preventDefault()
            }),
            onFocusOutside: (0, Ot.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        Sa = S.forwardRef((e, r) => {
          const t = pa(Pa, e.__scopeDialog),
            o = S.useRef(!1),
            n = S.useRef(!1);
          return (0, O.jsx)(Na, {
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
        Na = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            ...s
          } = e, i = pa(Pa, t), d = S.useRef(null), l = (0, Rt.s)(r, d);
          return (0, sa.Oh)(), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(Jn, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: n,
              onUnmountAutoFocus: a,
              children: (0, O.jsx)(At, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": La(i.open),
                ...s,
                ref: l,
                onDismiss: () => i.onOpenChange(!1)
              })
            }), (0, O.jsxs)(O.Fragment, {
              children: [(0, O.jsx)(qa, {
                titleId: i.titleId
              }), (0, O.jsx)(Fa, {
                contentRef: d,
                descriptionId: i.descriptionId
              })]
            })]
          })
        }),
        Da = "DialogTitle",
        ka = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = pa(Da, t);
          return (0, O.jsx)(kt.h2, {
            id: n.titleId,
            ...o,
            ref: r
          })
        });
      ka.displayName = Da;
      var za = "DialogDescription",
        Ia = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = pa(za, t);
          return (0, O.jsx)(kt.p, {
            id: n.descriptionId,
            ...o,
            ref: r
          })
        });
      Ia.displayName = za;
      var Ta = "DialogClose",
        Ea = S.forwardRef((e, r) => {
          const {
            __scopeDialog: t,
            ...o
          } = e, n = pa(Ta, t);
          return (0, O.jsx)(kt.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, Ot.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });

      function La(e) {
        return e ? "open" : "closed"
      }
      Ea.displayName = Ta;
      var Va = "DialogTitleWarning",
        [Aa, Ma] = (0, St.q)(Va, {
          contentName: Pa,
          titleName: Da,
          docsSlug: "dialog"
        }),
        qa = ({
          titleId: e
        }) => {
          const r = Ma(Va),
            t = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
          return S.useEffect(() => {
            e && (document.getElementById(e) || console.error(t))
          }, [t, e]), null
        },
        Fa = ({
          contentRef: e,
          descriptionId: r
        }) => {
          const t = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ma("DialogDescriptionWarning").contentName}}.`;
          return S.useEffect(() => {
            const o = e.current?.getAttribute("aria-describedby");
            r && o && (document.getElementById(r) || console.warn(t))
          }, [t, e, r]), null
        },
        Ba = ya,
        Xa = ma,
        Ka = wa,
        Za = _a,
        Ha = Oa,
        Ga = ka,
        Wa = Ia,
        Ua = Ea;
      const $a = (0, S.createContext)({
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
        Ya = ({
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
            p = (0, ue.rl)(),
            y = (0, S.useRef)(null),
            v = (0, S.useRef)(null),
            m = (0, S.useRef)(null),
            b = (0, S.useRef)(null),
            g = (0, S.useRef)(null),
            h = (0, S.useRef)(null),
            w = (0, S.useRef)(null),
            x = (0, S.useRef)(null),
            _ = (0, S.useRef)(null),
            j = (0, S.useRef)(null),
            C = (0, S.useRef)(null),
            P = (0, S.useRef)(null),
            R = (0, S.useRef)(null),
            N = (0, S.useRef)(null),
            D = (0, S.useRef)(null),
            k = (0, S.useRef)(null),
            z = (0, S.useRef)(null),
            I = (0, S.useRef)(null),
            T = (0, S.useRef)(null),
            [E = !1, L] = (0, ue.ic)({
              prop: r || o,
              onChange: t
            }),
            V = (0, S.useRef)(null);
          return V.current || (V.current = new wt({
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
          })), (0, O.jsx)(dt.Dk, {
            messages: lt,
            locale: f,
            children: (0, O.jsx)($a.Provider, {
              value: {
                triggerRef: y,
                triggerBorderRef: v,
                thumbnailRef: m,
                openIconRef: b,
                overlayRef: g,
                contentRef: h,
                containerRef: w,
                zoomPanRef: x,
                imageRef: _,
                placeholderRef: j,
                captionRef: C,
                controlsRef: P,
                closeRef: R,
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
                slide: V.current
              },
              children: (0, O.jsx)(Ja, {
                ...u
              })
            })
          })
        },
        Qa = (0, S.createContext)({
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
        Ja = ({
          ...e
        }) => {
          const {
            open: r
          } = (0, S.useContext)($a), {
            onOpenChange: t,
            openAnim: o,
            close: n
          } = (() => {
            const {
              contextSafe: e
            } = (0, Br.L)(), {
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
            } = (0, S.useContext)($a), p = (0, S.useRef)(null);
            p.current || (p.current = Fr.os.timeline({
              defaults: at
            }));
            const y = (0, S.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const r = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of r)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              v = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), d.current && i.current && (r.opening = !0, r.setup(i.current, d.current), r.zoomAndPanToInitial(), Fr.os.set([u.current, f.current], {
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
                }), Fr.os.set([f.current], {
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
                  [it]: "none"
                }, {
                  opacity: () => r.getControlsOpacity(),
                  [it]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), r.opening = !1, r.dispatch("zoom"), r.closing || await Kr(f.current), r.closing || (Fr.os.set([f.current], {
                  visibility: "visible",
                  ...st
                }), Fr.os.set([u.current], {
                  visibility: "hidden",
                  ...st
                }))))
              }),
              m = e(async () => {
                r.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              b = (0, S.useCallback)(async e => {
                e || (window.addEventListener("click", y), await m(), window.removeEventListener("click", y)), t(e)
              }, [t]),
              g = (0, S.useCallback)(() => b(!1), [b]);
            return {
              onOpenChange: b,
              openAnim: v,
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
            } = (0, Br.L)(), {
              slide: t,
              imageRef: o,
              zoomPanRef: n,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, S.useContext)($a), d = r(async e => {
              t.zoomTo(e), Fr.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...st
              })
            }), l = r(async () => {
              t.zoomTo(t.currZoomLevel + t.zoomLevels.step), Fr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...st
              })
            }), c = r(async () => {
              t.zoomTo(t.currZoomLevel - t.zoomLevels.step), Fr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...st
              })
            }), u = r(async () => {
              t.zoomAndPanToInitial(), Fr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...st
              })
            }), f = r(async () => {
              if (t.closing) return;
              t.toggleControls();
              const e = t.getControlsOpacity(),
                r = 1 === e ? "auto" : "none";
              Fr.os.to([a.current], {
                opacity: e,
                [it]: r,
                ...st
              })
            }), p = r(async () => {
              Fr.os.to([n.current], {
                ...t.getCurrentTransform(),
                ...st
              })
            }), y = (0, S.useCallback)(() => {
              o.current && n.current && (Fr.os.set([n.current], {
                ...t.getCurrentTransform(),
                ...st
              }), Fr.os.set([o.current, i.current], {
                ...t.getUpdatedContentSize(),
                ...st
              }), Fr.os.set([s.current], {
                width: t.panAreaSize.w,
                height: t.panAreaSize.h
              }))
            }, []);
            return (0, S.useEffect)(() => (t.addEventListener("close", e), t.addEventListener("animate", p), t.addEventListener("toggle-controls", f), t.addEventListener("resize", y), window.addEventListener("resize", t.resize.bind(t)), () => {
              t.removeEventListener("close", e), t.removeEventListener("animate", p), t.removeEventListener("toggle-controls", f), t.removeEventListener("resize", y), window.removeEventListener("resize", t.resize.bind(t))
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
          }), u = (0, k.mergeProps)(e, {
            open: r,
            onOpenChange: t
          });
          return (0, O.jsx)(Qa.Provider, {
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
            children: (0, O.jsx)(Ba, {
              ...u
            })
          })
        },
        es = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const n = (0, dt.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, S.useContext)($a),
            d = (0, ue.UP)(a, o),
            l = (0, k.mergeProps)(t, {
              "data-testid": e,
              "aria-label": n.formatMessage(_t.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, O.jsx)(Xa, {
            ref: d,
            ...l,
            children: (0, O.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, O.jsx)(fe.xV, {
                children: r
              })
            })
          })
        }),
        rs = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            thumbnailRef: n
          } = (0, S.useContext)($a), a = (0, ue.UP)(n, o), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = r ? fe.DX : "img";
          return (0, O.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ts = (0, S.forwardRef)(function({
          asChild: e,
          ...r
        }, t) {
          const {
            openIconRef: o
          } = (0, S.useContext)($a), n = (0, ue.UP)(o, t), a = (0, k.mergeProps)(r, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? fe.DX : Ve.Maximize2;
          return (0, O.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        os = ({
          ...e
        }) => (0, O.jsx)(Ka, {
          ...e
        }),
        ns = (0, S.forwardRef)(function({
          testId: e,
          ...r
        }, t) {
          const {
            overlayRef: o
          } = (0, S.useContext)($a), n = (0, ue.UP)(o, t), a = (0, k.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, O.jsx)(Za, {
            ref: n,
            ...a
          })
        }),
        as = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            openAnim: n
          } = (0, S.useContext)(Qa), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, S.useContext)($a), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, S.useContext)($a), [r, t] = (0, S.useState)(e.getCursor()), o = (0, S.useCallback)(() => {
              t(e.getCursor())
            }, []);
            return (0, S.useEffect)(() => (e.addEventListener("zoom", o), () => {
              e.removeEventListener("zoom", o)
            }), [o]), {
              cursor: r
            }
          })(), l = [ge.tokens, ge.typography, ge.grid, xt("dark")].join(" ");
          const c = (0, ue.UP)(a, o),
            u = (0, k.mergeProps)(t, {
              "data-testid": e,
              onOpenAutoFocus: n,
              onCloseAutoFocus: e => ((e, r) => {
                e?.preventDefault(), r.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, Le.clsx)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, O.jsxs)(Ha, {
            ref: c,
            ...u,
            children: [(0, O.jsx)(fe.s6, {
              children: (0, O.jsx)(Ga, {
                children: s
              })
            }), r]
          })
        }),
        ss = (0, S.forwardRef)(function({
          testId: e,
          children: r,
          ...t
        }, o) {
          const {
            containerRef: n
          } = (0, S.useContext)($a);
          (() => {
            const {
              contextSafe: e
            } = (0, Br.L)(), {
              toggleControls: r
            } = (0, S.useContext)(Qa), {
              containerRef: t,
              zoomPanRef: o,
              overlayRef: n,
              controlsRef: a,
              slide: s
            } = (0, S.useContext)($a), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Fr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...st
              }), Fr.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...st
              }), Fr.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...st
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Fr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...st
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Fr.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...st
              }), Fr.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...st
              }), Fr.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...st
              })))
            }), c = (0, S.useCallback)(() => {
              s.controlsVisible || r()
            }, [, r]);
            (0, ue.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Xr.useGesture)({
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
            s = (0, k.mergeProps)(t, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, O.jsx)("div", {
            ref: a,
            ...s,
            children: (0, O.jsxs)(is, {
              children: [(0, O.jsx)(ds, {}), r]
            })
          })
        }),
        is = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            zoomPanRef: n
          } = (0, S.useContext)($a), a = (0, ue.UP)(n, o), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = r ? fe.DX : "div";
          return (0, O.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ds = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            placeholderRef: n
          } = (0, S.useContext)($a), a = (0, ue.UP)(n, o), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = r ? fe.DX : "img";
          return (0, O.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ls = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            imageRef: n
          } = (0, S.useContext)($a), a = (0, ue.UP)(n, o), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = r ? fe.DX : "img";
          return (0, O.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        cs = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            captionRef: n
          } = (0, S.useContext)($a), a = (0, ue.UP)(n, o), s = (0, k.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = r ? fe.DX : "p";
          return (0, O.jsx)(Wa, {
            asChild: !0,
            children: (0, O.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        us = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          ...t
        }, o) {
          const {
            controlsRef: n
          } = (0, S.useContext)($a);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: r,
              zoomOut: t,
              resetZoom: o,
              close: n
            } = (0, S.useContext)(Qa);
            (0, $r.vC)(["+", "=", "add", "plus"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, $r.vC)(["minus", "subtract"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, $r.vC)("r", o, {
              enabled: e,
              preventDefault: !0
            }), (0, $r.vC)("esc", n, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, ue.UP)(n, o),
            s = (0, k.mergeProps)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = r ? fe.DX : "div";
          return (0, O.jsx)($r.Hb, {
            children: (0, O.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        fs = ({
          content: e,
          metadata: r,
          enabled: t = !0,
          children: o,
          ...n
        }) => {
          if (!t) return (0, O.jsx)(O.Fragment, {
            children: o
          });
          const a = (0, k.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, n);
          return (0, O.jsxs)(cn, {
            delayDuration: 0,
            children: [(0, O.jsx)(un, {
              children: o
            }), (0, O.jsxs)(fn, {
              ...a,
              children: [(0, O.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, r && (0, O.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: r
                })]
              }), (0, O.jsx)(pn, {})]
            })]
          })
        },
        ps = (0, S.forwardRef)(function({
          ...e
        }, r) {
          const t = (0, k.mergeProps)(e, {
            isInline: !0
          });
          return (0, O.jsx)(Ct, {
            ref: r,
            ...t
          })
        }),
        ys = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          children: o,
          ...n
        }, a) {
          const s = (0, dt.tz)(),
            {
              zoomRef: i
            } = (0, S.useContext)($a),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: y,
              zoomTo: v
            } = (() => {
              const {
                slide: e
              } = (0, S.useContext)($a), {
                zoomIn: r,
                zoomOut: t,
                zoomTo: o
              } = (0, S.useContext)(Qa), [n, a] = (0, S.useState)(!1), [s, i] = (0, S.useState)(!1), [d, l] = (0, S.useState)(0), [c, u] = (0, S.useState)(0), [f, p] = (0, S.useState)(0), y = (0, S.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), v = (0, S.useCallback)(([e]) => {
                o(e / 100)
              }, [o]);
              return (0, S.useEffect)(() => (e.addEventListener("zoom", y), () => {
                e.removeEventListener("zoom", y)
              }), [y]), {
                zoomTo: v,
                zoomIn: r,
                zoomOut: t,
                canZoomIn: n,
                canZoomOut: s,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            m = (0, ue.UP)(i, a),
            b = (0, k.mergeProps)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = r ? fe.DX : "div";
          return (0, O.jsxs)(g, {
            ref: m,
            ...b,
            children: [(0, O.jsx)(fs, {
              side: "left",
              enabled: t,
              content: s.formatMessage(_t.ZoomInButtonLabel),
              metadata: s.formatMessage(_t.ZoomInButtonTooltip, {
                shortcut: (0, O.jsx)(ps, {
                  shortcut: "+"
                })
              }),
              children: (0, O.jsx)(nr, {
                label: s.formatMessage(_t.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: nt({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, O.jsxs)(Hn, {
              className: "foundry_1a74xwbt",
              max: y,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: v,
              children: [(0, O.jsx)(Gn, {
                className: "foundry_1a74xwbu",
                children: (0, O.jsx)(Wn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, O.jsx)(fs, {
                side: "left",
                enabled: t,
                content: s.formatMessage(_t.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, O.jsx)(Un, {
                  className: "foundry_1a74xwbw",
                  children: (0, O.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, O.jsx)(fs, {
              side: "left",
              enabled: t,
              content: s.formatMessage(_t.ZoomOutButtonLabel),
              metadata: s.formatMessage(_t.ZoomOutButtonTooltip, {
                shortcut: (0, O.jsx)(ps, {
                  shortcut: "-"
                })
              }),
              children: (0, O.jsx)(nr, {
                label: s.formatMessage(_t.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: nt({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, O.jsx)(fe.xV, {
              children: o
            })]
          })
        }),
        vs = (0, S.forwardRef)(function({
          testId: e,
          asChild: r,
          showTooltip: t = !0,
          ...o
        }, n) {
          const a = (0, dt.tz)(),
            {
              closeRef: s
            } = (0, S.useContext)($a),
            i = (0, ue.UP)(s, n),
            d = (0, k.mergeProps)(o, {
              "data-testid": e,
              className: ot({
                styled: !r
              })
            }),
            l = r ? (0, O.jsx)(fe.DX, {
              ref: i,
              ...d
            }) : (0, O.jsx)(nr, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(_t.CloseButtonLabel)
            });
          return (0, O.jsx)(fs, {
            side: "right",
            enabled: t,
            content: a.formatMessage(_t.CloseButtonLabel),
            metadata: a.formatMessage(_t.CloseButtonTooltip, {
              shortcut: (0, O.jsx)(ps, {
                shortcut: "Esc"
              })
            }),
            children: (0, O.jsx)(Ua, {
              asChild: !0,
              children: l
            })
          })
        }),
        ms = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, dt.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: r
              } = (0, S.useContext)($a), {
                contextSafe: t
              } = (0, Br.L)(), {
                resetZoom: o
              } = (0, S.useContext)(Qa), [n, a] = (0, S.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = t(e => {
                Fr.os.to([r.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...st
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
            } = (0, S.useContext)($a),
            i = (0, ue.UP)(s, o),
            d = (0, k.mergeProps)(t, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, O.jsx)(fs, {
            side: "left",
            enabled: r,
            content: n.formatMessage(_t.ResetZoomButtonLabel),
            metadata: n.formatMessage(_t.ResetZoomButtonTooltip, {
              shortcut: (0, O.jsx)(ps, {
                shortcut: "R"
              })
            }),
            children: (0, O.jsx)(nr, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: n.formatMessage(_t.ResetZoomButtonLabel)
            })
          })
        }),
        bs = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: r = !0,
          ...t
        }, o) {
          const n = (0, dt.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, S.useContext)($a),
            i = (0, ue.UP)(a, o),
            d = (0, k.mergeProps)(t, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, O.jsx)(fs, {
            side: "left",
            enabled: r,
            content: n.formatMessage(_t.DownloadButtonTooltip),
            children: (0, O.jsx)(nr, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: n.formatMessage(_t.DownloadButtonTooltip),
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
        gs = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var hs = t(13258);

      function ws(e) {
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

      function xs(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function _s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? xs(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ws(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xs(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function js(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Cs = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ps = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = _s(_s({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cs(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return js(e.variantClassNames, e => js(e, e => e.split(" ")[0]))
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
        Os = t(39298);
      const Rs = (0, S.createContext)(null);

      function Ss() {
        const e = (0, S.useContext)(Rs);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Ns = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          descriptionId: o = "",
          errorId: n = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, k.mergeProps)({
              className: Ps({
                status: a
              }),
              "data-testid": r
            }, s),
            l = t ? fe.DX : "div";
          return (0, O.jsx)(Rs.Provider, {
            value: {
              descriptionId: o,
              errorId: n,
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
        Ds = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const {
            status: n
          } = Ss(), a = (0, k.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, t), s = {
            success: Os.Check,
            invalid: Os.X,
            neutral: Os.TriangleAlert
          }, i = r ? fe.DX : s[n];
          return (0, O.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        ks = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            errorId: s
          } = Ss(), i = (0, k.mergeProps)({
            "data-testid": r,
            id: s || a
          }, o), d = t ? fe.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        });
      var zs = "ScrollArea",
        [Is, Ts] = (0, St.A)(zs),
        [Es, Ls] = Is(zs),
        Vs = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            type: o = "hover",
            dir: n,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = S.useState(null), [l, c] = S.useState(null), [u, f] = S.useState(null), [p, y] = S.useState(null), [v, m] = S.useState(null), [b, g] = S.useState(0), [h, w] = S.useState(0), [x, _] = S.useState(!1), [j, C] = S.useState(!1), P = (0, Rt.s)(r, e => d(e)), R = (0, mn.jH)(n);
          return (0, O.jsx)(Es, {
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
            onScrollbarXChange: y,
            scrollbarXEnabled: x,
            onScrollbarXEnabledChange: _,
            scrollbarY: v,
            onScrollbarYChange: m,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, O.jsx)(kt.div, {
              dir: R,
              ...s,
              ref: P,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": h + "px",
                ...e.style
              }
            })
          })
        });
      Vs.displayName = zs;
      var As = "ScrollAreaViewport",
        Ms = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            children: o,
            nonce: n,
            ...a
          } = e, s = Ls(As, t), i = S.useRef(null), d = (0, Rt.s)(r, i, s.onViewportChange);
          return (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: n
            }), (0, O.jsx)(kt.div, {
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
                children: o
              })
            })]
          })
        });
      Ms.displayName = As;
      var qs = "ScrollAreaScrollbar",
        Fs = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ls(qs, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = n, i = "horizontal" === e.orientation;
          return S.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === n.type ? (0, O.jsx)(Bs, {
            ...o,
            ref: r,
            forceMount: t
          }) : "scroll" === n.type ? (0, O.jsx)(Xs, {
            ...o,
            ref: r,
            forceMount: t
          }) : "auto" === n.type ? (0, O.jsx)(Ks, {
            ...o,
            ref: r,
            forceMount: t
          }) : "always" === n.type ? (0, O.jsx)(Zs, {
            ...o,
            ref: r
          }) : null
        });
      Fs.displayName = qs;
      var Bs = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ls(qs, e.__scopeScrollArea), [a, s] = S.useState(!1);
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
          }, [n.scrollArea, n.scrollHideDelay]), (0, O.jsx)(xo, {
            present: t || a,
            children: (0, O.jsx)(Ks, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: r
            })
          })
        }),
        Xs = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Ls(qs, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = ci(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, [n.viewport, a, d, s]), (0, O.jsx)(xo, {
            present: t || "hidden" !== i,
            children: (0, O.jsx)(Zs, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...o,
              ref: r,
              onPointerEnter: (0, Ot.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, Ot.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Ks = S.forwardRef((e, r) => {
          const t = Ls(qs, e.__scopeScrollArea),
            {
              forceMount: o,
              ...n
            } = e,
            [a, s] = S.useState(!1),
            i = "horizontal" === e.orientation,
            d = ci(() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(i ? e : r)
              }
            }, 10);
          return ui(t.viewport, d), ui(t.content, d), (0, O.jsx)(xo, {
            present: o || a,
            children: (0, O.jsx)(Zs, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: r
            })
          })
        }),
        Zs = S.forwardRef((e, r) => {
          const {
            orientation: t = "vertical",
            ...o
          } = e, n = Ls(qs, e.__scopeScrollArea), a = S.useRef(null), s = S.useRef(0), [i, d] = S.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = ni(i.viewport, i.content), c = {
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
              const n = ai(t),
                a = r || n / 2,
                s = n - a,
                i = t.scrollbar.paddingStart + a,
                d = t.scrollbar.size - t.scrollbar.paddingEnd - s,
                l = t.content - t.viewport;
              return ii([i, d], "ltr" === o ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, r)
          }
          return "horizontal" === t ? (0, O.jsx)(Hs, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = si(n.viewport.scrollLeft, i, n.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              n.viewport && (n.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              n.viewport && (n.viewport.scrollLeft = u(e, n.dir))
            }
          }) : "vertical" === t ? (0, O.jsx)(Gs, {
            ...c,
            ref: r,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = si(n.viewport.scrollTop, i);
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
        Hs = S.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = Ls(qs, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, Rt.s)(r, d, a.onScrollbarXChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, O.jsx)($s, {
            "data-orientation": "horizontal",
            ...n,
            ref: l,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ai(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.x),
            onDragScroll: r => e.onDragScroll(r.x),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollLeft + r.deltaX;
                e.onWheelScroll(o), di(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: oi(s.paddingLeft),
                  paddingEnd: oi(s.paddingRight)
                }
              })
            }
          })
        }),
        Gs = S.forwardRef((e, r) => {
          const {
            sizes: t,
            onSizesChange: o,
            ...n
          } = e, a = Ls(qs, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, Rt.s)(r, d, a.onScrollbarYChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, O.jsx)($s, {
            "data-orientation": "vertical",
            ...n,
            ref: l,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ai(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.y),
            onDragScroll: r => e.onDragScroll(r.y),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollTop + r.deltaY;
                e.onWheelScroll(o), di(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && o({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: oi(s.paddingTop),
                  paddingEnd: oi(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Ws, Us] = Is(qs),
        $s = S.forwardRef((e, r) => {
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
          } = e, p = Ls(qs, t), [y, v] = S.useState(null), m = (0, Rt.s)(r, e => v(e)), b = S.useRef(null), g = S.useRef(""), h = p.viewport, w = o.content - o.viewport, x = (0, Tt.c)(c), _ = (0, Tt.c)(d), j = ci(u, 10);

          function C(e) {
            if (b.current) {
              const r = e.clientX - b.current.left,
                t = e.clientY - b.current.top;
              l({
                x: r,
                y: t
              })
            }
          }
          return S.useEffect(() => {
            const e = e => {
              const r = e.target,
                t = y?.contains(r);
              t && x(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [h, y, w, x]), S.useEffect(_, [o, _]), ui(y, j), ui(p.content, j), (0, O.jsx)(Ws, {
            scope: t,
            scrollbar: y,
            hasThumb: n,
            onThumbChange: (0, Tt.c)(a),
            onThumbPointerUp: (0, Tt.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, Tt.c)(i),
            children: (0, O.jsx)(kt.div, {
              ...f,
              ref: m,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Ot.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = y.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, Ot.mK)(e.onPointerMove, C),
              onPointerUp: (0, Ot.mK)(e.onPointerUp, e => {
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), b.current = null
              })
            })
          })
        }),
        Ys = "ScrollAreaThumb",
        Qs = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            ...o
          } = e, n = Us(Ys, e.__scopeScrollArea);
          return (0, O.jsx)(xo, {
            present: t || n.hasThumb,
            children: (0, O.jsx)(Js, {
              ref: r,
              ...o
            })
          })
        }),
        Js = S.forwardRef((e, r) => {
          const {
            __scopeScrollArea: t,
            style: o,
            ...n
          } = e, a = Ls(Ys, t), s = Us(Ys, t), {
            onThumbPositionChange: i
          } = s, d = (0, Rt.s)(r, e => s.onThumbChange(e)), l = S.useRef(void 0), c = ci(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return S.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const r = () => {
                if (c(), !l.current) {
                  const r = li(e, i);
                  l.current = r, i()
                }
              };
              return i(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [a.viewport, c, i]), (0, O.jsx)(kt.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...n,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: (0, Ot.mK)(e.onPointerDownCapture, e => {
              const r = e.target.getBoundingClientRect(),
                t = e.clientX - r.left,
                o = e.clientY - r.top;
              s.onThumbPointerDown({
                x: t,
                y: o
              })
            }),
            onPointerUp: (0, Ot.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Qs.displayName = Ys;
      var ei = "ScrollAreaCorner",
        ri = S.forwardRef((e, r) => {
          const t = Ls(ei, e.__scopeScrollArea),
            o = Boolean(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && o ? (0, O.jsx)(ti, {
            ...e,
            ref: r
          }) : null
        });
      ri.displayName = ei;
      var ti = S.forwardRef((e, r) => {
        const {
          __scopeScrollArea: t,
          ...o
        } = e, n = Ls(ei, t), [a, s] = S.useState(0), [i, d] = S.useState(0), l = Boolean(a && i);
        return ui(n.scrollbarX, () => {
          const e = n.scrollbarX?.offsetHeight || 0;
          n.onCornerHeightChange(e), d(e)
        }), ui(n.scrollbarY, () => {
          const e = n.scrollbarY?.offsetWidth || 0;
          n.onCornerWidthChange(e), s(e)
        }), l ? (0, O.jsx)(kt.div, {
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

      function oi(e) {
        return e ? parseInt(e, 10) : 0
      }

      function ni(e, r) {
        const t = e / r;
        return isNaN(t) ? 0 : t
      }

      function ai(e) {
        const r = ni(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          o = (e.scrollbar.size - t) * r;
        return Math.max(o, 18)
      }

      function si(e, r, t = "ltr") {
        const o = ai(r),
          n = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
          a = r.scrollbar.size - n,
          s = r.content - r.viewport,
          i = a - o,
          d = "ltr" === t ? [0, s] : [-1 * s, 0],
          l = (0, vn.q)(e, d);
        return ii([0, s], [0, i])(l)
      }

      function ii(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function di(e, r) {
        return e > 0 && e < r
      }
      var li = (e, r = () => {}) => {
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

      function ci(e, r) {
        const t = (0, Tt.c)(e),
          o = S.useRef(0);
        return S.useEffect(() => () => window.clearTimeout(o.current), []), S.useCallback(() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(t, r)
        }, [t, r])
      }

      function ui(e, r) {
        const t = (0, Tt.c)(r);
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
      var fi = Vs,
        pi = Ms,
        yi = Fs,
        vi = Qs,
        mi = ri,
        bi = [" ", "Enter", "ArrowUp", "ArrowDown"],
        gi = [" ", "Enter"],
        hi = "Select",
        [wi, xi, _i] = gn(hi),
        [ji, Ci] = (0, St.A)(hi, [_i, Jt]),
        Pi = Jt(),
        [Oi, Ri] = ji(hi),
        [Si, Ni] = ji(hi),
        Di = e => {
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
            form: y
          } = e, v = Pi(r), [m, b] = S.useState(null), [g, h] = S.useState(null), [w, x] = S.useState(!1), _ = (0, mn.jH)(l), [j, C] = (0, jo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: hi
          }), [P, R] = (0, jo.i)({
            prop: s,
            defaultProp: i,
            onChange: d,
            caller: hi
          }), N = S.useRef(null), D = !m || y || !!m.closest("form"), [k, z] = S.useState(new Set), I = Array.from(k).map(e => e.props.value).join(";");
          return (0, O.jsx)(mo, {
            ...v,
            children: (0, O.jsxs)(Oi, {
              required: p,
              scope: r,
              trigger: m,
              onTriggerChange: b,
              valueNode: g,
              onValueNodeChange: h,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: x,
              contentId: (0, Kt.B)(),
              value: P,
              onValueChange: R,
              open: j,
              onOpenChange: C,
              dir: _,
              triggerPointerDownPosRef: N,
              disabled: f,
              children: [(0, O.jsx)(wi.Provider, {
                scope: r,
                children: (0, O.jsx)(Si, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: S.useCallback(e => {
                    z(r => new Set(r).add(e))
                  }, []),
                  onNativeOptionRemove: S.useCallback(e => {
                    z(r => {
                      const t = new Set(r);
                      return t.delete(e), t
                    })
                  }, []),
                  children: t
                })
              }), D ? (0, O.jsxs)(ud, {
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
                }) : null, Array.from(k)]
              }, I) : null]
            })
          })
        };
      Di.displayName = hi;
      var ki = "SelectTrigger",
        zi = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            disabled: o = !1,
            ...n
          } = e, a = Pi(t), s = Ri(ki, t), i = s.disabled || o, d = (0, Rt.s)(r, s.onTriggerChange), l = xi(t), c = S.useRef("touch"), [u, f, p] = pd(e => {
            const r = l().filter(e => !e.disabled),
              t = r.find(e => e.value === s.value),
              o = yd(r, e, t);
            void 0 !== o && s.onValueChange(o.value)
          }), y = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, O.jsx)(bo, {
            asChild: !0,
            ...a,
            children: (0, O.jsx)(kt.button, {
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
              "data-placeholder": fd(s.value) ? "" : void 0,
              ...n,
              ref: d,
              onClick: (0, Ot.mK)(n.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && y(e)
              }),
              onPointerDown: (0, Ot.mK)(n.onPointerDown, e => {
                c.current = e.pointerType;
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (y(e), e.preventDefault())
              }),
              onKeyDown: (0, Ot.mK)(n.onKeyDown, e => {
                const r = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), r && " " === e.key || bi.includes(e.key) && (y(), e.preventDefault())
              })
            })
          })
        });
      zi.displayName = ki;
      var Ii = "SelectValue",
        Ti = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Ri(Ii, t), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, Rt.s)(r, d.onValueNodeChange);
          return (0, Ut.N)(() => {
            l(c)
          }, [l, c]), (0, O.jsx)(kt.span, {
            ...i,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: fd(d.value) ? (0, O.jsx)(O.Fragment, {
              children: s
            }) : a
          })
        });
      Ti.displayName = Ii;
      var Ei = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          children: o,
          ...n
        } = e;
        return (0, O.jsx)(kt.span, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          children: o || "▼"
        })
      });
      Ei.displayName = "SelectIcon";
      var Li = e => (0, O.jsx)(wo, {
        asChild: !0,
        ...e
      });
      Li.displayName = "SelectPortal";
      var Vi = "SelectContent",
        Ai = S.forwardRef((e, r) => {
          const t = Ri(Vi, e.__scopeSelect),
            [o, n] = S.useState();
          if ((0, Ut.N)(() => {
              n(new DocumentFragment)
            }, []), !t.open) {
            const r = o;
            return r ? Nt.createPortal((0, O.jsx)(qi, {
              scope: e.__scopeSelect,
              children: (0, O.jsx)(wi.Slot, {
                scope: e.__scopeSelect,
                children: (0, O.jsx)("div", {
                  children: e.children
                })
              })
            }), r) : null
          }
          return (0, O.jsx)(Xi, {
            ...e,
            ref: r
          })
        });
      Ai.displayName = Vi;
      var Mi = 10,
        [qi, Fi] = ji(Vi),
        Bi = (0, Dt.TL)("SelectContent.RemoveScroll"),
        Xi = S.forwardRef((e, r) => {
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
            sticky: y,
            hideWhenDetached: v,
            avoidCollisions: m,
            ...b
          } = e, g = Ri(Vi, t), [h, w] = S.useState(null), [x, _] = S.useState(null), j = (0, Rt.s)(r, e => w(e)), [C, P] = S.useState(null), [R, N] = S.useState(null), D = xi(t), [k, z] = S.useState(!1), I = S.useRef(!1);
          S.useEffect(() => {
            if (h) return (0, da.Eq)(h)
          }, [h]), (0, sa.Oh)();
          const T = S.useCallback(e => {
              const [r, ...t] = D().map(e => e.ref.current), [o] = t.slice(-1), n = document.activeElement;
              for (const t of e) {
                if (t === n) return;
                if (t?.scrollIntoView({
                    block: "nearest"
                  }), t === r && x && (x.scrollTop = 0), t === o && x && (x.scrollTop = x.scrollHeight), t?.focus(), document.activeElement !== n) return
              }
            }, [D, x]),
            E = S.useCallback(() => T([C, h]), [T, C, h]);
          S.useEffect(() => {
            k && E()
          }, [k, E]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: V
          } = g;
          S.useEffect(() => {
            if (h) {
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
                  e.x <= 10 && e.y <= 10 ? t.preventDefault() : h.contains(t.target) || L(!1), document.removeEventListener("pointermove", r), V.current = null
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
          }, [h, L, V]), S.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [A, M] = pd(e => {
            const r = D().filter(e => !e.disabled),
              t = r.find(e => e.ref.current === document.activeElement),
              o = yd(r, e, t);
            o && setTimeout(() => o.ref.current.focus())
          }), q = S.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== g.value && g.value === r || o) && (P(e), o && (I.current = !0))
          }, [g.value]), F = S.useCallback(() => h?.focus(), [h]), B = S.useCallback((e, r, t) => {
            const o = !I.current && !t;
            (void 0 !== g.value && g.value === r || o) && N(e)
          }, [g.value]), X = "popper" === o ? Zi : Ki, K = X === Zi ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: y,
            hideWhenDetached: v,
            avoidCollisions: m
          } : {};
          return (0, O.jsx)(qi, {
            scope: t,
            content: h,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: q,
            selectedItem: C,
            onItemLeave: F,
            itemTextRefCallback: B,
            focusSelectedItem: E,
            selectedItemText: R,
            position: o,
            isPositioned: k,
            searchRef: A,
            children: (0, O.jsx)(ia.A, {
              as: Bi,
              allowPinchZoom: !0,
              children: (0, O.jsx)(Jn, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Ot.mK)(n, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, O.jsx)(At, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, O.jsx)(X, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...K,
                    onPlaced: () => z(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, Ot.mK)(b.onKeyDown, e => {
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
      Xi.displayName = "SelectContentImpl";
      var Ki = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onPlaced: o,
          ...n
        } = e, a = Ri(Vi, t), s = Fi(Vi, t), [i, d] = S.useState(null), [l, c] = S.useState(null), u = (0, Rt.s)(r, e => c(e)), f = xi(t), p = S.useRef(!1), y = S.useRef(!0), {
          viewport: v,
          selectedItem: m,
          selectedItemText: b,
          focusSelectedItem: g
        } = s, h = S.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && v && m && b) {
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
                u = (0, vn.q)(a, [Mi, Math.max(Mi, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const o = r.right - n.right,
                a = window.innerWidth - t.right - o,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, r.width),
                c = window.innerWidth - Mi,
                u = (0, vn.q)(a, [Mi, Math.max(Mi, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * Mi,
              c = v.scrollHeight,
              u = window.getComputedStyle(l),
              y = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              h = parseInt(u.borderBottomWidth, 10),
              w = y + g + c + parseInt(u.paddingBottom, 10) + h,
              x = Math.min(5 * m.offsetHeight, w),
              _ = window.getComputedStyle(v),
              j = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              P = e.top + e.height / 2 - Mi,
              O = d - P,
              R = m.offsetHeight / 2,
              S = y + g + (m.offsetTop + R),
              N = w - S;
            if (S <= P) {
              const e = s.length > 0 && m === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const r = l.clientHeight - v.offsetTop - v.offsetHeight,
                t = S + Math.max(O, R + (e ? C : 0) + r + h);
              i.style.height = t + "px"
            } else {
              const e = s.length > 0 && m === s[0].ref.current;
              i.style.top = "0px";
              const r = Math.max(P, y + v.offsetTop + (e ? j : 0) + R) + N;
              i.style.height = r + "px", v.scrollTop = S - P + v.offsetTop
            }
            i.style.margin = `${Mi}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", o?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, v, m, b, a.dir, o]);
        (0, Ut.N)(() => h(), [h]);
        const [w, x] = S.useState();
        (0, Ut.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = S.useCallback(e => {
          e && !0 === y.current && (h(), g?.(), y.current = !1)
        }, [h, g]);
        return (0, O.jsx)(Hi, {
          scope: t,
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
            children: (0, O.jsx)(kt.div, {
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
      Ki.displayName = "SelectItemAlignedPosition";
      var Zi = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          align: o = "start",
          collisionPadding: n = Mi,
          ...a
        } = e, s = Pi(t);
        return (0, O.jsx)(go, {
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
      var [Hi, Gi] = ji(Vi, {}), Wi = "SelectViewport", Ui = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          nonce: o,
          ...n
        } = e, a = Fi(Wi, t), s = Gi(Wi, t), i = (0, Rt.s)(r, a.onViewportChange), d = S.useRef(0);
        return (0, O.jsxs)(O.Fragment, {
          children: [(0, O.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, O.jsx)(wi.Slot, {
            scope: t,
            children: (0, O.jsx)(kt.div, {
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
              onScroll: (0, Ot.mK)(n.onScroll, e => {
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
      Ui.displayName = Wi;
      var $i = "SelectGroup",
        [Yi, Qi] = ji($i);
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = (0, Kt.B)();
        return (0, O.jsx)(Yi, {
          scope: t,
          id: n,
          children: (0, O.jsx)(kt.div, {
            role: "group",
            "aria-labelledby": n,
            ...o,
            ref: r
          })
        })
      }).displayName = $i;
      var Ji = "SelectLabel";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = Qi(Ji, t);
        return (0, O.jsx)(kt.div, {
          id: n.id,
          ...o,
          ref: r
        })
      }).displayName = Ji;
      var ed = "SelectItem",
        [rd, td] = ji(ed),
        od = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            value: o,
            disabled: n = !1,
            textValue: a,
            ...s
          } = e, i = Ri(ed, t), d = Fi(ed, t), l = i.value === o, [c, u] = S.useState(a ?? ""), [f, p] = S.useState(!1), y = (0, Rt.s)(r, e => d.itemRefCallback?.(e, o, n)), v = (0, Kt.B)(), m = S.useRef("touch"), b = () => {
            n || (i.onValueChange(o), i.onOpenChange(!1))
          };
          if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, O.jsx)(rd, {
            scope: t,
            value: o,
            disabled: n,
            textId: v,
            isSelected: l,
            onItemTextChange: S.useCallback(e => {
              u(r => r || (e?.textContent ?? "").trim())
            }, []),
            children: (0, O.jsx)(wi.ItemSlot, {
              scope: t,
              value: o,
              disabled: n,
              textValue: c,
              children: (0, O.jsx)(kt.div, {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": n || void 0,
                "data-disabled": n ? "" : void 0,
                tabIndex: n ? void 0 : -1,
                ...s,
                ref: y,
                onFocus: (0, Ot.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Ot.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Ot.mK)(s.onClick, () => {
                  "mouse" !== m.current && b()
                }),
                onPointerUp: (0, Ot.mK)(s.onPointerUp, () => {
                  "mouse" === m.current && b()
                }),
                onPointerDown: (0, Ot.mK)(s.onPointerDown, e => {
                  m.current = e.pointerType
                }),
                onPointerMove: (0, Ot.mK)(s.onPointerMove, e => {
                  m.current = e.pointerType, n ? d.onItemLeave?.() : "mouse" === m.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Ot.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, Ot.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (gi.includes(e.key) && b(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      od.displayName = ed;
      var nd = "SelectItemText",
        ad = S.forwardRef((e, r) => {
          const {
            __scopeSelect: t,
            className: o,
            style: n,
            ...a
          } = e, s = Ri(nd, t), i = Fi(nd, t), d = td(nd, t), l = Ni(nd, t), [c, u] = S.useState(null), f = (0, Rt.s)(r, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, y = S.useMemo(() => (0, O.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: v,
            onNativeOptionRemove: m
          } = l;
          return (0, Ut.N)(() => (v(y), () => m(y)), [v, m, y]), (0, O.jsxs)(O.Fragment, {
            children: [(0, O.jsx)(kt.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren ? Nt.createPortal(a.children, s.valueNode) : null]
          })
        });
      ad.displayName = nd;
      var sd = "SelectItemIndicator";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return td(sd, t).isSelected ? (0, O.jsx)(kt.span, {
          "aria-hidden": !0,
          ...o,
          ref: r
        }) : null
      }).displayName = sd;
      var id = "SelectScrollUpButton";
      S.forwardRef((e, r) => {
        const t = Fi(id, e.__scopeSelect),
          o = Gi(id, e.__scopeSelect),
          [n, a] = S.useState(!1),
          s = (0, Rt.s)(r, o.onScrollButtonChange);
        return (0, Ut.N)(() => {
          if (t.viewport && t.isPositioned) {
            let e = function() {
              const e = r.scrollTop > 0;
              a(e)
            };
            const r = t.viewport;
            return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e)
          }
        }, [t.viewport, t.isPositioned]), n ? (0, O.jsx)(ld, {
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
      }).displayName = id;
      var dd = "SelectScrollDownButton";
      S.forwardRef((e, r) => {
        const t = Fi(dd, e.__scopeSelect),
          o = Gi(dd, e.__scopeSelect),
          [n, a] = S.useState(!1),
          s = (0, Rt.s)(r, o.onScrollButtonChange);
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
        }, [t.viewport, t.isPositioned]), n ? (0, O.jsx)(ld, {
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
      }).displayName = dd;
      var ld = S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          onAutoScroll: o,
          ...n
        } = e, a = Fi("SelectScrollButton", t), s = S.useRef(null), i = xi(t), d = S.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return S.useEffect(() => () => d(), [d]), (0, Ut.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, O.jsx)(kt.div, {
          "aria-hidden": !0,
          ...n,
          ref: r,
          style: {
            flexShrink: 0,
            ...n.style
          },
          onPointerDown: (0, Ot.mK)(n.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerMove: (0, Ot.mK)(n.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(o, 50))
          }),
          onPointerLeave: (0, Ot.mK)(n.onPointerLeave, () => {
            d()
          })
        })
      });
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e;
        return (0, O.jsx)(kt.div, {
          "aria-hidden": !0,
          ...o,
          ref: r
        })
      }).displayName = "SelectSeparator";
      var cd = "SelectArrow";
      S.forwardRef((e, r) => {
        const {
          __scopeSelect: t,
          ...o
        } = e, n = Pi(t), a = Ri(cd, t), s = Fi(cd, t);
        return a.open && "popper" === s.position ? (0, O.jsx)(ho, {
          ...n,
          ...o,
          ref: r
        }) : null
      }).displayName = cd;
      var ud = S.forwardRef(({
        __scopeSelect: e,
        value: r,
        ...t
      }, o) => {
        const n = S.useRef(null),
          a = (0, Rt.s)(o, n),
          s = (0, bn.Z)(r);
        return S.useEffect(() => {
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
        }, [s, r]), (0, O.jsx)(kt.select, {
          ...t,
          style: {
            ...Co,
            ...t.style
          },
          ref: a,
          defaultValue: r
        })
      });

      function fd(e) {
        return "" === e || void 0 === e
      }

      function pd(e) {
        const r = (0, Tt.c)(e),
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

      function yd(e, r, t) {
        const o = r.length > 1 && Array.from(r).every(e => e === r[0]) ? r[0] : r,
          n = t ? e.indexOf(t) : -1;
        let a = (s = e, i = Math.max(n, 0), s.map((e, r) => s[(i + r) % s.length]));
        var s, i;
        1 === o.length && (a = a.filter(e => e !== t));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
        return d !== t ? d : void 0
      }
      ud.displayName = "SelectBubbleInput";
      var vd = Di,
        md = zi,
        bd = Ti,
        gd = Ei,
        hd = Li,
        wd = Ai,
        xd = Ui,
        _d = od,
        jd = ad;

      function Cd(e) {
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

      function Pd(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Od(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Pd(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Cd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pd(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Rd(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Sd = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Nd = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Od(Od({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Sd(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rd(e.variantClassNames, e => Rd(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Dd = Nd({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kd = Nd({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zd = Nd({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Id = Nd({
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
        Td = Nd({
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
        Ed = Nd({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ld = (0, S.createContext)(null);

      function Vd() {
        const e = (0, S.useContext)(Ld);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Ad = (0, S.forwardRef)(({
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
          ...y
        }, v) => {
          const m = (0, S.useRef)(null),
            b = (0, ue.UP)(m, v),
            g = (0, S.useId)(),
            h = (0, S.useId)(),
            w = (0, S.useId)(),
            x = (0, S.useId)(),
            _ = (0, S.useId)(),
            j = (0, S.useId)(),
            [C = !1, P] = (0, ue.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            R = (0, k.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": r
            }, y);
          return (0, O.jsx)(Ld.Provider, {
            value: {
              labelId: g,
              errorId: h,
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
              isRequired: t,
              isDisabled: o,
              isReadOnly: n,
              status: p,
              size: f
            },
            children: (0, O.jsx)(vd, {
              required: t,
              disabled: o,
              open: C,
              onOpenChange: () => P(!n && !C),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, O.jsx)("div", {
                ref: b,
                ...R,
                children: e
              })
            })
          })
        }),
        Md = (0, S.forwardRef)(({
          hideDividers: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            popoverId: a
          } = Vd(), s = (0, k.mergeProps)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Dd({
              hideDividers: e
            }),
            "data-testid": t
          }, o);
          return (0, O.jsx)(wd, {
            ...s,
            ref: n,
            children: (0, O.jsx)(xd, {
              className: "foundry_uaq1gwn",
              children: r
            })
          })
        }),
        qd = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e
          }, r);
          return (0, O.jsx)(xd, {
            ref: t,
            ...o
          })
        }),
        Fd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": r
          }, t);
          return (0, O.jsxs)(fi, {
            ...n,
            ref: o,
            children: [(0, O.jsx)(qd, {
              asChild: !0,
              children: (0, O.jsx)(pi, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, O.jsx)(yi, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, O.jsx)(vi, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Bd = (0, S.forwardRef)(({
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
            descriptionId: y,
            isOpen: v,
            value: m,
            size: b
          } = Vd(), {
            isPressed: g,
            pressProps: h
          } = (0, hs.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, k.mergeProps)({
            id: f,
            className: Td({
              size: b,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!g,
              isDisabled: !!l
            }),
            "aria-labelledby": (0, k.joinStrings)(t, c, u),
            "aria-describedby": (0, k.joinStrings)(o, y),
            "aria-activedescendant": m,
            "aria-controls": p,
            "aria-invalid": "invalid" === d,
            "data-state": v ? "open" : "closed",
            "data-testid": r,
            "data-pressed": !!g
          }, (0, k.omit)(h, "onKeyDown"), a), x = n ? fe.DX : md;
          return (0, O.jsx)(x, {
            ...w,
            ref: s,
            children: e
          })
        }),
        Xd = (0, S.forwardRef)(({
          placeholder: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": t
            }, o),
            s = r ? fe.DX : "span";
          return (0, O.jsx)(s, {
            ...a,
            ref: n,
            children: (0, O.jsx)(bd, {
              placeholder: e
            })
          })
        }),
        Kd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const {
            isDisabled: n,
            isReadOnly: a,
            isOpen: s
          } = Vd(), i = s ? Ve.ChevronUp : Ve.ChevronDown, d = (0, k.mergeProps)({
            asChild: !0,
            className: Ed({
              isDisabled: a || n
            }),
            "data-testid": r
          }, t);
          return (0, O.jsx)(gd, {
            ...d,
            ref: o,
            children: e || (0, O.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Zd = (0, S.forwardRef)(({
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
          } = Vd(), u = i && !n, f = (0, k.mergeProps)({
            id: a.id || l,
            htmlFor: c,
            "data-testid": e,
            className: Id({
              showAsterisk: u,
              isDisabled: d
            })
          }, a), p = r ? fe.DX : "label";
          return (0, O.jsx)(fe.s6, {
            enabled: o,
            children: (0, O.jsx)(p, {
              ...f,
              ref: s,
              children: t
            })
          })
        }),
        Hd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Vd(), i = (0, k.mergeProps)({
            className: kd({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? fe.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Gd = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = Vd(), i = (0, k.mergeProps)({
            className: zd({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, o), d = r ? fe.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Wd = (0, S.forwardRef)(({
          children: e,
          value: r,
          isDisabled: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, ue.UP)(s, a),
            d = (0, k.mergeProps)({
              value: r,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: t,
              "data-testid": o
            }, n);
          return (0, O.jsx)(_d, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Ud = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": r
          }, t);
          return (0, O.jsx)(jd, {
            ref: o,
            asChild: !0,
            children: (0, O.jsx)("span", {
              ...n,
              children: e
            })
          })
        }),
        $d = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": r
          }, t);
          return (0, O.jsx)(gd, {
            asChild: !0,
            ...n,
            ref: o,
            children: e
          })
        }),
        Yd = hd,
        Qd = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Vd(), i = (0, k.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? fe.DX : Ns;
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Jd = Ds,
        el = ks;
      var rl = t(28687),
        tl = t(76646);

      function ol(e) {
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

      function nl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function al(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? nl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = ol(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : nl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function sl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var il = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        dl = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = al(al({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) il(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sl(e.variantClassNames, e => sl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ll = dl({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cl = dl({
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
        ul = dl({
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
        fl = dl({
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
        pl = dl({
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
      const yl = (0, S.createContext)(null);

      function vl() {
        const e = (0, S.useContext)(yl);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const ml = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: o,
          children: n,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_okz6z20"
            }, i),
            c = o ? fe.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)();
          return (0, O.jsx)(yl.Provider, {
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
            children: (0, O.jsx)(c, {
              ...l,
              ref: d,
              children: n
            })
          })
        }),
        bl = (0, S.forwardRef)(({
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
            y = (0, ue.UP)(p, f),
            {
              size: v,
              appearance: m,
              inputId: b,
              labelId: g,
              descriptionId: h,
              isDisabled: w,
              isReadOnly: x
            } = vl(),
            _ = (0, tl.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, rl.K)({
              id: a || b,
              "aria-labelledby": (0, k.joinStrings)(o, g),
              "aria-describedby": (0, k.joinStrings)(n, h),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, k.mergeProps)({
              className: pl({
                appearance: m
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || x,
              "data-testid": e,
              onClick: e => {
                r?.(e) ?? t?.(e), e.defaultPrevented || w || x || _.toggle()
              }
            }, u);
          return (0, O.jsxs)("div", {
            ...C,
            children: [(0, O.jsx)(fe.s6, {
              children: (0, O.jsx)("input", {
                ...j,
                ref: y
              })
            }), (0, O.jsx)("div", {
              className: fl({
                size: v
              }),
              "aria-hidden": "true",
              children: (0, O.jsx)("div", {
                className: cl({
                  size: v,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        gl = (0, S.forwardRef)(({
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
          } = vl(), c = (0, k.mergeProps)({
            id: n.id || i,
            htmlFor: d,
            "data-testid": e,
            className: ul({
              isDisabled: s,
              size: l
            })
          }, n), u = r ? fe.DX : "label";
          return (0, O.jsx)(fe.s6, {
            enabled: o,
            children: (0, O.jsx)(u, {
              ...c,
              ref: a,
              children: t
            })
          })
        }),
        hl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = vl(), i = o.id || s, d = (0, k.mergeProps)({
            className: ll({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, o), l = r ? fe.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        });
      var wl = t(58611);
      const xl = ({
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
        _l = ({
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
        jl = ({
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
        Cl = ({
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
        Pl = ({
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
        Ol = ({
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

      function Rl(e) {
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

      function Sl(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Nl(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Sl(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Rl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sl(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Dl(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var kl = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        zl = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Nl(Nl({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) kl(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dl(e.variantClassNames, e => Dl(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Il = zl({
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
        Tl = zl({
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
        El = zl({
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
        Ll = zl({
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
        Vl = zl({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Al = zl({
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
      const Ml = (0, S.createContext)(null);

      function ql() {
        const e = (0, S.useContext)(Ml);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Fl = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: r = "primary",
          testId: t,
          asChild: o,
          children: n,
          ...a
        }, s) => {
          const i = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_11gbdty0"
            }, (0, k.omit)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = o ? fe.DX : "div",
            l = (0, S.useId)(),
            c = (0, S.useId)(),
            u = (0, S.useId)();
          return (0, O.jsx)(Ml.Provider, {
            value: {
              size: e,
              appearance: r,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, O.jsx)(d, {
              ...i,
              ref: s,
              children: n
            })
          })
        }),
        Bl = (0, S.forwardRef)(({
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
            size: y,
            appearance: v,
            isIndeterminate: m,
            isRequired: b,
            descriptionId: g,
            labelId: h,
            inputId: w,
            ...x
          } = ql(), _ = (0, S.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: P
          } = (0, hs.d)({
            ref: _
          }), {
            setSelected: R,
            toggle: N,
            ...D
          } = (0, tl.H)({
            isSelected: r,
            defaultSelected: t,
            onChange: o
          }), {
            inputProps: z,
            isSelected: I,
            isDisabled: T,
            isReadOnly: E
          } = (0, wl.v)({
            "aria-label": "",
            id: j,
            name: n,
            ...x
          }, {
            ...D,
            toggle: N,
            setSelected: x.isReadOnly ? () => !1 : R
          }, _), L = (0, k.mergeProps)({
            className: Tl({
              size: y
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || T || E || N()
            }
          }, P, f), V = (0, k.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": r,
            "aria-labelledby": (0, k.joinStrings)(c, h),
            "aria-describedby": (0, k.joinStrings)(d, g),
            "aria-errormessage": (0, k.joinStrings)(l, x.isInvalid ? g : void 0),
            "aria-required": b,
            required: b
          }, z), A = m ? i[`Dash${y}`] : i[`Check${y}`];
          return (0, O.jsxs)("div", {
            ...L,
            children: [(0, O.jsx)(fe.s6, {
              children: (0, O.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, O.jsx)("div", {
              className: (0, Le.clsx)(Il({
                size: y,
                appearance: v
              }), u),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": T || E,
              "data-testid": e,
              "data-pressed": C,
              children: (0, O.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || m) && (0, O.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Xl = (0, S.forwardRef)(({
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
          } = ql(), u = a.id || d, f = c && !n, p = (0, k.mergeProps)({
            className: Al({
              size: i,
              showAsterisk: f
            }),
            "data-testid": t,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), y = r ? fe.DX : "label";
          return (0, O.jsx)(fe.s6, {
            enabled: o,
            children: (0, O.jsx)(y, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        Kl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = ql(), i = o.id || s, d = (0, k.mergeProps)({
            className: El({
              isDisabled: a
            }),
            "data-testid": t,
            id: i
          }, o), l = r ? fe.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        }),
        Zl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = ql(), s = o.id || a, i = (0, k.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": t,
            id: s
          }, o), d = r ? fe.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Hl = (0, S.createContext)(null);

      function Gl() {
        const e = (0, S.useContext)(Hl);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Wl = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          size: o = "MD",
          isRequired: n = !1,
          ...a
        }, s) => {
          const [i, d] = (0, S.useState)(null), [l, c] = (0, S.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, k.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = r ? fe.DX : "fieldset";
          return (0, O.jsx)(Hl.Provider, {
            value: {
              size: o,
              isRequired: n,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, O.jsx)(p, {
              ...f,
              ref: s,
              children: t
            })
          })
        }),
        Ul = (0, S.forwardRef)(({
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
          } = Gl(), l = d && !a, c = (0, k.mergeProps)({
            "data-testid": t,
            className: Vl({
              showAsterisk: l
            })
          }, s), u = r ? fe.DX : "legend";
          return (0, O.jsx)(fe.s6, {
            enabled: n,
            children: (0, O.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, O.jsx)(fe.xV, {
                children: e
              }), !d && (0, O.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", o, ")"]
              })]
            })
          })
        }),
        $l = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setDescriptionId: a
          } = Gl(), s = (0, S.useId)(), i = o.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, o),
            l = r ? fe.DX : "div";
          return (0, O.jsx)(l, {
            ...d,
            ref: n,
            children: e
          })
        }),
        Yl = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = Gl(), s = (0, k.mergeProps)({
            "data-testid": t,
            className: Ll({
              size: a
            })
          }, o), i = r ? fe.DX : "div";
          return (0, O.jsx)(i, {
            ...s,
            ref: n,
            children: e
          })
        }),
        Ql = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            setErrorTextId: a
          } = Gl(), s = (0, S.useId)(), i = o.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, k.mergeProps)({
              "data-testid": t,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, o),
            l = Ve.X,
            c = r ? fe.DX : "div";
          return (0, O.jsxs)(c, {
            ...d,
            ref: n,
            children: [(0, O.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, O.jsx)(fe.xV, {
              children: e
            })]
          })
        });

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
        sc = nc({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ic = nc({
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
        dc = nc({
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
      const lc = (0, S.createContext)(null);

      function cc() {
        const e = (0, S.useContext)(lc);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const uc = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? fe.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)(),
            y = (0, S.useId)();
          return (0, O.jsx)(lc.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: y,
              isDisabled: o,
              isReadOnly: n,
              isRequired: a,
              status: s,
              ...i
            },
            children: (0, O.jsx)(c, {
              ref: d,
              ...l,
              children: r
            })
          })
        }),
        fc = (0, S.forwardRef)(({
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
          } = cc(), u = (0, k.mergeProps)({
            className: ic({
              isDisabled: l,
              showAsterisk: c && !n
            }),
            "data-testid": t,
            id: i,
            htmlFor: d
          }, a), f = r ? fe.DX : "label";
          return (0, O.jsx)(fe.s6, {
            enabled: o,
            children: (0, O.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        pc = (0, S.forwardRef)(({
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
            hintId: y,
            isDisabled: v,
            isRequired: m,
            isReadOnly: b,
            status: g
          } = cc(), h = (0, S.useRef)(null), w = (0, ue.UP)(h, c), x = (0, k.mergeProps)({
            className: dc({
              isInvalid: "invalid" === g,
              isDisabled: v,
              isReadOnly: b,
              isSuccess: "success" === g
            }),
            name: a,
            id: l.id || p,
            rows: o,
            defaultValue: n,
            disabled: v,
            required: m,
            readOnly: b,
            placeholder: s,
            "aria-labelledby": (0, k.joinStrings)(l.id, f, y, i),
            "aria-describedby": (0, k.joinStrings)(u, d),
            "data-testid": t,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === g && {
              "data-success": !0
            },
            ...v && {
              "aria-disabled": !0
            },
            ...m && {
              "aria-required": !0
            }
          }, l), _ = e ? fe.DX : "textarea";
          return (0, O.jsx)(_, {
            ref: w,
            ...x,
            children: r
          })
        }),
        yc = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = cc(), i = (0, k.mergeProps)({
            className: ac({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? fe.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        vc = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = cc(), i = (0, k.mergeProps)({
            className: sc({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, o), d = r ? fe.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        mc = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = cc(), i = (0, k.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? fe.DX : Ns;
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        bc = Ds,
        gc = ks;
      var hc = t(27097),
        wc = t(18222);

      function xc(e) {
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

      function _c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function jc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? _c(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = xc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _c(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Cc(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Pc = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Oc = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = jc(jc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Pc(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cc(e.variantClassNames, e => Cc(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Rc = Oc({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sc = Oc({
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
      const Nc = (0, S.createContext)(null);

      function Dc() {
        const e = (0, S.useContext)(Nc);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const kc = (0, S.forwardRef)(({
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
            p = (0, ue.UP)(f, u),
            y = (0, S.useId)(),
            v = (0, S.useId)(),
            m = (0, S.useId)(),
            b = (0, hc.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: g
            } = (0, wc.m)({
              ...c,
              orientation: t,
              "aria-labelledby": (0, k.joinStrings)(y, s),
              "aria-describedby": (0, k.joinStrings)(v, m, i),
              "aria-errormessage": (0, k.joinStrings)(m, d)
            }, b),
            h = (0, k.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, k.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? fe.DX : "div";
          return (0, O.jsx)(Nc.Provider, {
            value: {
              state: b,
              size: e,
              appearance: r,
              orientation: t,
              descriptionId: v,
              labelId: y,
              errorId: m,
              status: l,
              ...c
            },
            children: (0, O.jsx)(w, {
              ref: p,
              "data-testid": n,
              ...h,
              children: o
            })
          })
        }),
        zc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            size: a,
            orientation: s
          } = Dc(), i = (0, k.mergeProps)({
            "data-testid": e,
            className: Sc({
              size: a,
              orientation: s
            })
          }, o), d = r ? fe.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: t
          })
        }),
        Ic = (0, S.forwardRef)(({
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
          } = Dc(), l = i && !n, c = (0, k.mergeProps)({
            id: a.id || d,
            "data-testid": e,
            className: Rc({
              showAsterisk: l
            })
          }, a), u = r ? fe.DX : "div";
          return (0, O.jsx)(fe.s6, {
            enabled: o,
            children: (0, O.jsx)(u, {
              ...c,
              ref: s,
              children: t
            })
          })
        }),
        Tc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = Dc(), s = (0, k.mergeProps)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, o), i = r ? fe.DX : "div";
          return (0, O.jsx)(i, {
            ...s,
            ref: n,
            children: t
          })
        }),
        Ec = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            errorId: a,
            status: s
          } = Dc(), i = (0, k.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": r,
            errorId: a,
            status: s
          }, o), d = t ? fe.DX : Ns;
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Lc = Ds,
        Vc = ks;
      var Ac = t(9153),
        Mc = Oc({
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
        qc = Oc({
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
        Fc = Oc({
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
        Bc = Oc({
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
      const Xc = ({
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
        Kc = ({
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
        Zc = ({
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
        Hc = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_1pfduet0"
            }, o),
            s = e ? fe.DX : "label";
          return (0, O.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Gc = (0, S.forwardRef)(({
          testId: e,
          value: r,
          ...t
        }, o) => {
          const n = (0, S.useRef)(null),
            a = (0, ue.UP)(n, o),
            s = (0, S.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Dc(),
            {
              isPressed: p,
              pressProps: y
            } = (0, hs.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: v
            } = (0, Ac.z)({
              ...t,
              id: s,
              value: r,
              "aria-label": ""
            }, i, n),
            m = v.checked,
            b = v.disabled || i?.isReadOnly,
            g = (0, k.mergeProps)(v, {
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
            h = c[`Dot${l}`];
          return (0, O.jsxs)("div", {
            className: Bc({
              size: l
            }),
            children: [(0, O.jsx)(fe.s6, {
              children: (0, O.jsx)("input", {
                type: "radio",
                ...g,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, O.jsx)("div", {
              className: Fc({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": m ? "checked" : "unchecked",
              "data-disabled": b,
              "data-pressed": p,
              ...y,
              children: (0, O.jsx)("span", {
                className: "foundry_1pfduet9",
                children: m && (0, O.jsx)(h, {})
              })
            })]
          })
        }),
        Wc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            size: s,
            state: i
          } = Dc(), d = (0, S.useId)(), l = (0, k.mergeProps)({
            id: d,
            "data-testid": e,
            className: qc({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, n), c = r ? fe.DX : "div";
          return (0, O.jsx)(fe.s6, {
            enabled: o,
            children: (0, O.jsx)(c, {
              ...l,
              ref: a,
              children: t
            })
          })
        }),
        Uc = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = Dc(), s = (0, k.mergeProps)({
            "data-testid": e,
            className: Mc({
              isDisabled: a
            })
          }, o), i = r ? fe.DX : "span";
          return (0, O.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        });
      var $c = t(35462);

      function Yc(e) {
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

      function Qc(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Jc(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Qc(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Yc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qc(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function eu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ru = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        tu = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Jc(Jc({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ru(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return eu(e.variantClassNames, e => eu(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ou = tu({
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
        nu = tu({
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
        au = tu({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        su = tu({
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
        iu = tu({
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
        du = tu({
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
      const lu = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        cu = (0, S.createContext)(null);

      function uu() {
        const e = (0, S.useContext)(cu);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const fu = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, S.useState)("text"), u = `${(0,S.useId)()}-label`, f = `${(0,S.useId)()}-input`, p = `${(0,S.useId)()}-description`, y = (0, S.useRef)(null), v = (0, S.useRef)(lu), m = (0, k.mergeProps)({
            "data-testid": t,
            className: "foundry_8oytzo4"
          }, i), b = e ? fe.DX : "div";
          return (0, O.jsx)(cu.Provider, {
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
              inputRef: y,
              focusState: v,
              ...i
            },
            children: (0, O.jsx)(b, {
              ref: d,
              ...m,
              children: r
            })
          })
        }),
        pu = (0, S.forwardRef)(({
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
          } = uu(), u = d && !n, f = (0, k.mergeProps)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: du({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = r ? fe.DX : "label";
          return (0, O.jsx)(fe.s6, {
            enabled: o,
            children: (0, O.jsx)(p, {
              ref: s,
              ...f,
              children: t
            })
          })
        }),
        yu = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = uu(), s = (0, k.mergeProps)({
            "data-testid": e,
            className: au({
              isDisabled: a
            })
          }, o), i = r ? fe.DX : "span";
          return (0, O.jsx)(i, {
            ref: n,
            ...s,
            children: t
          })
        }),
        vu = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          children: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = uu(), d = (0, k.mergeProps)({
            "data-testid": e,
            className: (0, Le.clsx)(ou({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, o), l = r ? fe.DX : "div";
          return (0, O.jsx)(l, {
            ref: n,
            ...d,
            children: t
          })
        }),
        mu = (0, S.forwardRef)(({
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
            isRequired: y,
            status: v,
            labelId: m,
            inputId: b,
            descriptionId: g,
            setType: h,
            type: w,
            inputRef: x,
            focusState: _
          } = uu();
          (0, S.useEffect)(() => h(l), []);
          const j = "invalid" === v,
            C = (0, k.mergeProps)({
              disabled: f,
              readOnly: p,
              required: y,
              id: b,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, k.joinStrings)(m, i),
              "aria-describedby": (0, k.joinStrings)(g, d),
              "data-testid": e,
              className: (0, Le.clsx)(iu({
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
              ..."success" === v && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...y && {
                "aria-required": !0
              }
            }, c),
            P = (0, $c.A)({
              mask: t,
              replacement: o,
              showMask: n,
              track: a
            }),
            R = (0, ue.UP)(t && o ? P : null, x, u),
            N = r ? fe.DX : "input";
          return (0, O.jsx)(N, {
            ref: R,
            ...C
          })
        }),
        bu = (0, S.forwardRef)(({
          icon: e,
          asChild: r,
          testId: t,
          side: o,
          ...n
        }, a) => {
          const {
            isDisabled: s
          } = uu(), i = (0, k.mergeProps)({
            size: "LG",
            "data-testid": t,
            className: (0, Le.clsx)(su({
              side: o,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, n), d = r ? fe.DX : Ve[e];
          return (0, O.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        gu = (0, S.forwardRef)(({
          ...e
        }, r) => {
          const {
            isDisabled: t
          } = uu(), o = (0, k.mergeProps)({
            isDisabled: t,
            size: "LG",
            appearance: "ghost",
            className: (0, Le.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, O.jsx)(nr, {
            ref: r,
            ...o,
            preventFocusOnPress: !1
          })
        }),
        hu = (0, S.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: r,
          ...t
        }, o) => {
          const {
            type: n,
            setType: a,
            inputRef: s,
            focusState: i
          } = uu(), d = "password" === n, l = d ? e : r;
          (0, S.useEffect)(() => {
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
          return (0, O.jsxs)(cn, {
            children: [(0, O.jsx)(un, {
              children: (0, O.jsx)(gu, {
                ref: o,
                ...c
              })
            }), (0, O.jsxs)(fn, {
              side: "bottom",
              align: "end",
              children: [l, (0, O.jsx)(pn, {})]
            })]
          })
        }),
        wu = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = uu(), i = (0, k.mergeProps)({
            className: nu({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, o), d = t ? fe.DX : "div";
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        xu = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = uu(), i = (0, k.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": r,
            descriptionId: a,
            status: s
          }, o), d = t ? fe.DX : Ns;
          return (0, O.jsx)(d, {
            ...i,
            ref: n,
            children: e
          })
        }),
        _u = Ds,
        ju = ks;
      var Cu = t(16319);

      function Pu(e) {
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

      function Ou(e, r) {
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
          r % 2 ? Ou(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Pu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ou(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Su(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Nu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Du = (e => {
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
            for (var [l, c] of e.compoundVariants) Nu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Su(e.variantClassNames, e => Su(e, e => e.split(" ")[0]))
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
      const ku = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        zu = (0, S.forwardRef)(({
          label: e,
          size: r = "LG",
          testId: t,
          ...o
        }, n) => {
          const a = (0, S.useRef)(null),
            s = (0, ue.UP)(a, n),
            {
              buttonProps: i
            } = (0, ue.sL)(o, a),
            d = (0, k.mergeProps)({
              "data-testid": t,
              className: Du({
                size: r
              })
            }, i);
          return (0, O.jsx)("button", {
            ref: s,
            ...d,
            children: (0, O.jsx)(Ve.X, {
              label: e,
              size: ku[r]
            })
          })
        });

      function Iu(e) {
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

      function Tu(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Eu(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Tu(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Iu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tu(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Lu(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Vu = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Au = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Eu(Eu({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vu(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lu(e.variantClassNames, e => Lu(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Mu = Au({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qu = Au({
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
        Fu = Au({
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
      const Bu = (0, S.createContext)(null);

      function Xu() {
        const e = (0, S.useContext)(Bu);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Ku = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          status: t,
          background: o,
          ...n
        }, a) => {
          const s = e ? fe.DX : "div",
            i = (0, k.mergeProps)({
              className: Fu({
                status: t,
                background: o
              })
            }, n);
          return (0, O.jsx)(Bu.Provider, {
            value: {
              status: t,
              background: o
            },
            children: (0, O.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i
            })
          })
        }),
        Zu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_1m368qha"
            }, t);
          return (0, O.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Hu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_1m368qhb"
            }, t);
          return (0, O.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Gu = {
          danger: Ve.CircleX,
          information: Ve.Info,
          success: Ve.CircleCheck,
          warning: Ve.TriangleAlert
        },
        Wu = (0, S.forwardRef)(({
          asChild: e,
          size: r = "XL",
          ...t
        }, o) => {
          const {
            status: n
          } = Xu(), a = e ? fe.DX : Gu[n], s = (0, k.mergeProps)({
            className: qu({
              status: n,
              size: r
            }),
            size: r
          }, t);
          return (0, O.jsx)(a, {
            label: "",
            ref: o,
            ...s
          })
        }),
        Uu = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, t);
          return (0, O.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        $u = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, O.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        Yu = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, S.useRef)(null),
            s = (0, ue.UP)(a, n),
            i = e ? fe.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Cu.i)(o, a),
            c = (0, k.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, O.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...c,
            children: r
          })
        }),
        Qu = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? fe.DX : "div",
            s = (0, k.mergeProps)({
              className: "foundry_1m368qhm"
            }, o);
          return (0, O.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        Ju = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          className: t,
          ...o
        }, n) => {
          const a = e ? fe.DX : "div";
          return (0, O.jsx)(a, {
            ref: n,
            "data-testid": r,
            className: (0, Le.clsx)(t, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...o
          })
        }),
        ef = (0, S.forwardRef)((e, r) => {
          const {
            background: t
          } = Xu(), o = "none" !== t, n = (0, k.mergeProps)({
            className: Mu({
              hasBackground: o
            })
          }, e);
          return (0, O.jsx)(zu, {
            size: "SM",
            ref: r,
            ...n
          })
        });
      var rf = t(64634),
        tf = t(7697),
        of = t(17497);
      var nf = t(82459);

      function af(e) {
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

      function sf(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function df(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? sf(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = af(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sf(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function lf(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var cf = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        uf = "foundry_qmpv6yv",
        ff = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = df(df({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) cf(l, o, e.defaultVariants) && (t += " " + c);
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
      const pf = (0, S.createContext)(null);

      function yf() {
        const e = (0, S.useContext)(pf);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const vf = (0, S.forwardRef)(({
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
                [o, n] = (0, S.useState)([]),
                a = o.length,
                [s, i] = (0, S.useState)(0),
                [d, l] = (0, rf.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: r && a > 1
                }, [(0, tf.A)(), (0, of.A)()]),
                c = (0, S.useRef)(0),
                u = (0, S.useRef)(!1),
                f = o[s],
                p = (0, S.useCallback)(e => {
                  const r = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, t) => {
                    e.style.visibility = t === r ? "visible" : "hidden"
                  }), i(r), u.current = !0
                }, [l]),
                y = (0, S.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                v = (0, S.useCallback)((e, r) => {
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
                l && (y(l), v(l), l.on("reInit", y).on("reInit", v).on("scroll", v).on("slideFocus", v))
              }, [l, v]), (0, S.useEffect)(() => {
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
          const y = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            v = (0, k.mergeProps)({
              className: ff(c)
            }, y, i),
            m = e ? fe.DX : "div";
          return (0, O.jsx)(pf.Provider, {
            value: l,
            children: (0, O.jsx)(m, {
              ref: d,
              "data-testid": t,
              "data-initialized": u,
              ...v,
              children: r
            })
          })
        }),
        mf = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        bf = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            currentAlert: o
          } = yf();
          if (!e && !o || !o?.status) return null;
          const n = e || mf[o.status],
            a = Ve[n],
            s = (0, k.mergeProps)({
              className: "foundry_qmpv6yp"
            }, r);
          return (0, O.jsx)(a, {
            label: "",
            ref: t,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        gf = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, t);
          return (0, O.jsx)(n, {
            ref: o,
            "data-testid": r,
            ...a
          })
        }),
        hf = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          align: t = "left",
          status: o,
          background: n,
          ...a
        }, s) => {
          const i = e ? fe.DX : "div",
            d = (0, k.mergeProps)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, O.jsx)(i, {
            ref: s,
            "data-testid": r,
            ...d
          })
        }),
        wf = (0, S.forwardRef)(({
          testId: e,
          children: r,
          ...t
        }, o) => {
          const {
            setAlerts: n,
            emblaRef: a,
            emblaApi: s
          } = yf(), i = (0, k.mergeProps)({
            className: "foundry_qmpv6ym"
          }, t), d = (0, ue.UP)(a, o), l = S.Children.map(r, e => {
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
          }), (0, O.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, O.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: r
            })
          })
        }),
        xf = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, S.useRef)(null),
            s = (0, ue.UP)(a, n),
            i = e ? fe.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Cu.i)(o, a),
            c = (0, k.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, o);
          return (0, O.jsx)(i, {
            "data-pressed": l,
            "data-testid": t,
            ref: s,
            ...d,
            ...c,
            children: r
          })
        }),
        _f = (0, S.forwardRef)((e, r) => {
          const t = (0, k.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, O.jsx)(zu, {
            ref: r,
            "data-close-btn": !0,
            size: "SM",
            ...t
          })
        }),
        jf = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          children: t,
          ...o
        }, n) => {
          const a = e ? fe.DX : "div",
            s = (0, k.mergeProps)({
              className: "foundry_qmpv6yt"
            }, o);
          return (0, O.jsx)(a, {
            ref: n,
            "data-testid": r,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: t
          })
        }),
        Cf = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            nextAlert: o,
            canScrollNext: n
          } = yf(), a = (0, k.mergeProps)({
            className: uf
          }, r);
          return (0, O.jsx)(nf.K, {
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
        Pf = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            prevAlert: o,
            canScrollPrev: n
          } = yf(), a = (0, k.mergeProps)({
            className: uf
          }, r);
          return (0, O.jsx)(nf.K, {
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
        Of = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            currentAlertIndex: o,
            numAlerts: n
          } = yf(), a = (0, k.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, r);
          return (0, O.jsxs)("div", {
            ref: t,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [o + 1, "/", n]
          })
        });

      function Rf(e) {
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

      function Sf(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Nf(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Sf(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Rf(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Sf(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Df(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var kf = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        zf = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Nf(Nf({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) kf(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Df(e.variantClassNames, e => Df(e, e => e.split(" ")[0]))
            }
          }, r
        },
        If = zf({
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
        Tf = zf({
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
        Ef = zf({
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
      const Lf = (0, S.createContext)(null);

      function Vf() {
        const e = (0, S.useContext)(Lf);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Af = (0, S.forwardRef)(({
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
            u = (0, k.mergeProps)({
              className: Tf(c)
            }, d),
            f = e ? fe.DX : "div";
          return (0, O.jsx)(Lf.Provider, {
            value: c,
            children: (0, O.jsx)(f, {
              ref: l,
              "data-testid": t,
              "aria-disabled": i,
              ...u,
              children: r
            })
          })
        }),
        Mf = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            size: a
          } = Vf(), s = e ? fe.DX : "div", i = (0, k.mergeProps)({
            className: Ef({
              size: a
            })
          }, o);
          return (0, O.jsx)(s, {
            ref: n,
            "data-testid": t,
            ...i,
            children: r
          })
        }),
        qf = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Ve[e],
            n = (0, k.mergeProps)({
              className: "foundry_oahh5812"
            }, r);
          return (0, O.jsx)(o, {
            ref: t,
            size: "SM",
            ...n
          })
        }),
        Ff = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            background: o,
            isDisabled: n
          } = Vf(), a = (0, k.mergeProps)({
            className: If({
              background: o
            })
          }, r);
          return (0, O.jsx)(nr, {
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
      var Bf = t(9089),
        Xf = "ToastProvider",
        [Kf, Zf, Hf] = gn("Toast"),
        [Gf, Wf] = (0, St.A)("Toast", [Hf]),
        [Uf, $f] = Gf(Xf),
        Yf = e => {
          const {
            __scopeToast: r,
            label: t = "Notification",
            duration: o = 5e3,
            swipeDirection: n = "right",
            swipeThreshold: a = 50,
            children: s
          } = e, [i, d] = S.useState(null), [l, c] = S.useState(0), u = S.useRef(!1), f = S.useRef(!1);
          return t.trim() || console.error(`Invalid prop \`label\` supplied to \`${Xf}\`. Expected non-empty \`string\`.`), (0, O.jsx)(Kf.Provider, {
            scope: r,
            children: (0, O.jsx)(Uf, {
              scope: r,
              label: t,
              duration: o,
              swipeDirection: n,
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
      Yf.displayName = Xf;
      var Qf = "ToastViewport",
        Jf = ["F8"],
        ep = "toast.viewportPause",
        rp = "toast.viewportResume",
        tp = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            hotkey: o = Jf,
            label: n = "Notifications ({hotkey})",
            ...a
          } = e, s = $f(Qf, t), i = Zf(t), d = S.useRef(null), l = S.useRef(null), c = S.useRef(null), u = S.useRef(null), f = (0, Rt.s)(r, u, s.onViewportChange), p = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = s.toastCount > 0;
          S.useEffect(() => {
            const e = e => {
              0 !== o.length && o.every(r => e[r] || e.code === r) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [o]), S.useEffect(() => {
            const e = d.current,
              r = u.current;
            if (y && e && r) {
              const t = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(ep);
                    r.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                o = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(rp);
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
          }, [y, s.isClosePausedRef]);
          const v = S.useCallback(({
            tabbingDirection: e
          }) => {
            const r = i().map(r => {
              const t = r.ref.current,
                o = [t, ...wp(t)];
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
                  const n = v({
                      tabbingDirection: o ? "backwards" : "forwards"
                    }),
                    a = n.findIndex(e => e === t);
                  xp(n.slice(a + 1)) ? r.preventDefault() : o ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", r), () => e.removeEventListener("keydown", r)
            }
          }, [i, v]), (0, O.jsxs)(Xt, {
            ref: d,
            role: "region",
            "aria-label": n.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: y ? void 0 : "none"
            },
            children: [y && (0, O.jsx)(np, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                xp(v({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, O.jsx)(Kf.Slot, {
              scope: t,
              children: (0, O.jsx)(kt.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), y && (0, O.jsx)(np, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                xp(v({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      tp.displayName = Qf;
      var op = "ToastFocusProxy",
        np = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            onFocusFromOutsideViewport: o,
            ...n
          } = e, a = $f(op, t);
          return (0, O.jsx)(Po, {
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
      np.displayName = op;
      var ap = "Toast",
        sp = S.forwardRef((e, r) => {
          const {
            forceMount: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, jo.i)({
            prop: o,
            defaultProp: n ?? !0,
            onChange: a,
            caller: ap
          });
          return (0, O.jsx)(xo, {
            present: t || i,
            children: (0, O.jsx)(lp, {
              open: i,
              ...s,
              ref: r,
              onClose: () => d(!1),
              onPause: (0, Tt.c)(e.onPause),
              onResume: (0, Tt.c)(e.onResume),
              onSwipeStart: (0, Ot.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Ot.mK)(e.onSwipeMove, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${t}px`)
              }),
              onSwipeCancel: (0, Ot.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Ot.mK)(e.onSwipeEnd, e => {
                const {
                  x: r,
                  y: t
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${r}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${t}px`), d(!1)
              })
            })
          })
        });
      sp.displayName = ap;
      var [ip, dp] = Gf(ap, {
        onClose() {}
      }), lp = S.forwardRef((e, r) => {
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
          ...y
        } = e, v = $f(ap, t), [m, b] = S.useState(null), g = (0, Rt.s)(r, e => b(e)), h = S.useRef(null), w = S.useRef(null), x = n || v.duration, _ = S.useRef(0), j = S.useRef(x), C = S.useRef(0), {
          onToastAdd: P,
          onToastRemove: R
        } = v, N = (0, Tt.c)(() => {
          const e = m?.contains(document.activeElement);
          e && v.viewport?.focus(), s()
        }), D = S.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), _.current = (new Date).getTime(), C.current = window.setTimeout(N, e))
        }, [N]);
        S.useEffect(() => {
          const e = v.viewport;
          if (e) {
            const r = () => {
                D(j.current), l?.()
              },
              t = () => {
                const e = (new Date).getTime() - _.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(ep, t), e.addEventListener(rp, r), () => {
              e.removeEventListener(ep, t), e.removeEventListener(rp, r)
            }
          }
        }, [v.viewport, x, d, l, D]), S.useEffect(() => {
          a && !v.isClosePausedRef.current && D(x)
        }, [a, x, v.isClosePausedRef, D]), S.useEffect(() => (P(), () => R()), [P, R]);
        const k = S.useMemo(() => m ? bp(m) : null, [m]);
        return v.viewport ? (0, O.jsxs)(O.Fragment, {
          children: [k && (0, O.jsx)(cp, {
            __scopeToast: t,
            role: "status",
            "aria-live": "foreground" === o ? "assertive" : "polite",
            children: k
          }), (0, O.jsx)(ip, {
            scope: t,
            onClose: N,
            children: Nt.createPortal((0, O.jsx)(Kf.ItemSlot, {
              scope: t,
              children: (0, O.jsx)(Bt, {
                asChild: !0,
                onEscapeKeyDown: (0, Ot.mK)(i, () => {
                  v.isFocusedToastEscapeKeyDownRef.current || N(), v.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, O.jsx)(kt.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": v.swipeDirection,
                  ...y,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, Ot.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, N()))
                  }),
                  onPointerDown: (0, Ot.mK)(e.onPointerDown, e => {
                    0 === e.button && (h.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, Ot.mK)(e.onPointerMove, e => {
                    if (!h.current) return;
                    const r = e.clientX - h.current.x,
                      t = e.clientY - h.current.y,
                      o = Boolean(w.current),
                      n = ["left", "right"].includes(v.swipeDirection),
                      a = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
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
                    o ? (w.current = l, gp("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : hp(l, v.swipeDirection, d) ? (w.current = l, gp("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(r) > d || Math.abs(t) > d) && (h.current = null)
                  }),
                  onPointerUp: (0, Ot.mK)(e.onPointerUp, e => {
                    const r = w.current,
                      t = e.target;
                    if (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), w.current = null, h.current = null, r) {
                      const t = e.currentTarget,
                        o = {
                          originalEvent: e,
                          delta: r
                        };
                      hp(r, v.swipeDirection, v.swipeThreshold) ? gp("toast.swipeEnd", p, o, {
                        discrete: !0
                      }) : gp("toast.swipeCancel", f, o, {
                        discrete: !0
                      }), t.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), v.viewport)
          })]
        }) : null
      }), cp = e => {
        const {
          __scopeToast: r,
          children: t,
          ...o
        } = e, n = $f(ap, r), [a, s] = S.useState(!1), [i, d] = S.useState(!1);
        return function(e = () => {}) {
          const r = (0, Tt.c)(e);
          (0, Ut.N)(() => {
            let e = 0,
              t = 0;
            return e = window.requestAnimationFrame(() => t = window.requestAnimationFrame(r)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(t)
            }
          }, [r])
        }(() => s(!0)), S.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, O.jsx)(wo, {
          asChild: !0,
          children: (0, O.jsx)(Po, {
            ...o,
            children: a && (0, O.jsxs)(O.Fragment, {
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
        return (0, O.jsx)(kt.div, {
          ...o,
          ref: r
        })
      }).displayName = "ToastTitle";
      var up = S.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          ...o
        } = e;
        return (0, O.jsx)(kt.div, {
          ...o,
          ref: r
        })
      });
      up.displayName = "ToastDescription";
      var fp = "ToastAction",
        pp = S.forwardRef((e, r) => {
          const {
            altText: t,
            ...o
          } = e;
          return t.trim() ? (0, O.jsx)(mp, {
            altText: t,
            asChild: !0,
            children: (0, O.jsx)(vp, {
              ...o,
              ref: r
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${fp}\`. Expected non-empty \`string\`.`), null)
        });
      pp.displayName = fp;
      var yp = "ToastClose",
        vp = S.forwardRef((e, r) => {
          const {
            __scopeToast: t,
            ...o
          } = e, n = dp(yp, t);
          return (0, O.jsx)(mp, {
            asChild: !0,
            children: (0, O.jsx)(kt.button, {
              type: "button",
              ...o,
              ref: r,
              onClick: (0, Ot.mK)(e.onClick, n.onClose)
            })
          })
        });
      vp.displayName = yp;
      var mp = S.forwardRef((e, r) => {
        const {
          __scopeToast: t,
          altText: o,
          ...n
        } = e;
        return (0, O.jsx)(kt.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": o || void 0,
          ...n,
          ref: r
        })
      });

      function bp(e) {
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
              } else r.push(...bp(e))
          }
        }), r
      }

      function gp(e, r, t, {
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
        }), o ? zt(n, a) : n.dispatchEvent(a)
      }
      var hp = (e, r, t = 0) => {
        const o = Math.abs(e.x),
          n = Math.abs(e.y),
          a = o > n;
        return "left" === r || "right" === r ? a && o > t : !a && n > t
      };

      function wp(e) {
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

      function xp(e) {
        const r = document.activeElement;
        return e.some(e => e === r || (e.focus(), document.activeElement !== r))
      }
      var _p = Yf,
        jp = tp,
        Cp = sp,
        Pp = up,
        Op = pp,
        Rp = vp;

      function Sp(e) {
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

      function Np(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Dp(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Np(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Sp(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Np(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function kp(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var zp = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Ip = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Dp(Dp({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zp(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kp(e.variantClassNames, e => kp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Tp = Ip({
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
        Ep = Ip({
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
        Lp = Ip({
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
      const Vp = ({
          testId: e,
          ...r
        }) => (0, O.jsx)(_p, {
          "data-testid": e,
          ...r
        }),
        Ap = (0, S.forwardRef)(({
          children: e,
          testId: r,
          position: t = "bottomRight",
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
            className: Lp({
              position: t
            })
          }, o);
          return (0, O.jsx)(jp, {
            ref: n,
            "data-testid": r,
            ...a,
            children: e
          })
        }),
        Mp = (0, S.createContext)(null);

      function qp() {
        const e = (0, S.useContext)(Mp);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Fp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          appearance: o = "success",
          ...n
        }, a) => {
          const s = e ? fe.DX : Cp,
            i = (0, k.mergeProps)({
              className: Ep({
                appearance: o
              })
            }, n);
          return (0, O.jsx)(Mp.Provider, {
            value: {
              appearance: o
            },
            children: (0, O.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i,
              children: r
            })
          })
        }),
        Bp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = e ? fe.DX : Pp,
            s = (0, k.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, o);
          return (0, O.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s,
            children: r
          })
        }),
        Xp = {
          danger: Ve.CircleX,
          information: Ve.Info,
          success: Ve.CircleCheck,
          warning: Ve.TriangleAlert,
          avocado: Ve.CircleCheck
        },
        Kp = (0, S.forwardRef)(({
          asChild: e,
          ...r
        }, t) => {
          const {
            appearance: o
          } = qp(), n = e ? fe.DX : Xp[o], a = (0, k.mergeProps)({
            className: Tp({
              appearance: o
            }),
            size: "LG"
          }, r);
          return (0, O.jsx)(n, {
            ref: t,
            ...a
          })
        }),
        Zp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, o);
          return (0, O.jsx)(Op, {
            ref: n,
            "data-testid": t,
            ...a,
            children: e ? (0, O.jsx)(fe.DX, {
              children: r
            }) : (0, O.jsx)(Bf.$, {
              size: "MD",
              appearance: "link",
              children: r
            })
          })
        }),
        Hp = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          label: o,
          ...n
        }, a) => {
          const s = (0, k.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, n);
          return (0, O.jsx)(Rp, {
            ref: a,
            "data-testid": t,
            ...s,
            children: e ? (0, O.jsx)(fe.DX, {
              children: r
            }) : (0, O.jsx)(zu, {
              size: "SM",
              label: o
            })
          })
        });
      var Gp = t(92405);

      function Wp(e) {
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

      function $p(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Up(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Wp(n)) in o ? Object.defineProperty(o, n, {
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

      function Yp(e, r) {
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
        Jp = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = $p($p({}, e.defaultVariants), r);
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
              return Yp(e.variantClassNames, e => Yp(e, e => e.split(" ")[0]))
            }
          }, r
        },
        ey = Jp({
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
        ry = Jp({
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
        ty = Jp({
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

      function oy() {
        const e = (0, S.useContext)(ny);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const ny = (0, S.createContext)(null),
        ay = (0, S.forwardRef)(({
          children: e,
          testId: r,
          asChild: t,
          size: o = "MD",
          ...n
        }, a) => {
          const s = (0, k.mergeProps)({
              className: ty({
                size: o
              })
            }, n),
            i = t ? fe.DX : "ol";
          return (0, O.jsx)(ny.Provider, {
            value: {
              size: o
            },
            children: (0, O.jsx)(i, {
              ref: a,
              "data-testid": r,
              ...s,
              children: e
            })
          })
        }),
        sy = (0, S.forwardRef)(({
          isCurrent: e,
          children: r,
          asChild: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, S.useRef)(null),
            {
              size: i
            } = oy(),
            {
              itemProps: d
            } = (0, Gp.I)({
              isCurrent: e,
              children: r
            }, s),
            l = t ? fe.DX : "a",
            c = (0, k.mergeProps)({
              className: (0, Le.clsx)(ey({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": o
            }, d, n);
          return (0, O.jsx)("li", {
            className: ry({
              size: i
            }),
            ref: a,
            children: (0, O.jsx)(l, {
              ref: s,
              ...c,
              children: r
            })
          })
        }),
        iy = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Ve[e];
          return (0, O.jsx)(o, {
            ref: t,
            size: "LG",
            ...r
          })
        }),
        dy = (0, S.forwardRef)(({
          children: e,
          testId: r,
          defaultOpen: t = !1,
          label: o,
          ...n
        }, a) => {
          const [s, i] = (0, S.useState)(t), {
            size: d
          } = oy(), l = (0, k.mergeProps)({
            className: ry({
              size: d
            }),
            "data-testid": r
          }, n);
          return (0, O.jsx)("li", {
            ref: a,
            ...l,
            children: (0, O.jsxs)(vd, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, O.jsx)(md, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": o,
                children: "..."
              }), (0, O.jsx)(hd, {
                children: (0, O.jsx)(wd, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, O.jsx)(xd, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        ly = (0, S.forwardRef)(({
          children: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = r ? fe.DX : _d,
            s = (0, k.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": t
            }, o);
          return (0, O.jsx)(a, {
            ref: n,
            ...s,
            children: e
          })
        });

      function cy(e) {
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

      function uy(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function fy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? uy(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = cy(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : uy(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function py(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var yy = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        vy = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = fy(fy({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yy(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return py(e.variantClassNames, e => py(e, e => e.split(" ")[0]))
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
      const my = (0, S.createContext)(null);

      function by() {
        const e = (0, S.useContext)(my);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const gy = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          appearance: t = "primary",
          size: o = "SM",
          type: n = "text",
          ...a
        }, s) => {
          const i = e ? fe.DX : "div",
            d = (0, k.mergeProps)({
              className: vy({
                appearance: t,
                type: n,
                size: o
              })
            }, a);
          return (0, O.jsx)(my.Provider, {
            value: {
              type: n
            },
            children: (0, O.jsx)(i, {
              ref: s,
              "data-testid": r,
              ...d
            })
          })
        }),
        hy = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = e ? fe.DX : "div",
            a = (0, k.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": r
            }, t);
          return (0, O.jsx)(n, {
            ref: o,
            ...a
          })
        }),
        wy = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const o = Os[e],
            n = (0, k.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, r);
          return (0, O.jsx)(o, {
            ref: t,
            ...n
          })
        }),
        xy = () => {
          const e = (0, ue.Ub)(k.breakpoints.mobile);
          return r => e ? {
            transform: `translate(0,${100-r}%)`
          } : {
            opacity: r / 100,
            transform: `scale(${.95+r/100*.05})`
          }
        },
        _y = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
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

      function Py(e) {
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

      function Oy(e, r) {
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
        Sy = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Py(Py({}, e.defaultVariants), r);
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
              return Oy(e.variantClassNames, e => Oy(e, e => e.split(" ")[0]))
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
      const Ny = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, r);
          return (0, O.jsx)(fi, {
            ref: t,
            ...o
          })
        }),
        Dy = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, r);
          return (0, O.jsx)(pi, {
            ref: t,
            ...o
          })
        }),
        ky = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, r);
          return (0, O.jsx)(yi, {
            ref: t,
            ...o
          })
        }),
        zy = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, ue.rl)(),
            n = (0, k.mergeProps)({
              "data-testid": e,
              className: Sy({
                isTouchDevice: o
              })
            }, r);
          return (0, O.jsx)(vi, {
            ref: t,
            ...n
          })
        }),
        Iy = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e
          }, r);
          return (0, O.jsx)(mi, {
            ref: t,
            ...o
          })
        });

      function Ty(e) {
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

      function Ey(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Ly(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Ey(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Ty(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ey(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Vy(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Ay = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        My = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Ly(Ly({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ay(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vy(e.variantClassNames, e => Vy(e, e => e.split(" ")[0]))
            }
          }, r
        },
        qy = My({
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
        Fy = My({
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
      const By = (0, S.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, S.createRef)(),
          dialogSpringRef: (0, Pt.$9)(),
          overlaySpringRef: (0, Pt.$9)()
        }),
        Xy = ({
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
          return (0, O.jsx)(By.Provider, {
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
              dialogSpringRef: (0, Pt.U2)(),
              overlaySpringRef: (0, Pt.U2)()
            },
            children: (0, O.jsx)(Ky, {
              ...i
            })
          })
        },
        Ky = e => {
          const {
            isOpen: r,
            setIsOpen: t
          } = (0, S.useContext)(By), o = (0, k.mergeProps)({
            open: r,
            onOpenChange: t
          }, e);
          return (0, O.jsx)(Ba, {
            ...o
          })
        },
        Zy = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            contentId: o,
            triggerRef: n
          } = (0, S.useContext)(By), a = (0, ue.UP)(n, t), s = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": o
          }, r);
          return (0, O.jsx)(Xa, {
            ...s,
            ref: a
          })
        }),
        Hy = e => (0, O.jsx)(Ka, {
          forceMount: !0,
          ...e
        }),
        Gy = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            isOpen: o,
            overlaySpringRef: n,
            openImmediately: a
          } = (0, S.useContext)(By), s = _y(), i = (0, ue.jt)(), d = (0, Pt.pn)(o, {
            ref: n,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Pt.$W.stiff,
            immediate: i || a
          }), l = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, r), c = (0, Pt.CS)(Za);
          return (0, S.useEffect)(() => {
            n.start()
          }, [o]), d((e, r) => r ? (0, O.jsx)(c, {
            forceMount: !0,
            ref: t,
            ...l,
            style: e
          }) : null)
        }),
        Wy = (0, S.forwardRef)(({
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
            onCloseTransitionComplete: y,
            dialogSpringRef: v,
            overlaySpringRef: m
          } = (0, S.useContext)(By), b = (0, ue.rl)(), g = (0, ue.jt)(), h = (0, S.useRef)(null), w = xy(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: r,
            overlaySpringRef: t,
            onCloseTransitionStart: o,
            onCloseTransitionComplete: n
          }) {
            const a = _y(),
              s = xy(),
              i = (0, S.useRef)();
            return {
              bindDrag: (0, Xr.useDrag)(({
                velocity: [, d],
                offset: [, l],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: y
              }) => {
                const {
                  height: v
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
                  }(y, c)), (!i.current || l < -70) && u(), i.current) {
                  const e = 100 * (v - l) / v;
                  t.start({
                    ...a(e),
                    immediate: !0
                  }), r.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * v || d > .5 && c > 0 ? (r.start({
                  ...s(0),
                  immediate: !1,
                  config: Pt.$W.stiff,
                  onStart: o,
                  onRest: n
                }), t.start({
                  ...a(0),
                  immediate: !1,
                  config: Pt.$W.stiff
                })) : (r.start({
                  ...s(100),
                  immediate: !1,
                  config: Pt.$W.stiff
                }), t.start({
                  ...a(100),
                  immediate: !1,
                  config: Pt.$W.stiff
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
            dialogRef: h,
            overlaySpringRef: m,
            dialogSpringRef: v,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: y
          }), _ = (0, Pt.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: Pt.$W.stiff,
            ref: v,
            immediate: g || d,
            onStart: (e, r, t) => {
              t ? u?.() : p?.()
            },
            onRest: (e, r, t) => {
              t ? f?.() : y?.()
            }
          });
          (0, S.useEffect)(() => {
            v.start()
          }, [s]);
          const j = (0, ue.UP)(h, a),
            C = b && !g && !o && x(),
            P = (0, k.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                t?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, n),
            R = (0, Pt.CS)(Ha);
          return _((r, t) => t ? (0, O.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, O.jsx)(R, {
              forceMount: !0,
              ref: j,
              ...P,
              style: r,
              children: e
            })
          }) : null)
        }),
        Uy = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, O.jsx)(Ga, {
            ref: t,
            ...o
          })
        }),
        $y = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e
          }, r);
          return (0, O.jsx)(Wa, {
            ref: t,
            ...o
          })
        }),
        Yy = (0, S.forwardRef)(({
          children: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
            className: "foundry_xov33nh",
            "data-testid": r
          }, t);
          return (0, O.jsxs)(Ny, {
            ref: o,
            ...n,
            children: [(0, O.jsx)(Dy, {
              className: "foundry_xov33ni",
              children: e
            }), (0, O.jsx)(ky, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, O.jsx)(zy, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Qy = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33ne"
            }, t),
            a = e ? fe.DX : "div";
          return (0, O.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        Jy = (0, S.forwardRef)(({
          align: e,
          asChild: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
              "data-testid": t,
              className: qy({
                align: e
              })
            }, o),
            s = r ? fe.DX : "header";
          return (0, O.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        ev = (0, S.forwardRef)(({
          testId: e,
          appearance: r = "sentence",
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
            "data-testid": e,
            className: Fy({
              appearance: r
            })
          }, t);
          return (0, O.jsx)(Ga, {
            ref: o,
            ...n
          })
        }),
        rv = (0, S.forwardRef)((e, r) => {
          const t = (0, k.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, O.jsx)(nf.K, {
            ref: r,
            ...t,
            appearance: "ghost",
            size: "LG"
          })
        }),
        tv = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, t),
            a = r ? (0, O.jsx)(fe.DX, {
              ref: o,
              ...n
            }) : (0, O.jsx)(zu, {
              ref: o,
              ...n,
              size: "LG"
            });
          return (0, O.jsx)(Ua, {
            asChild: !0,
            children: a
          })
        }),
        ov = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, t),
            a = e ? fe.DX : "div";
          return (0, O.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        nv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, t),
            a = e ? fe.DX : "footer";
          return (0, O.jsx)(a, {
            ref: o,
            ...n
          })
        });
      var av = t(93367),
        sv = t(4031),
        iv = t(2559),
        dv = "Avatar",
        [lv, cv] = (0, av.A)(dv),
        [uv, fv] = lv(dv),
        pv = S.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            ...o
          } = e, [n, a] = S.useState("idle");
          return (0, O.jsx)(uv, {
            scope: t,
            imageLoadingStatus: n,
            onImageLoadingStatusChange: a,
            children: (0, O.jsx)(sv.sG.span, {
              ...o,
              ref: r
            })
          })
        });
      pv.displayName = dv;
      var yv = "AvatarImage",
        vv = S.forwardRef((e, r) => {
          const {
            __scopeAvatar: t,
            src: o,
            onLoadingStatusChange: n = () => {},
            ...a
          } = e, s = fv(yv, t), i = function(e, {
            referrerPolicy: r,
            crossOrigin: t
          }) {
            const o = (0, iv.z)(),
              n = S.useRef(null),
              a = o ? (n.current || (n.current = new window.Image), n.current) : null,
              [s, i] = S.useState(() => bv(a, e));
            return (0, Ut.N)(() => {
              i(bv(a, e))
            }, [a, e]), (0, Ut.N)(() => {
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
          }(o, a), d = (0, Tt.c)(e => {
            n(e), s.onImageLoadingStatusChange(e)
          });
          return (0, Ut.N)(() => {
            "idle" !== i && d(i)
          }, [i, d]), "loaded" === i ? (0, O.jsx)(sv.sG.img, {
            ...a,
            ref: r,
            src: o
          }) : null
        });
      vv.displayName = yv;
      var mv = "AvatarFallback";

      function bv(e, r) {
        return e ? r ? (e.src !== r && (e.src = r), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      S.forwardRef((e, r) => {
        const {
          __scopeAvatar: t,
          delayMs: o,
          ...n
        } = e, a = fv(mv, t), [s, i] = S.useState(void 0 === o);
        return S.useEffect(() => {
          if (void 0 !== o) {
            const e = window.setTimeout(() => i(!0), o);
            return () => window.clearTimeout(e)
          }
        }, [o]), s && "loaded" !== a.imageLoadingStatus ? (0, O.jsx)(sv.sG.span, {
          ...n,
          ref: r
        }) : null
      }).displayName = mv;
      var gv = pv,
        hv = vv;

      function wv(e) {
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

      function xv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function _v(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? xv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = wv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function jv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Cv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Pv = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = _v(_v({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jv(e.variantClassNames, e => jv(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Ov = Pv({
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
        Rv = "var(--foundry_v912w22)",
        Sv = "var(--foundry_v912w23)",
        Nv = Pv({
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
        Dv = Pv({
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
        kv = "var(--foundry_v912w21)",
        zv = "var(--foundry_v912w20)",
        Iv = Pv({
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
      const Tv = (0, S.createContext)(null);

      function Ev() {
        const e = (0, S.useContext)(Tv);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Lv = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          size: o,
          status: n,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, k.mergeProps)({
            "data-testid": t,
            "aria-disabled": a,
            className: Ov({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, O.jsx)(Tv.Provider, {
            value: {
              size: o,
              status: n,
              isDisabled: a
            },
            children: (0, O.jsx)(gv, {
              ref: i,
              ...d,
              children: r
            })
          })
        }),
        Vv = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          src: t,
          ...o
        }, n) => {
          const {
            size: a,
            isDisabled: s
          } = Ev(), [i, d] = (0, S.useState)(!1);
          (0, S.useEffect)(() => {
            d(!1)
          }, [t]);
          const l = i || !t ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : t,
            c = (0, k.mergeProps)({
              className: Nv({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, o);
          return (0, O.jsx)("span", {
            className: Dv({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": r,
            "aria-hidden": !0,
            children: (0, O.jsx)(hv, {
              ref: n,
              ...c
            })
          })
        }),
        Av = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const n = (0, S.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = Ev(),
            d = s || "online",
            l = (0, ue.UP)(n, o),
            c = (0, k.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Iv({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, N.D)({
                [zv]: r?.online,
                [kv]: r?.offline,
                [Rv]: r?.away,
                [Sv]: r?.busy
              })
            }, t);
          return (0, O.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Mv(e) {
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

      function qv(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Fv(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? qv(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Mv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qv(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Bv(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Xv = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Kv = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Fv(Fv({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xv(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bv(e.variantClassNames, e => Bv(e, e => e.split(" ")[0]))
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
      const Zv = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_2jlbzt0"
            }, o),
            s = e ? fe.DX : "nav";
          return (0, O.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Hv = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
              role: "list",
              "data-testid": t,
              className: "foundry_2jlbzt1"
            }, o),
            s = e ? fe.DX : "div";
          return (0, O.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        }),
        Gv = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          isActive: t,
          testId: o,
          ...n
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, ue.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, Cu.i)(n, s),
            c = (0, k.mergeProps)({
              role: "listitem",
              "data-testid": o,
              "data-pressed": l,
              "data-active": t,
              className: (0, Le.clsx)(Kv({
                isActive: t
              }))
            }, d),
            u = e ? fe.DX : "a";
          return (0, O.jsx)(u, {
            ref: i,
            ...c,
            children: r
          })
        }),
        Wv = (0, S.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, t);
          return (0, O.jsx)(Gv, {
            ref: o,
            ...n,
            children: (0, O.jsx)(Ve.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        Uv = (0, S.forwardRef)(({
          label: e,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, t);
          return (0, O.jsx)(Gv, {
            ref: o,
            ...n,
            children: (0, O.jsx)(Ve.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        $v = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, k.mergeProps)({
              role: "listitem",
              "data-testid": t,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, o),
            a = e ? fe.DX : "span";
          return (0, O.jsx)(a, {
            ...n,
            children: r || "..."
          })
        },
        Yv = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_2jlbzt8"
            }, o),
            a = e ? fe.DX : "div";
          return (0, O.jsx)(a, {
            ...n,
            children: r
          })
        },
        Qv = (0, S.createContext)(null);

      function Jv() {
        const e = (0, S.useContext)(Qv);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const em = ({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }) => {
          const n = (0, S.useId)(),
            a = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_2jlbztb"
            }, o),
            s = e ? fe.DX : "div";
          return (0, O.jsx)(Qv.Provider, {
            value: {
              labelId: n
            },
            children: (0, O.jsx)(s, {
              ...a,
              children: r
            })
          })
        },
        rm = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Jv(), s = (0, k.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, o), i = e ? fe.DX : "label";
          return (0, O.jsx)(i, {
            ref: n,
            id: a,
            ...s,
            children: r
          })
        }),
        tm = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          placeholder: t,
          ...o
        }, n) => {
          const {
            labelId: a
          } = Jv(), s = (0, k.mergeProps)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, o), i = e ? fe.DX : Ad;
          return (0, O.jsxs)(i, {
            ...s,
            children: [(0, O.jsxs)(Bd, {
              ref: n,
              children: [(0, O.jsx)(Xd, {
                placeholder: t
              }), (0, O.jsx)(Kd, {})]
            }), (0, O.jsx)(Yd, {
              children: (0, O.jsx)(Md, {
                children: (0, O.jsx)(Fd, {
                  children: r
                })
              })
            })]
          })
        }),
        om = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
              "data-testid": t
            }, o),
            s = e ? fe.DX : Wd;
          return (0, O.jsx)(s, {
            ...a,
            ref: n,
            children: (0, O.jsx)(Ud, {
              children: r
            })
          })
        }),
        nm = (0, S.forwardRef)(({
          asChild: e,
          children: r,
          testId: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
              "data-testid": t,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, o),
            s = e ? fe.DX : "p";
          return (0, O.jsx)(s, {
            ref: n,
            ...a,
            children: r
          })
        });
      var am = "rovingFocusGroup.onEntryFocus",
        sm = {
          bubbles: !1,
          cancelable: !0
        },
        im = "RovingFocusGroup",
        [dm, lm, cm] = gn(im),
        [um, fm] = (0, St.A)(im, [cm]),
        [pm, ym] = um(im),
        vm = S.forwardRef((e, r) => (0, O.jsx)(dm.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, O.jsx)(dm.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, O.jsx)(mm, {
              ...e,
              ref: r
            })
          })
        }));
      vm.displayName = im;
      var mm = S.forwardRef((e, r) => {
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
          } = e, f = S.useRef(null), p = (0, Rt.s)(r, f), y = (0, mn.jH)(a), [v, m] = (0, jo.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: im
          }), [b, g] = S.useState(!1), h = (0, Tt.c)(l), w = lm(t), x = S.useRef(!1), [_, j] = S.useState(0);
          return S.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(am, h), () => e.removeEventListener(am, h)
          }, [h]), (0, O.jsx)(pm, {
            scope: t,
            orientation: o,
            dir: y,
            loop: n,
            currentTabStopId: v,
            onItemFocus: S.useCallback(e => m(e), [m]),
            onItemShiftTab: S.useCallback(() => g(!0), []),
            onFocusableItemAdd: S.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: S.useCallback(() => j(e => e - 1), []),
            children: (0, O.jsx)(kt.div, {
              tabIndex: b || 0 === _ ? -1 : 0,
              "data-orientation": o,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Ot.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, Ot.mK)(e.onFocus, e => {
                const r = !x.current;
                if (e.target === e.currentTarget && r && !b) {
                  const r = new CustomEvent(am, sm);
                  if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      r = e.find(e => e.active),
                      t = e.find(e => e.id === v),
                      o = [r, t, ...e].filter(Boolean).map(e => e.ref.current);
                    wm(o, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, Ot.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        bm = "RovingFocusGroupItem",
        gm = S.forwardRef((e, r) => {
          const {
            __scopeRovingFocusGroup: t,
            focusable: o = !0,
            active: n = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Kt.B)(), l = a || d, c = ym(bm, t), u = c.currentTabStopId === l, f = lm(t), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: y,
            currentTabStopId: v
          } = c;
          return S.useEffect(() => {
            if (o) return p(), () => y()
          }, [o, p, y]), (0, O.jsx)(dm.ItemSlot, {
            scope: t,
            id: l,
            focusable: o,
            active: n,
            children: (0, O.jsx)(kt.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: r,
              onMouseDown: (0, Ot.mK)(e.onMouseDown, e => {
                o ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, Ot.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, Ot.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const r = function(e, r, t) {
                  const o = function(e, r) {
                    return "rtl" !== r ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, t);
                  return "vertical" === r && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o) ? void 0 : hm[o]
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
                  setTimeout(() => wm(a))
                }
                var t, o
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: u,
                hasTabStop: null != v
              }) : s
            })
          })
        });
      gm.displayName = bm;
      var hm = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function wm(e, r = !1) {
        const t = document.activeElement;
        for (const o of e) {
          if (o === t) return;
          if (o.focus({
              preventScroll: r
            }), document.activeElement !== t) return
        }
      }
      var xm = vm,
        _m = gm,
        jm = "Toggle",
        Cm = S.forwardRef((e, r) => {
          const {
            pressed: t,
            defaultPressed: o,
            onPressedChange: n,
            ...a
          } = e, [s, i] = (0, jo.i)({
            prop: t,
            onChange: n,
            defaultProp: o ?? !1,
            caller: jm
          });
          return (0, O.jsx)(kt.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: r,
            onClick: (0, Ot.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      Cm.displayName = jm;
      var Pm = "ToggleGroup",
        [Om, Rm] = (0, St.A)(Pm, [fm]),
        Sm = fm(),
        Nm = S.forwardRef((e, r) => {
          const {
            type: t,
            ...o
          } = e;
          if ("single" === t) {
            const e = o;
            return (0, O.jsx)(zm, {
              ...e,
              ref: r
            })
          }
          if ("multiple" === t) {
            const e = o;
            return (0, O.jsx)(Im, {
              ...e,
              ref: r
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Pm}\``)
        });
      Nm.displayName = Pm;
      var [Dm, km] = Om(Pm), zm = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, jo.i)({
          prop: t,
          defaultProp: o ?? "",
          onChange: n,
          caller: Pm
        });
        return (0, O.jsx)(Dm, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: S.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: S.useCallback(() => i(""), [i]),
          children: (0, O.jsx)(Lm, {
            ...a,
            ref: r
          })
        })
      }), Im = S.forwardRef((e, r) => {
        const {
          value: t,
          defaultValue: o,
          onValueChange: n = () => {},
          ...a
        } = e, [s, i] = (0, jo.i)({
          prop: t,
          defaultProp: o ?? [],
          onChange: n,
          caller: Pm
        }), d = S.useCallback(e => i((r = []) => [...r, e]), [i]), l = S.useCallback(e => i((r = []) => r.filter(r => r !== e)), [i]);
        return (0, O.jsx)(Dm, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, O.jsx)(Lm, {
            ...a,
            ref: r
          })
        })
      });
      Nm.displayName = Pm;
      var [Tm, Em] = Om(Pm), Lm = S.forwardRef((e, r) => {
        const {
          __scopeToggleGroup: t,
          disabled: o = !1,
          rovingFocus: n = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = Sm(t), c = (0, mn.jH)(s), u = {
          role: "group",
          dir: c,
          ...d
        };
        return (0, O.jsx)(Tm, {
          scope: t,
          rovingFocus: n,
          disabled: o,
          children: n ? (0, O.jsx)(xm, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, O.jsx)(kt.div, {
              ...u,
              ref: r
            })
          }) : (0, O.jsx)(kt.div, {
            ...u,
            ref: r
          })
        })
      }), Vm = "ToggleGroupItem", Am = S.forwardRef((e, r) => {
        const t = km(Vm, e.__scopeToggleGroup),
          o = Em(Vm, e.__scopeToggleGroup),
          n = Sm(e.__scopeToggleGroup),
          a = t.value.includes(e.value),
          s = o.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = S.useRef(null);
        return o.rovingFocus ? (0, O.jsx)(_m, {
          asChild: !0,
          ...n,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, O.jsx)(Mm, {
            ...i,
            ref: r
          })
        }) : (0, O.jsx)(Mm, {
          ...i,
          ref: r
        })
      });
      Am.displayName = Vm;
      var Mm = S.forwardRef((e, r) => {
          const {
            __scopeToggleGroup: t,
            value: o,
            ...n
          } = e, a = km(Vm, t), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, O.jsx)(Cm, {
            ...i,
            ...n,
            ref: r,
            onPressedChange: e => {
              e ? a.onItemActivate(o) : a.onItemDeactivate(o)
            }
          })
        }),
        qm = Nm,
        Fm = Am;

      function Bm(e) {
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

      function Xm(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Km(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Xm(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Bm(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xm(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function Zm(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var Hm = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Gm = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Km(Km({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Hm(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zm(e.variantClassNames, e => Zm(e, e => e.split(" ")[0]))
            }
          }, r
        },
        Wm = "var(--foundry_zxwkyk2)",
        Um = "var(--foundry_zxwkyk3)",
        $m = Gm({
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
        Ym = Gm({
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
        Qm = Gm({
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
        Jm = "var(--foundry_zxwkyk1)",
        eb = "var(--foundry_zxwkyk0)",
        rb = Gm({
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
      const tb = (0, S.createContext)(null);

      function ob() {
        const e = (0, S.useContext)(tb);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const nb = (0, S.forwardRef)(({
          testId: e,
          size: r,
          type: t = "single",
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
            "data-testid": e,
            className: $m({
              size: r
            }),
            type: t
          }, o);
          return (0, O.jsx)(tb.Provider, {
            value: {
              size: r
            },
            children: (0, O.jsx)(qm, {
              ref: n,
              ...a
            })
          })
        }),
        ab = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const {
            size: o
          } = ob(), n = (0, k.mergeProps)({
            "data-testid": e,
            className: Ym({
              size: o
            })
          }, r);
          return (0, O.jsx)(Fm, {
            ref: t,
            ...n
          })
        }),
        sb = (0, S.forwardRef)(({
          icon: e,
          ...r
        }, t) => {
          const {
            size: o
          } = ob(), n = Os[e];
          return (0, O.jsx)(n, {
            label: "",
            ref: t,
            size: o,
            className: "foundry_zxwkykb",
            ...r
          })
        }),
        ib = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          status: t,
          ...o
        }, n) => {
          const a = (0, k.mergeProps)({
            "data-testid": e,
            className: rb({
              status: t
            }),
            style: (0, N.D)({
              [eb]: r?.online,
              [Jm]: r?.offline,
              [Wm]: r?.away,
              [Um]: r?.busy
            })
          }, o);
          return (0, O.jsx)("span", {
            ref: n,
            ...a
          })
        }),
        db = (0, S.forwardRef)(({
          testId: e,
          variant: r = "default",
          ...t
        }, o) => {
          const {
            size: n
          } = ob(), a = (0, k.mergeProps)({
            "data-testid": e,
            className: Qm({
              variant: r,
              size: n
            })
          }, t);
          return (0, O.jsx)("span", {
            ref: o,
            ...a
          })
        });
      var lb = "Popover",
        [cb, ub] = (0, St.A)(lb, [Jt]),
        fb = Jt(),
        [pb, yb] = cb(lb),
        vb = e => {
          const {
            __scopePopover: r,
            children: t,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !1
          } = e, i = fb(r), d = S.useRef(null), [l, c] = S.useState(!1), [u, f] = (0, jo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: lb
          });
          return (0, O.jsx)(mo, {
            ...i,
            children: (0, O.jsx)(pb, {
              scope: r,
              contentId: (0, Kt.B)(),
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
      vb.displayName = lb;
      var mb = "PopoverAnchor",
        bb = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = yb(mb, t), a = fb(t), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = n;
          return S.useEffect(() => (s(), () => i()), [s, i]), (0, O.jsx)(bo, {
            ...a,
            ...o,
            ref: r
          })
        });
      bb.displayName = mb;
      var gb = "PopoverTrigger",
        hb = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = yb(gb, t), a = fb(t), s = (0, Rt.s)(r, n.triggerRef), i = (0, O.jsx)(kt.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.contentId,
            "data-state": Ib(n.open),
            ...o,
            ref: s,
            onClick: (0, Ot.mK)(e.onClick, n.onOpenToggle)
          });
          return n.hasCustomAnchor ? i : (0, O.jsx)(bo, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      hb.displayName = gb;
      var wb = "PopoverPortal",
        [xb, _b] = cb(wb, {
          forceMount: void 0
        }),
        jb = e => {
          const {
            __scopePopover: r,
            forceMount: t,
            children: o,
            container: n
          } = e, a = yb(wb, r);
          return (0, O.jsx)(xb, {
            scope: r,
            forceMount: t,
            children: (0, O.jsx)(xo, {
              present: t || a.open,
              children: (0, O.jsx)(wo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        };
      jb.displayName = wb;
      var Cb = "PopoverContent",
        Pb = S.forwardRef((e, r) => {
          const t = _b(Cb, e.__scopePopover),
            {
              forceMount: o = t.forceMount,
              ...n
            } = e,
            a = yb(Cb, e.__scopePopover);
          return (0, O.jsx)(xo, {
            present: o || a.open,
            children: a.modal ? (0, O.jsx)(Rb, {
              ...n,
              ref: r
            }) : (0, O.jsx)(Sb, {
              ...n,
              ref: r
            })
          })
        });
      Pb.displayName = Cb;
      var Ob = (0, Dt.TL)("PopoverContent.RemoveScroll"),
        Rb = S.forwardRef((e, r) => {
          const t = yb(Cb, e.__scopePopover),
            o = S.useRef(null),
            n = (0, Rt.s)(r, o),
            a = S.useRef(!1);
          return S.useEffect(() => {
            const e = o.current;
            if (e) return (0, da.Eq)(e)
          }, []), (0, O.jsx)(ia.A, {
            as: Ob,
            allowPinchZoom: !0,
            children: (0, O.jsx)(Nb, {
              ...e,
              ref: n,
              trapFocus: t.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Ot.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || t.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Ot.mK)(e.onPointerDownOutside, e => {
                const r = e.detail.originalEvent,
                  t = 0 === r.button && !0 === r.ctrlKey,
                  o = 2 === r.button || t;
                a.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Ot.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        Sb = S.forwardRef((e, r) => {
          const t = yb(Cb, e.__scopePopover),
            o = S.useRef(!1),
            n = S.useRef(!1);
          return (0, O.jsx)(Nb, {
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
        Nb = S.forwardRef((e, r) => {
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
          } = e, f = yb(Cb, t), p = fb(t);
          return (0, sa.Oh)(), (0, O.jsx)(Jn, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, O.jsx)(At, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, O.jsx)(go, {
                "data-state": Ib(f.open),
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
        Db = "PopoverClose",
        kb = S.forwardRef((e, r) => {
          const {
            __scopePopover: t,
            ...o
          } = e, n = yb(Db, t);
          return (0, O.jsx)(kt.button, {
            type: "button",
            ...o,
            ref: r,
            onClick: (0, Ot.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        });
      kb.displayName = Db;
      var zb = S.forwardRef((e, r) => {
        const {
          __scopePopover: t,
          ...o
        } = e, n = fb(t);
        return (0, O.jsx)(ho, {
          ...n,
          ...o,
          ref: r
        })
      });

      function Ib(e) {
        return e ? "open" : "closed"
      }
      zb.displayName = "PopoverArrow";
      var Tb = vb,
        Eb = bb,
        Lb = hb,
        Vb = jb,
        Ab = Pb,
        Mb = kb,
        qb = zb;

      function Fb(e) {
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

      function Bb(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function Xb(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? Bb(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = Fb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Bb(Object(t)).forEach(function(r) {
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
      var Zb = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        Hb = (e => {
          var r = r => {
            var t = e.defaultClassName,
              o = Xb(Xb({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Zb(l, o, e.defaultVariants) && (t += " " + c);
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
      const Gb = (0, S.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Wb = ({
          open: e,
          defaultOpen: r,
          onOpenChange: t,
          ...o
        }) => {
          const [n = !1, a] = (0, ue.ic)({
            prop: e,
            defaultProp: r ?? !1,
            onChange: t
          }), s = (0, k.mergeProps)({
            open: n,
            onOpenChange: a
          }, o);
          return (0, O.jsx)(Gb.Provider, {
            value: {
              open: n,
              setOpen: a
            },
            children: (0, O.jsx)(Tb, {
              ...s
            })
          })
        },
        Ub = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, r);
          return (0, O.jsx)(Lb, {
            ref: t,
            ...o
          })
        }),
        $b = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Yb = (0, S.forwardRef)(({
          children: e,
          size: r = "MD",
          testId: t,
          ...o
        }, n) => {
          const {
            open: a
          } = (0, S.useContext)(Gb), s = (0, S.useRef)(null), i = (0, ue.UP)(s, n), {
            buttonProps: d
          } = (0, ue.sL)(o, s), l = (0, k.mergeProps)({
            "data-testid": t,
            className: Hb({
              size: r
            })
          }, d), c = a ? Ve.ChevronUp : Ve.ChevronDown;
          return (0, O.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, O.jsx)(c, {
              label: "",
              size: $b[r]
            })]
          })
        }),
        Qb = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e
          }, r);
          return (0, O.jsx)(Eb, {
            ref: t,
            ...o
          })
        }),
        Jb = (0, S.forwardRef)(({
          sideOffset: e = 6,
          testId: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
            sideOffset: e,
            "data-testid": r,
            className: "foundry_lroh6l6"
          }, t);
          return (0, O.jsx)(Ab, {
            ref: o,
            ...n
          })
        }),
        eg = (0, S.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const o = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, r);
          return (0, O.jsx)(qb, {
            ref: t,
            ...o
          })
        }),
        rg = e => (0, O.jsx)(Vb, {
          ...e
        }),
        tg = e => (0, O.jsx)(Mb, {
          ...e
        });

      function og(e) {
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

      function ng(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function ag(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ng(Object(t), !0).forEach(function(r) {
            var o, n, a;
            o = e, n = r, a = t[r], (n = og(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ng(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function sg(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var ig = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        dg = e => {
          var r = r => {
            var t = e.defaultClassName,
              o = ag(ag({}, e.defaultVariants), r);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[n][i];
                d && (t += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ig(l, o, e.defaultVariants) && (t += " " + c);
            return t
          };
          return r.variants = () => Object.keys(e.variantClassNames), r.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sg(e.variantClassNames, e => sg(e, e => e.split(" ")[0]))
            }
          }, r
        },
        lg = "var(--foundry_rmorls2)",
        cg = dg({
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
        ug = "var(--foundry_rmorls0)",
        fg = dg({
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
        pg = "var(--foundry_rmorls3)",
        yg = "var(--foundry_rmorls1)",
        vg = dg({
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
        mg = "Progress",
        [bg, gg] = (0, av.A)(mg),
        [hg, wg] = bg(mg),
        xg = S.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            value: o = null,
            max: n,
            getValueLabel: a = Cg,
            ...s
          } = e;
          !n && 0 !== n || Rg(n) || console.error(`Invalid prop \`max\` of value \`${n}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Rg(n) ? n : 100;
          null === o || Sg(o, i) || console.error(`Invalid prop \`value\` of value \`${`${o}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = Sg(o, i) ? o : null,
            l = Og(d) ? a(d, i) : void 0;
          return (0, O.jsx)(hg, {
            scope: t,
            value: d,
            max: i,
            children: (0, O.jsx)(sv.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Og(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Pg(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: r
            })
          })
        });
      xg.displayName = mg;
      var _g = "ProgressIndicator",
        jg = S.forwardRef((e, r) => {
          const {
            __scopeProgress: t,
            ...o
          } = e, n = wg(_g, t);
          return (0, O.jsx)(sv.sG.div, {
            "data-state": Pg(n.value, n.max),
            "data-value": n.value ?? void 0,
            "data-max": n.max,
            ...o,
            ref: r
          })
        });

      function Cg(e, r) {
        return `${Math.round(e/r*100)}%`
      }

      function Pg(e, r) {
        return null == e ? "indeterminate" : e === r ? "complete" : "loading"
      }

      function Og(e) {
        return "number" == typeof e
      }

      function Rg(e) {
        return Og(e) && !isNaN(e) && e > 0
      }

      function Sg(e, r) {
        return Og(e) && !isNaN(e) && e <= r && e >= 0
      }
      jg.displayName = _g;
      var Ng = xg,
        Dg = jg;
      const kg = (0, S.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        zg = (0, S.forwardRef)(({
          size: e = "MD",
          max: r,
          value: t,
          ...o
        }, n) => {
          const a = Math.round(t / r * 100),
            s = "number" != typeof t || "number" != typeof r;
          return (0, O.jsx)(kg.Provider, {
            value: {
              value: t,
              max: r,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, O.jsx)(Ig, {
              ...o,
              ref: n
            })
          })
        }),
        Ig = (0, S.forwardRef)(({
          testId: e,
          asChild: r,
          ...t
        }, o) => {
          const n = (0, k.mergeProps)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, t),
            a = r ? fe.DX : "div";
          return (0, O.jsx)(a, {
            ...n,
            ref: o
          })
        }),
        Tg = (0, S.forwardRef)(({
          testId: e,
          colorOverride: r,
          ...t
        }, o) => {
          const {
            value: n,
            max: a,
            size: s
          } = (0, S.useContext)(kg), i = (0, k.mergeProps)({
            "data-testid": e,
            className: fg({
              size: s
            }),
            value: n,
            max: a,
            style: (0, N.D)({
              [pg]: r
            }),
            "data-track": !0
          }, t);
          return (0, O.jsx)(Ng, {
            ref: o,
            ...i
          })
        }),
        Eg = (0, S.forwardRef)(({
          testId: e,
          transitionDuration: r = 500,
          colorOverride: t,
          ...o
        }, n) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, S.useContext)(kg), i = s ? "-100%" : `-${100-a}%`, d = (0, k.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, N.D)({
              [ug]: i,
              [yg]: `${r}ms`,
              [lg]: t
            })
          }, o);
          return (0, O.jsx)(Dg, {
            ref: n,
            ...d
          })
        }),
        Lg = (0, S.forwardRef)(({
          asChild: e,
          testId: r,
          ...t
        }, o) => {
          const {
            size: n
          } = (0, S.useContext)(kg), a = (0, k.mergeProps)({
            "data-testid": r,
            className: cg({
              size: n
            }),
            "aria-hidden": !0
          }, t), s = e ? fe.DX : "span";
          return (0, O.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        Vg = (0, S.forwardRef)(({
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
          } = (0, S.useContext)(kg), l = (0, k.mergeProps)({
            "data-testid": e,
            className: cg({
              size: s
            }),
            "aria-hidden": !0
          }, t);
          return d ? (0, O.jsx)("span", {
            ref: o,
            ...l
          }) : "percentage" === r ? (0, O.jsxs)("span", {
            ref: o,
            ...l,
            children: [i, " ", (0, O.jsx)("span", {
              className: vg({
                size: s
              }),
              children: "%"
            })]
          }) : (0, O.jsxs)("span", {
            ref: o,
            ...l,
            children: [n, "/", a]
          })
        })
    },
    91497(e, r, t) {
      t.d(r, {
        b: () => i
      });
      var o = t(93082),
        n = t(34376),
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