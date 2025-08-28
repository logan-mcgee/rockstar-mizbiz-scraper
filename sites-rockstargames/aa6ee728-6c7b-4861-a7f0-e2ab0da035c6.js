try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "aa6ee728-6c7b-4861-a7f0-e2ab0da035c6", o._sentryDebugIdIdentifier = "sentry-dbid-aa6ee728-6c7b-4861-a7f0-e2ab0da035c6")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7039], {
    7039: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => a,
        Lightbox_Dialog_Title: () => l,
        Lightbox_Download_Button_Label: () => n,
        Lightbox_Download_Button_Tooltip: () => s,
        Lightbox_Open_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => u,
        Lightbox_Zoom_In_Button_Tooltip: () => r,
        Lightbox_Zoom_Out_Button_Label: () => h,
        Lightbox_Zoom_Out_Button__Tooltip: () => L,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => p,
        default: () => x
      });
      var _ = "Close lightbox",
        i = "Press {shortcut}",
        a = "Alt text: {alt}",
        l = "Image lightbox",
        n = "Download",
        s = "Download",
        b = "Open image in lightbox",
        d = "Reset",
        g = "Press {shortcut}",
        u = "Zoom in",
        r = "Press {shortcut}",
        h = "Zoom out",
        L = "Press {shortcut}",
        f = "Zoom level",
        p = "{zoom}%",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Dialog_Description: a,
          Lightbox_Dialog_Title: l,
          Lightbox_Download_Button_Label: n,
          Lightbox_Download_Button_Tooltip: s,
          Lightbox_Open_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_In_Button_Label: u,
          Lightbox_Zoom_In_Button_Tooltip: r,
          Lightbox_Zoom_Out_Button_Label: h,
          Lightbox_Zoom_Out_Button__Tooltip: L,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: p
        }
    }
  }
]);