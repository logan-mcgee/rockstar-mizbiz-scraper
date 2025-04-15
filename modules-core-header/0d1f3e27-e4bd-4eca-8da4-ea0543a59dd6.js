! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0d1f3e27-e4bd-4eca-8da4-ea0543a59dd6", e._sentryDebugIdIdentifier = "sentry-dbid-0d1f3e27-e4bd-4eca-8da4-ea0543a59dd6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1315, 3855, 6236, 9093, 1474, 3696], {
    32469: (e, d, a) => {
      var r = a(62229),
        o = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, d, a) {
        var r, n = {},
          f = null,
          i = null;
        for (r in void 0 !== a && (f = "" + a), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (i = d.ref), d) t.call(d, r) && !s.hasOwnProperty(r) && (n[r] = d[r]);
        if (e && e.defaultProps)
          for (r in d = e.defaultProps) void 0 === n[r] && (n[r] = d[r]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      d.Fragment = n, d.jsx = f, d.jsxs = f
    },
    73855: (e, d, a) => {
      e.exports = a(32469)
    },
    656: (e, d, a) => {
      a.d(d, {
        hO: () => s,
        sG: () => l
      });
      var r = a(62229),
        o = a(44853),
        n = a(30786),
        t = a(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, d) => {
          const a = r.forwardRef(((e, a) => {
            const {
              asChild: r,
              ...o
            } = e, l = r ? n.Slot : d;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
              ...o,
              ref: a
            })
          }));
          return a.displayName = `Primitive.${d}`, {
            ...e,
            [d]: a
          }
        }), {});

      function s(e, d) {
        e && o.flushSync((() => e.dispatchEvent(d)))
      }
    },
    71315: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var r = a(62229),
        o = a(656),
        n = a(73855),
        t = r.forwardRef(((e, d) => (0, n.jsx)(o.sG.span, {
          ...e,
          ref: d,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })));
      t.displayName = "VisuallyHidden";
      var l = t
    }
  }
]);