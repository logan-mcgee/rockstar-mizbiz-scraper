! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "148acfae-c952-4f97-bc99-163216cdbb2b", e._sentryDebugIdIdentifier = "sentry-dbid-148acfae-c952-4f97-bc99-163216cdbb2b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "0fac9d39cdee1a8eccecb716cfcdd18497dbe214",
  packageName: "@rockstargames/modules-gtao-career-progress-hub",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "0fac9d39cdee1a8eccecb716cfcdd18497dbe214"
}, (self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [896], {
    9896: (e, a, t) => {
      t.r(a), t.d(a, {
        FormMetaField: () => n,
        MetaFields: () => l,
        componentsForTinaParser: () => s,
        formTemplates: () => d,
        tinaBlockTemplates: () => m
      });
      const l = () => [{
          name: "title",
          label: "Title",
          component: "text"
        }],
        n = () => ({
          name: "meta",
          label: "Metadata",
          component: "group",
          description: "Title...",
          fields: [...l()]
        });
      var r = t(9468),
        o = t(5652);
      const i = {
          label: "Item",
          key: "item-block",
          fields: [(0, r.translatedField)({
            name: "heading",
            label: "Heading",
            component: "text"
          }), {
            name: "disableHeading",
            label: "Disable Heading?",
            description: "Should heading be DISABLED for this highlight?",
            component: "toggle"
          }, (0, r.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, r.translatedField)({
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
          defaultItem: () => (0, r.defaultItemUnique)(),
          itemProps: e => (0, r.itemPropsWithKey)(e, {
            label: `${e?.[r.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights Item]`
          })
        },
        s = {
          gtaoCareerProgressHub: {
            PageTemplate: t(1230).c,
            HighlightsItem: i
          }
        },
        d = () => ({
          Grid: {
            label: "GTAO Business",
            templates: {
              "gtaoCareerProgressHub.PageTemplate": null,
              "gtaoCareerProgressHub.HighlightsItem": null
            }
          }
        }),
        m = {
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
                fields: [(0, r.translatedField)({
                  name: "content",
                  label: "CTA Text",
                  component: "text"
                }), (0, r.translatedField)({
                  name: "href",
                  label: "href",
                  component: "text"
                }), (0, r.TranslationKey)({
                  description: "This field is a temporary workaround for having to re-create components when a new translated field is added. This value must begin with `key_` and MUST BE UNIQUE. You can use the name of the page (ex. `key_sanandreasmercenaries`). It must be unique on the page so you can also consider using the block's label or incrementing your keys."
                }), (0, r.GtmField)()]
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
            }, (0, r.translatedField)({
              name: "title",
              label: "Title",
              placeholder: 'Example: "Los Santos Drug Wars"',
              component: "text"
            }), (0, r.translatedField)({
              name: "category",
              label: "Category",
              placeholder: 'Example: "Businesses"',
              component: "text"
            }), (0, r.translatedField)({
              name: "summary",
              label: "Summary",
              component: "textarea"
            }), (0, r.translatedField)({
              name: "steps",
              label: "Getting Started Steps",
              component: "list",
              field: {
                component: "text"
              }
            }), (0, r.translatedField)({
              name: "guideLink",
              label: "Guide Link",
              description: "Relative link to the guide referenced in Getting Started",
              component: "text"
            }), (0, r.translatedField)({
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
            defaultItem: () => (0, r.defaultItemUnique)({
              heroImages: (0, r.defaultItemUnique)({
                content: (0, r.defaultItemUnique)({}),
                href: (0, r.defaultItemUnique)({})
              })
            }),
            itemProps: e => (0, r.itemPropsWithKey)(e, {
              label: `${e?.[r.TINA_MEMOQ_PREFIX]?.title??"NEW"} [GTAO Career Progress Page]`
            })
          }),
          HighlightsItem: i
        }
    }
  }
]);
//# sourceMappingURL=fc6d8c8168b1905b75f91651b72e4f3a.js.map