try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "2815f63d-066c-4dac-a315-b48e6efbd850", e._sentryDebugIdIdentifier = "sentry-dbid-2815f63d-066c-4dac-a315-b48e6efbd850")
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
  [616, 3473, 5854, 7385, 9766], {
    9766: (e, d, r) => {
      r.r(d), r.d(d, {
        Root: () => i,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var o = r(71127),
        a = (r(30306), r(21222)),
        t = r(25854),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, d) => {
          const r = (0, a.createSlot)(`Primitive.${d}`),
            n = o.forwardRef(((e, o) => {
              const {
                asChild: a,
                ...n
              } = e, l = a ? r : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: o
              })
            }));
          return n.displayName = `Primitive.${d}`, {
            ...e,
            [d]: n
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
        s = o.forwardRef(((e, d) => (0, t.jsx)(n.span, {
          ...e,
          ref: d,
          style: {
            ...l,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var i = s
    },
    25854: (e, d, r) => {
      e.exports = r(41454)
    },
    41454: (e, d, r) => {
      var o = r(71127),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, d, r) {
        var o, t = {},
          i = null,
          f = null;
        for (o in void 0 !== r && (i = "" + r), void 0 !== d.key && (i = "" + d.key), void 0 !== d.ref && (f = d.ref), d) n.call(d, o) && !s.hasOwnProperty(o) && (t[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === t[o] && (t[o] = d[o]);
        return {
          $$typeof: a,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: l.current
        }
      }
      d.Fragment = t, d.jsx = i, d.jsxs = i
    }
  }
]);