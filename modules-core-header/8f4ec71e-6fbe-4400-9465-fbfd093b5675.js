try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8f4ec71e-6fbe-4400-9465-fbfd093b5675", e._sentryDebugIdIdentifier = "sentry-dbid-8f4ec71e-6fbe-4400-9465-fbfd093b5675")
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
  [851, 2295, 3232, 4676, 7533], {
    12255: (e, d, r) => {
      r.d(d, {
        hO: () => l,
        sG: () => s
      });
      var o = r(71127),
        t = r(18429),
        a = r(37910),
        n = r(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, d) => {
          const r = (0, a.createSlot)(`Primitive.${d}`),
            t = o.forwardRef(((e, o) => {
              const {
                asChild: t,
                ...a
              } = e, s = t ? r : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...a,
                ref: o
              })
            }));
          return t.displayName = `Primitive.${d}`, {
            ...e,
            [d]: t
          }
        }), {});

      function l(e, d) {
        e && t.flushSync((() => e.dispatchEvent(d)))
      }
    },
    20851: (e, d, r) => {
      r.r(d), r.d(d, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var o = r(71127),
        t = r(12255),
        a = r(42295),
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
        s = o.forwardRef(((e, d) => (0, a.jsx)(t.sG.span, {
          ...e,
          ref: d,
          style: {
            ...n,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var l = s
    },
    42295: (e, d, r) => {
      e.exports = r(69245)
    },
    69245: (e, d, r) => {
      var o = r(71127),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, d, r) {
        var o, a = {},
          f = null,
          i = null;
        for (o in void 0 !== r && (f = "" + r), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, o) && !l.hasOwnProperty(o) && (a[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === a[o] && (a[o] = d[o]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: a,
          _owner: s.current
        }
      }
      d.Fragment = a, d.jsx = f, d.jsxs = f
    }
  }
]);