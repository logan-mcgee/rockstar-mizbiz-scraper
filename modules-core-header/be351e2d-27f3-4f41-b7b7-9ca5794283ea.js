try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "be351e2d-27f3-4f41-b7b7-9ca5794283ea", e._sentryDebugIdIdentifier = "sentry-dbid-be351e2d-27f3-4f41-b7b7-9ca5794283ea")
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
  [2295, 4429, 4676, 7533, 7605], {
    42295: (e, a, n) => {
      e.exports = n(69245)
    },
    69245: (e, a, n) => {
      var o = n(71127),
        r = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, n) {
        var o, d = {},
          f = null,
          c = null;
        for (o in void 0 !== n && (f = "" + n), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (c = a.ref), a) t.call(a, o) && !s.hasOwnProperty(o) && (d[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === d[o] && (d[o] = a[o]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: c,
          props: d,
          _owner: l.current
        }
      }
      a.Fragment = d, a.jsx = f, a.jsxs = f
    },
    71753: (e, a, n) => {
      n.d(a, {
        b: () => l
      });
      var o = n(71127),
        r = n(63694),
        d = n(42295),
        t = ({
          children: e,
          label: a
        }) => {
          const n = o.Children.only(e);
          return (0, d.jsxs)(d.Fragment, {
            children: [o.cloneElement(n, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, d.jsx)(r.Root, {
              children: a
            })]
          })
        };
      t.displayName = "AccessibleIcon";
      var l = t
    }
  }
]);