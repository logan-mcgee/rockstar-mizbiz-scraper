! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "50baf06a-c581-4cb2-b4a7-56af348c971e", e._sentryDebugIdIdentifier = "sentry-dbid-50baf06a-c581-4cb2-b4a7-56af348c971e")
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
  [895, 240, 860, 276], {
    99576: (e, a, t) => {
      var o = t(51664),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, t) {
        var o, r = {},
          d = null,
          i = null;
        for (o in void 0 !== t && (d = "" + t), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (i = a.ref), a) s.call(a, o) && !l.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: i,
          props: r,
          _owner: f.current
        }
      }
      a.Fragment = r, a.jsx = d, a.jsxs = d
    },
    95240: (e, a, t) => {
      e.exports = t(99576)
    },
    85276: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var o = t(51664),
        n = t(98584),
        r = t(95240);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [f, l] = (0, o.useState)({
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
          location: f.location,
          navigationType: f.action,
          navigator: s,
          children: t
        })
      }
    }
  }
]);