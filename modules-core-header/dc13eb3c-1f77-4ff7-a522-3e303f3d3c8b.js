try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "dc13eb3c-1f77-4ff7-a522-3e303f3d3c8b", e._sentryDebugIdIdentifier = "sentry-dbid-dc13eb3c-1f77-4ff7-a522-3e303f3d3c8b")
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
    6912: (e, r, d) => {
      d.r(r), d.d(r, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => f,
        VisuallyHidden: () => l
      });
      var o = d(71127),
        t = (d(18429), d(27841)),
        a = d(42295),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const d = (0, t.createSlot)(`Primitive.${r}`),
            n = o.forwardRef((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, f = t ? d : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(f, {
                ...n,
                ref: o
              })
            });
          return n.displayName = `Primitive.${r}`, {
            ...e,
            [r]: n
          }
        }, {}),
        f = Object.freeze({
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
        l = o.forwardRef((e, r) => (0, a.jsx)(n.span, {
          ...e,
          ref: r,
          style: {
            ...f,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var s = l
    },
    42295: (e, r, d) => {
      e.exports = d(69245)
    },
    69245: (e, r, d) => {
      var o = d(71127),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, d) {
        var o, a = {},
          s = null,
          i = null;
        for (o in void 0 !== d && (s = "" + d), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, o) && !l.hasOwnProperty(o) && (a[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === a[o] && (a[o] = r[o]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: i,
          props: a,
          _owner: f.current
        }
      }
      r.Fragment = a, r.jsx = s, r.jsxs = s
    }
  }
]);