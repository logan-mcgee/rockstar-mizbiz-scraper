try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "05850ae9-28d6-4856-9ce5-b1a6927ce3e8", o._sentryDebugIdIdentifier = "sentry-dbid-05850ae9-28d6-4856-9ce5-b1a6927ce3e8")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4220], {
    94220: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => a,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => p
      });
      var _ = "Lightbox schließen",
        n = "{shortcut} drücken",
        l = "Heranzoomen",
        i = "{shortcut} drücken",
        a = "Herauszoomen",
        d = "{shortcut} drücken",
        b = "Zurücksetzen",
        s = "{shortcut} drücken",
        u = "Zoomstufe",
        g = "{zoom} %",
        r = "Herunterladen",
        h = "Herunterladen",
        L = "Bild in Lightbox öffnen",
        f = "Bild im Großformat",
        c = "Alternativtext: {alt}",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: a,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);