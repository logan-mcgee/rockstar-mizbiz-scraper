"use strict";
(self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [95], {
    6095: (e, a, r) => {
      r.r(a), r.d(a, {
        FormMetaField: () => t,
        MetaFields: () => l,
        componentsForTinaParser: () => m,
        formTemplates: () => n,
        tinaBlockTemplates: () => s
      });
      const l = () => [{
          name: "title",
          label: "Title",
          component: "text"
        }],
        t = () => ({
          name: "meta",
          label: "Metadata",
          component: "group",
          description: "Title...",
          fields: [...l()]
        });
      var i = r(3616),
        o = r(559);
      const p = {
          label: "Item",
          key: "item-block",
          fields: [(0, i.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, i.translatedField)({
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
          defaultItem: () => (0, i.defaultItemUnique)(),
          itemProps: e => (0, i.itemPropsWithKey)(e, {
            label: `${e?.[i.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights Item]`
          })
        },
        m = {
          gtaoCareerProgressHub: {
            PageTemplate: r(4350).Z,
            HighlightsItem: p
          }
        },
        n = () => ({
          Grid: {
            label: "GTAO Business",
            templates: {
              "gtaoCareerProgressHub.PageTemplate": null,
              "gtaoCareerProgressHub.HighlightsItem": null
            }
          }
        }),
        s = {
          PageTemplate: () => ({
            label: "GTAO Career Progress Page Template",
            fields: [{
              label: "Hero Images",
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
            }, (0, i.translatedField)({
              name: "title",
              label: "Title",
              placeholder: 'Example: "Los Santos Drug Wars"',
              component: "text"
            }), (0, i.translatedField)({
              name: "category",
              label: "Category",
              placeholder: 'Example: "Businesses"',
              component: "text"
            }), (0, i.translatedField)({
              name: "summary",
              label: "Summary",
              component: "textarea"
            }), (0, i.translatedField)({
              name: "steps",
              label: "Getting Started Steps",
              component: "list",
              field: {
                component: "text"
              }
            }), (0, i.translatedField)({
              name: "guideLink",
              label: "Guide Link",
              description: "Relative link to the guide referenced in Getting Started",
              component: "text"
            }), {
              label: "Gallery Images",
              name: "images",
              component: "group",
              description: "Six images are necessary for component to render",
              fields: [{
                label: "First Image",
                name: "image1",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Second Image",
                name: "image2",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Third Image",
                name: "image3",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Fourth Image",
                name: "image4",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Fifth Image",
                name: "image5",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Sixth Image",
                name: "image6",
                component: "image",
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }]
            }, {
              label: "Highlights Section",
              name: "highlights",
              component: "blocks",
              templates: {
                HighlightsItem: p
              }
            }],
            defaultItem: () => (0, i.defaultItemUnique)(),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: `${e?.[i.TINA_MEMOQ_PREFIX]?.title??"NEW"} [GTAO Career Progress Page]`
            })
          }),
          HighlightsItem: p
        }
    }
  }
]);