! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0fd0ca5b-a39d-43e7-9a71-72c2a4b2407b", e._sentryDebugIdIdentifier = "sentry-dbid-0fd0ca5b-a39d-43e7-9a71-72c2a4b2407b")
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
  [9600, 1029, 3410, 5791, 8172, 7219], {
    65039: (e, a, r) => {
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

      function f(e, a, r) {
        var o, n = {},
          f = null,
          i = null;
        for (o in void 0 !== r && (f = "" + r), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) t.call(a, o) && !s.hasOwnProperty(o) && (n[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      a.Fragment = n, a.jsx = f, a.jsxs = f
    },
    91029: (e, a, r) => {
      e.exports = r(65039)
    },
    4119: (e, a, r) => {
      r.d(a, {
        hO: () => s,
        sG: () => l
      });
      var o = r(62229),
        d = r(44853),
        n = r(21222),
        t = r(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const r = o.forwardRef(((e, r) => {
            const {
              asChild: o,
              ...d
            } = e, l = o ? n.Slot : a;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(l, {
              ...d,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${a}`, {
            ...e,
            [a]: r
          }
        }), {});

      function s(e, a) {
        e && d.flushSync((() => e.dispatchEvent(a)))
      }
    },
    29600: (e, a, r) => {
      r.r(a), r.d(a, {
        Root: () => l,
        VisuallyHidden: () => t
      });
      var o = r(62229),
        d = r(4119),
        n = r(91029),
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