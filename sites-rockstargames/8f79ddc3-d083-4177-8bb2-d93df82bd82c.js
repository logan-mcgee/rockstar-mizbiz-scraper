try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "8f79ddc3-d083-4177-8bb2-d93df82bd82c", o._sentryDebugIdIdentifier = "sentry-dbid-8f79ddc3-d083-4177-8bb2-d93df82bd82c")
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
  [9760], {
    9760: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => l,
        Lightbox_Download_Button_Tooltip: () => i,
        Lightbox_Open_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => a,
        Lightbox_Zoom_In_Button_Label: () => b,
        Lightbox_Zoom_In_Button_Tooltip: () => u,
        Lightbox_Zoom_Out_Button_Label: () => g,
        Lightbox_Zoom_Out_Button__Tooltip: () => r,
        Lightbox_Zoom_Slider_Label: () => h,
        Lightbox_Zoom_Slider_Tooltip: () => f,
        default: () => L
      });
      var _ = "Close lightbox",
        n = "Press {shortcut}",
        l = "Download",
        i = "Download",
        d = "{description} - View image in lightbox",
        s = "Reset",
        a = "Press {shortcut}",
        b = "Zoom in",
        u = "Press {shortcut}",
        g = "Zoom out",
        r = "Press {shortcut}",
        h = "Zoom level",
        f = "{zoom}%",
        L = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Download_Button_Label: l,
          Lightbox_Download_Button_Tooltip: i,
          Lightbox_Open_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: b,
          Lightbox_Zoom_In_Button_Tooltip: u,
          Lightbox_Zoom_Out_Button_Label: g,
          Lightbox_Zoom_Out_Button__Tooltip: r,
          Lightbox_Zoom_Slider_Label: h,
          Lightbox_Zoom_Slider_Tooltip: f
        }
    }
  }
]);