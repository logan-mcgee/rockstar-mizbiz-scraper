! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "41ee233d-b97a-4a01-8cb7-26a2a5b44f40", o._sentryDebugIdIdentifier = "sentry-dbid-41ee233d-b97a-4a01-8cb7-26a2a5b44f40")
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
  [9760], {
    9760: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => l,
        Lightbox_Dialog_Title: () => i,
        Lightbox_Download_Button_Label: () => n,
        Lightbox_Download_Button_Tooltip: () => b,
        Lightbox_Open_Button_Label: () => g,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => d,
        Lightbox_Zoom_In_Button_Label: () => u,
        Lightbox_Zoom_In_Button_Tooltip: () => L,
        Lightbox_Zoom_Out_Button_Label: () => r,
        Lightbox_Zoom_Out_Button__Tooltip: () => h,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => x,
        default: () => p
      });
      var _ = "Close lightbox",
        a = "Press {shortcut}",
        l = "Alt text: {alt}",
        i = "Image lightbox",
        n = "Download",
        b = "Download",
        g = "Open image in lightbox",
        s = "Reset",
        d = "Press {shortcut}",
        u = "Zoom in",
        L = "Press {shortcut}",
        r = "Zoom out",
        h = "Press {shortcut}",
        f = "Zoom level",
        x = "{zoom}%",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Dialog_Description: l,
          Lightbox_Dialog_Title: i,
          Lightbox_Download_Button_Label: n,
          Lightbox_Download_Button_Tooltip: b,
          Lightbox_Open_Button_Label: g,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: d,
          Lightbox_Zoom_In_Button_Label: u,
          Lightbox_Zoom_In_Button_Tooltip: L,
          Lightbox_Zoom_Out_Button_Label: r,
          Lightbox_Zoom_Out_Button__Tooltip: h,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: x
        }
    }
  }
]);