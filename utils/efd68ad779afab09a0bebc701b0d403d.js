! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "c1b40e79-ea95-4371-8de6-544814b6c66f", e._sentryDebugIdIdentifier = "sentry-dbid-c1b40e79-ea95-4371-8de6-544814b6c66f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [632], {
    632: e => {
      var r = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var r = Object.prototype.toString.call(e);
            return "[object RegExp]" === r || "[object Date]" === r || function(e) {
              return e.$$typeof === t
            }(e)
          }(e)
        },
        t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e) ? f((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
        var t
      }

      function a(e, r, t) {
        return e.concat(r).map((function(e) {
          return n(e, t)
        }))
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(r) {
            return Object.propertyIsEnumerable.call(e, r)
          })) : []
        }(e))
      }

      function c(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function f(e, t, u) {
        (u = u || {}).arrayMerge = u.arrayMerge || a, u.isMergeableObject = u.isMergeableObject || r, u.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(t);
        return l === Array.isArray(e) ? l ? u.arrayMerge(e, t, u) : function(e, r, t) {
          var a = {};
          return t.isMergeableObject(e) && o(e).forEach((function(r) {
            a[r] = n(e[r], t)
          })), o(r).forEach((function(o) {
            (function(e, r) {
              return c(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, o) || (c(e, o) && t.isMergeableObject(r[o]) ? a[o] = function(e, r) {
              if (!r.customMerge) return f;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : f
            }(o, t)(e[o], r[o], t) : a[o] = n(r[o], t))
          })), a
        }(e, t, u) : n(t, u)
      }
      f.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, t) {
          return f(e, t, r)
        }), {})
      };
      var u = f;
      e.exports = u
    }
  }
]);