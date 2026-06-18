try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "1d52b0b0-2cbf-457c-9c72-0b5400743da6", o._sentryDebugIdIdentifier = "sentry-dbid-1d52b0b0-2cbf-457c-9c72-0b5400743da6")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [3406], {
    83406(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => i,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => n,
        Lightbox_Zoom_In_Button_Tooltip: () => a,
        Lightbox_Zoom_Out_Button_Label: () => b,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => f
      });
      var _ = "{description} - Visualizza immagine in lightbox",
        i = "Chiudi",
        l = "Premi {shortcut}",
        n = "Aumenta zoom",
        a = "Premi {shortcut}",
        b = "Diminuisci zoom",
        d = "Premi {shortcut}",
        s = "Ripristina",
        u = "Premi {shortcut}",
        g = "Livello zoom",
        r = "{zoom}%",
        h = "Scarica",
        L = "Scarica",
        f = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: i,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: n,
          Lightbox_Zoom_In_Button_Tooltip: a,
          Lightbox_Zoom_Out_Button_Label: b,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: r,
          Lightbox_Download_Button_Label: h,
          Lightbox_Download_Button_Tooltip: L
        }
    }
  }
]);