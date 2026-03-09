try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "21f730a0-8696-4578-891c-9670d7713f73", e._sentryDebugIdIdentifier = "sentry-dbid-21f730a0-8696-4578-891c-9670d7713f73")
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
  [782, 2295, 4676, 7533, 8401], {
    20782: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => f
      });
      var d = o(71127),
        t = (o(18429), o(8541)),
        a = o(42295),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const o = (0, t.createSlot)(`Primitive.${r}`),
            n = d.forwardRef((e, d) => {
              const {
                asChild: t,
                ...n
              } = e, l = t ? o : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(l, {
                ...n,
                ref: d
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
        f = d.forwardRef((e, r) => (0, a.jsx)(n.span, {
          ...e,
          ref: r,
          style: {
            ...l,
            ...e.style
          }
        }));
      f.displayName = "VisuallyHidden";
      var s = f
    },
    42295: (e, r, o) => {
      e.exports = o(69245)
    },
    69245: (e, r, o) => {
      var d = o(71127),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, o) {
        var d, a = {},
          s = null,
          i = null;
        for (d in void 0 !== o && (s = "" + o), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, d) && !f.hasOwnProperty(d) && (a[d] = r[d]);
        if (e && e.defaultProps)
          for (d in r = e.defaultProps) void 0 === a[d] && (a[d] = r[d]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: i,
          props: a,
          _owner: l.current
        }
      }
      r.Fragment = a, r.jsx = s, r.jsxs = s
    }
  }
]);