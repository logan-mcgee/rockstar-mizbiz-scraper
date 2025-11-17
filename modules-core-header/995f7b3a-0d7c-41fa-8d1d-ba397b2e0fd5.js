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
    42295: (e, d, a) => {
      e.exports = a(69245)
    },
    69055: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var r = a(71127),
        o = a(78004),
        t = a(42295),
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
        s = r.forwardRef((e, d) => (0, t.jsx)(o.sG.span, {
          ...e,
          ref: d,
          style: {
            ...n,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var f = s
    },
    69245: (e, d, a) => {
      var r = a(71127),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, a) {
        var r, t = {},
          l = null,
          i = null;
        for (r in void 0 !== a && (l = "" + a), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, r) && !f.hasOwnProperty(r) && (t[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === t[r] && (t[r] = d[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: t,
          _owner: s.current
        }
      }
      d.Fragment = t, d.jsx = l, d.jsxs = l
    },
    78004: (e, d, a) => {
      a.d(d, {
        hO: () => f,
        sG: () => s
      });
      var r = a(71127),
        o = a(31062),
        t = a(21222),
        n = a(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, d) => {
          const a = (0, t.createSlot)(`Primitive.${d}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...t
              } = e, s = o ? a : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: r
              })
            });
          return o.displayName = `Primitive.${d}`, {
            ...e,
            [d]: o
          }
        }, {});

      function f(e, d) {
        e && o.flushSync(() => e.dispatchEvent(d))
      }
    }
  }
]);