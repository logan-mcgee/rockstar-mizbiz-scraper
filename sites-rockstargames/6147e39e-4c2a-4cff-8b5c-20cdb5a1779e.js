! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6147e39e-4c2a-4cff-8b5c-20cdb5a1779e", e._sentryDebugIdIdentifier = "sentry-dbid-6147e39e-4c2a-4cff-8b5c-20cdb5a1779e")
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
  [3855], {
    32469: (e, a, r) => {
      var o = r(62229),
        t = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, r) {
        var o, f = {},
          l = null,
          _ = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) n.call(a, o) && !d.hasOwnProperty(o) && (f[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === f[o] && (f[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: _,
          props: f,
          _owner: s.current
        }
      }
      a.Fragment = f, a.jsx = l, a.jsxs = l
    },
    73855: (e, a, r) => {
      e.exports = r(32469)
    }
  }
]);