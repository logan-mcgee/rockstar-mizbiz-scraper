! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "76ea5c7d-ec37-4b7c-8fd7-43e047a09e01", e._sentryDebugIdIdentifier = "sentry-dbid-76ea5c7d-ec37-4b7c-8fd7-43e047a09e01")
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
  [8122, 3855, 6236, 9093, 1474, 5741], {
    32469: (e, r, d) => {
      var o = d(62229),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, d) {
        var o, n = {},
          f = null,
          i = null;
        for (o in void 0 !== d && (f = "" + d), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) t.call(r, o) && !s.hasOwnProperty(o) && (n[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === n[o] && (n[o] = r[o]);
        return {
          $$typeof: a,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      r.Fragment = n, r.jsx = f, r.jsxs = f
    },
    73855: (e, r, d) => {
      e.exports = d(32469)
    },
    85413: (e, r, d) => {
      d.d(r, {
        hO: () => s,
        sG: () => l
      });
      var o = d(62229),
        a = d(44853),
        n = d(21222),
        t = d(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, r) => {
          const d = o.forwardRef(((e, d) => {
            const {
              asChild: o,
              ...a
            } = e, l = o ? n.Slot : r;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
              ...a,
              ref: d
            })
          }));
          return d.displayName = `Primitive.${r}`, {
            ...e,
            [r]: d
          }
        }), {});

      function s(e, r) {
        e && a.flushSync((() => e.dispatchEvent(r)))
      }
    },
    68122: (e, r, d) => {
      d.r(r), d.d(r, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var o = d(62229),
        a = d(85413),
        n = d(73855),
        t = o.forwardRef(((e, r) => (0, n.jsx)(a.sG.span, {
          ...e,
          ref: r,
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