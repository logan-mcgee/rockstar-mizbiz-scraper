try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "93e0eac4-0c6d-4649-a9b5-22d0c825aa1b", o._sentryDebugIdIdentifier = "sentry-dbid-93e0eac4-0c6d-4649-a9b5-22d0c825aa1b")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [447], {
    30447(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => n,
        Lightbox_Close_Button_Tooltip: () => a,
        Lightbox_Download_Button_Label: () => L,
        Lightbox_Download_Button_Tooltip: () => r,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => d,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => h,
        default: () => f
      });
      var _ = "{description} - 라이트박스에서 이미지 보기",
        n = "닫기",
        a = "{shortcut} 누르기",
        i = "확대",
        l = "{shortcut} 누르기",
        d = "축소",
        b = "{shortcut} 누르기",
        s = "초기화",
        g = "{shortcut} 누르기",
        u = "줌 레벨",
        h = "{zoom}%",
        L = "다운로드",
        r = "다운로드",
        f = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: n,
          Lightbox_Close_Button_Tooltip: a,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: d,
          Lightbox_Zoom_Out_Button__Tooltip: b,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_Slider_Label: u,
          Lightbox_Zoom_Slider_Tooltip: h,
          Lightbox_Download_Button_Label: L,
          Lightbox_Download_Button_Tooltip: r
        }
    }
  }
]);