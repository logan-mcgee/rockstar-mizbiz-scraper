try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "06ba70b6-52d0-446b-a58a-48d680ed6bac", e._sentryDebugIdIdentifier = "sentry-dbid-06ba70b6-52d0-446b-a58a-48d680ed6bac")
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
        return !1 !== r.clone && r.isMergeableObject(e) ? c((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
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

      function s(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function c(e, t, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || a, i.isMergeableObject = i.isMergeableObject || r, i.cloneUnlessOtherwiseSpecified = n;
        var u = Array.isArray(t);
        return u === Array.isArray(e) ? u ? i.arrayMerge(e, t, i) : function(e, r, t) {
          var a = {};
          return t.isMergeableObject(e) && o(e).forEach(function(r) {
            a[r] = n(e[r], t)
          }), o(r).forEach(function(o) {
            (function(e, r) {
              return s(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, o) || (s(e, o) && t.isMergeableObject(r[o]) ? a[o] = function(e, r) {
              if (!r.customMerge) return c;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : c
            }(o, t)(e[o], r[o], t) : a[o] = n(r[o], t))
          }), a
        }(e, t, i) : n(t, i)
      }
      c.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, t) {
          return c(e, t, r)
        }, {})
      };
      var i = c;
      e.exports = i
    }
  }
]);