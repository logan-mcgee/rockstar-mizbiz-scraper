! function() {
  try {
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "4db4eb03-abd4-40ed-826a-92538d99dd6d", o._sentryDebugIdIdentifier = "sentry-dbid-4db4eb03-abd4-40ed-826a-92538d99dd6d")
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
  [5019], {
    55019: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => p,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => L,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => r,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => b,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => a,
        Lightbox_Zoom_Slider_Label: () => s,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => x
      });
      var _ = "Закрыть всплывающее окно",
        l = "Нажмите {shortcut}",
        i = "Увеличить размер изображения",
        b = "Нажмите {shortcut}",
        n = "Уменьшить размер изображения",
        a = "Нажмите {shortcut}",
        d = "Вернуться к стандартному размеру изображения",
        g = "Нажмите {shortcut}",
        s = "Масштаб",
        u = "{zoom}%",
        L = "Загрузить",
        h = "Загрузить",
        r = "Открыть изображение в всплывающем окне",
        f = "Всплывающее окно",
        p = "Замещающий текст: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: b,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: a,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_Slider_Label: s,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: L,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: r,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: p
        }
    }
  }
]);