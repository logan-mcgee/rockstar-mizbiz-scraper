try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "87a7d9bc-5cdc-4157-ac6e-2a91b18e56bf", o._sentryDebugIdIdentifier = "sentry-dbid-87a7d9bc-5cdc-4157-ac6e-2a91b18e56bf")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3672], {
    98910: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => l,
        Lightbox_Dialog_Title: () => n,
        Lightbox_Download_Button_Label: () => a,
        Lightbox_Download_Button_Tooltip: () => b,
        Lightbox_Open_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => u,
        Lightbox_Zoom_In_Button_Tooltip: () => h,
        Lightbox_Zoom_Out_Button_Label: () => L,
        Lightbox_Zoom_Out_Button__Tooltip: () => r,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => c,
        default: () => p
      });
      var _ = "Close lightbox",
        i = "Press {shortcut}",
        l = "Alt text: {alt}",
        n = "Image lightbox",
        a = "Download",
        b = "Download",
        s = "Open image in lightbox",
        d = "Reset",
        g = "Press {shortcut}",
        u = "Zoom in",
        h = "Press {shortcut}",
        L = "Zoom out",
        r = "Press {shortcut}",
        f = "Zoom level",
        c = "{zoom}%",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Dialog_Description: l,
          Lightbox_Dialog_Title: n,
          Lightbox_Download_Button_Label: a,
          Lightbox_Download_Button_Tooltip: b,
          Lightbox_Open_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_In_Button_Label: u,
          Lightbox_Zoom_In_Button_Tooltip: h,
          Lightbox_Zoom_Out_Button_Label: L,
          Lightbox_Zoom_Out_Button__Tooltip: r,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: c
        }
    }
  }
]);