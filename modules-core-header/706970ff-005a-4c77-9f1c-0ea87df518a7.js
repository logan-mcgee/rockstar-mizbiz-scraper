try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "706970ff-005a-4c77-9f1c-0ea87df518a7", e._sentryDebugIdIdentifier = "sentry-dbid-706970ff-005a-4c77-9f1c-0ea87df518a7")
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
  [3502], {
    33502(e, d, a) {
      a.r(d), a.d(d, {
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => t,
        VisuallyHidden: () => l
      });
      var o = a(71127),
        n = a(78004),
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
        l = o.forwardRef((e, d) => (0, s.jsx)(n.sG.span, {
          ...e,
          ref: d,
          style: {
            ...t,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var f = l
    }
  }
]);