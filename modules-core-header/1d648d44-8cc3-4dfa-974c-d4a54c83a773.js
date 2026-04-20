try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1d648d44-8cc3-4dfa-974c-d4a54c83a773", e._sentryDebugIdIdentifier = "sentry-dbid-1d648d44-8cc3-4dfa-974c-d4a54c83a773")
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
      var a = r(71127),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, d, r) {
        var a, t = {},
          i = null,
          f = null;
        for (a in void 0 !== r && (i = "" + r), void 0 !== d.key && (i = "" + d.key), void 0 !== d.ref && (f = d.ref), d) n.call(d, a) && !s.hasOwnProperty(a) && (t[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === t[a] && (t[a] = d[a]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: l.current
        }
      }
      d.Fragment = t, d.jsx = i, d.jsxs = i
    },
    80540: (e, d, r) => {
      r.r(d), r.d(d, {
        Root: () => i,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var a = r(71127),
        o = (r(18429), r(44537)),
        t = r(42295),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const r = (0, o.createSlot)(`Primitive.${d}`),
            n = a.forwardRef((e, a) => {
              const {
                asChild: o,
                ...n
              } = e, l = o ? r : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: a
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
        s = a.forwardRef((e, d) => (0, t.jsx)(n.span, {
          ...e,
          ref: d,
          style: {
            ...l,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var i = s
    }
  }
]);