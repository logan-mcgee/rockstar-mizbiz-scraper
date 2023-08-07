"use strict";
(self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [215], {
    6215: (e, l, a) => {
      a.r(l), a.d(l, {
        RockstarVideoPlayer: () => c,
        VideoField: () => u,
        default: () => g
      });
      var i = a(4859),
        t = a(3761),
        o = a(3616),
        d = a(3374),
        r = a(8976),
        s = a(3653),
        n = a.n(s),
        m = a(6160);
      const p = e => {
          let {
            field: l,
            input: a,
            meta: o
          } = e;
          const {
            data: s
          } = (0, i.useQuery)(t.VideosList, {
            variables: {
              limit: 1e3
            }
          }), p = n()(s?.videos?.results).groupBy("game.title").map(((e, l) => ({
            gameTitle: l,
            videos: e.map((e => ({
              id: e.id,
              title: e.title
            })))
          }))).value();
          return (0, m.jsx)(d.FieldWrapper, {
            name: a.name || l.name || l.label,
            label: l.label,
            description: l.description,
            meta: o,
            children: s && p?.length ? (0, m.jsxs)("select", {
              ...a,
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
            }) : (0, m.jsx)(r.DotLoader, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        u = function() {
          let {
            label: e = "Video",
            name: l = "id"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e,
            name: l,
            component: e => {
              let {
                field: l,
                input: a,
                meta: i
              } = e;
              return (0, m.jsx)(p, {
                field: l,
                input: a,
                meta: i
              })
            }
          }
        },
        c = () => ({
          label: "Video",
          fields: [(0, o.NameField)(), u(), {
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
        g = c
    }
  }
]);