try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b71d85f4-d78f-4cf3-b515-5c444a22907f", e._sentryDebugIdIdentifier = "sentry-dbid-b71d85f4-d78f-4cf3-b515-5c444a22907f")
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
  [5450], {
    63069: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => f,
        VisuallyHidden: () => l
      });
      var o = a(71127),
        n = (a(18429), a(13312)),
        t = a(42295),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const a = (0, n.createSlot)(`Primitive.${d}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: n,
                ...r
              } = e, f = n ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(f, {
                ...r,
                ref: o
              })
            });
          return r.displayName = `Primitive.${d}`, {
            ...e,
            [d]: r
          }
        }, {}),
        f = Object.freeze({
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
        l = o.forwardRef((e, d) => (0, t.jsx)(r.span, {
          ...e,
          ref: d,
          style: {
            ...f,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var s = l
    }
  }
]);