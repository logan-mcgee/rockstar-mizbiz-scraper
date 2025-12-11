try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "995f7b3a-0d7c-41fa-8d1d-ba397b2e0fd5", e._sentryDebugIdIdentifier = "sentry-dbid-995f7b3a-0d7c-41fa-8d1d-ba397b2e0fd5")
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
  [1436, 2295, 4676, 7533, 9055], {
    42295: (e, d, r) => {
      e.exports = r(69245)
    },
    69055: (e, d, r) => {
      r.r(d), r.d(d, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => f
      });
      var o = r(71127),
        a = r(78004),
        t = r(42295),
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
        f = o.forwardRef((e, d) => (0, t.jsx)(a.sG.span, {
          ...e,
          ref: d,
          style: {
            ...n,
            ...e.style
          }
        }));
      f.displayName = "VisuallyHidden";
      var s = f
    },
    69245: (e, d, r) => {
      var o = r(71127),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, r) {
        var o, t = {},
          l = null,
          i = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, o) && !s.hasOwnProperty(o) && (t[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === t[o] && (t[o] = d[o]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: i,
          props: t,
          _owner: f.current
        }
      }
      d.Fragment = t, d.jsx = l, d.jsxs = l
    },
    78004: (e, d, r) => {
      r.d(d, {
        hO: () => s,
        sG: () => f
      });
      var o = r(71127),
        a = r(31062),
        t = r(21222),
        n = r(42295),
        f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const r = (0, t.createSlot)(`Primitive.${d}`),
            a = o.forwardRef((e, o) => {
              const {
                asChild: a,
                ...t
              } = e, f = a ? r : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(f, {
                ...t,
                ref: o
              })
            });
          return a.displayName = `Primitive.${d}`, {
            ...e,
            [d]: a
          }
        }, {});

      function s(e, d) {
        e && a.flushSync(() => e.dispatchEvent(d))
      }
    }
  }
]);