! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "791b3e12-b35b-4a6d-9500-3b957d8e1b1f", e._sentryDebugIdIdentifier = "sentry-dbid-791b3e12-b35b-4a6d-9500-3b957d8e1b1f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [3820], {
    2469: (e, t, o) => {
      var r = o(2229),
        s = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, o) {
        var r, a = {},
          i = null,
          f = null;
        for (r in void 0 !== o && (i = "" + o), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (f = t.ref), t) n.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: f,
          props: a,
          _owner: d.current
        }
      }
      t.Fragment = a, t.jsx = i, t.jsxs = i
    },
    3855: (e, t, o) => {
      e.exports = o(2469)
    },
    62: (e, t, o) => {
      o.d(t, {
        A: () => a,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, s] = t;
            return s === o && (e = {
              site: r,
              subDomain: s
            }, !0)
          })) >= 0)), a = s[r >= 0 ? r : 0];
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