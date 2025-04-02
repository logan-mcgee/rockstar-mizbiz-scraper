! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "505d8c9d-76e0-4488-93ca-d3a1efaf3406", o._sentryDebugIdIdentifier = "sentry-dbid-505d8c9d-76e0-4488-93ca-d3a1efaf3406")
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
  [888], {
    10888: (o, t, _) => {
      _.r(t), _.d(t, {
        Lightbox_Close_Button_Label: () => e,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => L,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => r,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => s,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => p
      });
      var e = "Закрыть всплывающее окно",
        l = "Нажмите {shortcut}",
        a = "Увеличить размер изображения",
        i = "Нажмите {shortcut}",
        n = "Уменьшить размер изображения",
        b = "Нажмите {shortcut}",
        d = "Вернуться к стандартному размеру изображения",
        g = "Нажмите {shortcut}",
        s = "Масштаб",
        u = "{zoom}%",
        L = "Загрузить",
        h = "Загрузить",
        r = "Открыть изображение в всплывающем окне",
        f = "Всплывающее окно",
        c = "Замещающий текст: {alt}",
        p = {
          Lightbox_Close_Button_Label: e,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_Slider_Label: s,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: L,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: r,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);