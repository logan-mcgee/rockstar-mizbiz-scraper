! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9de72d24-435d-42bf-b779-d8edc9121b2d", e._sentryDebugIdIdentifier = "sentry-dbid-9de72d24-435d-42bf-b779-d8edc9121b2d")
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
  [3397, 5854, 8159], {
    25854: (e, a, t) => {
      e.exports = t(41454)
    },
    41454: (e, a, t) => {
      var o = t(62229),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, t) {
        var o, d = {},
          i = null,
          f = null;
        for (o in void 0 !== t && (i = "" + t), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) r.call(a, o) && !s.hasOwnProperty(o) && (d[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === d[o] && (d[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: f,
          props: d,
          _owner: l.current
        }
      }
      a.Fragment = d, a.jsx = i, a.jsxs = i
    },
    68159: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => r
      });
      var o = t(62229),
        n = t(9623),
        d = t(25854);
      const r = e => {
        let {
          basename: a,
          children: t,
          history: r
        } = e;
        const [l, s] = (0, o.useState)({
          action: r.action,
          location: r.location
        });
        return (0, o.useLayoutEffect)((() => r.listen(((e, a) => {
          s({
            location: e,
            action: a
          })
        }))), [r]), (0, d.jsx)(n.Router, {
          basename: a,
          location: l.location,
          navigationType: l.action,
          navigator: r,
          children: t
        })
      }
    }
  }
]);