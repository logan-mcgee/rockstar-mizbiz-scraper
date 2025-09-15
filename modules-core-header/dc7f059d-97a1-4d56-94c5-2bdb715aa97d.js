try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "dc7f059d-97a1-4d56-94c5-2bdb715aa97d", e._sentryDebugIdIdentifier = "sentry-dbid-dc7f059d-97a1-4d56-94c5-2bdb715aa97d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2442], {
    63155: (e, d, a) => {
      a.d(d, {
        N: () => t
      });
      var o = a(71127),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    },
    78004: (e, d, a) => {
      a.d(d, {
        hO: () => r,
        sG: () => l
      });
      var o = a(71127),
        t = a(18429),
        n = a(21222),
        s = a(42295),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, d) => {
          const a = (0, n.createSlot)(`Primitive.${d}`),
            t = o.forwardRef(((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, l = t ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(l, {
                ...n,
                ref: o
              })
            }));
          return t.displayName = `Primitive.${d}`, {
            ...e,
            [d]: t
          }
        }), {});

      function r(e, d) {
        e && t.flushSync((() => e.dispatchEvent(d)))
      }
    },
    80061: (e, d, a) => {
      a.r(d), a.d(d, {
        Portal: () => r,
        Root: () => f
      });
      var o = a(71127),
        t = a(18429),
        n = a(78004),
        s = a(63155),
        l = a(42295),
        r = o.forwardRef(((e, d) => {
          const {
            container: a,
            ...r
          } = e, [f, i] = o.useState(!1);
          (0, s.N)((() => i(!0)), []);
          const u = a || f && globalThis?.document?.body;
          return u ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...r,
            ref: d
          }), u) : null
        }));
      r.displayName = "Portal";
      var f = r
    }
  }
]);