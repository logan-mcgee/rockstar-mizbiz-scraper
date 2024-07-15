! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0326d339-9aca-4c17-a8ae-5ea6397a6e6d", e._sentryDebugIdIdentifier = "sentry-dbid-0326d339-9aca-4c17-a8ae-5ea6397a6e6d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [442], {
    576: (e, t, a) => {
      var n = a(664),
        o = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, a) {
        var n, i = {},
          l = null,
          f = null;
        for (n in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (f = t.ref), t) r.call(t, n) && !d.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: f,
          props: i,
          _owner: s.current
        }
      }
    },
    240: (e, t, a) => {
      e.exports = a(576)
    },
    442: (e, t, a) => {
      a.r(t), a.d(t, {
        TagManager: () => o(),
        init: () => f,
        track: () => r.c,
        withAutoRouteTracking: () => l
      });
      var n = a(204),
        o = a.n(n),
        r = a(300),
        s = a(664),
        d = a(13),
        i = a(240);
      const l = e => t => ((e, t) => {
          const {
            pathname: a
          } = (0, d.useLocation)();
          return (0, s.useEffect)((() => {
            (0, r.c)({
              event: "trackPageview"
            })
          }), [a]), (0, i.jsx)(e, {
            ...t
          })
        })(e, t),
        f = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const a = {
            gtmId: t
          };
          o().initialize(a)
        }
    },
    300: (e, t, a) => {
      a.d(t, {
        c: () => l
      });
      var n = a(204),
        o = a.n(n);
      const r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        s = (() => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [n, o] = t;
            return o === a && (e = {
              site: n,
              subDomain: o
            }, !0)
          })) >= 0)), o = r[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        })(),
        d = s?.id,
        i = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const t = {
            ...e,
            environment: d,
            display_type: i
          };
          o().dataLayer({
            dataLayer: t
          })
        }
    }
  }
]);