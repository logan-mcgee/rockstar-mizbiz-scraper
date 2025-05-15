! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0e7fb827-36af-4046-9871-4ac394e17d34", e._sentryDebugIdIdentifier = "sentry-dbid-0e7fb827-36af-4046-9871-4ac394e17d34")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 2327, 2982, 3473, 5854], {
    25459: (e, t, a) => {
      a.d(t, {
        A: () => r
      });
      var o = a(25854);
      const r = e => {
        let {
          to: t,
          target: a,
          className: r,
          onNavigate: n,
          onClick: s,
          reloadDocument: l,
          children: d,
          ...i
        } = e;
        const f = t?.startsWith("http");
        return (0, o.jsx)("a", {
          href: t,
          className: r,
          onClick: e => {
            s?.(e), f || l || (n ? (e.preventDefault(), n(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
          },
          target: a,
          ...i,
          children: d
        })
      }
    },
    25854: (e, t, a) => {
      e.exports = a(41454)
    },
    40148: (e, t, a) => {
      a.d(t, {
        A: () => n,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
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
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, r] = t;
            return r === a && (e = {
              site: o,
              subDomain: r
            }, !0)
          })) >= 0)), n = r[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    },
    41454: (e, t, a) => {
      var o = a(71127),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, a) {
        var o, n = {},
          i = null,
          f = null;
        for (o in void 0 !== a && (i = "" + a), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (f = t.ref), t) s.call(t, o) && !d.hasOwnProperty(o) && (n[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === n[o] && (n[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: f,
          props: n,
          _owner: l.current
        }
      }
      t.Fragment = n, t.jsx = i, t.jsxs = i
    }
  }
]);