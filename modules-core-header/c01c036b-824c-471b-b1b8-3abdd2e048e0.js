try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c01c036b-824c-471b-b1b8-3abdd2e048e0", e._sentryDebugIdIdentifier = "sentry-dbid-c01c036b-824c-471b-b1b8-3abdd2e048e0")
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
  [2174, 2637, 4555, 5018, 9793], {
    94931(e, d, r) {
      var o = r(4637),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, d, r) {
        var o, t = {},
          i = null,
          f = null;
        for (o in void 0 !== r && (i = "" + r), void 0 !== d.key && (i = "" + d.key), void 0 !== d.ref && (f = d.ref), d) n.call(d, o) && !l.hasOwnProperty(o) && (t[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === t[o] && (t[o] = d[o]);
        return {
          $$typeof: a,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: s.current
        }
      }
      d.Fragment = t, d.jsx = i, d.jsxs = i
    },
    39793(e, d, r) {
      e.exports = r(94931)
    },
    31270(e, d, r) {
      r.d(d, {
        hO: () => l,
        sG: () => s
      });
      var o = r(4637),
        a = r(84017),
        t = r(50486),
        n = r(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const r = (0, t.createSlot)(`Primitive.${d}`),
            a = o.forwardRef((e, o) => {
              const {
                asChild: a,
                ...t
              } = e, s = a ? r : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: o
              })
            });
          return a.displayName = `Primitive.${d}`, {
            ...e,
            [d]: a
          }
        }, {});

      function l(e, d) {
        e && a.flushSync(() => e.dispatchEvent(d))
      }
    },
    32637(e, d, r) {
      r.r(d), r.d(d, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var o = r(4637),
        a = r(31270),
        t = r(39793),
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
        s = o.forwardRef((e, d) => (0, t.jsx)(a.sG.span, {
          ...e,
          ref: d,
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