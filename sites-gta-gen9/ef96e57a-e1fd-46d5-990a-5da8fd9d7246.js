try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "ef96e57a-e1fd-46d5-990a-5da8fd9d7246", o._sentryDebugIdIdentifier = "sentry-dbid-ef96e57a-e1fd-46d5-990a-5da8fd9d7246")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1758], {
    11758: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => p,
        Lightbox_Dialog_Title: () => r,
        Lightbox_Download_Button_Label: () => f,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => n,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => a,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => x
      });
      var _ = "라이트박스 닫기",
        i = "{shortcut} 누르기",
        n = "확대",
        l = "{shortcut} 누르기",
        a = "축소",
        d = "{shortcut} 누르기",
        b = "초기화",
        s = "{shortcut} 누르기",
        g = "줌 레벨",
        u = "{zoom}%",
        f = "다운로드",
        h = "다운로드",
        L = "라이트박스에서 이미지 열기",
        r = "라이트박스 이미지",
        p = "대체 문구: {alt}",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Zoom_In_Button_Label: n,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: a,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: f,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: r,
          Lightbox_Dialog_Description: p
        }
    }
  }
]);