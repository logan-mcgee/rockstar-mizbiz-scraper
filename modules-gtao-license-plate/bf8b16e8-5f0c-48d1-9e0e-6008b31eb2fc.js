try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "bf8b16e8-5f0c-48d1-9e0e-6008b31eb2fc", o._sentryDebugIdIdentifier = "sentry-dbid-bf8b16e8-5f0c-48d1-9e0e-6008b31eb2fc")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [6087], {
    56087(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => l,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => b,
        Lightbox_Zoom_Out_Button_Label: () => i,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => f,
        default: () => r
      });
      var _ = "{description} - ライトボックスでイメージを見る",
        l = "閉じる",
        n = "{shortcut}を押す",
        a = "ズームイン",
        b = "{shortcut}を押す",
        i = "ズームアウト",
        d = "{shortcut}を押す",
        s = "リセット",
        u = "{shortcut}を押す",
        g = "ズームの度合",
        f = "{zoom}%",
        h = "ダウンロード",
        L = "ダウンロード",
        r = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: l,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: b,
          Lightbox_Zoom_Out_Button_Label: i,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: f,
          Lightbox_Download_Button_Label: h,
          Lightbox_Download_Button_Tooltip: L
        }
    }
  }
]);