! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "67f273ee-cbdc-4a90-95fd-e7d9e4b962ec", o._sentryDebugIdIdentifier = "sentry-dbid-67f273ee-cbdc-4a90-95fd-e7d9e4b962ec")
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
  [6940], {
    36940: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => f,
        Lightbox_Dialog_Title: () => h,
        Lightbox_Download_Button_Label: () => s,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => c,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => a,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => r,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => m
      });
      var _ = "Chiudi lightbox",
        i = "Premi {shortcut}",
        l = "Aumenta zoom",
        a = "Premi {shortcut}",
        n = "Diminuisci zoom",
        b = "Premi {shortcut}",
        d = "Ripristina",
        g = "Premi {shortcut}",
        r = "Livello zoom",
        u = "{zoom}%",
        s = "Scarica",
        L = "Scarica",
        c = "Apri immagine in lightbox",
        h = "Immagine lightbox",
        f = "Testo alternativo: {alt}",
        m = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: a,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_Slider_Label: r,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: s,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: c,
          Lightbox_Dialog_Title: h,
          Lightbox_Dialog_Description: f
        }
    }
  }
]);