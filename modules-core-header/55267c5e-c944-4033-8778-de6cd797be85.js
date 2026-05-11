try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "55267c5e-c944-4033-8778-de6cd797be85", e._sentryDebugIdIdentifier = "sentry-dbid-55267c5e-c944-4033-8778-de6cd797be85")
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
  [368], {
    7987(e, d, a) {
      a.r(d), a.d(d, {
        Portal: () => i,
        Root: () => f
      });
      var o = a(71127),
        t = a(18429),
        n = a(45824),
        l = a(42295),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const a = (0, n.createSlot)(`Primitive.${d}`),
            t = o.forwardRef((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, r = t ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(r, {
                ...n,
                ref: o
              })
            });
          return t.displayName = `Primitive.${d}`, {
            ...e,
            [d]: t
          }
        }, {}),
        s = a(63155),
        i = o.forwardRef((e, d) => {
          const {
            container: a,
            ...n
          } = e, [i, f] = o.useState(!1);
          (0, s.N)(() => f(!0), []);
          const u = a || i && globalThis?.document?.body;
          return u ? t.createPortal((0, l.jsx)(r.div, {
            ...n,
            ref: d
          }), u) : null
        });
      i.displayName = "Portal";
      var f = i
    },
    63155(e, d, a) {
      a.d(d, {
        N: () => t
      });
      var o = a(71127),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);