try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5a809548-f7cf-44cb-84cc-752acf406b77", e._sentryDebugIdIdentifier = "sentry-dbid-5a809548-f7cf-44cb-84cc-752acf406b77")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3232], {
    20851: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => r,
        VISUALLY_HIDDEN_STYLES: () => t,
        VisuallyHidden: () => l
      });
      var o = a(71127),
        n = a(12255),
        s = a(42295),
        t = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        l = o.forwardRef(((e, d) => (0, s.jsx)(n.sG.span, {
          ...e,
          ref: d,
          style: {
            ...t,
            ...e.style
          }
        })));
      l.displayName = "VisuallyHidden";
      var r = l
    }
  }
]);