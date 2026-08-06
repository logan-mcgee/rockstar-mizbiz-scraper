try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "841af336-d935-48cd-82fa-c1961b08c7df", o._sentryDebugIdIdentifier = "sentry-dbid-841af336-d935-48cd-82fa-c1961b08c7df")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [788], {
    20788(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => a,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => f,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => d,
        Lightbox_Zoom_Out_Button__Tooltip: () => s,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => L
      });
      var _ = "{description} - Ver imagem na lightbox",
        a = "Fechar",
        n = "Pressionar {shortcut}",
        i = "Aproximar zoom",
        l = "Pressionar {shortcut}",
        d = "Afastar zoom",
        s = "Pressionar {shortcut}",
        b = "Resetar",
        r = "Pressionar {shortcut}",
        u = "Nível de zoom",
        g = "{zoom}%",
        f = "Baixar",
        h = "Baixar",
        L = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: a,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: d,
          Lightbox_Zoom_Out_Button__Tooltip: s,
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