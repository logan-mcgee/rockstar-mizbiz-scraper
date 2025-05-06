! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "960d3db4-280c-4130-a7d2-1d5acdebd0aa", o._sentryDebugIdIdentifier = "sentry-dbid-960d3db4-280c-4130-a7d2-1d5acdebd0aa")
  } catch (o) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1667], {
    91667: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => h,
        Lightbox_Download_Button_Label: () => u,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => f,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => n,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => l,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => x
      });
      var _ = "Lightbox schließen",
        a = "{shortcut} drücken",
        n = "Heranzoomen",
        i = "{shortcut} drücken",
        l = "Herauszoomen",
        b = "{shortcut} drücken",
        d = "Zurücksetzen",
        s = "{shortcut} drücken",
        g = "Zoomstufe",
        r = "{zoom} %",
        u = "Herunterladen",
        L = "Herunterladen",
        f = "Bild in Lightbox öffnen",
        h = "Bild im Großformat",
        c = "Alternativtext: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: n,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: l,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: r,
          Lightbox_Download_Button_Label: u,
          Lightbox_Download_Button_Tooltip: L,
          Lightbox_Open_Button_Label: f,
          Lightbox_Dialog_Title: h,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);