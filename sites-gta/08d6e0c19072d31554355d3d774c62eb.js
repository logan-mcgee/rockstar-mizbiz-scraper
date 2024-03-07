/*! For license information please see 08d6e0c19072d31554355d3d774c62eb.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5140eceb-c6c6-4074-a439-8d8b4348ed1b", e._sentryDebugIdIdentifier = "sentry-dbid-5140eceb-c6c6-4074-a439-8d8b4348ed1b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "43971e0f99ea7c6c89ef0007f1e57d35945eb542",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "43971e0f99ea7c6c89ef0007f1e57d35945eb542"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [912, 532], {
    1996: (e, t, a) => {
      var o = a(8200),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, a) {
        var o, r = {},
          f = null,
          i = null;
        for (o in void 0 !== a && (f = "" + a), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, o) && !l.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === r[o] && (r[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: d.current
        }
      }
      t.Fragment = r, t.jsx = f, t.jsxs = f
    },
    3480: (e, t, a) => {
      e.exports = a(1996)
    },
    2912: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => s
      });
      var o = a(8200),
        n = a(1320),
        r = a(3480);
      const s = e => {
        let {
          basename: t,
          children: a,
          history: s
        } = e;
        const [d, l] = (0, o.useState)({
          action: s.action,
          location: s.location
        });
        return (0, o.useLayoutEffect)((() => s.listen(((e, t) => {
          l({
            location: e,
            action: t
          })
        }))), [s]), (0, r.jsx)(n.Router, {
          basename: t,
          location: d.location,
          navigationType: d.action,
          navigator: s,
          children: a
        })
      }
    }
  }
]);
//# sourceMappingURL=08d6e0c19072d31554355d3d774c62eb.js.map