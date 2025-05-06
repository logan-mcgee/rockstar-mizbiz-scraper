! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "ef79ae5b-c184-4db0-b6a5-a3c04dca9111", e._sentryDebugIdIdentifier = "sentry-dbid-ef79ae5b-c184-4db0-b6a5-a3c04dca9111")
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
    32469: (e, r, a) => {
      var o = a(62229),
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

      function i(e, r, a) {
        var o, n = {},
          i = null,
          f = null;
        for (o in void 0 !== a && (i = "" + a), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (f = r.ref), r) t.call(r, o) && !s.hasOwnProperty(o) && (n[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === n[o] && (n[o] = r[o]);
        return {
          $$typeof: d,
          type: e,
          key: i,
          ref: f,
          props: n,
          _owner: l.current
        }
      }
      r.Fragment = n, r.jsx = i, r.jsxs = i
    },
    73855: (e, r, a) => {
      e.exports = a(32469)
    },
    67774: (e, r, a) => {
      a.d(r, {
        hO: () => s,
        sG: () => l
      });
      var o = a(62229),
        d = a(44853),
        n = a(78217),
        t = a(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, r) => {
          const a = (0, n.createSlot)(`Primitive.${r}`),
            d = o.forwardRef(((e, o) => {
              const {
                asChild: d,
                ...n
              } = e, l = d ? a : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
                ...n,
                ref: o
              })
            }));
          return d.displayName = `Primitive.${r}`, {
            ...e,
            [r]: d
          }
        }), {});

      function s(e, r) {
        e && d.flushSync((() => e.dispatchEvent(r)))
      }
    },
    51547: (e, r, a) => {
      a.r(r), a.d(r, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var o = a(62229),
        d = a(67774),
        n = a(73855),
        t = o.forwardRef(((e, r) => (0, n.jsx)(d.sG.span, {
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