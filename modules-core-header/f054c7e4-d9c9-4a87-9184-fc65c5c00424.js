try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "f054c7e4-d9c9-4a87-9184-fc65c5c00424", e._sentryDebugIdIdentifier = "sentry-dbid-f054c7e4-d9c9-4a87-9184-fc65c5c00424")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2295, 2399, 4676, 7533, 7637], {
    42295: (e, r, t) => {
      e.exports = t(69245)
    },
    69245: (e, r, t) => {
      var n = t(71127),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, r, t) {
        var n, a = {},
          u = null,
          s = null;
        for (n in void 0 !== t && (u = "" + t), void 0 !== r.key && (u = "" + r.key), void 0 !== r.ref && (s = r.ref), r) f.call(r, n) && !l.hasOwnProperty(n) && (a[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === a[n] && (a[n] = r[n]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: s,
          props: a,
          _owner: c.current
        }
      }
      r.Fragment = a, r.jsx = u, r.jsxs = u
    },
    79465: e => {
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

      function o(e, r, t) {
        return e.concat(r).map((function(e) {
          return n(e, t)
        }))
      }

      function a(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(r) {
            return Object.propertyIsEnumerable.call(e, r)
          })) : []
        }(e))
      }

      function f(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function c(e, t, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || o, l.isMergeableObject = l.isMergeableObject || r, l.cloneUnlessOtherwiseSpecified = n;
        var u = Array.isArray(t);
        return u === Array.isArray(e) ? u ? l.arrayMerge(e, t, l) : function(e, r, t) {
          var o = {};
          return t.isMergeableObject(e) && a(e).forEach((function(r) {
            o[r] = n(e[r], t)
          })), a(r).forEach((function(a) {
            (function(e, r) {
              return f(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, a) || (f(e, a) && t.isMergeableObject(r[a]) ? o[a] = function(e, r) {
              if (!r.customMerge) return c;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : c
            }(a, t)(e[a], r[a], t) : o[a] = n(r[a], t))
          })), o
        }(e, t, l) : n(t, l)
      }
      c.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, t) {
          return c(e, t, r)
        }), {})
      };
      var l = c;
      e.exports = l
    }
  }
]);