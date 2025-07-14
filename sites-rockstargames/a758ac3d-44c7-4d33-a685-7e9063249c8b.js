try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a758ac3d-44c7-4d33-a685-7e9063249c8b", e._sentryDebugIdIdentifier = "sentry-dbid-a758ac3d-44c7-4d33-a685-7e9063249c8b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3397, 5854, 8159], {
    25854: (e, t, a) => {
      e.exports = a(41454)
    },
    41454: (e, t, a) => {
      var o = a(62229),
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

      function i(e, t, a) {
        var o, r = {},
          i = null,
          f = null;
        for (o in void 0 !== a && (i = "" + a), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (f = t.ref), t) s.call(t, o) && !l.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === r[o] && (r[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: f,
          props: r,
          _owner: d.current
        }
      }
      t.Fragment = r, t.jsx = i, t.jsxs = i
    },
    68159: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => s
      });
      var o = a(62229),
        n = a(9623),
        r = a(25854);
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