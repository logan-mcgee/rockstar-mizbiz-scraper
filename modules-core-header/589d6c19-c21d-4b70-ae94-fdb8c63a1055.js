! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "589d6c19-c21d-4b70-ae94-fdb8c63a1055", e._sentryDebugIdIdentifier = "sentry-dbid-589d6c19-c21d-4b70-ae94-fdb8c63a1055")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 2327, 3473, 5854], {
    25854: (e, a, o) => {
      e.exports = o(41454)
    },
    40148: (e, a, o) => {
      o.d(a, {
        A: () => d,
        C: () => t
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        d = () => {
          let e;
          const {
            location: a
          } = window, o = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = r.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [t, r] = a;
            return r === o && (e = {
              site: t,
              subDomain: r
            }, !0)
          })) >= 0)), d = r[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...d,
            currentSite: e
          }
        }
    },
    41454: (e, a, o) => {
      var t = o(71127),
        r = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, o) {
        var t, d = {},
          i = null,
          f = null;
        for (t in void 0 !== o && (i = "" + o), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) n.call(a, t) && !l.hasOwnProperty(t) && (d[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === d[t] && (d[t] = a[t]);
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: f,
          props: d,
          _owner: s.current
        }
      }
      a.Fragment = d, a.jsx = i, a.jsxs = i
    }
  }
]);