/*! For license information please see 0b1c92ec4cfe8eeb816aecd3d4787b5f.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2cc4ded2-d43a-4711-9427-76793b340641", e._sentryDebugIdIdentifier = "sentry-dbid-2cc4ded2-d43a-4711-9427-76793b340641")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [700], {
    996: (e, t, n) => {
      var o = n(200),
        a = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var o, i = {},
          l = null,
          f = null;
        for (o in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (f = t.ref), t) r.call(t, o) && !d.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: f,
          props: i,
          _owner: s.current
        }
      }
    },
    480: (e, t, n) => {
      e.exports = n(996)
    },
    700: (e, t, n) => {
      n.r(t), n.d(t, {
        TagManager: () => a(),
        init: () => f,
        track: () => r.c,
        withAutoRouteTracking: () => l
      });
      var o = n(204),
        a = n.n(o),
        r = n(226),
        s = n(200),
        d = n(557),
        i = n(480);
      const l = e => t => ((e, t) => {
          const {
            pathname: n
          } = (0, d.useLocation)();
          return (0, s.useEffect)((() => {
            (0, r.c)({
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
          a().initialize(n)
        }
    },
    226: (e, t, n) => {
      n.d(t, {
        c: () => l
      });
      var o = n(204),
        a = n.n(o);
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
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, a] = t;
            return a === n && (e = {
              site: o,
              subDomain: a
            }, !0)
          })) >= 0));
          return {
            ...r[o >= 0 ? o : 0],
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
          a().dataLayer({
            dataLayer: t
          })
        }
    }
  }
]);
//# sourceMappingURL=0b1c92ec4cfe8eeb816aecd3d4787b5f.js.map