try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "41497a10-b5f5-48dd-a709-b057c6dbd30b", e._sentryDebugIdIdentifier = "sentry-dbid-41497a10-b5f5-48dd-a709-b057c6dbd30b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3421, 5802], {
    6025: (e, t, n) => {
      var i = n(62229);

      function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }

      function o() {}
      var s = {
          d: {
            f: o,
            r: function() {
              throw Error(r(522))
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o
          },
          p: 0,
          findDOMNode: null
        },
        d = Symbol.for("react.portal"),
        f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

      function a(e, t) {
        return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
      }
      t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, t.createPortal = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(r(299));
        return function(e, t, n) {
          var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: d,
            key: null == i ? null : "" + i,
            children: e,
            containerInfo: t,
            implementation: n
          }
        }(e, t, null, n)
      }, t.flushSync = function(e) {
        var t = f.T,
          n = s.p;
        try {
          if (f.T = null, s.p = 2, e) return e()
        } finally {
          f.T = t, s.p = n, s.d.f()
        }
      }, t.preconnect = function(e, t) {
        "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, s.d.C(e, t))
      }, t.prefetchDNS = function(e) {
        "string" == typeof e && s.d.D(e)
      }, t.preinit = function(e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
          var n = t.as,
            i = a(n, t.crossOrigin),
            r = "string" == typeof t.integrity ? t.integrity : void 0,
            o = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
          "style" === n ? s.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
            crossOrigin: i,
            integrity: r,
            fetchPriority: o
          }) : "script" === n && s.d.X(e, {
            crossOrigin: i,
            integrity: r,
            fetchPriority: o,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0
          })
        }
      }, t.preinitModule = function(e, t) {
        if ("string" == typeof e)
          if ("object" == typeof t && null !== t) {
            if (null == t.as || "script" === t.as) {
              var n = a(t.as, t.crossOrigin);
              s.d.M(e, {
                crossOrigin: n,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0
              })
            }
          } else null == t && s.d.M(e)
      }, t.preload = function(e, t) {
        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
          var n = t.as,
            i = a(n, t.crossOrigin);
          s.d.L(e, n, {
            crossOrigin: i,
            integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0,
            type: "string" == typeof t.type ? t.type : void 0,
            fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
            referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
            imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
            imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
            media: "string" == typeof t.media ? t.media : void 0
          })
        }
      }, t.preloadModule = function(e, t) {
        if ("string" == typeof e)
          if (t) {
            var n = a(t.as, t.crossOrigin);
            s.d.m(e, {
              as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0
            })
          } else s.d.m(e)
      }, t.requestFormReset = function(e) {
        s.d.r(e)
      }, t.unstable_batchedUpdates = function(e, t) {
        return e(t)
      }, t.useFormState = function(e, t, n) {
        return f.H.useFormState(e, t, n)
      }, t.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
      }, t.version = "19.1.0"
    },
    83421: (e, t, n) => {
      ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
          console.error(e)
        }
      }(), e.exports = n(6025)
    }
  }
]);