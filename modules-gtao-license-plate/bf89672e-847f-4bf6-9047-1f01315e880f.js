try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "bf89672e-847f-4bf6-9047-1f01315e880f", o._sentryDebugIdIdentifier = "sentry-dbid-bf89672e-847f-4bf6-9047-1f01315e880f")
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
  [9760], {
    9760: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Download_Button_Label: () => n,
        Lightbox_Download_Button_Tooltip: () => a,
        Lightbox_Open_Button_Label: () => i,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => b,
        Lightbox_Zoom_In_Button_Tooltip: () => u,
        Lightbox_Zoom_Out_Button_Label: () => g,
        Lightbox_Zoom_Out_Button__Tooltip: () => f,
        Lightbox_Zoom_Slider_Label: () => h,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => L
      });
      var _ = "Close lightbox",
        l = "Press {shortcut}",
        n = "Download",
        a = "Download",
        i = "{description} - View image in lightbox",
        d = "Reset",
        s = "Press {shortcut}",
        b = "Zoom in",
        u = "Press {shortcut}",
        g = "Zoom out",
        f = "Press {shortcut}",
        h = "Zoom level",
        r = "{zoom}%",
        L = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Download_Button_Label: n,
          Lightbox_Download_Button_Tooltip: a,
          Lightbox_Open_Button_Label: i,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_In_Button_Label: b,
          Lightbox_Zoom_In_Button_Tooltip: u,
          Lightbox_Zoom_Out_Button_Label: g,
          Lightbox_Zoom_Out_Button__Tooltip: f,
          Lightbox_Zoom_Slider_Label: h,
          Lightbox_Zoom_Slider_Tooltip: r
        }
    }
  }
]);