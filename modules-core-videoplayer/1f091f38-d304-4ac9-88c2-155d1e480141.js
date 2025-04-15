! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "1f091f38-d304-4ac9-88c2-155d1e480141", e._sentryDebugIdIdentifier = "sentry-dbid-1f091f38-d304-4ac9-88c2-155d1e480141")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [3855], {
    32469: (e, o, r) => {
      var d = r(62229),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, r) {
        var d, n = {},
          s = null,
          _ = null;
        for (d in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) t.call(o, d) && !f.hasOwnProperty(d) && (n[d] = o[d]);
        if (e && e.defaultProps)
          for (d in o = e.defaultProps) void 0 === n[d] && (n[d] = o[d]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: _,
          props: n,
          _owner: l.current
        }
      }
      o.Fragment = n, o.jsx = s, o.jsxs = s
    },
    73855: (e, o, r) => {
      e.exports = r(32469)
    }
  }
]);