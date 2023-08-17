"use strict";
(self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [334], {
    334: (e, l, a) => {
      a.r(l), a.d(l, {
        Highlights: () => p,
        HighlightsItem: () => i,
        tinaBlockTemplates: () => r
      });
      var t = a(616),
        o = a(559);
      const n = {
          label: "Item",
          key: "item-block",
          fields: [(0, t.translatedField)({
            name: "subTitle",
            label: "SubTitle",
            component: "text"
          }), (0, t.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, t.translatedField)({
            name: "summary",
            label: "Summary",
            component: "textarea"
          }), {
            label: "Image",
            name: "image",
            component: "image",
            uploadDir: o.uploadDir,
            parse: o.parse,
            previewSrc: o.previewSrc
          }],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights Item]`
          })
        },
        i = n,
        r = {
          HighlightsItem: n
        },
        m = () => ({
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
        d = () => ({
          name: "contentBlock",
          label: "Content Block",
          component: "group",
          fields: [{
            name: "backgroundColor",
            label: "Background Color",
            component: "color"
          }, {
            label: "Border Style",
            name: "--image-border-style",
            description: "(ex. 1px solid #fff)",
            component: "text"
          }, {
            label: "Border Radius",
            name: "--image-border-radius",
            component: "text"
          }]
        }),
        s = () => ({
          name: "backgroundImageGroup",
          label: "Background and Mask",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image and Mask",
            component: "group",
            fields: [{
              name: "image",
              label: "Mobile Image",
              component: "image",
              parse: o.parse,
              previewSrc: o.previewSrc,
              uploadDir: o.uploadDir
            }, {
              name: "mask",
              label: "Mobile Mask",
              component: "image",
              parse: o.parse,
              previewSrc: o.previewSrc,
              uploadDir: o.uploadDir
            }]
          }, {
            name: "desktop",
            label: "Desktop Image and Mask",
            component: "group",
            fields: [{
              name: "image",
              label: "Desktop Image",
              component: "image",
              parse: o.parse,
              previewSrc: o.previewSrc,
              uploadDir: o.uploadDir
            }, {
              name: "mask",
              label: "Desktop Mask",
              component: "image",
              parse: o.parse,
              previewSrc: o.previewSrc,
              uploadDir: o.uploadDir
            }, (0, t.translatedField)({
              name: "backgroundAttachment",
              label: "Background Attachment",
              component: "select",
              options: [{
                label: "--- Select ---",
                value: null
              }, {
                label: "scroll",
                value: "scroll"
              }, {
                label: "fixed",
                value: "fixed"
              }, {
                label: "local",
                value: "local"
              }, {
                label: "inherit",
                value: "inherit"
              }, {
                label: "initial",
                value: "initial"
              }, {
                label: "revert",
                value: "revert"
              }, {
                label: "revert-layer",
                value: "revert-layer"
              }, {
                label: "unset",
                value: "unset"
              }]
            }), (0, t.translatedField)({
              name: "backgroundClip",
              label: "Background Clip",
              component: "select",
              options: [{
                label: "--- Select ---",
                value: null
              }, {
                label: "border-box",
                value: "border-box"
              }, {
                label: "padding-box",
                value: "padding-box"
              }, {
                label: "content-box",
                value: "content-box"
              }, {
                label: "text",
                value: "text"
              }, {
                label: "inherit",
                value: "inherit"
              }, {
                label: "initial",
                value: "initial"
              }, {
                label: "revert",
                value: "revert"
              }, {
                label: "revert-layer",
                value: "revert-layer"
              }, {
                label: "unset",
                value: "unset"
              }]
            }), (0, t.translatedField)({
              name: "backgroundColor",
              label: "Background Color",
              component: "color"
            }), (0, t.translatedField)({
              name: "backgroundOrigin",
              label: "Background Orgin",
              component: "select",
              options: [{
                label: "--- Select ---",
                value: null
              }, {
                label: "border-box",
                value: "border-box"
              }, {
                label: "padding-box",
                value: "padding-box"
              }, {
                label: "content-box",
                value: "content-box"
              }]
            }), (0, t.translatedField)({
              name: "backgroundPosition",
              label: "Background Position",
              component: "text"
            }), (0, t.translatedField)({
              name: "backgroundRepeat",
              label: "Background Repeat",
              component: "text"
            }), (0, t.translatedField)({
              name: "backgroundSize",
              label: "Background Size",
              component: "text"
            })]
          }],
          defaultItem: {
            mobile: void 0,
            desktop: void 0
          }
        }),
        p = () => ({
          name: "highlightCollection",
          label: "Highlight Collection",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), {
            name: "highlights",
            label: "Highlights",
            component: "group-list",
            fields: [(0, t.translatedField)({
              name: "subTitle",
              label: "SubTitle",
              component: "text"
            }), (0, t.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, t.translatedField)({
              name: "summary",
              label: "Summary",
              component: "textarea"
            }), {
              label: "Image",
              name: "image",
              component: "image",
              uploadDir: o.uploadDir,
              parse: o.parse,
              previewSrc: o.previewSrc
            }],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?._memoq?.name??"New"} [Highlight Item]`
            })
          }, {
            name: "blockSettings",
            label: "Block Settings",
            component: "group",
            fields: [m(), {
              name: "navigationEnabled",
              label: "Enable Navigation Controls",
              component: "toggle",
              defaultValue: !0
            }, d(), s()]
          }],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights]`
          })
        })
    }
  }
]);