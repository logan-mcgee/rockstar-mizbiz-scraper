try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "23c9788c-ac7d-42d1-b0c5-1ff0593f16c4", o._sentryDebugIdIdentifier = "sentry-dbid-23c9788c-ac7d-42d1-b0c5-1ff0593f16c4")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [6659], {
    56659(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => n,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Download_Button_Label: () => f,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => d,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => b,
        Lightbox_Zoom_Out_Button__Tooltip: () => a,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => r,
        default: () => L
      });
      var _ = "{description}：在弹窗中查看大图",
        n = "关闭",
        l = "按{shortcut}",
        d = "放大",
        i = "按{shortcut}",
        b = "缩小",
        a = "按{shortcut}",
        s = "重置",
        u = "按{shortcut}",
        g = "缩放比例",
        r = "{zoom}%",
        f = "下载",
        h = "下载",
        L = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: n,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: d,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: b,
          Lightbox_Zoom_Out_Button__Tooltip: a,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: r,
          Lightbox_Download_Button_Label: f,
          Lightbox_Download_Button_Tooltip: h
        }
    }
  }
]);