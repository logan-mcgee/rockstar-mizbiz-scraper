try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "d7cd1234-4b27-407f-8da3-312076d02d76", o._sentryDebugIdIdentifier = "sentry-dbid-d7cd1234-4b27-407f-8da3-312076d02d76")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1607], {
    11607: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => p,
        Lightbox_Dialog_Title: () => L,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => f,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => n,
        Lightbox_Zoom_In_Button_Tooltip: () => a,
        Lightbox_Zoom_Out_Button_Label: () => l,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => c
      });
      var _ = "Cerrar",
        i = "Presiona {shortcut}",
        n = "Acercar",
        a = "Presiona {shortcut}",
        l = "Alejar",
        d = "Presiona {shortcut}",
        b = "Restablecer",
        s = "Presiona {shortcut}",
        g = "Nivel del zoom",
        r = "{zoom}%",
        u = "Descargar",
        f = "Descargar",
        h = "Abrir imagen",
        L = "Imagen",
        p = "Texto alt: {alt}",
        c = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Zoom_In_Button_Label: n,
          Lightbox_Zoom_In_Button_Tooltip: a,
          Lightbox_Zoom_Out_Button_Label: l,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: r,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: f,
          Lightbox_Open_Button_Label: h,
          Lightbox_Dialog_Title: L,
          Lightbox_Dialog_Description: p
        }
    }
  }
]);