! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "44af7c13-158c-47ed-993b-e4a52b5ccc2a", o._sentryDebugIdIdentifier = "sentry-dbid-44af7c13-158c-47ed-993b-e4a52b5ccc2a")
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
  [9873], {
    89873: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => f,
        Lightbox_Dialog_Title: () => h,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => c,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => s,
        default: () => x
      });
      var _ = "Cerrar Lightbox",
        l = "Pulsa {shortcut}",
        a = "Acercar zoom",
        i = "Pulsa {shortcut}",
        n = "Alejar zoom",
        b = "Pulsa {shortcut}",
        d = "Reiniciar",
        g = "Pulsa {shortcut}",
        r = "Nivel de zoom",
        s = "{zoom}%",
        u = "Descargar",
        c = "Descargar",
        L = "Abrir imagen en Lightbox",
        h = "Imagen en Lightbox",
        f = "Texto alternativo: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: s,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: c,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: h,
          Lightbox_Dialog_Description: f
        }
    }
  }
]);