! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "098bfec1-6fd2-469b-aee2-7a118a44bb70", e._sentryDebugIdIdentifier = "sentry-dbid-098bfec1-6fd2-469b-aee2-7a118a44bb70")
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
  [5240, 2860], {
    99576: (e, a, r) => {
      var o = r(51664),
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

      function l(e, a, r) {
        var o, d = {},
          l = null,
          b = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (b = a.ref), a) n.call(a, o) && !f.hasOwnProperty(o) && (d[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === d[o] && (d[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: b,
          props: d,
          _owner: s.current
        }
      }
      a.Fragment = d, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, r) => {
      e.exports = r(99576)
    }
  }
]);