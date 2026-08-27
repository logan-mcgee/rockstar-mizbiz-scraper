try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0837a943-e6f0-475d-a6a5-21b4eca7f14c", e._sentryDebugIdIdentifier = "sentry-dbid-0837a943-e6f0-475d-a6a5-21b4eca7f14c")
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
  [5901], {
    35901(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => P,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => w,
        Badge: () => m,
        Body: () => Rt,
        Breadcrumbs: () => b,
        Button: () => Ge,
        Checkbox: () => l,
        ChipGroup: () => _,
        Code: () => Nt,
        Dialog: () => C,
        Display: () => kt,
        Divider: () => dt,
        Dropdown: () => a,
        Heading: () => zt,
        IconButton: () => rt,
        Label: () => Tt,
        Lightbox: () => n,
        Loader: () => Ct,
        Pagination: () => x,
        PlatformButton: () => R,
        Popover: () => j,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => Ie,
        Switch: () => s,
        Tag: () => y,
        Text: () => Mt,
        TextArea: () => d,
        TextField: () => f,
        TextSemantics: () => Vt,
        Toast: () => h,
        Tooltip: () => o
      });
      var o = {};
      r.r(o), r.d(o, {
        Arrow: () => Rn,
        Content: () => Sn,
        Portal: () => Dn,
        Root: () => On,
        Trigger: () => Pn,
        useTooltipContext: () => jn
      });
      var n = {};
      r.r(n), r.d(n, {
        Caption: () => Ms,
        Close: () => Bs,
        Content: () => zs,
        Controls: () => As,
        CssVars: () => Gs,
        Download: () => Zs,
        Image: () => Vs,
        Keyboard: () => Hs,
        LightboxContext: () => js,
        OpenIcon: () => Ns,
        Overlay: () => Is,
        Portal: () => ks,
        Reset: () => Xs,
        Root: () => Os,
        RootImplContext: () => Ps,
        Thumbnail: () => Ds,
        Trigger: () => Rs,
        Zoom: () => Fs,
        ZoomPan: () => Ls
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => ld,
        Description: () => yd,
        Hint: () => hd,
        Label: () => vd,
        Option: () => bd,
        OptionIcon: () => gd,
        OptionText: () => md,
        Portal: () => Cd,
        Root: () => id,
        ScrollArea: () => cd,
        StatusIcon: () => xd,
        StatusRoot: () => wd,
        StatusText: () => _d,
        Trigger: () => ud,
        TriggerIcon: () => pd,
        TriggerText: () => fd,
        Viewport: () => dd,
        useDropdownContext: () => sd
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Fd,
        Input: () => qd,
        Label: () => Hd,
        Root: () => Ad,
        useSwitchContext: () => Md
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Zd,
        CheckMD: () => Xd,
        CheckXL: () => Gd,
        DashLG: () => Wd,
        DashMD: () => Kd,
        DashXL: () => Ud
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => pc,
        ErrorText: () => vc,
        Group: () => bc,
        GroupDescription: () => gc,
        GroupErrorText: () => wc,
        GroupItems: () => Cc,
        GroupLabel: () => mc,
        Input: () => uc,
        Label: () => fc,
        Root: () => cc,
        useGroupContext: () => hc
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Vc,
        Hint: () => Mc,
        Input: () => Ec,
        Label: () => Tc,
        Root: () => Lc,
        RootContext: () => Ic,
        StatusIcon: () => qc,
        StatusRoot: () => Ac,
        StatusText: () => Hc,
        useTextAreaContext: () => zc
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => pu,
        DotMD: () => fu,
        DotXL: () => vu
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => ou,
        Input: () => hu,
        Label: () => ru,
        Option: () => yu,
        OptionDescription: () => mu,
        OptionLabel: () => bu,
        Options: () => tu,
        Root: () => eu,
        StatusIcon: () => au,
        StatusRoot: () => nu,
        StatusText: () => su,
        useRadioGroupContext: () => Jc
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Hu,
        Control: () => Mu,
        Description: () => Bu,
        Hint: () => Vu,
        Icon: () => qu,
        Input: () => Au,
        Label: () => Eu,
        PasswordButton: () => Fu,
        Root: () => Tu,
        StatusIcon: () => Zu,
        StatusRoot: () => Xu,
        StatusText: () => Gu
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => hf,
        CloseButton: () => jf,
        Description: () => Cf,
        ErrorText: () => _f,
        Footer: () => xf,
        Header: () => yf,
        Icon: () => mf,
        Link: () => wf,
        Root: () => vf,
        RootContext: () => ff,
        Title: () => gf,
        iconStatusMap: () => bf,
        useAlertContext: () => pf
      });
      var v = {};
      r.r(v), r.d(v, {
        Alert: () => Ff,
        CloseButton: () => Zf,
        Description: () => Hf,
        Icon: () => qf,
        Link: () => Xf,
        PaginationCounter: () => Uf,
        PaginationNav: () => Gf,
        PaginationNextButton: () => Kf,
        PaginationPrevButton: () => Wf,
        PaginationViewport: () => Bf,
        Root: () => Mf,
        RootContext: () => Ef,
        iconStatusMap: () => Af,
        useAlertBannerContext: () => Vf
      });
      var y = {};
      r.r(y), r.d(y, {
        CloseButton: () => cp,
        Icon: () => dp,
        Label: () => lp,
        Root: () => ip,
        RootContext: () => ap,
        useTagContext: () => sp
      });
      var h = {};
      r.r(h), r.d(h, {
        Action: () => vv,
        CloseButton: () => yv,
        Description: () => uv,
        Icon: () => pv,
        Provider: () => sv,
        Root: () => cv,
        RootContext: () => lv,
        Viewport: () => iv,
        iconAppearanceMap: () => fv,
        useToastContext: () => dv
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => Nv,
        Item: () => Dv,
        OverflowMenu: () => kv,
        OverflowMenuItem: () => Iv,
        Root: () => Rv,
        RootContext: () => Sv,
        useBreadcrumbsContext: () => Pv
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => Bv,
        Label: () => Fv,
        Root: () => Hv,
        useBadgeContext: () => qv
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => ry,
        Root: () => Qv,
        Scrollbar: () => ey,
        Thumb: () => ty,
        Viewport: () => Jv
      });
      var C = {};
      r.r(C), r.d(C, {
        ActionArea: () => Py,
        CloseButton: () => Oy,
        Content: () => by,
        Description: () => gy,
        Footer: () => Sy,
        Header: () => xy,
        HeaderButton: () => jy,
        HeaderTitle: () => _y,
        Layout: () => wy,
        Overlay: () => hy,
        Portal: () => yy,
        Root: () => fy,
        ScrollArea: () => Cy,
        Title: () => my,
        Trigger: () => vy
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => sh,
        Root: () => ah,
        StatusIndicator: () => ih,
        useAvatarContext: () => nh
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => Ch,
        Dropdown: () => Oh,
        DropdownLabel: () => jh,
        Ellipsis: () => gh,
        Item: () => hh,
        Label: () => Sh,
        Next: () => mh,
        Option: () => Ph,
        Pages: () => yh,
        Prev: () => bh,
        ResultsPerPage: () => _h,
        Root: () => vh
      });
      var _ = {};
      r.r(_), r.d(_, {
        Icon: () => Tb,
        Item: () => Lb,
        Label: () => Vb,
        Root: () => zb,
        StatusIndicator: () => Eb,
        useChipGroupContext: () => Ib
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => Pm,
        Arrow: () => Rm,
        Close: () => Nm,
        Content: () => Sm,
        Portal: () => Dm,
        Root: () => xm,
        RootContext: () => wm,
        Trigger: () => _m,
        TriggerButton: () => Om
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => fg,
        Label: () => pg,
        Root: () => dg,
        Track: () => ug,
        UnitLabel: () => vg
      });
      var P = {};
      r.r(P), r.d(P, {
        Content: () => SC,
        Header: () => _C,
        Icon: () => OC,
        Item: () => xC,
        Root: () => CC,
        Trigger: () => jC,
        TriggerIcon: () => PC
      });
      var S = {};
      r.r(S), r.d(S, {
        PC: () => kC,
        PS4: () => DC,
        PS5: () => NC,
        XboxOne: () => IC,
        XboxSeriesXS: () => zC
      });
      var R = {};
      r.r(R), r.d(R, {
        PlatformButton: () => qC
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
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? V(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = E(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function A(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var q = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        H = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = M(M({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) q(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return A(e.variantClassNames, e => A(e, e => e.split(" ")[0]))
            }
          }, t
        },
        F = "var(--foundry_1qqcnua0)",
        B = "var(--foundry_1qqcnua1)",
        X = "var(--foundry_1qqcnua2)",
        Z = "var(--foundry_1qqcnua3)",
        G = "var(--foundry_1qqcnua4)",
        K = "var(--foundry_1qqcnua5)",
        W = "var(--foundry_1qqcnua6)",
        U = "var(--foundry_1qqcnua7)",
        Y = "var(--foundry_1qqcnua8)",
        $ = "var(--foundry_1qqcnua9)",
        Q = "var(--foundry_1qqcnuaa)",
        J = "var(--foundry_1qqcnuab)",
        ee = "var(--foundry_1qqcnuac)",
        te = "var(--foundry_1qqcnuad)",
        re = "var(--foundry_1qqcnuae)",
        oe = "var(--foundry_1qqcnuaf)",
        ne = "var(--foundry_1qqcnuag)",
        ae = "var(--foundry_1qqcnuah)",
        se = "var(--foundry_1qqcnuai)",
        ie = "var(--foundry_1qqcnuaj)",
        le = "var(--foundry_1qqcnuak)",
        de = "var(--foundry_1qqcnual)",
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
            text: T(X),
            outline: T(Z)
          },
          hover: {
            background: T(G),
            border: T(K),
            text: T(W),
            outline: T(U)
          },
          focus: {
            background: T(Y),
            border: T($),
            text: T(Q),
            outline: T(J)
          },
          pressed: {
            background: T(ee),
            border: T(te),
            text: T(re),
            outline: T(oe)
          },
          disabled: {
            background: T(ne),
            border: T(ae),
            text: T(se),
            outline: T(ie)
          },
          loading: {
            background: T(le),
            border: T(de),
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
            hoverLuminance: o,
            pressedLuminance: n
          },
          overrides: {
            backgroundColor: a,
            hoverColor: s,
            pressedColor: i,
            textColor: l
          },
          enabled: d = !1
        }, c = []) => {
          (0, k.useEffect)(() => {
            if (!e.current || !a || !d) return;
            const c = `${a}:${t}:${r}`,
              {
                text: u,
                hover: f,
                pressed: p
              } = (0, L.IO)(c, () => {
                const e = (0, N.J1)(a);
                return {
                  text: l || (e > t ? z.color.black.static[100] : z.color.white.static[100]),
                  hover: s || (e >= r ? (0, N.e$)(a, o) : (0, N.a)(a, o)),
                  pressed: i || (e >= r ? (0, N.e$)(a, n) : (0, N.a)(a, n))
                }
              });
            return e.current.style.setProperty(fe.enabled.background, a), e.current.style.setProperty(fe.enabled.border, a), e.current.style.setProperty(fe.enabled.text, u), e.current.style.setProperty(fe.hover.background, f), e.current.style.setProperty(fe.hover.border, f), e.current.style.setProperty(fe.hover.text, u), e.current.style.setProperty(fe.focus.background, f), e.current.style.setProperty(fe.focus.border, f), e.current.style.setProperty(fe.focus.text, u), e.current.style.setProperty(fe.pressed.background, p), e.current.style.setProperty(fe.pressed.border, p), e.current.style.setProperty(fe.pressed.text, u), e.current.style.setProperty(fe.loading.background, f), e.current.style.setProperty(fe.loading.border, f), e.current.style.setProperty(fe.loading.text, u), () => {
              e.current?.style.removeProperty(fe.enabled.background), e.current?.style.removeProperty(fe.enabled.border), e.current?.style.removeProperty(fe.enabled.text), e.current?.style.removeProperty(fe.hover.background), e.current?.style.removeProperty(fe.hover.border), e.current?.style.removeProperty(fe.hover.text), e.current?.style.removeProperty(fe.focus.background), e.current?.style.removeProperty(fe.focus.border), e.current?.style.removeProperty(fe.focus.text), e.current?.style.removeProperty(fe.pressed.background), e.current?.style.removeProperty(fe.pressed.border), e.current?.style.removeProperty(fe.pressed.text), e.current?.style.removeProperty(fe.loading.background), e.current?.style.removeProperty(fe.loading.border), e.current?.style.removeProperty(fe.loading.text)
            }
          }, [e.current, t, r, o, n, a, s, i, l, d, ...c])
        };
      var ve = r(22808),
        ye = r(21297);
      const he = (0, k.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        be = () => (0, k.useContext)(he),
        me = () => {
          const {
            platformScale: e
          } = be();
          return e
        };
      var ge = r(66508);
      const Ce = e => "dark" === e ? ge.xW.dark : ge.xW.light;
      const we = () => L.X3 ? null : document.body;
      (0, k.forwardRef)(({
        children: e,
        className: t,
        container: r = we(),
        asChild: o,
        colorScheme: n,
        defaultColorScheme: a,
        defaultPlatformScale: s,
        platformScale: i,
        onPlatformScaleChange: l,
        locale: d = "en-US"
      }, c) => {
        const u = (0, k.useRef)(null),
          f = (0, ve.UP)(u, c),
          p = (0, k.useRef)(r),
          {
            ratio: v,
            scale: y
          } = function(e) {
            const [t, r] = (0, k.useState)(e.platformScale || e.defaultPlatformScale), o = (0, k.useCallback)(t => {
              r(t), e.onPlatformScaleChange?.(t)
            }, [e.onPlatformScaleChange]), n = (0, k.useRef)([]), a = () => {
              if (!L.X3) {
                for (const {
                    handler: e,
                    matchMedia: t
                  }
                  of n.current) t.removeEventListener("change", e);
                n.current = []
              }
            };
            return (0, k.useEffect)(() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!L.X3) {
                a();
                for (const e in ge.wj) {
                  const t = window.matchMedia(ge.wj[e]),
                    r = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", r), t.matches && o(e), n.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), a), [e.platformScale, o]), {
              scale: t,
              ratio: ge.nz[t]
            }
          }({
            onPlatformScaleChange: l,
            defaultPlatformScale: s,
            platformScale: i
          }),
          {
            appearanceClass: h,
            otherAppearanceClasses: b,
            providerColor: m
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark"
          }) {
            const r = (0, ve.Ub)("(prefers-color-scheme: light)"),
              o = (0, ve.Ub)("(prefers-color-scheme: dark)"),
              n = "system" !== e && e || r && "light" || o && "dark" || t,
              a = (0, k.useMemo)(() => Ce(n), [n]),
              s = (0, k.useMemo)(() => (e => {
                const t = Ce(e);
                return [ge.xW.light, ge.xW.dark].filter(e => e !== t)
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
          currentScale: t,
          appearanceClass: r,
          otherAppearanceClasses: o,
          locale: n,
          className: a
        }) => {
          const s = (0, ve.ZC)(a),
            i = (0, ve.ZC)(e.current);
          (0, k.useEffect)(() => {
            e.current?.classList.contains(ge.X6) || e.current?.classList.add(ge.X6), e.current?.classList.contains(ge.yU) || e.current?.classList.add(ge.yU), e.current?.classList.contains(ge.Np) || e.current?.classList.add(ge.Np), e.current?.classList.add(r), e.current?.classList.remove(...o), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
          }, [r, a]), (0, k.useEffect)(() => {
            e.current?.setAttribute("lang", n)
          }, [n]), (0, k.useEffect)(() => (t && e.current?.style.setProperty(ge.HZ, t.toString()), () => {
            e.current?.style.removeProperty(ge.HZ)
          }), [t]), (0, k.useEffect)(() => {
            i?.classList.remove(ge.X6), i?.classList.remove(ge.yU), i?.classList.remove(r), i?.style.removeProperty(ge.HZ), a && i?.classList.remove(a)
          }, [i])
        })({
          locale: d,
          className: t,
          appearanceClass: h,
          otherAppearanceClasses: b,
          currentScale: i ? v : -0,
          container: o ? u : p
        }), (0, D.jsx)(he.Provider, {
          value: {
            locale: d,
            defaultColorScheme: a,
            colorScheme: m,
            defaultPlatformScale: s,
            platformScale: y
          },
          children: o ? (0, D.jsx)(ye.DX, {
            ref: f,
            children: e
          }) : e
        })
      });
      var xe = r(94635);

      function _e(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function je(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? je(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = _e(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Pe(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Se, Re, De = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Ne = (Se = {
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
        }, Re = e => {
          var t = Se.defaultClassName,
            r = Oe(Oe({}, Se.defaultVariants), e);
          for (var o in r) {
            var n, a = null !== (n = r[o]) && void 0 !== n ? n : Se.defaultVariants[o];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = Se.variantClassNames[o][s];
              i && (t += " " + i)
            }
          }
          for (var [l, d] of Se.compoundVariants) De(l, r, Se.defaultVariants) && (t += " " + d);
          return t
        }, Re.variants = () => Object.keys(Se.variantClassNames), Re.classNames = {
          get base() {
            return Se.defaultClassName.split(" ")[0]
          },
          get variants() {
            return Pe(Se.variantClassNames, e => Pe(e, e => e.split(" ")[0]))
          }
        }, Re);
      const ke = "pageMD",
        Ie = (0, k.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = ke,
          testId: o,
          ...n
        }, a) => {
          const s = me(),
            i = "string" == typeof r ? r : r?.[s] ?? r.default ?? ke,
            l = (0, L.v6)({
              className: Ne({
                size: i
              }),
              "data-testid": o,
              "aria-label": e
            }, n);
          return (0, D.jsx)(xe.b, {
            label: e,
            children: (0, D.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
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
      var ze = r(81270),
        Le = r(77278),
        Te = {};

      function Ee(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ve(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ve(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Ee(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ve(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ae(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      r.r(Te), r.d(Te, {
        Activity: () => Le.Il,
        ArrowDown: () => Le.yd,
        ArrowLeft: () => Le.nk,
        ArrowRight: () => Le.Qp,
        ArrowRightLeft: () => Le.nF,
        ArrowUp: () => Le.Do,
        ArrowUpDown: () => Le.hD,
        Book: () => Le.E3,
        Bookmark: () => Le.Xh,
        BookmarkFilled: () => Le.dA,
        Bug: () => Le.zP,
        BugOff: () => Le.k_,
        Calendar: () => Le.Vv,
        CalendarOff: () => Le.is,
        Car: () => Le.TH,
        CarSide: () => Le.cY,
        ChartSpline: () => Le.m3,
        Check: () => Le.Jl,
        ChevronDown: () => Le.yQ,
        ChevronFirst: () => Le.mf,
        ChevronLast: () => Le.Ou,
        ChevronLeft: () => Le.JG,
        ChevronRight: () => Le.c_,
        ChevronUp: () => Le.rX,
        ChevronsDownUp: () => Le.WE,
        ChevronsLeftRight: () => Le.UQ,
        ChevronsUpDown: () => Le.Ml,
        Circle: () => Le.jl,
        CircleCheck: () => Le.rW,
        CircleCheckFilled: () => Le.Dw,
        CircleDollarSign: () => Le.OJ,
        CircleHelp: () => Le.YC,
        CircleMinus: () => Le.ZX,
        CircleMinusFilled: () => Le.r0,
        CirclePerson: () => Le.q_,
        CircleSlash: () => Le.o6,
        CircleX: () => Le.RT,
        Clipboard: () => Le.B0,
        Clock: () => Le.zD,
        CloudAlert: () => Le.K4,
        CloudDownload: () => Le.MQ,
        CloudUpload: () => Le.bK,
        CodeXml: () => Le.bv,
        Copy: () => Le.QR,
        Cpu: () => Le.fX,
        CreditCard: () => Le.y5,
        Database: () => Le.Wm,
        Discord: () => Le.bY,
        DollarSign: () => Le.G9,
        Download: () => Le.f5,
        EllipsisVertical: () => Le.Yb,
        Envelope: () => Le.Lh,
        EnvelopeOpen: () => Le.jd,
        EpicGames: () => Le.fk,
        ExternalLink: () => Le.Gr,
        Eye: () => Le.kU,
        EyeClosed: () => Le.Cz,
        EyeOff: () => Le.X_,
        Facebook: () => Le.f1,
        FastForward: () => Le.Ej,
        FileText: () => Le.iU,
        Files: () => Le.sv,
        Filter: () => Le.dJ,
        Flag: () => Le.lN,
        FlagOff: () => Le.Ih,
        Gear: () => Le.OB,
        Globe: () => Le.qz,
        Handshake: () => Le.g6,
        Headset: () => Le.BC,
        Heart: () => Le.B1,
        HeartPulse: () => Le.iY,
        House: () => Le.tT,
        Image: () => Le._V,
        Info: () => Le.R2,
        Instagram: () => Le.pd,
        LayoutGrid: () => Le.D6,
        Lightbulb: () => Le.g5,
        Link: () => Le.N_,
        List: () => Le.B8,
        ListFilter: () => Le.xt,
        ListMusic: () => Le.w7,
        LockKeyhole: () => Le.NT,
        LockPassword: () => Le.HI,
        LogOut: () => Le.nU,
        MapPin: () => Le.sD,
        Maximize: () => Le.hz,
        Maximize2: () => Le.h1,
        Menu: () => Le.W1,
        MessageSquareText: () => Le.AJ,
        Mic: () => Le.GO,
        MicFilled: () => Le.cX,
        Minimize: () => Le.Xj,
        Minimize2: () => Le.xq,
        Minus: () => Le.Hs,
        Monitor: () => Le.VA,
        Moon: () => Le.AX,
        NintendoSwitch: () => Le.Su,
        PaperPlane: () => Le.d8,
        Paperclip: () => Le.xv,
        PartialCircle: () => Le.IM,
        Pause: () => Le.vR,
        Pencil: () => Le.gH,
        PencilOff: () => Le.hE,
        Person: () => Le._A,
        PersonBlock: () => Le.hs,
        PersonMinus: () => Le._E,
        PersonPlus: () => Le.c1,
        Pin: () => Le.yU,
        PinFilled: () => Le.IF,
        Play: () => Le.jG,
        Playstation: () => Le.p6,
        Plus: () => Le.FW,
        Power: () => Le.aJ,
        Property: () => Le.mA,
        Reddit: () => Le.TZ,
        RefreshCcw: () => Le.PM,
        RefreshCw: () => Le.e9,
        RefreshCwOff: () => Le.X0,
        Replay: () => Le.eJ,
        Rewind: () => Le.Y8,
        Save: () => Le.eM,
        Search: () => Le.vj,
        Server: () => Le.gq,
        Share: () => Le.SY,
        ShieldAlert: () => Le.yZ,
        ShieldCheck: () => Le.ox,
        ShoppingBag: () => Le.Nw,
        SkipBack: () => Le.L9,
        SkipForward: () => Le.xP,
        Star: () => Le.FE,
        StarOff: () => Le.UM,
        Steam: () => Le.Rv,
        Stop: () => Le.VG,
        Store: () => Le.il,
        Sun: () => Le.bd,
        ThumbsDown: () => Le.z9,
        ThumbsUp: () => Le.tw,
        Tiktok: () => Le.Tc,
        Trash: () => Le.lM,
        TriangleAlert: () => Le.lW,
        Trophy: () => Le.Xs,
        Truck: () => Le.No,
        Twitch: () => Le.YA,
        Twitter: () => Le.KK,
        TwoPeople: () => Le.LM,
        Undo: () => Le.Vn,
        Unlink: () => Le.c2,
        Upload: () => Le._O,
        UserCouple: () => Le.Cn,
        UserGroup: () => Le.zr,
        Volume: () => Le.fS,
        Volume1: () => Le.c6,
        Volume2: () => Le.jI,
        VolumeX: () => Le.XL,
        Wallet: () => Le.uW,
        Weapon: () => Le.Re,
        Wifi: () => Le.MJ,
        WifiOff: () => Le.RQ,
        Wrench: () => Le.pi,
        X: () => Le.X,
        Xbox: () => Le.ms,
        Youtube: () => Le.k,
        ZoomIn: () => Le.$Z,
        ZoomOut: () => Le.en
      });
      var qe = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        He = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Me(Me({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) qe(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ae(e.variantClassNames, e => Ae(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Fe = He({
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
      He({
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
      var Be = He({
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
        Xe = He({
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
        Ze = He({
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
      const Ge = (0, k.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: o,
        iconLeftLabel: n,
        iconLeftElement: a,
        iconRight: s,
        iconRightLabel: i,
        iconRightElement: l,
        appearance: d,
        size: c = "MD",
        fullWidth: u = !1,
        isLoading: f = !1,
        spinnerLabel: p,
        preventFocusOnPress: v = !1,
        override_darkenLuminance: y = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: b = .08,
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
            textLuminance: h,
            darkenLuminance: y,
            hoverLuminance: b,
            pressedLuminance: m
          },
          overrides: {
            backgroundColor: g,
            hoverColor: C,
            pressedColor: w,
            textColor: x
          },
          enabled: "accent" === d
        }, [t]);
        const I = (0, L.v6)({
            className: Fe({
              appearance: d,
              size: R,
              fullWidth: u,
              iconLeft: !!o,
              iconRight: !!s
            }),
            "data-testid": e
          }, N),
          z = a || (o && Te[o] ? Te[o] : null),
          T = l || (s && Te[s] ? Te[s] : null),
          E = t ? ye.DX : "button",
          V = u && (T || T && z);
        return (0, D.jsxs)(E, {
          ref: P,
          ...I,
          children: [V && (0, D.jsx)("div", {
            className: "foundry_17pcofy15"
          }), z && (0, D.jsx)(z, {
            label: n || "",
            size: R,
            className: (0, ze.clsx)(Be({
              size: R
            }), "foundry_17pcofy11")
          }), (0, D.jsx)(ye.xV, {
            children: r
          }), T && (0, D.jsx)(T, {
            label: i || "",
            size: R,
            className: (0, ze.clsx)(Be({
              size: R
            }), Xe({
              fullWidth: u
            }))
          }), f && (0, D.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, D.jsx)(Ie, {
              label: p || "",
              size: "inline" + ("XL" === R ? "LG" : "MD"),
              hideTrack: !0,
              className: Ze({
                size: R
              })
            })
          })]
        })
      });

      function Ke(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function We(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? We(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Ke(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : We(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ye(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var $e = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Qe = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Ue(Ue({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) $e(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ye(e.variantClassNames, e => Ye(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Je = Qe({
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
        et = Qe({
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
        tt = Qe({
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
      const rt = (0, k.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        iconElement: o,
        label: n,
        appearance: a,
        fullWidth: s = !1,
        size: i = "LG",
        children: l,
        isLoading: d = !1,
        spinnerLabel: c,
        preventFocusOnPress: u = !1,
        override_darkenLuminance: f = .035,
        override_textLuminance: p = .179,
        override_hoverLuminance: v = .08,
        override_pressedLuminance: y = .15,
        override_backgroundColor: h,
        override_hoverColor: b,
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
            isLoading: d,
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
            backgroundColor: h,
            hoverColor: b,
            pressedColor: m,
            textColor: g
          },
          enabled: "accent" === a
        }, [t]);
        const S = (0, L.v6)({
            className: et({
              appearance: a,
              size: O,
              fullWidth: s
            }),
            "data-testid": e
          }, P),
          R = o || (r ? Te[r] : null),
          N = t ? ye.DX : "button";
        return (0, D.jsxs)(N, {
          ref: _,
          ...S,
          children: [R && (0, D.jsx)(R, {
            label: n || "",
            size: O,
            className: Je({
              size: O
            })
          }), (0, D.jsx)(ye.xV, {
            children: l
          }), d && (0, D.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, D.jsx)(Ie, {
              label: c || "",
              size: O && "SM" !== O ? `inline${O}` : "inlineMD",
              hideTrack: !0,
              className: tt({
                size: O
              })
            })
          })]
        })
      });

      function ot(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function nt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nt(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = ot(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function st(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var it = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        lt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = at(at({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) it(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return st(e.variantClassNames, e => st(e, e => e.split(" ")[0]))
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
      const dt = (0, k.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: o = !1,
        asChild: n,
        testId: a,
        ...s
      }, i) => {
        const l = "horizontal" !== t || o ? "div" : "hr",
          d = o || "hr" === l ? void 0 : "separator",
          c = n ? ye.DX : l;
        return (0, D.jsx)(c, {
          ref: i,
          className: (0, ze.clsx)(lt({
            thickness: r,
            orientation: t
          }), e),
          role: d,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });

      function ct(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ut(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ut(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = ct(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ut(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function pt(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var vt = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        yt = "var(--foundry_9dxgbc2)",
        ht = "var(--foundry_9dxgbc3)",
        bt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = ft(ft({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) vt(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return pt(e.variantClassNames, e => pt(e, e => e.split(" ")[0]))
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
        mt = "var(--foundry_9dxgbc0)",
        gt = "var(--foundry_9dxgbc1)";
      const Ct = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: o,
        label: n,
        size: a = "MD",
        ...s
      }, i) => {
        const l = me(),
          d = "string" == typeof a ? a : a?.[l] ?? a.default ?? "MD",
          c = (0, L.v6)({
            className: bt({
              size: d
            }),
            "data-testid": t,
            style: (0, I.D)({
              [mt]: o?.pulseColorBackground,
              [gt]: o?.pulseColorForeground,
              [yt]: o?.gradientColorBackground,
              [ht]: o?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": n
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

      function wt(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function xt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function _t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xt(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = wt(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jt(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Ot = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Pt = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = _t(_t({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ot(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jt(e.variantClassNames, e => jt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        St = Pt({
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
      const Rt = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? ye.DX : "p",
          i = (0, L.v6)({
            className: St({
              size: o,
              appearance: r
            })
          }, n);
        return (0, D.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var Dt = Pt({
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
      const Nt = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...o
        }, n) => {
          const a = e ? ye.DX : "p",
            s = (0, L.v6)({
              className: Dt({
                appearance: r
              })
            }, o);
          return (0, D.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        kt = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = e ? ye.DX : "h1",
            a = (0, L.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, D.jsx)(n, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var It = Pt({
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
      const zt = (0, k.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...o
      }, n) => {
        const a = e ? ye.DX : `h${7===t?6:t}`,
          s = (0, L.v6)(o, {
            className: It({
              level: t
            })
          });
        return (0, D.jsx)(a, {
          ref: n,
          "data-testid": r,
          ...s
        })
      });
      var Lt = Pt({
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
      const Tt = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: o = "MD",
        ...n
      }, a) => {
        const s = e ? ye.DX : "p",
          i = (0, L.v6)({
            className: Lt({
              size: o,
              appearance: r
            })
          }, n);
        return (0, D.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var Et = Pt({
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
      const Vt = {
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
        Mt = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...o
        }, n) => {
          const a = e ? ye.DX : Vt[r] || "span",
            s = (0, L.v6)(o, {
              className: Et({
                semantic: r
              })
            });
          return (0, D.jsx)(a, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var At = r(93529),
        qt = r(99206),
        Ht = r(34811);
      const Ft = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Bt = ([e, t]) => ({
        x: e,
        y: t
      }), Xt = (e, t) => (e.x = t.x, e.y = t.y, e), Zt = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Gt = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Kt = (e, t, r) => Math.min(Math.max(e, t), r);
      var Wt = r(90004);

      function Ut(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Yt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function $t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yt(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Ut(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qt(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Jt = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        er = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = $t($t({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Jt(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qt(e.variantClassNames, e => Qt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tr = er({
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
        rr = er({
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
      At.os.registerPlugin(qt.L);
      const or = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        nr = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        ar = T("var(--foundry_1a74xwb0)");
      var sr = r(53692);
      const ir = {
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
      class lr {
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
            o = this.slide.panAreaSize.safeArea["x" === e ? "w" : "h"] + 2 * this.slide.panAreaSize.safeArea[e];
          this.center[e] = this.currZoomLevel === this.slide.zoomLevels.initial ? Math.round((r - t - (r - o)) / 2) : Math.round((r - t) / 2), this.max[e] = t > r ? Math.round(r - t) : this.center[e], this.min[e] = t > r ? 0 : this.center[e]
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
          return r ? t : Kt(t, this.max[e], this.min[e])
        }
      }
      class dr {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Gt(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Gt(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Gt(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class cr {
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
      class ur {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Xt(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, o]
          } = e, n = t > 1, a = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && a && !n ? (this.setPanWithFriction("y", this.slide.pan.y + o, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && a ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + o))
        }
        end(e) {
          const t = e.touches > 1;
          this.slide && this.slide.currZoomLevel > this.slide.zoomLevels.max || t || (this.finishPanGestureForAxis("x", e), this.finishPanGestureForAxis("y", e))
        }
        handleTap({
          event: e,
          xy: [t, r]
        }) {
          const o = {
              x: t,
              y: r
            },
            n = e;
          if (n.type.includes("cancel")) return;
          const a = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              o = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + o * o)
          })(this.prevTap, o) < 25 && this.slide.tapHandler.doubleTap(o, n)) : (Xt(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(o, n), this.clearTapTimer()
          }, a))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, o]
          } = t, n = "x" === e ? r : o, a = this.slide.pan[e], s = a + n;
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
            const o = Math.round(t - this.slide.pan[e]);
            this.slide.pan[e] += o * (r || .35)
          } else this.slide.pan[e] = t
        }
        getVerticalDragRatio(e) {
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class fr {
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
          e.src = this.thumbnail.currentSrc ?? "", await Ft(e)
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
              o = this.slide.panAreaSize.h / t;
            this.width = o > r ? this.slide.panAreaSize.w : e * o, this.height = r > o ? this.slide.panAreaSize.h : t * r
          }
        }
      }
      class pr {
        slide;
        constructor({
          slide: e
        }) {
          this.slide = e
        }
        handleWheel({
          ctrlKey: e,
          event: t,
          delta: [r, o]
        }) {
          if (e) {
            let e = -o;
            1 === t.deltaMode ? e *= .05 : e *= t.deltaMode ? 1 : .002, e = 2 ** e;
            const r = this.slide.currZoomLevel * e;
            this.slide.zoomTo(r, {
              x: t.x,
              y: t.y
            })
          } else 1 === t.deltaMode && (r *= 18, o *= 18), this.slide.panTo(this.slide.pan.x - r, this.slide.pan.y - o)
        }
      }
      class vr extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, o) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = o
        }
      }
      class yr extends cr {
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
        doClickOrTapAction(e, t, r, o) {
          if (!this.dispatch(e, new vr(e, t, r, o)).defaultPrevented) switch (this.options[e]) {
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
      class hr {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Bt(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Xt(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            o = this.slide.zoomLevels.max;
          this.zoomPoint = Bt(e);
          let n = 1 / this.startZoomDistance * t * this.startZoomLevel;
          n > this.slide.zoomLevels.initial + this.slide.zoomLevels.initial / 15 && (this.wasOverFitZoomLevel = !0), n < r ? this.slide.pinchToClose && !this.wasOverFitZoomLevel && this.startZoomLevel <= this.slide.zoomLevels.initial ? this.slide.updateOverlayOpacity(1 - (r - n) / (r / 1.2)) : n = r - .15 * (r - n) : n > o && (n = o + .05 * (n - o)), this.slide.pan.x = this.calculatePanForZoomLevel("x", n), this.slide.pan.y = this.calculatePanForZoomLevel("y", n), this.slide.setZoomLevel(n, n >= this.slide.zoomLevels.initial)
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
          let r, o = !0;
          t < this.slide.zoomLevels.initial ? r = this.slide.zoomLevels.initial : t > this.slide.zoomLevels.max ? r = this.slide.zoomLevels.max : (o = !1, r = t), this.slide.getControlsOpacity();
          const n = this.slide.getControlsOpacity() < 1,
            a = Xt({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Xt({
            x: 0,
            y: 0
          }, a);
          var i, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Xt(this.startPan, a)), o && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = a, ((i = s).x !== l.x || i.y !== l.y || o || n) && (Xt(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class br {
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
      class mr extends cr {
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
          actionOptions: o,
          panAreaOptions: n,
          dragOptions: a
        }) {
          super(), this.width = e, this.height = t, this.opener = new fr({
            slide: this
          }), this.bounds = new lr({
            slide: this
          }), this.dragHandler = new ur({
            options: a,
            slide: this
          }), this.scrollWheel = new pr({
            slide: this
          }), this.zoomHandler = new hr({
            slide: this
          }), this.zoomLevels = new dr({
            options: r,
            slide: this
          }), this.tapHandler = new yr({
            options: o,
            slide: this
          }), this.panAreaSize = new br({
            options: n
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
          const o = this.currZoomLevel;
          e = Gt(e), r || (e = Kt(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, o), this.pan.y = this.calculateZoomToPanOffset("y", t, o), Zt(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Zt(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Xt(this.pan, this.bounds.center)
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
          const o = this.currZoomLevel / r;
          return this.bounds.correctPan(e, (this.pan[e] - t[e]) * o + t[e])
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
      var gr = r(56537);
      const Cr = (0, sr.YK)({
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
      var wr = "foundry_bc732x1";
      const xr = (0, k.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, o) => ((0, Wt.vC)(e, e => r?.(e), [r]), (0, D.jsx)(Rt, {
        size: "XS",
        className: (0, ze.clsx)("foundry_bc732x0", {
          [wr]: t
        }),
        asChild: !0,
        children: (0, D.jsx)("kbd", {
          ref: o,
          children: e
        })
      })));
      var _r, jr = r(71433),
        Or = r(44752),
        Pr = r(85049),
        Sr = r(72579),
        Rr = r(658),
        Dr = r(7198),
        Nr = Object.defineProperty,
        kr = (e, t) => Nr(e, "name", {
          value: t,
          configurable: !0
        }),
        Ir = "dismissableLayer.update",
        zr = k.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        Lr = k.forwardRef(kr(function(e, t) {
          const {
            disableOutsidePointerEvents: r = !1,
            deferPointerDownOutside: o = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: l,
            ...d
          } = e, c = k.useContext(zr), [u, f] = k.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = k.useState({}), y = (0, Pr.s)(t, f), h = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), m = b ? h.indexOf(b) : -1, g = u ? h.indexOf(u) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= m, x = k.useRef(!1), _ = Mr(e => {
            a?.(e), i?.(e), e.defaultPrevented || l?.()
          }, {
            ownerDocument: p,
            deferPointerDownOutside: o,
            isDeferredPointerDownOutsideRef: x,
            dismissableSurfaces: c.dismissableSurfaces,
            shouldHandlePointerDownOutside: k.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const t = [...c.branches].some(t => t.contains(e));
              return w && !t
            }, [c.branches, w])
          }), j = Ar(e => {
            if (o && x.current) return;
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (s?.(e), i?.(e), e.defaultPrevented || l?.())
          }, p), O = !!u && g === h.length - 1, P = (0, Dr.c)(e => {
            "Escape" === e.key && (n?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
          });
          return k.useEffect(() => {
            if (O) return p.addEventListener("keydown", P, {
              capture: !0
            }), () => p.removeEventListener("keydown", P, {
              capture: !0
            })
          }, [p, O, P]), k.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (_r = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), qr(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = _r))
            }
          }, [u, p, r, c]), k.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), qr())
          }, [u, c]), k.useEffect(() => {
            const e = kr(() => v({}), "handleUpdate");
            return document.addEventListener(Ir, e), () => document.removeEventListener(Ir, e)
          }, []), (0, D.jsx)(Rr.sG.div, {
            ...d,
            ref: y,
            style: {
              pointerEvents: C ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, Or.mK)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, Or.mK)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, Or.mK)(e.onPointerDownCapture, _.onPointerDownCapture)
          })
        }, "DismissableLayer")),
        Tr = k.forwardRef(kr(function(e, t) {
          const r = k.useContext(zr),
            o = k.useRef(null),
            n = (0, Pr.s)(t, o);
          return k.useEffect(() => {
            const e = o.current;
            if (e) return r.branches.add(e), () => {
              r.branches.delete(e)
            }
          }, [r.branches]), (0, D.jsx)(Rr.sG.div, {
            ...e,
            ref: n
          })
        }, "DismissableLayerBranch"));

      function Er() {
        const e = k.useContext(zr),
          [t, r] = k.useState(null);
        return k.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), r
      }
      kr(Er, "useDismissableLayerSurface");
      var Vr = kr(() => !0, "IS_TRUE");

      function Mr(e, t) {
        const {
          ownerDocument: r = globalThis?.document,
          deferPointerDownOutside: o = !1,
          isDeferredPointerDownOutsideRef: n,
          dismissableSurfaces: a,
          shouldHandlePointerDownOutside: s = Vr
        } = t, i = (0, Dr.c)(e), l = k.useRef(!1), d = k.useRef(!1), c = k.useRef(new Map), u = k.useRef(() => {});
        return k.useEffect(() => {
          function e() {
            d.current = !1, n.current = !1, c.current.clear()
          }

          function t() {
            return Array.from(c.current.values()).some(Boolean)
          }

          function f(e) {
            if (!d.current) return;
            const t = e.target;
            t instanceof Node && [...a].some(e => e.contains(t)) || c.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
              d.current && u.current()
            }, 0)
          }

          function p(e) {
            d.current && c.current.set(e.type, !1)
          }
          kr(e, "resetOutsideInteraction"), kr(t, "isOutsideInteractionIntercepted"), kr(f, "handleInteractionCapture"), kr(p, "handleInteractionBubble");
          const v = kr(a => {
              if (a.target && !l.current) {
                let f = function() {
                  r.removeEventListener("click", u.current);
                  const o = t();
                  e(), o || Hr("dismissableLayer.pointerDownOutside", i, p, {
                    discrete: !0
                  })
                };
                if (kr(f, "handleAndDispatchPointerDownOutsideEvent"), !s(a.target)) return r.removeEventListener("click", u.current), e(), void(l.current = !1);
                const p = {
                  originalEvent: a
                };
                d.current = !0, n.current = o && 0 === a.button, c.current.clear(), o && 0 === a.button ? (r.removeEventListener("click", u.current), u.current = f, r.addEventListener("click", u.current, {
                  once: !0
                })) : f()
              } else r.removeEventListener("click", u.current), e();
              l.current = !1
            }, "handlePointerDown"),
            y = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
          for (const e of y) r.addEventListener(e, f, !0), r.addEventListener(e, p);
          const h = window.setTimeout(() => {
            r.addEventListener("pointerdown", v)
          }, 0);
          return () => {
            window.clearTimeout(h), r.removeEventListener("pointerdown", v), r.removeEventListener("click", u.current);
            for (const e of y) r.removeEventListener(e, f, !0), r.removeEventListener(e, p)
          }
        }, [r, i, o, n, a, s]), {
          onPointerDownCapture: kr(() => l.current = !0, "onPointerDownCapture")
        }
      }

      function Ar(e, t = globalThis?.document) {
        const r = (0, Dr.c)(e),
          o = k.useRef(!1);
        return k.useEffect(() => {
          const e = kr(e => {
            e.target && !o.current && Hr("dismissableLayer.focusOutside", r, {
              originalEvent: e
            }, {
              discrete: !1
            })
          }, "handleFocus");
          return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
        }, [t, r]), {
          onFocusCapture: kr(() => o.current = !0, "onFocusCapture"),
          onBlurCapture: kr(() => o.current = !1, "onBlurCapture")
        }
      }

      function qr() {
        const e = new CustomEvent(Ir);
        document.dispatchEvent(e)
      }

      function Hr(e, t, r, {
        discrete: o
      }) {
        const n = r.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && n.addEventListener(e, t, {
          once: !0
        }), o ? (0, Rr.hO)(n, a) : n.dispatchEvent(a)
      }
      kr(Mr, "usePointerDownOutside"), kr(Ar, "useFocusOutside"), kr(qr, "dispatchUpdate"), kr(Hr, "handleAndDispatchCustomEvent");
      var Fr = Lr,
        Br = Tr,
        Xr = r(88918),
        Zr = r(53213),
        Gr = r(60853),
        Kr = Object.defineProperty,
        Wr = (e, t) => Kr(e, "name", {
          value: t,
          configurable: !0
        }),
        Ur = k.forwardRef(Wr(function(e, t) {
          const {
            children: r,
            width: o = 10,
            height: n = 5,
            ...a
          } = e;
          return (0, D.jsx)(Rr.sG.svg, {
            ...a,
            ref: t,
            width: o,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, D.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }, "Arrow")),
        Yr = Ur,
        $r = r(9608),
        Qr = r(7078),
        Jr = Object.defineProperty,
        eo = (e, t) => Jr(e, "name", {
          value: t,
          configurable: !0
        }),
        to = "Popper",
        [ro, oo] = (0, Sr.A)(to),
        [no, ao] = ro(to),
        so = eo(e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [o, n] = k.useState(null), [a, s] = k.useState(void 0);
          return (0, D.jsx)(no, {
            scope: t,
            anchor: o,
            onAnchorChange: n,
            placementState: a,
            setPlacementState: s,
            children: r
          })
        }, "Popper"),
        io = k.forwardRef(eo(function(e, t) {
          const {
            __scopePopper: r,
            virtualRef: o,
            ...n
          } = e, a = ao("PopperAnchor", r), s = k.useRef(null), i = a.onAnchorChange, l = k.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), d = (0, Pr.s)(t, l), c = k.useRef(null);
          k.useEffect(() => {
            if (!o) return;
            const e = c.current;
            c.current = o.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && bo(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return o ? null : (0, D.jsx)(Rr.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...n,
            ref: d
          })
        }, "PopperAnchor")),
        lo = "PopperContent",
        [co, uo] = ro(lo),
        fo = k.forwardRef(eo(function(e, t) {
          const {
            __scopePopper: r,
            side: o = "bottom",
            sideOffset: n = 0,
            align: a = "center",
            alignOffset: s = 0,
            arrowPadding: i = 0,
            avoidCollisions: l = !0,
            collisionBoundary: d = [],
            collisionPadding: c = 0,
            sticky: u = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: v,
            ...y
          } = e, h = ao(lo, r), [b, m] = k.useState(null), g = (0, Pr.s)(t, m), [C, w] = k.useState(null), x = (0, Qr.X)(C), _ = x?.width ?? 0, j = x?.height ?? 0, O = o + ("center" !== a ? "-" + a : ""), P = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, S = Array.isArray(d) ? d : [d], R = S.length > 0, N = {
            padding: P,
            boundary: S.filter(yo),
            altBoundary: R
          }, {
            refs: I,
            floatingStyles: z,
            placement: L,
            isPositioned: T,
            middlewareData: E
          } = (0, Zr.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: eo((...e) => (0, Gr.ll)(...e, {
              animationFrame: "always" === p
            }), "whileElementsMounted"),
            elements: {
              reference: h.anchor
            },
            middleware: [(0, Zr.cY)({
              mainAxis: n + j,
              alignmentAxis: s
            }), l && (0, Zr.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Zr.ER)() : void 0,
              ...N
            }), l && (0, Zr.UU)({
              ...N
            }), (0, Zr.Ej)({
              ...N,
              apply: eo(({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: o
              }) => {
                const {
                  width: n,
                  height: a
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${r}px`), s.setProperty("--radix-popper-available-height", `${o}px`), s.setProperty("--radix-popper-anchor-width", `${n}px`), s.setProperty("--radix-popper-anchor-height", `${a}px`)
              }, "apply")
            }), C && (0, Zr.UE)({
              element: C,
              padding: i
            }), ho({
              arrowWidth: _,
              arrowHeight: j
            }), f && (0, Zr.jD)({
              strategy: "referenceHidden",
              ...N,
              boundary: R ? N.boundary : void 0
            })]
          }), V = h.setPlacementState;
          (0, $r.N)(() => (V(L), () => {
            V(void 0)
          }), [L, V]);
          const [M, A] = bo(L), q = (0, Dr.c)(v);
          (0, $r.N)(() => {
            T && q?.()
          }, [T, q]);
          const H = E.arrow?.x,
            F = E.arrow?.y,
            B = 0 !== E.arrow?.centerOffset,
            [X, Z] = k.useState();
          return (0, $r.N)(() => {
            b && Z(window.getComputedStyle(b).zIndex)
          }, [b]), (0, D.jsx)("div", {
            ref: I.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...z,
              transform: T ? z.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [E.transformOrigin?.x, E.transformOrigin?.y].join(" "),
              ...E.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, D.jsx)(co, {
              scope: r,
              placedSide: M,
              placedAlign: A,
              onArrowChange: w,
              arrowX: H,
              arrowY: F,
              shouldHideArrow: B,
              children: (0, D.jsx)(Rr.sG.div, {
                "data-side": M,
                "data-align": A,
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
        po = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        vo = k.forwardRef(eo(function(e, t) {
          const {
            __scopePopper: r,
            ...o
          } = e, n = uo("PopperArrow", r), a = po[n.placedSide];
          return (0, D.jsx)("span", {
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
            children: (0, D.jsx)(Yr, {
              ...o,
              ref: t,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        }, "PopperArrow"));

      function yo(e) {
        return null !== e
      }
      eo(yo, "isNotNull");
      var ho = eo(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: o,
            middlewareData: n
          } = t, a = 0 !== n.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [l, d] = bo(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [d], u = (n.arrow?.x ?? 0) + s / 2, f = (n.arrow?.y ?? 0) + i / 2;
          let p = "",
            v = "";
          return "bottom" === l ? (p = a ? c : `${u}px`, v = -i + "px") : "top" === l ? (p = a ? c : `${u}px`, v = `${o.floating.height+i}px`) : "right" === l ? (p = -i + "px", v = a ? c : `${f}px`) : "left" === l && (p = `${o.floating.width+i}px`, v = a ? c : `${f}px`), {
            data: {
              x: p,
              y: v
            }
          }
        }
      }), "transformOrigin");

      function bo(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      eo(bo, "getSideAndAlignFromPlacement");
      var mo = so,
        go = io,
        Co = fo,
        wo = vo,
        xo = r(84017),
        _o = Object.defineProperty,
        jo = (e, t) => _o(e, "name", {
          value: t,
          configurable: !0
        }),
        Oo = k.forwardRef(jo(function(e, t) {
          const {
            container: r,
            ...o
          } = e, [n, a] = k.useState(!1);
          (0, $r.N)(() => a(!0), []);
          const s = r || n && globalThis?.document?.body;
          return s ? xo.createPortal((0, D.jsx)(Rr.sG.div, {
            ...o,
            ref: t
          }), s) : null
        }, "Portal")),
        Po = Object.defineProperty,
        So = (e, t) => Po(e, "name", {
          value: t,
          configurable: !0
        });

      function Ro(e, t) {
        return k.useReducer((e, r) => t[e][r] ?? e, e)
      }
      So(Ro, "useStateMachine");
      var Do = So(e => {
        const {
          present: t,
          children: r
        } = e, o = No(t), n = "function" == typeof r ? r({
          present: o.isPresent
        }) : k.Children.only(r), a = Io(o.ref, Lo(n));
        return "function" == typeof r || o.isPresent ? k.cloneElement(n, {
          ref: a
        }) : null
      }, "Presence");

      function No(e) {
        const [t, r] = k.useState(), o = k.useRef(null), n = k.useRef(e), a = k.useRef("none"), s = k.useRef(void 0), i = e ? "mounted" : "unmounted", [l, d] = Ro(i, {
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
          "mounted" === l ? (a.current = s.current ?? zo(o.current), s.current = void 0) : a.current = "none"
        }, [l]), (0, $r.N)(() => {
          const t = o.current,
            r = n.current;
          if (r !== e) {
            const o = a.current,
              i = zo(t);
            e ? (s.current = i, d("MOUNT")) : d("none" === i || "none" === t?.display ? "UNMOUNT" : r && o !== i ? "ANIMATION_OUT" : "UNMOUNT"), n.current = e
          }
        }, [e, d]), (0, $r.N)(() => {
          if (t) {
            let e;
            const r = t.ownerDocument.defaultView ?? window,
              s = So(a => {
                const s = zo(o.current).includes(CSS.escape(a.animationName));
                if (a.target === t && s && (d("ANIMATION_END"), !n.current)) {
                  const o = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = o)
                  })
                }
              }, "handleAnimationEnd"),
              i = So(e => {
                e.target === t && (a.current = zo(o.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
              r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
            }
          }
          d("ANIMATION_END")
        }, [t, d]), {
          isPresent: ["mounted", "unmountSuspended"].includes(l),
          ref: k.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              o.current = t, s.current = zo(t)
            } else o.current = null;
            r(e)
          }, [])
        }
      }

      function ko(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function Io(...e) {
        const t = k.useRef(e);
        return t.current = e, k.useCallback(e => {
          const r = t.current;
          let o = !1;
          const n = r.map(t => {
            const r = ko(t, e);
            return o || "function" != typeof r || (o = !0), r
          });
          if (o) return () => {
            for (let e = 0; e < n.length; e++) {
              const t = n[e];
              "function" == typeof t ? t() : ko(r[e], null)
            }
          }
        }, [])
      }

      function zo(e) {
        return e?.animationName || "none"
      }

      function Lo(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
      }
      So(No, "usePresence"), So(ko, "setRef"), So(Io, "useStableComposedRefs"), So(zo, "getAnimationName"), So(Lo, "getElementRef");
      var To = r(93237),
        Eo = r(15782),
        Vo = r(10333),
        Mo = Object.defineProperty,
        Ao = (e, t) => Mo(e, "name", {
          value: t,
          configurable: !0
        }),
        [qo, Ho] = (0, Sr.A)("Tooltip", [oo]),
        Fo = oo(),
        Bo = 700,
        Xo = "tooltip.open",
        [Zo, Go] = qo("TooltipProvider"),
        Ko = Ao(e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Bo,
            skipDelayDuration: o = 300,
            disableHoverableContent: n = !1,
            children: a
          } = e, s = k.useRef(!0), i = k.useRef(!1), l = k.useRef(0);
          return k.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, D.jsx)(Zo, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: k.useCallback(() => {
              o <= 0 || (window.clearTimeout(l.current), s.current = !1)
            }, [o]),
            onClose: k.useCallback(() => {
              o <= 0 || (window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, o))
            }, [o]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: k.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: n,
            children: a
          })
        }, "TooltipProvider"),
        Wo = "Tooltip",
        [Uo, Yo] = qo(Wo),
        $o = Ao(e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, l = Go(Wo, e.__scopeTooltip), d = Fo(t), [c, u] = k.useState(null), [f, p] = k.useState(void 0), v = (0, Xr.B)(), y = k.useRef(0), h = s ?? l.disableHoverableContent, b = i ?? l.delayDuration, m = k.useRef(!1), [g, C] = (0, Eo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: Ao(e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Xo))) : l.onClose(), a?.(e)
            }, "onChange"),
            caller: Wo
          }), w = k.useMemo(() => g ? m.current ? "delayed-open" : "instant-open" : "closed", [g]), x = k.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, m.current = !1, C(!0)
          }, [C]), _ = k.useCallback(() => {
            window.clearTimeout(y.current), y.current = 0, C(!1)
          }, [C]), j = k.useCallback(() => {
            window.clearTimeout(y.current), y.current = window.setTimeout(() => {
              m.current = !0, C(!0), y.current = 0
            }, b)
          }, [b, C]);
          k.useEffect(() => () => {
            y.current && (window.clearTimeout(y.current), y.current = 0)
          }, []);
          const O = f ?? v;
          return (0, D.jsx)(mo, {
            ...d,
            children: (0, D.jsx)(Uo, {
              scope: t,
              contentId: O,
              setContentId: p,
              open: g,
              stateAttribute: w,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: k.useCallback(() => {
                l.isOpenDelayedRef.current ? j() : x()
              }, [l.isOpenDelayedRef, j, x]),
              onTriggerLeave: k.useCallback(() => {
                h ? _() : (window.clearTimeout(y.current), y.current = 0)
              }, [_, h]),
              onOpen: x,
              onClose: _,
              disableHoverableContent: h,
              children: r
            })
          })
        }, "Tooltip"),
        Qo = "TooltipTrigger",
        Jo = k.forwardRef(Ao(function(e, t) {
          const {
            __scopeTooltip: r,
            ...o
          } = e, n = Yo(Qo, r), a = Go(Qo, r), s = Fo(r), i = k.useRef(null), l = (0, Pr.s)(t, i, n.onTriggerChange), d = k.useRef(!1), c = k.useRef(!1), u = k.useCallback(() => d.current = !1, []);
          return k.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, D.jsx)(go, {
            asChild: !0,
            ...s,
            children: (0, D.jsx)(Rr.sG.button, {
              "aria-describedby": n.open ? n.contentId : void 0,
              "data-state": n.stateAttribute,
              ...o,
              ref: l,
              onPointerMove: (0, Or.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (n.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, Or.mK)(e.onPointerLeave, () => {
                n.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, Or.mK)(e.onPointerDown, () => {
                n.open && n.onClose(), d.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, Or.mK)(e.onFocus, () => {
                d.current || n.onOpen()
              }),
              onBlur: (0, Or.mK)(e.onBlur, n.onClose),
              onClick: (0, Or.mK)(e.onClick, n.onClose)
            })
          })
        }, "TooltipTrigger")),
        en = "TooltipPortal",
        [tn, rn] = qo(en, {
          forceMount: void 0
        }),
        on = Ao(e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: o,
            container: n
          } = e, a = Yo(en, t);
          return (0, D.jsx)(tn, {
            scope: t,
            forceMount: r,
            children: (0, D.jsx)(Do, {
              present: r || a.open,
              children: (0, D.jsx)(Oo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        }, "TooltipPortal"),
        nn = "TooltipContent",
        an = k.forwardRef(Ao(function(e, t) {
          const r = rn(nn, e.__scopeTooltip),
            {
              forceMount: o = r.forceMount,
              side: n = "top",
              ...a
            } = e,
            s = Yo(nn, e.__scopeTooltip);
          return (0, D.jsx)(Do, {
            present: o || s.open,
            children: s.disableHoverableContent ? (0, D.jsx)(dn, {
              side: n,
              ...a,
              ref: t
            }) : (0, D.jsx)(sn, {
              side: n,
              ...a,
              ref: t
            })
          })
        }, "TooltipContent")),
        sn = k.forwardRef(Ao(function(e, t) {
          const r = Yo(nn, e.__scopeTooltip),
            o = Go(nn, e.__scopeTooltip),
            n = k.useRef(null),
            a = (0, Pr.s)(t, n),
            [s, i] = k.useState(null),
            {
              trigger: l,
              onClose: d
            } = r,
            c = n.current,
            {
              onPointerInTransitChange: u
            } = o,
            f = k.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = k.useCallback((e, t) => {
              const r = e.currentTarget,
                o = {
                  x: e.clientX,
                  y: e.clientY
                },
                n = yn([...fn(o, un(o, r.getBoundingClientRect())), ...pn(t.getBoundingClientRect())]);
              i(n), u(!0)
            }, [u]);
          return k.useEffect(() => () => f(), [f]), k.useEffect(() => {
            if (l && c) {
              const e = Ao(e => p(e, c), "handleTriggerLeave"),
                t = Ao(e => p(e, l), "handleContentLeave");
              return l.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [l, c, p, f]), k.useEffect(() => {
            if (s) {
              const e = Ao(e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  o = l?.contains(t) || c?.contains(t),
                  n = !vn(r, s);
                o ? f() : n && (f(), d())
              }, "handleTrackPointerGrace");
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, c, s, d, f]), (0, D.jsx)(dn, {
            ...e,
            ref: a
          })
        }, "TooltipContentHoverable")),
        ln = (0, To.Dc)("TooltipContent"),
        dn = k.forwardRef(Ao(function(e, t) {
          const {
            __scopeTooltip: r,
            children: o,
            "aria-label": n,
            id: a,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...l
          } = e, d = Yo(nn, r), c = Fo(r), {
            onClose: u
          } = d;
          k.useEffect(() => (document.addEventListener(Xo, u), () => document.removeEventListener(Xo, u)), [u]), k.useEffect(() => {
            if (d.trigger) {
              const e = Ao(e => {
                e.target instanceof Node && e.target.contains(d.trigger) && u()
              }, "handleScroll");
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, u]);
          const {
            setContentId: f
          } = d;
          return (0, $r.N)(() => (f(a), () => {
            f(void 0)
          }), [a, f]), (0, D.jsx)(Lr, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, D.jsxs)(Co, {
              "data-state": d.stateAttribute,
              role: n ? void 0 : "tooltip",
              id: n ? void 0 : d.contentId,
              ...c,
              ...l,
              ref: t,
              style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, D.jsx)(ln, {
                children: o
              }), n ? (0, D.jsx)(Vo.bL, {
                id: d.contentId,
                role: "tooltip",
                children: n
              }) : null]
            })
          })
        }, "TooltipContentImpl")),
        cn = k.forwardRef(Ao(function(e, t) {
          const {
            __scopeTooltip: r,
            ...o
          } = e, n = Fo(r);
          return (0, D.jsx)(wo, {
            ...n,
            ...o,
            ref: t
          })
        }, "TooltipArrow"));

      function un(e, t) {
        const r = Math.abs(t.top - e.y),
          o = Math.abs(t.bottom - e.y),
          n = Math.abs(t.right - e.x),
          a = Math.abs(t.left - e.x);
        switch (Math.min(r, o, n, a)) {
          case a:
            return "left";
          case n:
            return "right";
          case r:
            return "top";
          case o:
            return "bottom";
          default:
            throw new Error("unreachable")
        }
      }

      function fn(e, t, r = 5) {
        const o = [];
        switch (t) {
          case "top":
            o.push({
              x: e.x - r,
              y: e.y + r
            }, {
              x: e.x + r,
              y: e.y + r
            });
            break;
          case "bottom":
            o.push({
              x: e.x - r,
              y: e.y - r
            }, {
              x: e.x + r,
              y: e.y - r
            });
            break;
          case "left":
            o.push({
              x: e.x + r,
              y: e.y - r
            }, {
              x: e.x + r,
              y: e.y + r
            });
            break;
          case "right":
            o.push({
              x: e.x - r,
              y: e.y - r
            }, {
              x: e.x - r,
              y: e.y + r
            })
        }
        return o
      }

      function pn(e) {
        const {
          top: t,
          right: r,
          bottom: o,
          left: n
        } = e;
        return [{
          x: n,
          y: t
        }, {
          x: r,
          y: t
        }, {
          x: r,
          y: o
        }, {
          x: n,
          y: o
        }]
      }

      function vn(e, t) {
        const {
          x: r,
          y: o
        } = e;
        let n = !1;
        for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
          const s = t[e],
            i = t[a],
            l = s.x,
            d = s.y,
            c = i.x,
            u = i.y;
          d > o != u > o && r < (c - l) * (o - d) / (u - d) + l && (n = !n)
        }
        return n
      }

      function yn(e) {
        const t = e.slice();
        return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0), hn(t)
      }

      function hn(e) {
        if (e.length <= 1) return e.slice();
        const t = [];
        for (let r = 0; r < e.length; r++) {
          const o = e[r];
          for (; t.length >= 2;) {
            const e = t[t.length - 1],
              r = t[t.length - 2];
            if (!((e.x - r.x) * (o.y - r.y) >= (e.y - r.y) * (o.x - r.x))) break;
            t.pop()
          }
          t.push(o)
        }
        t.pop();
        const r = [];
        for (let t = e.length - 1; t >= 0; t--) {
          const o = e[t];
          for (; r.length >= 2;) {
            const e = r[r.length - 1],
              t = r[r.length - 2];
            if (!((e.x - t.x) * (o.y - t.y) >= (e.y - t.y) * (o.x - t.x))) break;
            r.pop()
          }
          r.push(o)
        }
        return r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
      }
      Ao(un, "getExitSideFromRect"), Ao(fn, "getPaddedExitPoints"), Ao(pn, "getPointsFromRect"), Ao(vn, "isPointInPolygon"), Ao(yn, "getHull"), Ao(hn, "getHullPresorted");
      var bn = Ko,
        mn = $o,
        gn = Jo,
        Cn = on,
        wn = an,
        xn = cn;
      const _n = (0, k.createContext)(null);

      function jn() {
        const e = (0, k.useContext)(_n);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const On = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: o,
          isDisabled: n,
          ...a
        }) => {
          const [s = !1, i] = (0, ve.ic)({
            defaultProp: r,
            prop: !n && a.isOpen,
            onChange: o
          });
          return (0, D.jsx)(bn, {
            delayDuration: t,
            children: (0, D.jsx)(_n.Provider, {
              value: {
                isOpen: s,
                ...a
              },
              children: (0, D.jsx)(mn, {
                open: s,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        Pn = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, o) => (0, D.jsx)(gn, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: o,
          children: e
        })),
        Sn = (0, k.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: o = "center",
          alignOffset: n = 0,
          avoidCollisions: a = !0,
          sticky: s = "partial",
          ...i
        }, l) => {
          const {
            isOpen: d
          } = jn(), c = (0, ve.jt)(), u = (0, jr.CS)(wn), f = (0, jr.pn)(d, {
            delay: d ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: jr.$W.stiff,
            immediate: c
          }), p = (0, L.v6)({
            "data-testid": e,
            side: t,
            align: o,
            sticky: s,
            sideOffset: r,
            alignOffset: n,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, D.jsx)(u, {
            ...p,
            style: e,
            ref: l
          }))
        }),
        Rn = (0, k.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, L.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, D.jsx)(xn, {
            ...r,
            ref: t
          })
        }),
        Dn = Cn;
      var Nn = r(76844),
        kn = r(12430),
        In = r(19046),
        zn = Object.defineProperty,
        Ln = (e, t) => zn(e, "name", {
          value: t,
          configurable: !0
        });

      function Tn(e) {
        const t = e + "CollectionProvider",
          [r, o] = (0, Sr.A)(t),
          [n, a] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = Ln(e => {
            const {
              scope: t,
              children: r
            } = e, o = k.useRef(null), a = k.useRef(new Map).current;
            return (0, D.jsx)(n, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r
            })
          }, "CollectionProvider");
        s.displayName = t;
        const i = e + "CollectionSlot",
          l = (0, To.TL)(i),
          d = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: o
            } = e, n = a(i, r), s = (0, Pr.s)(t, n.collectionRef);
            return (0, D.jsx)(l, {
              ref: s,
              children: o
            })
          });
        d.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, To.TL)(c),
          p = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...n
            } = e, s = k.useRef(null), i = (0, Pr.s)(t, s), l = a(c, r);
            return k.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...n
            }), () => {
              l.itemMap.delete(s)
            })), (0, D.jsx)(f, {
              [u]: "",
              ref: i,
              children: o
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
        return p.displayName = c, Ln(v, "useCollection"), [{
          Provider: s,
          Slot: d,
          ItemSlot: p
        }, v, o]
      }
      Ln(Tn, "createCollection");
      var En = new WeakMap,
        Vn = class e extends Map {
          static {
            Ln(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], En.set(this, !0)
          }
          set(e, t) {
            return En.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, r) {
            const o = this.has(t),
              n = this.#e.length,
              a = qn(e);
            let s = a >= 0 ? a : n + a;
            const i = s < 0 || s >= n ? -1 : s;
            if (i === this.size || o && i === this.size - 1 || -1 === i) return this.set(t, r), this;
            const l = this.size + (o ? 0 : 1);
            a < 0 && s++;
            const d = [...this.#e];
            let c, u = !1;
            for (let e = s; e < l; e++)
              if (s === e) {
                let n = d[e];
                d[e] === t && (n = d[e + 1]), o && this.delete(t), c = this.get(n), this.set(t, r)
              } else {
                u || d[e - 1] !== t || (u = !0);
                const r = d[u ? e : e - 1],
                  o = c;
                c = this.get(r), this.delete(r), this.set(r, o)
              } return this
          }
          with(t, r, o) {
            const n = new e(this);
            return n.insert(t, r, o), n
          }
          before(e) {
            const t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
          }
          setBefore(e, t, r) {
            const o = this.#e.indexOf(e);
            return -1 === o ? this : this.insert(o, t, r)
          }
          after(e) {
            let t = this.#e.indexOf(e);
            if (t = -1 === t || t === this.size - 1 ? -1 : t + 1, -1 !== t) return this.entryAt(t)
          }
          setAfter(e, t, r) {
            const o = this.#e.indexOf(e);
            return -1 === o ? this : this.insert(o + 1, t, r)
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
            const t = Mn(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = Mn(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return Mn(this.#e, e)
          }
          from(e, t) {
            const r = this.indexOf(e);
            if (-1 === r) return;
            let o = r + t;
            return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.at(o)
          }
          keyFrom(e, t) {
            const r = this.indexOf(e);
            if (-1 === r) return;
            let o = r + t;
            return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.keyAt(o)
          }
          find(e, t) {
            let r = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, r, this])) return o;
              r++
            }
          }
          findIndex(e, t) {
            let r = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, r, this])) return r;
              r++
            }
            return -1
          }
          filter(t, r) {
            const o = [];
            let n = 0;
            for (const e of this) Reflect.apply(t, r, [e, n, this]) && o.push(e), n++;
            return new e(o)
          }
          map(t, r) {
            const o = [];
            let n = 0;
            for (const e of this) o.push([e[0], Reflect.apply(t, r, [e, n, this])]), n++;
            return new e(o)
          }
          reduce(...e) {
            const [t, r] = e;
            let o = 0,
              n = r ?? this.at(0);
            for (const r of this) n = 0 === o && 1 === e.length ? r : Reflect.apply(t, this, [n, r, o, this]), o++;
            return n
          }
          reduceRight(...e) {
            const [t, r] = e;
            let o = r ?? this.at(-1);
            for (let r = this.size - 1; r >= 0; r--) {
              const n = this.at(r);
              o = r === this.size - 1 && 1 === e.length ? n : Reflect.apply(t, this, [o, n, r, this])
            }
            return o
          }
          toSorted(t) {
            const r = [...this.entries()].sort(t);
            return new e(r)
          }
          toReversed() {
            const t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
              const r = this.keyAt(e),
                o = this.get(r);
              t.set(r, o)
            }
            return t
          }
          toSpliced(...t) {
            const r = [...this.entries()];
            return r.splice(...t), new e(r)
          }
          slice(t, r) {
            const o = new e;
            let n = this.size - 1;
            if (void 0 === t) return o;
            t < 0 && (t += this.size), void 0 !== r && r > 0 && (n = r - 1);
            for (let e = t; e <= n; e++) {
              const t = this.keyAt(e),
                r = this.get(t);
              o.set(t, r)
            }
            return o
          }
          every(e, t) {
            let r = 0;
            for (const o of this) {
              if (!Reflect.apply(e, t, [o, r, this])) return !1;
              r++
            }
            return !0
          }
          some(e, t) {
            let r = 0;
            for (const o of this) {
              if (Reflect.apply(e, t, [o, r, this])) return !0;
              r++
            }
            return !1
          }
        };

      function Mn(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const r = An(e, t);
        return -1 === r ? void 0 : e[r]
      }

      function An(e, t) {
        const r = e.length,
          o = qn(t),
          n = o >= 0 ? o : r + o;
        return n < 0 || n >= r ? -1 : n
      }

      function qn(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function Hn(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t) return !1;
        if (null == e || null == t) return !1;
        const r = Object.keys(e),
          o = Object.keys(t);
        if (r.length !== o.length) return !1;
        for (const o of r) {
          if (!Object.prototype.hasOwnProperty.call(t, o)) return !1;
          if (e[o] !== t[o]) return !1
        }
        return !0
      }

      function Fn(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function Bn(e, t) {
        return e[1].element && t[1].element ? Fn(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function Xn(e) {
        return new MutationObserver(t => {
          for (const r of t)
            if ("childList" === r.type) return void e()
        })
      }
      Ln(Mn, "at"), Ln(An, "toSafeIndex"), Ln(qn, "toSafeInteger"), Ln(function(e) {
        const t = e + "CollectionProvider",
          [r, o] = (0, Sr.A)(t),
          [n, a] = r(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new Vn,
            setItemMap: Ln(() => {}, "setItemMap")
          }),
          s = Ln(({
            state: e,
            ...t
          }) => e ? (0, D.jsx)(l, {
            ...t,
            state: e
          }) : (0, D.jsx)(i, {
            ...t
          }), "CollectionProvider");
        s.displayName = t;
        const i = Ln(e => {
          const t = h();
          return (0, D.jsx)(l, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        i.displayName = t + "Init";
        const l = Ln(e => {
          const {
            scope: t,
            children: r,
            state: o
          } = e, a = k.useRef(null), [s, i] = k.useState(null), l = (0, Pr.s)(a, i), [d, c] = o;
          return k.useEffect(() => {
            if (!s) return;
            const e = Xn(() => {});
            return e.observe(s, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [s]), (0, D.jsx)(n, {
            scope: t,
            itemMap: d,
            setItemMap: c,
            collectionRef: l,
            collectionRefObject: a,
            collectionElement: s,
            children: r
          })
        }, "CollectionProviderImpl");
        l.displayName = t + "Impl";
        const d = e + "CollectionSlot",
          c = (0, To.TL)(d),
          u = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: o
            } = e, n = a(d, r), s = (0, Pr.s)(t, n.collectionRef);
            return (0, D.jsx)(c, {
              ref: s,
              children: o
            })
          });
        u.displayName = d;
        const f = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          v = (0, To.TL)(f),
          y = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...n
            } = e, s = k.useRef(null), [i, l] = k.useState(null), d = (0, Pr.s)(t, s, l), c = a(f, r), {
              setItemMap: u
            } = c, y = k.useRef(n);
            Hn(y.current, n) || (y.current = n);
            const h = y.current;
            return k.useEffect(() => {
              const e = h;
              return u(t => i ? t.has(i) ? t.set(i, {
                ...e,
                element: i
              }).toSorted(Bn) : (t.set(i, {
                ...e,
                element: i
              }), t.toSorted(Bn)) : t), () => {
                u(e => i && e.has(i) ? (e.delete(i), new Vn(e)) : e)
              }
            }, [i, h, u]), (0, D.jsx)(v, {
              [p]: "",
              ref: d,
              children: o
            })
          });

        function h() {
          return k.useState(new Vn)
        }

        function b(t) {
          const {
            itemMap: r
          } = a(e + "CollectionConsumer", t);
          return r
        }
        return y.displayName = f, Ln(h, "useInitCollection"), Ln(b, "useCollection"), [{
          Provider: s,
          Slot: u,
          ItemSlot: y
        }, {
          createCollectionScope: o,
          useCollection: b,
          useInitCollection: h
        }]
      }, "createCollection"), Ln(Hn, "shallowEqual"), Ln(Fn, "isElementPreceding"), Ln(Bn, "sortByDocumentPosition"), Ln(Xn, "getChildListObserver");
      var Zn = Object.defineProperty,
        Gn = (e, t) => Zn(e, "name", {
          value: t,
          configurable: !0
        }),
        Kn = ["PageUp", "PageDown"],
        Wn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Un = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Yn = "Slider",
        [$n, Qn, Jn] = Tn(Yn),
        [ea, ta] = (0, Sr.A)(Yn, [Jn]),
        [ra, oa] = ea(Yn),
        na = k.forwardRef(Gn(function(e, t) {
          const {
            name: r,
            min: o = 0,
            max: n = 100,
            step: a = 1,
            orientation: s = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: d = [o],
            value: c,
            onValueChange: u = Gn(() => {}, "onValueChange"),
            onValueCommit: f = Gn(() => {}, "onValueCommit"),
            inverted: p = !1,
            form: v,
            ...y
          } = e, h = k.useRef(new Set), b = k.useRef(0), m = k.useRef(!1), g = "horizontal" === s ? ia : la, [C, w] = k.useState(null), x = (0, Pr.s)(t, w), [_ = [], j] = (0, Eo.i)({
            prop: c,
            defaultProp: d,
            onChange: Gn(e => {
              const t = [...h.current];
              t[b.current]?.focus({
                preventScroll: !0,
                focusVisible: m.current
              }), m.current = !1, u(e)
            }, "onChange")
          }), O = k.useRef(_), P = k.useRef(_);

          function S(e) {
            I(e, _a(_, e))
          }

          function R(e) {
            I(e, b.current)
          }

          function N() {
            String(_) !== String(O.current) && f(_)
          }

          function I(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = Ra(a),
              i = Da(Math.round((e - o) / a) * a + o, s),
              d = (0, Nn.q)(i, [o, n]);
            j((e = []) => {
              const o = Ca(e, d, t);
              if (Pa(o, l * a)) {
                b.current = o.indexOf(d);
                const t = String(o) !== String(e);
                return t && r && f(o), t ? o : e
              }
              return e
            })
          }
          return k.useEffect(() => {
            const e = v ? C?.ownerDocument.getElementById(v) : C?.closest("form");
            if (e instanceof HTMLFormElement) {
              const t = Gn(() => j(P.current), "reset");
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [C, v, j]), Gn(S, "handleSlideStart"), Gn(R, "handleSlideMove"), Gn(N, "handleSlideEnd"), Gn(I, "updateValues"), (0, D.jsx)(ra, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: o,
            max: n,
            valueIndexToChangeRef: b,
            thumbs: h.current,
            values: _,
            orientation: s,
            form: v,
            children: (0, D.jsx)($n.Provider, {
              scope: e.__scopeSlider,
              children: (0, D.jsx)($n.Slot, {
                scope: e.__scopeSlider,
                children: (0, D.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: x,
                  onPointerDown: (0, Or.mK)(y.onPointerDown, () => {
                    i || (O.current = _, m.current = !1)
                  }),
                  min: o,
                  max: n,
                  inverted: p,
                  onSlideStart: i ? void 0 : S,
                  onSlideMove: i ? void 0 : R,
                  onSlideEnd: i ? void 0 : N,
                  onHomeKeyDown: () => {
                    i || (m.current = !0, I(o, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (m.current = !0, I(n, _.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      m.current = !0;
                      const r = Kn.includes(e.key) || e.shiftKey && Wn.includes(e.key) ? 10 : 1,
                        n = b.current;
                      I(Na(_[n], {
                        min: o,
                        step: a,
                        direction: t,
                        multiplier: r
                      }), n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }, "Slider")),
        [aa, sa] = ea(Yn, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1
        }),
        ia = k.forwardRef(Gn(function(e, t) {
          const {
            min: r,
            max: o,
            dir: n,
            inverted: a,
            onSlideStart: s,
            onSlideMove: i,
            onSlideEnd: l,
            onStepKeyDown: d,
            ...c
          } = e, [u, f] = k.useState(null), p = (0, Pr.s)(t, f), v = k.useRef(void 0), y = (0, kn.jH)(n), h = "ltr" === y, b = h && !a || !h && a;

          function m(e) {
            const t = v.current || u.getBoundingClientRect(),
              n = Sa([0, t.width], b ? [r, o] : [o, r]);
            return v.current = t, n(e - t.left)
          }
          return Gn(m, "getValueFromPointer"), (0, D.jsx)(aa, {
            scope: e.__scopeSlider,
            startEdge: b ? "left" : "right",
            endEdge: b ? "right" : "left",
            direction: b ? 1 : -1,
            size: "width",
            children: (0, D.jsx)(da, {
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
                v.current = void 0, l?.()
              },
              onStepKeyDown: e => {
                const t = Un[b ? "from-left" : "from-right"].includes(e.key);
                d?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderHorizontal")),
        la = k.forwardRef(Gn(function(e, t) {
          const {
            min: r,
            max: o,
            inverted: n,
            onSlideStart: a,
            onSlideMove: s,
            onSlideEnd: i,
            onStepKeyDown: l,
            ...d
          } = e, c = k.useRef(null), u = (0, Pr.s)(t, c), f = k.useRef(void 0), p = !n;

          function v(e) {
            const t = f.current || c.current.getBoundingClientRect(),
              n = Sa([0, t.height], p ? [o, r] : [r, o]);
            return f.current = t, n(e - t.top)
          }
          return Gn(v, "getValueFromPointer"), (0, D.jsx)(aa, {
            scope: e.__scopeSlider,
            startEdge: p ? "bottom" : "top",
            endEdge: p ? "top" : "bottom",
            size: "height",
            direction: p ? 1 : -1,
            children: (0, D.jsx)(da, {
              "data-orientation": "vertical",
              ...d,
              ref: u,
              style: {
                ...d.style,
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
                const t = Un[p ? "from-bottom" : "from-top"].includes(e.key);
                l?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderVertical")),
        da = k.forwardRef(Gn(function(e, t) {
          const {
            __scopeSlider: r,
            onSlideStart: o,
            onSlideMove: n,
            onSlideEnd: a,
            onHomeKeyDown: s,
            onEndKeyDown: i,
            onStepKeyDown: l,
            ...d
          } = e, c = oa(Yn, r);
          return (0, D.jsx)(Rr.sG.span, {
            ...d,
            ref: t,
            onKeyDown: (0, Or.mK)(e.onKeyDown, e => {
              "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Kn.concat(Wn).includes(e.key) && (l(e), e.preventDefault())
            }),
            onPointerDown: (0, Or.mK)(e.onPointerDown, e => {
              const t = e.target;
              t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
                preventScroll: !0,
                focusVisible: !1
              }) : o(e)
            }),
            onPointerMove: (0, Or.mK)(e.onPointerMove, e => {
              e.target.hasPointerCapture(e.pointerId) && n(e)
            }),
            onPointerUp: (0, Or.mK)(e.onPointerUp, e => {
              const t = e.target;
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
            })
          })
        }, "SliderImpl")),
        ca = k.forwardRef(Gn(function(e, t) {
          const {
            __scopeSlider: r,
            ...o
          } = e, n = oa("SliderTrack", r);
          return (0, D.jsx)(Rr.sG.span, {
            "data-disabled": n.disabled ? "" : void 0,
            "data-orientation": n.orientation,
            ...o,
            ref: t
          })
        }, "SliderTrack")),
        ua = "SliderRange",
        fa = k.forwardRef(Gn(function(e, t) {
          const {
            __scopeSlider: r,
            ...o
          } = e, n = oa(ua, r), a = sa(ua, r), s = k.useRef(null), i = (0, Pr.s)(t, s), l = n.values.length, d = n.values.map(e => wa(e, n.min, n.max)), c = l > 1 ? Math.min(...d) : 0, u = 100 - Math.max(...d);
          return (0, D.jsx)(Rr.sG.span, {
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
        }, "SliderRange")),
        [pa, va] = ea("SliderThumb");

      function ya(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: o,
          internal_do_not_use_render: n
        } = e, a = oa("SliderThumbProvider", t), s = Qn(t), [i, l] = k.useState(null), d = k.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, Qr.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[d], p = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : wa(f, a.min, a.max);
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
          index: d,
          thumb: i,
          onThumbChange: l,
          percent: v,
          size: c
        };
        return (0, D.jsx)(pa, {
          scope: t,
          ...y,
          children: ka(n) ? n(y) : o
        })
      }
      Gn(ya, "SliderThumbProvider");
      var ha = "SliderThumbTrigger",
        ba = k.forwardRef(Gn(function(e, t) {
          const {
            __scopeSlider: r,
            ...o
          } = e, n = oa(ha, r), a = sa(ha, r), {
            index: s,
            value: i,
            percent: l,
            size: d,
            onThumbChange: c
          } = va(ha, r), u = (0, Pr.s)(t, c), f = xa(s, n.values.length), p = d?.[a.size], v = p ? ja(p, l, a.direction) : 0;
          return (0, D.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${l}% + ${v}px)`
            },
            children: (0, D.jsx)($n.ItemSlot, {
              scope: r,
              children: (0, D.jsx)(Rr.sG.span, {
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
                onFocus: (0, Or.mK)(e.onFocus, () => {
                  n.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        }, "SliderThumbTrigger")),
        ma = k.forwardRef(Gn(function(e, t) {
          const {
            __scopeSlider: r,
            name: o,
            ...n
          } = e;
          return (0, D.jsx)(ya, {
            __scopeSlider: r,
            name: o,
            internal_do_not_use_render: ({
              index: e,
              isFormControl: o
            }) => (0, D.jsxs)(D.Fragment, {
              children: [(0, D.jsx)(ba, {
                ...n,
                ref: t,
                __scopeSlider: r
              }), o ? (0, D.jsx)(ga, {
                __scopeSlider: r
              }, e) : null]
            })
          })
        }, "SliderThumb")),
        ga = k.forwardRef(Gn(function({
          __scopeSlider: e,
          ...t
        }, r) {
          const {
            value: o,
            name: n,
            form: a
          } = va("SliderBubbleInput", e), s = k.useRef(null), i = (0, Pr.s)(s, r), l = (0, In.Z)(o);
          return k.useEffect(() => {
            const e = s.current;
            if (!e) return;
            const t = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (l !== o && r) {
              const t = new Event("input", {
                bubbles: !0
              });
              r.call(e, o), e.dispatchEvent(t)
            }
          }, [l, o]), (0, D.jsx)(Rr.sG.input, {
            style: {
              display: "none"
            },
            name: n,
            form: a,
            ...t,
            ref: i,
            defaultValue: o
          })
        }, "SliderBubbleInput"));

      function Ca(e = [], t, r) {
        const o = [...e];
        return o[r] = t, o.sort((e, t) => e - t)
      }

      function wa(e, t, r) {
        const o = 100 / (r - t) * (e - t);
        return (0, Nn.q)(o, [0, 100])
      }

      function xa(e, t) {
        return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
      }

      function _a(e, t) {
        if (1 === e.length) return 0;
        const r = e.map(e => Math.abs(e - t)),
          o = Math.min(...r);
        return r.indexOf(o)
      }

      function ja(e, t, r) {
        const o = e / 2;
        return (o - Sa([0, 50], [0, o])(t) * r) * r
      }

      function Oa(e) {
        return e.slice(0, -1).map((t, r) => e[r + 1] - t)
      }

      function Pa(e, t) {
        if (t > 0) {
          const r = Oa(e);
          return Math.min(...r) >= t
        }
        return !0
      }

      function Sa(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const o = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + o * (r - e[0])
        }
      }

      function Ra(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), o = e.split(".")[1] || "", n = Number(r);
          return Math.max(0, o.length - n)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function Da(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function Na(e, {
        min: t,
        step: r,
        direction: o,
        multiplier: n
      }) {
        const a = Ra(r),
          s = (e - t) / r,
          i = Math.round(s);
        let l;
        return l = Da(i * r + t, a) === Da(e, a) ? i + n * o : o > 0 ? Math.ceil(s) : Math.floor(s), Da(l * r + t, a)
      }

      function ka(e) {
        return "function" == typeof e
      }
      Gn(Ca, "getNextSortedValues"), Gn(wa, "convertValueToPercentage"), Gn(xa, "getLabel"), Gn(_a, "getClosestValueIndex"), Gn(ja, "getThumbInBoundsOffset"), Gn(Oa, "getStepsBetweenValues"), Gn(Pa, "hasMinStepsBetweenValues"), Gn(Sa, "linearScale"), Gn(Ra, "getDecimalCount"), Gn(Da, "roundValue"), Gn(Na, "getNextStepValue"), Gn(ka, "isFunction");
      var Ia = Object.defineProperty,
        za = (e, t) => Ia(e, "name", {
          value: t,
          configurable: !0
        }),
        La = "focusScope.autoFocusOnMount",
        Ta = "focusScope.autoFocusOnUnmount",
        Ea = {
          bubbles: !1,
          cancelable: !0
        },
        Va = k.forwardRef(za(function(e, t) {
          const {
            loop: r = !1,
            trapped: o = !1,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, l] = k.useState(null), d = (0, Dr.c)(n), c = (0, Dr.c)(a), u = k.useRef(null), f = (0, Pr.s)(t, l), p = k.useRef({
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
                  const t = e.target;
                  i.contains(t) ? u.current = t : Xa(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || Xa(u.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Xa(i)
                };
              za(e, "handleFocusIn"), za(t, "handleFocusOut"), za(r, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(r);
              return i && o.observe(i, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [o, i, p.paused]), k.useEffect(() => {
            if (i) {
              Za.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(La, Ea);
                i.addEventListener(La, d), i.dispatchEvent(t), t.defaultPrevented || (Ma(Wa(qa(i)), {
                  select: !0
                }), document.activeElement === e && Xa(i))
              }
              return () => {
                i.removeEventListener(La, d), setTimeout(() => {
                  const t = new CustomEvent(Ta, Ea);
                  i.addEventListener(Ta, c), i.dispatchEvent(t), t.defaultPrevented || Xa(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Ta, c), Za.remove(p)
                }, 0)
              }
            }
          }, [i, d, c, p]);
          const v = k.useCallback(e => {
            if (!r && !o) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              n = document.activeElement;
            if (t && n) {
              const t = e.currentTarget,
                [o, a] = Aa(t);
              o && a ? e.shiftKey || n !== a ? e.shiftKey && n === o && (e.preventDefault(), r && Xa(a, {
                select: !0
              })) : (e.preventDefault(), r && Xa(o, {
                select: !0
              })) : n === t && e.preventDefault()
            }
          }, [r, o, p.paused]);
          return (0, D.jsx)(Rr.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        }, "FocusScope"));

      function Ma(e, {
        select: t = !1
      } = {}) {
        const r = document.activeElement;
        for (const o of e)
          if (Xa(o, {
              select: t
            }), document.activeElement !== r) return
      }

      function Aa(e) {
        const t = qa(e);
        return [Ha(t, e), Ha(t.reverse(), e)]
      }

      function qa(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: za(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Ha(e, t) {
        const r = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const o of e)
          if (!(r ? !o.checkVisibility({
              checkVisibilityCSS: !0
            }) : Fa(o, {
              upTo: t
            }))) return o
      }

      function Fa(e, {
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

      function Ba(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function Xa(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && Ba(e) && t && e.select()
        }
      }
      za(Ma, "focusFirst"), za(Aa, "getTabbableEdges"), za(qa, "getTabbableCandidates"), za(Ha, "findVisible"), za(Fa, "isHidden"), za(Ba, "isSelectableInput"), za(Xa, "focus");
      var Za = Ga();

      function Ga() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Ka(e, t), e.unshift(t)
          },
          remove(t) {
            e = Ka(e, t), e[0]?.resume()
          }
        }
      }

      function Ka(e, t) {
        const r = [...e],
          o = r.indexOf(t);
        return -1 !== o && r.splice(o, 1), r
      }

      function Wa(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      za(Ga, "createFocusScopesStack"), za(Ka, "arrayRemove"), za(Wa, "removeLinks");
      var Ua = r(86187),
        Ya = r(38100),
        $a = r(45787),
        Qa = Object.defineProperty,
        Ja = (e, t) => Qa(e, "name", {
          value: t,
          configurable: !0
        }),
        es = "Dialog",
        [ts, rs] = (0, Sr.A)(es),
        [os, ns] = ts(es),
        as = Ja(e => {
          const {
            __scopeDialog: t,
            children: r,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !0
          } = e, i = k.useRef(null), l = k.useRef(null), [d, c] = (0, Eo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: es
          }), [u, f] = k.useState(0), [p, v] = k.useState(0);
          return (0, D.jsx)(os, {
            scope: t,
            triggerRef: i,
            contentRef: l,
            contentId: (0, Xr.B)(),
            titleId: (0, Xr.B)(),
            descriptionId: (0, Xr.B)(),
            titlePresent: u > 0,
            descriptionPresent: p > 0,
            setTitleCount: f,
            setDescriptionCount: v,
            open: d,
            onOpenChange: c,
            onOpenToggle: k.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: r
          })
        }, "Dialog"),
        ss = k.forwardRef(Ja(function(e, t) {
          const {
            __scopeDialog: r,
            ...o
          } = e, n = ns("DialogTrigger", r), a = (0, Pr.s)(t, n.triggerRef);
          return (0, D.jsx)(Rr.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": _s(n.open),
            ...o,
            ref: a,
            onClick: (0, Or.mK)(e.onClick, n.onOpenToggle)
          })
        }, "DialogTrigger")),
        is = "DialogPortal",
        [ls, ds] = ts(is, {
          forceMount: void 0
        }),
        cs = Ja(e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: o,
            container: n
          } = e, a = ns(is, t);
          return (0, D.jsx)(ls, {
            scope: t,
            forceMount: r,
            children: k.Children.map(o, e => (0, D.jsx)(Do, {
              present: r || a.open,
              children: (0, D.jsx)(Oo, {
                asChild: !0,
                container: n,
                children: e
              })
            }))
          })
        }, "DialogPortal"),
        us = "DialogOverlay",
        fs = k.forwardRef(Ja(function(e, t) {
          const r = ds(us, e.__scopeDialog),
            {
              forceMount: o = r.forceMount,
              ...n
            } = e,
            a = ns(us, e.__scopeDialog);
          return a.modal ? (0, D.jsx)(Do, {
            present: o || a.open,
            children: (0, D.jsx)(vs, {
              ...n,
              ref: t
            })
          }) : null
        }, "DialogOverlay")),
        ps = (0, To.TL)("DialogOverlay.RemoveScroll"),
        vs = k.forwardRef(Ja(function(e, t) {
          const {
            __scopeDialog: r,
            ...o
          } = e, n = ns(us, r), a = Er(), s = (0, Pr.s)(t, a);
          return (0, D.jsx)(Ya.A, {
            as: ps,
            allowPinchZoom: !0,
            shards: [n.contentRef],
            children: (0, D.jsx)(Rr.sG.div, {
              "data-state": _s(n.open),
              ...o,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        }, "DialogOverlayImpl")),
        ys = "DialogContent",
        hs = k.forwardRef(Ja(function(e, t) {
          const r = ds(ys, e.__scopeDialog),
            {
              forceMount: o = r.forceMount,
              ...n
            } = e,
            a = ns(ys, e.__scopeDialog);
          return (0, D.jsx)(Do, {
            present: o || a.open,
            children: a.modal ? (0, D.jsx)(bs, {
              ...n,
              ref: t
            }) : (0, D.jsx)(ms, {
              ...n,
              ref: t
            })
          })
        }, "DialogContent")),
        bs = k.forwardRef(Ja(function(e, t) {
          const r = ns(ys, e.__scopeDialog),
            o = k.useRef(null),
            n = (0, Pr.s)(t, r.contentRef, o);
          return k.useEffect(() => {
            const e = o.current;
            if (e) return (0, $a.Eq)(e)
          }, []), (0, D.jsx)(gs, {
            ...e,
            ref: n,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            onCloseAutoFocus: (0, Or.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, Or.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, Or.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }, "DialogContentModal")),
        ms = k.forwardRef(Ja(function(e, t) {
          const r = ns(ys, e.__scopeDialog),
            o = k.useRef(!1),
            n = k.useRef(!1);
          return (0, D.jsx)(gs, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || r.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, n.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (n.current = !0));
              const a = t.target,
                s = r.triggerRef.current?.contains(a);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && n.current && t.preventDefault()
            }
          })
        }, "DialogContentNonModal")),
        gs = k.forwardRef(Ja(function(e, t) {
          const {
            __scopeDialog: r,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            ...s
          } = e, i = ns(ys, r);
          return (0, Ua.Oh)(), (0, D.jsx)(D.Fragment, {
            children: (0, D.jsx)(Va, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: n,
              onUnmountAutoFocus: a,
              children: (0, D.jsx)(Lr, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionPresent ? i.descriptionId : void 0,
                "aria-labelledby": i.titlePresent ? i.titleId : void 0,
                "data-state": _s(i.open),
                ...s,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }, "DialogContentImpl")),
        Cs = k.forwardRef(Ja(function(e, t) {
          const {
            __scopeDialog: r,
            ...o
          } = e, n = ns("DialogTitle", r), {
            setTitleCount: a
          } = n;
          return (0, $r.N)(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, D.jsx)(Rr.sG.h2, {
            id: n.titleId,
            ...o,
            ref: t
          })
        }, "DialogTitle")),
        ws = k.forwardRef(Ja(function(e, t) {
          const {
            __scopeDialog: r,
            ...o
          } = e, n = ns("DialogDescription", r), {
            setDescriptionCount: a
          } = n;
          return (0, $r.N)(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, D.jsx)(Rr.sG.p, {
            id: n.descriptionId,
            ...o,
            ref: t
          })
        }, "DialogDescription")),
        xs = k.forwardRef(Ja(function(e, t) {
          const {
            __scopeDialog: r,
            ...o
          } = e, n = ns("DialogClose", r);
          return (0, D.jsx)(Rr.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, Or.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        }, "DialogClose"));

      function _s(e) {
        return e ? "open" : "closed"
      }
      Ja(_s, "getState");
      const js = (0, k.createContext)({
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
        Os = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: o,
          minZoomLevel: n = 100,
          maxZoomLevel: a = 300,
          zoomLevelStep: s = 100,
          clickAction: i = "close",
          doubleTapAction: l,
          tapAction: d,
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
            h = (0, k.useRef)(null),
            b = (0, k.useRef)(null),
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
              prop: t || o,
              onChange: r
            }),
            V = (0, k.useRef)(null);
          return V.current || (V.current = new mr({
            zoomLevelOptions: {
              max: a,
              min: n,
              step: s
            },
            actionOptions: {
              click: i,
              tap: d || (p ? "toggle-controls" : "close"),
              doubleTap: l || (p ? "zoom" : "none")
            }
          })), (0, D.jsx)(sr.Dk, {
            messages: ir,
            locale: f,
            children: (0, D.jsx)(js.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: y,
                thumbnailRef: h,
                openIconRef: b,
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
              children: (0, D.jsx)(Ss, {
                ...u
              })
            })
          })
        },
        Ps = (0, k.createContext)({
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
        Ss = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, k.useContext)(js), {
            onOpenChange: r,
            openAnim: o,
            close: n
          } = (() => {
            const {
              contextSafe: e
            } = (0, qt.L)(), {
              slide: t,
              setOpen: r,
              hideTrigger: o,
              overlayRef: n,
              controlsRef: a,
              triggerRef: s,
              triggerBorderRef: i,
              thumbnailRef: l,
              containerRef: d,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, k.useContext)(js), p = (0, k.useRef)(null);
            p.current || (p.current = At.os.timeline({
              defaults: or
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
                }), l.current && i.current && (t.opening = !0, t.setup(i.current, l.current), t.zoomAndPanToInitial(), At.os.set([u.current, f.current], {
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
                }), At.os.set([f.current], {
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
                }), p.current.to([d.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), o && p.current.to([s.current, i.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([u.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  borderRadius: t.opener.placeholderRadius,
                  clipPath: t.opener.placeholderClip,
                  duration: 0
                }), p.current.fromTo([d.current], {
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
                }, 0), p.current.fromTo([n.current], {
                  opacity: 0
                }, {
                  opacity: () => t.getOverlayOpacity(),
                  data: {
                    invalidate: !0
                  }
                }, 0), p.current.fromTo([a.current], {
                  opacity: 0,
                  [ar]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [ar]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Ft(f.current), t.closing || (At.os.set([f.current], {
                  visibility: "visible",
                  ...nr
                }), At.os.set([u.current], {
                  visibility: "hidden",
                  ...nr
                }))))
              }),
              h = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              b = (0, k.useCallback)(async e => {
                e || (window.addEventListener("click", v), await h(), window.removeEventListener("click", v)), r(e)
              }, [r]),
              m = (0, k.useCallback)(() => b(!1), [b]);
            return {
              onOpenChange: b,
              openAnim: y,
              close: m
            }
          })(), {
            update: a,
            zoomIn: s,
            zoomOut: i,
            zoomTo: l,
            resetZoom: d,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, qt.L)(), {
              slide: r,
              imageRef: o,
              zoomPanRef: n,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, k.useContext)(js), l = t(async e => {
              r.zoomTo(e), At.os.set([n.current], {
                ...r.getCurrentTransform(),
                ...nr
              })
            }), d = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), At.os.to([n.current], {
                ...r.getCurrentTransform(),
                ...nr
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), At.os.to([n.current], {
                ...r.getCurrentTransform(),
                ...nr
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), At.os.to([n.current], {
                ...r.getCurrentTransform(),
                ...nr
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              At.os.to([a.current], {
                opacity: e,
                [ar]: t,
                ...nr
              })
            }), p = t(async () => {
              At.os.to([n.current], {
                ...r.getCurrentTransform(),
                ...nr
              })
            }), v = (0, k.useCallback)(() => {
              o.current && n.current && (At.os.set([n.current], {
                ...r.getCurrentTransform(),
                ...nr
              }), At.os.set([o.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...nr
              }), At.os.set([s.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, k.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", v), window.addEventListener("resize", r.resize.bind(r)), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), r.removeEventListener("resize", v), window.removeEventListener("resize", r.resize.bind(r))
            }), []), {
              zoomIn: d,
              zoomOut: c,
              zoomTo: l,
              resetZoom: u,
              toggleControls: f,
              update: p
            }
          })({
            close: n
          }), u = (0, L.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, D.jsx)(Ps.Provider, {
            value: {
              update: a,
              openAnim: o,
              close: n,
              zoomIn: s,
              zoomOut: i,
              zoomTo: l,
              resetZoom: d,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, D.jsx)(as, {
              ...u
            })
          })
        },
        Rs = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, o) {
          const n = (0, sr.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, k.useContext)(js),
            l = (0, ve.UP)(a, o),
            d = (0, L.v6)(r, {
              "data-testid": e,
              "aria-label": n.formatMessage(Cr.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, D.jsx)(ss, {
            ref: l,
            ...d,
            children: (0, D.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, D.jsx)(ye.xV, {
                children: t
              })
            })
          })
        }),
        Ds = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, o) {
          const {
            thumbnailRef: n
          } = (0, k.useContext)(js), a = (0, ve.UP)(n, o), s = (0, L.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? ye.DX : "img";
          return (0, D.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ns = (0, k.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: o
          } = (0, k.useContext)(js), n = (0, ve.UP)(o, r), a = (0, L.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? ye.DX : Le.h1;
          return (0, D.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        ks = ({
          ...e
        }) => (0, D.jsx)(cs, {
          ...e
        }),
        Is = (0, k.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: o
          } = (0, k.useContext)(js), n = (0, ve.UP)(o, r), a = (0, L.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, D.jsx)(fs, {
            ref: n,
            ...a
          })
        }),
        zs = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, o) {
          const {
            openAnim: n
          } = (0, k.useContext)(Ps), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, k.useContext)(js), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, k.useContext)(js), [t, r] = (0, k.useState)(e.getCursor()), o = (0, k.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, k.useEffect)(() => (e.addEventListener("zoom", o), () => {
              e.removeEventListener("zoom", o)
            }), [o]), {
              cursor: t
            }
          })(), d = (0, gr.m)("dark"), c = (0, ve.UP)(a, o), u = (0, L.v6)(r, {
            "data-testid": e,
            onOpenAutoFocus: n,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, ze.clsx)("foundry_1a74xwb9", d),
            style: {
              cursor: l
            }
          });
          return (0, D.jsxs)(hs, {
            ref: c,
            ...u,
            children: [(0, D.jsx)(ye.s6, {
              children: (0, D.jsx)(Cs, {
                children: s
              })
            }), t]
          })
        }),
        Ls = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, o) {
          const {
            containerRef: n
          } = (0, k.useContext)(js);
          (() => {
            const {
              contextSafe: e
            } = (0, qt.L)(), {
              toggleControls: t
            } = (0, k.useContext)(Ps), {
              containerRef: r,
              zoomPanRef: o,
              overlayRef: n,
              controlsRef: a,
              slide: s
            } = (0, k.useContext)(js), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (At.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...nr
              }), At.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...nr
              }), At.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...nr
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || At.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...nr
              }))
            }), d = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (At.os.to([o.current], {
                ...s.getCurrentTransform(),
                ...nr
              }), At.os.to([n.current], {
                opacity: s.getOverlayOpacity(),
                ...nr
              }), At.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...nr
              })))
            }), c = (0, k.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, ve.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Ht.NH)({
              onWheel: l,
              onDrag: i,
              onPinch: d
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
          const a = (0, ve.UP)(n, o),
            s = (0, L.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, D.jsx)("div", {
            ref: a,
            ...s,
            children: (0, D.jsxs)(Ts, {
              children: [(0, D.jsx)(Es, {}), t]
            })
          })
        }),
        Ts = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, o) {
          const {
            zoomPanRef: n
          } = (0, k.useContext)(js), a = (0, ve.UP)(n, o), s = (0, L.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? ye.DX : "div";
          return (0, D.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Es = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, o) {
          const {
            placeholderRef: n
          } = (0, k.useContext)(js), a = (0, ve.UP)(n, o), s = (0, L.v6)(r, {
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
        Vs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, o) {
          const {
            imageRef: n
          } = (0, k.useContext)(js), a = (0, ve.UP)(n, o), s = (0, L.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? ye.DX : "img";
          return (0, D.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ms = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, o) {
          const {
            captionRef: n
          } = (0, k.useContext)(js), a = (0, ve.UP)(n, o), s = (0, L.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? ye.DX : "p";
          return (0, D.jsx)(ws, {
            asChild: !0,
            children: (0, D.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        As = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, o) {
          const {
            controlsRef: n
          } = (0, k.useContext)(js);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: o,
              close: n
            } = (0, k.useContext)(Ps);
            (0, Wt.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Wt.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Wt.vC)("r", o, {
              enabled: e,
              preventDefault: !0
            }), (0, Wt.vC)("esc", n, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, ve.UP)(n, o),
            s = (0, L.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? ye.DX : "div";
          return (0, D.jsx)(Wt.Hb, {
            children: (0, D.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        qs = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: o,
          ...n
        }) => {
          if (!r) return (0, D.jsx)(D.Fragment, {
            children: o
          });
          const a = (0, L.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, n);
          return (0, D.jsxs)(On, {
            delayDuration: 0,
            children: [(0, D.jsx)(Pn, {
              children: o
            }), (0, D.jsxs)(Sn, {
              ...a,
              children: [(0, D.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, D.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, D.jsx)(Rn, {})]
            })]
          })
        },
        Hs = (0, k.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, L.v6)(e, {
            isInline: !0
          });
          return (0, D.jsx)(xr, {
            ref: t,
            ...r
          })
        }),
        Fs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: o,
          ...n
        }, a) {
          const s = (0, sr.tz)(),
            {
              zoomRef: i
            } = (0, k.useContext)(js),
            {
              canZoomIn: l,
              zoomIn: d,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: v,
              zoomTo: y
            } = (() => {
              const {
                slide: e
              } = (0, k.useContext)(js), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: o
              } = (0, k.useContext)(Ps), [n, a] = (0, k.useState)(!1), [s, i] = (0, k.useState)(!1), [l, d] = (0, k.useState)(0), [c, u] = (0, k.useState)(0), [f, p] = (0, k.useState)(0), v = (0, k.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), d(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), y = (0, k.useCallback)(([e]) => {
                o(e / 100)
              }, [o]);
              return (0, k.useEffect)(() => (e.addEventListener("zoom", v), () => {
                e.removeEventListener("zoom", v)
              }), [v]), {
                zoomTo: y,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: n,
                canZoomOut: s,
                zoomProgress: l,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            h = (0, ve.UP)(i, a),
            b = (0, L.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            m = t ? ye.DX : "div";
          return (0, D.jsxs)(m, {
            ref: h,
            ...b,
            children: [(0, D.jsx)(qs, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Cr.ZoomInButtonLabel),
              metadata: s.formatMessage(Cr.ZoomInButtonTooltip, {
                shortcut: (0, D.jsx)(Hs, {
                  shortcut: "+"
                })
              }),
              children: (0, D.jsx)(rt, {
                label: s.formatMessage(Cr.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: rr({
                  position: "top"
                }),
                onPress: d,
                isDisabled: !l
              })
            }), (0, D.jsxs)(na, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, D.jsx)(ca, {
                className: "foundry_1a74xwbu",
                children: (0, D.jsx)(fa, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, D.jsx)(qs, {
                side: "left",
                enabled: r,
                content: s.formatMessage(Cr.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, D.jsx)(ma, {
                  className: "foundry_1a74xwbw",
                  children: (0, D.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, D.jsx)(qs, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Cr.ZoomOutButtonLabel),
              metadata: s.formatMessage(Cr.ZoomOutButtonTooltip, {
                shortcut: (0, D.jsx)(Hs, {
                  shortcut: "-"
                })
              }),
              children: (0, D.jsx)(rt, {
                label: s.formatMessage(Cr.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: rr({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, D.jsx)(ye.xV, {
              children: o
            })]
          })
        }),
        Bs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...o
        }, n) {
          const a = (0, sr.tz)(),
            {
              closeRef: s
            } = (0, k.useContext)(js),
            i = (0, ve.UP)(s, n),
            l = (0, L.v6)(o, {
              "data-testid": e,
              className: tr({
                styled: !t
              })
            }),
            d = t ? (0, D.jsx)(ye.DX, {
              ref: i,
              ...l
            }) : (0, D.jsx)(rt, {
              ref: i,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(Cr.CloseButtonLabel)
            });
          return (0, D.jsx)(qs, {
            side: "right",
            enabled: r,
            content: a.formatMessage(Cr.CloseButtonLabel),
            metadata: a.formatMessage(Cr.CloseButtonTooltip, {
              shortcut: (0, D.jsx)(Hs, {
                shortcut: "Esc"
              })
            }),
            children: (0, D.jsx)(xs, {
              asChild: !0,
              children: d
            })
          })
        }),
        Xs = (0, k.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, o) {
          const n = (0, sr.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, k.useContext)(js), {
                contextSafe: r
              } = (0, qt.L)(), {
                resetZoom: o
              } = (0, k.useContext)(Ps), [n, a] = (0, k.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                At.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...nr
                })
              }), i = (0, k.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
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
            } = (0, k.useContext)(js),
            i = (0, ve.UP)(s, o),
            l = (0, L.v6)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, D.jsx)(qs, {
            side: "left",
            enabled: t,
            content: n.formatMessage(Cr.ResetZoomButtonLabel),
            metadata: n.formatMessage(Cr.ResetZoomButtonTooltip, {
              shortcut: (0, D.jsx)(Hs, {
                shortcut: "R"
              })
            }),
            children: (0, D.jsx)(rt, {
              ref: i,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: n.formatMessage(Cr.ResetZoomButtonLabel)
            })
          })
        }),
        Zs = (0, k.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, o) {
          const n = (0, sr.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, k.useContext)(js),
            i = (0, ve.UP)(a, o),
            l = (0, L.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, D.jsx)(qs, {
            side: "left",
            enabled: t,
            content: n.formatMessage(Cr.DownloadButtonTooltip),
            children: (0, D.jsx)(rt, {
              ref: i,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: n.formatMessage(Cr.DownloadButtonTooltip),
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
        Gs = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Ks = r(63368);

      function Ws(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Us(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Ys(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Us(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Ws(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Us(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $s(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Qs = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Js = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Ys(Ys({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Qs(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $s(e.variantClassNames, e => $s(e, e => e.split(" ")[0]))
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
        ei = r(47725),
        ti = {};
      r.r(ti), r.d(ti, {
        Activity: () => ei.Il,
        ArrowDown: () => ei.yd,
        ArrowLeft: () => ei.nk,
        ArrowRight: () => ei.Qp,
        ArrowRightLeft: () => ei.nF,
        ArrowUp: () => ei.Do,
        ArrowUpDown: () => ei.hD,
        Book: () => ei.E3,
        Bookmark: () => ei.Xh,
        BookmarkFilled: () => ei.dA,
        Bug: () => ei.zP,
        BugOff: () => ei.k_,
        Calendar: () => ei.Vv,
        CalendarOff: () => ei.is,
        Car: () => ei.TH,
        CarSide: () => ei.cY,
        ChartSpline: () => ei.m3,
        Check: () => ei.Jl,
        ChevronDown: () => ei.yQ,
        ChevronFirst: () => ei.mf,
        ChevronLast: () => ei.Ou,
        ChevronLeft: () => ei.JG,
        ChevronRight: () => ei.c_,
        ChevronUp: () => ei.rX,
        ChevronsDownUp: () => ei.WE,
        ChevronsLeftRight: () => ei.UQ,
        ChevronsUpDown: () => ei.Ml,
        Circle: () => ei.jl,
        CircleCheck: () => ei.rW,
        CircleCheckFilled: () => ei.Dw,
        CircleDollarSign: () => ei.OJ,
        CircleHelp: () => ei.YC,
        CircleMinus: () => ei.ZX,
        CircleMinusFilled: () => ei.r0,
        CirclePerson: () => ei.q_,
        CircleSlash: () => ei.o6,
        CircleX: () => ei.RT,
        Clipboard: () => ei.B0,
        Clock: () => ei.zD,
        CloudAlert: () => ei.K4,
        CloudDownload: () => ei.MQ,
        CloudUpload: () => ei.bK,
        CodeXml: () => ei.bv,
        Copy: () => ei.QR,
        Cpu: () => ei.fX,
        CreditCard: () => ei.y5,
        Database: () => ei.Wm,
        Discord: () => ei.bY,
        DollarSign: () => ei.G9,
        Download: () => ei.f5,
        EllipsisVertical: () => ei.Yb,
        Envelope: () => ei.Lh,
        EnvelopeOpen: () => ei.jd,
        EpicGames: () => ei.fk,
        ExternalLink: () => ei.Gr,
        Eye: () => ei.kU,
        EyeClosed: () => ei.Cz,
        EyeOff: () => ei.X_,
        Facebook: () => ei.f1,
        FastForward: () => ei.Ej,
        FileText: () => ei.iU,
        Files: () => ei.sv,
        Filter: () => ei.dJ,
        Flag: () => ei.lN,
        FlagOff: () => ei.Ih,
        Gear: () => ei.OB,
        Globe: () => ei.qz,
        Handshake: () => ei.g6,
        Headset: () => ei.BC,
        Heart: () => ei.B1,
        HeartPulse: () => ei.iY,
        House: () => ei.tT,
        Image: () => ei._V,
        Info: () => ei.R2,
        Instagram: () => ei.pd,
        LayoutGrid: () => ei.D6,
        Lightbulb: () => ei.g5,
        Link: () => ei.N_,
        List: () => ei.B8,
        ListFilter: () => ei.xt,
        ListMusic: () => ei.w7,
        LockKeyhole: () => ei.NT,
        LockPassword: () => ei.HI,
        LogOut: () => ei.nU,
        MapPin: () => ei.sD,
        Maximize: () => ei.hz,
        Maximize2: () => ei.h1,
        Menu: () => ei.W1,
        MessageSquareText: () => ei.AJ,
        Mic: () => ei.GO,
        MicFilled: () => ei.cX,
        Minimize: () => ei.Xj,
        Minimize2: () => ei.xq,
        Minus: () => ei.Hs,
        Monitor: () => ei.VA,
        Moon: () => ei.AX,
        NintendoSwitch: () => ei.Su,
        PaperPlane: () => ei.d8,
        Paperclip: () => ei.xv,
        PartialCircle: () => ei.IM,
        Pause: () => ei.vR,
        Pencil: () => ei.gH,
        PencilOff: () => ei.hE,
        Person: () => ei._A,
        PersonBlock: () => ei.hs,
        PersonMinus: () => ei._E,
        PersonPlus: () => ei.c1,
        Pin: () => ei.yU,
        PinFilled: () => ei.IF,
        Play: () => ei.jG,
        Playstation: () => ei.p6,
        Plus: () => ei.FW,
        Power: () => ei.aJ,
        Property: () => ei.mA,
        Reddit: () => ei.TZ,
        RefreshCcw: () => ei.PM,
        RefreshCw: () => ei.e9,
        RefreshCwOff: () => ei.X0,
        Replay: () => ei.eJ,
        Rewind: () => ei.Y8,
        Save: () => ei.eM,
        Search: () => ei.vj,
        Server: () => ei.gq,
        Share: () => ei.SY,
        ShieldAlert: () => ei.yZ,
        ShieldCheck: () => ei.ox,
        ShoppingBag: () => ei.Nw,
        SkipBack: () => ei.L9,
        SkipForward: () => ei.xP,
        Star: () => ei.FE,
        StarOff: () => ei.UM,
        Steam: () => ei.Rv,
        Stop: () => ei.VG,
        Store: () => ei.il,
        Sun: () => ei.bd,
        ThumbsDown: () => ei.z9,
        ThumbsUp: () => ei.tw,
        Tiktok: () => ei.Tc,
        Trash: () => ei.lM,
        TriangleAlert: () => ei.lW,
        Trophy: () => ei.Xs,
        Truck: () => ei.No,
        Twitch: () => ei.YA,
        Twitter: () => ei.KK,
        TwoPeople: () => ei.LM,
        Undo: () => ei.Vn,
        Unlink: () => ei.c2,
        Upload: () => ei._O,
        UserCouple: () => ei.Cn,
        UserGroup: () => ei.zr,
        Volume: () => ei.fS,
        Volume1: () => ei.c6,
        Volume2: () => ei.jI,
        VolumeX: () => ei.XL,
        Wallet: () => ei.uW,
        Weapon: () => ei.Re,
        Wifi: () => ei.MJ,
        WifiOff: () => ei.RQ,
        Wrench: () => ei.pi,
        X: () => ei.X,
        Xbox: () => ei.ms,
        Youtube: () => ei.k,
        ZoomIn: () => ei.$Z,
        ZoomOut: () => ei.en
      });
      const ri = (0, k.createContext)(null);

      function oi() {
        const e = (0, k.useContext)(ri);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const ni = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: o = "",
          errorId: n = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const l = (0, L.v6)({
              className: Js({
                status: a
              }),
              "data-testid": t
            }, s),
            d = r ? ye.DX : "div";
          return (0, D.jsx)(ri.Provider, {
            value: {
              descriptionId: o,
              errorId: n,
              status: a,
              ...s
            },
            children: (0, D.jsx)(d, {
              ...l,
              ref: i,
              children: e
            })
          })
        }),
        ai = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, o) => {
          const {
            status: n
          } = oi(), a = (0, L.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: ei.Jl,
            invalid: ei.X,
            neutral: ei.lW
          }, i = t ? ye.DX : s[n];
          return (0, D.jsx)(i, {
            ref: o,
            ...a
          })
        }),
        si = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            errorId: s
          } = oi(), i = (0, L.v6)({
            "data-testid": t,
            id: s || a
          }, o), l = r ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        });
      var ii = Object.defineProperty,
        li = (e, t) => ii(e, "name", {
          value: t,
          configurable: !0
        });

      function di(e, t) {
        return k.useReducer((e, r) => t[e][r] ?? e, e)
      }
      li(di, "useStateMachine");
      var ci = "ScrollArea",
        [ui, fi] = (0, Sr.A)(ci),
        [pi, vi] = ui(ci),
        yi = k.forwardRef(li(function(e, t) {
          const {
            __scopeScrollArea: r,
            type: o = "hover",
            dir: n,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, l] = k.useState(null), [d, c] = k.useState(null), [u, f] = k.useState(null), [p, v] = k.useState(null), [y, h] = k.useState(null), [b, m] = k.useState(0), [g, C] = k.useState(0), [w, x] = k.useState(!1), [_, j] = k.useState(!1), O = (0, Pr.s)(t, l), P = (0, kn.jH)(n);
          return (0, D.jsx)(pi, {
            scope: r,
            type: o,
            dir: P,
            scrollHideDelay: a,
            scrollArea: i,
            viewport: d,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: v,
            scrollbarXEnabled: w,
            onScrollbarXEnabledChange: x,
            scrollbarY: y,
            onScrollbarYChange: h,
            scrollbarYEnabled: _,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: m,
            onCornerHeightChange: C,
            children: (0, D.jsx)(Rr.sG.div, {
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
        }, "ScrollArea")),
        hi = k.forwardRef(li(function(e, t) {
          const {
            __scopeScrollArea: r,
            children: o,
            nonce: n,
            ...a
          } = e, s = vi("ScrollAreaViewport", r), i = k.useRef(null), l = (0, Pr.s)(t, i, s.onViewportChange);
          return (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)(bi, {
              nonce: n
            }), (0, D.jsx)(Rr.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: l,
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
                children: o
              })
            })]
          })
        }, "ScrollAreaViewport")),
        bi = k.memo(li(function({
          nonce: e
        }) {
          return (0, D.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: e
          })
        }, "ScrollAreaViewportStyle"), (e, t) => e.nonce === t.nonce),
        mi = "ScrollAreaScrollbar",
        gi = k.forwardRef(li(function(e, t) {
          const {
            forceMount: r,
            ...o
          } = e, n = vi(mi, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = n, i = "horizontal" === e.orientation;
          return k.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === n.type ? (0, D.jsx)(Ci, {
            ...o,
            ref: t,
            forceMount: r
          }) : "scroll" === n.type ? (0, D.jsx)(wi, {
            ...o,
            ref: t,
            forceMount: r
          }) : "auto" === n.type ? (0, D.jsx)(xi, {
            ...o,
            ref: t,
            forceMount: r
          }) : "always" === n.type ? (0, D.jsx)(_i, {
            ...o,
            ref: t,
            "data-state": "visible"
          }) : null
        }, "ScrollAreaScrollbar")),
        Ci = k.forwardRef(li(function(e, t) {
          const {
            forceMount: r,
            ...o
          } = e, n = vi(mi, e.__scopeScrollArea), [a, s] = k.useState(!1);
          return k.useEffect(() => {
            const e = n.scrollArea;
            let t = 0;
            if (e) {
              const r = li(() => {
                  window.clearTimeout(t), s(!0)
                }, "handlePointerEnter"),
                o = li(() => {
                  t = window.setTimeout(() => s(!1), n.scrollHideDelay)
                }, "handlePointerLeave");
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", o), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", o)
              }
            }
          }, [n.scrollArea, n.scrollHideDelay]), (0, D.jsx)(Do, {
            present: r || a,
            children: (0, D.jsx)(xi, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarHover")),
        wi = k.forwardRef(li(function(e, t) {
          const {
            forceMount: r,
            ...o
          } = e, n = vi(mi, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = Bi(() => l("SCROLL_END"), 100), [i, l] = di("hidden", {
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
              const e = window.setTimeout(() => l("HIDE"), n.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, n.scrollHideDelay, l]), k.useEffect(() => {
            const e = n.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const o = li(() => {
                const o = e[t];
                r !== o && (l("SCROLL"), s()), r = o
              }, "handleScroll");
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }
          }, [n.viewport, a, l, s]), (0, D.jsx)(Do, {
            present: r || "hidden" !== i,
            children: (0, D.jsx)(_i, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...o,
              ref: t,
              onPointerEnter: (0, Or.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, Or.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }, "ScrollAreaScrollbarScroll")),
        xi = k.forwardRef(li(function(e, t) {
          const r = vi(mi, e.__scopeScrollArea),
            {
              forceMount: o,
              ...n
            } = e,
            [a, s] = k.useState(!1),
            i = "horizontal" === e.orientation,
            l = Bi(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return Xi(r.viewport, l), Xi(r.content, l), (0, D.jsx)(Do, {
            present: o || a,
            children: (0, D.jsx)(_i, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarAuto")),
        _i = k.forwardRef(li(function(e, t) {
          const {
            orientation: r = "vertical",
            ...o
          } = e, n = vi(mi, e.__scopeScrollArea), a = k.useRef(null), s = k.useRef(0), [i, l] = k.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = Ei(i.viewport, i.content), c = {
            ...o,
            sizes: i,
            onSizesChange: l,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: li(e => a.current = e, "onThumbChange"),
            onThumbPointerUp: li(() => s.current = 0, "onThumbPointerUp"),
            onThumbPointerDown: li(e => s.current = e, "onThumbPointerDown")
          };

          function u(e, t) {
            return Mi(e, s.current, i, t)
          }
          return li(u, "getScrollPosition"), "horizontal" === r ? (0, D.jsx)(ji, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = Ai(n.viewport.scrollLeft, i, n.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              n.viewport && (n.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              n.viewport && (n.viewport.scrollLeft = u(e, n.dir))
            }
          }) : "vertical" === r ? (0, D.jsx)(Oi, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (n.viewport && a.current) {
                const e = Ai(n.viewport.scrollTop, i);
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
        }, "ScrollAreaScrollbarVisible")),
        ji = k.forwardRef(li(function(e, t) {
          const {
            sizes: r,
            onSizesChange: o,
            ...n
          } = e, a = vi(mi, e.__scopeScrollArea), [s, i] = k.useState(), l = k.useRef(null), d = (0, Pr.s)(t, l, a.onScrollbarXChange);
          return k.useEffect(() => {
            l.current && i(getComputedStyle(l.current))
          }, [l]), (0, D.jsx)(Ri, {
            "data-orientation": "horizontal",
            ...n,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Vi(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const o = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(o), Hi(o, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && s && o({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Ti(s.paddingLeft),
                  paddingEnd: Ti(s.paddingRight)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarX")),
        Oi = k.forwardRef(li(function(e, t) {
          const {
            sizes: r,
            onSizesChange: o,
            ...n
          } = e, a = vi(mi, e.__scopeScrollArea), [s, i] = k.useState(), l = k.useRef(null), d = (0, Pr.s)(t, l, a.onScrollbarYChange);
          return k.useEffect(() => {
            l.current && i(getComputedStyle(l.current))
          }, [l]), (0, D.jsx)(Ri, {
            "data-orientation": "vertical",
            ...n,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Vi(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const o = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(o), Hi(o, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && s && o({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Ti(s.paddingTop),
                  paddingEnd: Ti(s.paddingBottom)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarY")),
        [Pi, Si] = ui(mi),
        Ri = k.forwardRef(li(function(e, t) {
          const {
            __scopeScrollArea: r,
            sizes: o,
            hasThumb: n,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: i,
            onThumbPositionChange: l,
            onDragScroll: d,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = vi(mi, r), [v, y] = k.useState(null), h = (0, Pr.s)(t, y), b = k.useRef(null), m = k.useRef(""), g = p.viewport, C = o.content - o.viewport, w = (0, Dr.c)(c), x = (0, Dr.c)(l), _ = Bi(u, 10);

          function j(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                r = e.clientY - b.current.top;
              d({
                x: t,
                y: r
              })
            }
          }
          return li(j, "handleDragScroll"), k.useEffect(() => {
            const e = li(e => {
              const t = e.target,
                r = v?.contains(t);
              r && w(e, C)
            }, "handleWheel");
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, v, C, w]), k.useEffect(x, [o, x]), Xi(v, _), Xi(p.content, _), (0, D.jsx)(Pi, {
            scope: r,
            scrollbar: v,
            hasThumb: n,
            onThumbChange: (0, Dr.c)(a),
            onThumbPointerUp: (0, Dr.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, Dr.c)(i),
            children: (0, D.jsx)(Rr.sG.div, {
              ...f,
              ref: h,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, Or.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = v.getBoundingClientRect(), m.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, Or.mK)(e.onPointerMove, j),
              onPointerUp: (0, Or.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = m.current, p.viewport && (p.viewport.style.scrollBehavior = ""), b.current = null
              })
            })
          })
        }, "ScrollAreaScrollbarImpl")),
        Di = "ScrollAreaThumb",
        Ni = k.forwardRef(li(function(e, t) {
          const {
            forceMount: r,
            ...o
          } = e, n = Si(Di, e.__scopeScrollArea);
          return (0, D.jsx)(Do, {
            present: r || n.hasThumb,
            children: (0, D.jsx)(ki, {
              ref: t,
              ...o
            })
          })
        }, "ScrollAreaThumb")),
        ki = k.forwardRef(li(function(e, t) {
          const {
            __scopeScrollArea: r,
            style: o,
            ...n
          } = e, a = vi(Di, r), s = Si(Di, r), {
            onThumbPositionChange: i
          } = s, l = (0, Pr.s)(t, s.onThumbChange), d = k.useRef(void 0), c = Bi(() => {
            d.current && (d.current(), d.current = void 0)
          }, 100);
          return k.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = li(() => {
                if (c(), !d.current) {
                  const t = Fi(e, i);
                  d.current = t, i()
                }
              }, "handleScroll");
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, D.jsx)(Rr.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...n,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: (0, Or.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                o = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: o
              })
            }),
            onPointerUp: (0, Or.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        }, "ScrollAreaThumbImpl")),
        Ii = "ScrollAreaCorner",
        zi = k.forwardRef(li(function(e, t) {
          const r = vi(Ii, e.__scopeScrollArea),
            o = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && o ? (0, D.jsx)(Li, {
            ...e,
            ref: t
          }) : null
        }, "ScrollAreaCorner")),
        Li = k.forwardRef(li(function(e, t) {
          const {
            __scopeScrollArea: r,
            ...o
          } = e, n = vi(Ii, r), [a, s] = k.useState(0), [i, l] = k.useState(0), d = Boolean(a && i), {
            onCornerWidthChange: c,
            onCornerHeightChange: u
          } = n;
          return Xi(n.scrollbarX, () => {
            const e = n.scrollbarX?.offsetHeight || 0;
            n.onCornerHeightChange(e), l(e)
          }), Xi(n.scrollbarY, () => {
            const e = n.scrollbarY?.offsetWidth || 0;
            n.onCornerWidthChange(e), s(e)
          }), k.useEffect(() => () => {
            c(0), u(0)
          }, [c, u]), d ? (0, D.jsx)(Rr.sG.div, {
            ...o,
            ref: t,
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
        }, "ScrollAreaCornerImpl"));

      function Ti(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Ei(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Vi(e) {
        const t = Ei(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          o = (e.scrollbar.size - r) * t;
        return Math.max(o, 18)
      }

      function Mi(e, t, r, o = "ltr") {
        const n = Vi(r),
          a = t || n / 2,
          s = n - a,
          i = r.scrollbar.paddingStart + a,
          l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
          d = r.content - r.viewport;
        return qi([i, l], "ltr" === o ? [0, d] : [-1 * d, 0])(e)
      }

      function Ai(e, t, r = "ltr") {
        const o = Vi(t),
          n = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - n,
          s = t.content - t.viewport,
          i = a - o,
          l = "ltr" === r ? [0, s] : [-1 * s, 0],
          d = (0, Nn.q)(e, l);
        return qi([0, s], [0, i])(d)
      }

      function qi(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const o = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + o * (r - e[0])
        }
      }

      function Hi(e, t) {
        return e > 0 && e < t
      }
      li(Ti, "toInt"), li(Ei, "getThumbRatio"), li(Vi, "getThumbSize"), li(Mi, "getScrollPositionFromPointer"), li(Ai, "getThumbOffsetFromScroll"), li(qi, "linearScale"), li(Hi, "isScrollingWithinScrollbarBounds");
      var Fi = li((e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          o = 0;
        return li(function n() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = r.left !== a.left,
            i = r.top !== a.top;
          (s || i) && t(), r = a, o = window.requestAnimationFrame(n)
        }, "loop")(), () => window.cancelAnimationFrame(o)
      }, "addUnlinkedScrollListener");

      function Bi(e, t) {
        const r = (0, Dr.c)(e),
          o = k.useRef(0);
        return k.useEffect(() => () => window.clearTimeout(o.current), []), k.useCallback(() => {
          window.clearTimeout(o.current), o.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Xi(e, t) {
        const r = (0, Dr.c)(t);
        (0, $r.N)(() => {
          let t = 0;
          if (e) {
            const o = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            });
            return o.observe(e), () => {
              window.cancelAnimationFrame(t), o.unobserve(e)
            }
          }
        }, [e, r])
      }
      li(Bi, "useDebounceCallback"), li(Xi, "useResizeObserver");
      var Zi = yi,
        Gi = hi,
        Ki = gi,
        Wi = Ni,
        Ui = zi,
        Yi = Object.defineProperty,
        $i = (e, t) => Yi(e, "name", {
          value: t,
          configurable: !0
        }),
        Qi = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Ji = [" ", "Enter"],
        el = "Select",
        [tl, rl, ol] = Tn(el),
        [nl, al] = (0, Sr.A)(el, [ol, oo]),
        sl = oo(),
        [il, ll] = nl(el),
        [dl, cl] = nl(el);

      function ul(e) {
        const {
          __scopeSelect: t,
          children: r,
          open: o,
          defaultOpen: n,
          onOpenChange: a,
          value: s,
          defaultValue: i,
          onValueChange: l,
          dir: d,
          name: c,
          autoComplete: u,
          disabled: f,
          required: p,
          form: v,
          internal_do_not_use_render: y
        } = e, h = sl(t), [b, m] = k.useState(null), [g, C] = k.useState(null), [w, x] = k.useState(!1), _ = (0, kn.jH)(d), [j, O] = (0, Eo.i)({
          prop: o,
          defaultProp: n ?? !1,
          onChange: a,
          caller: el
        }), [P, S] = (0, Eo.i)({
          prop: s,
          defaultProp: i,
          onChange: l,
          caller: el
        }), R = k.useRef(null), N = k.useRef(P);
        k.useEffect(() => {
          const e = v ? b?.ownerDocument.getElementById(v) : b?.form;
          if (e instanceof HTMLFormElement) {
            const t = $i(() => S(N.current), "reset");
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [v, b, S]);
        const I = !b || !!v || !!b.closest("form"),
          [z, L] = k.useState(new Set),
          T = (0, Xr.B)(),
          E = Array.from(z).map(e => e.props.value).join(";"),
          V = k.useCallback(e => {
            L(t => new Set(t).add(e))
          }, []),
          M = k.useCallback(e => {
            L(t => {
              const r = new Set(t);
              return r.delete(e), r
            })
          }, []),
          A = {
            required: p,
            trigger: b,
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
        return (0, D.jsx)(mo, {
          ...h,
          children: (0, D.jsx)(il, {
            scope: t,
            ...A,
            children: (0, D.jsx)(tl.Provider, {
              scope: t,
              children: (0, D.jsx)(dl, {
                scope: t,
                onNativeOptionAdd: V,
                onNativeOptionRemove: M,
                children: Fl(y) ? y(A) : r
              })
            })
          })
        })
      }
      $i(ul, "SelectProvider");
      var fl = $i(e => {
          const {
            __scopeSelect: t,
            children: r,
            ...o
          } = e;
          return (0, D.jsx)(ul, {
            __scopeSelect: t,
            ...o,
            internal_do_not_use_render: ({
              isFormControl: e
            }) => (0, D.jsxs)(D.Fragment, {
              children: [r, e ? (0, D.jsx)(Hl, {
                __scopeSelect: t
              }) : null]
            })
          })
        }, "Select"),
        pl = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            disabled: o = !1,
            ...n
          } = e, a = sl(r), s = ll("SelectTrigger", r), i = s.disabled || o, l = (0, Pr.s)(t, s.onTriggerChange), d = rl(r), c = k.useRef("touch"), [u, f, p] = Xl(e => {
            const t = d().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              o = Zl(t, e, r);
            void 0 !== o && s.onValueChange(o.value)
          }), v = $i(e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          }, "handleOpen");
          return (0, D.jsx)(go, {
            asChild: !0,
            ...a,
            children: (0, D.jsx)(Rr.sG.button, {
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
              "data-placeholder": Bl(s.value) ? "" : void 0,
              ...n,
              ref: l,
              onClick: (0, Or.mK)(n.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, Or.mK)(n.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, Or.mK)(n.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Qi.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        }, "SelectTrigger")),
        vl = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            className: o,
            style: n,
            children: a,
            placeholder: s = "",
            ...i
          } = e, l = ll("SelectValue", r), {
            onValueNodeHasChildrenChange: d
          } = l, c = void 0 !== a, u = (0, Pr.s)(t, l.onValueNodeChange);
          (0, $r.N)(() => {
            d(c)
          }, [d, c]);
          const f = Bl(l.value);
          return (0, D.jsx)(Rr.sG.span, {
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
        yl = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            children: o,
            ...n
          } = e;
          return (0, D.jsx)(Rr.sG.span, {
            "aria-hidden": !0,
            ...n,
            ref: t,
            children: o || "▼"
          })
        }, "SelectIcon")),
        [hl, bl] = nl("SelectPortal", {
          forceMount: void 0
        }),
        ml = $i(e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...o
          } = e;
          return (0, D.jsx)(hl, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, D.jsx)(Oo, {
              asChild: !0,
              ...o
            })
          })
        }, "SelectPortal"),
        gl = "SelectContent",
        Cl = k.forwardRef($i(function(e, t) {
          const r = bl(gl, e.__scopeSelect),
            {
              forceMount: o = r.forceMount,
              ...n
            } = e,
            a = ll(gl, e.__scopeSelect),
            [s, i] = k.useState();
          return (0, $r.N)(() => {
            i(new DocumentFragment)
          }, []), (0, D.jsx)(Do, {
            present: o || a.open,
            children: ({
              present: e
            }) => e ? (0, D.jsx)(Pl, {
              ...n,
              ref: t
            }) : (0, D.jsx)(wl, {
              ...n,
              fragment: s
            })
          })
        }, "SelectContent")),
        wl = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            children: o,
            fragment: n
          } = e;
          return n ? xo.createPortal((0, D.jsx)(_l, {
            scope: r,
            children: (0, D.jsx)(tl.Slot, {
              scope: r,
              children: (0, D.jsx)("div", {
                ref: t,
                children: o
              })
            })
          }), n) : null
        }, "SelectContentFragment")),
        xl = 10,
        [_l, jl] = nl(gl),
        Ol = (0, To.TL)("SelectContent.RemoveScroll"),
        Pl = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r
          } = e, {
            position: o = "item-aligned",
            onCloseAutoFocus: n,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: i,
            sideOffset: l,
            align: d,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: y,
            avoidCollisions: h,
            ...b
          } = e, m = ll(gl, r), [g, C] = k.useState(null), [w, x] = k.useState(null), _ = (0, Pr.s)(t, C), [j, O] = k.useState(null), [P, S] = k.useState(null), R = rl(r), [N, I] = k.useState(!1), z = k.useRef(!1);
          k.useEffect(() => {
            if (g) return (0, $a.Eq)(g)
          }, [g]), (0, Ua.Oh)();
          const L = k.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [o] = r.slice(-1), n = document.activeElement;
              for (const r of e) {
                if (r === n) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === o && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== n) return
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
              const t = $i(t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (V.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (V.current?.y ?? 0))
                  }
                }, "handlePointerMove"),
                r = $i(r => {
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
            const e = $i(() => E(!1), "close");
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [E]);
          const [M, A] = Xl(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              o = Zl(t, e, r);
            o && setTimeout(() => o.ref.current?.focus())
          }), q = k.useCallback((e, t, r) => {
            const o = !z.current && !r;
            (void 0 !== m.value && m.value === t || o) && (O(e), o && (z.current = !0))
          }, [m.value]), H = k.useCallback(() => g?.focus(), [g]), F = k.useCallback((e, t, r) => {
            const o = !z.current && !r;
            (void 0 !== m.value && m.value === t || o) && S(e)
          }, [m.value]), B = "popper" === o ? Rl : Sl, X = B === Rl ? {
            side: i,
            sideOffset: l,
            align: d,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: y,
            avoidCollisions: h
          } : {};
          return (0, D.jsx)(_l, {
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
            position: o,
            isPositioned: N,
            searchRef: M,
            children: (0, D.jsx)(Ya.A, {
              as: Ol,
              allowPinchZoom: !0,
              children: (0, D.jsx)(Va, {
                asChild: !0,
                trapped: m.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, Or.mK)(n, e => {
                  m.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, D.jsx)(Lr, {
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
                    ...b,
                    ...X,
                    onPlaced: () => I(!0),
                    ref: _,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, Or.mK)(b.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            o = r.indexOf(t);
                          r = r.slice(o + 1)
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
        Sl = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            onPlaced: o,
            ...n
          } = e, a = ll(gl, r), s = jl(gl, r), [i, l] = k.useState(null), [d, c] = k.useState(null), u = (0, Pr.s)(t, c), f = rl(r), p = k.useRef(!1), v = k.useRef(!0), {
            viewport: y,
            selectedItem: h,
            selectedItemText: b,
            focusSelectedItem: m
          } = s, g = k.useCallback(() => {
            if (a.trigger && a.valueNode && i && d && y && h && b) {
              const e = a.trigger.getBoundingClientRect(),
                t = d.getBoundingClientRect(),
                r = a.valueNode.getBoundingClientRect(),
                n = b.getBoundingClientRect();
              if ("rtl" !== a.dir) {
                const o = n.left - t.left,
                  a = r.left - o,
                  s = e.left - a,
                  l = e.width + s,
                  d = Math.max(l, t.width),
                  c = window.innerWidth - xl,
                  u = (0, Nn.q)(a, [xl, Math.max(xl, c - d)]);
                i.style.minWidth = l + "px", i.style.left = u + "px"
              } else {
                const o = t.right - n.right,
                  a = window.innerWidth - r.right - o,
                  s = window.innerWidth - e.right - a,
                  l = e.width + s,
                  d = Math.max(l, t.width),
                  c = window.innerWidth - xl,
                  u = (0, Nn.q)(a, [xl, Math.max(xl, c - d)]);
                i.style.minWidth = l + "px", i.style.right = u + "px"
              }
              const s = f(),
                l = window.innerHeight - 2 * xl,
                c = y.scrollHeight,
                u = window.getComputedStyle(d),
                v = parseInt(u.borderTopWidth, 10),
                m = parseInt(u.paddingTop, 10),
                g = parseInt(u.borderBottomWidth, 10),
                C = v + m + c + parseInt(u.paddingBottom, 10) + g,
                w = Math.min(5 * h.offsetHeight, C),
                x = window.getComputedStyle(y),
                _ = parseInt(x.paddingTop, 10),
                j = parseInt(x.paddingBottom, 10),
                O = e.top + e.height / 2 - xl,
                P = l - O,
                S = h.offsetHeight / 2,
                R = v + m + (h.offsetTop + S),
                D = C - R;
              if (R <= O) {
                const e = s.length > 0 && h === s[s.length - 1].ref.current;
                i.style.bottom = "0px";
                const t = d.clientHeight - y.offsetTop - y.offsetHeight,
                  r = R + Math.max(P, S + (e ? j : 0) + t + g);
                i.style.height = r + "px"
              } else {
                const e = s.length > 0 && h === s[0].ref.current;
                i.style.top = "0px";
                const t = Math.max(O, v + y.offsetTop + (e ? _ : 0) + S) + D;
                i.style.height = t + "px", y.scrollTop = R - O + y.offsetTop
              }
              i.style.margin = `${xl}px 0`, i.style.minHeight = w + "px", i.style.maxHeight = l + "px", o?.(), requestAnimationFrame(() => p.current = !0)
            }
          }, [f, a.trigger, a.valueNode, i, d, y, h, b, a.dir, o]);
          (0, $r.N)(() => g(), [g]);
          const [C, w] = k.useState();
          (0, $r.N)(() => {
            d && w(window.getComputedStyle(d).zIndex)
          }, [d]);
          const x = k.useCallback(e => {
            e && !0 === v.current && (g(), m?.(), v.current = !1)
          }, [g, m]);
          return (0, D.jsx)(Dl, {
            scope: r,
            contentWrapper: i,
            shouldExpandOnScrollRef: p,
            onScrollButtonChange: x,
            children: (0, D.jsx)("div", {
              ref: l,
              style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: C
              },
              children: (0, D.jsx)(Rr.sG.div, {
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
        }, "SelectItemAlignedPosition")),
        Rl = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            align: o = "start",
            collisionPadding: n = xl,
            ...a
          } = e, s = sl(r);
          return (0, D.jsx)(Co, {
            ...s,
            ...a,
            ref: t,
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
        }, "SelectPopperPosition")),
        [Dl, Nl] = nl(gl, {}),
        kl = "SelectViewport",
        Il = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            nonce: o,
            ...n
          } = e, a = jl(kl, r), s = Nl(kl, r), i = (0, Pr.s)(t, a.onViewportChange), l = k.useRef(0);
          return (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, D.jsx)(tl.Slot, {
              scope: r,
              children: (0, D.jsx)(Rr.sG.div, {
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
                onScroll: (0, Or.mK)(n.onScroll, e => {
                  const t = e.currentTarget,
                    {
                      contentWrapper: r,
                      shouldExpandOnScrollRef: o
                    } = s;
                  if (o?.current && r) {
                    const e = Math.abs(l.current - t.scrollTop);
                    if (e > 0) {
                      const o = window.innerHeight - 2 * xl,
                        n = parseFloat(r.style.minHeight),
                        a = parseFloat(r.style.height),
                        s = Math.max(n, a);
                      if (s < o) {
                        const n = s + e,
                          a = Math.min(o, n),
                          i = n - a;
                        r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                      }
                    }
                  }
                  l.current = t.scrollTop
                })
              })
            })]
          })
        }, "SelectViewport")),
        [zl, Ll] = nl("SelectGroup"),
        Tl = "SelectItem",
        [El, Vl] = nl(Tl),
        Ml = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            value: o,
            disabled: n = !1,
            textValue: a,
            ...s
          } = e, i = ll(Tl, r), l = jl(Tl, r), d = i.value === o, [c, u] = k.useState(a ?? ""), [f, p] = k.useState(!1), v = (0, Dr.c)(e => l.itemRefCallback?.(e, o, n)), y = (0, Pr.s)(t, v), h = (0, Xr.B)(), b = k.useRef("touch"), m = $i(() => {
            n || (i.onValueChange(o), i.onOpenChange(!1))
          }, "handleSelect");
          return (0, D.jsx)(El, {
            scope: r,
            value: o,
            disabled: n,
            textId: h,
            isSelected: d,
            onItemTextChange: k.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, D.jsx)(tl.ItemSlot, {
              scope: r,
              value: o,
              disabled: n,
              textValue: c,
              children: (0, D.jsx)(Rr.sG.div, {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": d && f,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": n || void 0,
                "data-disabled": n ? "" : void 0,
                tabIndex: n ? void 0 : -1,
                ...s,
                ref: y,
                onFocus: (0, Or.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, Or.mK)(s.onBlur, () => p(!1)),
                onClick: (0, Or.mK)(s.onClick, () => {
                  "mouse" !== b.current && m()
                }),
                onPointerUp: (0, Or.mK)(s.onPointerUp, () => {
                  "mouse" === b.current && m()
                }),
                onPointerDown: (0, Or.mK)(s.onPointerDown, e => {
                  b.current = e.pointerType
                }),
                onPointerMove: (0, Or.mK)(s.onPointerMove, e => {
                  b.current = e.pointerType, n ? l.onItemLeave?.() : "mouse" === b.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, Or.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, Or.mK)(s.onKeyDown, e => {
                  n || e.target !== e.currentTarget || "" !== l.searchRef?.current && " " === e.key || (Ji.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        }, "SelectItem")),
        Al = "SelectItemText",
        ql = k.forwardRef($i(function(e, t) {
          const {
            __scopeSelect: r,
            className: o,
            style: n,
            ...a
          } = e, s = ll(Al, r), i = jl(Al, r), l = Vl(Al, r), d = cl(Al, r), [c, u] = k.useState(null), f = (0, Dr.c)(e => i.itemTextRefCallback?.(e, l.value, l.disabled)), p = (0, Pr.s)(t, u, l.onItemTextChange, f), v = c?.textContent, y = k.useMemo(() => (0, D.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: v
          }, l.value), [l.disabled, l.value, v]), {
            onNativeOptionAdd: h,
            onNativeOptionRemove: b
          } = d;
          return (0, $r.N)(() => (h(y), () => b(y)), [h, b, y]), (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)(Rr.sG.span, {
              id: l.textId,
              ...a,
              ref: p
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren && !Bl(s.value) ? xo.createPortal(a.children, s.valueNode) : null]
          })
        }, "SelectItemText")),
        Hl = k.forwardRef($i(function({
          __scopeSelect: e,
          ...t
        }, r) {
          const o = ll("SelectBubbleInput", e),
            {
              value: n,
              onValueChange: a,
              required: s,
              disabled: i,
              name: l,
              autoComplete: d,
              form: c
            } = o,
            {
              nativeOptions: u,
              nativeSelectKey: f
            } = o,
            p = k.useRef(null),
            v = (0, Pr.s)(r, p),
            y = n ?? "",
            h = (0, In.Z)(y),
            b = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return k.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (h !== y && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, y), e.dispatchEvent(t)
            }
          }, [h, y]), (0, D.jsxs)(Rr.sG.select, {
            "aria-hidden": !0,
            required: s,
            tabIndex: -1,
            name: l,
            autoComplete: d,
            disabled: i,
            form: c,
            onChange: e => a(e.target.value),
            ...t,
            style: {
              ...Vo.Qg,
              ...t.style
            },
            ref: v,
            defaultValue: y,
            children: [Bl(n) && !b ? (0, D.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        }, "SelectBubbleInput"));

      function Fl(e) {
        return "function" == typeof e
      }

      function Bl(e) {
        return "" === e || void 0 === e
      }

      function Xl(e) {
        const t = (0, Dr.c)(e),
          r = k.useRef(""),
          o = k.useRef(0),
          n = k.useCallback(e => {
            const n = r.current + e;
            t(n), $i(function e(t) {
              r.current = t, window.clearTimeout(o.current), "" !== t && (o.current = window.setTimeout(() => e(""), 1e3))
            }, "updateSearch")(n)
          }, [t]),
          a = k.useCallback(() => {
            r.current = "", window.clearTimeout(o.current)
          }, []);
        return k.useEffect(() => () => window.clearTimeout(o.current), []), [r, n, a]
      }

      function Zl(e, t, r) {
        const o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          n = r ? e.indexOf(r) : -1;
        let a = Gl(e, Math.max(n, 0));
        1 === o.length && (a = a.filter(e => e !== r));
        const s = a.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
        return s !== r ? s : void 0
      }

      function Gl(e, t) {
        return e.map((r, o) => e[(t + o) % e.length])
      }

      function Kl(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Wl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Ul(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wl(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Kl(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Yl(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      $i(Fl, "isFunction"), $i(Bl, "shouldShowPlaceholder"), $i(Xl, "useTypeaheadSearch"), $i(Zl, "findNextItem"), $i(Gl, "wrapArray");
      var $l = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Ql = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Ul(Ul({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) $l(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yl(e.variantClassNames, e => Yl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Jl = Ql({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ed = Ql({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        td = Ql({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rd = Ql({
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
        od = Ql({
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
        nd = Ql({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ad = (0, k.createContext)(null);

      function sd() {
        const e = (0, k.useContext)(ad);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const id = (0, k.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: o,
          isReadOnly: n,
          defaultValue: a,
          onValueChange: s,
          name: i,
          value: l,
          defaultOpen: d,
          onOpenChange: c,
          isOpen: u,
          size: f = "MD",
          status: p = "neutral",
          ...v
        }, y) => {
          const h = (0, k.useRef)(null),
            b = (0, ve.UP)(h, y),
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
              defaultProp: d,
              onChange: c
            }),
            N = (0, L.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, v);
          return (0, D.jsx)(ad.Provider, {
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
              value: l,
              isOpen: S,
              setIsOpen: R,
              defaultOpen: d,
              onOpenChange: c,
              isRequired: r,
              isDisabled: o,
              isReadOnly: n,
              status: p,
              size: f
            },
            children: (0, D.jsx)(fl, {
              required: r,
              disabled: o,
              open: S,
              onOpenChange: () => R(!n && !S),
              value: l,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, D.jsx)("div", {
                ref: b,
                ...N,
                children: e
              })
            })
          })
        }),
        ld = (0, k.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const {
            popoverId: a
          } = sd(), s = (0, L.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Jl({
              hideDividers: e
            }),
            "data-testid": r
          }, o);
          return (0, D.jsx)(Cl, {
            ...s,
            ref: n,
            children: (0, D.jsx)(Il, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        dd = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e
          }, t);
          return (0, D.jsx)(Il, {
            ref: r,
            ...o
          })
        }),
        cd = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, D.jsxs)(Zi, {
            ...n,
            ref: o,
            children: [(0, D.jsx)(dd, {
              asChild: !0,
              children: (0, D.jsx)(Gi, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, D.jsx)(Ki, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, D.jsx)(Wi, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        ud = (0, k.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": o,
          asChild: n,
          ...a
        }, s) => {
          const {
            isReadOnly: i,
            status: l,
            isDisabled: d,
            labelId: c,
            hintId: u,
            triggerId: f,
            popoverId: p,
            descriptionId: v,
            labelRef: y,
            descriptionRef: h,
            hintRef: b,
            isOpen: m,
            size: g
          } = sd(), {
            isPressed: C,
            pressProps: w
          } = (0, Ks.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [x, _] = (0, k.useState)(!1), [j, O] = (0, k.useState)(!1);
          (0, k.useEffect)(() => {
            _(!!y.current || !!b.current), O(!!h.current)
          }, []);
          const P = (0, L.v6)({
              id: f,
              className: od({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === l,
                isPressed: !!C,
                isDisabled: !!d
              }),
              "aria-labelledby": x ? (0, L.VW)(r, c, u) : r,
              "aria-describedby": j ? (0, L.VW)(o, v) : o,
              "aria-controls": p,
              "aria-invalid": "invalid" === l,
              "data-state": m ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!C
            }, (0, L.cJ)(w, "onKeyDown"), a),
            S = n ? ye.DX : pl;
          return (0, D.jsx)(S, {
            ...P,
            ref: s,
            children: e
          })
        }),
        fd = (0, k.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, o),
            s = t ? ye.DX : "span";
          return (0, D.jsx)(s, {
            ...a,
            ref: n,
            children: (0, D.jsx)(vl, {
              placeholder: e
            })
          })
        }),
        pd = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, o) => {
          const {
            isDisabled: n,
            isReadOnly: a,
            isOpen: s
          } = sd(), i = s ? Le.rX : Le.yQ, l = (0, L.v6)({
            asChild: !0,
            className: nd({
              isDisabled: a || n
            }),
            "data-testid": t
          }, r);
          return (0, D.jsx)(yl, {
            ...l,
            ref: o,
            children: e || (0, D.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        vd = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: o = !1,
          hideRequiredAsterisk: n = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            isDisabled: l,
            labelId: d,
            labelRef: c,
            triggerId: u
          } = sd(), f = i && !n, p = (0, ve.UP)(c, s), v = (0, L.v6)({
            id: a.id || d,
            htmlFor: u,
            "data-testid": e,
            className: rd({
              showAsterisk: f,
              isDisabled: l
            })
          }, a), y = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: o,
            children: (0, D.jsx)(y, {
              ...v,
              ref: p,
              children: r
            })
          })
        }),
        yd = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = sd(), l = (0, ve.UP)(i, n), d = (0, L.v6)({
            className: ed({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, o), c = r ? ye.DX : "div";
          return (0, D.jsx)(c, {
            ...d,
            ref: l,
            children: e
          })
        }),
        hd = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = sd(), l = (0, ve.UP)(s, n), d = (0, L.v6)({
            className: td({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, o), c = t ? ye.DX : "div";
          return (0, D.jsx)(c, {
            ...d,
            ref: l,
            children: e
          })
        }),
        bd = (0, k.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: o,
          ...n
        }, a) => {
          const s = (0, k.useRef)(null),
            i = (0, ve.UP)(s, a),
            l = (0, L.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": o
            }, n);
          return (0, D.jsx)(Ml, {
            ref: i,
            ...l,
            children: e
          })
        }),
        md = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, D.jsx)(ql, {
            ref: o,
            asChild: !0,
            children: (0, D.jsx)("span", {
              ...n,
              children: e
            })
          })
        }),
        gd = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, D.jsx)(yl, {
            asChild: !0,
            ...n,
            ref: o,
            children: e
          })
        }),
        Cd = ml,
        wd = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = sd(), i = (0, L.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, o), l = r ? ye.DX : ni;
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        }),
        xd = ai,
        _d = si;
      var jd = r(35053),
        Od = r(34439);

      function Pd(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Sd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Rd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sd(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Pd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dd(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Nd = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        kd = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Rd(Rd({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Nd(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dd(e.variantClassNames, e => Dd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Id = kd({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zd = kd({
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
        Ld = kd({
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
        Td = kd({
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
        Ed = kd({
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
      const Vd = (0, k.createContext)(null);

      function Md() {
        const e = (0, k.useContext)(Vd);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Ad = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: o,
          children: n,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, l) => {
          const d = (0, L.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = o ? ye.DX : "div",
            u = (0, k.useId)(),
            f = (0, k.useId)(),
            p = (0, k.useId)();
          return (0, D.jsx)(Vd.Provider, {
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
              ...d,
              ref: l,
              children: n
            })
          })
        }),
        qd = (0, k.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": o,
          "aria-describedby": n,
          id: a,
          isSelected: s,
          defaultSelected: i,
          onSelectedChange: l,
          name: d,
          value: c,
          ...u
        }, f) => {
          const p = (0, k.useRef)(null),
            v = (0, ve.UP)(p, f),
            {
              size: y,
              appearance: h,
              inputId: b,
              labelId: m,
              descriptionId: g,
              isDisabled: C,
              isReadOnly: w
            } = Md(),
            x = (0, Od.H)({
              isDisabled: C,
              isReadOnly: w,
              isSelected: s,
              defaultSelected: i,
              onChange: l
            }),
            {
              inputProps: _
            } = (0, jd.K)({
              id: a || b,
              "aria-labelledby": (0, L.VW)(o, m),
              "aria-describedby": (0, L.VW)(n, g),
              name: d,
              value: c,
              isDisabled: C,
              isReadOnly: w
            }, x, p),
            j = (0, L.v6)({
              className: Ed({
                appearance: h
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
              className: Td({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, D.jsx)("div", {
                className: zd({
                  size: y,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Hd = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            isDisabled: s,
            labelId: i,
            inputId: l,
            size: d
          } = Md(), c = (0, L.v6)({
            id: n.id || i,
            htmlFor: l,
            "data-testid": e,
            className: Ld({
              isDisabled: s,
              size: d
            })
          }, n), u = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: o,
            children: (0, D.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Fd = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Md(), i = o.id || s, l = (0, L.v6)({
            className: Id({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, o), d = t ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...l,
            ref: n,
            children: e
          })
        });
      var Bd = r(53681);
      const Xd = ({
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
        Zd = ({
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
        Gd = ({
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
        Kd = ({
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
        Wd = ({
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
        Ud = ({
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

      function Yd(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function $d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Qd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $d(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Yd(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $d(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jd(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var ec = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        tc = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Qd(Qd({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ec(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jd(e.variantClassNames, e => Jd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rc = tc({
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
        oc = tc({
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
        nc = tc({
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
        ac = tc({
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
        sc = tc({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ic = tc({
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
      const lc = (0, k.createContext)(null);

      function dc() {
        const e = (0, k.useContext)(lc);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const cc = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: o,
          children: n,
          ...a
        }, s) => {
          const i = (0, L.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, L.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = o ? ye.DX : "div",
            d = (0, k.useId)(),
            c = (0, k.useId)(),
            u = (0, k.useId)();
          return (0, D.jsx)(lc.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, D.jsx)(l, {
              ...i,
              ref: s,
              children: n
            })
          })
        }),
        uc = (0, k.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: o,
          name: n,
          onPress: a,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": d,
          "aria-labelledby": c,
          className: u,
          ...f
        }, p) => {
          const {
            size: v,
            appearance: y,
            isIndeterminate: h,
            isRequired: b,
            descriptionId: m,
            labelId: g,
            inputId: C,
            ...w
          } = dc(), x = (0, k.useRef)(null), _ = f.id || C, {
            isPressed: j,
            pressProps: O
          } = (0, Ks.d)({
            ref: x
          }), {
            setSelected: P,
            toggle: S,
            ...R
          } = (0, Od.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: o
          }), {
            inputProps: N,
            isSelected: I,
            isDisabled: z,
            isReadOnly: T
          } = (0, Bd.v)({
            "aria-label": "",
            id: _,
            name: n,
            ...w
          }, {
            ...R,
            toggle: S,
            setSelected: w.isReadOnly ? () => !1 : P
          }, x), E = (0, L.v6)({
            className: oc({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || z || T || S()
            }
          }, O, f), V = (0, L.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, L.VW)(c, g),
            "aria-describedby": (0, L.VW)(l, m),
            "aria-errormessage": (0, L.VW)(d, w.isInvalid ? m : void 0),
            "aria-required": b,
            required: b
          }, N), M = h ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, D.jsxs)("div", {
            ...E,
            children: [(0, D.jsx)(ye.s6, {
              children: (0, D.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, D.jsx)("div", {
              className: (0, ze.clsx)(rc({
                size: v,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": h ? "mixed" : I ? "checked" : "unchecked",
              "data-disabled": z || T,
              "data-testid": e,
              "data-pressed": j,
              children: (0, D.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (I || h) && (0, D.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        fc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: o = !1,
          hideRequiredAsterisk: n,
          ...a
        }, s) => {
          const {
            size: i,
            labelId: l,
            inputId: d,
            isRequired: c
          } = dc(), u = a.id || l, f = c && !n, p = (0, L.v6)({
            className: ic({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || d
          }, a), v = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: o,
            children: (0, D.jsx)(v, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        pc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = dc(), i = o.id || s, l = (0, L.v6)({
            className: nc({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, o), d = t ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...l,
            ref: n,
            children: e
          })
        }),
        vc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = dc(), s = o.id || a, i = (0, L.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: s
          }, o), l = t ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        }),
        yc = (0, k.createContext)(null);

      function hc() {
        const e = (0, k.useContext)(yc);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const bc = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: o = "MD",
          isRequired: n = !1,
          ...a
        }, s) => {
          const [i, l] = (0, k.useState)(null), [d, c] = (0, k.useState)(null), u = [i, d].filter(Boolean).join(" "), f = (0, L.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = t ? ye.DX : "fieldset";
          return (0, D.jsx)(yc.Provider, {
            value: {
              size: o,
              isRequired: n,
              descriptionId: i,
              errorTextId: d,
              setDescriptionId: l,
              setErrorTextId: c
            },
            children: (0, D.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        mc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: o = "optional",
          hideVisually: n = !1,
          hideRequiredAsterisk: a,
          ...s
        }, i) => {
          const {
            isRequired: l
          } = hc(), d = l && !a, c = (0, L.v6)({
            "data-testid": r,
            className: sc({
              showAsterisk: d
            })
          }, s), u = t ? ye.DX : "legend";
          return (0, D.jsx)(ye.s6, {
            enabled: n,
            children: (0, D.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, D.jsx)(ye.xV, {
                children: e
              }), !l && (0, D.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", o, ")"]
              })]
            })
          })
        }),
        gc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const {
            setDescriptionId: a
          } = hc(), s = (0, k.useId)(), i = o.id || s;
          (0, k.useEffect)(() => {
            a(i)
          }, [a, i]);
          const l = (0, L.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, o),
            d = t ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ...l,
            ref: n,
            children: e
          })
        }),
        Cc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const {
            size: a
          } = hc(), s = (0, L.v6)({
            "data-testid": r,
            className: ac({
              size: a
            })
          }, o), i = t ? ye.DX : "div";
          return (0, D.jsx)(i, {
            ...s,
            ref: n,
            children: e
          })
        }),
        wc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const {
            setErrorTextId: a
          } = hc(), s = (0, k.useId)(), i = o.id || s;
          (0, k.useEffect)(() => {
            a(i)
          }, [a, i]);
          const l = (0, L.v6)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, o),
            d = Le.X,
            c = t ? ye.DX : "div";
          return (0, D.jsxs)(c, {
            ...l,
            ref: n,
            children: [(0, D.jsx)(d, {
              label: "",
              size: "SM"
            }), (0, D.jsx)(ye.xV, {
              children: e
            })]
          })
        });

      function xc(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function _c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function jc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _c(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = xc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _c(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Oc(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Pc = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Sc = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = jc(jc({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Pc(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Oc(e.variantClassNames, e => Oc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Rc = Sc({
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
        Dc = Sc({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Nc = Sc({
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
        kc = Sc({
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
      const Ic = (0, k.createContext)(null);

      function zc() {
        const e = (0, k.useContext)(Ic);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Lc = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, l) => {
          const d = (0, L.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? ye.DX : "div",
            u = (0, k.useId)(),
            f = (0, k.useId)(),
            p = (0, k.useId)(),
            v = (0, k.useId)();
          return (0, D.jsx)(Ic.Provider, {
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
            children: (0, D.jsx)(c, {
              ref: l,
              ...d,
              children: t
            })
          })
        }),
        Tc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: o = !1,
          hideRequiredAsterisk: n = !1,
          ...a
        }, s) => {
          const {
            labelId: i,
            inputId: l,
            isDisabled: d,
            isRequired: c
          } = zc(), u = (0, L.v6)({
            className: Nc({
              isDisabled: d,
              showAsterisk: c && !n
            }),
            "data-testid": r,
            id: i,
            htmlFor: l
          }, a), f = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: o,
            children: (0, D.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        Ec = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: o = 5,
          defaultValue: n,
          name: a,
          placeholder: s = " ",
          "aria-labelledby": i,
          "aria-describedby": l,
          ...d
        }, c) => {
          const {
            descriptionId: u,
            labelId: f,
            inputId: p,
            hintId: v,
            isDisabled: y,
            isRequired: h,
            isReadOnly: b,
            status: m
          } = zc(), g = (0, k.useRef)(null), C = (0, ve.UP)(g, c), w = (0, L.v6)({
            className: kc({
              isInvalid: "invalid" === m,
              isDisabled: y,
              isReadOnly: b,
              isSuccess: "success" === m
            }),
            name: a,
            id: d.id || p,
            rows: o,
            defaultValue: n,
            disabled: y,
            required: h,
            readOnly: b,
            placeholder: s,
            "aria-labelledby": (0, L.VW)(d.id, f, v, i),
            "aria-describedby": (0, L.VW)(u, l),
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
            ...h && {
              "aria-required": !0
            }
          }, d), x = e ? ye.DX : "textarea";
          return (0, D.jsx)(x, {
            ref: C,
            ...w,
            children: t
          })
        }),
        Vc = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = zc(), i = (0, L.v6)({
            className: Rc({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, o), l = r ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Mc = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const {
            hintId: a,
            isDisabled: s
          } = zc(), i = (0, L.v6)({
            className: Dc({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, o), l = t ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Ac = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = zc(), i = (0, L.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, o), l = r ? ye.DX : ni;
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        }),
        qc = ai,
        Hc = si;
      var Fc = r(22718),
        Bc = r(61720);

      function Xc(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Zc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Gc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zc(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Xc(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kc(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Wc = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Uc = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Gc(Gc({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Wc(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kc(e.variantClassNames, e => Kc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Yc = Uc({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        $c = Uc({
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
      const Qc = (0, k.createContext)(null);

      function Jc() {
        const e = (0, k.useContext)(Qc);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const eu = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: o,
          testId: n,
          asChild: a,
          "aria-labelledby": s,
          "aria-describedby": i,
          "aria-errormessage": l,
          status: d = "neutral",
          ...c
        }, u) => {
          const f = (0, k.useRef)(null),
            p = (0, ve.UP)(f, u),
            v = (0, k.useId)(),
            y = (0, k.useId)(),
            h = (0, k.useId)(),
            b = (0, Fc.Z)({
              ...c,
              isInvalid: "invalid" === d
            }),
            {
              radioGroupProps: m
            } = (0, Bc.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, L.VW)(v, s),
              "aria-describedby": (0, L.VW)(y, h, i),
              "aria-errormessage": (0, L.VW)(h, l)
            }, b),
            g = (0, L.v6)({
              className: "foundry_njguqn0"
            }, m, (0, L.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            C = a ? ye.DX : "div";
          return (0, D.jsx)(Qc.Provider, {
            value: {
              state: b,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: y,
              labelId: v,
              errorId: h,
              status: d,
              ...c
            },
            children: (0, D.jsx)(C, {
              ref: p,
              "data-testid": n,
              ...g,
              children: o
            })
          })
        }),
        tu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...o
        }, n) => {
          const {
            size: a,
            orientation: s
          } = Jc(), i = (0, L.v6)({
            "data-testid": e,
            className: $c({
              size: a,
              orientation: s
            })
          }, o), l = t ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: r
          })
        }),
        ru = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: o = !1,
          hideRequiredAsterisk: n = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            labelId: l
          } = Jc(), d = i && !n, c = (0, L.v6)({
            id: a.id || l,
            "data-testid": e,
            className: Yc({
              showAsterisk: d
            })
          }, a), u = t ? ye.DX : "div";
          return (0, D.jsx)(ye.s6, {
            enabled: o,
            children: (0, D.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        ou = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...o
        }, n) => {
          const {
            descriptionId: a
          } = Jc(), s = (0, L.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, o), i = t ? ye.DX : "div";
          return (0, D.jsx)(i, {
            ...s,
            ref: n,
            children: r
          })
        }),
        nu = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...o
        }, n) => {
          const {
            errorId: a,
            status: s
          } = Jc(), i = (0, L.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, o), l = r ? ye.DX : ni;
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        }),
        au = ai,
        su = si;
      var iu = r(7471),
        lu = Uc({
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
        du = Uc({
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
        cu = Uc({
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
        uu = Uc({
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
      const fu = ({
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
        pu = ({
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
        vu = ({
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
        yu = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, o),
            s = e ? ye.DX : "label";
          return (0, D.jsx)(s, {
            ref: n,
            ...a,
            children: t
          })
        }),
        hu = (0, k.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, o) => {
          const n = (0, k.useRef)(null),
            a = (0, ve.UP)(n, o),
            s = (0, k.useId)(),
            {
              state: i,
              appearance: l,
              size: d,
              isReadOnly: u,
              isRequired: f
            } = Jc(),
            {
              isPressed: p,
              pressProps: v
            } = (0, Ks.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, iu.z)({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, n),
            h = y.checked,
            b = y.disabled || i?.isReadOnly,
            m = (0, L.v6)(y, {
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
            }, r),
            g = c[`Dot${d}`];
          return (0, D.jsxs)("div", {
            className: uu({
              size: d
            }),
            children: [(0, D.jsx)(ye.s6, {
              children: (0, D.jsx)("input", {
                type: "radio",
                ...m,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, D.jsx)("div", {
              className: cu({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": h ? "checked" : "unchecked",
              "data-disabled": b,
              "data-pressed": p,
              ...v,
              children: (0, D.jsx)("span", {
                className: "foundry_1pfduet9",
                children: h && (0, D.jsx)(g, {})
              })
            })]
          })
        }),
        bu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: o = !1,
          ...n
        }, a) => {
          const {
            size: s,
            state: i
          } = Jc(), l = (0, k.useId)(), d = (0, L.v6)({
            id: l,
            "data-testid": e,
            className: du({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, n), c = t ? ye.DX : "div";
          return (0, D.jsx)(ye.s6, {
            enabled: o,
            children: (0, D.jsx)(c, {
              ...d,
              ref: a,
              children: r
            })
          })
        }),
        mu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = Jc(), s = (0, L.v6)({
            "data-testid": e,
            className: lu({
              isDisabled: a
            })
          }, o), i = t ? ye.DX : "span";
          return (0, D.jsx)(i, {
            ref: n,
            ...s,
            children: r
          })
        });
      var gu = r(58900);

      function Cu(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function wu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function xu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wu(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Cu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function _u(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var ju = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Ou = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = xu(xu({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ju(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _u(e.variantClassNames, e => _u(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Pu = Ou({
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
        Su = Ou({
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
        Ru = Ou({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Du = Ou({
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
        Nu = Ou({
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
        ku = Ou({
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
      const Iu = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        zu = (0, k.createContext)(null);

      function Lu() {
        const e = (0, k.useContext)(zu);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Tu = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: o = !1,
          isReadOnly: n = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, l) => {
          const [d, c] = (0, k.useState)("text"), u = `${(0,k.useId)()}-label`, f = `${(0,k.useId)()}-input`, p = `${(0,k.useId)()}-description`, v = (0, k.useRef)(null), y = (0, k.useRef)(Iu), h = (0, L.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), b = e ? ye.DX : "div";
          return (0, D.jsx)(zu.Provider, {
            value: {
              isDisabled: o,
              isReadOnly: n,
              isRequired: a,
              status: s,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: d,
              setType: c,
              inputRef: v,
              focusState: y,
              ...i
            },
            children: (0, D.jsx)(b, {
              ref: l,
              ...h,
              children: t
            })
          })
        }),
        Eu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: o = !1,
          hideRequiredAsterisk: n,
          ...a
        }, s) => {
          const {
            isDisabled: i,
            isRequired: l,
            inputId: d,
            labelId: c
          } = Lu(), u = l && !n, f = (0, L.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || d,
            "data-testid": e,
            className: ku({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = t ? ye.DX : "label";
          return (0, D.jsx)(ye.s6, {
            enabled: o,
            children: (0, D.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        Vu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...o
        }, n) => {
          const {
            isDisabled: a
          } = Lu(), s = (0, L.v6)({
            "data-testid": e,
            className: Ru({
              isDisabled: a
            })
          }, o), i = t ? ye.DX : "span";
          return (0, D.jsx)(i, {
            ref: n,
            ...s,
            children: r
          })
        }),
        Mu = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = Lu(), l = (0, L.v6)({
            "data-testid": e,
            className: (0, ze.clsx)(Pu({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, o), d = t ? ye.DX : "div";
          return (0, D.jsx)(d, {
            ref: n,
            ...l,
            children: r
          })
        }),
        Au = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: o,
          showMask: n = !0,
          track: a,
          placeholder: s = " ",
          "aria-labelledby": i,
          "aria-describedby": l,
          type: d = "text",
          ...c
        }, u) => {
          const {
            isDisabled: f,
            isReadOnly: p,
            isRequired: v,
            status: y,
            labelId: h,
            inputId: b,
            descriptionId: m,
            setType: g,
            type: C,
            inputRef: w,
            focusState: x
          } = Lu();
          (0, k.useEffect)(() => g(d), []);
          const _ = "invalid" === y,
            j = (0, L.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: b,
              type: C,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, L.VW)(h, i),
              "aria-describedby": (0, L.VW)(m, l),
              "data-testid": e,
              className: (0, ze.clsx)(Nu({
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
            O = (0, gu.A)({
              mask: r,
              replacement: o,
              showMask: n,
              track: a
            }),
            P = (0, ve.UP)(r && o ? O : null, w, u),
            S = t ? ye.DX : "input";
          return (0, D.jsx)(S, {
            ref: P,
            ...j
          })
        }),
        qu = (0, k.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: o,
          ...n
        }, a) => {
          const {
            isDisabled: s
          } = Lu(), i = (0, L.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, ze.clsx)(Du({
              side: o,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, n), l = t ? ye.DX : Te[e];
          return (0, D.jsx)(l, {
            ref: a,
            ...i
          })
        }),
        Hu = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          icon: r,
          iconElement: o,
          label: n,
          testId: a,
          preventFocusOnPress: s = !0,
          ...i
        }, l) => {
          const d = (0, k.useRef)(null),
            c = (0, ve.UP)(d, l),
            {
              isDisabled: u
            } = Lu(),
            {
              buttonProps: f
            } = (0, ve.sL)((0, L.v6)(i, {
              isDisabled: u,
              preventFocusOnPress: s
            }), d),
            p = (0, L.v6)({
              className: (0, ze.clsx)("foundry_8oytzon foundry_8kowh41 foundry_1d5mo5m0", "foundry_8oytzo3"),
              "data-testid": a
            }, f),
            v = o || (r ? Te[r] : null),
            y = e ? ye.DX : "button";
          return (0, D.jsxs)(y, {
            ref: c,
            ...p,
            children: [v && (0, D.jsx)(v, {
              label: n || "",
              size: "LG",
              className: "foundry_8oytzoo"
            }), (0, D.jsx)(ye.xV, {
              children: t
            })]
          })
        }),
        Fu = (0, k.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, o) => {
          const {
            type: n,
            setType: a,
            inputRef: s,
            focusState: i,
            isDisabled: l
          } = Lu(), d = "password" === n, c = d ? e : t;
          (0, k.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const u = (0, L.v6)({
            label: c,
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
          return (0, D.jsxs)(On, {
            isDisabled: l,
            children: [(0, D.jsx)(Pn, {
              children: (0, D.jsx)(Hu, {
                ref: o,
                ...u
              })
            }), (0, D.jsxs)(Sn, {
              side: "bottom",
              align: "end",
              children: [c, (0, D.jsx)(Rn, {})]
            })]
          })
        }),
        Bu = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...o
        }, n) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Lu(), i = (0, L.v6)({
            className: Su({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, o), l = r ? ye.DX : "div";
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Xu = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...o
        }, n) => {
          const {
            descriptionId: a,
            status: s
          } = Lu(), i = (0, L.v6)({
            className: "foundry_8oytzo14",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, o), l = r ? ye.DX : ni;
          return (0, D.jsx)(l, {
            ...i,
            ref: n,
            children: e
          })
        }),
        Zu = ai,
        Gu = si;
      var Ku = r(909);

      function Wu(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Uu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Yu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uu(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Wu(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $u(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Qu = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Ju = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Yu(Yu({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Qu(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $u(e.variantClassNames, e => $u(e, e => e.split(" ")[0]))
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
      const ef = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        tf = (0, k.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...o
        }, n) => {
          const a = (0, k.useRef)(null),
            s = (0, ve.UP)(a, n),
            {
              buttonProps: i
            } = (0, ve.sL)(o, a),
            l = (0, L.v6)({
              "data-testid": r,
              className: Ju({
                size: t
              })
            }, i);
          return (0, D.jsx)("button", {
            ref: s,
            ...l,
            children: (0, D.jsx)(Le.X, {
              label: e,
              size: ef[t]
            })
          })
        });

      function rf(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function of(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function nf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? of(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = rf(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : of(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function af(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var sf = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        lf = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = nf(nf({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) sf(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return af(e.variantClassNames, e => af(e, e => e.split(" ")[0]))
            }
          }, t
        },
        df = lf({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cf = lf({
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
        uf = lf({
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
      const ff = (0, k.createContext)(null);

      function pf() {
        const e = (0, k.useContext)(ff);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const vf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: o,
          ...n
        }, a) => {
          const s = e ? ye.DX : "div",
            i = (0, L.v6)({
              className: uf({
                status: r,
                background: o
              })
            }, n);
          return (0, D.jsx)(ff.Provider, {
            value: {
              status: r,
              background: o
            },
            children: (0, D.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i
            })
          })
        }),
        yf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, D.jsx)(n, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        hf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, D.jsx)(n, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        bf = {
          danger: Le.RT,
          information: Le.R2,
          success: Le.rW,
          warning: Le.lW
        },
        mf = (0, k.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, o) => {
          const {
            status: n
          } = pf(), a = e ? ye.DX : bf[n], s = (0, L.v6)({
            className: cf({
              status: n,
              size: t
            }),
            size: t
          }, r);
          return (0, D.jsx)(a, {
            label: "",
            ref: o,
            ...s
          })
        }),
        gf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, D.jsx)(n, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        Cf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, D.jsx)(n, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        wf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, k.useRef)(null),
            s = (0, ve.UP)(a, n),
            i = e ? ye.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = (0, Ku.i)(o, a),
            c = (0, L.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, l);
          return (0, D.jsx)(i, {
            "data-pressed": d,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        xf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = e ? ye.DX : "div",
            s = (0, L.v6)({
              className: "foundry_1m368qhm"
            }, o);
          return (0, D.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        _f = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...o
        }, n) => {
          const a = e ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ref: n,
            "data-testid": t,
            className: (0, ze.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...o
          })
        }),
        jf = (0, k.forwardRef)((e, t) => {
          const {
            background: r
          } = pf(), o = "none" !== r, n = (0, L.v6)({
            className: df({
              hasBackground: o
            })
          }, e);
          return (0, D.jsx)(tf, {
            size: "SM",
            ref: t,
            ...n
          })
        });
      var Of = r(64634),
        Pf = r(7697),
        Sf = r(17497);
      var Rf = r(57491);

      function Df(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Nf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function kf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nf(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Df(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function If(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var zf = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Lf = "foundry_qmpv6yv",
        Tf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = kf(kf({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) zf(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return If(e.variantClassNames, e => If(e, e => e.split(" ")[0]))
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
      const Ef = (0, k.createContext)(null);

      function Vf() {
        const e = (0, k.useContext)(Ef);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Mf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: o,
          status: n,
          background: a,
          align: s = "left",
          ...i
        }, l) => {
          const d = (({
              loopPagination: e = !0
            }) => {
              const t = (0, ve.rl)(),
                r = (0, ve.jt)(),
                [o, n] = (0, k.useState)([]),
                a = o.length,
                [s, i] = (0, k.useState)(0),
                [l, d] = (0, Of.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [(0, Pf.A)(), (0, Sf.A)()]),
                c = (0, k.useRef)(0),
                u = (0, k.useRef)(!1),
                f = o[s],
                p = (0, k.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [d]),
                v = (0, k.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                y = (0, k.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    o = e.scrollProgress(),
                    n = e.slidesInView(),
                    a = "scroll" === t;
                  e.scrollSnapList().forEach((t, s) => {
                    let i = t - o;
                    r.slideRegistry[s].forEach(s => {
                      if (a && !n.includes(s)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (s === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (i = t - (1 + o)), 1 === e && (i = t + (1 - o))
                        }
                      });
                      const l = (d = 1 - Math.abs(i * c.current), Math.min(Math.max(d, 0), 1)).toString();
                      var d;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, k.useEffect)(() => {
                d && (v(d), y(d), d.on("reInit", v).on("reInit", y).on("scroll", y).on("slideFocus", y))
              }, [d, y]), (0, k.useEffect)(() => {
                d && (p(d), d.on("select", p).on("reInit", p))
              }, [d, p]), {
                setAlerts: n,
                alerts: o,
                numAlerts: a,
                emblaRef: l,
                emblaApi: d,
                prevAlert: () => d?.scrollPrev(r),
                nextAlert: () => d?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: i,
                isInitialized: u.current,
                loopPagination: e,
                canScrollNext: () => d?.canScrollNext() || !1,
                canScrollPrev: () => d?.canScrollPrev() || !1
              }
            })({
              loopPagination: o
            }),
            {
              currentAlert: c,
              isInitialized: u,
              setAlerts: f,
              numAlerts: p
            } = d;
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
            y = (0, L.v6)({
              className: Tf(c)
            }, v, i),
            h = e ? ye.DX : "div";
          return (0, D.jsx)(Ef.Provider, {
            value: d,
            children: (0, D.jsx)(h, {
              ref: l,
              "data-testid": r,
              "data-initialized": u,
              ...y,
              children: t
            })
          })
        }),
        Af = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        qf = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: o
          } = Vf();
          if (!e && !o || !o?.status) return null;
          const n = e || Af[o.status],
            a = Te[n],
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
        Hf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, D.jsx)(n, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        Ff = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: o,
          background: n,
          ...a
        }, s) => {
          const i = e ? ye.DX : "div",
            l = (0, L.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, D.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        Bf = (0, k.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, o) => {
          const {
            setAlerts: n,
            emblaRef: a,
            emblaApi: s
          } = Vf(), i = (0, L.v6)({
            className: "foundry_qmpv6ym"
          }, r), l = (0, ve.UP)(a, o), d = k.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, k.useEffect)(() => {
            d && n(d)
          }, []), s?.on("slidesChanged", () => {
            d && n(d)
          }), (0, D.jsx)("div", {
            ref: l,
            "data-testid": e,
            ...i,
            children: (0, D.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Xf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, k.useRef)(null),
            s = (0, ve.UP)(a, n),
            i = e ? ye.DX : "a",
            {
              linkProps: l,
              isPressed: d
            } = (0, Ku.i)(o, a),
            c = (0, L.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, o);
          return (0, D.jsx)(i, {
            "data-pressed": d,
            "data-testid": r,
            ref: s,
            ...l,
            ...c,
            children: t
          })
        }),
        Zf = (0, k.forwardRef)((e, t) => {
          const r = (0, L.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, D.jsx)(tf, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Gf = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...o
        }, n) => {
          const a = e ? ye.DX : "div",
            s = (0, L.v6)({
              className: "foundry_qmpv6yt"
            }, o);
          return (0, D.jsx)(a, {
            ref: n,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Kf = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: o,
            canScrollNext: n
          } = Vf(), a = (0, L.v6)({
            className: Lf
          }, t);
          return (0, D.jsx)(Rf.K, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: o,
            isDisabled: !n(),
            ...a
          })
        }),
        Wf = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: o,
            canScrollPrev: n
          } = Vf(), a = (0, L.v6)({
            className: Lf
          }, t);
          return (0, D.jsx)(Rf.K, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: o,
            isDisabled: !n(),
            ...a
          })
        }),
        Uf = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: o,
            numAlerts: n
          } = Vf(), a = (0, L.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, D.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [o + 1, "/", n]
          })
        });

      function Yf(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function $f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Qf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $f(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Yf(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $f(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jf(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var ep = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        tp = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Qf(Qf({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) ep(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jf(e.variantClassNames, e => Jf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rp = tp({
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
        op = tp({
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
        np = tp({
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
      const ap = (0, k.createContext)(null);

      function sp() {
        const e = (0, k.useContext)(ap);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const ip = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: o,
          background: n,
          color: a,
          hasBorder: s,
          isDisabled: i,
          ...l
        }, d) => {
          const c = {
              size: o,
              background: n,
              color: a,
              hasBorder: s,
              isDisabled: i
            },
            u = (0, L.v6)({
              className: op(c)
            }, l),
            f = e ? ye.DX : "div";
          return (0, D.jsx)(ap.Provider, {
            value: c,
            children: (0, D.jsx)(f, {
              ref: d,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        lp = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const {
            size: a
          } = sp(), s = e ? ye.DX : "div", i = (0, L.v6)({
            className: np({
              size: a
            })
          }, o);
          return (0, D.jsx)(s, {
            ref: n,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        dp = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const o = Te[e],
            n = (0, L.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, D.jsx)(o, {
            ref: r,
            size: "SM",
            ...n
          })
        }),
        cp = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: o,
            isDisabled: n
          } = sp(), a = (0, L.v6)({
            className: rp({
              background: o
            })
          }, t);
          return (0, D.jsx)(rt, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: n,
            ...a
          })
        });
      var up = r(34629),
        fp = Object.defineProperty,
        pp = (e, t) => fp(e, "name", {
          value: t,
          configurable: !0
        }),
        vp = "ToastProvider",
        [yp, hp, bp] = Tn("Toast"),
        [mp, gp] = (0, Sr.A)("Toast", [bp]),
        [Cp, wp] = mp(vp),
        xp = pp(e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: o = 5e3,
            swipeDirection: n = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [l, d] = k.useState(null), [c, u] = k.useState(0), f = k.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${vp}\`. Expected non-empty \`string\`.`), (0, D.jsx)(yp.Provider, {
            scope: t,
            children: (0, D.jsx)(Cp, {
              scope: t,
              label: r,
              duration: o,
              swipeDirection: n,
              swipeThreshold: a,
              toastCount: c,
              viewport: l,
              onViewportChange: d,
              onToastAdd: k.useCallback(() => u(e => e + 1), []),
              onToastRemove: k.useCallback(() => u(e => e - 1), []),
              isClosePausedRef: f,
              announcerContainer: s,
              children: i
            })
          })
        }, "ToastProvider"),
        _p = ["F8"],
        jp = "toast.viewportPause",
        Op = "toast.viewportResume",
        Pp = k.forwardRef(pp(function(e, t) {
          const {
            __scopeToast: r,
            hotkey: o = _p,
            label: n = "Notifications ({hotkey})",
            ...a
          } = e, s = wp("ToastViewport", r), i = hp(r), l = k.useRef(null), d = k.useRef(null), c = k.useRef(null), u = k.useRef(null), f = (0, Pr.s)(t, u, s.onViewportChange), p = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          k.useEffect(() => {
            const e = pp(e => {
              0 !== o.length && o.every(t => e[t] || e.code === t) && u.current?.focus()
            }, "handleKeyDown");
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [o]), k.useEffect(() => {
            const e = l.current,
              t = u.current;
            if (v && e && t) {
              const r = pp(() => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(jp);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                }, "handlePause"),
                o = pp(() => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(Op);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                }, "handleResume"),
                n = pp(t => {
                  !e.contains(t.relatedTarget) && o()
                }, "handleFocusOutResume"),
                a = pp(() => {
                  e.contains(document.activeElement) || o()
                }, "handlePointerLeaveResume");
              return e.addEventListener("focusin", r), e.addEventListener("focusout", n), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", a), window.addEventListener("blur", r), window.addEventListener("focus", o), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", n), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", r), window.removeEventListener("focus", o)
              }
            }
          }, [v, s.isClosePausedRef]);
          const y = k.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                o = [r, ...Bp(r)];
              return "forwards" === e ? o : o.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return k.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = pp(t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    o = t.shiftKey;
                  if (t.target === e && o) return void d.current?.focus();
                  const n = y({
                      tabbingDirection: o ? "backwards" : "forwards"
                    }),
                    a = n.findIndex(e => e === r);
                  Xp(n.slice(a + 1)) ? t.preventDefault() : o ? d.current?.focus() : c.current?.focus()
                }
              }, "handleKeyDown");
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, y]), (0, D.jsxs)(Br, {
            ref: l,
            role: "region",
            "aria-label": n.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, D.jsx)(Sp, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                Xp(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, D.jsx)(yp.Slot, {
              scope: r,
              children: (0, D.jsx)(Rr.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, D.jsx)(Sp, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Xp(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        }, "ToastViewport")),
        Sp = k.forwardRef(pp(function(e, t) {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: o,
            ...n
          } = e, a = wp("ToastFocusProxy", r);
          return (0, D.jsx)(Vo.s6, {
            tabIndex: 0,
            ...n,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !a.viewport?.contains(t) && o()
            }
          })
        }, "ToastFocusProxy")),
        Rp = "Toast",
        Dp = k.forwardRef(pp(function(e, t) {
          const {
            forceMount: r,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            ...s
          } = e, [i, l] = (0, Eo.i)({
            prop: o,
            defaultProp: n ?? !0,
            onChange: a,
            caller: Rp
          });
          return (0, D.jsx)(Do, {
            present: r || i,
            children: (0, D.jsx)(Ip, {
              open: i,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, Dr.c)(e.onPause),
              onResume: (0, Dr.c)(e.onResume),
              onSwipeStart: (0, Or.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, Or.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, Or.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, Or.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        }, "Toast")),
        [Np, kp] = mp(Rp, {
          onClose() {}
        }),
        Ip = k.forwardRef(pp(function(e, t) {
          const {
            __scopeToast: r,
            type: o = "foreground",
            duration: n,
            open: a,
            onClose: s,
            onEscapeKeyDown: i,
            onPause: l,
            onResume: d,
            onSwipeStart: c,
            onSwipeMove: u,
            onSwipeCancel: f,
            onSwipeEnd: p,
            ...v
          } = e, y = wp(Rp, r), h = hp(r), [b, m] = k.useState(null), g = (0, Pr.s)(t, m), C = k.useRef(null), w = k.useRef(null), x = n || y.duration, _ = k.useRef(0), j = k.useRef(x), O = k.useRef(0), {
            onToastAdd: P,
            onToastRemove: S
          } = y, R = (0, Dr.c)(() => {
            const e = b?.contains(document.activeElement);
            e && y.viewport?.focus(), s()
          }), N = k.useCallback(e => {
            e && e !== 1 / 0 && (window.clearTimeout(O.current), _.current = (new Date).getTime(), O.current = window.setTimeout(R, e))
          }, [R]);
          k.useEffect(() => {
            const e = y.viewport;
            if (e) {
              const t = pp(() => {
                  N(j.current), d?.()
                }, "handleResume"),
                r = pp(() => {
                  const e = (new Date).getTime() - _.current;
                  j.current = j.current - e, window.clearTimeout(O.current), l?.()
                }, "handlePause");
              return e.addEventListener(jp, r), e.addEventListener(Op, t), () => {
                e.removeEventListener(jp, r), e.removeEventListener(Op, t)
              }
            }
          }, [y.viewport, x, l, d, N]), k.useEffect(() => {
            a && !y.isClosePausedRef.current && N(x)
          }, [a, x, y.isClosePausedRef, N]), k.useEffect(() => () => {
            window.clearTimeout(O.current)
          }, []), k.useEffect(() => (P(), () => S()), [P, S]);
          const I = k.useMemo(() => b ? Mp(b) : null, [b]);
          return y.viewport ? (0, D.jsxs)(D.Fragment, {
            children: [I && (0, D.jsx)(zp, {
              __scopeToast: r,
              role: "status",
              "aria-live": "foreground" === o ? "assertive" : "polite",
              children: I
            }), (0, D.jsx)(Np, {
              scope: r,
              onClose: R,
              children: xo.createPortal((0, D.jsx)(yp.ItemSlot, {
                scope: r,
                children: (0, D.jsx)(Fr, {
                  asChild: !0,
                  onEscapeKeyDown: (0, Or.mK)(i, e => {
                    const t = h().some(t => t.ref.current?.contains(e.target));
                    t || R()
                  }),
                  children: (0, D.jsx)(Rr.sG.li, {
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
                    onKeyDown: (0, Or.mK)(e.onKeyDown, e => {
                      "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || R())
                    }),
                    onPointerDown: (0, Or.mK)(e.onPointerDown, e => {
                      0 === e.button && (C.current = {
                        x: e.clientX,
                        y: e.clientY
                      })
                    }),
                    onPointerMove: (0, Or.mK)(e.onPointerMove, e => {
                      if (!C.current) return;
                      const t = e.clientX - C.current.x,
                        r = e.clientY - C.current.y,
                        o = Boolean(w.current),
                        n = ["left", "right"].includes(y.swipeDirection),
                        a = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
                        s = n ? a(0, t) : 0,
                        i = n ? 0 : a(0, r),
                        l = "touch" === e.pointerType ? 10 : 2,
                        d = {
                          x: s,
                          y: i
                        },
                        f = {
                          originalEvent: e,
                          delta: d
                        };
                      o ? (w.current = d, Ap("toast.swipeMove", u, f, {
                        discrete: !1
                      })) : qp(d, y.swipeDirection, l) ? (w.current = d, Ap("toast.swipeStart", c, f, {
                        discrete: !1
                      }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (C.current = null)
                    }),
                    onPointerUp: (0, Or.mK)(e.onPointerUp, e => {
                      const t = w.current,
                        r = e.target;
                      if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, C.current = null, t) {
                        const r = e.currentTarget,
                          o = {
                            originalEvent: e,
                            delta: t
                          };
                        qp(t, y.swipeDirection, y.swipeThreshold) ? Ap("toast.swipeEnd", p, o, {
                          discrete: !0
                        }) : Ap("toast.swipeCancel", f, o, {
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
        zp = pp(e => {
          const {
            __scopeToast: t,
            children: r,
            ...o
          } = e, n = wp(Rp, t), [a, s] = k.useState(!1), [i, l] = k.useState(!1);
          return Hp(() => s(!0)), k.useEffect(() => {
            const e = window.setTimeout(() => l(!0), 1e3);
            return () => window.clearTimeout(e)
          }, []), i ? null : (0, D.jsx)(Oo, {
            asChild: !0,
            container: n.announcerContainer || void 0,
            children: (0, D.jsx)(Vo.s6, {
              ...o,
              children: a && (0, D.jsxs)(D.Fragment, {
                children: [n.label, " ", r]
              })
            })
          })
        }, "ToastAnnounce"),
        Lp = k.forwardRef(pp(function(e, t) {
          const {
            __scopeToast: r,
            ...o
          } = e;
          return (0, D.jsx)(Rr.sG.div, {
            ...o,
            ref: t
          })
        }, "ToastDescription")),
        Tp = k.forwardRef(pp(function(e, t) {
          const {
            altText: r,
            ...o
          } = e;
          return r.trim() ? (0, D.jsx)(Vp, {
            altText: r,
            asChild: !0,
            children: (0, D.jsx)(Ep, {
              ...o,
              ref: t
            })
          }) : (console.error("Invalid prop `altText` supplied to `ToastAction`. Expected non-empty `string`."), null)
        }, "ToastAction")),
        Ep = k.forwardRef(pp(function(e, t) {
          const {
            __scopeToast: r,
            ...o
          } = e, n = kp("ToastClose", r);
          return (0, D.jsx)(Vp, {
            asChild: !0,
            children: (0, D.jsx)(Rr.sG.button, {
              type: "button",
              ...o,
              ref: t,
              onClick: (0, Or.mK)(e.onClick, n.onClose)
            })
          })
        }, "ToastClose")),
        Vp = k.forwardRef(pp(function(e, t) {
          const {
            __scopeToast: r,
            altText: o,
            ...n
          } = e;
          return (0, D.jsx)(Rr.sG.div, {
            "data-radix-toast-announce-exclude": "",
            "data-radix-toast-announce-alt": o || void 0,
            ...n,
            ref: t
          })
        }, "ToastAnnounceExclude"));

      function Mp(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), Fp(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              o = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (o) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...Mp(e))
          }
        }), t
      }

      function Ap(e, t, r, {
        discrete: o
      }) {
        const n = r.originalEvent.currentTarget,
          a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && n.addEventListener(e, t, {
          once: !0
        }), o ? (0, Rr.hO)(n, a) : n.dispatchEvent(a)
      }
      pp(Mp, "getAnnounceTextContent"), pp(Ap, "handleAndDispatchCustomEvent");
      var qp = pp((e, t, r = 0) => {
        const o = Math.abs(e.x),
          n = Math.abs(e.y),
          a = o > n;
        return "left" === t || "right" === t ? a && o > r : !a && n > r
      }, "isDeltaInDirection");

      function Hp(e = () => {}) {
        const t = (0, Dr.c)(e);
        (0, $r.N)(() => {
          let e = 0,
            r = 0;
          return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
          }
        }, [t])
      }

      function Fp(e) {
        return e.nodeType === e.ELEMENT_NODE
      }

      function Bp(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: pp(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Xp(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      pp(Hp, "useNextFrame"), pp(Fp, "isHTMLElement"), pp(Bp, "getTabbableCandidates"), pp(Xp, "focusFirst");
      var Zp = xp,
        Gp = Pp,
        Kp = Dp,
        Wp = Lp,
        Up = Tp,
        Yp = Ep;

      function $p(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Qp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Jp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qp(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = $p(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ev(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var tv = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        rv = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Jp(Jp({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) tv(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ev(e.variantClassNames, e => ev(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ov = rv({
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
        nv = rv({
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
        av = rv({
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
      const sv = ({
          testId: e,
          ...t
        }) => (0, D.jsx)(Zp, {
          "data-testid": e,
          ...t
        }),
        iv = (0, k.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...o
        }, n) => {
          const a = (0, L.v6)({
            className: av({
              position: r
            })
          }, o);
          return (0, D.jsx)(Gp, {
            ref: n,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        lv = (0, k.createContext)(null);

      function dv() {
        const e = (0, k.useContext)(lv);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const cv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: o = "success",
          ...n
        }, a) => {
          const s = e ? ye.DX : Kp,
            i = (0, L.v6)({
              className: nv({
                appearance: o
              })
            }, n);
          return (0, D.jsx)(lv.Provider, {
            value: {
              appearance: o
            },
            children: (0, D.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        uv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = e ? ye.DX : Wp,
            s = (0, L.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, o);
          return (0, D.jsx)(a, {
            ref: n,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        fv = {
          danger: Le.RT,
          information: Le.R2,
          success: Le.rW,
          warning: Le.lW,
          avocado: Le.rW
        },
        pv = (0, k.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: o
          } = dv(), n = e ? ye.DX : fv[o], a = (0, L.v6)({
            className: ov({
              appearance: o
            }),
            size: "LG"
          }, t);
          return (0, D.jsx)(n, {
            ref: r,
            ...a
          })
        }),
        vv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, o);
          return (0, D.jsx)(Up, {
            ref: n,
            "data-testid": r,
            ...a,
            children: e ? (0, D.jsx)(ye.DX, {
              children: t
            }) : (0, D.jsx)(up.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        yv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: o,
          ...n
        }, a) => {
          const s = (0, L.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, n);
          return (0, D.jsx)(Yp, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, D.jsx)(ye.DX, {
              children: t
            }) : (0, D.jsx)(tf, {
              size: "SM",
              label: o
            })
          })
        });
      var hv = r(20179);

      function bv(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function mv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function gv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mv(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = bv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Cv(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var wv = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        xv = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = gv(gv({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) wv(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cv(e.variantClassNames, e => Cv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _v = xv({
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
        jv = xv({
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
        Ov = xv({
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

      function Pv() {
        const e = (0, k.useContext)(Sv);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Sv = (0, k.createContext)(null),
        Rv = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: o = "MD",
          ...n
        }, a) => {
          const s = (0, L.v6)({
              className: Ov({
                size: o
              })
            }, n),
            i = r ? ye.DX : "ol";
          return (0, D.jsx)(Sv.Provider, {
            value: {
              size: o
            },
            children: (0, D.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        Dv = (0, k.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: o,
          ...n
        }, a) => {
          const s = (0, k.useRef)(null),
            {
              size: i
            } = Pv(),
            {
              itemProps: l
            } = (0, hv.I)({
              isCurrent: e,
              children: t
            }, s),
            d = r ? ye.DX : "a",
            c = (0, L.v6)({
              className: (0, ze.clsx)(_v({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": o
            }, l, n);
          return (0, D.jsx)("li", {
            className: jv({
              size: i
            }),
            ref: a,
            children: (0, D.jsx)(d, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        Nv = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const o = Te[e];
          return (0, D.jsx)(o, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        kv = (0, k.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: o,
          ...n
        }, a) => {
          const [s, i] = (0, k.useState)(r), {
            size: l
          } = Pv(), d = (0, L.v6)({
            className: jv({
              size: l
            }),
            "data-testid": t
          }, n);
          return (0, D.jsx)("li", {
            ref: a,
            ...d,
            children: (0, D.jsxs)(fl, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, D.jsx)(pl, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": o,
                children: "..."
              }), (0, D.jsx)(ml, {
                children: (0, D.jsx)(Cl, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, D.jsx)(Il, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Iv = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const a = t ? ye.DX : Ml,
            s = (0, L.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, o);
          return (0, D.jsx)(a, {
            ref: n,
            ...s,
            children: e
          })
        });

      function zv(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Lv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Tv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lv(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = zv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ev(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Vv = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Mv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Tv(Tv({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Vv(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ev(e.variantClassNames, e => Ev(e, e => e.split(" ")[0]))
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
      const Av = (0, k.createContext)(null);

      function qv() {
        const e = (0, k.useContext)(Av);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Hv = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: o = "SM",
          type: n = "text",
          ...a
        }, s) => {
          const i = e ? ye.DX : "div",
            l = (0, L.v6)({
              className: Mv({
                appearance: r,
                type: n,
                size: o
              })
            }, a);
          return (0, D.jsx)(Av.Provider, {
            value: {
              type: n
            },
            children: (0, D.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...l
            })
          })
        }),
        Fv = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = e ? ye.DX : "div",
            a = (0, L.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, D.jsx)(n, {
            ref: o,
            ...a
          })
        }),
        Bv = (0, k.forwardRef)(({
          icon: e,
          iconElement: t,
          label: r,
          ...o
        }, n) => {
          const a = t || (e ? ti[e] : null),
            s = (0, L.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: r || ""
            }, o);
          return a && (0, D.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        Xv = () => {
          const e = (0, ve.Ub)(L.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Zv = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Gv(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Kv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Wv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Kv(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = Gv(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Uv(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Yv = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        $v = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Wv(Wv({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Yv(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uv(e.variantClassNames, e => Uv(e, e => e.split(" ")[0]))
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
      const Qv = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, D.jsx)(Zi, {
            ref: r,
            ...o
          })
        }),
        Jv = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, D.jsx)(Gi, {
            ref: r,
            ...o
          })
        }),
        ey = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, D.jsx)(Ki, {
            ref: r,
            ...o
          })
        }),
        ty = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, ve.rl)(),
            n = (0, L.v6)({
              "data-testid": e,
              className: $v({
                isTouchDevice: o
              })
            }, t);
          return (0, D.jsx)(Wi, {
            ref: r,
            ...n
          })
        }),
        ry = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e
          }, t);
          return (0, D.jsx)(Ui, {
            ref: r,
            ...o
          })
        });

      function oy(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ny(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function ay(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ny(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = oy(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sy(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var iy = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        ly = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = ay(ay({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) iy(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sy(e.variantClassNames, e => sy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        dy = ly({
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
        cy = ly({
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
      const uy = (0, k.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, k.createRef)(),
          dialogSpringRef: (0, jr.$9)(),
          overlaySpringRef: (0, jr.$9)()
        }),
        fy = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: n,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [l, d] = (0, ve.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, ve.ZC)(l);
          return (0, D.jsx)(uy.Provider, {
            value: {
              isOpen: l,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: d,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: n,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, k.useId)(),
              descriptionId: (0, k.useId)(),
              triggerRef: (0, k.useRef)(null),
              dialogSpringRef: (0, jr.U2)(),
              overlaySpringRef: (0, jr.U2)()
            },
            children: (0, D.jsx)(py, {
              ...i
            })
          })
        },
        py = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, k.useContext)(uy), o = (0, L.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, D.jsx)(as, {
            ...o
          })
        },
        vy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: o,
            triggerRef: n
          } = (0, k.useContext)(uy), a = (0, ve.UP)(n, r), s = (0, L.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": o
          }, t);
          return (0, D.jsx)(ss, {
            ...s,
            ref: a
          })
        }),
        yy = e => (0, D.jsx)(cs, {
          forceMount: !0,
          ...e
        }),
        hy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: o,
            overlaySpringRef: n,
            openImmediately: a
          } = (0, k.useContext)(uy), s = Zv(), i = (0, ve.jt)(), l = (0, jr.pn)(o, {
            ref: n,
            delay: o ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: jr.$W.stiff,
            immediate: i || a
          }), d = (0, L.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, jr.CS)(fs);
          return (0, k.useEffect)(() => {
            n.start()
          }, [o]), l((e, t) => t ? (0, D.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...d,
            style: e
          }) : null)
        }),
        by = (0, k.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: o = !1,
          ...n
        }, a) => {
          const {
            isOpen: s,
            setIsOpen: i,
            openImmediately: l,
            contentId: d,
            triggerRef: c,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: v,
            dialogSpringRef: y,
            overlaySpringRef: h
          } = (0, k.useContext)(uy), b = (0, ve.rl)(), m = (0, ve.jt)(), g = (0, k.useRef)(null), C = Xv(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: o,
            onCloseTransitionComplete: n
          }) {
            const a = Zv(),
              s = Xv(),
              i = (0, k.useRef)();
            return {
              bindDrag: (0, Ht.i3)(({
                velocity: [, l],
                offset: [, d],
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
                  }(v, c)), (!i.current || d < -70) && u(), i.current) {
                  const e = 100 * (y - d) / y;
                  r.start({
                    ...a(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (d > .5 * y || l > .5 && c > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: jr.$W.stiff,
                  onStart: o,
                  onRest: n
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: jr.$W.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: jr.$W.stiff
                }), r.start({
                  ...a(100),
                  immediate: !1,
                  config: jr.$W.stiff
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
            dialogSpringRef: y,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: v
          }), x = (0, jr.pn)(s, {
            from: C(0),
            enter: C(100),
            leave: C(0),
            delay: s ? 100 : 0,
            config: jr.$W.stiff,
            ref: y,
            immediate: m || l,
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
            j = b && !m && !o && w(),
            O = (0, L.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: d
            }, j || {}, n),
            P = (0, jr.CS)(hs);
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
        my = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, t);
          return (0, D.jsx)(Cs, {
            ref: r,
            ...o
          })
        }),
        gy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e
          }, t);
          return (0, D.jsx)(ws, {
            ref: r,
            ...o
          })
        }),
        Cy = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, D.jsxs)(Qv, {
            ref: o,
            ...n,
            children: [(0, D.jsx)(Jv, {
              className: "foundry_xov33ni",
              children: e
            }), (0, D.jsx)(ey, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, D.jsx)(ty, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        wy = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            a = e ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        xy = (0, k.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
              "data-testid": r,
              className: dy({
                align: e
              })
            }, o),
            s = t ? ye.DX : "header";
          return (0, D.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        _y = (0, k.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, o) => {
          const n = (0, L.v6)({
            "data-testid": e,
            className: cy({
              appearance: t
            })
          }, r);
          return (0, D.jsx)(Cs, {
            ref: o,
            ...n
          })
        }),
        jy = (0, k.forwardRef)((e, t) => {
          const r = (0, L.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, D.jsx)(Rf.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        Oy = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            a = t ? (0, D.jsx)(ye.DX, {
              ref: o,
              ...n
            }) : (0, D.jsx)(tf, {
              ref: o,
              ...n,
              size: "LG"
            });
          return (0, D.jsx)(xs, {
            asChild: !0,
            children: a
          })
        }),
        Py = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            a = e ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ref: o,
            ...n
          })
        }),
        Sy = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            a = e ? ye.DX : "footer";
          return (0, D.jsx)(a, {
            ref: o,
            ...n
          })
        });
      var Ry = r(76733),
        Dy = Object.defineProperty,
        Ny = (e, t) => Dy(e, "name", {
          value: t,
          configurable: !0
        }),
        ky = "Avatar",
        [Iy, zy] = (0, Sr.A)(ky),
        Ly = [0, () => {}],
        [Ty, Ey] = Iy(ky),
        Vy = k.forwardRef(Ny(function(e, t) {
          const {
            __scopeAvatar: r,
            ...o
          } = e, [n, a] = k.useState("idle"), [s, i] = Hy();
          return (0, D.jsx)(Ty, {
            scope: r,
            imageLoadingStatus: n,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, D.jsx)(Rr.sG.span, {
              ...o,
              ref: t
            })
          })
        }, "Avatar")),
        My = k.forwardRef(Ny(function(e, t) {
          const {
            __scopeAvatar: r,
            src: o,
            onLoadingStatusChange: n,
            ...a
          } = e, s = Ey("AvatarImage", r);
          Fy(s.setImageCount);
          const i = Ay(o, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, Dr.c)(e => {
              n?.(e)
            }),
            d = k.useRef(i);
          return (0, $r.N)(() => {
            const e = d.current;
            d.current = i, i !== e && l(i)
          }, [i, l]), "loaded" === i ? (0, D.jsx)(Rr.sG.img, {
            ...a,
            ref: t,
            src: o
          }) : null
        }, "AvatarImage"));

      function Ay(e, {
        loadingStatus: t,
        setLoadingStatus: r,
        referrerPolicy: o,
        crossOrigin: n
      }) {
        return (0, $r.N)(() => {
          if (!e) return void r("error");
          const t = new window.Image,
            a = Ny(e => {
              const t = e.currentTarget;
              r(qy(t))
            }, "handleLoad"),
            s = Ny(() => r("error"), "handleError");
          return t.addEventListener("load", a), t.addEventListener("error", s), o && (t.referrerPolicy = o), t.crossOrigin = n ?? null, t.src = e, r(qy(t)), () => {
            t.removeEventListener("load", a), t.removeEventListener("error", s), r("idle")
          }
        }, [e, n, o, r]), t
      }

      function qy(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Hy() {
        let e = Ly;
        if (Ry.D) {
          e = k.useState(0);
          const [t] = e, r = k.useRef(!1);
          k.useEffect(() => {
            t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
          }, [t])
        }
        return e
      }

      function Fy(e) {
        Ry.D && k.useEffect(() => (e(e => e + 1), () => {
          e(e => e - 1)
        }), [e])
      }

      function By(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Xy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function Zy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xy(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = By(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Gy(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      Ny(Ay, "useImageLoadingStatus"), Ny(qy, "getImageLoadingStatus"), Ny(Hy, "useImageCount"), Ny(Fy, "useUpdateImageCount");
      var Ky = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Wy = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = Zy(Zy({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Ky(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gy(e.variantClassNames, e => Gy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Uy = Wy({
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
        Yy = "var(--foundry_v912w22)",
        $y = "var(--foundry_v912w23)",
        Qy = Wy({
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
        Jy = Wy({
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
        eh = "var(--foundry_v912w21)",
        th = "var(--foundry_v912w20)",
        rh = Wy({
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
      const oh = (0, k.createContext)(null);

      function nh() {
        const e = (0, k.useContext)(oh);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const ah = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: o,
          status: n,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const l = (0, L.v6)({
            "data-testid": r,
            "aria-disabled": a,
            className: Uy({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, D.jsx)(oh.Provider, {
            value: {
              size: o,
              status: n,
              isDisabled: a
            },
            children: (0, D.jsx)(Vy, {
              ref: i,
              ...l,
              children: t
            })
          })
        }),
        sh = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...o
        }, n) => {
          const {
            size: a,
            isDisabled: s
          } = nh(), [i, l] = (0, k.useState)(!1);
          (0, k.useEffect)(() => {
            l(!1)
          }, [r]);
          const d = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, L.v6)({
              className: Qy({
                isDisabled: s
              }),
              src: d,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, o);
          return (0, D.jsx)("span", {
            className: Jy({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, D.jsx)(My, {
              ref: n,
              ...c
            })
          })
        }),
        ih = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, o) => {
          const n = (0, k.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = nh(),
            l = s || "online",
            d = (0, ve.UP)(n, o),
            c = (0, L.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: rh({
                status: l,
                size: a,
                isDisabled: i
              }),
              style: (0, I.D)({
                [th]: t?.online,
                [eh]: t?.offline,
                [Yy]: t?.away,
                [$y]: t?.busy
              })
            }, r);
          return (0, D.jsx)("span", {
            ref: d,
            ...c
          })
        });

      function lh(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function dh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function ch(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dh(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = lh(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function uh(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var fh = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        ph = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = ch(ch({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) fh(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uh(e.variantClassNames, e => uh(e, e => e.split(" ")[0]))
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
      const vh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, o),
            s = e ? ye.DX : "nav";
          return (0, D.jsx)(s, {
            ref: n,
            ...a,
            children: t
          })
        }),
        yh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, o),
            s = e ? ye.DX : "div";
          return (0, D.jsx)(s, {
            ref: n,
            ...a,
            children: t
          })
        }),
        hh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: o,
          ...n
        }, a) => {
          const s = (0, k.useRef)(null),
            i = (0, ve.UP)(s, a),
            {
              linkProps: l,
              isPressed: d
            } = (0, Ku.i)(n, s),
            c = (0, L.v6)({
              role: "listitem",
              "data-testid": o,
              "data-pressed": d,
              "data-active": r,
              className: (0, ze.clsx)(ph({
                isActive: r
              }))
            }, l),
            u = e ? ye.DX : "a";
          return (0, D.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        bh = (0, k.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, D.jsx)(hh, {
            ref: o,
            ...n,
            children: (0, D.jsx)(Le.JG, {
              size: "LG",
              label: e
            })
          })
        }),
        mh = (0, k.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, D.jsx)(hh, {
            ref: o,
            ...n,
            children: (0, D.jsx)(Le.c_, {
              size: "LG",
              label: e
            })
          })
        }),
        gh = ({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }) => {
          const n = (0, L.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, o),
            a = e ? ye.DX : "span";
          return (0, D.jsx)(a, {
            ...n,
            children: t || "..."
          })
        },
        Ch = ({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }) => {
          const n = (0, L.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, o),
            a = e ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ...n,
            children: t
          })
        },
        wh = (0, k.createContext)(null);

      function xh() {
        const e = (0, k.useContext)(wh);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const _h = ({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }) => {
          const n = (0, k.useId)(),
            a = (0, L.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, o),
            s = e ? ye.DX : "div";
          return (0, D.jsx)(wh.Provider, {
            value: {
              labelId: n
            },
            children: (0, D.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        jh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const {
            labelId: a
          } = xh(), s = (0, L.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, o), i = e ? ye.DX : "label";
          return (0, D.jsx)(i, {
            ref: n,
            id: a,
            ...s,
            children: t
          })
        }),
        Oh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...o
        }, n) => {
          const {
            labelId: a
          } = xh(), s = (0, L.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, o), i = e ? ye.DX : id;
          return (0, D.jsxs)(i, {
            ...s,
            children: [(0, D.jsxs)(ud, {
              ref: n,
              children: [(0, D.jsx)(fd, {
                placeholder: r
              }), (0, D.jsx)(pd, {})]
            }), (0, D.jsx)(Cd, {
              children: (0, D.jsx)(ld, {
                children: (0, D.jsx)(cd, {
                  children: t
                })
              })
            })]
          })
        }),
        Ph = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
              "data-testid": r
            }, o),
            s = e ? ye.DX : bd;
          return (0, D.jsx)(s, {
            ...a,
            ref: n,
            children: (0, D.jsx)(md, {
              children: t
            })
          })
        }),
        Sh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, o),
            s = e ? ye.DX : "p";
          return (0, D.jsx)(s, {
            ref: n,
            ...a,
            children: t
          })
        });
      var Rh = r(25298),
        Dh = Object.defineProperty,
        Nh = (e, t) => Dh(e, "name", {
          value: t,
          configurable: !0
        }),
        kh = "rovingFocusGroup.onEntryFocus",
        Ih = {
          bubbles: !1,
          cancelable: !0
        },
        zh = "RovingFocusGroup",
        [Lh, Th, Eh] = Tn(zh),
        [Vh, Mh] = (0, Sr.A)(zh, [Eh]),
        [Ah, qh] = Vh(zh),
        Hh = k.forwardRef(Nh(function(e, t) {
          return (0, D.jsx)(Lh.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, D.jsx)(Lh.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, D.jsx)(Fh, {
                ...e,
                ref: t
              })
            })
          })
        }, "RovingFocusGroup")),
        Fh = k.forwardRef(Nh(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            orientation: o,
            loop: n = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: l,
            onEntryFocus: d,
            preventScrollOnEntryFocus: c = !1,
            ...u
          } = e, f = k.useRef(null), p = (0, Pr.s)(t, f), v = (0, kn.jH)(a), [y, h] = (0, Eo.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: l,
            caller: zh
          }), [b, m] = k.useState(!1), g = (0, Dr.c)(d), C = Th(r), w = k.useRef(!1), [x, _] = k.useState(0);
          return k.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(kh, g), () => e.removeEventListener(kh, g)
          }, [g]), (0, D.jsx)(Ah, {
            scope: r,
            orientation: o,
            dir: v,
            loop: n,
            currentTabStopId: y,
            onItemFocus: k.useCallback(e => h(e), [h]),
            onItemShiftTab: k.useCallback(() => m(!0), []),
            onFocusableItemAdd: k.useCallback(() => _(e => e + 1), []),
            onFocusableItemRemove: k.useCallback(() => _(e => e - 1), []),
            children: (0, D.jsx)(Rr.sG.div, {
              tabIndex: b || 0 === x ? -1 : 0,
              "data-orientation": o,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, Or.mK)(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: (0, Or.mK)(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !b) {
                  const t = new CustomEvent(kh, Ih);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = C().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === y),
                      o = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Kh(o, c)
                  }
                }
                w.current = !1
              }),
              onBlur: (0, Or.mK)(e.onBlur, () => m(!1))
            })
          })
        }, "RovingFocusGroupImpl")),
        Bh = k.forwardRef(Nh(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            focusable: o = !0,
            active: n = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, l = (0, Xr.B)(), d = a || l, c = qh("RovingFocusGroupItem", r), u = c.currentTabStopId === d, f = Th(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: y
          } = c, h = (0, Rh.z)();
          return (0, $r.N)(() => {
            if (h && o) return p(), () => v()
          }, [h, o, p, v]), k.useEffect(() => {
            if (!h && o) return p(), () => v()
          }, [h, o, p, v]), (0, D.jsx)(Lh.ItemSlot, {
            scope: r,
            id: d,
            focusable: o,
            active: n,
            children: (0, D.jsx)(Rr.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, Or.mK)(e.onMouseDown, e => {
                o ? c.onItemFocus(d) : e.preventDefault()
              }),
              onFocus: (0, Or.mK)(e.onFocus, () => c.onItemFocus(d)),
              onKeyDown: (0, Or.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = Gh(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const r = f().filter(e => e.focusable);
                  let o = r.map(e => e.ref.current);
                  if ("last" === t) o.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && o.reverse();
                    const r = o.indexOf(e.currentTarget);
                    o = c.loop ? Wh(o, r + 1) : o.slice(r + 1)
                  }
                  setTimeout(() => Kh(o))
                }
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: u,
                hasTabStop: null != y
              }) : s
            })
          })
        }, "RovingFocusGroupItem")),
        Xh = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last"
        };

      function Zh(e, t) {
        return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
      }

      function Gh(e, t, r) {
        const o = Zh(e.key, r);
        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return Xh[o]
      }

      function Kh(e, t = !1) {
        const r = document.activeElement;
        for (const o of e) {
          if (o === r) return;
          if (o.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }

      function Wh(e, t) {
        return e.map((r, o) => e[(t + o) % e.length])
      }
      Nh(Zh, "getDirectionAwareKey"), Nh(Gh, "getFocusIntent"), Nh(Kh, "focusFirst"), Nh(Wh, "wrapArray");
      var Uh = Hh,
        Yh = Bh,
        $h = Object.defineProperty,
        Qh = (e, t) => $h(e, "name", {
          value: t,
          configurable: !0
        }),
        Jh = k.forwardRef(Qh(function(e, t) {
          const {
            pressed: r,
            defaultPressed: o,
            onPressedChange: n,
            ...a
          } = e, [s, i] = (0, Eo.i)({
            prop: r,
            onChange: n,
            defaultProp: o ?? !1,
            caller: "Toggle"
          });
          return (0, D.jsx)(Rr.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, Or.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        }, "Toggle")),
        eb = Object.defineProperty,
        tb = (e, t) => eb(e, "name", {
          value: t,
          configurable: !0
        }),
        rb = "ToggleGroup",
        [ob, nb] = (0, Sr.A)(rb, [Mh]),
        ab = Mh(),
        sb = k.forwardRef(tb(function(e, t) {
          const {
            type: r,
            ...o
          } = e;
          if ("single" === r) {
            const e = o;
            return (0, D.jsx)(db, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = o;
            return (0, D.jsx)(cb, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${rb}\``)
        }, "ToggleGroup")),
        [ib, lb] = ob(rb),
        db = k.forwardRef(tb(function(e, t) {
          const {
            value: r,
            defaultValue: o,
            onValueChange: n = tb(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Eo.i)({
            prop: r,
            defaultProp: o ?? "",
            onChange: n,
            caller: rb
          });
          return (0, D.jsx)(ib, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: k.useMemo(() => s ? [s] : [], [s]),
            onItemActivate: i,
            onItemDeactivate: k.useCallback(() => i(""), [i]),
            children: (0, D.jsx)(pb, {
              ...a,
              ref: t
            })
          })
        }, "ToggleGroupImplSingle")),
        cb = k.forwardRef(tb(function(e, t) {
          const {
            value: r,
            defaultValue: o,
            onValueChange: n = tb(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Eo.i)({
            prop: r,
            defaultProp: o ?? [],
            onChange: n,
            caller: rb
          }), l = k.useCallback(e => i((t = []) => [...t, e]), [i]), d = k.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, D.jsx)(ib, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: s,
            onItemActivate: l,
            onItemDeactivate: d,
            children: (0, D.jsx)(pb, {
              ...a,
              ref: t
            })
          })
        }, "ToggleGroupImplMultiple")),
        [ub, fb] = ob(rb),
        pb = k.forwardRef(tb(function(e, t) {
          const {
            __scopeToggleGroup: r,
            disabled: o = !1,
            rovingFocus: n = !0,
            orientation: a,
            dir: s,
            loop: i = !0,
            ...l
          } = e, d = ab(r), c = (0, kn.jH)(s), u = {
            dir: c,
            ...l
          };
          return (0, D.jsx)(ub, {
            scope: r,
            rovingFocus: n,
            disabled: o,
            children: n ? (0, D.jsx)(Uh, {
              asChild: !0,
              ...d,
              orientation: a,
              dir: c,
              loop: i,
              children: (0, D.jsx)(Rr.sG.div, {
                ...u,
                ref: t
              })
            }) : (0, D.jsx)(Rr.sG.div, {
              ...u,
              ref: t
            })
          })
        }, "ToggleGroupImpl")),
        vb = "ToggleGroupItem",
        yb = k.forwardRef(tb(function(e, t) {
          const r = lb(vb, e.__scopeToggleGroup),
            o = fb(vb, e.__scopeToggleGroup),
            n = ab(e.__scopeToggleGroup),
            a = r.value.includes(e.value),
            s = o.disabled || e.disabled,
            i = {
              ...e,
              pressed: a,
              disabled: s
            },
            l = k.useRef(null);
          return o.rovingFocus ? (0, D.jsx)(Yh, {
            asChild: !0,
            ...n,
            focusable: !s,
            active: a,
            ref: l,
            children: (0, D.jsx)(hb, {
              ...i,
              ref: t
            })
          }) : (0, D.jsx)(hb, {
            ...i,
            ref: t
          })
        }, "ToggleGroupItem")),
        hb = k.forwardRef(tb(function(e, t) {
          const {
            __scopeToggleGroup: r,
            value: o,
            ...n
          } = e, a = lb(vb, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, D.jsx)(Jh, {
            ...i,
            ...n,
            ref: t,
            onPressedChange: e => {
              e ? a.onItemActivate(o) : a.onItemDeactivate(o)
            }
          })
        }, "ToggleGroupItemImpl"));

      function bb(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function mb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function gb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mb(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = bb(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Cb(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var wb = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        xb = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = gb(gb({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) wb(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cb(e.variantClassNames, e => Cb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _b = "var(--foundry_zxwkyk2)",
        jb = "var(--foundry_zxwkyk3)",
        Ob = xb({
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
        Pb = xb({
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
        Sb = xb({
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
        Rb = "var(--foundry_zxwkyk1)",
        Db = "var(--foundry_zxwkyk0)",
        Nb = xb({
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
      const kb = (0, k.createContext)(null);

      function Ib() {
        const e = (0, k.useContext)(kb);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const zb = (0, k.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...o
        }, n) => {
          const a = (0, L.v6)({
            "data-testid": e,
            className: Ob({
              size: t
            }),
            type: r
          }, o);
          return (0, D.jsx)(kb.Provider, {
            value: {
              size: t
            },
            children: (0, D.jsx)(sb, {
              ref: n,
              ...a
            })
          })
        }),
        Lb = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: o
          } = Ib(), n = (0, L.v6)({
            "data-testid": e,
            className: Pb({
              size: o
            })
          }, t);
          return (0, D.jsx)(yb, {
            ref: r,
            ...n
          })
        }),
        Tb = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: o
          } = Ib(), n = ti[e];
          return (0, D.jsx)(n, {
            label: "",
            ref: r,
            size: o,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        Eb = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
            "data-testid": e,
            className: Nb({
              status: r
            }),
            style: (0, I.D)({
              [Db]: t?.online,
              [Rb]: t?.offline,
              [_b]: t?.away,
              [jb]: t?.busy
            })
          }, o);
          return (0, D.jsx)("span", {
            ref: n,
            ...a
          })
        }),
        Vb = (0, k.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, o) => {
          const {
            size: n
          } = Ib(), a = (0, L.v6)({
            "data-testid": e,
            className: Sb({
              variant: t,
              size: n
            })
          }, r);
          return (0, D.jsx)("span", {
            ref: o,
            ...a
          })
        });
      var Mb = Object.defineProperty,
        Ab = (e, t) => Mb(e, "name", {
          value: t,
          configurable: !0
        }),
        qb = "Popover",
        [Hb, Fb] = (0, Sr.A)(qb, [oo]),
        Bb = oo(),
        [Xb, Zb] = Hb(qb),
        Gb = Ab(e => {
          const {
            __scopePopover: t,
            children: r,
            open: o,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Bb(t), l = k.useRef(null), [d, c] = k.useState(!1), [u, f] = (0, Eo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: a,
            caller: qb
          });
          return (0, D.jsx)(mo, {
            ...i,
            children: (0, D.jsx)(Xb, {
              scope: t,
              contentId: (0, Xr.B)(),
              triggerRef: l,
              open: u,
              onOpenChange: f,
              onOpenToggle: k.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: d,
              onCustomAnchorAdd: k.useCallback(() => c(!0), []),
              onCustomAnchorRemove: k.useCallback(() => c(!1), []),
              modal: s,
              children: r
            })
          })
        }, "Popover"),
        Kb = k.forwardRef(Ab(function(e, t) {
          const {
            __scopePopover: r,
            ...o
          } = e, n = Zb("PopoverAnchor", r), a = Bb(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = n;
          return k.useEffect(() => (s(), () => i()), [s, i]), (0, D.jsx)(go, {
            ...a,
            ...o,
            ref: t
          })
        }, "PopoverAnchor")),
        Wb = k.forwardRef(Ab(function(e, t) {
          const {
            __scopePopover: r,
            ...o
          } = e, n = Zb("PopoverTrigger", r), a = Bb(r), s = (0, Pr.s)(t, n.triggerRef), i = (0, D.jsx)(Rr.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.open ? n.contentId : void 0,
            "data-state": im(n.open),
            ...o,
            ref: s,
            onClick: (0, Or.mK)(e.onClick, n.onOpenToggle)
          });
          return n.hasCustomAnchor ? i : (0, D.jsx)(go, {
            asChild: !0,
            ...a,
            children: i
          })
        }, "PopoverTrigger")),
        Ub = "PopoverPortal",
        [Yb, $b] = Hb(Ub, {
          forceMount: void 0
        }),
        Qb = Ab(e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: o,
            container: n
          } = e, a = Zb(Ub, t);
          return (0, D.jsx)(Yb, {
            scope: t,
            forceMount: r,
            children: (0, D.jsx)(Do, {
              present: r || a.open,
              children: (0, D.jsx)(Oo, {
                asChild: !0,
                container: n,
                children: o
              })
            })
          })
        }, "PopoverPortal"),
        Jb = "PopoverContent",
        em = k.forwardRef(Ab(function(e, t) {
          const r = $b(Jb, e.__scopePopover),
            {
              forceMount: o = r.forceMount,
              ...n
            } = e,
            a = Zb(Jb, e.__scopePopover);
          return (0, D.jsx)(Do, {
            present: o || a.open,
            children: a.modal ? (0, D.jsx)(rm, {
              ...n,
              ref: t
            }) : (0, D.jsx)(om, {
              ...n,
              ref: t
            })
          })
        }, "PopoverContent")),
        tm = (0, To.TL)("PopoverContent.RemoveScroll"),
        rm = k.forwardRef(Ab(function(e, t) {
          const r = Zb(Jb, e.__scopePopover),
            o = k.useRef(null),
            n = (0, Pr.s)(t, o),
            a = k.useRef(!1);
          return k.useEffect(() => {
            const e = o.current;
            if (e) return (0, $a.Eq)(e)
          }, []), (0, D.jsx)(Ya.A, {
            as: tm,
            allowPinchZoom: !0,
            children: (0, D.jsx)(nm, {
              ...e,
              ref: n,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, Or.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, Or.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  o = 2 === t.button || r;
                a.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, Or.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "PopoverContentModal")),
        om = k.forwardRef(Ab(function(e, t) {
          const r = Zb(Jb, e.__scopePopover),
            o = k.useRef(!1),
            n = k.useRef(!1);
          return (0, D.jsx)(nm, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || r.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, n.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (n.current = !0));
              const a = t.target,
                s = r.triggerRef.current?.contains(a);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && n.current && t.preventDefault()
            }
          })
        }, "PopoverContentNonModal")),
        nm = k.forwardRef(Ab(function(e, t) {
          const {
            __scopePopover: r,
            trapFocus: o,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onInteractOutside: c,
            ...u
          } = e, f = Zb(Jb, r), p = Bb(r);
          return (0, Ua.Oh)(), (0, D.jsx)(Va, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, D.jsx)(Lr, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: l,
              onFocusOutside: d,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, D.jsx)(Co, {
                "data-state": im(f.open),
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
        am = k.forwardRef(Ab(function(e, t) {
          const {
            __scopePopover: r,
            ...o
          } = e, n = Zb("PopoverClose", r);
          return (0, D.jsx)(Rr.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, Or.mK)(e.onClick, () => n.onOpenChange(!1))
          })
        }, "PopoverClose")),
        sm = k.forwardRef(Ab(function(e, t) {
          const {
            __scopePopover: r,
            ...o
          } = e, n = Bb(r);
          return (0, D.jsx)(wo, {
            ...n,
            ...o,
            ref: t
          })
        }, "PopoverArrow"));

      function im(e) {
        return e ? "open" : "closed"
      }
      Ab(im, "getState");
      var lm = Gb,
        dm = Kb,
        cm = Wb,
        um = Qb,
        fm = em,
        pm = am,
        vm = sm;

      function ym(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function hm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function bm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hm(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = ym(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mm(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var gm = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Cm = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = bm(bm({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) gm(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mm(e.variantClassNames, e => mm(e, e => e.split(" ")[0]))
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
      const wm = (0, k.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        xm = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...o
        }) => {
          const [n = !1, a] = (0, ve.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, L.v6)({
            open: n,
            onOpenChange: a
          }, o);
          return (0, D.jsx)(wm.Provider, {
            value: {
              open: n,
              setOpen: a
            },
            children: (0, D.jsx)(lm, {
              ...s
            })
          })
        },
        _m = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, D.jsx)(cm, {
            ref: r,
            ...o
          })
        }),
        jm = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Om = (0, k.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...o
        }, n) => {
          const {
            open: a
          } = (0, k.useContext)(wm), s = (0, k.useRef)(null), i = (0, ve.UP)(s, n), {
            buttonProps: l
          } = (0, ve.sL)(o, s), d = (0, L.v6)({
            "data-testid": r,
            className: Cm({
              size: t
            })
          }, l), c = a ? Le.rX : Le.yQ;
          return (0, D.jsxs)("button", {
            ref: i,
            ...d,
            children: [e, (0, D.jsx)(c, {
              label: "",
              size: jm[t]
            })]
          })
        }),
        Pm = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e
          }, t);
          return (0, D.jsx)(dm, {
            ref: r,
            ...o
          })
        }),
        Sm = (0, k.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, D.jsx)(fm, {
            ref: o,
            ...n
          })
        }),
        Rm = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, D.jsx)(vm, {
            ref: r,
            ...o
          })
        }),
        Dm = e => (0, D.jsx)(um, {
          ...e
        }),
        Nm = e => (0, D.jsx)(pm, {
          ...e
        });

      function km(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Im(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function zm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Im(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = km(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Im(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Lm(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var Tm = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        Em = e => {
          var t = t => {
            var r = e.defaultClassName,
              o = zm(zm({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) Tm(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lm(e.variantClassNames, e => Lm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vm = "var(--foundry_rmorls2)",
        Mm = Em({
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
        qm = Em({
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
        Hm = "var(--foundry_rmorls3)",
        Fm = "var(--foundry_rmorls1)",
        Bm = Em({
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
        Xm = Object.defineProperty,
        Zm = (e, t) => Xm(e, "name", {
          value: t,
          configurable: !0
        }),
        Gm = "Progress",
        [Km, Wm] = (0, Sr.A)(Gm),
        [Um, Ym] = Km(Gm),
        $m = k.forwardRef(Zm(function(e, t) {
          const {
            __scopeProgress: r,
            value: o = null,
            max: n,
            getValueLabel: a = Jm,
            ...s
          } = e;
          !n && 0 !== n || rg(n) || console.error(ng(`${n}`, "Progress"));
          const i = rg(n) ? n : 100;
          null === o || og(o, i) || console.error(ag(`${o}`, "Progress"));
          const l = og(o, i) ? o : null,
            d = tg(l) ? a(l, i) : void 0;
          return (0, D.jsx)(Um, {
            scope: r,
            value: l,
            max: i,
            children: (0, D.jsx)(Rr.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": tg(l) ? l : void 0,
              "aria-valuetext": d,
              role: "progressbar",
              "data-state": eg(l, i),
              "data-value": l ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        }, "Progress")),
        Qm = k.forwardRef(Zm(function(e, t) {
          const {
            __scopeProgress: r,
            ...o
          } = e, n = Ym("ProgressIndicator", r);
          return (0, D.jsx)(Rr.sG.div, {
            "data-state": eg(n.value, n.max),
            "data-value": n.value ?? void 0,
            "data-max": n.max,
            ...o,
            ref: t
          })
        }, "ProgressIndicator"));

      function Jm(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function eg(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function tg(e) {
        return "number" == typeof e
      }

      function rg(e) {
        return tg(e) && !isNaN(e) && e > 0
      }

      function og(e, t) {
        return tg(e) && !isNaN(e) && e <= t && e >= 0
      }

      function ng(e, t) {
        return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
      }

      function ag(e, t) {
        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
      }
      Zm(Jm, "defaultGetValueLabel"), Zm(eg, "getProgressState"), Zm(tg, "isNumber"), Zm(rg, "isValidMaxNumber"), Zm(og, "isValidValueNumber"), Zm(ng, "getInvalidMaxError"), Zm(ag, "getInvalidValueError");
      var sg = $m,
        ig = Qm;
      const lg = (0, k.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        dg = (0, k.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...o
        }, n) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, D.jsx)(lg.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, D.jsx)(cg, {
              ...o,
              ref: n
            })
          })
        }),
        cg = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? ye.DX : "div";
          return (0, D.jsx)(a, {
            ...n,
            ref: o
          })
        }),
        ug = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, o) => {
          const {
            value: n,
            max: a,
            size: s
          } = (0, k.useContext)(lg), i = (0, L.v6)({
            "data-testid": e,
            className: qm({
              size: s
            }),
            value: n,
            max: a,
            style: (0, I.D)({
              [Hm]: t
            }),
            "data-track": !0
          }, r);
          return (0, D.jsx)(sg, {
            ref: o,
            ...i
          })
        }),
        fg = (0, k.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...o
        }, n) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, k.useContext)(lg), i = s ? "-100%" : `-${100-a}%`, l = (0, L.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, I.D)({
              [Am]: i,
              [Fm]: `${t}ms`,
              [Vm]: r
            })
          }, o);
          return (0, D.jsx)(ig, {
            ref: n,
            ...l
          })
        }),
        pg = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, o) => {
          const {
            size: n
          } = (0, k.useContext)(lg), a = (0, L.v6)({
            "data-testid": t,
            className: Mm({
              size: n
            }),
            "aria-hidden": !0
          }, r), s = e ? ye.DX : "span";
          return (0, D.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        vg = (0, k.forwardRef)(({
          testId: e,
          format: t,
          ...r
        }, o) => {
          const {
            value: n,
            max: a,
            size: s,
            percentage: i,
            isInvalid: l
          } = (0, k.useContext)(lg), d = (0, L.v6)({
            "data-testid": e,
            className: Mm({
              size: s
            }),
            "aria-hidden": !0
          }, r);
          return l ? (0, D.jsx)("span", {
            ref: o,
            ...d
          }) : "percentage" === t ? (0, D.jsxs)("span", {
            ref: o,
            ...d,
            children: [i, " ", (0, D.jsx)("span", {
              className: Bm({
                size: s
              }),
              children: "%"
            })]
          }) : (0, D.jsxs)("span", {
            ref: o,
            ...d,
            children: [n, "/", a]
          })
        });
      var yg = Object.defineProperty,
        hg = (e, t) => yg(e, "name", {
          value: t,
          configurable: !0
        }),
        bg = "Collapsible",
        [mg, gg] = (0, Sr.A)(bg),
        [Cg, wg] = mg(bg),
        xg = k.forwardRef(hg(function(e, t) {
          const {
            __scopeCollapsible: r,
            open: o,
            defaultOpen: n,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [l, d] = (0, Eo.i)({
            prop: o,
            defaultProp: n ?? !1,
            onChange: s,
            caller: bg
          });
          return (0, D.jsx)(Cg, {
            scope: r,
            disabled: a,
            contentId: (0, Xr.B)(),
            open: l,
            onOpenToggle: k.useCallback(() => d(e => !e), [d]),
            children: (0, D.jsx)(Rr.sG.div, {
              "data-state": Sg(l),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: t
            })
          })
        }, "Collapsible")),
        _g = k.forwardRef(hg(function(e, t) {
          const {
            __scopeCollapsible: r,
            ...o
          } = e, n = wg("CollapsibleTrigger", r);
          return (0, D.jsx)(Rr.sG.button, {
            type: "button",
            "aria-controls": n.open ? n.contentId : void 0,
            "aria-expanded": n.open || !1,
            "data-state": Sg(n.open),
            "data-disabled": n.disabled ? "" : void 0,
            disabled: n.disabled,
            ...o,
            ref: t,
            onClick: (0, Or.mK)(e.onClick, n.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        jg = "CollapsibleContent",
        Og = k.forwardRef(hg(function(e, t) {
          const {
            forceMount: r,
            ...o
          } = e, n = wg(jg, e.__scopeCollapsible);
          return (0, D.jsx)(Do, {
            present: r || n.open,
            children: ({
              present: e
            }) => (0, D.jsx)(Pg, {
              ...o,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        Pg = k.forwardRef(hg(function(e, t) {
          const {
            __scopeCollapsible: r,
            present: o,
            children: n,
            ...a
          } = e, s = wg(jg, r), [i, l] = k.useState(o), d = k.useRef(null), c = (0, Pr.s)(t, d), u = k.useRef(0), f = u.current, p = k.useRef(0), v = p.current, y = s.open || i, h = k.useRef(y), b = k.useRef(void 0);
          return k.useEffect(() => {
            const e = requestAnimationFrame(() => h.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, $r.N)(() => {
            const e = d.current;
            if (e) {
              b.current = b.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              u.current = t.height, p.current = t.width, h.current || (e.style.transitionDuration = b.current.transitionDuration, e.style.animationName = b.current.animationName), l(o)
            }
          }, [s.open, o]), (0, D.jsx)(Rr.sG.div, {
            "data-state": Sg(s.open),
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
        }, "CollapsibleContentImpl"));

      function Sg(e) {
        return e ? "open" : "closed"
      }
      hg(Sg, "getState");
      var Rg = xg,
        Dg = _g,
        Ng = Og,
        kg = Object.defineProperty,
        Ig = (e, t) => kg(e, "name", {
          value: t,
          configurable: !0
        }),
        zg = "Accordion",
        Lg = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [Tg, Eg, Vg] = Tn(zg),
        [Mg, Ag] = (0, Sr.A)(zg, [Vg, gg]),
        qg = gg(),
        Hg = k.forwardRef(Ig(function(e, t) {
          const {
            type: r,
            ...o
          } = e, n = o, a = o;
          return (0, D.jsx)(Tg.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, D.jsx)(Kg, {
              ...a,
              ref: t
            }) : (0, D.jsx)(Gg, {
              ...n,
              ref: t
            })
          })
        }, "Accordion")),
        [Fg, Bg] = Mg(zg),
        [Xg, Zg] = Mg(zg, {
          collapsible: !1
        }),
        Gg = k.forwardRef(Ig(function(e, t) {
          const {
            value: r,
            defaultValue: o,
            onValueChange: n = Ig(() => {}, "onValueChange"),
            collapsible: a = !1,
            ...s
          } = e, [i, l] = (0, Eo.i)({
            prop: r,
            defaultProp: o ?? "",
            onChange: n,
            caller: zg
          });
          return (0, D.jsx)(Fg, {
            scope: e.__scopeAccordion,
            value: k.useMemo(() => i ? [i] : [], [i]),
            onItemOpen: l,
            onItemClose: k.useCallback(() => a && l(""), [a, l]),
            children: (0, D.jsx)(Xg, {
              scope: e.__scopeAccordion,
              collapsible: a,
              children: (0, D.jsx)(Yg, {
                ...s,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        Kg = k.forwardRef(Ig(function(e, t) {
          const {
            value: r,
            defaultValue: o,
            onValueChange: n = Ig(() => {}, "onValueChange"),
            ...a
          } = e, [s, i] = (0, Eo.i)({
            prop: r,
            defaultProp: o ?? [],
            onChange: n,
            caller: zg
          }), l = k.useCallback(e => i((t = []) => [...t, e]), [i]), d = k.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, D.jsx)(Fg, {
            scope: e.__scopeAccordion,
            value: s,
            onItemOpen: l,
            onItemClose: d,
            children: (0, D.jsx)(Xg, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, D.jsx)(Yg, {
                ...a,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [Wg, Ug] = Mg(zg),
        Yg = k.forwardRef(Ig(function(e, t) {
          const {
            __scopeAccordion: r,
            disabled: o,
            dir: n,
            orientation: a = "vertical",
            ...s
          } = e, i = k.useRef(null), l = (0, Pr.s)(i, t), d = Eg(r), c = "ltr" === (0, kn.jH)(n), u = (0, Or.mK)(e.onKeyDown, e => {
            if (!Lg.includes(e.key)) return;
            const t = e.target,
              r = d().filter(e => !e.ref.current?.disabled),
              o = r.findIndex(e => e.ref.current === t),
              n = r.length;
            if (-1 === o) return;
            e.preventDefault();
            let s = o;
            const i = n - 1,
              l = Ig(() => {
                s = o + 1, s > i && (s = 0)
              }, "moveNext"),
              u = Ig(() => {
                s = o - 1, s < 0 && (s = i)
              }, "movePrev");
            switch (e.key) {
              case "Home":
                s = 0;
                break;
              case "End":
                s = i;
                break;
              case "ArrowRight":
                "horizontal" === a && (c ? l() : u());
                break;
              case "ArrowDown":
                "vertical" === a && l();
                break;
              case "ArrowLeft":
                "horizontal" === a && (c ? u() : l());
                break;
              case "ArrowUp":
                "vertical" === a && u()
            }
            const f = s % n;
            r[f].ref.current?.focus()
          });
          return (0, D.jsx)(Wg, {
            scope: r,
            disabled: o,
            direction: n,
            orientation: a,
            children: (0, D.jsx)(Tg.Slot, {
              scope: r,
              children: (0, D.jsx)(Rr.sG.div, {
                ...s,
                "data-orientation": a,
                ref: l,
                onKeyDown: o ? void 0 : u
              })
            })
          })
        }, "AccordionImpl")),
        $g = "AccordionItem",
        [Qg, Jg] = Mg($g),
        eC = k.forwardRef(Ig(function(e, t) {
          const {
            __scopeAccordion: r,
            value: o,
            ...n
          } = e, a = Ug($g, r), s = Bg($g, r), i = qg(r), l = (0, Xr.B)(), d = o && s.value.includes(o) || !1, c = a.disabled || e.disabled;
          return (0, D.jsx)(Qg, {
            scope: r,
            open: d,
            disabled: c,
            triggerId: l,
            children: (0, D.jsx)(Rg, {
              "data-orientation": a.orientation,
              "data-state": aC(d),
              ...i,
              ...n,
              ref: t,
              disabled: c,
              open: d,
              onOpenChange: e => {
                e ? s.onItemOpen(o) : s.onItemClose(o)
              }
            })
          })
        }, "AccordionItem")),
        tC = k.forwardRef(Ig(function(e, t) {
          const {
            __scopeAccordion: r,
            ...o
          } = e, n = Ug(zg, r), a = Jg("AccordionHeader", r);
          return (0, D.jsx)(Rr.sG.h3, {
            "data-orientation": n.orientation,
            "data-state": aC(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t
          })
        }, "AccordionHeader")),
        rC = "AccordionTrigger",
        oC = k.forwardRef(Ig(function(e, t) {
          const {
            __scopeAccordion: r,
            ...o
          } = e, n = Ug(zg, r), a = Jg(rC, r), s = Zg(rC, r), i = qg(r);
          return (0, D.jsx)(Tg.ItemSlot, {
            scope: r,
            children: (0, D.jsx)(Dg, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": n.orientation,
              id: a.triggerId,
              ...i,
              ...o,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        nC = k.forwardRef(Ig(function(e, t) {
          const {
            __scopeAccordion: r,
            ...o
          } = e, n = Ug(zg, r), a = Jg("AccordionContent", r), s = qg(r);
          return (0, D.jsx)(Ng, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": n.orientation,
            ...s,
            ...o,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }, "AccordionContent"));

      function aC(e) {
        return e ? "open" : "closed"
      }
      Ig(aC, "getState");
      var sC = Hg,
        iC = eC,
        lC = tC,
        dC = oC,
        cC = nC;

      function uC(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function fC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function pC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fC(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = uC(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vC(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var yC = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        hC = "foundry_1vzsjid2",
        bC = "foundry_1vzsjidm",
        mC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = pC(pC({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) yC(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vC(e.variantClassNames, e => vC(e, e => e.split(" ")[0]))
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
      const gC = (0, k.createContext)({
          mode: "solid",
          layer: 0
        }),
        CC = (0, k.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...o
        }, n) => (0, D.jsx)(gC.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, D.jsx)(wC, {
            ...o,
            ref: n,
            type: r
          })
        })),
        wC = (0, k.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, o) => {
          const n = (0, L.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, D.jsx)(sC, {
            className: "foundry_1vzsjid0",
            ref: o,
            ...n
          })
        }),
        xC = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: o,
            layer: n
          } = (0, k.useContext)(gC), a = (0, L.v6)({
            className: mC({
              mode: o,
              layer: n
            }),
            "data-testid": e
          }, t);
          return (0, D.jsx)(iC, {
            ref: r,
            ...a
          })
        }),
        _C = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const o = (0, L.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, D.jsx)(lC, {
            ref: r,
            ...o
          })
        }),
        jC = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, o) => {
          const n = (0, L.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, D.jsx)(dC, {
            ref: o,
            ...n,
            children: r.asChild && (0, k.isValidElement)(e) ? (0, k.cloneElement)(e, {
              children: (0, D.jsx)("span", {
                className: hC,
                children: e.props.children
              })
            }) : (0, D.jsx)("span", {
              className: hC,
              children: e
            })
          })
        }),
        OC = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const o = ti[e],
            n = (0, L.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, D.jsx)(o, {
            ref: r,
            size: "LG",
            ...n
          })
        }),
        PC = (0, k.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const o = ti[e],
            n = (0, L.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, D.jsx)(o, {
            ref: r,
            size: "LG",
            ...n
          })
        }),
        SC = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...o
        }, n) => {
          const a = (0, L.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, o);
          return (0, D.jsx)(cC, {
            ref: n,
            ...a,
            children: t && (0, k.isValidElement)(e) ? (0, k.cloneElement)(e, {
              children: (0, D.jsx)("div", {
                className: bC,
                children: e.props.children
              })
            }) : (0, D.jsx)("div", {
              className: bC,
              children: e
            })
          })
        }),
        RC = {
          MD: z.spacing.dimensions[200],
          LG: z.spacing.dimensions[250],
          XL: z.spacing.dimensions[300]
        },
        DC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, o) => (0, D.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: RC[t],
          viewBox: "0 0 93 20",
          fill: "none",
          ref: o,
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
        NC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, o) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: RC[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: o,
          ...r,
          children: (0, D.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        kC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, o) => (0, D.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: RC[t],
          viewBox: "0 0 33 20",
          fill: "none",
          ref: o,
          ...r,
          children: [(0, D.jsx)("path", {
            d: "M7.34117 9.61429C7.7883 9.61536 8.23491 9.59031 8.6778 9.53928C9.07276 9.49838 9.45591 9.40006 9.80952 9.24891C10.1317 9.10768 10.4019 8.89726 10.5916 8.63973C10.7887 8.3776 10.8873 8.03424 10.8873 7.60959C10.8873 7.18494 10.7887 6.8413 10.5916 6.57878C10.4014 6.32174 10.1314 6.1116 9.80952 5.97026C9.45578 5.81934 9.0727 5.72107 8.6778 5.6799C8.23491 5.6292 7.78824 5.6041 7.34117 5.60488H4.2033V9.61429H7.34117ZM8.44707 3.31884C9.59417 3.31884 10.5713 3.44063 11.3785 3.68422C12.1856 3.9278 12.8415 4.24941 13.3463 4.64907C13.8357 5.02963 14.2139 5.49737 14.4522 6.01681C14.9152 7.04079 14.9152 8.16864 14.4522 9.19267C14.2163 9.71592 13.8379 10.1872 13.3463 10.5701C12.84 10.9698 12.184 11.2913 11.3785 11.5349C10.5729 11.7785 9.59574 11.9003 8.44707 11.9003H4.2033V16.6968H0.166016V3.31884H8.44707Z",
            fill: e
          }), (0, D.jsx)("path", {
            d: "M28.2135 6.88796C27.966 6.60113 27.6617 6.35099 27.3133 6.14813C26.9401 5.9306 26.5279 5.76298 26.0916 5.65149C25.6303 5.53153 25.1494 5.4709 24.6658 5.47171C23.7565 5.47171 22.9848 5.59975 22.3508 5.85586C21.7447 6.09295 21.2157 6.44606 20.8077 6.886C20.4087 7.32589 20.1165 7.82544 19.9473 8.35721C19.7656 8.91334 19.674 9.48701 19.6752 10.0631C19.6741 10.6173 19.7652 11.1689 19.9457 11.7025C20.1182 12.2215 20.4104 12.7081 20.8061 13.1355C21.2166 13.5712 21.7452 13.9209 22.3492 14.1566C22.9838 14.4127 23.7555 14.5408 24.6643 14.5408C25.8974 14.5408 26.862 14.2659 27.5581 13.7163C28.2542 13.1666 28.6786 12.4421 28.8314 11.5428H32.742C32.6546 12.3356 32.382 13.1068 31.9395 13.8139C31.5214 14.4778 30.9439 15.0642 30.2423 15.5373C29.5097 16.0253 28.6718 16.3942 27.7732 16.6244C26.766 16.8824 25.7163 17.009 24.6619 16.9994C23.2542 16.9994 21.9895 16.8214 20.8679 16.4653C19.7463 16.1092 18.7992 15.6188 18.0265 14.9941C17.2558 14.3717 16.6513 13.6227 16.2518 12.7954C15.8351 11.9261 15.6265 10.9982 15.6379 10.0631C15.6275 9.11222 15.8369 8.16835 16.255 7.28242C16.6534 6.44298 17.2577 5.68074 18.0296 5.0436C18.8039 4.40641 19.751 3.9063 20.871 3.5433C21.991 3.1803 23.2559 2.99923 24.6658 3.00009C25.6348 2.99561 26.5999 3.10292 27.5331 3.3189C28.3948 3.51672 29.2114 3.82999 29.9506 4.24624C30.6544 4.64619 31.2534 5.15931 31.7119 5.75497C32.1855 6.3795 32.4842 7.08365 32.5863 7.81592H28.6757C28.6086 7.48158 28.4511 7.16421 28.2135 6.88796Z",
            fill: e
          })]
        })),
        IC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, o) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: RC[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: o,
          ...r,
          children: (0, D.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        zC = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, o) => (0, D.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: RC[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: o,
          ...r,
          children: (0, D.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function LC(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, t);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function TC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, o)
        }
        return r
      }

      function EC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? TC(Object(r), !0).forEach(function(t) {
            var o, n, a;
            o = e, n = t, a = r[t], (n = LC(n)) in o ? Object.defineProperty(o, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function VC(e, t) {
        var r = {};
        for (var o in e) r[o] = t(e[o], o);
        return r
      }
      var MC = (e, t, r) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = t[o]) && void 0 !== n ? n : r[o])) return !1
          }
          return !0
        },
        AC = (e => {
          var t = t => {
            var r = e.defaultClassName,
              o = EC(EC({}, e.defaultVariants), t);
            for (var n in o) {
              var a, s = null !== (a = o[n]) && void 0 !== a ? a : e.defaultVariants[n];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[n][i];
                l && (r += " " + l)
              }
            }
            for (var [d, c] of e.compoundVariants) MC(d, o, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return VC(e.variantClassNames, e => VC(e, e => e.split(" ")[0]))
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
      const qC = (0, k.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: o,
        ...n
      }, a) => {
        const s = (0, L.v6)({
            className: AC({
              size: t
            }),
            size: t
          }, n),
          i = S[e];
        if (r && (0, k.isValidElement)(o)) {
          const e = (0, k.cloneElement)(o, o.props, (0, D.jsxs)(D.Fragment, {
            children: [(0, D.jsx)(i, {
              size: t,
              "aria-hidden": !0
            }), o.props.children]
          }));
          return (0, D.jsx)(Ge, {
            asChild: !0,
            size: t,
            ref: a,
            ...n,
            children: e
          })
        }
        return (0, D.jsx)(Ge, {
          ...s,
          ref: a,
          children: (0, D.jsx)(i, {
            size: t,
            "aria-hidden": !0
          })
        })
      })
    }
  }
]);