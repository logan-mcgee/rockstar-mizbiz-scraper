try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "419c5026-676f-4c87-95ce-649dd4051d53", e._sentryDebugIdIdentifier = "sentry-dbid-419c5026-676f-4c87-95ce-649dd4051d53")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [954, 1165, 3546], {
    53546: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => s
      });
      var o = a(62229),
        n = a(9623),
        r = a(70954);
      const s = e => {
        let {
          basename: t,
          children: a,
          history: s
        } = e;
        const [d, f] = (0, o.useState)({
          action: s.action,
          location: s.location
        });
        return (0, o.useLayoutEffect)((() => s.listen(((e, t) => {
          f({
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
    },
    70954: (e, t, a) => {
      e.exports = a(92834)
    },
    92834: (e, t, a) => {
      var o = a(62229),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var o, r = {},
          l = null,
          i = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, o) && !f.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === r[o] && (r[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: d.current
        }
      }
      t.Fragment = r, t.jsx = l, t.jsxs = l
    }
  }
]);