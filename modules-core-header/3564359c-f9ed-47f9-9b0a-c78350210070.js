try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3564359c-f9ed-47f9-9b0a-c78350210070", e._sentryDebugIdIdentifier = "sentry-dbid-3564359c-f9ed-47f9-9b0a-c78350210070")
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
  [3541], {
    20972(e, d, a) {
      a.d(d, {
        sG: () => r
      });
      var o = a(4637),
        n = (a(84017), a(27937)),
        t = a(39793),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const a = (0, n.createSlot)(`Primitive.${d}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: n,
                ...r
              } = e, s = n ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(s, {
                ...r,
                ref: o
              })
            });
          return r.displayName = `Primitive.${d}`, {
            ...e,
            [d]: r
          }
        }, {})
    },
    3541(e, d, a) {
      a.r(d), a.d(d, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => r,
        VisuallyHidden: () => s
      });
      var o = a(4637),
        n = a(20972),
        t = a(39793),
        r = Object.freeze({
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
        s = o.forwardRef((e, d) => (0, t.jsx)(n.sG.span, {
          ...e,
          ref: d,
          style: {
            ...r,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var l = s
    }
  }
]);