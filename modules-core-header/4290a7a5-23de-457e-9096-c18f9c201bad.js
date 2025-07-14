try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4290a7a5-23de-457e-9096-c18f9c201bad", e._sentryDebugIdIdentifier = "sentry-dbid-4290a7a5-23de-457e-9096-c18f9c201bad")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3410], {
    61029: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => r,
        Root: () => i
      });
      var o = d(71127),
        t = d(18429),
        n = d(85100),
        s = d(85307),
        l = d(25854),
        r = o.forwardRef(((e, a) => {
          const {
            container: d,
            ...r
          } = e, [i, f] = o.useState(!1);
          (0, s.N)((() => f(!0)), []);
          const c = d || i && globalThis?.document?.body;
          return c ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...r,
            ref: a
          }), c) : null
        }));
      r.displayName = "Portal";
      var i = r
    },
    85100: (e, a, d) => {
      d.d(a, {
        hO: () => r,
        sG: () => l
      });
      var o = d(71127),
        t = d(18429),
        n = d(21222),
        s = d(25854),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const d = (0, n.createSlot)(`Primitive.${a}`),
            t = o.forwardRef(((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, l = t ? d : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(l, {
                ...n,
                ref: o
              })
            }));
          return t.displayName = `Primitive.${a}`, {
            ...e,
            [a]: t
          }
        }), {});

      function r(e, a) {
        e && t.flushSync((() => e.dispatchEvent(a)))
      }
    },
    85307: (e, a, d) => {
      d.d(a, {
        N: () => t
      });
      var o = d(71127),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);