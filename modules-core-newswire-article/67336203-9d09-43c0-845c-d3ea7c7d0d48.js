! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "67336203-9d09-43c0-845c-d3ea7c7d0d48", o._sentryDebugIdIdentifier = "sentry-dbid-67336203-9d09-43c0-845c-d3ea7c7d0d48")
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
  [9474], {
    19474: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => x,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => r,
        Lightbox_Reset_Zoom_Button_Tooltip: () => d,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => s,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => f
      });
      var _ = "Fechar lightbox",
        i = "Pressionar {shortcut}",
        a = "Aproximar zoom",
        l = "Pressionar {shortcut}",
        n = "Afastar zoom",
        b = "Pressionar {shortcut}",
        r = "Resetar",
        d = "Pressionar {shortcut}",
        s = "Nível de zoom",
        g = "{zoom}%",
        u = "Baixar",
        L = "Baixar",
        h = "Abrir imagem na lightbox",
        x = "lightbox da imagem",
        c = "Texto alternativo: {alt}",
        f = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: r,
          Lightbox_Reset_Zoom_Button_Tooltip: d,
          Lightbox_Zoom_Slider_Label: s,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: h,
          Lightbox_Dialog_Title: x,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);