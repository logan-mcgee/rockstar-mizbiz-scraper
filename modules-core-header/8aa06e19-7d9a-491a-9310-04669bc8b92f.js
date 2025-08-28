try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8aa06e19-7d9a-491a-9310-04669bc8b92f", e._sentryDebugIdIdentifier = "sentry-dbid-8aa06e19-7d9a-491a-9310-04669bc8b92f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4469], {
    24469: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => i,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var o = a(71127),
        n = (a(7923), a(21222)),
        t = a(70954),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, d) => {
          const a = (0, n.createSlot)(`Primitive.${d}`),
            r = o.forwardRef(((e, o) => {
              const {
                asChild: n,
                ...r
              } = e, l = n ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...r,
                ref: o
              })
            }));
          return r.displayName = `Primitive.${d}`, {
            ...e,
            [d]: r
          }
        }), {}),
        l = Object.freeze({
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
        s = o.forwardRef(((e, d) => (0, t.jsx)(r.span, {
          ...e,
          ref: d,
          style: {
            ...l,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var i = s
    }
  }
]);