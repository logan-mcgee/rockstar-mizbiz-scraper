try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a0bda5ce-e775-45f5-aced-9965db51a814", e._sentryDebugIdIdentifier = "sentry-dbid-a0bda5ce-e775-45f5-aced-9965db51a814")
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
  [269, 2174, 4299, 4555, 6680, 6936, 9793], {
    94931(e, r, d) {
      var a = d(4637),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, r, d) {
        var a, t = {},
          i = null,
          f = null;
        for (a in void 0 !== d && (i = "" + d), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (f = r.ref), r) n.call(r, a) && !l.hasOwnProperty(a) && (t[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === t[a] && (t[a] = r[a]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: s.current
        }
      }
      r.Fragment = t, r.jsx = i, r.jsxs = i
    },
    39793(e, r, d) {
      e.exports = d(94931)
    },
    41988(e, r, d) {
      d.d(r, {
        hO: () => i,
        sG: () => l
      });
      var a = d(4637),
        o = d(84017),
        t = d(49481),
        n = d(39793),
        s = Object.defineProperty,
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const d = (0, t.createSlot)(`Primitive.${r}`),
            o = a.forwardRef((e, a) => {
              const {
                asChild: o,
                ...t
              } = e, s = o ? d : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: a
              })
            });
          return o.displayName = `Primitive.${r}`, {
            ...e,
            [r]: o
          }
        }, {});

      function i(e, r) {
        e && o.flushSync(() => e.dispatchEvent(r))
      }
      s(i, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    94299(e, r, d) {
      d.r(r), d.d(r, {
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => i
      });
      var a = d(4637),
        o = d(41988),
        t = d(39793),
        n = Object.defineProperty,
        s = (e, r) => n(e, "name", {
          value: r,
          configurable: !0
        }),
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
        i = a.forwardRef(s(function(e, r) {
          return (0, t.jsx)(o.sG.span, {
            ...e,
            ref: r,
            style: {
              ...l,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        f = i
    }
  }
]);