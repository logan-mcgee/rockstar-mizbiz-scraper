! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "70b42571-cec9-46ad-95c7-b090fb4b42d4", o._sentryDebugIdIdentifier = "sentry-dbid-70b42571-cec9-46ad-95c7-b090fb4b42d4")
  } catch (o) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [3672], {
    21291: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => a,
        Lightbox_Dialog_Title: () => n,
        Lightbox_Download_Button_Label: () => i,
        Lightbox_Download_Button_Tooltip: () => b,
        Lightbox_Open_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => g,
        Lightbox_Zoom_In_Button_Tooltip: () => r,
        Lightbox_Zoom_Out_Button_Label: () => h,
        Lightbox_Zoom_Out_Button__Tooltip: () => f,
        Lightbox_Zoom_Slider_Label: () => L,
        Lightbox_Zoom_Slider_Tooltip: () => c,
        default: () => p
      });
      var _ = "Close lightbox",
        l = "Press {shortcut}",
        a = "Alt text: {alt}",
        n = "Image lightbox",
        i = "Download",
        b = "Download",
        d = "Open image in lightbox",
        s = "Reset",
        u = "Press {shortcut}",
        g = "Zoom in",
        r = "Press {shortcut}",
        h = "Zoom out",
        f = "Press {shortcut}",
        L = "Zoom level",
        c = "{zoom}%",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Dialog_Description: a,
          Lightbox_Dialog_Title: n,
          Lightbox_Download_Button_Label: i,
          Lightbox_Download_Button_Tooltip: b,
          Lightbox_Open_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_In_Button_Label: g,
          Lightbox_Zoom_In_Button_Tooltip: r,
          Lightbox_Zoom_Out_Button_Label: h,
          Lightbox_Zoom_Out_Button__Tooltip: f,
          Lightbox_Zoom_Slider_Label: L,
          Lightbox_Zoom_Slider_Tooltip: c
        }
    }
  }
]);