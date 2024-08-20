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
    6516: (e, r, d) => {
      var a = d(1403),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, d) {
        var a, t = {},
          l = null,
          _ = null;
        for (a in void 0 !== d && (l = "" + d), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (_ = r.ref), r) f.call(r, a) && !s.hasOwnProperty(a) && (t[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === t[a] && (t[a] = r[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: _,
          props: t,
          _owner: n.current
        }
      }
      r.Fragment = t, r.jsx = l, r.jsxs = l
    },
    6632: (e, r, d) => {
      e.exports = d(6516)
    },
    8179: (e, r, d) => {
      d.r(r), d.d(r, {
        default: () => a
      });
      const a = d(2871).A
    }
  }
]);