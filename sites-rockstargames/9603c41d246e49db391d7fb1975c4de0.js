/*! For license information please see 9603c41d246e49db391d7fb1975c4de0.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "582208de-e711-4b75-a001-5a41d311897c", e._sentryDebugIdIdentifier = "sentry-dbid-582208de-e711-4b75-a001-5a41d311897c")
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
  [860, 240], {
    99576: (e, a, r) => {
      var o = r(51664),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, r) {
        var o, n = {},
          l = null,
          _ = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) s.call(a, o) && !f.hasOwnProperty(o) && (n[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === n[o] && (n[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: _,
          props: n,
          _owner: d.current
        }
      }
      a.Fragment = n, a.jsx = l, a.jsxs = l
    },
    95240: (e, a, r) => {
      e.exports = r(99576)
    }
  }
]);
//# sourceMappingURL=9603c41d246e49db391d7fb1975c4de0.js.map