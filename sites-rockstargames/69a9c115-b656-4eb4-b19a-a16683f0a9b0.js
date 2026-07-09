try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "69a9c115-b656-4eb4-b19a-a16683f0a9b0", o._sentryDebugIdIdentifier = "sentry-dbid-69a9c115-b656-4eb4-b19a-a16683f0a9b0")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3031], {
    53031(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Download_Button_Label: () => n,
        Lightbox_Download_Button_Tooltip: () => l,
        Lightbox_Open_Button_Label: () => i,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => d,
        Lightbox_Zoom_In_Button_Tooltip: () => u,
        Lightbox_Zoom_Out_Button_Label: () => g,
        Lightbox_Zoom_Out_Button__Tooltip: () => r,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => h,
        default: () => L
      });
      var _ = "Close",
        a = "Press {shortcut}",
        n = "Download",
        l = "Download",
        i = "{description} - View image in lightbox",
        b = "Reset",
        s = "Press {shortcut}",
        d = "Zoom in",
        u = "Press {shortcut}",
        g = "Zoom out",
        r = "Press {shortcut}",
        f = "Zoom level",
        h = "{zoom}%",
        L = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Download_Button_Label: n,
          Lightbox_Download_Button_Tooltip: l,
          Lightbox_Open_Button_Label: i,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_In_Button_Label: d,
          Lightbox_Zoom_In_Button_Tooltip: u,
          Lightbox_Zoom_Out_Button_Label: g,
          Lightbox_Zoom_Out_Button__Tooltip: r,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: h
        }
    }
  }
]);