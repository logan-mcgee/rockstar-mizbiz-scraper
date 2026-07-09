try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "14d741a0-05fd-4067-a6b9-fbf36c7fb8a9", o._sentryDebugIdIdentifier = "sentry-dbid-14d741a0-05fd-4067-a6b9-fbf36c7fb8a9")
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
  [2573], {
    52573(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => n,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Download_Button_Label: () => g,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => b,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => f,
        default: () => L
      });
      var _ = "{description} - Bild in Lightbox ansehen",
        n = "Schließen",
        a = "{shortcut} drücken",
        i = "Heranzoomen",
        l = "{shortcut} drücken",
        b = "Herauszoomen",
        d = "{shortcut} drücken",
        s = "Zurücksetzen",
        u = "{shortcut} drücken",
        r = "Zoomstufe",
        f = "{zoom} %",
        g = "Herunterladen",
        h = "Herunterladen",
        L = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: n,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: b,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: f,
          Lightbox_Download_Button_Label: g,
          Lightbox_Download_Button_Tooltip: h
        }
    }
  }
]);