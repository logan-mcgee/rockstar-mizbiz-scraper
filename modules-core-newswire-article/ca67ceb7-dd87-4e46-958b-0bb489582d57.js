! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "ca67ceb7-dd87-4e46-958b-0bb489582d57", o._sentryDebugIdIdentifier = "sentry-dbid-ca67ceb7-dd87-4e46-958b-0bb489582d57")
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
  [8917], {
    68917: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => g,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => r,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => b,
        Lightbox_Zoom_Out_Button_Label: () => a,
        Lightbox_Zoom_Out_Button__Tooltip: () => i,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => s,
        default: () => f
      });
      var _ = "Lightbox schließen",
        n = "{shortcut} drücken",
        l = "Heranzoomen",
        b = "{shortcut} drücken",
        a = "Herauszoomen",
        i = "{shortcut} drücken",
        d = "Zurücksetzen",
        r = "{shortcut} drücken",
        u = "Zoomstufe",
        s = "{zoom} %",
        g = "Herunterladen",
        L = "Herunterladen",
        h = "Bild vergrößern",
        f = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: b,
          Lightbox_Zoom_Out_Button_Label: a,
          Lightbox_Zoom_Out_Button__Tooltip: i,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: r,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: s,
          Lightbox_Download_Button_Label: g,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: h
        }
    }
  }
]);