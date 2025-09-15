try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9fdf1bb9-5386-47b2-8c53-4bd9bb189dba", e._sentryDebugIdIdentifier = "sentry-dbid-9fdf1bb9-5386-47b2-8c53-4bd9bb189dba")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [910, 2295, 2399, 4676, 7533, 7637], {
    3860: (e, r, t) => {
      t.d(r, {
        A: () => n
      });
      var o = t(42295);
      const n = ({
        to: e,
        target: r,
        className: t,
        onNavigate: n,
        onClick: a,
        reloadDocument: s,
        children: c,
        ...i
      }) => {
        const l = e?.startsWith("http");
        return (0, o.jsx)("a", {
          href: e,
          className: t,
          onClick: r => {
            a?.(r), l || s || (n ? (r.preventDefault(), n(e)) : (r.preventDefault(), window.history.pushState({}, "", e)))
          },
          target: r,
          ...i,
          children: c
        })
      }
    },
    42295: (e, r, t) => {
      e.exports = t(69245)
    },
    69245: (e, r, t) => {
      var o = t(71127),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, t) {
        var o, a = {},
          l = null,
          u = null;
        for (o in void 0 !== t && (l = "" + t), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (u = r.ref), r) s.call(r, o) && !i.hasOwnProperty(o) && (a[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === a[o] && (a[o] = r[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: a,
          _owner: c.current
        }
      }
      r.Fragment = a, r.jsx = l, r.jsxs = l
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

      function o(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e) ? c((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
        var t
      }

      function n(e, r, t) {
        return e.concat(r).map((function(e) {
          return o(e, t)
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

      function c(e, t, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || n, i.isMergeableObject = i.isMergeableObject || r, i.cloneUnlessOtherwiseSpecified = o;
        var l = Array.isArray(t);
        return l === Array.isArray(e) ? l ? i.arrayMerge(e, t, i) : function(e, r, t) {
          var n = {};
          return t.isMergeableObject(e) && a(e).forEach((function(r) {
            n[r] = o(e[r], t)
          })), a(r).forEach((function(a) {
            (function(e, r) {
              return s(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, a) || (s(e, a) && t.isMergeableObject(r[a]) ? n[a] = function(e, r) {
              if (!r.customMerge) return c;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : c
            }(a, t)(e[a], r[a], t) : n[a] = o(r[a], t))
          })), n
        }(e, t, i) : o(t, i)
      }
      c.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, t) {
          return c(e, t, r)
        }), {})
      };
      var i = c;
      e.exports = i
    },
    79867: (e, r, t) => {
      t.d(r, {
        A: () => a,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: r
          } = window, t = r.hostname.substring(0, r.hostname.indexOf(".rockstargames.com")), o = n.findIndex((r => Object.entries(r.sites).findIndex((([r, o]) => o === t && (e = {
            site: r,
            subDomain: o
          }, !0))) >= 0)), a = n[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    }
  }
]);