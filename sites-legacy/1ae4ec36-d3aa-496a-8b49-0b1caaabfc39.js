! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1ae4ec36-d3aa-496a-8b49-0b1caaabfc39", e._sentryDebugIdIdentifier = "sentry-dbid-1ae4ec36-d3aa-496a-8b49-0b1caaabfc39")
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
  [937, 579], {
    26516: (e, t, r) => {
      "use strict";
      var n = r(71403),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var n, o = {},
          l = null,
          i = null;
        for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, n) && !d.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: i,
          props: o,
          _owner: f.current
        }
      }
      t.Fragment = o, t.jsx = l, t.jsxs = l
    },
    46632: (e, t, r) => {
      "use strict";
      e.exports = r(26516)
    },
    28179: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => n
      });
      const n = r(92710).A
    },
    72862: (e, t) => {
      var r;
      ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function a() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            r && (e = s(e, o(r)))
          }
          return e
        }

        function o(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return a.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var t = "";
          for (var r in e) n.call(e, r) && e[r] && (t = s(t, r));
          return t
        }

        function s(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (a.default = a, e.exports = a) : void 0 === (r = function() {
          return a
        }.apply(t, [])) || (e.exports = r)
      }()
    }
  }
]);