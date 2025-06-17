! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "45d5423e-2e62-4af9-bb2f-2c6a2f5a7024", e._sentryDebugIdIdentifier = "sentry-dbid-45d5423e-2e62-4af9-bb2f-2c6a2f5a7024")
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
    25854: (e, o, t) => {
      e.exports = t(41454)
    },
    40148: (e, o, t) => {
      t.d(o, {
        A: () => s,
        C: () => a
      });
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        r = [{
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
        s = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), a = r.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [a, r] = o;
            return r === t && (e = {
              site: a,
              subDomain: r
            }, !0)
          })) >= 0)), s = r[a >= 0 ? a : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    41454: (e, o, t) => {
      var a = t(71127),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, t) {
        var a, s = {},
          f = null,
          i = null;
        for (a in void 0 !== t && (f = "" + t), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, a) && !l.hasOwnProperty(a) && (s[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === s[a] && (s[a] = o[a]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: s,
          _owner: d.current
        }
      }
      o.Fragment = s, o.jsx = f, o.jsxs = f
    }
  }
]);