/*! For license information please see 1f5a65ff056306fb5ab0c9ca9aabbb15.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "0a13a814-d819-4a99-a717-826a70745f31", e._sentryDebugIdIdentifier = "sentry-dbid-0a13a814-d819-4a99-a717-826a70745f31")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [320], {
    996: (e, r, t) => {
      var n = t(200),
        a = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      r.jsx = function(e, r, t) {
        var n, d = {},
          l = null,
          u = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (u = r.ref), r) o.call(r, n) && !i.hasOwnProperty(n) && (d[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === d[n] && (d[n] = r[n]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: u,
          props: d,
          _owner: s.current
        }
      }
    },
    480: (e, r, t) => {
      e.exports = t(996)
    },
    320: (e, r, t) => {
      t.r(r), t.d(r, {
        DataLayerProvider: () => u,
        ResizeProvider: () => a.a7,
        ScrollProvider: () => o.Iq,
        newswirePost: () => n,
        useDataLayer: () => l
      });
      var n = t(300),
        a = t(428),
        o = t(380),
        s = t(200),
        i = t(480);
      const d = (0, s.createContext)({}),
        l = () => (0, s.useContext)(d),
        u = e => {
          let {
            children: r,
            ...t
          } = e;
          const n = l() ?? {},
            a = (0, s.useMemo)((() => ({
              ...n,
              ...t
            })), [n, t]);
          return (0, i.jsx)(d.Provider, {
            value: a,
            children: r
          })
        }
    },
    300: (e, r, t) => {
      t.r(r), t.d(r, {
        Consumer: () => s,
        Provider: () => i,
        useNewswirePost: () => d
      });
      var n = t(200),
        a = t(480);
      const o = (0, n.createContext)(),
        {
          Consumer: s
        } = o,
        i = e => {
          let {
            article: r,
            children: t
          } = e;
          return (0, a.jsx)(o.Provider, {
            value: r,
            children: t
          })
        },
        d = () => (0, n.useContext)(o)
    },
    428: (e, r, t) => {
      t.d(r, {
        a7: () => f,
        bk: () => c
      });
      var n = t(200),
        a = t(52),
        o = t(480);
      const s = {
          xxs: {
            min: 0,
            max: 479
          },
          xs: {
            min: 480,
            max: 767
          },
          sm: {
            min: 768,
            max: 991
          },
          md: {
            min: 992,
            max: 1199
          },
          lg: {
            min: 1200,
            max: 1439
          },
          xl: {
            min: 1440,
            max: 1919
          },
          xxl: {
            min: 1920,
            max: 99999
          }
        },
        i = () => {
          const e = window.innerWidth,
            r = window.innerHeight,
            t = s;
          return Object.keys(s).map((r => {
            const {
              min: n,
              max: a
            } = s[r], o = e >= n && e <= a, i = e >= n;
            t[r] = {
              activeExact: o,
              activeMin: i,
              min: n,
              max: a
            }
          })), {
            isMobile: e <= s.sm.min,
            breakpoints: t,
            windowWidth: e,
            windowHeight: r
          }
        },
        d = (0, n.createContext)(i()),
        {
          Consumer: l
        } = d,
        u = (0, a.makeVar)(i()),
        f = e => {
          let {
            children: r
          } = e;
          const t = (0, a.useReactiveVar)(u);
          return (0, n.useEffect)((() => {
            const e = () => {
              u(i())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.jsx)(d.Provider, {
            value: t,
            children: r
          })
        },
        c = () => (0, n.useContext)(d)
    },
    380: (e, r, t) => {
      t.d(r, {
        C0: () => i,
        Iq: () => u,
        QZ: () => l
      });
      var n = t(52),
        a = t(200),
        o = t(480);
      const s = (0, n.makeVar)(!1),
        i = e => s(e),
        d = (0, a.createContext)(null),
        l = () => (0, a.useContext)(d),
        u = e => {
          let {
            children: r
          } = e;
          const [t, l] = (0, a.useState)(window.pageYOffset), [u, f] = (0, a.useState)(null), [c, w] = (0, a.useState)(!1), m = (0, n.useReactiveVar)(s);
          let v;
          const _ = () => {
            w(!0), clearTimeout(v), v = setTimeout((() => {
              w(!1)
            }), 2e3)
          };
          return (0, a.useEffect)((() => {
            let e;
            const r = () => {
              if (m) return void f(!1);
              const r = Math.max(0, window.pageYOffset);
              l(r), c || f(r > 60 && r > e), e = r
            };
            return window.addEventListener("scroll", r), () => {
              window.removeEventListener("scroll", r)
            }
          }), [c, m]), (0, a.useMemo)((() => (0, o.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: m,
              pageYOffset: t,
              pauseUserShouldSeeMore: _,
              setFreezeUserShouldSeeMore: i,
              userShouldSeeMore: u
            },
            children: r
          })), [m, t, _, u])
        }
    }
  }
]);
//# sourceMappingURL=1f5a65ff056306fb5ab0c9ca9aabbb15.js.map