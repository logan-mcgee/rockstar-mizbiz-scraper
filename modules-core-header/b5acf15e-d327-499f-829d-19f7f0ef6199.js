! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "b5acf15e-d327-499f-829d-19f7f0ef6199", o._sentryDebugIdIdentifier = "sentry-dbid-b5acf15e-d327-499f-829d-19f7f0ef6199")
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
  [4220], {
    94220: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Dialog_Description: () => x,
        Lightbox_Dialog_Title: () => h,
        Lightbox_Download_Button_Label: () => s,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => f,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => a,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => c
      });
      var _ = "Lightbox schließen",
        n = "{shortcut} drücken",
        l = "Heranzoomen",
        i = "{shortcut} drücken",
        a = "Herauszoomen",
        b = "{shortcut} drücken",
        d = "Zurücksetzen",
        r = "{shortcut} drücken",
        u = "Zoomstufe",
        g = "{zoom} %",
        s = "Herunterladen",
        L = "Herunterladen",
        f = "Bild in Lightbox öffnen",
        h = "Bild im Großformat",
        x = "Alternativtext: {alt}",
        c = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: a,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: r,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: s,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: f,
          Lightbox_Dialog_Title: h,
          Lightbox_Dialog_Description: x
        }
    }
  }
]);