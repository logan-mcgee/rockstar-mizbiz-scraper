try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "1e4e885a-c5df-4c9f-81c2-760618f4c130", o._sentryDebugIdIdentifier = "sentry-dbid-1e4e885a-c5df-4c9f-81c2-760618f4c130")
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
  [4632], {
    74632(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => l,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => p,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => u,
        Lightbox_Reset_Zoom_Button_Tooltip: () => b,
        Lightbox_Zoom_In_Button_Label: () => n,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => d,
        Lightbox_Zoom_Out_Button__Tooltip: () => s,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => f
      });
      var _ = "{description} - Voir l'image dans la lightbox",
        l = "Fermer",
        a = "Appuyer sur {shortcut}",
        n = "Zoom avant",
        i = "Appuyer sur {shortcut}",
        d = "Zoom arrière",
        s = "Appuyer sur {shortcut}",
        u = "Réinitialiser",
        b = "Appuyer sur {shortcut}",
        r = "Niveau de zoom",
        g = "{zoom} %",
        h = "Télécharger",
        p = "Télécharger",
        f = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: l,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: n,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: d,
          Lightbox_Zoom_Out_Button__Tooltip: s,
          Lightbox_Reset_Zoom_Button_Label: u,
          Lightbox_Reset_Zoom_Button_Tooltip: b,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: h,
          Lightbox_Download_Button_Tooltip: p
        }
    }
  }
]);