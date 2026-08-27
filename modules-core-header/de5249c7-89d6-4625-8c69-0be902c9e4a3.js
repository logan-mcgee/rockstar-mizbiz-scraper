try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "de5249c7-89d6-4625-8c69-0be902c9e4a3", e._sentryDebugIdIdentifier = "sentry-dbid-de5249c7-89d6-4625-8c69-0be902c9e4a3")
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
  [4852], {
    62471(e, d, t) {
      t.r(d), t.d(d, {
        Portal: () => f,
        Root: () => u
      });
      var a = t(4637),
        n = t(84017),
        o = t(41988),
        r = t(9608),
        s = t(39793),
        l = Object.defineProperty,
        i = (e, d) => l(e, "name", {
          value: d,
          configurable: !0
        }),
        f = a.forwardRef(i(function(e, d) {
          const {
            container: t,
            ...l
          } = e, [i, f] = a.useState(!1);
          (0, r.N)(() => f(!0), []);
          const u = t || i && globalThis?.document?.body;
          return u ? n.createPortal((0, s.jsx)(o.sG.div, {
            ...l,
            ref: d
          }), u) : null
        }, "Portal")),
        u = f
    },
    41988(e, d, t) {
      t.d(d, {
        hO: () => i,
        sG: () => l
      });
      var a = t(4637),
        n = t(84017),
        o = t(49481),
        r = t(39793),
        s = Object.defineProperty,
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const t = (0, o.createSlot)(`Primitive.${d}`),
            n = a.forwardRef((e, a) => {
              const {
                asChild: n,
                ...o
              } = e, s = n ? t : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(s, {
                ...o,
                ref: a
              })
            });
          return n.displayName = `Primitive.${d}`, {
            ...e,
            [d]: n
          }
        }, {});

      function i(e, d) {
        e && n.flushSync(() => e.dispatchEvent(d))
      }
      s(i, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    9608(e, d, t) {
      t.d(d, {
        N: () => n
      });
      var a = t(4637),
        n = globalThis?.document ? a.useLayoutEffect : () => {}
    }
  }
]);