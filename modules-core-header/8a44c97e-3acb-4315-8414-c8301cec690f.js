try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8a44c97e-3acb-4315-8414-c8301cec690f", e._sentryDebugIdIdentifier = "sentry-dbid-8a44c97e-3acb-4315-8414-c8301cec690f")
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
  [954, 2057, 4438, 5716, 8573], {
    24438: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => i,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var a = o(71127),
        d = (o(2208), o(21222)),
        t = o(70954),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, r) => {
          const o = (0, d.createSlot)(`Primitive.${r}`),
            n = a.forwardRef(((e, a) => {
              const {
                asChild: d,
                ...n
              } = e, l = d ? o : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: a
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
        s = a.forwardRef(((e, r) => (0, t.jsx)(n.span, {
          ...e,
          ref: r,
          style: {
            ...l,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var i = s
    },
    70954: (e, r, o) => {
      e.exports = o(92834)
    },
    92834: (e, r, o) => {
      var a = o(71127),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, r, o) {
        var a, t = {},
          i = null,
          f = null;
        for (a in void 0 !== o && (i = "" + o), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (f = r.ref), r) n.call(r, a) && !s.hasOwnProperty(a) && (t[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === t[a] && (t[a] = r[a]);
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
    }
  }
]);