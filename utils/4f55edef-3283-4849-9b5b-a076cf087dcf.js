! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4f55edef-3283-4849-9b5b-a076cf087dcf", e._sentryDebugIdIdentifier = "sentry-dbid-4f55edef-3283-4849-9b5b-a076cf087dcf")
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
  [551], {
    516: (e, t, n) => {
      var o = n(784),
        r = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var o, i = {},
          l = null,
          f = null;
        for (o in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (f = t.ref), t) a.call(t, o) && !s.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: f,
          props: i,
          _owner: d.current
        }
      }
    },
    632: (e, t, n) => {
      e.exports = n(516)
    },
    551: (e, t, n) => {
      n.r(t), n.d(t, {
        TagManager: () => r(),
        init: () => f,
        track: () => a.A,
        withAutoRouteTracking: () => l
      });
      var o = n(482),
        r = n.n(o),
        a = n(359),
        d = n(784),
        s = n(779),
        i = n(632);
      const l = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, s.useLocation)();
          return (0, d.useEffect)((() => {
            (0, a.A)({
              event: "trackPageview"
            })
          }), [n]), (0, i.jsx)(e, {
            ...t
          })
        })(e, t),
        f = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          r().initialize(n)
        }
    },
    359: (e, t, n) => {
      n.d(t, {
        A: () => l
      });
      var o = n(482),
        r = n.n(o);
      const a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        d = (() => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = a.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === n && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), r = a[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        })(),
        s = d?.id,
        i = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const t = {
            ...e,
            environment: s,
            display_type: i
          };
          r().dataLayer({
            dataLayer: t
          })
        }
    }
  }
]);