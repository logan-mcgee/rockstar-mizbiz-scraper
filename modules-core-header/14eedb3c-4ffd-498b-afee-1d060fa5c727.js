try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "14eedb3c-4ffd-498b-afee-1d060fa5c727", e._sentryDebugIdIdentifier = "sentry-dbid-14eedb3c-4ffd-498b-afee-1d060fa5c727")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2295, 4206, 4676, 7533, 8804], {
    42295: (e, d, a) => {
      e.exports = a(69245)
    },
    69245: (e, d, a) => {
      var n = a(71127),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, d, a) {
        var n, r = {},
          s = null,
          c = null;
        for (n in void 0 !== a && (s = "" + a), void 0 !== d.key && (s = "" + d.key), void 0 !== d.ref && (c = d.ref), d) t.call(d, n) && !f.hasOwnProperty(n) && (r[n] = d[n]);
        if (e && e.defaultProps)
          for (n in d = e.defaultProps) void 0 === r[n] && (r[n] = d[n]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: r,
          _owner: l.current
        }
      }
      d.Fragment = r, d.jsx = s, d.jsxs = s
    },
    71753: (e, d, a) => {
      a.d(d, {
        b: () => l
      });
      var n = a(71127),
        o = a(63694),
        r = a(42295),
        t = ({
          children: e,
          label: d
        }) => {
          const a = n.Children.only(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [n.cloneElement(a, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, r.jsx)(o.Root, {
              children: d
            })]
          })
        };
      t.displayName = "AccessibleIcon";
      var l = t
    }
  }
]);