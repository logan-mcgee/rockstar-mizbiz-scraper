try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "3f9f33f1-5f11-4337-bf60-5b9903ec928d", e._sentryDebugIdIdentifier = "sentry-dbid-3f9f33f1-5f11-4337-bf60-5b9903ec928d")
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
  [2295, 3691, 4676, 6072, 7533], {
    42295: (e, r, o) => {
      e.exports = o(69245)
    },
    69245: (e, r, o) => {
      var d = o(71127),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, o) {
        var d, n = {},
          s = null,
          i = null;
        for (d in void 0 !== o && (s = "" + o), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (i = r.ref), r) a.call(r, d) && !l.hasOwnProperty(d) && (n[d] = r[d]);
        if (e && e.defaultProps)
          for (d in r = e.defaultProps) void 0 === n[d] && (n[d] = r[d]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: i,
          props: n,
          _owner: f.current
        }
      }
      r.Fragment = n, r.jsx = s, r.jsxs = s
    },
    76072: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => f,
        VisuallyHidden: () => l
      });
      var d = o(71127),
        t = (o(18429), o(59227)),
        n = o(42295),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const o = (0, t.createSlot)(`Primitive.${r}`),
            a = d.forwardRef((e, d) => {
              const {
                asChild: t,
                ...a
              } = e, f = t ? o : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(f, {
                ...a,
                ref: d
              })
            });
          return a.displayName = `Primitive.${r}`, {
            ...e,
            [r]: a
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
        l = d.forwardRef((e, r) => (0, n.jsx)(a.span, {
          ...e,
          ref: r,
          style: {
            ...f,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var s = l
    }
  }
]);