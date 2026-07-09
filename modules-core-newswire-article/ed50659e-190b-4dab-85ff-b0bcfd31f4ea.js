try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "ed50659e-190b-4dab-85ff-b0bcfd31f4ea", o._sentryDebugIdIdentifier = "sentry-dbid-ed50659e-190b-4dab-85ff-b0bcfd31f4ea")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5612], {
    75612(o, e, t) {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => n,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => _,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => u,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => i,
        Lightbox_Zoom_Out_Button_Label: () => b,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => g,
        default: () => L
      });
      var _ = "{description}：在弹窗中查看大图",
        n = "关闭",
        l = "按{shortcut}",
        a = "放大",
        i = "按{shortcut}",
        b = "缩小",
        d = "按{shortcut}",
        s = "重置",
        u = "按{shortcut}",
        f = "缩放比例",
        g = "{zoom}%",
        r = "下载",
        h = "下载",
        L = {
          Lightbox_Open_Button_Label: _,
          Lightbox_Close_Button_Label: n,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: i,
          Lightbox_Zoom_Out_Button_Label: b,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: u,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: g,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: h
        }
    }
  }
]);