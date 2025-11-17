try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "63d3f0e6-35ec-4cab-b59d-9a11d7b1c6aa", e._sentryDebugIdIdentifier = "sentry-dbid-63d3f0e6-35ec-4cab-b59d-9a11d7b1c6aa")
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
  [2295, 4618, 4676, 7533, 9136], {
    42295: (e, a, d) => {
      e.exports = d(69245)
    },
    69245: (e, a, d) => {
      var n = d(71127),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, d) {
        var n, r = {},
          f = null,
          c = null;
        for (n in void 0 !== d && (f = "" + d), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (c = a.ref), a) t.call(a, n) && !s.hasOwnProperty(n) && (r[n] = a[n]);
        if (e && e.defaultProps)
          for (n in a = e.defaultProps) void 0 === r[n] && (r[n] = a[n]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: c,
          props: r,
          _owner: l.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    },
    71753: (e, a, d) => {
      d.d(a, {
        b: () => l
      });
      var n = d(71127),
        o = d(63694),
        r = d(42295),
        t = ({
          children: e,
          label: a
        }) => {
          const d = n.Children.only(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [n.cloneElement(d, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, r.jsx)(o.Root, {
              children: a
            })]
          })
        };
      t.displayName = "AccessibleIcon";
      var l = t
    }
  }
]);