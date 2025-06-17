! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new o.Error).stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "c4da4a3b-c8e4-46ae-91fa-dcc053b989b9", o._sentryDebugIdIdentifier = "sentry-dbid-c4da4a3b-c8e4-46ae-91fa-dcc053b989b9")
  } catch (o) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4684], {
    54684: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => a,
        Lightbox_Close_Button_Tooltip: () => _,
        Lightbox_Dialog_Description: () => f,
        Lightbox_Dialog_Title: () => c,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => n,
        Lightbox_Zoom_Out_Button_Label: () => i,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => p
      });
      var a = "Cerrar",
        _ = "Presiona {shortcut}",
        l = "Acercar",
        n = "Presiona {shortcut}",
        i = "Alejar",
        b = "Presiona {shortcut}",
        d = "Restablecer",
        s = "Presiona {shortcut}",
        r = "Nivel del zoom",
        g = "{zoom}%",
        u = "Descargar",
        h = "Descargar",
        L = "Abrir imagen",
        c = "Imagen",
        f = "Texto alt: {alt}",
        p = {
          Lightbox_Close_Button_Label: a,
          Lightbox_Close_Button_Tooltip: _,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: n,
          Lightbox_Zoom_Out_Button_Label: i,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: c,
          Lightbox_Dialog_Description: f
        }
    }
  }
]);