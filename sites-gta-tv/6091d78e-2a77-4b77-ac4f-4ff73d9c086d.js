! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6091d78e-2a77-4b77-ac4f-4ff73d9c086d", e._sentryDebugIdIdentifier = "sentry-dbid-6091d78e-2a77-4b77-ac4f-4ff73d9c086d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [8978], {
    2469: (e, t, o) => {
      var n = o(2229),
        s = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var n, l = {},
          i = null,
          f = null;
        for (n in void 0 !== o && (i = "" + o), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (f = t.ref), t) r.call(t, n) && !a.hasOwnProperty(n) && (l[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === l[n] && (l[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: f,
          props: l,
          _owner: d.current
        }
      }
      t.jsx = l, t.jsxs = l
    },
    3855: (e, t, o) => {
      e.exports = o(2469)
    },
    62: (e, t, o) => {
      o.d(t, {
        A: () => r,
        C: () => n
      });
      const n = {
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
        r = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [n, s] = t;
            return s === o && (e = {
              site: n,
              subDomain: s
            }, !0)
          })) >= 0)), r = s[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    1793: (e, t, o) => {
      o.d(t, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    }
  }
]);