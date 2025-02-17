! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "fb377bec-3c5d-49e7-bdfb-ca380176b8b4", e._sentryDebugIdIdentifier = "sentry-dbid-fb377bec-3c5d-49e7-bdfb-ca380176b8b4")
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
  [3692], {
    65039: (e, o, r) => {
      var t = r(62229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, r) {
        var t, s = {},
          f = null,
          c = null;
        for (t in void 0 !== r && (f = "" + r), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (c = o.ref), o) a.call(o, t) && !l.hasOwnProperty(t) && (s[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === s[t] && (s[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: c,
          props: s,
          _owner: d.current
        }
      }
      o.Fragment = s, o.jsx = f, o.jsxs = f
    },
    91029: (e, o, r) => {
      e.exports = r(65039)
    },
    6400: (e, o, r) => {
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