try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c9a253d8-af02-4d50-a787-ab148e8cd126", e._sentryDebugIdIdentifier = "sentry-dbid-c9a253d8-af02-4d50-a787-ab148e8cd126")
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
  [2295, 4531, 4676, 6912, 7533], {
    6912: (e, a, r) => {
      r.r(a), r.d(a, {
        Root: () => i,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var d = r(71127),
        o = (r(18429), r(57181)),
        t = r(42295),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const r = (0, o.createSlot)(`Primitive.${a}`),
            n = d.forwardRef((e, d) => {
              const {
                asChild: o,
                ...n
              } = e, l = o ? r : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: d
              })
            });
          return n.displayName = `Primitive.${a}`, {
            ...e,
            [a]: n
          }
        }, {}),
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
        s = d.forwardRef((e, a) => (0, t.jsx)(n.span, {
          ...e,
          ref: a,
          style: {
            ...l,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var i = s
    },
    42295: (e, a, r) => {
      e.exports = r(69245)
    },
    69245: (e, a, r) => {
      var d = r(71127),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, r) {
        var d, t = {},
          i = null,
          f = null;
        for (d in void 0 !== r && (i = "" + r), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) n.call(a, d) && !s.hasOwnProperty(d) && (t[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === t[d] && (t[d] = a[d]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: l.current
        }
      }
      a.Fragment = t, a.jsx = i, a.jsxs = i
    }
  }
]);