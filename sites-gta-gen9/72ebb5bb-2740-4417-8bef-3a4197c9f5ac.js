! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "72ebb5bb-2740-4417-8bef-3a4197c9f5ac", o._sentryDebugIdIdentifier = "sentry-dbid-72ebb5bb-2740-4417-8bef-3a4197c9f5ac")
  } catch (o) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6536], {
    56536: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => h,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => f,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => g,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => d,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => x
      });
      var _ = "Cerrar",
        a = "Presiona {shortcut}",
        i = "Acercar",
        l = "Presiona {shortcut}",
        n = "Alejar",
        b = "Presiona {shortcut}",
        g = "Restablecer",
        s = "Presiona {shortcut}",
        d = "Nivel del zoom",
        r = "{zoom}%",
        u = "Descargar",
        f = "Descargar",
        L = "Abrir imagen",
        h = "Imagen",
        c = "Texto alt: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: g,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: d,
          Lightbox_Zoom_Slider_Tooltip: r,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: f,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: h,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);