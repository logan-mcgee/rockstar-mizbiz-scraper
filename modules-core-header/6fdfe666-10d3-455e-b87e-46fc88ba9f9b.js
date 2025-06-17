! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6fdfe666-10d3-455e-b87e-46fc88ba9f9b", e._sentryDebugIdIdentifier = "sentry-dbid-6fdfe666-10d3-455e-b87e-46fc88ba9f9b")
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
    25459: (e, t, o) => {
      o.d(t, {
        A: () => r
      });
      var a = o(25854);
      const r = e => {
        let {
          to: t,
          target: o,
          className: r,
          onNavigate: s,
          onClick: n,
          reloadDocument: l,
          children: d,
          ...f
        } = e;
        const i = t?.startsWith("http");
        return (0, a.jsx)("a", {
          href: t,
          className: r,
          onClick: e => {
            n?.(e), i || l || (s ? (e.preventDefault(), s(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
          },
          target: o,
          ...f,
          children: d
        })
      }
    },
    25854: (e, t, o) => {
      e.exports = o(41454)
    },
    40148: (e, t, o) => {
      o.d(t, {
        A: () => s,
        C: () => a
      });
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [a, r] = t;
            return r === o && (e = {
              site: a,
              subDomain: r
            }, !0)
          })) >= 0)), s = r[a >= 0 ? a : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    41454: (e, t, o) => {
      var a = o(71127),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, o) {
        var a, s = {},
          f = null,
          i = null;
        for (a in void 0 !== o && (f = "" + o), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (i = t.ref), t) n.call(t, a) && !d.hasOwnProperty(a) && (s[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === s[a] && (s[a] = t[a]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: s,
          _owner: l.current
        }
      }
      t.Fragment = s, t.jsx = f, t.jsxs = f
    }
  }
]);