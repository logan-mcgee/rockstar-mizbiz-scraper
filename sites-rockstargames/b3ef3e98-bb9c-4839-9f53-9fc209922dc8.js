! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b3ef3e98-bb9c-4839-9f53-9fc209922dc8", e._sentryDebugIdIdentifier = "sentry-dbid-b3ef3e98-bb9c-4839-9f53-9fc209922dc8")
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
    26516: (e, r, a) => {
      var s = a(71403),
        t = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, r, a) {
        var s, o = {},
          l = null,
          c = null;
        for (s in void 0 !== a && (l = "" + a), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (c = r.ref), r) n.call(r, s) && !f.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps)
          for (s in r = e.defaultProps) void 0 === o[s] && (o[s] = r[s]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: c,
          props: o,
          _owner: d.current
        }
      }
      r.Fragment = o, r.jsx = l, r.jsxs = l
    },
    46632: (e, r, a) => {
      e.exports = a(26516)
    },
    54007: (e, r, a) => {
      a.r(r), a.d(r, {
        default: () => o
      });
      var s = a(14410);
      var t = a(46632);
      const o = () => {
        const [e] = (0, s.useSearchParams)(), r = e.get("src") ?? null;
        if (!r) return null;
        const {
          hostname: a
        } = new URL(r);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(a) ? (0, t.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd66031000744eafe5244f0f181e114d4",
          children: (0, t.jsx)("div", {
            className: "rockstargames-sites-rockstargamesdc6ce3af69e4264cd2a5522445cef045",
            style: {
              background: `url(${r}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);