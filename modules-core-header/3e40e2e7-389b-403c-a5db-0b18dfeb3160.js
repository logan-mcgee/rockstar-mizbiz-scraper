try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "3e40e2e7-389b-403c-a5db-0b18dfeb3160", e._sentryDebugIdIdentifier = "sentry-dbid-3e40e2e7-389b-403c-a5db-0b18dfeb3160")
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
  [2295, 4473, 4676, 6854, 7533], {
    42295: (e, r, d) => {
      e.exports = d(69245)
    },
    54473: (e, r, d) => {
      d.r(r), d.d(r, {
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => s
      });
      var o = d(71127),
        t = (d(18429), d(78308)),
        a = d(42295),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const d = (0, t.createSlot)(`Primitive.${r}`),
            n = o.forwardRef((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, l = t ? d : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(l, {
                ...n,
                ref: o
              })
            });
          return n.displayName = `Primitive.${r}`, {
            ...e,
            [r]: n
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
        s = o.forwardRef((e, r) => (0, a.jsx)(n.span, {
          ...e,
          ref: r,
          style: {
            ...l,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var f = s
    },
    69245: (e, r, d) => {
      var o = d(71127),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, d) {
        var o, a = {},
          f = null,
          i = null;
        for (o in void 0 !== d && (f = "" + d), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, o) && !s.hasOwnProperty(o) && (a[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === a[o] && (a[o] = r[o]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: a,
          _owner: l.current
        }
      }
      r.Fragment = a, r.jsx = f, r.jsxs = f
    }
  }
]);