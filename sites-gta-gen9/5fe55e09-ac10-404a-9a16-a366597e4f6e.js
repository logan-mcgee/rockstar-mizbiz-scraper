! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "5fe55e09-ac10-404a-9a16-a366597e4f6e", o._sentryDebugIdIdentifier = "sentry-dbid-5fe55e09-ac10-404a-9a16-a366597e4f6e")
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
  [6940], {
    36940: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => m,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => g,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => d,
        default: () => x
      });
      var _ = "Chiudi lightbox",
        i = "Premi {shortcut}",
        a = "Aumenta zoom",
        l = "Premi {shortcut}",
        n = "Diminuisci zoom",
        b = "Premi {shortcut}",
        g = "Ripristina",
        s = "Premi {shortcut}",
        u = "Livello zoom",
        d = "{zoom}%",
        r = "Scarica",
        L = "Scarica",
        h = "Apri immagine in lightbox",
        f = "Immagine lightbox",
        m = "Testo alternativo: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: g,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: d,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: h,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: m
        }
    }
  }
]);