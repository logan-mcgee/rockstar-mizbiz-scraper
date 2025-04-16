! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0d1f3e27-e4bd-4eca-8da4-ea0543a59dd6", e._sentryDebugIdIdentifier = "sentry-dbid-0d1f3e27-e4bd-4eca-8da4-ea0543a59dd6")
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
    32469: (e, a, d) => {
      var r = d(62229),
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

      function f(e, a, d) {
        var r, n = {},
          f = null,
          i = null;
        for (r in void 0 !== d && (f = "" + d), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) t.call(a, r) && !s.hasOwnProperty(r) && (n[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === n[r] && (n[r] = a[r]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      a.Fragment = n, a.jsx = f, a.jsxs = f
    },
    73855: (e, a, d) => {
      e.exports = d(32469)
    },
    656: (e, a, d) => {
      d.d(a, {
        hO: () => s,
        sG: () => l
      });
      var r = d(62229),
        o = d(44853),
        n = d(30786),
        t = d(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const d = r.forwardRef(((e, d) => {
            const {
              asChild: r,
              ...o
            } = e, l = r ? n.Slot : a;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
              ...o,
              ref: d
            })
          }));
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }), {});

      function s(e, a) {
        e && o.flushSync((() => e.dispatchEvent(a)))
      }
    },
    71315: (e, a, d) => {
      d.r(a), d.d(a, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var r = d(62229),
        o = d(656),
        n = d(73855),
        t = r.forwardRef(((e, a) => (0, n.jsx)(o.sG.span, {
          ...e,
          ref: a,
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