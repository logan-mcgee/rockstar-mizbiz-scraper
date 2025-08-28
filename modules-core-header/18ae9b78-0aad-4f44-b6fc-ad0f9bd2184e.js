try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "18ae9b78-0aad-4f44-b6fc-ad0f9bd2184e", e._sentryDebugIdIdentifier = "sentry-dbid-18ae9b78-0aad-4f44-b6fc-ad0f9bd2184e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [954, 5716, 5783, 8164, 8573], {
    5783: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var r = a(71127),
        o = (a(78628), a(36828)),
        t = a(70954),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, d) => {
          const a = (0, o.createSlot)(`Primitive.${d}`),
            n = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...n
              } = e, l = o ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: r
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
        s = r.forwardRef(((e, d) => (0, t.jsx)(n.span, {
          ...e,
          ref: d,
          style: {
            ...l,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var f = s
    },
    70954: (e, d, a) => {
      e.exports = a(92834)
    },
    92834: (e, d, a) => {
      var r = a(71127),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, d, a) {
        var r, t = {},
          f = null,
          i = null;
        for (r in void 0 !== a && (f = "" + a), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, r) && !s.hasOwnProperty(r) && (t[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === t[r] && (t[r] = d[r]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      d.Fragment = t, d.jsx = f, d.jsxs = f
    }
  }
]);