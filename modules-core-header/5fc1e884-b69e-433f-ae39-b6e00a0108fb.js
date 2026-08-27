try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5fc1e884-b69e-433f-ae39-b6e00a0108fb", e._sentryDebugIdIdentifier = "sentry-dbid-5fc1e884-b69e-433f-ae39-b6e00a0108fb")
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
  [6680], {
    41988(e, d, a) {
      a.d(d, {
        hO: () => l,
        sG: () => s
      });
      var n = a(4637),
        t = a(84017),
        o = a(49481),
        r = a(39793),
        i = Object.defineProperty,
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const a = (0, o.createSlot)(`Primitive.${d}`),
            t = n.forwardRef((e, n) => {
              const {
                asChild: t,
                ...o
              } = e, i = t ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(i, {
                ...o,
                ref: n
              })
            });
          return t.displayName = `Primitive.${d}`, {
            ...e,
            [d]: t
          }
        }, {});

      function l(e, d) {
        e && t.flushSync(() => e.dispatchEvent(d))
      }
      i(l, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    94299(e, d, a) {
      a.r(d), a.d(d, {
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => s,
        VisuallyHidden: () => l
      });
      var n = a(4637),
        t = a(41988),
        o = a(39793),
        r = Object.defineProperty,
        i = (e, d) => r(e, "name", {
          value: d,
          configurable: !0
        }),
        s = Object.freeze({
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
        l = n.forwardRef(i(function(e, d) {
          return (0, o.jsx)(t.sG.span, {
            ...e,
            ref: d,
            style: {
              ...s,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        f = l
    }
  }
]);