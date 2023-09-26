"use strict";
(self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [334], {
    9334: (e, l, t) => {
      t.r(l), t.d(l, {
        Highlights: () => s,
        HighlightsItem: () => o,
        tinaBlockTemplates: () => m
      });
      var a = t(3616),
        i = t(559);
      const n = {
          label: "Item",
          key: "item-block",
          fields: [(0, a.translatedField)({
            name: "heading",
            label: "Heading",
            component: "text"
          }), {
            name: "disableHeading",
            label: "Disable Heading?",
            description: "Should heading be DISABLED for this highlight?",
            component: "toggle"
          }, (0, a.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, a.translatedField)({
            name: "summary",
            label: "Summary",
            component: "textarea"
          }), {
            label: "Image",
            name: "image",
            component: "image",
            uploadDir: i.uploadDir,
            parse: i.parse,
            previewSrc: i.previewSrc
          }],
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights Item]`
          })
        },
        o = n,
        m = {
          HighlightsItem: n
        },
        r = () => ({
          name: "customHeaderFont",
          label: "Set Header Font",
          component: "select",
          options: [{
            label: "--- SELECT ---",
            value: null
          }, {
            label: "RDR Ultra",
            value: "rdrUltra"
          }, {
            label: "Universal Cyrillic",
            value: "universalCyrillic"
          }]
        }),
        s = () => ({
          name: "highlightCollection",
          label: "Highlight Collection",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), {
            name: "highlights",
            label: "Highlights",
            component: "group-list",
            fields: [(0, a.translatedField)({
              name: "heading",
              label: "Heading",
              component: "text"
            }), {
              name: "disableHeading",
              label: "Disable Heading?",
              description: "Should heading be DISABLED for this highlight?",
              component: "toggle"
            }, (0, a.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, a.translatedField)({
              name: "summary",
              label: "Summary",
              component: "textarea"
            }), {
              label: "Image",
              name: "image",
              component: "image",
              uploadDir: i.uploadDir,
              parse: i.parse,
              previewSrc: i.previewSrc
            }],
            defaultItem: () => (0, a.defaultItemUnique)(),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?._memoq?.name??"New"} [Highlight Item]`
            })
          }, {
            name: "blockSettings",
            label: "Block Settings",
            component: "group",
            fields: [r(), {
              name: "navigationEnabled",
              label: "Enable Navigation Controls",
              component: "toggle",
              defaultValue: !0
            }]
          }],
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights]`
          })
        })
    }
  }
]);
//# sourceMappingURL=5c8eb240449e7cd9187a.js.map