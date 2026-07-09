try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "976b0831-536a-47b8-a9d6-379cb5f4bfd0", o._sentryDebugIdIdentifier = "sentry-dbid-976b0831-536a-47b8-a9d6-379cb5f4bfd0")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [7902], {
    67902(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Download_Button_Label: () => a,
        Lightbox_Download_Button_Tooltip: () => n,
        Lightbox_Open_Button_Label: () => i,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => d,
        Lightbox_Zoom_In_Button_Label: () => s,
        Lightbox_Zoom_In_Button_Tooltip: () => u,
        Lightbox_Zoom_Out_Button_Label: () => g,
        Lightbox_Zoom_Out_Button__Tooltip: () => f,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => h,
        default: () => L
      });
      var _ = "Close",
        l = "Press {shortcut}",
        a = "Download",
        n = "Download",
        i = "{description} - View image in lightbox",
        b = "Reset",
        d = "Press {shortcut}",
        s = "Zoom in",
        u = "Press {shortcut}",
        g = "Zoom out",
        f = "Press {shortcut}",
        r = "Zoom level",
        h = "{zoom}%",
        L = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Download_Button_Label: a,
          Lightbox_Download_Button_Tooltip: n,
          Lightbox_Open_Button_Label: i,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: d,
          Lightbox_Zoom_In_Button_Label: s,
          Lightbox_Zoom_In_Button_Tooltip: u,
          Lightbox_Zoom_Out_Button_Label: g,
          Lightbox_Zoom_Out_Button__Tooltip: f,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: h
        }
    }
  }
]);