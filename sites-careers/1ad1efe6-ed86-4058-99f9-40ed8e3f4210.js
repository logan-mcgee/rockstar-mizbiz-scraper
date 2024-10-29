! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      f = (new Error).stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "1ad1efe6-ed86-4058-99f9-40ed8e3f4210", e._sentryDebugIdIdentifier = "sentry-dbid-1ad1efe6-ed86-4058-99f9-40ed8e3f4210")
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
    6516: (e, f, r) => {
      var a = r(1403),
        d = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, f, r) {
        var a, o = {},
          l = null,
          _ = null;
        for (a in void 0 !== r && (l = "" + r), void 0 !== f.key && (l = "" + f.key), void 0 !== f.ref && (_ = f.ref), f) t.call(f, a) && !s.hasOwnProperty(a) && (o[a] = f[a]);
        if (e && e.defaultProps)
          for (a in f = e.defaultProps) void 0 === o[a] && (o[a] = f[a]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: _,
          props: o,
          _owner: n.current
        }
      }
      f.Fragment = o, f.jsx = l, f.jsxs = l
    },
    6632: (e, f, r) => {
      e.exports = r(6516)
    },
    8179: (e, f, r) => {
      r.r(f), r.d(f, {
        default: () => a
      });
      const a = r(2871).A
    }
  }
]);