! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "a99e1e6e-1b72-4d65-8d2c-a5521c6a8e33", o._sentryDebugIdIdentifier = "sentry-dbid-a99e1e6e-1b72-4d65-8d2c-a5521c6a8e33")
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
  [7407], {
    27407: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => f,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => n,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => i,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => s,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => h
      });
      var _ = "Lightbox schließen",
        a = "{shortcut} drücken",
        n = "Heranzoomen",
        l = "{shortcut} drücken",
        i = "Herauszoomen",
        b = "{shortcut} drücken",
        d = "Zurücksetzen",
        u = "{shortcut} drücken",
        s = "Zoomstufe",
        g = "{zoom} %",
        r = "Herunterladen",
        L = "Herunterladen",
        f = "Bild vergrößern",
        h = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: n,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: i,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: s,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: f
        }
    }
  }
]);