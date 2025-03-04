! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7d3d457f-2946-4b6f-bed8-37f274d0671d", e._sentryDebugIdIdentifier = "sentry-dbid-7d3d457f-2946-4b6f-bed8-37f274d0671d")
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
  [5629, 1029, 3410, 5791, 8172, 8010], {
    65039: (e, d, r) => {
      var o = r(62229),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, r) {
        var o, n = {},
          s = null,
          i = null;
        for (o in void 0 !== r && (s = "" + r), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (i = d.ref), d) t.call(d, o) && !f.hasOwnProperty(o) && (n[o] = d[o]);
        if (e && e.defaultProps)
          for (o in d = e.defaultProps) void 0 === n[o] && (n[o] = d[o]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      d.Fragment = n, d.jsx = s, d.jsxs = s
    },
    91029: (e, d, r) => {
      e.exports = r(65039)
    },
    13942: (e, d, r) => {
      r.d(d, {
        hO: () => f,
        sG: () => l
      });
      var o = r(62229),
        a = r(44853),
        n = r(21222),
        t = r(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, d) => {
          const r = o.forwardRef(((e, r) => {
            const {
              asChild: o,
              ...a
            } = e, l = o ? n.Slot : d;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
              ...a,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${d}`, {
            ...e,
            [d]: r
          }
        }), {});

      function f(e, d) {
        e && a.flushSync((() => e.dispatchEvent(d)))
      }
    },
    45629: (e, d, r) => {
      r.r(d), r.d(d, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var o = r(62229),
        a = r(13942),
        n = r(91029),
        t = o.forwardRef(((e, d) => (0, n.jsx)(a.sG.span, {
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