try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "e21b1011-2000-4c34-a7ab-fcd3a6f8b582", o._sentryDebugIdIdentifier = "sentry-dbid-e21b1011-2000-4c34-a7ab-fcd3a6f8b582")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [6471], {
    96471: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => p,
        Lightbox_Dialog_Title: () => L,
        Lightbox_Download_Button_Label: () => f,
        Lightbox_Download_Button_Tooltip: () => r,
        Lightbox_Open_Button_Label: () => h,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => n,
        Lightbox_Zoom_Out_Button_Label: () => a,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => x
      });
      var _ = "Закрыть всплывающее окно",
        l = "Нажмите {shortcut}",
        i = "Увеличить размер изображения",
        n = "Нажмите {shortcut}",
        a = "Уменьшить размер изображения",
        d = "Нажмите {shortcut}",
        b = "Вернуться к стандартному размеру изображения",
        s = "Нажмите {shortcut}",
        u = "Масштаб",
        g = "{zoom}%",
        f = "Загрузить",
        r = "Загрузить",
        h = "Открыть изображение в всплывающем окне",
        L = "Всплывающее окно",
        p = "Замещающий текст: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: n,
          Lightbox_Zoom_Out_Button_Label: a,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: f,
          Lightbox_Download_Button_Tooltip: r,
          Lightbox_Open_Button_Label: h,
          Lightbox_Dialog_Title: L,
          Lightbox_Dialog_Description: p
        }
    }
  }
]);