! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3ce126c3-8f95-4c4e-9b70-e197d13b5c08", e._sentryDebugIdIdentifier = "sentry-dbid-3ce126c3-8f95-4c4e-9b70-e197d13b5c08")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-sc-ugc-spotlight",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [240], {
    99576: (e, o, a) => {
      var t = a(51664),
        d = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var t, r = {},
          s = null,
          c = null;
        for (t in void 0 !== a && (s = "" + a), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (c = o.ref), o) n.call(o, t) && !l.hasOwnProperty(t) && (r[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === r[t] && (r[t] = o[t]);
        return {
          $$typeof: d,
          type: e,
          key: s,
          ref: c,
          props: r,
          _owner: f.current
        }
      }
      o.Fragment = r, o.jsx = s, o.jsxs = s
    },
    95240: (e, o, a) => {
      e.exports = a(99576)
    }
  }
]);