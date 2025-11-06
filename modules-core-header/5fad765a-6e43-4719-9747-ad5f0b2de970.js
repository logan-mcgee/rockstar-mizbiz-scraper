try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5fad765a-6e43-4719-9747-ad5f0b2de970", e._sentryDebugIdIdentifier = "sentry-dbid-5fad765a-6e43-4719-9747-ad5f0b2de970")
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
    42295: (e, r, a) => {
      e.exports = a(69245)
    },
    69055: (e, r, a) => {
      a.r(r), a.d(r, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var d = a(71127),
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
        s = d.forwardRef(((e, r) => (0, t.jsx)(o.sG.span, {
          ...e,
          ref: r,
          style: {
            ...n,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var l = s
    },
    69245: (e, r, a) => {
      var d = a(71127),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, r, a) {
        var d, t = {},
          i = null,
          f = null;
        for (d in void 0 !== a && (i = "" + a), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (f = r.ref), r) n.call(r, d) && !l.hasOwnProperty(d) && (t[d] = r[d]);
        if (e && e.defaultProps)
          for (d in r = e.defaultProps) void 0 === t[d] && (t[d] = r[d]);
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
    78004: (e, r, a) => {
      a.d(r, {
        hO: () => l,
        sG: () => s
      });
      var d = a(71127),
        o = a(18429),
        t = a(21222),
        n = a(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, r) => {
          const a = (0, t.createSlot)(`Primitive.${r}`),
            o = d.forwardRef(((e, d) => {
              const {
                asChild: o,
                ...t
              } = e, s = o ? a : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: d
              })
            }));
          return o.displayName = `Primitive.${r}`, {
            ...e,
            [r]: o
          }
        }), {});

      function l(e, r) {
        e && o.flushSync((() => e.dispatchEvent(r)))
      }
    }
  }
]);