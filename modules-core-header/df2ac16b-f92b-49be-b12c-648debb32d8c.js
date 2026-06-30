try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "df2ac16b-f92b-49be-b12c-648debb32d8c", e._sentryDebugIdIdentifier = "sentry-dbid-df2ac16b-f92b-49be-b12c-648debb32d8c")
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
    29190(e, a, d) {
      d.r(a), d.d(a, {
        Portal: () => l,
        Root: () => f
      });
      var o = d(4637),
        t = d(84017),
        n = d(20972),
        s = d(86627),
        r = d(39793),
        l = o.forwardRef((e, a) => {
          const {
            container: d,
            ...l
          } = e, [f, i] = o.useState(!1);
          (0, s.N)(() => i(!0), []);
          const b = d || f && globalThis?.document?.body;
          return b ? t.createPortal((0, r.jsx)(n.sG.div, {
            ...l,
            ref: a
          }), b) : null
        });
      l.displayName = "Portal";
      var f = l
    },
    20972(e, a, d) {
      d.d(a, {
        sG: () => s
      });
      var o = d(4637),
        t = (d(84017), d(27937)),
        n = d(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const d = (0, t.createSlot)(`Primitive.${a}`),
            s = o.forwardRef((e, o) => {
              const {
                asChild: t,
                ...s
              } = e, r = t ? d : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(r, {
                ...s,
                ref: o
              })
            });
          return s.displayName = `Primitive.${a}`, {
            ...e,
            [a]: s
          }
        }, {})
    },
    86627(e, a, d) {
      d.d(a, {
        N: () => t
      });
      var o = d(4637),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);