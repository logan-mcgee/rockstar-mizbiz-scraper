! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "1ad1efe6-ed86-4058-99f9-40ed8e3f4210", e._sentryDebugIdIdentifier = "sentry-dbid-1ad1efe6-ed86-4058-99f9-40ed8e3f4210")
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
  [942], {
    6516: (e, r, a) => {
      var o = a(1403),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, a) {
        var o, d = {},
          l = null,
          _ = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) n.call(r, o) && !f.hasOwnProperty(o) && (d[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === d[o] && (d[o] = r[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: _,
          props: d,
          _owner: s.current
        }
      }
      r.Fragment = d, r.jsx = l, r.jsxs = l
    },
    6632: (e, r, a) => {
      e.exports = a(6516)
    },
    8179: (e, r, a) => {
      a.r(r), a.d(r, {
        default: () => o
      });
      const o = a(2871).A
    }
  }
]);