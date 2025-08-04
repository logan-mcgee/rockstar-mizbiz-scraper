try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5751632b-5afc-4ffc-b19f-8915d5299433", e._sentryDebugIdIdentifier = "sentry-dbid-5751632b-5afc-4ffc-b19f-8915d5299433")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4171], {
    51347: (e, a, d) => {
      d.d(a, {
        hO: () => r,
        sG: () => l
      });
      var o = d(71127),
        t = d(18429),
        n = d(21222),
        s = d(70954),
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
    92600: (e, a, d) => {
      d.d(a, {
        N: () => t
      });
      var o = d(71127),
        t = globalThis?.document ? o.useLayoutEffect : () => {}
    },
    96552: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => r,
        Root: () => f
      });
      var o = d(71127),
        t = d(18429),
        n = d(51347),
        s = d(92600),
        l = d(70954),
        r = o.forwardRef(((e, a) => {
          const {
            container: d,
            ...r
          } = e, [f, i] = o.useState(!1);
          (0, s.N)((() => i(!0)), []);
          const u = d || f && globalThis?.document?.body;
          return u ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...r,
            ref: a
          }), u) : null
        }));
      r.displayName = "Portal";
      var f = r
    }
  }
]);