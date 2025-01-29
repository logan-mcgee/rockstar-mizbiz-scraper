! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "c3e542dd-629c-45ec-99f8-7f28b357a6f6", e._sentryDebugIdIdentifier = "sentry-dbid-c3e542dd-629c-45ec-99f8-7f28b357a6f6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [679], {
    5356: (e, o, r) => {
      var t = r(2229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, r) {
        var t, s = {},
          l = null,
          i = null;
        for (t in void 0 !== r && (l = "" + r), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, t) && !f.hasOwnProperty(t) && (s[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === s[t] && (s[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: s,
          _owner: a.current
        }
      }
      o.Fragment = s, o.jsx = l, o.jsxs = l
    },
    8096: (e, o, r) => {
      e.exports = r(5356)
    },
    5138: (e, o, r) => {
      r.d(o, {
        A: () => s,
        C: () => t
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: o
          } = window, r = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), t = n.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [t, n] = o;
            return n === r && (e = {
              site: t,
              subDomain: n
            }, !0)
          })) >= 0)), s = n[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    }
  }
]);