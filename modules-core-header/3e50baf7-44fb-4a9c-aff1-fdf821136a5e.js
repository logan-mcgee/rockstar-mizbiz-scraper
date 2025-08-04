try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "3e50baf7-44fb-4a9c-aff1-fdf821136a5e", o._sentryDebugIdIdentifier = "sentry-dbid-3e50baf7-44fb-4a9c-aff1-fdf821136a5e")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4220], {
    94220: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => L,
        Lightbox_Download_Button_Label: () => g,
        Lightbox_Download_Button_Tooltip: () => f,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => a,
        Lightbox_Zoom_Out_Button_Label: () => l,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => p
      });
      var _ = "Lightbox schließen",
        n = "{shortcut} drücken",
        i = "Heranzoomen",
        a = "{shortcut} drücken",
        l = "Herauszoomen",
        d = "{shortcut} drücken",
        b = "Zurücksetzen",
        s = "{shortcut} drücken",
        u = "Zoomstufe",
        r = "{zoom} %",
        g = "Herunterladen",
        f = "Herunterladen",
        h = "Bild in Lightbox öffnen",
        L = "Bild im Großformat",
        c = "Alternativtext: {alt}",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: a,
          Lightbox_Zoom_Out_Button_Label: l,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: r,
          Lightbox_Download_Button_Label: g,
          Lightbox_Download_Button_Tooltip: f,
          Lightbox_Open_Button_Label: h,
          Lightbox_Dialog_Title: L,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);