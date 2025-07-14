try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "92cb5d7f-a08b-4a9c-890f-fd4a97fb5599", o._sentryDebugIdIdentifier = "sentry-dbid-92cb5d7f-a08b-4a9c-890f-fd4a97fb5599")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [9583], {
    39583: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => i,
        Lightbox_Close_Button_Tooltip: () => _,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => L,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => r,
        Lightbox_Open_Button_Label: () => f,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => a,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => p
      });
      var i = "Chiudi lightbox",
        _ = "Premi {shortcut}",
        l = "Aumenta zoom",
        a = "Premi {shortcut}",
        n = "Diminuisci zoom",
        b = "Premi {shortcut}",
        d = "Ripristina",
        s = "Premi {shortcut}",
        g = "Livello zoom",
        u = "{zoom}%",
        h = "Scarica",
        r = "Scarica",
        f = "Apri immagine in lightbox",
        L = "Immagine lightbox",
        c = "Testo alternativo: {alt}",
        p = {
          Lightbox_Close_Button_Label: i,
          Lightbox_Close_Button_Tooltip: _,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: a,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: h,
          Lightbox_Download_Button_Tooltip: r,
          Lightbox_Open_Button_Label: f,
          Lightbox_Dialog_Title: L,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);