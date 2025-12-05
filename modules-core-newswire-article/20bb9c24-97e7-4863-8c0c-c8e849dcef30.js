try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "20bb9c24-97e7-4863-8c0c-c8e849dcef30", o._sentryDebugIdIdentifier = "sentry-dbid-20bb9c24-97e7-4863-8c0c-c8e849dcef30")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9760], {
    9760: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Download_Button_Label: () => n,
        Lightbox_Download_Button_Tooltip: () => i,
        Lightbox_Open_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Label: () => a,
        Lightbox_Reset_Zoom_Button_Tooltip: () => d,
        Lightbox_Zoom_In_Button_Label: () => b,
        Lightbox_Zoom_In_Button_Tooltip: () => u,
        Lightbox_Zoom_Out_Button_Label: () => r,
        Lightbox_Zoom_Out_Button__Tooltip: () => g,
        Lightbox_Zoom_Slider_Label: () => c,
        Lightbox_Zoom_Slider_Tooltip: () => f,
        default: () => h
      });
      var _ = "Close",
        l = "Press {shortcut}",
        n = "Download",
        i = "Download",
        s = "{description} - View image in lightbox",
        a = "Reset",
        d = "Press {shortcut}",
        b = "Zoom in",
        u = "Press {shortcut}",
        r = "Zoom out",
        g = "Press {shortcut}",
        c = "Zoom level",
        f = "{zoom}%",
        h = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Download_Button_Label: n,
          Lightbox_Download_Button_Tooltip: i,
          Lightbox_Open_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Label: a,
          Lightbox_Reset_Zoom_Button_Tooltip: d,
          Lightbox_Zoom_In_Button_Label: b,
          Lightbox_Zoom_In_Button_Tooltip: u,
          Lightbox_Zoom_Out_Button_Label: r,
          Lightbox_Zoom_Out_Button__Tooltip: g,
          Lightbox_Zoom_Slider_Label: c,
          Lightbox_Zoom_Slider_Tooltip: f
        }
    }
  }
]);