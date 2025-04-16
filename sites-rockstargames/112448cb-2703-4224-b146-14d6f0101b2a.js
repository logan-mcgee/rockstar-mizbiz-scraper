! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "112448cb-2703-4224-b146-14d6f0101b2a", o._sentryDebugIdIdentifier = "sentry-dbid-112448cb-2703-4224-b146-14d6f0101b2a")
  } catch (o) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4186], {
    14186: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => f,
        Lightbox_Dialog_Title: () => x,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => g,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => d,
        default: () => c
      });
      var _ = "Cerrar Lightbox",
        a = "Pulsa {shortcut}",
        i = "Acercar zoom",
        l = "Pulsa {shortcut}",
        n = "Alejar zoom",
        b = "Pulsa {shortcut}",
        g = "Reiniciar",
        s = "Pulsa {shortcut}",
        r = "Nivel de zoom",
        d = "{zoom}%",
        u = "Descargar",
        L = "Descargar",
        h = "Abrir imagen en Lightbox",
        x = "Imagen en Lightbox",
        f = "Texto alternativo: {alt}",
        c = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: g,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: d,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: h,
          Lightbox_Dialog_Title: x,
          Lightbox_Dialog_Description: f
        }
    }
  }
]);