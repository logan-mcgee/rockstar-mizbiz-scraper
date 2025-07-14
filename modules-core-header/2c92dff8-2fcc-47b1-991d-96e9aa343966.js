try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "2c92dff8-2fcc-47b1-991d-96e9aa343966", e._sentryDebugIdIdentifier = "sentry-dbid-2c92dff8-2fcc-47b1-991d-96e9aa343966")
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
  [147, 616, 2528, 3473, 5854], {
    25854: (e, r, d) => {
      e.exports = d(41454)
    },
    41454: (e, r, d) => {
      var o = d(71127),
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

      function f(e, r, d) {
        var o, t = {},
          f = null,
          i = null;
        for (o in void 0 !== d && (f = "" + d), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, o) && !s.hasOwnProperty(o) && (t[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === t[o] && (t[o] = r[o]);
        return {
          $$typeof: a,
          type: e,
          key: f,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      r.Fragment = t, r.jsx = f, r.jsxs = f
    },
    42528: (e, r, d) => {
      d.r(r), d.d(r, {
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var o = d(71127),
        a = (d(23117), d(21222)),
        t = d(25854),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, r) => {
          const d = (0, a.createSlot)(`Primitive.${r}`),
            n = o.forwardRef(((e, o) => {
              const {
                asChild: a,
                ...n
              } = e, l = a ? d : r;
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
      var f = s
    }
  }
]);