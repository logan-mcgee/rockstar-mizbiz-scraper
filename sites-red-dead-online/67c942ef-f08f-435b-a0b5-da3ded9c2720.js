try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "67c942ef-f08f-435b-a0b5-da3ded9c2720", o._sentryDebugIdIdentifier = "sentry-dbid-67c942ef-f08f-435b-a0b5-da3ded9c2720")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [3031], {
    53031(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => l,
        Lightbox_Download_Button_Tooltip: () => a,
        Lightbox_Open_Button_Label: () => i,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => b,
        Lightbox_Zoom_In_Button_Label: () => s,
        Lightbox_Zoom_In_Button_Tooltip: () => u,
        Lightbox_Zoom_Out_Button_Label: () => f,
        Lightbox_Zoom_Out_Button__Tooltip: () => g,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => h,
        default: () => L
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
        f = "Zoom out",
        g = "Press {shortcut}",
        r = "Zoom level",
        h = "{zoom}%",
        L = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Download_Button_Label: l,
          Lightbox_Download_Button_Tooltip: a,
          Lightbox_Open_Button_Label: i,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: b,
          Lightbox_Zoom_In_Button_Label: s,
          Lightbox_Zoom_In_Button_Tooltip: u,
          Lightbox_Zoom_Out_Button_Label: f,
          Lightbox_Zoom_Out_Button__Tooltip: g,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: h
        }
    }
  }
]);