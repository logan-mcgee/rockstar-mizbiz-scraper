"use strict";
(self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [296], {
    7296: (e, t, l) => {
      l.r(t), l.d(t, {
        UGCJobSpotlight: () => s
      });
      var a = l(3616);
      const s = e => {
        let {
          defaults: t = {},
          game: l = null,
          filter: s = null
        } = e;
        const o = [(0, a.NameField)(), {
          name: "contentId",
          label: "Job ID",
          component: "text"
        }, {
          name: "title",
          label: "Game",
          component: "select",
          options: [{
            value: "-- Select Game Title --",
            label: ""
          }, {
            value: "gtav",
            label: "GTA V"
          }]
        }, (0, a.StyleField)({
          filter: "rating"
        })];
        return {
          label: "User Created Job",
          component: "group",
          fields: [...o, (0, a.MediaQueryField)({
            filter: s,
            fields: o,
            game: l,
            defaults: t
          })],
          defaultItem: () => (0, a.defaultItemUnique)({}),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [User Created Job]` : "New [User Created Job]"
          })
        }
      }
    }
  }
]);