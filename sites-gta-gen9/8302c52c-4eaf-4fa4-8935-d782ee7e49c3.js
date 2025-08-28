try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "8302c52c-4eaf-4fa4-8935-d782ee7e49c3", o._sentryDebugIdIdentifier = "sentry-dbid-8302c52c-4eaf-4fa4-8935-d782ee7e49c3")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7039], {
    7039: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => l,
        Lightbox_Dialog_Title: () => n,
        Lightbox_Download_Button_Label: () => a,
        Lightbox_Download_Button_Tooltip: () => s,
        Lightbox_Open_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Label: () => g,
        Lightbox_Reset_Zoom_Button_Tooltip: () => d,
        Lightbox_Zoom_In_Button_Label: () => u,
        Lightbox_Zoom_In_Button_Tooltip: () => f,
        Lightbox_Zoom_Out_Button_Label: () => h,
        Lightbox_Zoom_Out_Button__Tooltip: () => L,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => p,
        default: () => x
      });
      var _ = "Close lightbox",
        i = "Press {shortcut}",
        l = "Alt text: {alt}",
        n = "Image lightbox",
        a = "Download",
        s = "Download",
        b = "Open image in lightbox",
        g = "Reset",
        d = "Press {shortcut}",
        u = "Zoom in",
        f = "Press {shortcut}",
        h = "Zoom out",
        L = "Press {shortcut}",
        r = "Zoom level",
        p = "{zoom}%",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Dialog_Description: l,
          Lightbox_Dialog_Title: n,
          Lightbox_Download_Button_Label: a,
          Lightbox_Download_Button_Tooltip: s,
          Lightbox_Open_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Label: g,
          Lightbox_Reset_Zoom_Button_Tooltip: d,
          Lightbox_Zoom_In_Button_Label: u,
          Lightbox_Zoom_In_Button_Tooltip: f,
          Lightbox_Zoom_Out_Button_Label: h,
          Lightbox_Zoom_Out_Button__Tooltip: L,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: p
        }
    }
  }
]);