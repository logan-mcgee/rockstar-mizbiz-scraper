/*! For license information please see 4a2a6cb7d9f023ef68b46bfc6f178f8e.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9f2bf95e-4169-42e7-807a-3f57d35df151", e._sentryDebugIdIdentifier = "sentry-dbid-9f2bf95e-4169-42e7-807a-3f57d35df151")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [776], {
    99576: (e, a, d) => {
      var o = d(51664),
        t = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, d) {
        var o, r = {},
          s = null,
          _ = null;
        for (o in void 0 !== d && (s = "" + d), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) n.call(a, o) && !l.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: _,
          props: r,
          _owner: f.current
        }
      }
      a.Fragment = r, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, d) => {
      e.exports = d(99576)
    },
    61880: (e, a, d) => {
      d.r(a), d.d(a, {
        default: () => o
      });
      const o = d(46188).c
    }
  }
]);
//# sourceMappingURL=4a2a6cb7d9f023ef68b46bfc6f178f8e.js.map