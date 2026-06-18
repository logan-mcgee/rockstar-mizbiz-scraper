try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "ff91d4b0-86f1-49bf-8557-aaece6946c37", e._sentryDebugIdIdentifier = "sentry-dbid-ff91d4b0-86f1-49bf-8557-aaece6946c37")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6597], {
    76597(e) {
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
        return !1 !== r.clone && r.isMergeableObject(e) ? s((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
        var t
      }

      function a(e, r, t) {
        return e.concat(r).map(function(e) {
          return n(e, t)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(r) {
            return Object.propertyIsEnumerable.call(e, r)
          }) : []
        }(e))
      }

      function f(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function s(e, t, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || a, c.isMergeableObject = c.isMergeableObject || r, c.cloneUnlessOtherwiseSpecified = n;
        var i = Array.isArray(t);
        return i === Array.isArray(e) ? i ? c.arrayMerge(e, t, c) : function(e, r, t) {
          var a = {};
          return t.isMergeableObject(e) && o(e).forEach(function(r) {
            a[r] = n(e[r], t)
          }), o(r).forEach(function(o) {
            (function(e, r) {
              return f(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, o) || (f(e, o) && t.isMergeableObject(r[o]) ? a[o] = function(e, r) {
              if (!r.customMerge) return s;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : s
            }(o, t)(e[o], r[o], t) : a[o] = n(r[o], t))
          }), a
        }(e, t, c) : n(t, c)
      }
      s.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, t) {
          return s(e, t, r)
        }, {})
      };
      var c = s;
      e.exports = c
    }
  }
]);