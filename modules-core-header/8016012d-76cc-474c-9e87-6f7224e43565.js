try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8016012d-76cc-474c-9e87-6f7224e43565", e._sentryDebugIdIdentifier = "sentry-dbid-8016012d-76cc-474c-9e87-6f7224e43565")
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
  [2174, 3541, 4555, 5922, 6936, 9793], {
    94931(e, r, o) {
      var d = o(4637),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, r, o) {
        var d, t = {},
          i = null,
          f = null;
        for (d in void 0 !== o && (i = "" + o), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (f = r.ref), r) n.call(r, d) && !l.hasOwnProperty(d) && (t[d] = r[d]);
        if (e && e.defaultProps)
          for (d in r = e.defaultProps) void 0 === t[d] && (t[d] = r[d]);
        return {
          $$typeof: a,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: s.current
        }
      }
      r.Fragment = t, r.jsx = i, r.jsxs = i
    },
    39793(e, r, o) {
      e.exports = o(94931)
    },
    20972(e, r, o) {
      o.d(r, {
        sG: () => n
      });
      var d = o(4637),
        a = (o(84017), o(27937)),
        t = o(39793),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const o = (0, a.createSlot)(`Primitive.${r}`),
            n = d.forwardRef((e, d) => {
              const {
                asChild: a,
                ...n
              } = e, s = a ? o : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(s, {
                ...n,
                ref: d
              })
            });
          return n.displayName = `Primitive.${r}`, {
            ...e,
            [r]: n
          }
        }, {})
    },
    3541(e, r, o) {
      o.r(r), o.d(r, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var d = o(4637),
        a = o(20972),
        t = o(39793),
        n = Object.freeze({
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
        s = d.forwardRef((e, r) => (0, t.jsx)(a.sG.span, {
          ...e,
          ref: r,
          style: {
            ...n,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var l = s
    }
  }
]);