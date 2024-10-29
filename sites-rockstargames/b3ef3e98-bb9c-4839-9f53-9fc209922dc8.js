! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b3ef3e98-bb9c-4839-9f53-9fc209922dc8", e._sentryDebugIdIdentifier = "sentry-dbid-b3ef3e98-bb9c-4839-9f53-9fc209922dc8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4007, 6632, 6388], {
    26516: (e, a, r) => {
      var s = r(71403),
        t = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, r) {
        var s, o = {},
          l = null,
          c = null;
        for (s in void 0 !== r && (l = "" + r), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (c = a.ref), a) n.call(a, s) && !d.hasOwnProperty(s) && (o[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === o[s] && (o[s] = a[s]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: c,
          props: o,
          _owner: f.current
        }
      }
      a.Fragment = o, a.jsx = l, a.jsxs = l
    },
    46632: (e, a, r) => {
      e.exports = r(26516)
    },
    54007: (e, a, r) => {
      r.r(a), r.d(a, {
        default: () => o
      });
      var s = r(14410);
      var t = r(46632);
      const o = () => {
        const [e] = (0, s.useSearchParams)(), a = e.get("src") ?? null;
        if (!a) return null;
        const {
          hostname: r
        } = new URL(a);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(r) ? (0, t.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd66031000744eafe5244f0f181e114d4",
          children: (0, t.jsx)("div", {
            className: "rockstargames-sites-rockstargamesdc6ce3af69e4264cd2a5522445cef045",
            style: {
              background: `url(${a}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);