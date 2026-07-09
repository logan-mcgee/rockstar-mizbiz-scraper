try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "67afed6c-9642-407f-8b74-7e21b11fbe63", o._sentryDebugIdIdentifier = "sentry-dbid-67afed6c-9642-407f-8b74-7e21b11fbe63")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [2993], {
    32993(o, t, e) {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => l,
        Lightbox_Close_Button_Tooltip: () => n,
        Lightbox_Download_Button_Label: () => h,
        Lightbox_Download_Button_Tooltip: () => L,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => b,
        Lightbox_Zoom_Out_Button_Label: () => i,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => f,
        default: () => r
      });
      var _ = "{description}：在弹窗中查看大图",
        l = "关闭",
        n = "按{shortcut}",
        a = "放大",
        b = "按{shortcut}",
        i = "缩小",
        d = "按{shortcut}",
        s = "重置",
        u = "按{shortcut}",
        g = "缩放比例",
        f = "{zoom}%",
        h = "下载",
        L = "下载",
        r = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: l,
          Lightbox_Close_Button_Tooltip: n,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: b,
          Lightbox_Zoom_Out_Button_Label: i,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: f,
          Lightbox_Download_Button_Label: h,
          Lightbox_Download_Button_Tooltip: L
        }
    }
  }
]);