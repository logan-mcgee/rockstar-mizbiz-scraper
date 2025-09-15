try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9177326b-00ca-44ce-aa1f-4e3f36073be1", e._sentryDebugIdIdentifier = "sentry-dbid-9177326b-00ca-44ce-aa1f-4e3f36073be1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [842, 2295, 8461], {
    42295: (e, a, t) => {
      e.exports = t(69245)
    },
    69245: (e, a, t) => {
      var o = t(62229),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var o, r = {},
          l = null,
          i = null;
        for (o in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) s.call(a, o) && !d.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: f.current
        }
      }
      a.Fragment = r, a.jsx = l, a.jsxs = l
    },
    90842: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var o = t(42295),
        n = t(62229),
        r = t(9623);
      const s = ({
        basename: e,
        children: a,
        history: t
      }) => {
        const [s, f] = (0, n.useState)({
          action: t.action,
          location: t.location
        });
        return (0, n.useLayoutEffect)((() => t.listen(((e, a) => {
          f({
            location: e,
            action: a
          })
        }))), [t]), (0, o.jsx)(r.Router, {
          basename: e,
          location: s.location,
          navigationType: s.action,
          navigator: t,
          children: a
        })
      }
    }
  }
]);