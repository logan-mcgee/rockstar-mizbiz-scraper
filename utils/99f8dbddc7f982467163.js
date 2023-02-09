/*! For license information please see 99f8dbddc7f982467163.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [140], {
    140: (e, r, t) => {
      t.r(r), t.d(r, {
        ScrollProvider: () => s.I,
        newswirePost: () => o
      });
      var o = t(355),
        s = t(679)
    },
    355: (e, r, t) => {
      t.r(r), t.d(r, {
        Consumer: () => a,
        Provider: () => l,
        useNewswirePost: () => u
      });
      var o = t(822),
        s = t(157);
      const n = (0, o.createContext)(),
        {
          Consumer: a
        } = n,
        l = e => {
          let {
            article: r,
            children: t
          } = e;
          return (0, s.jsx)(n.Provider, {
            value: r,
            children: t
          })
        },
        u = () => (0, o.useContext)(n)
    },
    679: (e, r, t) => {
      t.d(r, {
        I: () => i,
        v: () => c
      });
      var o = t(859),
        s = t(822),
        n = t(157);
      const a = (0, o.makeVar)(!1),
        l = e => a(e),
        u = (0, s.createContext)(),
        c = () => (0, s.useContext)(u),
        i = e => {
          let {
            children: r
          } = e;
          const [t, c] = (0, s.useState)(window.pageYOffset), [i, d] = (0, s.useState)(null), [f, v] = (0, s.useState)(!1), _ = (0, o.useReactiveVar)(a);
          let p;
          const w = () => {
            v(!0), clearTimeout(p), p = setTimeout((() => {
              v(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const r = () => {
              const r = Math.max(0, window.pageYOffset);
              c(r), f || d(r > 60 && r > e), e = r
            };
            return window.addEventListener("scroll", r), () => {
              window.removeEventListener("scroll", r)
            }
          }), [f]), (0, s.useMemo)((() => (0, n.jsx)(u.Provider, {
            value: {
              freezeUserShouldSeeMore: _,
              pageYOffset: t,
              pauseUserShouldSeeMore: w,
              setFreezeUserShouldSeeMore: l,
              userShouldSeeMore: i
            },
            children: r
          })), [_, t, w, i])
        }
    },
    670: (e, r, t) => {
      var o = t(822),
        s = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      r.jsx = function(e, r, t) {
        var o, u = {},
          c = null,
          i = null;
        for (o in void 0 !== t && (c = "" + t), void 0 !== r.key && (c = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, o) && !l.hasOwnProperty(o) && (u[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === u[o] && (u[o] = r[o]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: i,
          props: u,
          _owner: a.current
        }
      }
    },
    157: (e, r, t) => {
      e.exports = t(670)
    }
  }
]);