/*! For license information please see 3018831f5812a7ad6dfffdd69bbbf363.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a6016253-8e37-4b93-91b4-178d92b5149f", e._sentryDebugIdIdentifier = "sentry-dbid-a6016253-8e37-4b93-91b4-178d92b5149f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [240, 860], {
    99576: (e, a, r) => {
      var o = r(51664),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, r) {
        var o, d = {},
          f = null,
          _ = null;
        for (o in void 0 !== r && (f = "" + r), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) n.call(a, o) && !l.hasOwnProperty(o) && (d[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === d[o] && (d[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: _,
          props: d,
          _owner: s.current
        }
      }
      a.Fragment = d, a.jsx = f, a.jsxs = f
    },
    95240: (e, a, r) => {
      e.exports = r(99576)
    }
  }
]);
//# sourceMappingURL=3018831f5812a7ad6dfffdd69bbbf363.js.map