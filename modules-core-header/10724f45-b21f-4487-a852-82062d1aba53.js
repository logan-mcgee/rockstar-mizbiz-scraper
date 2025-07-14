try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "10724f45-b21f-4487-a852-82062d1aba53", e._sentryDebugIdIdentifier = "sentry-dbid-10724f45-b21f-4487-a852-82062d1aba53")
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
  [266, 616, 3473, 5854, 7885], {
    25854: (e, r, a) => {
      e.exports = a(41454)
    },
    41454: (e, r, a) => {
      var o = a(71127),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, r, a) {
        var o, t = {},
          i = null,
          f = null;
        for (o in void 0 !== a && (i = "" + a), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (f = r.ref), r) n.call(r, o) && !s.hasOwnProperty(o) && (t[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === t[o] && (t[o] = r[o]);
        return {
          $$typeof: d,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: l.current
        }
      }
      r.Fragment = t, r.jsx = i, r.jsxs = i
    },
    87885: (e, r, a) => {
      a.r(r), a.d(r, {
        Root: () => i,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var o = a(71127),
        d = (a(52957), a(21222)),
        t = a(25854),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, r) => {
          const a = (0, d.createSlot)(`Primitive.${r}`),
            n = o.forwardRef(((e, o) => {
              const {
                asChild: d,
                ...n
              } = e, l = d ? a : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: o
              })
            }));
          return n.displayName = `Primitive.${r}`, {
            ...e,
            [r]: n
          }
        }), {}),
        l = Object.freeze({
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
        s = o.forwardRef(((e, r) => (0, t.jsx)(n.span, {
          ...e,
          ref: r,
          style: {
            ...l,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var i = s
    }
  }
]);