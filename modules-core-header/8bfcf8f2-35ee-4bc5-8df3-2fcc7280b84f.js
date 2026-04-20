try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8bfcf8f2-35ee-4bc5-8df3-2fcc7280b84f", e._sentryDebugIdIdentifier = "sentry-dbid-8bfcf8f2-35ee-4bc5-8df3-2fcc7280b84f")
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
  [2295, 3069, 4676, 5450, 7533], {
    42295: (e, r, o) => {
      e.exports = o(69245)
    },
    63069: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => f,
        VisuallyHidden: () => l
      });
      var d = o(71127),
        a = (o(18429), o(84213)),
        t = o(42295),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const o = (0, a.createSlot)(`Primitive.${r}`),
            n = d.forwardRef((e, d) => {
              const {
                asChild: a,
                ...n
              } = e, f = a ? o : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(f, {
                ...n,
                ref: d
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
        l = d.forwardRef((e, r) => (0, t.jsx)(n.span, {
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
    69245: (e, r, o) => {
      var d = o(71127),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, o) {
        var d, t = {},
          s = null,
          i = null;
        for (d in void 0 !== o && (s = "" + o), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, d) && !l.hasOwnProperty(d) && (t[d] = r[d]);
        if (e && e.defaultProps)
          for (d in r = e.defaultProps) void 0 === t[d] && (t[d] = r[d]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: i,
          props: t,
          _owner: f.current
        }
      }
      r.Fragment = t, r.jsx = s, r.jsxs = s
    }
  }
]);