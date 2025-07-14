try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "7c61705f-9b17-47e2-b700-9814e071e86d", e._sentryDebugIdIdentifier = "sentry-dbid-7c61705f-9b17-47e2-b700-9814e071e86d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5854, 7365, 9746], {
    25854: (e, s, a) => {
      e.exports = a(41454)
    },
    41454: (e, s, a) => {
      var r = a(62229),
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

      function c(e, s, a) {
        var r, n = {},
          c = null,
          f = null;
        for (r in void 0 !== a && (c = "" + a), void 0 !== s.key && (c = "" + s.key), void 0 !== s.ref && (f = s.ref), s) o.call(s, r) && !l.hasOwnProperty(r) && (n[r] = s[r]);
        if (e && e.defaultProps)
          for (r in s = e.defaultProps) void 0 === n[r] && (n[r] = s[r]);
        return {
          $$typeof: t,
          type: e,
          key: c,
          ref: f,
          props: n,
          _owner: d.current
        }
      }
      s.Fragment = n, s.jsx = c, s.jsxs = c
    },
    67365: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => n
      });
      var r = a(9623);
      var t = a(25854);
      const n = () => {
        const [e] = (0, r.useSearchParams)(), s = e.get("src") ?? null;
        if (!s) return null;
        const {
          hostname: a
        } = new URL(s);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(a) ? (0, t.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
          children: (0, t.jsx)("div", {
            className: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8",
            style: {
              background: `url(${s}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);