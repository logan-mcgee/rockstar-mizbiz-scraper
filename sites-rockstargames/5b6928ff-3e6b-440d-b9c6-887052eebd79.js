try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "5b6928ff-3e6b-440d-b9c6-887052eebd79", e._sentryDebugIdIdentifier = "sentry-dbid-5b6928ff-3e6b-440d-b9c6-887052eebd79")
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
    41586: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => n
      });
      var r = a(42295),
        t = a(10181);
      const n = () => {
        const [e] = (0, t.useSearchParams)(), s = e.get("src") ?? null;
        if (!s) return null;
        const {
          hostname: a
        } = new URL(s);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(a) ? (0, r.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
          children: (0, r.jsx)("div", {
            className: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8",
            style: {
              background: `url(${s}) no-repeat center/contain`
            }
          })
        }) : null
      }
    },
    42295: (e, s, a) => {
      e.exports = a(69245)
    },
    69245: (e, s, a) => {
      var r = a(71127),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, s, a) {
        var r, n = {},
          f = null,
          c = null;
        for (r in void 0 !== a && (f = "" + a), void 0 !== s.key && (f = "" + s.key), void 0 !== s.ref && (c = s.ref), s) o.call(s, r) && !l.hasOwnProperty(r) && (n[r] = s[r]);
        if (e && e.defaultProps)
          for (r in s = e.defaultProps) void 0 === n[r] && (n[r] = s[r]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: c,
          props: n,
          _owner: d.current
        }
      }
      s.Fragment = n, s.jsx = f, s.jsxs = f
    }
  }
]);