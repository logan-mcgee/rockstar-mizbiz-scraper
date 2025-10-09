try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5fad765a-6e43-4719-9747-ad5f0b2de970", e._sentryDebugIdIdentifier = "sentry-dbid-5fad765a-6e43-4719-9747-ad5f0b2de970")
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
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var a = r(71127),
        o = r(78004),
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
        s = a.forwardRef(((e, d) => (0, t.jsx)(o.sG.span, {
          ...e,
          ref: d,
          style: {
            ...n,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var f = s
    },
    69245: (e, d, r) => {
      var a = r(71127),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, r) {
        var a, t = {},
          l = null,
          i = null;
        for (a in void 0 !== r && (l = "" + r), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (i = d.ref), d) n.call(d, a) && !f.hasOwnProperty(a) && (t[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === t[a] && (t[a] = d[a]);
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
    78004: (e, d, r) => {
      r.d(d, {
        hO: () => f,
        sG: () => s
      });
      var a = r(71127),
        o = r(18429),
        t = r(21222),
        n = r(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, d) => {
          const r = (0, t.createSlot)(`Primitive.${d}`),
            o = a.forwardRef(((e, a) => {
              const {
                asChild: o,
                ...t
              } = e, s = o ? r : d;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: a
              })
            }));
          return o.displayName = `Primitive.${d}`, {
            ...e,
            [d]: o
          }
        }), {});

      function f(e, d) {
        e && o.flushSync((() => e.dispatchEvent(d)))
      }
    }
  }
]);