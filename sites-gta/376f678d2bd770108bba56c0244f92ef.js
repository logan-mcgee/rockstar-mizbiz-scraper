/*! For license information please see 376f678d2bd770108bba56c0244f92ef.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5140eceb-c6c6-4074-a439-8d8b4348ed1b", e._sentryDebugIdIdentifier = "sentry-dbid-5140eceb-c6c6-4074-a439-8d8b4348ed1b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [912, 532], {
    1996: (e, a, t) => {
      var o = t(8200),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, t) {
        var o, r = {},
          i = null,
          f = null;
        for (o in void 0 !== t && (i = "" + t), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) d.call(a, o) && !l.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: f,
          props: r,
          _owner: s.current
        }
      }
      a.Fragment = r, a.jsx = i, a.jsxs = i
    },
    3480: (e, a, t) => {
      e.exports = t(1996)
    },
    2912: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => d
      });
      var o = t(8200),
        n = t(1320),
        r = t(3480);
      const d = e => {
        let {
          basename: a,
          children: t,
          history: d
        } = e;
        const [s, l] = (0, o.useState)({
          action: d.action,
          location: d.location
        });
        return (0, o.useLayoutEffect)((() => d.listen(((e, a) => {
          l({
            location: e,
            action: a
          })
        }))), [d]), (0, r.jsx)(n.Router, {
          basename: a,
          location: s.location,
          navigationType: s.action,
          navigator: d,
          children: t
        })
      }
    }
  }
]);
//# sourceMappingURL=376f678d2bd770108bba56c0244f92ef.js.map