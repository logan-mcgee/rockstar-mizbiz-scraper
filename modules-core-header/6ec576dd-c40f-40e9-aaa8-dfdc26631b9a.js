try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6ec576dd-c40f-40e9-aaa8-dfdc26631b9a", e._sentryDebugIdIdentifier = "sentry-dbid-6ec576dd-c40f-40e9-aaa8-dfdc26631b9a")
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
  [540, 2295, 4676, 7533, 8159], {
    42295: (e, d, r) => {
      e.exports = r(69245)
    },
    69245: (e, d, r) => {
      var o = r(71127),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, r) {
        var o, t = {},
          s = null,
          i = null;
        for (o in void 0 !== r && (s = "" + r), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, o) && !f.hasOwnProperty(o) && (t[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === t[o] && (t[o] = d[o]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      d.Fragment = t, d.jsx = s, d.jsxs = s
    },
    80540: (e, d, r) => {
      r.r(d), r.d(d, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => f
      });
      var o = r(71127),
        a = (r(18429), r(1153)),
        t = r(42295),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const r = (0, a.createSlot)(`Primitive.${d}`),
            n = o.forwardRef((e, o) => {
              const {
                asChild: a,
                ...n
              } = e, l = a ? r : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: o
              })
            });
          return n.displayName = `Primitive.${d}`, {
            ...e,
            [d]: n
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
        f = o.forwardRef((e, d) => (0, t.jsx)(n.span, {
          ...e,
          ref: d,
          style: {
            ...l,
            ...e.style
          }
        }));
      f.displayName = "VisuallyHidden";
      var s = f
    }
  }
]);