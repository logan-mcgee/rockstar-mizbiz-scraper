! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1ad1efe6-ed86-4058-99f9-40ed8e3f4210", e._sentryDebugIdIdentifier = "sentry-dbid-1ad1efe6-ed86-4058-99f9-40ed8e3f4210")
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
    6516: (e, d, r) => {
      var a = r(1403),
        o = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, r) {
        var a, t = {},
          l = null,
          _ = null;
        for (a in void 0 !== r && (l = "" + r), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (_ = d.ref), d) n.call(d, a) && !s.hasOwnProperty(a) && (t[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === t[a] && (t[a] = d[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: _,
          props: t,
          _owner: f.current
        }
      }
      d.Fragment = t, d.jsx = l, d.jsxs = l
    },
    6632: (e, d, r) => {
      e.exports = r(6516)
    },
    8179: (e, d, r) => {
      r.r(d), r.d(d, {
        default: () => a
      });
      const a = r(2871).A
    }
  }
]);