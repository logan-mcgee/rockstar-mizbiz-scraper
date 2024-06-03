! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2e6023a1-eef7-448c-8fb5-162a6df510fa", e._sentryDebugIdIdentifier = "sentry-dbid-2e6023a1-eef7-448c-8fb5-162a6df510fa")
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
  [432, 240, 860, 52], {
    99576: (e, a, r) => {
      var s = r(51664),
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
    95240: (e, a, r) => {
      e.exports = r(99576)
    },
    55432: (e, a, r) => {
      r.r(a), r.d(a, {
        default: () => o
      });
      var s = r(98584);
      var t = r(95240);
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