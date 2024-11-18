! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e46c806c-4c37-443f-a28c-7c516a5521c7", e._sentryDebugIdIdentifier = "sentry-dbid-e46c806c-4c37-443f-a28c-7c516a5521c7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [50], {
    6516: (e, t, r) => {
      var n = r(1403),
        a = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, r) {
        var n, d = {},
          l = null,
          c = null;
        for (n in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, n) && !i.hasOwnProperty(n) && (d[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === d[n] && (d[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: c,
          props: d,
          _owner: s.current
        }
      }
    },
    6632: (e, t, r) => {
      e.exports = r(6516)
    },
    4050: (e, t, r) => {
      r.r(t), r.d(t, {
        DataLayerProvider: () => c,
        ResizeProvider: () => a.uU,
        ScrollProvider: () => o.N2,
        newswirePost: () => n,
        useDataLayer: () => l
      });
      var n = r(359),
        a = r(2904),
        o = r(295),
        s = r(1403),
        i = r(6632);
      const d = (0, s.createContext)({}),
        l = () => (0, s.useContext)(d),
        c = e => {
          let {
            children: t,
            ...r
          } = e;
          const n = l() ?? {},
            a = (0, s.useMemo)((() => ({
              ...n,
              ...r
            })), [n, r]);
          return (0, i.jsx)(d.Provider, {
            value: a,
            children: t
          })
        }
    },
    359: (e, t, r) => {
      r.r(t), r.d(t, {
        Consumer: () => s,
        Provider: () => i,
        useNewswirePost: () => d
      });
      var n = r(1403),
        a = r(6632);
      const o = (0, n.createContext)(),
        {
          Consumer: s
        } = o,
        i = e => {
          let {
            article: t,
            children: r
          } = e;
          return (0, a.jsx)(o.Provider, {
            value: t,
            children: r
          })
        },
        d = () => (0, n.useContext)(o)
    },
    2904: (e, t, r) => {
      r.d(t, {
        G4: () => f,
        uU: () => u
      });
      var n = r(1403),
        a = r(8407),
        o = r(6632);
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
            t = window.innerHeight,
            r = s;
          return Object.keys(s).map((t => {
            const {
              min: n,
              max: a
            } = s[t], o = e >= n && e <= a, i = e >= n;
            r[t] = {
              activeExact: o,
              activeMin: i,
              min: n,
              max: a
            }
          })), {
            isMobile: e < s.sm.min,
            isTablet: e < s.md.max,
            breakpoints: r,
            windowWidth: e,
            windowHeight: t
          }
        },
        d = (0, n.createContext)(i()),
        {
          Consumer: l
        } = d,
        c = (0, a.makeVar)(i()),
        u = e => {
          let {
            children: t
          } = e;
          const r = (0, a.useReactiveVar)(c);
          return (0, n.useEffect)((() => {
            const e = () => {
              c(i())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.jsx)(d.Provider, {
            value: r,
            children: t
          })
        },
        f = () => (0, n.useContext)(d)
    },
    295: (e, t, r) => {
      r.d(t, {
        Ll: () => l,
        N2: () => c,
        U4: () => i
      });
      var n = r(8407),
        a = r(1403),
        o = r(6632);
      const s = (0, n.makeVar)(!1),
        i = e => s(e),
        d = (0, a.createContext)(null),
        l = () => (0, a.useContext)(d),
        c = e => {
          let {
            children: t
          } = e;
          const [r, l] = (0, a.useState)(window.pageYOffset), [c, u] = (0, a.useState)(null), [f, m] = (0, a.useState)(!1), w = (0, n.useReactiveVar)(s);
          let v;
          const _ = () => {
            m(!0), clearTimeout(v), v = setTimeout((() => {
              m(!1)
            }), 2e3)
          };
          return (0, a.useEffect)((() => {
            let e;
            const t = () => {
              if (w) return void u(!1);
              const t = Math.max(0, window.pageYOffset);
              l(t), f || u(t > 60 && t > e), e = t
            };
            return window.addEventListener("scroll", t), () => {
              window.removeEventListener("scroll", t)
            }
          }), [f, w]), (0, a.useMemo)((() => (0, o.jsx)(d.Provider, {
            value: {
              freezeUserShouldSeeMore: w,
              pageYOffset: r,
              pauseUserShouldSeeMore: _,
              setFreezeUserShouldSeeMore: i,
              userShouldSeeMore: c
            },
            children: t
          })), [w, r, _, c])
        }
    }
  }
]);