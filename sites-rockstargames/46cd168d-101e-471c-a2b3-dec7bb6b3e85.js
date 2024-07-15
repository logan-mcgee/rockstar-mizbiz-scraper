! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "46cd168d-101e-471c-a2b3-dec7bb6b3e85", e._sentryDebugIdIdentifier = "sentry-dbid-46cd168d-101e-471c-a2b3-dec7bb6b3e85")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2307, 5240, 2860], {
    31580: (e, t, r) => {
      var o = r(36056).Symbol;
      e.exports = o
    },
    95992: (e, t, r) => {
      var o = r(31580),
        n = r(78584),
        a = r(49176),
        s = o ? o.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? n(e) : a(e)
      }
    },
    81044: (e, t, r) => {
      var o = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = o
    },
    78584: (e, t, r) => {
      var o = r(31580),
        n = Object.prototype,
        a = n.hasOwnProperty,
        s = n.toString,
        l = o ? o.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, l),
          r = e[l];
        try {
          e[l] = void 0;
          var o = !0
        } catch (e) {}
        var n = s.call(e);
        return o && (t ? e[l] = r : delete e[l]), n
      }
    },
    49176: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    36056: (e, t, r) => {
      var o = r(81044),
        n = "object" == typeof self && self && self.Object === Object && self,
        a = o || n || Function("return this")();
      e.exports = a
    },
    89048: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    72316: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    77084: (e, t, r) => {
      var o = r(95992),
        n = r(72316);
      e.exports = function(e) {
        return "symbol" == typeof e || n(e) && "[object Symbol]" == o(e)
      }
    },
    99576: (e, t, r) => {
      "use strict";
      var o = r(51664),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var o, a = {},
          c = null,
          i = null;
        for (o in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, o) && !f.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: i,
          props: a,
          _owner: l.current
        }
      }
      t.Fragment = a, t.jsx = c, t.jsxs = c
    },
    95240: (e, t, r) => {
      "use strict";
      e.exports = r(99576)
    },
    89772: (e, t) => {
      var r;
      ! function() {
        "use strict";
        var o = {}.hasOwnProperty;

        function n() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            r && (e = s(e, a(r)))
          }
          return e
        }

        function a(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return n.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var t = "";
          for (var r in e) o.call(e, r) && e[r] && (t = s(t, r));
          return t
        }

        function s(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (n.default = n, e.exports = n) : void 0 === (r = function() {
          return n
        }.apply(t, [])) || (e.exports = r)
      }()
    }
  }
]);