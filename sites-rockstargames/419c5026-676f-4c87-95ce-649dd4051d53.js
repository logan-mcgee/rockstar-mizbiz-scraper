try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "419c5026-676f-4c87-95ce-649dd4051d53", e._sentryDebugIdIdentifier = "sentry-dbid-419c5026-676f-4c87-95ce-649dd4051d53")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [954, 1165, 3546], {
    53546: (e, t, o) => {
      o.r(t), o.d(t, {
        default: () => s
      });
      var a = o(62229),
        n = o(9623),
        r = o(70954);
      const s = e => {
        let {
          basename: t,
          children: o,
          history: s
        } = e;
        const [d, f] = (0, a.useState)({
          action: s.action,
          location: s.location
        });
        return (0, a.useLayoutEffect)((() => s.listen(((e, t) => {
          f({
            location: e,
            action: t
          })
        }))), [s]), (0, r.jsx)(n.Router, {
          basename: t,
          location: d.location,
          navigationType: d.action,
          navigator: s,
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
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var a, r = {},
          l = null,
          i = null;
        for (a in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, a) && !f.hasOwnProperty(a) && (r[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === r[a] && (r[a] = t[a]);
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