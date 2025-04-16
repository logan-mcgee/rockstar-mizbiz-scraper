! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "a2ffa35d-6297-482f-bd5e-665a4bc7ea3c", o._sentryDebugIdIdentifier = "sentry-dbid-a2ffa35d-6297-482f-bd5e-665a4bc7ea3c")
  } catch (o) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [377], {
    80377: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => s,
        default: () => p
      });
      var _ = "关闭弹窗",
        l = "按 {shortcut}",
        a = "放大",
        i = "按 {shortcut}",
        n = "缩小",
        b = "按 {shortcut}",
        d = "重置",
        g = "按 {shortcut}",
        u = "缩放比例",
        s = "{zoom}%",
        r = "下载",
        L = "下载",
        h = "在弹窗中打开图片",
        f = "图片弹窗",
        c = "替代文本：{alt}",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: s,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: h,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);