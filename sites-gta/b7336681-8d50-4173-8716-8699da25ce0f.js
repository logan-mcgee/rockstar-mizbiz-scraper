! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b7336681-8d50-4173-8716-8699da25ce0f", e._sentryDebugIdIdentifier = "sentry-dbid-b7336681-8d50-4173-8716-8699da25ce0f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [895, 276], {
    99576: (e, t, a) => {
      var o = a(51664),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, a) {
        var o, r = {},
          f = null,
          i = null;
        for (o in void 0 !== a && (f = "" + a), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (i = t.ref), t) d.call(t, o) && !l.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === r[o] && (r[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: s.current
        }
      }
      t.Fragment = r, t.jsx = f, t.jsxs = f
    },
    95240: (e, t, a) => {
      e.exports = a(99576)
    },
    85276: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => d
      });
      var o = a(51664),
        n = a(98584),
        r = a(95240);
      const d = e => {
        let {
          basename: t,
          children: a,
          history: d
        } = e;
        const [s, l] = (0, o.useState)({
          action: d.action,
          location: d.location
        });
        return (0, o.useLayoutEffect)((() => d.listen(((e, t) => {
          l({
            location: e,
            action: t
          })
        }))), [d]), (0, r.jsx)(n.Router, {
          basename: t,
          location: s.location,
          navigationType: s.action,
          navigator: d,
          children: a
        })
      }
    }
  }
]);