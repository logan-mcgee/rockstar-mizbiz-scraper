! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "0b09281f-25f2-4767-a1dc-08c1932f2975", o._sentryDebugIdIdentifier = "sentry-dbid-0b09281f-25f2-4767-a1dc-08c1932f2975")
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
  [3896], {
    3896: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Download_Button_Label: () => f,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => r,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => n,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => b,
        Lightbox_Zoom_Out_Button__Tooltip: () => i,
        Lightbox_Zoom_Slider_Label: () => s,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => h
      });
      var _ = "ライトボックスを閉じる",
        a = "{shortcut}を押す",
        n = "ズームイン",
        l = "{shortcut}を押す",
        b = "ズームアウト",
        i = "{shortcut}を押す",
        d = "リセット",
        g = "{shortcut}を押す",
        s = "ズームの度合",
        u = "{zoom}%",
        f = "ダウンロード",
        L = "ダウンロード",
        r = "拡大する",
        h = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: n,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: b,
          Lightbox_Zoom_Out_Button__Tooltip: i,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_Slider_Label: s,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: f,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: r
        }
    }
  }
]);