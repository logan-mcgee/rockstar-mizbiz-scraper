try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "84148de0-2149-4f64-8af9-080999d0782e", o._sentryDebugIdIdentifier = "sentry-dbid-84148de0-2149-4f64-8af9-080999d0782e")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [947], {
    59947(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => i,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => p,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => d,
        Lightbox_Zoom_Out_Button_Label: () => a,
        Lightbox_Zoom_Out_Button__Tooltip: () => s,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => f
      });
      var _ = "{description} - Voir l'image dans la lightbox",
        i = "Fermer",
        n = "Appuyer sur {shortcut}",
        l = "Zoom avant",
        d = "Appuyer sur {shortcut}",
        a = "Zoom arrière",
        s = "Appuyer sur {shortcut}",
        b = "Réinitialiser",
        r = "Appuyer sur {shortcut}",
        u = "Niveau de zoom",
        g = "{zoom} %",
        h = "Télécharger",
        p = "Télécharger",
        f = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: i,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: d,
          Lightbox_Zoom_Out_Button_Label: a,
          Lightbox_Zoom_Out_Button__Tooltip: s,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: r,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: h,
          Lightbox_Download_Button_Tooltip: p
        }
    }
  }
]);