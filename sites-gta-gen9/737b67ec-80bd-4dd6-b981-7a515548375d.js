! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "737b67ec-80bd-4dd6-b981-7a515548375d", o._sentryDebugIdIdentifier = "sentry-dbid-737b67ec-80bd-4dd6-b981-7a515548375d")
  } catch (o) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5734], {
    45734: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => p,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => n,
        Lightbox_Zoom_Out_Button_Label: () => i,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => c
      });
      var _ = "라이트박스 닫기",
        a = "{shortcut} 누르기",
        l = "확대",
        n = "{shortcut} 누르기",
        i = "축소",
        d = "{shortcut} 누르기",
        b = "초기화",
        s = "{shortcut} 누르기",
        g = "줌 레벨",
        u = "{zoom}%",
        r = "다운로드",
        h = "다운로드",
        L = "라이트박스에서 이미지 열기",
        f = "라이트박스 이미지",
        p = "대체 문구: {alt}",
        c = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: n,
          Lightbox_Zoom_Out_Button_Label: i,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: p
        }
    }
  }
]);