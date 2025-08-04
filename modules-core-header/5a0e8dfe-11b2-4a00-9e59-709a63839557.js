try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5a0e8dfe-11b2-4a00-9e59-709a63839557", e._sentryDebugIdIdentifier = "sentry-dbid-5a0e8dfe-11b2-4a00-9e59-709a63839557")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [954, 5716, 6681, 8573], {
    32779: (e, r, t) => {
      t.d(r, {
        A: () => a,
        C: () => n
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        o = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: r
          } = window, t = r.hostname.substring(0, r.hostname.indexOf(".rockstargames.com")), n = o.findIndex((r => Object.entries(r.sites).findIndex((r => {
            let [n, o] = r;
            return o === t && (e = {
              site: n,
              subDomain: o
            }, !0)
          })) >= 0)), a = o[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    70954: (e, r, t) => {
      e.exports = t(92834)
    },
    90562: e => {
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
        return !1 !== r.clone && r.isMergeableObject(e) ? i((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
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

      function s(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function i(e, t, u) {
        (u = u || {}).arrayMerge = u.arrayMerge || o, u.isMergeableObject = u.isMergeableObject || r, u.cloneUnlessOtherwiseSpecified = n;
        var c = Array.isArray(t);
        return c === Array.isArray(e) ? c ? u.arrayMerge(e, t, u) : function(e, r, t) {
          var o = {};
          return t.isMergeableObject(e) && a(e).forEach((function(r) {
            o[r] = n(e[r], t)
          })), a(r).forEach((function(a) {
            (function(e, r) {
              return s(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, a) || (s(e, a) && t.isMergeableObject(r[a]) ? o[a] = function(e, r) {
              if (!r.customMerge) return i;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : i
            }(a, t)(e[a], r[a], t) : o[a] = n(r[a], t))
          })), o
        }(e, t, u) : n(t, u)
      }
      i.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, t) {
          return i(e, t, r)
        }), {})
      };
      var u = i;
      e.exports = u
    },
    92834: (e, r, t) => {
      var n = t(71127),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, r, t) {
        var n, a = {},
          c = null,
          l = null;
        for (n in void 0 !== t && (c = "" + t), void 0 !== r.key && (c = "" + r.key), void 0 !== r.ref && (l = r.ref), r) s.call(r, n) && !u.hasOwnProperty(n) && (a[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === a[n] && (a[n] = r[n]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: l,
          props: a,
          _owner: i.current
        }
      }
      r.Fragment = a, r.jsx = c, r.jsxs = c
    }
  }
]);