/*! For license information please see 28669360088ddf3b67b2ebf60c1e9dd7.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a6016253-8e37-4b93-91b4-178d92b5149f", e._sentryDebugIdIdentifier = "sentry-dbid-a6016253-8e37-4b93-91b4-178d92b5149f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [240, 860], {
    99576: (e, a, r) => {
      var o = r(51664),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, r) {
        var o, n = {},
          l = null,
          b = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (b = a.ref), a) s.call(a, o) && !d.hasOwnProperty(o) && (n[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: b,
          props: n,
          _owner: f.current
        }
      }
      a.Fragment = n, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, r) => {
      e.exports = r(99576)
    }
  }
]);
//# sourceMappingURL=28669360088ddf3b67b2ebf60c1e9dd7.js.map