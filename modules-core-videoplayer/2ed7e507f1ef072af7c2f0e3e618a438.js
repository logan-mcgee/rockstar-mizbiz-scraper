/*! For license information please see 2ed7e507f1ef072af7c2f0e3e618a438.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [771], {
    441: (e, r, o) => {
      var t = o(9087);
      r.s = t.createRoot, t.hydrateRoot
    },
    3032: (e, r, o) => {
      var t = o(927),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, r, o) {
        var t, n = {},
          d = null,
          c = null;
        for (t in void 0 !== o && (d = "" + o), void 0 !== r.key && (d = "" + r.key), void 0 !== r.ref && (c = r.ref), r) s.call(r, t) && !i.hasOwnProperty(t) && (n[t] = r[t]);
        if (e && e.defaultProps)
          for (t in r = e.defaultProps) void 0 === n[t] && (n[t] = r[t]);
        return {
          $$typeof: a,
          type: e,
          key: d,
          ref: c,
          props: n,
          _owner: l.current
        }
      }
      r.Fragment = n, r.jsx = d, r.jsxs = d
    },
    3705: (e, r, o) => {
      e.exports = o(3032)
    },
    771: (e, r, o) => {
      o.r(r), o(7842);
      var t = o(6331),
        a = o(441),
        n = o(4175),
        s = o(9929),
        l = o(4859),
        i = o(8601),
        d = o(1458),
        c = o(1570),
        u = o(9110),
        p = o(3705);
      const _ = window?.env?.graphEnv ?? "prod",
        m = () => {
          const [e, r] = (0, n.useSearchParams)(), o = (0, s.useLocale)(), t = "true" === e.get("autoplay"), a = Number(e.get("id")), l = e.get("resolution") ?? null, _ = Number(e.get("start")) ?? 0;
          return (0, p.jsx)(s.ResizeProvider, {
            children: (0, p.jsx)(d.GtmProvider, {
              children: (0, p.jsx)(i.IntlProvider, {
                locales: c.intlMessages,
                lang: o,
                children: (0, p.jsx)(u.Z, {
                  autoplay: t,
                  id: a,
                  context: "embed",
                  resolution: l,
                  start: _,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    r({
                      autoplay: t,
                      id: e,
                      resolution: l
                    })
                  }
                })
              })
            })
          })
        },
        v = (0, l.withRockstarGraph)((() => (0, p.jsx)(n.BrowserRouter, {
          children: (0, p.jsx)(m, {})
        })), {
          env: _
        }),
        y = window?.env?.gtmId ?? null;
      (0, t.init)({
        id: y
      });
      const f = document.createElement("main");
      document.body.appendChild(f), (0, a.s)(f).render((0, p.jsx)(v, {}))
    }
  }
]);