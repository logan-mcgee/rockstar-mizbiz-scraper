try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "45c86e42-3732-4345-ae45-363c2997b5da", o._sentryDebugIdIdentifier = "sentry-dbid-45c86e42-3732-4345-ae45-363c2997b5da")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9010], {
    49010: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => f,
        Lightbox_Dialog_Title: () => p,
        Lightbox_Download_Button_Label: () => g,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => a,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => s,
        default: () => x
      });
      var _ = "Fermer la lightbox",
        i = "Appuyer sur {shortcut}",
        l = "Zoom avant",
        a = "Appuyer sur {shortcut}",
        n = "Zoom arrière",
        b = "Appuyer sur {shortcut}",
        d = "Réinitialiser",
        r = "Appuyer sur {shortcut}",
        u = "Niveau de zoom",
        s = "{zoom} %",
        g = "Télécharger",
        h = "Télécharger",
        L = "Ouvrir l'image dans la lightbox",
        p = "Image de la lightbox",
        f = "Text alternatif : {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: a,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: r,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: s,
          Lightbox_Download_Button_Label: g,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: p,
          Lightbox_Dialog_Description: f
        }
    }
  }
]);