"use strict";
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [723], {
    723: (e, a, d) => {
      d.r(a), d.d(a, {
        PlayerWithInfo: () => c,
        default: () => l
      });
      var s = d(976),
        t = d(689);
      const r = {
        embed: "edc5d4b57a6ce58d98e1",
        details: "ed0e45925b31e0dd9b3d",
        top: "ca606836a2761a2226d8"
      };
      var i = d(322);
      const c = e => {
          let {
            video: a,
            autoplay: d = !0
          } = e;
          return (0, i.jsxs)("section", {
            className: r.marquee,
            children: [(0, i.jsx)("div", {
              className: r.embed,
              children: (0, i.jsx)(t.Z, {
                id: a.id,
                context: "site",
                autoplay: d,
                wrapper: !1
              })
            }), (0, i.jsxs)("div", {
              className: r.details,
              children: [(0, i.jsxs)("div", {
                className: r.top,
                children: [(0, i.jsx)("h5", {
                  children: (0, i.jsx)(s.A, {
                    to: `/videos?type=game&gameId=${a?.game?.sku_id??a.game.id}`,
                    children: a.game.title
                  })
                }), (0, i.jsx)("time", {
                  dateTime: a.created,
                  children: a.created_formatted
                })]
              }), (0, i.jsx)("h2", {
                children: a.title
              }), (0, i.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: a.description
                }
              })]
            })]
          })
        },
        l = t.Z
    }
  }
]);