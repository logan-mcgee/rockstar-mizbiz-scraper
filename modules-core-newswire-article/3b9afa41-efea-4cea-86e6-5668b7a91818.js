try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "3b9afa41-efea-4cea-86e6-5668b7a91818", o._sentryDebugIdIdentifier = "sentry-dbid-3b9afa41-efea-4cea-86e6-5668b7a91818")
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
  [1374], {
    31374(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => a,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => b,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => L
      });
      var _ = "{description} - ライトボックスでイメージを見る",
        a = "閉じる",
        n = "{shortcut}を押す",
        l = "ズームイン",
        i = "{shortcut}を押す",
        b = "ズームアウト",
        d = "{shortcut}を押す",
        s = "リセット",
        u = "{shortcut}を押す",
        f = "ズームの度合",
        g = "{zoom}%",
        r = "ダウンロード",
        h = "ダウンロード",
        L = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: a,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: b,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: h
        }
    }
  }
]);