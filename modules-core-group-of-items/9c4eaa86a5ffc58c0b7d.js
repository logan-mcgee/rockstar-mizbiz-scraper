"use strict";
(self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [4], {
    4: (e, t, l) => {
      l.r(t), l.d(t, {
        GroupOfItems: () => r
      });
      var a = l(616);
      const r = e => {
        let {
          game: t,
          filter: l = null,
          label: r = "Group of Image/Title/Text Blocks"
        } = e;
        return {
          name: "group_of_items",
          label: r,
          component: "group",
          fields: [(0, a.NameField)(), {
            label: "Render Template",
            name: "renderTemplate",
            description: "Set the render template",
            component: "select",
            options: [{
              value: "standard",
              label: "Standard"
            }, {
              value: "carousel",
              label: "Carousel"
            }, {
              value: "carousel-panorama",
              label: "Carousel Panorama"
            }]
          }, (0, a.ItemsField)({
            filter: l,
            game: t
          }), {
            label: "Static Copy",
            name: "text",
            description: "[CAROUSEL ONLY]: Title/text that will always be shown beneath the carousel.",
            component: "group",
            fields: [(0, a.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, a.translatedField)({
              label: "Description",
              name: "description",
              component: "html"
            })]
          }, (0, a.StyleField)({
            filter: "grid"
          }), (0, a.ClassNamesField)({
            filter: "grid"
          })],
          defaultItem: () => (0, a.defaultItemUnique)({
            renderTemplate: "standard",
            text: (0, a.defaultItemUnique)()
          }),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [${r}]` : `New [${r}]`
          })
        }
      }
    }
  }
]);