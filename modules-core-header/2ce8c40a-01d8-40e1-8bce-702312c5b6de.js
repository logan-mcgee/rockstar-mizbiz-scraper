! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2ce8c40a-01d8-40e1-8bce-702312c5b6de", e._sentryDebugIdIdentifier = "sentry-dbid-2ce8c40a-01d8-40e1-8bce-702312c5b6de")
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
  [621, 2], {
    6516: (e, o, a) => {
      var t = a(1403),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, a) {
        var t, r = {},
          c = null,
          f = null;
        for (t in void 0 !== a && (c = "" + a), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (f = o.ref), o) d.call(o, t) && !s.hasOwnProperty(t) && (r[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === r[t] && (r[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: f,
          props: r,
          _owner: l.current
        }
      }
      o.Fragment = r, o.jsx = c, o.jsxs = c
    },
    6632: (e, o, a) => {
      e.exports = a(6516)
    },
    3002: (e, o, a) => {
      a.r(o), a.d(o, {
        default: () => d
      });
      var t = a(1403),
        n = a(4410),
        r = a(6632);
      const d = e => {
        let {
          basename: o,
          children: a,
          history: d
        } = e;
        const [l, s] = (0, t.useState)({
          action: d.action,
          location: d.location
        });
        return (0, t.useLayoutEffect)((() => d.listen(((e, o) => {
          s({
            location: e,
            action: o
          })
        }))), [d]), (0, r.jsx)(n.Router, {
          basename: o,
          location: l.location,
          navigationType: l.action,
          navigator: d,
          children: a
        })
      }
    }
  }
]);