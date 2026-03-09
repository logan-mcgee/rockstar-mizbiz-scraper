try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "68058923-f78d-4748-b546-17d890f1b5be", e._sentryDebugIdIdentifier = "sentry-dbid-68058923-f78d-4748-b546-17d890f1b5be")
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
    63155: (e, d, o) => {
      o.d(d, {
        N: () => a
      });
      var t = o(71127),
        a = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    78004: (e, d, o) => {
      o.d(d, {
        hO: () => r,
        sG: () => l
      });
      var t = o(71127),
        a = o(18429),
        n = o(21222),
        s = o(42295),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const o = (0, n.createSlot)(`Primitive.${d}`),
            a = t.forwardRef((e, t) => {
              const {
                asChild: a,
                ...n
              } = e, l = a ? o : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(l, {
                ...n,
                ref: t
              })
            });
          return a.displayName = `Primitive.${d}`, {
            ...e,
            [d]: a
          }
        }, {});

      function r(e, d) {
        e && a.flushSync(() => e.dispatchEvent(d))
      }
    },
    80061: (e, d, o) => {
      o.r(d), o.d(d, {
        Portal: () => r,
        Root: () => f
      });
      var t = o(71127),
        a = o(18429),
        n = o(78004),
        s = o(63155),
        l = o(42295),
        r = t.forwardRef((e, d) => {
          const {
            container: o,
            ...r
          } = e, [f, i] = t.useState(!1);
          (0, s.N)(() => i(!0), []);
          const u = o || f && globalThis?.document?.body;
          return u ? a.createPortal((0, l.jsx)(n.sG.div, {
            ...r,
            ref: d
          }), u) : null
        });
      r.displayName = "Portal";
      var f = r
    }
  }
]);