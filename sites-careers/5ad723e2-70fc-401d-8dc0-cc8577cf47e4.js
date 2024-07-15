! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5ad723e2-70fc-401d-8dc0-cc8577cf47e4", e._sentryDebugIdIdentifier = "sentry-dbid-5ad723e2-70fc-401d-8dc0-cc8577cf47e4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [776, 240], {
    99576: (e, r, a) => {
      var o = a(51664),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, a) {
        var o, d = {},
          l = null,
          c = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (c = r.ref), r) n.call(r, o) && !s.hasOwnProperty(o) && (d[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === d[o] && (d[o] = r[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: c,
          props: d,
          _owner: f.current
        }
      }
      r.Fragment = d, r.jsx = l, r.jsxs = l
    },
    95240: (e, r, a) => {
      e.exports = a(99576)
    },
    61880: (e, r, a) => {
      a.r(r), a.d(r, {
        default: () => o
      });
      const o = a(82078).c
    }
  }
]);