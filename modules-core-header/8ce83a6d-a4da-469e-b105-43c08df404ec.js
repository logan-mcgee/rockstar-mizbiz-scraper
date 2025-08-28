try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new o.Error).stack;
  t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "8ce83a6d-a4da-469e-b105-43c08df404ec", o._sentryDebugIdIdentifier = "sentry-dbid-8ce83a6d-a4da-469e-b105-43c08df404ec")
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
  [9642], {
    19642: (o, t, e) => {
      e.r(t), e.d(t, {
        Lightbox_Close_Button_Label: () => _,
        Lightbox_Close_Button_Tooltip: () => i,
        Lightbox_Dialog_Description: () => c,
        Lightbox_Dialog_Title: () => f,
        Lightbox_Download_Button_Label: () => r,
        Lightbox_Download_Button_Tooltip: () => h,
        Lightbox_Open_Button_Label: () => L,
        Lightbox_Reset_Zoom_Button_Label: () => b,
        Lightbox_Reset_Zoom_Button_Tooltip: () => s,
        Lightbox_Zoom_In_Button_Label: () => a,
        Lightbox_Zoom_In_Button_Tooltip: () => l,
        Lightbox_Zoom_Out_Button_Label: () => n,
        Lightbox_Zoom_Out_Button__Tooltip: () => d,
        Lightbox_Zoom_Slider_Label: () => g,
        Lightbox_Zoom_Slider_Tooltip: () => u,
        default: () => p
      });
      var _ = "Zamknij podgląd",
        i = "Naciśnij {shortcut}",
        a = "Powiększ",
        l = "Naciśnij {shortcut}",
        n = "Pomniejsz",
        d = "Naciśnij {shortcut}",
        b = "Zresetuj",
        s = "Naciśnij {shortcut}",
        g = "Poziom powiększenia",
        u = "{zoom}%",
        r = "Pobierz",
        h = "Pobierz",
        L = "Otwórz obraz w podglądzie",
        f = "Podgląd obrazu",
        c = "Tekst alternatywny: {alt}",
        p = {
          Lightbox_Close_Button_Label: _,
          Lightbox_Close_Button_Tooltip: i,
          Lightbox_Zoom_In_Button_Label: a,
          Lightbox_Zoom_In_Button_Tooltip: l,
          Lightbox_Zoom_Out_Button_Label: n,
          Lightbox_Zoom_Out_Button__Tooltip: d,
          Lightbox_Reset_Zoom_Button_Label: b,
          Lightbox_Reset_Zoom_Button_Tooltip: s,
          Lightbox_Zoom_Slider_Label: g,
          Lightbox_Zoom_Slider_Tooltip: u,
          Lightbox_Download_Button_Label: r,
          Lightbox_Download_Button_Tooltip: h,
          Lightbox_Open_Button_Label: L,
          Lightbox_Dialog_Title: f,
          Lightbox_Dialog_Description: c
        }
    }
  }
]);