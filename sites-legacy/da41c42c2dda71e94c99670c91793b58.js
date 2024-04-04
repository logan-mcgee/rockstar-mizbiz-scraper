/*! For license information please see da41c42c2dda71e94c99670c91793b58.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9f2bf95e-4169-42e7-807a-3f57d35df151", e._sentryDebugIdIdentifier = "sentry-dbid-9f2bf95e-4169-42e7-807a-3f57d35df151")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [776], {
    99576: (e, a, o) => {
      var t = o(51664),
        f = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, o) {
        var t, r = {},
          s = null,
          _ = null;
        for (t in void 0 !== o && (s = "" + o), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (_ = a.ref), a) n.call(a, t) && !l.hasOwnProperty(t) && (r[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === r[t] && (r[t] = a[t]);
        return {
          $$typeof: f,
          type: e,
          key: s,
          ref: _,
          props: r,
          _owner: d.current
        }
      }
      a.Fragment = r, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, o) => {
      e.exports = o(99576)
    },
    61880: (e, a, o) => {
      o.r(a), o.d(a, {
        default: () => t
      });
      const t = o(46188).c
    }
  }
]);
//# sourceMappingURL=da41c42c2dda71e94c99670c91793b58.js.map