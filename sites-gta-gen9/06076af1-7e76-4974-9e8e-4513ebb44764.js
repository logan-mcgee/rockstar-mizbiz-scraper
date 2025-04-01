! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "06076af1-7e76-4974-9e8e-4513ebb44764", o._sentryDebugIdIdentifier = "sentry-dbid-06076af1-7e76-4974-9e8e-4513ebb44764")
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
  [5247], {
    85247: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => p,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => L,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => r,
        Lightbox_Reset_Zoom_Button_Label: () => g,
        Lightbox_Reset_Zoom_Button_Tooltip: () => d,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => a,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => s,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => x
      });
      var _ = "ライトボックスを閉じる",
        l = "{shortcut}を押す",
        i = "ズームイン",
        a = "{shortcut}を押す",
        n = "ズームアウト",
        b = "{shortcut}を押す",
        g = "リセット",
        d = "{shortcut}を押す",
        s = "ズームの度合",
        u = "{zoom}%",
        L = "ダウンロード",
        h = "ダウンロード",
        r = "ライトボックス内のイメージを開く",
        f = "ライトボックスのイメージ",
        p = "Altテキスト：{alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: a,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: g,
          Lightbox_Reset_Zoom_Button_Tooltip: d,
          Lightbox_Zoom_Slider_Label: s,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: L,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: r,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: p
        }
    }
  }
]);