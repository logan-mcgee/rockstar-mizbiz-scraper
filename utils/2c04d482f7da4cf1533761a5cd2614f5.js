! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8b8b3483-d335-446f-ad62-64dc2a3057bc", e._sentryDebugIdIdentifier = "sentry-dbid-8b8b3483-d335-446f-ad62-64dc2a3057bc")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [652], {
    652: e => {
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
        return !1 !== r.clone && r.isMergeableObject(e) ? u((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
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

      function u(e, t, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || a, l.isMergeableObject = l.isMergeableObject || r, l.cloneUnlessOtherwiseSpecified = n;
        var f = Array.isArray(t);
        return f === Array.isArray(e) ? f ? l.arrayMerge(e, t, l) : function(e, r, t) {
          var a = {};
          return t.isMergeableObject(e) && o(e).forEach((function(r) {
            a[r] = n(e[r], t)
          })), o(r).forEach((function(o) {
            (function(e, r) {
              return c(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, o) || (c(e, o) && t.isMergeableObject(r[o]) ? a[o] = function(e, r) {
              if (!r.customMerge) return u;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : u
            }(o, t)(e[o], r[o], t) : a[o] = n(r[o], t))
          })), a
        }(e, t, l) : n(t, l)
      }
      u.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, t) {
          return u(e, t, r)
        }), {})
      };
      var l = u;
      e.exports = l
    }
  }
]);
//# sourceMappingURL=2c04d482f7da4cf1533761a5cd2614f5.js.map