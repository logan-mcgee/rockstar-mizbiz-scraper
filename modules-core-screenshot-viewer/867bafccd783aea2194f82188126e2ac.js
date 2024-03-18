/*! For license information please see 867bafccd783aea2194f82188126e2ac.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b242311a-d63d-4037-8b20-5ca9bb10b055", e._sentryDebugIdIdentifier = "sentry-dbid-b242311a-d63d-4037-8b20-5ca9bb10b055")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-screenshot-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_screenshot_viewer = self.webpackChunk_rockstargames_modules_core_screenshot_viewer || []).push([
  [164], {
    996: (e, r, a) => {
      var o = a(200),
        s = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        t = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      r.jsx = function(e, r, a) {
        var o, l = {},
          c = null,
          f = null;
        for (o in void 0 !== a && (c = "" + a), void 0 !== r.key && (c = "" + r.key), void 0 !== r.ref && (f = r.ref), r) n.call(r, o) && !d.hasOwnProperty(o) && (l[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === l[o] && (l[o] = r[o]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: f,
          props: l,
          _owner: t.current
        }
      }
    },
    480: (e, r, a) => {
      e.exports = a(996)
    },
    164: (e, r, a) => {
      a.r(r), a.d(r, {
        default: () => n
      });
      var o = a(320);
      var s = a(480);
      const n = () => {
        const [e] = (0, o.useSearchParams)(), r = e.get("src") ?? null;
        if (!r) return null;
        const {
          hostname: a
        } = new URL(r);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(a) ? (0, s.jsx)("div", {
          className: "rockstargames-modules-core-screenshot-viewerb853e96a358de7f06dc571512f2b1505",
          children: (0, s.jsx)("div", {
            className: "rockstargames-modules-core-screenshot-viewera1d461bde15f77edf27cc41cea0da7c1",
            style: {
              background: `url(${r}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);
//# sourceMappingURL=867bafccd783aea2194f82188126e2ac.js.map