! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "483d13cb-b520-41cc-9562-e229fa1ca206", e._sentryDebugIdIdentifier = "sentry-dbid-483d13cb-b520-41cc-9562-e229fa1ca206")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [204], {
    99576: (e, a, o) => {
      var d = o(51664),
        t = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function n(e, a, o) {
        var d, r = {},
          n = null,
          m = null;
        for (d in void 0 !== o && (n = "" + o), void 0 !== a.key && (n = "" + a.key), void 0 !== a.ref && (m = a.ref), a) s.call(a, d) && !f.hasOwnProperty(d) && (r[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === r[d] && (r[d] = a[d]);
        return {
          $$typeof: t,
          type: e,
          key: n,
          ref: m,
          props: r,
          _owner: c.current
        }
      }
      a.Fragment = r, a.jsx = n, a.jsxs = n
    },
    95240: (e, a, o) => {
      e.exports = o(99576)
    },
    85872: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg"
    },
    53688: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    65388: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    15588: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    91232: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    82948: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg"
    },
    23124: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    }
  }
]);