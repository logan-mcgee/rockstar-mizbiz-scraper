"use strict";
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [352], {
    352: (e, a, l) => {
      l.r(a), l.d(a, {
        RockstarVideoPlayer: () => p,
        default: () => c
      });
      var i = l(859),
        t = l(761),
        o = l(616),
        d = l(374),
        s = l(976),
        r = l(311),
        n = l.n(r),
        m = l(322);
      const p = () => ({
          label: "Video",
          fields: [(0, o.NameField)(), {
            label: "Video",
            name: "id",
            component: e => {
              let {
                field: a,
                input: l,
                meta: o
              } = e;
              const {
                data: r
              } = (0, i.useQuery)(t.VideosList, {
                variables: {
                  limit: 1e3
                }
              }), p = n()(r?.videos?.results).groupBy("game.title").map(((e, a) => ({
                gameTitle: a,
                videos: e.map((e => ({
                  id: e.id,
                  title: e.title
                })))
              }))).value();
              return (0, m.jsx)(d.FieldWrapper, {
                name: l.name || a.name || a.label,
                label: a.label,
                description: a.description,
                meta: o,
                children: r && p?.length ? (0, m.jsxs)("select", {
                  ...l,
                  children: [(0, m.jsx)("option", {
                    value: "",
                    children: "-- Select a video --"
                  }), p.map((e => (0, m.jsx)("optgroup", {
                    label: e.gameTitle,
                    children: e.videos.map((e => (0, m.jsxs)("option", {
                      value: e.id,
                      children: ["(", e.id, ")", " ", e.title]
                    }, e.id)))
                  }, e.gameTitle)))]
                }) : (0, m.jsx)(s.DotLoader, {
                  color: "var(--tina-color-primary, #2296fe)"
                })
              })
            }
          }, {
            name: "autoplay",
            label: "Auto Play",
            description: "Should the video play as soon as it is loaded?",
            component: "toggle"
          }, (0, o.LeadAssetToggle)(), (0, o.ImageField)({
            label: "Background Image"
          })],
          defaultItem: () => (0, o.defaultItemUnique)({
            wrapper: !0,
            autoplay: !1
          }),
          itemProps: e => (0, o.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [Video]` : "New [Video]"
          })
        }),
        c = p
    }
  }
]);