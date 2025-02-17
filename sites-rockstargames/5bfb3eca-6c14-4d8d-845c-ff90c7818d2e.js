! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5bfb3eca-6c14-4d8d-845c-ff90c7818d2e", e._sentryDebugIdIdentifier = "sentry-dbid-5bfb3eca-6c14-4d8d-845c-ff90c7818d2e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6504, 1029, 4123], {
    65039: (e, a, t) => {
      var o = t(62229),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, t) {
        var o, r = {},
          f = null,
          c = null;
        for (o in void 0 !== t && (f = "" + t), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (c = a.ref), a) s.call(a, o) && !l.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: c,
          props: r,
          _owner: d.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    },
    91029: (e, a, t) => {
      e.exports = t(65039)
    },
    34123: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var o = t(62229),
        n = t(9623),
        r = t(91029);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [d, l] = (0, o.useState)({
          action: s.action,
          location: s.location
        });
        return (0, o.useLayoutEffect)((() => s.listen(((e, a) => {
          l({
            location: e,
            action: a
          })
        }))), [s]), (0, r.jsx)(n.Router, {
          basename: a,
          location: d.location,
          navigationType: d.action,
          navigator: s,
          children: t
        })
      }
    }
  }
]);