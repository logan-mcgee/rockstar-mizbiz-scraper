! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "ad90e7c0-e771-41bd-b791-dea33ebe05fc", o._sentryDebugIdIdentifier = "sentry-dbid-ad90e7c0-e771-41bd-b791-dea33ebe05fc")
  } catch (o) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [1607], {
    11607: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => f,
        Lightbox_Dialog_Title: () => h,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => c,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => s,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => x
      });
      var _ = "Cerrar",
        a = "Presiona {shortcut}",
        l = "Acercar",
        i = "Presiona {shortcut}",
        n = "Alejar",
        b = "Presiona {shortcut}",
        d = "Restablecer",
        r = "Presiona {shortcut}",
        s = "Nivel del zoom",
        g = "{zoom}%",
        u = "Descargar",
        L = "Descargar",
        c = "Abrir imagen",
        h = "Imagen",
        f = "Texto alt: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: r,
          Lightbox_Zoom_Slider_Label: s,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: c,
          Lightbox_Dialog_Title: h,
          Lightbox_Dialog_Description: f
        }
    }
  }
]);