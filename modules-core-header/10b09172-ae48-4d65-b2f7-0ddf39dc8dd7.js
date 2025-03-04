! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "10b09172-ae48-4d65-b2f7-0ddf39dc8dd7", e._sentryDebugIdIdentifier = "sentry-dbid-10b09172-ae48-4d65-b2f7-0ddf39dc8dd7")
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
  [3692, 1029, 3410, 5791, 8172], {
    65039: (e, o, r) => {
      var t = r(62229),
        d = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, r) {
        var t, n = {},
          f = null,
          i = null;
        for (t in void 0 !== r && (f = "" + r), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) s.call(o, t) && !l.hasOwnProperty(t) && (n[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === n[t] && (n[t] = o[t]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: a.current
        }
      }
      o.Fragment = n, o.jsx = f, o.jsxs = f
    },
    91029: (e, o, r) => {
      e.exports = r(65039)
    },
    6400: (e, o, r) => {
      r.d(o, {
        A: () => n,
        C: () => t
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        d = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: o
          } = window, r = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), t = d.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [t, d] = o;
            return d === r && (e = {
              site: t,
              subDomain: d
            }, !0)
          })) >= 0)), n = d[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    }
  }
]);