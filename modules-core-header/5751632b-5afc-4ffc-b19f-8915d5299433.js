try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5751632b-5afc-4ffc-b19f-8915d5299433", e._sentryDebugIdIdentifier = "sentry-dbid-5751632b-5afc-4ffc-b19f-8915d5299433")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4171], {
    51347: (e, d, a) => {
      a.d(d, {
        hO: () => r,
        sG: () => l
      });
      var o = a(71127),
        t = a(18429),
        n = a(21222),
        s = a(70954),
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
    92600: (e, d, a) => {
      a.d(d, {
        N: () => t
      });
      var o = a(71127),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    },
    96552: (e, d, a) => {
      a.r(d), a.d(d, {
        Portal: () => r,
        Root: () => f
      });
      var o = a(71127),
        t = a(18429),
        n = a(51347),
        s = a(92600),
        l = a(70954),
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