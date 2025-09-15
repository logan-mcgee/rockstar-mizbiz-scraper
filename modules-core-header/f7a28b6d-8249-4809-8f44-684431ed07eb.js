try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "f7a28b6d-8249-4809-8f44-684431ed07eb", e._sentryDebugIdIdentifier = "sentry-dbid-f7a28b6d-8249-4809-8f44-684431ed07eb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2295, 4676, 5187, 7533, 7568], {
    42295: (e, r, d) => {
      e.exports = d(69245)
    },
    45187: (e, r, d) => {
      d.r(r), d.d(r, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => f
      });
      var o = d(71127),
        a = (d(78628), d(36828)),
        t = d(42295),
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
        f = o.forwardRef(((e, r) => (0, t.jsx)(n.span, {
          ...e,
          ref: r,
          style: {
            ...l,
            ...e.style
          }
        })));
      f.displayName = "VisuallyHidden";
      var s = f
    },
    69245: (e, r, d) => {
      var o = d(71127),
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

      function s(e, r, d) {
        var o, t = {},
          s = null,
          i = null;
        for (o in void 0 !== d && (s = "" + d), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, o) && !f.hasOwnProperty(o) && (t[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === t[o] && (t[o] = r[o]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      r.Fragment = t, r.jsx = s, r.jsxs = s
    }
  }
]);