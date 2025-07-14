try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4cd41c23-0552-4035-a99c-24dd51be9c06", e._sentryDebugIdIdentifier = "sentry-dbid-4cd41c23-0552-4035-a99c-24dd51be9c06")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8965], {
    25854: (e, r, t) => {
      e.exports = t(41454)
    },
    41454: (e, r, t) => {
      var n = t(71127),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, t) {
        var n, a = {},
          l = null,
          u = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (u = r.ref), r) f.call(r, n) && !d.hasOwnProperty(n) && (a[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === a[n] && (a[n] = r[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: u,
          props: a,
          _owner: c.current
        }
      }
      r.Fragment = a, r.jsx = l, r.jsxs = l
    },
    98398: e => {
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

      function c(e, t, d) {
        (d = d || {}).arrayMerge = d.arrayMerge || o, d.isMergeableObject = d.isMergeableObject || r, d.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(t);
        return l === Array.isArray(e) ? l ? d.arrayMerge(e, t, d) : function(e, r, t) {
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
        }(e, t, d) : n(t, d)
      }
      c.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, t) {
          return c(e, t, r)
        }), {})
      };
      var d = c;
      e.exports = d
    }
  }
]);