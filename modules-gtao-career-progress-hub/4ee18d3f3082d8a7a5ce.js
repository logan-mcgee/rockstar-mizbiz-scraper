"use strict";
(self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [517], {
    5517: (e, a, r) => {
      r.r(a), r.d(a, {
        FormMetaField: () => l,
        MetaFields: () => t,
        componentsForTinaParser: () => o,
        formTemplates: () => s,
        tinaBlockTemplates: () => i
      });
      const t = () => [{
          name: "title",
          label: "Title",
          component: "text"
        }],
        l = () => ({
          name: "meta",
          label: "Metadata",
          component: "group",
          description: "Title...",
          fields: [...t()]
        }),
        o = {
          gtaoCareerProgressHub: {
            PageTemplate: r(2271).Z
          }
        },
        s = () => ({
          Grid: {
            label: "GTAO Business",
            templates: {
              "gtaoCareerProgressHub.PageTemplate": null
            }
          }
        });
      var n = r(3616),
        p = r(559);
      const i = {
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
              uploadDir: p.uploadDir,
              parse: p.parse,
              previewSrc: p.previewSrc
            }, {
              label: "Mobile Background Image",
              name: "backgroundMobileImage",
              description: "(Optional)",
              component: "image",
              uploadDir: p.uploadDir,
              parse: p.parse,
              previewSrc: p.previewSrc
            }, {
              label: "Desktop Background Image",
              name: "backgroundDesktopImage",
              component: "image",
              uploadDir: p.uploadDir,
              parse: p.parse,
              previewSrc: p.previewSrc
            }, {
              label: "Mobile Layered Image",
              name: "layeredMobileImage",
              component: "image",
              uploadDir: p.uploadDir,
              parse: p.parse,
              previewSrc: p.previewSrc
            }, {
              label: "Desktop Layered Image",
              name: "layeredDesktopImage",
              component: "image",
              uploadDir: p.uploadDir,
              parse: p.parse,
              previewSrc: p.previewSrc
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
          })],
          defaultItem: () => (0, n.defaultItemUnique)(),
          itemProps: e => (0, n.itemPropsWithKey)(e, {
            label: `${e?.[n.TINA_MEMOQ_PREFIX]?.title??"NEW"} [GTAO Career Progress Page]`
          })
        })
      }
    }
  }
]);
//# sourceMappingURL=4ee18d3f3082d8a7a5ce.js.map