try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "df2ac16b-f92b-49be-b12c-648debb32d8c", e._sentryDebugIdIdentifier = "sentry-dbid-df2ac16b-f92b-49be-b12c-648debb32d8c")
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
  [6809], {
    29190(e, d, a) {
      a.r(d), a.d(d, {
        Portal: () => l,
        Root: () => f
      });
      var o = a(4637),
        t = a(84017),
        n = a(20972),
        s = a(86627),
        r = a(39793),
        l = o.forwardRef((e, d) => {
          const {
            container: a,
            ...l
          } = e, [f, i] = o.useState(!1);
          (0, s.N)(() => i(!0), []);
          const b = a || f && globalThis?.document?.body;
          return b ? t.createPortal((0, r.jsx)(n.sG.div, {
            ...l,
            ref: d
          }), b) : null
        });
      l.displayName = "Portal";
      var f = l
    },
    20972(e, d, a) {
      a.d(d, {
        sG: () => s
      });
      var o = a(4637),
        t = (a(84017), a(27937)),
        n = a(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const a = (0, t.createSlot)(`Primitive.${d}`),
            s = o.forwardRef((e, o) => {
              const {
                asChild: t,
                ...s
              } = e, r = t ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(r, {
                ...s,
                ref: o
              })
            });
          return s.displayName = `Primitive.${d}`, {
            ...e,
            [d]: s
          }
        }, {})
    },
    86627(e, d, a) {
      a.d(d, {
        N: () => t
      });
      var o = a(4637),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);