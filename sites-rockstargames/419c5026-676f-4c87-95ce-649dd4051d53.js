try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "419c5026-676f-4c87-95ce-649dd4051d53", e._sentryDebugIdIdentifier = "sentry-dbid-419c5026-676f-4c87-95ce-649dd4051d53")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [954, 1165, 3546], {
    53546: (e, t, o) => {
      o.r(t), o.d(t, {
        default: () => r
      });
      var a = o(62229),
        n = o(9623),
        d = o(70954);
      const r = e => {
        let {
          basename: t,
          children: o,
          history: r
        } = e;
        const [s, l] = (0, a.useState)({
          action: r.action,
          location: r.location
        });
        return (0, a.useLayoutEffect)((() => r.listen(((e, t) => {
          l({
            location: e,
            action: t
          })
        }))), [r]), (0, d.jsx)(n.Router, {
          basename: t,
          location: s.location,
          navigationType: s.action,
          navigator: r,
          children: o
        })
      }
    },
    70954: (e, t, o) => {
      e.exports = o(92834)
    },
    92834: (e, t, o) => {
      var a = o(62229),
        n = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, o) {
        var a, d = {},
          f = null,
          i = null;
        for (a in void 0 !== o && (f = "" + o), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (i = t.ref), t) r.call(t, a) && !l.hasOwnProperty(a) && (d[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === d[a] && (d[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      t.Fragment = d, t.jsx = f, t.jsxs = f
    }
  }
]);