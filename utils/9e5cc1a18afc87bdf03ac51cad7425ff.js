/*! For license information please see 9e5cc1a18afc87bdf03ac51cad7425ff.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [161], {
    32: (e, r, t) => {
      var n = t(927),
        o = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      r.jsx = function(e, r, t) {
        var n, u = {},
          l = null,
          c = null;
        for (n in void 0 !== t && (l = "" + t), void 0 !== r.key && (l = "" + r.key), void 0 !== r.ref && (c = r.ref), r) s.call(r, n) && !a.hasOwnProperty(n) && (u[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === u[n] && (u[n] = r[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: c,
          props: u,
          _owner: i.current
        }
      }
    },
    705: (e, r, t) => {
      e.exports = t(32)
    },
    161: (e, r, t) => {
      t.r(r), t.d(r, {
        DataLayerProvider: () => c,
        ResizeProvider: () => o.ph,
        ScrollProvider: () => s.ID,
        newswirePost: () => n,
        useDataLayer: () => l
      });
      var n = t(438),
        o = t(282),
        s = t(186),
        i = t(927),
        a = t(705);
      const u = (0, i.createContext)({}),
        l = () => (0, i.useContext)(u),
        c = e => {
          let {
            children: r,
            ...t
          } = e;
          const n = l() ?? {},
            o = (0, i.useMemo)((() => ({
              ...n,
              ...t
            })), [n, t]);
          return (0, a.jsx)(u.Provider, {
            value: o,
            children: r
          })
        }
    },
    438: (e, r, t) => {
      t.r(r), t.d(r, {
        Consumer: () => i,
        Provider: () => a,
        useNewswirePost: () => u
      });
      var n = t(927),
        o = t(705);
      const s = (0, n.createContext)(),
        {
          Consumer: i
        } = s,
        a = e => {
          let {
            article: r,
            children: t
          } = e;
          return (0, o.jsx)(s.Provider, {
            value: r,
            children: t
          })
        },
        u = () => (0, n.useContext)(s)
    },
    282: (e, r, t) => {
      t.d(r, {
        ph: () => d,
        w_: () => m
      });
      var n = t(927),
        o = t(859),
        s = t(705);
      const i = {
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
        a = () => {
          const e = window.innerWidth,
            r = window.innerHeight,
            t = i;
          return Object.keys(i).map((r => {
            const {
              min: n,
              max: o
            } = i[r], s = e >= n && e <= o, a = e >= n;
            t[r] = {
              activeExact: s,
              activeMin: a,
              min: n,
              max: o
            }
          })), {
            isMobile: e <= i.sm.min,
            breakpoints: t,
            windowWidth: e,
            windowHeight: r
          }
        },
        u = (0, n.createContext)(a()),
        {
          Consumer: l
        } = u,
        c = (0, o.makeVar)(a()),
        d = e => {
          let {
            children: r
          } = e;
          const t = (0, o.useReactiveVar)(c);
          return (0, n.useEffect)((() => {
            const e = () => {
              c(a())
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.jsx)(u.Provider, {
            value: t,
            children: r
          })
        },
        m = () => (0, n.useContext)(u)
    },
    186: (e, r, t) => {
      t.d(r, {
        ID: () => c,
        rj: () => a,
        vO: () => l
      });
      var n = t(859),
        o = t(927),
        s = t(705);
      const i = (0, n.makeVar)(!1),
        a = e => i(e),
        u = (0, o.createContext)(null),
        l = () => (0, o.useContext)(u),
        c = e => {
          let {
            children: r
          } = e;
          const [t, l] = (0, o.useState)(window.pageYOffset), [c, d] = (0, o.useState)(null), [m, v] = (0, o.useState)(!1), w = (0, n.useReactiveVar)(i);
          let x;
          const f = () => {
            v(!0), clearTimeout(x), x = setTimeout((() => {
              v(!1)
            }), 2e3)
          };
          return (0, o.useEffect)((() => {
            let e;
            const r = () => {
              if (w) return void d(!1);
              const r = Math.max(0, window.pageYOffset);
              l(r), m || d(r > 60 && r > e), e = r
            };
            return window.addEventListener("scroll", r), () => {
              window.removeEventListener("scroll", r)
            }
          }), [m, w]), (0, o.useMemo)((() => (0, s.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: w,
              pageYOffset: t,
              pauseUserShouldSeeMore: f,
              setFreezeUserShouldSeeMore: a,
              userShouldSeeMore: c
            },
            children: r
          })), [w, t, f, c])
        }
    }
  }
]);