! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "577b6afa-b8a1-46ff-9968-33bea8858877", e._sentryDebugIdIdentifier = "sentry-dbid-577b6afa-b8a1-46ff-9968-33bea8858877")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8096], {
    45356: (e, a, t) => {
      var f = t(62229),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        d = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var f, o = {},
          l = null,
          _ = null;
        for (f in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) r.call(a, f) && !s.hasOwnProperty(f) && (o[f] = a[f]);
        if (e && e.defaultProps)
          for (f in a = e.defaultProps) void 0 === o[f] && (o[f] = a[f]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: _,
          props: o,
          _owner: d.current
        }
      }
      a.Fragment = o, a.jsx = l, a.jsxs = l
    },
    98096: (e, a, t) => {
      e.exports = t(45356)
    }
  }
]);