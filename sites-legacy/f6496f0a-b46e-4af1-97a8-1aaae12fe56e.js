! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "f6496f0a-b46e-4af1-97a8-1aaae12fe56e", e._sentryDebugIdIdentifier = "sentry-dbid-f6496f0a-b46e-4af1-97a8-1aaae12fe56e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [579], {
    26516: (e, r, t) => {
      "use strict";
      var n = t(71403),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, r, t) {
        var n, o = {},
          d = null,
          i = null;
        for (n in void 0 !== t && (d = "" + t), void 0 !== r.key && (d = "" + r.key), void 0 !== r.ref && (i = r.ref), r) f.call(r, n) && !l.hasOwnProperty(n) && (o[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === o[n] && (o[n] = r[n]);
        return {
          $$typeof: a,
          type: e,
          key: d,
          ref: i,
          props: o,
          _owner: s.current
        }
      }
      r.Fragment = o, r.jsx = d, r.jsxs = d
    },
    46632: (e, r, t) => {
      "use strict";
      e.exports = t(26516)
    },
    72862: (e, r) => {
      var t;
      ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function a() {
          for (var e = "", r = 0; r < arguments.length; r++) {
            var t = arguments[r];
            t && (e = f(e, o(t)))
          }
          return e
        }

        function o(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return a.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var r = "";
          for (var t in e) n.call(e, t) && e[t] && (r = f(r, t));
          return r
        }

        function f(e, r) {
          return r ? e ? e + " " + r : e + r : e
        }
        e.exports ? (a.default = a, e.exports = a) : void 0 === (t = function() {
          return a
        }.apply(r, [])) || (e.exports = t)
      }()
    }
  }
]);