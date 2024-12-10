! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "860d213e-f0fe-4037-977a-a18ac8e52ca4", o._sentryDebugIdIdentifier = "sentry-dbid-860d213e-f0fe-4037-977a-a18ac8e52ca4")
  } catch (o) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9853], {
    99853: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => f,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => n,
        Lightbox_Zoom_Out_Button_Label: () => i,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => s,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => c
      });
      var _ = "ライトボックスを閉じる",
        l = "{shortcut}を押す",
        a = "ズームイン",
        n = "{shortcut}を押す",
        i = "ズームアウト",
        d = "{shortcut}を押す",
        b = "リセット",
        u = "{shortcut}を押す",
        s = "ズームの度合",
        g = "{zoom}%",
        r = "ダウンロード",
        f = "ダウンロード",
        L = "拡大する",
        c = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: n,
          Lightbox_Zoom_Out_Button_Label: i,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: s,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: f,
          Lightbox_Open_Button_Label: L
        }
    }
  }
]);