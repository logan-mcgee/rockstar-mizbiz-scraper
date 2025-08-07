try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "bddbc051-cce0-4802-815a-d47d5aae6c04", e._sentryDebugIdIdentifier = "sentry-dbid-bddbc051-cce0-4802-815a-d47d5aae6c04")
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
  [8628], {
    18628: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => i,
        VISUALLY_HIDDEN_STYLES: () => s,
        VisuallyHidden: () => r
      });
      var n = a(71127),
        o = a(51347),
        t = a(70954),
        s = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        r = n.forwardRef(((e, d) => (0, t.jsx)(o.sG.span, {
          ...e,
          ref: d,
          style: {
            ...s,
            ...e.style
          }
        })));
      r.displayName = "VisuallyHidden";
      var i = r
    },
    51347: (e, d, a) => {
      a.d(d, {
        hO: () => i,
        sG: () => r
      });
      var n = a(71127),
        o = a(18429),
        t = a(21222),
        s = a(70954),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, d) => {
          const a = (0, t.createSlot)(`Primitive.${d}`),
            o = n.forwardRef(((e, n) => {
              const {
                asChild: o,
                ...t
              } = e, r = o ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(r, {
                ...t,
                ref: n
              })
            }));
          return o.displayName = `Primitive.${d}`, {
            ...e,
            [d]: o
          }
        }), {});

      function i(e, d) {
        e && o.flushSync((() => e.dispatchEvent(d)))
      }
    }
  }
]);