! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ef79ae5b-c184-4db0-b6a5-a3c04dca9111", e._sentryDebugIdIdentifier = "sentry-dbid-ef79ae5b-c184-4db0-b6a5-a3c04dca9111")
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
  [1547, 3855, 6236, 9093, 1474, 3928], {
    32469: (e, a, r) => {
      var o = r(62229),
        d = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, r) {
        var o, n = {},
          i = null,
          f = null;
        for (o in void 0 !== r && (i = "" + r), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) t.call(a, o) && !s.hasOwnProperty(o) && (n[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return {
          $$typeof: d,
          type: e,
          key: i,
          ref: f,
          props: n,
          _owner: l.current
        }
      }
      a.Fragment = n, a.jsx = i, a.jsxs = i
    },
    73855: (e, a, r) => {
      e.exports = r(32469)
    },
    67774: (e, a, r) => {
      r.d(a, {
        hO: () => s,
        sG: () => l
      });
      var o = r(62229),
        d = r(44853),
        n = r(78217),
        t = r(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const r = (0, n.createSlot)(`Primitive.${a}`),
            d = o.forwardRef(((e, o) => {
              const {
                asChild: d,
                ...n
              } = e, l = d ? r : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: o
              })
            }));
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }), {});

      function s(e, a) {
        e && d.flushSync((() => e.dispatchEvent(a)))
      }
    },
    51547: (e, a, r) => {
      r.r(a), r.d(a, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var o = r(62229),
        d = r(67774),
        n = r(73855),
        t = o.forwardRef(((e, a) => (0, n.jsx)(d.sG.span, {
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