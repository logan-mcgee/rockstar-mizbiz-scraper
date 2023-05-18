/*! For license information please see 9cec23b472c4afc6762d.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [439], {
    439: (e, r, t) => {
      t.r(r), t.d(r, {
        ScrollProvider: () => s.ID,
        newswirePost: () => o
      });
      var o = t(719),
        s = t(62)
    },
    719: (e, r, t) => {
      t.r(r), t.d(r, {
        Consumer: () => l,
        Provider: () => u,
        useNewswirePost: () => a
      });
      var o = t(822),
        s = t(706);
      const n = (0, o.createContext)(),
        {
          Consumer: l
        } = n,
        u = e => {
          let {
            article: r,
            children: t
          } = e;
          return (0, s.jsx)(n.Provider, {
            value: r,
            children: t
          })
        },
        a = () => (0, o.useContext)(n)
    },
    62: (e, r, t) => {
      t.d(r, {
        ID: () => c,
        rj: () => u,
        vO: () => i
      });
      var o = t(859),
        s = t(822),
        n = t(706);
      const l = (0, o.makeVar)(!1),
        u = e => l(e),
        a = (0, s.createContext)(null),
        i = () => (0, s.useContext)(a),
        c = e => {
          let {
            children: r
          } = e;
          const [t, i] = (0, s.useState)(window.pageYOffset), [c, d] = (0, s.useState)(null), [f, v] = (0, s.useState)(!1), _ = (0, o.useReactiveVar)(l);
          let p;
          const w = () => {
            v(!0), clearTimeout(p), p = setTimeout((() => {
              v(!1)
            }), 2e3)
          };
          return (0, s.useEffect)((() => {
            let e;
            const r = () => {
              if (_) return void d(!1);
              const r = Math.max(0, window.pageYOffset);
              i(r), f || d(r > 60 && r > e), e = r
            };
            return window.addEventListener("scroll", r), () => {
              window.removeEventListener("scroll", r)
            }
          }), [f, _]), (0, s.useMemo)((() => (0, n.jsx)(a.Provider, {
            value: {
              freezeUserShouldSeeMore: _,
              pageYOffset: t,
              pauseUserShouldSeeMore: w,
              setFreezeUserShouldSeeMore: u,
              userShouldSeeMore: c
            },
            children: r
          })), [_, t, w, c])
        }
    },
    115: (e, r, t) => {
      var o = t(822),
        s = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      r.jsx = function(e, r, t) {
        var o, a = {},
          i = null,
          c = null;
        for (o in void 0 !== t && (i = "" + t), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (c = r.ref), r) n.call(r, o) && !u.hasOwnProperty(o) && (a[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === a[o] && (a[o] = r[o]);
        return {
          $$typeof: s,
          type: e,
          key: i,
          ref: c,
          props: a,
          _owner: l.current
        }
      }
    },
    706: (e, r, t) => {
      e.exports = t(115)
    }
  }
]);