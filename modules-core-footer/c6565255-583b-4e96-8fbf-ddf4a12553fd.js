try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "c6565255-583b-4e96-8fbf-ddf4a12553fd", o._sentryDebugIdIdentifier = "sentry-dbid-c6565255-583b-4e96-8fbf-ddf4a12553fd")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [5247], {
    85247: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => L,
        Lightbox_Download_Button_Label: () => f,
        Lightbox_Download_Button_Tooltip: () => r,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => n,
        Lightbox_Zoom_Out_Button_Label: () => d,
        Lightbox_Zoom_Out_Button__Tooltip: () => a,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => p
      });
      var _ = "ライトボックスを閉じる",
        l = "{shortcut}を押す",
        i = "ズームイン",
        n = "{shortcut}を押す",
        d = "ズームアウト",
        a = "{shortcut}を押す",
        b = "リセット",
        s = "{shortcut}を押す",
        u = "ズームの度合",
        g = "{zoom}%",
        f = "ダウンロード",
        r = "ダウンロード",
        h = "ライトボックス内のイメージを開く",
        L = "ライトボックスのイメージ",
        c = "Altテキスト：{alt}",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: n,
          Lightbox_Zoom_Out_Button_Label: d,
          Lightbox_Zoom_Out_Button__Tooltip: a,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: f,
          Lightbox_Download_Button_Tooltip: r,
          Lightbox_Open_Button_Label: h,
          Lightbox_Dialog_Title: L,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);