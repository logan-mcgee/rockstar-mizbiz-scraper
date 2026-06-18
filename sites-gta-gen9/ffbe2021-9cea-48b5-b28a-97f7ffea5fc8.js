try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "ffbe2021-9cea-48b5-b28a-97f7ffea5fc8", o._sentryDebugIdIdentifier = "sentry-dbid-ffbe2021-9cea-48b5-b28a-97f7ffea5fc8")
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
  [4974], {
    84974(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => l,
        Lightbox_Download_Button_Tooltip: () => i,
        Lightbox_Open_Button_Label: () => a,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => d,
        Lightbox_Zoom_In_Button_Tooltip: () => g,
        Lightbox_Zoom_Out_Button_Label: () => u,
        Lightbox_Zoom_Out_Button__Tooltip: () => f,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => h,
        default: () => L
      });
      var _ = "Close",
        n = "Press {shortcut}",
        l = "Download",
        i = "Download",
        a = "{description} - View image in lightbox",
        b = "Reset",
        s = "Press {shortcut}",
        d = "Zoom in",
        g = "Press {shortcut}",
        u = "Zoom out",
        f = "Press {shortcut}",
        r = "Zoom level",
        h = "{zoom}%",
        L = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Download_Button_Label: l,
          Lightbox_Download_Button_Tooltip: i,
          Lightbox_Open_Button_Label: a,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_In_Button_Label: d,
          Lightbox_Zoom_In_Button_Tooltip: g,
          Lightbox_Zoom_Out_Button_Label: u,
          Lightbox_Zoom_Out_Button__Tooltip: f,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: h
        }
    }
  }
]);