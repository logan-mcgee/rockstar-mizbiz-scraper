try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "cca4622c-3ba3-40bd-bcde-94313864c053", o._sentryDebugIdIdentifier = "sentry-dbid-cca4622c-3ba3-40bd-bcde-94313864c053")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [3672], {
    21291: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => i,
        Lightbox_Dialog_Title: () => n,
        Lightbox_Download_Button_Label: () => a,
        Lightbox_Download_Button_Tooltip: () => d,
        Lightbox_Open_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => u,
        Lightbox_Zoom_In_Button_Tooltip: () => r,
        Lightbox_Zoom_Out_Button_Label: () => h,
        Lightbox_Zoom_Out_Button__Tooltip: () => L,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => c,
        default: () => p
      });
      var _ = "Close lightbox",
        l = "Press {shortcut}",
        i = "Alt text: {alt}",
        n = "Image lightbox",
        a = "Download",
        d = "Download",
        b = "Open image in lightbox",
        s = "Reset",
        g = "Press {shortcut}",
        u = "Zoom in",
        r = "Press {shortcut}",
        h = "Zoom out",
        L = "Press {shortcut}",
        f = "Zoom level",
        c = "{zoom}%",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Dialog_Description: i,
          Lightbox_Dialog_Title: n,
          Lightbox_Download_Button_Label: a,
          Lightbox_Download_Button_Tooltip: d,
          Lightbox_Open_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_In_Button_Label: u,
          Lightbox_Zoom_In_Button_Tooltip: r,
          Lightbox_Zoom_Out_Button_Label: h,
          Lightbox_Zoom_Out_Button__Tooltip: L,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: c
        }
    }
  }
]);