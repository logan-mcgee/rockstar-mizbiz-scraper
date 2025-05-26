! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "be73b676-0a59-4cd9-a47e-a793005a1054", o._sentryDebugIdIdentifier = "sentry-dbid-be73b676-0a59-4cd9-a47e-a793005a1054")
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
  [3672], {
    98910: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => l,
        Lightbox_Dialog_Title: () => n,
        Lightbox_Download_Button_Label: () => i,
        Lightbox_Download_Button_Tooltip: () => b,
        Lightbox_Open_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => u,
        Lightbox_Zoom_In_Button_Tooltip: () => r,
        Lightbox_Zoom_Out_Button_Label: () => h,
        Lightbox_Zoom_Out_Button__Tooltip: () => L,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => p,
        default: () => x
      });
      var _ = "Close lightbox",
        a = "Press {shortcut}",
        l = "Alt text: {alt}",
        n = "Image lightbox",
        i = "Download",
        b = "Download",
        d = "Open image in lightbox",
        s = "Reset",
        g = "Press {shortcut}",
        u = "Zoom in",
        r = "Press {shortcut}",
        h = "Zoom out",
        L = "Press {shortcut}",
        f = "Zoom level",
        p = "{zoom}%",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Dialog_Description: l,
          Lightbox_Dialog_Title: n,
          Lightbox_Download_Button_Label: i,
          Lightbox_Download_Button_Tooltip: b,
          Lightbox_Open_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_In_Button_Label: u,
          Lightbox_Zoom_In_Button_Tooltip: r,
          Lightbox_Zoom_Out_Button_Label: h,
          Lightbox_Zoom_Out_Button__Tooltip: L,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: p
        }
    }
  }
]);