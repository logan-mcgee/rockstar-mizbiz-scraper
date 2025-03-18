! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "db936d3c-350b-4ee6-b42a-70bb23029e6d", e._sentryDebugIdIdentifier = "sentry-dbid-db936d3c-350b-4ee6-b42a-70bb23029e6d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8174, 1029, 3410, 5791, 8172, 3692], {
    65039: (e, t, o) => {
      var r = o(62229),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, o) {
        var r, n = {},
          i = null,
          f = null;
        for (r in void 0 !== o && (i = "" + o), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (f = t.ref), t) s.call(t, r) && !l.hasOwnProperty(r) && (n[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === n[r] && (n[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: i,
          ref: f,
          props: n,
          _owner: d.current
        }
      }
      t.Fragment = n, t.jsx = i, t.jsxs = i
    },
    91029: (e, t, o) => {
      e.exports = o(65039)
    },
    35127: (e, t, o) => {
      o.d(t, {
        A: () => a
      });
      var r = o(91029);
      const a = e => {
        let {
          to: t,
          target: o,
          className: a,
          onNavigate: n,
          onClick: s,
          reloadDocument: d,
          children: l,
          ...i
        } = e;
        const f = t?.startsWith("http");
        return (0, r.jsx)("a", {
          href: t,
          className: a,
          onClick: e => {
            s?.(e), f || d || (n ? (e.preventDefault(), n(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
          },
          target: o,
          ...i,
          children: l
        })
      }
    },
    6400: (e, t, o) => {
      o.d(t, {
        A: () => n,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = a.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, a] = t;
            return a === o && (e = {
              site: r,
              subDomain: a
            }, !0)
          })) >= 0)), n = a[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    }
  }
]);