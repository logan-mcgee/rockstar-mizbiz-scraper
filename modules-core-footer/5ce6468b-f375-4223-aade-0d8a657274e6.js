! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "5ce6468b-f375-4223-aade-0d8a657274e6", o._sentryDebugIdIdentifier = "sentry-dbid-5ce6468b-f375-4223-aade-0d8a657274e6")
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
  [6940], {
    36940: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => m,
        Lightbox_Dialog_Title: () => h,
        Lightbox_Download_Button_Label: () => s,
        Lightbox_Download_Button_Tooltip: () => f,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => c
      });
      var _ = "Chiudi lightbox",
        i = "Premi {shortcut}",
        a = "Aumenta zoom",
        l = "Premi {shortcut}",
        n = "Diminuisci zoom",
        b = "Premi {shortcut}",
        d = "Ripristina",
        g = "Premi {shortcut}",
        u = "Livello zoom",
        r = "{zoom}%",
        s = "Scarica",
        f = "Scarica",
        L = "Apri immagine in lightbox",
        h = "Immagine lightbox",
        m = "Testo alternativo: {alt}",
        c = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: r,
          Lightbox_Download_Button_Label: s,
          Lightbox_Download_Button_Tooltip: f,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: h,
          Lightbox_Dialog_Description: m
        }
    }
  }
]);