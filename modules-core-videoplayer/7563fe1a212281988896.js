/*! For license information please see 7563fe1a212281988896.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [944], {
    6944: (e, r, o) => {
      o.r(r), o(7842);
      var t = o(6331),
        a = o(170),
        s = o(1424),
        n = o(9929),
        l = o(4859),
        i = o(9878),
        d = o(1458),
        c = o(1570),
        u = o(610),
        p = o(6160);
      const _ = window?.env?.graphEnv ?? "prod",
        m = () => {
          const [e, r] = (0, s.useSearchParams)(), o = (0, n.useLocale)(), t = "true" === e.get("autoplay"), a = Number(e.get("id")), l = e.get("resolution") ?? null, _ = Number(e.get("start")) ?? 0;
          return (0, p.jsx)(n.ResizeProvider, {
            children: (0, p.jsx)(d.GtmProvider, {
              children: (0, p.jsx)(i.Pj, {
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
        y = (0, l.withRockstarGraph)((() => (0, p.jsx)(s.BrowserRouter, {
          children: (0, p.jsx)(m, {})
        })), {
          env: _
        }),
        f = window?.env?.gtmId ?? null;
      (0, t.init)({
        id: f
      });
      const v = document.createElement("main");
      document.body.appendChild(v), (0, a.s)(v).render((0, p.jsx)(y, {}))
    },
    170: (e, r, o) => {
      var t = o(8677);
      r.s = t.createRoot, t.hydrateRoot
    },
    3970: (e, r, o) => {
      var t = o(4932),
        a = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, r, o) {
        var t, s = {},
          d = null,
          c = null;
        for (t in void 0 !== o && (d = "" + o), void 0 !== r.key && (d = "" + r.key), void 0 !== r.ref && (c = r.ref), r) n.call(r, t) && !i.hasOwnProperty(t) && (s[t] = r[t]);
        if (e && e.defaultProps)
          for (t in r = e.defaultProps) void 0 === s[t] && (s[t] = r[t]);
        return {
          $$typeof: a,
          type: e,
          key: d,
          ref: c,
          props: s,
          _owner: l.current
        }
      }
      r.Fragment = s, r.jsx = d, r.jsxs = d
    },
    6160: (e, r, o) => {
      e.exports = o(3970)
    }
  }
]);
//# sourceMappingURL=7563fe1a212281988896.js.map