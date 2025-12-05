try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "14c965ec-d1ef-4e78-9bc1-a115a2143c00", o._sentryDebugIdIdentifier = "sentry-dbid-14c965ec-d1ef-4e78-9bc1-a115a2143c00")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [8845], {
    28845: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => i,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => f,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => s,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => c
      });
      var _ = "{description} - Ver imagem na lightbox",
        i = "Fechar",
        n = "Pressionar {shortcut}",
        a = "Aproximar zoom",
        l = "Pressionar {shortcut}",
        s = "Afastar zoom",
        d = "Pressionar {shortcut}",
        b = "Resetar",
        r = "Pressionar {shortcut}",
        u = "Nível de zoom",
        g = "{zoom}%",
        f = "Baixar",
        h = "Baixar",
        c = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: i,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: s,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: r,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: f,
          Lightbox_Download_Button_Tooltip: h
        }
    }
  }
]);