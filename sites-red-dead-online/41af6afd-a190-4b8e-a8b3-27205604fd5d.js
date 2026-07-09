try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "41af6afd-a190-4b8e-a8b3-27205604fd5d", o._sentryDebugIdIdentifier = "sentry-dbid-41af6afd-a190-4b8e-a8b3-27205604fd5d")
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
  [685], {
    40685(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => n,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Download_Button_Label: () => g,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => d,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => l,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => f,
        default: () => L
      });
      var _ = "{description} - Bild in Lightbox ansehen",
        n = "Schließen",
        a = "{shortcut} drücken",
        d = "Heranzoomen",
        i = "{shortcut} drücken",
        l = "Herauszoomen",
        b = "{shortcut} drücken",
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
          Lightbox_Zoom_In_Button_Label: d,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: l,
          Lightbox_Zoom_Out_Button__Tooltip: b,
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