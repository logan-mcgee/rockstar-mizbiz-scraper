try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "b16f692b-497e-4fea-8b14-946ceb7a7e81", o._sentryDebugIdIdentifier = "sentry-dbid-b16f692b-497e-4fea-8b14-946ceb7a7e81")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9315], {
    69315: (o, e, t) => {
      t.r(e), t.d(e, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => l,
        Lightbox_Dialog_Description: () => i,
        Lightbox_Dialog_Title: () => n,
        Lightbox_Download_Button_Label: () => b,
        Lightbox_Download_Button_Tooltip: () => a,
        Lightbox_Open_Button_Label: () => d,
        Lightbox_Reset_Zoom_Button_Label: () => s,
        Lightbox_Reset_Zoom_Button_Tooltip: () => g,
        Lightbox_Zoom_In_Button_Label: () => u,
        Lightbox_Zoom_In_Button_Tooltip: () => h,
        Lightbox_Zoom_Out_Button_Label: () => r,
        Lightbox_Zoom_Out_Button__Tooltip: () => L,
        Lightbox_Zoom_Slider_Label: () => f,
        Lightbox_Zoom_Slider_Tooltip: () => p,
        default: () => x
      });
      var _ = "Close lightbox",
        l = "Press {shortcut}",
        i = "Alt text: {alt}",
        n = "Image lightbox",
        b = "Download",
        a = "Download",
        d = "Open image in lightbox",
        s = "Reset",
        g = "Press {shortcut}",
        u = "Zoom in",
        h = "Press {shortcut}",
        r = "Zoom out",
        L = "Press {shortcut}",
        f = "Zoom level",
        p = "{zoom}%",
        x = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: l,
          Lightbox_Dialog_Description: i,
          Lightbox_Dialog_Title: n,
          Lightbox_Download_Button_Label: b,
          Lightbox_Download_Button_Tooltip: a,
          Lightbox_Open_Button_Label: d,
          Lightbox_Reset_Zoom_Button_Label: s,
          Lightbox_Reset_Zoom_Button_Tooltip: g,
          Lightbox_Zoom_In_Button_Label: u,
          Lightbox_Zoom_In_Button_Tooltip: h,
          Lightbox_Zoom_Out_Button_Label: r,
          Lightbox_Zoom_Out_Button__Tooltip: L,
          Lightbox_Zoom_Slider_Label: f,
          Lightbox_Zoom_Slider_Tooltip: p
        }
    }
  }
]);