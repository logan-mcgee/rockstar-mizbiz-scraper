/*! For license information please see 7a5d99336f446c2e15b2.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [944], {
    6944: (e, r, o) => {
      o.r(r), o(7842);
      var t = o(6331),
        n = o(170),
        a = o(1424),
        s = o(9929),
        l = o(4859),
        d = o(1570),
        i = o(1458),
        u = o(610),
        c = o(6160);
      const p = window?.env?.graphEnv ?? "prod",
        _ = () => {
          const [e, r] = (0, a.useSearchParams)(), o = "true" === e.get("autoplay"), t = Number(e.get("id")), n = e.get("resolution") ?? null, l = Number(e.get("start")) ?? 0;
          return (0, c.jsx)(s.ResizeProvider, {
            children: (0, c.jsx)(i.GtmProvider, {
              children: (0, c.jsx)(d.IntlProvider, {
                children: (0, c.jsx)(u.Z, {
                  autoplay: o,
                  id: t,
                  context: "embed",
                  resolution: n,
                  start: l,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    r({
                      autoplay: o,
                      id: e,
                      resolution: n
                    })
                  }
                })
              })
            })
          })
        },
        m = (0, l.withRockstarGraph)((() => (0, c.jsx)(a.BrowserRouter, {
          children: (0, c.jsx)(_, {})
        })), {
          env: p
        }),
        v = window?.env?.gtmId ?? null;
      (0, t.init)({
        id: v
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, n.s)(y).render((0, c.jsx)(m, {}))
    },
    170: (e, r, o) => {
      var t = o(8677);
      r.s = t.createRoot, t.hydrateRoot
    },
    3970: (e, r, o) => {
      var t = o(4932),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, r, o) {
        var t, a = {},
          i = null,
          u = null;
        for (t in void 0 !== o && (i = "" + o), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (u = r.ref), r) s.call(r, t) && !d.hasOwnProperty(t) && (a[t] = r[t]);
        if (e && e.defaultProps)
          for (t in r = e.defaultProps) void 0 === a[t] && (a[t] = r[t]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: u,
          props: a,
          _owner: l.current
        }
      }
      r.Fragment = a, r.jsx = i, r.jsxs = i
    },
    6160: (e, r, o) => {
      e.exports = o(3970)
    }
  }
]);