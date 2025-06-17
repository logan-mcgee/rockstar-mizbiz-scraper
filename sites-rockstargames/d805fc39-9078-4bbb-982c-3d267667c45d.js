! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d805fc39-9078-4bbb-982c-3d267667c45d", e._sentryDebugIdIdentifier = "sentry-dbid-d805fc39-9078-4bbb-982c-3d267667c45d")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5854, 7365, 9746], {
    25854: (e, a, t) => {
      e.exports = t(41454)
    },
    41454: (e, a, t) => {
      var s = t(62229),
        r = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, t) {
        var s, o = {},
          f = null,
          c = null;
        for (s in void 0 !== t && (f = "" + t), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (c = a.ref), a) d.call(a, s) && !l.hasOwnProperty(s) && (o[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === o[s] && (o[s] = a[s]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: c,
          props: o,
          _owner: n.current
        }
      }
      a.Fragment = o, a.jsx = f, a.jsxs = f
    },
    67365: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => o
      });
      var s = t(9623);
      var r = t(25854);
      const o = () => {
        const [e] = (0, s.useSearchParams)(), a = e.get("src") ?? null;
        if (!a) return null;
        const {
          hostname: t
        } = new URL(a);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(t) ? (0, r.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
          children: (0, r.jsx)("div", {
            className: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8",
            style: {
              background: `url(${a}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);