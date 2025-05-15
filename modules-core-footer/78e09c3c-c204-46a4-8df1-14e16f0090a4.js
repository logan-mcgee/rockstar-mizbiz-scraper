! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "78e09c3c-c204-46a4-8df1-14e16f0090a4", e._sentryDebugIdIdentifier = "sentry-dbid-78e09c3c-c204-46a4-8df1-14e16f0090a4")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [656, 8275], {
    10219: (e, t, n) => {
      var o = n(71127);

      function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }

      function i() {}
      var a = {
          d: {
            f: i,
            r: function() {
              throw Error(r(522))
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i
          },
          p: 0,
          findDOMNode: null
        },
        s = Symbol.for("react.portal"),
        f = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

      function d(e, t) {
        return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
      }
      t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, t.createPortal = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(r(299));
        return function(e, t, n) {
          var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return {
            $$typeof: s,
            key: null == o ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: n
          }
        }(e, t, null, n)
      }, t.flushSync = function(e) {
        var t = f.T,
          n = a.p;
        try {
          if (f.T = null, a.p = 2, e) return e()
        } finally {
          f.T = t, a.p = n, a.d.f()
        }
      }, t.preconnect = function(e, t) {
        "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, a.d.C(e, t))
      }, t.prefetchDNS = function(e) {
        "string" == typeof e && a.d.D(e)
      }, t.preinit = function(e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
          var n = t.as,
            o = d(n, t.crossOrigin),
            r = "string" == typeof t.integrity ? t.integrity : void 0,
            i = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
          "style" === n ? a.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
            crossOrigin: o,
            integrity: r,
            fetchPriority: i
          }) : "script" === n && a.d.X(e, {
            crossOrigin: o,
            integrity: r,
            fetchPriority: i,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0
          })
        }
      }, t.preinitModule = function(e, t) {
        if ("string" == typeof e)
          if ("object" == typeof t && null !== t) {
            if (null == t.as || "script" === t.as) {
              var n = d(t.as, t.crossOrigin);
              a.d.M(e, {
                crossOrigin: n,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0
              })
            }
          } else null == t && a.d.M(e)
      }, t.preload = function(e, t) {
        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
          var n = t.as,
            o = d(n, t.crossOrigin);
          a.d.L(e, n, {
            crossOrigin: o,
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
            var n = d(t.as, t.crossOrigin);
            a.d.m(e, {
              as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0
            })
          } else a.d.m(e)
      }, t.requestFormReset = function(e) {
        a.d.r(e)
      }, t.unstable_batchedUpdates = function(e, t) {
        return e(t)
      }, t.useFormState = function(e, t, n) {
        return f.H.useFormState(e, t, n)
      }, t.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
      }, t.version = "19.1.0"
    },
    78275: (e, t, n) => {
      ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
          console.error(e)
        }
      }(), e.exports = n(10219)
    }
  }
]);