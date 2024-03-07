/*! For license information please see 7f08243bbb56a4b462af913c696f0d56.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "63b0e43f-6702-49d5-8742-90f41798a451", e._sentryDebugIdIdentifier = "sentry-dbid-63b0e43f-6702-49d5-8742-90f41798a451")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [700], {
    996: (e, t, n) => {
      var a = n(200),
        o = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var a, i = {},
          f = null,
          l = null;
        for (a in void 0 !== n && (f = "" + n), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (l = t.ref), t) r.call(t, a) && !s.hasOwnProperty(a) && (i[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === i[a] && (i[a] = t[a]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: l,
          props: i,
          _owner: d.current
        }
      }
    },
    480: (e, t, n) => {
      e.exports = n(996)
    },
    700: (e, t, n) => {
      n.r(t), n.d(t, {
        TagManager: () => o(),
        init: () => l,
        track: () => r.c,
        withAutoRouteTracking: () => f
      });
      var a = n(204),
        o = n.n(a),
        r = n(226),
        d = n(200),
        s = n(557),
        i = n(480);
      const f = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, s.useLocation)();
          return (0, d.useEffect)((() => {
            (0, r.c)({
              event: "trackPageview"
            })
          }), [n]), (0, i.jsx)(e, {
            ...t
          })
        })(e, t),
        l = e => {
          let {
            id: t
          } = e;
          if (!t) return;
          const n = {
            gtmId: t
          };
          o().initialize(n)
        }
    },
    226: (e, t, n) => {
      n.d(t, {
        c: () => f
      });
      var a = n(204),
        o = n.n(a);
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
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [a, o] = t;
            return o === n && (e = {
              site: a,
              subDomain: o
            }, !0)
          })) >= 0));
          return {
            ...r[a >= 0 ? a : 0],
            currentSite: e
          }
        })(),
        s = d?.id,
        i = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        f = e => {
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
//# sourceMappingURL=7f08243bbb56a4b462af913c696f0d56.js.map