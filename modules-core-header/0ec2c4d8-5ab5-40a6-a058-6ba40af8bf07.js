try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0ec2c4d8-5ab5-40a6-a058-6ba40af8bf07", e._sentryDebugIdIdentifier = "sentry-dbid-0ec2c4d8-5ab5-40a6-a058-6ba40af8bf07")
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
  [2174, 3400, 4555, 6936, 9793], {
    94931(e, d, n) {
      var a = n(4637),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, d, n) {
        var a, r = {},
          l = null,
          b = null;
        for (a in void 0 !== n && (l = "" + n), void 0 !== d.key && (l = "" + d.key), void 0 !== d.ref && (b = d.ref), d) t.call(d, a) && !f.hasOwnProperty(a) && (r[a] = d[a]);
        if (e && e.defaultProps)
          for (a in d = e.defaultProps) void 0 === r[a] && (r[a] = d[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: b,
          props: r,
          _owner: s.current
        }
      }
      d.Fragment = r, d.jsx = l, d.jsxs = l
    },
    39793(e, d, n) {
      e.exports = n(94931)
    },
    18552(e, d, n) {
      n.d(d, {
        m: () => r
      });
      var a = n(8789);
      const o = e => "dark" === e ? a.xW.dark : a.xW.light,
        r = (e, d) => [a.xW.tokens, a.xW.typography, a.xW.grid, o(e)].join(" ")
    },
    8789(e, d, n) {
      n.d(d, {
        nz: () => a,
        wj: () => o,
        xW: () => r,
        Np: () => t,
        HZ: () => s,
        X6: () => f,
        yU: () => l
      });
      var a = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        o = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        r = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        t = "foundry_nu8bkpb",
        s = "--foundry-platform-scales-ratio-65afb887",
        f = "foundry_nu8bkp4",
        l = "foundry_nu8bkp3"
    }
  }
]);