! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "3effae32-b396-45f0-9ff2-143008f63d61", e._sentryDebugIdIdentifier = "sentry-dbid-3effae32-b396-45f0-9ff2-143008f63d61")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-screenshot-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_screenshot_viewer = self.webpackChunk_rockstargames_modules_core_screenshot_viewer || []).push([
  [624], {
    576: (e, r, a) => {
      var o = a(664),
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
        var o, f = {},
          l = null,
          c = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (c = r.ref), r) n.call(r, o) && !d.hasOwnProperty(o) && (f[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === f[o] && (f[o] = r[o]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: c,
          props: f,
          _owner: t.current
        }
      }
    },
    240: (e, r, a) => {
      e.exports = a(576)
    },
    624: (e, r, a) => {
      a.r(r), a.d(r, {
        default: () => n
      });
      var o = a(584);
      var s = a(240);
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