try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f4c242b9-4d2d-467d-89ec-c68beff2d9fd", e._sentryDebugIdIdentifier = "sentry-dbid-f4c242b9-4d2d-467d-89ec-c68beff2d9fd")
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
  [4823], {
    63155: (e, d, a) => {
      a.d(d, {
        N: () => t
      });
      var o = a(71127),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    },
    78004: (e, d, a) => {
      a.d(d, {
        hO: () => l,
        sG: () => f
      });
      var o = a(71127),
        t = a(18429),
        n = a(21222),
        s = a(42295),
        f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, d) => {
          const a = (0, n.createSlot)(`Primitive.${d}`),
            t = o.forwardRef(((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, f = t ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(f, {
                ...n,
                ref: o
              })
            }));
          return t.displayName = `Primitive.${d}`, {
            ...e,
            [d]: t
          }
        }), {});

      function l(e, d) {
        e && t.flushSync((() => e.dispatchEvent(d)))
      }
    },
    80061: (e, d, a) => {
      a.r(d), a.d(d, {
        Portal: () => l,
        Root: () => r
      });
      var o = a(71127),
        t = a(18429),
        n = a(78004),
        s = a(63155),
        f = a(42295),
        l = o.forwardRef(((e, d) => {
          const {
            container: a,
            ...l
          } = e, [r, i] = o.useState(!1);
          (0, s.N)((() => i(!0)), []);
          const u = a || r && globalThis?.document?.body;
          return u ? t.createPortal((0, f.jsx)(n.sG.div, {
            ...l,
            ref: d
          }), u) : null
        }));
      l.displayName = "Portal";
      var r = l
    }
  }
]);