try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "2b5c56a7-0059-43ba-b74f-5c2c2818fabc", o._sentryDebugIdIdentifier = "sentry-dbid-2b5c56a7-0059-43ba-b74f-5c2c2818fabc")
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
  [2941], {
    22941: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => r,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => i,
        Lightbox_Zoom_In_Button_Tooltip: () => a,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => b,
        Lightbox_Zoom_Slider_Label: () => u,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => p
      });
      var _ = "라이트박스 닫기",
        l = "{shortcut} 누르기",
        i = "확대",
        a = "{shortcut} 누르기",
        n = "축소",
        b = "{shortcut} 누르기",
        d = "초기화",
        s = "{shortcut} 누르기",
        u = "줌 레벨",
        g = "{zoom}%",
        h = "다운로드",
        r = "다운로드",
        L = "라이트박스에서 이미지 열기",
        f = "라이트박스 이미지",
        c = "대체 문구: {alt}",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: i,
          Lightbox_Zoom_In_Button_Tooltip: a,
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
          Lightbox_Dialog_Description: c
        }
    }
  }
]);