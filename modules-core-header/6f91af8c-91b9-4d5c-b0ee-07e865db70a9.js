try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6f91af8c-91b9-4d5c-b0ee-07e865db70a9", e._sentryDebugIdIdentifier = "sentry-dbid-6f91af8c-91b9-4d5c-b0ee-07e865db70a9")
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
  [8268], {
    18268(e, d, a) {
      a.r(d), a.d(d, {
        Portal: () => r,
        Root: () => i
      });
      var o = a(4637),
        t = a(84017),
        n = a(31270),
        s = a(10198),
        l = a(39793),
        r = o.forwardRef((e, d) => {
          const {
            container: a,
            ...r
          } = e, [i, f] = o.useState(!1);
          (0, s.N)(() => f(!0), []);
          const u = a || i && globalThis?.document?.body;
          return u ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...r,
            ref: d
          }), u) : null
        });
      r.displayName = "Portal";
      var i = r
    },
    31270(e, d, a) {
      a.d(d, {
        hO: () => r,
        sG: () => l
      });
      var o = a(4637),
        t = a(84017),
        n = a(50486),
        s = a(39793),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const a = (0, n.createSlot)(`Primitive.${d}`),
            t = o.forwardRef((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, l = t ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(l, {
                ...n,
                ref: o
              })
            });
          return t.displayName = `Primitive.${d}`, {
            ...e,
            [d]: t
          }
        }, {});

      function r(e, d) {
        e && t.flushSync(() => e.dispatchEvent(d))
      }
    },
    10198(e, d, a) {
      a.d(d, {
        N: () => t
      });
      var o = a(4637),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);