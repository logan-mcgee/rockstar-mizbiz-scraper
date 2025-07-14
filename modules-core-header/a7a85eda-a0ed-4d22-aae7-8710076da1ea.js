try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a7a85eda-a0ed-4d22-aae7-8710076da1ea", e._sentryDebugIdIdentifier = "sentry-dbid-a7a85eda-a0ed-4d22-aae7-8710076da1ea")
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
  [5380], {
    62999: (e, a, d) => {
      d.r(a), d.d(a, {
        Root: () => i,
        VISUALLY_HIDDEN_STYLES: () => s,
        VisuallyHidden: () => r
      });
      var n = d(71127),
        o = d(85100),
        t = d(25854),
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
        r = n.forwardRef(((e, a) => (0, t.jsx)(o.sG.span, {
          ...e,
          ref: a,
          style: {
            ...s,
            ...e.style
          }
        })));
      r.displayName = "VisuallyHidden";
      var i = r
    },
    85100: (e, a, d) => {
      d.d(a, {
        hO: () => i,
        sG: () => r
      });
      var n = d(71127),
        o = d(18429),
        t = d(21222),
        s = d(25854),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const d = (0, t.createSlot)(`Primitive.${a}`),
            o = n.forwardRef(((e, n) => {
              const {
                asChild: o,
                ...t
              } = e, r = o ? d : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(r, {
                ...t,
                ref: n
              })
            }));
          return o.displayName = `Primitive.${a}`, {
            ...e,
            [a]: o
          }
        }), {});

      function i(e, a) {
        e && o.flushSync((() => e.dispatchEvent(a)))
      }
    }
  }
]);