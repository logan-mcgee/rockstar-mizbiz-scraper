try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "891e6241-3027-43cf-a9a3-ba36bc861252", o._sentryDebugIdIdentifier = "sentry-dbid-891e6241-3027-43cf-a9a3-ba36bc861252")
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
  [9474], {
    19474: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => p,
        Lightbox_Dialog_Title: () => L,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => f,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => x
      });
      var _ = "Fechar lightbox",
        a = "Pressionar {shortcut}",
        i = "Aproximar zoom",
        l = "Pressionar {shortcut}",
        n = "Afastar zoom",
        b = "Pressionar {shortcut}",
        d = "Resetar",
        s = "Pressionar {shortcut}",
        g = "Nível de zoom",
        r = "{zoom}%",
        u = "Baixar",
        h = "Baixar",
        f = "Abrir imagem na lightbox",
        L = "lightbox da imagem",
        p = "Texto alternativo: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: r,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: f,
          Lightbox_Dialog_Title: L,
          Lightbox_Dialog_Description: p
        }
    }
  }
]);