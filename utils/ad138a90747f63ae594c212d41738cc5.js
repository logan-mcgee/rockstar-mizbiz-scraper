/*! For license information please see ad138a90747f63ae594c212d41738cc5.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fbfad1f7-1764-4138-926a-6b89da06855a", e._sentryDebugIdIdentifier = "sentry-dbid-fbfad1f7-1764-4138-926a-6b89da06855a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [442], {
    576: (e, t, a) => {
      var n = a(664),
        o = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, a) {
        var n, i = {},
          l = null,
          f = null;
        for (n in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (f = t.ref), t) r.call(t, n) && !s.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: f,
          props: i,
          _owner: d.current
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
        d = a(664),
        s = a(13),
        i = a(240);
      const l = e => t => ((e, t) => {
          const {
            pathname: a
          } = (0, s.useLocation)();
          return (0, d.useEffect)((() => {
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
        d = (() => {
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
        s = d?.id,
        i = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        l = e => {
          const t = {
            ...e,
            environment: s,
            display_type: i
          };
          o().dataLayer({
            dataLayer: t
          })
        }
    }
  }
]);
//# sourceMappingURL=ad138a90747f63ae594c212d41738cc5.js.map