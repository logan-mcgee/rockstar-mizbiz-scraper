/*! For license information please see b50a5265d304d095cb17509b22a865be.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3ce126c3-8f95-4c4e-9b70-e197d13b5c08", e._sentryDebugIdIdentifier = "sentry-dbid-3ce126c3-8f95-4c4e-9b70-e197d13b5c08")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-sc-ugc-spotlight",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [240], {
    99576: (e, o, d) => {
      var a = d(51664),
        t = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, d) {
        var a, r = {},
          f = null,
          _ = null;
        for (a in void 0 !== d && (f = "" + d), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) n.call(o, a) && !s.hasOwnProperty(a) && (r[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === r[a] && (r[a] = o[a]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: _,
          props: r,
          _owner: l.current
        }
      }
      o.Fragment = r, o.jsx = f, o.jsxs = f
    },
    95240: (e, o, d) => {
      e.exports = d(99576)
    }
  }
]);
//# sourceMappingURL=b50a5265d304d095cb17509b22a865be.js.map