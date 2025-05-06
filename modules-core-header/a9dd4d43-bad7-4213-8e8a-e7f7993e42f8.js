! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a9dd4d43-bad7-4213-8e8a-e7f7993e42f8", e._sentryDebugIdIdentifier = "sentry-dbid-a9dd4d43-bad7-4213-8e8a-e7f7993e42f8")
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
  [6247, 3855, 6236, 9093, 1474, 8628], {
    32469: (e, d, r) => {
      var a = r(62229),
        o = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, d, r) {
        var a, n = {},
          f = null,
          i = null;
        for (a in void 0 !== r && (f = "" + r), void 0 !== d.key && (f = "" + d.key), void 0 !== d.ref && (i = d.ref), d) t.call(d, a) && !s.hasOwnProperty(a) && (n[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === n[a] && (n[a] = d[a]);
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
    73855: (e, d, r) => {
      e.exports = r(32469)
    },
    51347: (e, d, r) => {
      r.d(d, {
        hO: () => s,
        sG: () => l
      });
      var a = r(62229),
        o = r(44853),
        n = r(16741),
        t = r(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, d) => {
          const r = a.forwardRef(((e, r) => {
            const {
              asChild: a,
              ...o
            } = e, l = a ? n.Slot : d;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
              ...o,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${d}`, {
            ...e,
            [d]: r
          }
        }), {});

      function s(e, d) {
        e && o.flushSync((() => e.dispatchEvent(d)))
      }
    },
    18628: (e, d, r) => {
      r.r(d), r.d(d, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var a = r(62229),
        o = r(51347),
        n = r(73855),
        t = a.forwardRef(((e, d) => (0, n.jsx)(o.sG.span, {
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