! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "3fe42dcd-ec81-49c8-809a-2068750f4253", o._sentryDebugIdIdentifier = "sentry-dbid-3fe42dcd-ec81-49c8-809a-2068750f4253")
  } catch (o) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [1607], {
    11607: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => h,
        Lightbox_Dialog_Title: () => c,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => f,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => s,
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
        g = "Nivel del zoom",
        s = "{zoom}%",
        u = "Descargar",
        f = "Descargar",
        L = "Abrir imagen",
        c = "Imagen",
        h = "Texto alt: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: r,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: s,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: f,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: c,
          Lightbox_Dialog_Description: h
        }
    }
  }
]);