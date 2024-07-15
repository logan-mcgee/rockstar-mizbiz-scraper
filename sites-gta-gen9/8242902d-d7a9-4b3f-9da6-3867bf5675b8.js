! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8242902d-d7a9-4b3f-9da6-3867bf5675b8", e._sentryDebugIdIdentifier = "sentry-dbid-8242902d-d7a9-4b3f-9da6-3867bf5675b8")
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
  [5240], {
    99576: (e, a, t) => {
      var n = t(51664),
        d = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var n, o = {},
          l = null,
          _ = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) r.call(a, n) && !s.hasOwnProperty(n) && (o[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === o[n] && (o[n] = a[n]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: _,
          props: o,
          _owner: f.current
        }
      }
      a.Fragment = o, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, t) => {
      e.exports = t(99576)
    }
  }
]);