try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "934af69b-21e8-40db-a176-b8b1da49caca", o._sentryDebugIdIdentifier = "sentry-dbid-934af69b-21e8-40db-a176-b8b1da49caca")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [9760], {
    9760(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => a,
        Lightbox_Download_Button_Tooltip: () => l,
        Lightbox_Open_Button_Label: () => i,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => d,
        Lightbox_Zoom_In_Button_Tooltip: () => g,
        Lightbox_Zoom_Out_Button_Label: () => u,
        Lightbox_Zoom_Out_Button__Tooltip: () => r,
        Lightbox_Zoom_Slider_Label: () => h,
        Lightbox_Zoom_Slider_Tooltip: () => L,
        default: () => f
      });
      var _ = "Close",
        n = "Press {shortcut}",
        a = "Download",
        l = "Download",
        i = "{description} - View image in lightbox",
        b = "Reset",
        s = "Press {shortcut}",
        d = "Zoom in",
        g = "Press {shortcut}",
        u = "Zoom out",
        r = "Press {shortcut}",
        h = "Zoom level",
        L = "{zoom}%",
        f = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Download_Button_Label: a,
          Lightbox_Download_Button_Tooltip: l,
          Lightbox_Open_Button_Label: i,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_In_Button_Label: d,
          Lightbox_Zoom_In_Button_Tooltip: g,
          Lightbox_Zoom_Out_Button_Label: u,
          Lightbox_Zoom_Out_Button__Tooltip: r,
          Lightbox_Zoom_Slider_Label: h,
          Lightbox_Zoom_Slider_Tooltip: L
        }
    }
  }
]);