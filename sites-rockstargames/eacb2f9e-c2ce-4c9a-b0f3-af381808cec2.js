try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "eacb2f9e-c2ce-4c9a-b0f3-af381808cec2", e._sentryDebugIdIdentifier = "sentry-dbid-eacb2f9e-c2ce-4c9a-b0f3-af381808cec2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1586, 2295, 9205], {
    41586: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => n
      });
      var r = s(42295),
        t = s(9623);
      const n = () => {
        const [e] = (0, t.useSearchParams)(), a = e.get("src") ?? null;
        if (!a) return null;
        const {
          hostname: s
        } = new URL(a);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(s) ? (0, r.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
          children: (0, r.jsx)("div", {
            className: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8",
            style: {
              background: `url(${a}) no-repeat center/contain`
            }
          })
        }) : null
      }
    },
    42295: (e, a, s) => {
      e.exports = s(69245)
    },
    69245: (e, a, s) => {
      var r = s(62229),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, s) {
        var r, n = {},
          f = null,
          l = null;
        for (r in void 0 !== s && (f = "" + s), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (l = a.ref), a) o.call(a, r) && !c.hasOwnProperty(r) && (n[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === n[r] && (n[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: l,
          props: n,
          _owner: d.current
        }
      }
      a.Fragment = n, a.jsx = f, a.jsxs = f
    }
  }
]);