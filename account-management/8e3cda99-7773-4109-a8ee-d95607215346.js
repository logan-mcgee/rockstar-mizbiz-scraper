try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "8e3cda99-7773-4109-a8ee-d95607215346", o._sentryDebugIdIdentifier = "sentry-dbid-8e3cda99-7773-4109-a8ee-d95607215346")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunkaccount_management = self.webpackChunkaccount_management || []).push([
  [9359], {
    89359: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => l,
        Lightbox_Download_Button_Tooltip: () => a,
        Lightbox_Open_Button_Label: () => i,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => b,
        Lightbox_Zoom_In_Button_Label: () => s,
        Lightbox_Zoom_In_Button_Tooltip: () => u,
        Lightbox_Zoom_Out_Button_Label: () => g,
        Lightbox_Zoom_Out_Button__Tooltip: () => f,
        Lightbox_Zoom_Slider_Label: () => h,
        Lightbox_Zoom_Slider_Tooltip: () => L,
        default: () => r
      });
      var _ = "Close",
        n = "Press {shortcut}",
        l = "Download",
        a = "Download",
        i = "{description} - View image in lightbox",
        d = "Reset",
        b = "Press {shortcut}",
        s = "Zoom in",
        u = "Press {shortcut}",
        g = "Zoom out",
        f = "Press {shortcut}",
        h = "Zoom level",
        L = "{zoom}%",
        r = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Download_Button_Label: l,
          Lightbox_Download_Button_Tooltip: a,
          Lightbox_Open_Button_Label: i,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: b,
          Lightbox_Zoom_In_Button_Label: s,
          Lightbox_Zoom_In_Button_Tooltip: u,
          Lightbox_Zoom_Out_Button_Label: g,
          Lightbox_Zoom_Out_Button__Tooltip: f,
          Lightbox_Zoom_Slider_Label: h,
          Lightbox_Zoom_Slider_Tooltip: L
        }
    }
  }
]);