try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1ada8eee-0cab-4ba3-9c25-60b2acf9fdd0", e._sentryDebugIdIdentifier = "sentry-dbid-1ada8eee-0cab-4ba3-9c25-60b2acf9fdd0")
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
  [954, 1735, 4116], {
    64116: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => d
      });
      var r = s(9623);
      var t = s(70954);
      const d = () => {
        const [e] = (0, r.useSearchParams)(), a = e.get("src") ?? null;
        if (!a) return null;
        const {
          hostname: s
        } = new URL(a);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(s) ? (0, t.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
          children: (0, t.jsx)("div", {
            className: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8",
            style: {
              background: `url(${a}) no-repeat center/contain`
            }
          })
        }) : null
      }
    },
    70954: (e, a, s) => {
      e.exports = s(92834)
    },
    92834: (e, a, s) => {
      var r = s(62229),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, s) {
        var r, d = {},
          f = null,
          c = null;
        for (r in void 0 !== s && (f = "" + s), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (c = a.ref), a) n.call(a, r) && !l.hasOwnProperty(r) && (d[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === d[r] && (d[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: c,
          props: d,
          _owner: o.current
        }
      }
      a.Fragment = d, a.jsx = f, a.jsxs = f
    }
  }
]);