! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8971a761-f2d5-45be-9056-9706ea61c4fc", e._sentryDebugIdIdentifier = "sentry-dbid-8971a761-f2d5-45be-9056-9706ea61c4fc")
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
  [5144, 3855, 6236, 9093, 1474, 2763], {
    32469: (e, r, o) => {
      var a = o(62229),
        d = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, o) {
        var a, n = {},
          f = null,
          i = null;
        for (a in void 0 !== o && (f = "" + o), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) t.call(r, a) && !s.hasOwnProperty(a) && (n[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === n[a] && (n[a] = r[a]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      r.Fragment = n, r.jsx = f, r.jsxs = f
    },
    73855: (e, r, o) => {
      e.exports = o(32469)
    },
    22728: (e, r, o) => {
      o.d(r, {
        hO: () => s,
        sG: () => l
      });
      var a = o(62229),
        d = o(44853),
        n = o(21222),
        t = o(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, r) => {
          const o = a.forwardRef(((e, o) => {
            const {
              asChild: a,
              ...d
            } = e, l = a ? n.Slot : r;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
              ...d,
              ref: o
            })
          }));
          return o.displayName = `Primitive.${r}`, {
            ...e,
            [r]: o
          }
        }), {});

      function s(e, r) {
        e && d.flushSync((() => e.dispatchEvent(r)))
      }
    },
    2763: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var a = o(62229),
        d = o(22728),
        n = o(73855),
        t = a.forwardRef(((e, r) => (0, n.jsx)(d.sG.span, {
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