! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "78d4041f-8a35-4a0f-b453-99b3bb813929", e._sentryDebugIdIdentifier = "sentry-dbid-78d4041f-8a35-4a0f-b453-99b3bb813929")
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
  [895, 276], {
    99576: (e, o, a) => {
      var t = a(51664),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var t, r = {},
          s = null,
          i = null;
        for (t in void 0 !== a && (s = "" + a), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, t) && !l.hasOwnProperty(t) && (r[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === r[t] && (r[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: i,
          props: r,
          _owner: f.current
        }
      }
      o.Fragment = r, o.jsx = s, o.jsxs = s
    },
    95240: (e, o, a) => {
      e.exports = a(99576)
    },
    85276: (e, o, a) => {
      a.r(o), a.d(o, {
        default: () => d
      });
      var t = a(51664),
        n = a(98584),
        r = a(95240);
      const d = e => {
        let {
          basename: o,
          children: a,
          history: d
        } = e;
        const [f, l] = (0, t.useState)({
          action: d.action,
          location: d.location
        });
        return (0, t.useLayoutEffect)((() => d.listen(((e, o) => {
          l({
            location: e,
            action: o
          })
        }))), [d]), (0, r.jsx)(n.Router, {
          basename: o,
          location: f.location,
          navigationType: f.action,
          navigator: d,
          children: a
        })
      }
    }
  }
]);