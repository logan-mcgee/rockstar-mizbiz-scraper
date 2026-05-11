try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2e188246-33aa-4e08-a6f3-5906667954a2", e._sentryDebugIdIdentifier = "sentry-dbid-2e188246-33aa-4e08-a6f3-5906667954a2")
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
  [1750, 2295, 4676, 7533, 9369], {
    69245(e, a, r) {
      var o = r(71127),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, r) {
        var o, t = {},
          i = null,
          f = null;
        for (o in void 0 !== r && (i = "" + r), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) n.call(a, o) && !l.hasOwnProperty(o) && (t[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === t[o] && (t[o] = a[o]);
        return {
          $$typeof: d,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: s.current
        }
      }
      a.Fragment = t, a.jsx = i, a.jsxs = i
    },
    42295(e, a, r) {
      e.exports = r(69245)
    },
    78004(e, a, r) {
      r.d(a, {
        hO: () => l,
        sG: () => s
      });
      var o = r(71127),
        d = r(18429),
        t = r(38863),
        n = r(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const r = (0, t.createSlot)(`Primitive.${a}`),
            d = o.forwardRef((e, o) => {
              const {
                asChild: d,
                ...t
              } = e, s = d ? r : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: o
              })
            });
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }, {});

      function l(e, a) {
        e && d.flushSync(() => e.dispatchEvent(a))
      }
    },
    59369(e, a, r) {
      r.r(a), r.d(a, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var o = r(71127),
        d = r(78004),
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
        s = o.forwardRef((e, a) => (0, t.jsx)(d.sG.span, {
          ...e,
          ref: a,
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