try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "2e6e4af7-a9e5-4951-a78a-19134a1c9fc0", o._sentryDebugIdIdentifier = "sentry-dbid-2e6e4af7-a9e5-4951-a78a-19134a1c9fc0")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [969], {
    70969: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Dialog_Description: () => p,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => r,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => l,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => c
      });
      var _ = "關閉燈箱",
        a = "按 {shortcut}",
        l = "放大",
        i = "按 {shortcut}",
        n = "縮小",
        b = "按 {shortcut}",
        d = "重設",
        s = "按 {shortcut}",
        u = "縮放比例",
        g = "{zoom}%",
        h = "下載",
        r = "下載",
        L = "在燈箱中開啟圖片",
        f = "圖片燈箱",
        p = "圖片替代文字：{alt}",
        c = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: l,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: h,
          Lightbox_Download_Button_Tooltip: r,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: p
        }
    }
  }
]);