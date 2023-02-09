"use strict";
(self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [593], {
    4593: (e, l, t) => {
      t.r(l), t.d(l, {
        UGCJobSpotlight: () => s
      });
      var a = t(3616);
      const s = e => {
        let {
          defaults: l = {},
          game: t = null,
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
            game: t,
            defaults: l
          })],
          defaultItem: () => (0, a.defaultItemUnique)({}),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: null != e && e.name ? `${e.name} [User Created Job]` : "New [User Created Job]"
          })
        }
      }
    }
  }
]);