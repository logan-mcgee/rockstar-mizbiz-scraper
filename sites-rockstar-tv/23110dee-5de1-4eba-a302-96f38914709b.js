! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "23110dee-5de1-4eba-a302-96f38914709b", e._sentryDebugIdIdentifier = "sentry-dbid-23110dee-5de1-4eba-a302-96f38914709b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [8978], {
    2469: (e, t, o) => {
      var r = o(2229),
        s = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var r, l = {},
          i = null,
          f = null;
        for (r in void 0 !== o && (i = "" + o), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (f = t.ref), t) n.call(t, r) && !a.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
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
        A: () => n,
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
        n = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, s] = t;
            return s === o && (e = {
              site: r,
              subDomain: s
            }, !0)
          })) >= 0)), n = s[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    },
    1793: (e, t, o) => {
      o.d(t, {
        F: () => r
      });
      const r = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    }
  }
]);