! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "9d134df3-f0a4-4ed2-8f33-80bc4f4b5416", e._sentryDebugIdIdentifier = "sentry-dbid-9d134df3-f0a4-4ed2-8f33-80bc4f4b5416")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [240], {
    99576: (e, o, r) => {
      var d = r(51664),
        a = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        t = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, r) {
        var d, f = {},
          s = null,
          _ = null;
        for (d in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (_ = o.ref), o) n.call(o, d) && !l.hasOwnProperty(d) && (f[d] = o[d]);
        if (e && e.defaultProps)
          for (d in o = e.defaultProps) void 0 === f[d] && (f[d] = o[d]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: _,
          props: f,
          _owner: t.current
        }
      }
      o.Fragment = f, o.jsx = s, o.jsxs = s
    },
    95240: (e, o, r) => {
      e.exports = r(99576)
    }
  }
]);