/*! For license information please see 1f95c3cf0980f7a193493c77aa750395.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3ce126c3-8f95-4c4e-9b70-e197d13b5c08", e._sentryDebugIdIdentifier = "sentry-dbid-3ce126c3-8f95-4c4e-9b70-e197d13b5c08")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-sc-ugc-spotlight",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [240], {
    99576: (e, o, t) => {
      var a = t(51664),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, t) {
        var a, n = {},
          s = null,
          _ = null;
        for (a in void 0 !== t && (s = "" + t), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) d.call(o, a) && !f.hasOwnProperty(a) && (n[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === n[a] && (n[a] = o[a]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: _,
          props: n,
          _owner: l.current
        }
      }
      o.Fragment = n, o.jsx = s, o.jsxs = s
    },
    95240: (e, o, t) => {
      e.exports = t(99576)
    }
  }
]);
//# sourceMappingURL=1f95c3cf0980f7a193493c77aa750395.js.map