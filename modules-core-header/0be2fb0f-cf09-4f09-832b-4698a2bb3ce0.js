try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0be2fb0f-cf09-4f09-832b-4698a2bb3ce0", e._sentryDebugIdIdentifier = "sentry-dbid-0be2fb0f-cf09-4f09-832b-4698a2bb3ce0")
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
  [2442], {
    63155: (e, a, d) => {
      d.d(a, {
        N: () => t
      });
      var o = d(71127),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    },
    78004: (e, a, d) => {
      d.d(a, {
        hO: () => l,
        sG: () => f
      });
      var o = d(71127),
        t = d(31062),
        n = d(21222),
        s = d(42295),
        f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const d = (0, n.createSlot)(`Primitive.${a}`),
            t = o.forwardRef((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, f = t ? d : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(f, {
                ...n,
                ref: o
              })
            });
          return t.displayName = `Primitive.${a}`, {
            ...e,
            [a]: t
          }
        }, {});

      function l(e, a) {
        e && t.flushSync(() => e.dispatchEvent(a))
      }
    },
    80061: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => l,
        Root: () => r
      });
      var o = d(71127),
        t = d(18429),
        n = d(78004),
        s = d(63155),
        f = d(42295),
        l = o.forwardRef((e, a) => {
          const {
            container: d,
            ...l
          } = e, [r, i] = o.useState(!1);
          (0, s.N)(() => i(!0), []);
          const b = d || r && globalThis?.document?.body;
          return b ? t.createPortal((0, f.jsx)(n.sG.div, {
            ...l,
            ref: a
          }), b) : null
        });
      l.displayName = "Portal";
      var r = l
    }
  }
]);