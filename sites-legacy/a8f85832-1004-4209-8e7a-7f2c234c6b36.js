! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "a8f85832-1004-4209-8e7a-7f2c234c6b36", o._sentryDebugIdIdentifier = "sentry-dbid-a8f85832-1004-4209-8e7a-7f2c234c6b36")
  } catch (o) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [7781], {
    17781: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => i,
        Lightbox_Dialog_Title: () => a,
        Lightbox_Download_Button_Label: () => n,
        Lightbox_Download_Button_Tooltip: () => b,
        Lightbox_Open_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Label: () => g,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => u,
        Lightbox_Zoom_In_Button_Tooltip: () => L,
        Lightbox_Zoom_Out_Button_Label: () => r,
        Lightbox_Zoom_Out_Button__Tooltip: () => h,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => c,
        default: () => x
      });
      var _ = "Close lightbox",
        l = "Press {shortcut}",
        i = "Alt text: {alt}",
        a = "Image lightbox",
        n = "Download",
        b = "Download",
        d = "Open image in lightbox",
        g = "Reset",
        s = "Press {shortcut}",
        u = "Zoom in",
        L = "Press {shortcut}",
        r = "Zoom out",
        h = "Press {shortcut}",
        f = "Zoom level",
        c = "{zoom}%",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Dialog_Description: i,
          Lightbox_Dialog_Title: a,
          Lightbox_Download_Button_Label: n,
          Lightbox_Download_Button_Tooltip: b,
          Lightbox_Open_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Label: g,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_In_Button_Label: u,
          Lightbox_Zoom_In_Button_Tooltip: L,
          Lightbox_Zoom_Out_Button_Label: r,
          Lightbox_Zoom_Out_Button__Tooltip: h,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: c
        }
    }
  }
]);