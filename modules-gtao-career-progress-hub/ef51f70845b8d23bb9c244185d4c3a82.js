"use strict";
(self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [501], {
    8501: (e, a, t) => {
      t.r(a), t.d(a, {
        FormMetaField: () => r,
        MetaFields: () => l,
        componentsForTinaParser: () => s,
        formTemplates: () => m,
        tinaBlockTemplates: () => p
      });
      const l = () => [{
          name: "title",
          label: "Title",
          component: "text"
        }],
        r = () => ({
          name: "meta",
          label: "Metadata",
          component: "group",
          description: "Title...",
          fields: [...l()]
        });
      var n = t(3616),
        o = t(559);
      const i = {
          label: "Item",
          key: "item-block",
          fields: [(0, n.translatedField)({
            name: "heading",
            label: "Heading",
            component: "text"
          }), {
            name: "disableHeading",
            label: "Disable Heading?",
            description: "Should heading be DISABLED for this highlight?",
            component: "toggle"
          }, (0, n.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, n.translatedField)({
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
          defaultItem: () => (0, n.defaultItemUnique)(),
          itemProps: e => (0, n.itemPropsWithKey)(e, {
            label: `${e?.[n.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights Item]`
          })
        },
        s = {
          gtaoCareerProgressHub: {
            PageTemplate: t(1387).Z,
            HighlightsItem: i
          }
        },
        m = () => ({
          Grid: {
            label: "GTAO Business",
            templates: {
              "gtaoCareerProgressHub.PageTemplate": null,
              "gtaoCareerProgressHub.HighlightsItem": null
            }
          }
        }),
        p = {
          PageTemplate: () => ({
            label: "GTAO Career Progress Page Template",
            fields: [{
              label: "Hero Options",
              name: "heroImages",
              component: "group",
              fields: [{
                label: "Content Pack Logo",
                name: "brandImage",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Mobile Background Image",
                name: "backgroundMobileImage",
                description: "(Optional)",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Desktop Background Image",
                name: "backgroundDesktopImage",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Mobile Layered Image",
                name: "layeredMobileImage",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Desktop Layered Image",
                name: "layeredDesktopImage",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                name: "ctaFields",
                label: "CTA Options",
                component: "group",
                description: "Fields for configuring a CTA button underneath the content pack logo.",
                fields: [(0, n.translatedField)({
                  name: "content",
                  label: "CTA Text",
                  component: "text"
                }), (0, n.translatedField)({
                  name: "href",
                  label: "href",
                  component: "text"
                }), {
                  name: "key",
                  label: "Translation Key",
                  component: "text",
                  description: "This field is a temporary workaround for having to re-create components when a new translated field is added. This value must begin with `key_` and MUST BE UNIQUE. You can use the name of the page (ex. `key_sanandreasmercenaries`). It must be unique on the page so you can also consider using the block's label or incrementing your keys."
                }, (0, n.GtmField)()]
              }]
            }, {
              label: "Awards Key",
              name: "awardsKey",
              component: "text",
              description: "Key used to retrieve Awards (achievement) data",
              placeholder: 'Example: "VICTORY"',
              clearable: !0
            }, {
              label: "Progress & Rewards Key",
              name: "rewardsKey",
              component: "text",
              description: "Key used to retrieve Progress & Rewards data",
              placeholder: 'Example: "VICTORY"',
              clearable: !0
            }, (0, n.translatedField)({
              name: "title",
              label: "Title",
              placeholder: 'Example: "Los Santos Drug Wars"',
              component: "text"
            }), (0, n.translatedField)({
              name: "category",
              label: "Category",
              placeholder: 'Example: "Businesses"',
              component: "text"
            }), (0, n.translatedField)({
              name: "summary",
              label: "Summary",
              component: "textarea"
            }), (0, n.translatedField)({
              name: "steps",
              label: "Getting Started Steps",
              component: "list",
              field: {
                component: "text"
              }
            }), (0, n.translatedField)({
              name: "guideLink",
              label: "Guide Link",
              description: "Relative link to the guide referenced in Getting Started",
              component: "text"
            }), (0, n.translatedField)({
              name: "subtitle",
              label: "Highlights Subtitle",
              description: "Highlights collection title",
              component: "text"
            }), {
              label: "Highlights Section",
              name: "highlights",
              component: "blocks",
              templates: {
                HighlightsItem: i
              }
            }],
            defaultItem: () => (0, n.defaultItemUnique)({
              heroImages: (0, n.defaultItemUnique)({
                content: (0, n.defaultItemUnique)({}),
                href: (0, n.defaultItemUnique)({})
              })
            }),
            itemProps: e => (0, n.itemPropsWithKey)(e, {
              label: `${e?.[n.TINA_MEMOQ_PREFIX]?.title??"NEW"} [GTAO Career Progress Page]`
            })
          }),
          HighlightsItem: i
        }
    }
  }
]);