! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e85002fd-3ac0-410b-89cf-0b161990843c", e._sentryDebugIdIdentifier = "sentry-dbid-e85002fd-3ac0-410b-89cf-0b161990843c")
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
  [6095, 1029, 8476], {
    65039: (e, a, r) => {
      var s = r(62229),
        t = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, r) {
        var s, o = {},
          f = null,
          c = null;
        for (s in void 0 !== r && (f = "" + r), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (c = a.ref), a) n.call(a, s) && !l.hasOwnProperty(s) && (o[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === o[s] && (o[s] = a[s]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: c,
          props: o,
          _owner: d.current
        }
      }
      a.Fragment = o, a.jsx = f, a.jsxs = f
    },
    91029: (e, a, r) => {
      e.exports = r(65039)
    },
    66095: (e, a, r) => {
      r.r(a), r.d(a, {
        default: () => o
      });
      var s = r(9623);
      var t = r(91029);
      const o = () => {
        const [e] = (0, s.useSearchParams)(), a = e.get("src") ?? null;
        if (!a) return null;
        const {
          hostname: r
        } = new URL(a);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(r) ? (0, t.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
          children: (0, t.jsx)("div", {
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