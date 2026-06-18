try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "5a55c496-d9c1-415a-9239-3b66443c5ca7", o._sentryDebugIdIdentifier = "sentry-dbid-5a55c496-d9c1-415a-9239-3b66443c5ca7")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [316], {
    22316(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => i,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => f,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => d,
        Lightbox_Zoom_Out_Button_Label: () => l,
        Lightbox_Zoom_Out_Button__Tooltip: () => s,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => L
      });
      var _ = "{description} - Ver imagem na lightbox",
        i = "Fechar",
        n = "Pressionar {shortcut}",
        a = "Aproximar zoom",
        d = "Pressionar {shortcut}",
        l = "Afastar zoom",
        s = "Pressionar {shortcut}",
        b = "Resetar",
        r = "Pressionar {shortcut}",
        u = "Nível de zoom",
        g = "{zoom}%",
        h = "Baixar",
        f = "Baixar",
        L = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: i,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: d,
          Lightbox_Zoom_Out_Button_Label: l,
          Lightbox_Zoom_Out_Button__Tooltip: s,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: r,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: h,
          Lightbox_Download_Button_Tooltip: f
        }
    }
  }
]);