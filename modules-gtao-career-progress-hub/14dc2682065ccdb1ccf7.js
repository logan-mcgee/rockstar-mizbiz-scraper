"use strict";
(self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [517], {
    5517: (e, a, r) => {
      r.r(a), r.d(a, {
        FormMetaField: () => o,
        MetaFields: () => l,
        componentsForTinaParser: () => t,
        formTemplates: () => p,
        tinaBlockTemplates: () => m
      });
      const l = () => [{
          name: "title",
          label: "Title",
          component: "text"
        }],
        o = () => ({
          name: "meta",
          label: "Metadata",
          component: "group",
          description: "Title...",
          fields: [...l()]
        }),
        t = {
          gtaoCareerProgressHub: {
            PageTemplate: r(2271).Z
          }
        },
        p = () => ({
          Grid: {
            label: "GTAO Business",
            templates: {
              "gtaoCareerProgressHub.PageTemplate": null
            }
          }
        });
      var i = r(3616),
        n = r(559);
      const m = {
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
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Mobile Background Image",
              name: "backgroundMobileImage",
              description: "(Optional)",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Desktop Background Image",
              name: "backgroundDesktopImage",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Mobile Layered Image",
              name: "layeredMobileImage",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Desktop Layered Image",
              name: "layeredDesktopImage",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
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
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Second Image",
              name: "image2",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Third Image",
              name: "image3",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Fourth Image",
              name: "image4",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Fifth Image",
              name: "image5",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, {
              label: "Sixth Image",
              name: "image6",
              component: "image",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }]
          }],
          defaultItem: () => (0, i.defaultItemUnique)(),
          itemProps: e => (0, i.itemPropsWithKey)(e, {
            label: `${e?.[i.TINA_MEMOQ_PREFIX]?.title??"NEW"} [GTAO Career Progress Page]`
          })
        })
      }
    }
  }
]);